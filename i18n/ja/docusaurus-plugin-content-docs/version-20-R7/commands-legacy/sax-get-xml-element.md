---
id: sax-get-xml-element
title: SAX GET XML ELEMENT
slug: /commands/sax-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT.Syntax-->**SAX GET XML ELEMENT** ( *document* ; *name* ; *prefix* ; *attrNames* ; *attrValues* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| name | Text | &#8592; | 要素名 |
| prefix | Text | &#8592; | 名前空間 |
| attrNames | Text array | &#8592; | 属性名 |
| attrValues | Text array | &#8592; | 属性値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX GET XML ELEMENT.Summary-->SAX GET XML ELEMENT コマンドは*document* 引数で参照されるXMLドキュメントに現れる、*name*要素についてのさまざまな情報を返します。<!-- END REF-->このコマンドはXML Start ElementまたはXML End Element SAXイベントで呼び出さなければなりません。XML End Elementの特定のケースでは、属性引数は処理されません。SAXイベントに関する詳細は[SAX Get XML node](sax-get-xml-node.md "SAX Get XML node") コマンドの説明を参照してください。

*name* 引数には要素名を渡します。 

*prefix* 引数には要素の名前空間が返されます。要素に名前空間がリンクされていない場合は空の文字列となります。 

*attrNames* 配列にはターゲット要素の属性名リストが返されます。必要に応じてコマンドは配列を作成しサイズを調整します。 

*attrValues* 配列にはターゲット要素の属性値が返されます。必要に応じてコマンドは配列を作成しサイズを調整します。 

#### 例題 

以下のXMLコードがあります:

```XML
<RootElement>
   <Child Att1="111" Att2="222" Att3="333">MyText</Child>
</RootElement>
```

以下のコードが実行されると: 

```4d
 SAX GET XML ELEMENT(DocRef;vName;vPrefix;tAttrNames;tAttrValues)
```

vNameには"Child"が、  
vPrefixには""が、  
tAttrNames{1} には "Att1"、  
tAttrNames{2} には "Att2"、  
tAttrNames{3} には "Att3"が  
tAttrValues{1} には "111",   
tAttrValues{2} には "222"、  
tAttrValues{3} には "333"が返されます。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX Get XML node](sax-get-xml-node.md)  