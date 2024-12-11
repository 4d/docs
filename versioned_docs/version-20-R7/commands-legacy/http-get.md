---
id: http-get
title: HTTP Get
slug: /commands/http-get
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get.Syntax-->**HTTP Get** ( *url* ; *response* {; *headerNames* ; *headerValues*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Get.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL to which to send the request |
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

<!--REF #_command_.HTTP Get.Summary-->The **HTTP Get** command sends an HTTP GET request directly to a specific URL and processes the HTTP server response.<!-- END REF-->

Pass the URL where you want the request sent in the *url* parameter. The syntax to use is:

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

For example, you can pass the following strings:  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name="jones"    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

*(\*)* During HTTPS requests, authority of the certificate is not checked.   
*(\*\*)* For more information about IPv6 addresses in urls, please refer to the [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt).

After command execution, the *response* parameter receives the result of the request returned by the server. This result corresponds to the body of the response, with no headers.   
You can pass different types of variables in *response*:

* Text: When the result is expected to be text (see note below).
* BLOB: When the result is expected to be in binary form.
* Picture: When the result is expected to be a picture.
* Object: When the result is expected to be an object.

**Note:** When a text variable is passed in *response*, 4D will try to decode the data returned from the server. 4D first tries to retrieve the charset from the *content-type* header, then from the content using a BOM, and finally looks for any *http-equiv charset* (in html content) or *encoding* (for xml) attribute. If no charset can be detected, 4D will attempt to decode the response in ANSI. If the conversion fails, the resulting text will be empty. If you are unsure whether the server returns a charset information or a BOM, but you know the encoding, it is more accurate to pass *response* in BLOB and call [Convert to text](convert-to-text.md).

If you pass a BLOB, it contains the text, picture or any type of contents (.wav, .zip, etc.) returned by the server. You must then manage the recovery of these contents (headers are not included in the BLOB). When you pass an object, if the request returns a result with a text content-type, 4D attempts to parse the content as JSON and returns the parsed result as an object, otherwise a *4D.Blob* object is returned.

In *headerNames* and *headerValues*, you pass arrays containing the names and values of the request headers.   
After this method is executed, these arrays contain the names and values of headers returned by the HTTP server. More specifically, this lets you manage cookies. 

The *\** parameter enables the keep-alive mechanism for the server connection. By default, if this parameter is omitted, keep-alive is not enabled. 

The command returns a standard HTTP status code (200=OK and so on) as returned by the server. The list of HTTP status codes is provided in *RFC 2616*.   
If you are unable to connect to the server for a reason related to the network (DNS Failed, Server not reachable...), the command returns 0 and an error is generated. You can intercept errors using an error-handling method installed by the [ON ERR CALL](on-err-call.md) command.

#### Example 1 

Retrieval of the 4D logo on the 4D Web site:

```4d
 var URLPic_t : Text
 URLPic_t:="http://www.4d.com/sites/all/themes/dimention/images/home/logo4D.jpg"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 var Pic_i : Picture
 $httpResponse:=HTTP Get(URLPic_t;Pic_i;HeaderNames_at;HeaderValues_at)
```

#### Example 2 

Retrieval of an RFC:

```4d
 var URLText_t : Text
 var Text_t : Text
 URLText_t:="http://tools.ietf.org/rfc/rfc1.txt"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 $httpResponse:=HTTP Get(URLText_t;Text_t;HeaderNames_at;HeaderValues_at)
```

#### Example 3 

Retrieval of a video:

```4d
 var vBlob : Blob
 $httpResponse:=HTTP Get("http://www.example.com/video.flv";vBlob)
 BLOB TO DOCUMENT("video.flv";vBlob)
```

#### See also 

[HTTP Request](http-request.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1157 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


