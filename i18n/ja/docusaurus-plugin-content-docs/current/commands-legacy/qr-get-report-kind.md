---
id: qr-get-report-kind
title: QR Get report kind
slug: /commands/qr-get-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report kind.Syntax-->**QR Get report kind** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report kind.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| 戻り値 | Integer | &#8592; | レポートタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Get report kind.Summary-->QR Get report kind コマンドは、*area*に渡したエリアのレポートタイプを取得します。<!-- END REF-->

* 戻り値が1の場合、レポートはリストタイプです。
* 戻り値が2の場合、レポートはクロステーブルタイプです。

また、この関数の戻り値をテーマの定数と比較することもできます:

| 定数              | 型    | 値 |
| --------------- | ---- | - |
| qr cross report | 倍長整数 | 2 |
| qr list report  | 倍長整数 | 1 |

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR SET REPORT KIND](qr-set-report-kind.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 755 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


