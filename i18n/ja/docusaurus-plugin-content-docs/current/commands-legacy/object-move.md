---
id: object-move
title: OBJECT MOVE
slug: /commands/object-move
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT MOVE.Syntax-->**OBJECT MOVE** ( {* ;} *object* ; *moveH* ; *moveV* {; *resizeH* {; *resizeV* {; *}}} )<!-- END REF-->
<!--REF #_command_.OBJECT MOVE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| moveH | Integer | &#8594;  | オブジェクトの水平移動量 (>0 = 右方向, <0 =左方向) |
| moveV | Integer | &#8594;  | オブジェクトの垂直移動量 (>0 = 下方向, <0 = 上方向) |
| resizeH | Integer | &#8594;  | オブジェクトの水平方向へのサイズ変更値 |
| resizeV | Integer | &#8594;  | オブジェクトの垂直方向へのサイズ変更値 |
| * | 演算子 | &#8594;  | 指定時 = 絶対座標 省略時 = 相対座標 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT MOVE.Summary-->OBJECT MOVEコマンドは、 *\** と*object*引数で指定されたカレントフォーム内のオブジェクトを、水平方向に*moveH*ピクセル、垂直方向に*moveV*ピクセル移動させます。<!-- END REF-->  
またオプションで、オブジェクトを水平方向に*resizeH*ピクセル、垂直方向に*resizeV*ピクセル、サイズの変更をすることもできます。

移動とサイズ変更の方向は、水平移動および垂直移動引数に渡された値に依ります:

* 値が正であれば、オブジェクトは右および下へそれぞれ移動され、サイズ変更されます。
* 値が負であれば、オブジェクトは左および上へそれぞれ移動され、サイズ変更されます。

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

*object*にオブジェクト名としてワイルドカード文字 (“@”) を使用し、複数のオブジェクトを指定すると、関連する全オブジェクトを移動またはサイズ変更することができます。

**Note:** バージョン6.5からは、文字列に含まれるワイルドカード文字 (“@”) の取り扱いを設定することができます。このオプションは"オブジェクトプロパティ"コマンドに影響を与えます。詳細は4D Design Referenceを参照してください。

デフォルトでは*moveH*、*moveV*、*resizeH*、*resizeV*の値は、オブジェクトの以前の位置からの相対的な座標を変更します。引数が絶対位置を表わすようにしたい場合は、最後のオプションの引数 *\** *を渡します。*  
  
このコマンドは以下のコンテキストで動作します:

* 入力フォームのデータ入力
* [DIALOG](../commands/dialog.md "DIALOG")コマンドを使用して表示されたフォーム
* [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION")や[DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION")コマンドで表示される出力フォームのヘッダとフッタ
* フォーム印刷イベント

#### 例題 1 

下記のコードは、"button\_1"を右に10ピクセル、上に20ピクセル移動させ、幅を30ピクセル、高さを40ピクセルサイズ変更します: 

```4d
 OBJECT MOVE(*;"button_1";10;-20;30;40)
```

#### 例題 2 

下記のコード=は、"button\_1"を座標(10;20)(30;40)に移動します:   
  
```4d
 OBJECT MOVE(*;"button_1";10;20;30;40;*)
```

#### 参照 

[OBJECT DUPLICATE](object-duplicate.md)  
[OBJECT GET COORDINATES](object-get-coordinates.md)  
[OBJECT SET COORDINATES](object-set-coordinates.md)  