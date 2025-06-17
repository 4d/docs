---
id: process-activity
title: Process activity
displayed_sidebar: docs
---

<!--REF #_command_.Process activity.Syntax-->**Process activity** () : Object<br/>**Process activity** ( *options* ) : Object<br/>**Process activity** ( *sessionID* ) : Object<br/>**Process activity** ( *sessionID* ; *options* ) : Object<!-- END REF-->

<!--REF #_command_.Process activity.Params-->

| Parámetros | Tipo    |                             | Descripción                                                                                          |
| ---------- | ------- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| sessionID  | Text    | &#8594; | ID de sesión                                                                                         |
| options    | Integer | &#8594; | Opciones de retorno                                                                                  |
| Resultado  | Object  | &#8592; | Instantánea de los procesos en ejecución y/o sesiones de usuario (sólo 4D Server) |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                    |
| ----------- | --------------------------------- |
| 20 R7       | Soporte del parámetro *sessionID* |

</details>

## Descripción

<!--REF #_command_.Process activity.Summary-->The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The **Process activity** command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.<!-- END REF--> Este comando devuelve todos los procesos, incluidos los procesos internos a los que no se puede acceder mediante el comando [Process info](process-info.md). 

By default when used without any parameters, **Process activity** returns an object containing the following properties:

- "processes", una colección de todos los procesos
- "sessions" (sólo 4D Server), una colección de todas las sesiones

On 4D Server, you can filter information to be returned using the optional *sessionID* and *options* parameters:

- If you pass a user session ID in the *sessionID* parameter, the command only returns information related to this session. By default if the *options* parameter is omitted, the returned object contains a collection with all processes related to the session and a collection with a single object describing the session. Si se pasa un ID de sesión inválido, se devuelve un objeto **null**.
- You can select the collection(s) to return by passing one of the following constants in the *options* parameter:

| Constante              | Valor | Comentario                                                                          |
| ---------------------- | ----- | ----------------------------------------------------------------------------------- |
| Processes and sessions | 0     | Devuelve las listas "processes" y "sessions" (valor por defecto) |
| Processes only         | 1     | Devuelve sólo la lista "processes"                                                  |
| Sólo sesiones          | 2     | Devuelve solo la lista "sessions"                                                   |

:::note

Cuando se ejecuta en 4D en modo remoto o local, `Process activity` siempre devuelve la lista de procesos en ejecución (se ignoran los parámetros *sessionID* y *options*).

:::

**Sessions**

The "sessions" property contains a collection of objects describing all running sessions on the server. Para una descripción de las propiedades del objeto de sesión, por favor consulte el comando [`Session info`](session-info.md).

:::note Notas

- Puede obtener el objeto de una sesión utilizando el comando [Session](session.md).
- `Process activity` returns remote client sessions, stored procedure session and rest sessions but not Web sessions (limitation).

:::

**Processes**

The "processes" property contains a collection of process objects describing all running processes. Para una descripción de las propiedades del objeto de proceso, por favor consulte el comando [`Process info`](process-info.md).

On the server, the `Process activity` command returns an additional "session" property:

| Propiedad adicional | Tipo   | Descripción                                                                                                                                                                                      |   |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | - |
| session             | Object | La propiedad [`.info`](../API/SessionClass.md#info) de la sesión en la que se está ejecutando el proceso. Undefined if the `Processes only` parameter is passed. |   |

## Ejemplo 1

You want to get the collection of all user sessions:

```4d
  //To be executed on the server
 
 var $o : Object
 var $i : Integer
 var $processName;$userName : Text

 
 $o:=Process activity //Get process & session info
 For($i;0;($o.processes.length)-1) //Iterate over the "processes" collection
    $processName:=$o.processes[$i].name
    $userName:=String($o.processes[$i].session.userName) // Easy access to userName
  //use String because session object might be undefined
 End for
```

## Ejemplo 2

You want to get all processes related to the current session:

```4d
  // to be executed on the server
 
 var $sessionID : Text:=Session.id
 var $o : Object
 
 $o:=Process activity($sessionID ;Processes only)

```

## Ver también

[Session storage](session-storage.md)\
[WEB Get server info](../commands-legacy/web-get-server-info.md)