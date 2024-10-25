---
id: web-legacy-close-session
title: WEB LEGACY CLOSE SESSION
slug: /commands/web-legacy-close-session
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Syntax-->**WEB LEGACY CLOSE SESSION** ( *sessionID* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY CLOSE SESSION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| sessionID | Text | &#8594;  | Session UUID |

<!-- END REF-->

#### Compatibility Note 

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Summary-->This command can only be used with **legacy web sessions**, available in databases converted from versions prior to 4D v18 R6\.<!-- END REF--> It is ignored when **scalable web sessions** mode is enabled (recommended in 4D v18 R6 and higher). For more information, please refer to the *Web Sessions Management (Legacy)* section.

#### Description 

The **WEB LEGACY CLOSE SESSION** command invalidates an existing session designated by the *sessionID* parameter. If the session does not exist, the command does nothing.

When this command is called from a Web process or any other process:

* The cookie expiration date is set to 0,
* The [On Web Legacy Close Session database method](on-web-legacy-close-session-database-method.md) is called, allowing you to store session information,
* Selections are erased, records are unlocked and variables are reset.

After this command is executed, if a Web client sends a request using an invalid cookie, a new session is opened and a new cookie is sent.

**Note:** In the context of a 4D Mobile session, the **WEB LEGACY CLOSE SESSION** command closes the 4D Mobile session whose ID is passed in the *sessionID* parameter. Since a 4D Mobile session can manage several processes, this command actually requests all the Web processes related to the session to finish their execution. 

#### See also 

[On Web Legacy Close Session database method](on-web-legacy-close-session-database-method.md)  
*Web Sessions Management (Legacy)*  