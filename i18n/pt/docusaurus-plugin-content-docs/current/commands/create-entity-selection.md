---
id: create-entity-selection
title: Criar uma seleção de entidades (entity selection)
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->***Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF-->

<!--REF #_command_.Create entity selection.Params-->

| Parâmetro | Tipo                                |   | Descrição                                                                                         |
| --------- | ----------------------------------- | - | ------------------------------------------------------------------------------------------------- |
| dsTable   | Tabela                              | → | Tabela do banco de dados 4D cuja seleção atual se utilizará para construir a seleção de entidades |
| settings  | Object                              | → | Opção de construção: context                                                      |
| Resultado | 4D. EntitySelection | ← | Seleção de entidades que coincidem com a classe de dados relacionada com a tabela dada            |

<!-- END REF-->

#### Descrição

O comando `Create entity selection` <!--REF #_command_.Create entity selection.Summary-->cria e retorna uma nova seleção de entidade [alterável](../ORDA/entities.md#shareable-or-alterable-entity-selections) relacionada à classe de dados correspondente à *dsTable* fornecida, de acordo com a seleção atual dessa tabela<!-- END REF-->.

Se a seleção atual for ordenada, uma entidade [ordenada](../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) é criada (a ordem da seleção atual é mantida). Se a seleção atual não for ordenada, se cria uma seleção de entidades não ordenada.

Se *dsTable* não for exposta em [`ds`](ds.md), um erro será retornado. Esse comando não pode usado com uma datastore remota.

No parâmetro opcional *settings*, você pode passar um objeto que contenha a seguinte propriedade:

| Propriedade | Tipo | Descrição                                                                                                                      |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------------ |
| context     | Text | Rótulo para o [contexto de otimização](../ORDA/client-server-optimization.md) aplicado à seleção de entidades. |

#### Exemplo

```4d
var $employees : cs. EmployeeSelection ALL RECORDS([Employee])
$employees:=Create entity selection([Employee]) 
// A entity selection $employees agora contém um conjunto de referências
// em todas as entidades relacionadas com a classe de dados Employee
```

#### Veja também

[USE ENTITY SELECTION](use-entity-selection.md)<br/>[`dataClass.newSelection()`](../API/DataClassClass.md#newselection)
