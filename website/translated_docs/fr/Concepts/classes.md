---
id: classes
title: Classes
---


## Aperçu

Le langage 4D prend en charge le concept de **classes**. Dans un langage de programmation, l'utilisation d'une classe vous permet de définir le comportement d'un objet avec des propriétés et des fonctions associées.

Une fois qu'une classe utilisateur (user class) est définie, vous pouvez **instancier** des objets de cette classe n'importe où dans votre code. Chaque objet est une instance de sa classe. Une classe peut s'étendre à une autre classe avec le mot-clé [`extend`](#class-extends-classname), puis hériter de ses [fonctions](#function) et de ses propriétés ([statiques](#class-constructor) and [calculés](#function-get-and-function-set)).

> Les modèles de classe 4D et de classe JavaScript sont similaires, et sont basés sur une chaîne de prototypes.

Par exemple, vous pouvez créer une classe `Person` avec la définition suivante :

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function get fullName() -> $fullName : text
    $fullName:=This.firstName+" "+This.lastName

Function sayHello()->$welcome : Text
    $welcome:="Hello "+This.fullName
```

Dans une méthode, créons une "Personne" :

```
var $person : cs.Person //objet de classe Person
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
```



## Gestion des classes

### Définition d'une classe

Une classe utilisateur dans 4D est définie par un fichier de méthode spécifique (.4dm), stocké dans le dossier `/Project/Sources/Classes/`. Le nom du fichier est le nom de la classe.

Lorsque vous nommez des classes, gardez à l'esprit les règles suivantes :

- Un [nom de classe](identifiers.md#classes) doit être conforme aux [règles de nommage des propriétés](identifiers.md#object-properties).
- Les noms de classe sont sensibles à la casse.
- Il n'est pas recommandé de donner le même nom à une classe et à une table de base de données, afin d'éviter tout conflit.

Par exemple, si vous souhaitez définir une classe nommée "Polygon", vous devez créer le fichier suivant :

- Dossier Project
    + Project

        * Sources
            - Classes
                + Polygon.4dm

### Supprimer une classe

Pour supprimer une classe existante, vous pouvez :

- sur votre disque, supprimer le fichier de classe .4dm du dossier "Classes",
- dans l'Explorateur 4D, sélectionner la classe et cliquer sur ![](assets/en/Users/MinussNew.png) ou choisir **Déplacer vers la corbeille** dans le menu contextuel.


### Utiliser l'interface 4D

Les fichiers de classe sont automatiquement stockés à l'emplacement approprié lorsqu'ils sont créés via l'interface de 4D, soit via le menu **Fichier**, soit via l'Explorateur.

#### Menu Fichier et barre d'outils

Vous pouvez créer un nouveau fichier de classe pour le projet en sélectionnant **Nouveau> Classe...** dans le menu **Fichier** de 4D Developer ou dans la barre d'outils.

Vous pouvez également utiliser le raccourci **Ctrl+Maj+Alt+k**.

#### Explorateur

Dans la page **Méthodes** de l'Explorateur, les classes sont regroupées dans la catégorie **Classes**.

Pour créer une nouvelle classe, vous pouvez :

- sélectionnez la catégorie **Classes** et cliquez sur le bouton ![](assets/en/Users/PlussNew.png).
- sélectionnez **Nouvelle classe...** dans le menu d'actions en bas de la fenêtre de l'Explorateur ou dans le menu contextuel du groupe Classes. ![](assets/en/Concepts/newClass.png)
- sélectionnez **Nouveau> Classe...** dans le menu contextuel de la page d'accueil de l'Explorateur.

#### Prise en charge du code de classe

Dans les différentes fenêtres 4D (éditeur de code, compilateur, débogueur, explorateur d'exécution), le code de classe est essentiellement géré comme une méthode projet avec quelques spécificités :

- Dans l'éditeur de code :
    - une classe ne peut pas être exécutée
    - une fonction de classe est un bloc de code
    - **Aller à définition...** sur un objet membre permet de rechercher des déclarations de fonction de classe; par exemple, "$o.f()" donnera comme résultat de recherche "Function f".
    - **Chercher les références...** sur la déclaration de fonction de classe recherche la fonction utilisée comme membre d'objet; par exemple, "Function f" donnera comme résultat "$o.f()".
- Dans l'explorateur d'exécution et le Débogueur, les fonctions de classe sont affichées avec le format \<ClassName> constructor ou \<ClassName>. \<FunctionName> .

## Class stores

Les classes disponibles sont accessibles depuis leurs class stores. Deux class stores sont disponibles :


- `cs` pour le class store utilisateur
- `cs` pour le class store intégré



### `cs`

#### cs -> classStore

| Paramètres | Type   |    | Description                                                         |
| ---------- | ------ | -- | ------------------------------------------------------------------- |
| classStore | object | <- | Class store utilisateur utilisateurs pour le projet ou le composant |

La commande `cs` retourne le class store utilisateur pour le projet ou le composant courant. La commande `cs` retourne le class store utilisateur pour le projet ou le composant courant. Par défaut, seules les [classes ORDA](ORDA/ordaClasses.md) du projet sont disponibles.

#### Exemple

Vous souhaitez créer une nouvelle instance d'un objet de `myClass` :

```4d
$instance:=cs.myClass.new()
```

### `4D`

#### 4D -> classStore

| Paramètres | Type   |    | Description    |
| ---------- | ------ | -- | -------------- |
| classStore | object | <- | Class store 4D |

La commande `4D` retourne le class store des classes 4D intégrées disponibles. Elle donne accès à des API spécifiques telles que [CryptoKey](API/CryptoKeyClass.md).

#### Exemple

Vous souhaitez créer une nouvelle clé dans la classe `CryptoKey` :

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## L'objet classe

Lorsqu'une classe est [définie](#class-definition) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet de la [classe "Class"](API/ClassClass.md). Un objet class possède les propriétés et fonctions suivantes :

- chaîne [`name`](API/ClassClass.md#name)
- objet [`superclass`](API/ClassClass.md#superclass) (nul si aucun)
- fonction [`new()`](API/ClassClass.md#new), permettant d'instancier des objets de classe.

De plus, un objet classe peut référencer un objet [`constructor`](#class-constructor) (facultatif).

Un objet de classe est un [objet partagé](shared.md) et est donc accessible simultanément à partir de différents processus 4D.

### Héritage

Si une classe hérite d'une autre classe (c'est-à-dire que le mot-clé [Class extends](classes.md#class-extends-classname) est utilisé dans sa définition), la classe parente est sa [`superclasse`](API/ClassClass.md#superclass).

Lorsque 4D ne trouve pas de fonction ou de propriété dans une classe, il la recherche dans sa [`superclasse`](API/ClassClass.md#superclass); s'il ne la trouve pas, 4D continue la recherche dans la superclasse de la superclasse, et ainsi de suite, jusqu'à ce qu'il n'y ait plus de superclasse (tous les objets héritent de la superclasse "Object").


## Mots-clés de classe

Des mots-clés 4D spécifiques peuvent être utilisés dans les définitions de classe :

- `Fonction <Name>` pour définir les fonctions de classe des objets.
- `Function get <Name>` et `Function set <Name>` pour définir les propriétés calculées des objets.
- `Class constructor` pour définir les propriétés statiques des objets.
- `Class extends <ClassName>` pour définir l'héritage.


### `Function`

#### Syntaxe

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Les fonctions de classe sont des propriétés spécifiques de la classe. Ce sont des objets de la classe [4D.Function](API/FunctionClass.md#about-4dfunction-objects).

Dans le fichier de définition de classe, les déclarations de fonction utilisent le mot-clé `Function`, et le nom de la fonction. Le nom de la fonction doit être conforme aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties).

> **Astuce :** préfixer le nom de la fonction par un trait de soulignement ("_") exclura la fonction des fonctionnalités d'auto-complétion dans l'éditeur de code 4D. Par exemple, si vous déclarez `Function _myPrivateFunction` dans `MyClass`, elle ne sera pas proposée dans l'éditeur de code lorsque vous tapez `"cs.MyClass. "`.

Immédiatement après le nom de la fonction, les [paramètres](#parameters) de la fonction peuvent être déclarés avec un nom et un type de données affectés, y compris le paramètre de retour (facultatif). Par exemple :

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

Pour une fonction de classe, la commande `Current method name` retourne: "*\<ClassName>.\<FunctionName>*", par exemple "MyClass.myMethod".

Dans le code de l'application, les fonctions de classe sont appelées en tant que méthodes membres de l'instance d'objet et peuvent recevoir des [paramètres](#class-function-parameters) le cas échéant. Les syntaxes suivantes sont prises en charge :

- utilisation de l'opérateur `()`. Par exemple, `myObject.methodName("hello")`
- utilisation d'une méthode membre de classe "4D.Function" :
    - [`apply()`](API/FunctionClass.md#apply)
    - [`call()`](API/FunctionClass.md#call)

> **Avertissement de sécurité des threads :** Si une fonction de classe n'est pas thread-safe et si elle est appelée par une méthode avec l'attribut "Can be run in preemptive process" : - le compilateur ne génère aucune erreur (ce qui est différent des méthodes classiques), - une erreur n'est générée par 4D qu'au moment de l'exécution.




#### Paramètres

Les paramètres de fonction sont déclarés à l'aide du nom du paramètre et du type de paramètre, séparés par deux points. Le nom du paramètre doit être conforme aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties). Plusieurs paramètres (et types) sont séparés par des points-virgules (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> Si le type n'est pas indiqué, le paramètre sera défini comme `Variant`.

Déclarez le paramètre de retour (facultatif) en ajoutant une flèche (->) et la définition du paramètre de retour après la liste des paramètres d'entrée. Par exemple :

```4d
Function add ($x : Variant; $y : Integer)->$result : Integer
```

Vous pouvez également déclarer le paramètre de retour uniquement en ajoutant `: type`, auquel cas il sera automatiquement disponible via $0. Par exemple :

```4d
Function add ($x : Variant; $y : Integer): Integer
     $0:=$x+$y
