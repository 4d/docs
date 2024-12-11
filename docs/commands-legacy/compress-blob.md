---
id: compress-blob
title: COMPRESS BLOB
slug: /commands/compress-blob
displayed_sidebar: docs
---

<!--REF #_command_.COMPRESS BLOB.Syntax-->**COMPRESS BLOB** ( *blob* {; *compression*} )<!-- END REF-->
<!--REF #_command_.COMPRESS BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB to compress |
| compression | Integer | &#8594;  | If not omitted: 1, compress as compact as possible 2, compress as fast as possible |

<!-- END REF-->

#### Description 

<!--REF #_command_.COMPRESS BLOB.Summary-->The **COMPRESS BLOB** command compresses the BLOB *blob* using a compression algorithm.<!-- END REF--> This command only compresses BLOB whose size is over 255 bytes.

The optional *compression* parameter allows to set the way the BLOB will be compressed. You can pass one of the following constants, placed in the *BLOB* theme: 

| Constant                   | Type    | Value | Comment                                                                                                                                                      |
| -------------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Compact compression mode   | Integer | 1     | Compressed as much as possible (at the expense of the speed of compression and decompression operations). Default method.                                    |
| Fast compression mode      | Integer | 2     | Compressed as fast as possible (and will be decompressed as fast as possible), at the expense of the compression ratio (the compressed BLOB will be bigger). |
| GZIP best compression mode | Integer | \-1   | Most compact GZIP compression                                                                                                                                |
| GZIP fast compression mode | Integer | \-2   | Fastest GZIP compression                                                                                                                                     |

  
If you pass another value or if you omit the *compression* parameter, compression mode 1 is used (compact internal compression).

**Note:** This command only compresses BLOBs that are greater than or equal to 255 bytes.

After the call, the OK variable is set to 1 if the BLOB has been successfully compressed. If the compression could not be performed, the OK variable is set to 0\. If the compression could not be performed because of a lack of memory or because the actual size of the blob is less than 255 bytes, no error is generated and the method resumes its execution.   
In any other cases (i.e. the BLOB is damaged), the error -10600 is generated. This error can be trapped using the [ON ERR CALL](on-err-call.md) command.

After a BLOB has been compressed, you can expand it using the [EXPAND BLOB](expand-blob.md) command.

To detect if a BLOB has been compressed, use the [BLOB PROPERTIES](blob-properties.md) command*.*

**WARNING:** A compressed BLOB is still a BLOB, so there is nothing to stop you from modifying its contents. However, if you do so, the [EXPAND BLOB](expand-blob.md) command will not be able to decompress the BLOB properly.

#### Example 1 

This example tests if the BLOB *vxMyBlob* is compressed, and, if it is not, compresses it:

```4d
 BLOB PROPERTIES(vxMyBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
 If($vlCompressed=Is not compressed)
    COMPRESS BLOB(vxMyBlob)
 End if
```

Note however, that if you apply COMPRESS BLOB to an already compressed BLOB, the command detects it and does nothing.

#### Example 2 

This example allows you to select a document and then compress it:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       COMPRESS BLOB(vxBlob)
       If(OK=1)
          BLOB TO DOCUMENT(Document;vxBlob)
       End if
    End if
 End if
```

#### Example 3 

Sending of raw HTTP data compressed with GZIP:

```4d
 COMPRESS BLOB($blob;GZIP Best compression mode)
 var $vEncoding : Text
 $vEncoding:="Content-encoding: gzip"
 WEB SET HTTP HEADER($vEncoding)
 WEB SEND RAW DATA($blob ;*)
```

#### System variables and sets 

The OK variable is set to 1 if the BLOB has been successfully compressed; otherwise, it is set to 0.

#### See also 

[BLOB PROPERTIES](blob-properties.md)  
[EXPAND BLOB](expand-blob.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 534 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


