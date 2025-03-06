---
id: new-data-key
title: New data key
slug: /commands/new-data-key
displayed_sidebar: docs
---

<!--REF #_command_.New data key.Syntax-->**New data key** ( *passPhrase* ) : Object<!-- END REF-->
<!--REF #_command_.New data key.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| passPhrase | Text | &#8594;  | Passphrase to use to generate the AES data encryption key |
| Function result | Object | &#8592; | Object containing the key (encodedKey property) |

<!-- END REF-->

#### Description 

<!--REF #_command_.New data key.Summary-->The **New data key** command generates a binary data encryption key from the text passed in the *passPhrase* parameter.<!-- END REF-->

The encoded key can be saved locally, in order to be stored on an removable device, like an USB key (see *Storing data encryption keys in files* in the *4D Design Reference*). Connecting this device to the machine that hosts the encrypted database will automatically allow the user to access the encrypted data.

You can pass any character in *passPhrase*. The same *passPhrase* will always produce the same data encryption key.

**Returned value**

The returned object contains the following property:

| **Property** | **Type** | **Description**                                                  |
| ------------ | -------- | ---------------------------------------------------------------- |
| encodedKey   | Text     | AES encryption key (SHA 256-bit) generated from the *passPhrase* |

If an empty string was passed in *passPhrase*, the command returns *null*.

#### Example 

You want to save an encryption key in a .4DKeyChain file:

```4d
 var $dataKey : Object
 var $passphrase : Text
 
 $passphrase:=Request("Enter the passphrase:")
 If(OK=1)
    $dataKey:=New data key($passphrase)
    TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))
 End if
```

#### See also 

[4D Blog - New 4D commands to work with encrypted data](https://blog.4d.com/new-4d-commands-to-work-with-encrypted-data/)  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Discover data key](discover-data-key.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[Encrypt data file](encrypt-data-file.md)  
[Register data key](register-data-key.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1611 |
| Thread safe | &check; |


