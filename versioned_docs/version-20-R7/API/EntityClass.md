---
id: EntityClass
title: Entity
---

An [entity](ORDA/dsMapping.md#entity) is an instance of a [Dataclass](ORDA/dsMapping.md#dataclass), like a record of the table matching the dataclass in its associated datastore. It contains the same attributes as the dataclass as well as the data values and specific properties and functions.

### Summary

||
|---|
|[<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE EntityClass.attributeName.Summary -->|
|[<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)<br/><!-- INCLUDE #EntityClass.clone().Summary -->|
|[<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)<br/><!-- INCLUDE #EntityClass.diff().Summary -->|
|[<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)<br/><!-- INCLUDE #EntityClass.drop().Summary -->|
|[<!-- INCLUDE #EntityClass.first().Syntax -->](#first)<br/><!-- INCLUDE #EntityClass.first().Summary -->|
|[<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)<br/><!-- INCLUDE #EntityClass.fromObject().Summary -->|
|[<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)<br/><!-- INCLUDE #EntityClass.getDataClass().Summary -->|
|[<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)<br/><!-- INCLUDE #EntityClass.getKey().Summary -->|
|[<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)<br/><!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary -->|
|[<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)<br/><!-- INCLUDE #EntityClass.getSelection().Summary -->|
|[<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)<br/><!-- INCLUDE #EntityClass.getStamp().Summary -->|
|[<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #EntityClass.indexOf().Summary -->|
|[<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)<br/><!-- INCLUDE #EntityClass.isNew().Summary -->|
|[<!-- INCLUDE #EntityClass.last().Syntax -->](#last)<br/><!-- INCLUDE #EntityClass.last().Summary -->|
|[<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)<br/><!-- INCLUDE #EntityClass.lock().Summary -->|
|[<!-- INCLUDE #EntityClass.next().Syntax -->](#next)<br/><!-- INCLUDE #EntityClass.next().Summary -->|
|[<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)<br/><!-- INCLUDE #EntityClass.previous().Summary -->|
|[<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)<br/><!-- INCLUDE #EntityClass.reload().Summary -->|
|[<!-- INCLUDE #EntityClass.save().Syntax -->](#save)<br/><!-- INCLUDE #EntityClass.save().Summary -->|
|[<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)<br/><!-- INCLUDE #EntityClass.toObject().Summary -->|
|[<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)<br/><!-- INCLUDE #EntityClass.touched().Summary -->|
|[<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)<br/><!-- INCLUDE #EntityClass.touchedAttributes().Summary -->|
|[<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #EntityClass.unlock().Summary -->|

<!-- REF EntityClass.attributeName.Desc -->
## .*attributeName*

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : any<!-- END REF -->

#### Description

Any dataclass attribute is available as a property of an entity, which <!-- REF EntityClass.attributeName.Summary -->stores the attribute value for the entity<!-- END REF -->.

>Dataclass attributes can also be reached using the alternate syntax with \[ ].

The attribute value type depends on the attribute [kind](DataClassClass.md#attributename) (relation or storage):

* If *attributeName* kind is **storage**:
`.attributeName` returns a value of the same type as *attributeName*.
* If *attributeName* kind is **relatedEntity**:
`.attributeName` returns the related entity. Values of the related entity are directly available through cascading properties, for example "myEntity.employer.employees\[0].lastname".
* If *attributeName* kind is **relatedEntities**:
`.attributeName` returns a new entity selection of related entities. Duplications are removed (an unordered entity selection is returned).

#### Example

```4d
 var $myEntity : cs.EmployeeEntity
 $myEntity:=ds.Employee.new() //Create a new entity
 $myEntity.name:="Dupont" // assign 'Dupont' to the 'name' attribute
 $myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
 $myEntity.save() //save the entity
```

<!-- END REF -->

<!-- REF EntityClass.clone().Desc -->
## .clone()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.clone().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Entity|<-|New entity referencing the record|
<!-- END REF -->

#### Description

The `.clone()` function <!-- REF #EntityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->.

This function allows you to update entities separately. Note however that, for performance reasons, the new entity shares the same reference of object attributes as the cloned entity.

>Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save()`](#save) function is executed.

This function can only be used with entities already saved in the database. It cannot be called on a newly created entity (for which [`.isNew()`](#isnew) returns **True**).

#### Example

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Updates done on $emp are not done on $empCloned

```

<!-- END REF -->

<!-- REF EntityClass.diff().Desc -->
## .diff()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->


<!-- REF #EntityClass.diff().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entityToCompare|4D.Entity|->|Entity to be compared with the original entity|
|attributesToCompare|Collection|-> |Name of attributes to be compared |
|Result|Collection|<-|Differences between the entities|
<!-- END REF -->

#### Description

The `.diff()` function <!-- REF #EntityClass.diff().Summary -->compares the contents of two entities and returns their differences<!-- END REF -->.

In *entityToCompare*, pass the entity to be compared to the original entity.

In *attributesToCompare*, you can designate specific attributes to compare. If provided, the comparison is done only on the specified attributes. If not provided, all differences between the entities are returned.

The differences are returned as a collection of objects whose properties are:

|Property name| Type| Description|
|---|---|---|
|attributeName| Text| Name of the attribute
|value|any - Depends on attribute type |Value of the attribute in the entity|
|otherValue|any - Depends on attribute type|Value of the attribute in *entityToCompare*|

Only attributes with different values are included in the collection. If no differences are found, `.diff()` returns an empty collection.

The function applies for properties whose [kind](DataClassClass.md#attributename) is **storage** or **relatedEntity**. In case a related entity has been updated (meaning the foreign key), the name of the related entity and its primary key name are returned as *attributeName* properties (*value* and *otherValue* are empty for the related entity name).

If one of the compared entities is **Null**, an error is raised.

#### Example 1

```4d
 var $diff1; $diff2 : Collection
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // All differences are returned
 $diff2:=$clone.diff(employee;New collection("firstName";"lastName"))
  // Only differences on firstName and lastName are returned
```

$diff1:

```4d
[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    },
    {
        "attributeName": "salary",
        "value": 66600,
        "otherValue": 500
    }
]
$diff2:

[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    }
]
```

#### Example 2

```4d
 var vCompareResult1; vCompareResult2; vCompareResult3; $attributesToInspect : Collection
 vCompareResult1:=New collection
 vCompareResult2:=New collection
 vCompareResult3:=New collection
 $attributesToInspect:=New collection

 $e1:=ds.Employee.get(636)
 $e2:=ds.Employee.get(636)

 $e1.firstName:=$e1.firstName+" update"
 $e1.lastName:=$e1.lastName+" update"

 $c:=ds.Company.get(117)
 $e1.employer:=$c
 $e2.salary:=100

 $attributesToInspect.push("firstName")
 $attributesToInspect.push("lastName")

 vCompareResult1:=$e1.diff($e2)
 vCompareResult2:=$e1.diff($e2;$attributesToInspect)
 vCompareResult3:=$e1.diff($e2;$e1.touchedAttributes())
```

vCompareResult1 (all differences are returned):

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "salary",
        "value": 33500,
        "otherValue": 100
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
  {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 from Company
        "otherValue": "[object Entity]"// Entity 118 from Company
    }
]
```

vCompareResult2 (only differences on $attributesToInspect are returned)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    }
]
```

vCompareResult3 (only differences on $e1 touched attributes are returned)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "employerID",
        "value": 117,
        "otherValue": 118
    },
     {
        "attributeName": "employer",
        "value": "[object Entity]",// Entity 117 from Company
        "otherValue": "[object Entity]"// Entity 118 from Company

    }
]
```

<!-- END REF -->

<!-- REF EntityClass.drop().Desc -->
## .drop()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->


<!-- REF #EntityClass.drop().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mode|Integer|->|`dk force drop if stamp changed`: Forces the drop even if the stamp has changed|
|Result|Object|<-|Result of drop operation|
<!-- END REF -->

#### Description

The `.drop()` function <!-- REF #EntityClass.drop().Summary -->deletes the data contained in the entity from the datastore<!-- END REF -->, from the table related to its Dataclass. Note that the entity remains in memory.

In a multi-user or multi-process application, the `.drop()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the *mode* parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk force drop if stamp changed` option in the *mode* parameter: in this case, the entity is dropped even if the stamp has changed (and the primary key is still the same).

**Result**

The object returned by `.drop( )` contains the following properties:

|Property| | Type |Description|
|---|---|--- |---|
|success|| boolean|true if the drop action is successful, false otherwise.|
||||***Available only in case of error:***|
|status(*) || number| Error code, see below|
|statusText(*)||  text| Description of the error, see below|
||||***Available only in case of pessimistic lock error:***|
|LockKindText||  text| "Locked by record"|
|lockInfo||  object| Information about the lock origin|
||task_id| number| Process id|
||user_name| text| Session user name on the machine|
||user4d_alias| text| User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory|
||host_name |text| Machine name|
||task_name| text| Process name|
||client_version |text|
||||***Available only in case of serious error (serious error can be trying to duplicate a primary key, disk full...):***|
|errors || collection of objects| |
||message| text| Error message|
||component signature| text| internal component signature (e.g. "dmbg" stands for the database component)|
||errCode |number |Error code|

(\*) The following values can be returned in the *status* and *statusText* properties of *Result* object in case of error:

|Constant| Value| Comment|
|---|---|---|
|`dk status entity does not exist anymore`|5|The entity no longer exists in the data. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using entity.drop( ), this error can be returned when dk force drop if stamp changed option is used. When using entity.lock(), this error can be returned when dk reload if stamp changed option is used</li> **Associated statusText**: "Entity does not exist anymore"|
|`dk status locked`|3|The entity is locked by a pessimistic lock.<br/> **Associated statusText**: "Already locked"|
|`dk status serious error`| 4| A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>**Associated statusText**: "Other error"
|`dk status stamp has changed`| 2|The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock()`: error only if the `dk reload if stamp changed` option is not used</li><li>**Associated statusText**: "Stamp has changed"</li>|
|`dk status wrong permission`|1|The current privileges do not allow the drop of the entity. **Associated statusText**: "Permission Error"|

#### Example 1  

Example without `dk force drop if stamp changed` option:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Example 2  

Example with `dk force drop if stamp changed` option:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.first().Desc -->
## .first()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.first().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Entity|<-|Reference to first entity of an entity selection (Null if not found)|
<!-- END REF -->

#### Description

The `.first()` function <!-- REF #EntityClass.first().Summary -->returns a reference to the entity in first position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### Example

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $firstEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() //$firstEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.fromObject().Desc -->
## .fromObject()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->


<!-- REF #EntityClass.fromObject().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|filler|Object|->|Object from which to fill the entity|
<!-- END REF -->

#### Description

The `.fromObject()` function <!-- REF #EntityClass.fromObject().Summary -->fills an entity with the *filler* content<!-- END REF -->.

>This function modifies the original entity.

The mapping between the object and the entity is done on the attribute names:

* If a property of the object does not exist in the dataclass, it is ignored.
* Data types must be equivalent. If there is a type mismatch between the object and dataclass, 4D tries to convert the data whenever possible (see [`Converting data types`](Concepts/data-types.md#converting-data-types)), otherwise the attribute is left untouched.
* The primary key can be given as is or with a "__KEY" property (filled with the primary key value). If it does not already exist in the dataclass, the entity is created with the given value when [.save()](#save) is called. If the primary key is not given, the entity is created and the primary key value is assigned with respect to database rules. The auto-increment is only computed if the primary key is null.

*filler* can handle a related entity under the following conditions:

* *filler* contains the foreign key itself, or
* *filler* contains a property object with the same name as the related entity, containing a single property named "\_\_KEY".
* if the related entity does not exist, it is ignored.

#### Example

With the following $o object:

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// relatedEntity given with PK
    "employerID": 20 // relatedEntity given with PK
}
```

The following code will create an entity with manager and employer related entities.

```4d
 var $o : Object
 var $entity : cs.EmpEntity
 $entity:=ds.Emp.new()
 $entity.fromObject($o)
 $entity.save()
```

You could also use a related entity given as an object:

```4d

{
    "firstName": "Marie",
    "lastName": "Lechat",
    "salary": 68400,
    "birthDate": "1971-09-03T00:00:00.000Z",
    "woman": false,
    "employer": {// relatedEntity given as an object
        "__KEY": "21"
    },
    "manager": {// relatedEntity given as an object
        "__KEY": "411"
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R5|Added|

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntityClass.getDataClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.DataClass|<-|DataClass object to which the entity belongs|
<!-- END REF -->

#### Description

The `.getDataClass()` function <!-- REF #EntityClass.getDataClass().Summary -->returns the dataclass of the entity<!-- END REF -->. This function is useful when writing generic code.

#### Example

The following generic code duplicates any entity:

```4d
  //duplicate_entity method
  //duplicate_entity($entity)

 #DECLARE($entity : 4D.Entity)  
 var $entityNew : 4D.Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() //create a new entity in the parent dataclass
 $entityNew.fromObject($entity.toObject()) //get all attributes
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null //reset the primary key
 $status:=$entityNew.save() //save the duplicated entity
```

<!-- END REF -->

<!-- REF EntityClass.getKey().Desc -->
## .getKey()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->


<!-- REF #EntityClass.getKey().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mode|Integer|->|`dk key as string`: primary key is returned as a string, no matter the primary key type|
|Result|Text|<-|Value of the text primary key of the entity|
|Result|Integer|<-|Value of the numeric primary key of the entity|

<!-- END REF -->

#### Description

The `.getKey()` function <!-- REF #EntityClass.getKey().Summary -->returns the primary key value of the entity<!-- END REF -->.

Primary keys can be numbers (Integer) or strings. You can "force" the returned primary key value to be a string, no matter the actual primary key type, by passing the `dk key as string` option in the *mode* parameter.

#### Example

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("The primary key is "+$employee.getKey(dk key as string))
```

<!-- END REF -->

<!-- REF EntityClass.getRemoteContextAttributes().Desc -->
## .getRemoteContextAttributes()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19R5|Added|

</details>

<!-- REF #EntityClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->


<!-- REF #EntityClass.getRemoteContextAttributes().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|result|Text|<-|Context attributes linked to the entity, separated by a comma|
<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.

#### Description

The `.getRemoteContextAttributes()` function <!-- REF #EntityClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity <!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity, the function returns an empty Text.

#### Example

```4d
var $ds : 4D.DataStoreImplementation
var $address : cs.AddressEntity
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$contextA:=New object("context"; "contextA")

$address:=$ds.Address.get(1; $contextA)
$text:=""
For each ($p; $address.persons)
    $text:=$p.firstname+" "+$p.lastname
End for each

$info:=$address.getRemoteContextAttributes()

//$info = "persons,persons.lastname,persons.firstname"
```

#### See also

[EntitySelection.getRemoteContextAttributes()](./EntitySelectionClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntityClass.getSelection().Desc -->
## .getSelection()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF -->


<!-- REF #EntityClass.getSelection().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.EntitySelection|<-|Entity selection to which the entity belongs (Null if not found)|
<!-- END REF -->

#### Description

The `.getSelection()` function <!-- REF #EntityClass.getSelection().Summary -->returns the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to an entity selection, the function returns Null.

#### Example

```4d
 var $emp : cs.EmployeeEntity
 var $employees; $employees2 : cs.EmployeeSelection
 $emp:=ds.Employee.get(672) // This entity does not belong to any entity selection
 $employees:=$emp.getSelection() // $employees is Null

 $employees2:=ds.Employee.query("lastName=:1";"Smith") //This entity selection contains 6 entities
 $emp:=$employees2[0]  // This entity belongs to an entity selection

 ALERT("The entity selection contains "+String($emp.getSelection().length)+" entities")
```

<!-- END REF -->

<!-- REF EntityClass.getStamp().Desc -->
## .getStamp()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->


<!-- REF #EntityClass.getStamp().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Integer|<-|Stamp of the entity (0 if entity has just been created)|
<!-- END REF -->

#### Description

The `.getStamp()` function <!-- REF #EntityClass.getStamp().Summary --> returns the current value of the stamp of the entity<!-- END REF -->.

The internal stamp is automatically incremented by 4D each time the entity is saved. It manages concurrent user access and modifications to the same entities (see [**Entity locking**](ORDA/entities.md#entity-locking)).

>For a new entity (never saved), the function returns 0. To know if an entity has just been created, it is recommended to use [.isNew()](#isnew).

#### Example

```4d
 var $entity : cs.EmployeeEntity
 var $stamp : Integer

 $entity:=ds.Employee.new()
 $entity.lastname:="Smith"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=1

 $entity.lastname:="Wesson"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=2
```

<!-- END REF -->

<!-- REF EntityClass.indexOf().Desc -->
## .indexOf()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->


<!-- REF #EntityClass.indexOf().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entitySelection|4D.EntitySelection|->|Position of the entity is given according to this entity selection|
|Result|Integer|<-|Position of the entity in an entity selection|
<!-- END REF -->

#### Description

The `.indexOf()` function <!-- REF #EntityClass.indexOf().Summary -->returns the position of the entity in an entity selection<!-- END REF -->.

By default if the *entitySelection* parameter is omitted, the function returns the entity's position within its own entity selection. Otherwise, it returns the position of the entity within the specified *entitySelection*.

The resulting value is included between 0 and the length of the entity selection -1.

* If the entity does not have an entity selection or does not belong to *entitySelection*, the function returns -1.
* If *entitySelection* is Null or does not belong to the same dataclass as the entity, an error is raised.

#### Example

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1] //This entity belongs to an entity selection
 ALERT("The index of the entity in its own entity selection is "+String($employee.indexOf())) //1

 $employee:=ds.Employee.get(725) //This entity does not belong to an entity selection
 ALERT("The index of the entity is "+String($employee.indexOf())) // -1
```

<!-- END REF -->

<!-- REF EntityClass.isNew().Desc -->
## .isNew()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->


<!-- REF #EntityClass.isNew().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if entity has just been created and not yet saved. Otherwise, False.|
<!-- END REF -->

#### Description

The `.isNew()` function <!-- REF #EntityClass.isNew().Summary --> returns True if the entity to which it is applied has just been created and has not yet been saved in the datastore<!-- END REF -->. Otherwise, it returns False.

#### Example

```4d
 var $emp : cs.EmployeeEntity

 $emp:=ds.Employee.new()

 If($emp.isNew())
    ALERT("This is a new entity")
 End if
```

<!-- END REF -->

<!-- REF EntityClass.last().Desc -->
## .last()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.last().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Entity|<-|Reference to last entity of an entity selection (Null if not found)|
<!-- END REF -->

#### Description

The `.last()` function <!-- REF #EntityClass.last().Summary -->returns a reference to the entity in last position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### Example

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $lastEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $lastEmployee:=$employee.last() //$lastEmployee is the last entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.lock().Desc -->
## .lock()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->


<!-- REF #EntityClass.lock().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mode|Integer|->|`dk reload if stamp changed`: Reload before locking if stamp changed|
|Result|Object|<-|Result of lock operation|
<!-- END REF -->

#### Description

The `.lock()` function <!-- REF #EntityClass.lock().Summary -->puts a pessimistic lock on the record referenced by the entity<!-- END REF -->. The [lock is set](ORDA/entities.md#entity-locking) for a record and all the references of the entity in the current process.

Other processes will see this record as locked (the `result.success` property will contain False if they try to lock the same entity using this function). Only functions executed in the "locking" session are allowed to edit and save the attributes of the entity. The entity can be loaded as read-only by other sessions, but they will not be able to enter and save values.

A record locked by `.lock()` is unlocked:

* when the [`unlock()`](#unlock) function is called on a matching entity in the same process
* automatically, when it is no longer referenced by any entities in memory. For example, if the lock is put only on one local reference of an entity, the entity is unlocked when the function ends. As long as there are references to the entity in memory, the record remains locked.

> An entity can also be [locked by a REST session](../REST/$lock.md), in which case it can only be unlocked by the session.

By default, if the *mode* parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk reload if stamp changed` option in the *mode* parameter: in this case, no error is returned and the entity is reloaded when the stamp has changed (if the entity still exists and the primary key is still the same).

**Result**

The object returned by `.lock()` contains the following properties:

|Property| | Type| Description|
|---|---|---|---|
|success| | boolean| true if the lock action is successful (or if the entity is already locked in the current process), false otherwise.|
||||***Available only if `dk reload if stamp changed` option is used:***|
|**wasReloaded**|  |boolean|true if the entity was reloaded with success, false otherwise.|
||||***Available only in case of error:***|
|status(\*)|  |number| Error code, see below|
|statusText(\*)|| text| Description of the error, see below|
||||***Available only in case of pessimistic lock error:***|
|lockKindText| | text|"Locked by record" if locked by a 4D process, "Locked by session" if locked by a REST session|
|lockInfo| | object| Information about the lock origin. Returned properties depend on the lock origin (4D process or REST session).|
||||***Available only for a 4D process lock:***|
||task_id| number| Process ID|
||user_name |text| Session user name on the machine|
||user4d_alias| text| Name or alias of the 4D user|
||user4d_id |number |User id in the 4D database directory|
||host_name| text| Machine name
||task_name |text |Process name|
||client_version| text |Version of the client|
||||***Available only for a REST session lock:***|
||host|text|URL that locked the entity (e.g. "www.myserver.com")|
||IPAddr |text|IP address of the locker (e.g. "127.0.0.1")|
||userAgent |text|userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")|
||||***Available only in case of serious error*** (primary key already exists, disk full...):|
|errors || collection of objects ||
||message |text |Error message|
||component signature| text| internal component signature (e.g. "dmbg" stands for the database component)|
||errCode |number |Error code|

(\*) The following values can be returned in the *status* and *statusText* properties of the *Result* object in case of error:

|Constant |Value| Comment|
|---|---|---|
|`dk status entity does not exist anymore`| 5 |The entity no longer exists in the data. This error can occur in the following cases:<li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using `.drop( )`, this error can be returned when dk force drop if stamp changed option is used. When using `.lock()`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity does not exist anymore"|
|`dk status locked`| 3 |The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"
|`dk status serious error`| 4 |A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"|
|`dk status stamp has changed`|2|The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock()`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"|

#### Example 1

Example with error:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(716)
 $status:=$employee.lock()
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Example 2

Example with `dk reload if stamp changed` option:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(717)
 $status:=$employee.lock(dk reload if stamp changed)
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.next().Desc -->
## .next()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF -->




<!-- REF #EntityClass.next().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Entity|<-|Reference to next entity in the entity selection (Null if not found)|
<!-- END REF -->

#### Description

The `.next()` function <!-- REF #EntityClass.next().Summary -->returns a reference to the next entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

If there is no valid next entity in the entity selection (i.e. you are on the last entity of the selection), the function returns Null. If the next entity has been dropped, the function returns the next valid entity (and eventually Null).

#### Example

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee is the second entity of the $employees entity selection

```

<!-- END REF -->

<!-- REF EntityClass.previous().Desc -->
## .previous()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF -->


<!-- REF #EntityClass.previous().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Entity|<-|Reference to previous entity in the entity selection (Null if not found)|
<!-- END REF -->

#### Description

The `.previous()` function <!-- REF #EntityClass.previous().Summary --> returns a reference to the previous entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

If there is no valid previous entity in the entity selection (i.e. you are on the first entity of the selection), the function returns Null. If the previous entity has been dropped, the function returns the previous valid entity (and eventually Null).

#### Example

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $previousEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() //$previousEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.reload().Desc -->
## .reload()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->


<!-- REF #EntityClass.reload().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Status object|
<!-- END REF -->

#### Description

The `.reload()` function <!-- REF #EntityClass.reload().Summary -->reloads the content of the entity in memory<!-- END REF -->, according to information stored in the table related to the dataclass in the datastore. The reload is done only if the entity still exists with the same primary key.

**Result**

The object returned by `.reload( )` contains the following properties:

|Property |Type| Description|
|---|---|---|
|success|boolean| True if the reload action is successful, False otherwise.***Available only in case of error***:|
|status(\*)|number|Error code, see below|
|statusText(\*)|text|Description of the error, see below|

(\*) The following values can be returned in the *status* and *statusText* properties of *Result* object in case of error:

|Constant| Value| Comment|
|---|---|---|
|`dk status entity does not exist anymore`|5|The entity no longer exists in the data. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using `.drop( )`, this error can be returned when `dk force drop if stamp changed` option is used. When using `.lock()`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>***Associated statusText***: "Entity does not exist anymore"|
|`dk status serious error`|4| A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>***Associated statusText***: "Other error"|

#### Example

```4d
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 var $result : Object

 $employees:=ds.Employee.query("lastName=:1";"Hollis")
 $employee:=$employees[0]
 $employee.firstName:="Mary"
 $result:=$employee.reload()
 Case of
    :($result.success)
       ALERT("Reload has been done")
    :($result.status=dk status entity does not exist anymore)
       ALERT("The entity has been dropped")
 End case
```

<!-- END REF -->

<!-- REF EntityClass.save().Desc -->
## .save()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->


<!-- REF #EntityClass.save().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mode|Integer|->|`dk auto merge`: Enables the automatic merge mode|
|Result|Object|<-|Result of save operation|
<!-- END REF -->

#### Description

The `.save()` function <!-- REF #EntityClass.save().Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. You must call this method after creating or modifying an entity if you want to save the changes made to it.

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). Otherwise, the function does nothing (the trigger is not called).

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the *mode* parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the *mode* parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. The resulting data saved in the entity will be the combination (the "merge") of all non-concurrent modifications (if modifications were applied to the same attribute, the save fails and an error is returned, even with the auto merge mode).

>The automatic merge mode is not available for attributes of Picture, Object, and Text type when stored outside of the record. Concurrent changes in these attributes will result in a `dk status stamp has changed` error.  

**Result**

The object returned by `.save()` contains the following properties:

|Property | |Type| Description|
|---|---|---|---|
|success| |boolean|True if the save action is successful, False otherwise.|
||||***Available only if `dk auto merge` option is used***:|
|autoMerged| |boolean|True if an auto merge was done, False otherwise.|
||||***Available only in case of error***:|
|status| |number|Error code, [see below](#status-and-statustext)|
|statusText| |text|Description of the error, [see below](#status-and-statustext)|
||||***Available only in case of pessimistic lock error***:|
|lockKindText| |text|"Locked by record"|
|lockInfo| |object|Information about the lock origin|
||task_id| number| Process id|
||user_name |text| Session user name on the machine|
||user4d_alias| text| User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory|
||host_name |text |Machine name|
||task_name| text| Process name|
||client_version| text||
||||***Available only in case of serious error*** (serious error - can be trying to duplicate a primary key, disk full...):|
|errors || collection of objects||
||message| text |Error message|
||componentSignature| text| Internal component signature (e.g. "dmbg" stands for the database component)|
||errCode| number| Error code|

##### status and statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

|Constant| Value |Comment|
|---|---|---|
|`dk status automerge failed`| 6| (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.**Associated statusText**: "Auto merge failed"|
|`dk status entity does not exist anymore`| 5| The entity no longer exists in the data. This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using `.drop( )`, this error can be returned when `dk force drop if stamp changed` option is used. When using `.lock()`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity does not exist anymore"|
|`dk status locked`| 3| The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"
|`dk status serious error`|4|A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"|
|`dk status stamp has changed`|2|The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock()`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"|
|`dk status wrong permission`|1|The current privileges do not allow the save of the entity. **Associated statusText**: "Permission Error"|

#### Example 1  

Creating a new entity:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 $employee:=ds.Employee.new()
 $employee.firstName:="Mary"
 $employee.lastName:="Smith"
 $status:=$employee.save()
 If($status.success)
    ALERT("Employee created")
 End if
```

#### Example 2  

Updating an entity without `dk auto merge` option:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save()
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### Example 3  

Updating an entity with `dk auto merge` option:

```4d
 var $status : Object

 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection

 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save(dk auto merge)
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status automerge failed)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.toObject().Desc -->
## .toObject()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->


<!-- REF #EntityClass.toObject().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|filterString |Text |->|Attribute(s) to extract (comma-separated string)|
|filterCol |Collection |->|Collection of attribute(s) to extract|
|options|Integer|->|`dk with primary key`: adds the \_\_KEY property;<br/>`dk with stamp`: adds the \_STAMP property|
|Result|Object|<-|Object built from the entity|
<!-- END REF -->

#### Description

The `.toObject()` function <!-- REF #EntityClass.toObject().Summary -->returns an object which has been built from the entity<!-- END REF -->. Property names in the object match attribute names of the entity.

If no filter is specified, or if the *filterString* parameter contains an empty string or "*", the returned object will contain:

* all storage entity attributes
* attributes of the `relatedEntity` [kind](DataClassClass.md#attributename): you get a property with the same name as the related entity (name of the many-to-one link). Attribute is extracted with the simple form.
* attributes of the `relatedEntities` [kind](DataClassClass.md#attributename): attribute is not returned.

In the first parameter, you pass the entity attribute(s) to extract. You can pass:

* *filterString*: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
* *filterCol*: a collection of strings: \["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassClass.md#attributename):

* propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property \_\_KEY (primary key).
* propertyPath = "relatedEntity.*" -> all the properties are extracted
* propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> only those properties are extracted

If a filter is specified for attributes of the relatedEntities [kind](DataClassClass.md#attributename):

* propertyPath = "relatedEntities.*" -> all the properties are extracted
* propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> only those properties are extracted

In the *options* parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

:::caution Warning

If you use another attribute than the primary key as the One attribute in a relation, the value of this attribute will be written in the "__KEY" property. Keep in mind that it is recommended to use the primary key as One attribute in your relations, especially when you use `.toObject()` and `.fromObject()` functions.

:::


#### Example 1  

The following structure will be used throughout all examples of this section:

![](../assets/en/API/dataclassAttribute4.png)

Without filter parameter:

```4d
employeeObject:=employeeSelected.toObject()
```

Returns:

```4d
{
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": { // relatedEntity extracted with simple form
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Example 2  

Extracting the primary key and the stamp:

```4d
employeeObject:=employeeSelected.toObject("";dk with primary key+dk with stamp)
```

Returns:

```4d
{
    "__KEY": 413,
   "__STAMP": 1,
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": {
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### Example 3  

Expanding all the properties of `relatedEntities`:

```4d
employeeObject:=employeeSelected.toObject("directReports.*")
```

```4d
{
    "directReports": [
        {
            "ID": 418,
            "firstName": "Lorena",
            "lastName": "Boothe",
            "salary": 44800,
            "birthDate": "1970-10-02T00:00:00.000Z",
            "woman": true,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 419,
            "firstName": "Drew",
            "lastName": "Caudill",
            "salary": 41000,
            "birthDate": "2030-01-12T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 420,
            "firstName": "Nathan",
            "lastName": "Gomes",
            "salary": 46300,
            "birthDate": "2010-05-29T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        }
    ]
}
```

#### Example 4  

Extracting some properties of `relatedEntities`:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

Returns:

```4d
{
    "firstName": "Greg",
    "directReports": [
        {
            "lastName": "Boothe"
        },
        {
            "lastName": "Caudill"
        },
        {
            "lastName": "Gomes"
        }
    ]
}
```

#### Example 5  

Extracting a `relatedEntity` with simple form:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

Returns:

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### Example 6  

Extracting all the properties of a `relatedEntity`:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

Returns:

```4d
{
    "employer": {
        "ID": 20,
        "name": "India Astral Secretary",
        "creationDate": "1984-08-25T00:00:00.000Z",
        "revenues": 12000000,
        "extra": null
    }
}
```

#### Example 7  

Extracting some properties of a `relatedEntity`:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

Returns:

```4d
{
    "employer": {
        "name": "India Astral Secretary",
        "revenues": 12000000
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.touched().Desc -->
## .touched( )

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->


<!-- REF #EntityClass.touched().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if at least one entity attribute has been modified and not yet saved, else False|
<!-- END REF -->

#### Description

The `.touched()` function <!-- REF #EntityClass.touched().Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

If an attribute has been modified or calculated, the function returns True, else it returns False. You can use this function to determine if you need to save the entity.

This function returns False for a new entity that has just been created (with [`.new( )`](DataClassClass.md#new)). Note however that if you use a function which calculates an attribute of the entity, the `.touched()` function will then return True. For example, if you call [`.getKey()`](#getkey) to calculate the primary key, `.touched()` returns True.

#### Example  

In this example, we check to see if it is necessary to save the entity:

```4d
 var $emp : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched

 If($emp.touched()) //if at least one of the attributes has been changed
    $emp.save()
 End if // otherwise, no need to save the entity
```

<!-- END REF -->

<!-- REF EntityClass.touchedAttributes().Desc -->
## .touchedAttributes( )

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->


<!-- REF #EntityClass.touchedAttributes().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Collection|<-|Names of touched attributes, or empty collection|
<!-- END REF -->

#### Description

The `.touchedAttributes()` function <!-- REF #EntityClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

This applies for attributes of the [kind](DataClassClass.md#attributename) `storage` or `relatedEntity`.

In the case of a related entity having been touched (i.e., the foreign key), the name of the related entity and its primary key's name are returned.

If no entity attribute has been touched, the method returns an empty collection.

#### Example 1  

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```

#### Example 2  

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity
 var $company : cs.CompanyEntity

 $touchedAttributes:=New collection

 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName
 $emp.lastName:="Martin"

 $company:=ds.Company.get(121)
 $emp.employer:=$company

 $touchedAttributes:=$emp.touchedAttributes()

  //collection $touchedAttributes: ["firstName","lastName","employer","employerID"]
```

In this case:

* firstName and lastName have a `storage` kind
* employer has a `relatedEntity` kind
* employerID is the foreign key of the employer related entity

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->
## .unlock()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Added|

</details>

<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->


<!-- REF #EntityClass.unlock().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Status object|
<!-- END REF -->

#### Description

The `.unlock()` function <!-- REF #EntityClass.unlock().Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF --> in the datastore and table related to its dataclass.

> For more information, please refer to [Entity locking](ORDA/entities.md#entity-locking) section.

A record is automatically unlocked when it is no longer referenced by any entities in the locking process (for example: if the lock is put only on one local reference of an entity, the entity and thus the record is unlocked when the process ends).

>When a record is locked, it must be unlocked from the locking process and on the entity reference which put the lock. For example:

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Result**

The object returned by `.unlock()` contains the following property:

|Property| Type |Description|
|---|---|---|
|success| Boolean| True if the unlock action is successful, False otherwise. If the unlock is done on a dropped entity, on a non locked record, or on a record locked by another process or entity, success is False.|

#### Example  

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object

 $employee:=ds.Employee.get(725)
 $status:=$employee.lock()
 ... //processing
 $status:=$employee.unlock()
 If($status.success)
    ALERT("The entity is now unlocked")
 End if
```

<!-- END REF -->
