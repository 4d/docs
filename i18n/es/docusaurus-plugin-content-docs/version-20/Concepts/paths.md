---
id: paths
title: Rutas de acceso
---

Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gestión de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

Además, los objetos archivo y carpeta soportan los `fileSystems`, que ofrecen una ruta contextual a las carpetas principales de la aplicación.


4D acepta varios `filesystem` que designan las carpetas 4D específicas con una ubicación variable en macOS y Windows. Una ruta del sistema de archivos se evalúa con respecto al contexto y se devuelve como una ruta absoluta.

Las rutas de los filesystem son útiles por dos razones principales:

- Independencia: puede trasladar su solución de un lugar a otro independientemente del sistema operativo, sin tener que preocuparse por las rutas,
- Seguridad: ningún código puede acceder a los elementos situados por encima de la raíz del sistema de los file system en el disco (sandboxing).

Se soportan los siguientes nombres de rutas de filesystem:

| filesystem   | Designa                                                | Ejemplo                                              |
| ------------ | ------------------------------------------------------ | ---------------------------------------------------- |
| "/DATA"      | Carpeta de datos actual                                | "C:\\MyApps\\Students\\Data\\"               |
| "/LOGS"      | Carpeta Logs                                           | "C:\\MyApps\\Students\\Data\\Logs\\"       |
| "/PACKAGE"   | Carpeta raíz del proyecto (con o sin extensión 4dbase) | "C:\\MyApps\\Students\\"                       |
| "/PROJECT"   | Carpeta Project                                        | "C:\\MyApps\\Students\\Project\\"            |
| "/RESOURCES" | Carpeta de recursos actual del proyecto                | "C:\\MyApps\\Students\\Resources\\"          |
| "/SOURCES"   | Carpeta de fuentes del proyecto actual                 | "C:\\MyApps\\Students\\Project\\Sources\\" |

## Sintaxis POSIX

La sintaxis POSIX es compatible con todas las plataformas. **Se recomienda la sintaxis POSIX** ya que es la más flexible. Se utiliza por defecto (devuelto por las propiedades [file.path](../API/FileClass.md#path) y [folder.path](../API/FolderClass.md#path)).

Con esta sintaxis:

- las carpetas están separadas por "/"
- los nombres de ruta absolutos empiezan por "/"
- para subir una carpeta en una ruta relativa, utilice "../" delante del nombre de la ruta (por seguridad, no puede subir en el sistema de archivos).

En la sintaxis POSIX, generalmente se utilizará los nombres de rutas `filesystem` con los comandos [`File`](../API/FileClass.md#file) y [`Folder`](../API/FolderClass.md#folder), por ejemplo:

```4d
var $pathFile : 4D.File
var $pathFolder : 4D.Folder

$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```




## Sintaxis específica de la plataforma

La sintaxis específica de la plataforma depende del sistema operativo en el que se ejecute el comando. Tenga en cuenta que al crear un objeto archivo o carpeta con esta sintaxis, debe declararlo utilizando la constante `fk platform path` como parámetro.

### Windows

Se soportan los siguientes modelos:

- los separadores de carpetas son "\"
- el texto contiene ":" y "\" como segundo y tercer caracter,
- el texto comienza con "\\".

Ejemplos con [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Rutas de acceso Windows y secuencias de escape

El lenguaje 4D permite utilizar [secuencias de escape](quick-tour.md#escape-sequences). Las secuencias de escape comienzan con una barra invertida `\`, seguida de un caracter. Por ejemplo, `\t` es la secuencia de escape para el caracter `Tab`.

Dado que el caracter `\` también se utiliza como separador en los nombres de rutas en Windows, es necesario introducir un doble `\\` en los nombres de rutas.

### macOS

Se soportan los siguientes modelos (sintaxis HFS+):

- los separadores de carpetas son ":"
- la ruta no debe comenzar con un ":"

Ejemplos con [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume debe llamarse Monday
```

## Rutas absolutas y relativas

### Constructores `File` y `Folder`

Los comandos [`File`](../API/FileClass.md#file) y [`Folder`](../API/FolderClass.md#folder) solo aceptan **rutas absolutas**. Las rutas relativas no están soportadas y devolverán errores. Por ejemplo, el siguiente código no es permitido:

```4d
    //ERROR
$ko:=Folder("myFolder").create() //nombre de ruta relativo con constructor
```

Si quiere manejar los archivos o las carpetas en varias ubicaciones (carpeta de proyecto, carpetas sistema, etc.), puede utilizar `filesystems` (ver arriba). Por ejemplo, puede escribir:

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //carpeta creada a nivel de la estructura
$okFile:=File("/DATA/Prefs/tempo.txt").create() //archivo creado en la carpeta de datos
```

### Funciones de carpeta `.file()` y `.folder()`

Las funciones de los objetos carpeta, tales como [`folder.file()`](../API/FolderClass.md#file) y [`folder.folder()`](../API/FolderClass.md#folder-1) esperan nombres de ruta POSIX relativos. Por ejemplo:

```4d
var $userImages : 4D.Folder
var $ok : Boolean

  //para referenciar una carpeta "Picture" dentro de la carpeta de documentos del usuario
$userImages:=Folder(fk documents folder).folder("Pictures")
  //para crear una carpeta en el escritorio
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Las rutas absolutas no están soportadas y devolverán errores.


## Ejemplos

La flexibilidad de las funciones de archivos y de carpetas le ofrecen varias posibilidades para manipular los archivos y las carpetas, como en los siguientes ejemplos:
```4d
var $fold : 4D.Folder
var $file : 4D.File

$fold:=Folder(fk desktop folder).folder("archive/jan2019")
$fold:=Folder("/DATA/archive/jan2019")
$file:=Folder("/DATA/archive/jan2019").file("total.txt")
$file:=File("/DATA/info.txt")
$file:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
$file:=File(fk backup log file)
```
