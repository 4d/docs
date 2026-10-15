---
id: encrypt-data-blob
title: Encrypt data BLOB
slug: /commands/encrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data BLOB.Syntax-->**Encrypt data BLOB** ( *blobToEncrypt* : Blob ; *keyObject* : Object ; *salt* : Integer ; *encryptedBLOB* : Blob ) : Boolean<br/>**Encrypt data BLOB** ( *blobToEncrypt* : Blob ; *passPhrase* : Text ; *salt* : Integer ; *encryptedBLOB* : Blob ) : Boolean<!-- END REF-->
<!--REF #_command_.Encrypt data BLOB.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blobToEncrypt | Blob | &#8594;  | BLOB to encrypt |
| keyObject | Object | &#8594;  | JSON object containing the encryption key |
| passPhrase | Text | &#8594;  | Passphrase for direct encryption key generation |
| salt | Integer | &#8594;  | Additional salt for algorithm |
| encryptedBlob | Blob | &#8592; | Encrypted BLOB |
| Function result | Boolean | &#8592; | True if encryption has been correctly performed, False otherwise |
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

<!--REF #_command_.Encrypt data BLOB.Summary-->The **Encrypt data BLOB** command encrypts the *blobToEncrypt* parameter with the same algorithm as 4D uses to encrypt data (AES-256) and returns the result in *encryptedBlob*.<!-- END REF-->

You can use either a *keyObject* or a *passPhrase* to encrypt the BLOB: 

* *keyObject*: a JSON object containing the encryption key, with the same structure as the object returned by the [New data key](../commands/new-data-key) command
* *passPhrase*: a string used to generate the encryption key

Pass in *salt* a number that will be used to make the encryption more robust.

If the encryption is successful, the encrypted data is returned in the *encryptedBlob* parameter and the command returns True.

In case of error, the BLOB is returned empty and the command returns False.

**Note:** When you encrypt a blob using **Encrypt data BLOB**, the resulting *encryptedBlob* is a multiple of 16 bytes because of the encryption algorithm. As a consequence, if *blobToEncrypt* is not a multiple of 16 bytes, the command automatically turns it into a multiple of 16 bytes by adding null bytes at the end. To avoid errors when decrypting the blob with [Decrypt data BLOB](../commands/decrypt-data-blob), you need to handle the size of *blobToEncrypt* when working with files other than text files. For a detailed example on how to do this, see [this blog article](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/ "test").

## Example 

Encrypt a text file located in the RESOURCES folder of the database:

```4d
 var $fileToEncrypt;$encryptedFile : 4D.File
 var $blobToEncrypt;$encryptedBlob : Blob
 var $result : Boolean
 
 $fileToEncrypt:=File("/RESOURCES/confidential.txt")
 $encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")
 
 $blobToencrypt:=$fileToEncrypt.getContent()
 
 $result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)
 $encryptedFile.setContent($encryptedBlob)
```

## See also 

[Decrypt data BLOB](../commands/decrypt-data-blob)  
[ENCRYPT BLOB](../commands/encrypt-blob)  
[Encrypt data file](../commands/encrypt-data-file)  
[Encrypt your own data with the 4D algorithm (blog post)](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm)  
[New data key](../commands/new-data-key)  

## Properties

|  |  |
| --- | --- |
| Command number | 1773 |
| Thread safe | yes |


