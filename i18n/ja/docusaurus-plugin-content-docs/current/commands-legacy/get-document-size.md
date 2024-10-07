---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* {; *} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text, Time | &#x1F852; | ドキュメント参照番号 または、ドキュメントの名前 |
| * | 演算子 | &#x1F852; | Mac OSのみ: 省略した場合、データフォークのサイズ 指定した場合、リソースフォークのサイズ |
| 戻り値 | Real | &#x1F850; | ドキュメントのサイズ(バイト単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get document size.Summary-->Get document sizeコマンドは、ドキュメントのサイズをバイト単位で表示して返します。<!-- END REF-->

ドキュメントを開いている場合、そのドキュメント参照番号を*document*に渡します。  
ドキュメントを開いていない場合、その名前またはパス名*document*に渡します。

Macintoshでは、任意の引数 *\** を渡さない場合、データフォークのサイズが返されます。 引数 *\** を渡すと、リソースフォークのサイズが返されます。

#### 参照 

[Get document position](get-document-position.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET DOCUMENT SIZE](set-document-size.md)  