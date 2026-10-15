---
id: UDPEventClass
title: UDPEvent
---

La clase `UDPEvent` ofrece información sobre los eventos que ocurren durante el ciclo de vida de un socket UDP. Se genera cuando se abre un [UDPSocket](UDPSocketClass.md) y se utiliza en las retrollamadas `onData`, `onError`, y `onTerminate`.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R10      | Clase añadida  |

</details>

### Objeto UDPEvent

Un objeto `UDPEvent` es inmutable y no se puede transmitir.

Las siguientes propiedades están disponibles:

|                                                                                                      |
| ---------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #UDPEvent.address.Syntax -->](#address)<br/><!-- INCLUDE #UDPEvent.address.Summary --> |
| [<!-- INCLUDE #UDPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #UDPEvent.data.Summary -->          |
| [<!-- INCLUDE #UDPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #UDPEvent.port.Summary -->          |
| [<!-- INCLUDE #UDPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #UDPEvent.type.Summary -->          |

<!-- REF UDPEvent.address.Desc -->

## .address

<!-- REF #UDPEvent.address.Syntax -->**address** : Text<!-- END REF -->

#### Descripción

La propiedad `.address` contiene <!-- REF #UDPEvent.address.Summary -->la dirección IP de la máquina remota<!-- END REF -->.

<!-- END REF -->

<!-- REF UDPEvent.data.Desc -->

## .data

<!-- REF #UDPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Descripción

La propiedad `.data` contiene <!-- REF #UDPEvent.data.Summary -->los datos asociados con el evento<!-- END REF -->. Sólo es válido para eventos de tipo "data".

<!-- END REF -->

<!-- REF UDPEvent.port.Desc -->

## .port

<!-- REF #UDPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

La propiedad `.port` contiene <!-- REF #UDPEvent.port.Summary -->el número de puerto de la máquina remota<!-- END REF -->.

<!-- END REF -->

<!-- REF UDPEvent.type.Desc -->

## .type

<!-- REF #UDPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### Descripción

La propiedad `.type` contiene <!-- REF #UDPEvent.type.Summary -->el tipo del evento<!-- END REF -->. Los valores posibles son:

- `"data"`: indica que los datos han sido recibidos.
- `"error"`: indica que se ha producido un error durante el UDPSocket.
- `"terminate"`: indica que el UDPSocket está a punto de ser liberado.

<!-- END REF -->

#### Ver también

[UDPSocket](UDPSocketClass.md)