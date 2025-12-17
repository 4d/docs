---
id: desktop-sessions
title: Desktop Sessions
---

A **desktop session** is a user-related execution context on 4D Server or 4D single-user that does not result from any web or REST access.

Just like in a [**web user session**](../WebServer/sessions.md), the code executed in a desktop session has access to a [`Session`](../API/SessionClass.md) object which provides functions and properties allowing you to store session values and to share them between user processes, for example using the [`session.storage`](../API/SessionClass.md#storage) object.

However, unlike the code executed in web user sessions, the code executed in desktop sessions is not controlled by [roles and privileges](../ORDA/privileges.md). It can access any parts of the 4D application, including ORDA and data model classes. On 4D Server, [users and groups feature](../Users/handling_users_groups.md) can manage user accesses.

You can nevertheless [**share** a desktop session with a web session](#sharing-a-desktop-session-for-web-accesses) so that a desktop user can access your 4D application through a web interface, using for example Qodly pages and Web areas.

## Tipos de sesiones

Las sesiones de escritorio incluyen:

- **Remote user sessions**: In client/server applications, the session that manages the user processes on the server.
- **Stored procedures sessions**: In client/server applications, the unique virtual user session that manages all stored procedures executed on the server.
- **Standalone sessions**: Local session object returned in single-user application (useful in development and test phases of client/server applications).

:::note

Keep in mind that [**Web sessions**](../WebServer/sessions.md) are used as soon as the 4D project is accessed through web or REST requests and [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) are enabled.

:::

The following diagram shows the different session types and how they interact:

![](../assets/en/Desktop/sessions.png)

## Sesiones de usuarios remotos

On the server, in "user processes" (i.e. processes related to remote users), the [`Session`](../commands/session.md) command returns a `session` object describing the current user session. Este objeto se maneja a través de las funciones y propiedades de la [clase `Session`](../API/SessionClass.md).

:::note

En un 4D remoto, el objeto `session` siempre devuelve null.

:::

:::tip Entradas de blog relacionadas

[Objeto sesión remota 4D con conexión cliente/servidor y procedimiento almacenado](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).

:::

### Utilización

El objeto `session` permite manejar la información y los privilegios de la sesión del usuario remoto.

Puede compartir datos entre todos los procesos de la sesión del usuario utilizando el objeto compartido [`session.storage`](../API/SessionClass.md#storage). Por ejemplo, puede iniciar un procedimiento de autenticación y verificación de usuario cuando un cliente se conecta al servidor, que involucra ingresar un código enviado por correo electrónico o SMS en la aplicación. A continuación, añada la información de usuario al almacenamiento de sesión, permitiendo al servidor identificar al usuario. De este modo, el servidor 4D puede acceder a la información del usuario para todos los procesos del cliente, lo que permite escribir código personalizado según el rol del usuario.

You can also assign privileges to a remote user session to control access when the session comes from Qodly pages running in web areas.

### Disponibilidad

El objeto `session` del usuario remoto está disponible en:

- Métodos proyecto que tienen el atributo [Ejecutar en el Servidor](../Project/code-overview.md#execute-on-server) (se ejecutan en el proceso "twinned" del proceso cliente),
- Triggers,
- ORDA [data model functions](../ORDA/ordaClasses.md) (except those declared with the [`local`](../ORDA/ordaClasses.md#local-functions) keyword),
- Database methods such as [`On Server Open Connection`](../commands/on-server-open-connection-database-method) and [`On Server Close Connection`](../commands/on-server-close-connection-database-method).

## Sesiones de procedimientos almacenados

On the server, all [stored procedures](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.en.html) share the same virtual user session.

### Utilización

You can share data between all processes of a store procedure session using the [`session.storage`](../API/SessionClass.md#storage) shared object.

### Disponibilidad

El objeto `session` de los procedimientos almacenados está disponible desde:

- Métodos proyecto que son llamados por el comando [`Execute on Server`](../commands-legacy/execute-on-server.md),
- ORDA [data model functions](../ORDA/ordaClasses.md) called from a stored procedure,
- Database methods such as [`On Server Startup`](../commands/on-server-startup-database-method) and [`On Server Shutdown`](../commands/on-server-shutdown-database-method).

## Standalone sessions

A standalone session is the single-user session running when you work locally with 4D.

### Utilización

The standalone session can be used to develop and test your client/server application and its interaction with web sessions and [OTP sharing](#sharing-a-desktop-session-for-web-accesses). You can use the `session` object in your code in standalone session just as the `session` object of the remote sessions.

### Disponibilidad

The `session` object of a standalone is available from all methods and code executed on the 4D application.

## Sharing a desktop session for web accesses

Desktop sessions can be used to handle web accesses to the application by the same user and thus, manage their [privileges](../ORDA/privileges.md). This possibility is particularly useful for Client/Server applications where [Qodly pages](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) are used for the interface, running on remote machines. With this configuration, your applications have modern CSS-based web interfaces but still benefit from the power and simplicity of integrated client/server development. En tales aplicaciones, las páginas Qodly se ejecutan dentro de las [áreas Web](../FormObjects/webArea_overview.md) 4D estándar.

To manage this configuration in production, you need to use remote user sessions. Actually, requests coming from both the remote 4D application and its Qodly pages loaded in Web areas need to work inside the same session. You just have to share the session between the remote client and its web pages so that you can have the same [session storage](../API/SessionClass.md#storage) and client license, wherever the request comes from (web or remote 4D).

Note that [privileges](../ORDA/privileges.md) should be set in the session before executing a web request, so that the user automatically gets their privileges for web access (see example). Keep in mind that privileges **only apply to requests coming from the web**.

You can develop this configuration in your 4D Developer application (single-user): you can use the [standalone session](#standalone-sessions) to code and test all features related to web access, whether your application is intended for single-user or client/server deployment.

Las sesiones compartidas se gestionan a través de [tokens OTP](../WebServer/sessions.md#session-token-otp). After you created an OTP token for the desktop session on the server or on the single-user 4D application, you add the token (through the `$4DSID` parameter value) to web requests sent from Web areas containing Qodly pages (or from any web browser) so that the user session on the server or the single-user application is identified and shared. On the web server side, if a web request contains an *OTP id* in the $4DSID parameter, the session corresponding to this OTP token is used.

:::note

When creating an OTP token in client/server environment, you need to execute the [OTP creation code](../API/SessionClass.md#createotp) **on the server** (the `Session` object is Null on a remote 4D). You can use for example the [`On Server Open Connection`](../commands-legacy/on-server-open-connection-database-method.md) database method.

:::

:::tip Entrada de blog relacionada

[Embed Qodly pages in a 4D web area without extra cost](https://blog.4d.com/embed-qodly-pages-in-a-4d-web-area-without-extra-cost)

:::

### Ejemplo

In the [*On Server Open Connection*](../commands-legacy/on-server-open-connection-database-method.md) database method:

```4d
var $otp : Text

// Some privileges are put in the remote user session on the server for a further web access
resetPrivileges("basic")

// An OTP is created on the server for this remote client session
$otp:=getOTP


// The user has already the required privileges for a web access
// and the same session is shared between this remote user and the web Qodly app
WA OPEN URL(*; "Welcome"; "http://127.0.0.1/$lib/renderer/?w=People&$4DSID="+$otp)

```

Método proyecto *resetPrivileges*:

```4d
// This function is run on the server
// and puts some privileges in the session for a further web access

#DECLARE ($priv : Text) 
	
Session.clearPrivileges()
Session.setPrivileges($priv)
```

*getOTP* project method:

```4d
// This project method is run on the server 
// and generates an OTP able to retrieve this remote user session 

#DECLARE : Text 
	
return Session.createOTP()
	
```


