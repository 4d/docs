---
id: list-to-blob
title: LIST TO BLOB
slug: /commands/list-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LIST TO BLOB.Syntax-->**LIST TO BLOB** ( *list* : Integer ; *blob* : Blob {; *} )<!-- END REF-->
<!--REF #_command_.LIST TO BLOB.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | Hierarchical list to store in the BLOB |
| Blob | Blob | &#8594;  | BLOB to receive the Hierarchical list |
| * | Operator | &#8594;  | * to append the value |
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

<!--REF #_command_.LIST TO BLOB.Summary-->The LIST TO BLOB command stores the hierarchical list *list* in the BLOB *blob*.<!-- END REF-->

If you specify the \* optional parameter, the hierarchical list is appended to the BLOB and the size of the BLOB is extended accordingly. Using the \* optional parameter, you can sequentially store any number of variables or lists (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory. 

If you do not specify the \* optional parameter, the hierarchical list is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly.

Wherever the hierarchical list is stored, the size of the BLOB will be increased if necessary according to the specified location (plus up to the size of the list if necessary). Modified bytes (other than the ones you set) are reset to 0 (zero). 

**WARNING:** If you use a BLOB for storing lists, you must later use the command [BLOB to list](../commands/blob-to-list) for reading back the contents of the BLOB, because lists are stored in BLOBs using a 4D internal format.

After the call, if the list has been successfully stored, the OK variable is set to 1\. If the operation could not be performed, the OK variable is set to 0; for example, if there was not enough memory.

**Note regarding Platform Independence:** LIST TO BLOB and [BLOB to list](../commands/blob-to-list) use a 4D internal format for handling lists stored in BLOBs. As a benefit, you do not need to worry about byte swapping between platforms when using these two commands. In other words, a BLOB created on Windows using those commands can be reused on Macintosh, and vice-versa.

### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See [Passing blobs and blob objects to 4D commands](../../Concepts/dt_blob.md#passing-blobs-and-blob-objects-to-4d-commands).

## Example 

See example for the command [BLOB to list](../commands/blob-to-list).

## See also 

[BLOB to list](../commands/blob-to-list)  
[BLOB TO VARIABLE](../commands/blob-to-variable)  
[SAVE LIST](../commands/save-list)  
[VARIABLE TO BLOB](../commands/variable-to-blob)  

## Properties

|  |  |
| --- | --- |
| Command number | 556 |
| Thread safe | no |
| Modifies variables | OK |


