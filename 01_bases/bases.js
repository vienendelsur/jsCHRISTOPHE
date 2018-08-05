<<<<<<< HEAD
// -----------------------------------
// 1 - commentaires
// -----------------------------------

// commentaire sur une seule ligne

/*
sur plusieurs lignes
*/

// -----------------------------------
// 2 - affichage
// -----------------------------------

document.write('Mon premier message en JS'); // affichage dans le navigateur attention façon très moche de faire du html

document.write('<h1>Les base du JS</h1>'); // on peut mettre des balises html elles sont interprétées et donc insérée dans le html

// les instructions se suivent du haut en bas

// les boites de dialogue : il y en a 3 en JS

// alert('Bonjour'); // affiche un message
// confirm('Etes-vous sûr ?'); // message avec un bouton ok ou annuler
// prompt('Quel est votre code postal ? '); // on attend une réponde avec un champs à remplir

// -------------
// a- affichage dans la console
// -------------

console.log('Attention aux erreurs de syntaxe dans la console'); // message écrit dans la console

// -----------------------------------
// 3 - variables - déclaration - affectation
// -----------------------------------

//----------
document.write('<h2> 3 - variables - déclaration - affectation</h2>');
// une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. de n'importe quel type ; chiffre, chaîne de caractères, une balise HTML etc.

// déclaration d'une variable : (convention de nommagea a à z etc.)
var maBoite; // le mot clef va permettre de déclarer ma variable nommée maBoite

// affectation d'une variable
maBoite = 10; // on affecte une variable avec le signe = elle contient 10 = est un signe d'affectation le signe égal c'est ==

document.write(maBoite); // on affiche le contenu de la variable sans apostrophe sans quotes

var maBoite = 10; // on peut déclarer et affecter une variable en même temps nous retiendrons cette écriture

monAutreBoite = 'bonjour'; // sans var déclaration non conventionnelle de plus ce n'est pas la même siginifcation cf. portée des variables

document.write('<br>');

// déclarer et affecter plusieurs variables en même temps
var prenom = 'Sylvie',
    nom = 'Pistono',
    genre = 'féminin'; // une seul var avec un saut de ligne et une virgule fin ;

    document.write(prenom); // affiche Sylvie
    document.write('<br>');

//----------
// changer la valeur d'une variable
prenom = 'Pierre'; // nous changeons la valeur d'une variable

document.write(prenom);
document.write('<br>');

prenom = nom; // nous affectons à une variable le contenu d'une autre variable

document.write(prenom);
document.write('<br>');

//----------
// ajouter une valeur à la valeur déjà existante d'une variable
var fruit='pomme';
fruit += 'fraise';// on ajout la chaîne de caractère fraise à pomme qui est déjà existante à la variable fruit avec l'opérateur +=

document.write(fruit);
document.write('<br>');

//----------
// utiliser prompt avec une variable
var codePostal = prompt('Votre code postal, svp');

document.write(codePostal);// affiche le code postel indiqué par l'internaute
document.write('<br>');


// -----------------------------------
// 4 - Types de données
// -----------------------------------

document.write('<h2>Types de données</h2>');

// les types de données 3 types de données

//  les types numériques appelés NUMBER :

var chiffre = 20; // les numbers s'écrivent sans apostrophes ni guillemets, entiers, décimaux, 

//  les types chaînes de caractères appelés STRING :
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utilister le caractères d\'échappement pour les apostrophes dans des quotes';

var numero = '10'; // un chiffre dans des quotes ou des guillemets est interprété comme une chaîne de caractères

// le type booléen (ou boolean)
// le type booléen ne prend que 2 valeurs : TRUE ou FALSE
var choix = true; // s'écrit sans quotes

//----------
// typeof permet de vérifier le type d'une variable 
document.write(typeof(chiffre));
document.write('<br>');

// typeof permet de vérifier le type d'une variable 
document.write(typeof(texte));
document.write('<br>');

// typeof permet de vérifier le type d'une variable 
document.write(typeof(numero));
document.write('<br>');

// typeof permet de vérifier le type d'une variable 
document.write(typeof(choix));
document.write('<br>');

// -----------------------------------
// 5 - Constantes
// -----------------------------------


document.write('<h2>Les constantes</h2>');
// les constantes sont comme des variables dont la valeur ne peut pas être modifiée. Elles permettent de protéger cette valeur nécessaire au bon fonctionnement du script

const CHANGE_PAS = 'ma constante impossible à modifier'; // par convention les constantes sont en MAJUSCULES

document.write(CHANGE_PAS);
document.write('<br>');

// CHANGE_PAS ='autre valeur'; // erreur bloquante de type invalid assignement to const CHANGE_PAS


// -----------------------------------
// 6 - Concaténation "écrire côte à côte, faire suivre de" 
// -----------------------------------

//  en js on fait suivre des variables et des strings avec le symbole + 

var prenom ='Bruce',
    nom = 'Lee';

    document.write(prenom + ' ' + nom + '<br>'); // concatène la variable prénom avec un espace, la variable nom et la balise br

    var personnage = prenom + ' ' + nom + '<br>'; // on peut concaténer des éléments au sein d'une variable
//    document.write();


// -----------------------------------
// 7 - Opérateurs arithmétiques 
// -----------------------------------

document.write('<h2>Opérateurs arithmétiques</h2>');

var resultat;

resultat = 10 + 5; // addition
resultat = 10 - 5; // soustraction
resultat = 10 * 5; // multiplication
resultat = 10 / 5; // division
resultat = 10 % 5; // modulo ; ex. des billes qui sont incassables 3 billes à répartir entre deux personnes

//----------
// on peut appliquer les opérateurs aux variables
var chiffre1 =  10,
    chiffre2 = 5;

    resultat = chiffre1 + chiffre2;

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // cette syntaxe n'est pas conventionnelle on utilise la syntaxe suivante :
chiffre3 +=5; // cette syntaxe fait la même chose que la précédente et c'est celle que l'on retiendra chiffre3 vaut ici 25

// fonctionne avec tous les opérateurs : +=, /=, *=, -= et %=

//----------
// incrémenter et décrémenter ;
var i = 0;
i++; // incrémenter i de +1 i vaut donc 1
i--; // décrémenter i de -i, i vaut donc 0

// i++ et ++i ont le même résultat à la différence près :
// i++ retourne la valeur de i AVANT d'effectuer l'opération
// ++i retourne la valeur APRES avoir effectué l'opération

