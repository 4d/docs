---
id: quick-tour
title: Tour d'horizon
sidebar_label: Tour d'horizon
---

En utilisant le langage 4D, le traditionnel "Hello, world!" peut s'afficher à l'écran de plusieurs manières. Le plus simple est probablement d'écrire la ligne suivante dans une méthode de projet :

```code4d
ALERT("Hello, World!")
```

Ce code affichera une boîte de dialogue d'alerte standard contenant le message "Hello, World!" et un bouton OK. Pour exécuter le code, il vous suffit de cliquer sur le bouton d'exécution dans l'éditeur de méthode :

![alt-text](assets/en/Concepts/helloworld.png)

Vous pouvez également associer ce code à un bouton de formulaire et exécuter le formulaire. Dans ce cas, en cliquant sur le bouton, vous afficherez la boîte de dialogue d'alerte. Dans tous les cas, vous venez d'exécuter votre première ligne de code 4D !

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables, aux champs, aux éléments de tableaux et/ou récupérer leur valeur. Donner une valeur à une variable s’appelle assigner une valeur (ou affecter une valeur) et s’effectue à l’aide de l’opérateur d’assignation (:=). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs ou aux éléments de tableaux.

```code4d
$MyNumber:=3 //assigne 3 à la variable MyNumber
[Products]Size:=$MyNumber //assigne la variable MyNumber au champ [Products]Size
arrDays{2}:="Tuesday" //assigne la chaîne "Tuesday" au 2ème élément arrDays
MyVar:=Length("Acme") //assigne le résultat de la fonction (4) à MyVar
$myDate:=!2018/01/21! //assigne une date littérale
$myHour:=?08:12:55? //assigne une heure littérale
```

Vous devez impérativement distinguer l'opérateur d'affectation := des autres opérateurs. Plutôt que de combiner des expressions dans une nouvelle expression, l'opérateur d'affectation copie la valeur de l'expression à droite de l'opérateur d'affectation dans la variable ou le champ situé à gauche de l'opérateur.

**Important :** Ne confondez pas l’opérateur d’assignation (:=) avec le signe égal (=). Un opérateur d'affectation différent (et non pas =) a été choisi délibérément pour éviter les problèmes et la confusion qui surviennent souvent avec == ou === dans d'autres langages de programmation. De telles erreurs sont souvent difficiles à reconnaître pour le compilateur et conduisent à un dépannage fastidieux.

## Variables

Le langage 4D est fortement typé, bien qu'une certaine flexibilité soit autorisée dans de nombreux cas. Vous créez une variable typée à l'aide d'une commande `C_XXX`. Par exemple, pour créer une variable du type date, vous pouvez écrire :

```code4d
C_DATE(MyDate) //Type date type pour la variable MyDate
```

Même si cela est généralement déconseillé, vous pouvez créer des variables simplement en les utilisant; il n’est pas obligatoire de les déclarer formellement comme vous le faites avec les champs. Par exemple, si vous voulez créer une variable qui contient la date du jour plus 30 jours, il vous suffit d’écrire dans 4D :

```code4d
MaDate:=Current date+30
```

Le programme interprète la ligne comme “MaDate prend la valeur de la date courante plus 30 jours”. Cette ligne crée la variable et l'affecte (temporairement) au type de date et à un contenu. Une variable créée par affectation est interprétée comme étant non typée, c'est-à-dire qu'elle peut être affectée à d'autres types dans d'autres lignes, puis modifie le type de manière dynamique. Une variable typée avec `C_XXX` ne peut pas changer le type. En mode compilé, le type ne peut jamais être modifié, quelle que soit la manière dont la variable a été créée.

## Commandes

Les commandes 4D sont des méthodes intégrées qui permettent d'effectuer une action. Toutes les commandes 4D, telles que `CREER ENREGISTREMENT` ou `ALERTE`, sont décrites dans le *Manuel Langage de 4D*, et sont regroupées par thème. Les commandes sont souvent utilisées avec des paramètres qui sont passés entre parenthèses () et séparés par des points-virgules (;). Exemple :

```code4d
COPIER DOCUMENT("dossier1\\nom1";"dossier2\\" ; "nouveau")
```

Certaines commandes sont reliées à des collections ou à des objets, auquel cas ce sont des méthodes nommées utilisées à l'aide de la notation en point. Par exemple:

```code4d
$c:=Creer collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

Vous pouvez utiliser des plug-ins ou des composants 4D qui ajoutent de nouvelles commandes à votre environnement de développement 4D.

Il existe de nombreux plug-ins proposés par la communauté des utilisateurs de 4D ou des développeurs tiers. Par exemple, en utilisant les pages [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) sur macOS :

```code4d
PDF REMOVE PAGE(path;page)
```

4D SVG est un exemple de composant utilitaire qui augmente les capacités de votre application :

```code4d
//faire un dessin
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG est inclus dans 4D.

## Constantes

