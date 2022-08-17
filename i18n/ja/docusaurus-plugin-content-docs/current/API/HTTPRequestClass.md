---
id: HTTPRequestClass
title: HTTPRequest
---

<details><summary>History</summary>

| Version | Changes     |
| ------- | ----------- |
| v19 R6  | Class added |

</details>


The `HTTPRequest` class allows you to handle [`HTTPRequest objects`](#httprequest-object) that can be used to configure and send requests to an HTTP server, as well as to process the HTTP server responses.

The `HTTPRequest` class is available from the `4D` class store. You create and send HTTP requests using the [4D.HTTPRequest.new()](#4dhttprequestnew) function, that returns a [`HTTPRequest object`](#httprequest-object).

### Example

Create a `MyHttpRequestOptions` class for the request options:

```4d
Class constructor($method : Text; $headers : Object; $body : Text)
This.method:=$method
This.headers:=$headers
This.body:=$body

Function onResponse($request : 4D.HTTPRequest; $event : Object)
//My onResponse method, if you want to handle the request asynchronously

Function onError($request : 4D.HTTPRequest; $event : Object)
//My onError method, if you want to handle the request asynchronously
```

You can now create your request:

```4d
var $headers : Object
$headers:=New object()
$headers["field1"]:="value1"

var myHttpRequestOptions : cs.MyHttpRequestOptions
myHttpRequestOptions := cs.MyHttpRequestOptions.new("GET"; $headers; "")

var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("www.google.com"; myHttpRequestOptions)
$request.wait() //If you want to handle the request synchronously
//Now you can use $request.response to access the result of the request or $request.error to check the error that happened.
```

### HTTPRequest Object

An HTTPRequest object is a non-sharable object.

HTTPRequest objects provide the following properties and functions:

|                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.HTTPRequest.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.dataType.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.encoding.Syntax -->](#encoding)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.encoding.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.errors.Syntax -->](#errors)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.errors.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.headers.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.method.Syntax -->](#method)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.method.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.protocol.Syntax -->](#protocol)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.protocol.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.response.Syntax -->](#response)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.response.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.returnResponseBody.Syntax -->](#returnResponseBody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.returnResponseBody.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.terminate().Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.terminated.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.timeout.Syntax -->](#timeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.timeout.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.url.Syntax -->](#url)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.url.Summary -->|
| [<!-- INCLUDE #4D.HTTPRequest.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.wait().Summary -->|



<!-- REF #4D.HTTPRequest.new().Desc -->
## 4D.HTTPRequest.new()

<!-- REF #4D.HTTPRequest.new().Syntax -->

**4D.HTTPRequest.new**( *url* : Text { ; *options* : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->
| Parameter | Type           |    | Description                                       |
| --------- | -------------- |:--:| ------------------------------------------------- |
| url       | Text           | -> | URL to which to send the request                  |
| options   | Object         | -> | Request configuration properties                  |
| Result    | 4D.HTTPRequest | <- | New HTTPRequest object|<!-- END REF -->


|


#### Description

The `4D.HTTPRequest.new()` function <!-- REF #4D.HTTPRequest.new().Summary -->creates and sends a HTTP request to the HTTP server defined in *url* with the defined *options*, and returns a `4D.HTTPRequest` object<!-- END REF -->.

The returned `HTTPRequest` object is used to process responses from the HTTP server and call methods.

In *url*, pass the URL where you want to send the request. The syntax to use is:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```
If you omit the protocol part (`http://` or `https://`), a https request is sent.

For example, you can pass the following strings:

```
    http://www.myserver.com
    www.myserver.com/path
    http://www.myserver.com/path?name="jones"
    https://www.myserver.com/login
    http://123.45.67.89:8083
    http://john:smith@123.45.67.89:8083
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties:

| Property             | Type                                            | Description                                                                                                                                                                                                                                                       | Default      |
| -------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| body                 | Variant                                         | Body of the request (required in case of `post` or `put` requests). Can be a text, a blob, or an object. The content-type is determined from the type of this property unless it is set inside the headers                                                        | undefined    |
| certificatesFolder   | [Folder](FolderClass.md)                        | Sets the active client certificates folder                                                                                                                                                                                                                        | undefined    |
| dataType             | Text                                            | Type of the response body attribute. Values: "text", "blob", "object", or "auto". If "auto", the type of the body content will be deduced from its MIME type (object for JSON, text for text, javascript, xml, http message and url encoded form, blob otherwise) | "auto"       |
| encoding             | Text                                            | Used only in case of requests with a `body` (`post` or `put` methods). Encoding of the request body content if it's a text, ignored if content-type is set inside the headers                                                                                     | "UTF-8"      |
| headers              | Object                                          | Headers of the request. Syntax: `headers.key=value` (*value* can be a Collection if the same key must appear multiple times)                                                                                                                                      | Empty object |
| method               | Text                                            | "POST", "GET", or other method                                                                                                                                                                                                                                    | "GET"        |
| minTLSVersion        | Text                                            | Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"                                                                                                                                                                               | "`TLSv1_2`"  |
| onData               | [Function](FunctionClass.md)                    | Callback when data from the body is received. It receives two objects as parameters (see below)                                                                                                                                                                   | undefined    |
| onError              | [Function](FunctionClass.md)                    | Callback when an error occurs. It receives two objects as parameters (see below)                                                                                                                                                                                  | undefined    |
| onHeaders            | [Function](FunctionClass.md)                    | Callback when the headers are received. It receives two objects as parameters (see below)                                                                                                                                                                         | undefined    |
| onResponse           | [Function](FunctionClass.md)                    | Callback when a response is received. It receives two objects as parameters (see below)                                                                                                                                                                           | undefined    |
| onTerminate          | [Function](FunctionClass.md)                    | Callback when the request is over. It receives two objects as parameters (see below)                                                                                                                                                                              | undefined    |
| protocol             | Text                                            | "auto" or "HTTP1". "auto" means HTTP1 in the current implementation                                                                                                                                                                                               | "auto"       |
| proxyAuthentication  | [authentication object](#authentication-object) | Object handling proxy authentication                                                                                                                                                                                                                              | undefined    |
| serverAuthentication | [authentication object](#authentication-object) | Object handling server authentication                                                                                                                                                                                                                             | undefined    |
| returnResponseBody   | Boolean                                         | If false, the response body is not returned in the [`response` object](#response). Returns an error if false and `onData` is undefined                                                                                                                            | True         |
| timeout              | Real                                            | Timeout in seconds. Undefined = no timeout                                                                                                                                                                                                                        | Undefined    |

#### Callback functions

All callback functions receive two object parameters:

| Parameter | Type                                        |
| --------- | ------------------------------------------- |
| $param1   | [`HTTPRequest` object](#httprequest-object) |
| $param2   | [`Event` object](#event-object)             |


Here is the sequence of callback calls:

1. `onHeaders` is always called once
2. `onData` is called zero or several times (not called if the request does not have a body)
3. If no error occured, `onResponse` is always called once
4. If an error occurs, `onError` is executed once (and terminates the request)
5. `onTerminate` is always executed once



#### event object

An `event` object is returned when a [callback function](#callback-functions) is called. It contains the following properties:

| Property | Type | Description                                                                           |
| -------- | ---- | ------------------------------------------------------------------------------------- |
| .data    | blob | Received data. It is always *undefined* except in the `onData` callback               |
| .type    | text | Type of event. Possible values: "response", "error", "headers", "data", or "terminate |




#### authentication object

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. It can contain the following properties:

| Property | Type | Description                                              | Default   |
| -------- | ---- | -------------------------------------------------------- | --------- |
| name     | Text | Name used for authentication                             | undefined |
| password | Text | Password used for authentication                         | undefined |
| method   | Text | Method used for authentication:"basic", "digest", "auto" | "auto"    |


<!-- END REF -->




<!-- REF #4D.HTTPRequest.dataType.Desc -->
## .dataType


<!-- REF #4D.HTTPRequest.dataType.Syntax -->

**dataType** : Text<!-- END REF -->

#### Description

The `.dataType` property contains <!-- REF #4D.HTTPRequest.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #4D.HTTPRequest.encoding.Desc -->
## .encoding

<!-- REF #4D.HTTPRequest.encoding.Syntax -->

**encoding** : Text<!-- END REF -->

#### Description

The `.encoding` property contains <!-- REF #4D.HTTPRequest.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #4D.HTTPRequest.errors.Desc -->
## .errors

<!-- REF #4D.HTTPRequest.errors.Syntax -->

**errors** : Collection<!-- END REF -->

#### Description

The `.errors` property contains <!-- REF #4D.HTTPRequest.errors.Summary -->the collection of all the errors if at least one error has been triggered<!-- END REF -->.

Here is the contents of the `.errors` property:

| Property |                       | Type       | Description                                                  |
| -------- | --------------------- | ---------- | ------------------------------------------------------------ |
| errors   |                       | Collection | 4D error stack in case of error                              |
|          | [].errCode            | Number     | 4D error code                                                |
|          | [].message            | Text       | Description of the 4D error                                  |
|          | [].componentSignature | Text       | Signature of the internal component which returned the error |

<!-- END REF -->



<!-- REF #4D.HTTPRequest.headers.Desc -->
## .headers

<!-- REF #4D.HTTPRequest.headers.Syntax -->

**headers** : Object<!-- END REF -->

#### Description

The `.headers` property contains <!-- REF #4D.HTTPRequest.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains an empty object.

<!-- END REF -->


<!-- REF #4D.HTTPRequest.method.Desc -->
## .method

<!-- REF #4D.HTTPRequest.method.Syntax -->

**method** : Text<!-- END REF -->

#### Description

The `.method` property contains <!-- REF #4D.HTTPRequest.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains "GET".

<!-- END REF -->

<!-- REF #4D.HTTPRequest.protocol.Desc -->
## .protocol

<!-- REF #4D.HTTPRequest.protocol.Syntax -->

**protocol** : Text<!-- END REF -->

#### Description

The `.protocol` property contains <!-- REF #4D.HTTPRequest.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted or if "auto" was used, contains the version of the protocol used.

<!-- END REF -->

<!-- REF #4D.HTTPRequest.response.Desc -->
## .response


<!-- REF #4D.HTTPRequest.response.Syntax -->

**response** : Object<!-- END REF -->

#### Description

The `.response` property contains <!-- REF #4D.HTTPRequest.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

A `response` object is a non-sharable object. It provides the following properties:

| Property    | Type    | Description                                                                                                                                                             |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .body       | Variant | Body of the response. The type of the message is defined according to the [`dataType`](#datatype) property. Undefined if the body has not been received yet             |
| .headers    | Object  | Headers of the response. `headers.key` = value (value can be a collection if the same key appears multiple times). Undefined if the headers have not been received yet. |
| .status     | Number  | Status code of the response                                                                                                                                             |
| .statusText | Text    | Message explaining the status code                                                                                                                                      |



<!-- END REF -->


<!-- REF #4D.HTTPRequest.returnResponseBody.Desc -->
## .returnResponseBody

<!-- REF #4D.HTTPRequest.returnResponseBody.Syntax -->

**returnResponseBody** : Boolean<!-- END REF -->

#### Description

The `.returnResponseBody` property contains <!-- REF #4D.HTTPRequest.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains True.

<!-- END REF -->


<!-- REF #4D.HTTPRequest.terminate().Desc -->
## .terminate()

<!-- REF #4D.HTTPRequest.terminate().Syntax -->

**.terminate()**<!-- END REF -->

<!-- REF #4D.HTTPRequest.terminate().Params -->

| Parameter                       | Type |  | Description |
| ------------------------------- | ---- |  | ----------- |
| Does not require any parameters |      |  |             |

<!-- END REF -->


#### Description

> This function is thread-safe.

The `.terminate()` function <!-- REF #4D.HTTPRequest.terminate().Summary -->aborts the HTTP request<!-- END REF -->. It triggers the `onTerminate` event.

<!-- END REF -->


<!-- REF #4D.HTTPRequest.terminated.Desc -->
## .terminated

<!-- REF #4D.HTTPRequest.terminated.Syntax -->

**terminated** : Boolean<!-- END REF -->

#### Description

The `.terminated` property contains <!-- REF #4D.HTTPRequest.terminated.Summary -->True if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->


<!-- REF #4D.HTTPRequest.timeout.Desc -->
## .timeout

<!-- REF #4D.HTTPRequest.timeout.Syntax -->

**timeout** : Real<!-- END REF -->

#### Description

The `.timeout` property contains <!-- REF #4D.HTTPRequest.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains Undefined.

<!-- END REF -->



<!-- REF #4D.HTTPRequest.url.Desc -->
## .url

<!-- REF #4D.HTTPRequest.url.Syntax -->

**url** : Text<!-- END REF -->

#### Description

The `.url` property contains <!-- REF #4D.HTTPRequest.url.Summary -->the URL of the HTTP request<!-- END REF -->.

<!-- END REF -->



<!-- REF #4D.HTTPRequest.wait().Desc -->
## .wait()

<!-- REF #4D.HTTPRequest.wait().Syntax -->

**.wait**( { *time* : Real } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.wait().Params -->
| Parameter | Type           |    | Description                                      |
| --------- | -------------- |:--:| ------------------------------------------------ |
| time      | Real           | -> | Maximum time in seconds to wait for the response |
| Result    | 4D.HTTPRequest | <- | HTTPRequest object|<!-- END REF -->


|


#### Description

> This function is thread-safe.

The `4D.HTTPRequest.wait()` function <!-- REF #4D.HTTPRequest.wait().Summary -->waits for the response from the server<!-- END REF -->.

If a *time* parameter is passed, the function will wait at most the defined number of seconds.

If the response from the server has already arrived, the function returns immediately.
<!-- END REF -->
