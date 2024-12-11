---
id: qr-set-text-property
title: QR SET TEXT PROPERTY
slug: /commands/qr-set-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TEXT PROPERTY.Syntax-->**QR SET TEXT PROPERTY** ( *area* ; *colNum* ; *rowNum* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET TEXT PROPERTY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| colNum | Integer | &#8594;  | カラム番号 |
| rowNum | Integer | &#8594;  | 行番号 |
| property | Integer | &#8594;  | プロパティ番号 |
| value | Integer, Text | &#8594;  | 選択したプロパティの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET TEXT PROPERTY.Summary-->QR SET TEXT PROPERTY コマンドを使用し、*colNum* と *rowNum* で指定されたセルのテキスト属性を設定できます。<!-- END REF--> 

*area* にはクイックレポートエリアの参照を渡します。

*colNum* にはセルのカラム番号を渡します。

*rowNum* にはセルの行の参照番号を渡します:

* 正の値である場合、対応する小計 (ブレークレベル) を示します。
* テーマの定数を使用し、行アイテムを指定することができます。  
| 定数             | 型    | 値   | コメント       |  
| -------------- | ---- | --- | ---------- |  
| qr detail      | 倍長整数 | \-2 | レポートの詳細エリア |  
| qr footer      | 倍長整数 | \-5 | ページフッタ     |  
| qr grand total | 倍長整数 | \-3 | 総計エリア      |  
| qr header      | 倍長整数 | \-4 | ページヘッダ     |  
| qr title       | 倍長整数 | \-1 | レポートタイトル   |

**Note:** *rowNum* に-4または-5を渡す場合、使用されなくても *colNum* を渡す必要があります。

**Note:** クロステーブルモードでは、行の値が常に正数であることを除き、原則は同じです。

*property* には、割り当てるテキスト属性の値または定数を渡します。テーマの定数を使用し、次の値を指定することができます:

| 定数                            | 型    | 値  | コメント                                          |
| ----------------------------- | ---- | -- | --------------------------------------------- |
| \_o\_qr font                  | 倍長整数 | 1  | 4D v14R3 以降廃止予定(qr font name を使用して下さい)        |
| qr alternate background color | 倍長整数 | 9  | 代替背景色                                         |
| qr background color           | 倍長整数 | 8  | 背景色番号                                         |
| qr bold                       | 倍長整数 | 3  | 太字スタイル属性 (0 または 1)                            |
| qr font name                  | 倍長整数 | 10 | [FONT LIST](font-list.md) コマンドなどによって返されたフォント名 |
| qr font size                  | 倍長整数 | 2  | ポイント単位のフォントサイズ (9 \~ 255)                     |
| qr italic                     | 倍長整数 | 4  | イタリックスタイル属性 (0 または1)                          |
| qr justification              | 倍長整数 | 7  | テキスト整列属性 (0 = デフォルト, 1 = 左, 2 = 中央, 3 = 右)    |
| qr text color                 | 倍長整数 | 6  | フォントカラー属性 (カラー番号)                             |
| qr underline                  | 倍長整数 | 5  | 下線スタイル属性 (0 または1)                             |

無効な*area* 番号を渡した場合、エラー番号-9850が生成されます。  
無効な*colNum* 引数を渡した場合、エラー番号-9852が生成されます。  
無効な*rowNum* 引数を渡した場合、エラー番号-9853が生成されます。  
無効な*property* 引数を渡した場合、エラー番号-9854が生成されます。

#### 例題 

このメソッドは、最初のカラムのタイトルに対して複数の属性を定義します:

```4d
  //Times フォントを指定します:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font name;"Times")
  //10ポイントのフォントサイズを指定します:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr font size;10)
  //太字スタイルを指定します:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr bold;1)
  //斜体スタイルを指定します:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr italic;1)
  //下線付きスタイルを指定します:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr underline;1)
  //黄緑色のフォントカラーを指定します:
 QR SET TEXT PROPERTY(qr_area;1;-1;qr text color;0x0000FF00)
```

#### 参照 

[QR Get text property](qr-get-text-property.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 759 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


