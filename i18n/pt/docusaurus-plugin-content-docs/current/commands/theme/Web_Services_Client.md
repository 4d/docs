---
id: Web_Services_Client_theme
title: Web Services (Client)
sidebar_label: Web Services (Client)
slug: /commands/theme/Web-Services-Client
---

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.WEB SERVICE AUTHENTICATE.Syntax -->](../../commands/web-service-authenticate)<br/>   |
| [<!-- INCLUDE #_command_.WEB SERVICE CALL.Syntax -->](../../commands/web-service-call)<br/>                   |
| [<!-- INCLUDE #_command_.WEB SERVICE Get info.Syntax -->](../../commands/web-service-get-info)<br/>           |
| [<!-- INCLUDE #_command_.WEB SERVICE GET RESULT.Syntax -->](../../commands/web-service-get-result)<br/>       |
| [<!-- INCLUDE #_command_.WEB SERVICE SET OPTION.Syntax -->](../../commands/web-service-set-option)<br/>       |
| [<!-- INCLUDE #_command_.WEB SERVICE SET PARAMETER.Syntax -->](../../commands/web-service-set-parameter)<br/> |

A Web Service is a set of functions published on a network. These functions can be called and used by any application compatible with Web Services and connected to the network. Web Services can carry out all types of tasks, such as supervising the routing of packages at a transporter’s, e-commerce, monitoring market values, etc.

Subscription to Web Services with 4D is easy to carry out using the [Web Services Wizard](https://doc.4d.com/4Dv21/4D/21/Subscribing-to-a-Web-Service-in-4D.300-7676804.en.html). In most cases, this Wizard will be sufficient for you to be able to use Web Services. However, if you want to customize certain mechanisms, you must use the client SOAP commands of 4D.

Note: By convention, the terms “SOAP” and “Web Service” have been used to differentiate between command (and constant) names on the server and client side, respectively. These two concepts refer to the same technology.