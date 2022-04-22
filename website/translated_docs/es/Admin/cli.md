---
id: cli
title: Interfaz de línea de comando
---

Puede utilizar el terminal macOS o la consola Windows para manejar sus aplicaciones 4D (4D y 4D Server) utilizando líneas de comando. Más concretamente, esta funcionalidad le permite:

- lanzar una base de datos de forma remota, lo que puede ser especialmente útil para administrar los servidores web.
- ejecutar pruebas automáticas para sus aplicaciones.

## Información básica

Puede ejecutar líneas de comando para las aplicaciones 4D utilizando el terminal macOS o la consola Windows.

- En macOS, debe utilizar el comando `open`.
- En Windows, puede pasar los argumentos directamente.

> En macOS, se pueden pasar los argumentos directamente yendo a la carpeta donde se encuentra la aplicación dentro del paquete (Contents/MacOS), lo que permite direccionar el flujo stderr. Por ejemplo, si el paquete 4D se encuentra en la carpeta `MyFolder`, debe escribir la línea de comandos de la siguiente manera: `/MyFolder/4D.app/Contents/MacOS/4D`. Sin embargo, le recomendamos que utilice el comando `open` siempre que no necesite acceder al flujo stderr.

## Lanzar una aplicación 4D

A continuación se describen las líneas de comando y los argumentos soportados para lanzar aplicaciones 4D.

Sintaxis:
```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] 
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]
```
| Argumento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Valor                                                       | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`                                                                                                                                                                             | Ruta de acceso a 4D, 4D Server o de la aplicación fusionada | Lance la aplicación. Es idéntico a hacer doble clic en la aplicación 4D. Cuando se llama sin argumento de archivo de estructura, la aplicación se ejecuta y aparece la caja de diálogo "seleccionar la base de datos".                                                                                                                                                                                                                                                                                                                                                                    |
| `--version`                                                                                                                                                                                   |                                                             | Muestra la versión de la aplicación y sale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--help`                                                                                                                                                                                      |                                                             | Muestra el mensaje de ayuda y salir. Argumentos alternativos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--project`                                                                                                                                                                                   | projectPath &#124; packagePath &#124; 4dlinkPath            | Archivo de proyecto a abrir con el archivo de datos actual. No aparece ninguna caja de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--data`                                                                                                                                                                                      | dataPath                                                    | Archivo de datos a abrir con el archivo de proyecto designado. Si no se especifica, 4D utiliza el último archivo de datos abierto.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--opening-mode`                                                                                                                                                                              | interpreted &#124; compiled                                 | Base de datos de peticiones a abrir en modo interpretado o compilado. No se lanza ningún error si el modo solicitado no está disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--create-data`                                                                                                                                                                               |                                                             | Crea automáticamente un nuevo archivo de datos si no se encuentra un archivo de datos válido. No aparece ninguna caja de diálogo. 4D utiliza el nombre del archivo pasado en el argumento "--data" si lo hay (genera un error si ya existe un archivo con el mismo nombre).                                                                                                                                                                                                                                                                                                               |
| `--user-param`                                                                                                                                                                                | Cadena usuario personalizada                                | Una cadena que estará disponible en la aplicación 4D a través del comando Get database parameter (la cadena no debe comenzar por un caracter "-", que está reservado).                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--headless`                                                                                                                                                                                  |                                                             | Lanza 4D, 4D Server o la aplicación fusionada sin interfaz (modo headless). En este modo:<li> El modo Diseño no está disponible, la base de datos se inicia en modo Aplicación</li><li> No toolbar, menu bar, MDI window or splash screen is displayed</li><li>No icon is displayed in the dock or task bar</li><li>The opened database is not registered in the "Recent databases" menu</li><li>The diagnostic log is automatically started (see [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Every call to a dialog box is intercepted and an automatic response it provided (e.g. OK for the [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html) command, Abort for an error dialog...). All intercepted commands(*) are logged in the diagnostic log.</li><br/>For maintenance needs, you can send any text to standard output streams using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command. Note that headless 4D applications can only be closed by a call to [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) or using the OS task manager. |
| `--dataless`                                                                                                                                                                                  |                                                             | Launches 4D, 4D Server or merged application in dataless mode. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). En este modo: <li>No file containing data is opened, even if specified in the command line or the `.4DLink` file, or when using the `CREATE DATA FILE` and `OPEN DATA FILE` commands.</li><li>Commands that manipulate data will throw an error. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Nota**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. Para más información sobre los archivos `.4DLink`, ver [Atajos para abrir proyectos](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                  |
| `--webadmin-settings-file`                                                                                                                                                                    | File path                                                   | Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--webadmin-access-key`                                                                                                                                                                       | Cadena                                                      | Access key for the [WebAdmin web server](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--webadmin-auto-start`                                                                                                                                                                       | Booleano                                                    | Status of the automatic startup for the [WebAdmin web server](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--webadmin-store-settings`                                                                                                                                                                   |                                                             | Store the access key and automatic starting parameters in the currently used settings file (i.e. the default [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) file or a custom file designated with the `--webadmin-settings-path` parameter). Use the `--webadmin-store-settings` argument to save these settings if necessary                                                                                                                                                                                                                                                     |


[Diagnostic log file](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). In such case, an error message is thrown both in the stderr stream and the system event log, and then the application quits.

### Ejemplos

These examples assume that your 4D application is stored on the desktop and that the database to be opened is found in the "Documents" folder.

> The current folder of the user is reached using the "~ " command under macOS and the "%HOMEPATH%" command under Windows.

Lance la aplicación:

*   macOS:


```bash
open ~/Desktop/4D.app
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe
```

Launch application with a package file on macOS:

```bash
yarn open ~/Desktop/4D.app --args ~/Documents/myDB.4dbase
```

Launch application with a project file:

*   macOS:


```bash
yarn open ~/Desktop/4D.app --args ~/Documents/myProj/Project/myProj.4DProject
```


*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



Launch application with a project file and a data file:

*   macOS:


```bash
open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe --project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
or:
%HOMEPATH%\Desktop\4D\4D.exe /project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Launch application with a .4DLink file:

*   macOS:


```bash
open ~/Desktop/4D.app MyDatabase.4DLink
```

```bash
open "~/Desktop/4D Server.app" MyDatabase.4DLink
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D.exe MyDatabase.4DLink
```

```bash
%HOMEPATH%\Desktop\4D Server.exe" MyDatabase.4DLink
```

Launch application in compiled mode and create a data file if not available:

*   macOS:


```bash
open ~/Desktop/4D.app ~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe %HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Launch application with a project file and a data file and pass a string as a user parameter:

*   macOS:


```bash
open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe --project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Launch application without interface (headless mode):

*   macOS:


```bash
open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless
```

```bash
open ~/Desktop/MyBuiltRemoteApp −−headless
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe --project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
%HOMEPATH%\Desktop\4D\MyBuiltRemoteApp.exe --headless
```
