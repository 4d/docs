---
id: dom-get-xml-element-name
title: DOM GET XML ELEMENT NAME
slug: /commands/dom-get-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT NAME.Syntax-->**DOM GET XML ELEMENT NAME** ( *elementRef* ; *elementName* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT NAME.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| elementName | Variable | &#8592; | 要素の名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM GET XML ELEMENT NAME.Summary-->DOM GET XML ELEMENT NAME コマンドは、*elementRef* で指定したXML要素の名前を*elementName* 引数に返します。<!-- END REF-->引数の型が定義されてない場合、デフォルトでテキスト型が使用されます。

XML要素名に関する詳細は*XML DOMコマンドの概要* の節を参照してください。

#### 例題 

このメソッドは$xml\_Element\_Ref要素の名前を返します:

```4d
 var $xml_Element_Ref : Text
 var $name : Text
 
 DOM GET XML ELEMENT NAME($xml_Element_Ref;$name)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM Get XML element](dom-get-xml-element.md)  
[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[DOM SET XML ELEMENT NAME](dom-set-xml-element-name.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 730 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


