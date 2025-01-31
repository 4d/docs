---
id: delete-from-blob
title: DELETE FROM BLOB
slug: /commands/delete-from-blob
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM BLOB.Syntax-->**DELETE FROM BLOB** ( *blob* ; *offset* ; *len* )<!-- END REF-->
<!--REF #_command_.DELETE FROM BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB from which to delete bytes |
| offset | Integer | &#8594;  | Starting offset where bytes will be deleted |
| len | Integer | &#8594;  | Number of bytes to be deleted |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE FROM BLOB.Summary-->The DELETE FROM BLOB command deletes the number of bytes specified by *len* from the BLOB *blob* at the position specified by *offset* (expressed relative to the beginning of the BLOB).<!-- END REF--> The BLOB then becomes *len* bytes smaller.

##### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### See also 

[INSERT IN BLOB](insert-in-blob.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 560 |
| Thread safe | &check; |


