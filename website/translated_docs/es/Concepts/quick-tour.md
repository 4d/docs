---
id: quick-tour
title: Tour d'horizon
sidebar_label: Tour d'horizon
---

En utilisant le langage 4D, le traditionnel "Hello, world!" peut s'afficher à l'écran de plusieurs manières. Le plus simple est probablement d'écrire la ligne suivante dans une méthode de projet :

```4d
ALERT("Hello, World!")
```

Ce code affichera une boîte de dialogue d'alerte standard contenant le message "Hello, World!" et un bouton OK. Pour exécuter le code, il vous suffit de cliquer sur le bouton d'exécution dans l'éditeur de méthode :

![alt-text](assets/en/Concepts/helloworld.png)

Vous pouvez également associer ce code à un bouton de formulaire et exécuter le formulaire. Dans ce cas, en cliquant sur le bouton, vous afficherez la boîte de dialogue d'alerte. Dans tous les cas, vous venez d'exécuter votre première ligne de code 4D !

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables, aux champs, aux éléments de tableaux et/ou récupérer leur valeur. Donner une valeur à une variable s’appelle assigner une valeur (ou affecter une valeur) et s’effectue à l’aide de l’opérateur d’assignation (:=). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs ou aux éléments de tableaux.

```4d
$MyNumber:=3 //assigne 3 à la variable MyNumber
[Products]Size:=$MyNumber //assigne la variable MyNumber au champ [Products]Size
arrDays{2}:="Mardi" //assigne la chaîne "Mardi" au 2ème élément arrDays
MyVar:=Length("Acme") //assigne le résultat de la fonction (4) à MyVar
$myDate:=!2018/01/21! //assigne une date littérale
$myHour:=?08:12:55? //assigne une heure littérale
```

Vous devez impérativement distinguer l'opérateur d'affectation := des autres opérateurs. Plutôt que de combiner des expressions dans une nouvelle expression, l'opérateur d'affectation copie la valeur de l'expression à droite de l'opérateur d'affectation dans la variable ou le champ situé à gauche de l'opérateur.

**Important :** Ne confondez pas l’opérateur d’assignation (:=) avec le signe égal (=). Un opérateur d'affectation différent (et non pas =) a été choisi délibérément pour éviter les problèmes et la confusion qui surviennent souvent avec == ou === dans d'autres langages de programmation. De telles erreurs sont souvent difficiles à reconnaître pour le compilateur et conduisent à un dépannage fastidieux.

## Variables

Le langage 4D est fortement typé, bien qu'une certaine flexibilité soit autorisée dans de nombreux cas. Vous créez une variable typée à l'aide d'une commande `C_XXX`. Par exemple, pour créer une variable du type date, vous pouvez écrire :

```4d
C_DATE(MyDate) //Type date pour la variable MyDate
```

Même si cela est généralement déconseillé, vous pouvez créer des variables simplement en les utilisant; il n’est pas obligatoire de les déclarer formellement comme vous le faites avec les champs. Par exemple, si vous voulez créer une variable qui contient la date du jour plus 30 jours, il vous suffit d’écrire dans 4D :

```4d
MyOtherDate:=Current date+30
```

Le programme interprète la ligne comme “MyDate prend la valeur de la date courante plus 30 jours”. Cette ligne crée la variable et l'affecte (temporairement) au type de date et à un contenu. Une variable créée par affectation est interprétée comme étant non typée, c'est-à-dire qu'elle peut être affectée à d'autres types dans d'autres lignes, puis modifie le type de manière dynamique. Une variable typée avec `C_XXX` ne peut pas changer le type. En mode compilé, le type ne peut jamais être modifié, quelle que soit la manière dont la variable a été créée.

## Commandes

Les commandes 4D sont des méthodes intégrées qui permettent d'effectuer une action. Toutes les commandes 4D, telles que `CREATE RECORD` ou `ALERT`, sont décrites dans le *Manuel Langage de 4D*, et sont regroupées par thème. Les commandes sont souvent utilisées avec des paramètres qui sont passés entre parenthèses () et séparés par des points-virgules (;). Exemple :

```4d
COPY DOCUMENT("dossier1\\nom1";"dossier2\\" ; "nouveau")
```

Certaines commandes sont reliées à des collections ou à des objets, auquel cas ce sont des méthodes nommées qui sont utilisées à l'aide de la notation en point. Par exemple:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

