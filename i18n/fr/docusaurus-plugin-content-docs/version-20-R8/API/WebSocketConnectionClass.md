---
id: WebSocketConnectionClass
title: WebSocketConnection
---

L'API de la classe `WebSocketConnection` vous permet de gérer les connexions WebSocket, une fois qu'elles ont été établies à l'aide de la classe [`WebSocketServer`](WebSocketServerClass.md).

:::info

Pour une vue d'ensemble et quelques exemples de la mise en œuvre du serveur WebSocket dans 4D, veuillez vous référer à la classe [`WebSocketServer`](WebSocketServerClass.md).

:::

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

### Objet WebSocketConnection

Un objet `WebSocketConnection` est automatiquement créé lorsque la fonction de callback [`WSHandler.onConnection`](WebSocketServerClass.md#wsshandler-parameter) de l'objet [WebSocketServer](WebSocketServerClass.md#4dwebsocketservernew) renvoie un objet [`connectionHandler`](WebSocketServerClass.md#connectionhandler-object).

Les objets WebSocketConnection offrent les propriétés et fonctions suivantes :

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebSocketConnectionClass.handler.Syntax -->](#handler)<br/><!-- INCLUDE #WebSocketConnectionClass.handler.Summary -->               |
| [<!-- INCLUDE #WebSocketConnectionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #WebSocketConnectionClass.id.Summary -->                              |
| [<!-- INCLUDE #WebSocketConnectionClass.send().Syntax -->](#send\(\))<br/><!-- INCLUDE #WebSocketConnectionClass.send().Summary -->                |
| [<!-- INCLUDE #WebSocketConnectionClass.status.Syntax -->](#status)<br/><!-- INCLUDE #WebSocketConnectionClass.status.Summary -->                  |
| [<!-- INCLUDE #WebSocketConnectionClass.terminate().Syntax -->](#terminate\(\))<br/><!-- INCLUDE #WebSocketConnectionClass.terminate().Summary --> |
| [<!-- INCLUDE #WebSocketConnectionClass.wss.Syntax -->](#wss)<br/><!-- INCLUDE #WebSocketConnectionClass.wss.Summary -->                           |

<!-- REF #WebSocketConnectionClass.handler.Desc -->

## .handler

<!-- REF #WebSocketConnectionClass.handler.Syntax -->**.handler** : Object<!-- END REF -->

#### Description

La propriété `.handler` contient <!-- REF #WebSocketConnectionClass.handler.Summary -->l'accesseur qui récupère l'objet `connectionHandler` utilisé pour initier la connexion<!-- END REF -->.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.id.Desc -->

## .id

<!-- REF #WebSocketConnectionClass.id.Syntax -->**.id** : Integer<!-- END REF -->

#### Description

La propriété `.id` contient <!-- REF #WebSocketConnectionClass.id.Summary -->l'identifiant unique de la connexion<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Desc -->

## .send()

<!-- REF #WebSocketConnectionClass.send().Syntax -->**.send**( *message* : Text )<br/>**.send**( *message* : Blob )<br/>**.send**( *message* : Object )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.send().Params -->

| Paramètres | Type                 |     | Description          |
| ---------- | -------------------- | :-: | -------------------- |
| message    | Text / Blob / Object |  -> | Le message à envoyer |

<!-- END REF -->

#### Description

La fonction `.send()` <!-- REF #WebSocketConnectionClass.send().Summary -->envoie *message* au client<!-- END REF -->.

Les contenus suivants sont envoyés en fonction du type de *message* :

| Type   | Contenu                                                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Text   | Texte en UTF-8                                                                                                                            |
| Blob   | Données binaires                                                                                                                          |
| Object | Texte en JSON UTF-8 (même résultat qu'avec [`JSON Stringify`](https://doc.4d.com/4dv20/help/command/en/page1217.html)) |

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.status.Desc -->

## .status

<!-- REF #WebSocketConnectionClass.status.Syntax -->**.status** : Text<!-- END REF -->

#### Description

La propriété `.status` contient <!-- REF #WebSocketConnectionClass.status.Summary -->le statut de la connexion (peut être "Closing", "Closed" ou "Connected")<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Desc -->

## .terminate()

<!-- REF #WebSocketConnectionClass.terminate().Syntax -->**.terminate**( { *code* : Integer ; *message* : Text } )<!-- END REF -->

<!-- REF #WebSocketConnectionClass.terminate().Params -->

| Paramètres | Type    |     | Description                                                                                             |
| ---------- | ------- | :-: | ------------------------------------------------------------------------------------------------------- |
| code       | Integer |  -> | Code d'erreur envoyé au client (doit être > 3000, sinon le message n'est pas envoyé) |
| message    | Text    |  -> | Message d'erreur envoyé au client                                                                       |

<!-- END REF -->

#### Description

La fonction `.terminate()` <!-- REF #WebSocketConnectionClass.terminate().Summary -->force la fermeture de la connexion<!-- END REF -->.

Un *code* et un *message* peuvent être envoyés au client pendant la fermeture pour indiquer la raison de la fermeture.

<!-- END REF -->

<!-- REF #WebSocketConnectionClass.wss.Desc -->

## .wss

<!-- REF #WebSocketConnectionClass.wss.Syntax -->**.wss** : 4D.WebSocketServer<!-- END REF -->

#### Description

La propriété `.wss` contient <!-- REF #WebSocketConnectionClass.wss.Summary -->l'objet parent [`WebSocketServer`](WebSocketServerClass.md#4dwebsocketservernew) de la connexion<!-- END REF -->.

Cette propriété est en lecture seule.

<!-- END REF -->
