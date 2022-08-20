/*
click - fires after full action occurs
mousedown - button is pressed
mouseup - button is released
mouseenter - moved onto an element
mouseleave - moved out of an element

Objet événement :
1.	Appliquez la fonction addEventListener au bouton, à la balise h1 et au lien pour démontrer l'événement de clic ci-dessous. 

objet événement argument e, événement
informations sur l'événement déclenché
event.type
event.currentTarget
ce mot-clé
preventDefault() - empêche le comportement par défaut.

Code HTML :

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .btn {
        background: #f15025;
        color: white; font-size: 1.2rem;
        border: none;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      a {
        display: inline-block;
        margin-top: 100vh;
      }
    </style>
  </head>
  <body>
    <button class="btn">click me</button>
    <h1>some heading</h1>
    <a href="#" id="link">random link</a>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>

*/
