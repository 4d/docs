---
id: open-security-center
title: OPEN SECURITY CENTER
slug: /commands/open-security-center
displayed_sidebar: docs
---

<!--REF #_command_.OPEN SECURITY CENTER.Syntax-->**OPEN SECURITY CENTER**<!-- END REF-->
<!--REF #_command_.OPEN SECURITY CENTER.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.OPEN SECURITY CENTER.Summary-->OPEN SECURITY CENTER コマンドは、Maintenance and Security Center (MSC) ウィンドウを表示します。<!-- END REF-->詳細な情報については、*Maintenance & Security Center* のページを参照してください。 

**注:**

* このコマンドは[DIALOG](../commands/dialog)コマンドに *\** 引数を渡したときと同じ原理で動作します。MSCはウィンドウに表示され、コマンドは即座にコントロールを4Dのコードに返します。カレントプロセスが終了すると、\[#cmd id="270"/\]をシミュレートし、ウィンドウは自動的に閉じられます。そのためウィンドウの表示を実行中のプロセスのコードを通して管理する必要があります。
* このコマンドはリモートの4D アプリケーションでは実行することができません。

## 参照 

[VERIFY CURRENT DATA FILE](../commands/verify-current-data-file)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1018 |
| スレッドセーフである | no |



