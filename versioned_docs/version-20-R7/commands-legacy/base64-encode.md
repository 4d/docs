---
id: base64-encode
title: BASE64 ENCODE
slug: /commands/base64-encode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 ENCODE.Syntax-->**BASE64 ENCODE** ( *toEncode* {; *encoded*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 ENCODE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| toEncode | Blob, Text | &#8594;  | Value to encode |
| &#8592; | Encoded value (if encoded parameter omitted) |
| encoded | Blob, Text | &#8592; | Encoded value |
| * | Operator | &#8594;  | Encode in Base64URL format |

<!-- END REF-->

#### Description 

<!--REF #_command_.BASE64 ENCODE.Summary-->The **BASE64 ENCODE** command encodes the text or blob value passed in the *toEncode* parameter in Base64 or Base64URL format.<!-- END REF--> 

Base64 encoding modifies 8-bit coded data so that they do not keep more than 7 useful bits. This encoding is required, for example, for handling blobs using xml. Base64URL is an alernative encoding with a specific processing for URLs and filenames (see [rfc4648](https://tools.ietf.org/html/rfc4648#section-5)). 

Pass in *toEncode* a text or blob value to encode.

**Note:** When you pass a text value, the command encodes the utf-8 representation of the text.

If you pass the *encoded* parameter, it receives the encoded contents of *toEncode* as text or blob at the end of command execution. In this case, the toEncode parameter itself is not modified by the command. 

If you omit the *encoded* parameter, the command directly modifies the *toEncode* parameter.

By default if the *\** parameter is omitted, the command uses a Base64 encoding. If you pass the *\** parameter, the command uses a Base64URL encoding.

#### See also 

[BASE64 DECODE](base64-decode.md)  
[Generate digest](generate-digest.md)  
*Overview of XML DOM Commands*  
[XML DECODE](xml-decode.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 895 |
| Thread safe | &check; |


