---
id: DataClassAttributeClass
title: DataClassAttribute
---

Les attributs Dataclass sont disponibles en tant que propriétés de leurs classes respectives.

```4d
 nameAttribute:=ds.Company.name //référence à un attribut de classe
 revenuesAttribute:=ds.Company["revenues"] //méthode alternative
```

Ce code attribue à *nameAttribute* et *revenuesAttribute* des références aux attributs name et revenues de la classe Company. Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plutôt des références aux attributs eux-mêmes. Pour gérer les valeurs, vous devez passer par les [**Entités**](EntityClass.md).

Les objets `DataClassAttribut` ont des propriétés que vous pouvez lire pour obtenir des informations sur les attributs de votre dataclass.

> Les objets de l'attribut Dataclass peuvent être modifiés, mais la structure sous-jacente de la base de données ne sera pas altérée.

### Sommaire

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

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.autoFilled.Syntax -->

**.autoFilled** : Booléen<!-- END REF -->

#### Description

The `.autoFilled` property <!-- REF DataClassAttributeClass.autoFilled.Summary -->contains True if the attribute value is automatically filled by 4D<!-- END REF -->. Cette propriété correspond aux propriétés de champ 4D suivantes :

* "Autoincrement", for les champs de type numérique
* "Auto UUID", pour les champs UUID (de type alpha).

Cette propriété n'est pas retournée si `.kind` = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.autoFilled) pour obtenir une valeur valide (false) même si `.autoFilled` n'est pas retourné.

<!-- END REF -->

<!-- REF DataClassAttributeClass.exposed.Desc -->
## .exposed

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R3  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.exposed.Syntax -->

**.exposed** : Boolean<!-- END REF -->

#### Description

The `.exposed` property is <!-- REF DataClassAttributeClass.exposed.Summary -->true if the attribute is exposed in REST<!-- END REF -->.

#### Voir également

