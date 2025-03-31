---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *DocRef* ; *size* )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Time | Time | &#8594;  | ドキュメント参照番号 |
| size | Real | &#8594;  | 新しいサイズ(バイト単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->SET DOCUMENT SIZE コマンドは、ドキュメントのサイズを引数*size*に渡したバイト数に設定します。<!-- END REF--> 

ドキュメントが開かれている場合には、引数*DocRef*にドキュメント参照番号を渡します。

Macintoshでは、ドキュメントデータフォークのサイズが変更されます。

#### 参照 

[Get document position](get-document-position.md)  
[Get document size](get-document-size.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 480 |
| スレッドセーフである | &check; |


