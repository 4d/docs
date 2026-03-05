---
id: append-document
title: Append document
slug: /commands/append-document
displayed_sidebar: docs
---

<!--REF #_command_.Append document.Syntax-->**Append document** ( *document* : Text {; *fileType* : Text} ) : Time<!-- END REF-->
<!--REF #_command_.Append document.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Document name or Full document pathname or Empty string for standard file dialog box |
| fileType | Text | &#8594;  | List of types of documents to be screened, or "*" to not screen the documents |
| Function result | Time | &#8592; | Document reference number |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Append document.Summary-->The **Append document** command does the same as thing as [Open document](../commands/open-document): it opens a document on disk.<!-- END REF-->

The only difference is that **Append document** sets the file position at the end of the document while [Open document](../commands/open-document) sets its at the beginning of the document.

Refer to [Open document](../commands/open-document) for more details about using **Append document**.

## Example 

The following example opens an existing document called Note, appends the string "and so long" and a carriage return onto the end of the document, and closes the document. If the document already contained the string "Good-bye", the document would now contain the string “Good-bye and so long”, followed by a carriage return:

```4d
 var vhDocRef : Time
 vhDocRef:=Append document("Note.txt") //Open Note document
 SEND PACKET(vhDocRef;" and so long"+Char(13)) //Append a string
 CLOSE DOCUMENT(vhDocRef) //Close the document
```

## See also 

[Create document](../commands/create-document)  
[Open document](../commands/open-document)  

## Properties

|  |  |
| --- | --- |
| Command number | 265 |
| Thread safe | yes |
| Modifies variables | OK, Document, error |