[DataClass.getInfo()](DataClassClass.md#getinfo)

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.fieldNumber.Syntax -->

**.fieldNumber** : Integer<!-- END REF -->

#### Description

The `.fieldNumber` property <!-- REF DataClassAttributeClass.fieldNumber.Summary -->contains the internal 4D field number of the attribute<!-- END REF -->.

Cette propriété n'est pas retournée si `.kind` = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Num** (dataClassAttribute.fieldNumber) pour obtenir une valeur valide (0) même si `.fieldNumber` n'est pas retourné.

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>Historique</summary>

| Version | Modifications                       |
| ------- | ----------------------------------- |
| v19 R4  | Prise en charge des attributs alias |
| v19 R3  | Prise en charge des champs calculés |

</details>

<!-- REF DataClassAttributeClass.fieldType.Syntax -->

**.fieldType** : Integer<!-- END REF -->

#### Description

The `.fieldType` property <!-- REF DataClassAttributeClass.fieldType.Summary -->contains the 4D database type of the attribute<!-- END REF -->. .

**Valeurs possibles :**

| dataClassAttribute.kind | fieldType                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| storage                 | Type de champ 4D correspondant, voir [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html) |
| relatedEntity           | 38 (`Is object`)                                                                                            |
| relatedEntities         | 42 (`Is collection`)                                                                                        |
| calculated              | <li>scalaire : type de champ 4D correspondant, voir [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)`</li>                                 |
| alias                   | <li>scalaire : type de champ 4D correspondant, voir [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)`</li>                                 |

<!-- END REF -->

#### Voir également

[.type](#type)

<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.indexed.Syntax -->

**.indexed** : Booléen<!-- END REF -->

#### Description

The `.indexed` property <!-- REF DataClassAttributeClass.indexed.Summary -->contains **True** if there is a B-tree or a Cluster B-tree index on the attribute<!-- END REF -->.

Cette propriété n'est pas retournée si `.kind` = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.indexed) pour obtenir une valeur valide (false) même si `.indexed` n'est pas retourné.

<!-- END REF -->

<!-- REF DataClassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.inverseName.Syntax -->

**.inverseName** : Text<!-- END REF -->

#### Description

The `.inverseName` property <!-- REF DataClassAttributeClass.inverseName.Summary -->returns the name of the attribute which is at the other side of the relation<!-- END REF -->.

Cette propriété n'est pas retournée si `.kind` = "storage". Elle doit être du type "relatedEntities" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **String** (dataClassAttribute.inverseName) pour obtenir une valeur valide ("") même si `.inverseName` n'est pas retourné.  

<!-- END REF -->

<!-- REF DataClassAttributeClass.keywordIndexed.Desc -->
## .keywordIndexed

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.keywordIndexed.Syntax -->

**.keywordIndexed** : Boolean<!-- END REF -->

#### Description

The `.keywordIndexed` property <!-- REF DataClassAttributeClass.keywordIndexed.Summary -->contains **True** if there is a keyword index on the attribute<!-- END REF -->.

Cette propriété n'est pas retournée si [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.keywordIndexed) pour obtenir une valeur valide (false) même si `.keywordIndexed` n'est pas retourné.

<!-- END REF -->

<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>Historique</summary>

| Version | Modifications         |
| ------- | --------------------- |
| v19 R4  | Ajout de "alias"      |
| v19 R3  | Ajout de "calculated" |

</details>

<!-- REF DataClassAttributeClass.kind.Syntax -->

**.kind** : Text<!-- END REF -->

#### Description

The `.kind` property <!-- REF DataClassAttributeClass.kind.Summary -->returns the category of the attribute<!-- END REF -->. La valeur retournée peut être l'une des chaînes suivantes :

* "storage" : attribut de stockage (ou scalaire), c'est-à-dire un attribut stockant une valeur, et non une référence à un autre attribut
* "calculated" : attribut calculé, c'est-à-dire défini par [la fonction `get`](ORDA/ordaClasses.md#function-get-attributename)
* "alias": attribut basé sur [un autre attribut](ORDA/ordaClasses.md#alias-attributes-1)
* "relatedEntity" : attribut relationnel N -> (référence vers une entité)
* "relatedEntities" : attribut relationnel 1 -> N (référence vers une entity selection)

#### Exemple

Considérons les tables et relations suivantes :

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

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.mandatory.Syntax -->

**.mandatory** : Boolean<!-- END REF -->

#### Description

The `.mandatory` property <!-- REF DataClassAttributeClass.mandatory.Summary -->contains True if Null value input is rejected for the attribute<!-- END REF -->.

Cette propriété n'est pas retournée si [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.mandatory) pour obtenir une valeur valide (false) même si `.mandatory` n'est pas retourné.
> **Attention** : Cette propriété correspond à la propriété du champ "Reject NULL value input" au niveau de la base de données 4D. Elle n'est pas liée à la propriété "Mandatory" existante qui est une option de contrôle de la saisie de données pour une table.

<!-- END REF -->

<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.name.Syntax -->

**.name** : Text<!-- END REF -->

#### Description

The `.name` property <!-- REF DataClassAttributeClass.name.Summary -->The `.name` property<!-- END REF -->.

#### Exemple

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.path.Desc -->
## .path

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.path.Syntax -->

**.path** : Text<!-- END REF -->

#### Description

The `.path` property <!-- REF DataClassAttributeClass.path.Summary -->returns the path of an alias attribute based upon a relation<!-- END REF -->.

#### Exemple

```4d
 var $path : Text
 $path:=ds.Teacher.students.path //$path="courses.student"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.readOnly.Desc -->
## .readOnly

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R3  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.readOnly.Syntax -->

**.readOnly** : Boolean<!-- END REF -->

#### Description

The `.readOnly` property is <!-- REF DataClassAttributeClass.readOnly.Summary -->true if the attribute is read-only<!-- END REF -->.

Par exemple, les champs calculés sans fonction [`set`](ORDA/ordaClasses.md#function-set-attributename) sont en lecture seule.

<!-- END REF -->

<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->

**.relatedDataClass** : Text<!-- END REF -->

#### Description
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.unique) pour obtenir une valeur valide (false) même si `.unique` n'est pas retourné.

The `.relatedDataClass` property <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->returns the name of the dataclass related to the attribute<!-- END REF -->.

#### Exemple

Considérons les tableaux et relations suivants :

![](../assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.type.Desc -->
## .type

<details><summary>Historique</summary>

| Version | Modifications                       |
| ------- | ----------------------------------- |
| v19 R3  | Prise en charge des champs calculés |

</details>

<!-- REF DataClassAttributeClass.type.Syntax -->

**.type** : Texte<!-- END REF -->

#### Description

The `.type` property <!-- REF DataClassAttributeClass.type.Summary -->contains the conceptual value type of the attribute<!-- END REF -->, useful for generic programming.

Le type de valeur conceptuelle dépend de l'attribut [`.kind`](#kind).

**Valeurs possibles :**

| dataClassAttribute.kind | type                                                                           | Commentaire                                                                                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", ou "string"               | "number" est rertourné pour tous les types numériques, y compris la durée. "string" est retourné pour les types de champs uuid, alpha et text. Les attributs "blob" sont des [objets blob](Concepts/dt_blob.md#blob-type), ils sont gérés à l'aide de [la classe Blob](BlobClass.md). |
| relatedEntity           | related dataClass name                                                         | Ex : "Companies"                                                                                                                                                                                                                                                                      |
| relatedEntities         | related dataClass name + "Selection" suffix                                    | Ex : "EmployeeSelection"                                                                                                                                                                                                                                                              |
| calculated              | <li>storage: type ("blob", "number", etc.)</li><li>entity: dataClass name</li><li>entity selection: dataClass name + "Selection"</li> |                                                                                                                                                                                                                                                                                       |

<!-- END REF -->

#### Voir également

[`.fieldType`](#fieldtype)

<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF DataClassAttributeClass.unique.Syntax -->

**.unique** : Booléen<!-- END REF -->

#### Description

The `.unique` property <!-- REF DataClassAttributeClass.unique.Summary -->contains True if the attribute value must be unique<!-- END REF -->. Cette propriété correspond à la propriété de champ 4D "Unique".

Cette propriété n'est pas retournée si [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.unique) pour obtenir une valeur valide (false) même si `.unique` n'est pas retourné.

<!-- END REF -->
