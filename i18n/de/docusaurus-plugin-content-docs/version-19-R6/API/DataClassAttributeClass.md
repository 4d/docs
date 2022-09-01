---
id: DataClassAttributeClass
title: DataClassAttribute
---

Dataclass attributes are available as properties of their respective classes. Beispiel:

```4d
 nameAttribute:=ds.Company.name //reference to class attribute
 revenuesAttribute:=ds.Company["revenues"] //alternate way
```

This code assigns to *nameAttribute* and *revenuesAttribute* references to the name and revenues attributes of the Company class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through [**Entities**](EntityClass.md).

`DataClassAttribute` objects have properties that you can read to get information about your dataclass attributes.

> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

### Summary

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassAttributeClass.autoFilled.Syntax -->](#autofilled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.autoFilled.Summary -->|
| [<!-- INCLUDE DataClassAttributeClass.exposed.Syntax -->](#exposed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.exposed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldNumber.Syntax -->](#fieldnumber)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldType.Syntax -->](#fieldtype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.indexed.Syntax -->](#indexed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.inverseName.Syntax -->](#inversename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Syntax -->](#keywordindexed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.kind.Syntax -->](#kind)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.mandatory.Syntax -->](#mandatory)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.name.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.path.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.readOnly.Syntax -->](#readonly)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.readOnly.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Syntax -->](#relateddataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.type.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.unique.Syntax -->](#unique)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.unique.Summary --> |

<!-- REF DataClassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.autoFilled.Syntax -->

**.autoFilled** : Boolean<!-- END REF -->

#### Beschreibung

The `.autoFilled` property <!-- REF DataClassAttributeClass.autoFilled.Summary -->contains True if the attribute value is automatically filled by 4D<!-- END REF -->. This property corresponds to the following 4D field properties:

* "Autoincrement", for numeric type fields
* "Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.autoFilled) to get a valid value (false) even if `.autoFilled` is not returned.

<!-- END REF -->

<!-- REF DataClassAttributeClass.exposed.Desc -->
## .exposed

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19 R3  | Added   |

</details>

<!-- REF DataClassAttributeClass.exposed.Syntax -->

**.exposed** : Boolean<!-- END REF -->

#### Beschreibung

The `.exposed` property is <!-- REF DataClassAttributeClass.exposed.Summary -->true if the attribute is exposed in REST<!-- END REF -->.

#### See also

[DataClass.getInfo()](DataClassClass.md#getinfo)

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.fieldNumber.Syntax -->

**.fieldNumber** : Integer<!-- END REF -->

#### Beschreibung

The `.fieldNumber` property <!-- REF DataClassAttributeClass.fieldNumber.Summary -->contains the internal 4D field number of the attribute<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned.

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>History</summary>

| Version | Changes                        |
| ------- | ------------------------------ |
| v19 R4  | Support of alias attributes    |
| v19 R3  | Support of computed attributes |

</details>

<!-- REF DataClassAttributeClass.fieldType.Syntax -->

**.fieldType** : Integer<!-- END REF -->

#### Beschreibung

The `.fieldType` property <!-- REF DataClassAttributeClass.fieldType.Summary -->contains the 4D database type of the attribute<!-- END REF -->. .

**Possible values:**

| dataClassAttribute.kind | fieldType                                                                   |
| ----------------------- | --------------------------------------------------------------------------- |
| storage                 | Corresponding 4D field type                                                 |
| relatedEntity           | 38 (Is object)                                                              |
| relatedEntities         | 42 (Is collection)                                                          |
| calculated              | <li>See <a href="https://doc.4d.com/4dv19/help/command/en/page1509.html"><code>Value type</code></a></li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)`</li> |
| alias                   | <li>See <a href="https://doc.4d.com/4dv19/help/command/en/page1509.html"><code>Value type</code></a></li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)`</li> |

<!-- END REF -->

#### See also

[.typ](#type)

<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.indexed.Syntax -->

**.indexed** : Boolean<!-- END REF -->

#### Beschreibung

The `.indexed` property <!-- REF DataClassAttributeClass.indexed.Summary -->contains **True** if there is a B-tree or a Cluster B-tree index on the attribute<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.indexed) to get a valid value (false) even if `.indexed` is not returned.

<!-- END REF -->

<!-- REF DataClassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.inverseName.Syntax -->

**.inverseName** : Text<!-- END REF -->

#### Beschreibung

The `.inverseName` property <!-- REF DataClassAttributeClass.inverseName.Summary -->returns the name of the attribute which is at the other side of the relation<!-- END REF -->.

This property is not returned if `.kind` = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.
> For generic programming, you can use **String**(dataClassAttribute.inverseName) to get a valid value ("") even if `.inverseName` is not returned.  

<!-- END REF -->

<!-- REF DataClassAttributeClass.keywordIndexed.Desc -->
## .keywordIndexed

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.keywordIndexed.Syntax -->

**.keywordIndexed** : Boolean<!-- END REF -->

#### Beschreibung

The `.keywordIndexed` property <!-- REF DataClassAttributeClass.keywordIndexed.Summary -->contains **True** if there is a keyword index on the attribute<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.keywordIndexed) to get a valid value (false) even if `.keywordIndexed` is not returned.

<!-- END REF -->

<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>History</summary>

| Version | Changes            |
| ------- | ------------------ |
| v19 R4  | Added "alias"      |
| v19 R3  | Added "calculated" |

</details>

<!-- REF DataClassAttributeClass.kind.Syntax -->

**.kind** : Text<!-- END REF -->

#### Beschreibung

The `.kind` property <!-- REF DataClassAttributeClass.kind.Summary -->returns the category of the attribute<!-- END REF -->. Returned value can be one of the following:

* "storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute
* "calculated": computed attribute, i.e. defined through a [`get` function](ORDA/ordaClasses.md#function-get-attributename)
* "alias": attribute built upon [another attribute](ORDA/ordaClasses.md#alias-attributes-1)
* "relatedEntity": N -> 1 relation attribute (reference to an entity)
* "relatedEntities": 1 -> N relation attribute (reference to an entity selection)

#### Beispiel

Given the following table and relation:

![](../assets/en/API/dataclassAttribute3.png)

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

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.mandatory.Syntax -->

**.mandatory** : Boolean<!-- END REF -->

#### Beschreibung

The `.mandatory` property <!-- REF DataClassAttributeClass.mandatory.Summary -->contains True if Null value input is rejected for the attribute<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned.
> **Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.

<!-- END REF -->

<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Beschreibung

The `.name` property <!-- REF DataClassAttributeClass.name.Summary -->The `.name` property<!-- END REF -->.

#### Beispiel

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.path.Desc -->
## .path

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19 R4  | Added   |

</details>

<!-- REF DataClassAttributeClass.path.Syntax -->

**.path** : Text<!-- END REF -->

#### Beschreibung

The `.path` property <!-- REF DataClassAttributeClass.path.Summary -->returns the path of an alias attribute based upon a relation<!-- END REF -->.

#### Beispiel

```4d
 var $path : Text
 $path:=ds.Teacher.students.path //$path="courses.student"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.readOnly.Desc -->
## .readOnly

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v19 R3  | Added   |

</details>

<!-- REF DataClassAttributeClass.readOnly.Syntax -->

**.readOnly** : Boolean<!-- END REF -->

#### Beschreibung

The `.readOnly` property is <!-- REF DataClassAttributeClass.readOnly.Summary -->true if the attribute is read-only<!-- END REF -->.

For example, computed attributes without [`set` function](ORDA/ordaClasses.md#function-set-attributename) are read-only.

<!-- END REF -->

<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->

**.relatedDataClass** : Text<!-- END REF -->

#### Beschreibung
> This property is only available with attributes of the "relatedEntity" or "relatedEntities" [`.kind`](#kind) property.

The `.relatedDataClass` property <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->returns the name of the dataclass related to the attribute<!-- END REF -->.

#### Beispiel

Given the following tables and relations:

![](../assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.type.Desc -->
## .typ

<details><summary>History</summary>

| Version | Changes                        |
| ------- | ------------------------------ |
| v19 R3  | Support of computed attributes |

</details>

<!-- REF DataClassAttributeClass.type.Syntax -->

**.type** : Text<!-- END REF -->

#### Beschreibung

The `.type` property <!-- REF DataClassAttributeClass.type.Summary -->contains the conceptual value type of the attribute<!-- END REF -->, useful for generic programming.

The conceptual value type depends on the attribute [`.kind`](#kind).

**Possible values:**

| dataClassAttribute.kind | typ                                                                            | Kommentar                                                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", or "string"               | "number" is returned for any numeric types including duration. "string" is returned for uuid, alpha and text field types. "blob" attributes are [blob objects](Concepts/dt_blob.md#blob-type), they are handled using the [Blob class](BlobClass.md). |
| relatedEntity           | related dataClass name                                                         | Ex: "Companies"                                                                                                                                                                                                                                       |
| relatedEntities         | related dataClass name + "Selection" suffix                                    | Ex: "EmployeeSelection"                                                                                                                                                                                                                               |
| calculated              | <li>storage: type ("blob", "number", etc.)</li><li>entity: dataClass name</li><li>entity selection: dataClass name + "Selection"</li> |                                                                                                                                                                                                                                                       |

<!-- END REF -->

#### See also

[`.fieldType`](#fieldtype)

<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v17 R5  | Added   |

</details>

<!-- REF DataClassAttributeClass.unique.Syntax -->

**.unique** : Boolean<!-- END REF -->

#### Beschreibung

The `.unique` property <!-- REF DataClassAttributeClass.unique.Summary -->contains True if the attribute value must be unique<!-- END REF -->. This property corresponds to the "Unique" 4D field property.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.unique) to get a valid value (false) even if `.unique` is not returned.

<!-- END REF -->
