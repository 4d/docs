---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* {; *} ) : Real<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Text, Time | &#8594;  | ドキュメント参照番号 または、ドキュメントの名前 |
| * | 演算子 | &#8594;  | Mac OSのみ: 省略した場合、データフォークのサイズ 指定した場合、リソースフォークのサイズ |
| 戻り値 | Real | &#8592; | ドキュメントのサイズ(バイト単位) |

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

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 479 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


