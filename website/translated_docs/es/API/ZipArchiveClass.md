---
id: ZipArchiveClass
title: ZIPArchive
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](#zip-create-archive) command.
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.


### Ejemplo

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

### Resumen

|                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|


## ZIP Create archive

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Parámetros      | Tipo      |    | Descripción                                          |
| --------------- | --------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D.File   | -> | File or Folder object to compress                    |
| folderToZip     | 4D.Folder | -> | File or Folder object to compress                    |
| zipStructure    | Objeto    | -> | File or Folder object to compress                    |
| destinationFile | 4D.File   | -> | Destination file for the archive                     |
| options         | Integer   | -> | *folderToZip* option: `ZIP Without enclosing folder` |
| Resultado       | Objeto    | <- | Status object                                        |
<!-- END REF -->


#### Descripción

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:

- *fileToZip*: You simply pass a `4D.File` to compress.

- *folderToZip*: You pass a `4D.Folder` to compress. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: You pass an object describing the ZIP archive object. The following properties are available to define the structure:<li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table>
  <tr>
    <td>
      Propiedad
    </td>
    
    <td>
      Tipo
    </td>
    
    <td>
      Descripción
    </td>
  </tr>
  
  <tr>
    <td>
      source
    </td>
    
    <td>
      4D.File o 4D.Folder
      
      <td>
        File o Folder
      </td></tr>
      
      <tr>
        <td>
          destination
        </td>
        
        <td>
          Texto
        </td>
        
        <td>
          (optional) - Specify a relative filepath to change the organization of the contents of the archive
        </td>
      </tr>
      
      <tr>
        <td>
          option
        </td>
        
        <td>
          number
        </td>
        
        <td>
          (optional) - `ZIP Ignore invisible files` or 0 to compress all of the file
        </td>
      </tr></table></html>
    </td>
  </tr>
  
  <tr>
    <td>
      retrollamada
    </td>
    
    <td>
      4D.Function
    </td>
    
    <td>
      A callback formula that will receive the compression progress (0 - 100) in $1.
    </td>
  </tr></tbody> 
</table>

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software.

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Status object**

The returned status object contains the following properties:

| Propiedad  | Tipo     | Descripción                                                                                                                              |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| statusText | Texto    | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption |
| status     | Integer  | Código de estado                                                                                                                         |
| success    | Booleano | True if archive created successfully, else false                                                                                         |





#### Ejemplo 1

To compress a `4D.File`:



```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```





#### Ejemplo 2

To compress a `4D.Folder` without the folder itself:



```4D
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```




#### Ejemplo 3

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

 progID:=Progress New //utilizamos el componente 4D Progress

 $status:=ZIP Create archive($zip;$destination)

 Progress QUIT(progID)
```


`myFormulaCompressingMethod`:



```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```





#### Ejemplo 4

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







## ZIP Read archive

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| Parámetros | Tipo          |    | Descripción                 |
| ---------- | ------------- |:--:| --------------------------- |
| zIPFile    | 4D.File       | -> | Archivos Zip                |
| contraseña | Texto         | -> | ZIP archive password if any |
| Resultado  | 4D.ZipArchive | <- | Archive object              |
<!-- END REF -->


#### Descripción

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.



> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.

**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. This folder describes the whole contents of the ZIP archive.





#### Ejemplo

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


#### Descripción

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

Esta propiedad es **de sólo lectura**.


<style> h2 { background: #d9ebff;}</style>
