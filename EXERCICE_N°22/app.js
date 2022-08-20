/*
Module : JavaScript
Exercice n°22 - Soumission d'un formulaire HTML

Durée de l’exercice : 30min
 
Soumission d'un formulaire HTML
Ecrivez un code javascript pour collecter les données du formulaire à partir du code HTML ci-dessous et les afficher dans le journal de la console.
  console.log('formulaire soumis') ;
  console.log(nom.valeur) ;
  console.log(password.value) ;

Objectif : Collecter les données du formulaire pour une utilisation ultérieure.

Énoncé : En règle générale, un formulaire comporte un bouton d'envoi. Lorsque vous cliquez dessus, le navigateur envoie les données du formulaire au serveur. Pour créer un bouton d'envoi, vous utilisez l'élément <input> ou <button> avec le type submit :

soumettre un écouteur d'événement
empêche la valeur par défaut
comment obtenir une valeur

Code HTML :

 <body>
    <form action="" id="form">
      <input type="text" id="name" />
      <input type="password" id="password" />
      <input type="submit" value="submit" />
    </form>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>

*/

const input = document.querySelector("input[type = submit]");
const nam = document.querySelector("#name");
const password = document.querySelector("#password");
console.log(input);
const submit = input;
submit.addEventListener("click", () => {
  console.log("formulaire soumis");
  console.log(password.value);
  console.log(nam.value);
});
