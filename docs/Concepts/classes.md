---
id: classes
title: Classes
---


## Overview

The 4D language supports the concept of **classes**. In a programming language, using a class allows you to define a specific model of object with associated properties and functions. 

Once a class is defined, you can **instantiate** objects of this class anywhere in your code. Each object is an instance its class. A class can extend another class, and then inherits from its properties and functions.

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

When enumerating properties of an object, its class prototype is not enumerated. As a consequence, `For each` statement and `JSON Stringify` command do not return properties of the class prototype object. The prototype object property of a class is an internal hidden property.

Member functions are objects of class "Function", with following functions:

- `apply()`
- `call()`


### Class stores

Available classes are accessible from their class stores. The following class stores are available:

- a class store for built-in 4D classes, 
- a class store for each opened database or component.

The `4d` command returns the class store for all built-in 4d classes.
The `cs` command returns the class store for all classes in the current database or component. These are usually "user classes".


## Creating a class




