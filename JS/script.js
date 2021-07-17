
//alert("bienvenu à ReadingForPleasure");

/*var score=40;
if (score==50) {
  alert("vous avez gagné le jeu!");
} else if (score==40) {
  alert("vous avez presque gagné le jeu!");
}else {
  alert("vous avez perdu le jeu!")
}*/

/*var expression=9;
switch (expression) {
  case 20:
    alert("l'expression est vérifiée")
    break;
    case 69:
    alert("l'expression est suffisament vérifiée")
      break;
  default:
    alert("l'expression est non vérifiée")
}*/

/*var AgeRama=37;
var message=AgeRama>=18 ? "Rama est majeure" : "Rama est mineure";
alert(message);*/

/*var nombre=2;
var message=nombre>=5 ? "true" : "false";
alert(message);*/

/*for (var i = 0; i < 10; i=i+2) {
   console.log(i*2);
}*/

/*var i=20;
while (i>=0) {
  console.log(i*2);
  i=i-10;
}*/

/*var i=20;
while (i<-6) {
  console.log(i*2);
  i=i+2;
}*/

/*var j=20;
do {
console.log(j*2);
j=j-4;
} while (j<-5);*/

/*function maxAB() //une procédure
{
  alert("voici ma fonction"); //le corps de la fonction
}*/

/*function maxAB() {
  return 10;
}*/

/*function maxAB(nombre1, nombre2)
//fonction prenant deux paramétres  de type number: nombre1 et nombre2 retoure le max entre ces deux nombres;
 {
  if (nombre1>nombre2) {
    return nombre1;
  }else {
    return nombre2;
  }
}

function maxABC(nombre1, nombre2, nombre3) {

//fonction prenant trois paramétres  de type number: nombre1, nombre2 et nombre3 retoure le max entre ces trois nombres;

  if (maxAB(nombre1, nombre2) > nombre3) {
    return maxAB(nombre1, nombre2);
  } else {
    return nombre3;
  }
}*/

/*var nombre = 50;
function maxAB(nombre1, nombre2)

 {

   //fonction prenant deux paramétres  de type number: nombre1 et nombre2 retoure le max entre ces deux nombres;
   var j=40;

  if (nombre1>nombre2) {
    return nombre;
  }else {
    return nombre;
  }
}*/

//en bloc d'instructions:
/*var voiture = {
  couleur: "rouge",
  motorisation: "automatique",
  démarrer: function() {alert("la voiture démarre!");}
}*/


//en ligne d'instructions:
/*var NomObjet= new object();
NomObjet.propriété1= valeur1;
NomObjet.propriété2= valeur2;
NomObjet.méthode1= function(paramétre1, paramétre2,etc) {
  instruction1;
  instruction2;
};*/

/*var modelvoiture = function(nom, vitesse, prix) {
 //attributs ou propriétés
  this.nom = nom;
  this.vitesse = vitesse;
  this.prix = prix;
  //méthodes
  this.avancer = function(x) {
    var i=0;
    while (i<x) {
      document.write("la voiture: "+this.nom+" avance<br/>");
      i++;
    }
  }
}*/


/*selection l'élément qui a un iditifiant donné
selection de l'élément dont l'identifiant est fourni en paramétre
valeur de retour: objet
var id = document.getElementById('id');

/*selectionne tous les éléments dont la classe est fournie en paramétre
valeur de retour: tableau d'objet
var nomclass = document.getElementsByClassName('className');

/*selectionne tous les éléments dont la balise est fournie en paramétre
valeur de retour: tableau d'objet
var nomBalise = document.getElementsByTagName('nomBalise');

/*selectionne tous les éléments retenus par le sélecteur css foutni en paramétre
valeur de retour: tableau d'objet
var sélecteurCSS = document.querySelectorAll('sélecteurCSS');

/*selectionne le premier élément retenu par le sélecteur css foutni en paramétre
valeur de retour: objet
var premierElement = document.querySelector('sélecteurCSS');*/
