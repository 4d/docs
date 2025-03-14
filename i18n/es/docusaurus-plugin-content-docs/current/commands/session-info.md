---
id: session-info
title: Session info
displayed_sidebar: docs
---

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| Parámetros | Tipo    |                             | Descripción                   |
| ---------- | ------- | :-------------------------: | ----------------------------- |
| sessionID  | Integer | &#8594; | Session ID                    |
| Resultado  | Object  | &#8592; | Information about the session |

<!-- END REF -->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                 |
| ----------- | ------------------------------ |
| 20 R8       | Support of standalone sessions |
| 20 R7       | Añadidos                       |

</details>

#### Descripción

El comando `Session info` <!-- REF #_command_.Session info.Summary -->devuelve un objeto que describe la sesión cuyo ID pasa en el parámetro *sessionID*.<!-- END REF -->. If you pass an invalid *sessionID*, the command returns a null object.

El objeto devuelto contiene las siguientes propiedades:

| Propiedad        | Tipo          | Descripción                                                                                                                                                                                                                   |
| ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sesión: "remote", "storedProcedure", "standalone"                                                                                                                                                     |
| userName         | Text          | Nombre de usuario 4D (mismo valor que [`Session.userName`](../API/SessionClass.md#username))                                                                                                               |
| machineName      | Text          | Sesiones remotas: nombre de la máquina remota. Stored procedures session: name of the server machine. Standalone session: name of the machine |
| systemUserName   | Text          | Sesiones remotas: nombre de la sesión del sistema abierta en la máquina remota.                                                                                                               |
| IPAddress        | Text          | Dirección IP de la máquina remota                                                                                                                                                                                             |
| hostType         | Text          | Tipo de host: "windows" o "mac"                                                                                                                                                                               |
| creationDateTime | Date ISO 8601 | Date and time of session creation. Standalone session: date and time of application startup                                                                                                   |
| state            | Text          | Estado de la sesión: "active", "postponed", "sleeping"                                                                                                                                                        |
| ID               | Text          | UUID de la sesión (mismo valor que [`Session.id`](../API/SessionClass.md#id))                                                                                                                              |
| persistentID     | Text          | Remote sessions: Session's persistent ID                                                                                                                                                                      |

:::note

This command returns the [`.info`](../API/SessionClass.md#info) property of the *sessionID* session. To get information about the current session, you can directly call `Session.info`.

:::

He aquí un ejemplo de objeto de salida:

```json

{
    "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
    "userName": "Designer",
    "machineName": "My Computer",
    "systemUserName": "John Doe",
    "IPAddress": "localhost",
    "hostType": "mac",
    "type": "remote",
    "state": "active",
    "creationDateTime: "2024-09-10T09:55:54.787Z",
    "persistentID:"8FFDAE519F1F4DCDB81E8E8DB00AD101"
}

```

#### Ejemplo

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

#### Ver también

[`Session` class](../API/SessionClass.md)
[Session](session.md)
[Session storage](session-storage.md)\
[Process info](process-info.md)
