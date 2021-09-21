---
id: DataClassAttributeClass
title: DataClassAttribute
---

Dataclass attributes are available as properties of their respective classes. Par exemple :

```4d
 nameAttribute:=ds.Company.name //référence à un attribut de classe
 revenuesAttribute:=ds.Company["revenues"] //méthode alternative
```

This code assigns to *nameAttribute* and *revenuesAttribute* references to the name and revenues attributes of the Company class. Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plutôt des références aux attributs eux-mêmes. To handle values, you need to go through [**Entities**](EntityClass.md).

`DataClassAttribute` objects have properties that you can read to get information about your dataclass attributes.

> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

### Sommaire

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.autoFilled** : Booléen](#autofilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value is automatically filled by 4D|
| [**.fieldNumber** : Integer](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the internal 4D field number of the attribute |
| [**.fieldType** : Integer](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the 4D database type of the attribute |
| [**.indexed** : Booléen](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a B-tree or a Cluster B-tree index on the attribute |
| [**.inverseName** : Text](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the attribute which is at the other side of the relation |
| [**.keyWordIndexed** : Boolean](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a keyword index on the attribute |
| [**.kind** : Text](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the category of the attribute |
| [**.mandatory** : Boolean](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if Null value input is rejected for the attribute |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the `dataClassAttribute` object as string |
| [**.relatedDataClass** : Text](#relateddataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the dataclass related to the attribute |
| [**.type** : Texte](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the conceptual value type of the attribute |
| [**.unique** : Booléen](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value must be unique |



## .autoFilled

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.autoFilled** : Booléen

#### Description

The `.autoFilled` property contains True if the attribute value is automatically filled by 4D. This property corresponds to the following 4D field properties:

*   "Autoincrement", for numeric type fields
*   "Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.autoFilled) to get a valid value (false) even if `.autoFilled` is not returned.






## .fieldNumber

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.fieldNumber** : Integer

#### Description

The `.fieldNumber` property contains the internal 4D field number of the attribute.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned.






## .fieldType

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.fieldType** : Integer

#### Description

The `.fieldType` property contains the 4D database type of the attribute. It depends on the attribute kind (see [`.kind`](#kind)).

**Valeurs possibles :**

| dataClassAttribute.kind | fieldType                   | Commentaire                                                                |
| ----------------------- | --------------------------- | -------------------------------------------------------------------------- |
| storage                 | Corresponding 4D field type | See [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html) |
| relatedEntity           | 38 (Is object)              |                                                                            |
| relatedEntities         | 42 (Is collection)          |                                                                            |


#### Voir également

[`.type`](#type)

## .indexed

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.indexed** : Booléen

#### Description

The `.indexed` property contains **True** if there is a B-tree or a Cluster B-tree index on the attribute.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.indexed) to get a valid value (false) even if `.indexed` is not returned.





## .inverseName

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.inverseName** : Text

#### Description

The `.inverseName` property returns the name of the attribute which is at the other side of the relation.

This property is not returned if `.kind` = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.
> For generic programming, you can use **String**(dataClassAttribute.inverseName) to get a valid value ("") even if `.inverseName` is not returned.  





## .keyWordIndexed

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.keyWordIndexed** : Boolean

#### Description

The `.keyWordIndexed` property contains **True** if there is a keyword index on the attribute.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.keyWordIndexed) to get a valid value (false) even if `.keyWordIndexed` is not returned.




## .kind

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.kind** : Text

#### Description

The `.kind` property returns the category of the attribute. Returned value can be one of the following:

*   "storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute
*   "relatedEntity": N -> 1 relation attribute (reference to an entity)
*   "relatedEntities": 1 -> N relation attribute (reference to an entity selection)


#### Exemple

Given the following table and relation:

![](/assets/en/API/dataclassAttribute3.png)

```4d
 var $attKind : Text
 $attKind:=ds.Employee.lastname.kind //$attKind="storage"
 $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"
 $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"
```






## .mandatory

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.mandatory** : Boolean

#### Description

The `.mandatory` property contains True if Null value input is rejected for the attribute.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned.
> **Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.





## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.name** : Text

#### Description

The `.name` property returns the name of the `dataClassAttribute` object as string.

#### Exemple

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```




## .relatedDataClass

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>


**.relatedDataClass** : Text

#### Description
> Cette propriété n'est disponible qu'avec les attributs de la propriété "relatedEntity" ou "relatedEntities" [`.kind`](#kind).

The `.relatedDataClass` property returns the name of the dataclass related to the attribute.

#### Exemple

Considérons les tableaux et relations suivants :


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```




## .type

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.type** : Texte

#### Description

The `.type` property contains the conceptual value type of the attribute, useful for generic programming.

Le type de valeur conceptuelle dépend de l'attribut [`.kind`](#kind).

**Valeurs possibles :**

| dataClassAttribute.kind | type                                                             | Commentaire                                                                                                                                                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", or "string" | "nombre" est rertourné pour tous les types numériques, y compris la durée. "string" is returned for uuid, alpha and text field types. "blob" attributes are [blob objects](Concepts/dt_blob.md#blob-type), they are handled using the [Blob class](BlobClass.md). |
| relatedEntity           | related dataClass name                                           | Ex : "Companies"                                                                                                                                                                                                                                                  |
| relatedEntities         | related dataClass name + "Selection" suffix                      | Ex : "EmployeeSelection"                                                                                                                                                                                                                                          |


#### Voir également

[`.fieldType`](#fieldtype)


## .unique

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


**.unique** : Booléen

#### Description

The `.unique` property contains True if the attribute value must be unique. Cette propriété correspond à la propriété de champ 4D "Unique".

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.unique) pour obtenir une valeur valide (false) même si `.unique` n'est pas retourné.


<style> h2 { background: #d9ebff;}</style>
