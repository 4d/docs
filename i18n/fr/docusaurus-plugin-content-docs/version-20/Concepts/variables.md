---
id: variables
title: Variables
---

Fondamentalement, dans 4D, les données peuvent être stockées de deux manières. Les **champs** stockent les données sur disque, de manière permanente ; les **variables** stockent les données en mémoire, de manière temporaire.

Lorsque vous définissez votre base, vous indiquez à 4D les noms et les types de champs que vous voulez utiliser. C'est à peu près pareil pour les variables — vous pouvez aussi leur donner des noms et des types différents (voir [Types de données](Concepts/data-types.md)).

Une fois créée, vous pouvez utiliser une variable partout dans votre application. Par exemple, vous pouvez stocker une variable de type texte dans un champ du même type :

```4d
 [MaTable]MonChamp:=MonTexte
```

Les variables sont des objets du langage; vous pouvez créer et utiliser des variables qui n’apparaîtront jamais à l'écran. Dans vos formulaires, vous pouvez afficher des variables à l’écran (à l'exception des pointeurs et des BLOB), les utiliser pour saisir des données, et les imprimer dans des états. Dans ces cas, elles se comportent exactement comme des champs, et les mêmes contrôles intégrés sont disponibles lorsque vous les créez . Les variables peuvent également servir à contrôler des boutons, des list box, des zones de défilement, des boutons image, etc., ou à afficher les résultats de calculs ne devant pas être sauvegardés.

## Déclaration des variables

Vous créez généralement des variables en les déclarant. Le langage 4D propose deux manières de déclarer des variables :

- using the `var` keyword (recommended, specially if your code uses objects and classes),
- à l'aide de l'une des commandes du langage 4D des thèmes "Compilateur" ou "Tableaux" (syntaxe historique).