var x = 5;
var y = x++; // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut ' + y + '<br>'); // 5
document.write('x vaut ' + x); // 6

x = 5;
var z = ++x; // x passe à 6 PUIS z prend la valeur de 6
document.write('z vaut ' + z);
document.write('z vaut ' + x);


//----------
// exo
// l'internaute a acheté 0.8kg de pommes et 0.7kg de poires.
// déclarez 4 variables, une qui contient pommes, une qui contient poires, une qui contient le poid des pommes et une qui contient le poids des poires. 
// puis vous affichez la phrase "vous avez acheté des pommes et des poires pour un poid total de 1.5kg" où les fruits et le poid total sont rémplaçés par des variables.

var fruit1 = 'pommes',
    fruit2 = 'poires',
    poids1 = 0.8,
    poids2 = 1.5,
    total = poids1 + poids2;

    document.write('<br><hr>');

    document.write(fruit1);
    document.write('<br>');

    document.write(fruit2);
    document.write('<br>'); 

    document.write(poids1);
    document.write('<br>');

    document.write(poids2);
    document.write('<br>');


    document.write('<h3>Vous avez acheté des ' +  fruit1 + ' et des ' +  fruit2 + ' pour un poid total de ' + total + ' kg</h3>');
    document.write('<hr>');

// -----------------------
// 8 - Conditions 
//------------------------
document.write('<h2>Conditions </h2>');

var a = 10,
    b = 5,
    c = 2;

//----------
// La condition if / else :
if (a > b) {
    // si la condition est évaluée à true on entre dans les accolades qui suivent.
   document.write('a est supérieur à b <br>')
} else {
   document.write('b est supérieur ou égal à a<hr>')
}

//----------
// if avec AND et
if ( a > b && b > c) {
    // si a est supérieur à b et dans le même temps b est supérieur à c, on entre dans les accolades qui suivent.
    document.write('OK pour les 2 conditions<br>');
}

//----------
// if avec OR ou
var a = 50,
    b = 5,
    c = 2;
if ( a == 9 || b > c ) {
    // si a est égal (==) à 9 OU alors que b est supérieur à c, on entre dans les accolades qui suivent.
    document.write('OK pour au moins une des deux conditions !<br><hr>');
}
//----------
// if ... else if ... else
var a = 10,
    b = 5,
    c = 2;

if (a == 8) {
    document.write('a est bien égal à 8<br>');
}else if (a != 10) {
    document.write('a est différent de 10<br>');
}else {
    document.write('Nos deux conditions sont fausses<br><hr>');
}
// notes : jamais de () après un else. Le else n'est pas obligatoire si il est vide. En ervanche, après un if il y a toujours une condition.

//----------
// L'opérateur NOT
// L'opérateur NOT qui s'écrit ! premet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;
// pour vérifier que test vaut false
console.log('test vaut : ' + test);

if (!test) {
    // le ! est une négation qui inverse le sens du booléen test seul valant false !test vaut donc true. la condition finale étant donc évaluée à true on entre dans les accolades
    document.write('j\'ai fait une négation donc on exécute ce code..<br><hr>');
}

//----------
//la comparaison avec ===

var varA = 1,
    varB = '1';

    if ( varA === varB ) {
        //  varA et varB valent toutes les deux 1 en valeur ; la condition avec == est donc vraie
        document.write('Egalité en valeur uniquement <br>')
    } else {    
        document.write('Différence en valeur uniquement <br>')
    }


    if ( varA === varB ) {
        //  varA et varB ne valent pas toutes les deux 1 en valeur ET en type ; la condition avec === est donc fausse
        document.write('Egalité en valeur ET en type <br>')
    } else {    
        document.write('Différence en valeur OU en type <br>')
    }

//----------
//Condition dite ternaire 
// la condition ternaire est une autre syntaxe de la condition if ... else en trois parties

var voiture = 'Renault';

var origine = (voiture = 'Renault') ? 'origine France<br>' : 'autre origine<br>' // comme une question que l'on pose est-ce vrai ? 
// la condition ternaire s'écrit avec un ? qui remplace le if, et une : qui remplace le else

document.write(origine);

//----------
// isNaN : is Not a Number
//  Nan  pour Not a Number on le voit dans la console

console.log(2 * 'coucou');

// les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisées pour tester si une valeur est NaN. Il faut utiliser isNaN();

var annee = '2018'; // string
if ( isNaN(annee) ) {
    // condition fausse car 2018 est bien un numeber après conversion on entre donc dans le else
    document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write ('C\'est un number après conversion <br>');
}


//  le contraire
var annee = ' juillet 2018'; // string
if ( isNaN(annee) ) {
    // ici la condition est vraie on entre donc ici
    document.write('Ce n\'est pas un number après conversion <br><hr>');
} else {
    document.write ('C\'est un number après conversion <br><hr>');
}


// EXO 
// Exercice :
/* Demandez l'âge de l'internaute dans un prompt.
   Si la réponse est vide (on compare avec des quotes vides SANS espace), on affiche "Vous n'avez pas répondu."
   Si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre."
   Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans." où X est l'âge donné par l'internaute.
*/

// exo


var age = ( prompt('Quel âge avez-vous ? ') );

if (age == '') {// age est-il vide ?
    document.write('répondez svp !')
} else if ( isNaN(age) ) {
    document.write('Vous n\'avez pas indiqué un nombre<br><hr>');
} else {
    document.write('Vous avez indiqué avoir '+ age + ' ans<br><hr>');
}


document.write('<p class="suite">à suivre...</p>');

// if (a == 8) {
//     document.write('a est bien égal à 8<br>');
// }else if (a != 10) {
//     document.write('a est différent de 10<br>');
// }else {
//     document.write('Nos deux conditions sont fausses<br><hr>');
// }

// -----------------------
// 9 - Synthèse des opérations
//------------------------

document.write('<h2> Synthèse des variables </h2>')

// Pour tester des variables entre-elles : 
/*
   == pour égal en valeur
   =! pour différent de en valeur

   === pour strictement égal en valeut ET en type
   !== pour strictement différent en valeur OU en type

   > pour plus grand que
   < pour plus petit que
   >= pour supérieur ou égal à
   <= pour inférieur ou égal à
   
*/

// Les opérateurs logiques 
/*
   &&  pour AND
   ||  pour OR
   !   pour NOT (négation)


   Les opérations effectuées avec les opérateurs logiques ne donnent que 2 résultats possibles : TRUE ou FALSE

   Exemples :
    true && true    => true
    true && false   => false
    false && false => false

    true || true => true
    true || false => true
    false || false => false

    !TRUE => false
    !FALSE => true

*/

