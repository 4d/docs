---
id: DataClassAttributeClass
title: DataClassAttribute
---

Dataclass attributes are available as properties of their respective classes. Por ejemplo:

```4d
 nameAttribute:=ds.Company.name //reference to class attribute
 revenuesAttribute:=ds.Company["revenues"] //alternate way
```

This code assigns to *nameAttribute* and *revenuesAttribute* references to the name and revenues attributes of the Company class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through [**Entities**](EntityClass.md).

`DataClassAttribute` objects have properties that you can read to get information about your dataclass attributes.

> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

### Summary

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassAttributeClass.autoFilled.Syntax -->](#autofilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.autoFilled.Summary -->|
| [<!-- INCLUDE DataClassAttributeClass.fieldNumber.Syntax -->](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldType.Syntax -->](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.indexed.Syntax -->](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.inverseName.Syntax -->](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.keyWordIndexed.Syntax -->](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.keyWordIndexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.kind.Syntax -->](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.mandatory.Syntax -->](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.name.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Syntax -->](#relateddataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.type.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.unique.Syntax -->](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.unique.Summary --> |



<!-- REF DataClassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.autoFilled.Syntax -->
**.autoFilled** : Boolean<!-- END REF -->


#### Descripción

The `.autoFilled` property <!-- REF DataClassAttributeClass.autoFilled.Summary -->contains True if the attribute value is automatically filled by 4D<!-- END REF -->. This property corresponds to the following 4D field properties:

*   "Autoincrement", for numeric type fields
*   "Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.autoFilled) to get a valid value (false) even if `.autoFilled` is not returned.


<!-- END REF -->




<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.fieldNumber.Syntax -->
**.fieldNumber** : Integer<!-- END REF -->


#### Descripción

The `.fieldNumber` property <!-- REF DataClassAttributeClass.fieldNumber.Summary -->contains the internal 4D field number of the attribute<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned.


<!-- END REF -->




<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.fieldType.Syntax -->
**.fieldType** : Integer<!-- END REF -->


#### Descripción

The `.fieldType` property <!-- REF DataClassAttributeClass.fieldType.Summary -->contains the 4D database type of the attribute<!-- END REF -->. It depends on the attribute kind (see [`.kind`](#kind)).

**Possible values:**

| dataClassAttribute.kind | fieldType                   | Comment            |
| ----------------------- | --------------------------- | ------------------ |
| storage                 | Corresponding 4D field type | See `Type` command |
| relatedEntity           | 38 (Is object)              |                    |
| relatedEntities         | 42 (Is collection)          |                    |

<!-- END REF -->



<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.indexed.Syntax -->
**.indexed** : Boolean<!-- END REF -->


#### Descripción

The `.indexed` property <!-- REF DataClassAttributeClass.indexed.Summary -->contains **True** if there is a B-tree or a Cluster B-tree index on the attribute<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.indexed) to get a valid value (false) even if `.indexed` is not returned.

<!-- END REF -->




<!-- REF DataClassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.inverseName.Syntax -->
**.inverseName** : Text<!-- END REF -->


#### Descripción

The `.inverseName` property <!-- REF DataClassAttributeClass.inverseName.Summary -->returns the name of the attribute which is at the other side of the relation<!-- END REF -->.

This property is not returned if `.kind` = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.
> For generic programming, you can use **String**(dataClassAttribute.inverseName) to get a valid value ("") even if `.inverseName` is not returned.  

<!-- END REF -->




<!-- REF DataClassAttributeClass.keyWordIndexed.Desc -->
## .keyWordIndexed

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.keyWordIndexed.Syntax -->
**.keyWordIndexed** : Boolean<!-- END REF -->


#### Descripción

The `.keyWordIndexed` property <!-- REF DataClassAttributeClass.keyWordIndexed.Summary -->contains **True** if there is a keyword index on the attribute<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.keyWordIndexed) to get a valid value (false) even if `.keyWordIndexed` is not returned.

<!-- END REF -->



<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.kind.Syntax -->
**.kind** : Text<!-- END REF -->


#### Descripción

The `.kind` property <!-- REF DataClassAttributeClass.kind.Summary -->returns the category of the attribute<!-- END REF -->. Returned value can be one of the following:

*   "storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute
*   "relatedEntity": N -> 1 relation attribute (reference to an entity)
*   "relatedEntities": 1 -> N relation attribute (reference to an entity selection)


#### Ejemplo

Given the following table and relation:

![](/assets/en/API/dataclassAttribute3.png)

```4d
 var $attKind : Text
 $attKind:=ds.Employee.lastname.kind //$attKind="storage"
 $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"
 $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"
```


<!-- END REF -->




<!-- REF DataClassAttributeClass.mandatory.Desc -->
## .mandatory

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.mandatory.Syntax -->
**.mandatory** : Boolean<!-- END REF -->


#### Descripción

The `.mandatory` property <!-- REF DataClassAttributeClass.mandatory.Summary -->contains True if Null value input is rejected for the attribute<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned.
> **Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.

<!-- END REF -->




<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Descripción

The `.name` property <!-- REF DataClassAttributeClass.name.Summary -->returns the name of the `dataClassAttribute` object as string<!-- END REF -->.

#### Ejemplo

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->



<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |

</details>


<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->
**.relatedDataClass** : Text<!-- END REF -->


#### Descripción
> This property is only available with attributes of the "relatedEntity" or "relatedEntities" [`.kind`](#kind) property.

The `.relatedDataClass` property <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->returns the name of the dataclass related to the attribute<!-- END REF -->.

#### Ejemplo

Given the following tables and relations:


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->



<!-- REF DataClassAttributeClass.type.Desc -->
## .type

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.type.Syntax -->
**.type** : Text<!-- END REF -->


#### Descripción

The `.type` property <!-- REF DataClassAttributeClass.type.Summary -->contains the conceptual value type of the attribute<!-- END REF -->, useful for generic programming.

The conceptual value type depends on the attribute [`.kind`](#kind).

**Possible values:**

| dataClassAttribute.kind | type                                                    | Comment                                                                                                                                    |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| storage                 | "number", "date", "object", "bool", "image", o "string" | "number" se devuelve para cualquier tipo numérico, incluyendo la duración. "string" se devuelve para los tipos de campo uuid, alfa y texto |
| relatedEntity           | related dataClass name                                  | Ex: "Companies"                                                                                                                            |
| relatedEntities         | related dataClass name + "Selection" suffix             | Ex: "EmployeeSelection"                                                                                                                    |

<!-- END REF -->




<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>History</summary>
| Version | Changes  |
| ------- | -------- |
| v17 R5  | Añadidos |
</details>


<!-- REF DataClassAttributeClass.unique.Syntax -->
**.unique** : Boolean<!-- END REF -->


#### Descripción

The `.unique` property <!-- REF DataClassAttributeClass.unique.Summary -->contains True if the attribute value must be unique<!-- END REF -->. This property corresponds to the "Unique" 4D field property.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.unique) to get a valid value (false) even if `.unique` is not returned.

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
