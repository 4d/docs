---
id: quick-tour
title: Tour d'horizon
sidebar_label: Tour d'horizon
---

En utilisant le langage 4D, le traditionnel "Hello, world!" peut s'afficher à l'écran de plusieurs manières. Le plus simple est probablement d'écrire la ligne suivante dans une méthode de projet :

```4d
ALERT("Hello, World!")
```

Ce code affichera une boîte de dialogue d'alerte standard contenant le message "Hello, World!" et un bouton OK. Pour exécuter le code, il suffit de cliquer sur le bouton d'exécution dans l'éditeur de code :

![hello-world](../assets/en/Concepts/helloworld.png)

Vous pouvez également associer ce code à un bouton de formulaire et exécuter le formulaire. Dans ce cas, en cliquant sur le bouton, vous afficherez la boîte de dialogue d'alerte. Dans tous les cas, vous venez d'exécuter votre première ligne de code 4D !

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables, aux champs, aux éléments de tableaux et/ou récupérer leur valeur. Donner une valeur à une variable s’appelle assigner une valeur (ou affecter une valeur) et s’effectue à l’aide de l’opérateur d’assignation (:=). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs ou aux éléments de tableaux.

```4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //assigns a date literal
$myHour:=?08:12:55? //assigns a time literal
```

Vous devez impérativement distinguer l'opérateur d'affectation := des autres opérateurs. Plutôt que de combiner des expressions dans une nouvelle expression, l'opérateur d'affectation copie la valeur de l'expression à droite de l'opérateur d'affectation dans la variable ou le champ situé à gauche de l'opérateur.

**Important:** Do NOT confuse the assignment operator := with the equality comparison operator =. Un opérateur d'affectation différent (et non pas =) a été choisi délibérément pour éviter les problèmes et la confusion qui surviennent souvent avec == ou === dans d'autres langages de programmation. De telles erreurs sont souvent difficiles à reconnaître pour le compilateur et conduisent à un dépannage fastidieux.

## Variables

Le langage 4D est fortement typé, bien qu'une certaine flexibilité soit autorisée dans de nombreux cas. You create a typed variable using the `var` keyword. Par exemple, pour créer une variable du type date, vous pouvez écrire : Par exemple, pour créer une variable du type date, vous pouvez écrire :

```4d
var MyDate : Date
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```4d
var myPerson : cs.Person
//variable of the Person user class
```

Même si cela est généralement déconseillé, vous pouvez déclarer des variables simplement en les utilisant; il n’est pas obligatoire de les déclarer formellement. Par exemple, si vous voulez créer une variable qui contient la date du jour plus 30 jours, il vous suffit d’écrire dans 4D :

```4d
MyOtherDate:=Current date+30
```

The line of code reads “MyOtherDate gets the current date plus 30 days.” This line declares the variable, assigns it with both the (temporary) date type and a content. Cette ligne crée la variable, lui attribue à la fois le type de date (temporaire) et un contenu. Une variable déclarée par affectation est interprétée comme étant non typée, c'est-à-dire qu'elle peut être affectée à d'autres types dans d'autres lignes, puis modifie le type de manière dynamique. A variable typed with `var` cannot change the type. In [compiled mode](interpreted.md) however, the type can never be changed, regardless of how the variable was declared.

## Commandes

Les commandes 4D sont des méthodes intégrées qui permettent d'effectuer une action. Les commandes sont souvent utilisées avec des paramètres qui sont passés entre parenthèses () et séparés par des points-virgules (;). Voici un exemple :

```4d
COPY DOCUMENT("dossier1\\nom1";"dossier2\\" ; "nouveau")
```

Some commands are attached to collections or objects, in which case they are named functions and are used using the dot notation. Par exemple :

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

Vous pouvez utiliser des plug-ins ou des composants 4D qui ajoutent de nouvelles commandes à votre environnement de développement 4D.

Il existe de nombreux plug-ins proposés par la communauté des utilisateurs de 4D ou des développeurs tiers. For example, using the [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) on macOS:

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

4D propose un large ensemble de constantes prédéfinies, dont les valeurs sont accessibles par un nom. Elles permettent d'écrire un code plus lisible. For example, `Read Mode` is a constant (value 2).

```4d
vRef:=Open document("PassFile";"TEXTE";Read Mode) // ouvrir le doc en mode lecture seule
```

> Les constantes prédéfinies apparaissent <u>soulignées</u> par défaut dans l'éditeur de code 4D.

## Methods

4D provides a large number of built-in methods (or commands) but also lets you can create your own **project methods**. Les méthodes de projet sont des méthodes définies par l'utilisateur qui contiennent des commandes, des opérateurs et d'autres parties du langage.
Les méthodes projet sont des méthodes génériques, mais il existe d'autres types de méthodes : les méthodes objet, les méthodes formulaire, les méthodes table (Triggers) et les méthodes base.

Une méthode est composée de plusieurs lignes d’instructions. Une instruction exécute une action, et peut être simple ou complexe.

Par exemple, la ligne de code suivante est une instruction qui affichera une boîte de dialogue de confirmation :

```4d
CONFIRM("Souhaitez-vous vraiment clore ce compte ?";"Oui";"Non")
```

Une méthode contient également des testes et des boucles qui gèrent le flux d'exécution. 4D methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

L'exemple suivant permet d'examiner chaque caractère du texte vtSomeText :

```4d
For($vlChar;1;Length(vtSomeText))
	//Do something with the character if it is a TAB


	If(Character code(vtSomeText[[$vlChar]])=Tab)
		//...
	End if
