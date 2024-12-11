---
id: qr-get-destination
title: QR GET DESTINATION
slug: /commands/qr-get-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR GET DESTINATION.Syntax-->**QR GET DESTINATION** ( *area* ; *type* {; *specifics*} )<!-- END REF-->
<!--REF #_command_.QR GET DESTINATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| type | Integer | &#8592; | レポートのタイプ |
| specifics | Text, Variable | &#8592; | 出力先の詳細 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR GET DESTINATION.Summary-->QR GET DESTINATION コマンドは、*area*に渡したエリア参照のレポート出力先を取得します。<!-- END REF-->

引数*type*の値をテーマの定数と比較することができます。

次の表は*type*および*specifics*の両引数から取得できる値を示しています:

| **出力先**  | **タイプ (値)**            | **詳細**      |
| -------- | ---------------------- | ----------- |
| プリンタ     | *qr printer* (1)       | N.A.        |
| テキストファイル | *qr text file* (2)     | ファイルパス名     |
| 4D View  | *qr 4D View area* (3)  | N.A.        |
| 4D Chart | *qr 4D Chart area* (4) | N.A.        |
| HTMLファイル | *qr HTML file* (5)     | HTMLファイルパス名 |

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR SET DESTINATION](qr-set-destination.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 756 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


