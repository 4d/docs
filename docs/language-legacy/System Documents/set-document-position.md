---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *docRef* : Time ; *offset* : Real {; *anchor* : Integer} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number |
| offset | Real | &#8594;  | File position (expressed in bytes) |
| anchor | Integer | &#8594;  | 1 = In relation to the beginning of the file 2 = In relation to the end of the file 3 = In relation to current position |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->This command operates only on a document currently open whose document reference number you pass in *docRef*.<!-- END REF-->sets the position you pass in *offset* where the next read ([RECEIVE PACKET](../commands/receive-packet)) or write ([SEND PACKET](../commands/send-packet)) will occur.

If you omit the optional *anchor* parameter, the position is relative to the beginning of the document. If you do specify the *anchor* parameter, you pass one of the values listed above. 

Depending on the anchor you can pass positive or negative values in *offset*.

## See also 

[Get document position](../commands/get-document-position)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## Properties

|  |  |
| --- | --- |
| Command number | 482 |
| Thread safe | yes |


