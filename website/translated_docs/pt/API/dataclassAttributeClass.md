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

### Resumo

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

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.autoFilled.Syntax -->
**.autoFilled** : Boolean<!-- END REF -->


#### Description

La propiedad `.autoFilled` <!-- REF DataClassAttributeClass.autoFilled.Summary -->contém True se o valor de atributo for preenchido automaticamente por 4D<!-- END REF -->. This property corresponds to the following 4D field properties:

*   "Autoincrement", for numeric type fields
*   "Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.autoFilled) to get a valid value (false) even if `.autoFilled` is not returned.


<!-- END REF -->




<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.fieldNumber.Syntax -->
**.size** : Integer<!-- END REF -->


#### Description

A propriedade `.fieldNumber` <!-- REF DataClassAttributeClass.fieldNumber.Summary -->contém o número de campo 4D interno do atributo<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned.


<!-- END REF -->




<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.fieldType.Syntax -->
**.fieldType** : Integer<!-- END REF -->


#### Description

A propriedade `.fieldType` <!-- REF DataClassAttributeClass.fieldType.Summary -->contém o tipo 4D banco de dados do atributo<!-- END REF -->. Depende do tipo de atributo (ver [`.kind`](#kind)).

**Possible values:**

| dataClassAttribute.kind | fieldType                       | Comment              |
| ----------------------- | ------------------------------- | -------------------- |
| storage                 | Tipo de campo 4D correspondente | Ver o comando `Type` |
| relatedEntity           | 38 (Is object)                  |                      |
| relatedEntities         | 42 (Is collection)              |                      |

<!-- END REF -->



<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.indexed.Syntax -->
**.indexed** : Boolean<!-- END REF -->


#### Description

A propriedade `.indexed` <!-- REF DataClassAttributeClass.indexed.Summary -->contiene **True** se houver um índice B-tree ou Cluster B-tree no atributo<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.indexed) to get a valid value (false) even if `.indexed` is not returned.

<!-- END REF -->




<!-- REF DataClassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.inverseName.Syntax -->
**.inverseName** : Text<!-- END REF -->


#### Description

A propriedade `.inverseName` <!-- REF DataClassAttributeClass.inverseName.Summary -->devolve o nome do atributo que está do outro lado da relação<!-- END REF -->.

Esta propriedade não se devolve si `.kind` = "storage". Deve ser do tipo "relatedEntity" ou "relatedEntities".
> For generic programming, you can use **String**(dataClassAttribute.inverseName) to get a valid value ("") even if `.inverseName` is not returned.  

<!-- END REF -->




<!-- REF DataClassAttributeClass.keywordIndexed.Desc -->
## .keywordIndexed

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.keywordIndexed.Syntax -->
**.keywordIndexed** : Boolean<!-- END REF -->


#### Description

The `.keywordIndexed` property <!-- REF DataClassAttributeClass.keywordIndexed.Summary -->contains **True** if there is a keyword index on the attribute<!-- END REF -->.

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.keywordIndexed) to get a valid value (false) even if `.keywordIndexed` is not returned.

<!-- END REF -->



<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.kind.Syntax -->
**.kind** : Text<!-- END REF -->


#### Description

A propriedade `.kind` <!-- REF DataClassAttributeClass.kind.Summary -->devolve a categoria do atributo<!-- END REF -->. O valor retornado pode ser um dos abaixo:

*   "storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute
*   "relatedEntity": N -> 1 atributo de relação (referência a uma entidade)
*   "relatedEntities": 1 -> N atributo de relação (referência a uma seleção de entidades)


#### Exemplo

Dada a seguinte tabela e relação:

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

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.mandatory.Syntax -->
**.mandatory** : Boolean<!-- END REF -->


#### Description

A propriedade `.mandatory` <!-- REF DataClassAttributeClass.mandatory.Summary -->contém True se reusar a entrada de valores Null para o atributo<!-- END REF -->.

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned.
> **Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.

<!-- END REF -->




<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Description

A propriedade `.name` <!-- REF DataClassAttributeClass.name.Summary -->retorna o nome do objeto `dataClassAttribute` como uma string<!-- END REF -->.

#### Exemplo

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->



<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>


<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->
**.relatedDataClass** : Text<!-- END REF -->


#### Description
> This property is only available with attributes of the "relatedEntity" or "relatedEntities" [`.kind`](#kind) property.

A propriedade `.relatedDataClass` <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->retorna o nome da classe de dados relacionada ao atributo<!-- END REF -->.

#### Exemplo

Dada a seguinte tabela e relação:


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->



<!-- REF DataClassAttributeClass.type.Desc -->
## .type

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.type.Syntax -->
**.type** : Text<!-- END REF -->


#### Description

A propriedade `.type` <!-- REF DataClassAttributeClass.type.Summary -->contém o tipo de valor conceitual do atributo<!-- END REF -->, útil para a programação genérica.

O tipo de valor conceitual depende do atributo [`.kind`](#kind).

**Possible values:**

| dataClassAttribute.kind | type                                                     | Comment                                                                                                                      |
| ----------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "number", "date", "object", "bool", "image", ou "string" | "number" is returned for any numeric types including duration. "string" se devolve para os tipos de campo uuid, alfa e texto |
| relatedEntity           | related dataClass name                                   | Ex: "Companies"                                                                                                              |
| relatedEntities         | related dataClass name + "Selection" suffix              | Ex: "EmployeeSelection"                                                                                                      |

<!-- END REF -->




<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>


<!-- REF DataClassAttributeClass.unique.Syntax -->
**.unique** : Boolean<!-- END REF -->


#### Description

A propriedade `.unique` <!-- REF DataClassAttributeClass.unique.Summary -->contém True se o valor do atributo dever ser único<!-- END REF -->. Essa propriedade corresponde a propriedade de campo 4D "Unique".

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.unique) to get a valid value (false) even if `.unique` is not returned.

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
