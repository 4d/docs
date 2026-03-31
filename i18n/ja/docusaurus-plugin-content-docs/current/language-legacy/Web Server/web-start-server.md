---
id: web-start-server
title: WEB START SERVER
slug: /commands/web-start-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB START SERVER.Syntax-->**WEB START SERVER**<!-- END REF-->
<!--REF #_command_.WEB START SERVER.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|名称変更|
|2003|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.WEB START SERVER.Summary-->**WEB START SERVER**コマンドは、実行中の4Dアプリケーション上でWebサーバを起動します。<!-- END REF-->結果、データベースはイントラネットやインターネット上で公開されます。

## システム変数およびセット 

Webサーバの起動が成功すると、OK に1が代入されます。その他の場合は、OK に 0 (ゼロ) が代入されます。例えば、TCP/IPネットワークのプロトコルが正確に構成されていないと、OK に 0 が代入されます。

## 参照 

[WEB STOP SERVER](../commands/web-stop-server)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 617 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


