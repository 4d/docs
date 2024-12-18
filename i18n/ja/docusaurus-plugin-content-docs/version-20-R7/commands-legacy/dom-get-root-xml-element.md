---
id: dom-get-root-xml-element
title: DOM Get Root XML element
slug: /commands/dom-get-root-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get Root XML element.Syntax-->**DOM Get Root XML element** ( *elementRef* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Get Root XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| 戻り値 | Text | &#8592; | ルート要素参照 またはエラーの場合 "" |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Get Root XML element.Summary-->DOM Get Root XML element コマンドは*elementRef* 引数に渡したXML要素が属するXMLドキュメントのルート要素参照を返します。<!-- END REF-->この参照は他のXML解析コマンドで使用できます。

#### 参照 

[DOM Get parent XML element](dom-get-parent-xml-element.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1053 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |


