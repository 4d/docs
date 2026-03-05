---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
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

<!--REF #_command_.UNREGISTER CLIENT.Summary-->UNREGISTER CLIENT コマンドは、クライアントステーションの登録を解除します。<!-- END REF-->クライアントは[REGISTER CLIENT](register-client.md "REGISTER CLIENT")コマンドによって既に登録されているものでなければなりません。

**Note:** 4Dクライアントは、ユーザがアプリケーションを終了すると自動的に登録を解除します。

4Dクライアントが前もって登録されていなかったり、コマンドをシングルユーザの4Dで実行しても、コマンドは何も行ないません。

クライアントの登録が正しく解除されるとシステム変数OKは1になり、クライアントが登録されていないとOKは0になります。

## 例題 

[REGISTER CLIENT](register-client.md "REGISTER CLIENT") コマンドの例題参照

## システム変数およびセット 

クライアントが正しく登録解除されるとOKシステム変数に1が、クライアントが登録されていなければ0が設定されます。

## 参照 

[EXECUTE ON CLIENT](../commands/execute-on-client)  
[GET REGISTERED CLIENTS](../commands/get-registered-clients)  
[REGISTER CLIENT](../commands/register-client)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 649 |
| スレッドセーフである | no |
| システム変数を更新する | OK |


