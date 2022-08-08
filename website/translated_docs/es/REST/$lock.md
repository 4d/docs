---
id: lock
title: '$lock'
---


Locks and unlocks an entity using the [pessimistic mechanism](../ORDA/entities.md#pessimistic-lock).


## Sintaxis

Para bloquear una entidad para las otras sesiones y procesos 4D:

```
/?$lock=true
```


Para desbloquear la entidad para las otras sesiones y procesos 4D:

```
/?$lock=false
```


The [`lockKindText` property](../API/EntityClass.html#lock) is "Locked by session".


### Descripción

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level.

A locked entity is seen as *locked* (i.e. lock / unlock / update / delete actions are not possible) by:

- otras sesiones REST
- 4D processes (client/server, remote datastore, standalone) running on the REST server.

Una entidad bloqueada por la API REST sólo puede ser desbloqueada:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed).

### Respuesta

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed.

El objeto "__STATUS" devuelto tiene las siguientes propiedades:

| Propiedad    |                | Tipo     | Descripción                                                                                                                                                 |
| ------------ | -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                |          | ***Disponible sólo en caso de éxito:***                                                                                                                     |
| success      |                | booleano | true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).             |
|              |                |          | ***Disponible sólo en caso de error:***                                                                                                                     |
| status       |                | number   | Código de error, ver abajo                                                                                                                                  |
| statusText   |                | texto    | Descripción del error, ver abajo                                                                                                                            |
| lockKind     |                | number   | Código de bloqueo                                                                                                                                           |
| lockKindText |                | texto    | "Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process                                                               |
| lockInfo     |                | objeto   | Información sobre el origen del bloqueo. Las propiedades devueltas dependen del origen del bloqueo (proceso 4D o sesión REST).                              |
|              |                |          | ***Disponible sólo para un bloqueo por proceso 4D:***                                                                                                       |
|              | task_id        | number   | ID del Proceso                                                                                                                                              |
|              | user_name      | texto    | Nombre de usuario de la sesión en la máquina                                                                                                                |
|              | user4d_alias   | texto    | Nombre o alias del usuario 4D                                                                                                                               |
|              | user4d_id      | number   | ID del usuario en el directorio de la base de datos 4D                                                                                                      |
|              | host_name      | texto    | Nombre de la máquina                                                                                                                                        |
|              | task_name      | texto    | Nombre del proceso                                                                                                                                          |
|              | client_version | texto    | Versión del cliente                                                                                                                                         |
|              |                |          | ***Disponible sólo para un bloqueo por sesión REST:***                                                                                                      |
|              | host           | texto    | URL que bloqueó la entidad (por ejemplo, "127.0.0.1:8043")                                                                                                  |
|              | IPAddr         | texto    | Dirección IP del bloqueo (por ejemplo: "127.0.0.1")                                                                                                         |
|              | recordNumber   | number   | Número del registro bloqueado                                                                                                                               |
|              | userAgent      | texto    | userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |


The following values can be returned in the *status* and *statusText* properties of the *__STATUS* object in case of error:

| status | statusText                      | Comentario                                                                                                               |
| ------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 2      | "Stamp has changed"             | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).   |
| 3      | "Already locked"                | La entidad está bloqueada por un bloqueo pesimista.                                                                      |
| 4      | "Other error"                   | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc. |
| 5      | "Entity does not exist anymore" | La entidad ya no existe en los datos.                                                                                    |




## Ejemplo


Bloqueamos una entidad en un primer navegador:

```
GET /rest/Customers(1)/?$lock=true
```

**Respuesta:**

```
{
    "result": true,
    "__STATUS": {
        "success": true
    }
}
```

In a second browser (other session), we send the same request.

**Respuesta:**

```
{
    "result":false,
    "__STATUS":{
        "status":3,
        "statusText":"Already Locked",
        "lockKind":7,
        "lockKindText":"Locked By Session",
        "lockInfo":{
            "host":"127.0.0.1:8043",
            "IPAddr":"127.0.0.1",
            "recordNumber": 7,
            "userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."
        }
    }
}
```

