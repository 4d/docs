---
id: ldap-logout
title: LDAP LOGOUT
slug: /commands/ldap-logout
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGOUT.Syntax-->**LDAP LOGOUT**<!-- END REF-->
<!--REF #_command_.LDAP LOGOUT.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.LDAP LOGOUT.Summary-->The **LDAP LOGOUT** command closes the connection with an LDAP server in the current process (if applicable).<!-- END REF--> If there is no connection, an error 1003 stating that you are not logged in is returned.

#### See also 

[LDAP LOGIN](ldap-login.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1327 |
| Thread safe | &check; |
| Forbidden on the server ||