// -----------------------
// 10 - Condition switch
//------------------------

document.write('<h2> Condition switch </h2>')

//  la condition switch est une autre syntaxe pour écrire une condition if ... else, lorsque l'on veut comparer à une multitude de valeurs
// pour faire un choix ? 

var couleur = 'bleu';

switch (couleur) {//if
    case 'bleu' : // else if
        document.write('<hr>Vous aimez le bleu<hr>');
        break;

    case 'rouge' : // else if
    document.write('<hr>Vous aimez le rouge<hr>');
    break;

    case 'violet' : // else if
    document.write('<hr>Vous aimez le violet<hr>');
    break;

    default : // else 
    document.write('Vous n\'aimez aucune de ces couleurs<hr>');
}

// -----------------------
// 11 - les boucles
//------------------------

document.write('<h2> Les boucles </h2>');

//  les boucles sont destinées à répéter des lignes de codes de façon automatique

//  while tant que 

var i = 0;

while ( i <= 5 ) { /* tant que i est inférieur ou égal à */
    // 
    document.write(i + '... ');
   i++; // on incrémente i de +1 attention si on n'incrémente pas la boucle est infinie
}
    document.write('<hr>');


//  EXO
// 

var i = 0;

while ( i <= 5 ) { 
    // tant que i est inférieur ou égal à 5
    if  (i <= 4)  {
        // et si i est inférieur ou égal à 4
        // j'écris cela 
        document.write(i + '... '); 
    }else {
        // sinon si cest supérieur (de façon tacite) à 
        document.write(i + '<p class="suite"...</p>')
        }
    i++; 

}

// switch (couleur) {//if
//     case 'bleu' : // else if
//         document.write('<hr>Vous aimez le bleu<hr>');
//         break;


//----------
// la boucle for
//  la boucle for est une autre syntaxe de la boucle while

for ( var i = 0; i <=10; i++ ) {  
    // initialisation de la var suiv d'un ; PUIS condition suivie d'un ; PUIS incrémentation ou décrémentation SANS ;
    // var i = 0; i <=10; i++
    document.write(i + '---');
}

document.write('<p class="suite">...</p>');

// EXO
//----------
// je veux afficher un menu déroulant de 1900 à 2020 inclus
document.write('<hr>');
document.write('<select>');
    document.write('<option>1900</option>');
    document.write('<option>...</option>');
    document.write('<option>2020</option>');
document.write('</select>');
document.write('<hr>');

//----------
document.write('<select>');
    for ( var i = 1900; i <=2020; i++ ) { 
        document.write('<option>' + i + '</option>');
    }
document.write('</select>');
document.write('<p class="suite">...</p>');

//----------
// la boucle do ... while existe aussi. on ne regarde la condition du while seulement à la fin pour savoir si on retourne dans la boucle ou pas ex. question obligatoire à l'internaute tant qu'il n'a pas répondu je lui repose 


document.write('<p class="suite">...</p>');
// -----------------------
// 11 - les fonctions utilisateurs
//------------------------
document.write('<h2> les fonctions utilisateurs</h2>');

// Des fonctions sont des morceaux de code encapsulés dans des accolades et portant un nom. Elles sont appelées par leur nom quand on a besoin d'exécuter tout le code qui s'y trouve
// il est d'usage de faire des fonctions simples qui réalisent des actions unitaires
// a chaque fois qu'on répète  une action 
// il existe 2 façons de déclarer une fonction en JS :

// déclarer la fonction
// 1 avec le mot clef function
function maFonction () {
    // ici le code
    document.write('<p>Il fait beau</p>');
}

// 2
// à moins utiliser
var maFonction2 = function () {
    // ici le code
    document.write('<p>Nous avons une chaude journée</p>');
}

// pour qu'une fonction s'exécute il faut l'appeler !

maFonction ();

maFonction2 ();

document.write('<p class="suite">...</p>');

//----------
// Fonctions avec paramètres : 
function direBonjour(prenom, nom) {
    // prenom et nom sont des paramètre séparés par une virgule et qui attendent des paramètres
    document.write('<p>Bonjour ' + prenom + ' ' + nom +', comment allez-vous ?</p>');
 }
 
 direBonjour ('Alice', 'Dupont');

 function pCitation(param) {
    document.write( '<p class="citation">' + param + '</p>' );
 }
 
 pCitation('Test de notre fonction');

//  faitCode ('<p>coucou</p>');

//----------
// Préambule à l'exo 
// nous avons la possibilité d'utiliser une autre fonction, ici pCitation dans les instructions de cette fonction
function meteo(saison) {
    pCitation('Nous sommes en ' + saison + '.');
}

meteo ('été');
meteo ('printemps');

document.write('<hr>');


function meteoExo (saison)  {
    
    if (saison == 'été' || saison == 'automne' || saison == 'hiver') {
        pCitation ('Nous sommes en ' + saison + '.');
    } else {
        pCitation ('Nous sommes au ' + saison + '.');
    }
}

meteoExo ('été');
meteoExo ('printemps');
meteoExo ('hiver');
meteoExo ('rezr');
//  || 'automne' || 'hiver'

// (saison == 'printemps')

//----------
// Le mot clef return qui permet de sortir une valeur d'une fonction
//  return permet de SORTIR la valeur de resultat de la fonction il retourne cette valeur à l'endroit où la fonction est appelée
function somme (a, b) {
    var resultat = a + b;
    return resultat;
}

pCitation ( 'la somme de 2 + 4 est égale à ' + somme (2, 4) ); // on récupère ici la valeur 6 de resultat grâce au return qui se trouve dans la fonction somme
// pour moi

function suite () {
    document.write('<p class="suite">...</p>');
}
suite ();

// -----------------------
// 13 - La portée des variables
//------------------------
document.write('<h2> La portée des variables</h2>');
// Selon l'endroit et la façon dont une variable est déclarée, elle pourra être accessible partout dans le script ou uniquement dans une portion limitée du code des fonctions. On parle de portée des variables (scope en anglais)

// Une variable déclarée SANS le mot clef var (façon implicite) ; elle est accessible PARTOUT dans le script, y compris au sein des fonctions elle est dite GLOBALE

// une variable déclarée AVEC le mot clef var 
// à l'extérieur d'une fonction elle sera GLOBALE 
// à l'intérieur d'une fonction elle sera LOCALE donc accessible uniquement dans cette fonction

