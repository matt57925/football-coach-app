# Guide de démarrage - Football Coach App

Ce guide vous aidera à démarrer avec le développement de l'application Football Coach.

## Préparation de l'environnement

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (pour le développement Android)
- [Xcode](https://developer.apple.com/xcode/) (pour le développement iOS, macOS uniquement)
- [Firebase CLI](https://firebase.google.com/docs/cli) (pour les déploiements Firebase)

### Installation

1. Clonez le dépôt:
```bash
git clone https://github.com/matt57925/football-coach-app.git
cd football-coach-app
```

2. Installez les dépendances:
```bash
npm install
# ou
yarn install
```

3. Configurez Firebase:
   - Créez un projet dans la [console Firebase](https://console.firebase.google.com/)
   - Ajoutez une application web à votre projet
   - Copiez les informations de configuration
   - Mettez à jour le fichier `src/services/firebase/config.js` avec vos propres clés

## Démarrage du développement

### Lancer l'application en mode développement

Pour Android:
```bash
npm run android
# ou
yarn android
```

Pour iOS (macOS uniquement):
```bash
npm run ios
# ou
yarn ios
```

## Structure du projet

- `docs/` - Documentation du projet
- `src/` - Code source principal
  - `assets/` - Ressources statiques (images, polices, etc.)
  - `components/` - Composants réutilisables
  - `screens/` - Écrans de l'application
  - `services/` - Services (Firebase, API, etc.)
  - `navigation/` - Configuration de la navigation
  - `models/` - Modèles de données
  - `themes/` - Thèmes et styles
  - `utils/` - Utilitaires
- `android/` - Configuration spécifique Android
- `ios/` - Configuration spécifique iOS
- `firebase/` - Configuration Firebase

## Ressources importantes

Consultez les fichiers suivants pour plus d'informations:

- `docs/technical-specifications.md` - Spécifications techniques détaillées
- `docs/project-structure.md` - Structure complète du projet
- `docs/roadmap.md` - Feuille de route du développement
- `docs/design-system.md` - Guide de design et composants UI
- `docs/github-guide.md` - Guide d'utilisation de GitHub
- `docs/initial-issues.md` - Liste des tâches prioritaires

## État actuel du projet

Le projet est actuellement en phase d'initialisation (Phase 1 du MVP). Les fondations ont été posées avec:

1. Structure documentaire complète
2. Configuration initiale en cours (GitHub, projet de base)
3. Issues créées pour les premières tâches prioritaires

## Prochaines étapes

1. Compléter la configuration de base du projet React Native
2. Configurer Firebase pour l'authentification et la base de données
3. Développer les écrans d'authentification
4. Mettre en place le système de navigation
5. Développer les fonctionnalités de gestion des joueurs

Pour plus de détails, consultez les issues GitHub ouvertes.

## Contribution

1. Consultez le guide GitHub (`docs/github-guide.md`) pour comprendre le workflow
2. Choisissez une issue à traiter dans le projet
3. Créez une branche pour votre fonctionnalité
4. Développez et testez votre code
5. Soumettez une pull request

## Support

En cas de questions ou problèmes, n'hésitez pas à créer une issue sur GitHub.
