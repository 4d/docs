---
id: qr-set-info-row
title: QR SET INFO ROW
slug: /commands/qr-set-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR SET INFO ROW.Syntax-->**QR SET INFO ROW** ( *area* ; *row* ; *hide* )<!-- END REF-->
<!--REF #_command_.QR SET INFO ROW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリアの参照 |
| row | Integer | &#8594;  | 行指定 |
| hide | Integer | &#8594;  | 0 = 表示, 1 = 非表示 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR SET INFO ROW.Summary-->QR SET INFO ROW コマンドは、*row*に渡した行を表示/非表示に設定します。<!-- END REF-->

*row*には、設定したい行を指定します:

* *row*が正の整数である場合、表示属性を設定する小計 (ブレークレベル) を示します。
* テーマの定数を使用し、行アイテムを指定することができます  
| 定数             | 型    | 値   | コメント       |  
| -------------- | ---- | --- | ---------- |  
| qr detail      | 倍長整数 | \-2 | レポートの詳細エリア |  
| qr grand total | 倍長整数 | \-3 | 総計エリア      |  
| qr title       | 倍長整数 | \-1 | レポートタイトル   |

*hide*には、行を表示するか、または非表示にするかを示す値を指定します:

* *hide*が1の場合、行は非表示に設定されます。
* *hide*が0の場合、行は表示に設定されます。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*row*引数を渡した場合、エラー番号-9852が生成されます。

#### 例題 

次のコードは、詳細行を隠します:

```4d
 QR SET INFO ROW(area;qr detail;1)
```

#### 参照 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR Get info row](qr-get-info-row.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  