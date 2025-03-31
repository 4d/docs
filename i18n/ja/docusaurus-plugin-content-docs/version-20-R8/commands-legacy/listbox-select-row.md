---
id: listbox-select-row
title: LISTBOX SELECT ROW
slug: /commands/listbox-select-row
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROW.Syntax-->**LISTBOX SELECT ROW** ( {* ;} *object* ; *rowPosition* {; *action*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| rowPosition | Integer | &#8594;  | 選択する行番号 |
| action | Integer | &#8594;  | 選択アクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SELECT ROW.Summary-->**LISTBOX SELECT ROW** コマンドは、 *object* 引数および *\** で指定されたリストボックス内において、*position* に渡した番号の行を選択します。<!-- END REF--> 

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object* 引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

オプション引数*action* を指定すると、行の選択がリストボックス内に既に存在している場合に実行する選択アクションを指定できます。この引数には値または次の定数のいずれかを渡すことができます（*List Box* テーマ）:

| 定数                       | 型    | 値 | コメント                                                                                                   |
| ------------------------ | ---- | - | ------------------------------------------------------------------------------------------------------ |
| lk add to selection      | 倍長整数 | 1 | 選択された行は既存の選択行に追加されます。指定した行が既存の選択に属している場合、コマンドは何も行いません。                                                 |
| lk remove from selection | 倍長整数 | 2 | 指定された行は既存の選択行から取り除かれます。指定した行が既存の選択に属さない場合、コマンドは何も行いません。                                                |
| lk replace selection     | 倍長整数 | 0 | 選択された行が新しい選択行となり、既存のものと置き換えられます。このコマンドは、ユーザが行をクリックした場合と同じ結果になります。これは (*action* 引数が省略された時の) デフォルトの動作です。 |

*position* 引数が既存の行番号と一致しない時、コマンドは以下のように動作します:

* *position* が０より小さい場合、*action* の値に関係なく、何もしません。
* *position* が０かつ、*action* の値がlk replace selection または省略された場合、リストボックスのすべての行が選択されます。*action* の値がlk remove from selection の場合、リストボックスのすべての行の選択が解除されます。
* *position* がリストボックスに含まれるすべての行数より大きい場合 (配列タイプのリストボックスの場合のみ)、リストボックスと関連づけられているブール配列が自動的にリサイズされ、選択アクションが行われます。このメカニズムは、**LISTBOX SELECT ROW** を、リストボックスで即座の同期を起こさない"標準"の配列管理コマンド ([APPEND TO ARRAY](append-to-array.md) など) とともに使用できることを意味します。

メソッドの実行後、配列は同期されます。リストボックスのソース配列が実際にリサイズされたならば、選択アクションは実行されます。そうでなければリストボックスと関連づけられたブールの配列はその初期のサイズに戻り、コマンドは何もしません。

**Notes:**

* 選択した列をリストボックスに表示するために、自動でスクロールしたい場合、[OBJECT SET SCROLL POSITION](object-set-scroll-position.md) コマンドを使います。
* 列を編集モードに切り換えるには、[EDIT ITEM](edit-item.md)コマンドを使います。
* *position* に渡された数値が、リストボックス中で非表示の行に該当する場合、行は選択されますが表示されません。
* リストボックスに対して**セレクションハイライトを非表示にする**オプションをチェックしていた場合、利用可能なインターフェースオプションを使用してリストボックスセレクションを可視化していおく必要があります。これのやり方についての詳細な情報については、*選択行の見た目をカスタマイズ* を参照してください。

#### 参照 

[EDIT ITEM](edit-item.md)  
[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  
[LISTBOX SELECT ROWS](listbox-select-rows.md)  
[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 912 |
| スレッドセーフである | &cross; |