var animal = 'Loup'; // globale
 function jungle() {
     var animal = 'Tigre'; // locale
     return animal;
 }
 pCitation (animal);
 pCitation (jungle());

suite();

var oiseau ='Aigle'; // global
function ciel() {
    oiseau = 'Faucon'; // globale car il n'y a pas 'var' devant 
    return oiseau;
}

pCitation(oiseau); // vaut Aigle car globale 

pCitation(ciel());// faucon grâce au return  et on change le contenu de la variable globale pour y mettre Faucon

pCitation(oiseau);// pas conséquent la variable oiseau contient désormais Faucon

// -----------------------
// 14 - Les arrays les tableaux
//------------------------

document.write('<h2> Les tableaux</h2>');

var monTableau = ['Charles', 'Magalie', 'Zakir', 'Elric', 92]; 
//  chaque élément à un INDICE Charles le 0 Magalie le 1 etc.

pCitation (monTableau[0]);

//  remplacer la valeur Elric par la valeur Alphonsine
monTableau[3] = 'Alphonsine';

pCitation (monTableau.length); // compter les éléments d'un tableau

// parcourir un array avec une bloucle for
for (var i = 0; i < monTableau.length ; i++) {
    pCitation(monTableau[i]);
}

suite();
//----------
// Array multidimenssionel
//  un array multidimensionnel est un trableau qui contient un plusieurs tableaux

var deuxDimensions = [ ['fraises', 'pommes', 'bananes'], ['tomates', 'carottes', 'courgettes'] ];

pCitation (deuxDimensions[0][2]);

suite();

//----------

var tableauTailles = ['S', 'M', 'L', 'XL'];
// la variable pour le tableau des tailles
for (var i = 0; i < tableauTailles.length ; i++) {
    pCitation(tableauTailles[i]);
}

document.write('<select>');
    for ( var i = 0; i < tableauTailles.length ; i++ ) { 
        document.write('<option>' + tableauTailles[i] + '</option>');
    }
document.write('</select>');

document.write('<p class="suite">...</p>');

//----------
// pop, push, unshift
// ajouter ou supprimer des valeurs au début ou à la fin d'un array

tableauTailles.push('XXL');// ajoute un élément à la fin du tableau
console.log (tableauTailles); // affichage du tableau en entier dans la console

tableauTailles.unshift('XS'); // retire le dernier
console.log (tableauTailles); // affichage du tableau en entier dans la console

tableauTailles.pop (); // retire le dernier élément
console.log (tableauTailles); 

tableauTailles.shift (); // retire le premier élément
console.log (tableauTailles); 

// -----------------------
// 15 - Les objets
//------------------------


// Un objet est un ensemble de propriétés qui correspondent à l'association d'un nom et d'une valeur. Cette valeur peut être de n'importe quel type (string, number, booléen, array, objet.....)

// De plus, la valeur de la propriété peut être une fonction. dans ce cas cette propriété s'appelle une méthode (il s'gait simplement d'une fonction dans un objet).

// Les propriétés et les méthodes d'un objet s'appellent les "membres" de cet objet.


// création d'un objet

var personnage = {
            nom : 'Tintin',// paire "propriété : valeur" suvie d'une ,
            animale : 'chien',
            amis : ['Haddock', 'Tournesol', 'Dupond & Dupont'],
            age : 35 /* pas de virgule après le dernier */
        }; 
 pCitation (personnage.nom); // affiche la valeur de la propriété d'un objet

 pCitation (personnage['nom']); // autre manière de faire

 // remplissage d'une propriété

 personnage.animal =  'Milou';

 personnage['animal'] = 'Milou';

//  pour afficher Tournesol qui est dans un array dans une propriété

pCitation(personnage.amis[1]);
//  ou d'une autre manière
pCitation(personnage['amis'][1]);

//----------
// créaton d'un objet avec une méthode
var maVoiture = {
        marque : 'Peugeot',
        couleur : 'Orange',
        motorisation : {
            energie :'diesel',
            puissance : '110CV',
            garantie : true
        },// fin motorisation
        afficherOrigine : function () {//afficherOrigine est une méthode de ma voiture
        document.write('origine française<br>')
    }// fin function 
};// fin déclaration objet ma voiture

// on identifie les méthodes ()au mot clef fucntion qui permet d'y mettre le code qu'elle doit exécuter (tout comme une fonction)

pCitation (maVoiture.marque);// affiche peugeot
document.write(maVoiture.couleur);//affiche orange

suite();

maVoiture.afficherOrigine();// affiche le texte contenu dans la fonction

pCitation(maVoiture.motorisation['energie']);
pCitation(maVoiture.motorisation.energie);

//----------
// La boucle for in :
// elle permet de parcourir les objets et de récupérer tous les membres
// ex. nous allons parcourir l'objet qui s'appelle maVouture.motorisation
suite();
// 2 fonctions pour faire une ul
function ouvreUL () {
    document.write('<ul>');
}
function fermeUL () {
    document.write('</ul>');
}
// affichage 
ouvreUL ();
for (var specifites in maVoiture.motorisation) {
    document.write ('<li>' + specifites + ' a pour valeur ' + maVoiture.motorisation[specifites] + '</li>');
}
fermeUL();

// membre s'appelle un "référent" : c'est sa place dans la syntaxe du for...in qui détermine que "membre" récupère le nom des propriétés à chaque tour de boucle. Ainsi, maVoiture.motorisation[membre] permet de récupérer la valeur correspondante à la propriété contenu dans "membre". Note : on ne met pas de quote à membre dans les [] car il s'agit d'une variable.


//--------------------------
// 16- Propriété et méthodes de l'objet string
//--------------------------

document.write('<h2> Propriété et méthodes de l\'objet string </h2>');

// propriété length : 
animal = 'Loup';
pCitation(animal.length);  // affiche 4 soit le nombre de caractère du string contenu dans la variable animal

// méthode trim() : 
var adresse = '          16, rue de Seine          ';
pCitation('adresse avec des espaces : ' + adresse.length);  // longueur y compris des espaces
pCitation('adresse sans les espaces : ' + adresse.trim().length);  // la méthode trim() supprime les espaces en début et en fin de chaîne (utile pour nettoyer les données d'un formulaire)

// Notez qu'une méthode comporte toujours des ().

//------------------------
// Trouvez les ressources sur le net : 
// Le site de référence du JS : MDN
// https://developer.mozilla.org

// Pour aller plus loin : 
// openclassrooms.com
// codecademy.com     cours, forum, exercices
=======
// -----------------------------------
// 1 - commentaires
// -----------------------------------

