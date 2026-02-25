---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|14|初出|

</details>
</div>

## 説明 

<!--REF #_command_.FORM UNLOAD.Summary-->**FORM UNLOAD**コマンドは、[FORM LOAD](../commands/form-load)コマンドで指定したカレントのフォームをメモリーから解放します。<!-- END REF-->.

このコマンドは [FORM LOAD](../commands/form-load)コマンドを印刷以外の目的で使用したときには必ず呼び出さなければなりません(実際に印刷をしたときには、 [CLOSE PRINTING JOB](../commands/close-printing-job) コマンドを呼び出した際に自動的にカレントフォームは再度閉じられます)。

## 参照 

[FORM LOAD](../commands/form-load)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1299 |
| スレッドセーフである | no |