Vous pouvez utiliser des plug-ins ou des composants 4D qui ajoutent de nouvelles commandes à votre environnement de développement 4D.

Il existe de nombreux plug-ins proposés par la communauté des utilisateurs de 4D ou des développeurs tiers. Par exemple, en utilisant les pages [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) sur macOS :

```4d
PDF REMOVE PAGE(path;page)
```

4D SVG est un exemple de composant utilitaire qui augmente les capacités de votre application :

```4d
//faire un dessin
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG est inclus dans 4D.

## Constantes

4D propose un large ensemble de constantes prédéfinies, dont les valeurs sont accessibles par un nom. Par exemple, `XML DATA` est une constante (valeur 6). Par défaut, les constantes prédéfinies sont soulignées dans l'éditeur de méthodes 4D. Elles permettent d'écrire un code plus lisible.

```4d
vRef:=Open document("PassFile";"TEXTE";Read Mode) // ouvrir le doc en mode lecture seule
```

## Méthodes

4D propose un grand nombre de méthodes (ou de commandes) intégrées, mais vous permet également de créer vos propres **méthodes de projet**. Les méthodes de projet sont des méthodes définies par l'utilisateur qui contiennent des commandes, des opérateurs et d'autres parties du langage. Les méthodes projet sont des méthodes génériques, mais il existe d'autres types de méthodes : les méthodes objet, les méthodes formulaire, les méthodes table (Triggers) et les méthodes base.

Une méthode est composée de plusieurs lignes d’instructions. Une ligne d’instructions effectue une action. Cette ligne d’instruction peut être simple ou complexe.

Par exemple, la ligne de code suivante est une instruction qui affichera une boîte de dialogue de confirmation :

```4d
CONFIRM("Souhaitez-vous vraiment clore ce compte ?";"Oui";"Non")
```

Une méthode contient également des testes et des boucles qui gèrent le flux d'exécution. Les méthodes 4D prennent en charge les structures `If...Else...End if` et `Case of...Else...End case` ainsi que les boucles : `While...End while`, `Repeat...Until`, `For...End for`, et `For each...End for each`:

L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```4d
For($vlChar;1;Length(vtSomeText))
    //Faire quelque chose avec le caractère s'il s'agit d'une tabulation
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        //...
    End if
End for
```

Une méthode projet peut en appeler une autre avec ou sans les paramètres (arguments). Les paramètres sont passés à la méthode entre parenthèses, à la suite du nom de la méthode. Chaque paramètre est séparé par des points virgule (;). Les paramètres sont passés à la méthode appelée en tant que variables locales numérotées séquentiellement : $1, $2,…, $n. Une méthode peut retourner une seule valeur dans le paramètre $0. Lorsque vous appelez une méthode, vous saisissez simplement son nom :

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Appelle la méthode Do_Something
ALERT($myText) //"HELLO"

  //Voici le code de la méthode Do_Something
$0:=Uppercase($1)
```

## Types de données

De nombreux types de données peuvent être manipulés via le langage 4D. Il existe des types de données élémentaires (chaîne, numérique, date, heure, booléen, image, pointeur, tableau), ainsi que des types de données composites (BLOBs, objets, collections).

A noter que les données de type chaîne et numérique peuvent être associées à plusieurs types de champ. Lorsque des données sont placées dans un champ, le langage les convertit automatiquement dans le type du champ. Par exemple, si un champ de type entier est utilisé, les valeurs qu’il contient sont automatiquement traitées en tant que numériques. En d’autres termes, vous n’avez pas à vous préoccuper du mélange de champs de types semblables lorsque vous programmez avec 4D ; le langage le gère pour vous.

Cependant, il est important, lorsque vous utilisez le langage, de ne pas mélanger les différents types de données. Tout comme il est absurde de stocker la valeur “ABC” dans un champ de type Date, il est absurde de donner la valeur “ABC” à une variable utilisée pour des dates. Dans la plupart des cas, 4D est très tolérant et tentera d’utiliser de manière logique ce que vous faites. Par exemple, si vous additionnez un nombre x et une date, 4D déduira que vous voulez ajouter x jours à la date, mais si vous tentez d’ajouter une chaîne à une date, 4D vous préviendra que cette opération est impossible.

Certains cas nécessitent que vous stockiez des données dans un type et que vous les utilisiez dans un autre. Le langage contient un ensemble complet de commandes vous permettant de convertir des types de données en d’autres types. Par exemple, si vous voulez créer un numéro de matricule commençant par des chiffres et se terminant par des lettres, telles que "abc", vous pouvez écrire :

