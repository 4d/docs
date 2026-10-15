---
id: creating
title: Crear o abrir un proyecto
---

## Crear un proyecto

Se pueden crear nuevos proyectos de aplicaciones 4D desde **4D** o **4D Server**. En cualquier caso, los archivos del proyecto se almacenan en la máquina local.

Para crear un nuevo proyecto:

1. Lance 4D o 4D Server.
2. Haga una de las siguientes cosas:
   - Selecciona **Nuevo > Proyecto...** en el menú **Archivo**: ![](../assets/en/getStart/projectCreate-1.png)
   - (4D only) Select **Project...** from the **New** toolbar button:<p>![](../assets/en/getStart/projectCreate-2.png)   <br/>
     A standard **Save** dialog appears so you can choose the name and location of the 4D project's main folder.

:::note

The **Database...** and **Database From Structure Definition...** items are only available if you have selected the [**Enable binary database creation** option](../Preferences/general.md#enable-binary-database-creation) in your Preferences (disabled by default).

:::

3. Introduzca el nombre de su carpeta de proyecto y haga clic en **Guardar**. Este nombre se utilizará:

   - como nombre de la carpeta del proyecto,
   - como nombre del archivo .4DProject en el primer nivel de la [carpeta "Project"](../Project/architecture.md#project-folder).

Puedes elegir cualquier nombre permitido por su sistema operativo. Sin embargo, si su proyecto está destinado a funcionar en otros sistemas o a ser guardado a través de una herramienta de control de fuente, debe tener en cuenta sus recomendaciones de denominación específicas.

Al validar el diálogo **Guardar**, 4D cierra el proyecto actual (si lo hay), crea una carpeta de proyecto en la ubicación indicada y coloca en ella todos los archivos necesarios para el proyecto. Para más información, consulte [Arquitectura de un proyecto 4D](Project/architecture.md).

A continuación, puede empezar a desarrollar su proyecto.

## Abrir un proyecto

Para abrir un proyecto existente desde 4D:

1. Haga una de las siguientes cosas:

   - Seleccione **Abrir/Proyecto local...** desde el menú **Archivo** o del botón**Abrir** de la barra de herramientas.
   - Seleccione **Abrir un proyecto de aplicación local** en el diálogo del Asistente de Bienvenida

Aparece la caja de diálogo estándar de apertura de archivos.

2. Seleccione el archivo `.4dproject` del proyecto (situado dentro de la carpeta ["Project" del proyecto](../Project/architecture.md#project-folder)) y haga clic en **Abrir**.

   Por defecto, el proyecto se abre con su archivo de datos actual. Se sugieren otros tipos de archivos:

   - *Archivos de proyectos empaquetados*: extensión `.4dz` - proyectos de despliegue
   - *Archivos de acceso directo*: extensión `.4DLink` - almacenan los parámetros adicionales necesarios para abrir proyectos o aplicaciones (direcciones, identificadores, etc.)
   - *Archivos binarios*: extensión `.4db` o `.4dc` - formatos de base de datos 4D heredados

:::note

También puede iniciar proyectos 4D sin interfaz gracias a la [CLI (Interfaz de línea de comandos)](../Admin/cli.md) de 4D.

:::

### Opciones

Además de las opciones sistema estándar, la caja de diálogo *Abrir* de 4D ofrece dos menús con opciones específicas disponibles utilizando el botón **Abrir** y el menú **Archivo de datos**.

- **Abrir** - modo de apertura del proyecto:
  - **Interpretado** o **Compilado**: estas opciones están disponibles cuando el proyecto seleccionado contiene [código interpretado y compilado](Concepts/interpreted.md).
  - **[Centro de seguridad y de mantenimiento](MSC/overview.md)**: apertura en modo seguro que permite el acceso a los proyectos dañados para realizar las reparaciones necesarias.

- **Archivo de datos** - especifica el archivo de datos a utilizar con el proyecto. Por defecto, está seleccionada la opción **Archivo de datos actual**. Este menú incluye dos opciones adicionales, ya que 4D permite utilizar el mismo proyecto con distintos archivos de datos.
  - **Elegir otro archivo de datos**: abre el proyecto con un archivo de datos existente distinto del actual. Al seleccionar esta opción y hacer clic en **Abrir**, aparecerá el cuadro de diálogo estándar Abrir archivo de datos, en el que podrá seleccionar un archivo de datos.
  - **Crear un nuevo archivo de datos**: crea un archivo de datos en blanco para el proyecto. Al seleccionar esta opción y hacer clic en **Abrir**, aparecerá el cuadro de diálogo estándar para guardar archivos de datos.

:::note

Para garantizar la integridad de los datos, 4D no permite abrir un archivo de datos si no ha sido creado por el archivo de proyecto actual. El programa asigna automáticamente números de enlace internos (UUID) a los archivos de datos y de proyecto cuando se crean o cuando se convierte el proyecto. Estos números se verifican cuando se abre el archivo de datos.

:::

Una vez cambiado el archivo de datos actual, 4D lo abre de forma predeterminada. Si mueve o renombra el archivo de datos, deberá localizarlo de nuevo. Es posible cambiar el archivo de datos mediante un atajo de teclado al iniciar el programa (ver abajo). Puede ver el archivo de datos actual en cualquier momento en la [Página de información del MSC](../MSC/information.md#data).

### Diálogo de mantenimiento al inicio

If you need to interrupt the startup sequence, for example if the project is not launching properly or if you want to switch to a different data file, hold down the **Alt** (Windows) or **Option** (macOS) key during database startup to display the startup maintenance dialog box:

![](../assets/en/getStart/startup.png)

Se ofrecen las siguientes opciones de mantenimiento:

- **Abrir la aplicación con el archivo de datos predeterminado**: continúa con el proceso de apertura habitual.
- **Seleccionar otro archivo de datos** / **Crear un nuevo archivo de datos**: le permite cambiar de archivo de datos (ver arriba).
- **Restore a backup file**: opens standard Open file dialog box, so that you can select a backup file (.4bk) or a log backup file (.4bl) to [restore](../Backup/restore.md#manually-restoring-a-backup-standard-dialog).
- **Abrir el Centro de mantenimiento y seguridad**: abre el proyecto en [modo mantenimiento](../MSC/overview.md#display-in-maintenance-mode).

## Atajos de apertura de los proyectos

4D ofrece varias formas de abrir proyectos directamente y evitar el diálogo de apertura:

- a través del submenú **Abrir proyectos recientes / {nombre del proyecto}** del menú **Archivo** o del botón **Abrir** de la barra de herramientas.  
  ![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)
- haga doble clic o arrastre y suelte un archivo `.4DLink` en la aplicación 4D (ver abajo).
- configurando la preferencia general **Al iniciar** en [**Abrir el último proyecto utilizado**](../Preferences/general.md#at-startup).

:::note Notas

- En Windows, un proyecto de 4D Server se puede iniciar automáticamente al iniciar la sesión si está [registrado como servicio](../server/service.md).
- Una [aplicación 4D generada] (../Desktop/building.md) puede lanzarse con un doble clic en el icono de la aplicación.

:::

## Sobre 4DLink Files

Los archivos con la extensión `.4DLink` son archivos XML que contienen parámetros destinados a automatizar y a simplificar la apertura de proyectos 4D locales o remotos.

Los archivos `.4DLink` pueden guardar la dirección de un proyecto 4D, así como sus identificadores de conexión y el modo de apertura, lo que permite ahorrar tiempo al abrir los proyectos.

4D genera automáticamente un archivo `.4DLink` cuando se abre un proyecto local por primera vez o cuando se conecta a un servidor por primera vez. El archivo se almacena en la carpeta de preferencias locales en la siguiente ubicación:

- Windows: C:\Users\UserName\AppData\Roaming\4D\Favorites vXX\
- macOS: Users/UserName/Library/Application Support/4D/Favorites vXX/

XX representa el número de versión de la aplicación. Por ejemplo, "Favoritos v19" para 4D v19.

Esa carpeta está dividida en dos subcarpetas:

- la carpeta **Local** contiene los archivos `.4DLink` que pueden utilizarse para abrir proyectos locales
- la carpeta **Remote** contiene los archivos `.4DLink` de proyectos remotos recientes

Los archivos `.4DLink` también pueden crearse con un editor XML.

4D ofrece un DTD que describe las llaves XML que pueden utilizarse para crear un archivo `.4DLink`. Este DTD se llama database_link.dtd y se encuentra en la subcarpeta `\Resources\DTD\` de la aplicación 4D.

