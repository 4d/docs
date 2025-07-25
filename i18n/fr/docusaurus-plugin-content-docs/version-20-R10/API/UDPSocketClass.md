---
id: UDPSocketClass
title: UDPSocket
---

La classe `UDPSocket` vous permet d'envoyer et de recevoir des paquets UDP. UDP (User Datagram Protocol) est un protocole facile à implémenter pour l'envoi de données. Il est plus rapide et plus simple que TCP (seulement 8 octets d'en-tête par opposition à au moins 20 octets dans TCP), mais il n'offre pas le même niveau de fiabilité. Il est utile pour les applications où les données doivent arriver rapidement à leur destination. Cependant, elle ne permet pas de vérifier la livraison, ni de contrôler les erreurs ou de récupérer les données qui n'ont pas été livrées correctement.

La classe `UDPSocket` est disponible dans le class store `4D`. Vous pouvez créer une connexion UDP en utilisant la fonction [4D.UDPSocket.new()](#4dudpsocketnew), qui retourne un objet [UDPSocket](#udpsocket-object).

Grâce à l'objet standard 4D *refcounting*, un UDPSocket est automatiquement libéré lorsqu'il n'est plus référencé, i. , quand il n'y a plus de références à elles en mémoire. Cela se produit généralement, par exemple, à la fin de l'exécution d'une méthode pour les variables locales. Consequently, the associated resources are properly cleaned up without requiring explicit closure. However, if you want to "force" the closure of a socket at any moment, [**nullify** its references by setting them to **Null**](../Concepts/dt_object.md#resources).

:::info 4DTCPUDPLog.txt file

For debugging and monitoring, you can use the [4DTCPUDPLog.txt log file] that records events related to UDP sockets. Events include data transmission, errors, and connection lifecycle information.

:::

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R10  | Classe ajoutée |

</details>

### Exemple

### Objet UDPSocket

Un objet UDPSocket est immuable, non streamable.

Les objets UDPSocket offrent les propriétés et fonctions suivantes :

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPSocket.errors.Syntax -->](#errors)<br/><!-- INCLUDE #UDPSocket.errors.Summary --> |
| [<!-- INCLUDE #UDPSocket.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPSocket.port.Summary -->       |
| [<!-- INCLUDE #UDPSocket.send().Syntax -->](#send)<br/><!-- INCLUDE #UDPSocket.send().Summary -->   |

<!-- REF 4D.UDPSocket.new().Desc -->

## 4D.UDPSocket.new()

<!-- REF #4D.UDPSocket.new().Syntax -->**4D.UDPSocket.new**() : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *options* : Object ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ) : 4D.UDPSocket<br/>**4D.UDPSocket.new**( *port* : Integer ; *options* : Object ) : 4D.UDPSocket<!-- END REF -->

<!-- REF #4D.UDPSocket.new().params -->

| Paramètres | Type      |                             | Description                                                                                                 |
| ---------- | --------- | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| port       | Integer   | ->                          | Port local utilisé pour le socket UDP (0 ou omis = trouver un port inutilisé à utiliser) |
| options    | Object    | ->                          | Configuration [options](#options-parameter) pour le socket                                                  |
| Résultat   | UDPSocket | <- | Nouvel objet UDPSocket                                                                                      |

<!-- END REF -->

#### Description

The `4D.UDPSocket.new()` function <!-- REF #4D.UDPSocket.new().Summary -->creates a new UDP socket using the defined *options* (if any) on the specified *port* (if any) or on a random unused port, and returns a `4D.UDPSocket` object<!-- END REF -->.

#### Paramètre `options`

In the *options* parameter, you can pass an object that contains the following properties:

| Propriété   | Type    | Description                                         | Par défaut |
| ----------- | ------- | --------------------------------------------------- | ---------- |
| onData      | Formula | Callback déclenchée lors de la réception de données | Undefined  |
| onError     | Formula | Callback déclenchée en cas d'erreur                 | Undefined  |
| onTerminate | Formula | Callback triggered when the port is released        | Undefined  |

#### Fonctions de callback

Toutes les fonctions de callback reçoivent deux paramètres :

| Paramètres | Type                                    | Description                                                |
| ---------- | --------------------------------------- | ---------------------------------------------------------- |
| $socket    | [`UDPSocket` object](#udpsocket-object) | The current UDPSocket instance.            |
| $event     | [`UDPEvent` object](#udpevent-object)   | Contient des informations sur l'événement. |

**Séquence des appels de callbacks :**

1. `onData` est déclenchée à chaque fois que des données sont reçues.
2. `onError` est déclenchée en cas d'erreur.
3. `onTerminate` is always triggered just before the port is released (socket is closed or an error occured).

#### UDPEvent object

A [`UDPEvent`](UDPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->

<!-- REF UDPSocket.errors.Desc -->

## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

The `.errors` property contains <!-- REF #UDPSocket.errors.Summary -->a collection of error objects associated with the socket<!-- END REF -->. Chaque objet erreur comprend le code d'erreur, une description et la signature du composant qui a provoqué l'erreur.

| Propriété |                                                                                           | Type       | Description                                            |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------ |
| errors    |                                                                                           | Collection | Pile d'erreurs 4D en cas d'erreur                      |
|           | [].errCode            | Number     | Code d'erreur 4D                                       |
|           | [].message            | Text       | Description de l'erreur 4D                             |
|           | [].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur |

<!-- END REF -->

<!-- REF UDPSocket.port.Desc -->

## .port

<!-- REF #UDPSocket.port.Syntax -->**port** : Number<!-- END REF -->

#### Description

The `.port` property contains <!-- REF #UDPSocket.port.Summary -->the port number to listen to<!-- END REF -->. Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF UDPSocket.send().Desc -->

## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->

| Paramètres | Type    |    | Description                                          |
| ---------- | ------- | -- | ---------------------------------------------------- |
| data       | Blob    | -> | Données à envoyer                                    |
| hostName   | Text    | -> | Name or IP address of server                         |
| remotePort | Integer | -> | Remote port to connect to (0=any) |

<!-- END REF -->

#### Description

The `send()` function <!-- REF #UDPSocket.send().Summary -->sends *data* to the remote *hostName* server on the specified *remotePort*<!-- END REF -->.

*hostName* is the name or IP address of the server where the data will be sent.

*remotePort* is the number of the port to be connected to. If you pass 0, any available port will be used.

<!-- END REF -->

#### Voir également

[UDPEvent](UDPEventClass.md)