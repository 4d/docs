---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* {; *} ) : Integer<br/>**Process number** ( *id* {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| Paramètres | Type      |   | Description                                              |
| ---------- | --------- | - | -------------------------------------------------------- |
| name       | Text      | → | Name of process for which to retrieve the process number |
| id         | Text      | → | ID of process for which to retrieve the process number   |
| \*         | Opérateur | → | Return the process number from the server                |
| Résultat   | Integer   | ← | Process number                                           |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications           |
| ------- | ----------------------- |
| 20 R7   | Support of id parameter |

</details>

#### Description

<!--REF #_command_.Process number.Summary-->`Process number` returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->`Process number` returns the number of the process whose *name* or *id* you pass in the first parameter. If no process is found, `Process number` returns 0.

The optional parameter \* allows you to retrieve, from a remote 4D, the number of a process that is executed on the server. In this case, the returned value is negative. This option is especially useful when using the [GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md), [SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md) and [VARIABLE TO VARIABLE](../commands-legacy/variable-to-variable.md) commands.

If the command is executed with the \* parameter from a process on the server machine, the returned value is positive.

#### Voir également

[GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md)\
[Process state](../commands-legacy/process-state.md)\
[SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md)
