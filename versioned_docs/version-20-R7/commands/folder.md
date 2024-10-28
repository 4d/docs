---
id: folder
title: Folder
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R8 |Support of `fk home folder`|
|17 R5|Added|

</details>

<!-- REF #_command_.Folder.Syntax -->**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder<!-- END REF -->


<!-- REF #_command_.Folder.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|path|Text|&#8594; |Folder path|
|folderConstant|Integer|&#8594; |4D folder constant|
|pathType|Integer|&#8594; |`fk posix path` (default) or `fk platform path`|
|*|operator|&#8594; |* to return folder of host database|
|Result|4D.Folder|&#8592;|New folder object|
<!-- END REF -->

#### Description

The `Folder` command <!-- REF #_command_.Folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. The command accepts two syntaxes:

**Folder ( path { ; pathType } { ; \* } )**

In the *path* parameter, pass a folder path string. You can use a custom string or a [filesystem](../Concepts/paths.md#filesystem-pathnames) (e.g., "/DATA").

> Only absolute pathnames are supported with the `Folder` command.

By default, 4D expects a path expressed with the POSIX syntax. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. The following constants are available:

|Constant|Value|Comment|
|---|---|---|
|fk platform path|1|Path expressed with a platform-specific syntax (mandatory in case of platform pathname)|
|fk posix path|0|Path expressed with POSIX syntax (default)

**Folder ( folderConstant { ; \* } )**

In the *folderConstant* parameter, pass a 4D built-in or system folder, using one of the following constants:

|Constant|Value|Comment|
|---|---|---|
|fk applications folder|116||
|fk data folder|9|Associated filesystem: "/DATA"|
|fk database folder|4|Associated filesystem: "/PACKAGE"|
|fk desktop folder|115||
|fk documents folder|117|Document folder of the user|
|fk home folder|118|Current home folder of the user (usually `/Users/<username>/`)|
|fk licenses folder|1|Folder containing the machine's 4D license files|
|fk logs folder|7|Associated filesystem: "/LOGS"|
|fk mobileApps folder|10||
|fk remote database folder|3|4D database folder created on each 4D remote machine|
|fk resources folder|6|Associated filesystem: "/RESOURCES"|
|fk system folder|100||
|fk user preferences folder|0|4D folder that stores user preference files within the user home folder|
|fk web root folder|8|Current Web root folder of the database: if within the package "/PACKAGE/path", otherwise full path|

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Otherwise, if you omit the `*` parameter, a null object is always returned.  

> On Windows, in merged clients, the location of built-in folders is modified if the `ShareLocalResourcesOnWindowsClient` [BuildApp key](../Desktop/building.md#buildapp4dsettings) is used.


#### See also 

[File](file.md)  
[Object to path](../commands-legacy/object-to-path.md)  
[Path to object](../commands-legacy/path-to-object.md)  