```4d
[Produits]Matricule:=String(Numéro)+"abc"
```

Si *Numéro* vaut 17, *[Produits]Matricule* prendra la valeur “17abc”.

Les types de données sont détaillés dans la section [Types de données](Concepts/data-types.md).

## Objets et collections

Vous pouvez gérer les objets et collections du langage 4D à l'aide de la notation objet pour lire ou définir leurs valeurs. Par exemple:

```4d
employee.name:="Smith"
```

Vous pouvez également utiliser de crochets, comme dans l'exemple ci-dessous :

```4d
$vName:=employee["nom"]
```

Comme la valeur d'une propriété d'objet peut elle-même être un objet ou une collection, la notation objet requiert une séquence de symboles pour accéder aux sous-propriétés, par exemple :

```4d
$vAge:=employee.children[2].age
```

A noter que si la valeur de la propriété de l'objet est un objet qui encapsule une méthode (une formule), vous devez ajouter des parenthèses () au nom de la propriété pour exécuter la méthode :

    $f:=New object
    $f.message:=New formula(ALERT("Hello world!"))
    $f.message() //affiche "Hello world!"
    

Pour accéder à un élément de collection, vous devez passer le numéro de l'élément situé entre crochets :

```4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //accède au 4ème élément de la collection
```

## Classes

The 4D language supports object classes. Add a `myClass.4dm` file in the Project/Sources/Classes folder of a project to create a class named "myClass".

To instantiate an object of the class in a method, call the user class from the *class store* (`cs`) and use the `new()` member function. You can pass parameters.

```4d
// in a 4D method
$o:=cs.myClass.new() 
```

In the `myClass` class method, use the `Function <methodName>` statement to define the *methodName* class member method. A class member method can receive and return parameters like any method, and use `This` as the object instance.

```4d
//in the myClass.4dm file
Function hello
  C_TEXT($0)
  $0:="Hello "+This.who
```

To execute a class member method, just use the `()` operator on the member method of the object instance.

```4d
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message: "Hello World"
```

Optionally, use the `Class constructor` keyword to declare properties of the object.

```4d
//in the Rectangle.4dm file
Class constructor
C_LONGINT($1;$2)
This.height:=$1
This.width:=$2  
This.name:="Rectangle"
```

A class can inherit from another class by using `Class inherits <ClassName>`. Superclasses can be called using the `Super` command. Par exemple:

```4d
//in the Square.4dm file
Class extends rectangle

Class constructor
C_LONGINT($1)

  // It calls the parent class's constructor with lengths   
  // provided for the Rectangle's width and height
Super($1;$1)

This.name:="Square"
```

## Opérateurs

Lorsque vous programmez avec 4D, il est rare que vous ayez simplement besoin de données “brutes”. Le plus souvent, il sera nécessaire de traiter ces données d'une manière ou d'une autre. Vous effectuez ces calculs avec des opérateurs. Les opérateurs, en général, prennent deux valeurs et effectuent avec elles une opération dont le résultat est une troisième valeur. Vous connaissez déjà la plupart des opérateurs. Par exemple, 1 + 2 utilise l’opérateur d’addition (ou signe plus) pour faire la somme de deux nombres, et le résultat est 3. Le tableau ci-dessous présente quelques opérateurs courants :

| Opérateur | Opération      | Exemple   |
| --------- | -------------- | --------- |
| +         | Addition       | 1 +2 = 3  |
| –         | Soustraction   | 3 - 2 = 1 |
| *         | Multiplication | 2 * 3 = 6 |
| /         | Division       | 6 / 2 = 3 |


Les opérateurs numériques ne représentent qu’un seul des différents types d’opérateurs disponibles. Comme 4D traite de multiples types de données, tels que des nombres, des dates ou des images, vous disposez d’opérateurs particuliers effectuant des opérations sur ces données.

Souvent, les mêmes symboles sont utilisés pour des opérations différentes, en fonction du type de données traitées. Par exemple, le signe (+) peut effectuer diverses opérations, comme le montre le tableau suivant :

| Type de données   | Opération        | Exemple                                                                                             |
| ----------------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| Nombre            | Addition         | 1 + 2 ajoute les nombres, le résultat est 3                                                         |
| Chaine            | Concaténation    | “Bonjour” + “à tous” concatène (met bout à bout) les chaînes, le résultat est “Bonjour à tous”      |
| Date et Numérique | Addition de date | !1989-01-01! + 20 ajoute 20 jours à la date 1 janvier 1989, le résultat est la date 21 janvier 1989 |


