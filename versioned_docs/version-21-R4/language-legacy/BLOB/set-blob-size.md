---
id: set-blob-size
title: SET BLOB SIZE
slug: /commands/set-blob-size
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOB SIZE.Syntax-->**SET BLOB SIZE** ( *blob* : Blob ; *size* : Integer {; *filler* : Integer} )<!-- END REF-->
<!--REF #_command_.SET BLOB SIZE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB field or variable |
| size | Integer | &#8594;  | New size of the BLOB |
| filler | Integer | &#8594;  | ASCII code of filler character |
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

<!--REF #_command_.SET BLOB SIZE.Summary-->SET BLOB SIZE resizes the BLOB *blob* according to the value passed in *size*.<!-- END REF-->

If you want to allocate new bytes to a BLOB and want to have those bytes initialized to a specific value, pass the value (0..255) into the *filler* optional parameter.

### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See [Passing blobs and blob objects to 4D commands](../../Concepts/dt_blob.md#passing-blobs-and-blob-objects-to-4d-commands).

## Error Handling 

If you cannot resize a BLOB due to insufficient memory, the error -108 is generated. You can trap this error using an [ON ERR CALL](../commands/on-err-call) interruption method.

## Example 1 

When you are through with a large process or interprocess BLOB, it is good idea to free the memory it occupies. To do so, write:

```4d
 SET BLOB SIZE(aProcessBLOB;0)
 SET BLOB SIZE(◊anInterprocessBLOB;0)
```

## Example 2 

The following example creates a BLOB of 16K filled of 0xFF:

```4d
 var vxData : Blob
 SET BLOB SIZE(vxData;16*1024;0xFF)
```

## See also 

[BLOB size](../commands/blob-size)  

## Properties

|  |  |
| --- | --- |
| Command number | 606 |
| Thread safe | yes |


