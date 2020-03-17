---
id: classes
title: Classes
---


## Overview

The 4D language supports the concept of **classes**. In a programming language, using a class allows you to define a specific model of object with associated properties and functions. 

Once a class is defined, you can **instantiate** objects of this class anywhere in your code using the `cs.class.new()` statement (`cs` means *classtore*). Each object is an instance of its class. A class can `extend` another class, and then inherits from its properties and functions.

The class model in 4D is similar to classes in JavaScript, and based on a chain of prototypes.

### Class object

A class is an object itself. A class object can have following properties:

- a name which must be ECMAScript compliant
- a `constructor` object (optional)
- a `superclass` object (optional)
- a `prototype` object containing named function objects

A class object is a shared object and can therefore be accessed from different 4D processes simultaneously.

### Property lookup and prototype

All objects in 4D are internally linked to a class object. When 4D does not find a property in an object, it searches in the prototype object of its class; if not found, 4D continue searching in the prototype object of its superclass, and so on until there is no more superclass.

All objects inherit from the class "Object" as their inheritance tree top class.

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

Member functions are objects of class "Function", with following functions:

- `apply()`
- `call()`


### Class stores

Available classes are accessible from their class stores. The following class stores are available:

- a class store for built-in 4D classes, 
- a class store for each opened database or component.

The `4d` command returns the class store for all built-in 4D classes.
The `cs` command returns the class store for all classes in the current database or component. These are "user classes".


## Class keywords

Specific 4D keywords can be used in class definitions:

- `Class extends \<ClassName>`
- `Function \<ClassName>`
- `Class constructor`


### Class extends \<ClassName>

The `extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all properties and functions of the parent class.

> - Built-in classes cannot be extended. 
> 
> - It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a"). 




To create a child class, write in the class definition code:

```// Clas: ChildClass
Class extends ParentClass
```

#### Example


## Creating a class




