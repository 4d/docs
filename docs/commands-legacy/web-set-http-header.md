---
id: web-set-http-header
title: WEB SET HTTP HEADER
slug: /commands/web-set-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HTTP HEADER.Syntax-->**WEB SET HTTP HEADER** ( header|fieldArray {; *valueArray*} )<!-- END REF-->
<!--REF #_command_.WEB SET HTTP HEADER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| header&#124;fieldArray | Text, Text array | &#8594;  | Field or variable containing the request HTTP header or HTTP header fields |
| valueArray | Text array | &#8594;  | HTTP header field content |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SET HTTP HEADER.Summary-->The **WEB SET HTTP HEADER** command allows you to set the fields in the HTTP header of the reply sent to the Web browser by 4D.<!-- END REF--> It only has an effect in a Web process.   
This command allows you to manage “cookies”.

Two syntaxes are available for this command:

* First syntax: **WEB SET HTTP HEADER** (header)  
You pass the HTTP header fields to the *fields* parameter, of the Text type (variable or field), that you want to set. This syntax allows writing header types such as "HTTP/1.0 200 OK"+Char(13)+"Set-Cookie: C=HELLO". Header fields must be separated by the CR or CR+LF (Carriage return + Line feed) sequence, under Windows and Mac OS, 4D formats the reply.

Here is an example of a custom “cookie”:

```4d
 var $vTcookie : Text
 $vTcookie:="Set-Cookie: USER="+String(Abs(Random))+"; PATH=/"
 WEB SET HTTP HEADER($vTcookie)
```

**Note:** The command will not accept a literal text type constant as the *header* parameter; it must be a 4D variable or field.

For more information about the syntax, please refer to the R.F.Cs (Request For Comments) that can be found at the following Internet address: <http://www.w3c.org>.

* Second syntax: **WEB SET HTTP HEADER** (fieldArray; valueArray)  
The HTTP header is defined through two text arrays, *fieldArray* and *valueArray*. The header will be written as follows:

```4d
 fieldArray{1}:="X-VERSION"
 fieldArray{2}:="X-STATUS"
 fieldArray{3}:="Set-Cookie"
 fieldArray{4}:="Server"
 
 valueArray{1}:="HTTP/1.0"*
 valueArray{2}:="200 OK"*
 valueArray{3}:="C=HELLO"
 valueArray{4}:="North_Carolina"
```

\* The first two items are the first line of the reply. When they are entered, they must be the first and second items of the arrays. However, it is possible to omit them and to write only the following (4D will handle the header format):

```4d
 fieldArray{1}:="Set-Cookie"
 valueArray{1}:="C=HELLO"
```

If you do not specify a state, it will automatically be HTTP/1.0 200 OK. By default, the **Server** field is "4D/<version>". The **Date** and **Content-Length** fields are also set by default by 4D. 

#### See also 

[WEB GET HTTP HEADER](web-get-http-header.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 660 |
| Thread safe | &check; |
| Forbidden on the server ||