```
> La [syntaxe 4D classique](parameters.md#sequential-parameters) des paramètres de méthode peut être utilisée pour déclarer les paramètres des fonctions de classe. Les deux syntaxes peuvent être mélangées. Par exemple :
> 
> ```4d
> Function add($x : Integer)
>   var $2; $value : Integer
>   var $0 : Text
>   $value:=$x+$2
>   $0:=String($value)
> ```



#### Example

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Définition de la fonction
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


### `Function get` et `Function set`

#### Syntax

```4d
Function get <name>()->$result : type
// code
```

```4d
Function set <name>($parameterName : type)
// code
```

`Function get` et `Function set` définissent les **propriétés calculées** dans la classe. Une propriété calculée est une propriété nommée avec un type de données qui masque un calcul. Lorsqu'on accède à une valeur de propriété calculée, 4D substitue le code correspondant :.

- lorsque la propriété est lue, la fonction `get` est exécutée,.
- lorsque la propriété est écrite, la fonction `set` est exécutée,.

Si on n'accède pas à la propriété, le code ne s'exécute jamais.

Les propriétés calculées sont conçues pour gérer les données qui n'ont pas nécessairement besoin d'être conservées en mémoire. Traduit avec www. DeepL. com/Translator (version gratuite). Elles sont généralement basées sur des propriétés persistantes. Par exemple, si un objet de classe contient comme propriété persistante le *prix brut* et le *taux de TVA*, le *prix net* pourrait être traité par une propriété calculée.

Dans le fichier de définition de la classe, les déclarations de propriétés calculées utilisent les mots-clés `Function get` (le *getter*) et `Function set` (le *setter*), suivis du nom de la propriété. Le nom doit être conforme aux [règles de nommage des propriétés](Concepts/identifiers.md#object-properties).

`Function get` retourne une valeur du type de la propriété et `Function set` prend un paramètre du type de la propriété. Les deux arguments doivent être conformes aux [paramètres standard des fonctions](#parameters).

Lorsque les deux fonctions sont définies, la propriété calculée est en **lecture-écriture**. Si seule une `Function get` est définie, la propriété calculée est en **lecture seule**. Dans ce cas, une erreur est retournée si le code tente de modifier la propriété. Si seule une `Function set` est définie, 4D retourne *undefined* lorsque la propriété est lue.

Le type de la propriété calculée est défini par la déclaration du type `$return` du *getter*. Il peut s'agir de n'importe quel [type de propriété valide](dt_object.md).

> Assigner *undefined* à une propriété d'objet efface sa valeur tout en préservant son type. Pour ce faire, on appelle d'abord la fonction `get` pour récupérer le type de valeur, puis la fonction `set` avec une valeur vide de ce type.

#### Exemple 1

```4d  
//Class: Person.4dm

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
$fullName:=$person.fullName // la fonction get fullName() est appelée
$person.fullName:="John Smith" // la fonction set fullName() est appelée
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

