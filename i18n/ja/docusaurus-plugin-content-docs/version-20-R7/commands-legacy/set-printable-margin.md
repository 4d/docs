---
id: set-printable-margin
title: SET PRINTABLE MARGIN
slug: /commands/set-printable-margin
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINTABLE MARGIN.Syntax-->**SET PRINTABLE MARGIN** ( *left* ; *top* ; *right* ; *bottom* )<!-- END REF-->
<!--REF #_command_.SET PRINTABLE MARGIN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| left | Integer | &#8594;  | 左マージン |
| top | Integer | &#8594;  | 上マージン |
| right | Integer | &#8594;  | 右マージン |
| bottom | Integer | &#8594;  | 下マージン |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SET PRINTABLE MARGIN.Summary-->SET PRINTABLE MARGIN コマンドを使用すると、[Print form](print-form.md)、[PRINT SELECTION](print-selection.md)または [PRINT RECORD](print-record.md) コマンドの使用時に、各種印刷マージンの値を設定することができます。<!-- END REF-->

引数*left*, *top*, *right*, *bottom*には、以下の値のいずれかを渡すことができます:

* 0 = 用紙マージンを使用
* \-1 = プリンタのマージンを使用
* 値 > 0 = ピクセル単位のマージン (72dpiの1ピクセルは約0.4 mm)

*right*と*bottom*引数の値はそれぞれ、用紙の右および下の端に関連します。

**Note:** 印刷管理ならびに4D用語に関する詳細は、[GET PRINTABLE MARGIN](get-printable-margin.md "GET PRINTABLE MARGIN")コマンドの説明を参照してください。

デフォルトで、4Dはプリンタマージンに基づいて印刷を行います。SET PRINTABLE MARGINコマンドの実行後は、変更後のパラメータがセッション全体の同一プロセス内で維持されます。

#### 例題 1 

次の例題により、デッドマージンのサイズを取得することができます:

```4d
 SET PRINTABLE MARGIN(-1;-1;-1;-1) //Sets the printer margin
 GET PRINTABLE MARGIN($l;$t;$r;$b)
  //$l, $t, $r and $b correspond to the dead margins of the sheet
```

#### 例題 2 

次の例題により、用紙サイズを取得することができます:

```4d
 SET PRINTABLE MARGIN(0;0;0;0) //Sets the paper margin
 GET PRINTABLE AREA($height;$width)
  //For size A4: $height=842 ; $width=595 pixels
```

#### 参照 

[GET PRINTABLE MARGIN](get-printable-margin.md)  
[Get printed height](get-printed-height.md)  
[Print form](print-form.md)  