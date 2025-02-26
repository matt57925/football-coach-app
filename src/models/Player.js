/**
 * Modèle de données pour les joueurs
 * 
 * Ce fichier contient la structure de données et les fonctions auxiliaires 
 * pour manipuler les objets de type Joueur.
 */

import { firestore } from '../services/firebase/config';
import { 
  collection, 
  addDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';

// Constantes pour les positions
export const POSITIONS = {
  GOALKEEPER: 'GARDIEN',
  DEFENDER: 'DEFENSEUR',
  MIDFIELDER: 'MILIEU',
  FORWARD: 'ATTAQUANT'
};

// Constantes pour les pieds forts
export const FOOT = {
  RIGHT: 'DROIT',
  LEFT: 'GAUCHE',
  BOTH: 'AMBIDEXTRE'
};

/**
 * Classe représentant un joueur
 */
class Player {
  /**
   * Crée une instance de joueur avec des valeurs par défaut
   */
  constructor(data = {}) {
    this.id = data.id || null;
    this.nom = data.nom || '';
    this.prenom = data.prenom || '';
    this.dateNaissance = data.dateNaissance || null;
    this.nationalite = data.nationalite || 'France';
    this.photo = data.photo || null;
    this.poste = data.poste || POSITIONS.MIDFIELDER;
    this.piedFort = data.piedFort || FOOT.RIGHT;
    this.taille = data.taille || 0;
    this.poids = data.poids || 0;
    
    // Compétences techniques
    this.competences = {
      technique: {
        dribble: data.competences?.technique?.dribble || 50,
        passe: data.competences?.technique?.passe || 50,
        frappe: data.competences?.technique?.frappe || 50,
        jeuDeTete: data.competences?.technique?.jeuDeTete || 50,
      },
      physique: {
        vitesse: data.competences?.physique?.vitesse || 50,
        endurance: data.competences?.physique?.endurance || 50,
        force: data.competences?.physique?.force || 50,
        agilite: data.competences?.physique?.agilite || 50,
      },
      mental: {
        espritEquipe: data.competences?.mental?.espritEquipe || 50,
        discipline: data.competences?.mental?.discipline || 50,
        motivation: data.competences?.mental?.motivation || 50,
      }
    };
    
    // Expérience
    this.experience = {
      anneesExperience: data.experience?.anneesExperience || 0,
      clubsPrecedents: data.experience?.clubsPrecedents || [],
    };
    
    // Informations de contact
    this.contact = {
      telephone: data.contact?.telephone || '',
      email: data.contact?.email || '',
      parentsContact: {
        nom: data.contact?.parentsContact?.nom || '',
        telephone: data.contact?.parentsContact?.telephone || '',
        email: data.contact?.parentsContact?.email || '',
      }
    };
    
    // Statistiques
    this.statistiques = {
      matchsJoues: data.statistiques?.matchsJoues || 0,
      buts: data.statistiques?.buts || 0,
      passes: data.statistiques?.passes || 0,
      cartons: {
        jaunes: data.statistiques?.cartons?.jaunes || 0,
        rouges: data.statistiques?.cartons?.rouges || 0,
        blancs: data.statistiques?.cartons?.blancs || 0,
      }
    };
    
    // Présence
    this.presence = {
      tauxPresenceEntrainements: data.presence?.tauxPresenceEntrainements || 0,
      tauxPresenceMatchs: data.presence?.tauxPresenceMatchs || 0,
    };
    
    // Liens vers d'autres collections
    this.equipeId = data.equipeId || null;
    
    // Métadonnées
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
  }

  /**
   * Calcule l'âge du joueur
   * @returns {Number} L'âge du joueur en années
   */
  getAge() {
    if (!this.dateNaissance) return null;
    
    const today = new Date();
    const birthDate = new Date(this.dateNaissance);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  /**
   * Calcule la note globale du joueur
   * @returns {Number} La note globale (0-100)
   */
  getOverallRating() {
    // Poids pour chaque catégorie selon le poste
    let weights = {
      technique: 0.4,
      physique: 0.4,
      mental: 0.2
    };
    
    // Ajuster les poids selon le poste
    switch (this.poste) {
      case POSITIONS.GOALKEEPER:
        weights = { technique: 0.3, physique: 0.4, mental: 0.3 };
        break;
      case POSITIONS.DEFENDER:
        weights = { technique: 0.3, physique: 0.5, mental: 0.2 };
        break;
      case POSITIONS.MIDFIELDER:
        weights = { technique: 0.5, physique: 0.3, mental: 0.2 };
        break;
      case POSITIONS.FORWARD:
        weights = { technique: 0.6, physique: 0.3, mental: 0.1 };
        break;
    }
    
    // Calcul des moyennes par catégorie
    const techniqueMean = Object.values(this.competences.technique).reduce((sum, val) => sum + val, 0) 
      / Object.keys(this.competences.technique).length;
    
    const physiqueMean = Object.values(this.competences.physique).reduce((sum, val) => sum + val, 0) 
      / Object.keys(this.competences.physique).length;
    
    const mentalMean = Object.values(this.competences.mental).reduce((sum, val) => sum + val, 0) 
      / Object.keys(this.competences.mental).length;
    
    // Calcul de la note globale pondérée
    const overallRating = (
      techniqueMean * weights.technique +
      physiqueMean * weights.physique +
      mentalMean * weights.mental
    );
    
    return Math.round(overallRating);
  }

  /**
   * Convertit l'objet joueur en format compatible Firestore
   * @returns {Object} Objet prêt à être stocké dans Firestore
   */
  toFirestore() {
    const playerData = { ...this };
    
    // Supprimer l'id du document
    delete playerData.id;
    
    // Ajouter les timestamps
    playerData.updatedAt = serverTimestamp();
    if (!this.id) {
      playerData.createdAt = serverTimestamp();
    }
    
    return playerData;
  }

  /**
   * Enregistre le joueur dans Firestore
   * @returns {Promise<string>} L'ID du document créé/mis à jour
   */
  async save() {
    const playerData = this.toFirestore();
    
    if (this.id) {
      // Mise à jour
      const playerRef = doc(firestore, 'players', this.id);
      await updateDoc(playerRef, playerData);
      return this.id;
    } else {
      // Création
      const playersCollection = collection(firestore, 'players');
      const docRef = await addDoc(playersCollection, playerData);
      this.id = docRef.id;
      return docRef.id;
    }
  }
}

/**
 * Récupère un joueur par son ID
 * @param {string} id L'ID du joueur
 * @returns {Promise<Player|null>} Le joueur ou null si non trouvé
 */
export const getPlayerById = async (id) => {
  try {
    const playerRef = doc(firestore, 'players', id);
    const playerDoc = await getDoc(playerRef);
    
    if (playerDoc.exists()) {
      return new Player({ id: playerDoc.id, ...playerDoc.data() });
    }
    
    return null;
  } catch (error) {
    console.error('Erreur lors de la récupération du joueur:', error);
    throw error;
  }
};

/**
 * Récupère tous les joueurs d'une équipe
 * @param {string} teamId L'ID de l'équipe
 * @returns {Promise<Player[]>} Liste des joueurs
 */
export const getPlayersByTeam = async (teamId) => {
  try {
    const playersQuery = query(
      collection(firestore, 'players'),
      where('equipeId', '==', teamId)
    );
    
    const querySnapshot = await getDocs(playersQuery);
    const players = [];
    
    querySnapshot.forEach((doc) => {
      players.push(new Player({ id: doc.id, ...doc.data() }));
    });
    
    return players;
  } catch (error) {
    console.error('Erreur lors de la récupération des joueurs de l\'équipe:', error);
    throw error;
  }
};

/**
 * Supprime un joueur
 * @param {string} id L'ID du joueur à supprimer
 * @returns {Promise<void>}
 */
export const deletePlayer = async (id) => {
  try {
    await deleteDoc(doc(firestore, 'players', id));
  } catch (error) {
    console.error('Erreur lors de la suppression du joueur:', error);
    throw error;
  }
};

export default Player;
