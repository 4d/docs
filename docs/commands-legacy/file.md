---
id: file
title: File
slug: /commands/file
displayed_sidebar: docs
---

<!--REF #_command_.File.Syntax-->**File** ( path | 4Dfile {; pathType | *} ) -> Function result<!-- END REF-->
<!--REF #_command_.File.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path &#124; 4Dfile | Text, Longint | &#x1F852; | File path or 4D file constant |
| pathType &#124; * | Longint, Operator | &#x1F852; | If path passed: fk posix path (default) or fk platform path<br/>If 4Dfile passed: * to return file of host database |
| Function result | Object | &#x1F850; | New file object |

<!-- END REF-->

#### Description 

<!--REF #_command_.File.Summary-->**Documentation moved**

The documentation for this command has been moved.<!-- END REF--> See [**File** command on developer.4d.com](https://developer.4d.com/docs/API/FileClass#file) for updated documentation.

The **File** command creates and returns a new object of the *File* type. 

#### See also 

[Folder](folder.md)  
[Get 4D file](get-4d-file.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  