---
id: clear-named-selection
title: CLEAR NAMED SELECTION
slug: /commands/clear-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR NAMED SELECTION.Syntax-->**CLEAR NAMED SELECTION** ( *name* )<!-- END REF-->
<!--REF #_command_.CLEAR NAMED SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| name | Text | &#8594;  | クリアする命名セレクション名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLEAR NAMED SELECTION.Summary-->CLEAR NAMED SELECTION は、命名セレクション*name*をメモリから消去して、*name*が使用していたメモリを解放します。<!-- END REF-->CLEAR NAMED SELECTIONはテーブル、セレクション、およびレコードには影響しません。命名セレクションはメモリを使用するため、不要になったら消去する習慣をつけることをお勧めします。

[CUT NAMED SELECTION](cut-named-selection.md "CUT NAMED SELECTION")コマンドを使用して命名セレクション*name*を作成し、[USE NAMED SELECTION](use-named-selection.md "USE NAMED SELECTION")コマンドで処理した場合には、命名セレクション*name*は既にメモリ上にはありません。この場合は、CLEAR NAMED SELECTIONコマンドを使用する必要はありません。

#### 参照 

[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 333 |
| スレッドセーフである | &check; |


