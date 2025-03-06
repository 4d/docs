---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *DocRef* ; *offset* {; *anchor*} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Time | Time | &#8594;  | ドキュメント参照番号 |
| offset | Real | &#8594;  | ファイル位置(バイトで指定) |
| anchor | Integer | &#8594;  | 1 = ファイル先頭からの相対位置 2 = ファイル最後からの相対位置 3 = 現在位置からの相対位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->このコマンドは、*DocRef*に渡したドキュメント参照番号を持つ、現在開いているドキュメントだけに機能します。<!-- END REF-->

SET DOCUMENT POSITION コマンドは、引数*offset*に渡す、以下の読み込み([RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")) または書き込み([SEND PACKET](send-packet.md "SEND PACKET")) が発生する位置を設定します。

オプションの引数*anchor*を省略すると、位置はドキュメントの先頭から相対的に表わされます。引数*anchor*を指定する場合はここにリストされている値のうちいずれかを渡します。

*anchor*によっては、引数*offset*に正の値または負の値を渡すことができます。

#### 参照 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 482 |
| スレッドセーフである | &check; |


