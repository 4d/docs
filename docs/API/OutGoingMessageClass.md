---
id: OutGoingMessageClass
title: OutGoingMessage
---


The `OutGoingMessageClass` class allows you to handle [messages returned by your application] in response to `HTTP GET` requests processed by your custom HTTP handler. Such requests are used, for example, to implement file downloading feature.

An instance of this class is built on 4D Server and sent to the browser by the [4D REST Server].

If the response is of type OutgoingMessage, the REST server does not return an object but the object instance of the OutgoingMessage class



<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R7|Class added|

</details>


### OutGoingMessageClass Object


4D.OutGoingMessageClass objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #OutGoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutGoingMessageClass.body.Summary -->|
|[<!-- INCLUDE #OutGoingMessageClass.bodyString.Syntax -->](#bodyString)<br/><!-- INCLUDE #OutGoingMessageClass.bodyString.Summary -->|
|[<!-- INCLUDE #OutGoingMessageClass.setBody.Syntax -->](#setbody)<br/><!-- INCLUDE #OutGoingMessageClass.setBody.Summary -->|
|[<!-- INCLUDE #OutGoingMessageClass.setHeader.Syntax -->](#setheader)<br/><!-- INCLUDE #OutGoingMessageClass.setHeader.Summary -->|
|[<!-- INCLUDE #OutGoingMessageClass.setStatus.Syntax -->](#setstatus)<br/><!-- INCLUDE #OutGoingMessageClass.setStatus.Summary -->|
|[<!-- INCLUDE #OutGoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutGoingMessageClass.status.Summary -->|

:::note

A 4D.OutGoingMessageClass object is a [non-sharable] object.

:::





<!-- REF #OutGoingMessageClass.body.Desc -->
## .body

<!-- REF #OutGoingMessageClass.body.Syntax -->**body** : Blob<!-- END REF -->

#### Description

The `.body` property contains <!-- REF #OutGoingMessageClass.body.Summary -->the outgoing message body blob<!-- END REF -->. This property is not available if the message body is a string, in which case the `.bodyString` property is available.

<!-- END REF -->


<!-- REF #OutGoingMessageClass.bodyString.Desc -->
## .bodyString

<!-- REF #OutGoingMessageClass.bodyString.Syntax -->**bodyString** : Text<!-- END REF -->

#### Description

The `.bodyString` property contains <!-- REF #OutGoingMessageClass.bodyString.Summary -->the outgoing message body string<!-- END REF -->. This property is not available if the message body is a blob, in which case the `.body` property is available.

<!-- END REF -->


<!-- REF #OutGoingMessageClass.setBody().Desc -->
## .setBody()

<!-- REF #OutGoingMessageClass.setBody().Syntax -->**.setBody**( *body* : Variant} )<!-- END REF -->


<!-- REF #OutGoingMessageClass.setBody().Params -->
|body|Variant|->|Body of the outgoing message|
<!-- END REF -->

#### Description

> This function is thread-safe.

The `.setBody()` function <!-- REF #OutGoingMessageClass.setBody().Summary -->sets the outgoing message *body*<!-- END REF -->.

- If *body* is a Text value, the response object contains the [`bodyString`](#bodystring) property filled with the given body.
- If *body* is a Blob, the response object contains the [`body`](#body) property filled with the given body.

If *body* is not a Text or Blob value, an error is returned.


<!-- END REF -->


<!-- REF #OutGoingMessageClass.setHeader().Desc -->
## .setHeader()

<!-- REF #OutGoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->


<!-- REF #OutGoingMessageClass.setHeader().Params -->
|key|Text|->|Header property to set|
|value|Text|->|Value of the header property|
<!-- END REF -->

#### Description

The `.setHeader()` function <!-- REF #OutGoingMessageClass.setHeader().Summary -->sets the outgoing message header *key* with the provided *value*<!-- END REF -->. If both parameters are not Text values, an error is raised.

:::info

When returning a 4D.OutGoingMessage object instance, 4D automatically sets some headers (e.g. `Set-Cookie` with `WASID4D=...` and `4DSID__ProjectName_=....`)

:::

<!-- END REF -->

<!-- REF #OutGoingMessageClass.setStatus().Desc -->
## .setStatus()

<!-- REF #OutGoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->


<!-- REF #OutGoingMessageClass.setStatus().Params -->
|status|Integer|->|Status to set|
<!-- END REF -->

#### Description

The `.setStatus()` function <!-- REF #OutGoingMessageClass.setStatus().Summary -->sets the `status` property with the given *status*<!-- END REF -->.

If *status* is not an integer value, an error is raised.


<!-- END REF -->



<!-- REF #OutGoingMessageClass.status.Desc -->
## .status

<!-- REF #OutGoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Description

The `.status` property contains <!-- REF #OutGoingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. This property can be set using the [`setStatus()`](setstatus) function.

<!-- END REF -->
