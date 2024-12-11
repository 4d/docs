---
id: document-list
title: DOCUMENT LIST
slug: /commands/document-list
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT LIST.Syntax-->**DOCUMENT LIST** ( *pathname* ; *documents* {; *options*} )<!-- END REF-->
<!--REF #_command_.DOCUMENT LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pathname | Text | &#8594;  | Pathname to volume, directory or folder |
| documents | Text array | &#8592; | Names of the documents present at this location |
| options | Integer | &#8594;  | Options for building list |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOCUMENT LIST.Summary-->The **DOCUMENT LIST** command populates the Text array *documents* with the names of the documents located at the location you pass in *pathname*.<!-- END REF-->You must pass an absolute pathname in the *pathname* parameter. 

By default, if you omit the *options* parameter, only the names of documents are returned in the *documents* array. You can modify this by passing, in the *options* parameter, one or more of the following constants, found in the *System Documents* theme:

| Constant          | Type    | Value | Comment                                                                         |
| ----------------- | ------- | ----- | ------------------------------------------------------------------------------- |
| Absolute path     | Integer | 2     | The *documents* array contains absolute pathnames                               |
| Ignore invisible  | Integer | 8     | Invisible documents are not listed                                              |
| Posix path        | Integer | 4     | The *documents* array contains Posix format pathnames                           |
| Recursive parsing | Integer | 1     | The *documents* array contains all files and subfolders of the specified folder |

**Notes:**

* With the Recursive parsing option in relative mode (option 1 only), the paths of documents located in subfolders begin with the ":" or "\\" characters depending on the platform.
* With the Posix path option in relative mode (option 4 only), paths do not start with "/".
* With the Posix path option in absolute mode (option 4 + 2), paths always begin with "/".

If there are no documents at the specified location, the command returns an empty array. If the pathname you pass in *pathname* is invalid, **DOCUMENT LIST** generates a file manager error that you can intercept using an [ON ERR CALL](on-err-call.md) method.

#### Example 1 

List of all documents in a folder (default syntax):

```4d
 DOCUMENT LIST("C:\\";arrFiles)
```

\-> arrFiles:  
 Text1.txt  
 Text2.txt

#### Example 2 

List of all documents in a folder in absolute mode:

```4d
 DOCUMENT LIST("C:\\";arrFiles; Absolute path)
```

\-> arrFiles:  
 C:\\Text1.txt  
 C:\\Text2.txt

#### Example 3 

List of all documents in recursive (relative) mode:

```4d
 DOCUMENT LIST("C:\\";arrFiles;Recursive parsing)
```

  
\-> arrFiles:  
 Text1.txt  
 Text2.txt  
 \\Folder1\\Text3.txt  
 \\Folder1\\Text4.txt  
 \\Folder2\\Text5.txt  
 \\Folder2\\Folder3\\Picture1.png

#### Example 4 

List of all documents in recursive absolute mode:

```4d
 DOCUMENT LIST("C:\\MyFolder\\";arrFiles;Recursive parsing+Absolute path)
```

\-> arrFiles:  
 C:\\MyFolder\\MyText1.txt  
 C:\\MyFolder\\MyText2.txt  
 C:\\MyFolder\\Folder1\\MyText3.txt  
 C:\\MyFolder\\Folder1\\MyText4.txt  
 C:\\MyFolder\\Folder2\\MyText5.txt  
 C:\\MyFolder\\Folder2\\Folder3\\MyPicture1.png

#### Example 5 

List of all documents in recursive Posix (relative) mode:

```4d
 DOCUMENT LIST("C:\\MyFolder\\";arrFiles;Recursive parsing+Posix path)
```

\-> arrFiles:  
 MyText1.txt  
 MyText2.txt  
 Folder1/MyText3.txt  
 Folder1/MyText4.txt  
 Folder2/MyText5.txt  
 Folder2/Folder3/MyPicture1.png

#### See also 

[FOLDER LIST](folder-list.md)  
[VOLUME LIST](volume-list.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 474 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


