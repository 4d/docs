---
id: cli
title: Interfaz de línea de comando
---

You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and [tool4d](#tool4d)) using command lines. Más concretamente, esta funcionalidad le permite:

- lanzar una base de datos de forma remota, lo que puede ser especialmente útil para administrar los servidores web.
- ejecutar pruebas automáticas para sus aplicaciones.

## Información básica

Puede ejecutar líneas de comando para las aplicaciones 4D utilizando el terminal macOS o la consola Windows.

- En macOS, debe utilizar el comando `open`.
- En Windows, puede pasar los argumentos directamente.

> En macOS, se pueden pasar los argumentos directamente yendo a la carpeta donde se encuentra la aplicación dentro del paquete (Contents/MacOS), lo que permite direccionar el flujo stderr. Por ejemplo, si el paquete 4D se encuentra en la carpeta `MyFolder`, debe escribir la línea de comandos de la siguiente manera: `/MyFolder/4D.app/Contents/MacOS/4D`. Sin embargo, le recomendamos que utilice el comando `open` siempre que no necesite acceder al flujo stderr.

## Lanzar una aplicación 4D

Here is a description of command lines and arguments supported to launch 4D applications.

Sintaxis:

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] 
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>] 
```

| Argumento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Valor                                                | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`                                                                                                                                                                             | Path of 4D, 4D Server, merged application, or tool4d | Launches the application.<br/>If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--version`                                                                                                                                                                                   |                                                      | Muestra la versión de la aplicación y sale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--help`                                                                                                                                                                                      |                                                      | Muestra el mensaje de ayuda y sale. Argumentos alternativos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--project`                                                                                                                                                                                   | projectPath &#124; packagePath &#124; 4dlinkPath     | Archivo de proyecto a abrir con el archivo de datos actual. No aparece ninguna caja de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--data`                                                                                                                                                                                      | dataPath                                             | Archivo de datos a abrir con el archivo de proyecto designado. If not specified, the last opened data file is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--opening-mode`                                                                                                                                                                              | interpreted &#124; compiled                          | Base de datos de peticiones a abrir en modo interpretado o compilado. No se lanza ningún error si el modo solicitado no está disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--create-data`                                                                                                                                                                               |                                                      | Crea automáticamente un nuevo archivo de datos si no se encuentra un archivo de datos válido. No aparece ninguna caja de diálogo. 4D utiliza el nombre del archivo pasado en el argumento "--data" si lo hay (genera un error si ya existe un archivo con el mismo nombre).                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--user-param`                                                                                                                                                                                | Cadena usuario personalizada                         | A string that will be available within the application through the [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/en/page643.html) command (the string must not start with a "-" character, which is reserved).                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--headless`                                                                                                                                                                                  |                                                      | Lanza 4D, 4D Server o la aplicación fusionada sin interfaz (modo headless). En este modo:<li> El modo Diseño no está disponible, la base de datos se inicia en modo Aplicación</li><li> No se muestra ninguna barra de herramientas, barra de menús, ventana MDI o pantalla de inicio</li><li>No aparece ningún icono en el dock o en la barra de tareas</li><li>La base de datos abierta no está registrada en el menú "Bases de datos recientes"</li><li>El registro de diagnóstico se lanza automáticamente ( ver [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Cada llamada a un cuadro de diálogo es interceptada y se proporciona una respuesta automática (por ejemplo, OK para el comando [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html), Abort para un diálogo de error...). Todos los comandos interceptados(*) se registran en el registro de diagnóstico.</li><br/>Para las necesidades de mantenimiento, puede enviar cualquier texto a los flujos de salida estándar utilizando la función [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html). Tenga en cuenta que las aplicaciones 4D sin interfaz sólo pueden cerrarse mediante una llamada a [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) o utilizando el administrador de tareas del sistema operativo. |
| `--dataless`                                                                                                                                                                                  |                                                      | Launches 4D, 4D Server, merged application or tool4d in dataless mode. El modo sin datos es útil cuando 4D ejecuta tareas sin necesidad de datos (compilación de proyectos, por ejemplo). En este modo: <li>No se abre ningún archivo que contenga datos, incluso si se especifica en la línea de comandos o en el archivo `.4DLink`, o cuando se utilizan los comandos `CREATE DATA FILE` y `OPEN DATA FILE`.</li><li>Los comandos que manipulan datos generarán un error. Por ejemplo, `CREATE RECORD` lanza "no hay tabla a la que aplicar el comando".</li><br/>**Nota**:<li>Si se pasa en la línea de comandos, el modo sin datos se aplica a todas las bases de datos abiertas en 4D, mientras no se cierre la aplicación.</li><li>Si se pasa utilizando el archivo `.4DLink`, el modo sin datos sólo se aplica a la base de datos especificada en el archivo `.4DLink`. Para más información sobre los archivos `.4DLink`, ver [Atajos para abrir proyectos](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                                                          |
| `--webadmin-settings-file`                                                                                                                                                                    | Ruta del archivo                                     | Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md). No disponible con la herramienta [4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--webadmin-access-key`                                                                                                                                                                       | String                                               | Llave de acceso al [servidor web WebAdmin](webAdmin.md). No disponible con la herramienta [4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--webadmin-auto-start`                                                                                                                                                                       | Boolean                                              | Estado del inicio automático del [servidor web WebAdmin](webAdmin.md). No disponible con la herramienta [4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--webadmin-store-settings`                                                                                                                                                                   |                                                      | Almacena la llave de acceso y los parámetros de inicio automático en el archivo de parámetros actual (es decir, el archivo [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) por defecto o un archivo personalizado designado por el parámetro `--webadmin-settings-path`). Utilice el argumento `--webadmin-store-settings` para guardar estos parámetros si es necesario. No disponible con la herramienta [4d](#tool4d).                                                                                                                                                                                                                                                         |
| `--utility`                                                                                                                                                                                   |                                                      | Sólo disponible con 4D Server. Inicia [4D Server en modo utilitario](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--skip-onstartup`                                                                                                                                                                            |                                                      | Launches the project without executing any "automatic" methods, including the `On Startup` and `On Exit` database methods                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--startup-method`                                                                                                                                                                            | Project method name (string)                         | Project method to execute immediately after the `On Startup` database method (if not skipped with `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

[Diagnostic log file](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). En este caso, se lanza un mensaje de error tanto en el flujo stderr como en el registro de eventos sistema, y luego la aplicación se cierra.

### Ejemplos

> La carpeta actual del usuario se alcanza utilizando el comando "~ " en macOS y el comando "%HOMEPATH%" en Windows.

Lance una aplicación 4D almacenada en el escritorio:

*   macOS:


```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```


Abra un paquete en macOS:

```bash
--args ~/Documents/myDB.4dbase
```

Abra un archivo de proyecto:

*   macOS:


```bash
--args ~/Documents/myProj/Project/myProj.4DProject
```


*   Windows:


```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



Abra un archivo de proyecto y un archivo de datos:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
o:
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Abra un archivo .4DLink:

*   macOS:


```bash
~/Desktop/MyDatabase.4DLink
```


*   Windows:


```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Lance la aplicación en modo compilado y cree un archivo de datos si no está disponible:

*   macOS:


```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Lance la aplicación con un archivo proyecto y un archivo de datos y pase una cadena como parámetro de usuario:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Apertura sin interfaz (modo headless):

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```



## tool4d


**tool4d** is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI.

tool4d is available on Windows and macOS and is always associated to a 4D release (same version and build number). It is only provided in English localization.

tool4d is a perfect tool if you want to:

- implement a CI/CD chain for your 4D application,
- use a light 4D executable to run 4D scripts, for example to execute automatic unit tests.



### Uso de tool4d

You can get tool4d from the 4D [Product download page](https://product-download.4d.com/).

You use tool4d by executing a [command line](#launch-a-4d-application) with a standard 4D project. You can use all arguments described in the above table, except --`webadmin` since this component is [disabled in tool4d](#disabled-4d-features). With tool4d, the following specific sequence is launched:

1. tool4d executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` argument is passed.
2. tool4d executes the method designated by the `--startup-method` argument, if any.
3. tool4d executes the `On Exit` database method, except if the `--skip-onstartup` argument is passed.
4. tool4d quits.

On Windows, tool4d is a console application so that the `stdout` stream is displayed in the terminal (cmd, powershell...).


:::note Notas

- tool4d is always executed headless (the `headless` command line option is useless).
- The [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) command returns the value 6 ("tool4d") when called from the tool4d application.
- the [diagnostic log file](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) is prefixed with "4DDiagnosticLogTool".

:::


### Disabled 4D features

Keep in mind that tool4d runs automatically in **headless mode** (see `--headless` in [this table](#launch-a-4d-application)), and does neither give access to the 4D IDE nor any of its servers. In particular, the following features are disabled:

- application server, Web server, SQL server,
- backup scheduler,
- ODBC and SQL pass-through,
- all components such as 4D View Pro, 4D SVG, 4D NetKit...,
- hunspell spell checker,
- japanese spellchecker (*mecab* library),
- WebAdmin
- CEF,
- PHP,
- remote debugger (local debugger, `TRACE` command and breakpoints are ignored in headless applications).



## 4D Server in utility mode

You can launch a 4D Server instance in a utility mode (headless) by using the `--utility` CLI option. In this case, the following workflow is triggered:

1. 4D Server executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` parameter is passed.
2. 4D Server executes the method designated by the `--startup-method`, if any.
3. 4D Server executes the `On Exit` database method, except if the `--skip-onstartup` parameter is passed.
4. 4D Server se cierra.

|

A diferencia de tool4d, 4D Server en modo utilitario tiene todas sus funcionalidades activadas. Sin embargo, el servidor de aplicaciones y el resto de servidores no se inician.

:::


:::tip See also

See [this blog post](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) for examples of how to use tool4d and 4D Server in utility mode.

:::