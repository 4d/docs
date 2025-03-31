---
id: file
title: File
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                         |
| ----------- | -------------------------------------- |
| 19 R4       | Nueva constante `HTTP Client log file` |
| 17 R5       | Añadidos                               |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| Parámetros   | Tipo                    |     | Descripción                                                           |
| ------------ | ----------------------- | :-: | --------------------------------------------------------------------- |
| path         | Text                    |  →  | Ruta del archivo                                                      |
| fileConstant | Integer                 |  →  | Constante del archivo 4D                                              |
| pathType     | Integer                 |  →  | `fk posix path` (por defecto) o `fk platform path` |
| \*           | operator                |  →  | \* para devolver el archivo de la base local                          |
| Result       | 4D.File |  ←  | Nuevo objeto de archivo                                               |

<!-- END REF -->

#### Descripción

El comando `File` <!-- REF #_command_.File.Summary -->crea y devuelve un nuevo objeto de tipo `4D.File`<!-- END REF -->. El comando acepta dos sintaxis:

**File ( path { ; pathType } { ; \* })**

En el parámetro *path*, pase una ruta de archivo. Puede utilizar una cadena personalizada o un [filesystem](../Concepts/paths.md#filesystem-pathnames) (por ejemplo, "/DATA/myfile.txt").

> Sólo se soportan los nombres de ruta absolutos con el comando `File`.

Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. Si trabaja con los nombres de ruta de plataforma (Windows o macOS), debe declararlo utilizando el parámetro *pathType*. Las siguientes constantes están disponibles:

| Constante        | Valor | Comentario                                                                                                                           |
| ---------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| fk platform path | 1     | Ruta expresada con una sintaxis específica de la plataforma (obligatoria en caso de nombre de ruta de plataforma) |
| fk posix path    | 0     | Ruta expresada con sintaxis POSIX (por defecto)                                                                   |

**File ( fileConstant { ; \* } )**

En el parámetro *fileConstant*, pase un archivo 4D interno o sistema, utilizando una de las siguientes constantes:

| Constante                         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Archivo de historial de copias de seguridad (ver Archivos de configuración y rastreo). Se almacena en la carpeta de destino de la copia de seguridad.                                                                                                                                                                                                                                                                                                                                                                                    |
| Backup log file                   | 13    | Archivo historial de copias de seguridad actual. Almacenado en la carpeta Logs de la aplicación.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Backup settings file              | 1     | Archivo backup.4DSettings por defecto (formato xml), almacenado en la carpeta Settings del proyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Backup settings file for data     | 17    | archivo backup.4DSettings del archivo de datos (formato xml), almacenado en la carpeta Settings de la carpeta data                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Build application log file        | 14    | Archivo de historial actual en formato xml del generador de aplicaciones. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Build application settings file   | 20    | Archivo de configuración por defecto del generador de aplicaciones ("buildApp.4DSettings"). Almacenado en la carpeta Settings del proyecto.                                                                                                                                                                                                                                                                                                                                                                              |
| Compacting log file               | 6     | Archivo de historial de la compactación más reciente realizada con el comando Compact data file o el Centro de seguridad y mantenimiento. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                    |
| Current backup settings file      | 18    | archivo backup.4DSettings utilizado actualmente por la aplicación. Puede ser el archivo de configuración de la copia de seguridad (por defecto) o un archivo de configuración de la copia de seguridad personalizado por el usuario definido para el archivo de datos                                                                                                                                                                                                                                                                    |
| Debug log file                    | 12    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(Debug log recording)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Diagnostic log file               | 11    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(Diagnostic log recording)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Directory file                    | 16    | archivo directory.json, que contiene la descripción de los usuarios y grupos (si los hay) del proyecto. Puede situarse en la carpeta user settings (por defecto, se aplica a todo el proyecto), o en la carpeta data settings (específica para un archivo de datos).                                                                                                                                                                                                               |
| HTTP Client log file              | 24    | Archivo de historial creado por el comando `HTTP SET OPTION(HTTP client log)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| HTTP debug log file               | 9     | Archivo de registro creado por el comando `WEB SET OPTION(Web debug log)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HTTP log file                     | 8     | Archivo de registro creado por el comando `WEB SET OPTION(Web log recording)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| IMAP Log file                     | 23    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(IMAP Log)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Last backup file                  | 2     | El último archivo de copia de seguridad, llamado `\<applicationName>[bkpNum].4BK`, se almacena en una ubicación personalizada.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Last journal integration log file | 22    | Nombre completo del último archivo de registro de integración del historial (almacenado en la carpeta Logs de la aplicación restaurada), si la hay. Este archivo se crea, en modo de reparación automática, tan pronto como se produce una integración de archivos de historial                                                                                                                                                                                                                                                                          |
| Repair log file                   | 7     | Archivo de historial de las reparaciones realizadas en la base por el Centro de seguridad y mantenimiento (CSM). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                          |
| Request log file                  | 10    | Archivo de registro de peticiones cliente/servidor estándar (excluyendo las peticiones web) creado por los comandos `SET DATABASE PARAMETER(4D Server log recording)` o `SET DATABASE PARAMETER(Client log recording)`. Si se ejecuta en el servidor, se devuelve el archivo de registro del servidor (almacenado en la carpeta Logs del servidor). Si se ejecuta en el cliente, se devuelve el archivo de registro del cliente (almacenado en la carpeta Logs local del cliente). |
| SMTP log file                     | 15    | Archivo de registro creado por el comando `SET DATABASE PARAMETER(SMTP Log)`. Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| User settings file                | 3     | archivo settings.4DSettings para todos los archivos de datos, almacenados en la carpeta Preferences junto a la estructura del archivo si está activado.                                                                                                                                                                                                                                                                                                                                                                                                     |
| User settings file for data       | 4     | archivo settings.4DSettings para el archivo de datos actual, almacenado en la carpeta Preferences junto al archivo de datos.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Verification log file             | 5     | Archivos de historial creados por los comandos `VERIFY CURRENT DATA FILE` y `VERIFY DATA FILE` o el Centro de seguridad y mantenimiento (MSC). Almacenado en la carpeta Logs.                                                                                                                                                                                                                                                                                                                                                            |

Si el objetivo *fileConstant* no existe, se devuelve un objeto null. No se produce ningún error.

Si el comando se llama desde un componente, pase el parámetro opcional `*` para obtener la ruta de la base local. De lo contrario, si omite el parámetro `*`, siempre se devuelve un objeto null.

#### Ver también

[Folder](folder.md)\
[Get 4D file](../commands-legacy/get-4d-file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1566                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
