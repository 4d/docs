---
id: qr-get-html-template
title: QR Get HTML template
slug: /commands/qr-get-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR Get HTML template.Syntax-->**QR Get HTML template** ( *area* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.QR Get HTML template.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#x1F852; | エリア参照 |
| 戻り値 | Text | &#x1F850; | テンプレートとして使用されるHTMLコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Get HTML template.Summary-->QR Get HTML template コマンドは、クイックレポート*area*に現在使用されているHTMLテンプレートを返します。<!-- END REF-->戻り値はテキスト値であり、HTMLテンプレートの全内容が納められます。

テンプレートが特に指定されていない場合、デフォルトのテンプレートが返されます。手動またはプログラムにより出力先をHTMLファイルに設定されていない場合、テンプレートが返されない点に注意してください。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR SET HTML TEMPLATE](qr-set-html-template.md)  