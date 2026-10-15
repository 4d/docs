---
id: set-document-properties
title: SET DOCUMENT PROPERTIES
slug: /commands/set-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT PROPERTIES.Syntax-->**SET DOCUMENT PROPERTIES** ( *document* : Text ; *locked* : Boolean ; *invisible* : Boolean ; *createdOn* : Date ; *createdAt* : Time ; *modifiedOn* : Date ; *modifiedAt* : Time )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT PROPERTIES.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Document name or Full document pathname |
| locked | Boolean | &#8594;  | Locked (True) or Unlocked (False) |
| invisible | Boolean | &#8594;  | Invisible (True) or Visible (False) |
| createdOn | Date | &#8594;  | Creation date |
| createdAt | Time | &#8594;  | Creation time |
| modifiedOn | Date | &#8594;  | Last modification date |
| modifiedAt | Time | &#8594;  | Last modification time |
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

<!--REF #_command_.SET DOCUMENT PROPERTIES.Summary-->The **SET DOCUMENT PROPERTIES** command changes the information about the document whose name or pathname you pass in *document*.<!-- END REF-->

Before the call:

* Pass True in *locked* to lock the document. A locked document cannot be modified. Pass False in *locked* to unlock a document.
* Pass True in *invisible* to hide the document. Pass False in *invisible* to make the document visible in the desktop windows.
* Pass the document creation date and time in *createdOn* and *createdAt*.
* Pass the document last modification date and time in *modifiedOn* and *modifiedAt*.

The dates and times of creation and last modification are managed by the file manager of your system each time you create or access a document. Using this command, you can change those properties for special purpose. See example for the command [GET DOCUMENT PROPERTIES](../commands/get-document-properties).

## See also 

[GET DOCUMENT PROPERTIES](../commands/get-document-properties)  

## Properties

|  |  |
| --- | --- |
| Command number | 478 |
| Thread safe | yes |
| Modifies variables | error |


