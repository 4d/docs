---
id: process-aborted
title: Process aborted
slug: /commands/process-aborted
displayed_sidebar: docs
---

<!--REF #_command_.Process aborted.Syntax-->**Process aborted**  : Boolean<!-- END REF-->
<!--REF #_command_.Process aborted.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True = プロセスは中止されようとしている, False = プロセス中止されようとしていない |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6.5|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Process aborted.Summary-->**Process aborted**コマンドは、このコマンドを呼び出したプロセスが不意に中断されようとしている場合**True**を返します。<!-- END REF-->これはコマンドの実行が正常に完了できないことを意味します。

この状況が起きるケースはとても稀です。コードに"プロセス中断"条件が通知される前に、プロセスは通常、停止されます。このような状況は、4Dコマンドを何も実行していないコンパイルされたループにおいてのみ発生し得ます。4D がどのようにプロセスの終了を管理するかについては、[On Exitデータベースメソッド](../commands/on-exit-database-method) のページを参照してください。

## 参照 

[On Exitデータベースメソッド](../commands/on-exit-database-method)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 672 |
| スレッドセーフである | yes |


