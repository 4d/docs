---
id: clientServer
title: Gestión Cliente/Servidor
---

Las aplicaciones 4D Desktop pueden utilizarse en una configuración Cliente/Servidor, ya sea como aplicaciones combinadas cliente/servidor o como proyectos remotos.

- Las **aplicaciones cliente/servidor fusionadas** son generadas por el [gestor de creación de aplicaciones](building.md#clientserver-page). Se utilizan para el despliegue de aplicaciones.

- Los **proyectos remotos** son archivos [.4DProject](Project/architecture.md) abiertos por 4D Server y a los que se accede con 4D en modo remoto. El servidor envía una versión .4dz del proyecto ([formato comprimido](building.md#build-compiled-structure)) al 4D remoto, por lo que los archivos de estructura son de sólo lectura. Esta configuración se suele utilizar para probar la aplicación.

![](../assets/en/getStart/localremote.png)

> La conexión a un proyecto remoto desde **la misma máquina que 4D Server** permite modificar los archivos del proyecto. Esta [funcionalidad específica](#using-4d-and-4d-server-on-the-same-machine) permite desarrollar una aplicación cliente/servidor en el mismo contexto del despliegue.

## Abrir una aplicación cliente/servidor fusionada

Una aplicación cliente/servidor fusionada se personaliza y su puesta en marcha se simplifica:

- Para lanzar la parte del servidor, el usuario simplemente hace doble clic en la aplicación servidor. No es necesario seleccionar el archivo proyecto.
- Para lanzar la parte cliente, el usuario simplemente hace doble clic en la aplicación cliente, que se conecta directamente a la aplicación servidor.

Estos principios se detallan en la página [Creación de aplicaciones](building.md#what-is-a-clientserver-application).

## Abrir un proyecto remoto

La primera vez que se conecte a un proyecto 4D Server a través de un 4D remoto, normalmente utilizará la caja de diálogo de conexión estándar. Luego, podrá conectarse directamente utilizando el menú **Abrir proyectos recientes** o un archivo de acceso directo 4DLink.

Para conectarse remotamente a un proyecto 4D Server:

1. Haga una de las siguientes cosas:
   - Seleccione **Conectar a 4D Server** en la caja de diálogo del asistente de bienvenida
   - Seleccione **Abrir/Proyecto remoto...** desde el menú **Archivo** o del botón**Abrir** de la barra de herramientas.

Aparece el diálogo de conexión de 4D Server. Este diálogo tiene tres pestañas: **Reciente**, **Disponible** y **Personalizado**.

Si 4D Server está conectado a la misma subred que el 4D remoto, seleccione **Disponible**. 4D Server incluye un sistema de difusión integrado que, por defecto, publica el nombre de los proyectos 4D Server disponibles en la red. La lista se ordena por orden de aparición y se actualiza dinámicamente.

![](../assets/en/getStart/serverConnect.png)

Para conectarse a un servidor de la lista, haga doble clic en su nombre o selecciónelo y presione el botón **Aceptar**.

Si el proyecto publicado no aparece en la lista **Disponible**, seleccione **Personalizado**. La página Personalizada le permite conectarse a un servidor publicado en la red utilizando su dirección de red y asignándole un nombre personalizado.

![](../assets/en/Desktop/serverConnect2.png)

- **Nombre del proyecto**: define el nombre local del proyecto 4D Server. Este nombre se utilizará en la página **Reciente** cuando se haga referencia al proyecto.
- **Dirección red**: la dirección IP de la máquina donde se lanzó el 4D Server.
  - Si dos servidores se ejecutan simultáneamente en la misma máquina, la dirección IP debe ir seguida de dos puntos y del número de puerto, por ejemplo: `192.168.92.104:19814`.
  - Por defecto, el puerto de publicación de un 4D Server es el 19813. Este número puede modificarse en los parámetros del proyecto.

> The [**Activate development mode**](#development-mode) option opens the remote connection in a special read/write mode and requires to access the project folder from the remote 4D.

Una vez que esta página asigna un servidor, al hacer clic en el botón **Aceptar** podrá conectarse al servidor.

Una vez establecida la conexión con el servidor, el proyecto remoto aparecerá en la pestaña **Recientes**.

### Actualización de los archivos del proyecto en el servidor

4D Server crea y envía automáticamente a las máquinas remotas una versión [.4dz](building.md#build-compiled-structure) del archivo proyecto *.4DProject* (no comprimido) en modo interpretado.

- Una versión .4dz actualizada del proyecto se produce automáticamente cuando es necesario, \*es decir, \*cuando el proyecto ha sido modificado y recargado por 4D Server. El proyecto se recarga:
  - automáticamente, cuando la ventana de la aplicación 4D Server pasa al frente del sistema operativo o cuando la aplicación 4D en la misma máquina guarda una modificación (ver abajo).
  - when the [`RELOAD PROJECT`](../commands-legacy/reload-project.md) command is executed. Llamar a este comando es necesario cuando, por ejemplo, se ha sacado una nueva versión del proyecto desde la plataforma de control de fuentes.

### Actualización de los archivos de proyecto en las máquinas remotas

Cuando se ha producido una versión .4dz actualizada del proyecto en 4D Server, las máquinas 4D remotas conectadas deben cerrar la sesión y volver a conectarse a 4D Server para poder beneficiarse de la versión actualizada.

## Utilizar 4D y 4D Server en la misma máquina

Cuando 4D se conecta a un 4D Server en la misma máquina, la aplicación se comporta como 4D en modo monopuesto y el entorno de diseño le permite editar los archivos del proyecto. Esta funcionalidad le permite desarrollar una aplicación cliente/servidor en el mismo contexto de despliegue.

> When 4D connects to a 4D Server on the same machine, the **development mode** is automatically activated, whatever the [Development mode](#development-mode) status.

Cada vez que 4D realiza una acción **Guardar todo** desde el entorno de diseño (explícitamente desde el menú **Archivo** o implícitamente al cambiar al modo aplicación, por ejemplo), 4D Server recarga sincronizadamente los archivos del proyecto. 4D espera a que 4D Server termine de recargar los archivos del proyecto antes de continuar.

Sin embargo, debe prestar atención a las siguientes diferencias de comportamiento en comparación con [la arquitectura proyecto estándar](Project/architecture.md):

- la carpeta userPreferences.\{username\} utilizada por 4D no es la misma carpeta utilizada por 4D Server en la carpeta proyecto. En su lugar, es una carpeta dedicada, llamada "userPreferences", almacenada en la carpeta sistema del proyecto (es decir, la misma ubicación que al abrir un proyecto .4dz).
- la carpeta utilizada por 4D para los datos derivados no es la carpeta llamada "DerivedData" en la carpeta proyecto. En su lugar, se trata de una carpeta dedicada llamada "DerivedDataRemote" situada en la carpeta del sistema del proyecto.
- el archivo catalog.4DCatalog no es editado por 4D sino por 4D Server. La información del catálogo se sincroniza mediante peticiones cliente/servidor
- el archivo directory.json no es editado por 4D sino por 4D Server. La información del directorio se sincroniza mediante peticiones cliente/servidor
- 4D utiliza sus propios componentes internos y plug-ins en lugar de los de 4D Server.

> No se recomienda instalar plug-ins o componentes a nivel de la aplicación 4D o 4D Server.

## Development mode

The **Development mode** in 4D Server is a special project opening mode that allows read/write access for connected remote 4D applications. El proyecto debe estar disponible en [modo **interpretado**](../Concepts/interpreted.md).

Este modo permite que uno o varios desarrolladores trabajen simultáneamente en el mismo proyecto en el entorno Diseño. Cuando se abre un proyecto en **modo Desarrollo**:

- Los archivos de proyecto están disponibles en lectura/escritura para que pueda editar métodos, formularios, etc.
- Several remote 4D can concurrently open the same interpreted project files and edit them. Un sistema de bloqueo automático impide el acceso simultáneo a un mismo recurso.
- Las modificaciones se ponen a disposición de todos los desarrolladores remotos. Note however that there is no automatic push to remote developers, they need to refresh to get latest versions of files (a refresh is done each time the developer switches from design mode to application mode for example, or selects **Save all** from the **File** menu).

To use this mode, select the **Activate development mode** option in the [connection dialog box](#opening-a-remote-project) from your remote 4D. You are prompted to **Select 4D project file**: you need to select the [.project file](../Project/architecture.md#applicationname4dproject-file) that 4D Server has opened. Si selecciona un archivo diferente, un cuadro de diálogo de alerta le avisa de que el modo de desarrollo no está disponible. It means that the remote 4D must have access to the project folder over the network (the whole project folder must be shared, i.e. the root folder of the project).

:::caution

For performance reasons with this configuration, it is strongly recommended that the project folder be stored on a dedicated file server (e.g. a NAS) on a local network.

:::

:::note

Cuando tanto el servidor como el 4D remoto están en la misma máquina, [se aplican reglas adicionales](#using-4d-and-4d-server-on-the-same-machine).

:::

He aquí un resumen de la arquitectura del modo de desarrollo:

![](../assets/en/Desktop/develop-mode.png)

:::note Compatibilidad

This feature is designed for small-size development teams who are used to work on binary databases and want to benefit from project features while maintaining their current organisation. However, for multi-user development on 4D projects, we recommend using a standard architecture where developers work on their machine and manage their work using source control repository tools (Git, SVN, etc.). This organisation provides a great flexibility by allowing developers to work on different branches, and compare, merge, or revert modifications.

:::

:::tip Entrada de blog relacionada

[Developing Concurrently on 4D Server in Project Mode](https://blog.4d.com/developing-concurrently-on-4d-server-in-project-mode/)

:::