---
id: zip-create-archive
title: ZIP Create archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| Parámetros      | Tipo                      |     | Descripción                                                          |
| --------------- | ------------------------- | :-: | -------------------------------------------------------------------- |
| fileToZip       | 4D.File   |  →  | Objeto archivo o carpeta a comprimir                                 |
| folderToZip     | 4D.Folder |  →  | Objeto archivo o carpeta a comprimir                                 |
| zipStructure    | Object                    |  →  | Objeto archivo o carpeta a comprimir                                 |
| destinationFile | 4D.File   |  →  | Archivo de destino del archivo                                       |
| options         | Integer                   |  →  | Opción *folderToZip*: `ZIP Without enclosing folder` |
| Result          | Object                    |  ←  | Objeto estado                                                        |

<!-- END REF -->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                    |
| ----------- | --------------------------------------------------------------------------------- |
| 19 R3       | Adición de las propiedades `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| 18          | Añadidos                                                                          |

</details>

#### Descripción

El comando `ZIP Create archive` <!-- REF #_command_.ZIP Create archive. Summary -->crea un objeto archivo ZIP comprimido y devuelve el estado de la operación<!-- END REF -->.

Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer parámetro:

- *fileToZip*: pase simplemente un `4D.File` a comprimir.

- *folderToZip*: pase un `4D.Folder` para comprimir. En este caso, el parámetro *options* permite comprimir sólo el contenido de la carpeta (es decir, excluir la carpeta padre). Por defecto, `ZIP Create archive` comprimirá la carpeta y su contenido, de modo que la operación de descompresión volverá a crear una carpeta. Si desea que la operación de descompresión restaure sólo el contenido de la carpeta, pase la constante `ZIP Without enclosing folder` en el parámetro *options*.

- *zipStructure*: pase un objeto que describa el objeto ZIP archivo. Las siguientes propiedades están disponibles para definir la estructura:

| Propiedad    | Tipo                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression  | Integer                     | <li>`ZIP Compression standard`: Compresión Deflate (por defecto)</li><li>`ZIP Compression LZMA`: Compression LZMA</li><li>`ZIP Compresión XZ`: Compression XZ</li><li>`ZIP Compresión`: sin compresión</li>                                                                                                                                                                                                                                                                                                                                                                                                           |
| level        | Integer                     | Nivel de compresión. Valores posibles: 1 a 10. Un valor más bajo producirá un archivo más grande, mientras que un valor más alto producirá un archivo más pequeño. Sin embargo, el nivel de compresión influye en el rendimiento. Valores por defecto si se omite: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                                                                                           |
| encryption   | Integer                     | El cifrado a usar si se define una contraseña:<li>`ZIP Encryption AES128`: encriptación AES utilizando llave de 128 bits.</li><li>`ZIP Encryption AES192`: encriptación AES utilizando llave de 192 bits.</li><li>`ZIP Encryption AES256`: encriptación AES utilizando llave de 256 bits (por defecto si se define la contraseña).</li><li>`ZIP Encryption none`: los datos no están cifrados (por defecto si no se define una contraseña)</li> |
| contraseña   | Text                        | Una contraseña a utilizar si se requiere encriptación.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Histórico    | Collection                  | <li>una colección de objetos `4D.File` o `4D.Folder` o</li><li>una colección de objetos con las siguientes propiedades:</li><table><tr><td>Propiedad</td><td>Tipo</td><td>Descripción</td></tr><tr><td>source</td><td>4D.Archivo o 4D.Carpeta</td><td>Archivo o Carpeta</td></tr><tr><td>destino</td><td>Texto</td><td>(opcional) - Especifique una ruta de archivo relativa para cambiar la organización del contenido del archivo</td></tr><tr><td>option</td><td>number</td><td>(opcional) - `ZIP Ignore invisible files` o 0 para comprimir todo el archivo</td></tr></table>                                     |
| retrollamada | 4D.Function | Una fórmula de retrollamada que recibirá la progresión de la compresión (0 - 100) en $1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

En el parámetro *destinationFile*, pase un objeto `4D.File` que describa el archivo ZIP a crear (nombre, ubicación, etc.). Se aconseja utilizar la extensión ".zip" si quiere que el archivo ZIP sea procesado automáticamente por cualquier software.

Una vez creado un archivo, puede utilizar el comando [ZIP Read archive](#zip-read-archive) para acceder a él.

**Status object**

El objeto status devuelto contiene las siguientes propiedades:

| Propiedad  | Tipo    | Descripción                                                                                                                                                                    |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusText | Text    | Mensaje de error (si lo hay):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li> |
| status     | Integer | Código de estado                                                                                                                                                               |
| success    | Boolean | True si el archivo se ha creado con éxito, si no, false                                                                                                                        |

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

#### Ver también

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Read archive`](zip-read-archive.md)

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 1640                                                                |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
