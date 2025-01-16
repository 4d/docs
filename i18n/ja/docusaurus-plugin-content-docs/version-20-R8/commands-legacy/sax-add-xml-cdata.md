---
id: sax-add-xml-cdata
title: SAX ADD XML CDATA
slug: /commands/sax-add-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML CDATA.Syntax-->**SAX ADD XML CDATA** ( *document* ; *data* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML CDATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開かれたドキュメントへの参照 |
| data | Blob, Text | &#8594;  | ドキュメントのCDATAタグの間に挿入する テキストまたはBLOB |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX ADD XML CDATA.Summary-->SAX ADD XML CDATA コマンドは、*document*で参照されるXMLドキュメントにテキストまたはBLOBの*data*を追加します。<!-- END REF-->この*data*は自動で*<!\[CDATA\[* と *\]\]>*の間におかれます。   
CDATAセクションに含まれるテキストはXMLインタプリタにより無視されます。 

*data*の内容をエンコードしたい場合、[BASE64 ENCODE](base64-encode.md)コマンドを使用しなければなりません。この場合、もちろん*data*にはBLOBを渡します。

このコマンドが正しく動作するためには、要素が開かれていなくてはなりません。そうでなければエラーが生成されます。 

#### 例題 

XMLドキュメントに以下の行を挿入したいとします:

```XML
function matchwo(a,b)
{
if (a < b && a < 0) then
      {
      return 1
      }
else
      {
      return 0
      }
}
```

これを行うには、以下のコードを実行します:

```4d
 var vtMytext : Text
 ... // place the text in the vtMytext variable here
 SAX ADD XML CDATA($DocRef;vtMytext)
```

結果は以下のようになります:

```XML
<![CDATA[
function matchwo(a,b)
{
if (a < b && a < 0) then
   {
   return 1
   }
else
   {
   return 0
   }
}
]]>
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[SAX GET XML CDATA](sax-get-xml-cdata.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 856 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


