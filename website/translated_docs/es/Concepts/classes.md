---
id: classes
title: Classes
---


## Overview

The 4D language supports the concept of **classes**. In a programming language, using a class allows you to define an object behaviour with associated properties and functions.

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. Each object is an instance of its class. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function).

> The class model in 4D is similar to classes in JavaScript, and based on a chain of prototypes.

For example, you could create a `Person` class with the following definition:

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname
```

In a method, creating a "Person":

```
var $o : cs.Person //object of Person class
$o:=cs.Person.new("John";"Doe")
// $o:{firstName: "John"; lastName: "Doe" }
```



## Managing classes

### Class definition

A user class in 4D is defined by a specific method file (.4dm), stored in the `/Project/Sources/Classes/` folder. The name of the file is the class name.

When naming classes, you should keep in mind the following rules:

- A class name must be compliant with [property naming rules](Concepts/dt_object.md#object-property-identifiers).
- Class names are case sensitive.
- Giving the same name to a class and a database table is not recommended, in order to prevent any conflict.

For example, if you want to define a class named "Polygon", you need to create the following file:

- Project folder
    + Project
        * Sources
            - Classes
                + Polygon.4dm

### Deleting a class

To delete an existing class, you can:

- on your disk, remove the .4dm class file from the "Classes" folder,
- in the 4D Explorer, select the class and click ![](assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.


### Using 4D interface

Class files are automatically stored at the appropriate location when created through the 4D interface, either via the **File** menu or the Explorer.

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

## Class stores

Available classes are accessible from their class stores. Two class stores are available:

- `cs` for user class store
- `4D` for built-in class store


### cs

#### cs -> classStore

| Parameter  | Type   |    | Description                                   |
| ---------- | ------ | -- | --------------------------------------------- |
| classStore | object | <- | User class store for the project or component |

The `cs` command returns the user class store for the current project or component. It returns all user classes [defined](#class-definition) in the opened project or component. By default, only project [ORDA classes](ORDA/ordaClasses.md) are available.

#### Example

You want to create a new instance of an object of `myClass`:

```4d
$instance:=cs.myClass.new()
```

### 4D

#### 4D -> classStore

| Parameter  | Type   |    | Description    |
| ---------- | ------ | -- | -------------- |
| classStore | object | <- | 4D class store |

The `4D` command returns the class store for available built-in 4D classes. It provides access to specific APIs such as [CryptoKey](API/CryptoKey.md).

#### Example

You want to create a new key in the `CryptoKey` class:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```



## Using classes in your code


### Class object

When a class is [defined](#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of "Class" class. A class object has the following properties and methods:

- `name` string
- `superclass` object (optional, null if none)
- `new()` method, allowing to instantiate class objects.

In addition, a class object can reference:
- a [`constructor`](#class-constructor) object (optional),
- a `prototype` object, containing named [function](#function) objects (optional).

A class object is a shared object and can therefore be accessed from different 4D processes simultaneously.



### new() method

#### cs.\<ClassName>.new() -> classObject

| Parameter   | Type   |    | Description                           |
| ----------- | ------ | -- | ------------------------------------- |
| classObject | object | <- | New object of the \<ClassName> class |

The `new()` method creates and returns an object which is a new instance of the `<ClassName>` class on which it is called. It is automatically available on all classes from the `cs` [class store](#class-stores).

If it is called on a non-existing class, an error is returned.

#### Example

To create a new instance of the Person class:

```4d
var $person : cs.Person //for accurate autocompletion  
$person:=cs.Person.new() //create the new instance  
//$Person contains functions of the class
```

Note that you can instantiate empty objects. For example, if you create the following `Empty.4dm` class file:

```4d  
//Empty.4dm class file
//Nothing
```

You could write in a method:

```4d
$o:=cs.Empty.new()  
//$o : {}
$cName:=OB Class($o).name //"Empty"
```

### Property lookup and prototype

All objects in 4D are internally linked to a class object. When 4D does not find a property in an object, it searches in the prototype object of its class; if not found, 4D continues searching in the prototype object of its superclass, and so on until there is no more superclass.

All objects inherit from the class "Object" as their inheritance tree top class.

```4d
//Class: Polygon
Class constructor($width : Integer; $height : Integer)
    This.area:=$width*$height

    //var $poly : Object
    var $instance : Boolean
    $poly:=cs.Polygon.new(4;3)

    $instance:=OB Instance of($poly;cs.Polygon)
    // true
    $instance:=OB Instance of($poly;4D.Object)
    // true
```

When enumerating properties of an object, its class prototype is not enumerated. As a consequence, `For each` statement and `JSON Stringify` command do not return properties of the class prototype object. The prototype object property of a class is an internal hidden property.



## Class keywords

Specific 4D keywords can be used in class definitions:

- `Function <Name>` to define member methods of the objects.
- `Class constructor` to define the properties of the objects (i.e. the prototype).
- `Class extends <ClassName>` to define inheritance.


### Function

#### Syntax

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Class functions are properties of the prototype object of the owner class. They are objects of the "Function" class.

In the class definition file, function declarations use the `Function` keyword, and the name of the function. The function name must be compliant with [property naming rules](Concepts/dt_object.md#object-property-identifiers).

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). For example:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Within a class function, the `This` command is used as the object instance. For example:

```4d  
Function setFullname($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function getFullname()->$fullname : Text
    $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: "*\<ClassName>.\<FunctionName>*", for example "MyClass.myMethod".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. The following syntaxes are supported:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- use of a "Function" class member method:
    - `apply()`
    - `call()`

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute: - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.




#### Parameters

Function parameters are declared using the parameter name and the parameter type, separated by a colon. The parameter name must be compliant with [property naming rules](Concepts/dt_object.md#object-property-identifiers). Multiple parameters (and types) are separated by semicolons (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> If the type is not stated, the parameter will be defined as `Variant`.

You declare the return parameter (optional) by adding an arrow (->) and the return parameter definition after the input parameter(s) list. For example:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through $0. For example:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```
> The [classic 4D syntax](parameters.md#sequential-parameters) for method parameters can be used to declare class function parameters. Both syntaxes can be mixed. For example:
> 
> ```4d
Function add($x : Integer)
  var $2; $value : Integer
  var $0 : Text
  $value:=$x+$2
  $0:=String($value)
```



#### Example

```4d
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
// In a project method
var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new()  
$area:=$rect.getArea(50;100) //5000
```



### Class constructor

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

In that case, when you call the `new()` class member method, the class constructor is called with the parameters optionally passed to the `new()` function.

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

The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

In most cases, the value of `This` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

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

Function f()
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

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.</p>


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