Lorsque les variables sont déclarées, elles sont initialisées à la [**valeur par défaut correspondant à leur type**](data-types.md#valeurs-par-defaut), qu'elles conserveront pendant la session tant qu'on ne leur aura pas [assigné une valeur](#assigning-data).

:::note

Bien que cela ne soit pas recommandé, vous pouvez créer des variables simplement en les utilisant ; il n'est pas obligatoire de les déclarer formellement. Par exemple, pour créer une variable qui contiendra la date du jour plus 30 jours, vous pouvez écrire :

```4d
 MyDate:=Current date+30 //MyDate est créé 
 // 4D identifie le type date  
 // et affecte la date courante + 30 jours
```

Lorsqu'une variable est créée avant d'être déclarée, elle n'est pas initialisée lors de l'étape de déclaration.

:::

### Using the `var` keyword

Declaring variables using the `var` keyword is recommended since this syntax allows you to bind object variables with classes. L'utilisation de cette syntaxe améliore les suggestions de l'éditeur de code et les fonctionnalités type-ahead.

To declare a variable of any type with the `var` keyword, use the following syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

Par exemple :

```4d
var $myText : Text  //une variable de type texte
var myDate1; myDate2 : Date  //plusieurs variables de type texte
var $myFile : 4D.File  //une variable objet de classe de fichier
var $myVar //une variable variant
```

`varName` est le nom de la variable, il doit respecter les [règles de 4D](Concepts/identifiers.md) concernant les identifiants.
Cette syntaxe ne prend en charge que les déclarations de [variables locales et process](#local-process-and-interprocess-variables), excluant ainsi les [variables interprocess](#interprocess-variables) et les [tableaux](Concepts/arrays.md).

`varType` peut être :

- un [type basique](Concepts/data-types.md), auquel cas la variable contient une valeur du type déclaré,
- une [référence de classe](Concepts/classes.md) (classe 4D ou classe utilisateur), auquel cas la variable contient une référence à un objet de la classe définie.

Si `varType` est omis, une variable de type **variant** est créée.

Le tableau suivant liste toutes les valeurs `varType` prises en charge :

| varType                                        | Contenu                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| `Text`                                         | Valeur texte                                                              |
| `Date`                                         | Valeur date                                                               |
| `Time`                                         | Valeur Heure                                                              |
| `Boolean`                                      | Valeur booléen                                                            |
| `Integer`                                      | Valeur entier long                                                        |
| `Real`                                         | Valeur réel                                                               |
| `Pointer`                                      | Valeur pointeur                                                           |
| `Picture`                                      | Valeur image                                                              |
| `Blob`                                         | Valeur Blob scalaire                                                      |
| `Collection`                                   | Valeur collection                                                         |
| `Variant`                                      | Valeur variant                                                            |
| `Object`                                       | Objet de classe par défaut (4D.Object) |
| `4D.<className>`                               | Objet de la classe 4D className                                           |
| `cs.<className>`                               | Objet de la classe utilisateur className                                  |
| `cs.<namespace>`cs.<namespace> | Object de la classe className du composant `<namespace>`                  |

#### Exemples

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

### Utilisation d'une directive C_

> **Compatibility Note:** This feature is not recommended to declare variables inside methods. It is recommended to use the [var](#using-the-var-keyword) keyword.

Les directives du thème "Compilateur" vous permettent de déclarer des variables de types basiques.

Par exemple, si vous souhaitez définir une variable de type texte, il suffira d'écrire :

```4d
 C_TEXT(monTexte)
```

Voici quelques déclarations de variables simples :

```4d
 C_BLOB(vxMyBlob) // La variable process vxMyBlob est déclarée comme variable de type BLOB C_DATE($vdCurDate) // La variable locale $vdCurDate est déclarée comme variable de type Date
 C_C_LONGINT(vg1;vg2;vg3) // Les 3 variables process vg1, vg2 et vg3 sont déclarées comme variables de type Entier long
 C_OBJECT($vObj) // La variable locale $vObj est déclarée comme variable de type Objet
 C_COLLECTION($vCol) // La variable locale $vCol est déclarée comme variable de type Collection
```

**Note:** Arrays are a particular type of variables (an array is an ordered series of variables of the same type). Arrays are declared with specific commands, such as `ARRAY LONGINT(alAnArray;10)`. For more information, please refer to [Arrays](Concepts/arrays.md).

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou récupérer leur valeur. Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou récupérer leur valeur. L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs.

L’opérateur d’assignation est un premier moyen pour créer une variable et lui donner une valeur. Vous placez le nom de la variable que vous voulez créer à gauche de l’opérateur. Par exemple :

```4d
MonNombre:=3
```

crée la variable *MonNombre* et lui donne la valeur numérique 3. Si MonNombre existait déjà, elle prend simplement la valeur 3.

> Il n'est généralement pas recommandé de créer des variables sans [déclarer leur type](#declaring-variables).

Bien entendu, les variables ne seraient pas très utiles si vous ne pouviez pas récupérer les valeurs qu’elles contiennent. De nouveau, vous utilisez l’opérateur d’assignation. Si vous aviez besoin de mettre la valeur de MonNombre dans un champ appelé [Produits]Taille, vous écririez *MonNombre* à droite de l'opérateur d'assignation :

```4d
[Produits]Taille:=MonNombre
```

Dans ce cas, *[Produits]Taille* vaudrait 3. Cet exemple est plutôt simple, mais il illustre le moyen élémentaire dont vous disposez pour transférer des données d’un objet vers un autre en utilisant le langage.

Vous assignez des valeurs aux éléments du tableau à l'aide d'accolades ({...}) :

```4d
atNoms{1}:="Richard"
```

## Variables locales, process et interprocess

Vous pouvez créer trois types de variables : **locales**, **process**, et **interprocess**. La différence entre ces trois types de variables est leur portée, ou les objets pour lesquels elles sont disponibles.

### Variables locales

Une variable locale, comme son nom l’indique, est locale à une méthode — c’est-à-dire accessible uniquement à l’intérieur de la méthode dans laquelle elle a été créée et inaccessible à l’extérieur de cette méthode. Le fait d'être local à une méthode est formellement qualifié de «portée locale». Les variables locales sont utilisées pour restreindre une variable afin qu'elle ne fonctionne que dans la méthode.

Vous pouvez choisir d'utiliser une variable locale pour :

- Eviter des conflits de noms avec les autres variables
- Utiliser temporairement des valeurs,
- Réduire le nombre de variables process

Le nom d’une variable locale commence toujours par le signe dollar ($) et peut contenir jusqu’à 31 autres caractères. Si vous saisissez un nom plus long, 4D le tronque pour le ramener à 31 caractères.

Lorsque vous développez un projet d'application comportant de nombreuses méthodes et variables, il arrive souvent que vous n’ayez besoin d’utiliser une variable que dans une méthode. Vous pouvez alors créer et utiliser une variable locale, sans devoir vous soucier de l’existence d’une autre variable du même nom ailleurs dans la base.

Souvent, dans une application, des informations ponctuelles sont demandées à l’utilisateur. La commande `Request` peut obtenir ces informations. Elle affiche une boîte de dialogue comportant un message demandant à l’utilisateur de répondre et, lorsque la réponse est validée, la retourne.   Généralement, il n’est pas nécessaire de conserver cette information très longtemps dans vos méthodes. C’est l’endroit parfait pour utiliser une variable locale. Voici un exemple :

```4d
 $vsID:=Request("Saisissez votre numéro d'identification :")
If(OK=1)
    QUERY([Personnes];[Personnes]ID=$vsID)
 End if
```

Cette méthode demande simplement à l’utilisateur de saisir un numéro d’identification. La réponse est placée dans une variable locale, $vsID, puis la méthode la recherche parmi les champs [Personnes]ID. Une fois la méthode terminée, la variable locale $vsID est effacée de la mémoire. Ce fonctionnement est bien adapté puisque la variable n’est utile qu’une seule fois et dans cette méthode uniquement.

**Note:** Les paramètres $1, $2... passés à des méthodes sont des variables locales. Pour plus d'informations, veuillez vous référer à [Paramètres](Concepts/parameters.md).

### Variables process

Une variable process est “visible” uniquement dans le process où elle a été créée. Elle est utilisable par toutes les méthodes du process et toutes les méthodes appelées depuis le process.

Le nom d’une variable process ne comporte aucun préfixe. Ce nom peut contenir jusqu’à 31 caractères.

En mode interprété, les variables sont gérées dynamiquement; elles sont créées et effacées de la mémoire «à la volée». En mode compilé, tous les process que vous créez (process utilisateur) partagent la même définition de variables process, mais chaque process a une instance différente pour chaque variable. Par exemple, la variable maVar est une certaine variable dans le process P_1 et une autre variable dans le process P_2.

Un process peut lire et écrire des variables process dans un autre process à l'aide des commandes `GET PROCESS VARIABLE` et `SET PROCESS VARIABLE`. Nous vous recommandons de n'utiliser ces commandes que dans le cadre des besoins décrits ci-dessous (qui sont les raisons pour lesquelles ces commandes ont été créées dans 4D) :

- Communication interprocess à des endroits particuliers de votre code
- Gestion du glisser-déposer interprocess
- En client/serveur, communication entre les process sur les postes clients et les procédures stockées exécutées sur le serveur

Pour plus d'informations, consultez le chapitre **Process** et la description de ces commandes.

### Variables interprocess

:::warning Obsolète

L'utilisation de variables interprocess est désormais déconseillée car elles ne sont pas disponibles depuis les process préemptifs et ont tendance à rendre le code moins maintenable.

:::

Les variables interprocess sont visibles dans tout le projet et sont disponibles pour tous les process. Les variables interprocess sont principalement utilisées pour le partage d’informations entre les process.

Le nom d'une variable interprocess commence toujours par les symboles `<>` — un signe "inférieur à" et un signe "supérieur à" — suivi de 31 caractères.

En mode client/serveur, chaque poste (client et serveur) partage la même définition des variables interprocess, mais chacun utilise une instance différente de chaque variable.

## Variables système

Le langage 4D gère plusieurs **variables système**, qui permettent de contrôler l'exécution de différentes opérations. Vous pouvez tester leur valeur et les utiliser comme n'importe quelle variable. Toutes les variables système sont des [variables process] (#process-variables).

System variables are used by [4D commands](commands.md). Reportez-vous au paragraphe "Variables et ensembles système" dans la description d'une commande pour savoir si elle affecte une variable système.

| Nom de variable système                                | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OK`                                                   | Integer       | Généralement fixée à 1 lorsqu'une commande a affiché une boîte de dialogue et que l'utilisateur a cliqué sur le bouton **OK**, et à 0 s'il a cliqué sur **Cancel**. Certaines commandes modifient également la valeur de la variable système `OK` lorsqu'une opération est exécutée avec succès.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Document`                                             | Text          | Contient le "nom long" (chemin complet + nom) du dernier fichier ouvert ou créé à l'aide de commandes telles que [Open document](https://doc.4d.com/4dv20/help/command/en/page264.html) ou [SELECT LOG FILE](https://doc.4d.com/4dv20/help/command/en/page345.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `FldDelimit`, `RecDelimit`                             | Integer       | Contiennent les codes de caractères qui seront utilisés respectivement comme séparateur de champs (par défaut **Tab** (9)) et séparateur d'enregistrements (par défaut **retour chariot** (13)) lors de l'importation ou de l'exportation de texte. Pour utiliser un séparateur différent, attribuez une nouvelle valeur à la variable système.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `Error`, `Error method`, `Error line`, `Error formula` | Text, Longint | Utilisées dans une méthode d'interception d'erreurs installée par la commande [`ON ERR CALL`](https://doc.4d.com/4dv20/help/command/en/page155.html). Utilisées dans une méthode d'interception d'erreurs installée par la commande [`ON ERR CALL`](../commands/on-err-call).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `MouseDown`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Prend la valeur 1 si le bouton de la souris a été enfoncé, sinon prend la valeur 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `MouseX`, `MouseY`                                     | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. <li>Dans un événement `MouseDown=1`, `MouseX` et `MouseY` reçoivent respectivement les coordonnées verticales et horizontales du clic. Les deux valeurs sont exprimées en pixels et avec le système de coordonnées locales de la fenêtre. </li><li>Dans le cas d'un champ ou d'une variable image, `MouseX` et `MouseY` reçoivent les coordonnées locales d'un clic de souris dans les événements de formulaire [`On Clicked`](../Events/onClicked.md), [`On Double Clicked`](../Events/onDoubleClicked.md) et [`On Mouse Up`](../Events/onMouseUp.md). Les coordonnées locales du curseur de la souris sont également retournées dans les événements [`On Mouse Enter`](../Events/onMouseEnter.md) et [`On Mouse Move`](../Events/onMouseMove.md) . Pour plus d'informations, voir la section [Coordonnées de la souris dans une image](../FormEditor/pictures.md#mouse-coordinates-in-a-picture).</li> |
| `KeyCode`                                              | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Définit le code de caractère de la touche qui vient d'être pressée. Si la touche est une touche de fonction, `KeyCode` prend la valeur d'un code spécial.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `Modifiers`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Contient les codes des modifiers du clavier (Ctrl/Commande, Alt/Option, Maj, Verr.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `MouseProc`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Contient le numéro du process dans lequel le dernier événement a eu lieu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

:::note

Par conséquent, vous ne pouvez pas créer une variable, une méthode ou une fonction utilisant un des noms de ces variables.

:::
