---
id: ClassClass
title: Class
---


When a user class is [defined](Concepts/classes.md#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of "Class" class, which has properties and a function.



### Summary


||
|---|
|[<!-- INCLUDE #ClassClass.isSessionSingleton.Syntax -->](#issessionsingleton)<br/><!-- INCLUDE #ClassClass.isSessionSingleton.Summary -->|
|[<!-- INCLUDE #ClassClass.isShared.Syntax -->](#isshared)<br/><!-- INCLUDE #ClassClass.isShared.Summary -->|
|[<!-- INCLUDE #ClassClass.isSingleton.Syntax -->](#issingleton)<br/><!-- INCLUDE #ClassClass.isSingleton.Summary -->|
|[<!-- INCLUDE #ClassClass.me.Syntax -->](#me)<br/><!-- INCLUDE #ClassClass.me.Summary -->|
|[<!-- INCLUDE #ClassClass.name.Syntax -->](#name)<br/><!-- INCLUDE #ClassClass.name.Summary -->|
|[<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #ClassClass.new().Summary --> |
|[<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)<br/><!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.isSessionSingleton.Desc -->
## .isSessionSingleton   

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R7|Added|

</details>

<!-- REF #ClassClass.isSessionSingleton.Syntax -->**.isSessionSingleton** : Boolean<!-- END REF -->

#### Description

The `.isSessionSingleton` property <!-- REF #ClassClass.isSessionSingleton.Summary -->returns `true` if the user class has been defined as a [session singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, and `false` otherwise.   

This property is **read-only**.

<!-- END REF -->



<!-- REF ClassClass.isShared.Desc -->
## .isShared   

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Added|

</details>

<!-- REF #ClassClass.isShared.Syntax -->**.isShared** : Boolean<!-- END REF -->

#### Description

The `.isShared` property <!-- REF #ClassClass.isShared.Summary -->returns `true` if the user class has been defined as [shared class](../Concepts/classes.md#shared-classes)<!-- END REF -->, and `false` otherwise.   

This property is **read-only**.

<!-- END REF -->


<!-- REF ClassClass.isSingleton.Desc -->
## .isSingleton   

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Added|

</details>

<!-- REF #ClassClass.isSingleton.Syntax -->**.isSingleton** : Boolean<!-- END REF -->

#### Description

The `.isSingleton` property <!-- REF #ClassClass.isSingleton.Summary -->returns `true` if the user class has been defined as a [singleton class](../Concepts/classes.md#singleton-classes)<!-- END REF -->, and `false` otherwise.   

This property is **read-only**.

<!-- END REF -->


<!-- REF ClassClass.me.Desc -->
## .me   

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R5|Added|

</details>

<!-- REF #ClassClass.me.Syntax -->**.me** : 4D.Class<!-- END REF -->

#### Description

The `.me` property <!-- REF #ClassClass.me.Summary -->returns the singleton instance of the `cs.className` singleton class<!-- END REF -->. If the singleton class was never instantiated beforehand, this property calls the class constructor without parameters and creates the instance. Otherwise, it returns the existing singleton instance. 

If `cs.className` is not a [singleton class](../Concepts/classes.md#singleton-classes), `.me` is **undefined** by default.   

This property is **read-only**.

<!-- END REF -->


<!-- REF ClassClass.name.Desc -->
## .name   

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R3|Added|

</details>

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Description

The `.name` property <!-- REF #ClassClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. Class names are case sensitive.  

This property is **read-only**.

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R3|Added|

</details>

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->



<!-- REF #ClassClass.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|param|any|->|Parameter(s) to pass to the constructor function|
|Result|4D.Class|<-|New object of the class|
<!-- END REF -->


#### Description

The `.new()` function <!-- REF #ClassClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](Concepts/classes.md#class-constructor) function (if any) in the *className* class definition. Within the constructor function, the [`This`](Concepts/classes.md#this) is bound to the new object being constructed.

:::note Notes

- If `.new()` is called on a [singleton class](../Concepts/classes.md#singleton-classes) that has already been instantiated, the singleton instance is returned, not a new instance.
- If `.new()` is called on a non-existing class, an error is returned.

:::

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


<!-- END REF -->



<!-- REF ClassClass.superclass.Desc -->
## .superclass   

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R3|Added|

</details>

<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

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
<!-- END REF -->
