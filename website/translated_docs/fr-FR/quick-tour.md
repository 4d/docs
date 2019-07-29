---
id: quick-tour
title: A Quick Tour
sidebar_label: A Quick Tour
---

Using the 4D language, printing the traditional "Hello, world!" message on screen can be done in several ways. The most simple is probably to write the following single line in a project method:

```code4d
ALERT("Hello, World!")
```

This code will display a platform-standard alert dialog box with the "Hello, World!" message, containing an OK button. To execute the code, you just need to click on the execution button in the Method editor:

![alt-text](assets/en/Concepts/helloworld.png)

Or, you could attach this code to a button in a form and execute the form, in which case clicking on the button would display the alert dialog box. In any cases, you have just executed your first line of 4D code!

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables, aux champs, aux éléments de tableaux et/ou récupérer leur valeur. Donner une valeur à une variable s’appelle assigner une valeur (ou affecter une valeur) et s’effectue à l’aide de l’opérateur d’assignation (:=). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs ou aux éléments de tableaux.

```code4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //assigns a date literal
$myHour:=?08:12:55? //assigns a time literal
```

You MUST distinguish the assignment operator := from the other operators. Rather than combining expressions into a new one, the assignment operator copies the value of the expression to the right of the assignment operator into the variable or field to the left of the operator.

**Important :** Ne confondez pas l’opérateur d’assignation (:=) avec le signe égal (=). A different assignment operator (and not =) was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Such errors are often difficult to recognize by the compiler and lead to time-consuming troubleshooting.

## Variables

The 4D language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using a `C_XXX` command. For example, to create a variable of the date type, you can write:

```code4d
C_DATE(MyDate) //Date type for MyDate variable
```

Même si cela est généralement déconseillé, vous pouvez créer des variables simplement en les utilisant; il n’est pas obligatoire de les déclarer formellement comme vous le faites avec les champs. Par exemple, si vous voulez créer une variable qui contient la date du jour plus 30 jours, il vous suffit d’écrire dans 4D :

```code4d
MaDate:=Date du jour+30
```

Le programme interprète la ligne comme “MaDate prend la valeur de la date courante plus 30 jours”. Cette ligne crée la variable et l'affecte (temporairement) au type de date et à un contenu. A variable created by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and then changes the type dynamically. A variable typed with `C_XXX` cannot change the type. In compiled mode, the type can never be changed, regardless of how the variable was created.

## Commandes

4D commands are built-in methods to perform an action. All 4D commands, such as `CREATE RECORD`, or `ALERT`, are described in the *4D Language Reference* manual, grouped by theme. Commands are often used with parameters, which are passed in brackets () and separated by semicolons (;). Exemple :

```code4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

Some commands are attached to collections or objects, in which case they are named methods and are used using the dot notation. Par exemple:

```code4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

You can use 4D plug-ins or 4D components that add new commands to your 4D development environment.

There are many plug-ins proposed by the 4D user community or 3rd-party developers on the market. For example, using the [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) on macOS:

```code4d
PDF REMOVE PAGE(path;page)
```

4D SVG is an example of a utility component extending the capabilities of your application:

```code4d
//drawing a picture
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG is included in 4D.

## Constantes

4D propose un large ensemble de constantes prédéfinies, dont les valeurs sont accessibles par un nom. Par exemple, `XML DATA` est une constante (valeur 6). Par défaut, les constantes prédéfinies sont soulignées dans l'éditeur de méthodes 4D. Elles permettent d'écrire un code plus lisible.

```code4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // open doc in read only mode
```

## Méthodes

4D provides a large number of built-in methods (or commands) but also lets you can create your own **project methods**. Project methods are user-defined methods that contain commands, operators, and other parts of the language. Project methods are generic methods, but there are other kinds of methods: Object methods, Form methods, Table methods (Triggers), and Database methods.

A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex.

For example, the following line is a statement that will display a confirmation dialog box:

```code4d
CONFIRM("Do you really want to close this account?";"Yes";"No")
```

A method also contains tests and loops that control the flow of the execution. 4D methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

L'exemple suivant permet d'examiner chaque caractère du texte vtDuTexte :

```code4d
For($vlChar;1;Length(vtSomeText))
    //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        //...
    End if
