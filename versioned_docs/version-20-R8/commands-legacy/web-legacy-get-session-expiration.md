---
id: web-legacy-get-session-expiration
title: WEB LEGACY GET SESSION EXPIRATION
slug: /commands/web-legacy-get-session-expiration
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Syntax-->**WEB LEGACY GET SESSION EXPIRATION** ( *sessionID* ; *expDate* ; *expTime* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| sessionID | Text | &#8594;  | Session UUID |
| expDate | Date | &#8592; | Date of cookie expiration |
| expTime | Time | &#8592; | Time of cookie expiration |

<!-- END REF-->

#### Compatibility Note 

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Summary-->This command can only be used with **legacy web sessions**, available in databases converted from versions prior to 4D v18 R6\.<!-- END REF--> It returns null date and time values when **scalable web sessions** mode is enabled (recommended in 4D v18 R6 and higher). For more information, please refer to the *Web Sessions Management (Legacy)* section.

#### Description 

The **WEB LEGACY GET SESSION EXPIRATION** command returns the expiration information for the cookie of the session whose UUID you passed in *sessionID*.

The *expDate* parameter receives the expiration date and the *expTime* parameter receives the expiration time of the cookie. 

**Note:** Each time a web request is sent, the expiration date and time of the cookie are reset to a value corresponding to the time of the request+the value of the Web Inactive session timeout. For example:   
*First request, Monday at 1:00*   
 \-> Sends a cookie 4DSID xxxyyy expiration I+24h = Tuesday 01:00  
*Second request, Monday at 1:10*   
 \-> Sends a cookie 4DSID xxxyyy expiration I+24h = Tuesday 01:10  
*Third request, Tuesday at 4:00: cookie expired*  
 \-> Sends a cookie 4DSID aaabbb expiration I+24h = Wednesday 01:00

#### See also 

[WEB Get Current Session ID](web-get-current-session-id.md)  
*Web Sessions Management (Legacy)*  
[WEB SET OPTION](web-set-option.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1207 |
| Thread safe | &check; |


