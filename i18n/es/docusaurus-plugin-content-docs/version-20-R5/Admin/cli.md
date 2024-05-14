---
id: cli
title: |-
  Interfaz de línea de
            comando
---

Puede utilizar el Terminal de macOS o la consola de Windows para manejar sus aplicaciones 4D (4D, 4D Server, aplicación fusionada y [tool4d](#tool4d)) utilizando líneas de comando. Más concretamente,
esta funcionalidad le permite:

- lanzar una base de
  datos de forma remota, lo que puede ser especialmente útil para administrar los servidores
  web.
- ejecutar pruebas
  automáticas para sus aplicaciones.

## Información básica

Puede ejecutar
líneas de comando para las aplicaciones 4D utilizando el terminal macOS o la consola
Windows.

- En macOS, debe utilizar el comando `open`.
- En Windows, puede
  pasar los argumentos directamente.

> En macOS, se pueden
> pasar los argumentos directamente yendo a la carpeta donde se encuentra la aplicación
> dentro del paquete (Contents/MacOS), lo que permite direccionar el flujo stderr. Por ejemplo, si el paquete 4D se encuentra en la carpeta `MyFolder`, debe escribir la línea de comandos de la siguiente manera: `/MyFolder/4D.app/Contents/MacOS/4D`. Sin embargo, recomendamos que utilice el comando `open` siempre que no necesite acceder al stream stderr.

Lanzar una
aplicación 4D
-------------

A continuación se describen las líneas de comando y los
argumentos soportados para lanzar aplicaciones 4D.

Sintaxis:

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>]
```

| Argument                    | Valor                                                  | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :-------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Ruta de 4D, 4D Server, aplicación fusionada o tool4d   | Lanza la aplicación.<br/>Si no es sin interfaz: idéntico a&#xA;hacer doble clic en la aplicación; cuando se llama sin argumento de archivo de estructura,&#xA;la aplicación se ejecuta y aparece la caja de diálogo "seleccionar base de&#xA;datos".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--version`                 |                                                        | Muestra la versión de la aplicación y sale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--help`                    |                                                        | Muestra el mensaje de ayuda y sale. Argumentos&#xA;alternativos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--project`                 | projectPath&#xA;\| packagePath \| 4dlinkPath           | Archivo de proyecto&#xA;a abrir con el archivo de datos actual. No aparece ninguna&#xA;caja de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--data`                    | dataPath                                               | Archivo de datos a&#xA;abrir con el archivo de proyecto designado. Si no se especifica, se utiliza el último archivo de datos&#xA;abierto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--opening-mode`            | interpreted&#xA;\| compiled                            | Base de datos de&#xA;peticiones a abrir en modo interpretado o compilado. No se lanza ningún&#xA;error si el modo solicitado no está disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--create-data`             |                                                        | Crea automáticamente&#xA;un nuevo archivo de datos si no se encuentra un archivo de datos válido. No aparece ninguna&#xA;caja de diálogo. 4D utiliza el nombre&#xA;del archivo pasado en el argumento "--data" si lo hay (genera un error si ya&#xA;existe un archivo con el mismo nombre).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--user-param`              | Cadena usuario&#xA;personalizada                       | Una cadena que estará disponible en la aplicación a través del comando [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/em/page643.html) (la cadena no debe comenzar por un carácter "-", que está reservado).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--headless`                |                                                        | Lanza 4D, 4D Server o la aplicación fusionada sin interfaz (modo headless). In this mode:<li> The Design mode is not available, database starts in Application mode</li><li> No toolbar, menu bar, MDI window or splash screen is displayed</li><li>No icon is displayed in the dock or task bar</li><li>The opened database is not registered in the "Recent databases" menu</li><li>The diagnostic log is automatically started (see [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Every call to a dialog box is intercepted and an automatic response it provided (e.g. OK for the [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html) command, Abort for an error dialog...). All intercepted commands(\*) are logged in the diagnostic log.</li><br/>For maintenance needs, you can send any text to standard output streams using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command. Note that headless 4D applications can only be closed by a call to [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) or using the OS task manager. |
| `--dataless`                |                                                        | Lanza 4D, 4D Server, la aplicación fusionada o tool4d en modo sin datos. El modo sin datos es útil cuando 4D ejecuta tareas sin necesidad de datos (compilación de proyectos, por ejemplo). In this mode: <li>No file containing data is opened, even if specified in the command line or the `.4DLink` file, or when using the `CREATE DATA FILE` and `OPEN DATA FILE` commands.</li><li>Commands that manipulate data will throw an error. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Note**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. For more information on `.4DLink` files, see [Project opening shortcuts](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                             |
| `--webadmin-settings-file`  | Ruta del archivo                                       | Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md). No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--webadmin-access-key`     | String                                                 | Access key for the [WebAdmin web server](webAdmin.md). No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--webadmin-auto-start`     | Boolean                                                | Status of the automatic startup for the [WebAdmin web server](webAdmin.md). No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--webadmin-store-settings` |                                                        | Store the access key and automatic starting parameters in the currently used settings file (i.e. the default [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) file or a custom file designated with the `--webadmin-settings-path` parameter). Use the `--webadmin-store-settings` argument to save these settings if necessary. No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--utility`                 |                                                        | Sólo disponible con 4D Server. Launches [4D Server in utility mode](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--skip-onstartup`          |                                                        | Launches the project without executing any "automatic" methods, including the `On Startup` and `On Exit` database methods                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--startup-method`          | Nombre del método proyecto (cadena) | Project method to execute immediately after the `On Startup` database method (if not skipped with `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

(\*) Algunos diálogos se muestran antes de abrir la base de datos, por lo que es imposible escribir en el [archivo de registro de diagnóstico](Debugging/debugLogFiles. d#4ddiagnosticlogtxt) (alerta de licencia, diálogo de conversión, selección de bases de datos, selección de archivos de datos). En este caso, se
lanza un mensaje de error tanto en el flujo stderr como en el registro de eventos sistema,
y luego la aplicación se cierra.

### Ejemplos

> La carpeta actual
> del usuario se alcanza utilizando el comando "~ " en macOS y el comando
> "%HOMEPATH%" en Windows.

Lance una aplicación 4D almacenada en el escritorio:

- macOS:

```bash
open ~/Desktop/4D.app
          open "~/Desktop/4D Server.app"
```

- Windows:

```bash
%HOMEPATH%\Desktop\4D\4D.exe
          %HOMEPATH%\Desktop\"4D Server.exe"
```

Abra un paquete en macOS:

```bash
--args ~/Documents/myDB.4dbase
```

Abra un archivo de proyecto:

- macOS:

```bash
--args ~/Documents/myProj/Project/myProj.4DProject
```

- Windows:

```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```

Abra un archivo de proyecto y un archivo de datos:

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject
          --data ~/Documents/data/myData.4DD
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
          --data %HOMEPATH%\Documents\data\myData.4DD
          o:
          /project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data
          %HOMEPATH%\Documents\data\myData.4DD
```

Abra un archivo .4DLink:

- macOS:

```bash
~/Desktop/MyDatabase.4DLink
```

- Windows:

```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Lance la aplicación en modo compilado y cree un archivo de datos
si no está disponible:

- macOS:

```bash
~/Documents/myBase.4dbase --args --opening-mode compiled
          --create-data true
```

- Windows:

```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode
          compiled --create-data true
```

Lance la aplicación con un archivo proyecto y un archivo de datos
y pase una cadena como parámetro de usuario:

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject
          --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
          --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Apertura sin interfaz (modo headless):

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
          --data %HOMEPATH%\Documents\data\myData.4DD --headless
```

## tool4d

**tool4d** es una aplicación gratuita, ligera y autónoma que le permite abrir un proyecto 4D en modo sin interfaz y ejecutar código 4D utilizando la lìnea de comando (CLI).

tool4d está disponible en Windows y macOS y siempre está asociado
a una versión 4D (misma versión y número de compilación). Sólo está disponible en inglés.

tool4d es una herramienta perfecta si desea:

- implementar una cadena CI/CD para su aplicación 4D,
- utilizar un ejecutable 4D ligero para ejecutar scripts 4D, por
  ejemplo para ejecutar pruebas unitarias automáticas.

### Uso de tool4d

Puedes obtener tool4d de la [Página de descarga de productos](https://product-download.4d.com/).

Se utiliza tool4d ejecutando una [línea de comandos](#launch-a-4d-application) con un proyecto 4D estándar. Puede utilizar todos los argumentos descritos en la tabla anterior, excepto --`webadmin` ya que este componente está [desactivado en tool4d](#disabled-4d-features). Con tool4d, se lanza la siguiente secuencia específica:

1. La herramienta 4D ejecuta el método base `On Startup` (y todos los métodos "automáticos" como el [método usuario](../Users/handling_users_groups.md#propiedades-del-usuario)), excepto si se pasa el argumento `--skip-onstartup`.
2. tool4d ejecuta el método designado por el argumento `--startup-method`, si existe.
3. tool4d ejecuta el método base `On Exit`, excepto si se pasa el argumento `--skip-onstartup`.
4. tool4d sale.

En Windows, tool4d es una aplicación de consola, de modo que el stream `stdout` se muestra en el terminal (cmd, powershell...).

:::note Notas

- tool4d siempre se ejecuta sin interfaz (la opción de línea de comandos `headless` es inútil).
- El comando [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) devuelve el valor 6 ("tool4d") cuando se llama desde la aplicación tool4d.
- el [archivo de registro de diagnóstico](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) tiene el prefijo "4DDiagnosticLogTool".

:::

### Funcionalidades 4D desactivadas

Tenga en cuenta que tool4d se ejecuta automáticamente en **modo sin interfaz** (ver `--headless` en [esta tabla](#launch-a-4d-application)), y no da acceso al IDE 4D ni a ninguno de sus servidores. En concreto, se desactivan las siguientes funcionalidades:

- servidor de aplicaciones, servidor web, servidor SQL,
- programador de copias de seguridad,
- ODBC y SQL pass-through,
- todos los componentes como 4D View Pro, 4D SVG, 4D NetKit...,
- corrector ortográfico hunspell,
- corrector ortográfico japonés (librería _mecab_),
- WebAdmin
- CEF,
- PHP,
- depurador remoto (depurador local, el comando `TRACE` y los puntos de interrupción se ignoran en las aplicaciones sin interfaz).

## 4D Server en modo utilitario

Puede lanzar una instancia 4D Server en modo utilitario (sin interfaz) utilizando la opción CLI `--utility`. En este caso, se activa el siguiente flujo de trabajo:

1. 4D Server ejecuta el método base `On Startup` (y todos los métodos "automáticos" como el [método usuario](../Users/handling_users_groups.md#user-properties)), excepto si se pasa el parámetro `--skip-onstartup`.
2. 4D Server ejecuta el método designado por el `--startup-method`, si existe.
3. El servidor 4D ejecuta el método base `On Exit`, excepto si se pasa el parámetro `--skip-onstartup`.
4. 4D Server se cierra.

:::info

A diferencia de tool4d, 4D Server en modo utilitario tiene todas
sus funcionalidades activadas. Sin embargo, el servidor de aplicaciones y el resto de servidores
no se inician.

:::

:::tip Ver también

Ver [esta publicación de blog](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) para ejemplos de cómo utilizar tool4d y 4D Server en modo de utilidad.

:::
