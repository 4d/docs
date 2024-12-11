---
id: sax-get-xml-element-value
title: SAX GET XML ELEMENT VALUE
slug: /commands/sax-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Syntax-->**SAX GET XML ELEMENT VALUE** ( *document* ; *value* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| value | Text, Blob | &#8592; | 要素値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Summary-->SAX GET XML ELEMENT VALUE コマンドは、*document* 引数で参照されるXMLドキュメント中に存在するXML要素の要素値を*value*に返します。<!-- END REF-->このコマンドはXML DATA SAXイベントで呼び出さなければなりません。SAXイベントに関する詳細は[SAX Get XML node](sax-get-xml-node.md "SAX Get XML node") コマンドの説明を参照してください。

TextまたはBLOB 型の変数を*value* 引数に渡します。BLOBを渡すと、コマンドは自動でBase64のデコードを試みます。

#### 例題 

以下のXMLコードがあります:

```XML
<RootElement>
   <Child Att1="111" Att2="222" Att3="333">MyText</Child>
</RootElement>
```

以下のコードは“MyText”を*vValue*に返します:

```4d
 SAX GET XML ELEMENT VALUE(DocRef;vValue)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 877 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


