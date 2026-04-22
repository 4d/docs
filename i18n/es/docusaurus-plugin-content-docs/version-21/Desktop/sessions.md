---
id: desktop-sessions
title: Sesiones de escritorio
---

Una **sesión de escritorio** es un contexto de ejecución relacionado con el usuario en 4D Server o 4D monopuesto que no resulta de ningún acceso web o REST.

Al igual que en una [**sesión de usuario web**](../WebServer/sessions.md), el código ejecutado en una sesión de escritorio tiene acceso a un objeto [`Session`](../API/SessionClass.md) que proporciona funciones y propiedades que permiten almacenar valores de sesión y compartirlos entre procesos de usuario, por ejemplo utilizando el objeto [`session.storage`](../API/SessionClass.md#storage).

Sin embargo, a diferencia del código ejecutado en las sesiones de usuario web, el código ejecutado en las sesiones de escritorio no está controlado por [roles y privilegios](../ORDA/privileges.md). Puede acceder a cualquier parte de la aplicación 4D, incluyendo ORDA y las clases del modelo de datos. En 4D Server, la funcionalidad [usuarios y grupos](../Users/handling_users_groups.md) puede gestionar los accesos de los usuarios.

No obstante, puede [**compartir** una sesión de escritorio con una sesión web](#sharing-a-desktop-session-for-web-accesses) para que un usuario de escritorio pueda acceder a su aplicación 4D a través de una interfaz web, utilizando por ejemplo páginas Qodly y áreas web.

## Tipos de sesiones {#session-types}

Las sesiones de escritorio incluyen:

- **Sesiones de usuario remotas**: en aplicaciones cliente/servidor, la sesión que gestiona los procesos de usuario en el servidor.
- **Sesiones de procedimientos almacenados**: en aplicaciones cliente/servidor, la única sesión virtual de usuario que gestiona todos los procedimientos almacenados ejecutados en el servidor.
- **Sesiones autónomas**: objeto de sesión local devuelto en una aplicación mono usuario (útil en las fases de desarrollo y de prueba de las aplicaciones cliente/servidor).

:::note

Tenga en cuenta que las [**sesiones web**](../WebServer/sessions.md) se utilizan en cuanto se accede al proyecto 4D a través de peticiones web o REST y se habilitan las [sesiones escalables](../WebServer/sessions.md#enabling-web-sessions).

:::

El siguiente diagrama muestra los diferentes tipos de sesión y cómo interactúan:

![](../assets/en/Desktop/sessions.png)

## Sesiones de usuarios remotos {#remote-user-sessions}

En el servidor, en los "procesos de usuario" (es decir, procesos relacionados con usuarios remotos), el comando [`Session`](../commands/session.md) devuelve un objeto `session` que describe la sesión de usuario actual. Este objeto se maneja a través de las funciones y propiedades de la [clase `Session`](../API/SessionClass.md).

:::note

En un 4D remoto, el comando [`Session`](../commands/session) siempre devuelve null.

:::

:::tip Entradas de blog relacionadas

[Objeto sesión remota 4D con conexión cliente/servidor y procedimiento almacenado](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).

:::

### Utilización

El objeto `session` permite manejar la información y los privilegios de la sesión del usuario remoto.

Puede compartir datos entre todos los procesos de la sesión del usuario utilizando el objeto compartido [`session.storage`](../API/SessionClass.md#storage). Por ejemplo, puede iniciar un procedimiento de autenticación y verificación de usuario cuando un cliente se conecta al servidor, que involucra ingresar un código enviado por correo electrónico o SMS en la aplicación. A continuación, añada la información de usuario al almacenamiento de sesión, permitiendo al servidor identificar al usuario. De este modo, el servidor 4D puede acceder a la información del usuario para todos los procesos del cliente, lo que permite escribir código personalizado según el rol del usuario.

También puede asignar privilegios a una sesión de usuario remoto para controlar el acceso cuando la sesión procede de páginas Qodly que se ejecutan en áreas web.

### Disponibilidad

El objeto `session` del usuario remoto está disponible en:

- métodos proyecto que tienen el atributo [Ejecutar en el Servidor](../Project/project-method-properties.md#execute-on-server) (se ejecutan en el proceso "twinned" del proceso cliente),
- Triggers,
- las [funciones ORDA del modelo de datos](../ORDA/ordaClasses.md) (excepto las declaradas con la palabra clave [`local`](../ORDA/ordaClasses.md#local-functions)),
- métodos base como [`On Server Open Connection`](../commands/on-server-open-connection-database-method) y [`On Server Close Connection`](../commands/on-server-close-connection-database-method).

## Sesiones de procedimientos almacenados {#stored-procedure-sessions}

En el servidor, todos los [procedimientos almacenados](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.en.html) comparten la misma sesión de usuario virtual.

### Utilización

Puede compartir datos entre todos los procesos de una sesión de procedimiento almacenados utilizando el objeto compartido [`session.storage`](../API/SessionClass.md#storage).

### Disponibilidad

El objeto `session` de los procedimientos almacenados está disponible desde:

- métodos proyecto que son llamados por el comando [`Execute on Server`](../commands-legacy/execute-on-server.md),
- las [funciones ORDA del modelo de datos](../ORDA/ordaClasses.md) llamadas desde un procedimiento almacenado,
- los métodos base como [`On Server Startup`](../commands/on-server-startup-database-method) y [`On Server Shutdown`](../commands/on-server-shutdown-database-method).

## Sesiones autónomas {#standalone-sessions}

Una sesión independiente es la sesión de un solo usuario que se ejecuta cuando trabaja localmente con 4D.

### Utilización

La sesión autónoma se puede utilizar para desarrollar y probar su aplicación cliente/servidor y su interacción con sesiones web y [compartir OTP](#sharing-a-desktop-session-for-web-accesses). Puede utilizar el objeto `session` en su código en sesión autónoma igual que el objeto `session` de las sesiones remotas.

### Disponibilidad

El objeto `session` de una aplicación autónoma está disponible desde todos los métodos y código ejecutado en la aplicación 4D.

## Compartir una sesión de escritorio para los accesos web {#sharing-a-desktop-session-for-web-accesses}

Las sesiones de escritorio pueden utilizarse para gestionar los accesos web a la aplicación por parte del mismo usuario y, de este modo, gestionar sus [privilegios](../ORDA/privileges.md). Esta posibilidad es especialmente útil para aplicaciones Cliente/Servidor en las que se utilizan [páginas Qodly](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) para la interfaz, que se ejecutan en máquinas remotas. Con esta configuración, sus aplicaciones disponen de modernas interfaces web basadas en CSS, pero siguen beneficiándose de la potencia y la sencillez del desarrollo cliente/servidor integrado. En tales aplicaciones, las páginas Qodly se ejecutan dentro de las [áreas Web](../FormObjects/webArea_overview.md) 4D estándar.

Para gestionar esta configuración en producción, es necesario utilizar sesiones de usuario remotas. En realidad, las peticiones procedentes tanto de la aplicación 4D remota como de sus páginas Qodly cargadas en áreas Web deben funcionar dentro de la misma sesión. Sólo tiene que compartir la sesión entre el cliente remoto y sus páginas web para que pueda tener la misma [sesión storage](../API/SessionClass.md#storage) y licencia cliente, venga de donde venga la petición (web o 4D remoto).

Tenga en cuenta que los [privilegios](../ORDA/privileges.md) deben definirse en la sesión antes de ejecutar una petición web, de modo que el usuario obtenga automáticamente sus privilegios para el acceso web (ver el ejemplo). Tenga en cuenta que los privilegios **sólo se aplican a las peticiones procedentes de la web**.

Puede desarrollar esta configuración en su aplicación 4D Developer (monousuario): puede utilizar la [sesión autónoma](#standalone-sessions) para codificar y probar todas las funcionalidades relacionadas con el acceso web, tanto si su aplicación está pensada para un despliegue monousuario o cliente/servidor.

Las sesiones compartidas se gestionan con [tokens OTP](../WebServer/sessions.md#session-token-otp). Después de crear un token OTP para la sesión de escritorio en el servidor o en la aplicación monousuario 4D, se añade el token (a través del valor del parámetro `$4DSID`) a las peticiones web enviadas desde las áreas web que contienen páginas Qodly (o desde cualquier navegador web) para que la sesión de usuario en el servidor o en la aplicación monousuario sea identificada y compartida. After you created an OTP token for the remote session, you add the token (through the `$4DSID` parameter value) to web requests sent from Web areas containing Qodly pages (or from any web browser) so that the user session on the server is identified and shared.

:::note

Cuando se crea un token OTP en un entorno cliente/servidor, es necesario ejecutar el [código de creación de la OTP](../API/SessionClass.md#createotp) **en el servidor** (el objeto `Session` es Null en un 4D remoto). Puede utilizar, por ejemplo, el método base [`On Server Open Connection`](../commands-legacy/on-server-open-connection-database-method.md).

:::

:::tip Entrada de blog relacionada

[Embed Qodly pages in a 4D web area without extra cost](https://blog.4d.com/share-your-4d-remote-client-session-with-web-accesses/)<br/>
[Enhance your Desktop Interface with Web widgets using 4D Qodly Pro](https://blog.4d.com/build-modern-hybrid-desktop-apps-with-4d-and-qodly-pro/)

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

