---
id: entitySelectionClass
title: Entity Selections
---

An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass. 


## Entity Selection Object

The `entity selection` object itself cannot be copied as an object:

```4d
 $myentitysel:=OB Copy(ds.Employee.all()) //returns null
```

The entity selection properties are however enumerable:

```4d
 ARRAY TEXT($prop;0)
 OB GET PROPERTY NAMES(ds.Employee.all();$prop)
  //$prop contains the names of the entity selection properties
  //("length", 00", "01"...)
```

## Summary

||
|---|
|[<!-- INCLUDE entitySelectionClass.{attributeName}.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE entitySelectionClass.{attributeName}.Summary -->|
|[<!-- INCLUDE #entitySelectionClass.add().Syntax -->](#add-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.add().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.and().Syntax -->](#and-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.and().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.average().Syntax -->](#average-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.average().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.contains().Syntax -->](#contains-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.contains().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.count().Syntax -->](#count-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.count().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.distinct().Syntax -->](#distinct-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.distinct().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.drop().Syntax -->](#drop-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.drop().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.extract().Syntax -->](#extract-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.extract().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.first().Syntax -->](#first-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.first().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.getDataClass().Syntax -->](#getdataclass-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.getDataClass().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.&#91;index&#93;.Syntax -->](#91index93)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.[index].Summary -->|
|[<!-- INCLUDE #entitySelectionClass.isOrdered().Syntax -->](#isordered-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.isOrdered().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.last().Syntax -->](#last-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.last().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.length.Syntax -->](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.length.Summary -->|
|[<!-- INCLUDE #entitySelectionClass.max().Syntax -->](#max-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.max().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.min().Syntax -->](#min-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.min().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.minus().Syntax -->](#minus-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.minus().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.or().Syntax -->](#or-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.or().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.orderBy().Syntax -->](#orderby-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.orderBy().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.touched().Syntax -->](#touched-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.touched().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.touchedAttributes().Syntax -->](#touchedattributes-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.touchedAttributes().Summary -->|
|[<!-- INCLUDE #entitySelectionClass.unlock().Syntax -->](#unlock-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #entitySelectionClass.unlock().Summary -->|





---

<!-- REF entitySelectionClass.{attributeName}.Desc -->
## .{attributeName}

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|
</details>

<!-- REF entitySelectionClass.{attributeName}.Syntax -->
**.{attributeName}** : collection<p>**.{attributeName}** : entity selection<!-- END REF -->


#### Description

Any dataclass attribute can be used as a property of an entity selection to return <!-- REF entitySelectionClass.{attributeName}.Summary -->a "projection" of values for the attribute in the entity selection<!-- END REF -->. Projected values can be a collection or a new entity selection, depending on the kind (storage or relation) of the attribute.

*	If *attributeName* kind is `storage`:
`.attributeName` returns a collection of values of the same type as *attributeName*.
*	If *attributeName* kind is `relatedEntity`:
`.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).
*	If *attributeName* kind is `relatedEntities`:
`.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).


When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. In this case, if no entities are returned, the result is an empty entity selection.

>For more information on attribute kind, please refer to the [.kind](dataclassAttributeClass.html#kind) property description.

If the attribute does not exist in the entity selection, an error is returned. 


#### Example 1  

Projection of storage values:

```4d
 C_COLLECTION(firstNames)
 $entitySelection:=ds.Employee.all()
 firstNames:=$entitySelection.firstName // firstName type is string
```

The resulting collection is a collection of strings, for example:

```4d
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### Example 2  

Projection of related entity:

```4d
 C_OBJECT($es;$entitySelection)
 $entitySelection:=ds.Employee.all()
 $es:=$entitySelection.employer // employer is related to a Company dataClass
```

The resulting object is an entity selection of Company with duplications removed (if any).

#### Example 3 
 
Projection of related entities:

```4d
 C_OBJECT($es)
 $es:=ds.Employee.all().directReports // directReports is related to Employee dataclass
```

The resulting object is an entity selection of Employee with duplications removed (if any).

<!-- END REF -->


---

<!-- REF entitySelectionClass.add().Desc -->
## .add( ) 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|
</details>


<!-- REF #entitySelectionClass.add().Syntax -->
**.add**( *entity* ) : entity<!-- END REF -->

<!-- REF #entitySelectionClass.add().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity|entity|->|Entity to be added to the entity selection|
<!-- END REF -->


#### Description
The `.add( )` function <!-- REF #entitySelectionClass.add().Summary -->adds the specified *entity* to the entity selection<!-- END REF -->. 

>This function modifies the original entity selection.

*	If the entity selection is ordered, *entity* is added at the end of the selection. If a reference to the same entity already belongs to the entity selection, it is duplicated and a new reference is added.
*	If the entity selection is unordered, *entity* is added anywhere in the selection, with no specific order.

>For more information, please refer to the **Ordered vs Unordered entity selections** paragraph in the *4D Developer Guide*.

An error occurs if *entity* and the entity selection are not related to the same dataClass. If the entity to be added is Null, no error is raised.

#### Example 

```4d
C_OBJECT($employees;$employee)
 $employees:=ds.Employee.query("lastName = :1";"S@")
 $employee:=ds.Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees.add($employee) //The $employee entity is added to the $employees entity selection
```

<!-- END REF -->

---

<!-- REF entitySelectionClass.and().Desc -->
## .and( ) 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|
</details>

<!-- REF #entitySelectionClass.and().Syntax -->
**.and**( *entity* ) : entity selection<p>**.and**( *entitySelection* ) : entity selection<!-- END REF -->


<!-- REF #entitySelectionClass.and().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity &#124; entitySelection |entity &#124; entitySelection |->|Entity or entity selection to intersect with|	
|Result|entitySelection|<-|New entity selection with the result of intersection with logical AND operator|
<!-- END REF -->


#### Description
The `.and()` function <!-- REF #entitySelectionClass.and().Summary -->combines the entity selection with an *entity* or *entitySelection* parameter using the logical AND operator<!-- END REF -->; it returns a new, unordered entity selection that contains only the entities that are referenced in both the entity selection and the parameter.

*	If you pass *entity* as parameter, you combine this entity with the entity selection. If the entity belongs to the entity selection, a new entity selection containing only the entity is returned. Otherwise, an empty entity selection is returned.
*	If you pass *entitySelection* as parameter, you combine both entity selections. A new entity selection that contains only the entities that are referenced in both selections is returned. If there is no intersecting entity, an empty entity selection is returned.

>You can compare ordered and/or unordered entity selections. The resulting selection is always unordered. For more information, please refer to the **Ordered vs Unordered entity selections** paragraph in the *4D Developer Guide*.

If the original entity selection or the *entitySelection* parameter is empty, or if the *entity* is Null, an empty entity selection is returned. 

If the original entity selection and the parameter are not related to the same dataClass, an error is raised.


#### Example 1


```4d
 C_OBJECT($employees1;$employee;$result)
 $employees1:=ds.Employee.query("lastName = :1";"H@") //The $employees1 entity selection contains the entity with primary key 710 and other entities
  //for ex. "Colin Hetrick" / "Grady Harness" / "Sherlock Holmes" (primary key 710)
 $employee:=ds.Employee.get(710) // Returns "Sherlock Holmes"
 
 $result:=$employees1.and($employee) //$result is an entity selection containing only the entity with primary key 710 ("Sherlock Holmes")
```


#### Example 2

We want to have a selection of employees named "Jones" who live in New York:

```4d
C_OBJECT($sel1;$sel2;$sel3)
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2)
```

<!-- END REF -->

---

<!-- REF entitySelectionClass.average().Desc -->
## .average( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.average().Syntax -->
**.average**( {*attributePath*} ) : real<p>**.average**( {*attributePath*} ) : null<!-- END REF -->

<!-- REF #entitySelectionClass.average().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |text|->|Attribute path to be used for calculation|
|Result|real,null|<-|Arithmetic mean (average) of entity attribute values|
<!-- END REF -->

#### Description

The `.average()` function <!-- REF #entitySelectionClass.average().Summary -->returns the arithmetic mean (average) of all the non-null values of *attributePath* in the entity selection<!-- END REF -->.

Pass in the *attributePath* parameter the attribute path to evaluate.

Only numerical values are taken into account for the calculation. Note however that, if the *attributePath* of the entity selection contains mixed value types, `.average()` takes all scalar elements into account to calculate the average value. 

>Date values are converted to numerical values (seconds) and used to calculate the average.

`.average()` returns null if the entity selection is empty.

An error is returned if:

*	*attributePath* is a related attribute or does not contain numerical values,
*	*attributePath* is not found in the entity selection dataclass.


#### Example 
 
We want to obtain a list of employees whose salary is higher than the average salary:

```4d
C_REAL($averageSalary)
 C_OBJECT($moreThanAv)
 $averageSalary:=ds.Employee.all().average("salary")
 $moreThanAv:=ds.Employee.query("salary > :1";$averageSalary)
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.contains().Desc -->
## .contains( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.contains().Syntax -->
**.contains**( *entity* ) : boolean<!-- END REF -->

<!-- REF #entitySelectionClass.contains().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity|entity|->|Entity to evaluate|
|Result|boolean|<-|True if the entity belongs to the entity selection, else False|
<!-- END REF -->

#### Description

The `.contains()` function <!-- REF #entitySelectionClass.contains().Summary -->returns true if entity reference belongs to the entity selection<!-- END REF -->, and false otherwise.

In *entity*, specify the entity to search for in the entity selection. If entity is Null, the method will return false.

If *entity* and the entity selection do not belong to the same dataclass, an error is raised.

#### Example   

```4d
C_OBJECT($employees;$employee)
 
 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds.Employee.get(610)
 
 If($employees.contains($employee))
    ALERT("The entity with primary key 610 has a last name beginning with H")
 Else
    ALERT("The entity with primary key 610 does not have a last name beginning with H")
 End if
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.count().Desc -->
## .count( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.count().Syntax -->
**.count**( *attributePath* ) : real<!-- END REF -->

<!-- REF #entitySelectionClass.count().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |text|->|Path of the attribute to be used for calculation|
|Result|real|<-|Number of non null *attributePath* values in the entity selection|
<!-- END REF -->

#### Description

The `.count()` function <!-- REF #entitySelectionClass.count().Summary -->returns the number of entities in the entity selection<!-- END REF -->with a non-null value in *attributePath*.

>Only scalar values are taken into account. Object or collection type values are considered as null values.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* is not found in the entity selection dataclass.

#### Example   

We want to find out the total number of employees for a company without counting any whose job title has not been specified:

```4d
C_OBJECT($sel)
 C_REAL($count)
 
 $sel:=ds.Employee.query("employer = :1";"Acme, Inc")
 $count:=$sel.count("jobtitle")
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.distinct().Desc -->
## .distinct( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.distinct().Syntax -->
**.distinct**( *attributePath* { ; *option* } ) : collection<!-- END REF -->

<!-- REF #entitySelectionClass.distinct().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath|text|->|Path of attribute whose distinct values you want to get|	
|option|longint|->|`dk diacritical`: diacritical evaluation ("A" # "a" for example)|
|Result|collection|<-|Collection with only distinct values|
<!-- END REF -->

#### Description

The `.distinct()` function <!-- REF #entitySelectionClass.distinct().Summary -->returns a collection containing only distinct (different) values<!-- END REF --> from the *attributePath* in the entity selection. 

The returned collection is automatically sorted. **Null** values are not returned.

In the *attributePath* parameter, pass the entity attribute whose distinct values you want to get. Only scalar values (text, number, boolean, or date) can be handled. If the *attributePath* is an object attribute that contains values of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.	booleans
2.	strings
3.	numbers
4.	dates

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `dk diacritical` constant in the *option* parameter.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* is not found in the entity selection dataclass.

#### Example   

You want to get a collection containing a single element per country name:

```4d
C_COLLECTION($countries)
 $countries:=ds.Employee.all().distinct("address.country")
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.drop().Desc -->
## .drop( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.drop().Syntax -->
**.drop**( { *mode* } ) : entity selection<!-- END REF -->

<!-- REF #entitySelectionClass.drop().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mode|longint|->|`dk stop dropping on first error`: stops method execution on first non-droppable entity|
|Result|entitySelection|<-|Empty entity selection if successful, else entity selection containing non-droppable entity(ies)	
|
<!-- END REF -->

#### Description

The `.drop()` function <!-- REF #entitySelectionClass.drop().Summary -->removes the entities belonging to the entity selection from the table related to its dataclass<!-- END REF --> within the datastore. The entity selection remains in memory.

>Removing entities is permanent and cannot be undone. It is recommended to call this action in a transaction in order to have a rollback option.

If a locked entity is encountered during the execution of `.drop()`, it is not removed. By default, the method processes all entities of the entity selection and returns non-droppable entities in the entity selection. If you want the method to stop execution at the first encountered non-droppable entity, pass the `dk stop dropping on first error` constant in the *mode* parameter.

#### Example   

Example without the `dk stop dropping on first error` option:

```4d
C_OBJECT($employees;$notDropped)
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped is an entity selection containing all the not dropped entities
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```

Example with the `dk stop dropping on first error` option:

```4d
C_OBJECT($employees;$notDropped)
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped is an entity selection containing the first not dropped entity
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```


<!-- END REF -->


---

<!-- REF entitySelectionClass.extract().Desc -->
## .extract( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R3|Added|

</details>

<!-- REF #entitySelectionClass.extract().Syntax -->
**.extract**( *propertyPath* { ; *option* } ) : collection<p>**.extract**( *propertyPath* { ; *targetPath* } { ; *propertyPath2* ; *targetPath2* ; ... ; *propertyPathN* ; *targetPathN* } ) : collection<!-- END REF -->

<!-- REF #entitySelectionClass.extract().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath |text|->|Property path whose values must be extracted to the new collection	|
|targetPath|text|->|Target property path or property name|	
|option|longint|->|`ck keep null`: include null properties in the returned collection (ignored by default). Parameter ignored if *targetPath* passed.|
|Result|collection, null|<-|Entity selection to which the entity belongs|
<!-- END REF -->

#### Description

The `.extract()` function <!-- REF #entitySelectionClass.extract().Summary -->returns a collection containing propertyPath values extracted from the entity selection<!-- END REF -->. 

*propertyPath* can refer to:

*	a scalar dataclass attribute,
*	related entity,
*	related entities.

If *propertyPath* is invalid, an empty collection is returned.

This function accepts two syntaxes.

**.extract ( propertyPath {; option}) -> collection** 

With this syntax, `.extract( )` populates the returned collection with the *propertyPath* values of the entity selection.

By default, entities for which *propertyPath* is *null* or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the *option* parameter to include these values as **null** elements in the returned collection.

*	Dataclass attributes with [.kind](#dataclassAttributeClass.html#kind) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*	Dataclass attributes with [.kind](#dataclassAttributeClass.html#kind) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( propertyPath ; targetPath {propertyPath2 ; targetPath2 ;...; propertyPathN ; targetPathN}) -> collection**

With this syntax, `.extract( )` populates the returned collection with the *propertyPath* properties. Each element of the returned collection is an object with *targetPath* properties filled with the corresponding *propertyPath* properties. Null values are kept (*option* parameter is ignored with this syntax). 

If several *propertyPath* are given, a *targetPath* must be given for each. Only valid pairs \[*propertyPath*, *targetPath*] are extracted.

*	Dataclass attributes with [.kind](#dataclassAttributeClass.html#kind) = "relatedEntity" are extracted as an entity.
*	Dataclass attributes with [.kind](#dataclassAttributeClass.html#kind) = "relatedEntities" are extracted as an entity selection.
 
>Entities of a collection of entities accessed by \[ ] are not reloaded from the database.


#### Example   

Given the following table and relation:

![](assets/en/API/entityselection.PNG)

```4d
 C_COLLECTION($firstnames;$addresses;$mailing;$teachers)
 C_OBJECT($status)
  //
  //
  //$firstnames is a collection of Strings
 $firstnames:=ds.Teachers.all().extract("firstname")
  //
  //$addresses is a collection of entities related to dataclass Address
  //Null values for address are extracted
 $addresses:=ds.Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing is a collection of objects with properties "who" and "to"
  //"who" property content is String type 
  //"to" property content is entity type (Address dataclass)
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing is a collection of objects with properties "who" and "city"
  //"who" property content is String type 
  //"city" property content is String type 
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers is a collection of objects with properties "where" and "who"
  //"where" property content is String
  //"who" property content is an entity selection (Teachers dataclass)
 $teachers:=ds.Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers is a collection of entity selections
 $teachers:=ds.Address.all().extract("teachers")
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.first().Desc -->
## .first( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.first().Syntax -->
**.first( )** : entity<p>**.first( )** : null<!-- END REF -->

<!-- REF #entitySelectionClass.first().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|entity, null|<-|Reference to the first entity of the entity selection|
<!-- END REF -->

#### Description

The `.first()` function <!-- REF #entitySelectionClass.first().Summary -->returns a reference to the entity in the first position of the entity selection<!-- END REF -->. 

The result of this function is similar to:

```4d
 $entity:=$entitySel[0]
```

There is, however, a difference between both statements when the selection is empty:

```4d
 C_OBJECT($entitySel;$entity)
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") //no matching entity
  //entity selection is then empty
 $entity:=$entitySel.first() //returns Null
 $entity:=$entitySel[0]  //generates an error
```

#### Example   


```4d
 C_OBJECT($entitySelection;$entity)
 $entitySelection:=ds.Emp.query("salary > :1";100000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.first()
 End if
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.getDataClass().Desc -->
## .getDataClass( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|

</details>

<!-- REF #entitySelectionClass.getDataClass().Syntax -->
**.getDataClass( )** : dataclass<!-- END REF -->

<!-- REF #entitySelectionClass.getDataClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|dataclass|<-|Dataclass object to which the entity selection belongs|
<!-- END REF -->

#### Description

The `.getDataClass()` function <!-- REF #entitySelectionClass.getDataClass().Summary -->returns the dataclass of the entity selection<!-- END REF -->. 

This function is mainly useful in the context of generic code.

#### Example   

The following generic code duplicates all entities of the entity selection:

```4d
//duplicate_entities method
  //duplicate_entities($1)
  //duplicate_entities(entity_selection)
 
 C_OBJECT($dataClass;$1;$entitySelection;$entity;$duplicate;$status)
 $entitySelection:=$1
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null //reset the primary key
    $status:=$duplicate.save()
 End for each
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.&#91;index&#93;.Desc -->
## &#91;index&#93; 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.&#91;index&#93;.Syntax -->
**&#91;index&#93;** : entity<!-- END REF -->


#### Description

The `[index]` notation <!-- REF #entitySelectionClass.[index].Summary -->allows you to access entities within the entity selection using the standard collection syntax<!-- END REF -->: pass the position of the entity you want to get in the index parameter.

Note that the corresponding entity is reloaded from the datastore.

*index* can be any number between 0 and `.length`-1.

*	If index is out of range, an error is returned.
*	If index corresponds to a dropped entity, a Null value is returned.

>**Warning**: `[index]` is a non assignable expression, which means that it cannot be used as en editable entity reference with methods like [`.lock( )`](entityClass.html#lock-) or [`.save( )`](entityClass.html#save-). To work with the corresponding entity, you need to assign the returned expression to an assignable expression, such as a variable. 

Examples:

```4d
 $sel:=ds.Employee.all() //create the entity selection
  //invalid statements:
 $result:=$sel[0].lock() //will NOT work
 $sel[0].lastName:="Smith" //will NOT work
 $result:=$sel[0].save() //will NOT work
  //valid code:
 $entity:=$sel[0]  //OK
 $entity.lastName:="Smith" //OK
 $entity.save() //OK
```

#### Example   


```4d
 C_OBJECT($employees;$employee)
 $employees:=ds.Employee.query("lastName = :1";"H@")
 $employee:=$employees[2]  // The 3rd entity of the $employees entity selection is reloaded from the database
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.isOrdered().Desc -->
## .isOrdered( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.isOrdered().Syntax -->
**.isOrdered( )** : boolean<!-- END REF -->

<!-- REF #entitySelectionClass.isOrdered().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if the entity selection is ordered, False otherwise|
<!-- END REF -->

#### Description

The `.isOrdered()` function <!-- REF #entitySelectionClass.isOrdered().Summary -->returns true if the entity selection is ordered<!-- END REF -->, and false if it is unordered.

>This function always returns true when the entity selection comes from a remote datastore. 

For more information, please refer to the **Ordered vs Unordered entity selections** paragraph.


#### Example   


```4d
C_OBJECT($employees;$employee)
 C_BOOLEAN($isOrdered)
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // Gets the entity with primary key 714
 
  //In an ordered entity selection, we can add the same entity several times (duplications are kept)
 $employees.add($employee)
 $employees.add($employee)
 $employees.add($employee)
 
 $isOrdered:=$employees.isOrdered()
 If($isOrdered)
    ALERT("The entity selection is ordered and contains "+String($employees.length)+" employees")
 End if
```

<!-- END REF -->

---

<!-- REF entitySelectionClass.last().Desc -->
## .last( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.last().Syntax -->
**.last( )** : entity<p>**.last( )** : null<!-- END REF -->

<!-- REF #entitySelectionClass.last().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|entity, null|<-|Reference to the last entity of the entity selection|
<!-- END REF -->

#### Description

The `.last()` function <!-- REF #entitySelectionClass.last().Summary -->returns a reference to the entity in last position of the entity selection<!-- END REF -->. 

The result of this function is similar to:

```4d
 $entity:=$entitySel[length-1]
```

If the entity selection is empty, the function returns Null.


#### Example   


```4d
C_OBJECT($entitySelection;$entity)
 $entitySelection:=ds.Emp.query("salary < :1";50000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.last()
 End if
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.length.Desc -->
## .length   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.length.Syntax -->
**.length** : longint<!-- END REF -->


#### Description

The `.length` property <!-- REF #entitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. If the entity selection is empty, it returns 0.

Entity selections always have a `.length` property.


#### Example 

```4d
 C_LONGINT(vSize)
 vSize:=ds.Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" male employees found.")
```

<!-- END REF -->

---

<!-- REF entitySelectionClass.max().Desc -->
## .max( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.max().Syntax -->
**.max**( *attributePath* ) : mixed<!-- END REF -->

<!-- REF #entitySelectionClass.max().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |text|->|Path of the attribute to be used for calculation|
|Result|mixed|<-|Highest value of attribute|
<!-- END REF -->

#### Description

The `.max()` function <!-- REF #entitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of *attributePath* in the entity selection<!-- END REF -->. It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy( )`](#orderby-) function.

If you pass in *attributePath* a path to an object attribute containing different types of values, the `.max( )` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort( )`](collectionClass.html#sort-) description). In this case, if *attributePath* does not exist in the object, `.max()` returns **null**.

If the entity selection is empty, `.max()` returns **null**.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* is not found in the entity selection dataclass.



#### Example   

We want to find the highest salary among all the female employees:

```4d
C_OBJECT($sel)
 C_REAL($maxSalary)
 $sel:=ds.Employee.query("gender = :1";"female")
 $maxSalary:=$sel.max("salary")
```

<!-- END REF -->

---

<!-- REF entitySelectionClass.min().Desc -->
## .min( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.min().Syntax -->
**.min( )** : mixed<!-- END REF -->

<!-- REF #entitySelectionClass.min().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|attributePath |text|->|Path of the attribute to be used for calculation|
|Result|mixed|<-|Lowest value of attribute|
<!-- END REF -->

#### Description

The `.min()` function <!-- REF #entitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of attributePath in the entity selection<!-- END REF -->.  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy( )`](#orderby-) function.

If you pass in *attributePath* a path to an object attribute containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort( )`](collectionClass.html#sort-) description). In this case, if *attributePath* does not exist in the object, `.min()` returns **null**.

If the entity selection is empty, `.min()` returns **null**.

An error is returned if:

*	*attributePath* is a related attribute,
*	*attributePath* is not found in the entity selection dataclass.


#### Example   

In this example, we want to find the lowest salary among all the female employees:

```4d
C_OBJECT($sel)
 C_REAL($minSalary)
 $sel:=ds.Employee.query("gender = :1";"female")
 $minSalary:=$sel.min("salary")
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.minus().Desc -->
## .minus( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.minus().Syntax -->
**.minus**( *entity* ) : entity selection<p>**.minus**( *entitySelection*  ) : entity selection<!-- END REF -->

<!-- REF #entitySelectionClass.minus().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity &#124; entitySelection|entity, entitySelection|->|Entity or entity selection to substract|
|Result|entitySelection|<-|New entity selection or a new reference on the existing entity selection|
<!-- END REF -->

#### Description

The `.minus()` function <!-- REF #entitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the entity or the entities of entitySelection and returns the resulting entity selection<!-- END REF -->.

*	If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*	If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*. 

>You can compare ordered and/or unordered entity selections. The resulting selection is always unordered. For more information, please refer to the **Ordered vs Unordered entity selections** paragraph in the *4D Developer Guide*.

If the original entity selection or both the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataClass, an error is raised.


#### Example 1 

```4d
C_OBJECT($employees;$employee;$result)
 
 $employees:=ds.Employee.query("lastName = :1";"H@") // The $employees entity selection contains the entity with primary key 710 and other entities
  // for ex. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (primary key 710)
 
 $employee:=ds.Employee.get(710) // Returns "Sherlock Holmes"
 
 $result:=$employees.minus($employee) //$result contains "Colin Hetrick", "Grady Harness"
```


#### Example 2 

We want to have a selection of female employees named "Jones" who live in New York :

```4d
C_OBJECT($sel1;$sel2;$sel3)
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```

<!-- END REF -->

---

<!-- REF entitySelectionClass.or().Desc -->
## .or( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.or().Syntax -->
**.or**( *entity* ) : entity selection<p>**.or**( *entity* ) : entity selection <!-- END REF -->

<!-- REF #entitySelectionClass.or().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|entity &#124; entitySelection|entity, entitySelection|->|Entity or entity selection to intersect with|
|Result|entitySelection|<-|New entity selection or new reference to the original entity selection|
<!-- END REF -->

#### Description

The `.or()` function <!-- REF #entitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

*	If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
*	If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection containing the entities belonging to the original entity selection or *entitySelection* is returned (or is not exclusive, entities referenced in both selections are not duplicated in the resulting selection).

>You can compare ordered and/or unordered entity selections. The resulting selection is always unordered. For more information, please refer to the **Ordered vs Unordered entity selections** paragraph in the *4D Developer Guide*.

If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Example 1  

```4d
C_OBJECT($employees1;$employees2;$result)
 $employees1:=ds.Employee.query("lastName = :1";"H@") //Returns "Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //Returns "Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contains "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Example 2  

```4d
C_OBJECT($employees;$employee;$result)
 $employees:=ds.Employee.query("lastName = :1";"H@") // Returns "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.Employee.get(686) //the entity with primary key 686 does not belong to the $employees entity selection
  //It matches the employee "Mary Smith"
 
 $result:=$employees.or($employee) //$result contains "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```

<!-- END REF -->

---

<!-- REF entitySelectionClass.orderBy().Desc -->
## .orderBy( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.orderBy().Syntax -->
**.orderBy**(  *criteria* ) : entity selection<!-- END REF -->

<!-- REF #entitySelectionClass.orderBy().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|criteria |text, collection	|->|Text: attribute path(s) and sorting instruction(s) for the entity selection<p>Collection: collection of criteria objects|	
|Result|entitySelection|<-|New entity selection in the specified order|
<!-- END REF -->

#### Description

The `.orderBy()` function <!-- REF #entitySelectionClass.orderBy().Summary -->returns a new ordered entity selection containing all entities of the entity selection in the order specified by criteria<!-- END REF -->. 

>*	This method does not modify the original entity selection.
*	For more information on ordered entity selections, please refer to **Ordered vs Unordered entity selection**s.

You must use the *criteria* parameter to define how the entities must be sorted. Two syntaxes are supported for this parameter:

*	*criteria* is of `text` type (formula): In this case, *criteria* contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. The formula syntax is:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

The order in which the attributes are passed determines the sorting priority of the entities. By default, attributes are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*	*criteria* is of `collection` type: in this case, each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

By default, attributes are sorted in ascending order ("descending" is false).

You can add as many objects in the criteria collection as necessary.

>Null values are evaluated as less than other values.

#### Example


```4d
// order by formula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")
 
  // order by collection with or without sort orders
 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"firstName";"descending";False))
 $orderColl.push(New object("propertyPath";"salary";"descending";True))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)
 
 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"manager.lastName"))
 $orderColl.push(New object("propertyPath";"salary"))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)
```


<!-- END REF -->

---

<!-- REF entitySelectionClass.touched().Desc -->
## .touched( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.touched().Syntax -->
**.touched( )**: boolean<!-- END REF -->

<!-- REF #entitySelectionClass.touched().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if at least one entity attribute has been modified and not yet saved, else False|
<!-- END REF -->

#### Description

The `.touched()` function <!-- REF #entitySelectionClass.touched().Summary -->tests whether or not an entity attribute has been modified<!-- END REF --> since the entity was loaded into memory or saved.

If an attribute has been modified or calculated, the function returns true, else it returns false. You can use this function to determine if you need to save the entity.

This function returns false for a new entity that has just been created (with [`.new( )`](dataclassClass.html#new-)). Note however that if you use a function which calculates an attribute of the entity, the `.touched( )` function will then return true. For example, if you call [`.getKey( )`](#getkey-) to calculate the primary key, the `.touched( )` function returns true.

#### Example  

In this example, we check to see if it is necessary to save the entity: 

```4d
C_OBJECT($emp)
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName // Even if updated with the same value, the attribute is marked as touched
 
 If($emp.touched()) //if at least one of the attributes has been changed
    $emp.save()
 End if // otherwise, no need to save the entity
```

<!-- END REF -->


---

<!-- REF entitySelectionClass.touchedAttributes().Desc -->
## .touchedAttributes( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.touchedAttributes().Syntax -->
**.touchedAttributes( )**: collection<!-- END REF -->

<!-- REF #entitySelectionClass.touchedAttributes().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|<-|Names of touched attributes, or empty collection|
<!-- END REF -->

#### Description

The `.touchedAttributes()` function <!-- REF #entitySelectionClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified<!-- END REF -->  since the entity was loaded into memory.

This applies for attributes of the type storage or `relatedEntity` (see [.kind](dataclassAttributeClass.html#kind)).

In the case of a related entity having been touched (i.e., the foreign key), the name of the related entity and its primary key's name are returned.

If no entity attribute has been touched, the method returns an empty collection.

#### Example 1  


```4d
 C_COLLECTION($touchedAttributes)
 C_OBJECT($emp)
 
 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```


#### Example 2  


```4d
 C_COLLECTION($touchedAttributes)
 C_OBJECT($emp;$company)
 
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

*	firstName and lastName have a `storage` kind
*	employer has a `relatedEntity` kind
*	employerID is the foreign key of the employer related entity

<!-- END REF -->

---

<!-- REF entitySelectionClass.unlock().Desc -->
## .unlock( )   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17|Added|

</details>

<!-- REF #entitySelectionClass.unlock().Syntax -->
**.unlock( )**: object<!-- END REF -->

<!-- REF #entitySelectionClass.unlock().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Status object|
<!-- END REF -->

#### Description

The `.unlock()` function <!-- REF #entitySelectionClass.unlock().Summary -->removes the pessimistic lock(\*) on the record matching the entity<!-- END REF -->  in the datastore and table related to its dataclass.

(\*)For more information, please refer to the **Entity locking** page.

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

The object returned by `.unlock( )` contains the following property:

|Property|	Type	|Description|
|---|---|---|
|success|	boolean|	True if the unlock action is successful, False otherwise. If the unlock is done on a dropped entity, on a non locked record, or on a record locked by another process or entity, success is False.|

#### Example  


```4d
 C_OBJECT($employee;$status)
 
 $employee:=ds.Employee.get(725)
 $status:=$employee.lock()
 ... //processing
 $status:=$employee.unlock()
 If($status.success)
    ALERT("The entity is now unlocked")
 End if
```

<!-- END REF -->



