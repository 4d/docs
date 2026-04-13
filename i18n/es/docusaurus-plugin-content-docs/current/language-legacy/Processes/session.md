---
id: session
title: Session
slug: /commands/session
displayed_sidebar: docs
---

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!--REF #_command_.Session.Params-->

<div class="no-index">

| Parámetros | Tipo                       |                             | Descripción    |
| ---------- | -------------------------- | --------------------------- | -------------- |
| Resultado  | [4D.Session](../API/SessionClass.md)  | &#8592; | Objeto Session |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R8       | Soporte de sesiones autónomas                                      |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>
</div>

## Descripción

El comando `Session` <!-- REF #_command_.Session.Summary -->devuelve el objeto `Session` correspondiente a la sesión actual<!-- END REF -->.

Dependiendo del proceso desde el que se llame al comando, la sesión actual puede ser:

- una sesión web (cuando las [sesiones escalables están activadas](WebServer/sessions.md#enabling-web-sessions)),
- una sesión usuario remota (en el servidor),
- una sesión de procedimientos almacenados,
- una sesión autónoma.

Para obtener más información, consulte el párrafo [Tipos de sesion](../../API/SessionClass.md#session-types).

El comando devuelve *Null* si:

- se llama en un proceso web y se desactivan las sesiones escalables en el servidor web,
- se llama en un cliente 4D remoto.

### Sesiones web

El objeto `Session` de las sesiones web está disponible desde cualquier proceso web:

- Métodos base `On Web Authentication`, `On Web Connection` y `On REST Authentication`,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls,
- métodos base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) y [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) para peticiones móviles,
- Funciones ORDA [llamadas con peticiones REST](../../REST/ClassFunctions.md).

Para más información sobre las sesiones usuario web, consulte la sección [Sesiones web](../../WebServer/sessions.md).

### Sesiones de usuarios remotos

El objeto `Session` de las sesiones usuario remotas está disponible desde:

- métodos proyecto que tienen el atributo [Ejecutar en el Servidor](../../Project/project-method-properties.md#execute-on-server) (se ejecutan en el proceso "twinned" del proceso cliente),
- Triggers,
- ORDA [funciones del modelo de datos](../../ORDA/ordaClasses.md) (excepto las declaradas con la palabra clave [`local`](../../ORDA/ordaClasses.md#local-functions),
- Los métodos base `On Server Open Connection` y `On Server Shutdown Connection` de la base de datos.

Para más información sobre las sesiones usuario remoto, por favor consulte el párrafo [**Sesiones usuario remoto**](../../Desktop/sessions.md#remote-user-sessions).

### Sesión de procedimientos almacenados

Todos los procesos de procedimientos almacenados comparten la misma sesión virtual de usuario. El objeto `Session` de los procedimientos almacenados está disponible desde:

- métodos llamados con el comando [`Execute on server`](../commands/execute-on-server),
- Los métodos base `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown` y `On System event`

Para obtener más información sobre la sesión de usuario virtual de procedimientos almacenados, consulte el párrafo [**Sesiones de procedimientos almacenados**](../../Desktop/sessions.md#stored-procedure-sessions).

### Sesión independiente

El objeto `Session` está disponible desde cualquier proceso en aplicaciones independientes (monousuario) para que pueda escribir y probar su código cliente/servidor utilizando el objeto `Session` en su entorno de desarrollo 4D.

Para más información sobre sesiones autónomas, por favor consulte el párrafo [**Sesiones autónomas**](../../Desktop/sessions.md#standalone-sessions).

### `Session` y componentes

Cuando se llama a `Session` desde el código de diferentes [componentes cargados en el proyecto](../../Concepts/components.md), el comando devuelve un objeto dependiendo de la petición de llamada y del contexto:

- en el caso de una petición web, `Session` siempre devuelve la sesión adjunta al servidor web de destino de la petición (y no una sesión del servidor web del componente),
- en el caso de una petición remota ejecutada en el servidor, `Session` siempre devuelve la sesión adjunta al usuario remoto,
- en el caso de una sesión de procedimiento almacenado o de una sesión autónoma, `Session` siempre devuelve la única sesión actual (se utiliza el mismo objeto durante toda la sesión de trabajo).

```mermaid
flowchart TD
    A[Necesita una sesión] --> B{¿Es una petición web?
    B -->|Sí| C[Usar la sesión adjunta al servidor web de la solicitud web]
    B -->|No| D{¿Es una solicitud remota?
    D -->|Sí| E[Use el objeto de la sesión de usuario remoto]
    D -->|No| F[Use el objeto único de la sesión almacenada/independiente]

    classDef decision fill:#f9f, troke:#333,stroke-width:2px;
    proceso classDef fill:#bbf,stroke:#333,stroke-width:2px;
    classDef start fill:#bfb,stroke:#333,stroke-width:2px;

    clase B,D decision
    clase A start
    class C,E,F process
```

## Ejemplo

Ha definido el método `action_Session` con el atributo "Disponible a través de etiquetas 4D y URLs". Se llama al método introduciendo la siguiente URL en el navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //método action_Session
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("CreateInvoices")) //llamando a la función hasPrivilege
          WEB SEND TEXT("4DACTION --> Session is CreateInvoices")
       Else
          WEB SEND TEXT("4DACTION --> Session is not CreateInvoices")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```

## Ver también

[Session storage](../commands/session-storage)  
[Session API](../../API/SessionClass.md)
[Desktop sessions](../../Desktop/sessions.md)
[Web server user sessions](../../WebServer/sessions.md)  
[*Sesiones escalables para aplicaciones web avanzadas* (entrada de blog)](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1714 |
| Hilo seguro       | sí   |



