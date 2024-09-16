---
id: encrypt-data-blob
title: Encrypt data BLOB
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data BLOB.Syntax-->**Encrypt data BLOB** ( *blobToEncrypt* ; keyObject | passPhrase ; *salt* ; *encryptedBLOB* ) -> Function result<!-- END REF-->
<!--REF #_command_.Encrypt data BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| blobToEncrypt | BLOB | -> | BLOB to encrypt |
| keyObject | passPhrase | Object, Text | -> | JSON object containing the encryption key or passphrase for direct encryption key generation (text) |
| salt | Longint | -> | Additional salt for algorithm |
| encryptedBLOB | BLOB | <-> | Encrypted BLOB |
| Function result | Boolean | <- | True if encryption has been correctly performed, False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.Encrypt data BLOB.Summary-->The **Encrypt data BLOB** command encrypts the *blobToEncrypt* parameter with the same algorithm as 4D uses to encrypt data (AES-256) and returns the result in *encryptedBlob*.<!-- END REF-->

You can use either a *keyObject* or a *passPhrase* to encrypt the BLOB: 

* *keyObject*: a JSON object containing the encryption key, with the same structure as the object returned by the [New data key](new-data-key.md) command
* *passPhrase*: a string used to generate the encryption key

Pass in *salt* a number that will be used to make the encryption more robust.

If the encryption is successful, the encrypted data is returned in the *encryptedBlob* parameter and the command returns True.

In case of error, the BLOB is returned empty and the command returns False.

**Note:** When you encrypt a blob using **Encrypt data BLOB**, the resulting *encryptedBlob* is a multiple of 16 bytes because of the encryption algorithm. As a consequence, if *blobToEncrypt* is not a multiple of 16 bytes, the command automatically turns it into a multiple of 16 bytes by adding null bytes at the end. To avoid errors when decrypting the blob with [Decrypt data BLOB](decrypt-data-blob.md), you need to handle the size of *blobToEncrypt* when working with files other than text files. For a detailed example on how to do this, see [this blog article](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/ "test").

#### Example 

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

#### See also 
[Decrypt data BLOB](decrypt-data-blob.md)  
[ENCRYPT BLOB](encrypt-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[Encrypt your own data with the 4D algorithm (blog post)](https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm)  
[New data key](new-data-key.md)  