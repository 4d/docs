---
id: IMAPNotifierClass
title: IMAPNotifier
---

The `IMAPNotifier` class allows you to manage IMAP IDLE notifications for a selected mailbox.

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 21 R3   | Classe ajoutée |

</details>

The `IMAPNotifier` class is available from the `4D` class store.

An `IMAPNotifier` object is associated with an [IMAP transporter](./IMAPTransporterClass.md#imap-transporter-object) and provides access to mailbox notification management.

All `IMAPNotifier` class functions are thread-safe.

:::tip Article de blog lié

[Instant Email Notifications with IMAP Transporter](https://blog.4d.com/instant-email-notifications-with-imap-transporter)

:::

### Exemple

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

| Paramètres | Type                            |                             | Description             |
| ---------- | ------------------------------- | --------------------------- | ----------------------- |
| Résultat   | 4D.IMAPNotifier | <- | New IMAPNotifier object |

<!-- END REF -->

#### Description

The `4D.IMAPNotifier.new()` function <!-- REF #4D.IMAPNotifier.new().Summary -->creates a new IMAPNotifier object<!-- END REF -->.

<!-- END REF -->

<!-- REF IMAPNotifier.isStarted.Desc -->

## .isStarted

<!-- REF #IMAPNotifier.isStarted.Syntax -->**.isStarted** : Boolean<!-- END REF -->

#### Description

The `.isStarted` property <!-- REF #IMAPNotifier.isStarted.Summary -->indicates whether the notifier is started (`true`) or stopped (`false`)<!-- END REF -->. Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF IMAPNotifier.start().Desc -->

## .start()

<!-- REF #IMAPNotifier.start().Syntax -->**.start**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.start().params -->

| Paramètres | Type   |                             | Description      |
| ---------- | ------ | :-------------------------: | ---------------- |
| Résultat   | Object | <- | Operation status |

<!-- END REF -->

#### Description

The `.start()` function <!-- REF #IMAPNotifier.start().Summary -->starts the subscription to server notifications and activates IMAP listener callbacks<!-- END REF -->.

A mailbox must be selected using [`selectBox()`](./IMAPTransporterClass.md#selectbox) before calling `.start()`.

Callback functions are executed in the worker where `.start()` is called.

:::note Notes

- When the notifier is started, other transporter functions (such as `getMail()` or `send()`) are not available. You must call `.stop()` before using these functions, then call `.start()` again to resume notifications.

- IMAP IDLE notifications indicate that a change has occurred but do not provide updated mailbox data. To refresh the mailbox state, you must stop the notifier, retrieve the updated data (for example using `getMail()`), and then restart it.

:::

#### Objet retourné

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | 4D error stack (not returned if a server response is received)                      |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur                                                                                |
|            | \[].componentSignature | Text       | Signature of the component that returned the error                                                     |

<!-- END REF -->

<!-- REF IMAPNotifier.stop().Desc -->

## .stop()

<!-- REF #IMAPNotifier.stop().Syntax -->**.stop**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.stop().params -->

| Paramètres | Type   |                             | Description      |
| ---------- | ------ | :-------------------------: | ---------------- |
| Résultat   | Object | <- | Operation status |

<!-- END REF -->

#### Description

The `.stop()` function <!-- REF #IMAPNotifier.stop().Summary -->stops the notification subscription<!-- END REF -->. Calling `.stop()` is required before using other transporter functions (such as `getMail()` or `send()`).

#### Objet retourné

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | 4D error stack (not returned if a server response is received)                      |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur                                                                                |
|            | \[].componentSignature | Text       | Signature of the component that returned the error                                                     |

<!-- END REF -->




