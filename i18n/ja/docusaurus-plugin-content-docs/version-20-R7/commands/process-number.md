---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* {; *} ) : Integer<br/>**Process number** ( *id* {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| 引数   | 型       |   | 説明                  |
| ---- | ------- | - | ------------------- |
| name | Text    | → | プロセス番号を取得したいプロセスの名前 |
| id   | Text    | → | プロセス番号を取得したいプロセスのID |
| \*   | 演算子     | → | サーバーからプロセス番号を返す     |
| 戻り値  | Integer | ← | Process number      |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容         |
| ----- | ---------- |
| 20 R7 | id 引数のサポート |

</details>

#### 説明

<!--REF #_command_.Process number.Summary-->`Process number` returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->`Process number` コマンドは第一引数*name* または *id* に渡した名前またはID を持つプロセスの番号を返します。 If no process is found, `Process number` returns 0.

The optional parameter \* allows you to retrieve, from a remote 4D, the number of a process that is executed on the server. In this case, the returned value is negative. This option is especially useful when using the [GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md), [SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md) and [VARIABLE TO VARIABLE](../commands-legacy/variable-to-variable.md) commands.

If the command is executed with the \* parameter from a process on the server machine, the returned value is positive.

#### 参照

[GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md)\
[Process state](../commands-legacy/process-state.md)\
[SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md)
