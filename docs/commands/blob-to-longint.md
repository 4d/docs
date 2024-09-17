---
id: blob-to-longint
title: BLOB to longint
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to longint.Syntax-->**BLOB to longint** ( *blob* ; *byteOrder* {; *offset*} ) -> Function result<!-- END REF-->
<!--REF #_command_.BLOB to longint.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | BLOB | -> | BLOB from which to get the Long Integer value |
| byteOrder | Longint | -> | 0 = Native byte ordering, 1 = Macintosh byte ordering, 2 = PC byte ordering |
| offset | Variable | -> | Offset within the BLOB (expressed in bytes) |
| <-> | New offset after reading |
| Function result | Longint | <- | 4-byte Long Integer value |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to longint.Summary-->The BLOB to longint command returns a 4-byte Long Integer value read from the BLOB *blob*.<!-- END REF-->

The *byteOrder* parameter fixes the byte ordering of the 4-byte Long Integer value to be read. You pass one of the following predefined constants provided by 4D:

| Constant                | Type    | Value |
| ----------------------- | ------- | ----- |
| Macintosh byte ordering | Longint | 1     |
| Native byte ordering    | Longint | 0     |
| PC byte ordering        | Longint | 2     |

**Note regarding Platform Independence:** If you exchange BLOBs between Macintosh and PC platforms, it is up to you to manage byte swapping issues while using this command.

If you specify the optional *offset* variable parameter, the 4-byte Long Integer is read at the offset (starting from zero) within the BLOB. If you do not specify the optional *offset* variable parameter, the first four bytes of the BLOB are read.

**Note:** You should pass an offset value between *0* (zero) and the size of the BLOB minus 4\. If you do not do so, an error -111 is generated.

After the call, the variable is incremented by the number of bytes read. Therefore, you can reuse that same variable with another BLOB reading command to read another value.

#### Example 

The following example reads 20 Long Integer values from a BLOB, starting at the offset 0x200:

```4d
 $vlOffset:=0x200
 For($viLoop;0;19)
    $vlValue:=BLOB to longint(vxSomeBlob;PC byte ordering;$vlOffset)
  // Do something with $vlValue
 End for
```

#### See also 

[BLOB to integer](blob-to-integer.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  