---
id: zipClass
title: ZIP
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html) command.
- 4D ZIP file and folder instances are available through the `root` property (`ZIP Folder`) of the object returned by [ZIP Read archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Read-archive.301-4982192.en.html) command. 


### Example

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




## Zip File Summary

The following properties and functions from the [File](fileClass.md) class are available to 4D ZIP files (additional information for ZIP is provided in **bold**):

||
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](fileClass.md#copyto-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #document.creationDate.Syntax -->](fileClass.md#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
|[<!-- INCLUDE #document.creationTime.Syntax -->](fileClass.md#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
|[<!-- INCLUDE #document.exists.Syntax -->](fileClass.md#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
|[<!-- INCLUDE #document.extension.Syntax -->](fileClass.md#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
|[<!-- INCLUDE #document.fullName.Syntax -->](fileClass.md#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
|[<!-- INCLUDE #document.getContent().Syntax -->](fileClass.md#getcontent-)<p><!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getIcon().Syntax -->](fileClass.md#geticon-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](fileClass.md#gettext-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #document.hidden.Syntax -->](fileClass.md#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
|[<!-- INCLUDE #document.isAlias.Syntax -->](fileClass.md#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->|
|[<!-- INCLUDE #document.isFile.Syntax -->](fileClass.md#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
|[<!-- INCLUDE #document.isFolder.Syntax -->](fileClass.md#ifFolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
|[<!-- INCLUDE #document.isWritable.Syntax -->](fileClass.md#iswritable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary --><p>**Always false with ZIP archive**|
|[<!-- INCLUDE #document.modificationDate.Syntax -->](fileClass.md#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
|[<!-- INCLUDE #document.modificationTime.Syntax -->](fileClass.md#modificationtime)<p>
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
|[<!-- INCLUDE #document.name.Syntax -->](fileClass.md#name)<p>
|&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
|[<!-- INCLUDE #document.original.Syntax -->](fileClass.md#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
|[<!-- INCLUDE #document.parent.Syntax -->](fileClass.md#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
|[<!-- INCLUDE #document.path.Syntax -->](fileClass.md#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary --><p>**Returns a path relative to the archive**|
|[<!-- INCLUDE #document.platformPath.Syntax -->](fileClass.md#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|


## Zip Folder Summary

The following properties and functions from the [Folder](folderClass.md) class are available to 4D ZIP folders (additional information for ZIP is provided in **bold**):

||
|---|
|[<!-- INCLUDE #directory.copyTo().Syntax -->](folderClass.md#copyto-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
|[<!-- INCLUDE #directory.creationDate.Syntax -->](folderClass.md#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationDate.Summary --><p>**Date may be different for the `root` folder from a folder within the archive**|
|[<!-- INCLUDE #directory.creationTime.Syntax -->](folderClass.md#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationTime.Summary --><p>**Time may be different for the `root` folder from a folder within the archive**|
|[<!-- INCLUDE #directory.exists.Syntax -->](folderClass.md#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
|[<!-- INCLUDE #directory.extension.Syntax -->](folderClass.md#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|
|[<!-- INCLUDE #directory.file().Syntax -->](folderClass.md#file-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.file().Summary -->|
|[<!-- INCLUDE #directory.files().Syntax -->](folderClass.md#files-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.files().Summary -->|
|[<!-- INCLUDE #directory.folder().Syntax -->](folderClass.md#folder-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folder().Summary -->|
|[<!-- INCLUDE #directory.folders().Syntax -->](folderClass.md#folders-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folders().Summary -->|
|[<!-- INCLUDE #directory.fullName.Syntax -->](folderClass.md#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
|[<!-- INCLUDE #directory.getIcon().Syntax -->](folderClass.md#geticon-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.getIcon().Summary -->|
|[<!-- INCLUDE #directory.hidden.Syntax -->](folderClass.md#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
|[<!-- INCLUDE #directory.isAlias.Syntax -->](folderClass.md#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
|[<!-- INCLUDE #directory.isFile.Syntax -->](folderClass.md#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
|[<!-- INCLUDE #directory.isFolder.Syntax -->](folderClass.md#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
|[<!-- INCLUDE #directory.isPackage.Syntax -->](folderClass.md#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
|[<!-- INCLUDE #directory.modificationDate.Syntax -->](folderClass.md#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary --><p>**Date may be different for the `root` folder from a folder within the archive**|
|[<!-- INCLUDE #directory.modificationTime.Syntax -->](folderClass.md#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary --><p>**Time may be different for the `root` folder from a folder within the archive**|
|[<!-- INCLUDE #directory.name.Syntax -->](folderClass.md#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
|[<!-- INCLUDE #directory.original.Syntax -->](folderClass.md#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
|[<!-- INCLUDE #directory.parent.Syntax -->](folderClass.md#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary --><p>**The archive's virtual `root` folder has no parent. However, the folders within the archive may have a parent other than the root.**|
|[<!-- INCLUDE #directory.path.Syntax -->](folderClass.md#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary --><p>**Returns a path relative to the archive**|
|[<!-- INCLUDE #directory.platformPath.Syntax -->](folderClass.md#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.platformPath.Summary -->|

