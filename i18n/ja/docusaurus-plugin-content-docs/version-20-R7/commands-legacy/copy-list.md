---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *list* ) : Integer<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | コピーするリストの参照 |
| 戻り値 | Integer | &#8592; | 複製されたリストのリスト参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Copy list.Summary-->Copy list コマンドは*list*に渡されたリスト参照番号を持つリストの複製を作成し、新しいリストのリスト参照番号を返します。<!-- END REF-->

このリストの使用を終えたら、[CLEAR LIST](clear-list.md "CLEAR LIST")を呼び出してリストを削除します。

#### 参照 

[CLEAR LIST](clear-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 626 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


