---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *list* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | ListRef | &#x1F852; | コピーするリストの参照 |
| 戻り値 | ListRef | &#x1F850; | 複製されたリストのリスト参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Copy list.Summary-->Copy list コマンドは*list*に渡されたリスト参照番号を持つリストの複製を作成し、新しいリストのリスト参照番号を返します。<!-- END REF-->

このリストの使用を終えたら、[CLEAR LIST](clear-list.md "CLEAR LIST")を呼び出してリストを削除します。

#### 参照 

[CLEAR LIST](clear-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  