---
id: zipClass
title: ZIP Archive
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




## Zip File object

The following properties and functions from the [File](fileClass.md) class are available to 4D ZIP file objects:

|Available [File](fileClass.md) APIs for ZIP files|Comment |
|---|---|
|[**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File](fileClass.md#copyto)||
|[**.creationDate** : Date](fileClass.md#creationdate)||
|[**.creationTime** : Time](fileClass.md#creationtime)||
|[**.exists** : Boolean](fileClass.md#exists)||
|[**.extension** : Text](fileClass.md#extension)||
|[**.fullName** : Text](fileClass.md#fullname)||
|[**.getContent( )** : BLOB](fileClass.md#getcontent)||
|[**.getIcon**( { *size* : Integer } ) : picture](fileClass.md#geticon)||
|[**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text](fileClass.md#gettext)||
|[**.hidden** : Boolean](fileClass.md#hidden)||
|[**.isAlias** : Boolean](fileClass.md#isalias)||
|[**.isFile** : Boolean](fileClass.md#isfile)||
|[**.isFolder** : Boolean](fileClass.md#ifFolder)||
|[**.isWritable** : Boolean](fileClass.md#iswritable)|Always false with ZIP archive|
|[**.modificationDate** : Date](fileClass.md#modificationdate)||
|[**.modificationTime** : Time](fileClass.md#modificationtime)||
|[**.name** : Text](fileClass.md#name)||
|[**.original** : 4D.File<br>**.original** : 4D.Folder](fileClass.md#original)||
|[**.parent** : 4D.Folder](fileClass.md#parent)||
|[**.path** : Text](fileClass.md#path)|Returns a path relative to the archive|
|[**.platformPath** : Text](fileClass.md#platformpath)||



## Zip Folder object

The following properties and functions from the [Folder](folderClass.md) class are available to 4D ZIP folder objects:


|Available [Folder](folderClass.md) APIs for ZIP folder|Comment |
|---|---|
|[**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](folderClass.md#copyto)||
|[**.creationDate** : Date](folderClass.md#creationdate)|Date may be different for the `root` folder from a folder within the archive|
|[**.creationTime** : Time](folderClass.md#creationtime)|Time may be different for the `root` folder from a folder within the archive|
|[**.exists** : Boolean](folderClass.md#exists)||
|[**.extension** : Text](folderClass.md#extension)||
|[**.file**( *path* : Text ) : 4D.File](folderClass.md#file)||
|[**.files**( { *options* : Integer } ) : Collection](folderClass.md#files)||
|[**.folder**( *path* : Text ) : 4D.Folder](folderClass.md#folder)||
|[**.folders**( { *options* : Integer } ) : Collection](folderClass.md#folders)||
|[**.fullName** : Text](folderClass.md#fullname)||
|[**.getIcon**( { *size* : Integer } ) : Picture](folderClass.md#geticon)||
|[**.hidden** : Boolean](folderClass.md#hidden)||
|[**.isAlias** : Boolean](folderClass.md#isalias)||
|[**.isFile** : Boolean](folderClass.md#isfile)||
|[**.isFolder** : Boolean](folderClass.md#isfolder)||
|[**.isPackage** : Boolean](folderClass.md#ispackage)||
|[**.modificationDate** : Date](folderClass.md#modificationdate)|Date may be different for the `root` folder from a folder within the archive|
|[**.modificationTime** : Time](folderClass.md#modificationtime)|Time may be different for the `root` folder from a folder within the archive|
|[**.name** : Text](folderClass.md#name)||
|[**.original** : 4D.Folder](folderClass.md#original)||
|[**.parent** : 4D.Folder](folderClass.md#parent)|The archive's virtual `root` folder has no parent. However, the folders within the archive may have a parent other than the root.|
|[**.path** : Text](folderClass.md#path)|Returns a path relative to the archive|
|[**.platformPath** : Text](folderClass.md#platformpath)||