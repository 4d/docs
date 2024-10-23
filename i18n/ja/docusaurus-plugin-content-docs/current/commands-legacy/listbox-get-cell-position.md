---
id: listbox-get-cell-position
title: LISTBOX GET CELL POSITION
slug: /commands/listbox-get-cell-position
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL POSITION.Syntax-->**LISTBOX GET CELL POSITION** ( {* ;} *object* {; *X* ; *Y* }; *column* ; *row* {; *colVar*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL POSITION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| X | Real | &#8594;  | マウスカーソルの X座標 |
| Y | Real | &#8594;  | マウスカーソルの Y座標 |
| column | Integer | &#8592; | 列番号 |
| row | Integer | &#8592; | 行番号 |
| colVar | Pointer | &#8592; | 列変数へのポインタ |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX GET CELL POSITION.Summary-->**LISTBOX GET CELL POSITION** コマンドは、*object*および *\** で指定されたリストボックスの最後にクリックされた位置に対応する位置、あるいはキーボードアクションで選択されたセルの位置、あるいはマウスの水平・垂直座標を*column* と*row* 引数に返します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名(文字列)であることを示します。この引数を渡さない場合、*object* 引数が変数であることを示します。

*X* および *Y* 引数が渡された場合、このコマンドはマウスの座標に対応する列数と行数を返します。そうでない場合はクリックあるいは選択アクションの列数と行数を返します。このコマンドはリストボックスにデータ入力が許可されていない場合でも、有効な値を返します。

**Notes:** 

* *row* 引数に返される数値は、リストボックス行の表示/非表示状態を考慮に入れません。クリックあるいは*Y* の位置が最後の列より下であった場合には、値0が返されます。
* 余白カラム内のセルがクリックされた場合、あるいは余白カラムの位置が*X* 座標の位置として渡された場合、*column* 引数には"N+1"が返されます。この場合のNは、余白カラムのセルがクリックされた時点、あるいは*X* 座標の位置にカラムがない場合の、既存のカラム数を現します。余白カラムは"カラム自動リサイズ"オプションが選択されている場合には自動的に追加されます。この点についてのより詳細な情報については*リサイズオプションテーマ*の段落を参照して下さい。
* 階層リストボックスにおいては、*column* 引数は階層を表すために併合されているカラムも考慮されます。この点は*選択行とその位置の管理* の段落において説明されています。

オプション引数*colVar*には、列に割り当てられている変数（例えば配列）に対するポインタが返されます。

*X* および *Y* 引数が使用されていない場合、このコマンドは次のいずれかのフォームイベントが発生するリストボックスに対してのみ、使用することができます:

* On Clicked と On Double Clicked
* On Before Keystroke と On After Keystroke
* On After Edit
* On Getting Focus と On Losing Focus
* On Data Change
* On Selection Change
* On Before Data Entry

上記以外のイベントで使用された場合、**LISTBOX GET CELL POSITION**コマンドは*column*と*row*に0を返します。

このコマンドは、マウスクリック、キーボード、(On Getting Focusを生成する)[EDIT ITEM](edit-item.md)コマンドによる選択または選択解除を考慮します。リストボックスの選択行がキーボードの矢印キーで変更された場合、*column*引数には0が返されます。この場合、*colVar*が渡されていれば[Is nil pointer](is-nil-pointer.md)が返されます。

#### 参照 

[LISTBOX GET CELL COORDINATES](listbox-get-cell-coordinates.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  