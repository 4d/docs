---
id: data-file-encryption-status
title: Data file encryption status
slug: /commands/data-file-encryption-status
displayed_sidebar: docs
---

<!--REF #_command_.Data file encryption status.Syntax-->**Data file encryption status** ( structurePath , dataPath ) : Object<!-- END REF-->
<!--REF #_command_.Data file encryption status.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| structurePath | Text | &#8594;  | Pathname of 4D structure file to be checked |
| dataPath | Text | &#8594;  | Pathname of 4D data file to be checked |
| Function result | Object | &#8592; | Information about the encryption of the data file and of each table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Data file encryption status.Summary-->The **Data file encryption status** command returns an object providing the encryption status for the data file designated by the *structurePath* and *dataPath* parameters.<!-- END REF--> The status for each table is also provided.

*dataPath* designates a 4D data file (.4dd). It must correspond to the structure file defined by the *structurePath* parameter. You can designate the current structure file but the data file must not be the current (open) file.

**Note:** Use the *ds.encryptionStatus( )* method to determine the encryption status of the current data file.

**Returned value**

The returned object contains the following properties:

| **Property**    | **Type** | **Description**                                                                        |
| --------------- | -------- | -------------------------------------------------------------------------------------- |
| isEncrypted     | Boolean  | True if the data file is encrypted                                                     |
| keyProvided     | Boolean  | True if the encryption key matching the encrypted data file is in the 4D keychain(\*). |
| tables          | Object   | Object containing as many properties as there are *encryptable* or *encrypted* tables. |
| <*table name*\> | Object   | Encryptable or Encrypted table                                                         |
| name            | Text     | Name of the table                                                                      |
| num             | Number   | Table number                                                                           |
| isEncryptable   | Boolean  | True if the table is declared encryptable in the structure file                        |
| isEncrypted     | Boolean  | True if the records of the table are encrypted in the data file                        |

(\*) The encryption key may have been provided:

* previously:  
   * before this data file was opened, using a connected device,  
   * with the *ds.provideDataKey( )* command when this data file was opened,  
   * after the data file was opened, with the [Discover data key](discover-data-key.md) command
* using the [Register data key](register-data-key.md) command

#### Example 

You want to know the encryption status of a data file that corresponds to the current structure file:

```4d
 var $status : Object
 
 $status:=Data file encryption status(Structure file;"D:\\Invoices\\Data_2019\\Invoices.4dd")
 Case of
    :(Not($status.isEncrypted))
       ALERT("The data file is not encrypted")
    :($status.isEncrypted&(Not($status.keyProvided))
       ALERT("The data file is encrypted and the encryption key is not in the keychain. You will not have access to encrypted data.")
    :($status.isEncrypted&$status.keyProvided)
       ALERT("The data file is encrypted and the encryption key is in the keychain. You will have access to encrypted data.")
 End case
```

#### See also 

[4D Blog - New 4D commands to work with encrypted data](https://blog.4d.com/new-4d-commands-to-work-with-encrypted-data/)  
[Encrypt data file](encrypt-data-file.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1609 |
| Thread safe | &check; |
| Forbidden on the server ||


