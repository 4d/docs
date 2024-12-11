---
id: sax-get-xml-document-values
title: SAX GET XML DOCUMENT VALUES
slug: /commands/sax-get-xml-document-values
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Syntax-->**SAX GET XML DOCUMENT VALUES** ( *document* ; *encoding* ; *version* ; *standalone* )<!-- END REF-->
<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| encoding | Text | &#8592; | XMLドキュメント文字セット |
| version | Text | &#8592; | XMLバージョン |
| standalone | Boolean | &#8592; | True = ドキュメントはスタンドアロン, そうない場合 False |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX GET XML DOCUMENT VALUES.Summary-->SAX GET XML DOCUMENT VALUES コマンドは、*document* 引数で参照されるXMLドキュメントのXMLヘッダから基本情報を取得します。<!-- END REF--> 

コマンドはエンコーディングのタイプ、バージョン、そして"スタンドアロン" プロパティをそれぞれ*encoding*、*version*、そして*standalone*引数に返します。このコマンドはXML Start Documentイベント内で使用されなければなりません。SAXイベントに関する詳細は[SAX Get XML node](sax-get-xml-node.md "SAX Get XML node") コマンドの説明を参照してください。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX Get XML node](sax-get-xml-node.md)  
[SAX SET XML DECLARATION](sax-set-xml-declaration.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 873 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


