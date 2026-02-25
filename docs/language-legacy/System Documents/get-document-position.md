---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* : Time ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number |
| Function result | Real | &#8592; | File position (expressed in bytes) from the beginning of the file |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get document position.Summary-->This command operates only on a document that is currently open whose document reference number you pass in *docRef*.<!-- END REF-->returns the position, starting from the beginning of the document, where the next read ([RECEIVE PACKET](../commands/receive-packet)) or write ([SEND PACKET](../commands/send-packet)) will occur.

## See also 

[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Properties

|  |  |
| --- | --- |
| Command number | 481 |
| Thread safe | yes |


