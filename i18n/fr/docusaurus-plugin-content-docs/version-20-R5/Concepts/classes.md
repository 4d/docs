---
id: classes
title: Classes
---

## Vue d’ensemble

The 4D language supports the concept of **classes**. Dans un langage de programmation, l'utilisation d'une classe vous permet de définir le comportement d'un objet avec des propriétés et des fonctions associées.

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. Chaque objet est une instance de sa classe. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([declared](#property) and [computed](#function-get-and-function-set)).

> Les modèles de classe 4D et de classe JavaScript sont similaires, et sont basés sur une chaîne de prototypes.

For example, you could create a `Person` class with the following definition:

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

A user class in 4D is defined by a specific [method](methods.md) file (.4dm), stored in the `/Project/Sources/Classes/` folder. Le nom du fichier est le nom de la classe.

Lorsque vous nommez des classes, gardez à l'esprit les règles suivantes :

- A [class name](identifiers.md#classes) must be compliant with [property naming rules](identifiers.md#object-properties).
- Les noms de classe sont sensibles à la casse.
- Il n'est pas recommandé de donner le même nom à une classe et à une table de base de données, afin d'éviter tout conflit.

Par exemple, si vous souhaitez définir une classe nommée "Polygon", vous devez créer le fichier suivant :

```
Project folder Project Sources Classes Polygon.4dm
```

### Supprimer une classe

Pour supprimer une classe existante, vous pouvez :

- sur votre disque, supprimer le fichier de classe .4dm du dossier "Classes",
- in the 4D Explorer, select the class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

### Utilisation de l'interface 4D

Class files are automatically stored at the appropriate location when created through the 4D interface, either via the **File** menu or the Explorer.

#### Menu Fichier et barre d'outils

You can create a new class file for the project by selecting **New > Class...** in the 4D Developer **File** menu or from the toolbar.

You can also use the **Ctrl+Shift+Alt+k** shortcut.

#### Explorateur

In the **Methods** page of the Explorer, classes are grouped in the **Classes** category.

Pour créer une nouvelle classe, vous pouvez :

- select the **Classes** category and click on the ![](../assets/en/Users/PlussNew.png) button.
- select **New Class...** from the action menu at the bottom of the Explorer window, or from the contexual menu of the Classes group.
  ![](../assets/en/Concepts/newClass.png)
- select **New > Class...** from the contexual menu of the Explorer's Home page.

#### Prise en charge du code de classe

Dans les différentes fenêtres 4D (éditeur de code, compilateur, débogueur, explorateur d'exécution), le code de classe est essentiellement géré comme une méthode projet avec quelques spécificités :

- Dans l'éditeur de code :
  - une classe ne peut pas être exécutée
  - une fonction de classe est un bloc de code
  - **Goto definition** on an object member searches for class Function declarations; for example, "$o.f()" will find "Function f".
  - **Search references** on class function declaration searches for the function used as object member; for example, "Function f" will find "$o.f()".
- In the Runtime explorer and Debugger, class functions are displayed with the `<ClassName>` constructor or `<ClassName>.<FunctionName>` format.

## Class stores

Les classes disponibles sont accessibles depuis leurs class stores. Deux class stores sont disponibles :

- `cs` for user class store
- `4D` for built-in class store

### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->

<!-- REF #_command_.cs.Params -->

| Paramètres | Type   |    | Description                                                         |                  |
| ---------- | ------ | -- | ------------------------------------------------------------------- | ---------------- |
| classStore | Object | <- | Class store utilisateur utilisateurs pour le projet ou le composant | <!-- END REF --> |

The `cs` command <!-- REF #_command_.cs.Summary -->returns the user class store for the current project or component<!-- END REF -->. It returns all user classes [defined](#class-definition) in the opened project or component. By default, only project [ORDA classes](ORDA/ordaClasses.md) are available.

#### Exemple

You want to create a new instance of an object of `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->

| Paramètres | Type   |    | Description    |                  |
| ---------- | ------ | -- | -------------- | ---------------- |
| classStore | Object | <- | Class store 4D | <!-- END REF --> |

The `4D` command <!-- REF #_command_.4D.Summary -->returns the class store for available built-in 4D classes<!-- END REF -->. It provides access to specific APIs such as [CryptoKey](API/CryptoKeyClass.md).

#### Exemple

You want to create a new key in the `CryptoKey` class:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## L'objet classe

When a class is [defined](#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of ["Class" class](API/ClassClass.md). Un objet classe possède les propriétés et fonctions suivantes :

- [`name`](API/ClassClass.md#name) string
- [`superclass`](API/ClassClass.md#superclass) object (null if none)
- [`new()`](API/ClassClass.md#new) function, allowing to instantiate class objects
- [`isShared`](API/ClassClass.md#isshared) property, true if the class is [shared](#shared-classes)
- [`isSingleton`](API/ClassClass.md#issingleton) property, true if the class defines a [singleton](#singleton-classes).
- [`me`](API/ClassClass.md#me) property, allowing to instantiate and access [singletons](#singleton-classes).

In addition, a class object can reference a [`constructor`](#class-constructor) object (optional).

A class object itself is a [shared object](shared.md) and can therefore be accessed from different 4D processes simultaneously.

### Héritage

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/ClassClass.md#superclass).

When 4D does not find a function or a property in a class, it searches it in its [`superclass`](API/ClassClass.md#superclass); if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).

## Mots-clés de classe

Des mots-clés 4D spécifiques peuvent être utilisés dans les définitions de classe :

- `Function <Name>` to define class functions of the objects.
- `Class constructor` to initialize new objects of the class.
- `property` to define static properties of the objects with a type.
- `Function get <Name>` and `Function set <Name>` to define computed properties of the objects.
- `Class extends <ClassName>` to define inheritance.

### `Function`

#### Syntaxe

```4d
{shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Les fonctions de classe sont des propriétés spécifiques de la classe. They are objects of the [4D.Function](API/FunctionClass.md) class. In the class definition file, function declarations use the `Function` keyword followed by the function name.

If the function is declared in a [shared class](#shared-classes), you can use the `shared` keyword so that the function could be called without [`Use...End use` structure](shared.md#useend-use). For more information, refer to the [Shared functions](#shared-functions) paragraph below.

The function name must be compliant with [object naming rules](Concepts/identifiers.md#object-properties).

:::note

Étant donné que les propriétés et les fonctions partagent le même espace de nommage, il n'est pas permis d'utiliser le même nom pour une propriété et une fonction de la même classe (une erreur est générée dans ce cas).

:::

:::tip

Si vous préfixez le nom d'une fonction par un trait de soulignement ("_"), elle ne sera pas proposée par les fonctionnalités d'auto-complétion dans l'éditeur de code 4D. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

:::

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). Par exemple :

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Within a class function, the `This` command is used as the object instance. Par exemple :

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myFunction".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#parameters) if any. Les syntaxes suivantes sont prises en charge :

- use of the `()` operator. For example, `myObject.methodName("hello")`
- utilisation d'une méthode membre de la classe "4D.Function" :
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Thread-safety warning

Si une fonction de classe n'est pas thread-safe et qu'elle est appelée par une méthode avec l'attribut "Peut être exécutée dans un process preémptif" :

- le compilateur ne génère pas d'erreur (ce qui est différent par rapport aux méthodes standard),
- une erreur est déclenchée par 4D uniquement au moment de l'exécution.

:::

#### Paramètres

Les paramètres des fonctions sont déclarés via le nom du paramètre et son type, séparés par deux-points. The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Les paramètres multiples (et leurs types) sont séparés par des points-virgules (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

If the type is not stated, the parameter will be defined as `Variant`.

:::

#### Valeur retournée

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list, or a colon (`:`) and the return parameter type only. Par exemple :

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](parameters.md#return-expression) (it will also end the function execution). Par exemple :

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

This example uses the [`return expression`](parameters.md#return-expression):

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

A class constructor function accepts optional [parameters](#parameters) and can be used to create and initialize objects of the user class.

When you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

Il ne peut y avoir qu'une seule fonction de construction dans une classe (sinon une erreur est renvoyée). A constructor can use the [`Super`](#super) keyword to call the constructor of the super class.

Vous pouvez créer et saisir des propriétés d'instance dans le constructeur (voir exemple). Alternatively, if your instance properties' values do not depend on parameters passed to the constructor, you can define them using the [`property`](#property) keyword.

Using the `shared` keyword creates a **shared class**, used to only instantiate shared objects. For more information, refer to the [Shared classes](#shared-classes) paragraph.

Using the `singleton` keyword creates a **singleton**, used to create a single instance. For more information, refer to the [Singleton classes](#singleton-classes) paragraph.

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

The `property` keyword can be used to declare a property inside a user class. Une propriété de classe a un nom et un type.

La déclaration des propriétés des classes améliore les suggestions de l'éditeur de code, les fonctions d'auto-complétion et la détection des erreurs.

Properties are declared for new objects when you call the [`new()`](API/ClassClass.md#new) function, however they are not automatically added to objects (they are only added when they are assigned a value).

:::note

A property is automatically added to the object when it is [inititalized in the declaration line](#initializing-the-property-in-the-declaration-line).

:::

Property names must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

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
| `cs.<namespace>.<className>` | Object of the `<namespace>` component class name                          |

Si vous omettez le type dans la ligne de déclaration, la propriété est créée en tant que variant.

:::info

The `property` keyword can only be used in class methods and outside any `Function` or `Class Constructor` block.

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

property birthDate := !1988-09-29! //date is inferred
property fuzzy //variant
```

When you initialize a property in its declaration line, it is added to the class object after its instantiation with the [`new()`](API/ClassClass.md#new) function but before the constructor is called.

If a class [extends](#class-extends-classname) another class, the properties of the parent class are instantiated before the properties of the child class.

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

### `Function get` and `Function set`

#### Syntaxe

```4d
{shared} Function get <name>()->$result : type
// code
```

```4d
{shared} Function set <name>($parameterName : type)
// code
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. Une propriété calculée est une propriété nommée avec un type de données qui masque un calcul. Lorsqu'on accède à la valeur d'une propriété calculée, 4D substitue le code de l'accesseur correspondant :

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

Si la propriété n'est pas accédée, le code n'est jamais exécuté.

Les propriétés calculées sont conçues pour gérer les données qui n'ont pas besoin d'être conservées en mémoire. Elles sont généralement basées sur des propriétés persistantes. For example, if a class object contains as persistent property the _gross price_ and the _VAT rate_, the _net price_ could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the _getter_) and `Function set` (the _setter_) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. Dans ce cas, une erreur est retournée si le code tente de modifier la propriété. If only a `Function set` is defined, 4D returns _undefined_ when the property is read.

If the functions are declared in a [shared class](#shared-class-constructor), you can use the `shared` keyword with them so that they could be called without [`Use...End use` structure](shared.md#useend-use). For more information, refer to the [Shared functions](#shared-functions) paragraph below.

The type of the computed property is defined by the `$return` type declaration of the _getter_. It can be of any [valid property type](dt_object.md).

> Assigning _undefined_ to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

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
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. La classe "enfant" hérite de toutes les fonctions de la classe "parente".

L'extension de classe doit respecter les règles suivantes :

- A user class cannot extend a built-in class (except 4D.Object and [ORDA classes](../ORDA/ordaClasses.md) which are extended by default for user classes).
- Une classe utilisateur ne peut pas étendre une classe utilisateur d'un autre projet ou composant.
- Une classe utilisateur ne peut pas s'étendre elle-même.
- Il n'est pas possible d'étendre des classes de manière circulaire (i.e. "a" étend "b" qui étend "a").
- It is not possible to define a [shared user class](#shared-classes) extended from a non-shared user class.

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Exemple

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

The `Super` keyword <!-- REF #_command_.Super.Summary -->allows calls to the `superclass`, i.e. the parent class<!-- END REF -->.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.

- Si tous les class constructors dans l'arbre des héritages ne sont pas appelés correctement, l'erreur -10748 et générée. Il est de la responsabilité du développeur 4D de s'assurer que tous les appels sont valides.
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// dans la fonction constructor de myClass
var $text1; $text2 : Text
Super($text1) //appel du constructeur de la superclasse avec un paramètre text
This.param:=$text2 // utilisation d'un second param
```

2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //appelle la fonction "doSomething"   
//déclarée parmi les superclasses
```

#### Exemple 1

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

The `This` keyword <!-- REF #_command_.This.Summary -->returns a reference to the currently processed object<!-- END REF -->.

In most cases, the value of `This` is determined by how a function is called. Il ne peut pas être défini par affectation lors de l'exécution, et il peut être différent à chaque fois que la fonction est appelée.

When a [formula](../API/FunctionClass.md) is called as a member method of an object, its `This` is set to the object the method is called on. Par exemple :

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/ClassClass.md#new) function), its `This` is bound to the new object being constructed.

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

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. See [this example](#example-1).

In any cases, `This` refers to the object the method was called on, as if the method were on the object.

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

In this example, the object assigned to the variable $o doesn't have its own _f_ property, it inherits it from its class. Since _f_ is called as a method of $o, its `This` refers to $o.

## Commandes de classes

Plusieurs commandes du langage 4D se rapportent à la manipulation des classes.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` returns the class of the object passed in parameter.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.

## Classes partagées

You can create **shared classes**. A shared class is a user class that instantiates a [shared object](shared.md) when the [`new()`](../API/ClassClass.md#new) function is called on the class. Une classe partagée ne peut créer que des objets partagés.

Shared classes also support **shared functions** that can be called without [`Use...End use`](shared.md#useend-use) structures.

The [`.isShared`](../API/ClassClass.md#isshared) property of Class objects allows to know if the class is shared.

:::info

- A class [inheriting](#class-extends-classname) from a non-shared class cannot be defined as shared.
- Shared classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::

### Création d'une classe partagée

To create a shared class, add the `shared` keyword before the [Class Constructor](#class-constructor). Par exemple :

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

If a function defined inside a shared class modifies objects of the class, it should call [`Use...End use`](shared.md#useend-use) structure to protect access to the shared objects. However, to simplify the code, you can define the function as **shared** so that it automatically triggers internal `Use...End use` when executed.

To create a shared function, add the `shared` keyword before the [Function](#function) keyword in a shared class. Par exemple :

```4d
	//shared class Foo
shared Class Constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //no need to call use/end use
```

:::note

If the `shared` function keyword is used in a non-shared user class, it is ignored.

:::

## Classes Singleton

A **singleton class** is a user class that only produces a single instance. For more information on singletons, please see the [Wikipedia page about singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

The class singleton is instantiated at the first call of the [`cs.<class>.me`](../API/ClassClass.md#me) property. The instantiated class singleton is then always returned when the [`me`](../API/ClassClass.md#me) property is used.

If you need to instantiate a singleton with parameters, you can also call the [`new()`](../API/ClassClass.md#new) function. Dans ce cas, il est recommandé d'instancier le singleton dans du code exécuté au démarrage de l'application.

La portée d'une instance de singleton peut être le process courant ou tous les process. A _process_ singleton has a unique value for the process in which it is instantiated, while an _interprocess_ singleton has a unique value for all processes of the application. Les singletons sont utiles pour définir des valeurs qui doivent être disponibles de n'importe où dans une application ou un process.

The [`.isSingleton`](../API/ClassClass.md#issingleton) property of Class objects allows to know if the class is a singleton.

:::info

Singleton classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::

### Création d'un singleton process

To create a process singleton class, add the `singleton` keyword before [`Class Constructor`](#class-constructor). Par exemple :

```4d
	//class: ProcessTag
singleton Class Constructor()
 This.tag:=Random
```

Pour utiliser le singleton process :

```4d
	//in a process
var $mySingleton := cs.ProcessTag.me //First instantiation
	//$mySingleton.tag = 5425 for example  
...  
var $myOtherSingleton := cs.ProcessTag.me
	//$myOtherSingleton.tag = 5425

```

```4d
	//in another process
var $mySingleton := cs.ProcessTag.me //First instantiation
	//$mySingleton.tag = 14856 for example  
...  
var $myOtherSingleton := cs.ProcessTag.me  
	//$myOtherSingleton.tag = 14856
```

### Création d'un singleton interprocess

To create an interprocess singleton, add the `shared singleton` keywords before the [Class Constructor](#class-constructor). Par exemple :

```4d
//Class VehicleFactory

property vehicleBuilt : Integer

shared singleton Class constructor()
  This.vehicleBuilt := 0 //Number of vehicles built by the factory

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

You can then call the **cs.VehicleFactory** singleton to get a new vehicle from everywhere in your application with a single line:

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("truck")
```

Since the _buildVehicle()_ function modifies the **cs.VehicleFactory** singleton (by incrementing `This.vehicleBuilt`) you need to add the `shared` keyword to it.

#### Voir également

See also [this blog post](https://blog.4d.com/singleton) for more details.
