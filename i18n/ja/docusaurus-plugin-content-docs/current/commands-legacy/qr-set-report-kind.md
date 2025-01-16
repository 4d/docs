---
id: qr-set-report-kind
title: QR SET REPORT KIND
slug: /commands/qr-set-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT KIND.Syntax-->**QR SET REPORT KIND** ( *area* ; *type* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT KIND.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| type | Integer | &#8594;  | レポートタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET REPORT KIND.Summary-->QR SET REPORT KIND コマンドは、*area*に渡した参照番号のエリアのレポートタイプを設定します。<!-- END REF-->

* *type*が1の場合、レポートはリストタイプです。
* *type*が2の場合、レポートはクロステーブルタイプです。

またテーマの定数を使用することもできます:

| 定数              | 型    | 値 |
| --------------- | ---- | - |
| qr cross report | 倍長整数 | 2 |
| qr list report  | 倍長整数 | 1 |

既存のカレントレポートに対して新たにタイプを設定した場合、前回の設定は破棄され、新しい空のレポートが用意されます。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*type*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR Get report kind](qr-get-report-kind.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 738 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


