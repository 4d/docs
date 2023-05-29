---
id: lock
title: '$lock'
---


Bloquea y desbloquea una entidad utilizando el [mecanismo pesimista](../ORDA/entities.md#pessimistic-lock).


## Sintaxis

Para bloquear una entidad para las otras sesiones y procesos 4D:

```
/?$lock=true
```


Para desbloquear la entidad para las otras sesiones y procesos 4D:

```
/?$lock=false
```


La propiedad [`lockKindText`](../API/EntityClass.md#lock) es "Locked by session".


### Descripción

Los bloqueos activados por la API REST se colocan al nivel de la [sesión](authUsers.md#opening-sessions).

Una entidad bloqueada se ve como *bloqueada* (es decir, las acciones de bloqueo / desbloqueo / actualización / eliminación no son posibles) por:

- otras sesiones REST
- los procesos 4D (cliente/servidor, almacén de datos remoto, monopuesto) ejecutadas en el servidor REST.

Una entidad bloqueada por la API REST sólo puede ser desbloqueada:

- por su bloqueador, es decir un `/?$lock=false` en la sesión REST que define `/?$lock=true`
- o si el [timeout de inactividad]($directory.md) de la sesión se alcanza (la sesión se cierra).

### Respuesta

Una petición `?$lock` devuelve un objeto JSON con `"result"=true` si la operación de bloqueo se reutiliza y `"result"=false` si falla.

El objeto "__STATUS" devuelto tiene las siguientes propiedades:

| Propiedad    |  | Tipo    | Descripción                                                                                                                                           |
| ------------ |  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |  |         | ***Disponible sólo en caso de éxito:***                                                                                                               |
| success      |  | boolean | true si la acción de bloqueo tiene éxito (o si la entidad ya está bloqueada en la sesión actual), false en caso contrario (no devuelto en este caso). |
|              |  |         | ***Disponible sólo en caso de error:***                                                                                                               |
| status       |  | number  | Código de error, ver abajo                                                                                                                            |
| statusText   |  | text    | Descripción del error, ver abajo                                                                                                                      |
| lockKind     |  | number  | Código de bloqueo                                                                                                                                     |
| lockKindText |  | text    | "Locked by session" si está bloqueado por una sesión REST, "Locked by record" si está bloqueado por un proceso 4D                                     |


Los siguientes valores pueden ser devueltos en las propiedade *status* y *statusText* del objeto *__STATUS* en caso de error:

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

En un segundo navegador (otra sesión), enviamos la misma petición.

**Respuesta:**

```
{
    "result":false,
    "__STATUS":{
        "status":3,
        "statusText":"Already Locked",
        "lockKind":7,
        "lockKindText":"Locked By Session",
    }
}
```

