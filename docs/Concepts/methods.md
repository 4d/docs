---
id: methods
title: Methods
---


A method is basically a piece of code that executes one or several action(s). A method is composed of statements. 

A statement performs an action, and may be simple or complex. Each statement usually consists of one line in the method (if necessary, it can however be [split using the `\` character](quick-tour.md#code-on-several-lines)). 

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.  

## Method Types

In the 4D Language, there are several categories of methods. The category depends on how they can be called:

|Type|Calling context|Accepts parameters|Description|
|----|-----|-----|----|
|**Project method**|On demand, when the project method name [is called](../Project/project-method-properties.md)|Yes|Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project.|
|**Object (widget) method**|Automatic, when an event involves the object to which the method is attached|No|Property of a form object (also called widget)|
|**Form method**|Automatic, when an event involves the form to which the method is attached|No|Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes.|
|**Trigger** (aka *Table method*)|Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)|No|Property of a table. Triggers are methods that can prevent "illegal" operations with the records of your database.|
|**Database method**|Automatic, when a working session event occurs|Yes (predefined)|There are 16 database methods in 4D. |
|**Class**|Automatically called when an object of the class is instantiated or when a function of the class is executed on an object instance in any other methods or in a [database field](../Develop/field-properties.md#class).|yes (class functions)|A **Class** is used to declare and configure the class [constructor](./classes.md#class-constructor), [properties](./classes.md#property), and [functions](./classes.md#function) of objects. See [**Classes**](classes.md) |


