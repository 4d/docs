---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* ; *size* )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number |
| size | Real | &#8594;  | New size expressed in bytes |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->The **SET DOCUMENT SIZE** command sets the size of a document to the number of bytes you pass in *size*.<!-- END REF--> 

If the document is open, you pass its document reference number in *docRef*.

On Macintosh, the size of the document's data fork is changed.

#### See also 

[Get document position](get-document-position.md)  
[Get document size](get-document-size.md)  
[SET DOCUMENT POSITION](set-document-position.md)  