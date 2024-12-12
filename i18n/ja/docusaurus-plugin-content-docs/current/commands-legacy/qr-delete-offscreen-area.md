---
id: qr-delete-offscreen-area
title: QR DELETE OFFSCREEN AREA
slug: /commands/qr-delete-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Syntax-->**QR DELETE OFFSCREEN AREA** ( *area* )<!-- END REF-->
<!--REF #_command_.QR DELETE OFFSCREEN AREA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | 削除するエリアの参照 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Summary-->QR DELETE OFFSCREEN AREA コマンドは、*area*引数に渡された参照番号のクイックレポートオフスクリーンエリアをメモリから削除します。<!-- END REF-->

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR New offscreen area](qr-new-offscreen-area.md)  