### `Class Constructor`

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

Une fonction class constructor, qui peut accepter des [paramètres](#parameters), peut être utilisée pour définir une classe utilisateur.

Dans ce cas, lorsque vous appelez la fonction [`new()`](API/ClassClass.md#new), le class constructor est appelé avec les paramètres optionnels passés à la fonction `new()`.

Pour une fonction class constructor, la commande `Current method name` retourne : "*\<ClassName>:constructor*", par exemple "MyClass:constructor".



#### Exemple :

```4d
// Class: MyClass
// Class constructor de MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// Dans une méthode projet
// Vous pouvez instancier un objet
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### `Class extends <ClassName>`

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

Le mot-clé `Class extends` est utilisé dans la déclaration de classe pour créer une user class qui est un enfant d'une autre user class. La classe enfant hérite de toutes les fonctions de la classe parente.

L'extension des classes doit suivre les règles suivantes :

- Une classe utilisateur ne peut pas étendre une classe intégrée (sauf 4D.Object, qui est étendue par défaut pour les classes utilisateur)
- Une classe utilisateur ne peut pas étendre une classe utilisateur d'un autre projet ou composant.
- Une classe utilisateur ne peut pas s'étendre elle-même.
- Il n'est pas possible d'étendre des classes de manière circulaire (i.e. "a" étend "b" qui étend "a").

Le non respect de cette règle n'est pas détecté par l'éditeur de code ou l'interpréteur, seul le compilateur et le `contrôle syntaxique` génèreront une erreur dans ce cas.

Une classe étendue peut appeler le constructeur de sa classe parente en utilisant la commande [`Super`](#super).

#### Exemple

Cet exemple crée une classe appelée `Square` à partir d'une classe appelée `Polygon`.

```4d
//Class: Square

//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)

    // Il appelle le constructeur de la classe parente avec des mesures
    // fournies pour la largeur et la hauteur du polygone
    Super($side;$side)
    // Dans les classes dérivées, Super doit être appelé avant de
    // pouvoir utiliser 'This'
    This.name:="Square"

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```

### `Super`


#### Super {( param{;...;paramN} )} {-> Object}

| Paramètre | Type   |    | Description                                  |
| --------- | ------ | -- | -------------------------------------------- |
| param     | mixed  | -> | Paramètre(s) à passer au constructeur parent |
| Result    | object | <- | Parent de l'objet                            |

Le mot clé `Super` permet d'appeler la `superclass`, c'est-à-dire la classe prente.

`Super` a deux finalités :

- dans un [constructor code](#class-constructor), `Super` est une commande qui permet d'appeler le constructeur de la superclass. Lorsqu'elle est utilisée dans un constructeur, la commande `Super` apparaît seule et doit être utilisée avant que le mot clé `This` ne soit utilisé.
    - Si tous les constructeurs de classe de l'arborescence d'héritage ne sont pas appelés correctement, l'erreur -10748 est générée. C'est au développeur 4D de s'assurer que les appels sont valides.
    - Si la commande `This` est appelée sur un objet dont les superclasses n'ont pas été construites, l'erreur -10743 est générée.

    - Si `Super` est appelé hors de la portée d'un objet, ou sur un objet dont le superclass constructor a déjà été appelé, l'erreur -10746 est générée.

```4d
// à l'intérieur du constructor myClass
var $text1; $text2 : Text
Super($text1) // appelle le superclass constructor avec un paramètre texte
This.param:=$text2 // utilise le second paramètre
```

- à l'intérieur d'une [fonction membre de classe](#class-function), `Super` désigne le prototype de la superclasse et permet d'appeler une fonction de la hiérarchie de la superclasse.

```4d
Super.doSomething(42) // appelle la fonction "doSomething"  
// déclaré dans les superclasses
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

// Définition de la fonction 
Function getArea()
    var $0 : Integer
    $0:=(This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

     // Il appelle le constructor de la classe parente avec des longueurs
     // fourni pour la largeur et la hauteur du rectangle
    Super($side;$side)
     // Dans les classes dérivées, Super doit être appelé avant 
     // de pouvoir utiliser 'This'
     This.name:="Square "

Function getArea()
     C_LONGINT($0)
    $0:=This.height*This.width
```

#### Example 2

Cet exemple illustre l'utilisation de `Super` dans une méthode membre de classe. Vous avez créé la classe `Rectangle` avec une fonction :

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```


Vous avez également créé une classe `Square` avec une fonction appelant la fonction superclass :

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Vous pouvez ensuite écrire dans une méthode projet :

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //Je possède 4 côtés égaux
```

### `This`

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

Le mot-clé `This` retourne une référence à l'objet qui est cours de traitement. Dans 4D, il peut être utilisé dans [différents contextes](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

Dans la plupart des cas, la valeur de `This` est déterminée par la manière dont une fonction est appelée. Il ne peut pas être défini par affectation lors de l'exécution, et il peut être différent à chaque fois que la fonction est appelée.

Lorsqu'une formule est appelée en tant que méthode membre d'un objet, son `This` est défini à l'objet sur lequel la méthode est appelée. For example:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/ClassClass.md#new) function), its `This` is bound to the new object being constructed.

```4d
//Class: ob

Class Constructor  

    // Create properties on This as
    // desired by assigning to them
    This.a:=42 
```

```4d
// in a 4D method  
$o:=cs.ob.new()
$val:=$o.a //42
```

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. Prenons [cet exemple](#example-1).


Dans tous les cas, `This` fait référence à l'objet sur lequel la méthode a été appelée, comme si la méthode était sur l'objet.

```4d
//Class: ob

Function f()
    $0:=This.a+This.b
```

Vous pouvez donc écrire, dans une méthode projet :

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8

```
Dans cet exemple, l'objet assigné à la variable $o n'a pas sa propre propriété *f*, il l'hérite de sa classe. Since *f* is called as a method of $o, its `This` refers to $o.


## Class commands

Several commands of the 4D language allows you to handle class features.


### `OB Class`

#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter.


### `OB Instance of`

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.</p>


### `OB Instance of`

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.</p>


### `OB Instance of`

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` retourne `true` si `object` appartient à `class` ou à l'une de ses classes héritées, sinon retourne `false`.
