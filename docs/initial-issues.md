# Tâches prioritaires - Football Coach App

Ce document liste les tâches prioritaires à implémenter pour le démarrage du projet. Chaque tâche peut être créée comme une "Issue" dans GitHub pour suivre son avancement.

## Phase 1 : MVP - Gestion des joueurs et équipes

### Configuration et fondations

#### 1. Configuration initiale du projet
- **Description** : Initialiser le projet React Native et installer les dépendances nécessaires
- **Tâches** :
  - Créer un nouveau projet React Native
  - Configurer ESLint et Prettier
  - Mettre en place la structure de dossiers
  - Installer les packages nécessaires
- **Priorité** : Haute
- **Estimation** : 2 jours

#### 2. Configuration Firebase
- **Description** : Configurer les services Firebase nécessaires
- **Tâches** :
  - Créer un projet Firebase
  - Configurer l'authentification (email/mot de passe, Google)
  - Initialiser Firestore et définir les collections
  - Configurer le stockage pour les images
  - Mettre en place les règles de sécurité
- **Priorité** : Haute
- **Estimation** : 2 jours

#### 3. Système d'authentification
- **Description** : Créer les écrans et la logique d'authentification
- **Tâches** :
  - Écran de connexion
  - Écran d'inscription
  - Écran de récupération de mot de passe
  - Intégration avec Firebase Auth
  - Tests des différents flux d'authentification
- **Priorité** : Haute
- **Estimation** : 3 jours

#### 4. Navigation principale
- **Description** : Mettre en place la structure de navigation de l'application
- **Tâches** :
  - Navigation par onglets pour les sections principales
  - Navigation par pile pour les flux fonctionnels
  - Gestion de l'état d'authentification (routes protégées)
  - Transitions et animations
- **Priorité** : Haute
- **Estimation** : 2 jours

### Gestion des joueurs

#### 5. Création de joueurs
- **Description** : Interface pour ajouter un nouveau joueur
- **Tâches** :
  - Formulaire avec tous les champs nécessaires
  - Upload de photo
  - Validation des données
  - Sauvegarde dans Firestore
- **Priorité** : Haute
- **Estimation** : 4 jours

#### 6. Liste des joueurs
- **Description** : Écran affichant la liste des joueurs
- **Tâches** :
  - Affichage en liste avec photo et informations principales
  - Filtres (poste, équipe, etc.)
  - Recherche par nom
  - Tri par différents critères
- **Priorité** : Haute
- **Estimation** : 3 jours

#### 7. Profil du joueur
- **Description** : Écran détaillé du profil d'un joueur
- **Tâches** :
  - Affichage de toutes les informations du joueur
  - Visualisation des compétences sous forme de graphiques
  - Statistiques des performances
  - Boutons d'actions (éditer, supprimer, etc.)
- **Priorité** : Moyenne
- **Estimation** : 4 jours

#### 8. Édition de joueur
- **Description** : Interface pour modifier les informations d'un joueur
- **Tâches** :
  - Formulaire pré-rempli avec les données existantes
  - Possibilité de modifier la photo
  - Mise à jour dans Firestore
- **Priorité** : Moyenne
- **Estimation** : 2 jours

### Gestion des équipes

#### 9. Création d'équipe
- **Description** : Interface pour créer une nouvelle équipe
- **Tâches** :
  - Formulaire avec les informations de l'équipe
  - Choix des couleurs
  - Sélection du coach et des assistants
- **Priorité** : Haute
- **Estimation** : 2 jours

#### 10. Gestion de l'effectif
- **Description** : Interface pour assigner des joueurs à une équipe
- **Tâches** :
  - Liste des joueurs disponibles
  - Ajout/retrait de joueurs
  - Organisation par poste
- **Priorité** : Haute
- **Estimation** : 3 jours

#### 11. Tableau de bord de l'équipe
- **Description** : Écran principal affichant les informations de l'équipe
- **Tâches** :
  - Résumé des statistiques de l'équipe
  - Liste des prochains événements
  - Effectif résumé
  - Accès rapide aux actions principales
- **Priorité** : Moyenne
- **Estimation** : 3 jours

#### 12. Génération de composition
- **Description** : Première version de l'algorithme de génération de composition
- **Tâches** :
  - Algorithme basique basé sur les postes et compétences
  - Interface pour visualiser et modifier la composition
  - Sauvegarde des compositions pour les matchs
- **Priorité** : Moyenne
- **Estimation** : 5 jours

## Phase 2 : Planification et communication

### Gestion des matchs

#### 13. Création de match
- **Description** : Interface pour créer un nouveau match
- **Tâches** :
  - Formulaire avec les informations du match
  - Sélection de l'adversaire
  - Choix de la date, heure et lieu
  - Intégration avec Google Maps
- **Priorité** : Haute
- **Estimation** : 3 jours

#### 14. Gestion des convocations
- **Description** : Interface pour convoquer les joueurs à un match
- **Tâches** :
  - Sélection des joueurs à convoquer
  - Envoi de notifications
  - Suivi des réponses
- **Priorité** : Haute
- **Estimation** : 3 jours

#### 15. Feuille de match
- **Description** : Interface pour gérer une feuille de match
- **Tâches** :
  - Saisie de la composition
  - Enregistrement des événements du match (buts, cartons, etc.)
  - Statistiques en temps réel
- **Priorité** : Moyenne
- **Estimation** : 4 jours

### Gestion des entraînements

#### 16. Planification d'entraînement
- **Description** : Interface pour créer des sessions d'entraînement
- **Tâches** :
  - Formulaire avec les informations de la séance
  - Planification récurrente
  - Définition des exercices
- **Priorité** : Haute
- **Estimation** : 3 jours

#### 17. Suivi des présences
- **Description** : Interface pour suivre les présences aux entraînements
- **Tâches** :
  - Liste des joueurs à cocher
  - Historique des présences
  - Statistiques d'assiduité
- **Priorité** : Moyenne
- **Estimation** : 2 jours

## Suivi des tâches

Pour chaque tâche, créer une Issue GitHub avec:
1. Un titre clair
2. Une description détaillée
3. Des labels appropriés (priorité, type, etc.)
4. Une estimation en points de complexité ou en jours
5. Un assigné (si connu)

Les issues peuvent être organisées en utilisant le système de projets GitHub pour visualiser l'avancement sous forme de tableaux Kanban.

## Procédure pour créer une Issue

1. Aller sur https://github.com/matt57925/football-coach-app/issues
2. Cliquer sur "New Issue"
3. Remplir le formulaire avec les informations de la tâche
4. Ajouter les labels pertinents
5. Assigner l'issue à un membre de l'équipe si nécessaire
6. Soumettre l'issue

## Premiers jalons (Milestones)

- **Configuration initiale** : Tâches 1-4
- **Gestion des joueurs** : Tâches 5-8
- **Gestion des équipes** : Tâches 9-12
- **Version MVP** : Finalisation de la Phase 1
