---
id: ClassClass
title: Class
---


When a user class is [defined](Concepts/classes.md#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of "Class" class, which has properties and a function.



### Summary


||
|---|
|[**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the name of the `4D.Class` object|
|[**.new**( *param* : any { *;...paramN* } ) : 4D.Class](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates and returns a `cs.className` object which is a new instance of the class on which it is called |
|[**.superclass** : 4D.Class](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the parent class of the class |



## .name   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

**.name** : Text
#### Description

The `.name` property contains the name of the `4D.Class` object. Class names are case sensitive.  

This property is **read-only**. 




## .new()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|
</details>

**.new**( *param* : any { *;...paramN* } ) : 4D.Class
|Parameter|Type||Description|
|---------|--- |:---:|------|
|param|any|->|Parameter(s) to pass to the constructor function|
|Result|4D.Class|<-|New object of the class|


#### Description

The `.new()` function creates and returns a `cs.className` object which is a new instance of the class on which it is called. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs). 

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the className class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

If `.new()` is called on a non-existing class, an error is returned.

#### Examples

To create a new instance of the Person class:

```4d
var $person : cs.Person  
$person:=cs.Person.new() //create the new instance  
//$person contains functions of the class
```

To create a new instance of the Person class with parameters:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
	This.firstName:=$firstname
	This.lastName:=$lastname
	This.age:=$age
```

```4d
//In a method
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
//$person.firstName = "John"
//$person.lastName = "Doe"
//$person.age = 40
```





## .superclass   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

**.superclass** : 4D.Class
#### Description

The `.superclass` property returns the parent class of the class. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**. 

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) keyword.

This property is **read-only**. 

#### Examples

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
$sup:=cs.MyFile.superclass //File 

```



**See also:** [Super](Concepts/classes.md#super)

<style> h2 { background: #d9ebff;}</style>
