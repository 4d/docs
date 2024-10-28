---
id: object-get-best-size
title: OBJECT GET BEST SIZE
slug: /commands/object-get-best-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET BEST SIZE.Syntax-->**OBJECT GET BEST SIZE** ( {* ;} *object* ; *bestWidth* ; *bestHeight* {; *maxWidth*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET BEST SIZE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| bestWidth | Integer | &#8592; | 最適オブジェクト幅 |
| bestHeight | Integer | &#8592; | 最適オブジェクト高さ |
| maxWidth | Integer | &#8594;  | 最大オブジェクト幅 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT GET BEST SIZE.Summary-->**OBJECT GET BEST SIZE** コマンドは、引数 *\** と *object*で指定されたフォームオブジェクトの“最適な”幅と高さを、引数*bestWidth* と *bestHeight*に返します。<!-- END REF-->これらの値はピクセルで表わされます。このコマンドは複雑なレポートの表示や印刷に役立ち、[OBJECT MOVE](object-move.md) コマンドとともに使用します。  
  
オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

返される最適値は、カレントのコンテンツが境界内に完全に収まるための、オブジェクトサイズの最小値です。通常これらの値はテキストを含むオブジェクトに 関してのみ意味を持ちます。この計算にはフォント、フォントサイズ、フォントスタイルおよびオブジェクトのコンテンツが考慮されます。さらに、ハイフンや 改行も考慮されます。3Dボタンの場合、コマンドはボタンにアイコンしか表示されない場合でも動作します。  
指定されたオブジェクトが空の場合、*bestWidth*には0が返されます。

  
返されるサイズは、オブジェクトの周囲に貼り付けられたグラフィックフレームやスクロールバーを計算に入れていません。画面上のオブジェクトの実際のサイズを取得するには、これらの要素の幅を加算する必要があります。 

任意の*maxWidth*引数により、オブジェクトに最大幅を割り当てることができます。オブジェクトの最適な幅がこの値よりも大きい場合、**OBJECT GET BEST SIZE** コマンドは*bestWidth*に*maxWidth*を返し、この結果として最適な高さを大きくします。

このコマンドは、次のオブジェクトを処理することができます。

* スタティックテキストエリア
* 参照として挿入されたテキスト
* 次のタイプのフィールドや変数: 文字、テキスト、実数、整数、倍長整数、日付、時間、ブール（チェックボックスとラジオボタン）
* ボタン
* ディスプレイコンテキストでのリストボックスカラム(表示されている行のみが考慮されます)。

この他のオブジェクトタイプ（グループエリア、タブ、矩形、直線、円/楕円、プラグインエリア等）の場合、**OBJECT GET BEST SIZE** コマンドは現在のオブジェクトサイズ（フォームエディタや[OBJECT MOVE](object-move.md) コマンドで指定）を返します。

#### 例題 

[SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER") コマンド.の例を参照。

#### 参照 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  