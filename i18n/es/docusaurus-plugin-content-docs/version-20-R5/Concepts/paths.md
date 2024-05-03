---
id: paths
title: Rutas de acceso
---

Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gestión de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

In addition, file and folder objects support `fileSystems`, which provide contextual path to main application folders.

## Rutas de los filesystem

4D accepts several `filesystem` pathnames that designate specific 4D folders with variable location on macOS and Windows. Las rutas de los filesystem son útiles por dos razones principales:

- Independencia: puede trasladar su solución de un lugar a otro independientemente del sistema operativo, sin tener que preocuparse por las rutas,
- Seguridad: ningún código puede acceder a los elementos situados por encima de la raíz del sistema de los file system en el disco (sandboxing).

Se soportan los siguientes nombres de rutas de filesystem:

| filesystem   | Designa                                                                   |
| ------------ | ------------------------------------------------------------------------- |
| "/DATA"      | Carpeta de datos actual                                                   |
| "/LOGS"      | Carpeta Logs                                                              |
| "/PACKAGE"   | Carpeta raíz del proyecto (con o sin extensión 4dbase) |
| "/PROJECT"   | Carpeta Project                                                           |
| "/RESOURCES" | Carpeta de recursos actual del proyecto                                   |
| "/SOURCES"   | Carpeta de fuentes del proyecto actual                                    |

## Sintaxis POSIX

La sintaxis POSIX es compatible con todas las plataformas. **POSIX syntax is recommended** since it is the most flexible. It is used by default (returned by [file.path](../API/FileClass.md#path) and [folder.path](../API/FolderClass.md#path) properties).

Con esta sintaxis:

- las carpetas están separadas por "/"
- los nombres de ruta absolutos empiezan por "/"
- para subir una carpeta en una ruta relativa, utilice "../" delante del nombre de la ruta (por seguridad, no puede subir en el sistema de archivos).

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```

## Sintaxis específica de la plataforma

La sintaxis específica de la plataforma depende del sistema operativo en el que se ejecute el comando. Note that when creating a file or folder object with this syntax, you must declare it using the `fk platform path` constant as parameter.

### Windows

Se soportan los siguientes modelos:

- los separadores de carpetas son "\"
- el texto contiene ":" y "\" como segundo y tercer caracter,
- el texto comienza con "\\".

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Rutas de acceso Windows y secuencias de escape

The 4D language allows the use of [escape sequences](quick-tour.md#escape-sequences). Escape sequences begin with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

Since the `\` character is also used as the separator in pathnames in Windows, you need to enter a double `\\` in windows pathnames.

### macOS

Se soportan los siguientes modelos (sintaxis HFS+):

- los separadores de carpetas son ":"
- la ruta no debe comenzar con un ":"

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume debe llamarse Monday
```

## Rutas absolutas y relativas

### `File` and `Folder` constructors

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Las rutas relativas no están soportadas y devolverán errores. Por ejemplo, el siguiente código no es permitido:

```4d
	//ERROR
$ko:=Folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). Por ejemplo, puede escribir:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //carpeta creada a nivel de la estructura
$okFile:=File("/DATA/Prefs/tempo.txt").create() //archivo creado en la carpeta de datos
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. Por ejemplo:

```4d
  //para referenciar una carpeta "Picture" dentro de la carpeta de documentos del usuario
$userImages:=Folder(fk documents folder).folder("Pictures")
  //para crear una carpeta en el escritorio
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Las rutas absolutas no están soportadas y devolverán errores.

## Ejemplos

La flexibilidad de las funciones de archivos y de carpetas le ofrecen varias posibilidades para manipular los archivos y las carpetas, como en los siguientes ejemplos:

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")
 
$f2:=Folder("/DATA/archive/jan2019").file("total.txt")
 
$f3:=Folder("/DATA/archive/jan2019")
 
$f4:=File("/DATA/info.txt")
 
$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
 
$f6:=File(fk backup log file)
```
