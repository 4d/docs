---
id: select-document
title: Select document
slug: /commands/select-document
displayed_sidebar: docs
---

<!--REF #_command_.Select document.Syntax-->**Select document** ( *directory* ; *fileTypes* ; *title* ; *options* {; *selected*} ) : Text<!-- END REF-->
<!--REF #_command_.Select document.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| directory | Text, Integer | &#8594;  | • Directory access path to display by default in the document selection dialog box, or• Empty string to display default user folder (“My documents” under Windows, “Documents” under Mac OS), or• Number of the memorized access path |
| fileTypes | Text | &#8594;  | List of types of documents to filter, or "*" to not filter documents |
| title | Text | &#8594;  | Title of the selection dialog box |
| options | Integer | &#8594;  | Selection option(s) |
| selected | Text array | &#8592; | Array containing the list of access paths + names of selected files |
| Function result | Text | &#8592; | Name of selected file (first file of the list in case of multiple selection) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Select document.Summary-->The **Select document** command displays a standard open document dialog box which allows the user to set one or more files and returns the name and/or full access path of the selected file(s).<!-- END REF-->

The *directory* parameter indicates the folder whose contents are initially displayed in the open document dialog box. You can pass three types of values:

* a text containing the full access path of the folder to display.
* an empty string ("") to display the default user folder for the current opeerating system (“My documents” under Windows, “Documents” under Mac OS).
* a number of the memorized access path (from 1 to 32000) to display the associated folder.  
As such, you can store in memory the access path of the folder opened when the user clicked the selection button, in other words, the folder selected by the user. During the first call of an arbitrary number (for example, 5) the command displays the default user folder of the operating system (equivalent of passing an empty string). The user could also browse folders on the hard disk. When the user clicks on the selection button, the access path is memorized and associated with number 5\. During future calls to number 5, the memorized access path will be used by default. If a new location is selected, path number 5 is updated.  
This mechanism lets you memorize up to 32,000 access paths. Under Windows, each path is kept for the session only. Under Mac OS, the paths are kept by the system and remain stored from one session to the next.

**Note:** This mechanism is the same as the one used by the [Select folder](select-folder.md) command. The numbers of the memorized pathnames are shared by both commands.

Pass the type(s) of file(s) that can be selected in the open file dialog box in the *fileTypes* parameter. You can pass a list of several types separated by a ; (semi-colon). For each type defined, a row will be added in the type choice menu of the dialog box.

* Under Mac OS, you can pass either a standard Mac OS type (TEXT, APPL, etc.), or a UTI (Uniform Type Identifier) type. UTI types have been defined by Apple in order to meet requirements concerning the standardization of file types. For example, "public.text" is the UTI type of text type files. For more information about UTIs, please refer to the *[Uniform Type Identifier Concepts page](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html)* on the *developer.apple.com* web site.
* Under Windows, you can also pass a standard Mac OS type file — 4D performs the conversion internally — or the file extensions (.txt, .exe, etc.). Please note that under Windows, the user can “force” the display of all document types by entering \*.\* in the dialog box. However, in this case, 4D will perform an additional verification of the types of files selected: if the user selects an unauthorized file type, the command returns an error.

If you do not want to restrict the files displayed to one or more types, pass the "\*" (star) or ".\*" string in *fileTypes*.

Pass the label that must appear in the dialog box in the *title* parameter. By default, if you pass an empty string, the label “Open” is displayed.

The *options* parameter allows you to specify advanced functions that are allowed in an open file dialog box. 4D provides the following pre-defined constants in the *System Documents* theme:

| Constant          | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allow alias files | Integer | 8     | Authorizes the selection of shortcuts (Windows) or aliases (macOS) as document. <br/>By default, if this constant is not used, when an alias or shortcut is selected, the command will return the access path of the targeted element. When you pass the constant, the command returns the path of the alias or shortcut itself.                                                                                                |
| File name entry   | Integer | 32    | Allows user to enter a file name in a 'Save as' dialog box. No file is saved and it is up to the developer to create a file in response to this action (the Document system variable is updated). In this context, the *directory* parameter may contain the path to a file instead of a directory. The file name will be used as the suggested file name in the Save as text field. The parent directory will be used as default path. |
| Multiple files    | Integer | 1     | Authorizes the simultaneous selection of several files using the key combinations **Shift+click** (adjacent selection) and **Ctrl+click** (Windows) or **Command+click** (Mac OS). In this case, the *selected* parameter, if passed, contains the list of all selected files. By default, if this constant is not used, the command will not allow the selection of multiple files.                                                    |
| Package open      | Integer | 2     | (macOS only): Authorizes the opening of packages as folders and thus the viewing /selection of their contents. By default, if this constant is not used, the command will not allow the opening of packages.                                                                                                                                                                                                                            |
| Package selection | Integer | 4     | (macOS only): Authorizes the selection of packages as entities (default if omitted). Use Package open if you want to allow users to view/select package contents.                                                                                                                                                                                                                                                                       |
| Use sheet window  | Integer | 16    | (Mac OS only): Displays the selection dialog box in the form of a sheet window (this option is ignored under Windows). <br/>Sheet windows are specific to the Mac OS X interface which have graphic animation (for more information, refer to the *Window Types (compatibility)* section). By default, if this constant is not used, the command will display a standard dialog box.                                            |

If you do not want to use an option, pass 0 in the *options* parameter.

The optional *selected* parameter allows you to get the full access path (access path + name) of every file selected by the user. The command creates, sizes and fills the array according to the user selection. This parameter is useful when the Multiple files option is used or when you want to find out the access path of the selected file (simply take the name of the file returned by the command from the value of the array). If no file is selected, the array is returned empty.

**Note:** Under Mac OS, a selected package is considered as a folder. The pathname returned in the *selected* array includes a final ":" character. For example: Disk:Applications:4D:4D v11.4:US:4D Volume Desktop.app:

The command returns the name (name + extension under Windows) of the selected file. If several files are selected, the command returns the name of the first file in the list of selected files. The list of files can be obtained in the *selected* parameter. If no file is selected, the command returns an empty string.

#### Example 1 

This example is used to specify a 4D data file: 

```4d
 var $platform : Integer
 PLATFORM PROPERTIES($platform)
 If($platform=Windows)
    $DocType:=".4DD"
 Else
    $DocType:="com.4d.4d.data-file" //UTI type
 End if
 $Options:=Allow alias files+Package open+Use sheet window
 $Doc:=Select document("";$DocType;"Select the data file";$Options)
```

#### Example 2 

Creation of a custom document by user:

```4d
 $doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Report name:";File name entry)
 If(OK=1)
    BLOB TO DOCUMENT(Document;$blob) // $blob contains document to record
 End if
```

#### System variables and sets 

If the command has been correctly executed and a valid document was selected, the system variable OK is set to 1 and the system variable Document will contain the full access path of the selected file.   
If no file was selected (for example, if the user clicked on the **Cancel** button in the open file dialog box), the system variable OK is set to 0 and the system variable Document will be empty. 

#### See also 

[Open document](open-document.md)  
[Select folder](select-folder.md)  