// commentaire sur une seule ligne

/*
sur plusieurs lignes
*/

// -----------------------------------
// 2 - affichage
// -----------------------------------

document.write('Mon premier message en JavaScript'); // affichage dans le navigateur attention façon très moche de faire du html

document.write('<h1>Les base du JS</h1>'); // on peut mettre des balises html elles sont interprétées et donc insérée dans le html

// les instructions se suivent du haut en bas

// les boites de dialogue : il y en a 3 en JS

// alert('Bonjour'); // affiche un message
// confirm('Etes-vous sûr ?'); // message avec un bouton ok ou annuler
// prompt('Quel est votre code postal ? '); // on attend une réponde avec un champs à remplir

// -------------
// a- affichage dans la console
// -------------

console.log('Attention aux erreurs de syntaxe dans la console'); // message écrit dans la console

// -----------------------------------
// 3 - variables - déclaration - affectation
// -----------------------------------

//----------
document.write('<h2> 3 - variables - déclaration - affectation</h2>');
// une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. de n'importe quel type ; chiffre, chaîne de caractères, une balise HTML etc.

// déclaration d'une variable : (convention de nommagea a à z etc.)
var maBoite; // le mot clef va permettre de déclarer ma variable nommée maBoite

// affectation d'une variable
maBoite = 10; // on affecte une variable avec le signe = elle contient 10 = est un signe d'affectation le signe égal c'est ==

document.write(maBoite); // on affiche le contenu de la variable sans apostrophe sans quotes

var maBoite = 10 // on peut déclarer et affecter une variable en même temps nous retiendrons cette écriture

monAutreBoite = 'bonjour'; // sans var déclaration non conventionnelle de plus ce n'est pas la même siginifcation cf. portée des variables

document.write('<br>');

// déclarer et affecter plusieurs variables en même temps
var prenom = 'Sylvie',
    nom = 'Pistono',
    genre = 'féminin'; // une seul var avec un saut de ligne et une virgule fin ;

    document.write(prenom); // affiche Sylvie
    document.write('<br>');

//----------
// changer la valeur d'une variable
prenom = 'Pierre'; // nous changeons la valeur d'une variable

document.write(prenom);
document.write('<br>');

prenom = nom; // nous affectons à une variable le contenu d'une autre variable

document.write(prenom);
document.write('<br>');

//----------
// ajouter une valeur à la valeur déjà existante d'une variable
var fruit='pomme';
fruit += 'fraise';// on ajout la chaîne de caractère fraise à pomme qui est déjà existante à la variable fruit avec l'opérateur +=

document.write(fruit);
document.write('<br>');

//----------
// utiliser prompt avec une variable
var codePostal = prompt('Votre code postal, svp');

document.write(codePostal);// affiche le code postel indiqué par l'internaute
document.write('<br>');


// -----------------------------------
// 4 - Types de données
// -----------------------------------

document.write('<h2>Types de données</h2>');

// les types de données 3 types de données

//  les types numériques appelés NUMBER :

var chiffre = 20; // les numbers s'écrivent sans apostrophes ni guillemets, entiers, décimaux, 

//  les types chaînes de caractères appelés STRING :
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utilister le caractères d\'échappement pour les apostrophes dans des quotes';

var numero = '10'; // un chiffre dans des quotes ou des guillemets est interprété comme une chaîne de caractères

// le type booléen (ou boolean)
// le type booléen ne prend que 2 valeurs : TRUE ou FALSE
var choix = true; // s'écrit sans quotes

//----------
// typeof permet de vérifier le type d'une variable 
document.write(typeof(chiffre));
document.write('<br>');

// typeof permet de vérifier le type d'une variable 
document.write(typeof(texte));
document.write('<br>');

// typeof permet de vérifier le type d'une variable 
document.write(typeof(numero));
document.write('<br>');

// typeof permet de vérifier le type d'une variable 
document.write(typeof(choix));
document.write('<br>');

// -----------------------------------
// 5 - Constantes
// -----------------------------------


document.write('<h2>Les constantes</h2>');
// les constantes sont comme des variables dont la valeur ne peut pas être modifiée. Elles permettent de protéger cette valeur nécessaire au bon fonctionnement du script

const CHANGE_PAS = 'ma constante impossible à modifier'; // par conventino les constantes s'on en MAJUSCULES

document.write(CHANGE_PAS);
document.write('<br>');

// CHANGE_PAS ='autre valeur'; // erreur bloquante de type invalid assignement to const CHANGE_PAS


// -----------------------------------
// 6 - Concaténation "écrire côte à côte, faire suivre de" 
// -----------------------------------

//  en js on fait suivre des variables et des strings avec le symbole + 

var prenom ='Bruce',
    nom = 'Lee';

    document.write(prenom + ' ' + nom + '<br>'); // concatène la variable prénom avec un espace, la variable nom et la balise br

    var personnage = prenom + ' ' + nom + '<br>'; // on peut concaténer des éléments au sein d'une variable
    document.write


// -----------------------------------
// 7 - Opérateurs arithmétiques 
// -----------------------------------

document.write('<h2>Opérateurs arithmétiques</h2>');

var resultat;

resultat = 10 + 5; // addition
resultat = 10 - 5; // soustraction
resultat = 10 * 5; // multiplication
resultat = 10 / 5; // division
resultat = 10 % 5; // modulo ; ex. des billes qui sont incassables 3 billes à répartir entre deux personnes

//----------
// on peut appliquer les opérateurs aux variables
var chiffre1 =  10,
    chiffre2 = 5;

    resultat = chiffre1 + chiffre2;

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // cette syntaxe n'est pas conventionnelle on utilise la syntaxe suivante :
chiffre3 +=5; // cette syntaxe fait la même chose que la précédente et c'est celle que l'on retiendra chiffre3 vaut ici 25

// fonctionne avec tous les opérateurs : +=, /=, *=, -= et %=

//----------
// incrémenter et décrémenter ;
var i = 0;
i++; // incrémenter i de +1 i vaut donc 1
i--; // décrémenter i de -i, i vaut donc 0

// i++ et ++i ont le même résultat à la différence près :
// i++ retourne la valeur de i AVANT d'effectuer l'opération
// ++i retourne la valeur APRES avoir effectué l'opération

var x = 5;
var y = x++; // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut ' + y + '<br>'); // 5
document.write('x vaut ' + x); // 6

