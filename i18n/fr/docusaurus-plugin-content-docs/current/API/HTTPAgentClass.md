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
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestsCount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freeSocketsCount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

Comme HTTPAgent est un objet partageable, vous pouvez en ajouter un à une classe singleton afin d'utiliser le même agent pour toutes les requêtes adressées au même serveur.

:::

<!-- REF #4D.HTTPAgent.new().Desc -->

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| Paramètres | Type                                             |                             | Description                          |
| ---------- | ------------------------------------------------ | :-------------------------: | ------------------------------------ |
| options    | Object                                           |              ->             | options par défaut pour le HTTPAgent |
| Résultat   | [4D.HTTPAgent](#objet-httpagent) | <- | Nouvel objet HTTPAgent               |

<!-- END REF -->

#### Description

La fonction `4D.HTTPAgent.new()` <!-- REF #4D.HTTPAgent.new().Summary -->crée un objet HTTPAgent partageable avec les *options* définies, et renvoie un objet `4D.HTTPAgent`<!-- END REF -->.

L'objet [`HTTPAgent`](#objet-httpagent) renvoyé est utilisé pour personnaliser les connexions aux serveurs HTTP.

#### Paramètre `options`

Dans le paramètre *options*, passez un objet qui peut contenir les propriétés suivantes (toutes les propriétés sont facultatives) :

:::note

Les options HTTPAgent seront fusionnées avec les [options HTTPRequest](HTTPRequestClass.md#4dhttprequestnew) (les options HTTPRequest sont prioritaires) ; si aucun agent spécifique n'est défini, un agent global est utilisé.

:::

| Propriété              | Type    | Par défaut                                                                                                                                               | Description                                                                            |
| ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| keepAlive              | Boolean | true                                                                                                                                                     | Active le keep-alive de l'agent                                                        |
| maxSockets             | Integer | 65535                                                                                                                                                    | Nombre maximum de sockets par serveur                                                  |
| maxTotalSockets        | Integer | 65535                                                                                                                                                    | Nombre maximum de sockets pour l'agent                                                 |
| timeout                | Real    | undefined                                                                                                                                                | Si défini, délai après lequel une socket inutilisée est fermée                         |
| certificatesFolder     | Folder  | undefined (voir valeur par défaut dans [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Définit le dossier actif des certificats du client pour les requêtes utilisant l'agent |
| minTLSVersion          | Text    | undefined (voir valeur par défaut dans [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Définit la version minimale de TLS pour les requêtes utilisant cet agent               |
| protocol               | Text    | undefined (voir valeur par défaut dans [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocole mis en oeuvre pour les requêtes utilisant l'agent                            |
| validateTLSCertificate | Boolean | undefined (voir valeur par défaut dans [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | validateTLSCertificate pour les requêtes utilisant l'agent                             |

:::note

Vous pouvez effectuer des requêtes vers plusieurs serveurs en utilisant le même agent. Dans ce cas, chaque serveur aura son propre pool de connexions utilisant les mêmes options d'agent.

:::

#### Exemple

Création du HTTPAgent :

```4d
var $options:={}
$options.maxSockets:=5 //5 est le nombre maximum de sockets par serveur
$options.maxTotalSockets:=10 //10 est le nombre maximum de sockets pour l'agent
$options.validateTLSCertificate:=True //Valider le certificat du serveur

var $myAgent:=4D.HTTPAgent.new($options)

```

Envoi d'une requête de vérification de l'heure locale de n'importe quelle ville :

```4d
var $options:={}
$options.method:= "GET"
$options.agent:=$myAgent
var $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris" ; $options) 

```

:::note

Si aucun agent n'est associé à une requête HTTP, un agent global avec des valeurs par défaut est utilisé.

:::

<!-- REF #HTTPAgentClass.options.Desc -->

## .options

<!-- REF #HTTPAgentClass.options.Syntax -->**options** : Object<!-- END REF -->

#### Description

L'objet propriété `.options` contient <!-- REF #HTTPAgentClass.options.Summary -->les options actuellement utilisées par le HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### Description

La propriété `.requestsCount` contient <!-- REF #HTTPAgentClass.requestsCount.Summary -->le nombre de requêtes actuellement traitées par le HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### Description

La propriété `.freeSocketsCount` contient <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->le nombre de sockets libres du `maxSockets` associé au HTTPAgent<!-- END REF -->.

<!-- END REF -->
