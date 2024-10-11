---
id: zip-read-archive
title: ZIP Read archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| Parámetros | Tipo                          |                                 | Descripción                           |
| ---------- | ----------------------------- | :-----------------------------: | ------------------------------------- |
| zIPFile    | 4D.File       | &amp;srarr; | Archivos Zip                          |
| contraseña | Text                          | &amp;srarr; | Contraseña del archivo ZIP, si la hay |
| Result     | 4D.ZipArchive |  &amp;larr; | Objeto archivo                        |

<!-- END REF -->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18          | Añadidos       |

</details>

#### Descripción

El comando `ZIP Read archive` <!-- REF #_command_.ZIP Read archive.Summary -->recupera el contenido de *zipFile* y lo devuelve como un objeto `4D.ZipArchive`<!-- END REF -->.

> Este comando no descomprime el archivo ZIP, sólo ofrece una vista de su contenido. To extract the contents of an archive, you need to use methods such as [file.copyTo()](../API/Document.md#copyto) or [folder.copyTo()](../API/Directory.md#copyto).

Pase un objeto `4D.File` que haga referencia al archivo ZIP comprimido en el parámetro *zipFile*. El archivo de destino se abrirá hasta que el `ZIP Read archive` haya terminado de ejecutarse y todos los contenidos/referencias hayan sido extraídos/liberados, entonces se cerrará automáticamente.

Si el *zipFile* está protegido por contraseña, es necesario utilizar el parámetro opcional *password* para suministrar una contraseña. Si se requiere una contraseña pero no se pasa al intentar leer el contenido del archivo, se genera un error.

**Objeto archivo**

The returned `4D.ZipArchive` object contains a single [`root`](../API/ZipArchiveClass.md#root) property whose value is a `4D.ZipFolder` object. Esta carpeta describe todo el contenido del archivo ZIP.

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

#### Ver también

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Create archive`](zip-create-archive.md)
