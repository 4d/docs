---
id: web-is-secured-connection
title: WEB Is secured connection
slug: /commands/web-is-secured-connection
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is secured connection.Syntax-->**WEB Is secured connection**  : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is secured connection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = the web connection is secured. False = the web connection is not secured. |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Is secured connection.Summary-->The **WEB Is secured connection** command returns a Boolean indicating if the 4D Web server connection was done in secured mode through TLS/SSL (the request starts with “https:” instead of “http:”).<!-- END REF-->

* If the connection is made through TLS or SSL, the function returns True.
* If the connection is made in a non-secured mode, the function returns False.

**Note:** For more information on the TLS protocol, refer to the [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) section. 

This command allows, for example, denying connections made in a non-secured mode (if any). 

#### See also 

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 698 |
| Thread safe | &check; |
| Forbidden on the server ||


