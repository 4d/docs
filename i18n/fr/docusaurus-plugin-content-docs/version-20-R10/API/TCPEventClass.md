---
id: TCPEventClass
title: TCPEvent
---

La classe `TCPEvent` fournit des informations sur les événements survenant au cours du cycle de vie d'une connexion TCP. Un événement est généré lorsqu'une [TCPConnection](TCPConnectionClass.md) est ouverte et est typiquement utilisé dans des callbacks tels que `onConnection`, `onData`, `onError`, et d'autres.

<details><summary>Historique</summary>

| Release | Modifications                     |
| ------- | --------------------------------- |
| 20 R9   | Nouveaux attributs `ip` et `port` |
| 20 R8   | Classe ajoutée                    |

</details>

### Objet TCPEvent

Un objet `TCPEvent` est immutable et non-streamable.

Les propriétés suivantes sont disponibles :

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #TCPEvent.data.Summary --> |
| [<!-- INCLUDE #TCPEvent.ip.Syntax -->](#ip)<br/><!-- INCLUDE #TCPEvent.ip.Summary -->       |
| [<!-- INCLUDE #TCPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPEvent.port.Summary --> |
| [<!-- INCLUDE #TCPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #TCPEvent.type.Summary --> |

<!-- REF #TCPEvent.data.Desc -->

## .data

<!-- REF #TCPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Description

La propriété `.data` contient <!-- REF #TCPEvent.data.Summary -->les données associées à l'événement<!-- END REF -->. Elle n'est valide que pour les événements de type `"data"`.

:::note

Lorsque vous travaillez avec des connexions TCP/IP de bas niveau, n'oubliez pas qu'il n'y a aucune garantie que toutes les données arrivent en un seul paquet. Les données arrivent dans l'ordre mais peuvent être fragmentées en plusieurs paquets.

:::

<!-- END REF -->

<!-- REF #TCPEvent.ip.Desc -->

## .ip

<!-- REF #TCPEvent.ip.Syntax -->**ip** : Text<!-- END REF -->

#### Description

La propriété `.ip` contient <!-- REF #TCPEvent.ip.Summary -->l'adresse IP de la machine distante<!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPEvent.port.Desc -->

## .port

<!-- REF #TCPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Description

La propriété `.port` contient <!-- REF #TCPEvent.port.Summary -->le numéro de port de la machine distante<!-- END REF -->.

<!-- END REF -->

<!-- REF #TCPEvent.type.Desc -->

## .type

<!-- REF #TCPEvent.type.Syntax -->**type** : Texte<!-- END REF -->

#### Description

La propriété `.type` contient <!-- REF #TCPEvent.type.Summary -->le type d'événement<!-- END REF -->. Valeurs possibles :

- `"connection"` : indique qu'une connexion TCP a été établie avec succès.
- `"data"` : indique que des données ont été reçues.
- `"error"`: indique qu'une erreur est survenue pendant la TCPConnection.
- `"close"` : indique que la connexion TCP a été correctement fermée.
- `"terminate"` : indique que la connexion TCP est sur le point d'être libérée.

<!-- END REF -->



