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

The `Create entity selection` command <!--REF #_command_.Create entity selection.Summary-->builds and returns a new, [alterable](../ORDA/entities.md#shareable-or-alterable-entity-selections) entity selection related to the dataclass matching the given *dsTable*, according to the current selection of this table<!-- END REF-->.

If the current selection is sorted, an [ordered](../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). Se a seleção atual não for ordenada, se cria uma seleção de entidades não ordenada.

If the *dsTable* is not exposed in [`ds`](ds.md), an error is returned. Esse comando não pode usado com uma datastore remota.

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
