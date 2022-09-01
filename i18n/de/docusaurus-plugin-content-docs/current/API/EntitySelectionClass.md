---
id: EntitySelectionClass
title: EntitySelection
---


An entity selection is an object containing one or more reference(s) to [entities](ORDA/dsMapping.md#entity) belonging to the same [Dataclass](ORDA/dsMapping.md#dataclass). An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass.

Entity selections can be created from existing selections using various functions of the [`DataClass` class](DataClassClass.md) such as [`.all()`](DataClassClass.md#all) or [`.query()`](DataClassClass.md#query), or functions of the `EntityClass` class itself, such as [`.and()`](#and) or [`orderBy()`](#orderby). You can also create blank entity selections using the [`dataClass.newSelection()`](DataClassClass.md#newselection) function or the [`Create new selection`](#create-new-selection) command.

### Summary

|                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->|
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.selected().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->|



## Create entity selection

<!-- REF #_command_.Create entity selection.Syntax -->

**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #_command_.Create entity selection.Params -->
| Parameter | Typ                |    | Beschreibung                                                                                  |
| --------- | ------------------ |:--:| --------------------------------------------------------------------------------------------- |
| dsTable   | Tabelle            | -> | Table in the 4D database whose current selection will be used to build the entity selection   |
| settings  | Objekt             | -> | Build option: context                                                                         |
| Ergebnis  | 4D.EntitySelection | <- | Entity selection matching the dataclass related to the given table|<!-- END REF -->


|


#### Beschreibung

The `Create entity selection` command builds and returns a new, [alterable](ORDA/entities.md#shareable-or-alterable-entity-selections) entity selection related to the dataclass matching the given *dsTable*, according to the current selection of this table.

If the current selection is sorted, an [ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). If the current selection is unsorted, an unordered entity selection is created.

If the *dsTable* is not exposed in [`ds`](API/DataStoreClass.md#ds), an error is returned. This command cannot be used with a Remote datastore.

In the optional *settings* parameter, you can pass an object containing the following property:

| Property | Typ  | Beschreibung                                                                                                      |
| -------- | ---- | ----------------------------------------------------------------------------------------------------------------- |
| context  | Text | Label for the [optimization context](ORDA/entities.md#clientserver-optimization) applied to the entity selection. |


#### Beispiel

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee])
// The $employees entity selection now contains a set of reference
// on all entities related to the Employee dataclass
```

#### See also

[`dataClass.newSelection()`](DataClassClass.md#newselection)


## USE ENTITY SELECTION

<!-- REF #_command_.USE ENTITY SELECTION.Syntax -->

**USE ENTITY SELECTION** (*entitySelection*)<!-- END REF -->

<!-- REF #_command_.USE ENTITY SELECTION.Params -->
| Parameter       | Typ             |    | Beschreibung                                   |
| --------------- | --------------- |:--:| ---------------------------------------------- |
| entitySelection | EntitySelection | -> | An entity selection|<!-- END REF -->

|

#### Beschreibung

The `USE ENTITY SELECTION` command updates the current selection of the table matching the dataclass of the *entitySelection* parameter, according to the content of the entity selection.

This command cannot be used with a [Remote datastore](../ORDA/remoteDatastores.md).

> After a call to `USE ENTITY SELECTION`, the first record of the updated current selection (if not empty) becomes the current record, but it is not loaded in memory. If you need to use the values of the fields in the current record, use the `LOAD RECORD` command after the `USE ENTITY SELECTION` command.

#### Beispiel

```4d
var $entitySel : Object

$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel is related to the Employee dataclass
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //The current selection of the Employee table is updated
```


<!-- REF EntitySelectionClass.index.Desc -->
## &#91;*index*&#93;

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->

***&#91;index&#93;*** : 4D.Entity<!-- END REF -->


#### Beschreibung

The `EntitySelection[index]` notation <!-- REF EntitySelectionClass.index.Summary -->allows you to access entities within the entity selection using the standard collection syntax<!-- END REF -->: pass the position of the entity you want to get in the *index* parameter.

Note that the corresponding entity is reloaded from the datastore.

*index* can be any number between 0 and `.length`-1.

*   If *index* is out of range, an error is returned.
*   If *attributeName* kind is `storage`: `.attributeName` returns a collection of values of the same type as *attributeName*.
> > **Warning**: `EntitySelection[index]` is a non assignable expression, which means that it cannot be used as en editable entity reference with methods like [`.lock()`](EntityClass.md#lock) or [`.save()`](EntityClass.md#save). To work with the corresponding entity, you need to assign the returned expression to an assignable expression, such as a variable. Beispiele:

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

#### Beispiel


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")
 $employee:=$employees[2]  // The 3rd entity of the $employees entity selection is reloaded from the database
```

<!-- END REF -->




<!-- REF EntitySelectionClass.attributeName.Desc -->
## .*attributeName*

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->

***.attributeName*** : Collection<br/>***.attributeName*** : 4D.EntitySelection<!-- END REF -->


#### Beschreibung

Any dataclass attribute can be used as a property of an entity selection to return <!-- REF EntitySelectionClass.attributeName.Summary -->a "projection" of values for the attribute in the entity selection<!-- END REF -->. Projected values can be a collection or a new entity selection, depending on the [kind](DataClassAttributeClass.md#kind) (`storage` or `relation`) of the attribute.

*   If *attributeName* kind is `storage`: `.attributeName` returns a collection of values of the same type as *attributeName*.
*   If *attributeName* kind is `relatedEntity`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).
*   If *attributeName* kind is `relatedEntities`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Duplications are removed (an unordered entity selection is returned).


When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned.

If the attribute does not exist in the entity selection, an error is returned.






#### Beispiel 1

Projection of storage values:


```4d
 var $firstNames : Collection
 $entitySelection:=ds.Employee.all()
 $firstNames:=$entitySelection.firstName // firstName type is string
```

The resulting collection is a collection of strings, for example:

```4d
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### Beispiel 2

Projection of related entity:

```4d
 var $es; $entitySelection : cs.EmployeeSelection
 $entitySelection:=ds.Employee.all()
 $es:=$entitySelection.employer // employer is related to a Company dataClass
```

The resulting object is an entity selection of Company with duplications removed (if any).

#### Beispiel 3

Projection of related entities:

```4d
 var $es : cs.EmployeeSelection
 $es:=ds.Employee.all().directReports // directReports is related to Employee dataclass
```

The resulting object is an entity selection of Employee with duplications removed (if any).

<!-- END REF -->




<!-- REF EntitySelectionClass.add().Desc -->
## .add()

<details><summary>History</summary>

| Version | Changes                                   |
| ------- | ----------------------------------------- |
| v18 R5  | Only supports alterable entity selections |
| v17     | Added                                     |

</details>


<!-- REF #EntitySelectionClass.add().Syntax -->

**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->
| Parameter | Typ                |    | Beschreibung                                                             |
| --------- | ------------------ |:--:| ------------------------------------------------------------------------ |
| entity    | 4D.Entity          | -> | Entity to be added to the entity selection                               |
| Ergebnis  | 4D.EntitySelection | -> | Entity selection including the added *entity*|<!-- END REF -->


|


#### Beschreibung

The `.add()` function <!-- REF #EntitySelectionClass.add().Summary -->adds the specified *entity* to the entity selection and returns the modified entity selection<!-- END REF -->.
> This function modifies the original entity selection.

**Warning:** The entity selection must be *alterable*, i.e. it has been created for example by [`.newSelection()`](DataClassClass.md#newselection) or `Create entity selection`, otherwise `.add()` will return an error. Shareable entity selections do not accept the addition of entities. For more information, please refer to the [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections) section.


*   If the entity selection is ordered, *entity* is added at the end of the selection. If a reference to the same entity already belongs to the entity selection, it is duplicated and a new reference is added.
*   If the entity selection is unordered, *entity* is added anywhere in the selection, with no specific order.
> For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

The modified entity selection is returned by the function, so that function calls can be chained.

An error occurs if *entity* and the entity selection are not related to the same Dataclass. If *entity* is Null, no error is raised.

#### Beispiel 1

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"S@")
 $employee:=ds.Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees.add($employee) //The $employee entity is added to the $employees entity selection
```

#### Beispiel 2

Calls to the function can be chained:

```4d
 var $sel : cs.ProductSelection
 var $p1;$p2;$p3 : cs.ProductEntity

 $p1:=ds.Product.get(10)
 $p2:=ds.Product.get(11)
 $p3:=ds.Product.get(12)
 $sel:=ds.Product.query("ID > 50")
 $sel:=$sel.add($p1).add($p2).add($p3)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.and().Desc -->
## .and()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.and().Syntax -->

**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.and().Params -->
| Parameter       | Typ                |    | Beschreibung                                                                                              |
| --------------- | ------------------ |:--:| --------------------------------------------------------------------------------------------------------- |
| entity          | 4D.Entity          | -> | Entity to intersect with                                                                                  |
| entitySelection | 4D.EntitySelection | -> | Entity selection to intersect with                                                                        |
| Ergebnis        | 4D.EntitySelection | <- | New entity selection with the result of intersection with logical AND operator|<!-- END REF -->


|


#### Beschreibung

The `.and()` function <!-- REF #EntitySelectionClass.and().Summary -->combines the entity selection with an *entity* or *entitySelection* parameter using the logical AND operator<!-- END REF -->; it returns a new, unordered entity selection that contains only the entities that are referenced in both the entity selection and the parameter.

*   If you pass *entity* as parameter, you combine this entity with the entity selection. If the entity belongs to the entity selection, a new entity selection containing only the entity is returned. Otherwise, an empty entity selection is returned.
*   If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
> > You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

If the original entity selection or the *entitySelection* parameter is empty, or if the *entity* is Null, an empty entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Beispiel 1


```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")   
  //The $employees entity selection contains the entity
  //with primary key 710 and other entities
  //for ex. "Colin Hetrick" / "Grady Harness" / "Sherlock Holmes" (primary key 710)
 $employee:=ds.Employee.get(710) // Returns "Sherlock Holmes"

 $result:=$employees.and($employee) //$result is an entity selection containing   
  //only the entity with primary key 710 ("Sherlock Holmes")
```


#### Beispiel 2

We want to have a selection of employees named "Jones" who live in New York:

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.average().Desc -->
## .average()

<details><summary>History</summary>

| Version | Changes                                     |
| ------- | ------------------------------------------- |
| v18 R6  | Returns undefined if empty entity selection |
| v17     | Added                                       |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->

**.average**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.average().Params -->
| Parameter     | Typ  |    | Beschreibung                                                                                                          |
| ------------- | ---- |:--:| --------------------------------------------------------------------------------------------------------------------- |
| attributePath | Text | -> | Attribute path to be used for calculation                                                                             |
| Ergebnis      | Zahl | <- | Arithmetic mean (average) of entity attribute values (Undefined if empty entity selection)|<!-- END REF -->

|

#### Beschreibung

The `.average()` function <!-- REF #EntitySelectionClass.average().Summary -->The `.average()` function<!-- END REF -->.

Pass in the *attributePath* parameter the attribute path to evaluate.

Only numerical values are taken into account for the calculation. Note however that, if the *attributePath* of the entity selection contains mixed value types, `.average()` takes all scalar elements into account to calculate the average value.
> Date values are converted to numerical values (seconds) and used to calculate the average.

`.average()` returns **undefined** if the entity selection is empty or *attributePath* does not contain numerical values.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Beispiel

We want to obtain a list of employees whose salary is higher than the average salary:

```4d
 var $averageSalary : Real
 var $moreThanAv : cs.EmployeeSelection
 $averageSalary:=ds.Employee.all().average("salary")
 $moreThanAv:=ds.Employee.query("salary > :1";$averageSalary)
```

<!-- END REF -->



<!-- REF EntitySelectionClass.contains().Desc -->
## .contains()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->

**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->
| Parameter | Typ       |    | Beschreibung                                                                              |
| --------- | --------- |:--:| ----------------------------------------------------------------------------------------- |
| entity    | 4D.Entity | -> | Entity to evaluate                                                                        |
| Ergebnis  | Boolean   | <- | True if the entity belongs to the entity selection, else False|<!-- END REF -->

|

#### Beschreibung

The `.contains()` function <!-- REF #EntitySelectionClass.contains().Summary -->returns true if entity reference belongs to the entity selection<!-- END REF -->, and false otherwise.

In *entity*, specify the entity to search for in the entity selection. If entity is Null, the function will return false.

If *entity* and the entity selection do not belong to the same dataclass, an error is raised.

#### Beispiel

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds.Employee.get(610)

 If($employees.contains($employee))
    ALERT("The entity with primary key 610 has a last name beginning with H")
 Else
    ALERT("The entity with primary key 610 does not have a last name beginning with H")
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.count().Desc -->
## .count()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->

**.count**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.count().Params -->
| Parameter     | Typ  |    | Beschreibung                                                                                 |
| ------------- | ---- |:--:| -------------------------------------------------------------------------------------------- |
| attributePath | Text | -> | Path of the attribute to be used for calculation                                             |
| Ergebnis      | Zahl | <- | Number of non null *attributePath* values in the entity selection|<!-- END REF -->

|

#### Beschreibung

The `.count()` function <!-- REF #EntitySelectionClass.count().Summary -->The `.count()` function<!-- END REF -->.
> Only scalar values are taken into account. Object or collection type values are considered as null values.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

#### Beispiel

We want to find out the total number of employees for a company without counting any whose job title has not been specified:

```4d
 var $sel : cs.EmployeeSelection
 var $count : Real

 $sel:=ds.Employee.query("employer = :1";"Acme, Inc")
 $count:=$sel.count("jobtitle")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.copy().Desc -->
## .copy()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R5  | Added   |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->

**.copy**( { *option* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.copy().Params -->
| Parameter | Typ                |    | Beschreibung                                            |
| --------- | ------------------ |:--:| ------------------------------------------------------- |
| option    | Ganzzahl           | -> | `ck shared`: return a shareable entity selection        |
| Ergebnis  | 4D.EntitySelection | <- | Copy of the entity selection|<!-- END REF -->

|

#### Beschreibung

The `.copy()` function <!-- REF #EntitySelectionClass.copy().Summary -->The `.copy()` function<!-- END REF -->.

> This function does not modify the original entity selection.

By default, if the *option* parameter is omitted, the function returns a new, alterable entity selection (even if the function is applied to a shareable entity selection). Pass the `ck shared` constant in the *option* parameter if you want to create a shareable entity selection.

> For information on the shareable property of entity selections, please refer to the [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections) section.

#### Beispiel

You create a new, empty entity selection of products when the form is loaded:

```4d
 Case of
    :(Form event code=On Load)
       Form.products:=ds.Products.newSelection()
 End case

```

Then this entity selection is updated with products and you want to share the products between several processes. You copy the Form.products entity selection as a shareable one:

```4d
 ...
  // The Form.products entity selection is updated
 Form.products.add(Form.selectedProduct)

 Use(Storage)
    If(Storage.products=Null)
       Storage.products:=New shared object()
    End if

    Use(Storage.products)
       Storage.products:=Form.products.copy(ck shared)
    End use
 End use
```

<!-- END REF -->


<!-- REF EntitySelectionClass.distinct().Desc -->
## .distinct()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->

**.distinct**( *attributePath* : Text { ; *option* : Integer } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinct().Params -->
| Parameter     | Typ        |    | Beschreibung                                                     |
| ------------- | ---------- |:--:| ---------------------------------------------------------------- |
| attributePath | Text       | -> | Path of attribute whose distinct values you want to get          |
| option        | Ganzzahl   | -> | `dk diacritical`: diacritical evaluation ("A" # "a" for example) |
| Ergebnis      | Collection | <- | Collection with only distinct values|<!-- END REF -->

|

#### Beschreibung

The `.distinct()` function <!-- REF #EntitySelectionClass.distinct().Summary -->The `.distinct()` function<!-- END REF -->.

The returned collection is automatically sorted. **Null** values are not returned.

In the *attributePath* parameter, pass the entity attribute whose distinct values you want to get. Only scalar values (text, number, boolean, or date) can be handled. Only scalar values (text, number, boolean, or date) can be handled. If the *attributePath* leads to an object property that contains values of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  booleans
2.  strings
3.  numbers
4.  dates

You can use the `[]` notation to designate a collection when *attributePath* is a path within an object (see examples).

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `dk diacritical` constant in the *option* parameter.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

#### Beispiele

You want to get a collection containing a single element per country name:

```4d
 var $countries : Collection
 $countries:=ds.Employee.all().distinct("address.country")
```

`nicknames` is a collection and `extra` is an object attribute:

```4d
$values:=ds.Employee.all().distinct("extra.nicknames[].first")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->

**.drop**( { *mode* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.drop().Params -->
| Parameter                  | Typ                |    | Beschreibung                                                                                     |
| -------------------------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------ |
| mode                       | Ganzzahl           | -> | `dk stop dropping on first error`: stops method execution on first non-droppable entity          |
| Ergebnis                   | 4D.EntitySelection | <- | Empty entity selection if successful, else entity selection containing non-droppable entity(ies) |
|<!-- END REF -->

|                    |    |                                                                                                  |

#### Beschreibung

The `.drop()` function <!-- REF #EntitySelectionClass.drop().Summary -->removes the entities belonging to the entity selection from the table related to its dataclass within the datastore<!-- END REF -->. The entity selection remains in memory.
> Removing entities is permanent and cannot be undone. It is recommended to call this action in a transaction in order to have a rollback option.

If a locked entity is encountered during the execution of `.drop()`, it is not removed. By default, the method processes all entities of the entity selection and returns non-droppable entities in the entity selection. If you want the method to stop execution at the first encountered non-droppable entity, pass the `dk stop dropping on first error` constant in the *mode* parameter.

#### Beispiel

Example without the `dk stop dropping on first error` option:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
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
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped is an entity selection containing the first not dropped entity
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```


<!-- END REF -->



<!-- REF EntitySelectionClass.extract().Desc -->
## .extract()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |

</details>







<!-- REF #EntitySelectionClass.extract().Syntax -->
**.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.extract().Params -->
| Parameter     | Typ        |    | Beschreibung                                                                            |
| ------------- | ---------- |:--:| --------------------------------------------------------------------------------------- |
| attributePath | Text       | -> | Attribute path whose values must be extracted to the new collection                     |
| targetPath    | Text       | -> | Target attribute path or attribute name                                                 |
| option        | Ganzzahl   | -> | `ck keep null`: include null attributes in the returned collection (ignored by default) |
| Ergebnis      | Collection | <- | Collection containing extracted values|<!-- END REF -->

|

#### Beschreibung

The `.extract()` function <!-- REF #EntitySelectionClass.extract().Summary -->The `.extract()` function<!-- END REF -->.

*attributePath* can refer to:

*   a scalar dataclass attribute,
*   related entity,
*   related entities.

If *attributePath* is invalid, an empty collection is returned.

This function accepts two syntaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* values of the entity selection.

By default, entities for which *attributePath* is *null* or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the *option* parameter to include these values as **null** elements in the returned collection.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* properties. Each element of the returned collection is an object with *targetPath* properties filled with the corresponding *attributePath* properties. Null values are kept (*option* parameter is ignored with this syntax).

If several *attributePath* are given, a *targetPath* must be given for each. Only valid pairs \[*attributePath*, *targetPath*] are extracted.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as an entity.
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as an entity selection.

> Entities of a collection of entities accessed by \[ ] are not reloaded from the database.


#### Beispiel

Given the following table and relation:

![](../assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
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



<!-- REF EntitySelectionClass.first().Desc -->
## .first()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->

**.first()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->
| Parameter | Typ       |    | Beschreibung                                                                                                  |
| --------- | --------- |:--:| ------------------------------------------------------------------------------------------------------------- |
| Ergebnis  | 4D.Entity | <- | Reference to the first entity of the entity selection (Null if selection is empty)|<!-- END REF -->

|

#### Beschreibung

The `.first()` function <!-- REF #EntitySelectionClass.first().Summary -->returns a reference to the entity in the first position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```4d
 $entity:=$entitySel[0]
```

There is, however, a difference between both statements when the selection is empty:


```4d
 var $entitySel : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") //no matching entity
  //entity selection is then empty
 $entity:=$entitySel.first() //returns Null
 $entity:=$entitySel[0]  //generates an error
```

#### Beispiel


```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary > :1";100000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.first()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->

**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntitySelectionClass.getDataClass().Params -->
| Parameter | Typ          |    | Beschreibung                                                                      |
| --------- | ------------ |:--:| --------------------------------------------------------------------------------- |
| Ergebnis  | 4D.DataClass | <- | Dataclass object to which the entity selection belongs|<!-- END REF -->

|

#### Beschreibung

The `.getDataClass()` function <!-- REF #EntitySelectionClass.getDataClass().Summary -->The `.getDataClass()` function<!-- END REF -->.

This function is mainly useful in the context of generic code.

#### Beispiel

The following generic code duplicates all entities of the entity selection:

```4d
  //duplicate_entities method
  //duplicate_entities($entity_selection)

 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null //reset the primary key
    $status:=$duplicate.save()
 End for each
```

<!-- END REF -->

<!-- REF EntitySelectionClass.getRemoteContextAttributes().Desc -->
## .getRemoteContextAttributes()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19R5   | Added   |

</details>

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Syntax -->

**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Params -->
| Parameter | Typ  |    | Beschreibung                                                                                       |
| --------- | ---- | -- | -------------------------------------------------------------------------------------------------- |
| ergebnis  | Text | <- | Context attributes linked to the entity selection, separated by a comma|<!-- END REF -->

|

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. In most cases, you will not need to use it.


#### Beschreibung

The `.getRemoteContextAttributes()` function <!-- REF #EntitySelectionClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity selection<!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity selection, the function returns an empty Text.

#### Beispiel

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity

var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$info:=$persons.getRemoteContextAttributes()
//$info = "firstname,address,address.city"
```

#### See also

[Entity.getRemoteContextAttributes()](./EntityClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntitySelectionClass.isAlterable().Desc -->
## .isAlterable()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R5  | Added   |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->

**.isAlterable()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->
| Parameter | Typ     |    | Beschreibung                                                                          |
| --------- | ------- |:--:| ------------------------------------------------------------------------------------- |
| Ergebnis  | Boolean | <- | True if the entity selection is alterable, False otherwise|<!-- END REF -->

|

#### Beschreibung

The `.isAlterable()` function <!-- REF #EntitySelectionClass.isAlterable().Summary -->returns True if the entity selection is alterable<!-- END REF -->, and False if the entity selection is not alterable.

For more information, please refer to [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Beispiel

You are about to display `Form.products` in a [list box](FormObjects/listbox_overview.md) to allow the user to add new products. You want to make sure it is alterable so that the user can add new products without error:

```4d
If (Not(Form.products.isAlterable()))
    Form.products:=Form.products.copy()
End if
...
Form.products.add(Form.product)
Form.products.add(Form.product)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.isOrdered().Desc -->
## .isOrdered()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->

**.isOrdered()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->
| Parameter | Typ     |    | Beschreibung                                                                        |
| --------- | ------- |:--:| ----------------------------------------------------------------------------------- |
| Ergebnis  | Boolean | <- | True if the entity selection is ordered, False otherwise|<!-- END REF -->

|

#### Beschreibung

The `.isOrdered()` function <!-- REF #EntitySelectionClass.isOrdered().Summary -->returns True if the entity selection is ordered<!-- END REF -->, and False if it is unordered.
> This function always returns True when the entity selection comes from a remote datastore.

For more information, please refer to [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).


#### Beispiel


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
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


<!-- REF EntitySelectionClass.last().Desc -->
## .last()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->

**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->
| Parameter | Typ       |    | Beschreibung                                                                                                     |
| --------- | --------- |:--:| ---------------------------------------------------------------------------------------------------------------- |
| Ergebnis  | 4D.Entity | <- | Reference to the last entity of the entity selection (Null if empty entity selection)|<!-- END REF -->

|

#### Beschreibung

The `.last()` function <!-- REF #EntitySelectionClass.last().Summary -->returns a reference to the entity in last position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```4d
 $entity:=$entitySel[length-1]
```

If the entity selection is empty, the function returns Null.


#### Beispiel


```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary < :1";50000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.last()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.length.Desc -->
## .length

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->

**.length** : Integer<!-- END REF -->


#### Beschreibung

The `.length` property <!-- REF #EntitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. If the entity selection is empty, it returns 0.

Entity selections always have a `.length` property.

> To know the total number of entities in a dataclass, it is recommended to use the [`getCount()`](DataClassClass.md#getcount) function which is more optimized than the `ds.myClass.all().length` expression.

#### Beispiel

```4d
 var $vSize : Integer
 $vSize:=ds.Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" male employees found.")
```


<!-- END REF -->


<!-- REF EntitySelectionClass.max().Desc -->
## .max()

<details><summary>History</summary>

| Version | Changes                                     |
| ------- | ------------------------------------------- |
| v17     | Added                                       |
| v18 R6  | Returns undefined if empty entity selection |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->

**.max**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.max().Params -->
| Parameter     | Typ  |    | Beschreibung                                          |
| ------------- | ---- | -- | ----------------------------------------------------- |
| attributePath | Text | -> | Path of the attribute to be used for calculation      |
| Ergebnis      | any  | <- | Highest value of attribute|<!-- END REF -->

|

#### Beschreibung

The `.max()` function <!-- REF #EntitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of *attributePath* in the entity selection<!-- END REF -->. It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function.

If you pass in *attributePath* a path to an object property containing different types of values, the `.max()` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.max()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.


An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.



#### Beispiel

We want to find the highest salary among all the female employees:

```4d
 var $sel : cs.EmpSelection
 var $maxSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $maxSalary:=$sel.max("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.min().Desc -->
## .min()

<details><summary>History</summary>

| Version | Changes                                     |
| ------- | ------------------------------------------- |
| v17     | Added                                       |
| v18 R6  | Returns undefined if empty entity selection |


</details>

<!-- REF #EntitySelectionClass.min().Syntax -->

**.min**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.min().Params -->
| Parameter     | Typ  |    | Beschreibung                                         |
| ------------- | ---- |:--:| ---------------------------------------------------- |
| attributePath | Text | -> | Path of the attribute to be used for calculation     |
| Ergebnis      | any  | <- | Lowest value of attribute|<!-- END REF -->

|

#### Beschreibung

The `.min()` function <!-- REF #EntitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of attributePath in the entity selection<!-- END REF -->.  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function (excluding **null** values).

If you pass in *attributePath* a path to an object property containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.min()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Beispiel

In this example, we want to find the lowest salary among all the female employees:

```4d
 var $sel : cs.EmpSelection
 var $minSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $minSalary:=$sel.min("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.minus().Desc -->
## .minus()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->

**.minus**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.minus**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->
| Parameter       | Typ                |    | Beschreibung                                                                                        |
| --------------- | ------------------ |:--:| --------------------------------------------------------------------------------------------------- |
| entity          | 4D.Entity          | -> | Entity to substract                                                                                 |
| entitySelection | 4D.EntitySelection | -> | Entity selection to substract                                                                       |
| Ergebnis        | 4D.EntitySelection | <- | New entity selection or a new reference on the existing entity selection|<!-- END REF -->

|

#### Beschreibung

The `.minus()` function <!-- REF #EntitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the *entity* or the entities of *entitySelection* and returns the resulting entity selection<!-- END REF -->.

*   If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*   If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*.
> > You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

If the original entity selection or both the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Beispiel 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName = :1";"H@")
  // The $employees entity selection contains the entity with primary key 710 and other entities
  // for ex. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (primary key 710)

 $employee:=ds.Employee.get(710) // Returns "Sherlock Holmes"

 $result:=$employees.minus($employee) //$result contains "Colin Hetrick", "Grady Harness"
```


#### Beispiel 2

We want to have a selection of female employees named "Jones" who live in New York :

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```

<!-- END REF -->


<!-- REF EntitySelectionClass.or().Desc -->
## .or()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.or().Syntax -->

**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.or().Params -->
| Parameter       | Typ                |    | Beschreibung                                                                                      |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------- |
| entity          | 4D.Entity          | -> | Entity to intersect with                                                                          |
| entitySelection | 4D.EntitySelection | -> | Entity selection to intersect with                                                                |
| Ergebnis        | 4D.EntitySelection | <- | New entity selection or new reference to the original entity selection|<!-- END REF -->

|

#### Beschreibung

The `.or()` function <!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

*   If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection that contains only the entities that are referenced in both selections is returned. A new entity selection that contains only the entities that are referenced in both selections is returned.
*   If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.
> > You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). The resulting selection is always unordered.

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Beispiel 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") //Returns "Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //Returns "Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contains "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Beispiel 2

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // Returns "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.Employee.get(686) //the entity with primary key 686 does not belong to the $employees entity selection
  //It matches the employee "Mary Smith"

 $result:=$employees.or($employee) //$result contains "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```

<!-- END REF -->


<!-- REF EntitySelectionClass.orderBy().Desc -->
## .orderBy()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.orderBy().Syntax -->

**.orderBy**( *pathString* : Text ) : 4D.EntitySelection<br/>**.orderBy**( *pathObjects* : Collection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderBy().Params -->
| Parameter   | Typ                |    | Beschreibung                                                           |
| ----------- | ------------------ |:--:| ---------------------------------------------------------------------- |
| pathString  | Text               | -> | Attribute path(s) and sorting instruction(s) for the entity selection  |
| pathObjects | Collection         | -> | Collection of criteria objects                                         |
| Ergebnis    | 4D.EntitySelection | <- | New entity selection in the specified order|<!-- END REF -->

|

#### Beschreibung

The `.orderBy()` function <!-- REF #EntitySelectionClass.orderBy().Summary -->The `.orderBy()` function<!-- END REF -->.
> * This method does not modify the original entity selection.
*   For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

You must use a criteria parameter to define how the entities must be sorted. Two different parameters are supported:

*   *pathString* (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. The syntax is:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

The order in which the attributes are passed determines the sorting priority of the entities. By default, attributes are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*   *pathObjects* (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

By default, attributes are sorted in ascending order ("descending" is false).

You can add as many objects in the criteria collection as necessary.
> Null values are evaluated as less than other values.

#### Beispiel


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


<!-- REF EntitySelectionClass.orderByFormula().Desc -->
## .orderByFormula()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R6  | Added   |

</details>

<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->

**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br/>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderByFormula().Params -->
| Parameter     | Typ                |    | Beschreibung                                            |
| ------------- | ------------------ |:--:| ------------------------------------------------------- |
| formulaString | Text               | -> | Formula string                                          |
| formulaObj    | Objekt             | -> | Formula object                                          |
| sortOrder     | Ganzzahl           | -> | `dk ascending` (default) or `dk descending`             |
| settings      | Objekt             | -> | Parameter(s) for the formula                            |
| Ergebnis      | 4D.EntitySelection | <- | New ordered entity selection|<!-- END REF -->

|

#### Beschreibung

The `.orderByFormula()` function <!-- REF #EntitySelectionClass.orderByFormula().Summary -->returns a new, ordered entity selection<!-- END REF --> containing all entities of the entity selection in the order defined through the *formulaString* or *formulaObj* and, optionally, *sortOrder* and *settings* parameters.
> This function does not modify the original entity selection.

You can use either a *formulaString* or a *formulaObj* parameter:

- *formulaString*: you pass a 4D expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `Formula` or `Formula from string` command.

The *formulaString* or *formulaObj* is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. The result must be of a sortable type (boolean, date, number, text, time, null).
> A null result is always the smallest value.

By default if you omit the *sortOrder* parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the *sortOrder* parameter:

| Constant      | Wert | Kommentar                      |
| ------------- | ---- | ------------------------------ |
| dk ascending  | 0    | Ascending sort order (default) |
| dk descending | 1    | Descending sort order          |

Within the *formulaString* or *formulaObj*, the processed entity and thus its attributes are available through the `This` command (for example, `This.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in $1.

#### Beispiel 1

Sorting students using a formula provided as text:

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascending by default
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

Same sort order but using a formula object:

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // ascending by default
 $es2:=$es1.orderByFormula($formula;dk descending)
```


#### Beispiel 2

A formula is given as a formula object with parameters; `settings.args` object is received as $1 in the ***computeAverage*** method.

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. A single formula object is used to compute a student's average grade with different coefficients for schoolA and schoolB.

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() //settings object
 $schoolA.args:=New object("english";1;"math";1;"history";1) // Coefficients to compute an average

  //Order students according to school A criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() //settings object
 $schoolB.args:=New object("english";1;"math";2;"history";3) // Coefficients to compute an average

  //Order students according to school B criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // computeAverage method
  // -----------------------------
 #DECLARE ($coefList : Object) -> $result : Integer
 var $subject : Text
 var $average; $sum : Integer

 $average:=0
 $sum:=0

 For each($subject;$coefList)
    $sum:=$sum+$coefList[$subject]
 End for each

 For each($subject;This.marks)
    $average:=$average+(This.marks[$subject]*$coefList[$subject])
 End for each

 $result:=$average/$sum
```

<!-- END REF -->



<!-- REF EntitySelectionClass.query().Desc -->
## .query()

<details><summary>History</summary>

| Version | Changes                            |
| ------- | ---------------------------------- |
| v17 R6  | Support of Formula parameters      |
| v17 R5  | Support of placeholders for values |
| v17     | Added                              |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->

**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->
| Parameter     | Typ                |    | Beschreibung                                                                                                                                                  |
| ------------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text               | -> | Search criteria as string                                                                                                                                     |
| formula       | Objekt             | -> | Search criteria as formula object                                                                                                                             |
| wert          | any                | -> | Value(s) to use for indexed placeholder(s)                                                                                                                    |
| querySettings | Objekt             | -> | Query options: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                                                     |
| Ergebnis      | 4D.EntitySelection | <- | New entity selection made up of entities from entity selection meeting the search criteria specified in *queryString* or *formula*|<!-- END REF -->

|

#### Beschreibung

The `.query()` function <!-- REF #EntitySelectionClass.query().Summary -->The `.query()` function<!-- END REF -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s) among all the entities in the entity selection Lazy loading is applied.
> This function does not modify the original entity selection.

If no matching entities are found, an empty `EntitySelection` is returned.


For detailed information on how to build a query using *queryString*, *value*, and *querySettings* parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.
> By default if you omit the **order by** statement in the *queryString*, the returned entity selection is [not ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). Note however that, in Client/Server mode, it behaves like an ordered entity selection (entities are added at the end of the selection).

#### Beispiel 1


```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```


#### Beispiel 2

More examples of queries can be found in the DataClass [`.query()`](DataClassClass.md#query) page.

#### See also

[`.query()`](DataClassClass.md#query) for dataclass

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPath.Desc -->
## .queryPath

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->

**.queryPath** : Text<!-- END REF -->


#### Beschreibung

The `.queryPath` property <!-- REF #EntitySelectionClass.queryPath.Summary -->contains a detailed description of the query as it was actually performed by 4D<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPath":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page.

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPlan.Desc -->
## .queryPlan

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.queryPlan.Syntax -->

**.queryPlan** : Text<!-- END REF -->



#### Beschreibung

The `.queryPlan` property <!-- REF #EntitySelectionClass.queryPlan.Summary --> contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page.

<!-- END REF -->


<!-- REF EntitySelectionClass.refresh().Desc -->
## .refresh()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->

**.refresh()**<!-- END REF -->

<!-- REF #EntitySelectionClass.refresh().Params -->
| Parameter | Typ |  | Beschreibung                                               |
| --------- | --- |::| ---------------------------------------------------------- |
|           |     |  | Does not require any parameters|<!-- END REF -->

|

#### Beschreibung
> This function only works with a remote datastore (client / server or `Open datastore` connection).

The `.refresh()` function <!-- REF #EntitySelectionClass.refresh().Summary -->immediately "invalidates" the entity selection data in the local ORDA cache<!-- END REF --> so that the next time 4D requires the entity selection, it will be reloaded from the database.

By default, the local ORDA cache is invalidated after 30 seconds. In the context of client / server applications using both ORDA and the classic language, this method allows you to make sure a remote application will always work with the latest data.

#### Beispiel 1

In this example, classic and ORDA code modify the same data simultaneously:

```4d
 //On a 4D remote

 var $selection : cs.StudentsSelection
 var $student : cs.StudentsEntity

 $selection:=ds.Students.query("lastname=:1";"Collins")
  //The first entity is loaded in the ORDA cache
 $student:=$selection.first()

  //Update with classic 4D, ORDA cache is not aware of if
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //to get the latest version, the ORDA cache must be invalidated
 $selection.refresh()
  // Even if cache is not expired, the first entity is reloaded from disk
 $student:=$selection.first()

  //$student.lastname contains "Colin"
```


#### Beispiel 2

A list box displays the Form.students entity selection and several clients work on it.

```4d
// Form method:
 Case of
    :(Form event code=On Load)
       Form.students:=ds.Students.all()
 End case
  //
  //
  // On client #1, the user loads, updates, and saves the first entity
  // On client #2, the user loads, updates, and saves the same entity
  //
  //
  // On client #1:
 Form.students.refresh() // Invalidates the ORDA cache for the Form.students entity selection
  // The list box content is refreshed from the database with update made by client #2
```


<!-- END REF -->


<!-- REF EntitySelectionClass.selected().Desc -->
## .selected()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19 R3  | Added   |

</details>

<!-- REF #EntitySelectionClass.selected().Syntax -->

**.selected**( *selectedEntities* : 4D.EntitySelection ) : Object<!-- END REF -->

<!-- REF #EntitySelectionClass.selected().Params -->
| Parameter        | Typ                |    | Beschreibung                                                                      |
| ---------------- | ------------------ |:--:| --------------------------------------------------------------------------------- |
| selectedEntities | 4D.EntitySelection | -> | Entity selection with entities for which to know the rank in the entity selection |
| Ergebnis         | Objekt             | <- | Range(s) of selected entities in entity selection|<!-- END REF -->



|



#### Beschreibung

The `.selected()` function <!-- REF #EntitySelectionClass.selected().Summary -->returns an object describing the position(s) of *selectedEntities* in the original entity selection<!-- END REF -->.
> This function does not modify the original entity selection.

Pass in the *selectedEntities* parameter an entity selection containing entities for which you want to know the position in the original entity selection. *selectedEntities* must be an entity selection belonging to the same dataclass as the original entity selection, otherwise an error 1587 - "The entity selection comes from an incompatible dataclass" is raised.

#### Ergebnis

The returned object contains the following properties:

| Property       | Typ        | Beschreibung                    |
| -------------- | ---------- | ------------------------------- |
| ranges         | Collection | Collection of range objects     |
| ranges[].start | Ganzzahl   | First entity index in the range |
| ranges[].end   | Ganzzahl   | Last entity index in the range  |

If a `ranges` property contains a single entity, `start` = `end`. Index starts at 0.

The function returns an empty collection in the `ranges` property if the original entity selection or the *selectedEntities* entity selection is empty.

#### Beispiel

```4d
var $invoices; $cashSel; $creditSel : cs.Invoices
var $result1; $result2 : Object

$invoices:=ds.Invoices.all()

$cashSelection:=ds.Invoices.query("payment = :1"; "Cash")
$creditSel:=ds.Invoices.query("payment IN :1"; New collection("Cash"; "Credit Card"))

$result1:=$invoices.selected($cashSelection)
$result2:=$invoices.selected($creditSel)

//$result1 = {ranges:[{start:0;end:0},{start:3;end:3},{start:6;end:6}]}
//$result2 = {ranges:[{start:0;end:1},{start:3;end:4},{start:6;end:7}]}

```

<!-- END REF -->







<!-- REF EntitySelectionClass.slice().Desc -->
## .slice()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.slice().Syntax -->

**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.slice().Params -->
| Parameter | Typ                |    | Beschreibung                                                                              |
| --------- | ------------------ |:--:| ----------------------------------------------------------------------------------------- |
| startFrom | Ganzzahl           | -> | Index to start the operation at (included)                                                |
| end       | Ganzzahl           | -> | End index (not included)                                                                  |
| Ergebnis  | 4D.EntitySelection | <- | New entity selection containing sliced entities (shallow copy)|<!-- END REF -->

|

#### Beschreibung

The `.slice()` function <!-- REF #EntitySelectionClass.slice().Summary -->returns a portion of an entity selection into a new entity selection<!-- END REF -->, selected from the *startFrom* index to the *end* index (*end* is not included) or to the last entity of the entity selection. This method returns a shallow copy of the entity selection (it uses the same entity references).
> This function does not modify the original entity selection.

If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.
*   If *startFrom >= length*, the function returns an empty entity selection.
*   If *end* < 0, it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

If the entity selection contains entities that were dropped in the meantime, they are also returned.

#### Beispiel 1

You want to get a selection of the first 9 entities of the entity selection:

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```


#### Beispiel 2

Assuming we have ds.Employee.all().length = 10

```4d
var $slice : cs.EmployeeSelection
$slice:=ds.Employee.all().slice(-1;-2) //tries to return entities from index 9 to 8, but since 9 > 8, returns an empty entity selection

```

<!-- END REF -->


<!-- REF EntitySelectionClass.sum().Desc -->
## .sum()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |


</details>

<!-- REF #EntitySelectionClass.sum().Syntax -->

**.sum**( *attributePath* : Text ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.sum().Params -->
| Parameter     | Typ  |    | Beschreibung                                              |
| ------------- | ---- |:--:| --------------------------------------------------------- |
| attributePath | Text | -> | Path of the attribute to be used for calculation          |
| Ergebnis      | Zahl | <- | Sum of entity selection values|<!-- END REF -->

|

#### Beschreibung


The `.sum()` function <!-- REF #EntitySelectionClass.sum().Summary -->The `.sum()` function<!-- END REF -->.

`.sum()` returns 0 if the entity selection is empty.

The sum can only be done on values of number type. The sum can only be done on values of number type. In this case, if *attributePath* leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

An error is returned if:

*   *attributePath* is not a numerical or an object attribute,
*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.



#### Beispiel

```4d
var $sel : cs.EmployeeSelection
var $sum : Real

$sel:=ds.Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.toCollection().Desc -->
## .toCollection()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17     | Added   |

</details>

<!-- REF #EntitySelectionClass.toCollection().Syntax -->

**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br/>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br/>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->
| Parameter    | Typ        |    | Beschreibung                                                                                          |
| ------------ | ---------- |:--:| ----------------------------------------------------------------------------------------------------- |
| filterString | Text       | -> | String with entity attribute path(s) to extract                                                       |
| filterCol    | Collection | -> | Collection of entity attribute path(s) to extract                                                     |
| options      | Ganzzahl   | -> | `dk with primary key`: adds the primary key<br/>`dk with stamp`: adds the stamp                 |
| begin        | Ganzzahl   | -> | Designates the starting index                                                                         |
| howMany      | Ganzzahl   | -> | Number of entities to extract                                                                         |
| Ergebnis     | Collection | <- | Collection of objects containing attributes and values of entity selection|<!-- END REF -->

|

#### Beschreibung

The `.toCollection()` function <!-- REF #EntitySelectionClass.toCollection().Summary -->creates and returns a collection where each element is an object containing a set of properties and values <!-- END REF -->corresponding to the attribute names and values for the entity selection.

If no filter parameter is passed or the first parameter contains an empty string or "*", all the attributes are extracted. Attributes with [kind](DataClassAttributeClass.md#kind) property as "relatedEntity" are extracted with the simple form: an object with property \_\_KEY (primary key). Attributes with kind property as "relatedEntities" are not extracted.

Or, you can designate the entity attributes to extract using a filter parameter. You can use one of these two filters:

*   *filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
*   *filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]


If a filter is specified for an attribute of the `relatedEntity` kind:

*   propertyPath = "relatedEntity" -> it is extracted with simple form
*   propertyPath = "relatedEntity.*" -> all the properties are extracted
*   propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted -> only those properties are extracted


If a filter is specified for an attribute of the `relatedEntities` kind:

*   propertyPath = "relatedEntities.*" -> all the properties are extracted
*   propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted -> only those properties are extracted



In the *options* parameter, you can pass the `dk with primary key` and/or `dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

The *begin* parameter allows you to indicate the starting index of the entities to extract. You can pass any value between 0 and entity selection length-1.

The *howMany* parameter lets you specify the number of entities to extract, starting with the one specified in *begin*. Dropped entities are not returned but are taken into account according to *howMany*. For example, if *howMany*= 3 and there is 1 dropped entity, only 2 entities are extracted.

If *howMany* > length of the entity selection, the method returns (length - *begin*) objects.

An empty collection is returned if:

*   the entity selection is empty, or
*   *begin* is greater than the length of the entity selection.


#### Beispiel 1

The following structure will be used throughout all examples of this section:

![](../assets/en/API/dataclassAttribute4.png)


Example without filter or options parameter:

```4d
 var $employeesCollection : Collection
 var $employees : cs.EmployeeSelection

 $employeesCollection:=New collection
 $employees:=ds.Employee.all()
 $employeesCollection:=$employees.toCollection()
```

Ergibt:

```4d
[
    {
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
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
    },
    {
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
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
]
```

#### Beispiel 2

Example with options:

```4d
var $employeesCollection : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection("";dk with primary key+dk with stamp)
```

Ergibt:

```4d
[
    {
        "__KEY": 416,
        "__STAMP": 1,
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
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
    },
    {
        "__KEY": 417,
        "__STAMP": 1,
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
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
    }]
```

#### Beispiel 3

Example with slicing and filtering on properties:

```4d
var $employeesCollection; $filter : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$filter:=New collection


$filter.push("firstName")
$filter.push("lastName")

$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection($filter;0;0;2)
```

Ergibt:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl"
    },
    {
        "firstName": "Irma",
        "lastName": "Durham"
    }
]

```


#### Beispiel 4

Example with `relatedEntity` type with simple form:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName,lastName,employer")
```

returns:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "__KEY": 20
        }
    }
   ]
```

#### Example 5

Example with *filterCol* parameter:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection("firstName";"lastName")
$employeesCollection:=$employees.toCollection($coll)
```

Ergibt:

```4d
[
    {
        "firstName": "Joanna",
        "lastName": "Cabrera"
    },
    {
        "firstName": "Alexandra",
        "lastName": "Coleman"
    }
]
```

#### Example 6

Example with extraction of all properties of a relatedEntity:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection
$coll.push("firstName")
$coll.push("lastName")
$coll.push("employer.*")
$employeesCollection:=$employees.toCollection($coll)
```

Ergibt:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    }
  ]
```

#### Example 7

Example with extraction of some properties of a relatedEntity:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, employer.name")
```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",

        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "name": "India Astral Secretary"
        }
    }]
```

#### Example 8

Example with extraction of some properties of `relatedEntities`:

```4d
 var $employeesCollection : Collection
 $employeesCollection:=New collection
 $employeesCollection:=$employees.toCollection("firstName, lastName, directReports.firstName")
```

Ergibt:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "firstName": "Gary"
            },
            {
                "firstName": "Sadie"
            },
            {
                "firstName": "Christie"
            }
        ]
    },
    {
        "firstName": "Gary",

        "lastName": "Reichert",
        "directReports": [
            {
                "firstName": "Rex"
            },
            {
                "firstName": "Jenny"
            },
            {
                "firstName": "Lowell"
            }
        ]
    }]
```

#### Example 9

Example with extraction of all properties of `relatedEntities`:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, directReports.*")

```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },    
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "ID": 425,
                "firstName": "Gary",
                "lastName": "Reichert",
                "salary": 65800,
                "birthDate": "1957-12-23T00:00:00.000Z",
                "woman": false,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            },
            {
                "ID": 426,
                "firstName": "Sadie",
                "lastName": "Gallant",
                "salary": 35200,
                "birthDate": "2022-01-03T00:00:00.000Z",
                "woman": true,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            }
                   ]
    },
    {
        "firstName": "Gary",
        "lastName": "Reichert",
        "directReports": [
            {
                "ID": 428,
                "firstName": "Rex",
                "lastName": "Chance",
                "salary": 71600,
                "birthDate": "1968-08-09T00:00:00.000Z",
                "woman": false,

                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            },
            {
                "ID": 429,
                "firstName": "Jenny",
                "lastName": "Parks",
                "salary": 51300,
                "birthDate": "1984-05-25T00:00:00.000Z",
                "woman": true,
                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            }
           ]
 }
]
```


<!-- END REF -->
