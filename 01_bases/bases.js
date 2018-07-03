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
    document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write ('C\'est un number après conversion <br>');
}
