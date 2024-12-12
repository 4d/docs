---
id: discover-data-key
title: Discover data key
slug: /commands/discover-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Discover data key.Syntax-->**Discover data key**  : Boolean<!-- END REF-->
<!--REF #_command_.Discover data key.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if a valid encryption key for the currently open data file has been found, else False |

<!-- END REF-->

#### Description 

<!--REF #_command_.Discover data key.Summary-->The **Discover data key** command searches for a valid encryption key corresponding to the currently opened data file at the root level of all connected devices and returns **True** if successful.<!-- END REF--> 

Connected devices to be searched include USB keys or external disks. A valid encryption key is necessary to allow read/write access to an encrypted database. This command can be called, for example, at database startup, after the user has been invited to connect a USB key.

Key files (".4DKeyChain" extension files) must be stored at the top level of connected devices (the search will not go through the folder hierarchy). Encryption keys must be saved in JSON format (see *Storing data encryption keys in files* in the *4D Design Reference*).

**Returned value**

* **True** if a valid encryption key is found for the current opened data file, in which case:  
   * the encryption key is applied if necessary so that encrypted data is usable (access to read / write operations).  
   * the encryption key is added to the 4D keychain.
* **False** if no valid encryption key is found for the current opened data file, thus access to the data is not possible.

#### Example 

```4d
 var $status : Object
 var $keyFound : Boolean
 
 $status:=ds.encryptionStatus()
 
 If(($status.isEncrypted)&(Not($status.keyProvided))) //no key is available
  // thus access to encrypted data is not allowed
    $keyFound:=Discover data key
    If($keyFound=True)
       ALERT("A valid encryption key has been found.")
    End if
 End if
```

#### See also 

[4D Blog - New 4D commands to work with encrypted data](https://blog.4d.com/new-4d-commands-to-work-with-encrypted-data/)  
[New data key](new-data-key.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1639 |
| Thread safe | &check; |


