---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** ({ *dialType* : Integer })<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dialType | Integer | &#8594; | 表示するダイアログボックス |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|15 R5|変更|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.PRINT SETTINGS.Summary-->**PRINT SETTINGS** は印刷設定ダイアログボックスを表示します。<!-- END REF-->このコマンドを使用する場合、[Print form](../commands/print-form) や [OPEN PRINTING JOB](../commands/open-printing-job) コマンドよりも前に呼び出されなければなりません。

オプションの*dialType* パラメーターを使用して、表示する印刷設定ダイアログボックスを指定できます。次の *Print Options* テーマの定数を引数として受け渡すことができます:

| 定数                | 値 | コメント                           |
| ----------------- | - | ------------------------------ |
| Page setup dialog | 1 | 用紙設定ダイアログを表示                   |
| Print dialog      | 2 | プリントジョブダイアログボックスを表示(省略時のデフォルト) |

**注:** プリントジョブダイアログボックスには、プリントジョブを画面で確認するためのプレビューチェックボックスがあります。**PRINT SETTINGS** を実行する前に [SET PRINT PREVIEW](../commands/set-print-preview) コマンドを使用して、このチェックボックスをあらかじめ設定したり、リセットしておくことができます。

## 例題 

[PRINT FORM](../commands/print-form.md "PRINT FORM")コマンドの例題参照

## システム変数およびセット 

ユーザーが両方のダイアログボックスでOKボタンをクリックすると、システム変数OKに1が代入されます。それ以外の場合は、システム変数OKに0が代入されます。

## 参照 

[OPEN PRINTING JOB](../commands/open-printing-job)  
[PAGE BREAK](../commands/page-break)  
[Print form](../commands/print-form)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 106 |
| スレッドセーフである | no |
| システム変数を更新する | OK |