4D propose un large ensemble de constantes prédéfinies, dont les valeurs sont accessibles par un nom. Par exemple, `XML DATA` est une constante (valeur 6). Par défaut, les constantes prédéfinies sont soulignées dans l'éditeur de méthodes 4D. Elles permettent d'écrire un code plus lisible.

```code4d
vRef:=Open document("PassFile";"TEXTE";Read Mode) // ouvrir le doc en mode lecture seule
```

## Méthodes

4D propose un grand nombre de méthodes (ou de commandes) intégrées, mais vous permet également de créer vos propres **méthodes de projet**. Les méthodes de projet sont des méthodes définies par l'utilisateur qui contiennent des commandes, des opérateurs et d'autres parties du langage. Les méthodes projet sont des méthodes génériques, mais il existe d'autres types de méthodes : les méthodes objets, les méthodes formulaires, les méthodes table (Triggers) et les méthodes base.

Une méthode est composée de plusieurs lignes d’instructions. Une ligne d’instructions effectue une action. Cette ligne d’instruction peut être simple ou complexe.

Par exemple, la ligne de code suivante est une instruction qui affichera une boîte de dialogue de confirmation :

```code4d
CONFIRM("Souhaitez-vous vraiment clore ce compte ?";"Oui";"Non")
```

Une méthode contient également des testes et des boucles qui gèrent le flux d'exécution. Les méthodes 4D prennent en charge les structures `If...Else...End if` et `Case of...Else...End case` ainsi que les boucles : `While...End while`, `Repeat...Until`, `For...End for`, et `For each...End for each`:

L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```code4d
For($vlChar;1;Length(vtSomeText))
    //Faire quelque chose avec le caractère s'il s'agit d'une tabulation
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        //...
    End if
End for
```

Une méthode projet peut en appeler une autre avec ou sans les paramètres (arguments). Les paramètres sont passés à la méthode entre parenthèses, à la suite du nom de la méthode. Chaque paramètre est séparé par des points virgule (;). Les paramètres sont passés à la méthode appelée en tant que variables locales numérotées séquentiellement : $1, $2,…, $n. Une méthode peut retourner une seule valeur dans le paramètre $0. Lorsque vous appelez une méthode, vous saisissez simplement son nom :

```code4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Voici le code de la méthode Do_Something
$0:=Uppercase($1)
```

## Types de données

De nombreux types de données peuvent être manipulés via le langage de 4D. Il existe des types de données élémentaires (chaîne, numérique, date, heure, booléen, image, pointeur, tableau), ainsi que des types de données composites (BLOBs, objets, collections).

A noter que les données de type chaîne et numérique peuvent être associés à plus d’un type de champ. Lorsque des données sont placées dans un champ, le langage les convertit automatiquement dans le type du champ. Par exemple, si un champ de type entier est utilisé, les valeurs qu’il contient sont automatiquement traitées en tant que numériques. En d’autres termes, vous n’avez pas à vous préoccuper du mélange de champs de types semblables lorsque vous programmez avec 4D ; le langage le gère pour vous.

Cependant, il est important, lorsque vous utilisez le langage, de ne pas mélanger les types de données différents. Tout comme il est absurde de stocker la valeur “ABC” dans un champ de type Date, il est absurde de donner la valeur “ABC” à une variable utilisée pour des dates. Dans la plupart des cas, 4D est très tolérant et tentera d’utiliser de manière logique ce que vous faites. Par exemple, si vous additionnez un nombre x et une date, 4D déduira que vous voulez ajouter x jours à la date, mais si vous tentez d’ajouter une chaîne à une date, 4D vous préviendra que cette opération est impossible.

Certains cas nécessitent que vous stockiez des données dans un type et que vous les utilisiez dans un autre. Le langage contient un ensemble complet de commandes vous permettant de convertir des types de données vers d’autres types. Par exemple, si vous voulez créer un numéro de matricule commençant par des chiffres et se terminant par des lettres, telles que "abc". Vous pouvez écrire :

```code4d
[Produits]Matricule:=String(Numéro)+"abc"
```

Si *Numéro* vaut 17, *[Produits]Matricule* prendra la valeur “17abc”.

Les types de données sont détaillés dans la section [Types de données](Concepts/data-types.md).

## Objets et collections

Vous pouvez gérer les objets et collections du langage 4D à l'aide de la notation objet pour lire ou définir leurs valeurs. Par exemple:

```code4d
employee.name:="Smith"
```

Vous pouvez également utiliser de crochets, comme dans l'exemple ci-dessous :

```code4d
$vName:=employee["nom"]
```

Comme la valeur d'une propriété d'objet peut elle-même être un objet ou une collection, la notation objet requiert une séquence de symboles pour accéder aux sous-propriétés, par exemple :

```code4d
$vAge:=employee.children[2].age
```

