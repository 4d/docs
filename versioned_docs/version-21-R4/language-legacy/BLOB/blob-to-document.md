---
id: blob-to-document
title: BLOB TO DOCUMENT
slug: /commands/blob-to-document
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO DOCUMENT.Syntax-->**BLOB TO DOCUMENT** ( *document* : Text ; *blob* : Blob )<!-- END REF-->
<!--REF #_command_.BLOB TO DOCUMENT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Name of the document |
| Blob | Blob | &#8594;  | New contents for the document |
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

<!--REF #_command_.BLOB TO DOCUMENT.Summary-->BLOB TO DOCUMENT rewrites the whole contents of *document* using the data stored in *blob*.<!-- END REF--> You can pass the name of a document in *document*. If the *document* does not exist, the command creates it. If you pass the name of an existing document, make sure that it is not already open, otherwise an error is generated. If you want to let the user choose the document, use the commands [Open document](../commands/open-document) or [Create document](../commands/create-document) and use the process variable *document* (see example).

## Example 

You write an Information System that enables you to quickly store and retrieve documents. In a data entry form, you create a button which allows you to save a document that will contain the data previously loaded into a BLOB field. The method for this button could be:

```4d
 $vhDocRef:=Create document("") // Save the document of your choice
 If(OK=1) // If a document has been created
    CLOSE DOCUMENT($vhDocRef) // We don't need to keep it open
    BLOB TO DOCUMENT(Document;[YourTable]YourBLOBField) // Write the document contents
    If(OK=0)
  // Handle error
    End if
 End if
```

## System variables and sets 

OK is set to 1 if the document is correctly written, otherwise OK is set to 0 and an error is generated.

## Error Handling 

* If you try to rewrite a document that does not exist or that is already open by another process or application, the appropriate File Manager error is generated.
* The disk space may be insufficient for writing the new contents of the document.
* I/O errors can occur while writing the document.

In all cases, you can trap the error using an [ON ERR CALL](../commands/on-err-call) interruption method.

## See also 

[Create document](../commands/create-document)  
[DOCUMENT TO BLOB](../commands/document-to-blob)  
[Open document](../commands/open-document)  

## Properties

|  |  |
| --- | --- |
| Command number | 526 |
| Thread safe | yes |
| Modifies variables | OK, error |


