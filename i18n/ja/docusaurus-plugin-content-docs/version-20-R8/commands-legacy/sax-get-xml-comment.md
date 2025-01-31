---
id: sax-get-xml-comment
title: SAX GET XML COMMENT
slug: /commands/sax-get-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML COMMENT.Syntax-->**SAX GET XML COMMENT** ( *document* ; *comment* )<!-- END REF-->
<!--REF #_command_.SAX GET XML COMMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| comment | Text | &#8592; | XMLコメント |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX GET XML COMMENT.Summary-->SAX GET XML COMMENT コマンドは、*document* 引数で参照されるXMLドキュメント中でXML Comment SAXイベントが生成された時、XMLコメントを*comment*に返します。<!-- END REF-->SAXイベントに関する詳細は[SAX Get XML node](sax-get-xml-node.md "SAX Get XML node") コマンドの説明を参照してください。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 874 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


