---
id: creating
title: Crear o abrir un proyecto
---

Los proyectos 4D se crean y desarrollan utilizando la aplicación **4D**, que ofrece un completo Entorno de Desarrollo Integrado (IDE). **4D Server** también puede crear nuevos proyectos vacíos.

## Crear un proyecto

Se pueden crear nuevos proyectos de aplicaciones 4D desde **4D** o **4D Server**. En cualquier caso, los archivos del proyecto se almacenan en la máquina local.

Para crear un nuevo proyecto:

1. Lance 4D o 4D Server.

2. Haga una de las siguientes cosas:
   - Selecciona **Nuevo > Proyecto...** en el menú **Archivo**: ![](../assets/en/getStart/projectCreate1.png)
   - (solo 4D) Seleccione **Proyecto...** desde el **Nuevo** botón de la barra de herramientas:<p>![](../assets/en/getStart/projectCreate2.png)</p>Aparece un diálogo **Guardar** estándar para que pueda elegir el nombre y la ubicación de la carpeta principal del proyecto 4D.

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

   - _Archivos de proyectos empaquetados_: extensión `.4dz` - proyectos de despliegue
   - _Archivos de acceso directo_: extensión `.4DLink` - almacenan los parámetros adicionales necesarios para abrir proyectos o aplicaciones (direcciones, identificadores, etc.)
   - _Archivos binarios_: extensión `.4db` o `.4dc` - formatos de base de datos 4D heredados

### Opciones

Además de las opciones sistema estándar, la caja de diálogo _Abrir_ de 4D ofrece dos menús con opciones específicas disponibles utilizando el botón **Abrir** y el menú **Archivo de datos**.

- **Abrir** - modo de apertura del proyecto:
  - **Interpretado** o **Compilado**: estas opciones están disponibles cuando el proyecto seleccionado contiene [código interpretado y compilado](Concepts/interpreted.md).
  - **[Centro de seguridad y de mantenimiento](MSC/overview.md)**: apertura en modo seguro que permite el acceso a los proyectos dañados para realizar las reparaciones necesarias.

- **Archivo de datos** - especifica el archivo de datos a utilizar con el proyecto. Por defecto, está seleccionada la opción **Archivo de datos actual**.

## Atajos de apertura de los proyectos

4D ofrece varias formas de abrir proyectos directamente y evitar el diálogo de apertura:

- mediante las opciones de menú:
  - _Barra de menús_ - **Archivo** > **Abrir proyectos recientes / {project name}**
  - _Barra de herramientas 4D_ - Seleccione el proyecto en el menú asociado al botón **Abrir**

- vía las preferencias:
  - Fije la preferencia general **Al inicio** en **Abrir el último proyecto utilizado**.

- utilizando un archivo `.4DLink`.

### Abrir un proyecto con un archivo 4DLink

Puede utilizar un archivo [`.4DLink`](#about-4DLink-files) para lanzar la aplicación 4D y abrir el proyecto 4D objetivo. Hay dos maneras de hacer esto:

- haga doble clic o arrastre y suelte el archivo `.4DLink` en la aplicación 4D
- vaya a **Archivo** > **Abrir los proyectos recientes** y seleccione un proyecto

![open-recent-projects](../assets/en/Project/4Dlinkfiles.png)

Un archivo .4DLink de tipo "proyecto remoto" puede copiarse y utilizarse en varias máquinas.

> También es posible seleccionar un archivo 4DLink en la caja de diálogo de apertura de 4D y 4D Server (abriendo sólo el proyecto local).

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
