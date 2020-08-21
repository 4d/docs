---
id: entityClass
title: Entity
---

An entity is an object that can be seen as an instance of a dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains data correlated to the database related to the datastore. The purpose of the entity is to manage data (create, update, delete). When an entity reference is obtained by means of an entity selection, it retains information about the entity selection which allows iteration through the selection.


## Entity Object

The `Entity` object itself cannot be copied as an object:

```4d
 $myentity:=OB Copy(ds.Employee.get(1)) //returns null
```

The entity properties are however enumerable:

```4d
  ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)
  //$prop contains the names of all the entity attributes
```

For export needs, you can however convert an entity to a standard object using the `.toObject( )` function. You can then export the entity as JSON, for example:

```4d
 C_OBJECT($entity_json)
 $entity_json:=JSON Stringify($myentity.toObject()) //returns the entity as JSON
```

## Summary

||
|---|
|[<!-- INCLUDE entityClass.{attributeName}.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE entityClass.{attributeName}.Summary --> |
|[<!-- INCLUDE #entityClass.clone().Syntax -->](#clone-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entityClass.clone().Summary -->|
|[<!-- INCLUDE #entityClass.diff().Syntax -->](#diff-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entityClass.diff().Summary --> |
|[<!-- INCLUDE #entityClass.drop().Syntax -->](#drop-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entityClass.drop().Summary --> |




---

<!-- REF entityClass.{attributeName}.Desc -->
## .{attributeName}

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|
</details>

<!-- REF entityClass.{attributeName}.Syntax -->
**.{attributeName}** : mixed<!-- END REF -->


#### Description

Any dataclass attribute is available as a property of an entity, which <!-- REF entityClass.{attributeName}.Summary -->stores the attribute value for the entity<!-- END REF -->.

>Dataclass attributes can also be reached using the alternate syntax with \[ ].

The attribute value type depends on the attribute kind (relation or storage):

*	If *attributeName* kind is **storage**:
entity.attributeName returns a value of the same type as *attributeName*.
*	If *attributeName* kind is **relatedEntity**:
`.attributeName` returns the related entity. Values of the related entity are directly available through cascading properties, for example "myEntity.employer.employees\[0].lastname".
*	If *attributeName* kind is **relatedEntities**:
`.attributeName` returns a new entity selection of related entities. Duplications are removed (an unordered entity selection is returned).

>For more information on attribute kinds, please refer to the `dataClassAttribute.kind` property description.


#### Example

```4d
C_OBJECT($myEntity)
 $myEntity:=ds.Employee.new() //Create a new object of the entity type
 $myEntity.name:="Dupont" // assign 'Dupont' to the 'name' attribute
 $myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
 $myEntity.save() //save the entity
```

<!-- END REF -->


---

<!-- REF entityClass.clone().Desc -->
## .clone( ) 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|
</details>


<!-- REF #entityClass.clone().Syntax -->
**.clone( )** : entity<!-- END REF -->

<!-- REF #entityClass.clone().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|entity|<-|New entity referencing the record	
|
<!-- END REF -->


#### Description
The `.clone( )` function <!-- REF #entityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->. This function allows you to update entities separately.

>Keep in mind that any modifications done to entities will be saved in the referenced record only when the `.save( )` function is executed.

This function can only be used with entities already saved in the database. It cannot be called on a newly created entity (for which `.isNew( )` returns **True**).


#### Example 

```4d
C_OBJECT($emp;$empCloned)
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()
 
 $emp.lastName:="Smith" //Updates done on $emp are not done on $empCloned
```

<!-- END REF -->

---

<!-- REF entityClass.diff().Desc -->
## .diff( ) 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|
</details>

<!-- REF #entityClass.diff().Syntax -->
**.diff**( *entityToCompare* { ; *attributesToCompare* }  ): collection<!-- END REF -->


<!-- REF #entityClass.diff().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entityToCompare|Entity|->|Entity to be compared with the original entity|	
|attributesToCompare|Collection|->	|Name of attributes to be compared	|
|Result|Collection|<-|Differences between the entities|
<!-- END REF -->


#### Description
The `.diff()` function <!-- REF #entityClass.diff().Summary -->compares the contents of two entities and returns their differences<!-- END REF -->.

In *entityToCompare*, pass the entity to be compared to the original entity.

In *attributesToCompare*, you can designate specific attributes to compare. If provided, the comparison is done only on the specified attributes. If not provided, all differences between the entities are returned.

The differences are returned as a collection of objects whose properties are:

|Property name|	Type|	Description|
|---|---|---|
|attributeName|	String|	Name of the attribute
|value|	Depends on attribute type	|Value of the attribute in the entity|
|otherValue|	Depends on attribute type|	Value of the attribute in entityToCompare|

Only attributes with different values are included in the collection. If no differences are found, `.diff( )` returns an empty collection.

The method applies for properties whose kind is **storage** or **relatedEntity** (see `dataClassAttribute.kind`). In case a related entity has been updated (meaning the foreign key), the name of the related entity and its primary key name are returned as *attributeName* properties (*value* and *otherValue* are empty for the related entity name)

If one of the compared entities is **Null**, an error is raised.

#### Example 1


```4d
C_COLLECTION($diff1;$diff2)
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // All differences are returned
 $diff2:=$clone.diff(employee;New collection"firstName";"lastName"))
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

---

<!-- REF entityClass.drop().Desc -->
## .drop( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entityClass.drop().Syntax -->
**.drop**( {*mode*} ): object<!-- END REF -->

<!-- REF #entityClass.drop().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mode|longint|->|`dk force drop if stamp changed`: Forces the drop even if the stamp has changed|
|Result|object|<-|Datastore properties|
<!-- END REF -->

#### Description

The `.drop()` function <!-- REF #entityClass.drop().Summary -->deletes the data contained in the entity from the datastore<!-- END REF -->. , from the table related to its dataClass. Note that the entity remains in memory.

In a multi-user or multi-process application, the `.drop()` function is executed under an "optimistic lock" mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved. For more information, please refer to the **Entity locking** page.

By default, if the *mode* parameter is omitted, the method will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk force drop if stamp changed` option in the *mode* parameter: in this case, the entity is dropped even if the stamp has changed (and the primary key is still the same).

**Result**

The object returned by `.drop( )` contains the following properties:

|Property|	|	Type	|Description|
|---|---|--- |---|
|success||	boolean|true if the drop action is successful, false otherwise.|
||||***Available only in case of error:***|
|status(*)	||	number|	Error code, see below|
|statusText(*)||		text|	Description of the error, see below|
||||***Available only in case of pessimistic lock error:***|
|LockKindText||		text|	"Locked by record"|
|lockInfo||		object|	Information about the lock origin|
||task_id|	number|	Process id|
||user_name|	text|	Session user name on the machine|
||user4d_id|	text|	User name in the 4D database directory|
||host_name	|text|	Machine name|
||task_name|	text|	Process name|
||client_version	|text|
||||***Available only in case of serious error (serious error can be trying to duplicate a primary key, disk full...):***|
|errors	||	collection of objects|	|
||message|	text|	Error message|
||component signature|	text|	internal component signature (e.g. "dmbg" stands for the database component)|
||errCode	|number	|Error code|

(\*) The following values can be returned in the *status* and *statusText* properties of *Result* object in case of error:

|Constant|	Value|	Comment|
|---|---|---|
|`dk status entity does not exist anymore`|5|The entity no longer exists in the data. This error can occur in the following cases:<br><ul><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). When using entity.drop( ), this error can be returned when dk force drop if stamp changed option is used. When using entity.lock( ), this error can be returned when dk reload if stamp changed option is used</li></ul><p>**Associated statusText**: "Entity does not exist anymore"|
|`dk status locked`|3|The entity is locked by a pessimistic lock.<br>**Associated statusText**: "Already locked"|
|`dk status serious error`|	4|	A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br>**Associated statusText**: "Other error"
|`dk status stamp has changed`|	2|The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br><ul><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used
Associated statusText: "Stamp has changed"</li></ul>|


#### Example 1  
Example without `dk force drop if stamp changed` option:

```4d
 C_OBJECT($employees;$employee;$status)
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
 C_OBJECT($employees;$employee;$status)
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

