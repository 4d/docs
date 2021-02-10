---
id: dataclassAttributeClass
title: DataClassAttribute
---

Dataclass attributes are available as properties of their respective classes. Par exemple :

```4d
 nameAttribute:=ds.Company.name //référence à un attribut de classe
 revenuesAttribute:=ds.Company["revenues"] //méthode alternative
```

This code assigns to *nameAttribute* and *revenuesAttribute* references to the name and revenues attributes of the Company class. Cette syntaxe ne retourne PAS les valeurs contenues dans l'attribut, mais retourne plutôt des références aux attributs eux-mêmes. To handle values, you need to go through [**Entities**](entityClass.md).

`DataClassAttribute` objects have properties that you can read to get information about your dataclass attributes.

> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

### Sommaire

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE dataclassAttributeClass.autoFilled.Syntax -->](#autoFilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.autoFilled.Summary -->|
| [<!-- INCLUDE dataclassAttributeClass.fieldNumber.Syntax -->](#fieldNumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.fieldType.Syntax -->](#fieldType)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.indexed.Syntax -->](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.inverseName.Syntax -->](#inverseName)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.keyWordIndexed.Syntax -->](#keyWordIndexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.keyWordIndexed.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.kind.Syntax -->](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.mandatory.Syntax -->](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.name.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.relatedDataClass.Syntax -->](#relatedDataClass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.type.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.unique.Syntax -->](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.unique.Summary --> |



<!-- REF dataclassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.autoFilled.Syntax -->
**.autoFilled** : Booléen<!-- END REF -->


#### Description

The `.autoFilled` property <!-- REF dataclassAttributeClass.autoFilled.Summary -->contains True if the attribute value is automatically filled by 4D<!-- END REF -->. This property corresponds to the following 4D field properties:

*   "Autoincrement", for numeric type fields
*   "Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.autoFilled) to get a valid value (false) even if `.autoFilled` is not returned. 


<!-- END REF -->




<!-- REF dataclassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.fieldNumber.Syntax -->
**.fieldNumber** : Entier<!-- END REF -->


#### Description

The `.fieldNumber` property <!-- REF dataclassAttributeClass.fieldNumber.Summary -->contains the internal 4D field number of the attribute<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned. 


<!-- END REF -->




<!-- REF dataclassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.fieldType.Syntax -->
**.fieldType** : Integer<!-- END REF -->


#### Description

The `.fieldType` property <!-- REF dataclassAttributeClass.fieldType.Summary -->contains the 4D database type of the attribute<!-- END REF -->. It depends on the attribute kind (see [`.kind`](#kind)).

**Valeurs possibles :**

| dataClassAttribute.kind | fieldType                   | Commentaire             |
| ----------------------- | --------------------------- | ----------------------- |
| storage                 | Corresponding 4D field type | Voir la commande `Type` |
| relatedEntity           | 38 (Is object)              |                         |
| relatedEntities         | 42 (Is collection)          |                         |

<!-- END REF -->



<!-- REF dataclassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.indexed.Syntax -->
**.indexed** : Booléen<!-- END REF -->


#### Description

The `.indexed` property <!-- REF dataclassAttributeClass.indexed.Summary -->contains **True** if there is a B-tree or a Cluster B-tree index on the attribute<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.indexed) to get a valid value (false) even if `.indexed` is not returned. 

<!-- END REF -->




<!-- REF dataclassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.inverseName.Syntax -->
**.inverseName** : Text<!-- END REF -->


#### Description

The `.inverseName` property <!-- REF dataclassAttributeClass.inverseName.Summary -->returns the name of the attribute which is at the other side of the relation<!-- END REF -->.

This property is not returned if `.kind` = "storage". It must be of the "relatedEntity" or "relatedEntities" kind.
> For generic programming, you can use **String**(dataClassAttribute.inverseName) to get a valid value ("") even if `.inverseName` is not returned.  

<!-- END REF -->




<!-- REF dataclassAttributeClass.keyWordIndexed.Desc -->
## .keyWordIndexed

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.keyWordIndexed.Syntax -->
**.keyWordIndexed** : Boolean<!-- END REF -->


#### Description

The `.keyWordIndexed` property <!-- REF dataclassAttributeClass.keyWordIndexed.Summary -->contains **True** if there is a keyword index on the attribute<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.keyWordIndexed) to get a valid value (false) even if `.keyWordIndexed` is not returned. 

<!-- END REF -->



<!-- REF dataclassAttributeClass.kind.Desc -->
## .kind

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.kind.Syntax -->
**.kind** : Text<!-- END REF -->


#### Description

The `.kind` property <!-- REF dataclassAttributeClass.kind.Summary -->returns the category of the attribute<!-- END REF -->. Returned value can be one of the following:

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


<!-- END REF -->




<!-- REF dataclassAttributeClass.mandatory.Desc -->
## .mandatory

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.mandatory.Syntax -->
**.mandatory** : Boolean<!-- END REF -->


#### Description

The `.mandatory` property <!-- REF dataclassAttributeClass.mandatory.Summary -->contains True if Null value input is rejected for the attribute<!-- END REF -->.

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned.
> **Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table. 

<!-- END REF -->




<!-- REF dataclassAttributeClass.name.Desc -->
## .name

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Description

La propriété `.name` <!-- REF dataclassAttributeClass.name.Summary -->retourne le nom de l'objet `dataClassAttribute` en chaîne<!-- END REF -->.

#### Exemple

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->



<!-- REF dataclassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>


<!-- REF dataclassAttributeClass.relatedDataClass.Syntax -->
**.relatedDataClass** : Text<!-- END REF -->


#### Description
> Cette propriété n'est disponible qu'avec les attributs de la propriété "relatedEntity" ou "relatedEntities" [`.kind`](#kind).

La propriété `.relatedDataClass` <!-- REF dataclassAttributeClass.relatedDataClass.Summary -->retourne le nom de la dataclass associée à l'attribut<!-- END REF -->.

#### Exemple

Considérons les tableaux et relations suivants :


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->



<!-- REF dataclassAttributeClass.type.Desc -->
## .type

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.type.Syntax -->
**.type** : Texte<!-- END REF -->


#### Description

La propriété `.type` <!-- REF dataclassAttributeClass.type.Summary -->contient le type de valeur conceptuelle de l'attribut<!-- END REF -->, utile pour la programmation générique.

Le type de valeur conceptuelle dépend de l'attribut [`.kind`](#kind).

**Valeurs possibles :**

| dataClassAttribute.kind | type                                                     | Commentaire                                                                                                                                   |
| ----------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "number", "date", "object", "bool", "image", ou "string" | "nombre" est rertourné pour tous les types numériques, y compris la durée. "string" est retourné pour les types de champs uuid, alpha et text |
| relatedEntity           | nom de dataClass associé                                 | Ex : "Companies"                                                                                                                              |
| relatedEntities         | nom de dataClass associé + suffixe "Selection"           | Ex : "EmployeeSelection"                                                                                                                      |

<!-- END REF -->




<!-- REF dataclassAttributeClass.unique.Desc -->
## .unique

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |
</details>


<!-- REF dataclassAttributeClass.unique.Syntax -->
**.unique** : Booléen<!-- END REF -->


#### Description

La propriété `.unique` <!-- REF dataclassAttributeClass.unique.Summary -->contient True si la valeur d'attribut doit être unique<!-- END REF -->. Cette propriété correspond à la propriété de champ 4D "Unique".

This property is not returned if [`.kind`](#kind) = "relatedEntity" or "relatedEntities".
> Pour la programmation générique, vous pouvez utiliser **Bool** (dataClassAttribute.unique) pour obtenir une valeur valide (false) même si `.unique` n'est pas retourné. 

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
