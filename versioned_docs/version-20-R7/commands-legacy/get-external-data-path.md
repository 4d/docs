---
id: get-external-data-path
title: Get external data path
slug: /commands/get-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.Get external data path.Syntax-->**Get external data path** ( *aField* ) : Text<!-- END REF-->
<!--REF #_command_.Get external data path.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Text, Blob, Picture | &#8594;  | Field whose storage location you want to get |
| Function result | Text | &#8592; | Full pathname of external storage file |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get external data path.Summary-->The **Get external data path** command returns the full pathname of the external storage file for the data of the field passed in the *aField* parameter, for the current record.<!-- END REF--> You must pass fields of the Text, BLOB or Picture type in the parameter. The command returns the pathname of the storage file even if the file does not exist or is not accessible.

More particularly, this command lets you recopy the external file.

**Note:** For more information about external storage, refer to the *Design Reference* manual.

 This command returns an empty string in the following cases:

* The field is not stored outside of the data file.
* The field has a Null value (and does not contain a pathname).
* The command is executed from a remote 4D.

#### See also 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1133 |
| Thread safe | &check; |


