---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *area* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594; | エリア参照 |
| 戻り値 | Integer | &#8592; | テーブル番号 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2003|初出|

</details>
</div>

## 説明 

<!--REF #_command_.QR Get report table.Summary-->QR Get report table コマンドは、*area*に渡した参照のレポートエリア用のカレントテーブル番号を返します。<!-- END REF-->

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

## 参照 

[QR SET REPORT TABLE](../commands/qr-set-report-table)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 758 |
| スレッドセーフである | no |
| システム変数を更新する | error |


