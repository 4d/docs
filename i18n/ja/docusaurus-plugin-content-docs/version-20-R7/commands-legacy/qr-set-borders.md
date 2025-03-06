---
id: qr-set-borders
title: QR SET BORDERS
slug: /commands/qr-set-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR SET BORDERS.Syntax-->**QR SET BORDERS** ( *area* ; *column* ; *row* ; *border* ; *line* {; *color*} )<!-- END REF-->
<!--REF #_command_.QR SET BORDERS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| column | Integer | &#8594;  | カラム番号 |
| row | Integer | &#8594;  | 行番号 |
| border | Integer | &#8594;  | 罫線の合成値 |
| line | Integer | &#8594;  | 線の太さ |
| color | Integer | &#8594;  | 罫線のカラー |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET BORDERS.Summary-->QR SET BORDERS コマンドを使用し、指定したセルの罫線スタイルを設定できます。<!-- END REF-->

*area*にはクイックレポートエリアの参照を渡します。

*column*にはセルのカラム番号を渡します。

*row*にはセルの行番号を渡します。以下を渡します:

* 正の整数の場合、その数値は小計 (ブレーク) レベルを示します。
* の定数  
| 定数             | 型    | 値   | コメント       |  
| -------------- | ---- | --- | ---------- |  
| qr detail      | 倍長整数 | \-2 | レポートの詳細エリア |  
| qr grand total | 倍長整数 | \-3 | 総計エリア      |  
| qr title       | 倍長整数 | \-1 | レポートタイトル   |
*border*には、適用するセルの罫線を示す合計値を渡します。テーマの定数を使用できます:  

| 定数                          | 型    | 値  | コメント  |
| --------------------------- | ---- | -- | ----- |
| qr bottom border            | 倍長整数 | 8  | 下罫線   |
| qr inside horizontal border | 倍長整数 | 32 | 内側縦罫線 |
| qr inside vertical border   | 倍長整数 | 16 | 内側横罫線 |
| qr left border              | 倍長整数 | 1  | 左罫線   |
| qr right border             | 倍長整数 | 4  | 右罫線   |
| qr top border               | 倍長整数 | 2  | 上罫線   |

  
同時に複数の罫線を指定するために、*border*に複数の値の合計値を渡すことができます。例えば*border*に値5を渡すと、右側と左側の罫線に適用されます。

*line*にはその線の太さを返します:

* 0 = 線なし
* 1 = 1/4ポイント
* 2 = 1/2ポイント
* 3 = 1ポイント
* 4 = 2ポイント

*color*はその線の色です:

* *color*が正の値である場合、指定の色を示します。
* *color*が0の場合、黒色を示します。
* *color*が-1の場合、色は変更されません。

**Note:** デフォルトの色は黒です。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*column*引数を渡した場合、エラー番号-9852が生成されます。  
無効な*row*引数を渡した場合、エラー番号-9853が生成されます。  
無効な*border*引数を渡した場合、エラー番号-9854が生成されます。  
無効な*line*引数を渡した場合、エラー番号-9855が生成されます。

#### 参照 

[QR GET BORDERS](qr-get-borders.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 797 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


