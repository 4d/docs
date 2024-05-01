---
id: DataClassAttributeClass
title: DataClassAttribute
---

Os atributos Dataclass estão disponíveis como propriedades de suas respectivas classes. Por exemplo:

```4d
 nameAttribute:=ds. Company.name //reference to class attribute
 revenuesAttribute:=ds. Company["revenues"] //alternate way
```

Este código assigna a *nameAttribute* e *revenuesAttribute* referências aos atributos name e revenues da classe Company. Essa sintaxe NAO devolve valores mantidos dentro do atributo, mas sim devolve referências aos próprios atributos. Para manejar os valores, é necessário passar por [**Entidades**](EntityClass.md).

Os objetos `DataClassAttribute` têm propriedades que pode ler para obter informação sobre os atributos de sua classe de dados.

> Os objetos do atributo Dataclass podem ser modificados, mas a estrutura subjacente do banco de dados não será alterada.

### Resumo

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF DataClassAttributeClass.autoFilled.Syntax -->**.autoFilled** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.autoFilled` <!-- REF DataClassAttributeClass.autoFilled.Summary -->contém True se o valor do atributo for automaticamente preenchido por 4D<!-- END REF -->. Esta propriedade corresponde às seguintes propriedades de campo 4D:

* "Auto incremento", para campos de tipo numérico
* "Auto UUID", para campos UUID (tipo alfa).

Esta propriedade não é devolvida se `.kind` = "relatedEntity" ou "relatedEntities".
> Para programação genérica, pode utilizar **Bool**(dataClassAttribute.autoFilled) para obter um valor válido (false) mesmo que `.autoFilled` não seja devolvido.

<!-- END REF -->

<!-- REF DataClassAttributeClass.exposed.Desc -->
## .exposed

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R3 | Adicionado |

</details>

<!-- REF DataClassAttributeClass.exposed.Syntax -->**.size** : Integer<!-- END REF -->

#### Descrição

A propriedade `.mandatory` <!-- REF DataClassAttributeClass.exposed.Summary -->contém True se o valor Null input for rejeitado para o atributo<!-- END REF -->.

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

<!-- REF DataClassAttributeClass.fieldNumber.Syntax -->**.size** : Integer<!-- END REF -->

#### Descrição

A propriedade `.fieldNumber` <!-- REF DataClassAttributeClass.fieldNumber.Summary -->contém o número do campo 4D interno do atributo<!-- END REF -->.

Esta propriedade não é devolvida se `.kind` = "relatedEntity" ou "relatedEntities".
> Para a programação genérica, se pode utilizar **Num**(dataClassAttribute.fieldNumber) para obter um valor válido (0) mesmo que não se devolva `.fieldNumber`.

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>Histórico</summary>

| Versão | Mudanças                                |
| ------ | --------------------------------------- |
| v19 R4 | Compatibilidade de atributos de alias   |
| v19 R3 | Compatibilidade de atributos computados |

</details>

<!-- REF DataClassAttributeClass.fieldType.Syntax -->**.fieldType** : Integer<!-- END REF -->

#### Descrição

A propriedade `.fieldType` <!-- REF DataClassAttributeClass.fieldType.Summary -->contém o tipo de base de dados 4D do atributo<!-- END REF -->. .

**Valores possíveis:**

| dataClassAttribute.kind | fieldType                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| storage                 | Tipo de campo 4D correspondente, ver [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html) |
| relatedEntity           | Ver o comando `Type`                                                                                        |
| relatedEntities         | 42 (`Is collection`)                                                                                        |
| calculated              | <li>escalar: tipo de campo 4D correspondente, ver [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>38 (Is object)</li><li>entity selection: 42 (`Is collection`)</li>                                 |
| alias                   | <li>escalar: tipo de campo 4D correspondente, ver [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>38 (Is object)</li><li>42 (Is collection)</li>                                 |

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

<!-- REF DataClassAttributeClass.indexed.Syntax -->**.indexed** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.indexed` <!-- REF DataClassAttributeClass.indexed.Summary -->contém **True** se houver uma árvore B ou um índice de árvore B cluster no atributo<!-- END REF -->.

Esta propriedade não é devolvida se `.kind` = "relatedEntity" ou "relatedEntities".
> Para programação genérica é possível usar **Bool**(dataClassAttribute.indexed) para obter um valor válido (false) mesmo se `.indexed` não for retornado.

<!-- END REF -->

<!-- REF DataClassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF DataClassAttributeClass.inverseName.Syntax -->**.inverseName** : Text<!-- END REF -->

#### Descrição

A propriedade `.inverseName` <!-- REF DataClassAttributeClass.inverseName.Summary -->devolve o nome do atributo que se encontra no outro lado da relação<!-- END REF -->.

Esta propriedade não se devolve si `.kind` = "storage". Deve ser do tipo "relatedEntity" ou "relatedEntities".
> Para programação genérica é possível usar **String**(dataClassAttribute.inverseName) para obter um valor válido ("") mesmo se `.inverseName` não for retornado.  

<!-- END REF -->

