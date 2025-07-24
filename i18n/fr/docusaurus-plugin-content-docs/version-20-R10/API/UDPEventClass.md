---
id: UDPEventClass
title: UDPEvent
---

La classe `UDPEvent` fournit des informations sur les événements survenant au cours du cycle de vie d'une socket UDP. It is generated when a [UDPSocket](UDPSocketClass.md) is opened and is utilized in callbacks `onData`, `onError`, and `onTerminate`.

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R10  | Classe ajoutée |

</details>

### Objet UDPEvent

A `UDPEvent` object is immutable and non-streamable.

Les propriétés suivantes sont disponibles :

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #UDPEvent.data.Summary --> |
| [<!-- INCLUDE #UDPEvent.ip.Syntax -->](#ip)<br/><!-- INCLUDE #UDPEvent.ip.Summary -->       |
| [<!-- INCLUDE #UDPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPEvent.port.Summary --> |
| [<!-- INCLUDE #UDPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #UDPEvent.type.Summary --> |

<!-- REF #UDPEvent.data.Desc -->

## .data

<!-- REF #UDPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Description

The `.data` property contains <!-- REF #UDPEvent.data.Summary -->the data associated with the event<!-- END REF -->. It is only valid for events of type "data".

<!-- END REF -->

<!-- REF #UDPEvent.ip.Desc -->

## .ip

<!-- REF #UDPEvent.ip.Syntax -->**ip** : Text<!-- END REF -->

#### Description

The `.ip` property contains <!-- REF #UDPEvent.ip.Summary -->the IP address of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #UDPEvent.port.Desc -->

## .port

<!-- REF #UDPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Description

The `.port` property contains <!-- REF #UDPEvent.port.Summary -->the port number of the remote machine<!-- END REF -->.

<!-- END REF -->

<!-- REF #UDPEvent.type.Desc -->

## .type

<!-- REF #UDPEvent.type.Syntax -->**type** : Texte<!-- END REF -->

#### Description

La propriété `.type` contient <!-- REF #UDPEvent.type.Summary -->le type d'événement<!-- END REF -->. Valeurs possibles :

- `"data"` : indique que des données ont été reçues.
- `"error"`: indique qu'une erreur est survenue pendant l'UDPSocket.
- `"terminate"` : Indique que l'UDPSocket est sur le point d'être libéré.

<!-- END REF -->

#### Voir également

[UDPSocket](UDPSocketClass.md)