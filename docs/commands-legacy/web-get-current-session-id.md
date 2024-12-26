---
id: web-get-current-session-id
title: WEB Get Current Session ID
slug: /commands/web-get-current-session-id
displayed_sidebar: docs
---

<!--REF #_command_.WEB Get Current Session ID.Syntax-->**WEB Get Current Session ID**  : Text<!-- END REF-->
<!--REF #_command_.WEB Get Current Session ID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Session UUID |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Get Current Session ID.Summary-->The **WEB Get Current Session ID** command returns the ID of the session open for the Web request.<!-- END REF--> This ID is generated automatically by 4D as an UUID. 

If this command is called outside of the context of a Web session, it returns an empty string "". 

#### See also 

[WEB LEGACY GET SESSION EXPIRATION](web-legacy-get-session-expiration.md)  
*Web Sessions Management (Legacy)*  

#### Properties

|  |  |
| --- | --- |
| Command number | 1162 |
| Thread safe | &check; |


