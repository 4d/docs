---
id: DataClassAttributeClass
title: DataClassAttribute
---

Les attributs Dataclass sont disponibles en tant que propriétés de leurs classes respectives. Par exemple :

```4d
 nameAttribute:=ds.Company.name //référence à un attribut de classe
 revenuesAttribute:=ds.Company["revenues"] //méthode alternative
```

Ce code attribue à *nameAttribute* et *revenuesAttribute* des références aux attributs name et revenues de la classe Company. Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plutôt des références aux attributs eux-mêmes. Pour gérer les valeurs, vous devez passer par les [**Entités**](EntityClass.md).

Les objets `DataClassAttribut` ont des propriétés que vous pouvez lire pour obtenir des informations sur les attributs de votre dataclass.

> Les objets de l'attribut Dataclass peuvent être modifiés, mais la structure sous-jacente de la base de données ne sera pas altérée.

### Sommaire

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassAttributeClass.autoFilled.Syntax -->](#autofilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.autoFilled.Summary -->|
| [<!-- INCLUDE DataClassAttributeClass.exposed.Syntax -->](#exposed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.exposed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldNumber.Syntax -->](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldType.Syntax -->](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.indexed.Syntax -->](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.inverseName.Syntax -->](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Syntax -->](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.kind.Syntax -->](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.mandatory.Syntax -->](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.name.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.readOnly.Syntax -->](#readonly)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.readOnly.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Syntax -->](#relateddataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.type.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.unique.Syntax -->](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.unique.Summary --> |



<!-- REF DataClassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.autoFilled.Syntax -->
**.autoFilled** : Booléen<!-- END REF -->


#### Description

The `.autoFilled` property <!-- REF DataClassAttributeClass.autoFilled.Summary -->contains True if the attribute value is automatically filled by 4D<!-- END REF -->. Cette propriété correspond aux propriétés de champ 4D suivantes :

*   "Autoincrement", for les champs de type numérique
*   "Auto UUID", pour les champs UUID (de type alpha).

Cette propriété n'est pas retournée si `.kind` = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.autoFilled) pour obtenir une valeur valide (false) même si `.autoFilled` n'est pas retourné.


<!-- END REF -->

<!-- REF DataClassAttributeClass.exposed.Desc -->
## .exposed

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R3  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.exposed.Syntax -->
**.exposed** : Boolean<!-- END REF -->


#### Description

La propriété `.exposed` est <!-- REF DataClassAttributeClass.exposed.Summary -->mise à "true" si l'attribut est "exposed" dans REST<!-- END REF -->.

<!-- END REF -->




<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
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
| v19 R3  | Prise en charge des champs calculés |
</details>


<!-- REF DataClassAttributeClass.fieldType.Syntax -->
**.fieldType** : Integer<!-- END REF -->


#### Description

The `.fieldType` property <!-- REF DataClassAttributeClass.fieldType.Summary -->contains the 4D database type of the attribute<!-- END REF -->. It depends on the attribute kind (see [`.kind`](#kind)).

**Valeurs possibles :**

| dataClassAttribute.kind | fieldType                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| storage                 | Type de champ 4D correspondant, voir [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)        |
| relatedEntity           | 38 (`Is object`)                                                                                                   |
| relatedEntities         | 42 (`Is collection`)                                                                                               |
| calculated              | <li>scalaire : type de champ 4D correspondant, voir [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)` |


<!-- END REF -->

#### Voir également

[`.type`](#type)

<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
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
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.inverseName.Syntax -->
**.inverseName** : Text<!-- END REF -->


#### Description

The `.inverseName` property <!-- REF DataClassAttributeClass.inverseName.Summary -->returns the name of the attribute which is at the other side of the relation<!-- END REF -->.

This property is not returned if `.kind` = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.
> Pour la programmation générique, vous pouvez utiliser **String** (dataClassAttribute.inverseName) pour obtenir une valeur valide ("") même si `.inverseName` n'est pas retourné.  

<!-- END REF -->




<!-- REF DataClassAttributeClass.keywordIndexed.Desc -->
## .keywordIndexed

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.keywordIndexed.Syntax -->
**.keywordIndexed** : Boolean<!-- END REF -->


#### Description

La propriété `.keywordIndexed` <!-- REF DataClassAttributeClass.keywordIndexed.Summary -->contient **True** s'il existe un index de mot-clé sur l'attribut<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.keywordIndexed) pour obtenir une valeur valide (false) même si `.keywordIndexed` n'est pas retourné.

<!-- END REF -->



<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>Historique</summary>
| Version | Modifications         |
| ------- | --------------------- |
| v19 R3  | Ajout de "calculated" |
</details>


<!-- REF DataClassAttributeClass.kind.Syntax -->
**.kind** : Text<!-- END REF -->


#### Description

The `.kind` property <!-- REF DataClassAttributeClass.kind.Summary -->returns the category of the attribute<!-- END REF -->. Returned value can be one of the following:

*   "storage" : attribut de stockage (ou scalaire), c'est-à-dire un attribut stockant une valeur, et non une référence à un autre attribut
*   "calculated": champ calculé, c'est-à-dire défini par [la fonction `get`](ORDA/ordaClasses.md#function-get-attributename).
*   "relatedEntity": N -> 1 relation attribute (reference to an entity)
*   "relatedEntities": 1 -> N relation attribute (reference to an entity selection)


#### Exemple

Considérons les tables et relations suivantes :

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

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.mandatory.Syntax -->
**.mandatory** : Boolean<!-- END REF -->


#### Description

The `.mandatory` property <!-- REF DataClassAttributeClass.mandatory.Summary -->contains True if Null value input is rejected for the attribute<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.mandatory) pour obtenir une valeur valide (false) même si `.mandatory` n'est pas retourné.
> **Attention** : Cette propriété correspond à la propriété du champ "Reject NULL value input" au niveau de la base de données 4D. Elle n'est pas liée à la propriété "Mandatory" existante qui est une option de contrôle de la saisie de données pour une table.

<!-- END REF -->




<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Description

The `.name` property <!-- REF DataClassAttributeClass.name.Summary -->returns the name of the `dataClassAttribute` object as string<!-- END REF -->.

#### Exemple

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->



<!-- REF DataClassAttributeClass.readOnly.Desc -->
## .readOnly

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19 R3  | Ajout         |


</details>


<!-- REF DataClassAttributeClass.readOnly.Syntax -->
**.readOnly** : Boolean<!-- END REF -->


#### Description

La propriété `.readOnly` est <!-- REF DataClassAttributeClass.readOnly.Summary -->mise à "true" si l'attribut est en lecture seule<!-- END REF -->.

Par exemple, les champs calculés sans fonction [`set`](ORDA/ordaClasses.md#function-set-attributename) sont en lecture seule. 

<!-- END REF -->



<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |


</details>


<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->
**.relatedDataClass** : Text<!-- END REF -->


#### Description
> Cette propriété n'est disponible qu'avec les attributs de la propriété "relatedEntity" ou "relatedEntities" [`.kind`](#kind).

The `.relatedDataClass` property <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->returns the name of the dataclass related to the attribute<!-- END REF -->.

#### Exemple

Considérons les tableaux et relations suivants :


![](assets/en/API/dataclassAttribute4.png)

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

| dataClassAttribute.kind | type                                                                                                                         | Commentaire                                                                                                                                                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", ou "string"                                                             | "nombre" est rertourné pour tous les types numériques, y compris la durée. "string" est retourné pour les types de champs uuid, alpha et text. Les attributs "blob" sont des [objets blob](Concepts/dt_blob.md#blob-type), ils sont gérés à l'aide de [la classe Blob](BlobClass.md). |
| relatedEntity           | related dataClass name                                                                                                       | Ex : "Companies"                                                                                                                                                                                                                                                                      |
| relatedEntities         | related dataClass name + "Selection" suffix                                                                                  | Ex : "EmployeeSelection"                                                                                                                                                                                                                                                              |
| calculated              | <li>storage: type ("blob", "number", etc.)</li><li>entity: dataClass name</li><li>entity selection: dataClass name + "Selection" |                                                                                                                                                                                                                                                                                       |

<!-- END REF -->

#### Voir également

[`.fieldType`](#fieldtype)


<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.unique.Syntax -->
**.unique** : Booléen<!-- END REF -->


#### Description

The `.unique` property <!-- REF DataClassAttributeClass.unique.Summary -->contains True if the attribute value must be unique<!-- END REF -->. Cette propriété correspond à la propriété de champ 4D "Unique".

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.unique) pour obtenir une valeur valide (false) même si `.unique` n'est pas retourné.

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
