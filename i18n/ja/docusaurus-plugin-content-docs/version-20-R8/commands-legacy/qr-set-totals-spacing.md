---
id: qr-set-totals-spacing
title: QR SET TOTALS SPACING
slug: /commands/qr-set-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TOTALS SPACING.Syntax-->**QR SET TOTALS SPACING** ( *area* ; *subtotal* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET TOTALS SPACING.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| subtotal | Integer | &#8594;  | 小計番号 |
| value | Integer | &#8594;  | 0=スペースなし, 32000=改ページ挿入, >0=ブレークレベルの上に追加するスペース, <0=比率指定 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET TOTALS SPACING.Summary-->QR SET TOTALS SPACING コマンドを使用し、小計行の下部の行間を設定できます。<!-- END REF-->このコマンドはリストモードにのみ適用されます。 

*area* にはクイックレポートエリアの参照を渡します。  
*subtotal* には適用される小計レベル (ブレークレベル) を渡します。

*value*は行間を示します:

* *value*が0の場合、行間は追加されません。
* *value*が32000の場合、改ページが挿入されます。
* *value*が正の値の場合、間隔を表わす値をピクセル単位で示します。
* *value*が負の値の場合、間隔を表わす値を小計行との比率で示します。例えば、-100であれば小計行の下に100%の間隔が設定されます。

**Note:** 小計行の下部の行間により小計の次の行が次のページへ押し出される場合、その行の上部には行間は追加されません。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*subtotal*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR GET TOTALS SPACING](qr-get-totals-spacing.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 761 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


