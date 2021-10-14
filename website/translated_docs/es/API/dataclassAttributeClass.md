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

### Resumen

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.autoFilled** : Boolean](#autofilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value is automatically filled by 4D|
| [**.fieldNumber** : Integer](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the internal 4D field number of the attribute |
| [**.fieldType** : Integer](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the 4D database type of the attribute |
| [**.indexed** : Boolean](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a B-tree or a Cluster B-tree index on the attribute |
| [**.inverseName** : Text](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the attribute which is at the other side of the relation |
| [**.keywordIndexed** : Boolean](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a keyword index on the attribute |
| [**.kind** : Text](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the category of the attribute |
| [**.mandatory** : Boolean](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if Null value input is rejected for the attribute |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the `dataClassAttribute` object as string |
| [**.relatedDataClass** : Text](#relateddataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the dataclass related to the attribute |
| [**.type** : Text](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the conceptual value type of the attribute |
| [**.unique** : Boolean](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value must be unique |



## .autoFilled

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.autoFilled** : Boolean

#### Descripción

The `.autoFilled` property contains True if the attribute value is automatically filled by 4D. This property corresponds to the following 4D field properties:

*   "Autoincremento", para campos de tipo numérico
*   "Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.autoFilled) to get a valid value (false) even if `.autoFilled` is not returned.






## .fieldNumber

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.fieldNumber** : Integer

#### Descripción

The `.fieldNumber` property contains the internal 4D field number of the attribute.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned.






## .fieldType

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.fieldType** : Integer

#### Descripción

The `.fieldType` property contains the 4D database type of the attribute. It depends on the attribute kind (see [`.kind`](#kind)).

**Valores posibles:**

| dataClassAttribute.kind | fieldType                   | Comentario         |
| ----------------------- | --------------------------- | ------------------ |
| storage                 | Corresponding 4D field type | See `Type` command |
| relatedEntity           | 38 (Is object)              |                    |
| relatedEntities         | 42 (Is collection)          |                    |




## .indexed

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.indexed** : Boolean

#### Descripción

The `.indexed` property contains **True** if there is a B-tree or a Cluster B-tree index on the attribute.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.indexed) to get a valid value (false) even if `.indexed` is not returned.





## .inverseName

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.inverseName** : Text

#### Descripción

The `.inverseName` property returns the name of the attribute which is at the other side of the relation.

This property is not returned if `.kind` = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.
> For generic programming, you can use **String**(dataClassAttribute.inverseName) to get a valid value ("") even if `.inverseName` is not returned.  





## .keywordIndexed

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.keywordIndexed** : Boolean

#### Descripción

The `.keywordIndexed` property contains **True** if there is a keyword index on the attribute.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.keywordIndexed) to get a valid value (false) even if `.keywordIndexed` is not returned.




## .kind

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.kind** : Text

#### Descripción

The `.kind` property returns the category of the attribute. Returned value can be one of the following:

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






## .mandatory

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.mandatory** : Boolean

#### Descripción

The `.mandatory` property contains True if Null value input is rejected for the attribute.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned.
> **Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.





## .name

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.name** : Text

#### Descripción

The `.name` property returns the name of the `dataClassAttribute` object as string.

#### Ejemplo

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```




## .relatedDataClass

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |

</details>


**.relatedDataClass** : Text

#### Descripción
> This property is only available with attributes of the "relatedEntity" or "relatedEntities" [`.kind`](#kind) property.

The `.relatedDataClass` property returns the name of the dataclass related to the attribute.

#### Ejemplo

Given the following tables and relations:


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```




## .type

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.type** : Text

#### Descripción

The `.type` property contains the conceptual value type of the attribute, useful for generic programming.

The conceptual value type depends on the attribute [`.kind`](#kind).

**Valores posibles:**

| dataClassAttribute.kind | type                                                    | Comentario                                                                                                                                 |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| storage                 | "number", "date", "object", "bool", "image", o "string" | "number" se devuelve para cualquier tipo numérico, incluyendo la duración. "string" se devuelve para los tipos de campo uuid, alfa y texto |
| relatedEntity           | related dataClass name                                  | Ex: "Companies"                                                                                                                            |
| relatedEntities         | related dataClass name + "Selection" suffix             | Ex: "EmployeeSelection"                                                                                                                    |





## .unique

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R5  | Añadidos       |
</details>


**.unique** : Boolean

#### Descripción

The `.unique` property contains True if the attribute value must be unique. This property corresponds to the "Unique" 4D field property.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.unique) to get a valid value (false) even if `.unique` is not returned.


<style> h2 { background: #d9ebff;}</style>