End for
```

A project method can call another project method with or without parameters (arguments). Les paramètres sont passés à la méthode entre parenthèses, à la suite du nom de la méthode. Chaque paramètre est séparé par des points virgule (;). Les paramètres sont passés à la méthode appelée en tant que variables locales numérotées séquentiellement : $1, $2,…, $n. A method can return a single value in the $0 parameter. When you call a method, you just type its name:

```code4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something
$0:=Uppercase($1)
```

## Types de données

De nombreux types de données peuvent être manipulés via le langage de 4D. Il existe des types de données élémentaires (chaîne, numérique, date, heure, booléen, image, pointeur, tableau), ainsi que des types de données composites (BLOBs, objets, collections).

A noter que les données de type chaîne et numérique peuvent être associés à plus d’un type de champ. Lorsque des données sont placées dans un champ, le langage les convertit automatiquement dans le type du champ. Par exemple, si un champ de type entier est utilisé, les valeurs qu’il contient sont automatiquement traitées en tant que numériques. En d’autres termes, vous n’avez pas à vous préoccuper du mélange de champs de types semblables lorsque vous programmez avec 4D ; le langage le gère pour vous.

Cependant, il est important, lorsque vous utilisez le langage, de ne pas mélanger les types de données différents. Tout comme il est absurde de stocker la valeur “ABC” dans un champ de type Date, il est absurde de donner la valeur “ABC” à une variable utilisée pour des dates. Dans la plupart des cas, 4D est très tolérant et tentera d’utiliser de manière logique ce que vous faites. Par exemple, si vous additionnez un nombre x et une date, 4D déduira que vous voulez ajouter x jours à la date, mais si vous tentez d’ajouter une chaîne à une date, 4D vous préviendra que cette opération est impossible.

Certains cas nécessitent que vous stockiez des données dans un type et que vous les utilisiez dans un autre. Le langage contient un ensemble complet de commandes vous permettant de convertir des types de données vers d’autres types. Par exemple, si vous voulez créer un numéro de matricule commençant par des chiffres et se terminant par des lettres, telles que "abc". Vous pouvez écrire :

```code4d
[Produits]Matricule:=Chaine(Numéro)+"abc"
```

Si *Numéro* vaut 17, *[Produits]Matricule* prendra la valeur “17abc”.

Les types de données sont détaillés dans la section [Types de données](Concepts/data-types.md).

## Objects and collections

You can handle 4D language objects and collections using the object notation to get or to set their values. Par exemple:

```code4d
employee.name:="Smith"
```

You can also use a string within square brackets, for example:

```code4d
$vName:=employee["name"]
```

Comme la valeur d'une propriété d'objet peut elle-même être un objet ou une collection, la notation objet requiert une séquence de symboles pour accéder aux sous-propriétés, par exemple :

```code4d
$vAge:=employee.children[2].age
```

Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:

    $f:=New object
    $f.message:=New formula(ALERT("Hello world!"))
    $f.message() //displays "Hello world!"
    

To access a collection element, you have to pass the element number embedded in square brackets:

```code4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //access to 4th element of the collection
```

## Opérateurs

Lorsque vous programmez avec 4D, il est rare que vous ayez simplement besoin de données “brutes”. Le plus souvent, il sera nécessaire de traiter ces données d'une manière ou d'une autre. Vous effectuez ces calculs avec des opérateurs. Les opérateurs, en général, prennent deux valeurs et effectuent avec elles une opération dont le résultat est une troisième valeur. Vous connaissez déjà la plupart des opérateurs. Par exemple, 1 + 2 utilise l’opérateur d’addition (ou signe plus) pour faire la somme de deux nombres, et le résultat est 3. Le tableau ci-dessous présente quelques opérateurs courants :

|  | Opérateur | Opération      | Exemple   |
|  | --------- | -------------- | --------- |
|  | +         | Addition       | 1 +2 = 3  |
|  | –         | Soustraction   | 3 - 2 = 1 |
|  | *         | Multiplication | 2 * 3 = 6 |
|  | /         | Division       | 6 / 2 = 3 |

Les opérateurs numériques ne représentent qu’un seul des différents types d’opérateurs disponibles. Comme 4D traite de multiples types de données, tels que des nombres, des dates ou des images, vous disposez d’opérateurs particuliers effectuant des opérations sur ces données.

Souvent, les mêmes symboles sont utilisés pour des opérations différentes, en fonction du type de données traitées. Par exemple, le signe (+) peut effectuer diverses opérations, comme le montre le tableau suivant :

| Type de données | Opération | Exemple                                     |
| --------------- | --------- | ------------------------------------------- |
| Numérique       | Addition  | 1 + 2 ajoute les nombres, le résultat est 3 | Chaîne |Concaténation |“Bonjour ” + “à tous” concatène (met bout à bout) les chaînes, le résultat est “Bonjour à tous” Date et Numérique |Addition de date |!1989-01-01! + 20 ajoute 20 jours à la date 1 janvier 1997, le résultat est la date 21 janvier 1997 

Les opérateurs sont détaillés dans la section Opérateurs et ses sous-sections.

## Expressions

Pour parler simplement, les expressions retournent une valeur. En fait, lorsque vous programmez avec 4D, vous utilisez tout le temps des expressions et vous avez tendance à les manipuler uniquement à travers la valeur qu’elles représentent. Les expressions sont aussi appelées formules.

Les expressions peuvent être constituées de presque tous les éléments du langage : commandes, opérateurs, variables, champs, propriétés d'objets et éléments de collection. Vous utilisez des expressions pour écrire des lignes de code, qui sont à leur tour utilisées pour construire des méthodes. Des expressions sont employées à chaque fois que le langage de 4D a besoin de connaître la valeur d’une donnée.

Les expressions sont rarement “indépendantes”. Il n’y a que peu d’endroits dans 4D où une expression peut être utilisée en tant que telle. Par exemple :

- Formula editor (apply formula, query with formula, order by formula)
- The `EXECUTE FORMULA` command
- The Property list, where an expression can be used as a data source for most of widgets
- Dans la fenêtre du Débogueur où la valeur des expressions peut être évaluée
- Dans l’éditeur d’états semi-automatiques en tant que formule dans une colonne

### Types d’expressions

Vous vous référez à une expression par le biais du type de données qu’elle retourne. Il existe plusieurs types d’expressions : The following table gives examples of each type of expression.

| Expression            | Type      | Description                                                                                                                                                                   |
| --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Bonjour”             | Chaîne    | Le mot Bonjour est une constante chaîne, signalée par les guillemets.                                                                                                         |
| “Bonjour ” + “à tous” | Chaîne    | Deux chaînes, “Bonjour ” et “à tous”, sont mises bout à bout (concaténées) à l'aide de l'opérateur de concaténation de chaînes (+). La chaîne “Bonjour à tous” est retournée. |
| “M. ” + [Amis]Nom     | Chaîne    | Deux chaînes sont concaténées : la chaîne “M. ” et la valeur courante du champ Nom de la table Amis. Si le champ contient “Dupont”, l'expression retourne “M. Dupont”.        |
| Majusc("dupont")      | Chaîne    | Cette expression utilise `Majusc`, une commande du langage, pour convertir la chaîne "dupont" en majuscules. Elle retourne “DUPONT”.                                          |
| 4                     | Numérique | C'est une constante numérique, 4.                                                                                                                                             |
| 4 * 2                 | Numérique | Deux nombres, 4 et 2, sont multipliés à l'aide de l'opérateur de multiplication (*). Le résultat est le nombre 8.                                                             |
| MonBouton             | Numérique | C'est le nom d'un bouton. Il retourne la valeur courante du bouton : 1 s'il y a eu un clic sur le bouton, 0 sinon.                                                            | !1997-01-25!| Date| C'est une constante date pour la date 25/01/97 (25 janvier 1997).| |Date du jour+ 30| Date |C'est une expression de type Date qui utilise la commande 

`Date du jour` pour récupérer la date courante. Elle ajoute 30 jours à la date d'aujourd'hui et retourne la nouvelle date.| |?8:05:30? |Heure| C'est une constante heure qui représente 8 heures, 5 minutes, et 30 secondes.| |?2:03:04? + ?1:02:03? |Heure |Cette expression ajoute une heure à une autre et retourne l'heure 3:05:07.| |Vrai| Booléen| Cette commande retourne la valeur booléenne VRAI.| |10 # 20|Booléen |C'est une comparaison logique entre deux nombres. Le symbole (#) signifie “est différent de”. Comme 10 “est différent de” 20, l'expression retourne VRAI.| |“ABC” = “XYZ” |Booléen |C'est une comparaison logique entre deux chaînes. Elles sont différentes, donc l'expression retourne FAUX.| |MonImage + 50 |Image |Cette expression considère l'image placée dans MonImage, la déplace de 50 pixels vers la droite, et retourne l'image résultante.| |->[Amis]Nom |Pointeur |Cette expression retourne un pointeur vers lechamp [Amis]Nom.| |Table (1)| Pointeur |C'est une commande qui retourne un pointeur vers la première table.| |JSON Parse (MaChaine)| Objet| C'est une commande qui retourne MaChaine sous forme d'objet (si format adéquat)| |JSON Parse (MonTabJSON) |Collection |C'est une commande qui retourne MonTabJSON sous forme de collection (si format adéquat)| |Form.pageNumber|Propriété objet|Une propriété objet est une expression qui peut être de tout type |Col[5]|Élément de collection|Un élément de collection est une expression qui peut être de tout type|  
|$entitySel[0]|Entité|Un élément d'une sélection d'entité ORDA est une expression de type entity. Ce type d'expression n'est **pas affectable**| 

### Assignable vs non-assignable expressions

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them. In 4D, expressions can be **assignable**. An expression is assignable when it can be used on the right side of an assignation. Par exemple:

```code4d
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write:  
Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable:
Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```

In general, expressions that use an operator are non-assignable. For example, `[Person]FirstName" "+[Person]LastName` is not assignable.

## Pointeurs

The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements.

A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.

```code4d
MaVar:="Bonjour"
MonPointeur->->MaVar
ALERTE(MonPointeur->)
```