---
id: ZipArchiveClass
title: ZIPArchive
---

Un archivo ZIP 4D es un objeto `File` o `Folder` que contiene uno o más archivos o carpetas, que se comprimen para ser más pequeños que su tamaño original. Estos archivos se crean con una extensión ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a través de medios que pueden tener limitaciones de tamaño (por ejemplo, el correo electrónico o la red).

- Puede crear un archivo ZIP 4D con el comando [`ZIP Create archive`](../commands/zip-create-archive.md).
- Las instancias 4D [`ZIPFile`](ZipFileClass.md) y [`ZIPFolder`](ZipFolderClass.md) están disponibles a través de la propiedad [`root`](#root) (`ZIPFolder`) del objeto devuelto por el comando [`ZIP Read archive`](../commands/zip-read-archive.md).

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

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Descripción

La propiedad `.root` contiene <!-- REF #ZipArchiveClass.root.Summary -->una carpeta virtual que permite acceder al contenido del archivo ZIP<!-- END REF -->.

La carpeta `root` y su contenido se pueden manipular con las funciones y propiedades [ZipFile](ZipFileClass.md) y [ZipFolder](ZipFolderClass.md).

Esta propiedad es de **solo lectura**.