End for
```

Une méthode projet peut en appeler une autre avec ou sans les paramètres (arguments). Les paramètres sont passés à la méthode entre parenthèses, à la suite du nom de la méthode. Chaque paramètre est séparé par des points virgule (;). Les paramètres sont directement disponibles dans la méthode appelée s'ils ont été déclarés. Une méthode peut renvoyer une seule valeur dans un paramètre, qui doit être déclaré. Lorsque vous appelez une méthode, vous saisissez simplement son nom :

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something  
#DECLARE ($in : Text) -> $out : Text
$out:=Uppercase($in)
```

## Types de données

De nombreux types de données peuvent être manipulés via le langage 4D. Il existe des types de données élémentaires (chaîne, numérique, date, heure, booléen, image, pointeur, tableau), ainsi que des types de données composites (BLOBs, objets, collections).

A noter que les données de type chaîne et numérique peuvent être associées à plusieurs types de champ. Lorsque des données sont placées dans un champ, le langage les convertit automatiquement dans le type du champ. Par exemple, si un champ de type entier est utilisé, les valeurs qu’il contient sont automatiquement traitées en tant que numériques. En d’autres termes, vous n’avez pas à vous préoccuper du mélange de champs de types semblables lorsque vous programmez avec 4D ; le langage le gère pour vous.

Cependant, il est important, lorsque vous utilisez le langage, de ne pas mélanger les différents types de données. Tout comme il est absurde de stocker la valeur “ABC” dans un champ de type Date, il est absurde de donner la valeur “ABC” à une variable utilisée pour des dates. Dans la plupart des cas, 4D est très tolérant et tentera d’utiliser de manière logique ce que vous faites. Par exemple, si vous additionnez un nombre x et une date, 4D déduira que vous voulez ajouter x jours à la date, mais si vous tentez d’ajouter une chaîne à une date, 4D vous préviendra que cette opération est impossible.

Certains cas nécessitent que vous stockiez des données dans un type et que vous les utilisiez dans un autre. Le langage contient un ensemble complet de commandes vous permettant de convertir des types de données en d’autres types. Par exemple, vous pouvez avoir besoin de créer un numéro de pièce qui commence par un chiffre et se termine par des caractères tels que "abc". Dans ce cas, vous pouvez écrire :

```4d
[Produits]Matricule:=String(Numéro)+"abc"
```

If _Number_ is 17, then _[Products]Part Number_ will get the string “17abc”.

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

## Objets et collections

Vous pouvez gérer les objets et collections du langage 4D à l'aide de la notation objet pour lire ou définir leurs valeurs. Par exemple :

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

