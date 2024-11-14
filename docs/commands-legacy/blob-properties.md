---
id: blob-properties
title: BLOB PROPERTIES
slug: /commands/blob-properties
displayed_sidebar: docs
---

<!--REF #_command_.BLOB PROPERTIES.Syntax-->**BLOB PROPERTIES** ( *blob* ; *compressed* {; *expandedSize* {; *currentSize*}} )<!-- END REF-->
<!--REF #_command_.BLOB PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB for which to get information |
| compressed | Integer | &#8592; | 0 = BLOB is not compressed, 1 = Compact compression, 2 = Fast compression, -1 = GZIP Best compression, -2 = GZIP Fast compression |
| expandedSize | Integer | &#8592; | Size of BLOB (in bytes) when not compressed |
| currentSize | Integer | &#8592; | Current size of BLOB (in bytes) |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB PROPERTIES.Summary-->The **BLOB PROPERTIES** command returns information about the BLOB *blob*.<!-- END REF-->

The *compressed* parameter returns a value indicating if and how the BLOB is compressed. You can compare this value with the following constants, found in the *BLOB* theme: 

| Constant                   | Type    | Value | Comment                                                                                                                                                      |
| -------------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Compact compression mode   | Integer | 1     | Compressed as much as possible (at the expense of the speed of compression and decompression operations). Default method.                                    |
| Fast compression mode      | Integer | 2     | Compressed as fast as possible (and will be decompressed as fast as possible), at the expense of the compression ratio (the compressed BLOB will be bigger). |
| GZIP best compression mode | Integer | \-1   | Most compact GZIP compression                                                                                                                                |
| GZIP fast compression mode | Integer | \-2   | Fastest GZIP compression                                                                                                                                     |
| Is not compressed          | Integer | 0     | No compression                                                                                                                                               |

Whatever the compression status of the BLOB, the *expandedSize* parameter returns the size of the BLOB when it is not compressed.

The parameter *currentSize* returns the current size of the BLOB. If the BLOB is compressed, you will usually obtain *currentSize* less than *expandedSize*. If the BLOB is not compressed, you will always obtain *currentSize* equal to *expandedSize*.

#### Example 1 

See examples for the commands [COMPRESS BLOB](compress-blob.md) and [EXPAND BLOB](expand-blob.md).

#### Example 2 

After a BLOB has been compressed, the following project method obtains the percentage of space saved by the compression: 

```4d
  // Space saved by compression project method
  // Space saved by compression (Pointer {; Pointer } ) -> Long integer
  // Space saved by compression ( -> BLOB {; -> savedBytes } ) -> Percentage
 
 var $1;$2 : Pointer
 var $0;$vlCompressed;$vlExpandedSize;$vlCurrentSize : Integer
 
 BLOB PROPERTIES($1->;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
 If($vlExpandedSize=0)
    $0:=0
    If(Count parameters>=2)
       $2->:=0
    End if
 Else
    $0:=100-(($vlCurrentSize/$vlExpandedSize)*100)
    If(Count parameters>=2)
       $2->:=$vlExpandedSize-$vlCurrentSize
    End if
 End if
```

After this method has been added to your application, you can use it this way:

```4d
  // ...
 COMPRESS BLOB(vxBlob)
 $vlPercent:=Space saved by compression(->vxBlob;->vlBlobSize)
 ALERT("The compression saved "+String(vlBlobSize)+" bytes, so "+String($vlPercent;"#0%")+
 " of space.")
```

#### See also 

[COMPRESS BLOB](compress-blob.md)  
[EXPAND BLOB](expand-blob.md)  