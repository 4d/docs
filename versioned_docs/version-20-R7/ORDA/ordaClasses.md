---
id: ordaClasses
title: Data Model Classes
---



ORDA allows you to create high-level class functions above the data model. This allows you to write business-oriented code and "publish" it just like an API. Datastore, dataclasses, entity selections, and entities are all available as class objects that can contain functions.

For example, you could create a `getNextWithHigherSalary()` function in the `EmployeeEntity` class to return employees with a salary higher than the selected one. It would be as simple as calling:

```4d
$nextHigh:=ds.Employee.get(1).getNextWithHigherSalary()
```

Developers can not only use these functions in local datastores, but also in client/server and remote architectures:

```4d
 //$cityManager is the reference of a remote datastore
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Thanks to this feature, the entire business logic of your 4D application can be stored as a independent layer so that it can be easily maintained and reused with a high level of security:

- You can "hide" the overall complexity of the underlying physical structure and only expose understandable and ready-to-use functions.

- If the physical structure evolves, you can simply adapt function code and client applications will continue to call them transparently.

- By default, all of your data model class functions (including [computed attribute functions](#computed-attributes-1)) and [alias attributes](#alias-attributes-1) are **not exposed** to remote applications and cannot be called from REST requests. You must explicitly declare each public function and alias with the [`exposed`](#exposed-vs-non-exposed-functions) keyword.

![](../assets/en/ORDA/api.png)


In addition, 4D [automatically pre-creates](#creating-classes) the classes for each available data model object.


## Architecture

ORDA provides **generic classes** exposed through the **`4D`** [class store](Concepts/classes.md#class-stores), as well as **user classes** (extending generic classes) exposed in the **`cs`** [class store](Concepts/classes.md#class-stores):

![](../assets/en/ORDA/ClassDiagramImage.png)

All ORDA data model classes are exposed as properties of the **`cs`** class store. The following ORDA classes are available:

|Class|Example name|Instantiated by|
|---|---|---|
|cs.DataStore|cs.DataStore|[`ds`](commands/ds.md) command|
|cs.*DataClassName*|cs.Employee|[`dataStore.DataClassName`](API/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`|
|cs.*DataClassName*Entity|cs.EmployeeEntity|[`dataClass.get()`](API/DataClassClass.md#get), [`dataClass.new()`](API/DataClassClass.md#new), [`entitySelection.first()`](API/EntitySelectionClass.md#first), [`entitySelection.last()`](API/EntitySelectionClass.md#last), [`entity.previous()`](API/EntityClass.md#previous), [`entity.next()`](API/EntityClass.md#next), [`entity.first()`](API/EntityClass.md#first), [`entity.last()`](API/EntityClass.md#last), [`entity.clone()`](API/EntityClass.md#clone)|
|cs.*DataClassName*Selection|cs.EmployeeSelection|[`dataClass.query()`](API/DataClassClass.md#query), [`entitySelection.query()`](API/EntitySelectionClass.md#query), [`dataClass.all()`](API/DataClassClass.md#all), [`dataClass.fromCollection()`](API/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](API/DataClassClass.md#newselection), [`entitySelection.drop()`](API/EntitySelectionClass.md#drop), [`entity.getSelection()`](API/EntityClass.md#getselection), [`entitySelection.and()`](API/EntitySelectionClass.md#and), [`entitySelection.minus()`](API/EntitySelectionClass.md#minus), [`entitySelection.or()`](API/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](API/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](API/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](API/EntitySelectionClass.md#slice), `Create entity selection`|

> ORDA user classes are stored as regular class files (.4dm) in the Classes subfolder of the project [(see below)](#class-files).  

Also, object instances from ORDA data model user classes benefit from their parent's properties and functions:

- a Datastore class object can call functions from the [ORDA Datastore generic class](API/DataStoreClass.md).
- a Dataclass class object can call functions from the [ORDA Dataclass generic class](API/DataClassClass.md).
- an Entity selection class object can call functions from the [ORDA Entity selection generic class](API/EntitySelectionClass.md).
- an Entity class object can call functions from the [ORDA Entity generic class](API/EntityClass.md).



## Class Description

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R4|Alias attributes in the Entity Class
|19 R3|Computed attributes in the Entity Class
|18 R5|Data model class functions are not exposed to REST by default. New `exposed` and `local` keywords.
</details>


### DataStore Class


A 4D database exposes its own DataStore class in the `cs` class store.

- **Extends**: 4D.DataStoreImplementation
- **Class name**: cs.DataStore

You can create functions in the DataStore class that will be available through the `ds` object.



#### Example

```4d  
// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="Database exposing employees and their companies"
```


This function can then be called:

```4d
$desc:=ds.getDesc() //"Database exposing..."
```



### DataClass Class

Each table exposed with ORDA offers a DataClass class in the `cs` class store.

- **Extends**: 4D.DataClass
- **Class name**: cs.*DataClassName* (where *DataClassName* is the table name)
- **Example name**: cs.Employee



#### Example

```4D
// cs.Company class


Class extends DataClass

// Returns companies whose revenue is over the average
// Returns an entity selection related to the Company DataClass

Function GetBestOnes()
	$sel:=This.query("revenues >= :1";This.all().average("revenues"));
	$0:=$sel
```

Then you can get an entity selection of the "best" companies by executing:


```4d
	var $best : cs.CompanySelection
	$best:=ds.Company.GetBestOnes()
```

:::info

[Computed attributes](#computed-attributes) are defined in the [Entity Class](#entity-class).

:::

#### Example with a remote datastore

The following *City* catalog is exposed in a remote datastore (partial view):

![](../assets/en/ORDA/Orda_example.png)

The `City Class` provides an API:

```4d  
// cs.City class

Class extends DataClass

Function getCityName()
	var $1; $zipcode : Integer
	var $zip : 4D.Entity
	var $0 : Text

	$zipcode:=$1
	$zip:=ds.ZipCode.get($zipcode)
	$0:=""

	If ($zip#Null)
		$0:=$zip.city.name
	End if
```

The client application opens a session on the remote datastore:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

Then a client application can use the API to get the city matching a zip code (for example) from a form:

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```


### EntitySelection Class

Each table exposed with ORDA offers an EntitySelection class in the `cs` class store.

- **Extends**: 4D.EntitySelection
- **Class name**: *DataClassName*Selection (where *DataClassName* is the table name)
- **Example name**: cs.EmployeeSelection


#### Example

```4d
// cs.EmployeeSelection class


Class extends EntitySelection

//Extract the employees with a salary greater than the average from this entity selection

Function withSalaryGreaterThanAverage() : cs.EmployeeSelection
	return This.query("salary > :1";This.average("salary")).orderBy("salary")

```

Then you can get employees with a salary greater than the average in any entity selection by executing:

```4d
$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

:::info

[Restricted entity selection filters](entities.md#restricting-entity-selections) are defined in the [Dataclass Class](#dataclass-class).

:::


### Entity Class


Each table exposed with ORDA offers an Entity class in the `cs` class store.

- **Extends**: 4D.Entity
- **Class name**: *DataClassName*Entity (where *DataClassName* is the table name)
- **Example name**: cs.CityEntity

#### Computed attributes

Entity classes allow you to define **computed attributes** using specific keywords:

- `Function get` *attributeName*
- `Function set` *attributeName*
- `Function query` *attributeName*
- `Function orderBy` *attributeName*

For information, please refer to the [Computed attributes](#computed-attributes-1) section.

#### Alias attributes

Entity classes allow you to define **alias attributes**, usually over related attributes, using the `Alias` keyword:

`Alias` *attributeName* *targetPath*

For information, please refer to the [Alias attributes](#alias-attributes-1) section.


#### Example

```4d
// cs.CityEntity class

Class extends Entity

Function getPopulation() : Integer
    return This.zips.sum("population")


Function isBigCity(): Boolean
// The getPopulation() function is usable inside the class
	return This.getPopulation()>50000
```

Then you can call this code:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
	ALERT($city.name + " is a big city")
End if
```

### Specific rules

When creating or editing data model classes, you must pay attention to the following rules:

- Since they are used to define automatic DataClass class names in the **cs** [class store](Concepts/classes.md#class-stores), 4D tables must be named in order to avoid any conflict in the **cs** namespace. In particular:
	- Do not give the same name to a 4D table and to a [user class name](Concepts/classes.md#class-names). If such a case occurs, the constructor of the user class becomes unusable (a warning is returned by the compiler).
	- Do not use a reserved name for a 4D table (e.g., "DataClass").

- When defining a class, make sure the [`Class extends`](Concepts/classes.md#class-extends-classnameclass) statement exactly matches the parent class name (remember that they're case sensitive). For example, `Class extends EntitySelection` for an entity selection class.

- You cannot instantiate a data model class object with the `new()` keyword (an error is returned). You must use a regular method as listed in the [`Instantiated by` column of the ORDA class table](#architecture).

- You cannot override a native ORDA class function from the **`4D`** [class store](Concepts/classes.md#class-stores) with a data model user class function.


### Preemptive execution

When compiled, data model class functions are executed:

- in **preemptive or cooperative processes** (depending on the calling process) in single-user applications,
- in **preemptive processes** in client/server applications (except if the [`local`](#local-functions) keyword is used, in which case it depends on the calling process like in single-user).

If your project is designed to run in client/server, make sure your data model class function code is thread-safe. If thread-unsafe code is called, an error will be thrown at runtime (no error will be thrown at compilation time since cooperative execution is supported in single-user applications).


## Computed attributes


### Overview

A computed attribute is a dataclass attribute with a data type that masks a calculation. [Standard 4D classes](Concepts/classes.md) implement the concept of computed properties with `get` (*getter*) and `set` (*setter*) [accessor functions](Concepts/classes.md#function-get-and-function-set). ORDA dataclass attributes benefit from this feature and extend it with two additional functions: `query` and `orderBy`.

At the very minimum, a computed attribute requires a `get` function that describes how its value will be calculated. When a *getter* function is supplied for an attribute, 4D does not create the underlying storage space in the datastore but instead substitutes the function's code each time the attribute is accessed. If the attribute is not accessed, the code never executes.

A computed attribute can also implement a `set` function, which executes whenever a value is assigned to the attribute. The *setter* function describes what to do with the assigned value, usually redirecting it to one or more storage attributes or in some cases other entities.

Just like storage attributes, computed attributes may be included in **queries**. By default, when a computed attribute is used in a ORDA query, the attribute is calculated once per entity examined. In some cases this is sufficient. However for better performance, especially in client/server, computed attributes can implement a `query` function that relies on actual dataclass attributes and benefits from their indexes.

Similarly, computed attributes can be included in **sorts**. When a computed attribute is used in a ORDA sort, the attribute is calculated once per entity examined. Just like in queries, computed attributes can implement an `orderBy` function that substitutes other attributes during the sort, thus increasing performance.


### How to define computed attributes

You create a computed attribute by defining a `get` accessor in the [**entity class**](#entity-class) of the dataclass. The computed attribute will be automatically available in the dataclass attributes and in the entity attributes.

Other computed attribute functions (`set`, `query`, and `orderBy`) can also be defined in the entity class. They are optional.

Within computed attribute functions, [`This`](Concepts/classes.md#this) designates the entity. Computed attributes can be used and handled as any dataclass attribute, i.e. they will be processed by [entity class](API/EntityClass.md) or [entity selection class](API/EntitySelectionClass.md) functions.

> ORDA computed attributes are not [**exposed**](#exposed-vs-non-exposed-functions) by default. You expose a computed attribute by adding the `exposed` keyword to the **get function** definition.

> **get and set functions** can have the [**local**](#local-functions) property to optimize client/server processing.


### `Function get <attributeName>`

#### Syntax

```4d
{local} {exposed} Function get <attributeName>({$event : Object}) -> $result : type
// code
```
The *getter* function is mandatory to declare the *attributeName* computed attribute. Whenever the *attributeName* is accessed, 4D evaluates the `Function get` code and returns the *$result* value.

> A computed attribute can use the value of other computed attribute(s). Recursive calls generate errors.

The *getter* function defines the data type of the computed attribute thanks to the *$result* parameter. The following resulting types are allowed:

- Scalar (text, boolean, date, time, number)
- Object
- Image
- BLOB
- Entity (i.e. cs.EmployeeEntity)
- Entity selection (i.e. cs.EmployeeSelection)

The *$event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|Text|Computed attribute name|
|dataClassName|Text|Dataclass name|
|kind|Text|"get"|
|result|Variant|Optional. Add this property with Null value if you want a scalar attribute to return Null|


#### Examples

- *fullName* computed attribute:

```4d
Function get fullName($event : Object)-> $fullName : Text

  Case of 	
	: (This.firstName=Null) & (This.lastName=Null)
		$event.result:=Null //use result to return Null
	: (This.firstName=Null)
		$fullName:=This.lastName
	: (This.lastName=Null)
		$fullName:=This.firstName
	Else
		$fullName:=This.firstName+" "+This.lastName
	End case
```

- A computed attribute can be based upon an entity related attribute:

```4d
Function get bigBoss($event : Object)-> $result: cs.EmployeeEntity
	$result:=This.manager.manager

```

- A computed attribute can be based upon an entity selection related attribute:

```4d
Function get coWorkers($event : Object)-> $result: cs.EmployeeSelection
    If (This.manager.manager=Null)
        $result:=ds.Employee.newSelection()
    Else
        $result:=This.manager.directReports.minus(this)
    End if
```

### `Function set <attributeName>`


#### Syntax

```4d

{local} Function set <attributeName>($value : type {; $event : Object})
// code
```

The *setter* function executes whenever a value is assigned to the attribute. This function usually processes the input value(s) and the result is dispatched between one or more other attributes.

The *$value* parameter receives the value assigned to the attribute.

The *$event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|Text|Computed attribute name|
|dataClassName|Text|Dataclass name|
|kind|Text|"set"|
|value|Variant|Value to be handled by the computed attribute|

#### Example

```4d
Function set fullName($value : Text; $event : Object)
	var $p : Integer
    $p:=Position(" "; $value) 		
	This.firstname:=Substring($value; 1; $p-1)  // "" if $p<0
	This.lastname:=Substring($value; $p+1)
```



### `Function query <attributeName>`

#### Syntax

```4d
Function query <attributeName>($event : Object)
Function query <attributeName>($event : Object) -> $result : Text
Function query <attributeName>($event : Object) -> $result : Object
// code
```

This function supports three syntaxes:

- With the first syntax, you handle the whole query through the `$event.result` object property.
- With the second and third syntaxes, the function returns a value in *$result*:
	- If *$result* is a Text, it must be a valid query string
	- If *$result* is an Object, it must contain two properties:

	|Property|Type|Description|
	|---|---|---|
	|$result.query|Text|Valid query string with placeholders (:1, :2, etc.)|
	|$result.parameters|Collection|values for placeholders|

The `query` function executes whenever a query using the computed attribute is launched. It is useful to customize and optimize queries by relying on indexed attributes. When the `query` function is not implemented for a computed attribute, the search is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

> The following features are not supported:
> - calling a `query` function on computed attributes of type Entity or Entity selection,
> - using the `order by` keyword in the resulting query string.

The *$event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|Text|Computed attribute name|
|dataClassName|Text|Dataclass name|
|kind|Text|"query"|
|value|Variant|Value to be handled by the computed attribute|
|operator|Text|Query operator (see also the [`query` class function](API/DataClassClass.md#query)). Possible values:<li>== (equal to, @ is wildcard)</li><li>=== (equal to, @ is not wildcard)</li><li>!= (not equal to, @ is wildcard)</li><li>!== (not equal to, @ is not wildcard)</li><li>< (less than)</li><li><= (less than or equal to)</li><li>> (greater than)</li><li>>= (greater than or equal to)</li><li>IN (included in)</li><li>% (contains keyword)</li>|
|result|Variant|Value to be handled by the computed attribute. Pass `Null` in this property if you want to let 4D execute the default query (always sequential for computed attributes).|

> If the function returns a value in *$result* and another value is assigned to the `$event.result` property, the priority is given to `$event.result`.

#### Examples

- Query on the *fullName* computed attribute.

```4d
Function query fullName($event : Object)->$result : Object

	var $fullname; $firstname; $lastname; $query : Text
	var $operator : Text
	var $p : Integer
	var $parameters : Collection

	$operator:=$event.operator
	$fullname:=$event.value

	$p:=Position(" "; $fullname)
	If ($p>0)
		$firstname:=Substring($fullname; 1; $p-1)+"@"
		$lastname:=Substring($fullname; $p+1)+"@"
		$parameters:=New collection($firstname; $lastname) // two items collection
	Else
		$fullname:=$fullname+"@"
		$parameters:=New collection($fullname) // single item collection
	End if

	Case of
	: ($operator="==") | ($operator="===")
		If ($p>0)
			$query:="(firstName = :1 and lastName = :2) or (firstName = :2 and lastName = :1)"
		Else
			$query:="firstName = :1 or lastName = :1"
		End if
	: ($operator="!=")
		If ($p>0)
			$query:="firstName != :1 and lastName != :2 and firstName != :2 and lastName != :1"
		Else
			$query:="firstName != :1 and lastName != :1"
		End if
	End case

	$result:=New object("query"; $query; "parameters"; $parameters)
```

> Keep in mind that using placeholders in queries based upon user text input is recommended for security reasons (see [`query()` description](API/DataClassClass.md#query)).

Calling code, for example:

```4d
$emps:=ds.Employee.query("fullName = :1"; "Flora Pionsin")
```

- This function handles queries on the *age* computed attribute and returns an object with parameters:

```4d
Function query age($event : Object)->$result : Object

	var $operator : Text
	var $age : Integer
	var $_ages : Collection

	$operator:=$event.operator

	$age:=Num($event.value)  // integer
	$d1:=Add to date(Current date; -$age-1; 0; 0)
	$d2:=Add to date($d1; 1; 0; 0)
	$parameters:=New collection($d1; $d2)

	Case of

		: ($operator="==")
			$query:="birthday > :1 and birthday <= :2"  // after d1 and before or egal d2

		: ($operator="===")

			$query:="birthday = :2"  // d2 = second calculated date (= birthday date)

		: ($operator=">=")
			$query:="birthday <= :2"

			//... other operators			


	End case


	If (Undefined($event.result))
		$result:=New object
		$result.query:=$query
		$result.parameters:=$parameters
	End if

```  

Calling code, for example:

```4d
// people aged between 20 and 21 years (-1 day)
$twenty:=people.query("age = 20")  // calls the "==" case

// people aged 20 years today
$twentyToday:=people.query("age === 20") // equivalent to people.query("age is 20")

```


### `Function orderBy <attributeName>`

#### Syntax

```4d
Function orderBy <attributeName>($event : Object)
Function orderBy <attributeName>($event : Object)-> $result : Text

// code
```

The `orderBy` function executes whenever the computed attribute needs to be ordered. It allows sorting the computed attribute. For example, you can sort *fullName* on first names then last names, or conversely.
When the `orderBy` function is not implemented for a computed attribute, the sort is always sequential (based upon the evaluation of all values using the `get <AttributeName>` function).

> Calling an `orderBy` function on computed attributes of type Entity class or Entity selection class **is not supported**.

The *$event* parameter contains the following properties:

|Property|Type|Description|
|---|---|---|
|attributeName|Text|Computed attribute name|
|dataClassName|Text|Dataclass name|
|kind|Text|"orderBy"|
|value|Variant|Value to be handled by the computed attribute|
|operator|Text|"desc" or "asc" (default)|
|descending|Boolean|`true` for descending order, `false` for ascending order|
|result|Variant|Value to be handled by the computed attribute. Pass `Null` if you want to let 4D execute the default sort.|

> You can use either the `operator` or the `descending` property. It is essentially a matter of programming style (see examples).   

You can return the `orderBy` string either in the `$event.result` object property or in the *$result* function result. If the function returns a value in *$result* and another value is assigned to the `$event.result` property, the priority is given to `$event.result`.


#### Example

You can write conditional code:

```4d
Function orderBy fullName($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="firstName desc, lastName desc"
    Else
        $result:="firstName, lastName"
    End if
```

You can also write compact code:

```4d
Function orderBy fullName($event : Object)-> $result : Text
	$result:="firstName "+$event.operator+", "lastName "+$event.operator

```

Conditional code is necessary in some cases:

```4d
Function orderBy age($event : Object)-> $result : Text

    If ($event.descending=True)
        $result:="birthday asc"
    Else
        $result:="birthday desc"
    End if

```


## Alias attributes

### Overview

An **alias** attribute is built above another attribute of the data model, named **target** attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute. You can define as many alias attributes as you want in a dataclass.

Alias attributes are particularly useful to handle N to N relations. They bring more readability and simplicity in the code and in queries by allowing to rely on business concepts instead of implementation details.

### How to define alias attributes

You create an alias attribute in a dataclass by using the `Alias` keyword in the [**entity class**](#entity-class) of the dataclass.


### `Alias <attributeName> <targetPath>`


#### Syntax

```
{exposed} Alias <attributeName> <targetPath>
```

*attributeName* must comply with [standard rules for property names](../Concepts/identifiers.md#object-properties).

*targetPath* is an attribute path containing one or more levels, such as "employee.company.name". If the target attribute belongs to the same dataclass, *targetPath* is the attribute name.

An alias can be used as a part of a path of another alias.

A [computed attribute](#computed-attributes-1) can be used in an alias path, but only as the last level of the path, otherwise, an error is returned. For example, if "fullName" is a computed attribute, an alias with path "employee.fullName" is valid.

> ORDA alias attributes are **not exposed** by default. You must add the [`exposed`](#exposed-vs-non-exposed-functions) keyword before the `Alias` keyword if you want the alias to be available to remote requests.


### Using alias attributes

Alias attributes are read-only (except when based upon a scalar attribute of the same dataclass, see the last example below). They can be used instead of their target attribute path in class functions such as:

|Function|
|----|
|`dataClass.query()`, `entitySelection.query()`|
|`entity.toObject()`|
|`entitySelection.toCollection()`|
|`entitySelection.extract()`|
|`entitySelection.orderBy()`|
|`entitySelection.orderByFormula()`|
|`entitySelection.average()`|
|`entitySelection.count()`|
|`entitySelection.distinct()`|
|`entitySelection.sum()`|
|`entitySelection.min()`|
|`entitySelection.max()`|
|`entity.diff()`|
|`entity.touchedAttributes()`|

> Keep in mind that alias attributes are calculated on the server. In remote configurations, updating alias attributes in entities requires that entities are reloaded from the server.

### Alias properties

Alias attribute [`kind`](../API/DataClassClass.md#attributename) is "alias".  

An alias attribute inherits its data [`type`](../API/DataClassClass.md#attributename) property from the target attribute:

- if the target attribute [`kind`](../API/DataClassClass.md#attributename) is "storage", the alias data type is of the same type,
- if the target attribute [`kind`](../API/DataClassClass.md#attributename) is "relatedEntity" or "relatedEntities", the alias data type is of the `4D.Entity` or `4D.EntitySelection` type ("*classname*Entity" or "*classname*Selection").

Alias attributes based upon relations have a specific [`path`](../API/DataClassClass.md#attributename) property, containing the path of their target attributes. Alias attributes based upon attributes of the same dataclass have the same properties as their target attributes (and no `path` property).


### Examples

Considering the following model:

![](../assets/en/ORDA/alias1.png)

In the Teacher dataclass, an alias attribute returns all students of a teacher:

```4d
// cs.TeacherEntity class

Class extends Entity

Alias students courses.student //relatedEntities
```

In the Student dataclass, an alias attribute returns all teachers of a student:


```4d
// cs.StudentEntity class

Class extends Entity

Alias teachers courses.teacher //relatedEntities
```

In the Course dataclass:

- an alias attribute returns another label for the "name" attribute
- an alias attribute returns the teacher name
- an alias attribute returns the student name


```4d
// cs.CourseEntity class

Class extends Entity

Exposed Alias courseName name //scalar
Exposed Alias teacherName teacher.name //scalar value
Exposed Alias studentName student.name //scalar value

```

You can then execute the following queries:

```4d
// Find course named "Archaeology"
ds.Course.query("courseName = :1";"Archaeology")

// Find courses given by the professor Smith
ds.Course.query("teacherName = :1";"Smith")

// Find courses where Student "Martin" assists
ds.Course.query("studentName = :1";"Martin")

// Find students who have M. Smith as teacher
ds.Student.query("teachers.name = :1";"Smith")

// Find teachers who have M. Martin as Student
ds.Teacher.query("students.name = :1";"Martin")
// Note that this very simple query string processes a complex
// query including a double join, as you can see in the queryPlan:   
// "Join on Table : Course  :  Teacher.ID = Course.teacherID,    
//  subquery:[ Join on Table : Student  :  Course.studentID = Student.ID,
//  subquery:[ Student.name === Martin]]"
```


You can also edit the value of the *courseName* alias:

```4d
// Rename a course using its alias attribute
$arch:=ds.Course.query("courseName = :1";"Archaeology")
$arch.courseName:="Archaeology II"
$arch.save() //courseName and name are "Archaeology II"
```


## Exposed vs non-exposed functions

For security reasons, all of your data model class functions and alias attributes are **not exposed** (i.e., private) by default to remote requests.

Remote requests include:

- Requests sent by remote 4D applications connected through `Open datastore`
- REST requests

> Regular 4D client/server requests are not impacted. Data model class functions are always available in this architecture.

A function that is not exposed is not available on remote applications and cannot be called on any object instance from a REST request. If a remote application tries to access a non-exposed function, the "-10729 - Unknown member method" error is returned.

To allow a data model class function to be called by a remote request, you must explicitly declare it using the `exposed` keyword. The formal syntax is:

```4d  
// declare an exposed function
exposed Function <functionName>   
```

> The `exposed` keyword can only be used with Data model class functions. If used with a [regular user class](Concepts/classes.md) function, it is ignored and an error is returned by the compiler.

### Example

You want an exposed function to use a private function in a dataclass class:

```4d
Class extends DataClass

//Public function
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//Not exposed (private) function
Function computeIDNumber()-> $id : Integer
//compute a new ID number
$id:=...

```

When the code is called:

```4d
var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$id:=$remoteDS.Schools.computeIDNumber() // Error "Unknown member method"
```

## onHttpGet keyword

Use the `onHttpGet` keyword to declare functions that can be called through HTTP requests using the `GET` verb. Such functions can return any web contents, for example using the [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) class. 

The `onHttpGet` keyword is available with:

- ORDA Data model class functions
- [Singletons class functions](../Concepts/classes.md#singleton-classes)

The formal syntax is:

```4d  
// declare an onHttpGet function
exposed onHttpGet Function <functionName>(params) : result
```

:::info

The `exposed` keyword must also be added in this case, otherwise an error will be generated.

:::

:::caution

As this type of call is an easy offered action, the developer must ensure no sensitive action is done in such functions.

:::

### params

A function with `onHttpGet` keyword accepts [parameters](../Concepts/parameters.md).

In the HTTP GET request, parameters must be passed directly in the URL and declared using the `$params` keyword (they must be enclosed in a collection). 

```
IP:port/rest/<dataclass>/functionName?$params='[<params>]'
```

See the [Parameters](../REST/classFunctions#parameters) section in the REST server documentation. 



### result

A function with `onHttpGet` keyword can return any value of a supported type (same as for REST [parameters](../REST/classFunctions#parameters)).

:::info

You can return a value of the [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) class type to benefit from properties and functions to set the header, the body, and the status of the answer. 

:::



### Example

You have defined the following function:

```4d
Class extends DataClass

exposed onHTTPGet Function getThumbnail($name : Text; $width : Integer; $height : Integer) : 4D.OutgoingMessage
	
	var $file := File("/RESOURCES/Images/"+$name+".jpg")
	var $image; $thumbnail : Picture
	var $response := 4D.OutgoingMessage.new()
	
	READ PICTURE FILE($file.platformPath; $image)
	CREATE THUMBNAIL($image; $thumbnail; $width; $height; Scaled to fit)
	$response.setBody($thumbnail)	
	$response.setHeader("Content-Type"; "image/jpeg")
	return $response
```

It can be called by the following HTTP GET request:

```
IP:port/rest/Products/getThumbnail?$params='["Yellow Pack",200,200]'
```


## Local functions

By default in client/server architecture, ORDA data model functions are executed **on the server**. It usually provides the best performance since only the function request and the result are sent over the network.

However, it could happen that a function is fully executable on the client side (e.g., when it processes data that's already in the local cache). In this case, you can save requests to the server and thus, enhance the application performance by inserting the `local` keyword. The formal syntax is:

```4d  
// declare a function to execute locally in client/server
local Function <functionName>   
```

With this keyword, the function will always be executed on the client side.

> The `local` keyword can only be used with data model class functions. If used with a [regular user class](Concepts/classes.md) function, it is ignored and an error is returned by the compiler.

Note that the function will work even if it eventually requires to access the server (for example if the ORDA cache is expired). However, it is highly recommended to make sure that the local function does not access data on the server, otherwise the local execution could not bring any performance benefit. A local function that generates many requests to the server is less efficient than a function executed on the server that would only return the resulting values. For example, consider the following function on the Schools entity class:

```4d
// Get the youngest students  
// Inappropriate use of local keyword
local Function getYoungest
	var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```
- **without** the `local` keyword, the result is given using a single request
- **with** the `local` keyword, 4 requests are necessary: one to get the Schools entity students, one for the `query()`, one for the `orderBy()`, and one for the `slice()`. In this example, using the `local` keyword is inappropriate.


### Examples

#### Calculating age

Given an entity with a *birthDate* attribute, we want to define an `age()` function that would be called in a list box. This function can be executed on the client, which avoids triggering a request to the server for each line of the list box.

On the *StudentsEntity* class:

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else
    $age:=Null
End if
```

#### Checking attributes

We want to check the consistency of the attributes of an entity loaded on the client and updated by the user before requesting the server to save them.

On the *StudentsEntity* class, the local `checkData()` function checks the Student's age:

```4d
Class extends Entity

local Function checkData() -> $status : Object

$status:=New object("success"; True)
Case of
    : (This.age()=Null)
        $status.success:=False
        $status.statusText:="The birthdate is missing"

    :((This.age() <15) | (This.age()>30) )
        $status.success:=False
        $status.statusText:="The student must be between 15 and 30 - This one is "+String(This.age())
End case
```

Calling code:

```4d
var $status : Object

//Form.student is loaded with all its attributes and updated on a Form
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // call the server
End if
```



## Support in 4D IDE


### Class files

An ORDA data model user class is defined by adding, at the [same location as regular class files](Concepts/classes.md#class-files) (*i.e.* in the `/Sources/Classes` folder of the project folder), a .4dm file with the name of the class. For example, an entity class for the `Utilities` dataclass will be defined through a `UtilitiesEntity.4dm` file.


### Creating classes

4D automatically pre-creates empty classes in memory for each available data model object.

![](../assets/en/ORDA/ORDA_Classes-3.png)


> By default, empty ORDA classes are not displayed in the Explorer. To show them you need to select **Show all data classes** from the Explorer's options menu:
![](../assets/en/ORDA/showClass.png)

ORDA user classes have a different icon from regular classes. Empty classes are dimmed:


![](../assets/en/ORDA/classORDA2.png)

To create an ORDA class file, you just need to double-click on the corresponding predefined class in the Explorer. 4D creates the class file and add the `extends` code. For example, for an Entity class:

```
Class extends Entity
```

Once a class is defined, its name is no longer dimmed in the Explorer.


### Editing classes

To open a defined ORDA class in the 4D Code Editor, select or double-click on an ORDA class name and use **Edit...** from the contextual menu/options menu of the Explorer window:

![](../assets/en/ORDA/classORDA4.png)

For ORDA classes based upon the local datastore (`ds`), you can directly access the class code from the 4D Structure window:

![](../assets/en/ORDA/classORDA5.png)


### Code Editor

In the 4D Code Editor, variables typed as an ORDA class automatically benefit from autocompletion features. Example with an Entity class variable:

![](../assets/en/ORDA/AutoCompletionEntity.png)
