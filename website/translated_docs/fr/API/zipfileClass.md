---
id: zipClass
title: ZIP Archive
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html) command.
- 4D ZIP file and folder instances are available through the `root` property (`ZIP Folder`) of the object returned by [ZIP Read archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Read-archive.301-4982192.en.html) command.


### Exemple

To retrieve and view the contents of a ZIP file object:

```4d
var $path; $archive : 4D.File
var $zipFile : 4D.ZipFile
var $zipFolder : 4D.ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // store the zip main folder
$zipFile:=$zipFolder.files()[0] //read the first zipped file

If($zipFile.extension=".txt")
    $txt:=$zipFile.getText()
End if
```




## Zip File object

The following properties and functions from the [File](fileClass.md) class are available to 4D ZIP file objects:











































| Available [File](fileClass.md) APIs for ZIP files                                   | Commentaire                            |
| ----------------------------------------------------------------------------------- | -------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](fileClass.md#copyto)                   |                                        |
| [<!-- INCLUDE #document.creationDate.Syntax -->](fileClass.md#creationdate)         |                                        |
| [<!-- INCLUDE #document.creationTime.Syntax -->](fileClass.md#creationtime)         |                                        |
| [<!-- INCLUDE #document.exists.Syntax -->](fileClass.md#exists)                     |                                        |
| [<!-- INCLUDE #document.extension.Syntax -->](fileClass.md#extension)               |                                        |
| [<!-- INCLUDE #document.fullName.Syntax -->](fileClass.md#fullname)                 |                                        |
| [<!-- INCLUDE #document.getContent().Syntax -->](fileClass.md#getcontent)           |                                        |
| [<!-- INCLUDE #document.getIcon().Syntax -->](fileClass.md#geticon)                 |                                        |
| [<!-- INCLUDE #document.getText().Syntax -->](fileClass.md#gettext)                 |                                        |
| [<!-- INCLUDE #document.hidden.Syntax -->](fileClass.md#hidden)                     |                                        |
| [<!-- INCLUDE #document.isAlias.Syntax -->](fileClass.md#isalias)                   |                                        |
| [<!-- INCLUDE #document.isFile.Syntax -->](fileClass.md#isfile)                     |                                        |
| [<!-- INCLUDE #document.isFolder.Syntax -->](fileClass.md#ifFolder)                 |                                        |
| [<!-- INCLUDE #document.isWritable.Syntax -->](fileClass.md#iswritable)             | Always false with ZIP archive          |
| [<!-- INCLUDE #document.modificationDate.Syntax -->](fileClass.md#modificationdate) |                                        |
| [<!-- INCLUDE #document.modificationTime.Syntax -->](fileClass.md#modificationtime) |                                        |
| [<!-- INCLUDE #document.name.Syntax -->](fileClass.md#name)                         |                                        |
| [<!-- INCLUDE #document.original.Syntax -->](fileClass.md#original)                 |                                        |
| [<!-- INCLUDE #document.parent.Syntax -->](fileClass.md#parent)                     |                                        |
| [<!-- INCLUDE #document.path.Syntax -->](fileClass.md#path)                         | Returns a path relative to the archive |
| [<!-- INCLUDE #document.platformPath.Syntax -->](fileClass.md#platformpath)         |                                        |



## Zip Folder object

The following properties and functions from the [Folder](folderClass.md) class are available to 4D ZIP folder objects:
















































| Available [Folder](folderClass.md) APIs for ZIP folder                                 | Commentaire                                                                                                                       |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](folderClass.md#copyto)                   |                                                                                                                                   |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](folderClass.md#creationdate)         | Date may be different for the `root` folder from a folder within the archive                                                      |
| [<!-- INCLUDE #directory.creationTime.Syntax -->](folderClass.md#creationtime)         | Time may be different for the `root` folder from a folder within the archive                                                      |
| [<!-- INCLUDE #directory.exists.Syntax -->](folderClass.md#exists)                     |                                                                                                                                   |
| [<!-- INCLUDE #directory.extension.Syntax -->](folderClass.md#extension)               |                                                                                                                                   |
| [<!-- INCLUDE #directory.file().Syntax -->](folderClass.md#file)                       |                                                                                                                                   |
| [<!-- INCLUDE #directory.files().Syntax -->](folderClass.md#files)                     |                                                                                                                                   |
| [<!-- INCLUDE #directory.folder().Syntax -->](folderClass.md#folder)                   |                                                                                                                                   |
| [<!-- INCLUDE #directory.folders().Syntax -->](folderClass.md#folders)                 |                                                                                                                                   |
| [<!-- INCLUDE #directory.fullName.Syntax -->](folderClass.md#fullname)                 |                                                                                                                                   |
| [<!-- INCLUDE #directory.getIcon().Syntax -->](folderClass.md#geticon)                 |                                                                                                                                   |
| [<!-- INCLUDE #directory.hidden.Syntax -->](folderClass.md#hidden)                     |                                                                                                                                   |
| [<!-- INCLUDE #directory.isAlias.Syntax -->](folderClass.md#isalias)                   |                                                                                                                                   |
| [<!-- INCLUDE #directory.isFile.Syntax -->](folderClass.md#isfile)                     |                                                                                                                                   |
| [<!-- INCLUDE #directory.isFolder.Syntax -->](folderClass.md#isfolder)                 |                                                                                                                                   |
| [<!-- INCLUDE #directory.isPackage.Syntax -->](folderClass.md#ispackage)               |                                                                                                                                   |
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](folderClass.md#modificationdate) | Date may be different for the `root` folder from a folder within the archive                                                      |
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](folderClass.md#modificationtime) | Time may be different for the `root` folder from a folder within the archive                                                      |
| [<!-- INCLUDE #directory.name.Syntax -->](folderClass.md#name)                         |                                                                                                                                   |
| [<!-- INCLUDE #directory.original.Syntax -->](folderClass.md#original)                 |                                                                                                                                   |
| [<!-- INCLUDE #directory.parent.Syntax -->](folderClass.md#parent)                     | The archive's virtual `root` folder has no parent. However, the folders within the archive may have a parent other than the root. |
| [<!-- INCLUDE #directory.path.Syntax -->](folderClass.md#path)                         | Returns a path relative to the archive                                                                                            |
| [<!-- INCLUDE #directory.platformPath.Syntax -->](folderClass.md#platformpath)         |                                                                                                                                   |