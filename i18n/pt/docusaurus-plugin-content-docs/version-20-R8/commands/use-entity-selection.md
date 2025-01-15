---
id: use-entity-selection
title: USE ENTITY SELECTION
displayed_sidebar: docs
---

<!--REF #_command_.USE ENTITY SELECTION.Syntax-->**USE ENTITY SELECTION** ( *entitySelection* : 4D.EntitySelection )<!-- END REF-->

<!--REF #_command_.USE ENTITY SELECTION.Params-->

| Parâmetro       | Tipo                                |   | Descrição            |
| --------------- | ----------------------------------- | - | -------------------- |
| entitySelection | 4D. EntitySelection | → | Seleção de entidades |

<!-- END REF-->

#### Descrição

The `USE ENTITY SELECTION` command <!--REF #_command_.USE ENTITY SELECTION.Summary-->updates the current selection of the table matching the dataclass of the *entitySelection* parameter, according to the content of the entity selection<!-- END REF-->.

Este comando não pode ser utilizado com um [datastore remoto](../ORDA/remoteDatastores.md).

:::info

Esse comando foi projetado para fazer com que as seleções de corrente 4D se beneficiem do poder das consultas ORDA. Por motivos de desempenho, no 4D single-user e no 4D Server, o comando conecta diretamente *entitySelection* à seleção atual. Portanto, uma vez que a *entitySelection* tenha sido usada, ela não deve ser reutilizada ou alterada posteriormente.

:::

:::note

Após uma chamada para `USE ENTITY SELECTION`, o primeiro registro da seleção atual atualizada (se não estiver vazio) torna-se o registro atual, mas não é carregado na memória. Se precisar usar os valores dos campos no registro atual, use o comando `LOAD RECORD` após o comando `USE ENTITY SELECTION`.

:::

#### Exemplo

```4d
var $entitySel : cs.EmployeeSelection

$entitySel:=ds.Employee.query("lastName = :1"; "M@") //$entitySel está relacionado à classe de dados Employee
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //A seleção atual da tabela Employee é atualizada
```

#### Veja também

[Create entity selection](create-entity-selection.md)

#### Propriedades

|                           |                                 |
| ------------------------- | ------------------------------- |
| Command number            | 1513                            |
| Thread safe               | &amp;check; |
| Changes current record    |                                 |
| Changes current selection |                                 |
