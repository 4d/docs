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

You create variables by declaring them using the `var` keyword.

Lorsque les variables sont déclarées, elles sont initialisées à la [**valeur par défaut correspondant à leur type**](data-types.md#valeurs-par-defaut), qu'elles conserveront pendant la session tant qu'on ne leur aura pas [assigné une valeur](#assigning-data). Alternativement, lors de la déclaration des variables, vous pouvez [initialiser](#initializing-variables-in-the-declaration-line) leur valeur en même temps que leur type de données en une seule ligne.

:::note

Bien que cela ne soit pas recommandé, vous pouvez créer des variables simplement en les utilisant ; il n'est pas obligatoire de les déclarer formellement. Par exemple, pour créer une variable qui contiendra la date du jour plus 30 jours, vous pouvez écrire :

```4d
 MyDate:=Current date+30 //MyDate est créé 
 // 4D identifie le type date  
 // et affecte la date courante + 30 jours
```

Lorsqu'une variable est créée avant d'être déclarée, elle n'est pas initialisée lors de l'étape de déclaration.

:::

Pour déclarer une variable de n'importe quel type, utilisez la syntaxe suivante :

`var <varName>{; <varName2>;...}{ : <varType>}`

Par exemple :

```4d
var $myText : Text  //une variable de type texte
var myDate1; myDate2 : Date  //plusieurs variables de type texte
var $myFile : 4D.File  //une variable objet de classe de fichier
var $myVar //une variable variant
```

`varName` est le nom de la variable, il doit respecter les [règles de 4D](Concepts/identifiers.md) concernant les identifiants.
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) (deprecated) and [arrays](Concepts/arrays.md).

`varType` peut être :

- un [type basique](Concepts/data-types.md), auquel cas la variable contient une valeur du type déclaré,
- une [référence de classe](Concepts/classes.md) (classe 4D ou classe utilisateur), auquel cas la variable contient une référence à un objet de la classe définie.

Si `varType` est omis, une variable de type **variant** est créée.

Le tableau suivant liste toutes les valeurs `varType` prises en charge :

| varType                     | Contenu                                                  |
| --------------------------- | -------------------------------------------------------- |
| `Text`                      | Valeur texte                                             |
| `Date`                      | Valeur date                                              |
| `Time`                      | Valeur Heure                                             |
| `Boolean`                   | Valeur booléen                                           |
| `Integer`                   | Valeur entier long                                       |
| `Real`                      | Valeur réel                                              |
| `Pointer`                   | Valeur pointeur                                          |
| `Picture`                   | Valeur image                                             |
| `Blob`                      | Valeur Blob scalaire                                     |
| `Collection`                | Valeur collection                                        |
| `Variant`                   | Valeur variant                                           |
| `Object`                    | Object with default class                                |
| `4D.<className>`            | Objet de la classe 4D className                          |
| `cs.<className>`            | Objet de la classe utilisateur className                 |
| `cs.<namespace><className>` | Object de la classe className du composant `<namespace>` |

:::note Compatibilité

The legacy syntax using `C_XXX` commands is deprecated as of 4D 20 R7.

:::

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

## Initialisation des variables dans la ligne de déclaration

Lorsque vous déclarez des variables, vous avez la flexibilité de spécifier leur type de données et de fournir une valeur initiale dans une seule instruction. Voici quelques exemples :

```4d
var $a : Text:="hello"
var $b : Date:=!2023-09-12!
var $c : Object:=New object()
var $d : cs.Customer:=cs.Customer.new()
```

Les variables peuvent également être déclarées et initialisées sans mentionner explicitement leur type de données, auquel cas leur type sera déduit par 4D. Voici quelques exemples :

```4d
var $text:="hello"  // Inferred as Text
var $number:=20  // Inferred as Real
var $obj:={}  // Inferred as an Object
var $mycol:=[]  // Inferred as a Collection  

```

:::note

Le type déduit peut être différent entre le [mode interprété et compilé](interpreted.md) si l'évaluation de la valeur est trop ambiguë. Dans ce cas, un warning est généré par le compilateur et un type variant est utilisé. For example, in the following *$a* type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and *$a* will be typed as a variant for the compiled mode.

```4d
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D essaie de déduire le type le plus général. Par exemple, il utilise le type Real plutôt que le type Integer lorsqu'une variable est initialisée avec une valeur entière (par exemple, `var $a:=10 //Le type Real est déduit`). Dans de tels cas, ou lors de l'initialisation d'une variable avec un type complexe comme une instance de classe, il est recommandé de passer le type explicitement.

