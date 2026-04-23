---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *option* : Integer ; *value* : Integer, Text )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#8594; | オプション番号 |
| value | Integer, Text | &#8592; | オプション値 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SQL GET OPTION.Summary-->SQL GET OPTIONコマンドは、*option*に渡したオプションの現在の*value*を返します。<!-- END REF-->

各種オプションとその関連する値についての詳細は、[SQL SET OPTION](sql-set-option.md "SQL SET OPTION")コマンドを参照してください。

## システム変数およびセット 

コマンドが正しく実行されるとOKシステム変数は1に、そうでなければ0に設定されます。

## 参照 

[SQL SET OPTION](../commands/sql-set-option)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 819 |
| スレッドセーフである | no |
| システム変数を更新する | OK |


