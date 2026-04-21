---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* : Text {; *} ) : Integer<br/>**Process number** ( *id* : Text {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

<div class="no-index">

| 引数   | 型       |                             | 説明                  |
| ---- | ------- | --------------------------- | ------------------- |
| name | Text    | &#8594; | プロセス番号を取得したいプロセスの名前 |
| id   | Text    | &#8594; | プロセス番号を取得したいプロセスのID |
| \*   | 演算子     | &#8594; | サーバーからプロセス番号を返す     |
| 戻り値  | Integer | &#8592; | Process number      |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース  | 内容         |
| ----- | ---------- |
| 20 R7 | id 引数のサポート |
| 6     | Created    |

</details>
</div>

## 説明

<!--REF #_command_.Process number.Summary-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->`Process number` コマンドは第一引数 *name* または *id* に渡した名前またはID を持つプロセスの番号を返します。 プロセスが見つからない場合、`Process number` は0 を返します。

オプションの \* 引数を渡すと、サーバー上で実行中のプロセス番号をリモートの 4D から取得することができます。 この場合、返される値は負の値になります。 このオプションは特に[GET PROCESS VARIABLE](../commands/get-process-variable)、 [SET PROCESS VARIABLE](../commands/set-process-variable) および [VARIABLE TO VARIABLE](../commands/variable-to-variable) コマンドを使用する場合などに有用です。

このコマンドが\* 引数付きでサーバーマシン上で実行された場合、返された値は正の値になります。

## 参照

[GET PROCESS VARIABLE](../commands/get-process-variable)\
[Process state](../commands/process-state)\
[SET PROCESS VARIABLE](../commands/set-process-variable)

## プロパティ

|         |     |
| ------- | --- |
| コマンド番号  | 372 |
| スレッドセーフ | ◯   |



