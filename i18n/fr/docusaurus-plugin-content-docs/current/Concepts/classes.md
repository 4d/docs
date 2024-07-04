---
id: classes
title: Classes
---

## Vue d’ensemble

Le langage 4D prend en charge le concept de **classes**. Dans un langage de programmation, l'utilisation d'une classe vous permet de définir le comportement d'un objet avec des propriétés et des fonctions associées.

Une fois qu'une classe utilisateur est définie, vous pouvez **instancier des objets** de cette classe n'importe où dans votre code. Chaque objet est une instance de sa classe. Une classe peut [`étendre`](#class-extends-classname) une autre classe, et hérite ensuite de ses [fonctions](#function) et propriétés ([déclarées](#property) et [calculées](#function-get-and-function-set)).

> Les modèles de classe 4D et JavaScript sont similaires, et basés sur une chaîne de prototypes.

Par exemple, vous pouvez créer une classe `Person` avec la définition suivante :

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function sayHello() -> $welcome : Text

 $welcome:="Hello "+This.fullName
```

Dans une méthode, créons une "Personne" :

```4d
var $person : cs.Person //objet de classe Person
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
```

## Gestion des classes

### Définition d'une classe

Une classe utilisateur dans 4D est définie par un fichier [méthode](methods.md) (.4dm) spécifique, stocké dans le dossier `/Project/Sources/Classes/`. Le nom du fichier est le nom de la classe.

Lorsque vous nommez des classes, gardez à l'esprit les règles suivantes :

- Un [nom de classe](identifiers.md#classes) doit être conforme aux [règles de nommage des propriétés](identifiers.md#proprietes-des-objets).
- Les noms de classe sont sensibles à la casse.
- Il n'est pas recommandé de donner le même nom à une classe et à une table de base de données, afin d'éviter tout conflit.

Par exemple, si vous souhaitez définir une classe nommée "Polygon", vous devez créer le fichier suivant :

```
Project folder Project Sources Classes Polygon.4dm
```

### Supprimer une classe

Pour supprimer une classe existante, vous pouvez :

- sur votre disque, supprimer le fichier de classe .4dm du dossier "Classes",
- dans l'explorateur 4D, sélectionner la classe et cliquez sur ![](../assets/en/Users/MinussNew.png) ou choisissez **Déplacer dans la corbeille** dans le menu contextuel.

### Utilisation de l'interface 4D

Les fichiers de classe sont automatiquement stockés à l'emplacement approprié lorsqu'ils sont créés via l'interface de 4D, soit via le menu **Fichier**, soit via l'Explorateur.

#### Menu Fichier et barre d'outils

Vous pouvez créer un nouveau fichier de classe pour le projet en sélectionnant **Nouveau> Classe...** dans le menu **Fichier** de 4D ou dans la barre d'outils.

Vous pouvez également utiliser le raccourci **Ctrl+Maj+Alt+k**.

#### Explorateur

Dans la **page Méthodes** de l'Explorateur, les classes sont regroupées dans la catégorie **Classes**.

Pour créer une nouvelle classe, vous pouvez :

- sélectionner la catégorie **Classes** et cliquez sur le bouton ![](../assets/en/Users/PlussNew.png) .
- sélectionner **Nouvelle classe...** dans le menu d'actions en bas de la fenêtre de l'Explorateur ou dans le menu contextuel du groupe Classes.
  ![](../assets/en/Concepts/newClass.png)
- sélectionnez **Nouveau> Classe...** dans le menu contextuel de la page d'accueil de l'Explorateur.

#### Prise en charge du code de classe

Dans les différentes fenêtres 4D (éditeur de code, compilateur, débogueur, explorateur d'exécution), le code de classe est essentiellement géré comme une méthode projet avec quelques spécificités :

- Dans l'éditeur de code :
  - une classe ne peut pas être exécutée
  - une fonction de classe est un bloc de code
  - **Aller à définition...** sur un objet membre permet de rechercher des déclarations de fonction de classe; par exemple, "$o.f()" donnera comme résultat de recherche "Function f".
  - **Chercher les références...** sur la déclaration de fonction de classe recherche la fonction utilisée comme membre d'objet; par exemple, "Function f" donnera comme résultat "$o.f()".
- Dans l'explorateur d'exécution et le débogueur, les fonctions de classe sont affichées avec le constructeur `<ClassName>` ou le format `<ClassName>.<FunctionName>`.

## Class stores

Les classes disponibles sont accessibles depuis leurs class stores. Il existe deux class stores dans 4D :

- `cs` pour le class store utilisateur
- `4D` pour le class store intégré

### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->

<!-- REF #_command_.cs.Params -->

| Paramètres | Type   |    | Description                                                         |                  |
| ---------- | ------ | -- | ------------------------------------------------------------------- | ---------------- |
| classStore | Object | <- | Class store utilisateur utilisateurs pour le projet ou le composant | <!-- END REF --> |

La commande `cs` <!-- REF #_command_.cs.Summary -->retourne le class store utilisateur pour le projet ou le composant courant<!-- END REF -->. Elle retourne toutes les classes utilisateur [définies](#class-definition) dans le projet ou le composant ouvert. Par défaut, seules les [classes ORDA](ORDA/ordaClasses.md) du projet sont disponibles.

#### Exemple

Vous souhaitez créer une nouvelle instance d'un objet de `myClass` :

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->

| Paramètres | Type   |    | Description    |                  |
| ---------- | ------ | -- | -------------- | ---------------- |
| classStore | Object | <- | Class store 4D | <!-- END REF --> |

La commande `4D` <!-- REF #_command_.4D.Summary -->retourne le class store des classes 4D intégrées disponibles<!-- END REF -->. Elle donne accès à des API spécifiques telles que [CryptoKey](API/CryptoKeyClass.md).

#### Exemple

Vous souhaitez créer une nouvelle clé dans la classe `CryptoKey` :

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## L'objet classe

Lorsqu'une classe est [définie](#class-definition) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet lui-même de la [classe "Class"](API/ClassClass.md). Un objet classe possède les propriétés et fonctions suivantes :

- chaîne [`name`](API/ClassClass.md#name)
- objet [`superclass`](API/ClassClass.md#superclass) (null s'il n'y en a pas)
- fonction [`new()`](API/ClassClass.md#new), permettant d'instancier les objets de la classe
- propriété [`isShared`](API/ClassClass.md#isshared), true si la classe est [partagée](#shared-classes)
- propriété [`isSingleton`](API/ClassClass.md#issingleton), true si la classe définit une [classe singleton](#singleton-classes).
- propriété [`me`](API/ClassClass.md#me), permettant d'instancier et d'accéder aux [singletons](#singleton-classes).

De plus, un objet classe peut référencer un objet [`constructor`](#class-constructor) (facultatif).

Un objet classe lui-même est un [objet partagé](shared.md) et est donc accessible simultanément à partir de différents process 4D.

### Héritage

Si une classe hérite d'une autre classe (c'est-à-dire que le mot-clé [Class extends](classes.md#class-extends-classname) est utilisé dans sa définition), la classe parente est sa [`superclass`](API/ClassClass.md#superclass).

Quand 4D ne trouve pas une fonction ou une propriété dans une classe, elle la recherche dans sa [`superclass`](API/ClassClass.md#superclass); si elle n'est pas trouvée, 4D continue la recherche dans la superclass de la superclass, et ainsi de suite, jusqu'à ce qu'il n'y ait plus de superclass (tous les objets héritent de la superclass "Object").

## Mots-clés de classe

Des mots-clés 4D spécifiques peuvent être utilisés dans les définitions de classe :

- `Function <Name>` pour définir les fonctions de classe des objets.
- `Class constructor` pour initialiser les nouveaux objets de la classe.
- `property` pour définir les propriétés statiques des objets d'un type donné.
- `Function get <Name>` et `Function set <Name>` pour définir les propriétés calculées des objets.
- `Class extends <ClassName>` pour définir l'héritage.

### `Function`

#### Syntaxe

```4d
{shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Les fonctions de classe sont des propriétés spécifiques de la classe. Ce sont des objets de la classe [4D.Function](API/FunctionClass.md). Dans le fichier de définition de classe, les déclarations de fonction utilisent le mot-clé `Function` suivi du nom de la fonction.

Si la fonction est déclarée dans une [classe partagée](#shared-classes), vous pouvez utiliser le mot-clé `shared` pour que la fonction puisse être appelée sans [structure `Use. .End use`](shared.md#useend-use). Pour plus d'informations, consultez le paragraphe sur les [fonctions partagées](#shared-functions) ci-dessous.

Le nom de la fonction doit être conforme aux [règles de nommage des objets](Concepts/identifiers.md#object-properties).

:::note

Étant donné que les propriétés et les fonctions partagent le même espace de nommage, il n'est pas permis d'utiliser le même nom pour une propriété et une fonction de la même classe (une erreur est générée dans ce cas).

:::

:::tip

Si vous préfixez le nom d'une fonction par un trait de soulignement ("_"), elle ne sera pas proposée par les fonctionnalités d'auto-complétion dans l'éditeur de code 4D. Par exemple, si vous déclarez `Function _myPrivateFunction` dans `MyClass`, elle ne sera pas proposée dans l'éditeur de code lorsque vous tapez `"cs.MyClass. "`.

:::

Immédiatement après le nom de la fonction, des [paramètres](#parameters) peuvent être déclarés pour la fonction avec un nom et un type de données, y compris le paramètre de retour (facultatif). Par exemple :

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Dans une fonction de classe, la commande `This` est utilisée comme instance d'objet. Par exemple :

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

Pour une fonction de classe, la commande `Current method name` retourne : `<ClassName>.<FunctionName>`, par exemple "MyClass.myFunction".

Dans le code de l'application, les fonctions de classes sont appelées comme des méthodes membres des instances d'objets et peuvent recevoir des [paramètres](#parameters) si besoin. Les syntaxes suivantes sont prises en charge :

- utilisation de l'opérateur `()`. Par exemple, `myObject.methodName("hello")`
- utilisation d'une méthode membre de la classe "4D.Function" :
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Note importante thread-safety

Si une fonction de classe n'est pas thread-safe et qu'elle est appelée par une méthode avec l'attribut "Peut être exécutée dans un process preémptif" :

- le compilateur ne génère pas d'erreur (ce qui est différent par rapport aux méthodes standard),
- une erreur est déclenchée par 4D uniquement au moment de l'exécution.

:::

#### Paramètres

Les paramètres des fonctions sont déclarés via le nom du paramètre et son type, séparés par deux-points. Le nom du paramètre doit être conforme aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties). Les paramètres multiples (et leurs types) sont séparés par des points-virgules (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

Si le type n'est pas fourni, le paramètre sera défini comme `Variant`.

:::

#### Valeur retournée

Vous déclarez le paramètre de retour d'une fonction (optionnel) en ajoutant une flèche (`->`) et la définition du paramètre de retour après la liste des paramètres d'entrée, ou les deux points (`:`) et le tye de paramètre de retour uniquement. Par exemple :

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

Vous pouvez également déclarer le paramètre de retour en ajoutant seulement `: type` et utiliser l'expression [`return`](parameters.md#return-expression) (elle mettra également fin à l'exécution de la fonction). Par exemple :

```4d
Function add($x : Variant; $y : Integer): Integer
 // some code
 return $x+$y
```

#### Exemple 1

```4d
property name : Text
property height; width : Integer

// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Function definition
Function getArea()->$result : Integer
 $result:=(This.height)*(This.width)
```

```4d
// Dans une méthode projet

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

#### Exemple 2

Cet exemple utilise l'expression [`return`](parameters.md#return-expression) :

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Class Constructor`

#### Syntaxe

```4d
// Class: MyClass
{shared} {singleton} Class Constructor({$parameterName : type; ...})
// code
```

Une fonction class constructor accepte des [paramètres](#parameters) facultatifs et peut être utilisée pour créer et initialiser des objets de la classe utilisateur.

Lorsque vous appelez la fonction [`new()`](API/ClassClass.md#new), le constructeur de classe est appelé avec les paramètres éventuellement passés à la fonction `new()`.

Il ne peut y avoir qu'une seule fonction constructor dans une classe (sinon une erreur est renvoyée). Un constructeur peut utiliser le mot-clé [`Super`](#super) pour appeler le constructeur de la superclass.

Vous pouvez créer et saisir des propriétés d'instance dans le constructeur (voir exemple). Alternativement, si les valeurs de vos propriétés d'instance ne dépendent pas des paramètres passés au constructeur, vous pouvez les définir en utilisant le mot-clé [`property`](#property).

L'utilisation du mot-clé `shared` crée une **classe partagée**, utilisée pour n'instancier que des objets partagés. Pour plus d'informations, reportez-vous au paragraphe [Classes partagées](#shared-classes).

L'utilisation du mot-clé `singleton` crée un **singleton**, utilisé pour créer une seule instance. Pour plus d'informations, référez-vous au paragraphe [Classes singleton](#singleton-classes).

#### Exemple

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text ; $age : Integer)
 This.name:=$name
 This.age:=$age
```

```4d
// Dans une méthode projet
// Vous pouvez instancier un objet
var $o : cs.MyClass
$o:=cs.MyClass.new("John";42)  
// $o = {"name" : "HelloWorld" ; "age":42}
```

### `propriété`

#### Syntaxe

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

Le mot-clé `property` permet de déclarer une propriété à l'intérieur d'une classe utilisateur. Une propriété de classe a un nom et un type.

La déclaration des propriétés des classes améliore les suggestions de l'éditeur de code, les fonctions d'auto-complétion et la détection des erreurs.

Les propriétés sont déclarées pour les nouveaux objets lorsque vous appelez la fonction [`new()`](API/ClassClass.md#new), mais elles ne sont pas automatiquement ajoutées aux objets (elles ne sont ajoutées que lorsqu'une valeur leur est assignée).

:::note

Une propriété est automatiquement ajoutée à l'objet lorsqu'elle est [initialisée dans la ligne de déclaration](#initializing-the-property-in-the-declaration-line).

:::

Les noms des propriétés doivent être conformes aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties).

:::note

Étant donné que les propriétés et les fonctions partagent le même espace de nommage, il n'est pas permis d'utiliser le même nom pour une propriété et une fonction de la même classe (une erreur est générée dans ce cas).

:::

Le type de propriété peut être l'un des suivants :

| propertyType                 | Contenu                                                                   |
| ---------------------------- | ------------------------------------------------------------------------- |
| `Text`                       | Valeur texte                                                              |
| `Date`                       | Valeur date                                                               |
| `Time`                       | Valeur Heure                                                              |
| `Boolean`                    | Valeur booléen                                                            |
| `Entier`                     | Valeur entier long                                                        |
| `Real`                       | Valeur réel                                                               |
| `Pointer`                    | Valeur pointeur                                                           |
| `Picture`                    | Valeur image                                                              |
| `Blob`                       | Valeur Blob scalaire                                                      |
| `Collection`                 | Valeur collection                                                         |
| `Variant`                    | Valeur variant                                                            |
| `Object`                     | Objet de classe par défaut (4D.Object) |
| `4D.<className>`             | Object de la classe 4D className                                          |
| `cs.<className>`             | Object de la classe utilisateur className                                 |
| `cs.<namespace>.<className>` | Object de la classe className du composant `<namespace>`                  |

Si vous omettez le type dans la ligne de déclaration, la propriété est créée en tant que variant.

:::info

Le mot-clé `property` ne peut être utilisé que dans les méthodes de classe et en dehors de tout bloc `Function` ou `Class Constructor` .

:::

#### Initialisation de la propriété dans la ligne de déclaration

Lorsque vous déclarez une propriété, vous avez la flexibilité de spécifier son type de données et sa valeur dans une seule instruction. La syntaxe prise en charge est :

`property <propertyName> { : <propertyType>} := <Propertyvalue>`

:::note

Lorsque vous utilisez cette syntaxe, vous ne pouvez pas déclarer plusieurs propriétés dans la ligne de déclaration.

:::

Vous pouvez omettre le type dans la ligne de déclaration, auquel cas le type sera déduit si possible. Par exemple :

```4d
// Class: MyClass

property name : Text := "Smith"
property age : Integer := 42

property birthDate := !1988-09-29! //date est déduit
property fuzzy //variant
```

Lorsque vous initialisez une propriété dans sa ligne de déclaration, elle est ajoutée à l'objet de classe après son instanciation avec la fonction [`new()`](API/ClassClass.md#new) mais avant que le constructeur ne soit appelé.

Si une classe [étend](#class-extends-classname) une autre classe, les propriétés de la classe parente sont instanciées avant les propriétés de la classe enfant.

:::note

If you initialize a property in its declaration line with an object or a collection in a [shared class](#shared-classes), the value is automatically transformed into a shared value:

```4d
// in a shared class
property myCollection := ["something"]
// myCollection will be a shared collection
// equivalent to:
myCollection := New shared collection("something")
```

:::

#### Exemple

```4d
// Class: MyClass

property name : Text
property age : Integer
property color : Text := "Blue"
```

Dans une méthode :

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{"color" : "Blue"}
$o.name:="John" //$o:{"color" : "Blue"; "name" : "John"}
$o.age:="Smith"  //erreur de syntaxe
```

### `Function get` et `Function set`

#### Syntaxe

```4d
{shared} Function get <name>()->$result : type
// code
```

```4d
{shared} Function set <name>($parameterName : type)
// code
```

`Function get` et `Function set` sont des accesseurs définissant des **propriétés calculées** dans la classe. Une propriété calculée est une propriété nommée avec un type de données qui masque un calcul. Lorsqu'on accède à la valeur d'une propriété calculée, 4D substitue le code de l'accesseur correspondant :

- lorsque la propriété est lue, `Function get` est exécutée,
- lorsque la propriété est écrite, `Function set` est exécutée.

Si la propriété n'est pas accédée, le code n'est jamais exécuté.

Les propriétés calculées sont conçues pour gérer les données qui n'ont pas besoin d'être conservées en mémoire. Elles sont généralement basées sur des propriétés persistantes. Par exemple, si un objet de classe contient comme propriété persistante le _prix brut_ et le _taux de TVA_, le _prix net_ pourrait être traité par une propriété calculée.

Dans le fichier de définition de la classe, les déclarations de propriétés calculées utilisent les mots-clés `Function get` (le _getter_) et `Function set` (le _setter_), suivis du nom de la propriété. Le nom doit être conforme aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties).

`Function get` retourne une valeur du type de la propriété et `Function set` prend un paramètre du type de la propriété. Les deux arguments doivent être conformes aux [paramètres de fonction](#parameters) standard.

Lorsque les deux fonctions sont définies, la propriété calculée est en **lecture-écriture**. Si seule une `Function get` est définie, la propriété calculée est en **lecture seule**. Dans ce cas, une erreur est retournée si le code tente de modifier la propriété. Si seule une `Function set` est définie, 4D retourne _undefined_ lorsque la propriété est lue.

Si les fonctions sont déclarées dans une [classe partagée](#constructeur-de-classe-partagee), vous pouvez utiliser le mot-clé `shared` avec elles afin qu'elles puissent être appelées sans la structure [`Use...End use`](shared.md#useend-use). Pour plus d'informations, consultez le paragraphe sur les [fonctions partagées](#shared-functions) ci-dessous.

Le type de la propriété calculée est défini par la déclaration de type `$return` du _getter_. Il peut s'agir de n'importe quel [type de propriété valide](dt_object.md).

> Assigner _undefined_ à une propriété d'objet efface sa valeur tout en préservant son type. Pour ce faire, la `Function get` est d'abord appelée pour récupérer le type de valeur, puis `Function set` est appelée avec une valeur vide de ce type.

#### Exemple 1

```4d
//Class: Person.4dm
property firstName; lastName : Text

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
```

```4d
//dans une méthode projet
$fullName:=$person.fullName // Function get fullName() est appelée
$person.fullName:="John Smith" // Function set fullName() est appelée
```

#### Exemple 2

```4d
Function get fullAddress()->$result : Object

 $result:=New object

 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country
```

### `Class extends <ClassName>`

#### Syntaxe

```4d
// Class enfant
Class extends <ParentClass>
```

Le mot-clé `Class extends` est utilisé dans une déclaration de classe pour créer une classe utilisateur "enfant" d'une autre classe utilisateur. La classe "enfant" hérite de toutes les fonctions de la classe "parente".

L'extension de classe doit respecter les règles suivantes :

- Une classe utilisateur ne peut pas étendre une classe intégrée (sauf 4D.Object et les [classes ORDA](../ORDA/ordaClasses.md) qui sont étendues par défaut pour les classes utilisateur).
- Une classe utilisateur ne peut pas étendre une classe utilisateur d'un autre projet ou composant.
- Une classe utilisateur ne peut pas s'étendre elle-même.
- Il n'est pas possible d'étendre des classes de manière circulaire (i.e. "a" étend "b" qui étend "a").
- Il n'est pas possible de définir une classe utilisateur [partagée](#shared-classes) à partir d'une classe utilisateur non partagée.

La violation de ces règles n'est pas détectable par l'éditeur de code ou l'interpréteur, seul le compilateur et la fonction `vérifier syntaxe` retourneront une erreur dans ce cas.

Une classe étendue peut appeler le constructeur de sa classe parente en utilisant la commande [`Super`](#super).

#### Exemple

Cet exemple crée une classe nommée `Square` à partir d'une classe nommée `Polygon`.

```4d
//Class: Square

//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)

 // Appelle le constructeur de la classe parente avec les longueurs
 // fournies pour la largeur et la hauteur du Polygone
 Super($side;$side)
 // Dans les classes dérivées, Super doit être appelé
 // avant que vous puissiez utiliser 'This'
 This.name:="Square"



 Function getArea() -> $area : Integer
 $area:=This.height*This.width
```

### `Super`

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->

| Paramètres | Type   |    | Description                                                                   |
| ---------- | ------ | -- | ----------------------------------------------------------------------------- |
| param      | any    | -> | Paramètre(s) à passer au constructeur de la classe parente |
| Résultat   | Object | <- | Parent de l'objet                                                             |

<!-- END REF -->

Le mot-clé `Super` <!-- REF #_command_.Super.Summary -->permet les appels à la `superclass`, c'est-à-dire à la classe parente<!-- END REF -->.

`Super` peut être utilisé de deux différentes manières :

1. A l'intérieur du code de la fonction [constructeur](#class-constructor), `Super` est une commande qui permet d'appeler le constructeur de la superclass. Lorsqu'elle est utilisée dans une fonction constructeur, la commande `Super` est seule et doit être appelée avant que le mot-clé `This` soit utilisé.

- Si tous les class constructors dans l'arbre des héritages ne sont pas appelés correctement, l'erreur -10748 et générée. Il est de la responsabilité du développeur 4D de s'assurer que tous les appels sont valides.
- Si la commande `This` est appelée sur un objet dont les superclasses n'ont pas été construites, l'erreur -10743 est générée.
- Si `Super` est appelée en dehors d'un contexte d'objet, ou sur un objet dont le constructeur de la superclasse a déjà été appelé, l'erreur -10746 est générée.

```4d
// dans la fonction constructor de myClass
var $text1; $text2 : Text
Super($text1) //appel du constructeur de la superclasse avec un paramètre text
This.param:=$text2 // utilisation d'un second param
```

2. A l'intérieur d'une [fonction de classe](#class-function), `Super` désigne le prototype de la superclasse et permet d'appeler une fonction de la hiérarchie de superclasses.

```4d
Super.doSomething(42) //appelle la fonction "doSomething"   
//déclarée parmi les superclasses
```

#### Exemple 1

Cet exemple illustre l'utilisation de `Super` dans un class constructor. La commande est appelée pour éviter de dupliquer les parties du constructeur qui sont communes aux classes `Rectangle` et `Square`.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea()
 var $0 : Integer

 $0:=(This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

 // Appelle le constructeur de la classe parente avec les côtés
 // fournies pour la largeur et la hauteur du Rectangle
 Super($side;$side)
 // Dans les classes dérivées, Super doit être appelé
 // avant que vous puissiez utiliser 'This'
 This.name:="Square"

Function getArea()
 C_LONGINT($0)
 $0:=This.height*This.width
```

#### Exemple 2

Cet exemple illustre l'utilisation de `Super` dans une fonction de classe. Vous avez créé la classe `Rectangle` contenant une fonction :

```4d
//Class: Rectangle

Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

Vous avez également créé la classe `Square` contenant une fonction qui appelle la fonction superclass :

```4d
//Class: Square

Class extends Rectangle

Function description()
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

Vous pouvez donc écrire dans une méthode projet :

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### `This`

<!-- REF #_command_.This.Syntax -->**This** : Object<!-- END REF -->

<!-- REF #_command_.This.Params -->

| Paramètres | Type   |    | Description   |
| ---------- | ------ | -- | ------------- |
| Résultat   | Object | <- | Objet courant |

<!-- END REF -->

Le mot-clé `This` <!-- REF #_command_.This.Summary -->retourne une référence à l'objet en cours de traitement<!-- END REF -->.

Dans la plupart des cas, la valeur de `This` est déterminée par la manière dont une fonction est appelée. Il ne peut pas être défini par affectation lors de l'exécution, et il peut être différent à chaque fois que la fonction est appelée.

Lorsqu'une [formula](../API/FunctionClass.md) est appelée en tant que méthode membre d'un objet, son `This` désigne l'objet sur lequel la méthode est appelée. Par exemple :

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

Quand un [constructeur de classe](#class-constructor) est utilisé (avec la fonction [`new()`](API/ClassClass.md#new)), son `This` est lié au nouvel objet en cours de construction.

```4d
//Class: ob

Class Constructor  

 // Créer des propriétés en
 // les assignant au This
 This.a:=42
```

```4d
// dans une méthode 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```

> En cas d'appel de la superclasse du constructeur depuis le constructeur en utilisant le mot-clé [Super](#super), n'oubliez pas que `This` ne doit pas être appelé avant le constructeur de la superclasse, sinon une erreur est générée. Voir [cet exemple](#example-1).

Dans tous les cas, `This` se réfère à l'objet sur lequel la fonction a été appelée, comme s'il s'agissait d'une fonction de l'objet.

```4d
//Class: ob

Function f()
 $0:=This.a+This.b
```

Vous pouvez donc écrire dans une méthode projet :

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8

```

Dans cet exemple, l'objet affecté à la variable $o n'a pas de propriété _f_, il hérite de celle de sa classe. Comme _f_ est appelée comme une méthode de $o, son `This` se réfère à $o.

## Commandes de classes

Plusieurs commandes du langage 4D se rapportent à la manipulation des classes.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` retourne la classe de l'objet passé en paramètre.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` retourne `true` si `object` appartient à la `class` ou à l'une de ses classes héritées, et `false` sinon.

## Classes partagées

Vous pouvez créer des **classes partagées**. Une classe partagée est une classe utilisateur qui instancie un [objet partagé](shared.md) lorsque la fonction [`new()`](../API/ClassClass.md#new) est appelée dans la classe. Une classe partagée ne peut créer que des objets partagés.

Les classes partagées prennent également en charge les **fonctions partagées** qui peuvent être appelées sans [`Use...End use`](shared.md#useend-use).

La propriété [`.isShared`](../API/ClassClass.md#isshared) des objets Class permet de savoir si la classe est partagée.

:::info

- Une classe [héritant](#class-extends-classname) d'une classe non partagée ne peut pas être définie comme partagée.
- Les classes partagées ne sont pas prises en charge par les [classes basées sur ORDA](../ORDA/ordaClasses.md).

:::

### Création d'une classe partagée

Pour créer une classe partagée, ajoutez le mot-clé `shared` avant le [Class Constructor](#class-constructor). Par exemple :

```4d
	//shared class: Person
shared Class Constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

```

```4d
//myMethod
var $person := cs.Person.new("John"; "Smith")
OB Is shared($person) // true
cs.Person.isShared //true
```

### Fonctions partagées

Si une fonction définie à l'intérieur d'une classe partagée modifie les objets de la classe, elle devrait appeler la structure [`Use. .End use`](shared.md#useend-use) pour protéger l'accès aux objets partagés. Cependant, pour simplifier le code, vous pouvez définir la fonction comme étant **partagée** afin qu'elle déclenche automatiquement un `Use...End use` interne lorsqu'elle est exécutée.

Pour créer une fonction partagée, ajoutez le mot-clé `shared` avant le mot-clé [Function](#function) dans une classe partagée. Par exemple :

```4d
	//classe partagée Foo
shared Class Constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //pas besoin de use/end use
```

:::note

Si le mot-clé `shared` est utilisé devant une fonction dans une classe utilisateur non partagée, il est ignoré.

:::

## Classes Singleton

Une **classe singleton** est une classe utilisateur qui ne produit qu'une seule instance. Pour plus d’informations sur les singletons, veuillez consulter la [page Wikipédia sur les singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

Le singleton de la classe est instancié lors du premier appel de la propriété [`cs.<class>.me`](../API/ClassClass.md#me). Le singleton instancié de la classe est ensuite toujours renvoyé lorsque la propriété [`me`](../API/ClassClass.md#me) est utilisée.

Si vous avez besoin d'instancier un singleton avec des paramètres, vous pouvez également appeler la fonction [`new()`](../API/ClassClass.md#new). Dans ce cas, il est recommandé d'instancier le singleton dans du code exécuté au démarrage de l'application.

La portée d'une instance de singleton peut être le process courant ou tous les process. A singleton has a unique value for the process in which it is instantiated, while a _shared_ singleton has a unique value for all processes of the application. Les singletons sont utiles pour définir des valeurs qui doivent être disponibles de n'importe où dans une application ou un process.

Once instantiated, a singleton class (and its singleton) exists as long as a reference to it exists somewhere in the application.

La propriété [`.isSingleton`](../API/ClassClass.md#issingleton) des objets Class permet de savoir si la classe est un singleton.

:::info

Les classes Singleton ne sont pas prises en charge par [les classes ORDA](../ORDA/ordaClasses.md).

:::

### Creating a singleton

To create a singleton class, add the `singleton` keyword before [`Class Constructor`](#class-constructor). Par exemple :

```4d
	//class: ProcessTag
singleton Class Constructor()
 This.tag:=Random
```

To use the singleton:

```4d
	//dans un process
var $mySingleton := cs.ProcessTag.me //Première instanciation
	//$mySingleton.tag = 5425 par exemple  
...  
var $myOtherSingleton := cs.ProcessTag.me
	//$myOtherSingleton.tag = 5425

```

```4d
	//dans un autre process
var $mySingleton := cs.ProcessTag.me //Première instanciation
	//$mySingleton.tag = 14856 par exemple  
...  
var $myOtherSingleton := cs.ProcessTag.me  
	//$myOtherSingleton.tag = 14856
```

### Creating a shared singleton

To create a singleton shared by all processes of the application, add the `shared singleton` keywords before the [Class Constructor](#class-constructor). Par exemple :

```4d
//Class VehicleFactory

property vehicleBuilt : Integer

shared singleton Class constructor()
  This.vehicleBuilt := 0 //Nombre de véhiclues produits par l'usine

shared Function buildVehicle ($type : Text) -> $vehicle : cs.Vehicle

  Case of
    : $type="car"
      $vehicle:=cs.Car.new()
    : $type="truck"
      $vehicle:=cs.Truck.new()
    : $type="sport car"
      $vehicle:=cs.SportCar.new()
    : $type="motorbike"
      $vehicle:=cs.Motorbike.new()
  Else
    $vehicle:=cs.Car.new()
  End case
  This.vehicleBuilt+=1
```

Vous pouvez alors appeler le singleton **cs.VehicleFactory** pour obtenir un nouveau véhicule depuis n'importe où dans votre application avec une seule ligne :

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("truck")
```

Étant donné que la fonction _buildVehicle()_ modifie le singleton **cs.VehicleFactory** (en incrémentant `This.vehicleBuilt`), vous devez ajouter le mot-clé `shared` à celle-ci.

#### Voir également

Voir également [cet article de blog](https://blog.4d.com/singleton) pour plus de détails.
