---
id: copy-document
title: COPY DOCUMENT
slug: /commands/copy-document
displayed_sidebar: docs
---

<!--REF #_command_.COPY DOCUMENT.Syntax-->**COPY DOCUMENT** ( *sourceName* ; *destinationName* {; *newName*} {; *} )<!-- END REF-->
<!--REF #_command_.COPY DOCUMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| sourceName | Text | &#8594;  | Pathname of file or folder to be copied |
| destinationName | Text | &#8594;  | Name or pathname of copied file or folder |
| newName | Text | &#8594;  | New name of copied file or folder |
| * | Operator | &#8594;  | Override existing document if any |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY DOCUMENT.Summary-->The **COPY DOCUMENT** command copies the file or folder specified by *sourceName* to the location specified by *destinationName* and, optionally, renames it.<!-- END REF-->

* **Copying files**  
In this case, the *sourceName* parameter can contain:  
   * either a complete file pathname expressed with respect to the root of the volume,  
   * or a pathname relative to the database folder.  
The *destinationName* parameter can contain several types of locations:  
   * a complete file pathname expressed with respect to the root of the volume: the file is copied to this location  
   * a file name or file pathname relative to the database folder: the file is copied into the database folder (the subfolders must already exist)  
   * a complete folder pathname or a pathname relative to the database folder (*destinationName* must end with the folder separator for the platform): the file is copied into the designated folder. These folders must already exist on the disk; they are not created.  
An error is generated if there is already a document named *destinationName* unless you specify the optional *\** parameter which, in this case, instructs **COPY DOCUMENT** to delete and override the existing document in the destination location.
* **Copying folders**  
To indicate that you are designating a folder, the strings passed in *sourceName* and *destinationName* must end with a folder separator for the platform. For example, under Windows "C:\\\\Element\\\\" designates a folder and "C:\\\\Element" designates a file.  
To copy a folder, pass its complete pathname in *sourceName*. This folder must already exist on the disk. When a folder is set in the *sourceName* parameter, a folder must also be designated in the *destinationName* parameter. You must pass the complete folder pathname (where each element must already exist on the disk)  
If a folder with the same name as the one designated by the *sourceName* parameter already exists at the location set by the *destinationName* parameter and it is not empty, 4D checks its contents before copying the items. An error is generated when a file with the same name already exists, unless you have passed the optional *\** parameter which, in this case, indicates to the command to delete and replace the file in the destination location. .

Note that you can pass a file in the *sourceName* parameter and a folder in the *destinationName* parameter, in order to copy a file into a folder.

The optional *newName* parameter, when it is passed, renames the document copied to its destination location (file or folder). When it is passed in the context of copying a file, this parameter replaces the name (if any) passed in the *destinationName* parameter.

#### Example 1 

The following example duplicates a document in its own folder:

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"C:\\FOLDER\\DocName2")
```

#### Example 2 

The following example copies a document to the database folder (provided C:\\\\FOLDER is not the database folder):

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"DocName")
```

#### Example 3 

The following example copies a document from one volume to another one:

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"F:\\Archives\\DocName.OLD")
```

#### Example 4 

The following example duplicates a document in its own folder overriding an already existing copy:

```4d
 COPY DOCUMENT("C:\\FOLDER\\DocName";"C:\\FOLDER\\DocName2";*)
```

#### Example 5 

Copying a file into a specific folder while keeping the same name:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\")
```

#### Example 6 

Copying a file into a specific folder while keeping the same name and overriding the existing document:

```4d
 COPY DOCUMENT("C:\\Projects\\DocName";"C:\\Projects\\"; *)
```

#### Example 7 

Copying a folder into another folder (both folders must already be present on the disk):

```4d
 COPY DOCUMENT("C:\\Projects\\";"C\\Archives\\2011\\")
```

#### Example 8 

The following examples create different files and folders in the database folder (examples under Windows). In each case, the "folder2" folder must exist:

```4d
 COPY DOCUMENT("folder1\\name1";"folder2\\")
  //creates the "folder2/name1" file
 
 COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
  //creates the "folder2/new" file
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2")
  //creates the "folder2/name2" file
 
 COPY DOCUMENT("folder1\\name1";"folder2\\name2";"new")
  //creates the "folder2/new" file (name2 is ignored)
 
 COPY DOCUMENT("folder1\\" ; "folder2\\")
  //creates the "folder2/folder1/" folder
 
 COPY DOCUMENT("folder1\\" ; "folder2\\" ; "new")
  //creates the "folder2/new/" folder
```

#### See also 

[MOVE DOCUMENT](move-document.md)  
*System Documents*  