---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** {( *dialType* )}<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dialType | Integer | &#8594;  | 表示するダイアログボックス |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.PRINT SETTINGS.Summary-->**PRINT SETTINGS** は印刷設定ダイアログボックスを表示します。<!-- END REF-->このコマンドを使用する場合、[Print form](../commands/print-form.md) や [OPEN PRINTING JOB](open-printing-job.md) コマンドよりも前に呼び出されなければなりません。

オプションの*dialType* パラメーターを使用して、表示する印刷設定ダイアログボックスを指定できます。次の *Print Options* テーマの定数を引数として受け渡すことができます:

| 定数                | 値 | コメント                           |
| ----------------- | - | ------------------------------ |
| Page setup dialog | 1 | 用紙設定ダイアログを表示                   |
| Print dialog      | 2 | プリントジョブダイアログボックスを表示(省略時のデフォルト) |

**注:** プリントジョブダイアログボックスには、プリントジョブを画面で確認するためのプレビューチェックボックスがあります。**PRINT SETTINGS** を実行する前に [SET PRINT PREVIEW](set-print-preview.md) コマンドを使用して、このチェックボックスをあらかじめ設定したり、リセットしておくことができます。

#### 例題 

[PRINT FORM](../commands/print-form.md "PRINT FORM")コマンドの例題参照

#### システム変数およびセット 

ユーザーが両方のダイアログボックスでOKボタンをクリックすると、システム変数OKに1が代入されます。それ以外の場合は、システム変数OKに0が代入されます。

#### 参照 

[OPEN PRINTING JOB](open-printing-job.md)  
[PAGE BREAK](page-break.md)  
[Print form](../commands/print-form.md)  
[SET PRINT PREVIEW](set-print-preview.md)  