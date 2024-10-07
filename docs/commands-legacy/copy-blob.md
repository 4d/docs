---
id: copy-blob
title: COPY BLOB
slug: /commands/copy-blob
displayed_sidebar: docs
---

<!--REF #_command_.COPY BLOB.Syntax-->**COPY BLOB** ( *srcBLOB* ; *dstBLOB* ; *srcOffset* ; *dstOffset* ; *len* )<!-- END REF-->
<!--REF #_command_.COPY BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| srcBlob | Blob | &srarr; | Source BLOB |
| dstBlob | Blob | &srarr; | Destination BLOB |
| srcOffset | Integer | &srarr; | Source position for the copy |
| dstOffset | Integer | &srarr; | Destination position for the copy |
| len | Integer | &srarr; | Number of bytes to be copied |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY BLOB.Summary-->The COPY BLOB command copies the number of bytes specified by *len* from the BLOB *srcBLOB* to the BLOB *dstBLOB*.<!-- END REF-->

The copy starts at the position (expressed relative to the beginning of the source BLOB) specified by *srcOffset* and takes place at the position (expressed relative to the beginning of the destination BLOB) specified by *dstOffset*.

**Note:** The destination BLOB can be resized if necessary.

#### See also 

[DELETE FROM BLOB](delete-from-blob.md)  
[INSERT IN BLOB](insert-in-blob.md)  