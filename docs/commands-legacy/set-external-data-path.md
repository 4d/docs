---
id: set-external-data-path
title: SET EXTERNAL DATA PATH
slug: /commands/set-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.SET EXTERNAL DATA PATH.Syntax-->**SET EXTERNAL DATA PATH** ( *aField* ; *path* )<!-- END REF-->
<!--REF #_command_.SET EXTERNAL DATA PATH.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Text, Blob, Picture | &#8594;  | Field for which to set the storage location |
| path | Text, Integer | &#8594;  | Pathname and file name of external storage or0 = use structure definition 1 = use default folder |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET EXTERNAL DATA PATH.Summary-->The **SET EXTERNAL DATA PATH** command sets or modifies, for the current record, the external storage location for the *aField* field passed as parameter.<!-- END REF-->

With 4D, it is possible to store Text, BLOB, and Picture type fields *outside* of the data file. For a complete description of this functionality, refer to the *Design Reference* manual.

The setting defined by this command is only applied when the current record is saved on the disk. If the current record is canceled, the command does nothing. Storage parameters set in the application structure are not changed. 

In *path*, you can pass either a custom pathname, or a constant designating an automatic location:

* **custom pathname to file**  
In this case, you use external storage in "custom mode." Certain 4D database functions are not available automatically in this mode (see the Design Reference manual). In particular, you must manage the creation or modification of the files yourself.  
    
You can pass either a path relative to the data file or an absolute path, which must include the name and extension of the storage file. You must use the system syntax. To set a path relative to the data file, pass "../" (Windows) or "..:" (OS X) at the start of the string. You can designate any folder, including the default folder of database external files (*databaseName*.ExternalData) - in this case, these files are included when the database is saved.  
    
The file designated by the *path* parameter must exist and be accessible when the command is executed. Note that if the path is invalid (file or folder missing), an error is returned only in cases where the *path* was defined as absolute. When a relative *path* has been specified, you must ensure its validity since no error is generated if the file is not found.  
    
If you save the external file in the same folder as the data file or one of its subfolders, 4D considers that the path specified is relative to the data file and maintains the link even when the data file folder is moved or renamed.  
    
Note that this means it is possible to "share" the same external file between several records. Any changes made to this external file are available in all the records. In this case, if several processes can write the same fields simultaneously, you must be careful to prevent concurrent accesses through semaphores, so as not to risk damaging the external files.
* **automatic location**  
You can designate two automatic locations using the following constants, found in the *Data File Maintenance* theme:
  
| Constant                 | Type    | Value | Comment                                                                                                                                                                                                                            |  
| ------------------------ | ------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Use default folder       | Integer | 1     | The data of the field passed as parameter are saved in the default folder, named *databaseName*.ExternalData and placed next to the data file. In this mode, external data are managed by 4D as if they were inside the data file. |  
| Use structure definition | Integer | 0     | 4D uses the parameters set in the structure for field storage (see the *Design Reference* manual). If you change from external storage to internal storage, the external file is not deleted.                                      |

Once this command is executed, 4D automatically maintains the link between the field of the record and the file on disk. You do not need to execute the command again (except if you need to change the *path*). If 4D can no longer access the data of the field (storage file renamed or deleted, path modified, etc.), the field is empty but no error is generated. 

**Note:** The **SET EXTERNAL DATA PATH** command can only be executed on a local 4D or on 4D Server. It does nothing when it is executed on a remote 4D.

#### Example 

You want to save an existing file in the picture field, stored outside of the data, in the database folder:

```4d
 CREATE RECORD([Photos])
 [Photos]Name:="Paris.png"
 SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)
  //"/custom/Paris.png" must exist next to structure file
 SAVE RECORD([Photos])
```

#### See also 

[Get external data path](get-external-data-path.md)  
[RELOAD EXTERNAL DATA](reload-external-data.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1134 |
| Thread safe | &check; |


