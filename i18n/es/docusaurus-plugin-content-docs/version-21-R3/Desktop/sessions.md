---
id: desktop-sessions
title: Sesiones de escritorio
---

## Generalidades

A desktop session is a user-related execution context on 4D Server, 4D remote, or 4D single-user that **does not result from any web or REST access**.

Las sesiones de escritorio incluyen:

- **Remote user sessions**: In client/server applications, remote users have their own sessions, managed from the client and from the server.
- **Sesiones de procedimientos almacenados**: en aplicaciones cliente/servidor, la única sesión virtual de usuario que gestiona todos los procedimientos almacenados ejecutados en el servidor.
- **Sesiones autónomas**: objeto de sesión local devuelto en una aplicación mono usuario (útil en las fases de desarrollo y de prueba de las aplicaciones cliente/servidor).

El siguiente diagrama muestra los diferentes tipos de sesión y cómo interactúan:

![](../assets/en/Desktop/sessions.png)

Al igual que en una [**sesión de usuario web**](../WebServer/sessions.md), el código ejecutado en una sesión de escritorio tiene acceso a un objeto [`Session`](../API/SessionClass.md) que proporciona funciones y propiedades que permiten almacenar valores de sesión y compartirlos entre procesos de usuario, por ejemplo utilizando el objeto [`session.storage`](../API/SessionClass.md#storage).

Sin embargo, a diferencia del código ejecutado en las sesiones de usuario web, el código ejecutado en las sesiones de escritorio no está controlado por [roles y privilegios](../ORDA/privileges.md). It can access any parts of the 4D application, including ORDA and data model classes (on 4D Server, [users and groups feature](../Users/handling_users_groups.md) can manage user accesses). Tenga en cuenta también que las sesiones de escritorio no requieren [sesiones escalables](../WebServer/sessions.md#enabling-web-sessions) para ser activadas.

You can nevertheless [**share** a remote session with a web session](#sharing-a-remote-session-for-web-accesses) so that desktop application users can access your 4D application through a web interface, using in particular **Qodly pages** and Web areas.

## Sesiones de usuarios remotos {#remote-user-sessions}

In client/server applications, when a user connects to the server, a **remote user session object** is created and available on both the server and the client. Es devuelto por el comando [`Session`](../commands/session) en ambas máquinas.

Este objeto se maneja a través de las funciones y propiedades de la [clase `Session`](../API/SessionClass.md).

### Comparación de objetos de sesión de usuario del lado del servidor y del lado del cliente {#comparing-server-side-and-client-side-user-session-objects}

Dependiendo de dónde se ejecute el código, se dispondrá de un objeto `session` de usuario del lado del servidor o del lado del cliente. Ambos objetos son similares, excepto que:

- sus propiedades [`.storage`](../API/SessionClass.md#storage) no son el mismo objeto. A value stored in the `.storage` of the user session on the server will not be available in the `.storage` of the user session on the client and conversely.
- for security reasons, the client-side session cannot execute functions that **modify** [privileges](../ORDA/privileges.md) ([`setPrivileges()`](../API/SessionClass.md#setprivileges), [`clearPrivileges()`](../API/SessionClass.md#clearprivileges), [`promote()`](../API/SessionClass.md#promote), [`demote()`](../API/SessionClass.md#demote), [`restore()`](../API/SessionClass.md#restore)). Llamar a estas funciones en un cliente genera un error.

:::note

Functions that read privileges can be called on both client and server sides ([`getPrivileges()`](../API/SessionClass.md#getprivileges), [`hasPrivilege()`](../API/SessionClass.md#hasprivilege), [`isGuest()`](../API/SessionClass.md#isguest))

:::

### Utilización

El objeto `session` del usuario remoto se utiliza para gestionar y compartir los datos de la sesión.

Within each environment, a [session `storage`](../API/SessionClass.md#storage) object is shared across all processes of the same user session. For example on the server, you can launch a user authentication and verification procedure when a client connects to the server, involving entering a code sent by e-mail or SMS into the application. A continuación, añada la información de usuario al almacenamiento de sesión, permitiendo al servidor identificar al usuario. De este modo, el servidor 4D puede acceder a la información del usuario para todos los procesos del cliente, lo que permite escribir código personalizado según el rol del usuario.

Within each environment, you can use the remote user `session` object to [create an OTP](../API/SessionClass.md#createotp) and [share the remote session for web accesses](#sharing-a-remote-session-for-web-accesses).

On the server, you can also [assign privileges](../API/SessionClass.md#setprivileges) to a remote user session to control access when the session comes from [Qodly pages running in web areas](#sharing-a-remote-session-for-web-accesses).

:::note

Del lado del cliente, existen dos objetos de almacenamiento local distintos:

- el objeto [`Storage`](../commands/storage) de la máquina cliente,
- the [`session.storage`](../API/SessionClass.md#storage) object of the user remote session (also returned by the [`Session storage`](../commands/session-storage) command).

:::

:::tip Entradas de blog relacionadas

- [Objeto sesión remota 4D con conexión cliente/servidor y procedimiento almacenado](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).
- [Forget server-side wrappers, use 4D Sessions from the client](https://blog.4d.com/forget-server-side-wrappers-use-4d-sessions-from-the-client).

:::

### Compartir una sesión remota para los accesos web {#sharing-a-remote-session-for-web-accesses}

Remote user sessions can be used to handle web accesses to the application by the same user and thus, manage their [privileges](../ORDA/privileges.md). Esta posibilidad es especialmente útil para aplicaciones Cliente/Servidor en las que se utilizan [páginas Qodly](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) para la interfaz, que se ejecutan en máquinas remotas. Con esta configuración, sus aplicaciones disponen de modernas interfaces web basadas en CSS, pero siguen beneficiándose de la potencia y la sencillez del desarrollo cliente/servidor integrado. En tales aplicaciones, las páginas Qodly se ejecutan dentro de las [áreas Web](../FormObjects/webArea_overview.md) 4D estándar.

Para gestionar esta configuración en producción, es necesario utilizar sesiones de usuario remotas. En realidad, las peticiones procedentes tanto de la aplicación 4D remota como de sus páginas Qodly cargadas en áreas Web deben funcionar dentro de la misma sesión. You just have to share the session on the server between the remote client and its web pages so that you can have the same [session storage](../API/SessionClass.md#storage) and client license, wherever the request comes from (web or remote 4D).

[Privileges](../ORDA/privileges.md) should be set in the session before executing a web request, so that the user automatically gets their privileges for web access (see example). Tenga en cuenta que los privilegios solo se aplican a las peticiones procedentes de la web.

:::note

Los privilegios sólo pueden definirse desde la sesión de usuario remoto en el servidor. For security reasons, they cannot be modified from the remote user session on the client (see [Comparing server-side and client-side user session objects](#comparing-server-side-and-client-side-user-session-objects)).

:::

Las sesiones compartidas se gestionan con [tokens OTP](../WebServer/sessions.md#session-token-otp). After you created an OTP token for the remote session, you add the token (through the `$4DSID` parameter value) to web requests sent from Web areas containing Qodly pages (or from any web browser) so that the user session on the server is identified and shared. Del lado del servidor web, si una solicitud web contiene un *id OTP* en el parámetro $4DSID, se utiliza la sesión correspondiente a este token OTP.

:::note

You can execute the [OTP creation code](../API/SessionClass.md#createotp) from the server or directly from the client (on the server you can use for example the [`On Server Open Connection`](../commands/on-server-open-connection-database-method) database method). However, keep in mind that the web session `.storage` is shared with the server-side user session `.storage` that and privileges can only be set from the user session on the server.

:::

:::tip

For development and testing purposes, you can use a [standalone session](#standalone-sessions) to code and test all features related to web access sharing, whether your application is intended for single-user or client/server deployment.

:::

:::tip Entrada de blog relacionada

[Integre páginas Qodly en un área web 4D sin costo adicional](https://blog.4d.com/share-your-4d-remote-client-session-with-web-accesses/)

:::

### Ejemplo

En un formulario, obtenga una OTP y abra una página Qodly en un área Web:

```4d
Form.otp:=getOTP

Form.url:="http://localhost/$lib/renderer/?w=Products&$4DSID="+Form.otp

WA OPEN URL(*; "QodlyPage"; Form.url)

```

El método de proyecto *getOTP* (con la propiedad [**Ejecutar en el servidor**](../Project/project-method-properties.md#execute-on-server) en Cliente/Servidor):

```4d
// En sliente servidor:
// ----------------
// Método ejecutado en el servidor porque el objeto Session está en el servidor
// El objeto Session es Null en el cliente 
//

#DECLARE() : Text

return Session.createOTP()

```

Aquí está el código utilizado para poner el privilegio "viewProducts" en la sesión:

```4d
// En cliente/servidor:
// ----------------
// Este código debe ejecutarse en el servidor porque el objeto Session está en el servidor
// El objeto Session es Null en el cliente 

Session.clearPrivileges() // Limpia la sesión de sus antiguos privilegios
Session.setPrivileges("viewProducts")
```

## Sesiones de procedimientos almacenados {#stored-procedure-sessions}

En el servidor, todos los [procedimientos almacenados](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.en.html) comparten la misma sesión de usuario virtual.

### Utilización

Puede compartir datos entre todos los procesos de una sesión de procedimiento almacenados utilizando el objeto compartido [`session.storage`](../API/SessionClass.md#storage).

### Disponibilidad

El objeto `session` de los procedimientos almacenados está disponible desde:

- métodos proyecto que son llamados por el comando [`Execute on Server`](../commands/execute-on-server),
- las [funciones ORDA del modelo de datos](../ORDA/ordaClasses.md) llamadas desde un procedimiento almacenado,
- los métodos base como [`On Server Startup`](../commands/on-server-startup-database-method) y [`On Server Shutdown`](../commands/on-server-shutdown-database-method).

## Sesiones autónomas {#standalone-sessions}

Una sesión independiente es la sesión de un solo usuario que se ejecuta cuando trabaja localmente con 4D.

### Utilización

La sesión autónoma se puede utilizar para desarrollar y probar su aplicación cliente/servidor y su interacción con sesiones web y [compartir OTP](#sharing-a-desktop-session-for-web-accesses). Puede utilizar el objeto `session` en su código en sesión autónoma igual que el objeto `session` de las sesiones remotas.

### Disponibilidad

El objeto `session` de una aplicación autónoma está disponible desde todos los métodos y código ejecutado en la aplicación 4D.


