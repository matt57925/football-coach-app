# Design System - Football Coach App

Ce document définit les éléments visuels et les conventions de design pour l'application Football Coach, assurant cohérence et qualité visuelle.

## 1. Palette de couleurs

### Couleurs principales
| Nom | Hex | Description | Usage |
|-----|-----|-------------|-------|
| Gazon | `#357a38` | Vert foncé | Couleur principale, headers, boutons principaux |
| Gazon Clair | `#4caf50` | Vert moyen | Éléments secondaires, accents |
| Gazon Pâle | `#a5d6a7` | Vert clair | Backgrounds secondaires, surbrillances |
| Blanc | `#ffffff` | Blanc pur | Texte sur fond foncé, arrière-plans |
| Noir | `#212121` | Presque noir | Texte principal, éléments importants |

### Couleurs secondaires
| Nom | Hex | Description | Usage |
|-----|-----|-------------|-------|
| Arbitre Rouge | `#e53935` | Rouge vif | Alertes, erreurs, cartons rouges |
| Arbitre Jaune | `#ffeb3b` | Jaune vif | Avertissements, cartons jaunes |
| Sifflet | `#607d8b` | Gris bleuté | Éléments neutres, icônes secondaires |
| Ligne | `#f5f5f5` | Gris très clair | Séparateurs, arrière-plans neutres |
| Victoire | `#1e88e5` | Bleu | Statistiques positives, victoires |

### Dégradés
| Nom | Description | Définition |
|-----|-------------|------------|
| Terrain | Dégradé de vert | `linear-gradient(to bottom, #357a38, #4caf50)` |
| Score | Dégradé de vert à bleu | `linear-gradient(to right, #4caf50, #1e88e5)` |

## 2. Typographie

### Familles de polices
| Famille | Usage | Variantes |
|---------|-------|-----------|
| **Montserrat** | Titres, en-têtes | Light, Regular, SemiBold, Bold |
| **Roboto** | Corps de texte, interfaces | Light, Regular, Medium, Bold |
| **Roboto Mono** | Données numériques, statistiques | Regular, Medium |

### Tailles de texte
| Nom | Taille | Usage |
|-----|--------|-------|
| Display | 32px | Grands titres de page |
| Title 1 | 24px | Titres de section |
| Title 2 | 20px | Sous-titres |
| Body 1 | 16px | Texte principal |
| Body 2 | 14px | Texte secondaire |
| Caption | 12px | Légendes, infos secondaires |
| Small | 10px | Mentions légales, crédits |

### Épaisseurs de police
| Poids | Valeur | Usage |
|-------|--------|-------|
| Light | 300 | Grands titres, statistiques |
| Regular | 400 | Corps de texte |
| Medium | 500 | Emphase légère, sous-titres |
| Bold | 700 | Titres, accents |

## 3. Iconographie

### Style d'icônes
- Style ligne fine avec coins légèrement arrondis
- Stroke width cohérent (1.5px)
- Palette limitée aux couleurs du système
- Taille standard de base : 24x24px

### Icônes courantes
| Nom | Description | Usage |
|-----|-------------|-------|
| Player | Silhouette joueur | Profils, listes de joueurs |
| Team | Groupe de silhouettes | Équipes |
| Ball | Ballon de football | Actions liées au jeu |
| Whistle | Sifflet | Entraînements, arbitrage |
| Calendar | Calendrier | Planning, événements |
| Stats | Graphique en barres | Statistiques |
| Tactics | Terrain schématisé | Formations, tactiques |

## 4. Composants UI

### Boutons
| Type | Description | Style |
|------|-------------|-------|
| Primaire | Actions principales | Fond vert gazon, texte blanc, coins arrondis (8px) |
| Secondaire | Actions secondaires | Bordure verte, fond transparent, texte vert |
| Tertiaire | Actions mineures | Texte vert sans fond ni bordure |
| Danger | Actions destructives | Fond rouge, texte blanc |

### Cartes
| Type | Usage | Style |
|------|-------|-------|
| Joueur | Profil joueur résumé | Carte blanche, ombre légère, photo ronde, stats condensées |
| Match | Aperçu match | Carte avec équipes opposées, score central |
| Statistique | Affichage donnée | Carte avec valeur mise en avant, graphique minimaliste |
| Entraînement | Session d'entraînement | Carte avec icône, date et heure, liste d'exercices |

### Inputs
| Type | Description | Style |
|------|-------------|-------|
| Texte | Champs textuels | Bordure fine, fond blanc, focus en vert |
| Sélection | Listes déroulantes | Style natif avec icône personnalisée |
| Radio | Choix unique | Cercle vert, animation de sélection |
| Checkbox | Choix multiples | Carré arrondi vert, icône check blanche |
| Slider | Valeurs numériques | Track gris, thumb vert, valeurs aux extrémités |

