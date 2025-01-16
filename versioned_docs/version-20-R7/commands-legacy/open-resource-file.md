---
id: open-resource-file
title: Open resource file
slug: /commands/open-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.Open resource file.Syntax-->**Open resource file** ( *resFilename* {; *fileType*} ) : DocRef<!-- END REF-->
<!--REF #_command_.Open resource file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resFilename | Text | &#8594;  | Short or long name of resource file, or Empty string for standard Open File dialog box |
| fileType | Text | &#8594;  | Mac OS file type (4-character string), or Windows file extension (1- to 3-character string), or All files, if omitted |
| Function result | DocRef | &#8592; | Resource file reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Open resource file.Summary-->The **Open resource file** command opens the resource file whose name or pathname you pass in *resFileName*.<!-- END REF-->

If you pass a file name, the file should be located in the same folder as the structure file of the database. Pass a pathname to open a resource file located in another folder.

If you pass an empty string in *resFileName*, the Open File dialog box is presented. You can then select the resource file to open. If you cancel the dialog, no resource file is open; **Open resource file** returns a null DocRef and sets the OK variable to 0.

If the resource file is opened correctly, **Open resource file** returns its resource file reference number and sets the OK variable to 1\. If the resource file does not exist, or if the file you try to open is not a resource file, an error is generated.

* On Macintosh, if you use the Open File dialog box, all files are presented by default. To show a particular type of file, specify the file type in the optional *fileType* parameter.
* On Windows, if you use the Open File dialog box, all files are presented by default. To show a particular type of file, in *fileType*, pass a 1- to 3-character Windows file extension or a Macintosh file type mapped using the *\_o\_MAP FILE TYPES* command.

Remember to call [CLOSE RESOURCE FILE](close-resource-file.md) for the resource file. Note, however, that when you quit the application (or open another database), 4D automatically closes all the resource files you opened using **Open resource file**.

Unlike the [Open document](open-document.md) command, which opens a document with exclusive read-write access by default, **Open resource file** does not prevent you from opening a resource file already open from within the 4D session. For example, if you try to open the same document twice using [Open document](open-document.md), an I/O error will be returned at second attempt. On the other hand, if you try to open a resource file already open from within the 4D session, **Open resource file** will return the resource file reference number to the file already open. Even if you open a resource file several times, you need to call [CLOSE RESOURCE FILE](close-resource-file.md) once in order to close that file. Note that this is permitted if the resource file is open from within the 4D session; if you try open a resource file already opened by another application, you will get an I/O error.

**WARNING:**

* It is forbidden to access a 4D application resource file as well as a 4D Desktop merged database resource file.
* Although it is technically possible, you are advised not to use the database structure resource file because your code will not work if the database is compiled and merged with 4D Desktop.  
However, if you access and intend to programmatically add, delete or modify its resources, be sure to test the environment in which you are running. With 4D Server, this will probably lead to serious issues. For example, if you modify a resource on the server machine (via a database method or a stored procedure), you will definitely affect the built-in 4D Server administration service that distributes resources (transparently) to the workstations. Note that with 4D Client, you do not have direct access to the structure file; it is located on the server machine.
* For these reasons, if you use resources, store them in your own files.
* When working with your own resources, do NOT use negative resource IDs; they are reserved for use by the Operating System. Do NOT use resource IDs in the range 0..14,999; this range is reserved for use by 4D. Use the range 15,000..32,767 for your own resources. Remember that once you have opened a resource file, it will be the first file to be searched in the resource files chain. If you store a resource in that file with an ID in the range of system or 4D resources, this resource will be found by commands such as [GET RESOURCE](get-resource.md) and also by internal routines of the 4D application. This may be the result you want to achieve, but if you are not sure, do NOT use these ranges, as they may lead to system errors.
* Resource files are highly structured files and cannot accept more than 2,700 resources per file. If you work with files containing a large number of resources, it is a good idea to test that number before adding new resources to a file. See the Count resources method listed for the [RESOURCE TYPE LIST](resource-type-list.md) command.

After you have opened a resource file, you can analyze the contents of the file using the [RESOURCE TYPE LIST](resource-type-list.md) and [RESOURCE LIST](resource-list.md) commands.

#### Example 1 

The following example tries to open, on Windows, the resource file “MyPrefs.res” located in the database folder:

```4d
 $vhResFile:=Open resource file("MyPrefs";"res ")
```

On Macintosh, the example tries to open the file “MyPrefs”.

#### Example 2 

The following example tries to open, on Windows. the resource file “MyPrefs.rsr” located in the database folder:

```4d
 $vhResFile:=Open resource file("MyPrefs";"rsr")
```

On Macintosh, the example tries to open the file “MyPrefs”.

#### Example 3 

The following example displays the Open file dialog box showing all types of files:

```4d
 $vhResFile:=Open resource file("")
```

#### Example 4 

The following example displays the Open file dialog box showing files created by the  command, using the default file type:

```4d
 $vhResFile:=Open resource file("";"res ")
 If(OK=1)
    ALERT("You just opened "+Document+”.")
    CLOSE RESOURCE FILE($vhResFile)
 End if
```

#### System variables and sets 

If the resource file is successfully opened, the OK variable is set to 1\. If the resource file could not be opened or if the user clicked Cancel in the Open file dialog box, the OK variable is set to 0 (zero).

If the resource file is successfully opened using the Open file dialog box, the Document variable is set to the pathname of the file.

#### Error management 

If the resource file could not be opened due to a resource or I/O problem, an error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[CLOSE RESOURCE FILE](close-resource-file.md)  
*Resources*  

#### Properties

|  |  |
| --- | --- |
| Command number | 497 |
| Thread safe | &cross; |
| Modifies variables | OK, Document, error |


