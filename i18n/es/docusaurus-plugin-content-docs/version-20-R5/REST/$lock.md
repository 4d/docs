---
id: lock
title: $lock
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

The [`lockKindText` property](../API/EntityClass.md#lock) is "Locked by session".

### Descripción

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level.

A locked entity is seen as _locked_ (i.e. lock / unlock / update / delete actions are not possible) by:

- otras sesiones REST
- los procesos 4D (cliente/servidor, almacén de datos remoto, monopuesto) ejecutadas en el servidor REST.

Una entidad bloqueada por la API REST sólo puede ser desbloqueada:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed).

### Respuesta

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed.

El objeto "__STATUS" devuelto tiene las siguientes propiedades:

| Propiedad    |                                     | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                           |
| ------------ | ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                                     |         | _**Disponible sólo en caso de éxito:**_                                                                                                                                                                                                                                                                                                                               |
| success      |                                     | boolean | true si la acción de bloqueo tiene éxito (o si la entidad ya está bloqueada en la sesión actual), false en caso contrario (no devuelto en este caso).                                                                                                                                                                           |
|              |                                     |         | _**Available only in case of error:**_                                                                                                                                                                                                                                                                                                                                |
| status       |                                     | number  | Código de error, ver abajo                                                                                                                                                                                                                                                                                                                                                            |
| statusText   |                                     | text    | Descripción del error, ver abajo                                                                                                                                                                                                                                                                                                                                                      |
| lockKind     |                                     | number  | Código de bloqueo                                                                                                                                                                                                                                                                                                                                                                     |
| lockKindText |                                     | text    | "Locked by session" si está bloqueado por una sesión REST, "Locked by record" si está bloqueado por un proceso 4D                                                                                                                                                                                                                                                                     |
| lockInfo     |                                     | object  | Información sobre el origen del bloqueo. Las propiedades devueltas dependen del origen del bloqueo (proceso 4D o sesión REST).                                                                                                                                                                                                     |
|              |                                     |         | _**Available only for a 4D process lock:**_                                                                                                                                                                                                                                                                                                                           |
|              | task_id        | number  | ID del Proceso                                                                                                                                                                                                                                                                                                                                                                        |
|              | user_name      | text    | Nombre de usuario de la sesión en la máquina                                                                                                                                                                                                                                                                                                                                          |
|              | user4d_alias   | text    | Nombre o alias del usuario 4D                                                                                                                                                                                                                                                                                                                                                         |
|              | user4d_id      | number  | ID del usuario en el directorio de la base de datos 4D                                                                                                                                                                                                                                                                                                                                |
|              | host_name      | text    | Nombre de la máquina                                                                                                                                                                                                                                                                                                                                                                  |
|              | task_name      | text    | Nombre del proceso                                                                                                                                                                                                                                                                                                                                                                    |
|              | client_version | text    | Versión del cliente                                                                                                                                                                                                                                                                                                                                                                   |
|              |                                     |         | _**Available only for a REST session lock:**_                                                                                                                                                                                                                                                                                                                         |
|              | host                                | text    | URL que bloqueó la entidad (por ejemplo, "127.0.0.1:8043")                                                                                                                                                                                                                                         |
|              | IPAddr                              | text    | Dirección IP del bloqueo (por ejemplo: "127.0.0.1")                                                                                                                                                                                                                                                |
|              | recordNumber                        | number  | Número del registro bloqueado                                                                                                                                                                                                                                                                                                                                                         |
|              | userAgent                           | text    | userAgent del origin del bloqueo (ej: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |

The following values can be returned in the _status_ and _statusText_ properties of the ___STATUS_ object in case of error:

| status | statusText                      | Comentario                                                                                                                                                  |
| ------ | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2      | "Stamp has changed"             | El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista).   |
| 3      | "Already locked"                | La entidad está bloqueada por un bloqueo pesimista.                                                                                         |
| 4      | "Other error"                   | Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc. |
| 5      | "Entity does not exist anymore" | La entidad ya no existe en los datos.                                                                                                       |

## Ejemplo

Bloqueamos una entidad en un primer navegador:

```
GET /rest/Customers(1)/?$lock=true
```

**Response:**

```
{
	"result": true,
	"__STATUS": {
		"success": true
	}
}
```

En un segundo navegador (otra sesión), enviamos la misma petición.

**Response:**

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
