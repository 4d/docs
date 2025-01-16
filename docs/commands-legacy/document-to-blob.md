---
id: document-to-blob
title: DOCUMENT TO BLOB
slug: /commands/document-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT TO BLOB.Syntax-->**DOCUMENT TO BLOB** ( *document* ; *blob* )<!-- END REF-->
<!--REF #_command_.DOCUMENT TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Name of the document |
| blob | Blob | &#8596;  | BLOB field or variable to receive the document |
||| | Document contents |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOCUMENT TO BLOB.Summary-->DOCUMENT TO BLOB loads the whole contents of *document* into *blob*.<!-- END REF--> You must pass the name of an existing document that is not already open, otherwise an error will be generated. To let the user choose the document to be loaded into the BLOB, use the command [Open document](open-document.md) and the process variable *document* (see Example).

#### Example 

You write an Information System that enables you to quickly store and retrieve documents. In a data entry form, you create a button that allows you to load a document into a BLOB field. The method for this button could be:

```4d
 $vhDocRef:=Open document("") // Select the document of your choice
 If(OK=1) // If a document has been chosen
    CLOSE DOCUMENT($vhDocRef) // We don't need to keep it open
    DOCUMENT TO BLOB(Document;[YourTable]YourBLOBField) // Load the document
    If(OK=0)
  // Handle error
    End if
 End if
```

#### System variables and sets 

OK is set to 1 if the document is correctly loaded, otherwise OK is set to 0 and an error is generated.

#### Error Handling 

* If you try to load (into a BLOB) a document that does not exist or that is already open by another process or application, the appropriate File Manager error is generated.
* An I/O error can occur if the document is locked, located on a locked volume, or if there is problem in reading the document.
* If there is not enough memory to load the document, an error -108 is generated.

In each case, you can trap the error using an [ON ERR CALL](on-err-call.md) interruption method.

#### See also 

[BLOB TO DOCUMENT](blob-to-document.md)  
[Open document](open-document.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 525 |
| Thread safe | &check; |
| Modifies variables | OK |


