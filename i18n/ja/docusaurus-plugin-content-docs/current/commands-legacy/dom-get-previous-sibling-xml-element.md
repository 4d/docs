---
id: dom-get-previous-sibling-xml-element
title: DOM Get previous sibling XML element
slug: /commands/dom-get-previous-sibling-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get previous sibling XML element.Syntax-->**DOM Get previous sibling XML element** ( *elementRef* {; *siblingElemName* {; *siblingElemValue*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get previous sibling XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| siblingElemName | Text | &#8592; | 兄弟XML要素名 |
| siblingElemValue | Text | &#8592; | 兄弟XML要素値 |
| 戻り値 | Text | &#8592; | 兄弟XML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Get previous sibling XML element.Summary-->DOM Get previous sibling XML element コマンドは参照として渡したXML要素の前の兄弟要素の参照を返します。<!-- END REF--> この参照は他のXML解析コマンドで使用できます。

  
*siblingElemName* と *siblingElemValue* 引数が渡されると、前の兄弟要素の名前と値がそれぞれ返されます。 

このコマンドはXMLの子要素の間をナビゲートするために使用されます。

最初の兄弟要素の前、システム変数は0に設定されます。

#### システム変数およびセット 

コマンドが正しく実行され、解析された要素が参照された要素の最初の子要素でない場合、システム変数OKに1が設定されます。エラーが発生したり、解析された要素が参照された要素の最初の子要素である場合、0が設定されます。

#### 参照 

[DOM Get next sibling XML element](dom-get-next-sibling-xml-element.md)  