Les opérateurs sont détaillés dans la section Opérateurs et ses sous-sections.

## Expressions

Pour parler simplement, les expressions retournent une valeur. En fait, lorsque vous programmez avec 4D, vous utilisez systématiquement des expressions et avez tendance à les manipuler uniquement à travers la valeur qu’elles représentent. Les expressions sont aussi appelées formules.

Les expressions peuvent être constituées de presque tous les éléments du langage : commandes, opérateurs, variables, champs, propriétés d'objets et éléments de collection. Vous utilisez des expressions pour écrire des lignes de code, qui sont à leur tour utilisées pour construire des méthodes. Des expressions sont employées à chaque fois que le langage 4D a besoin de connaître la valeur d’une donnée.

Les expressions sont rarement “indépendantes”. Il n’y a que peu d’endroits dans 4D où une expression peut être utilisée en tant que telle. Par exemple :

- Editeur de formule (apply formula, query with formula, order by formula)
- La commande `EXECUTE FORMULA`
- La liste de propriétés, où une expression peut être utilisée en tant que source de données pour la plupart des widgets
- Dans la fenêtre du Débogueur où la valeur des expressions peut être évaluée
- Dans l’éditeur d’états semi-automatiques en tant que formule dans une colonne

### Types d’expressions

Vous vous référez à une expression via le type de données qu’elle retourne. Il existe plusieurs types d’expressions : Le tableau suivant fournit des exemples de chaque type d'expression.

| Expression              | Type                  | Description                                                                                                                                                                          |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| “Bonjour”               | Chaine                | Le mot Bonjour est une constante chaîne, signalée par les guillemets.                                                                                                                |
| “Bonjour ” + “à tous”   | Chaine                | Deux chaînes, “Bonjour ” et “à tous”, sont mises bout à bout (concaténées) à l'aide de l'opérateur de concaténation de chaînes (+). La chaîne “Bonjour à tous” est retournée.        |
| “M. ” + [Amis]Nom       | Chaine                | Deux chaînes sont concaténées : la chaîne “M. ” et la valeur courante du champ Nom de la table Amis. Si le champ contient “Dupont”, l'expression retourne “M. Dupont”.               |
| Uppercase("smith")      | Chaine                | Cette expression utilise `Uppercase`, une commande du langage, pour convertir la chaîne "dupont" en majuscules. Elle retourne “DUPONT”.                                              |
| 4                       | Nombre                | C'est une constante numérique, 4.                                                                                                                                                    |
| 4 * 2                   | Nombre                | Deux nombres, 4 et 2, sont multipliés à l'aide de l'opérateur de multiplication (*). Le résultat est le nombre 8.                                                                    |
| MonBouton               | Nombre                | C'est le nom d'un bouton. Il retourne la valeur courante du bouton : 1 s'il y a eu un clic sur le bouton, 0 sinon.                                                                   |
| !1997-01-25!            | Date                  | C'est une constante date pour la date 25/01/97 (25 janvier 1997).                                                                                                                    |
| Current date+ 30        | Date                  | C'est une expression de type Date qui utilise la commande `Current date` pour récupérer la date courante. Elle ajoute 30 jours à la date d'aujourd'hui et retourne la nouvelle date. |
| ?8:05:30?               | Heure                 | C'est une constante heure qui représente 8 heures, 5 minutes, et 30 secondes.                                                                                                        |
| ?2:03:04? + ?1:02:03?   | Heure                 | Cette expression ajoute une heure à une autre et retourne l'heure 3:05:07.                                                                                                           |
| Vrai                    | Booléen               | Cette commande retourne la valeur booléenne TRUE.                                                                                                                                    |
| 10 # 20                 | Booléen               | C'est une comparaison logique entre deux nombres. Le symbole (#) signifie “est différent de”. Comme 10 “est différent de” 20, l'expression retourne TRUE.                            |
| “ABC” = “XYZ”           | Booléen               | C'est une comparaison logique entre deux chaînes. Elles sont différentes, donc l'expression retourne FALSE.                                                                          |
| MonImage + 50           | Image                 | Cette expression considère l'image placée dans MonImage, la déplace de 50 pixels vers la droite, et retourne l'image résultante.                                                     |
| ->[Amis]Nom             | Pointeur              | Cette expression retourne un pointeur vers le champ [Amis]Nom.                                                                                                                       |
| Table(1)                | Pointeur              | C'est une commande qui retourne un pointeur vers la première table.                                                                                                                  |
| JSON Parse (MaChaine)   | Objet                 | C'est une commande qui retourne MaChaine sous forme d'objet (si format adéquat)                                                                                                      |
| JSON Parse (MonTabJSON) | Collection            | C'est une commande qui retourne MonTabJSON sous forme de collection (si format adéquat)                                                                                              |
| Form.pageNumber         | Propriété objet       | Une propriété objet est une expression qui peut être de tout type                                                                                                                    |
| Col[5]                  | Élément de collection | Un élément de collection est une expression qui peut être de tout type                                                                                                               |
| $entitySel[0]           | Entity                | Un élément d'une sélection d'entité ORDA est une expression de type entité. Ce type d'expression n'est **pas assignable**                                                            |


