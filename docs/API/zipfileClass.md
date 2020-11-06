---
id: zipClass
title: ZIP Archive
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](#zip-create-archive) command.
- 4D ZIP file and folder instances are available through the `root` property (`ZIP Folder`) of the object returned by [ZIP Read archive](#zip-read-archive) command. 


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

---
<!-- REF zipArchive.ZIP Create archive.Desc -->
## ZIP Create archive

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF zipArchive.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF zipArchive.ZIP Create archive.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|fileToZip|4D.File|->|File or Folder object to compress|
|folderToZip|4D.Folder|->|File or Folder object to compress|
|zipStructure|Object|->|File or Folder object to compress|
|destinationFile|4D.File|->|Destination file for the archive|
|options|Integer|->|*folderToZip* option: `ZIP Without enclosing folder`|
|Result|Object|<-|Status object|
<!-- END REF -->


#### Description

The `ZIP Create archive` command <!-- REF zipArchive.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:

- *fileToZip*: You simply pass a `4D.File` to compress. 

- *folderToZip*: You pass a `4D.Folder` to compress. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: You pass an object describing the ZIP archive object. The following properties are available to define the structure:

|Property|Type|Description|
|---|---|---|
|compression|Text|<li>`ZIP Compression none`: No compression</li><li>`ZIP Compression standard`: Standard compression (default)</li>|
|encryption|Text|The encryption to use if a password is set:<li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li>|
|password|Text|A password to use if encryption is required.|
|files|Collection|<li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><html><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder<td>File or Folder</td></tr><tr><td>destination</td><td>Text</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table></html>|
|callback|4D.Function|A callback formula that will receive the compression progress (0 - 100) in $1.|

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software. 

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Status object**

The returned status object contains the following properties:

|Property|Type|Description|
|---|---|---|
|statusText|Text|Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption
|status|Integer|Status code|
|success|Boolean|True if archive created successfully, else false|


#### Example 1

To compress a `4D.File`:

```4d
 var $file;$destination : 4D.File
 var $status : Object
 
 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")
 
 $status:=ZIP Create archive($file;$destination)
```


#### Example 2

To compress a `4D.Folder` without the folder itself:

```4D
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")
 
 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### Example 3

To compress a ZIP archive structure with a password and progress bar:

```4d
 var $destination : 4D.File
 var $zip;$status : Object
 var progID : Integer
 
 $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 
 $zip:=New object
 $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()
 $zip.password:="password"
 $zip.callback:=Formula(myFormulaCompressingMethod($1))
 
 progID:=Progress New //we use the 4D Progress component
 
 $status:=ZIP Create archive($zip;$destination)
 
 Progress QUIT(progID)
```

`myFormulaCompressingMethod`:

```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```


#### Example 4

You want to pass a collection of folders and files to compress to the *zipStructure* object:

```4d
 var $destination : 4D.File
 var $zip;$err : Object
 $zip:=New object
 $zip.files:=New collection
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))
 
 $destination:=Folder(fk desktop folder).file("file.zip")
 $err:=ZIP Create archive($zip;$destination)