x = 5;
var z = ++x; // x passe à 6 PUIS z prend la valeur de 6
document.write('z vaut ' + z);
document.write('z vaut ' + x);


//----------
// exo
// l'internaute a acheté 0.8kg de pommes et 0.7kg de poires.
// déclarez 4 variables, une qui contient pommes, une qui contient poires, une qui contient le poid des pommes et une qui contient le poids des poires. 
// puis vous affichez la phrase "vous avez acheté des pommes et des poires pour un poid total de 1.5kg" où les fruits et le poid total sont rémplaçés par des variables.

var fruit1 = 'pommes',
    fruit2 = 'poires',
    poids1 = 0.8,
    poids2 = 1.5,
    total = poids1 + poids2;

    document.write('<br><hr>');

    document.write(fruit1);
    document.write('<br>');

    document.write(fruit2);
    document.write('<br>'); 

    document.write(poids1);
    document.write('<br>');

    document.write(poids2);
    document.write('<br>');


    document.write('<h3>Vous avez acheté des ' +  fruit1 + ' et des ' +  fruit2 + ' pour un poid total de ' + total + ' kg</h3>');
    document.write('<hr>');

// -----------------------
// 8 - Conditions 
//------------------------
document.write('<h2>Conditions </h2>');

var a = 10,
    b = 5,
    c = 2;

//----------
// La condition if / else :
if (a > b) {
    // si la condition est évaluée à true on entre dans les accolades qui suivent.
   document.write('a est supérieur à b <br>')
} else {
   document.write('b est supérieur ou égal à a<hr>')
}

//----------
// if avec AND et
if ( a > b && b > c) {
    // si a est supérieur à b et dans le même temps b est supérieur à c, on entre dans les accolades qui suivent.
    document.write('OK pour les 2 conditions<br>');
}

//----------
// if avec OR ou
var a = 50,
    b = 5,
    c = 2;
if ( a == 9 || b > c ) {
    // si a est égal (==) à 9 OU alors que b est supérieur à c, on entre dans les accolades qui suivent.
    document.write('OK pour au moins une des deux conditions !<br><hr>');
}
//----------
// if ... else if ... else
var a = 10,
    b = 5,
    c = 2;

if (a == 8) {
    document.write('a est bien égal à 8<br>');
}else if (a != 10) {
    document.write('a est différent de 10<br>');
}else {
    document.write('Nos deux conditions sont fausses<br><hr>');
}
// notes : jamais de () après un else. Le else n'est pas obligatoire si il est vide. En ervanche, après un if il y a toujours une condition.

//----------
// L'opérateur NOT
// L'opérateur NOT qui s'écrit ! premet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;
// pour vérifier que test vaut false
console.log('test vaut : ' + test);

if (!test) {
    // le ! est une négation qui inverse le sens du booléen test seul valant false !test vaut donc true. la condition finale étant donc évaluée à true on entre dans les accolades
    document.write('j\'ai fait une négation donc on exécute ce code..<br><hr>');
}

//----------
//la comparaison avec ===

var varA = 1,
    varB = '1';

    if ( varA === varB ) {
        //  varA et varB valent toutes les deux 1 en valeur ; la condition avec == est donc vraie
        document.write('Egalité en valeur uniquement <br>')
    } else {    
        document.write('Différence en valeur uniquement <br>')
    }


    if ( varA === varB ) {
        //  varA et varB ne valent pas toutes les deux 1 en valeur ET en type ; la condition avec === est donc fausse
        document.write('Egalité en valeur ET en type <br>')
    } else {    
        document.write('Différence en valeur OU en type <br>')
    }

//----------
//Condition dite ternaire 
// la condition ternaire est une autre syntaxe de la condition if ... else en trois parties

var voiture = 'Renault';

var origine = (voiture = 'Renault') ? 'origine France<br>' : 'autre origine<br>' // comme une question que l'on pose est-ce vrai ? 
// la condition ternaire s'écrit avec un ? qui remplace le if, et une : qui remplace le else

document.write(origine);

//----------
// isNaN : is Not a Number
//  Nan  pour Not a Number on le voit dans la console

console.log(2 * 'coucou');

// les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisées pour tester si une valeur est NaN. Il faut utiliser isNaN();

var annee = '2018'; // string
if ( isNaN(annee) ) {
    // condition fausse car 2018 est bien un numeber après conversion on entre donc dans le else
    document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write ('C\'est un number après conversion <br>');
}


//  le contraire
var annee = ' juillet 2018'; // string
if ( isNaN(annee) ) {
    // ici la condition est vraie on entre donc ici
    document.write('Ce n\'est pas un number après conversion <br><hr>');
} else {
    document.write ('C\'est un number après conversion <br><hr>');
}


// EXO 
// Exercice :
/* Demandez l'âge de l'internaute dans un prompt.
   Si la réponse est vide (on compare avec des quotes vides SANS espace), on affiche "Vous n'avez pas répondu."
   Si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre."
   Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans." où X est l'âge donné par l'internaute.
*/

// exo


var age = ( prompt('Quel âge avez-vous ? ') );

if (age == '') {// age est-il vide ?
    document.write('répondez svp !')
} else if ( isNaN(age) ) {
    document.write('Vous n\'avez pas indiqué un nombre<br><hr>');
} else {
    document.write('Vous avez indiqué avoir '+ age + ' ans<br><hr>');
}


document.write('<p class="suite">à suivre...</p>');

// if (a == 8) {
//     document.write('a est bien égal à 8<br>');
// }else if (a != 10) {
//     document.write('a est différent de 10<br>');
// }else {
//     document.write('Nos deux conditions sont fausses<br><hr>');
// }

// -----------------------
// 9 - Synthèse des opérations
//------------------------

document.write('<h2> Synthèse des variables </h2>')

// Pour tester des variables entre-elles : 
/*
   == pour égal en valeur
   =! pour différent de en valeur

   === pour strictement égal en valeut ET en type
   !== pour strictement différent en valeur OU en type

   > pour plus grand que
   < pour plus petit que
   >= pour supérieur ou égal à
   <= pour inférieur ou égal à
   
*/

// Les opérateurs logiques 
/*
   &&  pour AND
   ||  pour OR
   !   pour NOT (négation)


   Les opérations effectuées avec les opérateurs logiques ne donnent que 2 résultats possibles : TRUE ou FALSE

   Exemples :
    true && true    => true
    true && false   => false
    false && false => false

    true || true => true
    true || false => true
    false || false => false

    !TRUE => false
    !FALSE => true

*/

