---
id: classes
title: Classes
---


## Aperçu

The 4D language supports the concept of **classes**. Dans un langage de programmation, l'utilisation d'une classe vous permet de définir le comportement d'un objet avec des propriétés et des fonctions associées.

Once a class is defined, you can **instantiate** objects of this class anywhere in your code. Chaque objet est une instance de sa classe. Une classe peut `s'étendre` à une autre classe, puis hériter de ses fonctions.

Les modèles de classe 4D et de classe JavaScript sont similaires, et sont basés sur une chaîne de prototypes.

### L'objet classe

Une classe est un objet de classe "Class". Un objet de classe a les propriétés et méthodes suivantes :

- `name` qui doit être conforme à ECMAScript
- un objet `superclass` (facultatif, nul s'il n'y en a aucun)
- une méthode `new()` permettant d'instancier des objets de classe.

In addition, a class object can reference:
- un objet `constructeur` (facultatif)
- un objet `prototype`, contenant des objets de fonction nommés (facultatif).

Un objet de classe est un objet partagé et est donc accessible simultanément à partir de différents processus 4D.


### Recherche et prototype des propriétés

Tous les objets de 4D sont liés en interne à un objet de classe. When 4D does not find a property in an object, it searches in the prototype object of its class; if not found, 4D continues searching in the prototype object of its superclass, and so on until there is no more superclass.

Tous les objets héritent de la classe "Object" comme classe supérieure d'arbre d'héritage.

```4d
  //Class: Polygon
Class constructor
C_LONGINT($1;$2)
This.area:=$1*$2

 //C_OBJECT($poly)
C_BOOLEAN($instance)
$poly:=cs.Polygon.new(4;3)

$instance:=OB Instance of($poly;cs.Polygon)  
 // true
$instance:=OB Instance of($poly;4D.Object)
 // true 
```

When enumerating properties of an object, its class prototype is not enumerated. As a consequence, `For each` statement and `JSON Stringify` command do not return properties of the class prototype object. The prototype object property of a class is an internal hidden property.

### Class definition

