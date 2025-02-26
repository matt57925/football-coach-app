# Structure du Projet - Football Coach App

Ce document détaille l'organisation des fichiers et répertoires du projet.

```
football-coach-app/
│
├── android/                    # Configuration spécifique Android
│
├── ios/                        # Configuration spécifique iOS
│
├── src/                        # Code source de l'application
│   ├── assets/                 # Ressources statiques
│   │   ├── fonts/              # Polices personnalisées
│   │   ├── images/             # Images et icônes
│   │   ├── animations/         # Animations Lottie
│   │   └── styles/             # Styles globaux
│   │
│   ├── components/             # Composants réutilisables
│   │   ├── common/             # Composants génériques (boutons, inputs, etc.)
│   │   ├── layout/             # Composants de mise en page
│   │   ├── players/            # Composants liés aux joueurs
│   │   ├── teams/              # Composants liés aux équipes
│   │   ├── matches/            # Composants liés aux matchs
│   │   ├── training/           # Composants liés aux entraînements
│   │   ├── statistics/         # Composants de visualisation des statistiques
│   │   └── ai/                 # Composants liés aux fonctionnalités IA
│   │
│   ├── screens/                # Écrans de l'application
│   │   ├── auth/               # Écrans d'authentification
│   │   ├── home/               # Écran d'accueil
│   │   ├── players/            # Écrans de gestion des joueurs
│   │   ├── teams/              # Écrans de gestion des équipes
│   │   ├── matches/            # Écrans de gestion des matchs
│   │   ├── training/           # Écrans de gestion des entraînements
│   │   ├── statistics/         # Écrans de statistiques
│   │   ├── calendar/           # Écrans de calendrier
│   │   ├── messaging/          # Écrans de messagerie
│   │   └── settings/           # Écrans de paramètres
│   │
│   ├── navigation/             # Configuration de la navigation
│   │   ├── MainNavigator.js    # Navigation principale
│   │   ├── AuthNavigator.js    # Navigation d'authentification
│   │   └── TabNavigator.js     # Navigation par onglets
│   │
│   ├── services/               # Services et API
│   │   ├── firebase/           # Configuration et services Firebase
│   │   ├── api/                # Couche d'abstraction d'API
│   │   ├── auth/               # Service d'authentification
│   │   ├── storage/            # Service de stockage local
│   │   └── notifications/      # Service de notifications push
│   │
│   ├── store/                  # Gestion d'état (Redux ou Context)
│   │   ├── actions/            # Actions Redux
│   │   ├── reducers/           # Reducers Redux
│   │   ├── types/              # Types d'actions
│   │   ├── selectors/          # Sélecteurs Redux
│   │   └── index.js            # Configuration du store
│   │
│   ├── utils/                  # Utilitaires
│   │   ├── helpers.js          # Fonctions d'aide
│   │   ├── validation.js       # Validation de formulaires
│   │   ├── formatting.js       # Formatage de données
│   │   └── constants.js        # Constantes de l'application
│   │
│   ├── hooks/                  # Hooks personnalisés
│   │   ├── useAuth.js          # Hook d'authentification
│   │   ├── useFirestore.js     # Hook d'accès à Firestore
│   │   ├── useNotifications.js # Hook de notifications
│   │   └── useFormation.js     # Hook de génération de formations
│   │
│   ├── models/                 # Modèles de données
│   │   ├── Player.js           # Modèle Joueur
│   │   ├── Team.js             # Modèle Équipe
│   │   ├── Match.js            # Modèle Match
│   │   └── Training.js         # Modèle Entraînement
│   │
│   ├── context/                # Contextes React
│   │   ├── AuthContext.js      # Contexte d'authentification
│   │   ├── TeamContext.js      # Contexte d'équipe
│   │   └── ThemeContext.js     # Contexte de thème
│   │
│   ├── themes/                 # Thèmes de l'application
│   │   ├── light.js            # Thème clair
│   │   ├── dark.js             # Thème sombre
│   │   └── colors.js           # Palette de couleurs
│   │
│   ├── localization/           # Internationalisation
│   │   ├── en.js               # Traductions en anglais
│   │   └── fr.js               # Traductions en français
│   │
│   ├── analytics/              # Suivi analytique
│   │   └── events.js           # Définition des événements
│   │
│   ├── ai/                     # Modèles et logique d'IA
│   │   ├── formationGenerator.js # Générateur de formations
│   │   └── playerAnalyzer.js   # Analyseur de performances
│   │
│   └── App.js                  # Point d'entrée de l'application
│
├── firebase/                   # Configuration Firebase
│   ├── functions/              # Cloud Functions
│   ├── firestore.rules         # Règles de sécurité Firestore
│   └── storage.rules           # Règles de sécurité Storage
│
├── docs/                       # Documentation
│   ├── api/                    # Documentation API
│   ├── mockups/                # Maquettes d'interface
│   └── guides/                 # Guides d'utilisation
│
├── tests/                      # Tests
│   ├── unit/                   # Tests unitaires
│   ├── integration/            # Tests d'intégration
│   └── e2e/                    # Tests end-to-end
│
├── scripts/                    # Scripts utilitaires
│
├── .eslintrc.js                # Configuration ESLint
├── .gitignore                  # Fichiers ignorés par Git
├── .prettierrc                 # Configuration Prettier
├── app.json                    # Configuration de l'application
├── babel.config.js             # Configuration Babel
├── metro.config.js             # Configuration Metro
├── package.json                # Dépendances npm
└── README.md                   # Documentation principale
```

## Conventions de nommage

- **Fichiers de composants** : PascalCase (ex: `PlayerCard.js`)
- **Fichiers utilitaires** : camelCase (ex: `formatDate.js`)
- **Constantes** : UPPER_SNAKE_CASE (ex: `MAX_PLAYERS`)
- **Variables/fonctions** : camelCase (ex: `getUserData()`)
- **Composants** : PascalCase (ex: `<PlayerList />`)
- **Props** : camelCase (ex: `playerData`)
- **Types/Interfaces** : PascalCase (ex: `PlayerType`)

## Structure de composant

```jsx
// Imports
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

// Composant
const ComponentName = ({ prop1, prop2 }) => {
  // État local
  const [state, setState] = useState(initialValue);

  // Effets
  useEffect(() => {
    // Logique d'effet
  }, [dependencies]);

  // Fonctions auxiliaires
  const handleSomething = () => {
    // Logique
  };

  // Rendu
  return (
    <View style={styles.container}>
      <Text>{prop1}</Text>
    </View>
  );
};

// PropTypes
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

// Valeurs par défaut
ComponentName.defaultProps = {
  prop2: 0,
};

// Export
export default ComponentName;
```

## Organisation des imports

Ordre recommandé pour les imports :

1. Bibliothèques externes (React, React Native)
2. Composants de l'application
3. Hooks personnalisés
4. Services
5. Utilitaires
6. Styles

## Styles

Utilisation de StyleSheet pour les styles :

```jsx
// En bas du fichier de composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: theme.typography.sizes.large,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
```

## Ajout de nouveaux fichiers

Lors de l'ajout de nouveaux fichiers ou composants, veuillez respecter cette structure pour maintenir la cohérence du projet.
