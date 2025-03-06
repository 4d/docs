---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | オプション番号 |
| value | Integer, Text | &#8592; | オプション値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL GET OPTION.Summary-->SQL GET OPTIONコマンドは、*option*に渡したオプションの現在の*value*を返します。<!-- END REF-->

各種オプションとその関連する値についての詳細は、[SQL SET OPTION](sql-set-option.md "SQL SET OPTION")コマンドを参照してください。

#### システム変数およびセット 

コマンドが正しく実行されるとOKシステム変数は1に、そうでなければ0に設定されます。

#### 参照 

[SQL SET OPTION](sql-set-option.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 819 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