// -----------------------
// 10 - Condition switch
//------------------------

document.write('<h2> Condition switch </h2>')

//  la condition switch est une autre syntaxe pour écrire une condition if ... else, lorsque l'on veut comparer à une multitude de valeurs
// pour faire un choix ? 

var couleur = 'bleu';

switch (couleur) {//if
    case 'bleu' : // else if
        document.write('<hr>Vous aimez le bleu<hr>');
        break;

    case 'rouge' : // else if
    document.write('<hr>Vous aimez le rouge<hr>');
    break;

    case 'violet' : // else if
    document.write('<hr>Vous aimez le violet<hr>');
    break;

    default : // else 
    document.write('Vous n\'aimez aucune de ces couleurs<hr>');
}

// -----------------------
// 11 - les boucles
//------------------------

document.write('<h2> Les boucles </h2>');

//  les boucles sont destinées à répéter des lignes de codes de façon automatique

//  while tant que 

var i = 0;

while ( i <= 5 ) { /* tant que i est inférieur ou égal à */
    // 
    document.write(i + '... ');
   i++; // on incrémente i de +1 attention si on n'incrémente pas la boucle est infinie
}
    document.write('<hr>');


//  EXO
// 

var i = 0;

while ( i <= 5 ) { 
    // tant que i est inférieur ou égal à 5
    if  (i <= 4)  {
        // et si i est inférieur ou égal à 4
        // j'écris cela 
        document.write(i + '... '); 
    }else {
        // sinon si cest supérieur (de façon tacite) à 
        document.write(i + '<p class="suite"...</p>')
        }
    i++; 

}

// switch (couleur) {//if
//     case 'bleu' : // else if
//         document.write('<hr>Vous aimez le bleu<hr>');
//         break;


//----------
// la boucle for
//  la boucle for est une autre syntaxe de la boucle while

for ( var i = 0; i <=10; i++ ) {  
    // initialisation de la var suiv d'un ; PUIS condition suivie d'un ; PUIS incrémentation ou décrémentation SANS ;
    // var i = 0; i <=10; i++
    document.write(i + '---');
}

document.write('<p class="suite">...</p>');

// EXO
//----------
// je veux afficher un menu déroulant de 1900 à 2020 inclus
document.write('<hr>');
document.write('<select>');
    document.write('<option>1900</option>');
    document.write('<option>...</option>');
    document.write('<option>2020</option>');
document.write('</select>');
document.write('<hr>');

//----------
document.write('<select>');
    for ( var i = 1900; i <=2020; i++ ) { 
        document.write('<option>' + i + '</option>');
    }
document.write('</select>');
document.write('<p class="suite">...</p>');

//----------
// la boucle do ... while existe aussi. on ne regarde la condition du while seulement à la fin pour savoir si on retourne dans la boucle ou pas ex. question obligatoire à l'internaute tant qu'il n'a pas répondu je lui repose 


document.write('<p class="suite">...</p>');
// -----------------------
// 11 - les fonctions utilisateurs
//------------------------
document.write('<h2> les fonctions utilisateurs</h2>');

// Des fonctions sont des morceaux de code encapsulés dans des accolades et portant un nom. Elles sont appelées par leur nom quand on a besoin d'exécuter tout le code qui s'y trouve
// il est d'usage de faire des fonctions simples qui réalisent des actions unitaires
// a chaque fois qu'on répète  une action 
// il existe 2 façons de déclarer une fonction en JS :

// déclarer la fonction
// 1 avec le mot clef function
function maFonction () {
    // ici le code
    document.write('<p>Il fait beau</p>');
}

// 2
// à moins utiliser
var maFonction2 = function () {
    // ici le code
    document.write('<p>Nous avons une chaude journée</p>');
}

// pour qu'une fonction s'exécute il faut l'appeler !

maFonction ();

maFonction2 ();

document.write('<p class="suite">...</p>');

//----------
// Fonctions avec paramètres : 
function direBonjour(prenom, nom) {
    // prenom et nom sont des paramètre séparés par une virgule et qui attendent des paramètres
    document.write('<p>Bonjour ' + prenom + ' ' + nom +', comment allez-vous ?</p>');
 }
 
 direBonjour ('Alice', 'Dupont');

 function pCitation(param) {
    document.write( '<p class="citation">' + param + '</p>' );
 }
 
 pCitation('Test de notre fonction');

//  faitCode ('<p>coucou</p>');

//----------
// Préambule à l'exo 
// nous avons la possibilité d'utiliser une autre fonction, ici pCitation dans les instructions de cette fonction
function meteo(saison) {
    pCitation('Nous sommes en ' + saison + '.');
}

meteo ('été');
meteo ('printemps');

document.write('<hr>');


function meteoExo (saison)  {
    
    if (saison == 'été' || saison == 'automne' || saison == 'hiver') {
        pCitation ('Nous sommes en ' + saison + '.');
    } else {
        pCitation ('Nous sommes au ' + saison + '.');
    }
}

meteoExo ('été');
meteoExo ('printemps');
meteoExo ('hiver');
meteoExo ('rezr');
//  || 'automne' || 'hiver'

// (saison == 'printemps')

//----------
// Le mot clef return qui permet de sortir une valeur d'une fonction
//  return permet de SORTIR la valeur de resultat de la fonction il retourne cette valeur à l'endroit où la fonction est appelée
function somme (a, b) {
    var resultat = a + b;
    return resultat;
}

pCitation ( 'la somme de 2 + 4 est égale à ' + somme (2, 4) ); // on récupère ici la valeur 6 de resultat grâce au return qui se trouve dans la fonction somme
// pour moi

function suite () {
    document.write('<p class="suite">...</p>');
}
suite ();

// -----------------------
// 13 - La portée des variables
//------------------------
document.write('<h2> La portée des variables</h2>');
// Selon l'endroit et la façon dont une variable est déclarée, elle pourra être accessible partout dans le script ou uniquement dans une portion limitée du code des fonctions. On parle de portée des variables (scope en anglais)

// Une variable déclarée SANS le mot clef var (façon implicite) ; elle est accessible PARTOUT dans le script, y compris au sein des fonctions elle est dite GLOBALE

// une variable déclarée AVEC le mot clef var 
// à l'extérieur d'une fonction elle sera GLOBALE 
// à l'intérieur d'une fonction elle sera LOCALE donc accessible uniquement dans cette fonction

var animal = 'Loup'; // globale
 function jungle() {
     var animal = 'Tigre'; // locale
     return animal;
 }
 pCitation (animal);
 pCitation (jungle());

