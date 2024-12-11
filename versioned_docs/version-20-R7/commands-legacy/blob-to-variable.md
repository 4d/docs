---
id: blob-to-variable
title: BLOB TO VARIABLE
slug: /commands/blob-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO VARIABLE.Syntax-->**BLOB TO VARIABLE** ( *blob* ; *variable* {; *offset*} )<!-- END REF-->
<!--REF #_command_.BLOB TO VARIABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB containing 4D variables |
| variable | Variable | &#8592; | Variable to write with BLOB contents |
| offset | Integer | &#8596;  | Position of variable within BLOB |
| ||| Position of following variable within BLOB |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB TO VARIABLE.Summary-->The BLOB TO VARIABLE command rewrites the variable *variable* with the data stored within the BLOB *blob* at the byte offset (starting at zero) specified by *offset*.<!-- END REF-->

The BLOB data must be consistent with the destination variable. Typically, you will use BLOBs that you previously filled out using the command [VARIABLE TO BLOB](variable-to-blob.md).

If you do not specify the optional *offset* parameter, the variable data is read starting from the beginning of the BLOB. If you deal with a BLOB in which several variables have been stored, you must pass the *offset* parameter and, in addition, you must pass a numeric variable. Before the call, set this numeric variable to the appropriate offset. After the call, that same numeric variable returns the offset of the next variable stored within the BLOB.

**Note:** **BLOB TO VARIABLE** supports object and collection variables. For more information, refer to the [VARIABLE TO BLOB](variable-to-blob.md) command.

After the call, if the variable has been successfully rewritten, the OK variable is set to 1\. If the operation could not be performed, the OK variable is set to 0; for example, if there was not enough memory.

**Note regarding Platform Independence:** BLOB TO VARIABLE and [VARIABLE TO BLOB](variable-to-blob.md) use a 4D internal format for handling variables stored in BLOBs. As a benefit, you do not need to worry about byte swapping between platforms while using these two commands. In other words, a BLOB created on Windows using either of these commands can be reused on Macintosh, and vice-versa.

#### Example 

See the examples for the [VARIABLE TO BLOB](variable-to-blob.md) command.

#### System variables and sets 

The OK variable is set to 1 if the variable has been successfully rewritten, otherwise it is set to 0.

#### See also 

[VARIABLE TO BLOB](variable-to-blob.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 533 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


