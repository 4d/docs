---
id: variables
title: Variables
---

Fondamentalement, dans 4D, les données peuvent être stockées de deux manières. **Les champs** stockent les données sur disque, de manière permanente ; **les variables** stockent les données en mémoire, de manière temporaire.

Lorsque vous définissez votre base, vous indiquez à 4D les noms et les types de champs que vous voulez utiliser. C’est pratiquement la même chose pour les variables — vous leur donnez un nom et un type (cf. [Type de données](Concepts/data-types.md)).

Once created, you can use a variable wherever you need it in your application. For example, you might need to store a text variable in a field of same type:

```4d
 [MaTable]MonChamp:=MonTexte
```


Les variables sont des objets du langage; vous pouvez créer et utiliser des variables qui n’apparaîtront jamais à l'écran. Dans vos formulaires, vous pouvez afficher des variables à l’écran (à l'exception des pointeurs et des BLOB), les utiliser pour saisir des données, et les imprimer dans des états. Dans ces cas, elles se comportent exactement comme des champs, et les mêmes contrôles intégrés sont disponibles lorsque vous les créez . Les variables peuvent également servir à contrôler des boutons, des list box, des zones de défilement, des boutons image, etc., ou à afficher les résultats de calculs ne devant pas être sauvegardés.

## Declaring Variables

You create variables by declaring them. The 4D language offers two ways to declare variables:

- using the `var` keyword (recommended, specially if your code uses objects and classes),
- using one of the "Compiler" or "Arrays" theme 4D language commands (deprecated, classic language only).

**Note:** Although it is usually not recommended, you can create basic variables simply by using them; you do not necessarily need to formally define them. For example, to declare a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```


### Using the `var` keyword

Declaring variables using the `var` keyword is recommended since this syntax allows you to bind object variables with classes. Using this syntax enhances code editor suggestions and type-ahead features.

To declare a variable of any type with the `var` keyword, use the following syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

Par exemple:

```4d
var $myText : Text  //a text variable
var myDate1; myDate2 : Date  //several date variables
var $myFile : 4D.File  //a file class object variable
var $myVar //a variant variable
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.   
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

Le tableau suivant répertorie toutes les valeurs `varType` prises en charge :

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      varType
    </th>
    
    <th>
      Contenu
    </th>
  </tr>
  
  <tr>
    <td>
      Texte
    </td>
    
    <td>
      Valeur texte
    </td>
  </tr>
  
  <tr>
    <td>
      Date
    </td>
    
    <td>
      Valeur date
    </td>
  </tr>
  
  <tr>
    <td>
      Heure
    </td>
    
    <td>
      Valeur Heure
    </td>
  </tr>
  
  <tr>
    <td>
      Booléen
    </td>
    
    <td>
      Valeur booléen
    </td>
  </tr>
  
  <tr>
    <td>
      Entier long
    </td>
    
    <td>
      Valeur entier long
    </td>
  </tr>
  
  <tr>
    <td>
      Réel
    </td>
    
    <td>
      Valeur réel
    </td>
  </tr>
  
  <tr>
    <td>
      Pointeur
    </td>
    
    <td>
      Valeur pointeur
    </td>
  </tr>
  
  <tr>
    <td>
      Image
    </td>
    
    <td>
      Valeur image
    </td>
  </tr>
  
  <tr>
    <td>
      Blob
    </td>
    
    <td>
      Valeur BLOB
    </td>
  </tr>
  
  <tr>
    <td>
      Collection
    </td>
    
    <td>
      Valeur collection
    </td>
  </tr>
  
  <tr>
    <td>
      Variant
    </td>
    
    <td>
      Valeur variant
    </td>
  </tr>
  
  <tr>
    <td>
      Objet
    </td>
    
    <td>
      Objet avec classe par défaut (4D.object)
    </td>
  </tr>
  
  <tr>
    <td>
      4D.\<className>
    </td>
    
    <td>
      Objet du nom de la classe 4D
    </td>
  </tr>
  
  <tr>
    <td>
      cs.\<className>
    </td>
    
    <td>
      Objet du nom de la classe utilisateur
    </td>
  </tr>
</table>

#### Exemples

- To declare local and process basic variables:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalent to:  
var $o : 4D.Object
//also equivalent to C_OBJECT($o)
```

- To declare object variables of 4D class:

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- To declare object variables of user class:

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```


### Using a C_ directive

