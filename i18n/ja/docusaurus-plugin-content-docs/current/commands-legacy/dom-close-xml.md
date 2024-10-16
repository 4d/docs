---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *elementRef* )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XMLルート要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM CLOSE XML.Summary-->DOM CLOSE XML コマンドは*elementRef*で指定されたXMLオブジェクトにより使用されているメモリを開放します。<!-- END REF--> 

*elementRef*がXMLルートオブジェクトでない場合、エラーが生成されます。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM Parse XML source](dom-parse-xml-source.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  