```
 


---
<!-- REF zipArchive.ZIP Read archive.Desc -->
## ZIP Read archive

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF zipArchive.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF zipArchive.ZIP Read archive.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|zipFile|4D.File|->|Zip archive file|
|password|Text|->|ZIP archive password if any|
|Result|4D.ZipArchive|<-|Archive object|
<!-- END REF -->


#### Description

The `ZIP Read archive` command <!-- REF zipArchive.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](document.md#copyto) or [folder.copyTo()](directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically. 

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.


**Archive object**

The returned `4D.ZipArchive` object contains a single `root` property whose value is a `4D.Folder` object. This folder describes the whole contents of the ZIP archive:

|Property|Type|Description|
|---|---|---|
|`root`|`4D.Folder`|A virtual folder containing the contents of the ZIP archive.

The `root` folder and its contents can be manipulated with the `File` and `Folder` methods and properties.


#### Example

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

|Available [File](fileClass.md) APIs for ZIP files|Comment |
|---|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](fileClass.md#copyto)||
|[<!-- INCLUDE #document.creationDate.Syntax -->](fileClass.md#creationdate)||
|[<!-- INCLUDE #document.creationTime.Syntax -->](fileClass.md#creationtime)||
|[<!-- INCLUDE #document.exists.Syntax -->](fileClass.md#exists)||
|[<!-- INCLUDE #document.extension.Syntax -->](fileClass.md#extension)||
|[<!-- INCLUDE #document.fullName.Syntax -->](fileClass.md#fullname)||
|[<!-- INCLUDE #document.getContent().Syntax -->](fileClass.md#getcontent)||
|[<!-- INCLUDE #document.getIcon().Syntax -->](fileClass.md#geticon)||
|[<!-- INCLUDE #document.getText().Syntax -->](fileClass.md#gettext)||
|[<!-- INCLUDE #document.hidden.Syntax -->](fileClass.md#hidden)||
|[<!-- INCLUDE #document.isAlias.Syntax -->](fileClass.md#isalias)||
|[<!-- INCLUDE #document.isFile.Syntax -->](fileClass.md#isfile)||
|[<!-- INCLUDE #document.isFolder.Syntax -->](fileClass.md#ifFolder)||
|[<!-- INCLUDE #document.isWritable.Syntax -->](fileClass.md#iswritable)|Always false with ZIP archive|
|[<!-- INCLUDE #document.modificationDate.Syntax -->](fileClass.md#modificationdate)||
|[<!-- INCLUDE #document.modificationTime.Syntax -->](fileClass.md#modificationtime)||
|[<!-- INCLUDE #document.name.Syntax -->](fileClass.md#name)||
|[<!-- INCLUDE #document.original.Syntax -->](fileClass.md#original)||
|[<!-- INCLUDE #document.parent.Syntax -->](fileClass.md#parent)||
|[<!-- INCLUDE #document.path.Syntax -->](fileClass.md#path)|Returns a path relative to the archive|
|[<!-- INCLUDE #document.platformPath.Syntax -->](fileClass.md#platformpath)||



## Zip Folder object

The following properties and functions from the [Folder](folderClass.md) class are available to 4D ZIP folder objects:


|Available [Folder](folderClass.md) APIs for ZIP folder|Comment |
|---|---|
|[<!-- INCLUDE #directory.copyTo().Syntax -->](folderClass.md#copyto)||
|[<!-- INCLUDE #directory.creationDate.Syntax -->](folderClass.md#creationdate)|Date may be different for the `root` folder from a folder within the archive|
|[<!-- INCLUDE #directory.creationTime.Syntax -->](folderClass.md#creationtime)|Time may be different for the `root` folder from a folder within the archive|
|[<!-- INCLUDE #directory.exists.Syntax -->](folderClass.md#exists)||
|[<!-- INCLUDE #directory.extension.Syntax -->](folderClass.md#extension)||
|[<!-- INCLUDE #directory.file().Syntax -->](folderClass.md#file)||
|[<!-- INCLUDE #directory.files().Syntax -->](folderClass.md#files)||
|[<!-- INCLUDE #directory.folder().Syntax -->](folderClass.md#folder)||
|[<!-- INCLUDE #directory.folders().Syntax -->](folderClass.md#folders)||
|[<!-- INCLUDE #directory.fullName.Syntax -->](folderClass.md#fullname)||
|[<!-- INCLUDE #directory.getIcon().Syntax -->](folderClass.md#geticon)||
|[<!-- INCLUDE #directory.hidden.Syntax -->](folderClass.md#hidden)||
|[<!-- INCLUDE #directory.isAlias.Syntax -->](folderClass.md#isalias)||
|[<!-- INCLUDE #directory.isFile.Syntax -->](folderClass.md#isfile)||
|[<!-- INCLUDE #directory.isFolder.Syntax -->](folderClass.md#isfolder)||
|[<!-- INCLUDE #directory.isPackage.Syntax -->](folderClass.md#ispackage)||
|[<!-- INCLUDE #directory.modificationDate.Syntax -->](folderClass.md#modificationdate)|Date may be different for the `root` folder from a folder within the archive|
|[<!-- INCLUDE #directory.modificationTime.Syntax -->](folderClass.md#modificationtime)|Time may be different for the `root` folder from a folder within the archive|
|[<!-- INCLUDE #directory.name.Syntax -->](folderClass.md#name)||
|[<!-- INCLUDE #directory.original.Syntax -->](folderClass.md#original)||
|[<!-- INCLUDE #directory.parent.Syntax -->](folderClass.md#parent)|The archive's virtual `root` folder has no parent. However, the folders within the archive may have a parent other than the root.|
|[<!-- INCLUDE #directory.path.Syntax -->](folderClass.md#path)|Returns a path relative to the archive|
|[<!-- INCLUDE #directory.platformPath.Syntax -->](folderClass.md#platformpath)||