Notes pour clean code:

Mon architecture est une approche modulaire inspirée du MVC. Un MVC strict m'a semblé trop rigide pour mon projet et mon projet trop petit pour implémenter un vrai MVC (pas la peine). 


- faut-il définir un schéma constant pour situer les eventListeners dans l'architecture? le bouton Ajouter au panier est dans le corps du script (difficile de transmettre les infos du bouton sinon), le bouton Rechercher (soumission formulaire) aussi. Vérifier s'ils ont le même schéma de transmission, pour s'assurer de la cohérence.


- Vérifier les points-virgules à la fin des lignes.

- Est-ce que cette architecture est un vrai MVC? Trouver des exemples similaires sur github.


_____________________________________________________________________________________



TodoList (backlog?):

- Se renseigner pour savoir s'il vaut mieux générer les elements HTML pour les display en none

- Afficher le détail des réductions

- Utiliser un TimeSetOut pour simuler visuellement des calculs de réductions

- Finir d'organiser en MVC et séparer les fonctions au passage

- Pouvoir vider le panier

- Implémenter une navigation sur 2 pages

- Installer un vrai design avec une bibliothèque ou un truc genre TailWind

- Relier le site à une API web pour avoir des noms de livres

- Mieux comprendre les lignes de deleteItems()

- Dans cartView, les fonctions ont quasiment toutes les mêmes arguments. Est-ce que je peux pas plutôt mettre ces élements en global dans ce fichier, et les modifier/utiliser directement dans le corps des fonctions, sans leur passer d'arguments? Pour la lisibilité et ça me semble plus logique.
Mais cela veut dire que je dois réinitialiser les variables à chaque fois...

- Est-ce que c'est bien d'avoir des paramètres qui ont des noms un peu génériques et d'auters qui ont le même nom que les arguments? Dois-je tout mettre en générique, ou tout mettre pareil que l'argument sauf quand la fonctino manipule plusieurs arguments différents?