### Expressions assignables et non-assignables

Une expression peut simplement être une constante littérale, telle que le chiffre 4 ou la chaîne "Hello", ou une variable telle que `$myButton`. Elle peut également utiliser des opérateurs. Par exemple, 4 + 2 est une expression qui utilise l'opérateur d'addition pour additionner deux nombres et renvoyer le résultat 6. Dans tous les cas, ces expressions sont **non-assignables**, ce qui signifie que vous ne pouvez pas leur affecter de valeur. Dans 4D, les expressions peuvent être **assignables**. Une expression est assignable quand elle peut être utilisée à droite d'une assignation. Par exemple:

```4d
//La variable $myVar est assignable, vous pouvez écrire :  
$myVar:="Hello" //assigner "Hello" à myVar
//Form.pageNumber est assignable, vous pouvez écrire :  
Form.pageNumber:=10 //assigne 10 à Form.pageNumber
//Form.pageTotal-Form.pageNumber n'est pas assignable :
Form.pageTotal- Form.pageNumber:=10 //erreur, non assignable
```

En général, les expressions qui utilisent un opérateur ne sont pas assignables. Par exemple, `[Personne] Prénom " " +[Personne]Nom` n'est pas assignable.

## Pointeurs

Le langage 4D fournit une mise en oeuvre avancée des pointeurs, pour vous permettre d'écrire un code puissant et modulaire. Vous pouvez utiliser des pointeurs pour référencer des tables, des champs, des variables, des tableaux et des éléments de tableaux.

Un pointeur sur un élément est créé en ajoutant un symbole "->" avant le nom de l'élément, et peut être déréférencé en ajoutant le symbole "->" après le nom du pointeur.

```4d
MaVar:="Bonjour"
MonPointeur->->MaVar
ALERT(MonPointeur->)
```

## Commentaires

Les commentaires sont des lignes d’instructions inactives. Ces lignes ne sont pas interprétées par le programme (4D n’applique aucun style spécifique à l’intérieur de la ligne de commentaire) et ne sont pas exécutées lorsque la méthode est appelée.

Voici deux manières de créer des commentaires :

- `//` pour créer une ligne de commentaire
- `/*...*/` pour les blocs de commentaire en ligne et multi-lignes.

Les deux styles de commentaires peuvent être utilisés simultanément.

#### Ligne de commentaire (//)

Insérez les caractères `//` au début de la ligne ou après une instruction pour ajouter une ligne de commentaire. Exemple :

```4d
//Ceci est un commentaire 
For($vCounter;1;100) //Début de la boucle
  //commentaire
  //commentaire
  //commentaire
  End for
```

#### Commentaires en ligne ou multi-lignes (/* */)

Entourez le contenu avec les caractères `/*...*/` pour créer des blocs de commentaires en ligne ou multi-lignes. Les blocs de commentaire en ligne et multi-lignes commencent par `/*` et se terminent par `*/`.

- Les **lignes de commentaires en ligne** - peuvent être insérées n'importe où dans le code. Exemple :

```4d
For /* ligne de commentaire */ ($vCounter;1;100)
    ...
End for
```

- Les **blocs de commentaires multi-lignes** permettent de commenter un nombre illimité de lignes. Les blocs de commentaires peuvent être imbriqués (ce qui est utile, étant donné que l'éditeur de code 4D prend en charge les blocs condensés). Exemple :

```4d
For ($vCounter;1;100)
/*
commentaires  
    /* 
    autres commentaires
    */
*/
...
End for
```