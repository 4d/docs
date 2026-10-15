---
id: Web_Services_Server_theme
title: Web Services (Server)
sidebar_label: Web Services (Server)
slug: /commands/theme/Web-Services-Server
---

|                                                                                                             |
| ----------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.SOAP DECLARATION.Syntax -->](../../commands/soap-declaration)<br/>                 |
| [<!-- INCLUDE #_command_.SOAP Get info.Syntax -->](../../commands/soap-get-info)<br/>                       |
| [<!-- INCLUDE #_command_.SOAP REJECT NEW REQUESTS.Syntax -->](../../commands/soap-reject-new-requests)<br/> |
| [<!-- INCLUDE #_command_.SOAP Request.Syntax -->](../../commands/soap-request)<br/>                         |
| [<!-- INCLUDE #_command_.SOAP SEND FAULT.Syntax -->](../../commands/soap-send-fault)<br/>                   |

Publication of Web Services with 4D is carried out easily using [options in the method properties](../../Project/project-method-properties.md#web-services). In most cases, this operation will be sufficient to enable you to publish Web Services. However, if you want to customize certain mechanisms, use data arrays, etc., you must use the server SOAP commands of 4D.

Note: By convention, the terms “SOAP” and “Web Service” have been used to differentiate between command (and constant) names on the server and client side, respectively. These two concepts refer to the same technology.