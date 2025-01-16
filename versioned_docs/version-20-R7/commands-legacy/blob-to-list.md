---
id: blob-to-list
title: BLOB to list
slug: /commands/blob-to-list
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to list.Syntax-->**BLOB to list** ( *blob* {; *offset*} ) : ListRef<!-- END REF-->
<!--REF #_command_.BLOB to list.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB containing a hierarchical list |
| offset | Integer | &#8596;  | Offset within the BLOB (expressed in bytes) |
|||| New offset after reading |
| Function result | ListRef | &#8592; | Reference to newly created list |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to list.Summary-->The BLOB to list command creates a new hierarchical list with the data stored within the BLOB *blob* at the byte offset (starting at zero) specified by *offset* and returns a List Reference number for that new list.<!-- END REF-->

The BLOB data must be consistent with the command. Typically, you will use BLOBs that you previously filled out using the command [LIST TO BLOB](list-to-blob.md).

If you do not specify the optional *offset* parameter, the list data is read starting from the beginning of the BLOB. If you deal with a BLOB in which several variables or lists have been stored, you must pass the *offset* parameter and, in addition, you must pass a numeric variable. Before the call, set this numeric variable to the appropriate offset. After the call, that same numeric variable returns the offset of the next variable stored within the BLOB.

After the call, if the hierarchical list has been successfully created, the OK variable is set to 1\. If the operation could not be performed, the OK variable is set to 0; for example, if there was not enough memory.

**Note regarding Platform Independence:** BLOB to list and [LIST TO BLOB](list-to-blob.md) use a 4D internal format for handling lists stored in BLOBs. As a benefit, you do not need to worry about byte swapping between platforms when using these two commands. In other words, a BLOB created on Windows using those two commands can be reused on Macintosh and vice-versa.

#### Example 

In this example, the form method for a data entry form extracts a list from a BLOB field before the form appears on the screen, and stores it back to the BLOB field if the data entry is validated:

```4d
  // [Things To Do];"Input" Form Method
 
 Case of
 
    :(FORM Event=On Load)
       hList:=BLOB to list([Things To Do]Other Crazy Ideas)
       If(OK=0)
          hList:=New list
       End if
 
    :(FORM Event=On Unload)
       CLEAR LIST(hList;*)
 
    :(bValidate=1)
       LIST TO BLOB(hList;[Things To Do]Other Crazy Ideas)
 
 End case
```

#### System variables and sets 

The OK variable is set to 1 if the list has been successfully created, otherwise it is set to 0.

#### See also 

[LIST TO BLOB](list-to-blob.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 557 |
| Thread safe | &cross; |
| Modifies variables | OK |


