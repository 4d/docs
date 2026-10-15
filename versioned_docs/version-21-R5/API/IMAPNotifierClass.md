---
id: IMAPNotifierClass
title: IMAPNotifier
---

The `IMAPNotifier` class allows you to manage IMAP IDLE notifications for a selected mailbox.

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R3|Class added|

</details>

The `IMAPNotifier` class is available from the `4D` class store.

An `IMAPNotifier` object is associated with an [IMAP transporter](./IMAPTransporterClass.md#imap-transporter-object) and provides access to mailbox notification management.

All `IMAPNotifier` class functions are thread-safe.

:::tip Related Blog post

[Instant Email Notifications with IMAP Transporter](https://blog.4d.com/instant-email-notifications-with-imap-transporter)

:::

### Example

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
 
||
|---|
| [<!-- INCLUDE #IMAPNotifier.isStarted.Syntax -->](#isstarted)<br/><!-- INCLUDE #IMAPNotifier.isStarted.Summary --> |
| [<!-- INCLUDE #IMAPNotifier.start().Syntax -->](#start)<br/><!-- INCLUDE #IMAPNotifier.start().Summary -->         |
| [<!-- INCLUDE #IMAPNotifier.stop().Syntax -->](#stop)<br/><!-- INCLUDE #IMAPNotifier.stop().Summary -->            |
 

<!-- REF 4D.IMAPNotifier.new().Desc -->
## 4D.IMAPNotifier.new()

<!-- REF #4D.IMAPNotifier.new().Syntax -->**4D.IMAPNotifier.new**() : 4D.IMAPNotifier<!-- END REF -->

<!-- REF #4D.IMAPNotifier.new().params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|4D.IMAPNotifier|<-|New IMAPNotifier object|
<!-- END REF -->

#### Description

The `4D.IMAPNotifier.new()` function <!-- REF #4D.IMAPNotifier.new().Summary -->creates a new IMAPNotifier object<!-- END REF -->.

<!-- END REF -->

<!-- REF IMAPNotifier.isStarted.Desc -->
## .isStarted

<!-- REF #IMAPNotifier.isStarted.Syntax -->**.isStarted** : Boolean<!-- END REF -->

#### Description

The `.isStarted` property <!-- REF #IMAPNotifier.isStarted.Summary -->indicates whether the notifier is started (`true`) or stopped (`false`)<!-- END REF -->. This property is **read-only**.

<!-- END REF -->


<!-- REF IMAPNotifier.start().Desc -->
## .start()

<!-- REF #IMAPNotifier.start().Syntax -->**.start**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.start().params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Operation status|
<!-- END REF -->

#### Description

The `.start()` function <!-- REF #IMAPNotifier.start().Summary -->starts the subscription to server notifications and activates IMAP listener callbacks<!-- END REF -->.

A mailbox must be selected using [`selectBox()`](./IMAPTransporterClass.md#selectbox) before calling `.start()`.

Callback functions are executed in the worker where `.start()` is called.  

:::note Notes

* When the notifier is started, other transporter functions (such as `getMail()` or `send()`) are not available. You must call `.stop()` before using these functions, then call `.start()` again to resume notifications.

* IMAP IDLE notifications indicate that a change has occurred but do not provide updated mailbox data. To refresh the mailbox state, you must stop the notifier, retrieve the updated data (for example using `getMail()`), and then restart it.

:::

#### Returned object

|Property||Type|Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise|
|statusText||Text|Status message returned by the IMAP server, or last error returned in the 4D error stack|
|errors||Collection|4D error stack (not returned if a server response is received)|
||\[].errcode|Number|4D error code|
||\[].message|Text|Description of the error|
||\[].componentSignature|Text|Signature of the component that returned the error|

<!-- END REF -->


<!-- REF IMAPNotifier.stop().Desc -->
## .stop()

<!-- REF #IMAPNotifier.stop().Syntax -->**.stop**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.stop().params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Operation status|
<!-- END REF -->

#### Description

The `.stop()` function <!-- REF #IMAPNotifier.stop().Summary -->stops the notification subscription<!-- END REF -->. Calling `.stop()` is required before using other transporter functions (such as `getMail()` or `send()`).

#### Returned object

|Property||Type|Description|
|---|---|---|---|
|success||Boolean|True if the operation is successful, False otherwise|
|statusText||Text|Status message returned by the IMAP server, or last error returned in the 4D error stack|
|errors||Collection|4D error stack (not returned if a server response is received)|
||\[].errcode|Number|4D error code|
||\[].message|Text|Description of the error|
||\[].componentSignature|Text|Signature of the component that returned the error|

<!-- END REF -->




