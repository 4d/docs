---
id: integer-to-blob
title: INTEGER TO BLOB
slug: /commands/integer-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.INTEGER TO BLOB.Syntax-->**INTEGER TO BLOB** ( *entier* ; *blob* ; *ordreOctet* {; offset | *} )<!-- END REF-->
<!--REF #_command_.INTEGER TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| entier | Integer | &#8594;  | Integer value to write into the BLOB |
| blob | Blob | &#8594;  | BLOB to receive the Integer value |
| ordreOctet | Integer | &#8594;  | 0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering |
| offset &#124; * | Variable, Operator | &#8596;  | Offset expressed in bytes within the BLOB or * to append the value |
| ||| New offset after writing if not * |

<!-- END REF-->

#### Description 

<!--REF #_command_.INTEGER TO BLOB.Summary-->The INTEGER TO BLOB command writes the 2-byte Integer value *integer* into the BLOB *blob*.<!-- END REF-->

The *byteOrder* parameter fixes the byte ordering of the 2-byte Integer value to be written. You pass one of the following predefined constants provided by 4D:

| Constant                | Type    | Value |
| ----------------------- | ------- | ----- |
| Macintosh byte ordering | Integer | 1     |
| Native byte ordering    | Integer | 0     |
| PC byte ordering        | Integer | 2     |

**Note regarding Platform Independence:** If you exchange BLOBs between the Macintosh and PC platforms, it is up to you to manage byte swapping issues when using this command.

If you specify the \* optional parameter, the 2-byte Integer value is appended to the BLOB and the size of the BLOB is extended accordingly. Using the \* optional parameter, you can sequentially store any number of Integer, Long Integer, Real or Text values (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory. 

If you do not specify the \* optional parameter or the *offset* variable parameter, the 2-byte Integer value is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly.

If you pass the *offset* variable parameter, the 2-byte Integer value is written at the byte offset (starting from zero) within the BLOB. No matter where you write the 2-byte Integer value, the size of the BLOB is increased according to the location you passed (plus up to 2 bytes, if necessary). Newly allocated bytes, other than the ones you are writing, are initialized to zero.

After the call, the *offset* variable parameter is returned, incremented by the number of bytes that have been written. Therefore, you can reuse that same variable with another BLOB writing command to write another value.

##### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### Example 1 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 INTEGER TO BLOB(518;vxBlob;Macintosh byte ordering;vlOffset)
```

* The size of *vxBlob* is 100 bytes
* On all platforms *vxBLOB{50}* \= *$02* and *vxBLOB{51}* \= *$06*
* The other bytes of the BLOB are left unchanged
* The variable *vlOffset* has been incremented by 2 (and is now equal to 52)

#### Example 2 

After executing this code:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering)
```

* The size of *vxBlob* is 2 bytes
* On all platforms *vxBLOB{0}* \= *$06* and *vxBLOB{1}* \= *$02*

#### Example 3 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;100)
 INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering;*)
```

* The size of *vxBlob* is 102 bytes
* On all platforms *vxBLOB{100}* \= *$06* and *vxBLOB{101}* \= *$02*
* The other bytes of the BLOB are left unchanged

#### Example 4 

After executing this code:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Native byte ordering)
```

* The size of *vxBlob* is 2 bytes
* On PowerPC platform: *vxBLOB{0}* \= *$02* and *vxBLOB{1}* \= *$06*
* On Intel platform: *vxBLOB{0}* \= *$06* and *vxBLOB{1}* \= *$02*

#### Example 5 

After executing this code:

```4d
 INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering)
```

* The size of *vxBlob* is 2 bytes
* On all platforms *vxBLOB{0}* \= *$02* and *vxBLOB{1}* \= *$06*

#### See also 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  