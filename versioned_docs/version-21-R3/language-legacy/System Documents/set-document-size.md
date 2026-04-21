---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* : Time ; *size* : Real )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number |
| size | Real | &#8594;  | New size expressed in bytes |
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

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->The **SET DOCUMENT SIZE** command sets the size of a document to the number of bytes you pass in *size*.<!-- END REF--> 

If the document is open, you pass its document reference number in *docRef*.

On Macintosh, the size of the document's data fork is changed.

## See also 

[Get document position](../commands/get-document-position)  
[Get document size](../commands/get-document-size)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Properties

|  |  |
| --- | --- |
| Command number | 480 |
| Thread safe | yes |


