---
id: clientServer
title: Cliente/Servidor
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

La primera vez que se conecte a un proyecto 4D Server a través de un 4D remoto, normalmente utilizará la caja de diálogo de conexión estándar. Cada vez que 4D realiza una acción **Guardar todo** desde el entorno de diseño (explícitamente desde el menú **Archivo** o implícitamente al cambiar al modo aplicación, por ejemplo), 4D Server recarga sincronizadamente los archivos del proyecto.

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

> La opción [**Activar el modo desarrollo**](#development-mode) abre la conexión remota en un modo de lectura/escritura especial y requiere acceder a la carpeta del proyecto desde el 4D remoto.

Una vez que esta página asigna un servidor, al hacer clic en el botón **Aceptar** podrá conectarse al servidor.

Una vez establecida la conexión con el servidor, el proyecto remoto aparecerá en la pestaña **Recientes**.

### Actualización de los archivos del proyecto en el servidor

4D Server crea y envía automáticamente a las máquinas remotas una versión [.4dz](building.md#build-compiled-structure) del archivo proyecto *.4DProject* (no comprimido) en modo interpretado.

- Una versión .4dz actualizada del proyecto se produce automáticamente cuando es necesario, \*es decir, \*cuando el proyecto ha sido modificado y recargado por 4D Server. El proyecto se recarga:
  - automáticamente, cuando la ventana de la aplicación 4D Server pasa al frente del sistema operativo o cuando la aplicación 4D en la misma máquina guarda una modificación (ver abajo).
  - cuando el comando [`RELOAD PROJECT`](../commands/reload-project) es ejecutado. Llamar a este comando es necesario cuando, por ejemplo, se ha sacado una nueva versión del proyecto desde la plataforma de control de fuentes.

### Actualización de los archivos de proyecto en las máquinas remotas

Cuando se ha producido una versión .4dz actualizada del proyecto en 4D Server, las máquinas 4D remotas conectadas deben cerrar la sesión y volver a conectarse a 4D Server para poder beneficiarse de la versión actualizada.

### Modo desarrollo

El **modo Desarrollo** en el servidor 4D es un modo especial de apertura de proyectos que permite el acceso de lectura/escritura para aplicaciones 4D remotas conectadas. El proyecto debe estar disponible en [modo **interpretado**](../Concepts/interpreted.md).

Este modo permite que uno o varios desarrolladores trabajen simultáneamente en el mismo proyecto en el entorno Diseño. Cuando se abre un proyecto en **modo Desarrollo**:

- Los archivos de proyecto están disponibles en lectura/escritura para que pueda editar métodos, formularios, etc.
- Varios desarrolladores 4D remotos pueden abrir simultáneamente los mismos archivos del proyecto interpretado y editarlos. Un sistema de bloqueo automático impide el acceso simultáneo a un mismo recurso.
- Las modificaciones se ponen a disposición de todos los desarrolladores remotos. Tenga en cuenta, sin embargo, que no hay un envío automático a los desarrolladores remotos, sino que tienen que actualizar para obtener las últimas versiones de los archivos (se realiza una actualización cada vez que el desarrollador pasa del modo diseño al modo aplicación, por ejemplo, o selecciona **Guardar todo** en el menú **Archivo**).

Para utilizar este modo, seleccione la opción **Activar modo de desarrollo** en el [cuadro de diálogo de conexión](#opening-a-remote-project) desde su 4D remoto. Se le pedirá **Seleccionar el archivo de proyecto 4D**: debe seleccionar el [archivo.project](../Project/architecture.md#applicationname4dproject-file) que 4D Server ha abierto. Si selecciona un archivo diferente, un cuadro de diálogo de alerta le avisa de que el modo de desarrollo no está disponible. Esto significa que el 4D remoto debe tener acceso a la carpeta del proyecto a través de la red (toda la carpeta del proyecto debe ser compartida, es decir, la carpeta raíz del proyecto).

:::caution

Por razones de rendimiento con esta configuración, se recomienda encarecidamente que la carpeta del proyecto se almacene en un servidor de archivos dedicado (por ejemplo, un NAS) en una red local.

:::

:::note

Cuando tanto el servidor como el 4D remoto están en la misma máquina, [se aplican reglas adicionales](#using-4d-and-4d-server-on-the-same-machine).

:::

He aquí un resumen de la arquitectura del modo de desarrollo:

![](../assets/en/Desktop/develop-mode.png)

:::note Compatibilidad

Esta funcionalidad está diseñada para equipos de desarrollo de tamaño pequeño acostumbrados a trabajar con bases de datos binarias y que desean beneficiarse de las funciones del proyecto manteniendo su organización actual. Sin embargo, para el desarrollo multiusuario en proyectos 4D, recomendamos utilizar una arquitectura estándar en la que los desarrolladores trabajen en su máquina y gestionen su trabajo utilizando herramientas de repositorio de control de código fuente (Git, SVN, etc.). Esta organización ofrece una gran flexibilidad al permitir a los desarrolladores trabajar en distintas ramas y comparar, fusionar o revertir modificaciones.

:::

:::tip Entrada de blog relacionada

[Desarrollo simultáneo en 4D Server en modo proyecto](https://blog.4d.com/developing-concurrently-on-4d-server-in-project-mode/)

:::

## Utilizar 4D y 4D Server en la misma máquina

Cuando 4D se conecta a un 4D Server en la misma máquina, la aplicación se comporta como 4D en modo monopuesto y el entorno de diseño le permite editar los archivos del proyecto. Esta funcionalidad le permite desarrollar una aplicación cliente/servidor en el mismo contexto de despliegue.

> Cuando 4D se conecta a un 4D Server en la misma máquina, el **modo desarrollo** se activa automáticamente, sea cual sea el estado del [modo Desarrollo](#development-mode).

Cada vez que 4D realiza una acción **Guardar todo** desde el entorno de diseño (explícitamente desde el menú **Archivo** o implícitamente al cambiar al modo aplicación, por ejemplo), 4D Server recarga sincronizadamente los archivos del proyecto. 4D espera a que 4D Server termine de recargar los archivos del proyecto antes de continuar.

Sin embargo, debe prestar atención a las siguientes diferencias de comportamiento en comparación con [la arquitectura proyecto estándar](Project/architecture.md):

- la carpeta userPreferences.\{username\} utilizada por 4D no es la misma carpeta utilizada por 4D Server en la carpeta proyecto. la carpeta userPreferences.\{username\} utilizada por 4D no es la misma carpeta utilizada por 4D Server en la carpeta proyecto.
- la carpeta utilizada por 4D para los datos derivados no es la carpeta llamada "DerivedData" en la carpeta proyecto. En su lugar, se trata de una carpeta dedicada llamada "DerivedDataRemote" situada en la carpeta del sistema del proyecto.
- el archivo catalog.4DCatalog no es editado por 4D sino por 4D Server. La información del catálogo se sincroniza mediante peticiones cliente/servidor
- el archivo directory.json no es editado por 4D sino por 4D Server. La información del directorio se sincroniza mediante peticiones cliente/servidor
- 4D utiliza sus propios componentes internos y plug-ins en lugar de los de 4D Server.

> No se recomienda instalar plug-ins o componentes a nivel de la aplicación 4D o 4D Server.

## Desarrollo cliente/servidor

### Lugar de ejecución del código

En una aplicación cliente-servidor, es importante saber dónde se ejecutará realmente el código: **del lado del servidor** o **del lado del cliente**. La ubicación de la ejecución es crucial cuando se desea implementar código relacionado con la sesión del usuario, compartir información entre procesos, acceder a datos, etc.

La siguiente tabla resume dónde se ejecuta el código por defecto y cómo cambiar su ubicación de ejecución (si está permitido). Tenga en cuenta que **local** significa que el código será ejecutado en la máquina desde donde es realmente llamado.

| Code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ejecución por defecto | Cómo cambiar                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Funciones del modelo de datos ORDA](../ORDA/ordaClasses.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | server                | utilizar la palabra clave `local` en la definición de la función                                                                                                                                                                             |
| Funciones de atributo calculadas ORDA [`get()`](../ORDA/ordaClasses.md#function-get-attributename), [`set()`](../ORDA/ordaClasses.md#function-set-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | server                | utilizar la palabra clave `local` en la definición de la función                                                                                                                                                                             |
| Funciones de atributo calculadas ORDA [`query()`](../ORDA/ordaClasses.md#function-query-attributename), [`orderBy()`](../ORDA/ordaClasses.md#function-orderby-attributename)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | server                | n/a                                                                                                                                                                                                                                          |
| Funciones del evento ORDA [(general)](../ORDA/orda-events.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | server                | n/a                                                                                                                                                                                                                                          |
| Función del evento ORDA [`constructor()`](../ORDA/ordaClasses.md#class-constructor-1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | local                 | n/a                                                                                                                                                                                                                                          |
| Función de evento ORDA [`event touched()`](../ORDA/orda-events.md#function-event-touched)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | server                | utilizar la palabra clave `local` en la definición de la función                                                                                                                                                                             |
| [Funciones de clase usuario](../Concepts/classes.md#function)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | local                 | n/a                                                                                                                                                                                                                                          |
| [Función singleton compartida o de sesión](../Concepts/classes.md#singleton-classes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | local                 | utilizar la palabra clave `server` en la definición de la función                                                                                                                                                                            |
| [Trigger](#triggers)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | server                | n/a                                                                                                                                                                                                                                          |
| Método proyecto llamado desde un cliente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | client                | marcar la opción [**Ejecutar en el servidor**](../Project/project-method-properties.md#execute-on-server). El código se ejecuta en el proceso gemelo del [proceso de sesión del usuario](./sessions.md#remote-user-sessions) |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                       | llamar al comando [`Execute on server`](../commands/execute-on-server). El código se ejecuta en la [sesión de procedimientos almacenados](./sessions.md#stored-procedure-sessions)                                           |
| Método proyecto llamado desde un [procedimiento almacenado](#stored-procedures) en el servidor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | server                | llame al comando [`EXECUTE ON CLIENT`](../commands/execute-on-client). El cliente destinatario debe estar [registrado](../commands/register-client)                                                                          |
| Método objeto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | local                 | n/a                                                                                                                                                                                                                                          |
| Métodos base de datos:<ul><li>[On Backup Shutdown](../commands-legacy/on-backup-shutdown-database-method.md)</li><li>[On Backup Startup](../commands-legacy/on-backup-startup-database-method.md)</li><li>[On Server Close Connection](../commands-legacy/on-server-close-connection-database-method.md)</li><li>[On Server Open Connection](../commands-legacy/on-server-open-connection-database-method.md)</li><li>[On Server Shutdown](../commands-legacy/on-server-shutdown-database-method.md)</li><li>[On Server Startup](../commands-legacy/on-server-startup-database-method.md)</li><li>[On SQL Authentication](../commands-legacy/on-sql-authentication-database-method.md)</li><li>[On Web Authentication](../commands-legacy/on-web-authentication-database-method.md)</li><li>[On Web Connection](../commands-legacy/on-web-connection-database-method.md)</li></ul> | server                | n/a                                                                                                                                                                                                                                          |
| Métodos base de datos:<ul><li>[On Startup](../commands-legacy/on-startup-database-method.md)</li><li>[On Exit](../commands-legacy/on-exit-database-method.md)</li><li>[On Drop](../commands-legacy/on-drop-database-method.md)</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | client                | n/a                                                                                                                                                                                                                                          |

### Triggers

Los [triggers](../Develop/triggers) se ejecutan en la máquina donde está el motor de la base de datos. Con 4D Server, los triggers se ejecutan en el contexto de los procesos en ejecución en la máquina servidor, y no en la máquina cliente. Más específicamente, se ejecutan en el contexto de los procesos gemelos de los procesos de usuario que llaman a la operación de base de datos. Estos procesos gemelos comparten el contexto de la base de datos con el proceso de usuario en la máquina cliente (en particular, el estado de las transacciones y el bloqueo de registros), pero no comparten el contexto del lenguaje (variables, procesos, conjuntos, selecciones actuales). Sin embargo, note que el registro actual de la tabla asociada al trigger es el mismo en todos los contextos.

:::note

En el servidor, un trigger se ejecuta en el proceso responsable de la acción asociada (crear/actualizar/eliminar). Si la acción se activó desde un [proceso preventivo en el servidor](../Develop/preemptive.md) (por ejemplo, un procedimiento almacenado, una solicitud HTTP en modo de sesión escalable), entonces el trigger se ejecutará en el mismo proceso preventivo. Pero si la acción se activó desde un 4D remoto, el trigger se ejecutará en el proceso gemelo, el cual está siempre en modo cooperativo (un proceso gemelo se comparte para todas las llamadas de un usuario).

:::

### Procedimientos almacenados

Un procedimiento almacenado en 4D es un método de proyecto que lanza un método proceso en un proceso que se ejecuta en la máquina del servidor (o en cualquier máquina cliente registrada), en lugar de en la máquina cliente que ha iniciado el método.

Con 4D en modo local, cuando utiliza un comando, como [`New process`](../commands/new-process), puede iniciar un proceso de usuario para ejecutar un método. Este método se llama [método proceso](../Project/project-method-properties.md#process-methods). Puede hacer lo mismo con 4D Server, en una máquina cliente. Además, con el comando [`Execute on server`](../commands/execute-on-server) puede iniciar un proceso de usuario en la máquina servidor para ejecutar un método. Además, al usar el comando [`EXECUTE ON CLIENT`](../commands/execute-on-client), puede ejecutar un método en otro proceso en un cliente diferente. En ambos casos, el método se llama **procedimiento almacenado**, y (por analogía) el proceso iniciado en la máquina servidor u otro cliente también se llama procedimiento almacenado.

:::note

Todos los procedimientos almacenados en el servidor [comparten la misma sesión de usuario virtual](./sessions.md#stored-procedure-sessions).

:::

#### Arquitectura

Como un proceso regular, un procedimiento almacenado tiene su propio entorno:

- Una selección actual por tabla: cada procedimiento almacenado tiene una selección actual separada. Una tabla puede tener una selección actual diferente en diferentes procedimientos almacenados.
- Un registro actual por tabla: cada tabla puede tener un registro actual diferente en cada procedimiento almacenado.
- Variables: cada procedimiento almacenado tiene sus propias variables proceso. Las variables de proceso solo se reconocen dentro del dominio de su procedimiento almacenado nativo.
- Tabla por defecto: cada procedimiento almacenado tiene su propia tabla por defecto.
- Conjuntos de proceso: cada procedimiento almacenado tiene sus propios conjuntos de proceso.
- On Error Call: cada procedimiento almacenado tiene su propio método de gestión de errores.
- Ventana de depuración: cada procedimiento almacenado puede tener su propia ventana de depuración.

En términos de interfaz de usuario, un procedimiento almacenado puede abrir ventanas y mostrar datos (por ejemplo, [`DISPLAY RECORD`](../commands/display-records)). Un procedimiento almacenado ejecutado en una máquina cliente 4D permite la entrada de datos. Por otro lado, un procedimiento almacenado ejecutado en el servidor no puede invocar la interfaz de entrada de datos, ya que no existe un motor de entrada de datos en la máquina servidor.

Puede iniciar tantos procedimientos almacenados como permitan el hardware y la memoria del sistema. De hecho, la máquina servidor 4D debe verse como un equipo que no solo responde a clientes 4D y navegadores web, sino que también ejecuta procesos que interactúan con otros procesos en ejecución en el servidor y en máquinas 4D remotas.

:::note

La propiedad de método [**Ejecutar en el servidor**](../Project/project-method-properties.md#execute-on-server) también se puede usar para ejecutar un método en un proceso en el servidor, pero en este caso el método utiliza el proceso gemelo del proceso cliente, lo que significa, en particular, que puede aprovechar el entorno de dicho proceso cliente. En este caso, no se trata de un procedimiento almacenado 4D.

:::

#### ¿Qué hace un procedimiento almacenado?

A excepción de la entrada de datos para procedimientos almacenados ejecutados en el servidor, casi todas las capacidades de los procesos y del lenguaje 4D se aplican a los procedimientos almacenados.

Un procedimiento almacenado puede añadir, consultar, ordenar, actualizar o eliminar datos. Un procedimiento almacenado puede acceder a documentos en disco, trabajar con BLOBs, imprimir registros, entre otras funciones. Considere que, en lugar de realizar algo en una máquina 4D local, lo está haciendo en la máquina servidor o en una o varias máquinas cliente 4D.

Una ventaja evidente de los procedimientos almacenados ejecutados en el servidor es que se ejecutan localmente en la máquina servidor, la máquina donde se encuentra el motor de la base de datos. Por ejemplo, un comando [`APPLY TO SELECTION`](../commands/apply-to-selection) no resulta eficiente a través de la red, pero sí lo es cuando se ejecuta desde un procedimiento almacenado.

Los procedimientos almacenados ejecutados en una o varias máquinas cliente permiten optimizar la distribución de tareas y la comunicación entre los distintos clientes. Refer to the command [`REGISTER CLIENT`](../commands/register-client) for an example of a stored procedures executed on several clients.

However, the most important advantage of the stored procedure architecture is the additional dimension it gives to 4D Server. Using stored procedures, you can implement your own custom 4D Server services. The only limit is your imagination.

#### What a stored procedure does not do?

Generally speaking, stored procedures executed on the server should not deal with interface items (such as menus, windows, forms...). Indeed the interface is not managed on the server's side.

All commands that are likely to generate modal dialog boxes on the server machine (e.g. [`Open document`](../commands/open-document) with an empty string as first parameter) should be avoided. Keep in mind that there isn't always a user in front of a server screen, and the display of a modal dialog box requiring a user action can lead to the application being blocked for some time.

#### Forbidden commands on the server

Here is the list of the commands that should NOT be used within stored procedures executed on the server. If one of the following commands is used within a stored procedure, an alert will be displayed indicating that this command cannot be executed on 4D Server. The error #67 is returned; it can be intercepted through a method installed in the [`ON ERR CALL`](../commands/on-err-call) command.

[`ADD RECORD`](../commands/add-record)
[`APPEND MENU ITEM`](../commands/append-menu-item)
[`POST OUTSIDE CALL`](../commands/post-outside-call)
[`CHANGE LICENSES`](../commands/change-licenses)
[`Count menu items`](../commands/count-menu-items)
[`Count menus`](../commands/count-menus)
[`DELETE MENU ITEM`](../commands/delete-menu-item)
[`DISABLE MENU ITEM`](../commands/disable-menu-item)
[`DISPLAY SELECTION`](../commands/display-selection)
[`EDIT ACCESS`](../commands/edit-access)
[`ENABLE MENU ITEM`](../commands/enable-menu-item)
[`FILTER EVENT`](../commands/filter-event)
[`Get menu item`](../commands/get-menu-item)
[`Get menu item key`](../commands/get-menu-item-key)
[`Get menu item mark`](../commands/get-menu-item-mark)
[`Get menu item style`](../commands/get-menu-item-style)
[`Get menu title`](../commands/get-menu-title)
[`SET PICTURE TO LIBRARY`](../commands/set-picture-to-library)
[`INSERT MENU ITEM`](../commands/insert-menu-item)
[`Menu selected`](../commands/menu-selected)
[`MODIFY RECORD`](../commands/modify-record)
[`MODIFY SELECTION`](../commands/modify-selection)
[`ON EVENT CALL`](../commands/on-event-call)
[`QUERY BY EXAMPLE`](../commands/query-by-example)
[`QR REPORT`](../commands/qr-report)
[`REMOVE PICTURE FROM LIBRARY`](../commands/remove-picture-from-library)
[`SET MENU ITEM`](../commands/set-menu-item)
[`SET MENU ITEM SHORTCUT`](../commands/set-menu-item-shortcut)
[`SET MENU ITEM MARK`](../commands/set-menu-item-mark)
[`SET MENU ITEM STYLE`](../commands/set-menu-item-style)
[`SET PICTURE TO LIBRARY`](../commands/set-picture-to-library)
[`SET USER ALIAS`](../commands/set-user-alias)
[`SHOW MENU BAR`](../commands/show-menu-bar)

Commands with no effect on the server
The following commands have no effect when they are executed within a stored procedure on the server. No specific error code is returned.

[`GRAPH`](../commands/graph)
[`MESSAGES OFF`](../commands/messages-off)
[`MESSAGES ON`](../commands/messages-on)
[`SET MENU BAR`](../commands/set-menu-bar)
[`SHOW TOOL BAR`](../commands/show-tool-bar)

#### How to Start a Stored Procedure

From 4D, you can manually start a stored procedure in the **Execute Method** dialog box:

![](../assets/en/Desktop/execute-method.png)

You can execute it on 4D Server or on another 4D client machine. Note that to display the 4D client machines in this list, they should have been first [registered](#stored-procedures-on-client-machines).

- Also on 4D, you can programmatically start a stored procedure using the commands [`Execute on server`](../commands/execute-on-server) or [`EXECUTE ON CLIENT`](../commands/execute-on-client).
- A method executed on 4D Server (database method, method with the **Execute on Server** attribute or stored procedure) can start a stored procedure using [`Execute on server`](../commands/execute-on-server), [`New process`](../commands/new-process), or [`EXECUTE ON CLIENT`](../commands/execute-on-client).

:::note

It is not possible to use the process management commands [`DELAY PROCESS`](../commands/delay-process), [`PAUSE PROCESS`](../commands/pause-process) and [`RESUME PROCESS`](../commands/resume-process) from a remote 4D with stored procedures on the server.

:::

#### Communication Between Stored Procedures and User Processes

Stored procedures can communicate between themselves using:

- the [`session.storage`](../API/SessionClass.md#storage) shared object of the [Stored Procedures Session](../Desktop/sessions.md#stored-procedure-sessions)
- local or global [semaphores](../Develop/processes.md#semaphores)
- records
- commands [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) and [`VARIABLE TO VARIABLE`](../commands/variable-to-variable)
- (*deprecated*) interprocess variables, interprocess sets and interprocess named selections

Keep in mind that the 4D commands act within the scope of the server machine which is executing the stored procedure (server or clients) in the same way as they act in the scope of a client machine.

:::note

The [`POST OUTSIDE CALL`](../commands/post-outside-call) and [`Outside call`](../commands/outside-call) mechanism has no meaning on the server machine, because stored procedures do not have a user interface with data entry.

:::

Client user processes (processes running on a client machine) can read and write the process variables (\*) of a stored procedure, using the commands [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) and [`VARIABLE TO VARIABLE`](../commands/variable-to-variable).

(\*) as well as the server machine interprocess variable.

Important: "Intermachine" process communication, provided by the commands [`GET PROCESS VARIABLE`](../commands/get-process-variable), [`SET PROCESS VARIABLE`](../commands/set-process-variable) and [`VARIABLE TO VARIABLE`](../commands/variable-to-variable), is possible from client to server only. It is always a client process that reads or write the variables of a stored procedure.

#### Stored procedures on client machines

Stored procedures can be executed on one or several 4D client machines. Stored procedures on client machines are executed the same as way as stored procedures on the server, except that on the client they can invoke data entry with legacy commands such as [`ADD RECORD`](../commands/add-record).

Any client machine executing stored procedures triggered by a server or another client machine, should explicitly be registered for this session. There are two ways to register a client: it can automatically be registered when connecting or through programming.

- Registering automatically each 4D client machine connecting to 4D Server: check the [**Register Clients at Startup For Execute On Client**](../settings/client-server.md#register-clients-at-startup-for-execute-on-client) box in the Settings dialog box. When this option is checked, each 4D client machine connecting to the application is automatically referenced with 4D Server as being able to execute stored procedures. A 4D Client type process named according to the client machine is created on the server. An equivalent process is also created on each client machine.
- Registering 4D Client through programming: you can register one or several client machines using programming, allowing you to select the client machines that needs to be registered and to define their registration name. Use the [`REGISTER CLIENT`](../commands/register-client) command which allows you to register a client machine under any name.
- Unregistering 4D Client: No matter how the client machines have been registered, you can unregister them for the current session using the [`UNREGISTER CLIENT`](../commands/unregister-cient) command for a given client. The registration process (named according to the client) disappears from the user process group on the server machine as well as on the client.

You can get the list and the task distribution (number of methods still to be executed) for the clients registered for a given session using the [`GET REGISTERED CLIENTS`](../commands/get-registered-clients) command.

### Variables

Like all processes, each stored procedure, database method and trigger has its own table of process variables. These process variables can be created and used dynamically during each phase of execution.

4D Server maintains one table of [interprocess variables](../Concepts/variables.md#interprocess-variables) (*deprecated*). The scope of these variables is the server machine. When running a compiled database, the interprocess variable table definition is common between the server and all the clients machines, each machine having its own instance.

### Sets and Named Selections

- Process sets/named selections: A process object can only be accessed by the process in which it has been created and, if it has been created in a client process, by the "twinned" process created on the server. Los conjuntos proceso se borran en cuanto termina el método proceso. Process objects do not need any special prefix in the name.
- Interprocess sets/named selections (*deprecated*): An interprocess object is visible for all the processes on the machine (client or server) where it was created. A set or named selection is an interprocess object if the name of the set is preceded by the symbols (\<>) — a “less than” sign followed by a “greater than” sign.
- Local/Client sets/named selections: A local/client object is only visible in the process where it was created. The name of a local/client object is preceded by the dollar sign ($).
  Note: Although its name does not begin with a `$`, the `UserSet` system set is a local/client set.

The following table indicates the principles concerning the visibility of named selections and sets according to where they are created (the table is identical for both types of objects):

|                                 | Client Process | Other client processes | Server process                 | Other server processes |
| ------------------------------- | -------------- | ---------------------- | ------------------------------ | ---------------------- |
| **Created in a client process** |                |                        |                                |                        |
| `$test`                         | x              |                        |                                |                        |
| `test`                          | x              |                        | x (Trigger) |                        |
| `<>test`                        | x              | x                      |                                |                        |
| **Created in a server process** |                |                        |                                |                        |
| `$test`                         |                |                        | x                              |                        |
| `test`                          |                |                        | x                              |                        |
| `<>test`                        |                |                        | x                              | x                      |

x = visible

You need to keep this visibility matrix in mind depending on the operations you want to perform. For example, if you want to do a [`DIFFERENCE`](../commands/difference), [`INTERSECTION`](../commands/intersection) or [`UNION`](../commands/union) type operation, make sure that all the sets are visible on the machine that is carrying out the operation.

### Execute on Server attribute

The **Execute on Server** project method attribute can be set using the batch setting of attributes dialog box as well as the [Method Properties dialog box](../Project/project-method-properties.md#execute-on-server). Cuando esta opción está marcada, el método del proyecto se ejecuta siempre en el servidor, independientemente de cómo se llame.

#### Execution Context

When this attribute is checked, the execution context of the project method is comparable to that of [triggers](#triggers): the method on the server shares the same database context as the corresponding context on the client side for locking records and for transactions, but not the same language context (process variables, sets, current selections). However, unlike a trigger, a method executed on the server does not share the current record with the client context.
All the [parameters of the method](../Concepts/parameters.md) are sent to the server and the return value, if any, is returned to the client.

Unlike the [`Execute on server`](../commands/execute-on-server) command, this option does not create a process on the server. 4D Server uses the "twin" process of the client process that requested the execution. Moreover, this option simplifies the principle of delegating the execution of a method on the server since the transfer of parameters is automatically carried out in both directions, as with a "normal" method call. The [`Execute on server`](../commands/execute-on-server) command functions asynchronously, therefore it requires more programming and makes use of [semaphores](../Develop/processes.md#semaphores) for reading the results.

#### Usable Commands

Methods with "Execute on Server" attribute are subject to the same rules as the [stored procedures](#stored-procedures) as far as the use of 4D language commands is concerned.

#### Punteros

If you pass a pointer to a variable (simple variable, array or array element), the pointed value is also sent to the server. If the pointed value is modified on the server by the method, the modified value is returned to the client in order to update the corresponding variable on the client side.
Pointers to a table or field are sent as references (table number, field number). The current record value is not automatically exchanged.

:::note

This option works the same way in [interpreted mode as in compiled mode](../Concepts/interpreted.md).

:::

#### Ejemplo

Here is the code for the *MyAppli* project method which has the "Execute on Server" attribute:

```4d
 #DECLARE($table: Pointer; $field: Pointer; $array: Pointer; $search: Text) -> $result : Integer
 
  //Search and send back values for each record
 QUERY($table->;$field->=$search)
 While(Not(End selection($table->)))
    APPEND TO ARRAY($array->;myFormula($table))
    NEXT RECORD($table->)
 End while
 UNLOAD RECORD($table->)
 $result:=Records in selection($table->)
```

On the client side, the method is called as follows:

```4d
 ARRAY TEXT(myArray;0)
 var $vlnum:=MyAppli(->[Table_1] ;->[Table_1]Field_1 ;->myArray;"to find")
```

## Carpeta Resources

The [**Resources** folder](../Project/architecture.md#resources) of a project can be used to share custom data (pictures, files, subfolders, etc.) between the server machine and all the client machines. On the server machine, the **Resources** folder is simply be located at the first level of the [project root folder](../Project/architecture.md).

All referencing mechanisms associated with the **Resources** folder are supported in client/server mode (.lproj folder, XLIFF, pictures and so on).

Each client has a local copy of this folder. The contents of the local folder are automatically synchronized with that of the server each time the client connects.

Moreover, client machines can be dynamically "notified" during a session when the contents of the **Resources** folder of the server application are modified by a developer. This notification can be triggered:

- either automatically by the server, two minutes after the last modification made by a client (this delay helps to avoid inopportune notification in the case where numerous files are being copied).
- or manually via the **Notify clients** command in the action menu of the [**Resources explorer**][Using the Resources explorer](https://doc.4d.com/4Dv20/4D/20.2/Using-the-Resources-explorer.300-6750254.en.html) on the Toolbox of the client machine at the origin of the modification.
- or by programming, via a [`NOTIFY RESOURCES FOLDER MODIFICATION`](../commands/notify-resources-folder-notification) command. This command is useful when the contents of the **Resources** folder are modified on the server machine via a stored procedure.

On the client side, the way the notification of any modifications will be handled depending on the [**Update "Resources" folder during a session**](../settings/client-server.md#update-resources-folder-during-a-session) setting value. This can also be set individually via the [`Auto synchro resources folder` selector of the `SET DATABASE PARAMETER`](../commands/set-database-parameter#auto-synchro-resources-folder-48) command. Three choices are available: **no synchronization**, **auto synchronization** or **ask**. For more information, please refer to the [**Network and Client-Server options** section](../settings/client-server.md#update-resources-folder-during-a-session).

Lastly, each client machine can synchronize itself with the server at any time via the **Update Local Resources** command in the action menu of the [Resources explorer](https://doc.4d.com/4Dv20/4D/20.2/Resources-explorer.200-6750091.en.html).