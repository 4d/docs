---
id: TCPListenerClass
title: TCPListener
---

La classe `TCPListener` vous permet de créer et de configurer un serveur TCP dans 4D. Une fois le listener TCP instancié, vous pouvez recevoir des connexions TCP clientes et communiquer à l'aide de n'importe quel protocole prenant en charge TCP.

La classe `TCPListener` est disponible dans le class store `4D`. Vous pouvez créer un serveur TCP à l'aide de la fonction [4D.TCPListener.new()](#4dtcplistenernew), qui renvoie un [objet TCPListener](#tcplistener-object).

Toutes les fonctions de la classe `TCPListener` sont thread-safe.

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R9   | Classe ajoutée |

</details>

### Exemple

```4d

property listener : 4D.TCPListener

Class constructor($port : Integer)
	
	This.listener:=4D.TCPListener.new($port; This)
		
Function terminate()
	
	This.listener.terminate()
	
Function onConnection($listener : 4D.TCPListener ; $event : 4D.TCPEvent)->$result
    	//une fois connecté, démarre un serveur pour gérer la communication
	If($event.address # "192.168.@") 
		$result:=Null //dans certains cas, vous pouvez rejeter la connexion
	Else
		$result:=cs.MyAsyncTCPConnection.new(This) //voir classe TCPConnection
	End if
	
Function onError($listener : 4D.TCPListener ; $event : 4D.TCPEvent)
	
Function onTerminate($listener : 4D.TCPListener ; $event : 4D.TCPEvent)

```

:::note

Voir [l'exemple de la classe TCPConnection](./TCPConnectionClass.md#asynchronous-example) pour une description de la classe utilisateur MyAsyncTCPConnexion.

:::

### TCPListener Object

Un objet TCPListener est un objet partagé.

Les objets TCPListener offrent les propriétés et fonctions suivantes :

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPListener.errors.Syntax -->](#errors)<br/><!-- INCLUDE #TCPListener.errors.Summary -->              |
| [<!-- INCLUDE #TCPListener.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPListener.port.Summary -->                    |
| [<!-- INCLUDE #TCPListener.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #TCPListener.terminate().Summary --> |

<!-- REF #4D.TCPListener.new().Desc -->

## 4D.TCPListener.new()

<!-- REF #4D.TCPListener.new().Syntax -->**4D.TCPListener.new**( *port* : Number ; *options* : Object ) : 4D.TCPListener<!-- END REF -->

<!-- REF #4D.TCPListener.new().params -->

| Paramètres | Type                           |                             | Description                                                |
| ---------- | ------------------------------ | --------------------------- | ---------------------------------------------------------- |
| port       | Number                         | ->                          | Port TCP à écouter                                         |
| options    | Object                         | ->                          | [options](#options-parameter) de configuration du listener |
| Résultat   | 4D.TCPListener | <- | Nouvel objet TCPListener                                   |

<!-- END REF -->

#### Description

La fonction `4D.TCPListener.new()` <!-- REF #4D.TCPListener.new().Summary -->crée un nouveau serveur TCP écoutant le *port* spécifié en utilisant les *options* définies, et renvoie un objet `4D.TCPListener`<!-- END REF -->.

#### Paramètre `options`

Dans le paramètre *options*, passez un objet pour configurer le listener et toutes les `TCPConnections` qu'il crée :

| Propriété    | Type    | Description                                                                                                                                                                                                                                                                                                                                                          | Par défaut |
| ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| onConnection | Formula | Callback appelée lorsqu'une nouvelle connexion est établie. La formule reçoit deux paramètres (*$listener* et *$event*, voir ci-dessous) et doit retourner soit null/undefined pour empêcher la connexion, soit un objet *option* qui sera utilisé pour créer l'objet [`TCPConnection`](./TCPConnectionClass.md). | Undefined  |
| onError      | Formula | Callback déclenchée en cas d'erreur. La formule reçoit l'objet `TCPListener` dans *$listener*                                                                                                                                                                                                                                                        | Undefined  |
| onTerminate  | Formula | Callback déclenchée juste avant la fermeture du TCPListener. La formule reçoit l'objet `TCPListener` dans *$listener*                                                                                                                                                                                                                                | Undefined  |

#### Fonctions de callback

Les fonctions de callback peuvent recevoir jusqu'à deux paramètres :

| Paramètres | Type                                       | Description                                                |
| ---------- | ------------------------------------------ | ---------------------------------------------------------- |
| $listener  | [objet `TCPListener`](#tcplistener-object) | L'instance courante du listener TCP.       |
| $event     | [objet `TCPEvent`](#tcpevent-object)       | Contient des informations sur l'événement. |

**Séquence des appels de callbacks :**

1. `onConnection` est déclenchée à chaque fois qu'une connexion est établie.
2. `onError` est déclenchée en cas d'erreur.
3. `onTerminate` est toujours déclenchée juste avant qu'une connexion soit terminée.

#### Objet TCPEvent

Un objet [`TCPEvent`](TCPEventClass.md) est renvoyé lorsqu'une [fonction de callback](#callback-functions) est appelée.

<!-- END REF -->

<!-- REF #TCPListener.errors.Desc -->

## .errors

<!-- REF #TCPListener.errors.Syntax -->**errors** : Collection<!-- END REF -->

#### Description

La propriété `.errors` contient <!-- REF #TCPListener.errors.Summary -->une collection d'objets erreur associés à la connexion<!-- END REF -->. Chaque objet erreur comprend le code d'erreur, une description et la signature du composant qui a provoqué l'erreur.

| Propriété |                                                                                           | Type       | Description                                            |
| --------- | ----------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------ |
| errors    |                                                                                           | Collection | Pile d'erreurs 4D en cas d'erreur                      |
|           | [].errCode            | Number     | Code d'erreur 4D                                       |
|           | [].message            | Text       | Description de l'erreur 4D                             |
|           | [].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur |

<!-- END REF -->

<!-- REF #TCPListener.port.Desc -->

## .port

<!-- REF #TCPListener.port.Syntax -->**port** : Number<!-- END REF -->

#### Description

La propriété `.port` contient <!-- REF #TCPListener.port.Summary -->le numéro de port de la machine<!-- END REF -->. Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF #TCPListener.terminate().Desc -->

## .terminate()

<!-- REF #TCPListener.terminate().Syntax -->**.terminate**()<!-- END REF -->

<!-- REF #TCPListener.terminate().params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `terminate()` <!-- REF #TCPListener.terminate().Summary -->ferme le listener et libère le port<!-- END REF -->.

<!-- END REF -->