### Listes
| Type | Usage | Style |
|------|-------|-------|
| Simple | Listes d'items basiques | Séparateurs fins, padding consistent |
| Avatar | Liste avec photos | Image ronde à gauche, texte à droite |
| Statistique | Liste avec valeurs | Texte à gauche, valeur mise en avant à droite |
| Action | Liste cliquable | Indicateur de clic, feedback visuel au toucher |

## 5. Espacement et grille

### Système d'espacement
Échelle basée sur l'incrément de 4px :
- **Nano**: 2px
- **Tiny**: 4px
- **XSmall**: 8px
- **Small**: 12px
- **Medium**: 16px
- **Large**: 24px
- **XLarge**: 32px
- **XXLarge**: 48px
- **Huge**: 64px

### Grille
- Base sur 8 colonnes en portrait, 12 en paysage
- Gouttière standard : 16px
- Marges externes : 16px (téléphone), 24px (tablette)

## 6. Effets et animations

### Ombres
| Niveau | Usage | Définition |
|--------|-------|------------|
| Subtle | Elements subtils | `0 1px 2px rgba(0,0,0,0.1)` |
| Light | Cartes, éléments d'interface | `0 2px 4px rgba(0,0,0,0.1)` |
| Medium | Éléments en surbrillance | `0 4px 8px rgba(0,0,0,0.1)` |
| Strong | Modales, popups | `0 8px 16px rgba(0,0,0,0.1)` |

### Animations
| Nom | Description | Timing |
|-----|-------------|--------|
| Fade In | Apparition progressive | 200ms ease-in |
| Slide Up | Apparition par le bas | 300ms ease-out |
| Scale | Zoom avant/arrière | 150ms ease-in-out |
| Bounce | Effet rebond pour feedback | 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275) |

## 7. Terrain et formations

### Représentation du terrain
- Vue du dessus, stylisée
- Lignes blanches sur fond vert
- Proportions respectées mais simplifiées
- Dimensions standards sur écran : largeur de l'écran × 3/4 de cette largeur

### Joueurs sur le terrain
- Cercles avec numéro et/ou initiales
- Code couleur par poste (gardien, défenseurs, milieux, attaquants)
- Taille relative à l'importance du joueur (optionnel)
- Animation de déplacement lors des changements

## 8. États et feedback

### États des composants
| État | Description | Style |
|------|-------------|-------|
| Default | État normal | Style de base |
| Hover | Survol (web) | Légère surbrillance |
| Pressed | Appui (tactile) | Assombrissement, légère réduction |
| Disabled | Non disponible | Opacité réduite (50%), non cliquable |
| Loading | Chargement | Animation de spinner ou squelette |
| Success | Action réussie | Feedback vert, icône check |
| Error | Action échouée | Feedback rouge, icône alerte |

### Feedbacks système
| Type | Présentation | Durée |
|------|--------------|-------|
| Toast | Message court en bas | 3 secondes |
| Alert | Popup modal centré | Persistant jusqu'à action |
| Inline | Message sous composant | Lié à l'état du composant |
| Pulse | Animation pulsante | 2-3 pulsations |

## 9. Responsive Design

### Breakpoints
| Taille | Dimension | Cible |
|--------|-----------|-------|
| Small | < 360px | Petits smartphones |
| Medium | 360px - 400px | Smartphones standards |
| Large | 400px - 600px | Grands smartphones |
| XLarge | > 600px | Tablettes |

### Adaptations
- Réduction des marges sur petits écrans
- Simplification des cartes et composants
- Passage de grilles à listes
- Réorganisation des menus et navigation

## 10. Thèmes et personnalisation

### Mode sombre
- Inversion des fonds (noir au lieu de blanc)
- Texte clair sur fond sombre
- Vert principal légèrement plus vif pour contraste
- Réduction de la luminosité des couleurs d'accent

### Thèmes d'équipe
Option pour personnaliser aux couleurs de l'équipe :
- Couleur principale remplaçant le vert
- Couleur secondaire pour accents
- Logo d'équipe dans l'app bar

## 11. Accessibilité

### Contraste
- Ratio minimum de 4.5:1 pour tout texte informatif
- Utilisation d'indicateurs non basés uniquement sur la couleur
- Mode "Contraste élevé" disponible

### Touch targets
- Taille minimum de 44×44px pour tous les éléments interactifs
- Espacement suffisant entre éléments touchables (min 8px)
- Feedback visuel et haptique sur interaction

## 12. Assets et ressources

Tous les assets seront disponibles dans les formats suivants :
- Icônes : SVG et PNG (1x, 2x, 3x)
- Illustrations : SVG et PNG haute résolution
- Logos : Formats vectoriels avec variantes (plein, outline, monochrome)

---

## Implémentation technique

Ce design system sera implémenté via:
- Fichiers constants exportés (couleurs, tailles, etc.)
- Composants React Native réutilisables
- Styles globaux et thèmes
- Documentation vivante avec exemples
