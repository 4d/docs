---
id: register-data-key
title: Register data key
slug: /commands/register-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Register data key.Syntax-->**Register data key** ( curPassPhrase | curDataKey ) : Boolean<!-- END REF-->
<!--REF #_command_.Register data key.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| curPassPhrase &#124; curDataKey | Text, Object | &#8594;  | Current passphrase (text) or current data encryption key (object) |
| Function result | Boolean | &#8592; | True if the encryption key has been successfully added to the 4D keychain, False if it was already in the 4D keychain |

<!-- END REF-->

#### Description 

<!--REF #_command_.Register data key.Summary-->The **Register data key** command adds the data encryption key passed in parameter to the 4D keychain.<!-- END REF-->

The 4D keychain is a set of one or more data encryption key(s) loaded in memory which 4D automatically scans when a data key is required to decrypt/encrypt a data file. For more information, please refer to *Encrypting data*.

In the first parameter, pass the *curPassPhrase* or *curDataKey* that defines the encryption key to add:

* *curPassPhrase*: String used to generate the encryption key. When you use this parameter, an encryption key is generated.
* *curDataKey*: Object (with *encodedKey* property) that contains the data encryption key. This key may have been generated with the [New data key](new-data-key.md) command.

**Returned value**

* **True** if the encryption key is successfully loaded in the 4D keychain.
* **False** if the same encryption key was already present in the 4D keychain.

#### Example 

```4d
 var $passphrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Enter the passphrase:")
 If(OK=1)
    $added:=Register data key($passphrase)
 
    OPEN DATA FILE("data.4DD") //No key required, it is in the 4D keychain
 End if
```

#### See also 

[4D Blog - New 4D commands to work with encrypted data](https://blog.4d.com/new-4d-commands-to-work-with-encrypted-data/)  
[New data key](new-data-key.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1638 |
| Thread safe | &check; |


