---
id: dom-get-parent-xml-element
title: DOM Get parent XML element
slug: /commands/dom-get-parent-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get parent XML element.Syntax-->**DOM Get parent XML element** ( *elementRef* {; *parentElemName* {; *parentElemValue*}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get parent XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| parentElemName | Text | &#8592; | 親XML要素名 |
| parentElemValue | Text | &#8592; | 親XML要素値 |
| 戻り値 | Text | &#8592; | 親XML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Get parent XML element.Summary-->**DOM Get parent XML element**コマンドは、*elementRef*に参照で渡したXML要素の親要素参照を返します。<!-- END REF-->この参照は他のXML解析コマンドで使用できます。

オプションの*parentElemName* と *parentElemValue*引数が渡されると、それぞれ親要素の名前と値を受け取ります。

*elementRef*にルート要素を渡した場合、コマンドは"#document"参照を返します。このdocumentノードはルート要素の親です。  
documentノードにこのコマンドを適用すると、コマンドはヌル参照 ("0000000000000000") を返し、OKシステム変数が0に設定されます。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM Get first child XML element](dom-get-first-child-xml-element.md)  
[DOM Get last child XML element](dom-get-last-child-xml-element.md)  
[DOM Get Root XML element](dom-get-root-xml-element.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 923 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


