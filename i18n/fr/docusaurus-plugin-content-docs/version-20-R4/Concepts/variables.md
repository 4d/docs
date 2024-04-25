---
id: variables
title: Variables
---

Fondamentalement, dans 4D, les données peuvent être stockées de deux manières. **Fields** store data permanently on disk; **variables** store data temporarily in memory.

Lorsque vous définissez votre base, vous indiquez à 4D les noms et les types de champs que vous voulez utiliser. Variables are much the same—you also give them names and different types (see [Data types](Concepts/data-types.md)).

Une fois créée, vous pouvez utiliser une variable partout dans votre application. Par exemple, vous pouvez stocker une variable de type texte dans un champ du même type :

```4d
 [MaTable]MonChamp:=MonTexte
```

Les variables sont des objets du langage; vous pouvez créer et utiliser des variables qui n’apparaîtront jamais à l'écran. Dans vos formulaires, vous pouvez afficher des variables à l’écran (à l'exception des pointeurs et des BLOB), les utiliser pour saisir des données, et les imprimer dans des états. Dans ces cas, elles se comportent exactement comme des champs, et les mêmes contrôles intégrés sont disponibles lorsque vous les créez . Les variables peuvent également servir à contrôler des boutons, des list box, des zones de défilement, des boutons image, etc., ou à afficher les résultats de calculs ne devant pas être sauvegardés.

## Déclaration des variables

You usually create variables by declaring them. Le langage 4D propose deux manières de déclarer des variables :

- using the `var` keyword (recommended specially if your code uses objects and classes, and this syntax enhances code editor suggestions and type-ahead features),
- using one of the "Compiler" or "Arrays" theme 4D language commands (legacy syntax).

