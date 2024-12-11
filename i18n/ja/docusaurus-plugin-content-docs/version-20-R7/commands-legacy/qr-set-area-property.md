---
id: qr-set-area-property
title: QR SET AREA PROPERTY
slug: /commands/qr-set-area-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET AREA PROPERTY.Syntax-->**QR SET AREA PROPERTY** ( *area* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET AREA PROPERTY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| property | Integer | &#8594;  | 指定するインタフェース要素 |
| value | Integer | &#8594;  | 1 = 表示, 0 = 非表示 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET AREA PROPERTY.Summary-->**QR SET AREA PROPERTY** コマンドを使用し、*property* に渡したインタフェース要素 (ツールバーやメニューバー) を表示、または非表示に設定できます。<!-- END REF-->

このコマンドはフォームに埋め込まれたクイックレポートエリアに対してのみ使用可能です。

*property* 引数には、*QR Area Properties* テーマからの以下の定数を使用することができます:

| 定数                       | 値 | コメント                             |
| ------------------------ | - | -------------------------------- |
| qr view contextual menus | 7 | コンテキストメニューのステータス取得 (表示=1, 非表示=0) |

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

無効な*property*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR Get area property](qr-get-area-property.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 796 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


