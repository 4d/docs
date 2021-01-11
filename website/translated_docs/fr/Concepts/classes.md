---
id: classes
title: Classes
---


## Aperçu

Le langage 4D prend en charge le concept de **classes**. Dans un langage de programmation, l'utilisation d'une classe vous permet de définir le comportement d'un objet avec des propriétés et des fonctions associées.

Une fois qu'une classe utilisateur (user class) est définie, vous pouvez **instancier** des objets de cette classe n'importe où dans votre code. Chaque objet est une instance de sa classe. Une classe peut s'étendre à une autre classe avec le mot-clé [`extend`](#class-extends-classname), puis hériter de ses fonctions.

> Les modèles de classe 4D et de classe JavaScript sont similaires, et sont basés sur une chaîne de prototypes.

Par exemple, vous pouvez créer une classe `Person` avec la définition suivante :

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function sayHello()->$welcome : Text
    $welcome:="Hello "+This.firstName+" "+This.lastName
```

Dans une méthode, créons une "Personne" :

```
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
$hello:=$person.sayHello() //"Hello John Doe"
```



## Gestion des classes

### Définition d'une classe

Une classe utilisateur dans 4D est définie par un fichier de méthode spécifique (.4dm), stocké dans le dossier `/Project/Sources/Classes/`. Le nom du fichier est le nom de la classe.

Lorsque vous nommez des classes, gardez à l'esprit les règles suivantes :

- A [class name](identifiers.md#classes) must be compliant with [property naming rules](identifiers.md#object-properties).
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

In the various 4D windows (code editor, compiler, debugger, runtime explorer), class code is basically handled like a project method with some specificities:

- Dans l'éditeur de code :
    - une classe ne peut pas être exécutée
    - une fonction de classe est un bloc de code
    - **Goto definition** sur un objet membre recherche des déclarations de fonction de classe; par exemple, "$o.f()" donnera comme résultat de recherche "Fonction f".
    - **Search references** sur la déclaration de fonction de classe recherche la fonction utilisée comme membre d'objet; par exemple, "Fonction f" donnera comme résultat "$o.f()".
- Dans l'explorateur d'exécution et le Débogueur, les fonctions de classe sont affichées avec le format \<ClassName> constructor ou \<ClassName>. \<FunctionName> .

## Class stores

Les classes disponibles sont accessibles depuis leurs class stores. Deux class stores sont disponibles :

- `cs` pour le class store utilisateur
- `cs` pour le class store intégré


### cs

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

### 4D

#### 4D -> classStore

| Paramètres | Type   |    | Description    |
| ---------- | ------ | -- | -------------- |
| classStore | object | <- | Class store 4D |

La commande `4D` retourne le class store des classes 4D intégrées disponibles. Elle donne accès à des API spécifiques telles que [CryptoKey](API/cryptoKeyClass.md).

#### Exemple

Vous souhaitez créer une nouvelle clé dans la classe `CryptoKey` :

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## L'objet classe

Lorsqu'une classe est [définie](#class-definition) dans le projet, elle est chargée dans l'environnement de langage 4D. Une classe est un objet lui-même de la [classe "Class"](API/classClass.md). Un objet class possède les propriétés et fonctions suivantes :

- chaîne [`name`](API/classClass.md#name)
- objet [`superclass`](API/classClass.md#superclass) (nul si aucun)
- fonction [`new()`](API/classClass.md#new), permettant d'instancier des objets de classe.

In addition, a class object can reference a [`constructor`](#class-constructor) object (optional).

Un objet de classe est un [objet partagé](shared.md) et est donc accessible simultanément à partir de différents processus 4D.

### Inheritance

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/classClass.md#superclass).

When 4D does not find a function or a property in a class, it searches it in its [`superclass`](API/classClass.md#superclass); if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).


## Mots-clés de classe

Des mots-clés 4D spécifiques peuvent être utilisés dans les définitions de classe :

- `Function <Name>` to define class functions of the objects.
- `Class constructor` to define the properties of the objects.
- `Class extends <ClassName>` pour définir l'héritage.


### Function

#### Syntaxe

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Class functions are specific properties of the class. They are objects of the [4D.Function](API/formulaClass.md#about-4dfunction-objects) class.

Dans le fichier de définition de classe, les déclarations de fonction utilisent le mot-clé `Function`, et le nom de la fonction. The function name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

> **Astuce :** préfixer le nom de la fonction par un trait de soulignement ("_") exclura la fonction des fonctionnalités d'auto-complétion dans l'éditeur de code 4D. Par exemple, si vous déclarez `Function _myPrivateFunction` dans `MyClass`, elle ne sera pas proposée dans l'éditeur de code lorsque vous tapez `"cs.MyClass. "`.

Immédiatement après le nom de la fonction, les [paramètres](#parameters) de la fonction peuvent être déclarés avec un nom et un type de données affectés, y compris le paramètre de retour (facultatif). Par exemple:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Dans une fonction de classe, la commande `This` est utilisée comme instance d'objet. Par exemple:

```4d  
Function setFullname($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function getFullname()->$fullname : Text
    $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

Pour une fonction de classe, la commande `Current method name` retourne: "*\<ClassName>.\<FunctionName>*", par exemple "MyClass.myMethod".

Dans le code de l'application, les fonctions de classe sont appelées en tant que méthodes membres de l'instance d'objet et peuvent recevoir des [paramètres](#class-function-parameters) le cas échéant. Les syntaxes suivantes sont prises en charge :

- utilisation de l'opérateur `()`. For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method:
    - [`apply()`](API/formulaClass.md#apply)
    - [`call()`](API/formulaClass.md#call)

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute: - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.




#### Parameters

Function parameters are declared using the parameter name and the parameter type, separated by a colon. The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Plusieurs paramètres (et types) sont séparés par des points-virgules (;).

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
Function add($x : Integer)
  var $2; $value : Integer
  var $0 : Text
  $value:=$x+$2
  $0:=String($value)
```



#### Exemple

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Définition de la classe
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



### Class constructor

#### Syntaxe

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

In that case, when you call the [`new()`](API/classClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>.constructor*", for example "MyClass.constructor".



#### Example:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// In a project method
// You can instantiate an object
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### Class extends \<ClassName>

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another project or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

```4d
//Class: Square
//path: Classes/Square.4dm 

Class extends Polygon

Class constructor ($side : Integer)

    // It calls the parent class's constructor with lengths
    // provided for the Polygon's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```

### Super


#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                                    |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Result    | object | <- | Object's parent                                |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.
    - If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
    - If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.

    - If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```

- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

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

    // It calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

Function getArea()
    C_LONGINT($0)
    $0:=This.height*This.width
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

The `This` keyword returns a reference to the currently processed object. You created the `Rectangle` class with a function:

```4d
  //Class: Rectangle

 Function nbSides
 C_TEXT($0)
 $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
  //Class: Square

 Class extends Rectangle

 Function description
 C_TEXT($0)
 $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
 C_OBJECT($square)
 C_TEXT($message)
 $square:=cs.Square.new()
 $message:=$square.description() //I have 4 sides which are all equal
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

In most cases, the value of `This` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. For example:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/classClass.md#new) function), its `This` is bound to the new object being constructed.

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
Dans cet exemple, l'objet assigné à la variable $o n'a pas sa propre propriété *f*, il l'hérite de sa classe. See [this example](#example-1).</blockquote>


In any cases, `This` refers to the object the method was called on, as if the method were on the object.

```4d
  //Class: ob

 Function f
    $0:=This.a+This.b
```

Then you can write in a project method:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```
In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of $o, its `This` refers to $o.


## Class commands

Several commands of the 4D language allows you to handle class features.


### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter.


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
