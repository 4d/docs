---
id: folder
title: Folder
slug: /commands-legacy/folder
displayed_sidebar: docs
---

<!--REF #_command_.Folder.Syntax-->**Folder** ( path | 4Dfolder {; pathType | *} ) -> Function result<!-- END REF-->
<!--REF #_command_.Folder.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | 4Dfolder | Text, Longint | &rarr; | Folder path or 4D folder constant |
| pathType | * | Longint, Operator | &rarr; | If path passed: fk posix path (default) or fk platform path
If 4Dfolder passed: * to return folder of host database |
| Function result | Object | &larr; | New folder object |

<!-- END REF-->

#### Description 



**Documentation moved**

The documentation for this command has been moved. See [**Folder** command on developer.4d.com](https://developer.4d.com/docs/API/FolderClass#folder) for updated documentation.

The **Folder** command creates and returns a new object of the Folder type. 

#### See also 

[File](file.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  