A noter que si la valeur de la propriété de l'objet est un objet qui encapsule une méthode (une formule), vous devez ajouter des parenthèses () au nom de la propriété pour exécuter la méthode :

    $f:=New object
    $f.message:=New formula(ALERT("Hello world!"))
    $f.message() //affiche "Hello world!"
    

Pour accéder à un élément de collection, vous devez passer le numéro de l'élément situé entre crochets :

```code4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //accède au 4ème élément de la collection
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
| Numérique         | Addition         | 1 + 2 ajoute les nombres, le résultat est 3                                                         |
| Chaine            | Concaténation    | “Bonjour” + “à tous” concatène (met bout à bout) les chaînes, le résultat est “Bonjour à tous”      |
| Date et Numérique | Addition de date | !1989-01-01! + 20 ajoute 20 jours à la date 1 janvier 1997, le résultat est la date 21 janvier 1997 |

Les opérateurs sont détaillés dans la section Opérateurs et ses sous-sections.

## Expressions

Pour parler simplement, les expressions retournent une valeur. En fait, lorsque vous programmez avec 4D, vous utilisez tout le temps des expressions et vous avez tendance à les manipuler uniquement à travers la valeur qu’elles représentent. Les expressions sont aussi appelées formules.

Les expressions peuvent être constituées de presque tous les éléments du langage : commandes, opérateurs, variables, champs, propriétés d'objets et éléments de collection. Vous utilisez des expressions pour écrire des lignes de code, qui sont à leur tour utilisées pour construire des méthodes. Des expressions sont employées à chaque fois que le langage de 4D a besoin de connaître la valeur d’une donnée.

Les expressions sont rarement “indépendantes”. Il n’y a que peu d’endroits dans 4D où une expression peut être utilisée en tant que telle. Par exemple :

- Editeur de formule (apply formula, query with formula, order by formula)
- La commande `EXECUTE FORMULA`
- La liste de propriétés, où un expression peut être utilisée en tant que source de données pour la plupart des widgets
- Dans la fenêtre du Débogueur où la valeur des expressions peut être évaluée
- Dans l’éditeur d’états semi-automatiques en tant que formule dans une colonne

### Types d’expressions

Vous vous référez à une expression par le biais du type de données qu’elle retourne. Il existe plusieurs types d’expressions : Le tableau suivant fournit des exemples de chaque type d'expression.

| Expression              | Type                  | Description                                                                                                                                                                          |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| “Bonjour”               | Chaîne                | Le mot Bonjour est une constante chaîne, signalée par les guillemets.                                                                                                                |
| “Bonjour ” + “à tous”   | Chaîne                | Deux chaînes, “Bonjour ” et “à tous”, sont mises bout à bout (concaténées) à l'aide de l'opérateur de concaténation de chaînes (+). La chaîne “Bonjour à tous” est retournée.        |
| “M. ” + [Amis]Nom       | Chaîne                | Deux chaînes sont concaténées : la chaîne “M. ” et la valeur courante du champ Nom de la table Amis. Si le champ contient “Dupont”, l'expression retourne “M. Dupont”.               |
| Uppercase("smith")      | Chaîne                | Cette expression utilise `Uppercase`, une commande du langage, pour convertir la chaîne "dupont" en majuscules. Elle retourne “DUPONT”.                                              |
| 4                       | Numérique             | C'est une constante numérique, 4.                                                                                                                                                    |
| 4 * 2                   | Numérique             | Deux nombres, 4 et 2, sont multipliés à l'aide de l'opérateur de multiplication (*). Le résultat est le nombre 8.                                                                    |
| MonBouton               | Numérique             | C'est le nom d'un bouton. Il retourne la valeur courante du bouton : 1 s'il y a eu un clic sur le bouton, 0 sinon.                                                                   |
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
| $entitySel[0]           | Entité                | Un élément d'une sélection d'entité ORDA est une expression de type entité. Ce type d'expression n'est **pas assignable**                                                            |

### Expressions assignables et non-assignables

Une expression peut simplement être une constante littérale, telle que le chiffre 4 ou la chaîne "Hello", ou une variable telle que `$myButton`. Elle peut également utiliser des opérateurs. Par exemple, 4 + 2 est une expression qui utilise l'opérateur d'addition pour additionner deux nombres et renvoyer le résultat 6. Dans tous les cas, ces expressions sont **non-assignables**, ce qui signifie que vous ne pouvez pas leur affecter de valeur. Dans 4D, les expressions peuvent être **assignables**. Une expression est assignable quand elle peut être utilisée à droite d'une assignation. Par exemple:

```code4d
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

```code4d
MaVar:="Bonjour"
MonPointeur->->MaVar
ALERT(MonPointeur->)
```

## Comments

Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called.

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously.

#### Single line comments (//)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Exemple :

```code4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
 End for
```

#### Inline or multiline comments (/* */)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Exemple :

```code4d
For /* inline comment */ ($vCounter;1;100)
    ...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Exemple :

```code4d
For ($vCounter;1;100)
/*
comments  
    /* 
    other comments
    */
*/
...
End for
```