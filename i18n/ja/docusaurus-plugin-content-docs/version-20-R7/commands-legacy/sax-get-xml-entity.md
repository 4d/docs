---
id: sax-get-xml-entity
title: SAX GET XML ENTITY
slug: /commands/sax-get-xml-entity
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ENTITY.Syntax-->**SAX GET XML ENTITY** ( *document* ; *name* ; *value* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ENTITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| name | Text | &#8592; | 実体名 |
| value | Text | &#8592; | 実体値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX GET XML ENTITY.Summary-->SAX GET XML ENTITY コマンドを使用して、*document* 引数で参照されるXMLドキュメント中に存在するXML実体の名前と値を*name*と*value*に取得できます。<!-- END REF-->このコマンドはXML Entity SAXイベントで呼び出されなければなりません。SAXイベントに関する詳細は[SAX Get XML node](sax-get-xml-node.md "SAX Get XML node") コマンドの説明を参照してください。

#### 例題 

以下のXMLコードがあります:

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
   <!ELEMENT body (element*)>
   <!ELEMENT element (#PCDATA)>
   <!ENTITY name "Replacement">
]>
<body>
   <element>Entity updated by &name;</element>
</body>
```

以下のコードを実行すると*vName*に"name"が、*vValue*に"Replacement"が返されます。 

```4d
 SAX GET XML ENTITY(DocRef;vName;vValue)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX Get XML node](sax-get-xml-node.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 879 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


