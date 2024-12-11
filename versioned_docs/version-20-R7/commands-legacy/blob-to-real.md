---
id: blob-to-real
title: BLOB to real
slug: /commands/blob-to-real
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to real.Syntax-->**BLOB to real** ( *blob* ; *realFormat* {; *offset*} ) : Real<!-- END REF-->
<!--REF #_command_.BLOB to real.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB from which to get the Real value |
| realFormat | Integer | &#8594;  | 0=Native real format, 1=Extended real format, 2=Macintosh Double real format, 3=Windows Double real format |
| offset | Variable | &#8596;  | Offset within the BLOB (expressed in bytes) |
|||| New offset after reading |
| Function result | Real | &#8592; | Real value |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to real.Summary-->The BLOB to real command returns a Real value read from the BLOB *blob*.<!-- END REF-->

The *realFormat* parameter fixes the internal format and byte ordering of the Real value to be read. You pass one of the following predefined constants provided by 4D:

| Constant                     | Type    | Value |
| ---------------------------- | ------- | ----- |
| Extended real format         | Integer | 1     |
| Macintosh double real format | Integer | 2     |
| Native real format           | Integer | 0     |
| PC double real format        | Integer | 3     |

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

#### Properties
|  |  |
| --- | --- |
| Command number | 553 |
| Thread safe | &check; |
| Forbidden on the server ||


