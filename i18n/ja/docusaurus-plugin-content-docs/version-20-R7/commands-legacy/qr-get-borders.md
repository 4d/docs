---
id: qr-get-borders
title: QR GET BORDERS
slug: /commands/qr-get-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR GET BORDERS.Syntax-->**QR GET BORDERS** ( *area* ; *column* ; *row* ; *border* ; *line* {; *color*} )<!-- END REF-->
<!--REF #_command_.QR GET BORDERS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| column | Integer | &#8594;  | カラム番号 |
| row | Integer | &#8594;  | 行番号 |
| border | Integer | &#8594;  | 罫線の値 |
| line | Integer | &#8592; | 線の太さ |
| color | Integer | &#8592; | 罫線のカラー |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR GET BORDERS.Summary-->QR GET BORDERS コマンドを使用し、指定したセルの罫線スタイルを取得できます。<!-- END REF-->

*area*にはクイックレポートエリアの参照番号を渡します。

*column*にはセルのカラム番号を渡します。

*row*にはセルの行番号を渡します:

* 対象の小計 (ブレーク) レベルそ指定する正の整数を渡す、または
* テーマの以下の定数のいずれかを渡す  
| 定数             | 型    | 値   | コメント       |  
| -------------- | ---- | --- | ---------- |  
| qr detail      | 倍長整数 | \-2 | レポートの詳細エリア |  
| qr grand total | 倍長整数 | \-3 | 総計エリア      |  
| qr title       | 倍長整数 | \-1 | レポートタイトル   |

*border*には、適用するセルの罫線を示す値を渡します。テーマのいずれかの値を渡します:

| 定数                          | 型    | 値  | コメント  |
| --------------------------- | ---- | -- | ----- |
| qr bottom border            | 倍長整数 | 8  | 下罫線   |
| qr inside horizontal border | 倍長整数 | 32 | 内側縦罫線 |
| qr inside vertical border   | 倍長整数 | 16 | 内側横罫線 |
| qr left border              | 倍長整数 | 1  | 左罫線   |
| qr right border             | 倍長整数 | 4  | 右罫線   |
| qr top border               | 倍長整数 | 2  | 上罫線   |

**Note:** [QR SET BORDERS](qr-set-borders.md "QR SET BORDERS")コマンドとは異なり、QR GET BORDERSは累計値を受け付けません。罫線の全てのパラメータを知るには、全ての罫線値を使って個別にテストする必要があります。

*line*にはその線の太さを返します:

* 0 = 線なし
* 1 = 1/4ポイント
* 2 = 1/2ポイント
* 3 = 1ポイント
* 4 = 2ポイント

*color*はその線の色を返します。返される値は、指定した罫線部分のカラー値です。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*column*引数を渡した場合、エラー番号-9852が生成されます。  
無効な*row*引数を渡した場合、エラー番号-9853が生成されます。  
無効な*border*引数を渡した場合、エラー番号-9854が生成されます。

#### 参照 

[QR SET BORDERS](qr-set-borders.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 798 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


