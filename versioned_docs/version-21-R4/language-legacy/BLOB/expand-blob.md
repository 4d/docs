---
id: expand-blob
title: EXPAND BLOB
slug: /commands/expand-blob
displayed_sidebar: docs
---

<!--REF #_command_.EXPAND BLOB.Syntax-->**EXPAND BLOB** ( *blob* : Blob )<!-- END REF-->
<!--REF #_command_.EXPAND BLOB.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB to expand |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6.5.3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.EXPAND BLOB.Summary-->The **EXPAND BLOB** command expands the BLOB *blob* that was previously compressed using the [COMPRESS BLOB](../commands/compress-blob) command*.<!-- END REF-->*

After the call, the OK variable is set to 1 if the BLOB has been expanded. If the expansion could not be performed, the OK variable is set to 0.

If the expansion could not be performed because of a lack of memory, no error is generated and the method resumes its execution.   
In any other case (i.e. the BLOB has not been compressed or is damaged), the error -10600 is generated. This error can be trapped using the [ON ERR CALL](../commands/on-err-call) command. 

To check if a BLOB has been compressed, use the [BLOB PROPERTIES](../commands/blob-properties) command.

## Example 1 

This example tests if the BLOB *vxMyBlob* is compressed and, if so, expands it:

```4d
 BLOB PROPERTIES(vxMyBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
 If($vlCompressed#Is not compressed)
    EXPAND BLOB(vxMyBlob)
 End if
```

## Example 2 

This example allows you to select a document and then expand it, if it is compressed:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       BLOB PROPERTIES(vxBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
       If($vlCompressed#Is not compressed)
          EXPAND BLOB(vxBlob)
          If(OK=1)
             BLOB TO DOCUMENT(Document;vxBlob)
          End if
       End if
    End if
 End if
```

## System variables and sets 

The OK variable is set to 1 if the BLOB has been successfully expanded, otherwise it is set to 0.

## See also 

[BLOB PROPERTIES](../commands/blob-properties)  
[COMPRESS BLOB](../commands/compress-blob)  

## Properties

|  |  |
| --- | --- |
| Command number | 535 |
| Thread safe | yes |
| Modifies variables | OK |


