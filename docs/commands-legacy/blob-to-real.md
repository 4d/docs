---
id: blob-to-real
title: BLOB to real
slug: /commands-legacy/blob-to-real
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to real.Syntax-->**BLOB to real** ( *blob* ; *realFormat* {; *offset*} ) -> Function result<!-- END REF-->
<!--REF #_command_.BLOB to real.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | BLOB | &#x1F852; | BLOB from which to get the Real value |
| realFormat | Longint | &#x1F852; | 0=Native real format, 1=Extended real format, 2=Macintosh Double real format, 3=Windows Double real format |
| offset | Variable | &#x1F852; | Offset within the BLOB (expressed in bytes) |
| &#x1F858; | New offset after reading |
| Function result | Real | &#x1F850; | Real value |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to real.Summary-->The BLOB to real command returns a Real value read from the BLOB *blob*.<!-- END REF-->

The *realFormat* parameter fixes the internal format and byte ordering of the Real value to be read. You pass one of the following predefined constants provided by 4D:

| Constant                     | Type    | Value |
| ---------------------------- | ------- | ----- |
| Extended real format         | Longint | 1     |
| Macintosh double real format | Longint | 2     |
| Native real format           | Longint | 0     |
| PC double real format        | Longint | 3     |

**Note regarding Platform Independence:** If you exchange BLOBs between Macintosh and PC platforms, it is up to you to manage real formats and byte swapping issues while using this command.

If you specify the optional *offset* variable parameter, the Read value is read at the offset (starting from zero) within the BLOB. If you do not specify the optional *offset* variable parameter, the first 8 or 10 bytes of the BLOB are read.

**Note:** You should pass an offset value between *0* (zero) and the size of the BLOB minus 8 or 10\. If you do not do so, an error -111 is generated.

After the call, the variable is incremented by the number of bytes read. Therefore, you can reuse that same variable with another BLOB reading command to read another value.

#### Example 

The following example reads 20 Real values from a BLOB, starting at the offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vrValue:=BLOB to real(vxSomeBlob;PC byte ordering;$vlOffset)
  // Do something with $vrValue
 End for
```

#### See also 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  