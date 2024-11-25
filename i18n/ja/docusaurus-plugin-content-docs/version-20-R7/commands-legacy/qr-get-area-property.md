---
id: qr-get-area-property
title: QR Get area property
slug: /commands/qr-get-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get area property.Syntax-->**QR Get area property** ( *area* ; *property* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get area property.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリアの参照 |
| property | Integer | &#8594;  | インタフェース要素 |
| 戻り値 | Integer | &#8592; | 1 = 表示, 0 = 非表示 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR Get area property.Summary-->**QR Get area property** コマンドは、*property*に渡されたインタフェース要素（ツールバーまたはメニューバー）が表示されていなければ0を、表示されていれば1を返します。<!-- END REF-->

このコマンドはフォームに埋め込まれたクイックレポートエリアに対してのみ使用可能です。

*property* 引数には、*QR Area Properties* テーマからの以下の定数を使用することができます:

| 定数                       | 値 | コメント                             |
| ------------------------ | - | -------------------------------- |
| qr view contextual menus | 7 | コンテキストメニューのステータス取得 (表示=1, 非表示=0) |

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

無効な*property*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR SET AREA PROPERTY](qr-set-area-property.md)  