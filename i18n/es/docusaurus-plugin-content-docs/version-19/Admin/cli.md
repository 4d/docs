---
id: cli
title: "Interfaz de línea de\n          comando"
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
| Argumento                              | Valor                                                       | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`                      | Ruta de acceso a 4D, 4D Server o de la aplicación fusionada | Lance la aplicación. Es idéntico a hacer doble clic en la aplicación 4D. Cuando se llama sin argumento de archivo de estructura, la aplicación se ejecuta y aparece la caja de diálogo "seleccionar la base de datos".                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--version`                            |                                                             | Muestra la versión de la aplicación y sale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--help`                               |                                                             | Muestra el mensaje de ayuda y sale. Argumentos alternativos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--project`                            | projectPath &#124; packagePath &#124; 4dlinkPath            | Archivo de proyecto a abrir con el archivo de datos actual. No aparece ninguna caja de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--data`                               | dataPath                                                    | Archivo de datos a abrir con el archivo de proyecto designado. Si no se especifica, 4D utiliza el último archivo de datos abierto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--opening-mode`                       | interpreted &#124; compiled                                 | Base de datos de peticiones a abrir en modo interpretado o compilado. No se lanza ningún error si el modo solicitado no está disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--create-data`                        |                                                             | Crea automáticamente un nuevo archivo de datos si no se encuentra un archivo de datos válido. No aparece ninguna caja de diálogo. 4D utiliza el nombre del archivo pasado en el argumento "--data" si lo hay (genera un error si ya existe un archivo con el mismo nombre).                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--user-param`                         | Cadena usuario personalizada                                | Una cadena que estará disponible en la aplicación 4D a través del comando Get database parameter (la cadena no debe comenzar por un caracter "-", que está reservado).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--headless`                           |                                                             | Lanza 4D, 4D Server o la aplicación fusionada sin interfaz (modo headless). En este modo:<li> El modo Diseño no está disponible, la base de datos se inicia en modo Aplicación</li><li> No se muestra ninguna barra de herramientas, barra de menús, ventana MDI o pantalla de inicio</li><li>No aparece ningún icono en el dock o en la barra de tareas</li><li>La base de datos abierta no está registrada en el menú "Bases de datos recientes"</li><li>El registro de diagnóstico se lanza automáticamente ( ver [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Cada llamada a un cuadro de diálogo es interceptada y se proporciona una respuesta automática (por ejemplo, OK para el comando [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html), Abort para un diálogo de error...). Todos los comandos interceptados(*) se registran en el registro de diagnóstico.</li><br/>Para las necesidades de mantenimiento, puede enviar cualquier texto a los flujos de salida estándar utilizando la función [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html). Tenga en cuenta que las aplicaciones 4D sin interfaz sólo pueden cerrarse mediante una llamada a [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) o utilizando el administrador de tareas del sistema operativo. |
| `--dataless`                           |                                                             | Lanza 4D, 4D Server o la aplicación fusionada en modo sin datos. El modo sin datos es útil cuando 4D ejecuta tareas sin necesidad de datos (compilación de proyectos, por ejemplo). En este modo: <li>No se abre ningún archivo que contenga datos, incluso si se especifica en la línea de comandos o en el archivo `.4DLink`, o cuando se utilizan los comandos `CREATE DATA FILE` y `OPEN DATA FILE`.</li><li>Los comandos que manipulan datos generarán un error. Por ejemplo, `CREATE RECORD` lanza "no hay tabla a la que aplicar el comando".</li><br/>**Nota**:<li>Si se pasa en la línea de comandos, el modo sin datos se aplica a todas las bases de datos abiertas en 4D, mientras no se cierre la aplicación.</li><li>Si se pasa utilizando el archivo `.4DLink`, el modo sin datos sólo se aplica a la base de datos especificada en el archivo `.4DLink`. Para más información sobre los archivos `.4DLink`, ver [Atajos para abrir proyectos](../Project/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                                                                |
| `
          --webadmin-settings-file`  | Ruta del archivo                                            | Ruta del archivo WebAdmin `.4DSettings` personalizado para el [servidor web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `
          --webadmin-access-key`     | Text                                                        | Llave de acceso al [servidor web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `
          --webadmin-auto-start`     | Boolean                                                     | Estado del inicio automático del [servidor web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `
          --webadmin-store-settings` |                                                             | Almacena la llave de acceso y los parámetros de inicio automático en el archivo de parámetros actual (es decir, el archivo [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) por defecto o un archivo personalizado designado por el parámetro `--webadmin-settings-path`). Utilice el argumento `--webadmin-store-settings` para guardar estos parámetros si es necesario                                                                                                                                                                                                                                                                                                          |


[Diagnostic log file](debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). En este caso, se lanza un mensaje de error tanto en el flujo stderr como en el registro de eventos sistema, y luego la aplicación se cierra.

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
--args --project ~/Documents/myProj/Project/myProj.4DProject
          --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
          --data %HOMEPATH%\Documents\data\myData.4DD
          o:
          /project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data
          %HOMEPATH%\Documents\data\myData.4DD
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
~/Documents/myBase.4dbase --args --opening-mode compiled
          --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode
          compiled --create-data true
```

Lance la aplicación con un archivo proyecto y un archivo de datos y pase una cadena como parámetro de usuario:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject
          --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
          --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Apertura sin interfaz (modo headless):

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject
          --data ~/Documents/data/myData.4DD --headless  
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
          --data %HOMEPATH%\Documents\data\myData.4DD --headless
```
