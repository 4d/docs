---
id: ClassClass
title: Class
---


When a user class is [defined](Concepts/classes.md#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of "Class" class, which has properties and a function.

### Summary

|                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |

<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |

</details>

<!-- REF #ClassClass.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Beschreibung

The `.name` property <!-- REF #ClassClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. .

This property is **read-only**.

<!-- END REF -->

<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |

</details>

<!-- REF #ClassClass.new().Syntax -->

**.new**( *param* : any { *;...paramN* } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->
| Parameter | Typ      |    | Beschreibung                                       |
| --------- | -------- |:--:| -------------------------------------------------- |
| param     | any      | -> | Parameter(s) to pass to the constructor function   |
| Ergebnis  | 4D.Class | <- | New object of the class|<!-- END REF -->

|

#### Beschreibung

The `.new()` function <!-- REF #ClassClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the className class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

If `.new()` is called on a non-existing class, an error is returned.

#### Beispiele

Eine neue Instanz der Klasse Person anlegen:

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

<!-- END REF -->

<!-- REF ClassClass.superclass.Desc -->
## .superclass

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |

</details>

<!-- REF #ClassClass.superclass.Syntax -->

**.superclass** : 4D.Class<!-- END REF -->

#### Beschreibung

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) keyword.

This property is **read-only**.

#### Beispiele

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
$sup:=cs.MyFile.superclass //File

```

**See also:** [Super](Concepts/classes.md#super)
<!-- END REF -->
