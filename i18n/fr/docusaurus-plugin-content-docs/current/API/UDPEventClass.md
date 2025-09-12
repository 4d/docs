---
id: UDPEventClass
title: UDPEvent
---

La classe `UDPEvent` fournit des informations sur les événements survenant au cours du cycle de vie d'une socket UDP. Il est généré lorsqu'un [UDPSocket](UDPSocketClass.md) est ouvert et est utilisé dans les callbacks `onData`, `onError`, et `onTerminate`.

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 20 R10  | Classe ajoutée |

</details>

### Objet UDPEvent

Un objet `UDPEvent` est immuable et non-streamable.

Les propriétés suivantes sont disponibles :

|                                                                                                      |
| ---------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPEvent.address.Syntax -->](#address)<br/><!-- INCLUDE #UDPEvent.address.Summary --> |
| [<!-- INCLUDE #UDPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #UDPEvent.data.Summary -->          |
| [<!-- INCLUDE #UDPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPEvent.port.Summary -->          |
| [<!-- INCLUDE #UDPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #UDPEvent.type.Summary -->          |

<!-- REF UDPEvent.address.Desc -->

## .adresse

<!-- REF #UDPEvent.address.Syntax -->**address** : Text<!-- END REF -->

#### Description

La propriété `.address` contient <!-- REF #UDPEvent.address.Summary -->l'adresse IP de la machine distante<!-- END REF -->.

<!-- END REF -->

<!-- REF UDPEvent.data.Desc -->

## .data

<!-- REF #UDPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Description

La propriété `.data` contient <!-- REF #UDPEvent.data.Summary -->les données associées à l'événement<!-- END REF -->. Elle n'est valide que pour les événements de type "data".

<!-- END REF -->

<!-- REF UDPEvent.port.Desc -->

## .port

<!-- REF #UDPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Description

La propriété `.port` contient <!-- REF #UDPEvent.port.Summary -->le numéro de port de la machine distante<!-- END REF -->.

<!-- END REF -->

<!-- REF UDPEvent.type.Desc -->

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