---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *document* {; *} ) -> Function result<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | String, DocRef | &#x1F852; | Document reference number or Document name |
| * | Operator | &#x1F852; | On Mac OS only: - if omitted, size of data fork - if specified, size of resource fork |
| Function result | Real | &#x1F850; | Size (expressed in bytes) of the document |

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