Dans la plupart des cas, tous les types de variables sont automatiquement déterminés. L'exception est lorsque vous attribuez une valeur à une variable process ou interprocess, ce qui déclenche ensuite un message de warning.

:::note

Les affectations multiples sur une seule ligne ne sont pas prises en charge :

```4d
var $a; $b : Integer:=15 //erreur

```

:::

## Assigner des valeurs

Vous pouvez donner des valeurs aux variables ou aux tableaux et/ou récupérer leur valeur. Mettre des données dans une variable s'appelle **assigner les données à la variable** et s'effectue avec l'opérateur d'assignation (:=) (aussi appelé opérateur d'affectation). L’opérateur d’assignation est également utilisé pour assigner des valeurs aux champs.

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

Use of interprocess variables is not recommended since they are not available from [preemptive processes](../Develop/preemptive.md) and tend to make the code less maintainable.

:::

Les variables interprocess sont visibles dans tout le projet et sont disponibles pour tous les process. Les variables interprocess sont principalement utilisées pour le partage d’informations entre les process.

Le nom d'une variable interprocess commence toujours par les symboles `<>` — un signe "inférieur à" et un signe "supérieur à" — suivi de 31 caractères.

En mode client/serveur, chaque poste (client et serveur) partage la même définition des variables interprocess, mais chacun utilise une instance différente de chaque variable.

## Variables système

The 4D language manages several **system variables**, which allow you to control the execution of different operations. Vous pouvez tester leur valeur et les utiliser comme n'importe quelle variable. All system variables are [process variables](#process-variables).

System variables are used by [4D commands](../commands/command-index.md). Reportez-vous au paragraphe "Variables et ensembles système" dans la description d'une commande pour savoir si elle affecte une variable système.

| Nom de variable système                                | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OK`                                                   | Integer       | Usually set to 1 after a command has displayed a dialog box and the user clicked the **OK** button, and 0 if they clicked **Cancel**. Some commands also modify the value of the `OK` system variable when a operation is successfully executed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `Document`                                             | Text          | Contains the "long name" (full path+name) of the last file opened or created using commands such as [Open document](https://doc.4d.com/4dv20/help/command/en/page264.html) or [SELECT LOG FILE](https://doc.4d.com/4dv20/help/command/en/page345.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `FldDelimit`, `RecDelimit`                             | Text          | Contain the character codes that will be used respectively as a field separator (default is **Tab** (9)) and record separator (default is **carriage return** (13)) when importing or exporting text. Pour utiliser un séparateur différent, attribuez une nouvelle valeur à la variable système.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `Error`, `Error method`, `Error line`, `Error formula` | Text, Longint | Used in an error-catching method installed by the [`ON ERR CALL`](https://doc.4d.com/4dv20/help/command/en/page155.html) command. See [Handling errors within the method](../Concepts/error-handling.md#handling-errors-within-the-method).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `MouseDown`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Prend la valeur 1 si le bouton de la souris a été enfoncé, sinon prend la valeur 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `MouseX`, `MouseY`                                     | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. <li>In a `MouseDown=1` event, `MouseX` and `MouseY` are respectively set to the vertical and horizontal coordinates of the click. Les deux valeurs sont exprimées en pixels et avec le système de coordonnées locales de la fenêtre. </li><li>In case of a picture field or variable, `MouseX` and `MouseY` return the local coordinates of a mouse click in the [`On Clicked`](../Events/onClicked.md), [`On Double Clicked`](../Events/onDoubleClicked.md) and [`On Mouse Up`](../Events/onMouseUp.md) form events. Les coordonnées locales du curseur de la souris sont également retournées dans les événements [`On Mouse Enter`](../Events/onMouseEnter.md) et [`On Mouse Move`](../Events/onMouseMove.md) . For more information, see the [Mouse Coordinates in a picture](../FormEditor/pictures.md#mouse-coordinates-in-a-picture) section.</li> |
| `KeyCode`                                              | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Définit le code de caractère de la touche qui vient d'être pressée. If the key is a function key, `KeyCode` is set to a special code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Modifiers`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Contient les codes des modifiers du clavier (Ctrl/Commande, Alt/Option, Maj, Verr. Maj).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `MouseProc`                                            | Integer       | Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Contient le numéro du process dans lequel le dernier événement a eu lieu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

:::note

Par conséquent, vous ne pouvez pas créer une variable, une méthode ou une fonction utilisant un des noms de ces variables.

:::
