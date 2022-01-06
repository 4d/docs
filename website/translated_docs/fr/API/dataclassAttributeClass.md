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
| [<!-- INCLUDE DataClassAttributeClass.fieldNumber.Syntax -->](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldType.Syntax -->](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.indexed.Syntax -->](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.inverseName.Syntax -->](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Syntax -->](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.kind.Syntax -->](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.mandatory.Syntax -->](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.name.Summary --> |
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

La propriété `.autoFilled` <!-- REF DataClassAttributeClass.autoFilled.Summary -->contient Vrai si la valeur de l'attribut est automatiquement renseignée par 4D<!-- END REF -->. Cette propriété correspond aux propriétés de champ 4D suivantes :

*   "Autoincrement", for les champs de type numérique
*   "Auto UUID", pour les champs UUID (de type alpha).

Cette propriété n'est pas retournée si `.kind` = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.autoFilled) pour obtenir une valeur valide (false) même si `.autoFilled` n'est pas retourné.


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

La propriété `.fieldNumber` <!-- REF DataClassAttributeClass.fieldNumber.Summary -->contient le numéro interne du champ 4D de l'attribut<!-- END REF -->.

Cette propriété n'est pas retournée si `.kind` = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Num** (dataClassAttribute.fieldNumber) pour obtenir une valeur valide (0) même si `.fieldNumber` n'est pas retourné.


<!-- END REF -->




<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.fieldType.Syntax -->
**.fieldType** : Integer<!-- END REF -->


#### Description

La propriété `.fieldType` <!-- REF DataClassAttributeClass.fieldType.Summary -->contient le type 4D de l'attribut dans la base<!-- END REF -->. Elle dépend du [`.kind`](#kind) de l'attribut.

**Valeurs possibles :**

| dataClassAttribute.kind | fieldType                      | Commentaire             |
| ----------------------- | ------------------------------ | ----------------------- |
| storage                 | Type de champ 4D correspondant | Voir la commande `Type` |
| relatedEntity           | 38 (Is object)                 |                         |
| relatedEntities         | 42 (Is collection)             |                         |

<!-- END REF -->



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

La propriété `.indexed` <!-- REF DataClassAttributeClass.indexed.Summary -->contient Vrai s'il existe un index B-tree ou Cluster B-tree dans l'attribut<!-- END REF -->.

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

La propriété `.inverseName` <!-- REF DataClassAttributeClass.inverseName.Summary -->retourne le nom de l'attribut qui est à l'autre extrémité du lien<!-- END REF -->.

Cette propriété n'est pas retournée si `.kind` = "storage". Elle doit être du type "relatedEntities" ou "relatedEntities".
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

Cette propriété n'est pas retournée si [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.keywordIndexed) pour obtenir une valeur valide (false) même si `.keywordIndexed` n'est pas retourné.

<!-- END REF -->



<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.kind.Syntax -->
**.kind** : Text<!-- END REF -->


#### Description

La propriété `.kind` <!-- REF DataClassAttributeClass.kind.Summary -->retourne la catégorie de l'attribut<!-- END REF -->. La valeur retournée peut être l'une des chaînes suivantes :

*   "storage" : attribut de stockage (ou scalaire), c'est-à-dire un attribut stockant une valeur, et non une référence à un autre attribut
*   "relatedEntity" : attribut relationnel N -> (référence vers une entité)
*   "relatedEntities" : attribut relationnel 1 -> N (référence vers une entity selection)


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

La propriété `.mandatory` <!-- REF DataClassAttributeClass.mandatory.Summary -->contient Vrai si une saisie de valeur Null pour l'attribut est rejetée<!-- END REF -->.

Cette propriété n'est pas retournée si [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
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

La propriété `.name` <!-- REF DataClassAttributeClass.name.Summary -->retourne le nom de l'objet `dataClassAttribute` sous forme de chaîne<!-- END REF -->.

#### Exemple

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

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

La propriété `.relatedDataClass` <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->retourne le nom de la dataclass liée à l'attribut<!-- END REF -->.

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
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!-- REF DataClassAttributeClass.type.Syntax -->
**.type** : Texte<!-- END REF -->


#### Description

La propriété `.type` <!-- REF DataClassAttributeClass.type.Summary -->contient le type conceptuel de la valeur de l'attribut<!-- END REF -->, utile pour de la programmation générique.

Le type de valeur conceptuelle dépend de l'attribut [`.kind`](#kind).

**Valeurs possibles :**

| dataClassAttribute.kind | type                                                     | Commentaire                                                                                                                                   |
| ----------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "number", "date", "object", "bool", "image", ou "string" | "nombre" est rertourné pour tous les types numériques, y compris la durée. "string" est retourné pour les types de champs uuid, alpha et text |
| relatedEntity           | related dataClass name                                   | Ex : "Companies"                                                                                                                              |
| relatedEntities         | related dataClass name + "Selection" suffix              | Ex : "EmployeeSelection"                                                                                                                      |

<!-- END REF -->




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

La propriété `.unique` <!-- REF DataClassAttributeClass.unique.Summary -->contient Vrai si la valeur de l'attribut doit être unique<!-- END REF -->. Cette propriété correspond à la propriété de champ 4D "Unique".

Cette propriété n'est pas retournée si [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.unique) pour obtenir une valeur valide (false) même si `.unique` n'est pas retourné.

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
