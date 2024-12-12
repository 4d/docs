---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *docRef* ; *offset* {; *anchor*} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number |
| offset | Real | &#8594;  | File position (expressed in bytes) |
| anchor | Integer | &#8594;  | 1 = In relation to the beginning of the file 2 = In relation to the end of the file 3 = In relation to current position |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->This command operates only on a document currently open whose document reference number you pass in *docRef*.<!-- END REF-->

**SET DOCUMENT POSITION** sets the position you pass in *offset* where the next read ([RECEIVE PACKET](receive-packet.md)) or write ([SEND PACKET](send-packet.md)) will occur.

If you omit the optional *anchor* parameter, the position is relative to the beginning of the document. If you do specify the *anchor* parameter, you pass one of the values listed above. 

Depending on the anchor you can pass positive or negative values in *offset*.

#### See also 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  