```
$f:=New object
$f.message:=Formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
```

Pour accéder à un élément de collection, vous devez passer le numéro de l'élément situé entre crochets :

```4d
var myColl : Collection
myColl:=New("A" ; "B";1;2;Current time)
myColl[3]  //accès au 4ème élément de la collection
```

## Classes

Le langage 4D prend en charge les classes d'objets. Add a `myClass.4dm` file in the Project/Sources/Classes folder of a project to create a class named "myClass".

To instantiate an object of the class in a method, call the user class from the _class store_ (`cs`) and use the `new()` member function. Vous pouvez passer des paramètres.

```4d
// dans une méthode 4D
$o:=cs.myClass.new()
```

In the `myClass` class method, use the `Function <methodName>` statement to define the _methodName_ class member function. A class member function can receive and return parameters like any method, and use `This` as the object instance.

```4d

//in the myClass.4dm file
Function hello -> $welcome : Text
  $welcome:="Hello "+This.who
```

To execute a class member function, just use the `()` operator on the member function of the object instance.

```4d
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message: "Hello World"
```

Optionally, use the `Class constructor` keyword to declare properties of the object.

```4d
//in the Rectangle.4dm file
Class constructor ($width : Integer; $height : Integer)
This.height:=$height
This.width:=$width
This.name:="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. Par exemple :

```4d
//in the Square.4dm file
Class extends rectangle

Class constructor ($length : Integer)
  // It calls the parent class's constructor with lengths   
  // provided for the Rectangle's width and height
Super($length;$length)

