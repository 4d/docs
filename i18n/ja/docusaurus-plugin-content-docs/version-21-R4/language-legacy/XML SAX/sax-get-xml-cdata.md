---
id: sax-get-xml-cdata
title: SAX GET XML CDATA
slug: /commands/sax-get-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML CDATA.Syntax-->**SAX GET XML CDATA** ( *document* : Time ; *value* : Text, Blob )<!-- END REF-->
<!--REF #_command_.SAX GET XML CDATA.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594; | 開いたドキュメントの参照 |
| value | Text, Blob | &#8592; | 要素値 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL Release 3|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SAX GET XML CDATA.Summary-->**SAX GET XML CDATA**コマンドを使用して、*document* 引数で参照されるXMLドキュメント中に存在するXML要素のCDATA *value* を取得できます。<!-- END REF-->このコマンドはXML CDATA SAX イベント内で呼び出さなければなりません。SAXイベントに関する詳細は[SAX Get XML node](../commands/sax-get-xml-node)コマンドの説明を参照してください。

32 KBを超えるデータを取得するにはテキスト型の変数を*value*に渡します (データベースはUnicodeモードで実行されていなければなりません)。

**互換性に関する注記:** 4D v12以降、base64でエンコードされたCDATAの内容は**SAX GET XML CDATA**コマンドにより自動でデコードされるようになりました。[BASE64 DECODE](../commands/base64-decode)コマンドを呼び出す必要はありません。

## 例題 

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

## システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

## 参照 

[SAX ADD XML CDATA](../commands/sax-add-xml-cdata)  
[SAX Get XML node](../commands/sax-get-xml-node)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 878 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


