---
id: listbox-get-row-font-style
title: LISTBOX Get row font style
slug: /commands/listbox-get-row-font-style
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row font style.Syntax-->**LISTBOX Get row font style** ( {* ;} *object* ; *row* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row font style.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:objectはオブジェクト名(文字列)省略時:objectは変数 |
| object | any | &#8594;  | オブジェクト名(*指定時)、または変数(*省略時) |
| row | Integer | &#8594;  | 列番号 |
| 戻り値 | Integer | &#8592; | スタイルの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get row font style.Summary-->**注:** このコマンドは配列型のリストボックスに対してのみ有効です。<!-- END REF-->

**LISTBOX Get row font style**コマンドは、 *object* と *\** によって指定されたリストボックス内の、行またはセルのフォントスタイルを返します。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で変数を指定します。  
対象がリストボックスなのか列なのかを、 object 引数で指定します。

* *object* がリストボックス全体を指定している場合、コマンドは指定された行のスタイルを返します。
* *object* がリストボックス内の列を指定している場合、コマンドは単一のセルのスタイルを返します。
*row* 引数にはスタイルを取得したい行を番号で指定します。  

****注:** このコマンドは行の表示/非表示の状態は無視します。

**Warning:** 行に割り当てられたスタイルであっても、それが全てのセルに適用されるとは限りません(以下の例を参照のこと)。リストボックスまたはリストボックス列に対して矛盾する値がプロパティを使用して設定された場合、4D内部の優先順位が適用されます。詳細な情報に関しては *Design Reference* マニュアルを参照して下さい。

#### 例題 

以下に与えられたリストボックスについて考えます。 

![](../assets/en/commands/pict1205514.fr.png)

```4d
 vStyle:=LISTBOX Get row font style(*;"Col5";3)
 vStyle2:=LISTBOX Get row font style(*;"List Box";3)
  // vStyle contains 1 (Bold)
  // vStyle2 contains 6 (Italic + Underline)
```

#### 参照 

[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1269 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


