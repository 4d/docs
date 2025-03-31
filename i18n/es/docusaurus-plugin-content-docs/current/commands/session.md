---
id: session
title: Session
displayed_sidebar: docs
---

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!--REF #_command_.Session.Params-->

| Parámetros | Tipo                       |   | Descripción    |
| ---------- | -------------------------- | - | -------------- |
| Resultado  | 4D.Session | ← | Objeto Session |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R8       | Support of standalone sessions                                     |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

#### Descripción

El comando `Session` <!-- REF #_command_.Session.Summary -->devuelve el objeto `Session` correspondiente a la sesión usuario actual<!-- END REF -->.

Dependiendo del proceso desde el que se llame al comando, la sesión de usuario actual puede ser:

- una sesión web (cuando las [sesiones escalables están activadas](WebServer/sessions.md#enabling-sessions)),
- una sesión de cliente remoto,
- the stored procedures session,
- the *designer* session in a standalone application.

For more information, see the [Session types](../API/SessionClass.md#session-types) paragraph.

If the command is called from a non supported context (e.g. scalable sessions disabled), it returns *Null*.

#### Sesiones web

El objeto `Session` de las sesiones web está disponible desde cualquier proceso web:

- Métodos base `On Web Authentication`, `On Web Connection` y `On REST Authentication`,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls,
- métodos base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) y [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) para peticiones móviles,
- Funciones ORDA [llamadas con peticiones REST](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](../WebServer/sessions.md) section.

#### Sesiones de cliente remoto

El objeto `Session` de las sesiones cliente remotas está disponible desde:

- Métodos proyecto que tienen el atributo [Ejecutar en el Servidor](../Project/code-overview.md#execute-on-server) (se ejecutan en el proceso "twinned" del proceso cliente),
- Triggers,
- Los métodos base `On Server Open Connection` y `On Server Shutdown Connection` de la base de datos.

Para más información sobre las sesiones usuario remoto, por favor consulte el párrafo [**Sesiones usuario cliente remoto**](../Desktop/clientServer.md#remote-user-sessions).

#### Sesión de procedimientos almacenados

Todos los procesos de procedimientos almacenados comparten la misma sesión virtual de usuario. El objeto `Session` de los procedimientos almacenados está disponible desde:

- methods called with the [`Execute on server`](../commands-legacy/execute-on-server.md) command,
- Los métodos base `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown` y `On System event`

Para obtener información sobre la sesión de usuario virtual de los procedimientos almacenados, consulte la página [4D Server y lenguaje 4D](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html).

#### Standalone session

The `Session` object is available from any process in standalone (single-user) applications so that you can write and test your client/server code using the `Session` object in your 4D development environment.

#### Ejemplo

Ha definido el método `action_Session` con el atributo "Disponible a través de etiquetas 4D y URLs". Se llama al método introduciendo la siguiente URL en el navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //método action_Session
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //llamando a la función hasPrivilege
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```

### Ver también

[Session storage](session-storage.md)\
[Session API](../API/SessionClass.md)\
[Web server user sessions](../WebServer/sessions.md)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1714                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
