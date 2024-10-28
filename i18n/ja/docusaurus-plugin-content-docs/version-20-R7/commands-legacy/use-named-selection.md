---
id: use-named-selection
title: USE NAMED SELECTION
slug: /commands/use-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.USE NAMED SELECTION.Syntax-->**USE NAMED SELECTION** ( *name* )<!-- END REF-->
<!--REF #_command_.USE NAMED SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| name | Text | &#8594;  | 使用する命名セレクション名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.USE NAMED SELECTION.Summary-->USE NAMED SELECTION は、命名セレクション*name*が属するテーブルのカレントセレクションを命名セレクションを使用して置き換えます。<!-- END REF-->

命名セレクションを作成すると、その命名セレクションはカレントレコードを記憶します。USE NAMED SELECTIONコマンドはこのレコードの位置を取り出し、そのレコードを新しいカレントレコードにします。このコマンドはカレントレコードをロードします。*name*を作成した後にカレントレコードが更新された場合、変更情報を失わないためにUSE NAMED SELECTIONコマンドを実行する前にそのレコードを保存してください。

* [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION")コマンドを使用して命名セレクション*name*を作成した場合、*name*はそれが属するテーブルのカレントセレクションにコピーされます。*name*は消去されるまでメモリに残ります。この命名セレクションを消去して*name*はが使用しているメモリを解放するには、[CLEAR NAMED SELECTION](clear-named-selection.md "CLEAR NAMED SELECTION")コマンドを用います。
* [CUT NAMED SELECTION](cut-named-selection.md "CUT NAMED SELECTION")コマンドを使用して*name*を作成した場合は、カレントセレクションが*name*に設定され、*name*はメモリから消去されます。

命名セレクションは、それが作成された時点でのレコードのセレクションを表わす点に注意してください。命名セレクションが表わしているレコードが変更されると、命名セレクションは正確ではなくなります。したがって、命名セレクションはあまり変更されないレコードの集まりを表わします。命名セレクションが無効になる原因はいくつかあります。例えば、命名セレクションのレコードの変更、削除、および命名セレクションを決定する条件の変更等があります。

#### 参照 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  