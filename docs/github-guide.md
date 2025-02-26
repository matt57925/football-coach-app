# Guide d'utilisation de GitHub - Football Coach App

Ce document est un guide pratique pour utiliser GitHub dans le cadre du projet Football Coach App, destiné aux développeurs qui ne sont pas familiers avec cet outil.

## 1. Introduction à GitHub

GitHub est une plateforme de gestion de versions basée sur Git qui permet de :
- Stocker et versionner le code source
- Collaborer avec d'autres développeurs
- Suivre et gérer les tâches (issues)
- Documenter le projet
- Déployer facilement l'application

## 2. Concepts fondamentaux

### Dépôt (Repository)
C'est le "dossier" principal du projet où tout le code est stocké. Notre dépôt s'appelle `football-coach-app`.

### Commits
Les commits sont des "points de sauvegarde" du code avec un message descriptif des changements effectués.

### Branches
Les branches permettent de travailler sur des fonctionnalités en parallèle sans affecter le code principal.
- `main` : branche principale, contient la version stable du code
- `develop` : branche de développement
- `feature/nom-de-la-fonctionnalité` : branches pour ajouter de nouvelles fonctionnalités

### Pull Requests (PR)
Demandes pour fusionner les changements d'une branche à une autre, permettant de réviser le code avant intégration.

### Issues
Les "problèmes" ou tâches à accomplir, qui peuvent être assignés à des membres de l'équipe.

## 3. Premiers pas avec GitHub

### Accéder au dépôt
1. Rendez-vous sur [https://github.com/matt57925/football-coach-app](https://github.com/matt57925/football-coach-app)
2. Connectez-vous à votre compte GitHub (ou créez-en un si nécessaire)

### Explorer le dépôt
- **Code** : Contenu du dépôt, fichiers et dossiers
- **Issues** : Liste des tâches et bugs
- **Pull Requests** : Demandes de fusion en cours
- **Projects** : Tableaux de suivi du projet
- **Wiki** : Documentation détaillée
- **Settings** : Paramètres du dépôt (accès limité aux propriétaires)

## 4. Contribuer au projet sans ligne de commande

Si vous préférez ne pas utiliser la ligne de commande, GitHub propose une interface web pour contribuer :

### Créer ou modifier un fichier
1. Naviguez jusqu'au fichier que vous souhaitez modifier (ou à l'emplacement où vous voulez créer un fichier)
2. Cliquez sur le bouton "Edit" (crayon) ou "Add file" > "Create new file"
3. Effectuez vos modifications
4. En bas de page, ajoutez un message de commit descriptif
5. Choisissez si vous souhaitez commiter directement sur `main` ou créer une nouvelle branche
6. Cliquez sur "Commit changes"

### Créer une Issue (tâche)
1. Allez dans l'onglet "Issues"
2. Cliquez sur "New issue"
3. Donnez un titre clair et une description détaillée
4. Ajoutez des labels (étiquettes) pour catégoriser l'issue
5. Assignez l'issue à une personne si nécessaire
6. Cliquez sur "Submit new issue"

### Commenter et participer aux discussions
1. Ouvrez l'issue ou le pull request concerné
2. Scrollez jusqu'à la boîte de commentaire
3. Rédigez votre commentaire (vous pouvez utiliser la syntaxe Markdown)
4. Cliquez sur "Comment"

## 5. Utiliser GitHub avec un client graphique

Pour éviter la ligne de commande tout en bénéficiant de plus de fonctionnalités, utilisez un client graphique :

