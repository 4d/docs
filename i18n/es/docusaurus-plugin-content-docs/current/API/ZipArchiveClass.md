---
id: ZipArchiveClass
title: ZIPArchive
---

A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. Estos archivos se crean con una extensión ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a través de medios que pueden tener limitaciones de tamaño (por ejemplo, el correo electrónico o la red).

- Cree un archivo ZIP 4D con el comando [ZIP Create archive](#zip-create-archive).
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.

### Ejemplo

Para recuperar y ver el contenido de un objeto ZIP file:

```4d
var $path; $archive : 4D.File
var $zipFile : 4D.ZipFile
var $zipFolder : 4D.ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // guardar la carpeta principal del zip
$zipFile:=$zipFolder.files()[0] //leer la primera carpeta comprimida

If($zipFile.extension=".txt")
 $txt:=$zipFile.getText()
End if
```

### Resumen

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<br/><!-- INCLUDE #ZipArchiveClass.root.Summary --> |

## ZIP Create archive

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                    |
| ----------- | --------------------------------------------------------------------------------- |
| 19 R3       | Adición de las propiedades `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| 18          | Añadidos                                                                          |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| Parámetros      | Tipo                      |     | Descripción                                                          |
| --------------- | ------------------------- | :-: | -------------------------------------------------------------------- |
| fileToZip       | 4D.File   |  -> | Objeto archivo o carpeta a comprimir                                 |
| folderToZip     | 4D.Folder |  -> | Objeto archivo o carpeta a comprimir                                 |
| zipStructure    | Object                    |  -> | Objeto archivo o carpeta a comprimir                                 |
| destinationFile | 4D.File   |  -> | Archivo de destino del archivo                                       |
| options         | Integer                   |  -> | Opción *folderToZip*: `ZIP Without enclosing folder` |
| Result          | Object                    |  <- | Objeto estado                                                        |

<!-- END REF -->

#### Descripción

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer parámetro:

- *fileToZip*: pase simplemente un `4D.File` a comprimir.

- *folderToZip*: pase un `4D.Folder` para comprimir. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: pase un objeto que describa el objeto ZIP archivo. Las siguientes propiedades están disponibles para definir la estructura:

| Propiedad    | Tipo                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression  | Integer                     | <li>`ZIP Compression standard`: Deflate compression (default)</li><li>`ZIP Compression LZMA`: LZMA compression</li><li>`ZIP Compression XZ`: XZ compression</li><li>`ZIP Compression none`: No compression</li>                                                                                                                                                                                                                                                                                                                                                  |
| level        | Integer                     | Nivel de compresión. Valores posibles: 1 a 10. Un valor más bajo producirá un archivo más grande, mientras que un valor más alto producirá un archivo más pequeño. Sin embargo, el nivel de compresión influye en el rendimiento. Default values if omitted: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                                            |
| encryption   | Integer                     | The encryption to use if a password is set:<li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li>                     |
| contraseña   | Text                        | Una contraseña a utilizar si se requiere encriptación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Histórico    | Collection                  | <li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder</td><td>File or Folder</td></tr><tr><td>destination</td><td>Text</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table> |
| retrollamada | 4D.Function | Una fórmula de retrollamada que recibirá la progresión de la compresión (0 - 100) en $1.                                                                                                                                                                                                                                                                                                                                                                                                                                      |

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). Se aconseja utilizar la extensión ".zip" si quiere que el archivo ZIP sea procesado automáticamente por cualquier software.

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Status object**

El objeto status devuelto contiene las siguientes propiedades:

| Propiedad  | Tipo    | Descripción                                                                                                                                                              |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusText | Text    | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li> |
| status     | Integer | Código de estado                                                                                                                                                         |
| success    | Boolean | True si el archivo se ha creado con éxito, si no, false                                                                                                                  |

#### Ejemplo 1

Para comprimir un archivo `4D.File`:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### Ejemplo 2

Para comprimir una carpeta `4D.Folder` sin la carpeta en sí:

```4d
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### Ejemplo 3

Para comprimir una estructura de archivo ZIP con una contraseña y una barra de progreso:

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

#### Ejemplo 4

Quiere pasar una colección de carpetas y archivos para comprimir al objeto *zipStructure*:

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

#### Ejemplo 5

Desea utilizar un algoritmo de compresión alternativo con un alto nivel de compresión:

```4d
var $destination : 4D.File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 //por defecto es 4

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

## ZIP Read archive

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18          | Añadidos       |

</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| Parámetros | Tipo                          |     | Descripción                           |
| ---------- | ----------------------------- | :-: | ------------------------------------- |
| zIPFile    | 4D.File       |  -> | Archivos Zip                          |
| contraseña | Text                          |  -> | Contraseña del archivo ZIP, si la hay |
| Result     | 4D.ZipArchive |  <- | Objeto archivo                        |

<!-- END REF -->

#### Descripción

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> Este comando no descomprime el archivo ZIP, sólo ofrece una vista de su contenido. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. Si se requiere una contraseña pero no se pasa al intentar leer el contenido del archivo, se genera un error.

**Objeto archivo**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. Esta carpeta describe todo el contenido del archivo ZIP.

#### Ejemplo

Para recuperar y ver el contenido de un objeto ZIP file:

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

Para recuperar la lista de los archivos y carpetas del archivo:

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

Para leer el contenido de un archivo sin extraerlo de la carpeta root:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

Para extraer desde la carpeta root:

```4d
  //extract a file
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extract all files
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Descripción

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

Esta propiedad es de **solo lectura**.
