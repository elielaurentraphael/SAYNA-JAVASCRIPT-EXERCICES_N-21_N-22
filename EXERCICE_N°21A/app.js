/*
Module : JavaScript
Exercice n°21 - Événements JavaScript

Durée de l’exercice : 30min

Événements JavaScript
Voici quelques exemples d’évènements : 
●	Un événement HTML peut être quelque chose que le navigateur fait, ou quelque chose qu'un utilisateur fait.
●	Une page web HTML a fini de se charger
●	Un champ de saisie HTML a été modifié
●	Un bouton HTML a été cliqué

Souvent, lorsque des événements se produisent, vous pouvez vouloir faire quelque chose.
JavaScript vous permet d'exécuter du code lorsque des événements sont détectés.

Objectif : Voir des exemples d'événements HTML

Énoncé :

select element
addEventListener()
what event, what to do

Code HTML

  <body>
    <h2>events in javascript change the background</h2>
    <button class="btn">click me</button>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>

Complétez le code JavaScript :

1.	Changez l'arrière-plan de la balise h2 lors du clic sur le bouton.
Note : vous pouvez utiliser classList pour ajouter et enlever la classe de h2 de sorte que chaque fois qu'il y a un événement de clic, la couleur de fond est ajoutée ou enlevée.
2.	Écrivez une fonction changeColors(), ainsi au clic du bouton la fonction changeColors est appelée, si la couleur est bleue alors supprimez la classe blue, sinon ajoutez la classe blue.
3.	Événements de la souris
a.	Au clic du bouton console.log('you clicked me');
b.	Lorsque la souris descend, console.log('down') ;
c.	Lorsque la souris monte, console.log('up') ;
d.	À l'entrée de la souris, écrivez une fonction pour ajouter une classe blue à la balise h2.
e.	En quittant la souris, écrivez une fonction pour supprimer la classe blue de la balise h2.
f.	Notez la création de la classe dans le fichier css pour que vous puissiez voir le résultat.


*/
