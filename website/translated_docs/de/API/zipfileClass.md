---
id: zipClass
title: ZIP Archive
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html) command.
- 4D ZIP file and folder instances are available through the `root` property (`ZIP Folder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.


### Beispiel

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


---
<!-- REF zipArchive.ZIP Read archive.Desc -->
## ZIP Read archive

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18     | Added   |
</details>

<!-- REF zipArchive.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF zipArchive.ZIP Read archive.Params -->
| Parameter | Typ           |    | Beschreibung                |
| --------- | ------------- |:--:| --------------------------- |
| zipFile   | 4D.File       | -> | Zip archive file            |
| password  | Text          | -> | ZIP archive password if any |
| Ergebnis  | 4D.ZipArchive | <- | Archive object              |
<!-- END REF -->


#### Beschreibung
The `ZIP Read archive` command <!-- REF zipArchive.ZIP Read archive.Summary -->retrieves the contents of 

*zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](document.md#copyto) or [folder.copyTo()](directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.


**Archive object**

The returned `4D.ZipArchive` object contains a single `root` property whose value is a `4D.Folder` object. This folder describes the whole contents of the ZIP archive:

| Property | Typ         | Beschreibung                                                 |
| -------- | ----------- | ------------------------------------------------------------ |
| `root`   | `4D.Folder` | A virtual folder containing the contents of the ZIP archive. |

The `root` folder and its contents can be manipulated with the `File` and `Folder` methods and properties.


#### Beispiel

To retrieve and view the contents of a ZIP file object:

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

To retrieve the list of the files and folders in the archive:

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

To read the contents of a file without extracting it from the root folder:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

To extract from the root folder:

```4d
  //extract a file
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extract all files
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

---



## Zip File object

The following properties and functions from the [File](fileClass.md) class are available to 4D ZIP file objects:











































| Available [File](fileClass.md) APIs for ZIP files                                   | Kommentar                              |
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
















































| Available [Folder](folderClass.md) APIs for ZIP folder                                 | Kommentar                                                                                                                         |
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