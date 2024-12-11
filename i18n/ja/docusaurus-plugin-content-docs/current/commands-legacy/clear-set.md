---
id: clear-set
title: CLEAR SET
slug: /commands/clear-set
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SET.Syntax-->**CLEAR SET** ( *set* )<!-- END REF-->
<!--REF #_command_.CLEAR SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| set | Text | &#8594;  | メモリからクリアするセットの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLEAR SET.Summary-->CLEAR SETはメモリから*set*を消去し、*set*の占有していたメモリを解放します。<!-- END REF-->CLEAR SETはテーブル、セレクション、レコードには影響を与えません。セットは、消去する前に[SAVE SET](save-set.md "SAVE SET")コマンドを使用して保存することができます。セットはメモリを使用するため、必要のないセットは消去してください。

#### 例題 

[USE SET](use-set.md "USE SET")の例題参照

#### 参照 

[CREATE EMPTY SET](create-empty-set.md)  
[CREATE SET](create-set.md)  
[LOAD SET](load-set.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 117 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


