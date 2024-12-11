---
id: close-document
title: CLOSE DOCUMENT
slug: /commands/close-document
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE DOCUMENT.Syntax-->**CLOSE DOCUMENT** ( *docRef* )<!-- END REF-->
<!--REF #_command_.CLOSE DOCUMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLOSE DOCUMENT.Summary-->**CLOSE DOCUMENT** closes the document specified by *docRef*.<!-- END REF-->

Closing a document is the only way to ensure that the data written to a file is saved. You must close all the documents you open with the commands [Open document](open-document.md), [Create document](create-document.md) or [Append document](append-document.md).

#### Example 

The following example lets the user create a new document, writes the string “Hello” into it, and closes the document:

```4d
 var vhDocRef : Time
 vhDocRef:=Create document("")
 If(OK=1)
    SEND PACKET(vhDocRef;"Hello") // Write one word into the document
    CLOSE DOCUMENT(vhDocRef) // Close the document
 End if
```

#### See also 

[Append document](append-document.md)  
[Create document](create-document.md)  
[Open document](open-document.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 267 |
| Thread safe | &check; |
| Forbidden on the server ||


