---
id: session-info
title: Session info
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R7       | Añadidos       |

</details>

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| Parámetros | Tipo    |                             | Descripción                   |
| ---------- | ------- | :-------------------------: | ----------------------------- |
| sessionID  | Integer | &#8594; | ID de sesión                  |
| Resultado  | Object  | &#8592; | Information about the session |

<!-- END REF -->

## Descripción

El comando `Session info` <!-- REF #_command_.Session info.Summary -->devuelve un objeto que describe la sesión cuyo ID pasa en el parámetro *sessionID*.<!-- END REF -->. If you pass an invalid *sessionID*, the command returns a null object.

El objeto devuelto contiene las siguientes propiedades:

| Nombre de propiedad | Tipo                                    | Descripción                                                                                             |
| ------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| type                | Text (enum)          | Tipo de sesión. Possible values: "remote", "storedProcedure", "rest"    |
| userName            | Text                                    | Nombre de usuario                                                                                       |
| machineName         | Text                                    | Name of the remote machine                                                                              |
| systemUserName      | Text                                    | Name of the system session opened on the remote machine                                                 |
| IPAddress           | Text                                    | Dirección IP de la máquina remota                                                                       |
| hostType            | Text (enum)          | Tipo de host. Possible values: "windows", "mac", "browser"              |
| creationDateTime    | Text (Date ISO 8601) | Date and time of connection of the remote machine                                                       |
| state               | Text (enum)          | Estado de la sesión. Possible values: "active", "postponed", "sleeping" |
| ID                  | Text                                    | UUID de la sesión                                                                                       |
| persistentID        | Text                                    | ID persistente de la sesión                                                                             |

:::note

Este comando devuelve la propiedad [`.info`](../API/SessionClass.md#info) de la sesión *sessionID*. To get information about the current session, you can directly call `Session.info`.

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

## Ejemplo

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

## Ver también

[Session](../API/SessionClass.md)
[Process info](process-info.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1844                        |
| Hilo seguro       | &check; |
