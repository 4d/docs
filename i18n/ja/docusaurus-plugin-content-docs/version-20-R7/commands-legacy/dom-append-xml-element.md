---
id: dom-append-xml-element
title: DOM Append XML element
slug: /commands/dom-append-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Append XML element.Syntax-->**DOM Append XML element** ( *targetElementRef* ; *sourceElementRef* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Append XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetElementRef | Text | &#8594;  | XML親要素の参照 |
| sourceElementRef | Text | &#8594;  | 追加するXML要素の参照 |
| 戻り値 | Text | &#8592; | 新しいXML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Append XML element.Summary-->DOM Append XML element コマンドは*targetElementRef* 引数に渡した参照を持つXML要素の子要素を新しいXML要素に追加します。<!-- END REF-->引数には追加する要素の参照を渡します。この要素はDOMツリー上に既に存在するXML要素の参照として渡さなければなりません。これは*targetElementRef* の子要中最後の既存の要素の後に追加されます。

#### 例題 

[DOM Insert XML element](dom-insert-xml-element.md "DOM Insert XML element") コマンドの例題を参照してください。

#### 参照 

[DOM Insert XML element](dom-insert-xml-element.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1082 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


