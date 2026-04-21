---
id: close-document
title: CLOSE DOCUMENT
slug: /commands/close-document
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE DOCUMENT.Syntax-->**CLOSE DOCUMENT** ( *docRef* : Time )<!-- END REF-->
<!--REF #_command_.CLOSE DOCUMENT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CLOSE DOCUMENT.Summary-->**CLOSE DOCUMENT** closes the document specified by *docRef*.<!-- END REF-->

Closing a document is the only way to ensure that the data written to a file is saved. You must close all the documents you open with the commands [Open document](../commands/open-document), [Create document](../commands/create-document) or [Append document](../commands/append-document).

## Example 

The following example lets the user create a new document, writes the string “Hello” into it, and closes the document:

```4d
 var vhDocRef : Time
 vhDocRef:=Create document("")
 If(OK=1)
    SEND PACKET(vhDocRef;"Hello") // Write one word into the document
    CLOSE DOCUMENT(vhDocRef) // Close the document
 End if
```

## See also 

[Append document](../commands/append-document)  
[Create document](../commands/create-document)  
[Open document](../commands/open-document)  

## Properties

|  |  |
| --- | --- |
| Command number | 267 |
| Thread safe | yes |


