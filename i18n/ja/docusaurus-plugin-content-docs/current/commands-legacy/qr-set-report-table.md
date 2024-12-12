---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *area* ; *aTable* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| aTable | Integer | &#8594;  | テーブル番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR SET REPORT TABLE.Summary-->QR SET REPORT TABLE コマンドは、*area*に渡した参照のレポートエリアに、*table*に渡した番号のテーブルをカレントテーブルとして設定します。<!-- END REF-->

レポートにテーブルを割り当てることが大切な理由は、レポートエディタではそのテーブルのカレントセレクションを使用し、必要に応じてデータの表示や計算の実行、リレートの設定を行うためです。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*table*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR Get report table](qr-get-report-table.md)  