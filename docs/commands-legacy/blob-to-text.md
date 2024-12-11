---
id: blob-to-text
title: BLOB to text
slug: /commands/blob-to-text
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to text.Syntax-->**BLOB to text** ( *blob* ; *textFormat* {; *offset* {; *textLength*}} )  : Text<!-- END REF-->
<!--REF #_command_.BLOB to text.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB from which to get the text |
| textFormat | Integer | &#8594;  | Format and character set of text |
| offset | Variable | &#8596;  | Offset within the BLOB (expressed in bytes) |
| || | New offset after reading |
| textLength | Integer | &#8594;  | Number of characters to be read |
| Function result | Text | &#8592; | Text extracted |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to text.Summary-->The BLOB to text command returns a Text value read from the BLOB *blob*.<!-- END REF-->

The *textFormat* parameter fixes the internal format and character set of the text value to be read. In databases created beginning with version 11, 4D uses the Unicode character set (UTF8) by default for managing text. For the sake of compatibility, this command can be used to “force” conversion using the Mac Roman character set (used in previous versions of 4D). The character set is chosen via the *textFormat* parameter. To do this, pass one of the following constants (found in the *BLOB* theme) in the *textFormat* parameter:

| Constant                 | Type    | Value |
| ------------------------ | ------- | ----- |
| Mac C string             | Integer | 0     |
| Mac Pascal string        | Integer | 1     |
| Mac text with length     | Integer | 2     |
| Mac text without length  | Integer | 3     |
| UTF8 C string            | Integer | 4     |
| UTF8 text with length    | Integer | 5     |
| UTF8 text without length | Integer | 6     |

**Notes:**

* The “UTF8” constants can only be used when the application runs in Unicode mode.
* The “Mac” constants cannot work with texts greater than 32 KB.
* If you want to work with character sets other than UTF8, use the [Convert to text](convert-to-text.md) command.

For more information about these constants and the formats they represent, please refer to the description of the [TEXT TO BLOB](text-to-blob.md) command. 

**WARNING:** The number of characters to be read is determined by the *textFormat* parameter, EXCEPT for the formats Mac Text without length and UTF8 Text without length, for which you need to specify the number of characters to be read in the *textLength* parameter. For the other formats, *textLength* is ignored and you can omit it.

If you specify the optional *offset* variable parameter, the Text value is read at the offset (starting from zero) within the BLOB. If you do not specify the optional *offset* variable parameter, the beginning of the BLOB is read according to the value you pass in *textFormat*. Note that you must pass the *offset* variable parameter when you are reading text without length.

**Note:** You should pass an offset value between *0* (zero) and the size of the BLOB minus the size of the text to be read. If you do not do so, the function result is unpredictable.

After the call, the variable is incremented by the number of bytes read. Therefore, you can reuse that same variable with another BLOB reading command to read another value.

#### See also 

[BLOB to integer](blob-to-integer.md)  
[BLOB to longint](blob-to-longint.md)  
[BLOB to real](blob-to-real.md)  
[Convert to text](convert-to-text.md)  
[INTEGER TO BLOB](integer-to-blob.md)  
[LONGINT TO BLOB](longint-to-blob.md)  
[REAL TO BLOB](real-to-blob.md)  
[TEXT TO BLOB](text-to-blob.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 555 |
| Thread safe | &check; |
| Forbidden on the server ||