This.name:="Square"
```

## Opérateurs

Lorsque vous programmez avec 4D, il est rare que vous ayez simplement besoin de données “brutes”. Le plus souvent, il sera nécessaire de traiter ces données d'une manière ou d'une autre. Vous effectuez ces calculs avec des opérateurs. Les opérateurs, en général, prennent deux valeurs et effectuent avec elles une opération dont le résultat est une troisième valeur. Vous connaissez déjà la plupart des opérateurs. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3.

| Opérateur | Opération      | Exemple    |
| --------- | -------------- | ---------- |
| -         | Addition       | 1 +2 = 3   |
| –         | Soustraction   | 3 - 2 = 1  |
| *         | Multiplication | 2 \* 3 = 6 |
| /         | Division       | 6 / 2 = 3  |

Les opérateurs numériques ne représentent qu’un seul des différents types d’opérateurs disponibles. Comme 4D traite de multiples types de données, tels que des nombres, des dates ou des images, vous disposez d’opérateurs particuliers effectuant des opérations sur ces données.

Souvent, les mêmes symboles sont utilisés pour des opérations différentes, en fonction du type de données traitées. Par exemple, le signe (+) peut effectuer diverses opérations, comme le montre le tableau suivant :

| Type de données   | Opération        | Exemple                                                                                                           |
| ----------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| Number            | Addition         | 1 + 2 ajoute les nombres, le résultat est 3                                                                       |
| String            | Concaténation    | “Bonjour” + “à tous” concatène (met bout à bout) les chaînes, le résultat est “Bonjour à tous” |
| Date et Numérique | Addition de date | !1989-01-01! + 20 ajoute 20 jours à la date 1 janvier 1989, le résultat est la date 21 janvier 1989               |

## Expressions

Pour parler simplement, les expressions retournent une valeur. En fait, lorsque vous programmez avec 4D, vous utilisez systématiquement des expressions et avez tendance à les manipuler uniquement à travers la valeur qu’elles représentent. Les expressions sont aussi appelées formules.

Les expressions peuvent être constituées de presque tous les éléments du langage : commandes, opérateurs, variables, champs, propriétés d'objets et éléments de collection. Vous utilisez des expressions pour écrire des lignes de code, qui sont à leur tour utilisées pour construire des méthodes. Des expressions sont employées à chaque fois que le langage 4D a besoin de connaître la valeur d’une donnée.

Les expressions sont rarement «autonomes». Expressions rarely “stand alone.” There are several places in 4D where an expression can be used by itself. Cela inclut :

- Editeur de formule (apply formula, query with formula, order by formula)
- The `EXECUTE FORMULA` command
- La liste de propriétés, où une expression peut être utilisée en tant que source de données pour la plupart des widgets
- Dans la fenêtre du Débogueur où la valeur des expressions peut être évaluée
- Dans l’éditeur d’états semi-automatiques en tant que formule dans une colonne

### Types d’expressions

Vous vous référez à une expression via le type de données qu’elle retourne. Il existe plusieurs types d’expressions : Le tableau suivant donne des exemples de chaque type d'expression.

| Expression                                                                                  | Type                  | Description                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Bonjour”                                                                                   | String                | Le mot Bonjour est une constante chaîne, signalée par les guillemets.                                                                                                                                                                         |
| “Bonjour ” + “à tous”                                                                       | String                | Deux chaînes, “Bonjour ” et “à tous”, sont mises bout à bout (concaténées) à l'aide de l'opérateur de concaténation de chaînes (+). La chaîne “Bonjour à tous” est retournée.           |
| “Mr. ” + [Personnes]Nom | String                | Deux chaînes sont concaténées : la chaîne "Mr." et la valeur courante du champ Nom dans la table Personnes. Si le champ contient “Dupont”, l'expression retourne “M. Dupont”. |
| Uppercase("smith")                                                       | String                | This expression uses `Uppercase`, a command from the language, to convert the string “smith” to uppercase. Elle retourne “DUPONT”.                                                                                            |
| 4                                                                                           | Number                | C'est une constante numérique, 4.                                                                                                                                                                                                             |
| 4 \* 2                                                                                      | Number                | Deux nombres, 4 et 2, sont multipliés à l'aide de l'opérateur de multiplication (\*). Le résultat est le nombre 8.                                                                                         |
| MonBouton                                                                                   | Number                | C'est le nom d'un bouton. Il retourne la valeur courante du bouton : 1 s'il y a eu un clic sur le bouton, 0 sinon.                                                                                            |
| !1997-01-25!                                                                                | Date                  | C'est une constante date pour la date 25/01/97 (25 janvier 1997).                                                                                                                                                          |
| Current date+ 30                                                                            | Date                  | This is a date expression that uses the `Current date` command to get today’s date. Elle ajoute 30 jours à la date d'aujourd'hui et retourne la nouvelle date.                                                                |
| ?8:05:30?                                                   | Time                  | C'est une constante heure qui représente 8 heures, 5 minutes, et 30 secondes.                                                                                                                                                                 |
| ?2:03:04? + ?1:02:03?       | Time                  | Cette expression ajoute une heure à une autre et retourne l'heure 3:05:07.                                                                                                                                    |
| True                                                                                        | Boolean               | Cette commande retourne la valeur booléenne TRUE.                                                                                                                                                                                             |
| 10 # 20                                                                                     | Boolean               | C'est une comparaison logique entre deux nombres. Le symbole (#) signifie “est différent de”. Comme 10 “est différent de” 20, l'expression retourne TRUE.                                  |
| “ABC” = “XYZ”                                                                               | Boolean               | C'est une comparaison logique entre deux chaînes. Elles sont différentes, donc l'expression retourne FALSE.                                                                                                                   |
| MonImage + 50                                                                               | Picture               | Cette expression considère l'image placée dans MonImage, la déplace de 50 pixels vers la droite, et retourne l'image résultante.                                                                                                              |
| ->[Amis]Nom                             | Pointer               | Cette expression retourne un pointeur vers le champ [Amis]Nom.                                                                                                                            |
| Table(1)                                                                 | Pointer               | C'est une commande qui retourne un pointeur vers la première table.                                                                                                                                                                           |
| JSON Parse (MaChaine)                                                    | Object                | C'est une commande qui retourne MaChaine sous forme d'objet (si format adéquat)                                                                                                                                                            |
| JSON Parse (MonTabJSON)                                                  | Collection            | C'est une commande qui retourne MonTabJSON sous forme de collection (si format adéquat)                                                                                                                                                    |
| Form.pageNumber                                                             | Propriété objet       | Une propriété objet est une expression qui peut être de tout type                                                                                                                                                                                             |
| Col[5]                                  | Élément de collection | Un élément de collection est une expression qui peut être de tout type                                                                                                                                                                                        |
| $entitySel[0]                           | Entity                | Un élément d'une sélection d'entité ORDA est une expression de type entité. This kind of expression is **non-assignable**                                                                                                                     |

### Expressions assignables et non-assignables

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. Elle peut également utiliser des opérateurs. Par exemple, 4 + 2 est une expression qui utilise l'opérateur d'addition pour additionner deux nombres et renvoyer le résultat 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them.
In 4D, expressions can be **assignable**. Une expression est assignable quand elle peut être utilisée à gauche de l'opérateur d'assignation. Par exemple :

```4d
//La variable $myVar est assignable, vous pouvez écrire :  
$myVar:="Hello" //assigner "Hello" à myVar
//Form.pageNumber est assignable, vous pouvez écrire :  
Form.pageNumber:=10 //assigne 10 à Form.pageNumber
//Form.pageTotal-Form.pageNumber n'est pas assignable :
Form.pageTotal- Form.pageNumber:=10 //erreur, non assignable
```

En général, les expressions qui utilisent un opérateur ne sont pas assignables. For example, `[Person]FirstName+" "+[Person]LastName` is not assignable.

## Pointeurs

Le langage 4D fournit une mise en oeuvre avancée des pointeurs, pour vous permettre d'écrire un code puissant et modulaire. Vous pouvez utiliser des pointeurs pour référencer des tables, des champs, des variables, des tableaux et des éléments de tableaux.

Un pointeur sur un élément est créé en ajoutant un symbole "->" avant le nom de l'élément, et peut être déréférencé en ajoutant le symbole "->" après le nom du pointeur.

```4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## Code sur plusieurs lignes

