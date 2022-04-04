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
| Versión | Modificaciones                                                                    |
| ------- | --------------------------------------------------------------------------------- |
| v19 R3  | Adición de las propiedades `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| v18     | Añadidos                                                                          |
</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Parámetros      | Tipo      |    | Descripción                                          |
| --------------- | --------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D.File   | -> | Objeto archivo o carpeta a comprimir                 |
| folderToZip     | 4D.Folder | -> | Objeto archivo o carpeta a comprimir                 |
| zipStructure    | Objeto    | -> | Objeto archivo o carpeta a comprimir                 |
| destinationFile | 4D.File   | -> | Archivo de destino del archivo                       |
| options         | Integer   | -> | Opción *folderToZip*: `ZIP Without enclosing folder` |
| Resultado       | Objeto    | <- | Objeto de estado                                     |
<!-- END REF -->


#### Descripción

El comando `ZIP Create archive` <!-- REF #_command_.ZIP Create archive.Summary -->crea un objeto archivo ZIP comprimido y devuelve el estado de la operación<!-- END REF -->.

Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer parámetro:

- *fileToZip*: You simply pass a `4D.File` to compress.

- *folderToZip*: You pass a `4D.Folder` to compress. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: You pass an object describing the ZIP archive object. The following properties are available to define the structure:

| Propiedad    | Tipo        | Descripción                                                                                                                                                                                                                                                                                              |
| ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression  | Texto       | <p><li>`ZIP Compression standard`: Reducir la compresión (por defecto)</li></p><p><li>`ZIP Compression LZMA`: compresión LZMA</li></p><p><li>`ZIP Compression XZ`: compresión XZ</li></p><p><li>`ZIP Compression none`: sin compresión</li></p>                                                                                                                                                                                                     |
| level        | Integer     | Nivel de compresión. Valores posibles: 1 a 10. A lower value will produce a larger file, while a higher value will produce a smaller file. Compression level has however an impact on performance. Default values if omitted: <p><li>`ZIP Compression standard`: 6</li></p><p><li>`ZIP Compression LZMA`: 4</li></p><p><li>`ZIP Compression XZ`: 4</li></p> |
| encryption   | Texto       | La encriptación a utilizar si se define una contraseña:<p><li>`ZIP Encryption AES128`: encriptación AES con una llave de 128 bits.</li></p><p><li>`ZIP Encryption AES192`: encriptación AES con una llave de 192 bits.</li></p><p><li>`ZIP Encryption AES256`: encriptación AES con una llave de 256 bits (por defecto si se define la contraseña).</li></p><p><li>`ZIP Encryption none`: los datos no están encriptados (por defecto si no se define una contraseña)</li></p>                                                                                                                                            |
| contraseña   | Texto       | Una contraseña a utilizar si se requiere encriptación.                                                                                                                                                                                                                                                   |
| Histórico    | Collection  | <p><li>una colección de objetos `4D.File` o `4D.Folder` o</li></p><p><li>una colección de objetos con las siguientes propiedades:</li></p><table><tr><td>Propiedad</td><td>Tipo</td><td>Descripción</td></tr><tr><td>source</td><td>4D.File o 4D.Folder<td>File o Folder</td></tr><tr><td>destination</td><td>Texto</td><td>(opcional) - Especifica una ruta de archivo relativa para cambiar la organización del contenido del archivo</td></tr><tr><td>option</td><td>number</td><td>(opcional) - `ZIP Ignore invisible files` o 0 para comprimir todo el archivo</td></tr></table>                                                                                                                                                                                                                           |
| retrollamada | 4D.Function | Una fórmula de retrollamada que recibirá la progresión de la compresión (0 - 100) en $1.                                                                                                                                                                                                                 |

En el parámetro *destinationFile*, pase un objeto `4D.File` describiendo el archivo ZIP a crear (nombre, ubicación, etc.). Se aconseja utilizar la extensión ".zip" si quiere que el archivo ZIP sea procesado automáticamente por cualquier software.

Una vez creado un archivo, puede utilizar el comando [ZIP Read archive](#zip-read-archive) para acceder a él.

**Objeto de estado**

El objeto status devuelto contiene las siguientes propiedades:

| Propiedad  | Tipo     | Descripción                                                                                                                              |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| statusText | Texto    | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption |
| status     | Integer  | Código de estado                                                                                                                         |
| success    | Booleano | True if archive created successfully, else false                                                                                         |


#### Ejemplo 1

Para comprimir un `4D.File`:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```


#### Ejemplo 2

Para comprimir un `4D.Folder` sin la carpeta misma:

```4D
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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18     | Añadidos       |
</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| Parámetros | Tipo          |    | Descripción                           |
| ---------- | ------------- |:--:| ------------------------------------- |
| zIPFile    | 4D.File       | -> | Archivos Zip                          |
| contraseña | Texto         | -> | Contraseña del archivo ZIP, si la hay |
| Resultado  | 4D.ZipArchive | <- | Objeto archivo                        |
<!-- END REF -->


#### Descripción

El comando `ZIP Read archive` <!-- REF #_command_.ZIP Read archive.Summary -->recupera el contenido del *zipFile* y lo devuelve como un objeto `4D.ZipArchive`<!-- END REF -->.

> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pase un objeto `4D.File` haciendo referencia al archivo ZIP comprimido en el parámetro *zipFile*. El archivo de destino se abrirá hasta que el `ZIP Read archive` haya terminado de ejecutarse y todos los contenidos/referencias hayan sido extraídos/liberados, entonces se cerrará automáticamente.

Si el *archivo_zip* está protegido por contraseña, es necesario utilizar el parámetro opcional *password* para suministrar una contraseña. Si se requiere una contraseña pero no se pasa al intentar leer el contenido del archivo, se genera un error.


**Objeto archivo**

El objeto `4D.ZipArchive` revuelto contiene una sola propiedad, [`root`](#root), cuyo valor es un objeto.`4D.ZipFolder`. Esta carpeta describe todo el contenido del archivo ZIP.



#### Ejemplo

To retrieve and view the contents of a ZIP file object:

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
  //extraer un archivo
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extraer todos los archivos
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```



## .root

<!-- REF #ZipArchiveClass.root.Syntax -->
**.root** : 4D.ZipFolder<!-- END REF -->


#### Descripción

La propiedad `.root` contiene <!-- REF #ZipArchiveClass.root.Summary -->una carpeta virtual que permite acceder al contenido del archivo ZIP<!-- END REF -->.

La carpeta `root` y su contenido pueden ser manipulados con las funciones y propiedades [ZipFile](ZipFileClass.md) y [ZipFolder](ZipFolderClass.md).

Esta propiedad es **de sólo lectura**.


<style> h2 { background: #d9ebff;}</style>
