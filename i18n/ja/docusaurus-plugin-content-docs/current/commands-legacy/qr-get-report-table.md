---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *area* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | 倍長整数 | &#x1F852; | エリア参照 |
| 戻り値 | 倍長整数 | &#x1F850; | テーブル番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Get report table.Summary-->QR Get report table コマンドは、*area*に渡した参照のレポートエリア用のカレントテーブル番号を返します。<!-- END REF-->

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR SET REPORT TABLE](qr-set-report-table.md)  