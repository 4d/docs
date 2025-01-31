---
id: web-get-http-header
title: WEB GET HTTP HEADER
slug: /commands/web-get-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET HTTP HEADER.Syntax-->**WEB GET HTTP HEADER** ( header|fieldArray {; *valueArray*} )<!-- END REF-->
<!--REF #_command_.WEB GET HTTP HEADER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| header&#124;fieldArray | Text, Text array | &#8592; | Request HTTP header or HTTP header fields |
| valueArray | Text array | &#8592; | HTTP header fields content |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET HTTP HEADER.Summary-->The **WEB GET HTTP HEADER** command returns either a string or two arrays, containing the HTTP header used for the currently processed request.<!-- END REF-->

This command can be called from within any method (*On Web Authentication Database Method* or [QR SET DESTINATION](qr-set-destination.md), method called by "*/4DACTION*"...) executed in a Web process. 

* **First syntax:** **WEB GET HTTP HEADER** **(header)**
When this syntax is used, the result returned in the *header* variable is as follows: 

```4d
 "GET /page.html HTTP\1.0"+Char(13)+Char(10)+"User-Agent: browser"+Char(13)+Char(10)+"Cookie: C=HELLO"
```

Each header field is separated by a CR+LF (Carriage return+Line feed) sequence under Windows and Mac OS.

* **Second syntax:** **WEB GET HTTP HEADER** **(fieldArray; valueArray)**

When this syntax is used, the returned results in the *fieldArray* and *valueArray* are as follows:

| *fieldArray{1} = "X-METHOD"*   | *valueArray{1} = "GET" \**        |
| ------------------------------ | --------------------------------- |
| *fieldArray{2} = "X-URL"*      | *valueArray{2} = "/page.html" \** |
| *fieldArray{3} = "X-VERSION"*  | *valueArray{3} = "HTTP/1.0" \**   |
| *fieldArray{4} = "User-Agent"* | *valueArray{4} = "browser"*       |
| *fieldArray{5} = "Cookie"*     | *valueArray{5} = "C=HELLO"*       |

  
\* These first three items are not HTTP fields. They are part of the first line of the request.

To comply with the HTTP standard, field names are always written in English.

Here is a list of some HTTP fields that can be used in a request:

* **Accept**: content allowed by the browser.
* **Accept-Language**: language(s) that can be used by the browser (for information). Allows to select a web page using the language defined in the browser.
* **Cookie**: cookies list
* **From**: browser user email address.
* **Host**: server name or address (for example using an URL, http://mywebserver/mypage.html, **Host** takes the «mywebserver» value). Allows to manage several names pointing towards the same IP address (virtual hosting).
* **Referer**: request origin (for example http://mywebserver/mypage1.html), i.e. the page which is displayed when clicking on the **Previous** button.
* **User-Agent**: browser or proxy name and version.

#### Example 

The following method allows getting any HTTP request header field content: 

```4d
  // Project method GetHTTPField
  // GetHTTPField (Text) -> Text
  // GetHTTPField (HTTP header name) -> HTTP header content
 
 var $0;$1 : Text
 var $vlItem : Integer
 ARRAY TEXT($names;0)
 ARRAY TEXT($values;0)
 $0:=""
 WEB GET HTTP HEADER($names;$values)
 $vlItem:=Find in array($names;$1)
 If($vlItem>0)
    $0:=$values{$vlItem}
 End if
```

* Once this project method has been written, it can be called as follows:

```4d
  // Cookie header content
 $cookie:=GetHTTPField("Cookie")
```

* You can send different pages according to the language set in the browser (for example in the [QR SET DESTINATION](qr-set-destination.md)):

```4d
 $language:=GetHTTPField("Accept-Language")
 Case of
    :($language="@fr@") //French (see list ISO 639)
       WEB SEND FILE("index_fr.html")
    :($language="@sp@") //Spanish (see list ISO 639)
       WEB SEND FILE("index_es.html")
    Else
       WEB SEND FILE("index.html")
 End case
```

**Note:** Web browsers allow defining several languages by default. They are listed in the "Accept-Language" field, separated by a ";". Their priority is defined according to their position within the string; therefore it is a good idea to test language positions in the string.

* Here is an example of virtual hosts (for example, in the [QR SET DESTINATION](qr-set-destination.md)). The following names "home\_site.com", "home\_site1.com" and "home\_site2.com" are directed towards the same IP address, for example 192.1.2.3.

```4d
 $host:=GetHTTPField("Host")
 Case of
    :($host="www.site1.com")
       WEB SEND FILE("home_site1.com")
    :($host="www.site2.com")
       WEB SEND FILE("home_site2.com")
    Else
       WEB SEND FILE("home_site.com")
 End case
```

#### See also 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB SET HTTP HEADER](web-set-http-header.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 697 |
| Thread safe | &check; |


