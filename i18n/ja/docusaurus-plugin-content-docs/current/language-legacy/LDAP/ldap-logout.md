---
id: ldap-logout
title: LDAP LOGOUT
slug: /commands/ldap-logout
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGOUT.Syntax-->**LDAP LOGOUT**<!-- END REF-->
<!--REF #_command_.LDAP LOGOUT.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|15|初出|

</details>
</div>

## 説明 

<!--REF #_command_.LDAP LOGOUT.Summary-->**LDAP LOGOUT** コマンドカレントプロセスにおいて、LDAPサーバーとの接続を(開いていた場合)閉じます。<!-- END REF-->接続がなかった場合、1003エラーが返されて、ログインしていないことが警告されます。

## 参照 

[LDAP LOGIN](../commands/ldap-login)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1327 |
| スレッドセーフである | no |


