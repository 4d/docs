---
id: DataClassAttributeClass
title: DataClassAttribute
---

Dataclass attributes are available as properties of their respective classes. Por exemplo:

```4d
 nameAttribute:=ds. Company.name //reference to class attribute
 revenuesAttribute:=ds. Company["revenues"] //alternate way
```

This code assigns to *nameAttribute* and *revenuesAttribute* references to the name and revenues attributes of the Company class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through [**Entities**](EntityClass.md).

`DataClassAttribute` objects have properties that you can read to get information about your dataclass attributes.

> Dataclass attribute objects can be modified, but the underlying database structure will not be altered.

### Resumo

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassAttributeClass.autoFilled.Syntax -->](#autofilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.autoFilled.Summary -->                   |
| [<!-- INCLUDE DataClassAttributeClass.exposed.Syntax -->](#exposed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.exposed.Summary -->                            |
| [<!-- INCLUDE DataClassAttributeClass.fieldNumber.Syntax -->](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldNumber.Summary -->                |
| [<!-- INCLUDE DataClassAttributeClass.fieldType.Syntax -->](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldType.Summary -->                      |
| [<!-- INCLUDE DataClassAttributeClass.indexed.Syntax -->](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.indexed.Summary -->                            |
| [<!-- INCLUDE DataClassAttributeClass.inverseName.Syntax -->](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.inverseName.Summary -->                |
| [<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Syntax -->](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Summary -->       |
| [<!-- INCLUDE DataClassAttributeClass.kind.Syntax -->](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.kind.Summary -->                                     |
| [<!-- INCLUDE DataClassAttributeClass.mandatory.Syntax -->](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.mandatory.Summary -->                      |
| [<!-- INCLUDE DataClassAttributeClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.name.Summary -->                                     |
| [<!-- INCLUDE DataClassAttributeClass.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.path.Summary -->                                     |
| [<!-- INCLUDE DataClassAttributeClass.readOnly.Syntax -->](#readonly)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.readOnly.Summary -->                         |
| [<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Syntax -->](#relateddataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.type.Summary -->                                     |
| [<!-- INCLUDE DataClassAttributeClass.unique.Syntax -->](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.unique.Summary -->                               |


<!-- REF DataClassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.autoFilled.Syntax --> **.autoFilled** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.fieldNumber` <!-- REF DataClassAttributeClass.fieldNumber. This property corresponds to the following 4D field properties:</p>

*   "Autoincrement", for numeric type fields
*   "Auto UUID", for UUID (alpha type) fields.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.mandatory) to get a valid value (false) even if `.mandatory` is not returned.

<!-- END REF -->

<!-- REF DataClassAttributeClass.exposed.Desc -->
## .exposed

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R3 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.exposed.Syntax --> **.exposed** : Boolean<!-- END REF -->


#### Descrição

The `.exposed` property is <!-- REF DataClassAttributeClass.exposed.Summary -->true if the attribute is exposed in REST<!-- END REF -->.


#### Veja também

[DataClass.getInfo()](DataClassClass.md#getinfo)

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.fieldNumber.Syntax --> **.size** : Integer<!-- END REF -->


#### Descrição

A propriedade `.fieldType` <!-- REF DataClassAttributeClass.fieldType. Summary -->contém o tipo 4D banco de dados do atributo<!-- END REF -->.

This property is not returned if `.kind` = "relatedEntity" or "relatedEntities".
> For generic programming, you can use **Num**(dataClassAttribute.fieldNumber) to get a valid value (0) even if `.fieldNumber` is not returned.

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>Histórico</summary>
| Versão | Mudanças                       |
| ------ | ------------------------------ |
| v19 R4 | Support of alias attributes    |
| v19 R3 | Support of computed attributes |
</details>



<!-- REF DataClassAttributeClass.fieldType.Syntax --> **.fieldType** : Integer<!-- END REF -->


#### Descrição

A propriedade `.type` <!-- REF DataClassAttributeClass.type. Summary -->contém o tipo de valor conceitual do atributo<!-- END REF -->, útil para a programação genérica.

**Possible values:**

| dataClassAttribute.kind | fieldType                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| storage                 | Corresponding 4D field type, see [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)            |
| relatedEntity           | 38 (`Is object`)                                                                                                   |
| relatedEntities         | 42 (`Is collection`)                                                                                               |
| calculated              | <li>scalar: corresponding 4D field type, see [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)` |
| alias                   | <li>scalar: corresponding 4D field type, see [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)` |


<!-- END REF -->

#### Veja também

[.type](#type)

<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.indexed.Syntax --> **.indexed** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.indexed` <!-- REF DataClassAttributeClass.indexed. Summary -->contiene **True** se houver um índice B-tree ou Cluster B-tree no atributo<!-- END REF -->.

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



<!-- REF DataClassAttributeClass.inverseName.Syntax --> **.inverseName** : Text<!-- END REF -->


#### Descrição

A propriedade `.inverseName` <!-- REF DataClassAttributeClass.inverseName. Summary -->devolve o nome do atributo que está do outro lado da relação<!-- END REF -->.

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



<!-- REF DataClassAttributeClass.keywordIndexed.Syntax --> **.keywordIndexed** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.keywordIndexed` <!-- REF DataClassAttributeClass.keywordIndexed. Summary -->contém **True** se houver um índice de palavras chaves no atributo<!-- END REF -->.

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.keywordIndexed) to get a valid value (false) even if `.keywordIndexed` is not returned.

<!-- END REF -->

<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>Histórico</summary>
| Versão | Mudanças           |
| ------ | ------------------ |
| v19 R4 | Added "alias"      |
| v19 R3 | Added "calculated" |
</details>



<!-- REF DataClassAttributeClass.kind.Syntax --> **.kind** : Text<!-- END REF -->


#### Descrição

A propriedade `.kind` <!-- REF DataClassAttributeClass.kind. Summary -->devolve a categoria do atributo<!-- END REF -->. O valor retornado pode ser um dos abaixo:

*   "storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute
*   "calculated": computed attribute, i.e. defined through a [`get` function](ORDA/ordaClasses.md#function-get-attributename)
*   "alias": attribute built upon [another attribute](ORDA/ordaClasses.md#alias-attributes-1)
*   "relatedEntity": N -> 1 atributo de relação (referência a uma entidade)
*   "relatedEntities": 1 -> N atributo de relação (referência a uma seleção de entidades)


#### Exemplo

Dada a seguinte tabela e relação:

![](assets/en/API/dataclassAttribute3.png)

```4d
 var $attKind : Text
 $attKind:=ds. Employee.lastname.kind //$attKind="storage"
 $attKind:=ds. Employee.manager.kind //$attKind="relatedEntity"
 $attKind:=ds. Employee.directReports.kind //$attKind="relatedEntities"
```


<!-- END REF -->

<!-- REF DataClassAttributeClass.mandatory.Desc -->
## .mandatory

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.mandatory.Syntax --> **.mandatory** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.mandatory` <!-- REF DataClassAttributeClass.mandatory. Summary -->contém True se reusar a entrada de valores Null para o atributo<!-- END REF -->.

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> **.size** : Integer
> **Warning**: This property corresponds to the "Reject NULL value input" field property at the 4D database level. It is unrelated to the existing "Mandatory" property which is a data entry control option for a table.

<!-- END REF -->

<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.name.Syntax --> **.name** : Text<!-- END REF -->


#### Descrição

A propriedade `.name` <!-- REF DataClassAttributeClass.name. Summary -->retorna o nome do objeto `dataClassAttribute` como uma string<!-- END REF -->.

#### Exemplo

```4d
 var $attName : Text
 $attName:=ds. Employee.lastname.name //$attName="lastname"
```


<!-- END REF -->

<!-- REF DataClassAttributeClass.path.Desc -->
## .path

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.path.Syntax --> **.path** : Text<!-- END REF -->


#### Descrição

The `.path` property <!-- REF DataClassAttributeClass.path. Summary -->returns the path of an alias attribute based upon a relation<!-- END REF -->.

#### Exemplo

```4d
 var $path : Text
 $path:=ds. Teacher.students.path //$path="courses.student"
```


<!-- END REF -->

<!-- REF DataClassAttributeClass.readOnly.Desc -->
## .readOnly

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v19 R3 | Adicionado |


</details>



<!-- REF DataClassAttributeClass.readOnly.Syntax --> **.readOnly** : Boolean<!-- END REF -->


#### Descrição

The `.readOnly` property is <!-- REF DataClassAttributeClass.readOnly. Summary -->true if the attribute is read-only<!-- END REF -->.

For example, computed attributes without [`set` function](ORDA/ordaClasses.md#function-set-attributename) are read-only. 

<!-- END REF -->

<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |


</details>



<!-- REF DataClassAttributeClass.relatedDataClass.Syntax --> **.relatedDataClass** : Text<!-- END REF -->


#### Descrição
> This property is only available with attributes of the "relatedEntity" or "relatedEntities" [`.kind`](#kind) property.

A propriedade `.relatedDataClass` <!-- REF DataClassAttributeClass.relatedDataClass. Summary -->retorna o nome da classe de dados relacionada ao atributo<!-- END REF -->.

#### Exemplo

Dada a seguinte tabela e relação:


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds. Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds. Employee.directReports.relatedDataClass //$relClassN="Employee"
```


<!-- END REF -->

<!-- REF DataClassAttributeClass.type.Desc -->
## .type

<details><summary>Histórico</summary>
| Versão | Mudanças                       |
| ------ | ------------------------------ |
| v19 R3 | Support of computed attributes |
</details>



<!-- REF DataClassAttributeClass.type.Syntax --> **.type** : Text<!-- END REF -->


#### Descrição

A propriedade `.type` <!-- REF DataClassAttributeClass.type.Summary -->contém o tipo de valor conceitual do atributo<!-- END REF -->, útil para a programação genérica.

O tipo de valor conceitual depende do atributo [`.kind`](#kind).

**Possible values:**

| dataClassAttribute.kind | type                                                                                                                         | Comentário                                                                                                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", or "string"                                                             | "number" is returned for any numeric types including duration. "string" is returned for uuid, alpha and text field types. "blob" attributes are [blob objects](Concepts/dt_blob.md#blob-type), they are handled using the [Blob class](BlobClass.md). |
| relatedEntity           | related dataClass name                                                                                                       | Ex: "Companies"                                                                                                                                                                                                                                       |
| relatedEntities         | related dataClass name + "Selection" suffix                                                                                  | Ex: "EmployeeSelection"                                                                                                                                                                                                                               |
| calculated              | <li>storage: type ("blob", "number", etc.)</li><li>entity: dataClass name</li><li>entity selection: dataClass name + "Selection" |                                                                                                                                                                                                                                                       |


<!-- END REF -->

#### Veja também

[`.fieldType`](#fieldtype)

<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>



<!-- REF DataClassAttributeClass.unique.Syntax --> **.unique** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.unique` <!-- REF DataClassAttributeClass.unique. Summary -->contém True se o valor do atributo dever ser único<!-- END REF -->. Essa propriedade corresponde a propriedade de campo 4D "Unique".

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> For generic programming, you can use **Bool**(dataClassAttribute.unique) to get a valid value (false) even if `.unique` is not returned.

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
