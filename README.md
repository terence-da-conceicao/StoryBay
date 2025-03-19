# Introduction
StoryBay est une interface de librarie en ligne. On peut rechercher n'importe quel livre dans la barre de recherche, l'ajouter au panier (ou l'en retirer) puis valider son panier et voir le total avec les réductions.
Il s'agit avant tout d'un projet personnel à visée pédagogique pour revoir les bases du developpement en front-end.
## Objectifs : 
- implémenter un MVC sans s'aider d'un framework
- gérer des evenements et de l'asynchrone
- se familiariser avec Tailwind CSS
- relier une API web

# Installation
## Prérequis
- Go Live
- une clé API Google Books

### Étapes pour obtenir une clé API :
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Connectez-vous avec votre compte Google.
3. Créez un **nouveau projet** (ou utilisez un projet existant).
4. Activez l'**API Google Books** ([Lien direct](https://console.cloud.google.com/marketplace/product/google/books.googleapis.com)).
5. Dans "Identifiants", cliquez sur **Créer des identifiants > Clé API**.
6. Copiez la clé API générée.

## Étapes
1. Cloner le dépôt
2. Dans votre fichier `dataController.js` présent dans le dossier `controller`, remplacez `VOTRE_CLE_API_ICI` par votre clé API
3. Lancer Go Live
