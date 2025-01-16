---
id: classes
title: Classes
---


## Overview

The 4D language supports the concept of **classes**. In a programming language, using a class allows you to define an object behaviour with associated properties and functions.

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. Each object is an instance of its class. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([declared](#property) and [computed](#function-get-and-function-set)).

> The class model in 4D is similar to classes in JavaScript, and based on a chain of prototypes.

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

In a method, creating a "Person":

```4d
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
```

## Managing classes

### Class definition

A user class in 4D is defined by a specific [method](methods.md) file (.4dm), stored in the `/Project/Sources/Classes/` folder. The name of the file is the class name.

When naming classes, you should keep in mind the following rules:

- A [class name](identifiers.md#classes) must be compliant with [property naming rules](identifiers.md#object-properties).
- Class names are case sensitive.
- Giving the same name to a class and a database table is not recommended, in order to prevent any conflict.

For example, if you want to define a class named "Polygon", you need to create the following file:

```
Project folder
 Project
  Sources
   Classes
    Polygon.4dm
```


### Deleting a class

To delete an existing class, you can:

- on your disk, remove the .4dm class file from the "Classes" folder,
- in the 4D Explorer, select the class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

### Using the 4D interface

Class files are automatically stored at the appropriate location when created through the 4D interface, either via the **File** menu or the Explorer.

#### File menu and toolbar

You can create a new class file for the project by selecting **New > Class...** in the 4D Developer **File** menu or from the toolbar.

You can also use the **Ctrl+Shift+Alt+k** shortcut.

#### Explorer

In the **Methods** page of the Explorer, classes are grouped in the **Classes** category.

To create a new class, you can:

- select the **Classes** category and click on the ![](../assets/en/Users/PlussNew.png) button.
- select **New Class...** from the action menu at the bottom of the Explorer window, or from the contexual menu of the Classes group.
![](../assets/en/Concepts/newClass.png)
- select **New > Class...** from the contexual menu of the Explorer's Home page.

#### Class code support

In the various 4D windows (code editor, compiler, debugger, runtime explorer), class code is basically handled like a project method with some specificities:

- In the code editor:
  - a class cannot be run
  - a class function is a code block
  - **Goto definition** on an object member searches for class Function declarations; for example, "$o.f()" will find "Function f".
  - **Search references** on class function declaration searches for the function used as object member; for example, "Function f" will find "$o.f()".
- In the Runtime explorer and Debugger, class functions are displayed with the `<ClassName>` constructor or `<ClassName>.<FunctionName>` format.

## Class stores

Available classes are accessible from their class stores. Two class stores are available:

- [`cs`](../commands/cs.md) for user class store
- [`4D`](../commands/4d.md) for built-in class store


### `cs`


<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->


<!-- REF #_command_.cs.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|classStore|Object|&#8592;|User class store for the project or component|<!-- END REF -->

The `cs` command <!-- REF #_command_.cs.Summary -->returns the user class store for the current project or component<!-- END REF -->. It returns all user classes [defined](#class-definition) in the opened project or component. By default, only project [ORDA classes](ORDA/ordaClasses.md) are available.

#### Example

You want to create a new instance of an object of `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|classStore|Object|&#8592;|4D class store|<!-- END REF -->

The `4D` command <!-- REF #_command_.4D.Summary -->returns the class store for available built-in 4D classes<!-- END REF -->. It provides access to specific APIs such as [CryptoKey](API/CryptoKeyClass.md).

#### Examples

You want to create a new key in the `CryptoKey` class:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

You want to list 4D built-in classes:

```4d
 var $keys : collection
 $keys:=OB Keys(4D)
 ALERT("There are "+String($keys.length)+" built-in classes.")
```


## Class object

When a class is [defined](#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of ["Class" class](API/ClassClass.md). A class object has the following properties and function:

- [`name`](API/ClassClass.md#name) string
- [`superclass`](API/ClassClass.md#superclass) object (null if none)
- [`new()`](API/ClassClass.md#new) function, allowing to instantiate class objects
- [`isShared`](API/ClassClass.md#isshared) property, true if the class is [shared](#shared-classes)
- [`isSingleton`](API/ClassClass.md#issingleton) property, true if the class defines a [singleton](#singleton-classes).
- [`isSectionSingleton`](API/ClassClass.md#issectionsingleton) property, true if the class defines a [session singleton](#singleton-classes).
- [`me`](API/ClassClass.md#me) property, allowing to instantiate and access [singletons](#singleton-classes).

In addition, a class object can reference a [`constructor`](#class-constructor) object (optional).

A class object itself is a [shared object](shared.md) and can therefore be accessed from different 4D processes simultaneously.

### Inheritance

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/ClassClass.md#superclass).

When 4D does not find a function or a property in a class, it searches it in its [`superclass`](API/ClassClass.md#superclass); if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).

## Class keywords

Specific 4D keywords can be used in class definitions:

- `Function <Name>` to define class functions of the objects.
- `Class constructor` to initialize new objects of the class.
- `property` to define static properties of the objects with a type.
- `Function get <Name>` and `Function set <Name>` to define computed properties of the objects.
- `Class extends <ClassName>` to define inheritance.
- `This` and `Super` are commands that have special 

### `Function`

#### Syntax

```4d
{shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

:::note

There is no ending keyword for function code. The 4D language automatically detects the end of a function's code by the next `Function` keyword or the end of the class file. 

:::

Class functions are specific properties of the class. They are objects of the [4D.Function](API/FunctionClass.md) class. In the class definition file, function declarations use the `Function` keyword followed by the function name.

If the function is declared in a [shared class](#shared-classes), you can use the `shared` keyword so that the function could be called without [`Use...End use` structure](shared.md#useend-use). For more information, refer to the [Shared functions](#shared-functions) paragraph below.

The function name must be compliant with [object naming rules](Concepts/identifiers.md#object-properties).

:::note

Since properties and functions share the same namespace, using the same name for a property and a function of the same class is not allowed (an error is thrown in this case).

:::


:::tip

Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

:::



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

For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myFunction".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#parameters) if any. The following syntaxes are supported:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Thread-safety warning

If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:
 - the compiler does not generate any error (which is different compared to regular methods),
 - an error is thrown by 4D only at runtime.

:::

#### Parameters

Function parameters are declared using the parameter name and the parameter type, separated by a colon. The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Multiple parameters (and types) are separated by semicolons (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

If the type is not stated, the parameter will be defined as `Variant`.

:::


#### Return value

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list, or a colon (`:`) and the return parameter type only. For example:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](parameters.md#return-expression) (it will also end the function execution). For example:

```4d
Function add($x : Variant; $y : Integer): Integer
 // some code
 return $x+$y
```

#### Example 1

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
// In a project method

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

#### Example 2

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

#### Syntax

```4d
// Class: MyClass
{shared} {{session} singleton} Class Constructor({$parameterName : type; ...})
// code
```

:::note

There is no ending keyword for class constructor function code. The 4D language automatically detects the end of a function's code by the next `Function` keyword or the end of the class file. 

:::


A class constructor function accepts optional [parameters](#parameters) and can be used to create and initialize objects of the user class.  

When you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

There can only be one constructor function in a class (otherwise an error is returned). A constructor can use the [`Super`](#super) keyword to call the constructor of the super class.

You can create and type instance properties inside the constructor (see example). Alternatively, if your instance properties' values do not depend on parameters passed to the constructor, you can define them using the [`property`](#property) keyword.

Using the `shared` keyword creates a **shared class**, used to only instantiate shared objects. For more information, refer to the [Shared classes](#shared-classes) paragraph.

Using the `singleton` keyword creates a **singleton**, used to create a single instance of the class. A `session singleton` creates a single instance per session. For more information, refer to the [Singleton classes](#singleton-classes) paragraph.


#### Example

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text ; $age : Integer)
 This.name:=$name
 This.age:=$age
```

```4d
// In a project method
// You can instantiate an object
var $o : cs.MyClass
$o:=cs.MyClass.new("John";42)  
// $o = {"name":"HelloWorld";"age":42}
```


### `property`

#### Syntax

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

The `property` keyword can be used to declare a property inside a user class. A class property has a name and a type.

Declaring class properties enhances code editor suggestions, type-ahead features and error detection.

Properties are declared for new objects when you call the [`new()`](API/ClassClass.md#new) function, however they are not automatically added to objects (they are only added when they are assigned a value).

:::note

A property is automatically added to the object when it is [inititalized in the declaration line](#initializing-the-property-in-the-declaration-line).

:::

Property names must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

:::note

Since properties and functions share the same namespace, using the same name for a property and a function of the same class is not allowed (an error is thrown in this case).

:::


The property type can be one of the following supported types:

|propertyType|Contents|
|---|---|
|`Text`|Text value|
|`Date`|Date value|
|`Time`|Time value|
|`Boolean`|Boolean value|
|`Integer`|Long integer value|
|`Real`|Real value|
|`Pointer`|Pointer value|
|`Picture`|Picture value|
|`Blob`|Scalar Blob value|
|`Collection`|Collection value|
|`Variant`|Variant value|
|`Object`|Object with default class (4D.Object)|
|`4D.<className>`|Object of the 4D class name|
|`cs.<className>`|Object of the user class name|
|`cs.<namespace>.<className>`|Object of the `<namespace>` component class name|


If you omit the type in the declaration line, the property is created as a variant.

:::info

The `property` keyword can only be used in class methods and outside any `Function` or `Class Constructor` block.

:::




#### Initializing the property in the declaration line

When declaring a property, you have the flexibility to specify its data type and provide its value in one statement. The supported syntax is:

`property <propertyName> { : <propertyType>} := <Propertyvalue>`

:::note

When using this syntax, you cannot declare several properties in the declaration line.

:::

You can omit the type in the declaration line, in which case the type will be inferred when possible. For example:

```4d
// Class: MyClass

property name : Text := "Smith"
property age : Integer := 42

property birthDate := !1988-09-29! //date is inferred
property fuzzy //variant
```

When you initialize a property in its declaration line, it is added to the class object after its instantiation with the [`new()`](API/ClassClass.md#new) function but before the constructor is called.

If a class [extends](#class-extends-classname) another class, the properties of the parent class are instantiated before the properties of the child class.

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



#### Example

```4d
// Class: MyClass

property name : Text
property age : Integer
property color : Text := "Blue"
```

In a method:

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{"color" : "Blue"}
$o.name:="John" //$o:{"color" : "Blue"; "name" : "John"}
$o.age:="Smith"  //error with check syntax
```


### `Function get` and `Function set`

#### Syntax

```4d
{shared} Function get <name>()->$result : type
// code
```

```4d
{shared} Function set <name>($parameterName : type)
// code
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, 4D substitutes the corresponding accessor's code:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

If the property is not accessed, the code never executes.

Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. In this case, an error is returned if the code tries to modify the property. If only a `Function set` is defined, 4D returns *undefined* when the property is read.

If the functions are declared in a [shared class](#shared-class-constructor), you can use the `shared` keyword with them so that they could be called without [`Use...End use` structure](shared.md#useend-use). For more information, refer to the [Shared functions](#shared-functions) paragraph below.

The type of the computed property is defined by the `$return` type declaration of the *getter*. It can be of any [valid property type](dt_object.md).

> Assigning *undefined* to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

#### Example 1

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
//in a project method
$fullName:=$person.fullName // Function get fullName() is called
$person.fullName:="John Smith" // Function set fullName() is called
```

#### Example 2

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

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object and [ORDA classes](../ORDA/ordaClasses.md) which are extended by default for user classes).
- A user class cannot extend a user class from another project or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").
- It is not possible to define a [shared user class](#shared-classes) extended from a non-shared user class.  

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



 Function getArea() -> $area : Integer
  $area:=This.height*This.width
```


## Class function commands

The following commands have specific features when they are used within class functions: 

### `Super`

The [`Super`](../commands/super.md) command allows calls to the [`superclass`](../API/ClassClass#superclass), i.e. the parent class of the function. It can be called in the [class constructor](#class-constructor) or in a class function code. 

For more details, see the [`Super`](../commands/super.md) command description. 

### `This`

The [`This`](../commands/this.md) command returns a reference to the currently processed object. In most cases, the value of `This` is determined by how a class function is called. Usually, `This` refers to the object the function was called on, as if the function were on the object.

Example:

```4d
//Class: ob

Function f() : Integer
 return This.a+This.b
```

Then you can write in a method:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

For more details, see the [`This`](../commands/this.md) command description. 



## Class commands


Several commands of the 4D language allows you to handle class features.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` returns the class of the object passed in parameter.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.


## Shared classes

You can create **shared classes**. A shared class is a user class that instantiates a [shared object](shared.md) when the [`new()`](../API/ClassClass.md#new) function is called on the class. A shared class can only create shared objects.

Shared classes also support **shared functions** that can be called without [`Use...End use`](shared.md#useend-use) structures.

The [`.isShared`](../API/ClassClass.md#isshared) property of Class objects allows to know if the class is shared.

:::info

- A class [inheriting](#class-extends-classname) from a non-shared class cannot be defined as shared.
- Shared classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::


### Creating a shared class

To create a shared class, add the `shared` keyword before the [Class Constructor](#class-constructor). For example:

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



### Shared functions

If a function defined inside a shared class modifies objects of the class, it should call [`Use...End use`](shared.md#useend-use) structure to protect access to the shared objects. However, to simplify the code, you can define the function as **shared** so that it automatically triggers internal `Use...End use` when executed.

To create a shared function, add the `shared` keyword before the [Function](#function) keyword in a shared class. For example:

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


## Singleton classes

A **singleton class** is a user class that only produces a single instance. For more information on the concept of singletons, please see the [Wikipedia page about singletons](https://en.wikipedia.org/wiki/Singleton_pattern). 

### Singletons types

4D supports three types of singletons:

- a **process singleton** has a unique instance for the process in which it is instantiated, 
- a **shared singleton** has a unique instance for all processes on the machine.
- a **session singleton** is a shared singleton but with a unique instance for all processes in the [session](../API/SessionClass.md). Session singletons are shared within an entire session but vary between sessions. In the context of a client-server or a web application, session singletons make it possible to create and use a different instance for each session, and therefore for each user.

Singletons are useful to define values that need to be available from anywhere in an application, a session, or a process.

:::info

Singleton classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::

The following table indicates the scope of a singleton instance depending on where it was created: 
  
|Singleton created on|Scope of process singleton|Scope of shared singleton|Scope of session singleton|
|---|----|---|---|
|**4D single-user**|Process|Application|Application or Web/REST session|
|**4D Server**|Process|4D Server machine|Client/server session or Web/REST session or Stored procedure session|
|**4D remote mode**|Process (*note*: singletons are not synchronized on the twin process)|4D remote machine|4D remote machine or Web/REST session|

Once instantiated, a singleton class (and its singleton) exists as long as a reference to it exists somewhere in the application running on the machine.


### Creating and using singletons

You declare singleton classes by adding appropriate keyword(s) before the [`Class constructor`](#class-constructor):

- To declare a (process) singleton class, write `singleton Class Constructor()`.
- To declare a shared singleton class, write `shared singleton Class constructor()`.
- To declare a session singleton class, write `session singleton Class constructor()`.

:::note

- Session singletons are automatically shared singletons (there's no need to use the `shared` keyword in the class constructor). 
- Singleton shared functions support [`onHttpGet` keyword](../ORDA/ordaClasses.md#onhttpget-keyword).

:::

The class singleton is instantiated at the first call of the [`cs.<class>.me`](../API/ClassClass.md#me) property. The instantiated class singleton is then always returned when the [`me`](../API/ClassClass.md#me) property is used.

If you need to instantiate a singleton with parameters, you can also call the [`new()`](../API/ClassClass.md#new) function. In this case, it is recommended to instantiate the singleton in some code executed at application startup.

The [`.isSingleton`](../API/ClassClass.md#issingleton) property of Class objects allows to know if the class is a singleton.

The [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton) property of Class objects allows to know if the class is a session singleton.




### Examples

#### Process singleton

```4d
	//class: ProcessTag
singleton Class Constructor()
 This.tag:=Random
```

To use the singleton:

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



#### Shared singleton


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

You can then call the **cs.VehicleFactory** singleton to get a new vehicle from everywhere in the application on your machine with a single line:

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("truck")
```

Since the *buildVehicle()* function modifies the **cs.VehicleFactory** singleton (by incrementing `This.vehicleBuilt`) you need to add the `shared` keyword to it.


#### Session singleton

In an inventory application, you want to implement an item inventory using session singletons. 

```4d
//class ItemInventory

property itemList : Collection:=[]

session singleton Class constructor()

shared function addItem($item:object)
    This.itemList.push($item)
```

By defining the ItemInventory class as a session singleton, you make sure that every session and therefore every user has their own inventory. Accessing the user's inventory is as simple as:

```4d
//in a user session
$myList := cs.ItemInventory.me.itemList
//current user's item list

```



#### See also

[Singletons in 4D](https://blog.4d.com/singletons-in-4d) (blog post) <br/> [Session Singletons](https://blog.4d.com/introducing-session-singletons) (blog post).
