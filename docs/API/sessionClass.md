---
id: sessionClass
title: Session
---

Session objects are returned by the `Session` command, when scalable sessions are enabled in your project. A Session object is automatically created and maintained by the 4D web server to control the browsing session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between user sessions, and launch session-related preemptive processes.


## Summary


||
|---|
|[<!-- INCLUDE #classClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.name.Summary -->|
|[<!-- INCLUDE #classClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.new().Summary --> |
|[<!-- INCLUDE #classClass.superclass.Syntax -->](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #classClass.superclass.Summary --> |



---

<!-- REF sessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R6|Added|

</details>

<!-- REF #sessionClass.clearPrivileges().Syntax -->
**.clearPrivileges()**♠<!-- END REF -->

<!-- REF #classClass.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Class|<-|New object of the class|
<!-- END REF -->



<!-- REF #sessionClass.clearPrivileges().Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #sessionClass.clearPrivileges().Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**. 

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


<!-- END REF -->

---

<!-- REF sessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

<!-- REF #classClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #classClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**. 

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

<!-- END REF -->


---

<!-- REF sessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|
</details>

<!-- REF #classClass.new().Syntax -->
**.new()** : 4D.Class<!-- END REF -->

<!-- REF #classClass.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Class|<-|New object of the class|
<!-- END REF -->


#### Description

The `.new()` function <!-- REF #classClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](Concepts/classes.md#cs). 

If it is called on a non-existing class, an error is returned.


#### Example

To create a new instance of the Person class:

```4d
var $person : cs.Person  
$person:=cs.Person.new() //create the new instance  
//$Person contains functions of the class
```

<!-- END REF -->

---

<!-- REF sessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

<!-- REF #classClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #classClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**. 

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


<!-- END REF -->

---

<!-- REF sessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

<!-- REF #classClass.name.Syntax -->
**.name** : Text<!-- END REF -->

#### Description

The `.name` property <!-- REF #classClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. Class names are case sensitive.  

This property is **read-only**. 

<!-- END REF -->

---

<!-- REF sessionClass.timeout.Desc -->
## .timeout

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

<!-- REF #classClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #classClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**. 

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

<!-- END REF -->

---

<!-- REF sessionClass.userName.Desc -->
## .userName

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

<!-- REF #classClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #classClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**. 

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

<!-- END REF -->
