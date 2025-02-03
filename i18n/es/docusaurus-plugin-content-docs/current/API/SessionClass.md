---
id: SessionClass
title: Session
---

Los objetos de sesión son devueltos por el comando [`Session`](../commands/session.md). Estos objetos ofrecen al desarrollador una interfaz que permite gestionar la sesión de usuario actual y ejecutar acciones como almacenar datos contextuales, compartir información entre procesos de sesión, lanzar procesos preferentes relacionados con la sesión o (sólo web) gestionar [privilegios](../ORDA/privileges.md).

### Tipos de sesiones

The following types of sessions are supported by this class:

- [**Sesiones usuario web**](WebServer/sessions.md): las sesiones usuario web están disponibles cuando [las sesiones escalables están activas en su proyecto](WebServer/sessions.md#enabling-sessions). Se utilizan para conexiones Web y REST, y se les pueden asignar privilegios.
- [Sesiones usuario cliente remoto\*\*](../Desktop/clientServer.md#remote-user-sessions): en las aplicaciones cliente/servidor, los usuarios remotos tienen sus propias sesiones gestionadas en el servidor.
- [**Stored procedures session**](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html): All stored procedures executed on the server share the same virtual user session.
- [**Sesión independiente**](../Project/overview.md#development): objeto de sesión local devuelto en una aplicación de un solo usuario (útil en las fases de desarrollo y prueba de aplicaciones cliente/servidor).

:::note

La disponibilidad de las propiedades y funciones del objeto `Session` depende del tipo de sesión.

:::

### Resumen

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.createOTP().Syntax -->](#createotp)<br/><!-- INCLUDE #SessionClass.createOTP().Summary -->                   |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.restore().Syntax -->](#restore)<br/><!-- INCLUDE #SessionClass.restore().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parámetros | Tipo    |                             | Descripción                                        |
| ---------- | ------- | :-------------------------: | -------------------------------------------------- |
| Result     | Boolean | <- | True si la ejecución se ha realizado correctamente |

<!-- END REF -->

#### Descripción

:::note

This function does nothing and always returns **True** with remote client, stored procedure, and standalone sessions.

:::

La función `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->elimina todos los privilegios asociados a la sesión y devuelve **True** si la ejecución se ha realizado correctamente<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.

#### Ejemplo

```4d
//Invalidar una sesión usuario web
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest es True
```

<!-- END REF -->

<!-- REF SessionClass.createOTP().Desc -->

## .createOTP()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R9       | Añadidos       |

</details>

<!-- REF #SessionClass.createOTP().Syntax -->**.createOTP** ( { *lifespan* : Integer } ) : Text <!-- END REF -->

<!-- REF #SessionClass.createOTP().Params -->

| Parámetros | Tipo    |                             | Descripción                       |
| ---------- | ------- | :-------------------------: | --------------------------------- |
| lifespan   | Integer |              ->             | Session token lifespan in seconds |
| Result     | Text    | <- | UUID of the session               |

<!-- END REF -->

#### Descripción

:::note

This function is only available with web user sessions. It returns an empty string in other contexts.

:::

The `.createOTP()` function <!-- REF #SessionClass.createOTP().Summary -->creates a new OTP (One Time Passcode) for the session and returns its token UUID<!-- END REF -->. This token is unique to the session in which it was generated.

For more information about the OTP tokens, please refer to [this section](../WebServer/sessions.md#session-token-otp).

By default, if the *lifespan* parameter is omitted, the token is created with the same lifespan as the [`.idleTimeOut`](#idletimeout) of the session. You can set a custom timeout by passing a value in seconds in *lifespan* (the minimum value is 10 seconds, *lifespan* is reset to 10 if a smaller value is passed). If an expired token is used to restore a web user session, it is ignored.

The returned token can then be used in exchanges with third-party applications or websites to securely identify the session. For example, the session OTP token can be used with a payment application.

#### Ejemplo

```4d
var $token : Text
$token := Session.createOTP( 60 ) //the token is valid for 1 mn
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->

## .expirationDate

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descripción

:::note

Esta propiedad sólo está disponible con sesiones de usuario web.

:::

La propiedad `.expirationDate` contiene <!-- REF #SessionClass.expirationDate.Summary -->la fecha y hora de expiración de la cookie de sesión<!-- END REF -->. El valor se expresa como texto en el formato ISO 8601: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

Esta propiedad es de **solo lectura**. Se recalcula automáticamente si se modifica el valor de la propiedad [`.idleTimeout`](#idletimeout).

#### Ejemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.getPrivileges().Desc -->

## .getPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->

<!-- REF #SessionClass.getPrivileges().Params -->

| Parámetros | Tipo       |                             | Descripción                                                      |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------- |
| Result     | Collection | <- | Colección de nombres de privilegios (cadenas) |

<!-- END REF -->

#### Descripción

La función `.getPrivileges()` <!-- REF #SessionClass.getPrivileges().Summary -->devuelve una colección de todos los nombres de privilegios asociados a la sesión<!-- END REF -->.

With remote client, stored procedure and standalone sessions, this function returns a collection only containing "WebAdmin".

:::info

Los privilegios se asignan a una Sesión utilizando la función [`setPrivileges()`](#setprivileges).

:::

#### Ejemplo

Se ha definido el siguiente archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file):

```json
{
   "privileges":[
      {
         "privilege":"simple",
         "includes":[

         ]
      },
      {
         "privilege":"medium",
         "includes":[
            "simple"
         ]
      }
   ],
   "roles":[
      {
         "role":"Medium",
         "privileges":[
            "medium"
         ]
      }
   ],
   "permissions":{
      "allowed":[

      ]
   }
}
```

El rol de sesión se asigna en una función datastore `authentify()`:

```4d
  //Clase Datastore

exposed Function authentify($role : Text) : Text
	Session.clearPrivileges()
	Session.setPrivileges({roles: $role})
```

Asumiendo que la función `authentify()` es llamada con el rol "Medium":

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
//$privileges: ["simple","medium"]
```

#### Ver también

[.setPrivileges()](#setprivileges)<br/>
[Permisos - Inspeccionar los privilegios en la sesión para una fácil depuración (entrada de blog)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| Parámetros | Tipo    |                             | Descripción                                                  |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------ |
| privilege  | Text    |              ->             | Nombre del privilegio a verificar                            |
| Result     | Boolean | <- | True si la sesión tiene *privilege*, False en caso contrario |

<!-- END REF -->

#### Descripción

La función `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->devuelve True si *privilege* está asociado a la sesión, y False en caso contrario<!-- END REF -->.

With remote client, stored procedure and standalone sessions, this function always returns True, whatever the *privilege*.

#### Ejemplo

Quiere comprobar si el privilegio "WebAdmin" está asociado a la sesión usuario web:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Acceso concedido, no hacer nada
Else
	//Mostrar una página de autenticación

End if
```

<!-- END REF -->

<!-- REF SessionClass.id.Desc -->

## .id

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descripción

La propiedad `.id` contiene <!-- REF #SessionClass.id.Summary -->el identificador único (UUID) de la sesión de usuario<!-- END REF -->. With 4D Server, this unique string is automatically assigned by the server for each session and allows you to identify its processes.

:::tip

Puede utilizar esta propiedad para obtener el objeto [`.storage`](#storage) de una sesión gracias al comando [`Session storage`](../commands/session-storage.md).

:::

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |

|18 R6|Añadido|

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descripción

:::note

Esta propiedad sólo está disponible con sesiones de usuario web.

:::

La propiedad `.idleTimeout` contiene <!-- REF #SessionClass.idleTimeout.Summary -->el tiempo de inactividad de la sesión (en minutos), después del cual la sesión es cerrada automáticamente por 4D<!-- END REF -->.

Si no se define esta propiedad, el valor por defecto es 60 (1h).

Cuando se define esta propiedad, la propiedad [`expirationDate`](#expirationdate) se actualiza en consecuencia.

> El valor no puede ser inferior a 60: si se define un valor inferior, el tiempo de espera se eleva hasta 60.

Esta propiedad está en **lectura escritura**.

#### Ejemplo

```4d
If (Session.isGuest())
		// Una sesión de invitado se cerrará tras 60 minutos de inactividad
	Session.idleTimeout:=60
Else
		// Otras sesiones se cerrarán tras 120 minutos de inactividad
	Session.idleTimeout:=120
End if

```

<!-- END REF -->

<!-- REF SessionClass.info.Desc -->

## .info

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descripción

:::note

This property is only available with remote client, stored procedure, and standalone sessions.

:::

La propiedad `.info` <!-- REF #SessionClass.info.Summary -->describe la sesión del cliente remoto o del procedimiento almacenado en el servidor, o la sesión autónoma<!-- END REF -->.

:::note

- El objeto `.info` es el mismo objeto que el devuelto en la propiedad "session" por el comando [`Process activity`](../commands/process-activity.md) para sesiones de cliente remoto y procedimientos almacenados.
- El objeto `.info` es el mismo que devuelve el comando [`Session info`](../commands/session-info.md) para una sesión autónoma.

:::

El objeto `.info` contiene las siguientes propiedades:

| Propiedad        | Tipo          | Descripción                                                                                                                                                                                                                   |
| ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sesión: "remote", "storedProcedure", "standalone"                                                                                                                                                     |
| userName         | Text          | Nombre de usuario 4D (mismo valor que [`.userName`](#username))                                                                                                                                            |
| machineName      | Text          | Sesiones remotas: nombre de la máquina remota. Stored procedures session: name of the server machine. Standalone session: name of the machine |
| systemUserName   | Text          | Sesiones remotas: nombre de la sesión del sistema abierta en la máquina remota.                                                                                                               |
| IPAddress        | Text          | Dirección IP de la máquina remota                                                                                                                                                                                             |
| hostType         | Text          | Tipo de host: "windows" o "mac"                                                                                                                                                                               |
| creationDateTime | Date ISO 8601 | Date and time of session creation. Standalone session: date and time of application startup                                                                                                   |
| state            | Text          | Estado de la sesión: "active", "postponed", "sleeping"                                                                                                                                                        |
| ID               | Text          | UUID de sesión (el mismo valor que [`.id`](#id))                                                                                                                                                           |
| persistentID     | Text          | Remote sessions: Session's persistent ID                                                                                                                                                                      |

:::note

Dado que `.info` es una propiedad calculada, se recomienda llamarla una vez y luego almacenarla en una variable local si se desea realizar algún procesamiento sobre sus propiedades.

:::

<!-- END REF -->

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |
| ---------- | ------- | :-------------------------: | -------------------------------------------------------------- |
| Result     | Boolean | <- | True si la sesión es una sesión Guest, False en caso contrario |

<!-- END REF -->

#### Descripción

:::note

This function always returns **False** with remote client, stored procedure, and standalone sessions.

:::

La función `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->devuelve True si la sesión es una sesión Guest (es decir, no tiene privilegios)<!-- END REF -->.

#### Ejemplo

En el método base `On Web Connection`:

```4d
If (Session.isGuest())
	//Hacer algo para el usuario invitado
End if
```

<!-- END REF -->

<!-- REF SessionClass.restore().Desc -->

## .restore()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R9       | Añadidos       |

</details>

<!-- REF #SessionClass.restore().Syntax -->**.restore** ( *token* : Text ) : Boolean <!-- END REF -->

<!-- REF #SessionClass.restore().Params -->

| Parámetros | Tipo    |                             | Descripción                                                                        |
| ---------- | ------- | :-------------------------: | ---------------------------------------------------------------------------------- |
| token      | Text    |              ->             | Session token UUID                                                                 |
| Result     | Boolean | <- | True if the current session has been successfully replaced by the session in token |

<!-- END REF -->

#### Descripción

:::note

This function is only available with web user sessions. It returns False in other contexts.

:::

The `.restore()` function <!-- REF #SessionClass.restore().Summary -->replaces the current web user session with their original session corresponding to the *token* UUID<!-- END REF -->. Session's storage and privileges are restored.

If the original user session has been correctly restored, the function returns `true`.

The function returns `false` if:

- the session token has already been used,
- the session token has expired,
- the session token does not exist,
- the original session itself has expired.

In this case, the current web user session is left untouched (no session is restored).

#### Ejemplo

In a singleton called by a custom HTTP Request handler:

```4d
shared singleton Class constructor()

Function callback($request : 4D.IncomingMessage) : 4D.OutgoingMessage
   Session.restore($request.urlQuery.state) 
```

#### Ver también

[`.createOTP()`](#createotp)

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->

## .setPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                      |
| ----------- | --------------------------------------------------- |
| 19 R8       | Compatibilidad con la propiedad "roles" en Settings |
| 18 R6       | Añadidos                                            |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

| Parámetros | Tipo       |                             | Descripción                                                                    |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------ |
| privilege  | Text       |              ->             | Nombre del privilegio                                                          |
| privileges | Collection |              ->             | Colección de nombres de privilegios                                            |
| settings   | Object     |              ->             | Objeto con una propiedad "privilegios" (cadena o colección) |
| Result     | Boolean    | <- | True si la ejecución se ha realizado correctamente                             |

<!-- END REF -->

#### Descripción

:::note

This function does nothing and always returns **False** with remote client, stored procedure, and standalone sessions.

:::

La función `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->asocia a la sesión los privilegios y/o roles definidos en el parámetro y devuelve **True** si la ejecución se ha realizado correctamente<!-- END REF -->.

- En el parámetro *privilege*, pase una cadena que contenga un nombre de privilegio (o varios nombres de privilegio separados por comas).

- En el parámetro *privileges*, pase una colección de cadenas que contengan nombres de privilegios.

- En el parámetro *settings*, pase un objeto que contenga las siguientes propiedades:

| Propiedad  | Tipo              | Descripción                                                                                                               |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| privileges | Text o Collection | <li>Cadena que contiene un nombre de privilegio, o</li><li>Colección de cadenas que contienen nombres de privilegios</li> |
| roles      | Text o Collection | <li>Cadena que contiene un rol, o</li><li>Colección de cadenas que contienen roles</li>                                   |
| userName   | Text              | Nombre de usuario para asociar a la sesión (opcional)                                                  |

:::note

Los privilegios y los roles se definen en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) del proyecto. Para más información, consulte la sección [**Privilegios**](../ORDA/privileges.md).

:::

Si la propiedad `privileges` o `roles` contiene un nombre que no está declarado en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), se ignora.

Por defecto, cuando no hay ningún privilegio o rol asociado a la sesión, la sesión es una [sesión de invitado](#isguest).

La propiedad [`userName`](#username) está disponible a nivel de objeto de sesión (sólo lectura).

#### Ejemplo

En un método de autenticación personalizado, se establece el privilegio "WebAdmin" para el usuario:

```4d
var $userOK : Boolean

... //Autenticar al usuario

If ($userOK) //El usuario ha sido aprobado
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```

#### Ver también

[.getPrivileges()](#getprivileges)

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descripción

La propiedad `.storage` contiene <!-- REF #SessionClass.storage.Summary -->un objeto compartido que puede utilizarse para almacenar información disponible para todos los procesos de la sesión<!-- END REF -->.

Cuando se crea un objeto `Session`, la propiedad `.storage` está vacía. Al ser un objeto compartido, esta propiedad estará disponible en el objeto `Storage` del servidor.

> Al igual que el objeto `Storage` del servidor, la propiedad `.storage` es siempre "single": añadir un objeto compartido o una colección compartida a `.storage` no crea un grupo compartido.

Esta propiedad es **sólo lectura** en sí misma pero devuelve un objeto de lectura-escritura.

:::tip

Puede obtener la propiedad `.storage` de una sesión utilizando el comando [`Session storage`](../commands/session-storage.md).

:::

#### Ejemplo de sesión web

Desea almacenar la IP del cliente en la propiedad `.storage`. Puede escribir en el método base `On Web Authentication`:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if
```

#### Ejemplo de sesión remota

Desea compartir datos entre procesos de la misma sesión:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descripción

La propiedad `.userName` contiene <!-- REF #SessionClass.userName.Summary -->el nombre de usuario asociado a la sesión<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

- Con las sesiones web, esta propiedad es una cadena vacía por defecto. Puede definirse mediante la propiedad `privileges` de la función [`setPrivileges()`](#setprivileges).
- Con sesiones remotas y de procedimientos almacenados, esta propiedad devuelve el mismo nombre de usuario que el comando [`Current user`](../commands-legacy/current-user.md).
- Con sesiones independientes, esta propiedad contiene "diseñador" o el nombre definido con el comando [`SET USER ALIAS`](../commands-legacy/set-user-alias.md).

Esta propiedad es **solo lectura**.

<!-- END REF -->
