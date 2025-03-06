---
id: longint-to-blob
title: LONGINT TO BLOB
slug: /commands/longint-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT TO BLOB.Syntax-->**LONGINT TO BLOB** ( *longInt* ; *blob* ; *byteOrder* {; offset | *} )<!-- END REF-->
<!--REF #_command_.LONGINT TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| longInt | Integer | &#8594;  | Long Integer value to write into the BLOB |
| blob | Blob | &#8594;  | BLOB to receive the Long Integer value |
| byteOrder | Integer | &#8594;  | 0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering |
| offset &#124; * | Variable, Operator | &#8596;  | Offset within the BLOB (expressed in bytes) or * to append the value |
|||| New offset after writing if not * |

<!-- END REF-->

#### Description 

<!--REF #_command_.LONGINT TO BLOB.Summary-->The LONGINT TO BLOB command writes the 4-byte Long Integer value *integer* into the BLOB *blob*.<!-- END REF-->

The *byteOrder* parameter fixes the byte ordering of the 4-byte Long Integer value to be written. You pass one of the following predefined constants provided by 4D:

| Constant                | Type    | Value |
| ----------------------- | ------- | ----- |
| Macintosh byte ordering | Integer | 1     |
| Native byte ordering    | Integer | 0     |
| PC byte ordering        | Integer | 2     |

**Note regarding Platform Independence:** If you exchange BLOBs between Macintosh and PC platforms, it is up to you to manage byte swapping issues while using this command.

If you specify the \* optional parameter, the 4-byte Long Integer value is appended to the BLOB and the size of the BLOB is extended accordingly. Using the \* optional parameter, you can sequentially store any number of Integer, Long Integer, Real or Text values (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory. 

If you do not specify the \* optional parameter nor the *offset* variable parameter, the 4-byte Long Integer value is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly.

If you pass the *offset* variable parameter, the 4-byte Long Integer value is written at the offset (starting from zero) within the BLOB. No matter where you write the 4-byte Long Integer value, the size of the BLOB is increased according to the location you passed (plus up to 4 bytes, if necessary). New allocated bytes, other than the ones you are writing, are initialized to zero.

After the call, the *offset* variable parameter is returned, incremented by the number of bytes that have been written. Therefore, you can reuse that same variable with another BLOB writing command to write another value.

##### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### Example 1 

After executing this code:

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;Native byte ordering)
```

* The size of *vxBlob* is 4 bytes
* On PowerPC platform: *vxBLOB{0}=$01*, *vxBLOB{1}=$02*, *vxBLOB{2}=$03*, *vxBLOB{3}=$04*
* On Intel platform: *vxBLOB{0}=$04*, *vxBLOB{1}=$03*, *vxBLOB{2}=$02*, *vxBLOB{3}=$01*

#### Example 2 

After executing this code:

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering)
```

* The size of *vxBlob* is 4 bytes
* On all platforms *vxBLOB{0}=$01*, *vxBLOB{1}=$02*, *vxBLOB{2}=$03*, *vxBLOB{3}=$04*

#### Example 3 

After executing this code:

```4d
 LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering)
```

* The size of *vxBlob* is 4 bytes
* On all platforms *vxBLOB{0}=$04*, *vxBLOB{1}=$03*, *vxBLOB{2}=$02*, *vxBLOB{3}=$01*

#### Example 4 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;100)
 LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering;*)
```

* The size of *vxBlob* is 104 bytes
* On all platforms *vxBLOB{100}=$04*, *vxBLOB{101}=$03*, *vxBLOB{102}=$02*, *vxBLOB{103}=$01*
* The other bytes of the BLOB are left unchanged

#### Example 5 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;100)
 vlOffset:=50
 LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering;vlOffset)
```

* The size of *vxBlob* is 100 bytes
* On all platforms *vxBLOB{50}=$01*, *vxBLOB{51}=$02*, *vxBLOB{52}=$03*, *vxBLOB{53}=$04*
* The other bytes of the BLOB are left unchanged
* The variable *vlOffset* has been incremented by 4 (and is now equal to 54)

#### See also 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 550 |
| Thread safe | &check; |


