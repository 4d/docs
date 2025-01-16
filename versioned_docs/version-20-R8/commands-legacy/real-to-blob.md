---
id: real-to-blob
title: REAL TO BLOB
slug: /commands/real-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.REAL TO BLOB.Syntax-->**REAL TO BLOB** ( *real* ; *blob* ; *realFormat* {; offset | *} )<!-- END REF-->
<!--REF #_command_.REAL TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| real | Real | &#8594;  | Real value to write into the BLOB |
| blob | Blob | &#8594;  | BLOB to receive the Real value |
| realFormat | Integer | &#8594;  | 0 Native real format 1 Extended real format 2  Macintosh Double real format 3  Windows Double real format |
| offset &#124; * | Variable, Operator | &#8596; | Offset within the BLOB (expressed in bytes) or * to append the value |
| ||| New offset after writing if not * |

<!-- END REF-->

#### Description 

<!--REF #_command_.REAL TO BLOB.Summary-->The REAL TO BLOB command writes the Real value *real* into the BLOB *blob*.<!-- END REF-->

The *realFormat* parameter fixes the internal format and byte ordering of the Real value to be written. You pass one of the following predefined constants provided by 4D:

| Constant                     | Type    | Value |
| ---------------------------- | ------- | ----- |
| Extended real format         | Integer | 1     |
| Macintosh double real format | Integer | 2     |
| Native real format           | Integer | 0     |
| PC double real format        | Integer | 3     |

**Platform Independence Note:** If you exchange BLOBs between Macintosh and PC platforms, it is up to you to manage real formats and byte swapping issues when using this command.

If you specify the \* optional parameter, the Real value is appended to the BLOB; the size of the BLOB is extended accordingly. Using the \* optional parameter, you can sequentially store any number of Integer, Long Integer, Real or Text values (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory. 

If you do not specify the \* optional parameter or the *offset* variable parameter, the Real value is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly.

If you pass the *offset* variable parameter, the Real value is written at the offset (starting from zero) within the BLOB. No matter where you write the Real value, the size of the BLOB is increased according to the location you passed (plus up to 8 or 10 bytes, if necessary). New allocated bytes, other than the ones you are writing, are initialized to zero.

After the call, the *offset* variable parameter is returned, incremented by the number of bytes that have been written. Therefore, you can reuse that same variable with another BLOB writing command to write another value.

##### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### Example 1 

After executing this code:

```4d
 var vrValue : Real
 vrValue:=...
 REAL TO BLOB(vrValue;vxBlob;Extended real format)
```

* On all platforms, the size of *vxBlob* is 10 bytes

#### Example 2 

After executing this code:

```4d
 var vrValue : Real
 vrValue:=...
 REAL TO BLOB(vrValue;vxBlob;Native real format)
```

* On all platforms, the size of *vxBlob* is 8 bytes

#### Example 3 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValue : Real
 vrValue:=...
 INTEGER TO BLOB(vrValue;vxBlob;PC double real format) // or Macintosh double real format
```

* On all platforms, the size of *vxBlob* is 8 bytes

#### Example 4 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;100)
 var vrValue : Real
 vrValue:=...
 vlOffset:=50
 REAL TO BLOB(vrValue;vxBlob;PC double real format;vlOffset) // or Macintosh double real format
```

* On all platforms, the size of *vxBlob* is 100 bytes
* On all platforms, the real value is stored in the bytes #50 to #57
* The other bytes of the BLOB are left unchanged
* The variable *vlOffset* has been incremented by 8 (and is now equal to 58)

#### Example 5 

After executing this code:

```4d
 var vrValue : Real
 vrValue:=...
 REAL TO BLOB(vrValue;vxBlob;Macintosh double real format) // or Windows double real format
```

* On all platforms, the size of *vxBlob* is 8 bytes

#### Example 6 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;100)
 REAL TO BLOB(vrValue;vxBlob;Extended real format;*)
```

* On all platforms, the size of *vxBlob* is 110 bytes
* On all platforms, the real value is stored at the bytes #100 to #109
* The other bytes of the BLOB are left unchanged

#### See also 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 552 |
| Thread safe | &check; |


