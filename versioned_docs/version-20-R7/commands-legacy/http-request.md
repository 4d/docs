---
id: http-request
title: HTTP Request
slug: /commands/http-request
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Request.Syntax-->**HTTP Request** ( *httpMethod* ; *url* ; *contents* ; *response* {; *headerNames* ; *headerValues*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Request.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| httpMethod | Text | &#8594;  | HTTP method for request |
| url | Text | &#8594;  | URL to which to send the request |
| contents | Text, Blob, Picture, Object | &#8594;  | Contents of request body |
| response | Text, Blob, Picture, Object | &#8592; | Result of request |
| headerNames | Text array | &#8594;  | Header names of the request |
| &#8592; | Returned header names |
| headerValues | Text array | &#8594;  | Header values of the request |
| &#8592; | Returned header values |
| * | Operator | &#8594;  | If passed, connection is maintained (keep-alive)If omitted, connection is closed automatically |
| Function result | Integer | &#8592; | HTTP status code |

<!-- END REF-->

:::info Compatibility

This command is maintained for compatibility reasons only. It is now recommended to use the [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Description 

<!--REF #_command_.HTTP Request.Summary-->The **HTTP Request** command enables all types of HTTP requests to be sent to a specific URL and processes the HTTP server response.<!-- END REF-->

Pass the HTTP method of the request in the *httpMethod* parameter. You can use one of the following constants, found in the *HTTP Client* theme:

| Constant            | Type   | Value   | Comment                                                        |
| ------------------- | ------ | ------- | -------------------------------------------------------------- |
| HTTP DELETE method  | Text | DELETE  | See *RFC 2616*                                                 |
| HTTP GET method     | Text | GET     | See *RFC 2616*. Same as using [HTTP Get](http-get.md) command. |
| HTTP HEAD method    | Text | HEAD    | See *RFC 2616*                                                 |
| HTTP OPTIONS method | Text | OPTIONS | See *RFC 2616*                                                 |
| HTTP POST method    | Text | POST    | See *RFC 2616*                                                 |
| HTTP PUT method     | Text | PUT     | See *RFC 2616*                                                 |
| HTTP TRACE method   | Text | TRACE   | See *RFC 2616*                                                 |

Pass the URL where you want the request sent in the *url* parameter. The syntax to use is:  

```
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

For example, you can pass the following strings:  

```
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name="jones"    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

*(\*)* During HTTPS requests, authority of the certificate is not checked.   
*(\*\*)* For more information about IPv6 addresses in urls, please refer to the [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt).

Pass the body of the request in the *contents* parameter. Data passed in this parameter depends on the HTTP method of the request.   
You can send data of the Text, BLOB, Picture or Object type. When the *content-type* is not specified, the following types are used:

* for text: text/plain - UTF8
* for BLOBs: application/byte-stream
* for pictures: known MIME type (best for Web).
* for objects: application/json

After command execution, the *response* parameter receives the result of the request returned by the server. This result corresponds to the body of the response, with no headers.   
You can pass different types of variables in *response*:

* Text: When the result is expected to be text (see note below).
* BLOB: When the result is expected to be in binary
* Picture: When the result is expected to be a picture.
* Object: When the result is expected to be an object.

**Note:** When a text variable is passed in *response*, 4D will try to decode the data returned from the server. 4D first tries to retrieve the charset from the *content-type* header, then from the content using a BOM, and finally looks for any *http-equiv charset* (in html content) or *encoding* (for xml) attribute. If no charset can be detected, 4D will attempt to decode the response in ANSI. If the conversion fails, the resulting text will be empty. If you are unsure whether the server returns a charset information or a BOM, but you know the encoding, it is more accurate to pass *response* in BLOB and call [Convert to text](convert-to-text.md).

When you pass an object type variable in the *response* parameter, if the request returns a result with a text content-type, 4D attempts to parse the content as JSON and returns the parsed result as an object. Otherwise, a *4D.Blob* object is returned.

If the result returned by the server does not correspond to the *response* variable type, it is left blank.

In *headerNames* and *headerValues*, you pass arrays containing the names and values of the request headers.   
After this method is executed, these arrays contain the names and values of headers returned by the HTTP server. More specifically, this lets you manage cookies. 

The *\** parameter enables the keep-alive mechanism for the server connection. By default, if this parameter is omitted, keep-alive is not enabled.

The command returns a standard HTTP status code (200=OK and so on) as returned by the server. The list of HTTP status codes is provided in *RFC 2616*.   
If you are unable to connect to the server for a reason related to the network (DNS Failed, Server not reachable...), the command returns 0 and an error is generated. You can intercept errors using an error-handling method installed by the [ON ERR CALL](on-err-call.md) command.

#### Example 1 

Requesting for a record deletion from a remote database:

```4d
 var $response : Text
 $body_t:="{record_id:25}"
 $httpStatus_l:=HTTP Request(HTTP DELETE method;"database.example.com";$body_t;$response)
```

**Note:** You have to process the request appropriately on the remote server, **HTTP Request** only handles the request and the returned result.

#### Example 2 

Requesting to add a record to a remote database:

```4d
 var $response : Text
 $body_t:="{fName:'john',fName:'Doe'}"
 $httpStatus_l:=HTTP Request(HTTP PUT method;"database.example.com";$body_t;$response)
```

**Note:** You have to process the request appropriately on the remote server, **HTTP Request** only handles the request and the returned result.

#### Example 3 

Request to add a record in JSON to a remote database::

```4d
 var $content : Object
 OB SET($content;"lastname";"Doe";"firstname";"John")
 $result:=HTTP Request(HTTP PUT method;"database.example.com";$content;$response)
```

#### See also 

[HTTP Get](http-get.md)  