---
id: ldap-logout
title: LDAP LOGOUT
slug: /commands/ldap-logout
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGOUT.Syntax-->**LDAP LOGOUT**<!-- END REF-->
<!--REF #_command_.LDAP LOGOUT.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|15|Created|

</details>
</div>

## Description 

<!--REF #_command_.LDAP LOGOUT.Summary-->The **LDAP LOGOUT** command closes the connection with an LDAP server in the current process (if applicable).<!-- END REF--> If there is no connection, an error 1003 stating that you are not logged in is returned.

## See also 

[LDAP LOGIN](../commands/ldap-login)  

## Properties

|  |  |
| --- | --- |
| Command number | 1327 |
| Thread safe | no |