suite();

var oiseau ='Aigle'; // global
function ciel() {
    oiseau = 'Faucon'; // globale car il n'y a pas 'var' devant 
    return oiseau;
}

pCitation(oiseau); // vaut Aigle car globale 

pCitation(ciel());// faucon grâce au return  et on change le contenu de la variable globale pour y mettre Faucon

pCitation(oiseau);// pas conséquent la variable oiseau contient désormais Faucon

// -----------------------
// 14 - Les arrays les tableaux
//------------------------

document.write('<h2> Les tableaux</h2>');

var monTableau = ['Charles', 'Magalie', 'Zakir', 'Elric', 92]; 
//  chaque élément à un INDICE Charles le 0 Magalie le 1 etc.

pCitation (monTableau[0]);

//  remplacer la valeur Elric par la valeur Alphonsine
monTableau[3] = 'Alphonsine';

pCitation (monTableau.length); // compter les éléments d'un tableau

// parcourir un array avec une bloucle for
for (var i = 0; i < monTableau.length ; i++) {
    pCitation(monTableau[i]);
}

suite();
//----------
// Array multidimenssionel
//  un array multidimensionnel est un trableau qui contient un plusieurs tableaux

var deuxDimensions = [ ['fraises', 'pommes', 'bananes'], ['tomates', 'carottes', 'courgettes'] ];

pCitation (deuxDimensions[0][2]);

suite();

//----------

var tableauTailles = ['S', 'M', 'L', 'XL'];
// la variable pour le tableau des tailles
for (var i = 0; i < tableauTailles.length ; i++) {
    pCitation(tableauTailles[i]);
}

document.write('<select>');
    for ( var i = 0; i < tableauTailles.length ; i++ ) { 
        document.write('<option>' + tableauTailles[i] + '</option>');
    }
document.write('</select>');

document.write('<p class="suite">...</p>');

//----------
// pop, push, unshift
// ajouter ou supprimer des valeurs au début ou à la fin d'un array

tableauTailles.push('XXL');// ajoute un élément à la fin du tableau
console.log (tableauTailles); // affichage du tableau en entier dans la console

tableauTailles.unshift('XS'); // retire le dernier
console.log (tableauTailles); // affichage du tableau en entier dans la console

tableauTailles.pop (); // retire le dernier élément
console.log (tableauTailles); 

tableauTailles.shift (); // retire le premier élément
console.log (tableauTailles); 

// -----------------------
// 15 - Les objets
//------------------------


// Un objet est un ensemble de propriétés qui correspondent à l'association d'un nom et d'une valeur. Cette valeur peut être de n'importe quel type (string, number, booléen, array, objet.....)

// De plus, la valeur de la propriété peut être une fonction. dans ce cas cette propriété s'appelle une méthode (il s'gait simplement d'une fonction dans un objet).

// Les propriétés et les méthodes d'un objet s'appellent les "membres" de cet objet.


// création d'un objet

var personnage = {
            nom : 'Tintin',// paire "propriété : valeur" suvie d'une ,
            animale : 'chien',
            amis : ['Haddock', 'Tournesol', 'Dupond & Dupont'],
            age : 35 /* pas de virgule après le dernier */
        }; 
 pCitation (personnage.nom); // affiche la valeur de la propriété d'un objet

 pCitation (personnage['nom']); // autre manière de faire

 // remplissage d'une propriété

 personnage.animal =  'Milou';

 personnage['animal'] = 'Milou';

//  pour afficher Tournesol qui est dans un array dans une propriété

pCitation(personnage.amis[1]);
//  ou d'une autre manière
pCitation(personnage['amis'][1]);

//----------
// créaton d'un objet avec une méthode
var maVoiture = {
        marque : 'Peugeot',
        couleur : 'Orange',
        motorisation : {
            energie :'diesel',
            puissance : '110CV',
            garantie : true
        },// fin motorisation
        afficherOrigine : function () {//afficherOrigine est une méthode de ma voiture
        document.write('origine française<br>')
    }// fin function 
};// fin déclaration objet ma voiture

// on identifie les méthodes ()au mot clef fucntion qui permet d'y mettre le code qu'elle doit exécuter (tout comme une fonction)

pCitation (maVoiture.marque);// affiche peugeot
document.write(maVoiture.couleur);//affiche orange

suite();

maVoiture.afficherOrigine();// affiche le texte contenu dans la fonction

pCitation(maVoiture.motorisation['energie']);
pCitation(maVoiture.motorisation.energie);

//----------
// La boucle for in :
// elle permet de parcourir les objets et de récupérer tous les membres
// ex. nous allons parcourir l'objet qui s'appelle maVouture.motorisation
suite();
// 2 fonctions pour faire une ul
function ouvreUL () {
    document.write('<ul>');
}
function fermeUL () {
    document.write('</ul>');
}
// affichage 
ouvreUL ();
for (var specifites in maVoiture.motorisation) {
    document.write ('<li>' + specifites + ' a pour valeur ' + maVoiture.motorisation[specifites] + '</li>');
}
fermeUL();

// membre s'appelle un "référent" : c'est sa place dans la syntaxe du for...in qui détermine que "membre" récupère le nom des propriétés à chaque tour de boucle. Ainsi, maVoiture.motorisation[membre] permet de récupérer la valeur correspondante à la propriété contenu dans "membre". Note : on ne met pas de quote à membre dans les [] car il s'agit d'une variable.


//--------------------------
// 16- Propriété et méthodes de l'objet string
//--------------------------

document.write('<h2> Propriété et méthodes de l\'objet string </h2>');

// propriété length : 
animal = 'Loup';
pCitation(animal.length);  // affiche 4 soit le nombre de caractère du string contenu dans la variable animal

// méthode trim() : 
var adresse = '          16, rue de Seine          ';
pCitation('adresse avec des espaces : ' + adresse.length);  // longueur y compris des espaces
pCitation('adresse sans les espaces : ' + adresse.trim().length);  // la méthode trim() supprime les espaces en début et en fin de chaîne (utile pour nettoyer les données d'un formulaire)

// Notez qu'une méthode comporte toujours des ().

//------------------------
// Trouvez les ressources sur le net : 
// Le site de référence du JS : MDN
// https://developer.mozilla.org

// Pour aller plus loin : 
// openclassrooms.com
// codecademy.com     cours, forum, exercices
>>>>>>> d6b5357fe72264e0348d8530a7709e541a011887
//developer.mozilla.org