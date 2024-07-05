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

| Argumento                   | Valor                                                  | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Ruta de 4D, 4D Server, aplicación fusionada o tool4d   | Lanza la aplicación.<br/>Si no es sin interfaz: idéntico a&#xA;hacer doble clic en la aplicación; cuando se llama sin argumento de archivo de estructura,&#xA;la aplicación se ejecuta y aparece la caja de diálogo "seleccionar base de&#xA;datos".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--version`                 |                                                        | Muestra la versión de la aplicación y sale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--help`                    |                                                        | Muestra el mensaje de ayuda y sale. Argumentos&#xA;alternativos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--project`                 | projectPath&#xA;\| packagePath \| 4dlinkPath           | Archivo de proyecto&#xA;a abrir con el archivo de datos actual. No aparece ninguna&#xA;caja de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--data`                    | dataPath                                               | Archivo de datos a&#xA;abrir con el archivo de proyecto designado. Si no se especifica, se utiliza el último archivo de datos&#xA;abierto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--opening-mode`            | interpreted&#xA;\| compiled                            | Base de datos de&#xA;peticiones a abrir en modo interpretado o compilado. No se lanza ningún&#xA;error si el modo solicitado no está disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--create-data`             |                                                        | Crea automáticamente&#xA;un nuevo archivo de datos si no se encuentra un archivo de datos válido. No aparece ninguna&#xA;caja de diálogo. 4D utiliza el nombre&#xA;del archivo pasado en el argumento "--data" si lo hay (genera un error si ya&#xA;existe un archivo con el mismo nombre).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--user-param`              | Cadena usuario&#xA;personalizada                       | Una cadena que estará disponible en la aplicación a través del comando [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/em/page643.html) (la cadena no debe comenzar por un carácter "-", que está reservado).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--headless`                |                                                        | Lanza 4D, 4D Server o la aplicación fusionada sin interfaz (modo headless). En este modo:<li> El modo Diseño no está disponible, la base de datos se inicia en modo Aplicación</li><li> No se muestra la barra de herramientas, la barra de menú, la ventana MDI ni la pantalla de presentación</li><li>No se muestra ningún icono en el dock o la barra de tareas</li><li>La base de datos abierta no se registra en el menú "Bases de datos recientes"</li><li>Se inicia automáticamente el registro de diagnóstico (ver [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Se intercepta cada llamada a una caja de diálogo y se suministra una respuesta automática (por ejemplo, OK para el comando [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html), Abort para un diálogo de error...). All intercepted commands(\*) are logged in the diagnostic log.</li><br/>For maintenance needs, you can send any text to standard output streams using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command. Tenga en cuenta que las aplicaciones 4D sin interfaz sólo pueden cerrarse mediante una llamada a [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) o utilizando el administrador de tareas del sistema operativo. |
| `--dataless`                |                                                        | Lanza 4D, 4D Server, la aplicación fusionada o tool4d en modo sin datos. El modo sin datos es útil cuando 4D ejecuta tareas sin necesidad de datos (compilación de proyectos, por ejemplo). En este modo: <li>No se abre ningún archivo que contenga datos, aunque se especifique en la línea de comandos o en el archivo `.4DLink`, o cuando se utilicen los comandos `CREATE DATA FILE` y `OPEN DATA FILE`.</li><li>Los comandos que manipulen datos generarán un error. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Note**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. For more information on `.4DLink` files, see [Project opening shortcuts](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--webadmin-settings-file`  | Ruta del archivo                                       | Ruta del archivo `.4DSettings` personalizado para el [servidor web WebAdmin](webAdmin.md). No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--webadmin-access-key`     | String                                                 | Llave de acceso para el [servidor web WebAdmin](webAdmin.md). No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--webadmin-auto-start`     | Boolean                                                | Estado del lanzamiento automático del [servidor web WebAdmin](webAdmin.md). No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--webadmin-store-settings` |                                                        | Almacena la llave de acceso y los parámetros de inicio automático en el archivo de parámetros actualmente utilizado (es decir, el archivo [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) por defecto o un archivo personalizado designado con el parámetro `--webadmin-settings-path`). Utilice el argumento `--webadmin-store-settings` para guardar esta configuración si es necesario. No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--utility`                 |                                                        | Sólo disponible con 4D Server. Lanza [4D Server en modo utilitario](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--skip-onstartup`          |                                                        | Lanza el proyecto sin ejecutar ningún método "automático", incluyendo los métodos base `On Startup` y `On Exit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--startup-method`          | Nombre del método proyecto (cadena) | Método de proyecto a ejecutar inmediatamente después del método base `On Startup` (si no se omite con `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

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

Ver [esta publicación de blog](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) para ejemplos de cómo utilizar tool4d y 4D Server en modo utilitario.

:::
