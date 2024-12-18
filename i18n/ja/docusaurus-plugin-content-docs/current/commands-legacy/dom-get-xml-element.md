---
id: dom-get-xml-element
title: DOM Get XML element
slug: /commands/dom-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML element.Syntax-->**DOM Get XML element** ( *elementRef* ; *elementName* ; *index* ; *elementValue* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| elementName | Text | &#8594;  | 取得する要素の名前 |
| index | Integer | &#8594;  | 取得する要素のインデックス番号 |
| elementValue | Variable | &#8592; | 要素値 |
| 戻り値 | Text | &#8592; | XML参照 (16 文字) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Get XML element.Summary-->DOM Get XML element コマンドは、*elementName* と *index* 引数に基づき、子要素の参照を返します。<!-- END REF--> 

要素の値が*elementValue* 引数に返されます。

**注:** デフォルトでは、**DOM Get XML element** は*elementName* 引数については大文字と小文字を区別します(xml準拠のため)。コマンドの大文字と小文字の区別については、[XML SET OPTIONS](xml-set-options.md) コマンドのXML DOM case sensitivity セレクターを使用することで管理可能です。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 725 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |


