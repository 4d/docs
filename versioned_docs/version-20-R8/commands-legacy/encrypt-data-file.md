---
id: encrypt-data-file
title: Encrypt data file
slug: /commands/encrypt-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Encrypt data file.Syntax-->**Encrypt data file** ( *structurePath* ; *dataPath* {; newPassPhrase | newDataKey {; *archiveFolder* {; curPassPhrase | curDataKey {; *methodName*}}}} ) : Text<!-- END REF-->
<!--REF #_command_.Encrypt data file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| structurePath | Text | &#8594;  | Pathname of structure file |
| dataPath | Text | &#8594;  | Pathname of data file to encrypt |
| newPassPhrase &#124; newDataKey | Text, Object | &#8594;  | In case of replacement: new passPhrase (text) or new encryption key (object) |
| archiveFolder | Text | &#8594;  | Pathname of folder where original files will be stored |
| curPassPhrase &#124; curDataKey | Text, Object | &#8594;  | Current passPhrase (text) or current encryption key (object) |
| methodName | Text | &#8594;  | Name of 4D callback method |
| Function result | Text | &#8592; | Full pathname of folder where original files have been stored |

<!-- END REF-->

#### Description 

<!--REF #_command_.Encrypt data file.Summary-->The **Encrypt data file** command is used to encrypt or re-encrypt the data file designated by the *dataPath* parameter associated to the *structurePath* parameter.<!-- END REF--> It can also be used to remove encryption from the database. The command does not modify the original files, it returns the full path name of the folder created to backup the original data file.

**Notes:**

* This command cannot be used with the currently opened data file.
* This command can only be executed from 4D (local mode) or 4D Server (stored procedure). The data file to be encrypted must correspond to the structure file designated by *structurePath*.

Executing this command will encrypt or modify the encryption of all tables of the database that have been set as "encryptable". For more information, please refer to the *Encryptable* section.

**Warning:** Encrypting a database is a lengthy operation. It displays a progress indicator (which could be interrupted by the user). Note also that database encryption sequence includes a compacting step.

In the *structurePath* parameter, you can pass an empty string or the full pathname of the structure file associated with the data file that you want to encrypt. This information is needed for the encrypting procedure. If you pass an empty string, a standard **Open file** dialog appears so that the user can designate the structure file to be used. Otherwise, you can pass a full pathname, expressed in the syntax of the operating system.

In the *dataPath* parameter, you can pass an empty string, a file name, or a full pathname (must expressed in the syntax of the operating system). If you pass an empty string, a standard **Open file** dialog appears so that the user can designate the data file to be encrypted. This file must correspond to the structure file defined in the *structurePath* parameter. If you only pass the name of the data file, 4D will look for it at the same level as the structure file.

* **To encrypt the database for the first time**, you only need to pass the *newPassPhrase* or *newDataKey* parameter (The *curPassPhrase* or *curDataKey* parameters must not be provided):  
   * *newPassPhrase*: String used to generate the encryption key (SHA 256-bit)  
   * *newDataKey*: Object (with *encodedKey* property) that contains a new data encryption key. This key should have been generated with the [New data key](new-data-key.md) command.  
    
**Note:** The *newPassPhrase* (or *newDataKey*) is not added to the 4D keychain.
* **To re-encrypt a database** (*i.e.* the database has already been encrypted), you must pass both the *newPassPhrase* (or *newDataKey*) parameter, as well as the current passphrase (or current data key). This is necessary to decrypt the database before re-encrypting it. This information can be provided in the following ways:  
   * by passing valid *curPassPhrase* (or *curDataKey*) parameters to the command,  
   * in the 4D keychain.
* **To remove encryption from all tables**, pass an empty passphrase or a *null* data key as *newPassPhrase* (or *newDataKey*). The current passphrase or data key must have already been provided. Decrypted files will be generated/copied in folders named “Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS”/"Decrypted files YYYY-MM-DD HH-MM-SS".

The command does not modifiy the original files. They are moved in the *archiveFolder* folder (if passed) into a special folder named *Replaced files (Encrypting) YYYY-MM-DD HH-MM-SS* or *Replaced files (Decrypting) YYYY-MM-DD HH-MM-SS* where YYYY-MM-DD HH-MM-SS represents the date and time of the operation. For example: "Replaced files (Encrypting) 2018-09-29 13-00-35". New encrypted or decrypted data file automatically replaces the original file.   
If you passed "" in *archiveFolder*, a standard **Open folder** dialog will appear so that the user can specify the location of the folder to be created. If *archiveFolder* is omitted, the original files are automatically stored in a timestamped folder created next to the structure file.

The *method* parameter is used to set a callback method that will be called regularly during the encryption process. If you pass an empty string or an invalid method name, this parameter is ignored (no method is called). When it is called, this method receives up to 5 parameters depending on the event type originating the call (see below). It is imperative to declare these parameters in the method:

| **Event**           | **$1 (Longint)** | **$2 (Longint)** | **$3 (Text)**                                                                               | **$4 (Longint)**            | **$5 (Longint)** |
| ------------------- | ---------------- | ---------------- | ------------------------------------------------------------------------------------------- | --------------------------- | ---------------- |
| Message             | 1                | 0                | Progress message (*e.g.* "Encrypting BLOBs in table Documents")                             | Percentage done (*e.g.* 50) | Reserved         |
| Encryption finished | 2                | 0                | OK message (*e.g.* "Done")                                                                  | 0                           | Reserved         |
| Error               | 3                | 0                | Error message (*e.g.* "Problem on the XX data table: Encryption key has not been provided") | 0                           | Reserved         |
| End of execution    | 4                | 0                | "Done"                                                                                      | 0                           | Reserved         |
| Warning(\*)         | 5                | Object type      | Text of error                                                                               | Table or index number       | Reserved         |

(\*) Warning returned at the verification step (see [VERIFY DATA FILE](verify-data-file.md) command).

**Returned value**

Actual path of the destination folder of the original files.

#### Example 1 

Encrypt a data file for the first time:

```4d
 var $folder;$passphrase : Text
 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
  //Because the data file is not encrypted, no current encryption key is provided
    $folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)
 End if
```

#### Example 2 

Re-encrypt an encrypted data file (change the passphrase):

```4d
 var $folder;$targetFolder;$passphrase;$newPassphrase : Text
 $passphrase:=Request("Enter the current passphrase")
 If(OK=1)
    $newPassphrase:=Request("Enter the new passphrase")
    If(OK=1)
       $targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator
  //As the data file is encrypted, the current encryption key must be provided
       $folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)
    End if
 End if
```

#### Example 3 

Remove encryption from an encrypted data file:

```4d
 var $folder;$targetFolder;$passphrase : Text
 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
    $targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator
  //The new passphrase is set to an empty string to decrypt all data
  //The current passphrase must be provided
    $folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)
 End if
```

#### Example 4 

Re-encrypt an encrypted data file with the current key (for example, when the encryptable status has been changed for some tables).

```4d
 var $folder;$passPhrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Enter the passphrase")
 If(OK=1)
    $added:=Register data key($passphrase) //The data key is now in the 4D keychain
    $folder:=Encrypt data file(Structure file;"myData.4DD")
 End if
```

#### See also 

[4D Blog - New 4D commands to work with encrypted data](https://blog.4d.com/new-4d-commands-to-work-with-encrypted-data/)  
[Data file encryption status](data-file-encryption-status.md)  
[Decrypt data BLOB](decrypt-data-blob.md)  
[Encrypt data BLOB](encrypt-data-blob.md)  
[New data key](new-data-key.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1610 |
| Thread safe | &cross; |


