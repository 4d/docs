---
id: HTTPAgentClass
title: HTTPAgent
---

La classe `HTTPAgent` vous permet de manipuler des [objets `HTTPAgent`](#objet-httpagent) qui peuvent être utilisés pour gérer la persistance et la réutilisation des connexions aux serveurs en utilisant la classe [HTTPRequest](HTTPRequestClass.md).

La classe `HTTPAgent` est disponible dans le class store `4D`. Vous pouvez créer un nouvel objet [`HTTPAgent`](#httpagent-object) en utilisant la fonction [4D.HTTPAgent.new()](#4dhttpagentnew).

Si aucun agent n'est associé à une requête HTTP, un agent global avec des valeurs par défaut est utilisé. L'agent par défaut est la forme la plus simple d'agent HTTP, adaptée aux cas d'utilisation de base. Il est recommandé d'utiliser des agents personnalisés pour mieux contrôler, au niveau de l'agent plutôt que pour chaque requête HTTP, des aspects spécifiques de la connexion tels que les paramètres keep-alive, les délais d'attente ou les configurations TLS/SSL.

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R6   | Classe ajoutée |

</details>

### Objet HTTPAgent

Un objet HTTPAgent est un objet partageable.

Les objets HTTPAgent fournissent les propriétés et fonctions suivantes :

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPAgentClass.options.Syntax -->](#options)<br/><!-- INCLUDE #HTTPAgentClass.options.Summary -->                            |
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestscount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freesocketscount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

Comme HTTPAgent est un objet partageable, vous pouvez en ajouter un à une classe singleton afin d'utiliser le même agent pour toutes les requêtes adressées au même serveur.

:::

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| Paramètres | Type                                              |                             | Description                       |
| ---------- | ------------------------------------------------- | :-------------------------: | --------------------------------- |
| options    | Object                                            |              ->             | default options for the HTTPAgent |
| Résultat   | [4D.HTTPAgent](#httpagent-object) | <- | New HTTPAgent object              |

<!-- END REF -->

#### Description

The `4D.HTTPAgent.new()` function <!-- REF #4D.HTTPAgent.new().Summary -->creates a shareable HTTPAgent object with the defined *options*, and returns a `4D.HTTPAgent` object<!-- END REF -->.

The returned [`HTTPAgent object`](#httpagent-object) is used to customize connections to HTTP servers.

#### Paramètre `options`

In the *options* parameter, pass an object that can contain the following properties (all the properties are optional):

:::note

HTTPAgent options will be merged with [HTTPRequest options](HTTPRequestClass.md#4dhttprequestnew) (HTTPRequest options take precedence); if no specific agent is defined, a global agent is used.

:::

| Propriété              | Type    | Par défaut                                                                                                                                        | Description                                                                 |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| keepAlive              | Boolean | true                                                                                                                                              | Activates keep alive for the agent                                          |
| maxSockets             | Integer | 65535                                                                                                                                             | Maximum number of sockets per server                                        |
| maxTotalSockets        | Integer | 65535                                                                                                                                             | Maximum number of sockets for the agent                                     |
| timeout                | Real    | undefined                                                                                                                                         | If defined, timeout after which an unused socket is closed                  |
| certificatesFolder     | Folder  | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the active client certificates folder for the requests using the agent |
| minTLSVersion          | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the minimum version of TLS for the requests using this agent           |
| protocol               | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocol used for the requests using the agent                              |
| validateTLSCertificate | Boolean | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | validateTLSCertificate for the requests using the agent                     |

:::note

You can request multiple servers using the same agent. In that case, each server will have its own pool of connections using the same agent options.

:::

#### Exemple

Creating the HTTPAgent:

```4d
var $options:={}
$options.maxSockets:=5 //5 is the maximum number of sockets per server
$options.maxTotalSockets:=10 //10 is the maximum number of sockets for the agent
$options.validateTLSCertificate:=True //To validate the sever's certificate

var $myAgent:=4D.HTTPAgent.new($options)

```

Sending a request to check the local time of any city:

```4d
var $options:={}
$options.method:="GET"
$options.agent:=$myAgent
var $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) 

```

:::note

When no agent is associated to an HTTPRequest, a global agent with default values is used.

:::

<!-- REF #HTTPAgentClass.options.Desc -->

## .options

<!-- REF #HTTPAgentClass.options.Syntax -->**options** : Object<!-- END REF -->

#### Description

The `.options` property object contains <!-- REF #HTTPAgentClass.options.Summary -->the current used options of the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### Description

The `.requestsCount` property contains <!-- REF #HTTPAgentClass.requestsCount.Summary -->the number of requests currently handled by the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### Description

The `.freeSocketsCount` property contains <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->the number of free sockets from `maxSockets` associated with the HTTPAgent<!-- END REF -->.

<!-- END REF -->


