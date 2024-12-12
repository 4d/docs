---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *DocRef* ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Time | Time | &#8594;  | ドキュメント参照番号 |
| 戻り値 | Real | &#8592; | ドキュメント開始位置からの ファイル位置(バイト単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get document position.Summary-->このコマンドは*DocRef*に渡したドキュメント参照番号を持つ、現在開いているドキュメントだけに機能します。<!-- END REF-->

Get document positionは、ドキュメントの最初から見て、次の読み込み([RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")) または書き込み([SEND PACKET](send-packet.md "SEND PACKET")) が発生する位置を返します。

#### 参照 

[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  