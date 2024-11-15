---
id: blob-to-integer
title: BLOB to integer
slug: /commands/blob-to-integer
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to integer.Syntax-->**BLOB to integer** ( *blob* ; *byteOrder* {; *offset*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to integer.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB from which to get the integer value |
| byteOrder | Integer | &#8594;  | 0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering |
| offset | Variable | &#8596;  | Offset within the BLOB (expressed in bytes) |
| ||| New offset after reading |
| Function result | Integer | &#8592; | 2-byte Integer value |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to integer.Summary-->The BLOB to integer command returns a 2-byte Integer value read from the BLOB *blob*.<!-- END REF-->

The *byteOrder* parameter fixes the byte ordering of the 2-byte Integer value to be read. You pass one of the following predefined constants provided by 4D:

| Constant                | Type    | Value |
| ----------------------- | ------- | ----- |
| Macintosh byte ordering | Integer | 1     |
| Native byte ordering    | Integer | 0     |
| PC byte ordering        | Integer | 2     |

**Note regarding Platform Independence:** If you exchange BLOBs between Macintosh and PC platforms, it is up to you to manage byte swapping issues when using this command.

If you specify the optional *offset* variable parameter, the 2-byte Integer value is read at the offset (starting from zero) within the BLOB. If you do not specify the optional *offset* variable parameter, the first two bytes of the BLOB are read.

**Note:** You should pass an offset (in bytes) value between *0* (zero) and the size of the BLOB minus 2\. If you do not do so, an error -111 is generated.

After the call, the variable is incremented by the number of bytes read, Therefore, you can reuse that same variable with another BLOB reading command to read another value.

#### Example 

The following example reads 20 Integer values from a BLOB, starting at the offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $viValue:=BLOB to integer(vxSomeBlob;PC byte ordering;$vlOffset)
  // Do something with $viValue
 End for
```

#### See also 

[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  