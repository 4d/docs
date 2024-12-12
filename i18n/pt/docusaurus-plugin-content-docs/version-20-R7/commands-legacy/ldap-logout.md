---
id: ldap-logout
title: LDAP LOGOUT
slug: /commands/ldap-logout
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGOUT.Syntax-->**LDAP LOGOUT**<!-- END REF-->
<!--REF #_command_.LDAP LOGOUT.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LDAP LOGOUT.Summary-->O comando **LDAP LOGOUT** termina a conexão com um servidor LDAP no processo atual (se for aplicável).<!-- END REF--> Se não houver conexão, o error 1003 é retornado indicando que não está conectado.

#### Ver também 

[LDAP LOGIN](ldap-login.md)  