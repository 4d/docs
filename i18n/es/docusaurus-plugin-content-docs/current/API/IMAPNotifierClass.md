---
id: IMAPNotifierClass
title: IMAPNotifier
---

La clase `IMAPNotifier` permite gestionar las notificaciones IMAP IDLE para un buzón seleccionado.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R3       | Clase añadida  |

</details>

La clase `IMAPNotifier` está disponible en el class store `4D`.

Un objeto `IMAPNotifier` está asociado a un [transportador IMAP](./IMAPTransporterClass.md#imap-transporter-object) y ofrece acceso a la gestión de notificaciones del buzón.

Todas las funciones de clase `IMAPNotifier` son hilo seguro.

:::tip Entradas de blog relacionadas

[Notificaciones instantáneas por correo electrónico con IMAP Transporter](https://blog.4d.com/instant-email-notifications-with-imap-transporter)

:::

### Ejemplo

```4d
// Define las funciones de retrollamada del listener
var $parameter : Object
var $transporter : 4D.IMAPTransporter

$parameter:=New object
$parameter.authenticationMode:=IMAP authentication OAUTH2
$parameter.host:="Outlook.office365.com"
$parameter.port:=993
$parameter.accessTokenOAuth2:=$myToken
$parameter.user:="myaddress@email.com"
$parameter.listener:=cs.IMAPListener.new()

$transporter:=IMAP New transporter($parameter)
$transporter.selectBox("INBOX")

$transporter.notifier.start()     
```

## Objeto IMAPNotifier

Un objeto IMAPNotifier proporciona las siguientes propiedades y funciones:

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #IMAPNotifier.isStarted.Syntax -->](#isstarted)<br/><!-- INCLUDE #IMAPNotifier.isStarted.Summary --> |
| [<!-- INCLUDE #IMAPNotifier.start().Syntax -->](#start)<br/><!-- INCLUDE #IMAPNotifier.start().Summary -->         |
| [<!-- INCLUDE #IMAPNotifier.stop().Syntax -->](#stop)<br/><!-- INCLUDE #IMAPNotifier.stop().Summary -->            |

<!-- REF 4D.IMAPNotifier.new().Desc -->

## 4D.IMAPNotifier.new()

<!-- REF #4D.IMAPNotifier.new().Syntax -->**4D.IMAPNotifier.new**() : 4D.IMAPNotifier<!-- END REF -->

<!-- REF #4D.IMAPNotifier.new().params -->

| Parámetros | Tipo                            |                             | Descripción               |
| ---------- | ------------------------------- | --------------------------- | ------------------------- |
| Resultado  | 4D.IMAPNotifier | <- | Nuevo objeto IMAPNotifier |

<!-- END REF -->

#### Descripción

La función `4D.IMAPNotifier.new()` <!-- REF #4D.IMAPNotifier.new().Summary -->crea un nuevo objeto IMAPNotifier<!-- END REF -->.

<!-- END REF -->

<!-- REF IMAPNotifier.isStarted.Desc -->

## .isStarted

<!-- REF #IMAPNotifier.isStarted.Syntax -->**.isStarted** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.isStarted` <!-- REF #IMAPNotifier.isStarted.Summary -->indica si el notificador está iniciado (`true`) o detenido (`false`)<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF IMAPNotifier.start().Desc -->

## .start()

<!-- REF #IMAPNotifier.start().Syntax -->**.start**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.start().params -->

| Parámetros | Tipo   |                             | Descripción            |
| ---------- | ------ | :-------------------------: | ---------------------- |
| Resultado  | Object | <- | Estado de la operación |

<!-- END REF -->

#### Descripción

La función `.start()` <!-- REF #IMAPNotifier.start().Summary -->inicia la suscripción a las notificaciones del servidor y activa las retrollamadas del oyente IMAP<!-- END REF -->.

Debe seleccionarse un buzón mediante [`selectBox()`](./IMAPTransporterClass.md#selectbox) antes de llamar a `.start()`.

Las funciones de retrollamada son ejecutadas en el worker donde `.start()` es llamado.

:::note Notas

- Cuando se inicia el notificador, otras funciones del transportador (como `getMail()` o `send()`) no están disponibles. Debe llamar a `.stop()` antes de utilizar estas funciones, y luego llamar de nuevo a `.start()` para reanudar las notificaciones.

- Las notificaciones IMAP IDLE indican que se ha producido un cambio pero no ofrecen datos actualizados del buzón. Para actualizar el estado del buzón, debe detener el aviso, recuperar los datos actualizados (por ejemplo usando `getMail()`), y luego reiniciarlo.

:::

#### Objeto devuelto

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                         |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D |
| errors     |                                                                                             | Collection | Pila de error 4D (no retornado si se recibe una respuesta del servidor)        |
|            | \[].errcode            | Number     | Código de error 4D                                                                                |
|            | \[].message            | Text       | Descripción del error                                                                             |
|            | \[].componentSignature | Text       | Firma del componente que ha devuelto el error                                                     |

<!-- END REF -->

<!-- REF IMAPNotifier.stop().Desc -->

## .stop()

<!-- REF #IMAPNotifier.stop().Syntax -->**.stop**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.stop().params -->

| Parámetros | Tipo   |                             | Descripción            |
| ---------- | ------ | :-------------------------: | ---------------------- |
| Resultado  | Object | <- | Estado de la operación |

<!-- END REF -->

#### Descripción

La función `.stop()` <!-- REF #IMAPNotifier.stop().Summary -->detiene la suscripción a la notificación<!-- END REF -->. Es necesario llamar a `.stop()` antes de utilizar otras funciones del transportador (como `getMail()` o `send()`).

#### Objeto devuelto

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                         |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D |
| errors     |                                                                                             | Collection | Pila de error 4D (no retornado si se recibe una respuesta del servidor)        |
|            | \[].errcode            | Number     | Código de error 4D                                                                                |
|            | \[].message            | Text       | Descripción del error                                                                             |
|            | \[].componentSignature | Text       | Firma del componente que ha devuelto el error                                                     |

<!-- END REF -->




