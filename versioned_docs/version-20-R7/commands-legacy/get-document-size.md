---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* {; *} ) : Real<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text, Time | &#8594;  | Document reference number or Document name |
| * | Operator | &#8594;  | On Mac OS only: - if omitted, size of data fork - if specified, size of resource fork |
| Function result | Real | &#8592; | Size (expressed in bytes) of the document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get document size.Summary-->The Get document size command returns the size, expressed in bytes, of a document.<!-- END REF-->

If the document is open, you pass its document reference number in *document*.

If the document is not open, you pass its name or pathname in *document*.

On Macintosh, if you do not pass the optional *\** parameter, the size of the data fork is returned. If you do pass the *\** parameter, the size of the resource fork is returned.

#### See also 

[Get document position](get-document-position.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET DOCUMENT SIZE](set-document-size.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 479 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


