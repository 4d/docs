---
id: listbox-set-row-color
title: LISTBOX SET ROW COLOR
slug: /commands/listbox-set-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW COLOR.Syntax-->**LISTBOX SET ROW COLOR** ( {* ;} *object* ; *row* ; *color* {; *colorType*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW COLOR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:objectはオブジェクト名(文字列)省略時:objectは変数 |
| object | any | &#8594;  | オブジェクト名(*指定時)、または変数(*省略時) |
| row | Integer | &#8594;  | 列番号 |
| color | Text, Integer | &#8594;  | RGBカラー |
| colorType | Integer | &#8594;  | Listbox font color(デフォルトの値) またはListbox background color |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX SET ROW COLOR.Summary-->**注:** このコマンドは配列型のリストボックスに対してのみ有効です。<!-- END REF-->

**LISTBOX SET ROW COLOR**コマンドは、 *object* と *\** によって指定された配列リストボックスの中の、行またはセルの色を指定します。

任意の *\** 演算子を渡した場合、*object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で列変数を指定します。

対象がリストボックスなのか列なのかを、 *object* 引数で指定します。

* *object* がリストボックスを指定するとき、コマンドはその中で指定した行全体に反映されます。
* *object* がリストボックスの列を指定するとき、コマンドはその列内の、指定された行にある単一のセルに対して反映されます。

*row* 引数には、新しい色を反映させたい列を指定する番号を渡します。

**注:** このコマンドは列の表示/非表示の状態は無視します。

*color* 引数には、指定したい色をRGBカラー値で渡します。RGBカラーについての詳細は、 [OBJECT SET RGB COLORS](object-set-rgb-colors.md) コマンドの詳細を参照して下さい。一つ上の行の配色をそのまま使用したい場合には、*color* 引数 に lk inherited 定数を渡します。

*colorType* 引数には、行の背景色を指定したいのかフォントカラーを指定したのかによって、 lk background color または lk font color のどちらかの定数を渡します。省略時には、指定した色はフォントカラーとして使用されます。

このコマンドは、列またはリストボックスに対して定義されていた可能性のあるカラー配列内の値を変更します。この配列が未定義だった場合、このコマンドは、 [LISTBOX Get array](listbox-get-array.md) コマンドを使用してアクセス可能な配列を動的に作成します。

他のリストボックスプロパティ(全体のプロパティ、列のカラー配列など)によって、このコマンドと異なる色が指定された場合、4D内の優先順位に応じて処理されます。この優先順位の詳細に関しては、 *Design Reference* を参照して下さい。a

#### 例題 

配列型のリストボックス内において、行全体と、行内の単一のセルの色を指定したい場合:

```4d
  // 単一のセルのフォントカラー(黄色)の定義
 LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")
 
  // 3行目の背景色とフォントカラーの定義
  // 背景色は赤、フォントカラーは青
 LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)
 LISTBOX SET ROW COLOR(*;"ListBox";3;"blue")
```

![](../assets/en/commands/pict1205393.fr.png)

#### 参照 

*List Box*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX Get row color as number](listbox-get-row-color-as-number.md)  
[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  