### GitHub Desktop
1. Téléchargez [GitHub Desktop](https://desktop.github.com/)
2. Connectez-vous avec votre compte GitHub
3. Clonez le dépôt `football-coach-app`
4. Utilisez l'interface pour:
   - Créer des branches
   - Commiter des changements
   - Pousser (push) vos changements
   - Créer des pull requests

### Autres clients graphiques
- [GitKraken](https://www.gitkraken.com/)
- [Sourcetree](https://www.sourcetreeapp.com/)
- [Visual Studio Code](https://code.visualstudio.com/) avec ses extensions Git

## 6. Flux de travail recommandé

### Pour une nouvelle fonctionnalité
1. Créez une issue décrivant la fonctionnalité
2. Créez une nouvelle branche à partir de `develop` nommée `feature/nom-de-la-fonctionnalité`
3. Travaillez sur votre code en faisant des commits réguliers
4. Lorsque la fonctionnalité est prête, créez un pull request vers `develop`
5. Après revue, la branche sera fusionnée dans `develop`
6. Périodiquement, `develop` sera fusionné dans `main` pour une nouvelle version

### Pour un correctif rapide
1. Créez une issue décrivant le bug
2. Créez une branche `fix/description-du-bug`
3. Corrigez le problème
4. Créez un pull request vers `main`

## 7. Bonnes pratiques

### Messages de commit
- Utilisez des messages clairs et concis
- Commencez par un verbe à l'impératif (Ajoute, Corrige, Modifie)
- Exemple: "Ajoute la fonctionnalité de statistiques des joueurs"

### Gestion des branches
- Gardez `main` toujours déployable (code fonctionnel)
- Créez des branches pour chaque fonctionnalité/correctif
- Supprimez les branches après leur fusion

### Documentation
- Mettez à jour le README.md lorsque nécessaire
- Documentez les nouvelles fonctionnalités
- Ajoutez des commentaires dans le code pour les parties complexes

## 8. Utilisation des Projects GitHub

GitHub Projects permet de visualiser et gérer les tâches sous forme de tableaux Kanban.

### Colonnes typiques
- **À faire** : Issues à traiter
- **En cours** : Travail actif
- **En revue** : Pull requests en attente de validation
- **Terminé** : Tâches complétées

### Utilisation
1. Allez dans l'onglet "Projects"
2. Sélectionnez le tableau de projet
3. Déplacez les issues entre les colonnes selon leur état
4. Ajoutez des notes ou de nouvelles tâches directement depuis le tableau

## 9. Intégration avec d'autres outils

### Outils de développement
- **IDE** : Visual Studio Code, Android Studio, etc.
- **Linters** : ESLint, Prettier
- **Tests** : Jest

### CI/CD (Intégration et déploiement continus)
- **GitHub Actions** : Tests automatiques à chaque push
- **Firebase App Distribution** : Déploiement de versions test
- **App Store Connect / Google Play Console** : Déploiement production

## 10. Résolution des problèmes courants

### Conflits de fusion
Si deux personnes modifient la même partie d'un fichier :
1. GitHub indiquera un conflit dans le pull request
2. Éditez les fichiers pour résoudre manuellement les conflits
3. Choisissez quelles modifications conserver
4. Commitez la résolution

### Perte de travail local
Si vous perdez vos modifications locales :
1. Vérifiez l'historique des commits sur GitHub
2. Récupérez la dernière version
3. Refaites vos modifications plus prudemment

### Problèmes d'accès
Si vous ne pouvez pas pousser de changements :
1. Vérifiez que vous êtes bien connecté
2. Assurez-vous d'avoir les droits d'accès appropriés
3. Contactez l'administrateur du dépôt

## 11. Ressources d'apprentissage

### Documentation officielle
- [Guides GitHub](https://guides.github.com/)
- [Documentation GitHub](https://docs.github.com/en)

### Tutoriels recommandés
- [GitHub Learning Lab](https://lab.github.com/)
- [Cours Git & GitHub sur Coursera](https://www.coursera.org/learn/introduction-git-github)
- [Tutoriels YouTube GitHub](https://www.youtube.com/githubguides)

---

N'hésitez pas à consulter ce guide régulièrement pendant le développement. GitHub devient plus intuitif avec la pratique et simplifiera considérablement la gestion du projet Football Coach App.
