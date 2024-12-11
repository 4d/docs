---
id: dom-count-xml-elements
title: DOM Count XML elements
slug: /commands/dom-count-xml-elements
displayed_sidebar: docs
---

<!--REF #_command_.DOM Count XML elements.Syntax-->**DOM Count XML elements** ( *elementRef* ; *elementName* ) : Integer<!-- END REF-->
<!--REF #_command_.DOM Count XML elements.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| elementName | Text | &#8594;  | 数えるXML要素名 |
| 戻り値 | Integer | &#8592; | 要素数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Count XML elements.Summary-->DOM Count XML elements コマンドは*elementRef* で参照されるXML要素中、要素名が*elementName*である子要素の数を返します。<!-- END REF-->デフォルトでは、**DOM Count XML elements** は*elementName* 引数については大文字と小文字を区別します(xml準拠のため)。コマンドの大文字と小文字の区別については、[XML SET OPTIONS](xml-set-options.md) コマンドのXML DOM case sensitivity セレクターを使用することで管理可能です。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM Get XML element](dom-get-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 726 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


