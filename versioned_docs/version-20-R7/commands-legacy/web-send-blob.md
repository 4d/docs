---
id: web-send-blob
title: WEB SEND BLOB
slug: /commands/web-send-blob
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND BLOB.Syntax-->**WEB SEND BLOB** ( *blob* ; *type* )<!-- END REF-->
<!--REF #_command_.WEB SEND BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB to send to the browser |
| type | Text | &#8594;  | Data type of the BLOB |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB SEND BLOB.Summary-->The **WEB SEND BLOB** command allows you to send *blob* to the browser.<!-- END REF--> 

The type of data contained in the BLOB is indicated by *type*. This parameter can be one of the following types: 

* *type* \= **Empty String** (""): In this case, you don’t need to supply any more information in the BLOB. The browser will try to interpret the contents of the BLOB.
* *type* \= **File extension** (example: ".HTM", ".GIF", ".JPEG", etc.): In this case, you specify the MIME type of the data contained in the BLOB by indicating its extension. The BLOB will then be interpreted according to its extension. However, the extension must be a standard one so that the browser can correctly interpret it.
* *type* \= **Mime/Type** (example: “text/html”, “image/tiff”, etc.): In this case, you directly specify the MIME type of data contained in the BLOB. This solution offers you more freedom. Besides the standard types, you can pass a custom MIME type to send proprietary documents via Intranet. To do so, you only need to configure the browsers so that they recognize the type sent and so that they can open the appropriate application. The value you pass to *type* is, in this case, “application/x-\[TypeName\]”. In the client workstations’s browser, you reference this type and associate it to the “Launch the application” action. The WEB SEND BLOB command allows you to therefore send all types of documents, the Intranet clients automatically open the associated application.  
    
**Note:** For more information about MIME types, refer to the page: <http://www.iana.org/assignments/media-types>.

Here is a list of the most common MIME types:

| **Extension** | **Mime/Type**            |
| ------------- | ------------------------ |
| .htm          | text/html                |
| .html         | text/html                |
| .shtml        | text/html                |
| .shtm         | text/html                |
| .css          | text/css                 |
| .pdf          | application/pdf          |
| .rtf          | application/rtf          |
| .ps           | application/postscript   |
| .eps          | application/postscript   |
| .hqx          | application/mac-binhex40 |
| .js           | application/javascript   |
| .json         | application/json         |
| .txt          | text/plain               |
| .text         | text/plain               |
| .gif          | image/gif                |
| .jpg          | image/jpeg               |
| .jpeg         | image/jpeg               |
| .jpe          | image/jpeg               |
| .jfif         | image/jpeg               |
| .pic          | image/pict               |
| .pict         | image/pict               |
| .tif          | image/tiff               |
| .tiff         | image/tiff               |
| .mpeg         | video/mpeg               |
| .mpg          | video/mpeg               |
| .mov          | video/quicktime          |
| .moov         | video/quicktime          |
| .aif          | audio/aiff               |
| .aiff         | audio/aiff               |
| .wav          | audio/wav                |
| .ram          | audio/x-pn-realaudio     |
| .sit          | application/x-stuffit    |
| .bin          | application/x-stuffit    |
| .xml          | application/xml          |
| .z            | application/x-zip        |
| .zip          | application/x-zip        |
| .gz           | application/x-gzip       |
| .tar          | application/x-tar        |

**Note:** The list of MIME types supported by the 4D HTTP server is saved in the "MimeTypes.xml" file found in the following folder of the 4D application: *\[Contents\]\\Native components\\HTTPServer.bundle\\Contents\\Resources*. 

The references to 4D variables and *4DSCRIPT* type tags in the page are always parsed.

#### Example 

Refer to the example of the [PICTURE TO BLOB](picture-to-blob.md) routine.

#### See also 

[WEB SEND FILE](web-send-file.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 654 |
| Thread safe | &check; |
| Forbidden on the server ||


