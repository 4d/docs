---
id: sax-get-xml-cdata
title: SAX GET XML CDATA
slug: /commands/sax-get-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML CDATA.Syntax-->**SAX GET XML CDATA** ( *document* ; *value* )<!-- END REF-->
<!--REF #_command_.SAX GET XML CDATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| value | Text, Blob | &#8592; | 要素値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX GET XML CDATA.Summary-->**SAX GET XML CDATA**コマンドを使用して、*document* 引数で参照されるXMLドキュメント中に存在するXML要素のCDATA *value* を取得できます。<!-- END REF-->このコマンドはXML CDATA SAX イベント内で呼び出さなければなりません。SAXイベントに関する詳細は[SAX Get XML node](sax-get-xml-node.md)コマンドの説明を参照してください。

32 KBを超えるデータを取得するにはテキスト型の変数を*value*に渡します (データベースはUnicodeモードで実行されていなければなりません)。

**互換性に関する注記:** 4D v12以降、base64でエンコードされたCDATAの内容は**SAX GET XML CDATA**コマンドにより自動でデコードされるようになりました。[BASE64 DECODE](base64-decode.md)コマンドを呼び出す必要はありません。

#### 例題 

以下のXMLコードがあります:

```XML
<RootElement>
   <Child>MyText<![CDATA[MyCData]]</Child>
</RootElement>
```

以下の4Dコードは “MyCData” を *vTextData* に返します: 

```4d
 var vData : Blob
 var vTextData : Text
 SAX GET XML CDATA(DocRef;vData)
 vTextData:=BLOB to text(vData;UTF8 C string)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX ADD XML CDATA](sax-add-xml-cdata.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 878 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


