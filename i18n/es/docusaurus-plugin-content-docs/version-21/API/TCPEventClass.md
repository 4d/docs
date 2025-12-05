---
id: TCPEventClass
title: TCPEvent
---

La clase `TCPEvent` ofrece información sobre los eventos que se producen durante el ciclo de vida de una conexión TCP. Un evento se genera cuando se abre una [TCPConnection](TCPConnectionClass.md) y se utiliza normalmente en retrollamadas tales como `onConnection`, `onData`, `onError` y otras.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                      |
| ----------- | ----------------------------------- |
| 20 R9       | Nuevos atributos `address` y `port` |
| 20 R8       | Clase añadida                       |

</details>

### Objeto TCPEvent

Un objeto `TCPEvent` es inmutable y no se puede transmitir.

Las siguientes propiedades están disponibles:

|                                                                                                      |
| ---------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #TCPEvent.address.Syntax -->](#address)<br/><!-- INCLUDE #TCPEvent.address.Summary --> |
| [<!-- INCLUDE #TCPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #TCPEvent.data.Summary -->          |
| [<!-- INCLUDE #TCPEvent.port.Syntax -->](#port)<br/><!-- INCLUDE #TCPEvent.port.Summary -->          |
| [<!-- INCLUDE #TCPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #TCPEvent.type.Summary -->          |

<!-- REF TCPEvent.address.Desc -->

## .address

<!-- REF #TCPEvent.address.Syntax -->**address** : Text<!-- END REF -->

#### Descripción

La propiedad `.address` contiene <!-- REF #TCPEvent.address.Summary -->la dirección IP de la máquina remota<!-- END REF -->.

<!-- END REF -->

<!-- REF TCPEvent.data.Desc -->

## .data

<!-- REF #TCPEvent.data.Syntax -->**data** : Blob<!-- END REF -->

#### Descripción

La propiedad `.data` contiene <!-- REF #TCPEvent.data.Summary -->los datos asociados al evento<!-- END REF -->. Sólo es válido para eventos de tipo `"data"`.

:::note

Cuando trabaje con conexiones TCP/IP de bajo nivel, tenga en cuenta que no hay garantía de que todos los datos lleguen en un solo paquete. Los datos llegan en orden, pero pueden fragmentarse a través de múltiples paquetes.

:::

<!-- END REF -->

<!-- REF TCPEvent.port.Desc -->

## .port

<!-- REF #TCPEvent.port.Syntax -->**port** : Number<!-- END REF -->

#### Descripción

La propiedad `.port` contiene <!-- REF #TCPEvent.port.Summary -->el número de puerto de la máquina remota<!-- END REF -->.

<!-- END REF -->

<!-- REF TCPEvent.type.Desc -->

## .type

<!-- REF #TCPEvent.type.Syntax -->**type** : Text<!-- END REF -->

#### Descripción

La propiedad `.type` contiene <!-- REF #TCPEvent.type.Summary -->el tipo del evento<!-- END REF -->. Los valores posibles son:

- `"connection"`: indica que una conexión TCP fue establecida con éxito.
- `"data"`: indica que los datos han sido recibidos.
- `"error"`: indica que se ha producido un error durante la TCPConnection.
- `"close"`: indica que la TCPConnection ha sido correctamente cerrada.
- `"terminate"`: indica que el TCPConnection está a punto de ser liberado.

<!-- END REF -->



