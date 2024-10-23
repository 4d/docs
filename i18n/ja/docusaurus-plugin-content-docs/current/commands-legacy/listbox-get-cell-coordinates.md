---
id: listbox-get-cell-coordinates
title: LISTBOX GET CELL COORDINATES
slug: /commands/listbox-get-cell-coordinates
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL COORDINATES.Syntax-->**LISTBOX GET CELL COORDINATES** ( {* ;} *object* ; *column* ; *row* ; *left* ; *top* ; *right* ; *bottom* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL COORDINATES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| column | Integer | &#8594;  | カラム番号 |
| row | Integer | &#8594;  | 行番号 |
| left | Integer | &#8592; | オブジェクトの左座標 |
| top | Integer | &#8592; | オブジェクトの上の座標 |
| right | Integer | &#8592; | オブジェクトの右座標 |
| bottom | Integer | &#8592; | オブジェクトの左座標 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX GET CELL COORDINATES.Summary-->LISTBOX GET CELL COORDINATES コマンドは引数 *\** および*object*によって指定されたリストボックス内の、*column* と *row* 引数で指定したセルの*left*、*top*、*right* および *bottom*にそれぞれ左端、上端、右端、下端の座標を(ポイント単位で)返します。<!-- END REF-->

任意の *\** 引数を指定した場合、*object*はオブジェクト名です(文字列)。任意の *\** 引数を省略すると、*object* はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照(フィールドまたは変数のみ)を指定します。

*OBJECT GET COORDINATES* コマンドとの統一性のため、原点はセルを含むフォームの左上端になります。また返される座標は理論値となります。この値は、クリッピングが起こるまではスクロールを考慮に入れます。結果として、そのセルは表示されていない(または一部しか表示されていない)こともあり、座標の位置はフォームの範囲を超えている(負の数値が返される)こともあります。セルが表示されているか(また、表示されているならどの部分が表示されているか)を調べるためには、返された座標と、リストボックスの座標を比較する必要があります。その際、以下の点に注意する必要があります:

* 全てのセルは、親のリストボックスの座標(リストボックスに対しての*OBJECT GET COORDINATES* の値)に沿ってクリップされています。
* ヘッダー・フッターのサブオブジェクトは、列のコンテンツの上に表示されています。セルの座標がヘッダーやフッターの線と交差する場合には、その部分のセルは表示されません。
* ロックされた列の要素は、スクロール可能な列の要素の上に表示されます。スクロール可能な列の要素がロックされた列の要素と交差するとき、スクロール可能な列の要素は表示されません。

より詳細な情報に関しては、*OBJECT GET COORDINATES* コマンドの詳細を参照して下さい。

#### 例題 

リストボックス内の選択されたセルの周りに赤い長方形を描画する場合を考えます:

```4d
 OBJECT SET VISIBLE(*;"rectangleInfo";False) //赤い長方形を初期化
  //長方形はフォーム内のどこかに既に定義済み
 LISTBOX GET CELL POSITION(*;"LB1";$col;$row)
 LISTBOX GET CELL COORDINATES(*;"LB1";$col;$row;$x1;$y1;$x2;$y2)
 OBJECT SET VISIBLE(*;"RedRect";True)
 OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
```

![](../assets/en/commands/pict1741070.en.png)

#### 参照 

[LISTBOX GET CELL POSITION](listbox-get-cell-position.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  