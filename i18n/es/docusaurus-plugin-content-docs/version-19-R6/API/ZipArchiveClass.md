---
id: ZipArchiveClass
title: ZIPArchive
---


Un archivo ZIP 4D es un objeto `File` o `Folder` que contiene uno o más archivos o carpetas, que se comprimen para ser más pequeños que su tamaño original. Estos archivos se crean con una extensión ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a través de medios que pueden tener limitaciones de tamaño (por ejemplo, el correo electrónico o la red).

- Cree un archivo ZIP 4D con el comando [ZIP Create archive](#zip-create-archive).
- Las instancias [`ZIPFile`](ZipFileClass.md) y [`ZIPFolder`](ZipFolderClass.md) de 4D están disponibles vía la propriedad [`root`](#root) (`ZIPFolder`) del objeto devuelto por el comando [ZIP Read archive](#zip-read-archive).

### Ejemplo

Para recuperar y ver el contenido de un objeto ZIP file:

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

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|

## ZIP Create archive

<details><summary>Histórico</summary>

| Versión | Modificaciones                                                                    |
| ------- | --------------------------------------------------------------------------------- |
| v19 R3  | Adición de las propiedades `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| v18     | Añadidos                                                                          |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->

**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Parámetros      | Type      |    | Descripción                                          |
| --------------- | --------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D.File   | -> | Objeto archivo o carpeta a comprimir                 |
| folderToZip     | 4D.Folder | -> | Objeto archivo o carpeta a comprimir                 |
| zipStructure    | Object    | -> | Objeto archivo o carpeta a comprimir                 |
| destinationFile | 4D.File   | -> | Archivo de destino del archivo                       |
| options         | Integer   | -> | Opción *folderToZip*: `ZIP Without enclosing folder` |
| Result          | Object    | <- | Objeto estado|<!-- END REF -->

|

#### Descripción

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer parámetro:

- *fileToZip*: simplemente pase un `4D.File` a comprimir.

- *folderToZip*: pase un `4D.Folder` a comprimir. En este caso, el parámetro *options* permite comprimir sólo el contenido de la carpeta (es decir, excluir la carpeta padre). Por defecto, `ZIP Create archive` comprimirá la carpeta y su contenido, de modo que la operación de descompresión volverá a crear una carpeta. Si desea que la operación de descompresión restaure sólo el contenido de la carpeta, pase la constante `ZIP Without enclosing folder` en el parámetro *options*.

- *zipStructure*: pase un objeto que describa el objeto ZIP archivo. Las siguientes propiedades están disponibles para definir la estructura:

| Propiedad    | Type        | Descripción                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression  | Integer     | <li>`ZIP Compression standard`: Reducir la compresión (por defecto)</li><li>`ZIP Compression LZMA`: compresión LZMA</li><li>`ZIP Compression XZ`: compresión XZ</li><li>`ZIP Compression none`: sin compresión</li>                                                                                                                                                                                                                                           |
| level        | Integer     | Nivel de compresión. Valores posibles: 1 a 10. Un valor más bajo producirá un archivo más grande, mientras que un valor más alto producirá un archivo más pequeño. Sin embargo, el nivel de compresión influye en el rendimiento. Valores por defecto si se omiten: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li> |
| encryption   | Integer     | La encriptación a utilizar si se define una contraseña:<li>`ZIP Encryption AES128`: encriptación AES con una llave de 128 bits.</li><li>`ZIP Encryption AES192`: encriptación AES con una llave de 192 bits.</li><li>`ZIP Encryption AES256`: encriptación AES con una llave de 256 bits (por defecto si se define la contraseña).</li><li>`ZIP Encryption none`: los datos no están encriptados (por defecto si no se define una contraseña)</li>                                                                                                                                                                                  |
| contraseña   | Text        | Una contraseña a utilizar si se requiere encriptación.                                                                                                                                                                                                                                                                                         |
| Histórico    | Collection  | <li>una colección de objetos `4D.File` o `4D.Folder` o</li><li>una colección de objetos con las siguientes propiedades:</li><table><tr><td>Propiedad</td><td>Type</td><td>Descripción</td></tr><tr><td>source</td><td>4D.File o 4D.Folder</td><td>File o Folder</td></tr><tr><td>destination</td><td>Text</td><td>(opcional) - Especifica una ruta de archivo relativa para cambiar la organización del contenido del archivo</td></tr><tr><td>option</td><td>number</td><td>(opcional) - `ZIP Ignore invisible files` o 0 para comprimir todo el archivo</td></tr></table>                                                                                                                                                                                                                                                                 |
| retrollamada | 4D.Function | Una fórmula de retrollamada que recibirá la progresión de la compresión (0 - 100) en $1.                                                                                                                                                                                                                                                       |

En el parámetro *destinationFile*, pase un objeto `4D.File` describiendo el archivo ZIP a crear (nombre, ubicación, etc.). Se aconseja utilizar la extensión ".zip" si quiere que el archivo ZIP sea procesado automáticamente por cualquier software.

Una vez creado un archivo, puede utilizar el comando [ZIP Read archive](#zip-read-archive) para acceder a él.

**Objeto estado**

El objeto status devuelto contiene las siguientes propiedades:

| Propiedad  | Type    | Descripción                                                                                                 |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| statusText | Text    | Mensaje de error (si lo hay):<li>No se puede abrir el archivo ZIP</li><li>No se puede crear un archivo ZIP</li><li>La contraseña es necesaria para la codificación</li> |
| status     | Integer | Código de estado                                                                                            |
| success    | Boolean | True si el archivo se ha creado con éxito, si no, false                                                     |

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
| Parámetros | Type          |    | Descripción                               |
| ---------- | ------------- |:--:| ----------------------------------------- |
| zIPFile    | 4D.File       | -> | Archivos Zip                              |
| contraseña | Text          | -> | Contraseña del archivo ZIP, si la hay     |
| Result     | 4D.ZipArchive | <- | Objeto archivo|<!-- END REF -->

|

#### Descripción

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> Este comando no descomprime el archivo ZIP, sólo ofrece una vista de su contenido. Para extraer el contenido de un archivo, es necesario utilizar métodos como [file.copyTo()](Document.md#copyto) o [folder.copyTo()](Directory.md#copyto).

Pase un objeto `4D.File` haciendo referencia al archivo ZIP comprimido en el parámetro *zipFile*. El archivo de destino se abrirá hasta que el `ZIP Read archive` haya terminado de ejecutarse y todos los contenidos/referencias hayan sido extraídos/liberados, entonces se cerrará automáticamente.

Si el *archivo_zip* está protegido por contraseña, es necesario utilizar el parámetro opcional *password* para suministrar una contraseña. Si se requiere una contraseña pero no se pasa al intentar leer el contenido del archivo, se genera un error.

**Objeto archivo**

El objeto `4D.ZipArchive` revuelto contiene una sola propiedad, [`root`](#root), cuyo valor es un objeto.`4D.ZipFolder`. Esta carpeta describe todo el contenido del archivo ZIP.

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
  //extraer un archivo
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extraer todos los archivos
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->

**.root** : 4D.ZipFolder<!-- END REF -->

#### Descripción

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

La carpeta `root` y su contenido pueden ser manipulados con las funciones y propiedades [ZipFile](ZipFileClass.md) y [ZipFolder](ZipFolderClass.md).

Esta propiedad es **de sólo lectura**.
