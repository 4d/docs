---
id: qr-run
title: QR RUN
slug: /commands/qr-run
displayed_sidebar: docs
---

<!--REF #_command_.QR RUN.Syntax-->**QR RUN** ( *area* )<!-- END REF-->
<!--REF #_command_.QR RUN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | 実行するエリアの参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR RUN.Summary-->QR RUNコマンドは、出力先を含め、クイックレポートの現在の設定を使用して、*area*引数に渡された参照番号のレポートエリアを実行します。<!-- END REF-->[QR SET DESTINATION](qr-set-destination.md "QR SET DESTINATION")コマンドで出力タイプを変更できます。 

属するエリアのテーブルでレポートが実行されます。*area*がオフスクリーンエリアを指す場合、[QR SET REPORT TABLE](qr-set-report-table.md "QR SET REPORT TABLE")コマンドで使用するテーブルを指定する必要があります。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

**4D Serverの場合:** このコマンドは4D Server上でストアドプロシージャ―の一部として実行する事ができます。この場合、サーバーマシン上でダイアログボックスが表示されることがないように注意して下さい(ただし特定の条件の場合は除く)。4D Server上で実行するためには、[QR SET DESTINATION](qr-set-destination.md) コマンドに "\*" 引数を渡して呼び出します。プリンターに問題があった場合(用紙切れ、プリンターと接続できない、等)は、エラーメッセージは何も表示されません。


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 746 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |


