---
id: paths
title: Rutas de acceso
---

Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gestión de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

Además, los objetos archivo y carpeta soportan los `fileSystems`, que ofrecen una ruta contextual a las carpetas principales de la aplicación.


## Rutas de los filesystem

4D acepta varios `filesystem` que designan las carpetas 4D específicas con una ubicación variable en macOS y Windows. Las rutas de los filesystem son útiles por dos razones principales:

- Independencia: puede trasladar su solución de un lugar a otro independientemente del sistema operativo, sin tener que preocuparse por las rutas,
- Seguridad: ningún código puede acceder a los elementos situados por encima de la raíz del sistema de los file system en el disco (sandboxing).

Se soportan los siguientes nombres de rutas de filesystem:

| filesystem   | Designa                                                  |
| ------------ | -------------------------------------------------------- |
| "/DATA"      | Carpeta de datos actual                                  |
| "/LOGS"      | Carpeta Logs                                             |
| "/PACKAGE"   | Carpeta de la base de datos (con o sin extensión 4dbase) |
| "/PROJECT"   | Carpeta Project                                          |
| "/RESOURCES" | Carpeta de recursos de la base actual                    |
| "/SOURCES"   | Carpeta de recursos del proyecto                         |

## Sintaxis POSIX

La sintaxis POSIX es compatible con todas las plataformas. **Se recomienda la sintaxis POSIX** ya que es la más flexible. Se utiliza por defecto (devuelto por las propiedades [file.path](../API/FileClass.md#path) y [folder.path](../API/FolderClass.md#path)).

Con esta sintaxis:

- las carpetas están separadas por "/"
- los nombres de ruta absolutos empiezan por "/"
- para subir una carpeta en una ruta relativa, utilice "../" delante del nombre de la ruta (por seguridad, no puede subir en el sistema de archivos).

En la sintaxis POSIX, generalmente se utilizará los nombres de rutas `filesystem` con los comandos [`File`](../API/FileClass.md#file) y [`Folder`](../API/FolderClass.md#folder), por ejemplo:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```


## Sintaxis específica de la plataforma

La sintaxis específica de la plataforma depende del sistema operativo en el que se ejecute el comando. Tenga en cuenta que al crear un objeto archivo o carpeta con esta sintaxis, debe declararlo utilizando la constante `fk platform path` como parámetro.

### Windows

Se soportan los siguientes modelos:

- folder separators are "\"
- the text contains ":" and "\" as the second and third character,
- the text starts with "\\".

Ejemplos con [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Entering Windows pathnames and escape sequences

The 4D [code editor](../code-editor/write-class-method.md) allows the use of escape sequences. An escape sequence is a set of characters that are used to replace a "special" character. The sequence begins with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

The `\` character is also used as the separator in pathnames in Windows. In general, 4D will correctly interpret Windows pathnames that are entered in the code editor by replacing single backslashes `\` with double backslashes ``\\`. For example,``C:\Folder`will become`C:\\Folder`.

However, if you write `C:\MyDocuments\New`, 4D will display `C:\\MyDocuments\New`. In this case, the second `\` is incorrectly interpreted as `\N` (an existing escape sequence). You must therefore enter a double `\\` when you want to insert a backslash before a character that is used in one of the escape sequences recognized by 4D.

The following escape sequences are recognized by 4D:

| Secuencias de escape         | Carácter reemplazado       |
| ---------------------------- | -------------------------- |
| `\n`                        | LF (Nueva línea)           |
| `\t`                        | HT (Tabulación horizontal) |
| `\r`                        | CR (Retorno carro)         |
| ``\\`|``&#96; (Backslash) |                            |
| `\"`                        | `"` (Comillas)             |

### macOS

The following patterns are supported (HFS+ syntax):

- folder separators are ":"
- the path must not start with a ":"

Ejemplos con [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume must be called Monday
```

## Absolute and relative pathnames

### Constructores `File` y `Folder`

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Relative pathnames are not supported and will return errors. For example, the following code is not allowed:

```4d
    //ERROR
$ko:=Folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). Por ejemplo, puede escribir:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //folder created at the structure level
$okFile:=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. Por ejemplo:

```4d
  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Absolute pathnames are not supported and will return errors.


## Ejemplos

The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")

$f2:=Folder("/DATA/archive/jan2019").file("total.txt")

$f3:=Folder("/DATA/archive/jan2019")

$f4:=File("/DATA/info.txt")

$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)

$f6:=File(fk backup log file)
```