---
id: qr-get-info-row
title: QR Get info row
slug: /commands/qr-get-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR Get info row.Syntax-->**QR Get info row** ( *area* ; *row* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get info row.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| row | Integer | &#8594;  | 指定する行 |
| 戻り値 | Integer | &#8592; | 0 = 表示, 1 = 非表示 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Get info row.Summary-->QR Get info row コマンドは、*row*に渡した行に関する表示の有無を取得します。<!-- END REF-->

*row*には、情報を取得したい行を指定します:

* 正の整数である場合、表示属性を取得する小計 (ブレークレベル) を示します。
* テーマの定数を使用し、行アイテムを指定することができます  
| 定数             | 型    | 値   | コメント       |  
| -------------- | ---- | --- | ---------- |  
| qr detail      | 倍長整数 | \-2 | レポートの詳細エリア |  
| qr grand total | 倍長整数 | \-3 | 総計エリア      |  
| qr title       | 倍長整数 | \-1 | レポートタイトル   |

戻り値として行が表示されるか非表示であるかを示す値が返されます。戻り値が1の場合行は非表示に設定され、0の場合行は表示に設定されています。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*row*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  
[QR SET INFO ROW](qr-set-info-row.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 769 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


