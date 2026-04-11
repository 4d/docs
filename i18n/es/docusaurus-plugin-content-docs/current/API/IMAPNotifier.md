---
id: IMAPNotifierClass
title: IMAPNotifier
---

The `IMAPNotifier` class allows you to manage IMAP IDLE notifications for a selected mailbox.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R3       | Clase añadida  |

</details>

The `IMAPNotifier` class is available from the `4D` class store.

An `IMAPNotifier` object is associated with an [IMAP transporter](./IMAPTransporterClass.md#imap-transporter-object) and provides access to mailbox notification management.

All `IMAPNotifier` class functions are thread-safe.

:::tip Entradas de blog relacionadas

[Instant Email Notifications with IMAP Transporter](https://blog.4d.com/instant-email-notifications-with-imap-transporter)

:::

### Ejemplo

```4d
// Define listener callbacks
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

## IMAPNotifier object

An IMAPNotifier object provides the following properties and functions:

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #IMAPNotifier.isStarted.Syntax -->](#isstarted)<br/><!-- INCLUDE #IMAPNotifier.isStarted.Summary --> |
| [<!-- INCLUDE #IMAPNotifier.start().Syntax -->](#start)<br/><!-- INCLUDE #IMAPNotifier.start().Summary -->         |
| [<!-- INCLUDE #IMAPNotifier.stop().Syntax -->](#stop)<br/><!-- INCLUDE #IMAPNotifier.stop().Summary -->            |

<!-- REF 4D.IMAPNotifier.new().Desc -->

## 4D.IMAPNotifier.new()

<!-- REF #4D.IMAPNotifier.new().Syntax -->**4D.IMAPNotifier.new**() : 4D.IMAPNotifier<!-- END REF -->

<!-- REF #4D.IMAPNotifier.new().params -->

| Parámetros | Tipo                            |                             | Descripción             |
| ---------- | ------------------------------- | --------------------------- | ----------------------- |
| Resultado  | 4D.IMAPNotifier | <- | New IMAPNotifier object |

<!-- END REF -->

#### Descripción

The `4D.IMAPNotifier.new()` function <!-- REF #4D.IMAPNotifier.new().Summary -->creates a new IMAPNotifier object<!-- END REF -->.

<!-- END REF -->

<!-- REF IMAPNotifier.isStarted.Desc -->

## .isStarted

<!-- REF #IMAPNotifier.isStarted.Syntax -->**.isStarted** : Boolean<!-- END REF -->

#### Descripción

The `.isStarted` property <!-- REF #IMAPNotifier.isStarted.Summary -->indicates whether the notifier is started (`true`) or stopped (`false`)<!-- END REF -->. Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF IMAPNotifier.start().Desc -->

## .start()

<!-- REF #IMAPNotifier.start().Syntax -->**.start**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.start().params -->

| Parámetros | Tipo   |                             | Descripción      |
| ---------- | ------ | :-------------------------: | ---------------- |
| Resultado  | Object | <- | Operation status |

<!-- END REF -->

#### Descripción

The `.start()` function <!-- REF #IMAPNotifier.start().Summary -->starts the subscription to server notifications and activates IMAP listener callbacks<!-- END REF -->.

A mailbox must be selected using [`selectBox()`](./IMAPTransporterClass.md#selectbox) before calling `.start()`.

Callback functions are executed in the worker where `.start()` is called.

:::note Notas

- When the notifier is started, other transporter functions (such as `getMail()` or `send()`) are not available. You must call `.stop()` before using these functions, then call `.start()` again to resume notifications.

- IMAP IDLE notifications indicate that a change has occurred but do not provide updated mailbox data. To refresh the mailbox state, you must stop the notifier, retrieve the updated data (for example using `getMail()`), and then restart it.

:::

#### Objeto devuelto

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                         |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D |
| errors     |                                                                                             | Collection | 4D error stack (not returned if a server response is received)                 |
|            | \[].errcode            | Number     | Código de error 4D                                                                                |
|            | \[].message            | Text       | Descripción del error                                                                             |
|            | \[].componentSignature | Text       | Signature of the component that returned the error                                                |

<!-- END REF -->

<!-- REF IMAPNotifier.stop().Desc -->

## .stop()

<!-- REF #IMAPNotifier.stop().Syntax -->**.stop**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.stop().params -->

| Parámetros | Tipo   |                             | Descripción      |
| ---------- | ------ | :-------------------------: | ---------------- |
| Resultado  | Object | <- | Operation status |

<!-- END REF -->

#### Descripción

The `.stop()` function <!-- REF #IMAPNotifier.stop().Summary -->stops the notification subscription<!-- END REF -->. Calling `.stop()` is required before using other transporter functions (such as `getMail()` or `send()`).

#### Objeto devuelto

| Propiedad  |                                                                                             | Tipo       | Descripción                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------- |
| success    |                                                                                             | Boolean    | True si la operación tiene éxito, False en caso contrario                                         |
| statusText |                                                                                             | Text       | Mensaje de estado devuelto por el servidor IMAP, o último error devuelto en la pila de errores 4D |
| errors     |                                                                                             | Collection | 4D error stack (not returned if a server response is received)                 |
|            | \[].errcode            | Number     | Código de error 4D                                                                                |
|            | \[].message            | Text       | Descripción del error                                                                             |
|            | \[].componentSignature | Text       | Signature of the component that returned the error                                                |

<!-- END REF -->




