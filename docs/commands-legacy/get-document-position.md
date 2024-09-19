---
id: get-document-position
title: Get document position
slug: /commands-legacy/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | DocRef | &#x1F852; | Document reference number |
| Function result | Real | &#x1F850; | File position (expressed in bytes) from the beginning of the file |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get document position.Summary-->This command operates only on a document that is currently open whose document reference number you pass in *docRef*.<!-- END REF-->

**Get document position** returns the position, starting from the beginning of the document, where the next read ([RECEIVE PACKET](receive-packet.md)) or write ([SEND PACKET](send-packet.md)) will occur.

#### See also 

[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  