When variables are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been [assigned](#assigning-data). Alternatively, when declaring variables, you can [initialize](#initializing-variables-in-the-declaration-line) their value along with their data type all within one line.

:::note

Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate est créé 
 // 4D identifie le type date  
 // et affecte la date courante + 30 jours
```

When a variable is created before being declared, it is not initialized at the declaration step.

:::

To declare a variable of any type, use the following syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

Par exemple :

```4d
var $myText : Text  //une variable de type texte
var myDate1; myDate2 : Date  //plusieurs variables de type texte
var $myFile : 4D.File  //une variable objet de classe de fichier
var $myVar //une variable variant
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

The following table lists all supported `varType` values:

| varType                     | Contenu                                                                   |
| --------------------------- | ------------------------------------------------------------------------- |
| `Text`                      | Valeur texte                                                              |
| `Date`                      | Valeur date                                                               |
| `Time`                      | Valeur Heure                                                              |
| `Boolean`                   | Valeur booléen                                                            |
| `Entier`                    | Valeur entier long                                                        |
| `Real`                      | Valeur réel                                                               |
| `Pointer`                   | Valeur pointeur                                                           |
| `Picture`                   | Valeur image                                                              |
| `Blob`                      | Valeur Blob scalaire                                                      |
| `Collection`                | Valeur collection                                                         |
| `Variant`                   | Valeur variant                                                            |
| `Object`                    | Objet de classe par défaut (4D.Object) |
| `4D.<className>`            | Object de la classe 4D className                                          |
| `cs.<className>`            | Object de la classe utilisateur className                                 |
| `cs.<namespace><className>` | Object of the `<namespace>` component class name                          |

### Exemples

- Pour déclarer les variables locales et les variables process basiques :

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//équivalent à :  
var $o : 4D.Object
//également équivalent à C_OBJECT($o)
```

- Pour déclarer les variables objet de classe 4D :

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- Pour déclarer les variables objet de classe utilisateur :

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```

## Initializing Variables in the Declaration Line

When declaring variables, you have the flexibility to specify their data type and provide an initial value in one statement. Voici quelques exemples :

```4d
var $a : Text:="hello"
var $b : Date:=!2023-09-12!
var $c : Object:=New object()
var $d : cs.Customer:=cs.Customer.new()
```

Variables can also be declared and initialized without explicitly mentioning their data type, in which case their type will be inferred by 4D. Voici quelques exemples :

```4d
var $text:="hello"  // Inferred as Text 
var $number:=20  // Inferred as Real 
var $obj:={}  // Inferred as an Object 
var $mycol:=[]  // Inferred as a Collection  

```

:::note

The inferred type might be different between [interpreted and compiled mode](interpreted.md) if the evaluation of the value is too ambiguous. In this case, a warning is generated by the compiler and a variant type is used. For example, in the following $a type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and $a will be typed as a variant for the compiled mode.

```4d
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D tries to deduce the most general type. For instance, it uses the Real type rather than the Integer type when a variable is initialized with an integer value (e.g., `var $a:=10 //Real type is inferred`). In such cases, or when initializing a variable with a complex type such as class instantiation, it is recommended to pass the type explicitly.

In most cases, all variable types are automatically determined. The exception is when you assign a value to a process or interprocess variable, which then triggers a warning message.

:::note

Multiple assignments in one line are not supported:

```4d
var $a; $b : Integer:=15 //error

```

:::

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou récupérer leur valeur. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs.

L’opérateur d’assignation est un premier moyen pour créer une variable et lui donner une valeur. Vous placez le nom de la variable que vous voulez créer à gauche de l’opérateur. Par exemple :

```4d
MonNombre:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. Si MonNombre existait déjà, elle prend simplement la valeur 3.

> It is usually not recommended to create variables without [declaring their type](#declaring-variables).

Bien entendu, les variables ne seraient pas très utiles si vous ne pouviez pas récupérer les valeurs qu’elles contiennent. De nouveau, vous utilisez l’opérateur d’assignation. If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Produits]Taille:=MonNombre
```

In this case, _[Products]Size_ would be equal to 3. Cet exemple est plutôt simple, mais il illustre le moyen élémentaire dont vous disposez pour transférer des données d’un objet vers un autre en utilisant le langage.

Vous assignez des valeurs aux éléments du tableau à l'aide d'accolades ({...}) :

```4d
atNoms{1}:="Richard"
```

## Variables locales, process et interprocess

You can create three types of variables: **local**, **process**, and **interprocess**. La différence entre ces trois types de variables est leur portée, ou les objets pour lesquels elles sont disponibles.

### Variables locales

Une variable locale, comme son nom l’indique, est locale à une méthode — c’est-à-dire accessible uniquement à l’intérieur de la méthode dans laquelle elle a été créée et inaccessible à l’extérieur de cette méthode. Le fait d'être local à une méthode est formellement qualifié de «portée locale». Les variables locales sont utilisées pour restreindre une variable afin qu'elle ne fonctionne que dans la méthode.

Vous pouvez choisir d'utiliser une variable locale pour :

- Eviter des conflits de noms avec les autres variables
- Utiliser temporairement des valeurs,
- Réduire le nombre de variables process

Le nom d’une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu’à 31 autres caractères. Si vous saisissez un nom plus long, 4D le tronque pour le ramener à 31 caractères.

Lorsque vous développez un projet d'application comportant de nombreuses méthodes et variables, il arrive souvent que vous n’ayez besoin d’utiliser une variable que dans une méthode. Vous pouvez alors créer et utiliser une variable locale, sans devoir vous soucier de l’existence d’une autre variable du même nom ailleurs dans la base.

Souvent, dans une application, des informations ponctuelles sont demandées à l’utilisateur. The `Request` command can obtain this information. Elle affiche une boîte de dialogue comportant un message demandant à l’utilisateur de répondre et, lorsque la réponse est validée, la retourne.   Généralement, il n’est pas nécessaire de conserver cette information très longtemps dans vos méthodes. C’est l’endroit parfait pour utiliser une variable locale. Voici un exemple :

```4d
 $vsID:=Request("Saisissez votre numéro d'identification :")
If(OK=1)
    QUERY([Personnes];[Personnes]ID=$vsID)
 End if
```

Cette méthode demande simplement à l’utilisateur de saisir un numéro d’identification. La réponse est placée dans une variable locale, $vsID, puis la méthode la recherche parmi les champs [Personnes]ID. Une fois la méthode terminée, la variable locale $vsID est effacée de la mémoire. Ce fonctionnement est bien adapté puisque la variable n’est utile qu’une seule fois et dans cette méthode uniquement.

**Note:** Parameters $1, $2... passés à des méthodes sont des variables locales. For more information, please refer to [Parameters](Concepts/parameters.md).

### Variables process

Une variable process est “visible” uniquement dans le process où elle a été créée. Elle est utilisable par toutes les méthodes du process et toutes les méthodes appelées depuis le process.

Le nom d’une variable process ne comporte aucun préfixe. Ce nom peut contenir jusqu’à 31 caractères.

En mode interprété, les variables sont gérées dynamiquement; elles sont créées et effacées de la mémoire «à la volée». En mode compilé, tous les process que vous créez (process utilisateur) partagent la même définition de variables process, mais chaque process a une instance différente pour chaque variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins décrits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont été créées dans 4D) :

- Communication interprocess à des endroits particuliers de votre code
- Gestion du glisser-déposer interprocess
- En client/serveur, communication entre les process sur les postes clients et les procédures stockées exécutées sur le serveur

For more information, see the chapter **Processes** and the description of these commands.

### Variables interprocess

Les variables interprocess sont visibles dans tout le projet et sont disponibles pour tous les process. Les variables interprocess sont principalement utilisées pour le partage d’informations entre les process.

> L'utilisation de variables interprocess n'est pas recommandée car elles ne sont pas disponibles depuis le process préemptif et peuvent rendre le code moins maintenable.

The name of an interprocess variable always begins with the symbols `<>` — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

En mode client/serveur, chaque poste (client et serveur) partage la même définition des variables interprocess, mais chacun utilise une instance différente de chaque variable.
