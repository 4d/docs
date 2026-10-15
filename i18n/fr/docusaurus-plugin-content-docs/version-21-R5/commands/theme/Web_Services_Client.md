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

Un service Web est un ensemble de fonctions publiées sur un réseau. Ces fonctions peuvent être appelées et utilisées par n'importe quelle application compatible avec les services Web et connectée au réseau. Les services web peuvent prendre en charge toutes sortes de tâches, telles que la supervision de l'acheminement des colis chez un transporteur, le commerce électronique, le suivi des cours boursiers, etc.

L'abonnement aux services Web avec 4D s'effectue facilement à l'aide de l'[Assistant Services Web](https://doc.4d.com/4Dv21/4D/21/Subscribing-to-a-Web-Service-in-4D.300-7676804.en.html). Dans la plupart des cas, cet assistant vous suffira pour pouvoir utiliser des services Web. Toutefois, si vous souhaitez personnaliser certains mécanismes, vous devez utiliser les commandes SOAP client de 4D.

Note : Par convention, les termes « SOAP » et « service Web » ont été utilisés pour distinguer respectivement les noms de commandes (et de constantes) côté serveur et côté client. Ces deux concepts désignent la même technologie.