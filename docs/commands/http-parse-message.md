---
id: http-parse-message
title: HTTP Parse message
slug: /commands/http-parse-message
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Parse message.Syntax-->**HTTP Parse message** ( *data* : Text ) : Object<br/>**HTTP Parse message**( *data* : Blob ) : Object<!-- END REF-->
<!--REF #_command_.HTTP Parse message.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| data | Text, Blob | &#8594;  | Data to be parsed |
| Function result | Object | &#8592; | Object, each property is a part of the multipart data |

<!-- END REF-->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R4|Added|

</details>


#### Description 

The `HTTP Parse message` command <!--REF #_command_.HTTP Parse message.Summary-->parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Each property of the returned object corresponds to a part of the multipart data<!-- END REF -->.


:::info

HTTP itself is a stateless communication protocol. Within this framework, clients initiate communication by sending "request" messages to servers, specifying details like method, target, headers, content, etc. Servers, in turn, respond with "response" messages that include the same details. `HTTP Parse message` parses either the "request" or the "response" message into a well-organized object.

:::


#### Example

In the following example, we parse the data from a text file containing HTTP requests.

Here is the content of the file:

```
POST /batch/gmail/v1/ HTTP/1.1
Accept-Encoding: gzip, deflate
Authorization: Bearer xxxxxx
Connection: Close
Content-Length: 442
Content-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8
Date: Wed, 29 Nov 2023 13:51:35 GMT
Host: gmail.googleapis.com
User-Agent: 4D/20.4.0


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item1>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1


--batch_19438756D576A14ABA87C112F56B9396
Content-Type: application/http
Content-ID: <item2>

GET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1

--batch_19438756D576A14ABA87C112F56B9396--
```
To parse the file:

```4d
var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()
var $parsedMessage : Object:=HTTP Parse message($message)
//$parsedMessage= {
//headers:{"User-Agent":"4D/20.4.0",...},
//parts:[{"contentType":"application/http","contentID":"item1",...}],
//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"
//}
```


#### Properties

|  |  |
| --- | --- |
| Command number | 1824 |
| Thread safe | &cross; |