> **Compatibility Note:** This feature is deprecated as of 4D v18 R3. It is now recommended to use the [var](#using-the-var-keyword) keyword.

Directives from the "Compiler" theme commands allow you to declare variables of basic types.

Par exemple, si vous souhaitez définir une variable de type texte, il suffira d'écrire :

```4d
 C_TEXT(monTexte)
```

Voici quelques déclarations de variables simples :

```4d
 C_BLOB(vxMyBlob) // La variable process vxMyBlob est déclarée comme variable de type BLOB
 C_DATE($vdCurDate) // La variable locale $vdCurDate est déclarée comme variable de type Date
 C_C_LONGINT(vg1;vg2;vg3) // Les 3 variables process vg1, vg2 et vg3 sont déclarées comme variables de type Entier long
 C_OBJECT($vObj) // La variable locale $vObj est déclarée comme variable de type Objet
 C_COLLECTION($vCol) // La variable locale $vCol est déclarée comme variable de type Collection
ARRAY LONGINT(alAnArray;10) //La variable process alAnArray est déclarée comme un tableau entier long de 10 éléments
```

**Note:** Arrays are a particular type of variables. Un tableau est une série ordonnée de variables de même type. Pour plus d'informations, veuillez consulter le thème [Tableaux](Concepts/arrays.md).


## Assigner des valeurs

Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou récupérer leur valeur. Donner une valeur à une variable s’appelle **assigner une valeur (ou affecter une valeur)** et s’effectue à l’aide de l’opérateur d’assignation (:=). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs.

The assignment operator is a primary way to create a variable and to put data into it. Vous placez le nom de la variable que vous voulez créer à gauche de l’opérateur. Par exemple:

```4d
MonNombre:=3
```

crée la variable _MonNombre_ et lui donne la valeur numérique 3. Si MonNombre existait déjà, elle prend simplement la valeur 3.

> It is usually not recommended to create variables without [declaring their type](#creating-variables).

Bien entendu, les variables ne seraient pas très utiles si vous ne pouviez pas récupérer les valeurs qu’elles contiennent. De nouveau, vous utilisez l’opérateur d’assignation. Si vous devez placer la valeur de MonNombre dans un champ nommé [Produits]Taille, il vous suffit de placer _MonNombre_ à droite de l’opérateur d’assignation :

```4d
[Produits]Taille:=MonNombre
```

Dans ce cas, _[Produits]Taille_ vaudrait 3. Cet exemple est plutôt simple, mais il illustre le moyen élémentaire dont vous disposez pour transférer des données d’un objet vers un autre en utilisant le langage.

Vous assignez des valeurs aux éléments du tableau à l'aide d'accolades ({...}) :

```4d
atNoms{1}:="Richard"
```

## Variables locales, process et interprocess

Vous pouvez créer trois types de variables : des variables **locales**, des variables **process** et des variables **interprocess**. La différence entre ces trois types de variables est leur portée, ou les objets pour lesquels elles sont disponibles.

### Variables locales

Une variable locale, comme son nom l’indique, est locale à une méthode — c’est-à-dire accessible uniquement à l’intérieur de la méthode dans laquelle elle a été créée et inaccessible à l’extérieur de cette méthode. Le fait d'être local à une méthode est formellement qualifié de «portée locale». Les variables locales sont utilisées pour restreindre une variable afin qu'elle ne fonctionne que dans la méthode.

- Eviter des conflits de noms avec les autres variables
- Utiliser temporairement des valeurs,
- Réduire le nombre de variables process

Le nom d’une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu’à 31 autres caractères. Si vous saisissez un nom plus long, 4D le tronque pour le ramener à 31 caractères.

When you are working in an application project with many methods and variables, you often find that you need to use a variable only within the method on which you are working. Vous pouvez alors créer et utiliser une variable locale, sans devoir vous soucier de l’existence d’une autre variable du même nom ailleurs dans la base.

Frequently, in an application, small pieces of information are needed from the user. The `Request` command can obtain this information. Elle affiche une boîte de dialogue comportant un message demandant à l’utilisateur de répondre et, lorsque la réponse est validée, la retourne.   Généralement, il n’est pas nécessaire de conserver cette information très longtemps dans vos méthodes. C’est l’endroit parfait pour utiliser une variable locale. Voici un exemple :

```4d
 $vsID:=Request("Saisissez votre numéro d'identification :")
If(OK=1)
    QUERY([Personnes];[Personnes]ID=$vsID)
 End if
```

Cette méthode demande simplement à l’utilisateur de saisir un numéro d’identification. La réponse est placée dans une variable locale, $vsID, puis la méthode la recherche parmi les champs [Personnes]ID. Une fois la méthode terminée, la variable locale $vsID est effacée de la mémoire. Ce fonctionnement est bien adapté puisque la variable n’est utile qu’une seule fois et dans cette méthode uniquement.

**Note :** les paramètres $1, $2 etc. passés aux méthodes sont des variables locales. Pour plus d'informations, veuillez consulter le thème [Paramètres](Concepts/parameters.md).

### Variables process

Une variable process est “visible” uniquement dans le process où elle a été créée. Elle est utilisable par toutes les méthodes du process et toutes les méthodes appelées depuis le process.

Le nom d’une variable process ne comporte aucun préfixe. Ce nom peut contenir jusqu’à 31 caractères.

En mode interprété, les variables sont gérées dynamiquement; elles sont créées et effacées de la mémoire «à la volée». En mode compilé, tous les process que vous créez (process utilisateur) partagent la même définition de variables process, mais chaque process a une instance différente pour chaque variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2.

Un process peut lire et écrire des variables process dans un autre process à l'aide des commandes `LIRE VARIABLE PROCESS` et `ECRIRE VARIABLE PROCESS`. Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins décrits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont été créées dans 4D) :

- Communication interprocess à des endroits particuliers de votre code
- Gestion du glisser-déposer interprocess
- En client/serveur, communication entre les process sur les postes clients et les procédures stockées exécutées sur le serveur

Pour plus d'informations, reportez-vous à la section **Process** et à la description de ces commandes.

### Variables interprocess

Interprocess variables are available throughout the project and are shared across all cooperative processes. Les variables interprocess sont principalement utilisées pour le partage d’informations entre les process.

> L'utilisation de variables interprocess n'est pas recommandée car elles ne sont pas disponibles depuis le process préemptif et peuvent rendre le code moins maintenable.

Le nom d’une variable interprocess débute toujours par le symbole (<>) — formé du symbole “inférieur à” suivi du symbole “supérieur à” — et peut comporter jusqu’à 31 caractères supplémentaires.

En mode client/serveur, chaque poste (client et serveur) partage la même définition des variables interprocess, mais chacun utilise une instance différente d'une variable.


