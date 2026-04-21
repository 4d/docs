---
id: decrypt-data-blob
title: Decrypt data BLOB
slug: /commands/decrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Decrypt data BLOB.Syntax-->**Decrypt data BLOB** ( *blobToDecrypt* : Blob ; *keyObject* : Object ; *salt* : Integer ; *decryptedBLOB* : Blob ) : Boolean<br/>**Decrypt data BLOB** ( *blobToDecrypt* : Blob ; *passPhrase* : Text ; *salt* : Integer ; *decryptedBLOB* : Blob ) : Boolean<!-- END REF-->
<!--REF #_command_.Decrypt data BLOB.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blobToDecrypt | Blob | &#8594;  | BLOB to decrypt |
| keyObject | Object | &#8594;  | JSON object containing the encryption key |
| passPhrase | Text | &#8594;  | Passphrase for direct encryption key generation |
| salt | Integer | &#8594;  | Additional salt for algorithm |
| decryptedBlob | Blob | &#8592; | decrypted BLOB |
| Function result | Boolean | &#8592; | True if decryption has been correctly performed, False otherwise |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Created|

</details>
</div>

## Description 

<!--REF #_command_.Decrypt data BLOB.Summary-->The **Decrypt data BLOB** command decrypts the *blobToDecrypt* parameter with the same algorithm as 4D uses to decrypt data (AES-256) and returns the result in *decryptedBLOB*.<!-- END REF-->

You can use either a *keyObject* or a *passPhrase* to decrypt the BLOB: 

* *keyObject*: a JSON object containing the encryption key, with the same structure as the object returned by the [New data key](../commands/new-data-key) command
* *passPhrase*: a string used to generate the encryption key

The number passed in the *salt* parameter of **Decrypt data BLOB** must match the one used for encryption.

If the decryption is successful, the decrypted data is returned in the *decryptedBLOB* parameter and the command returns True.

In case of error, the BLOB is returned empty and the command returns false.

## Example 

The following example shows how to decrypt an encrypted file located in the RESOURCES folder of the database:  
  
```4d
 var $fileToDecrypt;$decryptedFile : 4D.File
 var $blobToDecrypt;$decryptedBlob : Blob
 var $result : Boolean
 
 $fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")
 $decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")
 
 $blobToDecrypt:=$fileToDecrypt.getContent()
 
 $result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)
 $decryptedFile.setContent($decryptedBlob)
```

The *passPhrase* and *salt* used for decryption are identical to the *passPhrase* and *salt* used for encryption (see the [Encrypt data BLOB](../commands/encrypt-data-blob) example).

## See also 

[Encrypt data BLOB](../commands/encrypt-data-blob)  
[Encrypt data file](../commands/encrypt-data-file)  
[Encrypt your own data with the 4D algorithm](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm)  
[New data key](../commands/new-data-key)  

## Properties

|  |  |
| --- | --- |
| Command number | 1774 |
| Thread safe | yes |


