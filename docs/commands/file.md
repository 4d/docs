---
id: file
title: File
displayed_sidebar: docs
---

<!--REF #_command_.File.Syntax-->**File** ( path | 4Dfile {; pathType | *} ) -> Function result<!-- END REF-->
<!--REF #_command_.File.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | 4Dfile | Text, Longint | -> | File path or 4D file constant |
| pathType | * | Longint, Operator | -> | If path passed: fk posix path (default) or fk platform path
If 4Dfile passed: * to return file of host database |
| Function result | Object | <- | New file object |

<!-- END REF-->

#### Description 



**Documentation moved**

The documentation for this command has been moved. See [**File** command on developer.4d.com](https://developer.4d.com/docs/API/FileClass#file) for updated documentation.

The **File** command creates and returns a new object of the *File* type. 

#### See also 
[Folder](folder.md)  
[Get 4D file](get-4d-file.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  