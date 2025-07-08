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

## Description 

<!--REF #_command_.WEB SEND BLOB.Summary-->The **WEB SEND BLOB** command allows you to send *blob* to the browser.<!-- END REF--> 

The type of data contained in the BLOB is indicated by *type*. This parameter can be one of the following types: 

* *type* \= **Empty String** (""): In this case, you don’t need to supply any more information in the BLOB. The browser will try to interpret the contents of the BLOB.
* *type* \= **File extension** (example: ".HTM", ".GIF", ".JPEG", etc.): In this case, you specify the MIME type of the data contained in the BLOB by indicating its extension. The BLOB will then be interpreted according to its extension. However, the extension must be a standard one so that the browser can correctly interpret it.
* *type* \= **Mime/Type** (example: “text/html”, “image/tiff”, etc.): In this case, you directly specify the MIME type of data contained in the BLOB. This solution offers you more freedom. Besides the standard types, you can pass a custom MIME type to send proprietary documents via Intranet. To do so, you only need to configure the browsers so that they recognize the type sent and so that they can open the appropriate application. The value you pass to *type* is, in this case, “application/x-\[TypeName\]”. In the client workstations’s browser, you reference this type and associate it to the “Launch the application” action. The WEB SEND BLOB command allows you to therefore send all types of documents, the Intranet clients automatically open the associated application.  
    
**Note:** For more information about MIME types, refer to the page: <http://www.iana.org/assignments/media-types>.

The list of MIME types and their file extensions supported by the 4D HTTP server is saved in the "MimeTypes.xml" file found in the "Resources" folder of the 4D application.

The references to 4D variables and *4DSCRIPT* type tags in the page are always parsed.

## Example 

Refer to the example of the [PICTURE TO BLOB](picture-to-blob.md) routine.

## See also 

[WEB SEND FILE](web-send-file.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 654 |
| Thread safe | &check; |


