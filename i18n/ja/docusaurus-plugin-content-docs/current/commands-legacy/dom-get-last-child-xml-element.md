---
id: dom-get-last-child-xml-element
title: DOM Get last child XML element
slug: /commands/dom-get-last-child-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get last child XML element.Syntax-->**DOM Get last child XML element** ( *elementRef* {; *childElemName* {; *childElemValue*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get last child XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| childElemName | Text | &#8592; | 子要素名 |
| childElemValue | Text | &#8592; | 子要素値 |
| 戻り値 | Text | &#8592; | XML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Get last child XML element.Summary-->DOM Get last child XML element コマンドは*elementRef*に渡した要素の最後の子要素への参照を返します。<!-- END REF-->この参照は他のXML解析コマンドで使用できます。

*childElemName* と *childElemValue* 引数が渡されると、子要素の名前と値がそれぞれ返されます。

#### 例題 

ルートの最後の子要素の参照を取得します。XML構造 (C:\\\\import.xml) はまずBLOBにロードされます: 

```4d
 var myBlobVar : Blob
 var $ref_XML_Parent;$ref_XML_Child : Text
 var $childName;$childValue : Text
 
 DOCUMENT TO BLOB("c:\\import.xml";myBlobVar)
 $ref_XML_Parent:=DOM Parse XML variable(myBlobVar)
 $ref_XML_Child:=DOM Get last child XML element($ref_XML_Parent;$childName;$childValue)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 925 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