You can write a single statement on several lines by terminating each line of the statement with a trailing backslash `\` character. Le langage 4D prendra en compte toutes les lignes à la fois. Par exemple, les deux déclarations suivantes sont équivalentes :

```4d
$str:=String("hello world !")
```

```4d
$str:=String("hello"+\
" world"+\
+"!")
```

## Commentaires

Les commentaires sont des lignes d’instructions inactives. Ces lignes ne sont pas interprétées par le programme (4D n’applique aucun style spécifique à l’intérieur de la ligne de commentaire) et ne sont pas exécutées lorsque la méthode est appelée.

Voici deux manières de créer des commentaires :

- `//` for single line comments
- `/*...*/` pour les blocs de commentaire en ligne et multi-lignes.

Les deux styles de commentaires peuvent être utilisés simultanément.

#### Single line comments (`//comment`)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Voici un exemple :

```4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
End for
```

#### Inline or multiline comments (`/*comment*/`)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Voici un exemple :

```4d
For /* inline comment */ ($vCounter;1;100)
	...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Les blocs de commentaires peuvent être imbriqués (ce qui est utile, étant donné que l'éditeur de code 4D prend en charge les blocs condensés). Voici un exemple :

```4d
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

## Séquences d’échappement

The 4D language allows you to use escape sequences (also called escape characters). An escape sequence is a sequence of characters that can be used to replace a "special" character.

The sequence consists of a backslash `\`, followed by a character. For instance, `\t` is an escape sequence for the **Tab** character. Escape sequences facilitate the entry of special characters: the previous example (`\t`) replaces the entry "Character(Tab)".

In 4D, the following escape sequences can be used:

| Séquence d’échappement | Caractère remplacé                               |
| ---------------------- | ------------------------------------------------ |
| `\n`                  | LF (Retour ligne)             |
| `\t`                  | HT (Tabulation)               |
| `\r`                  | CR (Retour chariot)           |
| `\\`                 | `\` (Barre oblique inversée) |
| `\"`                  | " (Guillemets)                |

> It is possible to use either upper or lower case in escape sequences.

In the following example, the **Carriage return** character (escape sequence `\r`) is inserted in a statement in order to obtain a dialog box:

`ALERT("The operation has been completed successfully.\rYou may now disconnect.")`
