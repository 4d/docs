---
id: clientServer
title: Gestão Cliente/Servidor
---

As aplicações 4D desktop podem ser utilizadas numa configuração Cliente/Servidor, quer como aplicações cliente/servidor fundidas, quer como projectos remotos.

- Las **aplicaciones cliente/servidor fusionadas** son generadas por el [gestor de creación de aplicaciones](building.md#clientserver-page). São utilizados para implementações de aplicações.

- Los **proyectos remotos** son archivos [.4DProject](Project/architecture.md) abiertos por 4D Server y a los que se accede con 4D en modo remoto. El servidor envía una versión .4dz del proyecto ([formato comprimido](building.md#build-compiled-structure)) al 4D remoto, por lo que los archivos de estructura son de sólo lectura. Esta configuração é normalmente utilizada para testar aplicações.

![](../assets/en/getStart/localremote.png)

> La conexión a un proyecto remoto desde **la misma máquina que 4D Server** permite modificar los archivos del proyecto. Esta [funcionalidad específica](#using-4d-and-4d-server-on-the-same-machine) permite desarrollar una aplicación cliente/servidor en el mismo contexto del despliegue.

## Abrir uma aplicação cliente/servidor fundida

A merged client/server application is customized and its starting is simplified:

- Para iniciar a parte do servidor, o usuário simplesmente clica duas vezes no aplicativo do servidor. The database does not need to be selected.
- Para iniciar a parte do cliente, o usuário simplesmente clica duas vezes no aplicativo cliente, que se conecta diretamente ao aplicativo do servidor.

Estos principios se detallan en la página [Creación de aplicaciones](building.md#what-is-a-clientserver-application).

## Abrir um projecto remoto

A primeira vez que se liga a um projecto 4D Server através de um 4D remoto, normalmente utilizará o diálogo de ligação padrão. Luego, podrá conectarse directamente utilizando el menú **Abrir proyectos recientes** o un archivo de acceso directo 4DLink.

Para conectar remotamente a um projeto 4D Server:

1. Faça uma das seguintes opções:
   - Seleccione **Conectar a 4D Server** en la caja de diálogo del asistente de bienvenida
   - Seleccione **Abrir/Proyecto remoto...** desde el menú **Archivo** o del botón**Abrir** de la barra de herramientas.

Aparece o diálogo de ligação do 4D Server. Este diálogo tiene tres pestañas: **Reciente**, **Disponible** y **Personalizado**.

Si 4D Server está conectado a la misma subred que el 4D remoto, seleccione **Disponible**. 4D Server includes a built-in broadcasting system that, by default, publishes the name of the 4D Server projects available over the network. A lista é classificada por ordem de aparecimento e atualizada dinamicamente.

![](../assets/en/getStart/serverConnect.png)

Para conectarse a un servidor de la lista, haga doble clic en su nombre o selecciónelo y presione el botón **Aceptar**.

Si el proyecto publicado no aparece en la lista **Disponible**, seleccione **Personalizado**. The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name.

![](../assets/en/Desktop/serverConnect2.png)

- **Nombre del proyecto**: define el nombre local del proyecto 4D Server. Este nombre se utilizará en la página **Reciente** cuando se haga referencia al proyecto.
- **Dirección red**: la dirección IP de la máquina donde se lanzó el 4D Server.
  - Si dos servidores se ejecutan simultáneamente en la misma máquina, la dirección IP debe ir seguida de dos puntos y del número de puerto, por ejemplo: `192.168.92.104:19814`.
  - Por padrão, a porta de publicação de um 4D Server é 19813. Este número pode ser modificado nas definições do Projecto.

> La opción **Activar modo desarrollo** abre la conexión remota en un modo especial de lectura/escritura y requiere acceder a la carpeta del proyecto desde el 4D remoto (opción de compatibilidad).

Una vez que esta página asigna un servidor, al hacer clic en el botón **Aceptar** podrá conectarse al servidor.

Una vez establecida la conexión con el servidor, el proyecto remoto aparecerá en la pestaña **Recientes**.

### Atualizar ficheiros de projeto no servidor

4D Server crea y envía automáticamente a las máquinas remotas una versión [.4dz](building.md#build-compiled-structure) del archivo proyecto _.4DProject_ (no comprimido) en modo interpretado.

- Una versión .4dz actualizada del proyecto se produce automáticamente cuando es necesario, \*es decir, \*cuando el proyecto ha sido modificado y recargado por 4D Server. O projecto é recarregado:
  - automatically, when the 4D Server application window comes to the front of the OS or when the 4D application on the same machine saves a modification (see below).
  - cuando se ejecuta el comando `RELOAD PROJECT`. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform.

### Atualizar ficheiros de projeto em máquinas remotas

When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version.

## Utilização de 4D e 4D Server na mesma máquina

When 4D connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. This feature allows you to develop a client/server application in the same context as the deployment context.

> Cuando 4D se conecta a un 4D Server en la misma máquina, el **modo desarrollo** se activa automáticamente, sea cual sea el estado de la [opción de apertura](#opening-a-remote-project).

Cada vez que 4D realiza una acción **Guardar todo** desde el entorno de diseño (explícitamente desde el menú **Archivo** o implícitamente al cambiar al modo aplicación, por ejemplo), 4D Server recarga sincronizadamente los archivos del proyecto. 4D waits for 4D Server to finish reloading the project files before it continues.

Sin embargo, debe prestar atención a las siguientes diferencias de comportamiento en comparación con [la arquitectura proyecto estándar](Project/architecture.md):

- the userPreferences.\{username\} folder used by 4D is not the same folder used by 4D Server in the project folder. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).
- the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.
- o ficheiro catalog.4DCatalog não é editado por 4D, mas pelo 4D Server. As informações do catálogo são sincronizadas através de pedidos cliente/servidor
- o ficheiro directory.json não é editado por 4D, mas pelo 4D Server. As informações do diretório são sincronizadas através de pedidos cliente/servidor
- 4D utiliza os seus próprios componentes internos e plug-ins em vez dos do 4D Server.

> Não é recomendado instalar plug-ins ou componentes no nível da aplicação 4D, ou 4D Server.

## Sessões de usuário remoto

On the server, the [`Session`](../API/SessionClass.md#session) command returns a `session` object describing the current user session. This object is handled through the functions and properties of the [`Session` class](../API/SessionClass.md).

### Utilização

The `session` object allows you to get information about the remote user session. You can share data between all processes of the user session using the [`session.storage`](../API/SessionClass.md#storage) shared object.

For example, you can launch a user authentication and verification procedure when a client connects to the server, involving entering a code sent by e-mail or SMS into the application. You then add the user information to the session storage, enabling the server to identify the user. This way, the 4D server can access user information for all client processes, enabling customized code to be written according to the user's role.

### Disponibilidade

El objeto `session` del usuario remoto está disponible en:

- Project methods that have the [Execute on Server](../Project/code-overview.md#execute-on-server) attribute (they are executed in the "twinned" process of the client process),
- Triggers,
- `On Server Open Connection` and `On Server Shutdown Connection` database methods.

:::info

All stored procedures on the server share the same virtual user session. Para más información, consulte [esta página en doc.4d.com](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html).

:::

### Ver também (post do blog)

[4D remote session object with Client/Server connection and Stored procedure](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).
