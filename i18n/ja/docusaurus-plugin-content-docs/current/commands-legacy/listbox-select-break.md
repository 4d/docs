---
id: listbox-select-break
title: LISTBOX SELECT BREAK
slug: /commands/listbox-select-break
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT BREAK.Syntax-->**LISTBOX SELECT BREAK** ( {* ;} *object* ; *row* ; *column* {; *action*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT BREAK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、objectはオブジェクト名 (文字列)<br/>省略時、objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| row | Integer | &#8594;  | ブレーク行の番号 |
| column | Integer | &#8594;  | ブレーク列の番号 |
| action | Integer | &#8594;  | 選択アクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SELECT BREAK.Summary-->**LISTBOX SELECT BREAK** を使用して *object*と*\**で指定したリストボックス中でブレーク行を選択できます。<!-- END REF-->リストボックスは階層モードで表示されていなければなりません。

オプションの*\** 引数を渡した場合、*object*引数はオブジェクト名 (文字列) です。この引数を渡さない場合*object*は変数です。この場合、文字列ではなく変数参照を渡します。

ブレーク行は階層を表現するために追加されますが、それは配列の既存の行には対応しません。選択するためにブレーク行を指定するには、*row*および*column*引数に、対応する配列中の最初のオカレンスに対応する行と列の番号を渡さなければなりません。これらの値はユーザがブレーク行を選択したとき、[LISTBOX GET CELL POSITION](listbox-get-cell-position.md) コマンドから返されます。この原則は*階層リストボックス*の"選択や位置の管理" で説明されています。

*action*引数が渡されると、ブレーク行が既にリストボックス中に存在するときの実行する選択アクションを設定できます。値または"*List Box*"テーマの以下の定数を渡すことができます:

| 定数                       | 型    | 値 | コメント                                                                                                   |
| ------------------------ | ---- | - | ------------------------------------------------------------------------------------------------------ |
| lk add to selection      | 倍長整数 | 1 | 選択された行は既存の選択行に追加されます。指定した行が既存の選択に属している場合、コマンドは何も行いません。                                                 |
| lk remove from selection | 倍長整数 | 2 | 指定された行は既存の選択行から取り除かれます。指定した行が既存の選択に属さない場合、コマンドは何も行いません。                                                |
| lk replace selection     | 倍長整数 | 0 | 選択された行が新しい選択行となり、既存のものと置き換えられます。このコマンドは、ユーザが行をクリックした場合と同じ結果になります。これは (*action* 引数が省略された時の) デフォルトの動作です。 |

**注:** リストボックスのセレクションハイライトを非表示オプションをチェックしていた場合:

* 利用可能なオプションを仕様してリストボックスセレクションを可視状態にする必要があります。このやり方の詳細な情報については、*選択行の見た目をカスタマイズ*を参照してください。
* この場合には、階層リストボックスのブレーク行をハイライトすることはできません(*階層リストボックスの制限*参照)。

#### 例題 

リストボックスに表示されている以下の配列があります:

![](../assets/en/commands/pict185052.en.png)

"Normandy"ブレーク行を選択します:

```4d
 $row:=Find in array(T2;"Normandy")
 $column:=2
 LISTBOX COLLAPSE(*;"MyListbox") // 全レベルを折りたたむ
 LISTBOX SELECT BREAK(*;"MyListbox";$row;$column)
```

以下のような結果になります:

![](../assets/en/commands/pict185059.en.png)

#### 参照 

[LISTBOX GET CELL POSITION](listbox-get-cell-position.md)  
[LISTBOX SELECT ROW](listbox-select-row.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1117 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


