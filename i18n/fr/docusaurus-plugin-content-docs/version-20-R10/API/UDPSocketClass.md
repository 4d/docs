---
id: UDPSocketClass
title: UDPSocket
---

La classe `UDPSocket` vous permet d'envoyer et de recevoir des paquets UDP. UDP (User Datagram Protocol) est un protocole facile à implémenter pour l'envoi de données. Il est plus rapide et plus simple que TCP (seulement 8 octets d'en-tête par opposition à au moins 20 octets dans TCP), mais il n'offre pas le même niveau de fiabilité. Il est utile pour les applications où les données doivent arriver rapidement à leur destination. Cependant, elle ne permet pas de vérifier la livraison, ni de contrôler les erreurs ou de récupérer les données qui n'ont pas été livrées correctement.

La classe `UDPSocket` est disponible dans le class store `4D`. Vous pouvez créer une connexion UDP en utilisant la fonction [4D.UDPSocket.new()](#4dudpsocketnew), qui retourne un objet [UDPSocket](#udpsocket-object).

Grâce au *refcounting* des objets 4D standard, un socket UDPSocket est automatiquement libéré lorsqu'il n'est plus référencé, c'est-à-dire lorsqu'il n'y a plus de références vers lui en mémoire. Cela se produit généralement, par exemple, à la fin de l'exécution d'une méthode pour les variables locales. Par conséquent, les ressources associées sont correctement refermées sans qu'il soit nécessaire de procéder à une clôture explicite. Cependant, si vous voulez "forcer" la fermeture d'un socket à tout moment, [**nullifiez** ses références en les mettant à **Null**](../Concepts/dt_object.md#resources).

:::info Fichier 4DTCPUDPLog.txt

For debugging and monitoring, you can use the [4DTCPUDPLog.txt log file](../Debugging/debugLogFiles.md#4dtcpudplogtxt) that records events related to UDP sockets. Ces événements comprennent la transmission de données, les erreurs et les informations sur le cycle de vie de la connexion.

:::

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R10  | Classe ajoutée |

</details>

### Exemple

### Objet UDPSocket

Un objet UDPSocket est non-modifiable (*immutable*) et non *streamable*.

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

La fonction `4D.UDPSocket.new()` <!-- REF #4D.UDPSocket.new().Summary -->crée un nouveau socket UDP en utilisant les *options* définies (le cas échéant) sur le *port* spécifié (le cas échéant) ou sur un port aléatoire inutilisé, et renvoie un objet `4D.UDPSocket`<!-- END REF -->.

#### Paramètre `options`

Dans le paramètre *options*, vous pouvez passer un objet qui contient les propriétés suivantes :

| Propriété   | Type    | Description                                         | Par défaut |
| ----------- | ------- | --------------------------------------------------- | ---------- |
| onData      | Formula | Callback déclenchée lors de la réception de données | Undefined  |
| onError     | Formula | Callback déclenchée en cas d'erreur                 | Undefined  |
| onTerminate | Formula | Callback déclenchée lorsque le port est libéré      | Undefined  |

#### Fonctions de callback

Toutes les fonctions de callback reçoivent deux paramètres :

| Paramètres | Type                                   | Description                                                |
| ---------- | -------------------------------------- | ---------------------------------------------------------- |
| $socket    | [Objet `UDPSocket`](#udpsocket-object) | L'instance UDPSocket courante.             |
| $event     | [Objet `UDPEvent`](#udpevent-object)   | Contient des informations sur l'événement. |

**Séquence des appels de callbacks :**

1. `onData` est déclenchée à chaque fois que des données sont reçues.
2. `onError` est déclenchée en cas d'erreur.
3. `onTerminate` est toujours déclenchée juste avant que le port soit libéré (le socket est fermé ou une erreur s'est produite).

#### Objet UDPEvent

Un objet [`UDPEvent`](UDPEventClass.md) est retourné lorsqu'une [fonction de callback](#callback-functions) est appelée.

<!-- END REF -->

<!-- REF UDPSocket.errors.Desc -->

## .errors

<!-- REF #UDPSocket.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

La propriété `.errors` contient <!-- REF #UDPSocket.errors.Summary -->une collection d'objets d'erreur associés au socket<!-- END REF -->. Chaque objet erreur comprend le code d'erreur, une description et la signature du composant qui a provoqué l'erreur.

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

La propriété `.port` contient <!-- REF #UDPSocket.port.Summary -->le numéro du port à écouter<!-- END REF -->. Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF UDPSocket.send().Desc -->

## .send()

<!-- REF #UDPSocket.send().Syntax -->**.send**( *data* : Blob ; *hostName* : Text ; *remotePort* : Integer )<!-- END REF -->

<!-- REF #UDPSocket.send().params -->

| Paramètres | Type    |    | Description                                                              |
| ---------- | ------- | -- | ------------------------------------------------------------------------ |
| data       | Blob    | -> | Données à envoyer                                                        |
| hostName   | Text    | -> | Nom ou adresse IP du serveur                                             |
| remotePort | Integer | -> | Port distant auquel se connecter (0=n'importe lequel) |

<!-- END REF -->

#### Description

La fonction `send()` <!-- REF #UDPSocket.send().Summary -->envoie des *data* au serveur distant *hostName* sur le *remotePort* spécifié<!-- END REF -->.

*hostName* est le nom ou l'adresse IP du serveur où les données seront envoyées.

*remotePort* est le numéro du port auquel se connecter. Passez 0 pour utiliser n'importe quel port disponible.

<!-- END REF -->

#### Voir également

[UDPEvent](UDPEventClass.md)