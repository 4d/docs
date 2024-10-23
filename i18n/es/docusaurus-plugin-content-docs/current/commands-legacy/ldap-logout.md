---
id: ldap-logout
title: LDAP LOGOUT
slug: /commands/ldap-logout
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGOUT.Syntax-->**LDAP LOGOUT**<!-- END REF-->
<!--REF #_command_.LDAP LOGOUT.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LDAP LOGOUT.Summary-->El comando **LDAP LOGOUT** cierra la conexión con un servidor LDAP en el proceso actual (si aplica).<!-- END REF--> Si no hay conexión, se devuelve el error 1003 indicando que no está conectado.

#### Ver también 

[LDAP LOGIN](ldap-login.md)  