<!-- REF DataClassAttributeClass.keywordIndexed.Desc -->
## .keywordIndexed

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF DataClassAttributeClass.keywordIndexed.Syntax -->**.keywordIndexed** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.keywordIndexed` <!-- REF DataClassAttributeClass.keywordIndexed.Summary -->contém **True** se houver um índice de palavras-chave no atributo<!-- END REF -->.

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Para a programação gene´rica pode usar **Bool**(dataClassAttribute.keywordIndexed) para obter um valor válido (false) mesmo se `.keywordIndexed` não for retornado.

<!-- END REF -->

<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>Histórico</summary>

| Versão | Mudanças                |
| ------ | ----------------------- |
| v19 R4 | "alias" adicionado      |
| v19 R3 | "calculated" adicionado |

</details>

<!-- REF DataClassAttributeClass.kind.Syntax -->**.kind** : Text<!-- END REF -->

#### Descrição

A propriedade `.kind` <!-- REF DataClassAttributeClass.kind.Summary -->devolve a categoria do atributo<!-- END REF -->. O valor retornado pode ser um dos abaixo:

* Atributo "storage": storage (ou escalar) ou seja, atributo que armazena um valor, não uma referência a outro atributo
* "calculado": atributo computado, ou seja, definido através de uma [`obter` função](ORDA/ordaClasses.md#function-get-attributename)
* "alias": atributo construído sobre [outro atributo](ORDA/ordaClasses.md#alias-attributes-1)
* "relatedEntity": N -> 1 atributo de relação (referência a uma entidade)
* "relatedEntities": 1 -> N atributo de relação (referência a uma seleção de entidades)

#### Exemplo

Dada a seguinte tabela e relação:

![](../assets/en/API/dataclassAttribute3.png)

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

<!-- REF DataClassAttributeClass.mandatory.Syntax -->**.mandatory** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.name` <!-- REF DataClassAttributeClass.mandatory.Summary -->The `.name` property<!-- END REF -->.

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Para programação genérica, pode utilizar **Bool**(dataClassAttribute.mandatory) para obter um valor válido (false) mesmo que `.mandatory` não seja devolvido.
> **.size** : Integer **Aviso**: Essas propriedade corresponde à propriedade de campo "Reject NULL value input" ao nível do banco de dados 4D. Não tem relação com a propriedade existente "Mandatory"/obrigatório que é uma opção de controle de entrada de dados para uma tabela.

<!-- END REF -->

<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF DataClassAttributeClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` <!-- REF DataClassAttributeClass.name.Summary -->A propriedade `.relatedDataClass`<!-- END REF -->.

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

<!-- REF DataClassAttributeClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

A propriedade `.path` <!-- REF DataClassAttributeClass.path.Summary -->devolve o caminho de um atributo alias baseado numa relação<!-- END REF -->.

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

<!-- REF DataClassAttributeClass.readOnly.Syntax -->**.readOnly** : Boolean<!-- END REF -->

#### Descrição

O `.readOnly` propriedade é <!-- REF DataClassAttributeClass.readOnly.Summary -->true se o atributo for apenas de leitura<!-- END REF -->.

Por exemplo, os atributos computados sem o conjunto [`` função](ORDA/ordaClasses.md#function-set-attributename) são apenas de leitura.

<!-- END REF -->

<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |

</details>

<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->**.relatedDataClass** : Text<!-- END REF -->

#### Descrição
> Esta propriedade só está disponível com atributos da propriedade "relatedEntity" ou "relatedEntities" [`.kind`](#kind).

A propriedade `.relatedDataClass` <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->devolve o nome da classe de dados relacionada com o atributo<!-- END REF -->.

#### Exemplo

Dada a seguinte tabela e relação:

![](../assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds. Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds. Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.type.Desc -->
## .type

<details><summary>Histórico</summary>

| Versão | Mudanças                                |
| ------ | --------------------------------------- |
| v19 R3 | Compatibilidade de atributos computados |

</details>

<!-- REF DataClassAttributeClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Descrição

A propriedade `.type` <!-- REF DataClassAttributeClass.type.Summary -->contém o tipo de valor conceptual do atributo<!-- END REF -->, útil para a programação genérica.

O tipo de valor conceitual depende do atributo [`.kind`](#kind).

**Valores possíveis:**

| dataClassAttribute.kind | type                                                                           | Comentário                                                                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "number", "date", "object", "bool", "image", ou "string"                       | "number" se devolve para qualquer tipo numérico, incluindo a duração. "string" se devolve para os tipos de campo uuid, alfa e texto Os atributos "blob" são [objectos blob](Concepts/dt_blob.md#blob-type), que são tratados utilizando a [classe Blob](BlobClass.md). |
| relatedEntity           | related dataClass name                                                         | Ex: "Companies"                                                                                                                                                                                                                                                        |
| relatedEntities         | related dataClass name + "Selection" suffix                                    | Ex: "EmployeeSelection"                                                                                                                                                                                                                                                |
| calculated              | <li>storage: type ("blob", "number", etc.)</li><li>entity: dataClass name</li><li>entity selection: dataClass name + "Selection"</li> |                                                                                                                                                                                                                                                                        |

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

<!-- REF DataClassAttributeClass.unique.Syntax -->**.unique** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.unique` <!-- REF DataClassAttributeClass.unique.Summary -->contém True se o valor do atributo deve ser único<!-- END REF -->. Essa propriedade corresponde a propriedade de campo 4D "Unique".

Esta propriedade não é retornada se [`.kind`](#kind) = "relatedEntity" ou "relatedEntities".
> Para programação genérica pode usar **Bool**(dataClassAttribute.unique) pra obter um valor válido (false) mesmo se `.unique` não for retornado.

<!-- END REF -->
