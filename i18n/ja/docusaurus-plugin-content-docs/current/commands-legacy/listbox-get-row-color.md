---
id: listbox-get-row-color
title: LISTBOX Get row color
slug: /commands/listbox-get-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color.Syntax-->**LISTBOX Get row color** ( {* ;} *object* ; *row* {; *colorType*} )  : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、オブジェクトをオブジェクト名(文字列)で指定。省略時、オブジェクトを変数で指定 |
| object | any | &#8594;  | オブジェクト名(* 指定時)変数(* 省略時) |
| row | Integer | &#8594;  | 行番号 |
| colorType | Integer | &#8594;  | リストボックスのフォントカラー(デフォルト)またはリストボックスの背景色 |
| 戻り値 | Text | &#8592; | カラー値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get row color.Summary-->**注:** このコマンドは配列型リストボックスに対してのみ利用できます。<!-- END REF-->

**LISTBOX Get row color** コマンドは*object* 引数および *\** 引数で指定されたリストボックス内の行またはセルのカラーを、CSS 文字列で返します。

**注:** カラーを4-バイト倍長整数フォーマットで取得したい場合、[OBJECT SET RGB COLORS](object-set-rgb-colors.md) コマンドを使用する必要があります。カラーのフォーマットについての詳細な情報については、[OBJECT SET RGB COLORS](object-set-rgb-colors.md) コマンドの詳細を参照してください。

任意の *\** 引数を指定した場合、*object* 引数がオブジェクト名(文字列)であることを意味します。この引数を省略した場合、*object* 引数が変数であることを意味します。この場合、文字列ではなくて変数の参照を渡します。*object* 引数を使用して、リストボックスまたはリストボックスカラムを指定することができます:

* *object* 引数がリストボックスを指定している場合、コマンドは行のカラーを返します。
* *object* 引数がリストボックスカラムを指定している場合、コマンドはセルのカラーを返します。

*row* 引数には、カラーを取得したい行の番号を渡します。

**注:** コマンドはリストボックス行の表示/非表示の状態は一切考慮しません。

*colorType* 引数には、lk background color または lk font color 定数("*List Box*" テーマ)を渡すことで、行の背景色を取得したいか文字色を取得したいかを指定することができます。

**警告:** 行に対して適用されているカラーは、必ずしも行内の全てのセルに表示されているとは限りません(例題参照)。リストボックスとリストボックスカラムのプロパティで異なるカラー値が設定されていた場合、優先順位が適用されます。詳細な情報については、*デザインリファレンス* マニュアルを参照してください。

#### 例題 

以下のリストボックスについてカラーを取得する場合を考えます:

![](../assets/en/commands/pict1205393.fr.png)

```4d
 var $vtColor;$vtColor2;$vtColor3 : Text
 $vtColor:=LISTBOX Get row color(*;"Col5";3)
 $vtColor2:=LISTBOX Get row color(*;"List Box";3)
 $vtColor3:=LISTBOX Get row color(*;"List Box";3;lk background color)
  // $vtColor には "#FFFF00" (yellow)
  // $vtColor2 には "#0000FF" (blue)
  // $vtColor3 には "#FF0000" (red)がそれぞれ格納されます
```

#### 参照 

[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1658 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


