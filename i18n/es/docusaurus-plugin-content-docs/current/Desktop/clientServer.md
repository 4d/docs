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

> La opción **Activar modo desarrollo** abre la conexión remota en un modo especial de lectura/escritura y requiere acceder a la carpeta del proyecto desde el 4D remoto (opción de compatibilidad).

Una vez que esta página asigna un servidor, al hacer clic en el botón **Aceptar** podrá conectarse al servidor.

Una vez establecida la conexión con el servidor, el proyecto remoto aparecerá en la pestaña **Recientes**.

### Actualización de los archivos del proyecto en el servidor

4D Server crea y envía automáticamente a las máquinas remotas una versión [.4dz](building.md#build-compiled-structure) del archivo proyecto _.4DProject_ (no comprimido) en modo interpretado.

- Una versión .4dz actualizada del proyecto se produce automáticamente cuando es necesario, \*es decir, \*cuando el proyecto ha sido modificado y recargado por 4D Server. El proyecto se recarga:
  - automáticamente, cuando la ventana de la aplicación 4D Server pasa al frente del sistema operativo o cuando la aplicación 4D en la misma máquina guarda una modificación (ver abajo).
  - cuando se ejecuta el comando `RELOAD PROJECT`. Llamar a este comando es necesario cuando, por ejemplo, se ha sacado una nueva versión del proyecto desde la plataforma de control de fuentes.

### Actualización de los archivos de proyecto en las máquinas remotas

Cuando se ha producido una versión .4dz actualizada del proyecto en 4D Server, las máquinas 4D remotas conectadas deben cerrar la sesión y volver a conectarse a 4D Server para poder beneficiarse de la versión actualizada.

## Utilizar 4D y 4D Server en la misma máquina

Cuando 4D se conecta a un 4D Server en la misma máquina, la aplicación se comporta como 4D en modo monopuesto y el entorno de diseño le permite editar los archivos del proyecto. Esta funcionalidad le permite desarrollar una aplicación cliente/servidor en el mismo contexto de despliegue.

> Cuando 4D se conecta a un 4D Server en la misma máquina, el **modo desarrollo** se activa automáticamente, sea cual sea el estado de la [opción de apertura](#opening-a-remote-project).

Cada vez que 4D realiza una acción **Guardar todo** desde el entorno de diseño (explícitamente desde el menú **Archivo** o implícitamente al cambiar al modo aplicación, por ejemplo), 4D Server recarga sincronizadamente los archivos del proyecto. 4D espera a que 4D Server termine de recargar los archivos del proyecto antes de continuar.

Sin embargo, debe prestar atención a las siguientes diferencias de comportamiento en comparación con [la arquitectura proyecto estándar](Project/architecture.md):

- la carpeta userPreferences.\{username\} utilizada por 4D no es la misma carpeta utilizada por 4D Server en la carpeta proyecto. En su lugar, es una carpeta dedicada, llamada "userPreferences", almacenada en la carpeta sistema del proyecto (es decir, la misma ubicación que al abrir un proyecto .4dz).
- la carpeta utilizada por 4D para los datos derivados no es la carpeta llamada "DerivedData" en la carpeta proyecto. En su lugar, se trata de una carpeta dedicada llamada "DerivedDataRemote" situada en la carpeta del sistema del proyecto.
- el archivo catalog.4DCatalog no es editado por 4D sino por 4D Server. La información del catálogo se sincroniza mediante peticiones cliente/servidor
- el archivo directory.json no es editado por 4D sino por 4D Server. La información del directorio se sincroniza mediante peticiones cliente/servidor
- 4D utiliza sus propios componentes internos y plug-ins en lugar de los de 4D Server.

> No se recomienda instalar plug-ins o componentes a nivel de la aplicación 4D o 4D Server.

## Sesiones de usuarios remotos

En el servidor, el comando [`Session`](../commands/session.md) devuelve un objeto `session` que describe la sesión de usuario actual. Este objeto se maneja a través de las funciones y propiedades de la [clase `Session`](../API/SessionClass.md).

### Utilización

El objeto `session` permite obtener información sobre la sesión del usuario remoto. Puede compartir datos entre todos los procesos de la sesión del usuario utilizando el objeto compartido [`session.storage`](../API/SessionClass.md#storage).

Por ejemplo, puede iniciar un procedimiento de autenticación y verificación de usuario cuando un cliente se conecta al servidor, que involucra ingresar un código enviado por correo electrónico o SMS en la aplicación. A continuación, añada la información de usuario al almacenamiento de sesión, permitiendo al servidor identificar al usuario. De este modo, el servidor 4D puede acceder a la información del usuario para todos los procesos del cliente, lo que permite escribir código personalizado según el rol del usuario.

### Disponibilidad

El objeto `session` del usuario remoto está disponible en:

- Métodos proyecto que tienen el atributo [Ejecutar en el Servidor](../Project/code-overview.md#execute-on-server) (se ejecutan en el proceso "twinned" del proceso cliente),
- Triggers,
- ORDA [data model functions](../ORDA/ordaClasses.md) (except those declared with the [`local`](../ORDA/ordaClasses.md#local-functions) keyword,
- Los métodos base `On Server Open Connection` y `On Server Shutdown Connection` de la base de datos.

:::info

Todos los procedimientos almacenados en el servidor comparten la misma sesión de usuario virtual. Para más información, consulte [esta página en doc.4d.com](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html).

:::

### Ver también (entrada de blog)

[Objeto sesión remota 4D con conexión cliente/servidor y procedimiento almacenado](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).
