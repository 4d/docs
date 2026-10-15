---
id: IMAPNotifierClass
title: IMAPNotifier
---

The `IMAPNotifier` class allows you to manage IMAP IDLE notifications for a selected mailbox.

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 21 R3   | Classe adicionada |

</details>

The `IMAPNotifier` class is available from the `4D` class store.

An `IMAPNotifier` object is associated with an [IMAP transporter](./IMAPTransporterClass.md#imap-transporter-object) and provides access to mailbox notification management.

All `IMAPNotifier` class functions are thread-safe.

:::tip Related Blog post

[Instant Email Notifications with IMAP Transporter](https://blog.4d.com/instant-email-notifications-with-imap-transporter)

:::

### Exemplo

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

| Parâmetro  | Tipo                            |                             | Descrição               |
| ---------- | ------------------------------- | --------------------------- | ----------------------- |
| Resultados | 4D.IMAPNotifier | <- | New IMAPNotifier object |

<!-- END REF -->

#### Descrição

The `4D.IMAPNotifier.new()` function <!-- REF #4D.IMAPNotifier.new().Summary -->creates a new IMAPNotifier object<!-- END REF -->.

<!-- END REF -->

<!-- REF IMAPNotifier.isStarted.Desc -->

## .isStarted

<!-- REF #IMAPNotifier.isStarted.Syntax -->**.isStarted** : Boolean<!-- END REF -->

#### Descrição

The `.isStarted` property <!-- REF #IMAPNotifier.isStarted.Summary -->indicates whether the notifier is started (`true`) or stopped (`false`)<!-- END REF -->. Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF IMAPNotifier.start().Desc -->

## .start()

<!-- REF #IMAPNotifier.start().Syntax -->**.start**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.start().params -->

| Parâmetro  | Tipo   |                             | Descrição        |
| ---------- | ------ | :-------------------------: | ---------------- |
| Resultados | Object | <- | Operation status |

<!-- END REF -->

#### Descrição

The `.start()` function <!-- REF #IMAPNotifier.start().Summary -->starts the subscription to server notifications and activates IMAP listener callbacks<!-- END REF -->.

A mailbox must be selected using [`selectBox()`](./IMAPTransporterClass.md#selectbox) before calling `.start()`.

Callback functions are executed in the worker where `.start()` is called.

:::note Notas

- When the notifier is started, other transporter functions (such as `getMail()` or `send()`) are not available. You must call `.stop()` before using these functions, then call `.start()` again to resume notifications.

- IMAP IDLE notifications indicate that a change has occurred but do not provide updated mailbox data. To refresh the mailbox state, you must stop the notifier, retrieve the updated data (for example using `getMail()`), and then restart it.

:::

#### Objeto devolvido

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | True se a operação for bem sucedida, False caso contrário                                      |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                                                                                             | Collection | 4D error stack (not returned if a server response is received)              |
|             | \[].errcode            | Number     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro                                                                              |
|             | \[].componentSignature | Text       | Signature of the component that returned the error                                             |

<!-- END REF -->

<!-- REF IMAPNotifier.stop().Desc -->

## .stop()

<!-- REF #IMAPNotifier.stop().Syntax -->**.stop**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.stop().params -->

| Parâmetro  | Tipo   |                             | Descrição        |
| ---------- | ------ | :-------------------------: | ---------------- |
| Resultados | Object | <- | Operation status |

<!-- END REF -->

#### Descrição

The `.stop()` function <!-- REF #IMAPNotifier.stop().Summary -->stops the notification subscription<!-- END REF -->. Calling `.stop()` is required before using other transporter functions (such as `getMail()` or `send()`).

#### Objeto devolvido

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | True se a operação for bem sucedida, False caso contrário                                      |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                                                                                             | Collection | 4D error stack (not returned if a server response is received)              |
|             | \[].errcode            | Number     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro                                                                              |
|             | \[].componentSignature | Text       | Signature of the component that returned the error                                             |

<!-- END REF -->




