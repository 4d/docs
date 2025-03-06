---
id: web-start-server
title: WEB START SERVER
slug: /commands/web-start-server
displayed_sidebar: docs
---

<!--REF #_command_.WEB START SERVER.Syntax-->**WEB START SERVER**<!-- END REF-->
<!--REF #_command_.WEB START SERVER.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB START SERVER.Summary-->The **WEB START SERVER** command starts the Web server of the 4D application on which it has been executed (4D or 4D Server).<!-- END REF--> The database is therefore published on your Intranet network or on the Internet.

If the Web Server is successfully started, **OK** is set to *1*, otherwise **OK** is set to *0* (zero). For example, if the TCP/IP network protocol is not properly configured, **OK** is set to *0*.

#### System variables and sets 

If the Web Server is successfully started, **OK** is set to 1; otherwise **OK** is set to 0.

#### See also 

[WEB STOP SERVER](web-stop-server.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 617 |
| Thread safe | &check; |
| Modifies variables | OK |


