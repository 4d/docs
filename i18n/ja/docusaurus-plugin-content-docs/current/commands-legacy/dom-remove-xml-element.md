---
id: dom-remove-xml-element
title: DOM REMOVE XML ELEMENT
slug: /commands/dom-remove-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ELEMENT.Syntax-->**DOM REMOVE XML ELEMENT** ( *elementRef* )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ELEMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM REMOVE XML ELEMENT.Summary-->DOM REMOVE XML ELEMENT コマンドは*elementRef*で指定した要素を取り除きます。<!-- END REF-->

#### システム変数およびセット 

コマンドが正しく実行されると、システム変数OKは1に設定されます。そうでなければ0に設定されエラーが生成されます。  
エラーは要素参照が無効な場合に生成されます。

#### 参照 

[DOM Create XML element](dom-create-xml-element.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 869 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


