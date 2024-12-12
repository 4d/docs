---
id: decrypt-data-blob
title: Decrypt data BLOB
slug: /commands/decrypt-data-blob
displayed_sidebar: docs
---

<!--REF #_command_.Decrypt data BLOB.Syntax-->**Decrypt data BLOB** ( *blobToDecrypt* ; keyObject | passPhrase ; *salt* ; *decryptedBLOB* ) : Boolean<!-- END REF-->
<!--REF #_command_.Decrypt data BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blobToDecrypt | Blob | &#8594;  | BLOB to decrypt |
| keyObject &#124; passPhrase | Object, Text | &#8594;  | JSON object containing the encryption key or passphrase for direct encryption key generation (text) |
| salt | Integer | &#8594;  | Additional salt for algorithm |
| decryptedBlob | Blob | &#8592; | decrypted BLOB |
| Function result | Boolean | &#8592; | True if decryption has been correctly performed, False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.Decrypt data BLOB.Summary-->The **Decrypt data BLOB** command decrypts the *blobToDecrypt* parameter with the same algorithm as 4D uses to decrypt data (AES-256) and returns the result in *decryptedBLOB*.<!-- END REF-->

You can use either a *keyObject* or a *passPhrase* to decrypt the BLOB: 

* *keyObject*: a JSON object containing the encryption key, with the same structure as the object returned by the [New data key](new-data-key.md) command
* *passPhrase*: a string used to generate the encryption key

The number passed in the *salt* parameter of **Decrypt data BLOB** must match the one used for encryption.

If the decryption is successful, the decrypted data is returned in the *decryptedBLOB* parameter and the command returns True.

In case of error, the BLOB is returned empty and the command returns false.

#### Example 

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

The *passPhrase* and *salt* used for decryption are identical to the *passPhrase* and *salt* used for encryption (see the [Encrypt data BLOB](encrypt-data-blob.md) example).

#### See also 

[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[Encrypt your own data with the 4D algorithm](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm)  
[New data key](new-data-key.md)  