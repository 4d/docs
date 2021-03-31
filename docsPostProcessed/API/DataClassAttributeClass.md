---
id: DataClassAttributeClass
title: DataClassAttribute
---

Dataclass attributes are available as properties of their respective classes. For example:

```4d
 nameAttribute:=ds.Company.name //reference to class attribute
 revenuesAttribute:=ds.Company["revenues"] //alternate way
```

This code assigns to *nameAttribute* and *revenuesAttribute* references to the name and revenues attributes of the Company class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through [**Entities**](EntityClass.md).

`DataClassAttribute` objects have properties that you can read to get information about your dataclass attributes. 

> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

### Summary

||
|---|
|[**.autoFilled** : Boolean](#autoFilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value is automatically filled by 4D|
|[**.fieldNumber** : Integer](#fieldNumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the internal 4D field number of the attribute |
|[**.fieldType** : Integer](#fieldType)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the 4D database type of the attribute |
|[**.indexed** : Boolean](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a B-tree or a Cluster B-tree index on the attribute |
|[**.inverseName** : Text](#inverseName)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the attribute which is at the other side of the relation |
|[**.keyWordIndexed** : Boolean](#keyWordIndexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a keyword index on the attribute |
|[**.kind** : Text](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the category of the attribute |
|[**.mandatory** : Boolean](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if Null value input is rejected for the attribute |
|[**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the `dataClassAttribute` object as string |
|[**.relatedDataClass** : Text](#relatedDataClass)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the dataclass related to the attribute |
|[**.type** : Text](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the conceptual value type of the attribute |
|[**.unique** : Boolean](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value must be unique |



## .autoFilled 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.autoFilled** : Boolean

#### Description

The `.autoFilled` property contains True if the attribute value is automatically filled by 4D. This property corresponds to the following 4D field properties:

*	"Autoincrement", for numeric type fields
*	"Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".

>For generic programming, you can use **Bool**(dataClassAttribute.autoFilled) to get a valid value (false) even if `.autoFilled` is not returned. 






## .fieldNumber 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.fieldNumber** : Integer

#### Description

The `.fieldNumber` property contains the internal 4D field number of the attribute. 

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".

>For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned. 






## .fieldType  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.fieldType** : Integer

#### Description

The `.fieldType` property contains the 4D database type of the attribute. It depends on the attribute kind (see [`.kind`](#kind)).

**Possible values:**

|dataClassAttribute.kind|	fieldType	|Comment|
|---|---|---|
|storage|	Corresponding 4D field type|	See `Type` command|
|relatedEntity|	38 (Is object)	||
|relatedEntities|	42 (Is collection)	||




## .indexed  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.indexed** : Boolean

#### Description

The `.indexed` property contains **True** if there is a B-tree or a Cluster B-tree index on the attribute.  

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".

>For generic programming, you can use **Bool**(dataClassAttribute.indexed) to get a valid value (false) even if `.indexed` is not returned. 





## .inverseName  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.inverseName** : Text

#### Description

The `.inverseName` property returns the name of the attribute which is at the other side of the relation.  

This property is not returned if `.kind` = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.

>For generic programming, you can use **String**(dataClassAttribute.inverseName) to get a valid value ("") even if `.inverseName` is not returned.  





## .keyWordIndexed  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.keyWordIndexed** : Boolean

#### Description

The `.keyWordIndexed` property contains **True** if there is a keyword index on the attribute.  

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".

>For generic programming, you can use **Bool**(dataClassAttribute.keyWordIndexed) to get a valid value (false) even if `.keyWordIndexed` is not returned. 




## .kind  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.kind** : Text

#### Description

The `.kind` property returns the category of the attribute. Returned value can be one of the following:

*	"storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute
*	"relatedEntity": N -> 1 relation attribute (reference to an entity)
*	"relatedEntities": 1 -> N relation attribute (reference to an entity selection)


#### Example

Given the following table and relation:

![](/assets/en/API/dataclassAttribute3.png)

```4d
 var $attKind : Text
 $attKind:=ds.Employee.lastname.kind //$attKind="storage"
 $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"
 $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"
```






## .mandatory  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.mandatory** : Boolean

#### Description

The `.mandatory` property contains True if Null value input is rejected for the attribute. 

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".

>For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned. 

>**Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table. 





## .name  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.name** : Text

#### Description

The `.name` property returns the name of the `dataClassAttribute` object as string. 

#### Example

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```




## .relatedDataClass  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|

</details>


**.relatedDataClass** : Text

#### Description

>This property is only available with attributes of the "relatedEntity" or "relatedEntities" [`.kind`](#kind) property.

The `.relatedDataClass` property returns the name of the dataclass related to the attribute. 

#### Example

Given the following tables and relations:


![](assets/en/API/dataclassAttribute4.png)



```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```




## .type  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.type** : Text

#### Description

The `.type` property contains the conceptual value type of the attribute, useful for generic programming. 

The conceptual value type depends on the attribute [`.kind`](#kind).

**Possible values:**

|dataClassAttribute.kind|	type|	Comment|
|---|---|---|
|storage|	"number", "date", "object", "bool", "image", or "string"|"number" is returned for any numeric types including duration. "string" is returned for uuid, alpha and text field types|
|relatedEntity|related dataClass name|Ex: "Companies"|
|relatedEntities|related dataClass name + "Selection" suffix|	Ex: "EmployeeSelection"|





## .unique  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>


**.unique** : Boolean

#### Description

The `.unique` property contains True if the attribute value must be unique. This property corresponds to the "Unique" 4D field property.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".

>For generic programming, you can use **Bool**(dataClassAttribute.unique) to get a valid value (false) even if `.unique` is not returned. 


<style> h2 { background: #d9ebff;}</style>
