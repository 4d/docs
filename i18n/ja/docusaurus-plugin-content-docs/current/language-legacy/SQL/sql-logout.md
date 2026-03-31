---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SQL LOGOUT.Summary-->SQL LOGOUT コマンドは、カレントプロセスにおいて開かれているODBCソースとの接続をクローズします(すでに接続されていれば)。<!-- END REF-->ODBC接続が行われていない場合、コマンドは何も行いません。

## システム変数およびセット 

正しくログアウトがあ行われると、OKシステム変数は1に設定されます。そうでなければ0に設定されます。[ON ERR CALL](../commands/on-err-call)コマンドでインストールされたエラー処理メソッドを使用してこのエラーを処理できます。

## 参照 

[SQL LOGIN](../commands/sql-login)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 872 |
| スレッドセーフである | no |
| システム変数を更新する | OK、error |


