---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|17 R4|変更|
|11 SQL Release 3|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.MESSAGES OFF.Summary-->MESSAGES OFF および [MESSAGES ON](../commands/messages-on) コマンドは、時間のかかる処理を行っている際に4Dが表示する進捗インジケータの表示/非表示を切り替えます。<!-- END REF-->デフォルトでは、メッセージは表示されます。

進捗インジケータを表示する処理を以下の表に示します:

| フォーミュラの適用  | クイックレポート     | 並び替え    |
| ---------- | ------------ | ------- |
| データの書き出し   | データの読み込み     | グラフ     |
| フォームによるクエリ | フォーミュラによるクエリ | クエリエディタ |

進捗インジケータを表示するコマンドは以下の通りです:

[APPLY TO SELECTION](../commands/apply-to-selection)  
[Average](../commands/average)  
[BUILD APPLICATION](../commands/build-application)  
[DISTINCT VALUES](../commands/distinct-values)  
[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[Max](../commands/max)  
[Min](../commands/min)  
[ORDER BY](../commands/order-by)  
[ORDER BY FORMULA](../commands/order-by-formula)  
[QR REPORT](../commands/qr-report)  
[QUERY](../commands/query)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY BY EXAMPLE](../commands/query-by-example)  
[QUERY SELECTION](../commands/query-selection)  
[QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)  
[REDUCE SELECTION](../commands/reduce-selection)  
[RELATE MANY SELECTION](../commands/relate-many-selection)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  
[SCAN INDEX](../commands/scan-index)  
[Sum](../commands/sum)

**4D Serverでの注意:** 進捗メッセージウィンドウは、それらのオペレーションが管理ウィンドウの *\_o\_PAGE SETUP* にて自動的に表示されるため、サーバー側では表示されません。これらの進捗ウィンドウを強制的に表示したい場合は、サーバー側で [MESSAGES ON](../commands/messages-on) を呼び出す必要があります。

## 例題 

以下の例は、並び替えを実行する前に進捗インジケータを非表示にし、処理が完了した時点で表示に戻します:

```4d
 MESSAGES OFF
 ORDER BY([Addresses];[Addresses]ZIP;>;[Addresses]Name2;>)
 MESSAGES ON
```

## 参照 

[MESSAGES ON](../commands/messages-on)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 175 |
| スレッドセーフである | yes |


