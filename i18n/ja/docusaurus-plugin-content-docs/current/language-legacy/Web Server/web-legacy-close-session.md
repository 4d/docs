---
id: web-legacy-close-session
title: WEB LEGACY CLOSE SESSION
slug: /commands/web-legacy-close-session
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Syntax-->**WEB LEGACY CLOSE SESSION** ( *sessionID* : Text )<!-- END REF-->
<!--REF #_command_.WEB LEGACY CLOSE SESSION.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| sessionID | Text | &#8594; | セッションUUID |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|18 R6|名称変更|
|15 R4|変更|
|13|初出|

</details>
</div>

## 互換性に関する注意 

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Summary-->このコマンドは、4D v18 R6 以前のバージョンから変換されたデータベースでのみ利用可能な**旧式Web セッション**でのみ使用することが可能です。<!-- END REF-->これは**スケーラブルWeb セッション**モード(4D v18 R6以降のバージョンでの推奨)が有効化されている場合には無視されます。詳細な情報については、*Webセッション管理(旧式)* の章を参照してください。

## 説明 

**WEB LEGACY CLOSE SESSION**コマンドは*sessionID*引数で指定された既存のセッションを破棄します。指定されたセッションが存在しない場合、コマンドはなにも行いません。

Webプロセスや他のプロセスからこのコマンドが呼び出されると:

* ブラウザーに送信されるcookieの有効期限が0に設定されます。
* 開発者がセッション情報を保存できるようにするために[On Web Legacy Close Session database method](../commands/on-web-legacy-close-session-database-method)が呼び出されます。
* カレントセレクションや変数などのプロセスオブジェクトが消去され、レコードのロックが解除されます。

このコマンド実行後、Webクライアントが当該cookieを使用して4D Webサーバーにアクセスすると、新しいセッションが開始され新しいcookieがクライアントに送信されます。

**注:** 4D Mobileセッションのコンテキストにおいては、**WEB LEGACY CLOSE SESSION**コマンドは*sessionID*引数に渡したIDの4D Mobileセッションを閉じます。4D Mobileセッションは複数のプロセスを管理できるため、このコマンドはセッションに関連した全てのWebプロセスに対して実行を終了を要求します。

## 参照 

[On Web Legacy Close Session database method](../commands/on-web-legacy-close-session-database-method)  
*Webセッション管理(旧式)*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1208 |
| スレッドセーフである | yes |


