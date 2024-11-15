---
id: qr-get-text-property
title: QR Get text property
slug: /commands/qr-get-text-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get text property.Syntax-->**QR Get text property** ( *area* ; *colNum* ; *rowNum* ; *property* ) : any<!-- END REF-->
<!--REF #_command_.QR Get text property.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| colNum | Integer | &#8594;  | カラム番号 |
| rowNum | Integer | &#8594;  | 行番号 |
| property | Integer | &#8594;  | プロパティ番号 |
| 戻り値 | Integer, Text | &#8592; | 選択したプロパティの値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR Get text property.Summary-->QR Get text property コマンドは、*colNum* と *rowNum* で指定されたセルのテキスト属性のプロパティ値を返します。<!-- END REF--> 

*area* にはクイックレポートエリアの参照を渡します。

*colNum* にはセルのカラム番号を渡します。

*rowNum* にはセルの行の参照番号を渡します。

* 整数を渡して小計 (ブレーク) レベルを指定する
* テーマの定数を渡す  
| 定数             | 型    | 値   | コメント       |  
| -------------- | ---- | --- | ---------- |  
| qr detail      | 倍長整数 | \-2 | レポートの詳細エリア |  
| qr footer      | 倍長整数 | \-5 | ページフッタ     |  
| qr grand total | 倍長整数 | \-3 | 総計エリア      |  
| qr header      | 倍長整数 | \-4 | ページヘッダ     |  
| qr title       | 倍長整数 | \-1 | レポートタイトル   |

**Note:** *rowNum* に-4または-5を渡す場合、使用されなくても *colNum* を渡す必要があります。

**Note:** クロステーブルモードでは、行の値が常に正数であることを除き、原則は同じです。

*property* には、取得するテキスト属性の値または定数を渡します。 *QR Text Properties* テーマの定数を使用し、次の値を設定することができます:

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

無効な *area* 番号を渡した場合、エラー番号-9850が生成されます。  
無効な *colNum* 引数を渡した場合、エラー番号-9852が生成されます。  
無効な *rowNum* 引数を渡した場合、エラー番号-9853が生成されます。  
無効な *property* 引数を渡した場合、エラー番号-9854が生成されます。

#### 参照 

[QR SET TEXT PROPERTY](qr-set-text-property.md)  