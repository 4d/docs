---
id: insert-in-blob
title: INSERT IN BLOB
slug: /commands/insert-in-blob
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN BLOB.Syntax-->**INSERT IN BLOB** ( *blob* ; *offset* ; *len* {; *filler*} )<!-- END REF-->
<!--REF #_command_.INSERT IN BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB into which bytes will be inserted |
| offset | Integer | &#8594;  | Starting position where bytes will be inserted |
| len | Integer | &#8594;  | Number of bytes to be inserted |
| filler | Integer | &#8594;  | Default byte value (0x00..0xFF) 0x00 if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.INSERT IN BLOB.Summary-->The INSERT IN BLOB command inserts the number of bytes specified by *len* into the BLOB *blob* at the position specified by *offset*.<!-- END REF--> The BLOB then becomes *len* bytes larger.

If you do not specify the optional *filler* parameter, the bytes inserted into the BLOB are set to *0x00*. Otherwise, the bytes are set to the value you pass in *filler* (modulo 256 — 0..255).

Before the call, you pass in the *offset* parameter the position of the insertion relative to the beginning of the BLOB. 

##### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### See also 

[DELETE FROM BLOB](delete-from-blob.md)  