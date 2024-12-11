---
id: text-to-blob
title: TEXT TO BLOB
slug: /commands/text-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO BLOB.Syntax-->**TEXT TO BLOB** ( *text* ; *blob* {; *textFormat* {; offset | *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| text | Text | &#8594;  | Text to write into the BLOB |
| blob | Blob | &#8594;  | BLOB to receive the text |
| textFormat | Integer | &#8594;  | Format and character set of text |
| offset &#124; * | Variable, Operator |&#8596;  | Offset within the BLOB (expressed in bytes) or * to append the value |
| ||| New offset after writing if not * |

<!-- END REF-->

#### Description 

<!--REF #_command_.TEXT TO BLOB.Summary-->The TEXT TO BLOB command writes the Text value *text* into the BLOB *blob*.<!-- END REF-->

The *textFormat* parameter can be used to set the internal format and the character set of the text value to be written. To do this, pass one of the following constants (found in the “*BLOB*” theme) in the *textFormat* parameter:

| Constant                 | Type    | Value |
| ------------------------ | ------- | ----- |
| Mac C string             | Integer | 0     |
| Mac Pascal string        | Integer | 1     |
| Mac text with length     | Integer | 2     |
| Mac text without length  | Integer | 3     |
| UTF8 C string            | Integer | 4     |
| UTF8 text with length    | Integer | 5     |
| UTF8 text without length | Integer | 6     |

If you omit the *textFormat* parameter, by default 4D uses the Mac C string format. In databases created beginning with version 11, 4D works by default with the Unicode character set (UTF8) for managing text, so it is recommended to use this character set. 

**Notes:**

* The “UTF8” constants can only be used when the application runs in Unicode mode.
* The “Mac” constants cannot work with texts greater than 32 KB.
* If you want to work with character sets other than UTF8, use the [CONVERT FROM TEXT](convert-from-text.md) command.

The following table describes each of these formats:

| **Text format**                        | **Description and Examples**                                    |
| -------------------------------------- | --------------------------------------------------------------- |
| C string                               | The text is ended by a NULL character (ASCII code $00).         |
| *UTF8*                                 | "" --> $00                                                      |
| "Café" --> $43 61 66 C3 A9 00          |                                                                 |
| *Mac*                                  | "" --> $00                                                      |
| "Café" --> $43 61 66 8E 00             |                                                                 |
| Pascal string                          | The text is preceded by a 1-byte length.                        |
| *UTF8*                                 | \-                                                              |
| \-                                     |                                                                 |
| *Mac*                                  | "" --> $00                                                      |
| "Café" --> $04 43 61 66 8E             |                                                                 |
| Text with length                       | The text is preceded by a 4-byte (UTF8) or 2-byte (Mac) length. |
| *UTF8*                                 | "" --> $00 00 00 00                                             |
| "Café" --> $00 00 00 05 43 61 66 C3 A9 |                                                                 |
| *Mac*                                  | "" --> $00 00                                                   |
| "Café" --> $00 04 43 61 66 8E          |                                                                 |
| Text without length                    | The text is composed only of its characters.                    |
| *UTF8*                                 | "" --> No data                                                  |
| "Café" --> $43 61 66 C3 A9             |                                                                 |
| *Mac*                                  | "" --> No data                                                  |
| "Café" --> $43 61 66 8E                |                                                                 |

If you specify the \* optional parameter, the Text value is appended to the BLOB; the size of the BLOB is extended accordingly. Using the \* optional parameter, you can sequentially store any number of Integer, Long Integer, Real or Text values (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory. 

If you do not specify the \* optional parameter nor the *offset* variable parameter, the Text value is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly.

If you pass the *offset* variable parameter, the Text value is written at the offset (starting from zero) within the BLOB. No matter where you write the Text value, the size of the BLOB is, increased according to the location you passed (plus up to the size of the text, if necessary). New allocated bytes, other than the ones you are writing, are initialized to zero.

After the call, the *offset* variable parameter is returned, incremented by the number of bytes that have been written. Therfore, you can reuse that same variable with another BLOB writing command to write another value.

##### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### Example 

After executing this code:

```4d
 SET BLOB SIZE(vxBlob;0)
 var vtValue : Text
 vtValue:="Café" // Length of vtValue is 4 bytes
 TEXT TO BLOB(vtValue;vxBlob;Mac C string) // Size of BLOB becomes 5 bytes
 TEXT TO BLOB(vtValue;vxBlob;Mac Pascal string) // Size of BLOB becomes 5 bytes
 TEXT TO BLOB(vtValue;vxBlob;Mac text with length) // Size of BLOB becomes 6 bytes
 TEXT TO BLOB(vtValue;vxBlob;Mac text without length) // Size of BLOB becomes 4 bytes
 TEXT TO BLOB(vtValue;vxBlob;UTF8 C string) // Size of BLOB becomes 6 bytes
 TEXT TO BLOB(vtValue;vxBlob;UTF8 text with length) // Size of BLOB becomes 9 bytes
 TEXT TO BLOB(vtValue;vxBlob;UTF8 text without length) // Size of BLOB becomes 5 bytes
```

#### See also 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[BLOB to text](blob-to-text.md)  
[CONVERT FROM TEXT](convert-from-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 554 |
| Thread safe | &check; |
| Forbidden on the server ||


