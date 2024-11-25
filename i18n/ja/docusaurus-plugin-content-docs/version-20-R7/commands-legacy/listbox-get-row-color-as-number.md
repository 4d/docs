---
id: listbox-get-row-color-as-number
title: LISTBOX Get row color as number
slug: /commands/listbox-get-row-color-as-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color as number.Syntax-->**LISTBOX Get row color as number** ( {* ;} *object* ; *row* {; *colorType*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color as number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:objectはオブジェクト名(文字列)省略時:objectは変数 |
| object | any | &#8594;  | オブジェクト名(*指定時)、または変数(*省略時) |
| row | Integer | &#8594;  | 列番号 |
| colorType | Integer | &#8594;  | Listbox font color (デフォルト値) または Listbox background color |
| 戻り値 | Integer | &#8592; | カラーの値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX Get row color as number.Summary-->**注:** このコマンドは配列型のリストボックスに対してのみ有効です。<!-- END REF-->

**LISTBOX Get row color as number**コマンドは、 *object* と *\** によって指定されたリストボックス内の、行またはセルの色を、0x00rrggbb フォーマットの数値で返します。

**注:** カラーをCSS 文字列で取得したい場合、[LISTBOX Get row color](listbox-get-row-color.md) コマンドを使用する必要があります。カラーフォーマットについての詳細な情報については、[OBJECT SET RGB COLORS](object-set-rgb-colors.md) コマンドの詳細を参照してください。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で変数を指定します。  
対象がリストボックスなのか列なのかを、 object 引数で指定します。

* *object* がリストボックス全体を指定している場合、コマンドは指定された行の色を返します。
* *object* がリストボックス内の列を指定している場合、コマンドは単一のセルの色を返します。

*row* 引数にはカラーを取得したい行を番号で指定します。

****注:** このコマンドは行の表示/非表示の状態は無視します。

*colorType* 引数には、行の背景色を取得したいのかフォントカラーを取得したいのかによって、 lk background color または lk font color の定数のどちらかを渡します。省略時は、フォントカラーが返されます。

**Warning:** 行に割り当てられたカラーであっても、それが全てのセルに配色されるとは限りません(以下の例を参照のこと)。リストボックスまたはリストボックス列に対して矛盾する値がプロパティを使用して設定された場合、4D内部の優先順位が適用されます。詳細な情報に関しては *Design Reference* マニュアルを参照して下さい。

#### 例題 

以下に与えられたリストボックスについて考えます。

![](../assets/en/commands/pict1205393.fr.png)

```4d
 vColor:=LISTBOX Get row color(*;"Col5";3)
 vColor2:=LISTBOX Get row color(*;"List Box";3)
 vColor3:=LISTBOX Get row color(*;"List Box";lk background color)
  // vColor contains 0xFFFF00 (yellow)
  // vColor2 contains 0x00FF (blue)
  // vColor3 contains 0x00FF0000 (red)
```

#### 参照 

*List Box*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  