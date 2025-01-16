---
id: create-folder
title: CREATE FOLDER
slug: /commands/create-folder
displayed_sidebar: docs
---

<!--REF #_command_.CREATE FOLDER.Syntax-->**CREATE FOLDER** ( *folderPath* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE FOLDER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| folderPath | Text | &#8594;  | Pathname to new folder to create |
| * | Operator | &#8594;  | Create folder hierarchy |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE FOLDER.Summary-->The **CREATE FOLDER** command creates a folder according to the pathname you pass in *folderPath*.<!-- END REF-->

If you pass a name in *folderPath*, the folder is created in the database folder. 

In *folderPath*, you can also pass a folder hierarchy starting from the root of the volume or from the database folder (in this case, the string must end with a folder separator).   
If you omit the *\** parameter, an error is generated and no folder is created if any one of the intermediary folders does not exist.   
If you pass the *\** parameter, **CREATE FOLDER** recreates the folder hierarchy if necessary and no error is generated. In this case, you can also pass a document pathname in *folderPath*. The document name is then ignored but the folder hierarchy specified in *folderPath* is created recursively 

#### Example 1 

The following example creates the “Archives” folder in the folder of the database:

```4d
 CREATE FOLDER("Archives")
```

#### Example 2 

The following example creates the Archives folder in the folder of the database, then it creates the “January” and “February” subfolders:

```4d
 CREATE FOLDER("Archives")
 CREATE FOLDER("Archives\\January")
 CREATE FOLDER("Archives\\February")
```

#### Example 3 

The following example creates the “Archives” folder at the root level of the C volume:

```4d
 CREATE FOLDER("C:\\Archives")
```

#### Example 4 

Creation of the "C:\\Archives\\2011\\January\\" folder hierarchy:

```4d
 CREATE FOLDER("C:\\Archives\\2011\\January\\";*)
```

#### Example 5 

Creation of the "\\February\\" subfolder in the existing "C:\\Archives\\" folder: 

```4d
 CREATE FOLDER("C:\\Archives\\2011\\February\\Doc.txt";*)
  // the "Doc.txt" file is ignored
```

#### See also 

[FOLDER LIST](folder-list.md)  
[Test path name](test-path-name.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 475 |
| Thread safe | &check; |
| Modifies variables | OK, error |


