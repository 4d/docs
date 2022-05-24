---
id: ZipArchiveClass
title: ZIPArchive
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](#zip-create-archive) command.
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.


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

### Summary

|                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|


## ZIP Create archive

<details><summary>History</summary>
| Version | Changes                                                               |
| ------- | --------------------------------------------------------------------- |
| v19 R3  | Added `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` property |
| v18     | Added                                                                 |
</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Parameter       | Typ       |    | Beschreibung                                         |
| --------------- | --------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D.File   | -> | File or Folder object to compress                    |
| folderToZip     | 4D.Folder | -> | File or Folder object to compress                    |
| zipStructure    | Objekt    | -> | File or Folder object to compress                    |
| destinationFile | 4D.File   | -> | Destination file for the archive                     |
| options         | Ganzzahl  | -> | *folderToZip* option: `ZIP Without enclosing folder` |
| Ergebnis        | Objekt    | <- | Status object                                        |
<!-- END REF -->


#### Beschreibung

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:

- *fileToZip*: You simply pass a `4D.File` to compress.

- *folderToZip*: You pass a `4D.Folder` to compress. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: You pass an object describing the ZIP archive object. The following properties are available to define the structure:

| Property    | Typ         | Beschreibung                                                                                                                                                                                                                                                                                           |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| compression | Ganzzahl    | <p><li>`ZIP Compression standard`: Deflate compression (default)</li></p><p><li>`ZIP Compression LZMA`: LZMA compression</li></p><p><li>`ZIP Compression XZ`: XZ compression</li></p><p><li>`ZIP Compression none`: No compression</li></p>                                                                                                                                                                                                   |
| level       | Ganzzahl    | Compression level. Possible values: 1 to 10. A lower value will produce a larger file, while a higher value will produce a smaller file. Compression level has however an impact on performance. Default values if omitted: <p><li>`ZIP Compression standard`: 6</li></p><p><li>`ZIP Compression LZMA`: 4</li></p><p><li>`ZIP Compression XZ`: 4</li></p> |
| encryption  | Ganzzahl    | The encryption to use if a password is set:<p><li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li></p><p><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li></p><p><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li></p><p><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li></p>                                                                                                                                                      |
| password    | Text        | A password to use if encryption is required.                                                                                                                                                                                                                                                           |
| files       | Collection  | <p><li>a collection of `4D.File` or `4D.Folder` objects or</li></p><p><li>a collection of objects with the following properties:</li></p><table><tr><td>Property</td><td>Typ</td><td>Beschreibung</td></tr><tr><td>source</td><td>4D.File or 4D.Folder<td>File or Folder</td></tr><tr><td>destination</td><td>Text</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table>                                                                                                                                                                                                                         |
| callback    | 4D.Function | A callback formula that will receive the compression progress (0 - 100) in $1.                                                                                                                                                                                                                         |

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software.

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Status object**

The returned status object contains the following properties:

| Property   | Typ      | Beschreibung                                                                                                                             |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| statusText | Text     | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption |
| status     | Ganzzahl | Status code                                                                                                                              |
| success    | Boolean  | True if archive created successfully, else false                                                                                         |


#### Beispiel 1

To compress a `4D.File`:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```


#### Beispiel 2

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


#### Example 5

You want to use an alternative compression algorithm with a high compression level:

```4d
var $destination : 4D.File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 //default is 4

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

## ZIP Read archive

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18     | Added   |
</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| Parameter | Typ           |    | Beschreibung                |
| --------- | ------------- |:--:| --------------------------- |
| zipFile   | 4D.File       | -> | Zip archive file            |
| password  | Text          | -> | ZIP archive password if any |
| Ergebnis  | 4D.ZipArchive | <- | Archive object              |
<!-- END REF -->


#### Beschreibung

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.


**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. This folder describes the whole contents of the ZIP archive.



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



## .root

<!-- REF #ZipArchiveClass.root.Syntax -->
**.root** : 4D.ZipFolder<!-- END REF -->


#### Beschreibung

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

This property is **read-only**.


<style> h2 { background: #d9ebff;}</style>