A user class file defines a model of object that can be instantiated in the database code by calling the `new()` class member method. You will usually use specific [class keywords](#class-keywords) and [class commands](#class-commands) in the class file.

Par exemple:

```4d  
//Class: Person.4dm
Class constructor
  C_TEXT($1) // FirstName
  C_TEXT($2) // LastName
  This.firstName:=$1
  This.lastName:=$2
```

In a method, creating a "Person":

```
C_OBJECT($o)
$o:=cs.Person.new("John";"Doe")  
// $o: {firstName: "John";lastName: "Doe" }
```

Note that you could create an empty class file, and instantiate empty objects. For example, if you create the following `Empty.4dm` class file:

```4d  
//Fichier classe Empty.4dm
//Rien
```

You could write in a method:


```4d
$o:=cs.Empty.new()  
//$o : {}
$cName:=OB Class($o).name //"Empty"
```


## Class stores

Available classes are accessible from their class stores. The following class stores are available:

- a class store for built-in 4D classes. It is returned by the `4D` command.
- a class store for each opened database or component. It is returned by the `cs` command. These are "user classes".

For example, you create a new instance of an object of myClass using the `cs.myClass.new()` statement (`cs` means *classtore*).


## Handling user classes

### Class files

A user class in 4D is defined by a specific method file (.4dm), stored in the `/Project/Sources/Classes/` folder. The name of the file is the class name.

For example, if you want to define a class named "Polygon", you need to create the following file:

- Database folder
    + Project
        * Sources
            - Classes
                + Polygon.4dm

### Class names

When naming classes, you should keep in mind the following rules:

- A class name must be ECMAScript compliant.
- Class names are case sensitive.
- Giving the same name to a class and a database table is not recommended, in order to prevent any conflict.


### 4D Developer interface

Class files are automatically stored at the appropriate location when created through the 4D Developer interface, either via the **File** menu or the Explorer.

#### File menu and toolbar

You can create a new class file for the project by selecting **New > Class...** in the 4D Developer **File** menu or from the toolbar.

You can also use the **Ctrl+Shift+Alt+k** shortcut.

#### Explorer

In the **Methods** page of the Explorer, classes are grouped in the **Classes** category.

To create a new class, you can:

- select the **Classes** category and click on the ![](assets/en/Users/PlussNew.png) button.
- select **New Class...** from the action menu at the bottom of the Explorer window, or from the contexual menu of the Classes group. ![](assets/en/Concepts/newClass.png)
- select **New > Class...** from the contexual menu of the Explorer's Home page.

#### Class code support

In the various 4D Developer windows (code editor, compiler, debugger, runtime explorer), class code is basically handled like a project method with some specificities:

- In the code editor:
    - a class cannot be run
    - a class function is a code block
    - **Goto definition** on an object member searches for class Function declarations; for example, "$o.f()" will find "Function f".
    - **Search references** on class function declaration searches for the function used as object member; for example, "Function f" will find "$o.f()".
- In the Runtime explorer and Debugger, class functions are displayed with the \<ClassName> constructor or \<ClassName>.\<FunctionName> format.


### Deleting a class

To delete an existing class, you can:

- on your disk, remove the .4dm class file from the "Classes" folder,
- in the Explorer, select the class and click ![](assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.


## Class keywords

Specific 4D keywords can be used in class definitions:

- `Function <Name>` to define member methods of the objects.
- `Class constructor` to define the properties of the objects (i.e. the prototype).
- `Class extends <ClassName>` to define inheritance.


### Class Function

#### Syntaxe

```js
Function <name>
// code
```

Class functions are properties of the prototype object of the owner class. They are objects of the "Function" class.

In the class definition file, function declarations use the `Function` keyword, and the name of the function. The function name must be ECMAScript compliant.

Within a class function, the `This` is used as the object instance. Par exemple:

```4d  
Function getFullName
  C_TEXT($0)
  $0:=This.firstName+" "+Uppercase(This.lastName)

Function getAge
  C_LONGINT($0)
  $0:=(Current date-This.birthdate)/365.25
```

For a class function, the `Current method name` command returns: "*\<ClassName>.\<FunctionName>*", for example "MyClass.myMethod".

In the database code, class functions are called as member methods of the object instance and can receive parameters if any. The following syntaxes are supported:

- use of the `()` operator. For example `myObject.methodName("hello")`.
- use of a "Function" class member methods
    - `apply()`
    - `call()`


> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:  
> - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.


#### Example

```4d
// Class: Rectangle
Class Constructor
    C_LONGINT($1;$2)
    This.name:="Rectangle"
    This.height:=$1
    This.width:=$2

// Function definition
Function getArea
    C_LONGINT($0)
    $0:=(This.height)*(This.width)

```

```4d
// In a project method
C_OBJECT($o)  
C_REAL($area)

$o:=cs.Rectangle.new()  
$area:=$o.getArea(50;100) //5000
```


### Class constructor

#### Syntax

```js
// Class: MyClass
Class Constructor
// code
```

A class constructor function, which can accept parameters, can be used to define a user class.

In that case, when you call the `new()` class member method, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>.constructor*", for example "MyClass.constructor".


#### Example:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor
C_TEXT($1)
This.name:=$1
```

```4d
// In a project method
// You can instantiate an object
C_OBJECT($o)
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### Class extends \<ClassName>

#### Syntax

```js
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another database or component.
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

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Polygon's width and height
Super($1;$1)
  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"

Function getArea
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
 C_TEXT($1;$2)
 Super($1) //calls superclass constructor with a text param
 This.param:=$2 // use second param
```

- inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
 Super.doSomething(42) //calls "doSomething" function  
    //declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
  //Class: Rectangle

 Class constructor
 C_LONGINT($1;$2)
 This.name:="Rectangle"
 This.height:=$1
 This.width:=$2

 Function sayName
 ALERT("Hi, I am a "+This.name+".")

 Function getArea
 C_LONGINT($0)
 $0:=This.height*This.width
```

```4d
  //Class: Square

 Class extends Rectangle

 Class constructor
 C_LONGINT($1)

  // It calls the parent class's constructor with lengths
  // provided for the Rectangle's width and height
 Super($1;$1)

  // In derived classes, Super must be called before you
  // can use 'This'
 This.name:="Square"
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

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

In most cases, the value of `This` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. For example:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the `new()` keyword), its `This` is bound to the new object being constructed.

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

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. See [this example](#example-1).


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
