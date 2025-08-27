---
id: SessionClass
title: Session
---

Los objetos de sesión son devueltos por el comando [`Session`](../commands/session.md). Estos objetos ofrecen al desarrollador una interfaz que permite gestionar la sesión de usuario actual y ejecutar acciones como almacenar datos contextuales, compartir información entre procesos de sesión, lanzar procesos preferentes relacionados con la sesión o (sólo web) gestionar [privilegios](../ORDA/privileges.md).

### Tipos de sesiones

Los siguientes tipos de sesiones están soportados por esta clase:

- [**Sesiones usuario web**](WebServer/sessions.md): las sesiones usuario web están disponibles cuando [las sesiones escalables están activas en su proyecto](WebServer/sessions.md#enabling-web-sessions). Se utilizan para conexiones Web y REST, y se les pueden asignar privilegios.
- [Sesiones usuario cliente remoto\*\*](../Desktop/clientServer.md#remote-user-sessions): en las aplicaciones cliente/servidor, los usuarios remotos tienen sus propias sesiones gestionadas en el servidor.
- [**Sesión de procedimientos almacenados**](https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html): todos los procedimientos almacenados ejecutados en el servidor comparten la misma sesión usuario virtual.
- [**Sesión independiente**](../Project/overview.md#development): objeto de sesión local devuelto en una aplicación de un solo usuario (útil en las fases de desarrollo y prueba de aplicaciones cliente/servidor).

:::note

La disponibilidad de las propiedades y funciones del objeto `Session` depende del tipo de sesión.

:::

### Resumen

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.createOTP().Syntax -->](#createotp)<br/><!-- INCLUDE #SessionClass.createOTP().Summary -->                   |
| [<!-- INCLUDE #SessionClass.demote().Syntax -->](#demote)<br/><!-- INCLUDE #SessionClass.demote().Summary -->                            |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.promote().Syntax -->](#promote)<br/><!-- INCLUDE #SessionClass.promote().Summary -->                         |
| [<!-- INCLUDE #SessionClass.restore().Syntax -->](#restore)<br/><!-- INCLUDE #SessionClass.restore().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

### Para aprender más

[**Scalable sessions for advanced web applications**](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/) (blog post)<br/>
[**Permissions: Inspect Session Privileges for Easy Debugging**](https://blog.4d.com/permissions-inspect-session-privileges-for-easy-debugging/) (blog post)

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
| Resultado  | Boolean | <- | True si la ejecución se ha realizado correctamente |

<!-- END REF -->

#### Descripción

:::note

Esta función no hace nada y siempre devuelve **True** con cliente remoto, procedimiento almacenado y sesiones independientes.

:::

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session (excluding promoted privileges) and returns **True** if the execution was successful<!-- END REF -->.

A menos que esté en modo ["forceLogin"](../REST/authUsers.md#force-login-mode), la sesión se convierte automáticamente en una sesión de Invitado. En modo "forceLogin", `.clearPrivileges()` no transforma la sesión a una sesión de invitado, sólo elimina los privilegios de la sesión.

:::note

This function does not remove **promoted privileges** from the web process, whether they are added through the [roles.json](../ORDA/privileges.md#rolesjson-file) file or the [`promote()`](#promote) function.

:::

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

| Parámetros | Tipo    |                             | Descripción                                         |
| ---------- | ------- | :-------------------------: | --------------------------------------------------- |
| lifespan   | Integer |              ->             | Duración de la vida del token de sesión en segundos |
| Resultado  | Text    | <- | UUID de la sesión                                   |

<!-- END REF -->

#### Descripción

:::note

Esta función solo está disponible con sesiones usuario web. Devuelve una cadena vacía en otros contextos.

:::

La función `.createOTP()` <!-- REF #SessionClass.createOTP().Summary -->crea un nuevo OTP (One Time Passcode) para la sesión y devuelve su token UUID<!-- END REF -->. Este token es único en la sesión en la que fue generado.

Para más información sobre los tokens OTP, por favor consulte [esta sección](../WebServer/sessions.md#session-token-otp).

Por defecto, si se omite el parámetro *lifespan*, el token se crea con el mismo tiempo de vida que el [`.idleTimeOut`](#idletimeout) de la sesión. Puede definir un tiempo de espera personalizado pasando un valor en segundos en *lifespan* (el valor mínimo es de 10 segundos, *lifespan* se restablece a 10 si se pasa un valor menor). Si se utiliza un token caducado para restaurar una sesión de usuario web, se ignora.

El token devuelto puede ser utilizado en intercambios con aplicaciones de terceros o sitios web para identificar la sesión de forma segura. Por ejemplo, el token OTP de sesión se puede utilizar con una aplicación de pago.

#### Ejemplo

```4d
var $token : Text
$token := Session.createOTP( 60 ) //el token es válido durante 1 mn
```

<!-- END REF -->

<!-- REF SessionClass.demote().Desc -->

## .demote()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R10      | Añadidos       |

</details>

<!-- REF #SessionClass.demote().Syntax -->**.demote**( *promoteId* : Integer )<!-- END REF -->

<!-- REF #SessionClass.demote().Params -->

| Parámetros | Tipo    |     | Descripción                             |
| ---------- | ------- | :-: | --------------------------------------- |
| promoteId  | Integer |  -> | Id returned by the `promote()` function |

<!-- END REF -->

#### Descripción

:::note

This function does nothing in remote client, stored procedure, and standalone sessions.

:::

The `.demote()` function <!-- REF #SessionClass.demote().Summary -->removes the promoted privilege whose id you passed in *promoteId* from the web process, if it was previously added by the [`.promote()`](#promote) function<!-- END REF -->.

If no privilege with *promoteId* was promoted using [`.promote()`](#promote) in the web process, the function does nothing.

If several privileges have been added to the web process, the `demote()` function must be called for each one with the appropriate *promoteId*. Privileges are stacked in the order they have been added to the process, it is recommended to unstack privileges in a LIFO (*Last In, First Out*) order.

#### Ejemplo

```4d
exposed Function search($search : Text) : Collection
	
	var $employees : Collection
	var $promoteId1; $promoteId2 : Integer
	
	$promoteId1:=Session.promote("admin")
	$promoteId2:=Session.promote("superAdmin")
	
	$search:="@"+$search+"@"
	
	$employees:=This.query("type = :1 and lastname = :2"; "Intern"; $search).toCollection()
	
	Session.demote($promoteId2)
	Session.demote($promoteId1)
	
	return $employees
```

#### Ver también

[`.promote()`](#promote)

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
| Resultado  | Collection | <- | Colección de nombres de privilegios (cadenas) |

<!-- END REF -->

#### Descripción

La función `.getPrivileges()` <!-- REF #SessionClass.getPrivileges().Summary -->devuelve una colección de todos los nombres de privilegios asociados a la sesión<!-- END REF -->.

:::note

This function returns privileges assigned to a Session using the [`setPrivileges()`](#setprivileges) function only. Promoted privileges are NOT returned by the function, whether they are added through the [roles.json](../ORDA/privileges.md#rolesjson-file) file or the [`promote()`](#promote) function.

:::

Con clientes remotos, procedimientos almacenados y sesiones independientes, esta función devuelve una colección que sólo contiene "WebAdmin".

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

| Lanzamiento | Modificaciones                       |
| ----------- | ------------------------------------ |
| 21          | Returns True for promoted privileges |
| 18 R6       | Añadidos                             |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| Parámetros | Tipo    |                             | Descripción                                                  |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------ |
| privilege  | Text    |              ->             | Nombre del privilegio a verificar                            |
| Resultado  | Boolean | <- | True si la sesión tiene *privilege*, False en caso contrario |

<!-- END REF -->

#### Descripción

La función `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->devuelve True si *privilege* está asociado a la sesión, y False en caso contrario<!-- END REF -->.

:::note

This function returns True for the *privilege* if called from a function that was promoted for this privilege (either through the [roles.json](../ORDA/privileges.md#rolesjson-file) file or the [`promote()`](#promote) function).

:::

Con cliente remoto, procedimientos almacenados y sesiones independientes, esta función siempre devuelve True, sea cual sea el *privilege*.

#### Ejemplo

Quiere comprobar si el privilegio "WebAdmin" está asociado a la sesión usuario web:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Acceso concedido, no hacer nada
Else
	//Mostrar una página de autenticación

End if
```

#### Ver también

[**Blog posts about this feature**](https://blog.4d.com/?s=hasPrivilege)

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

La propiedad `.id` contiene <!-- REF #SessionClass.id.Summary -->el identificador único (UUID) de la sesión de usuario<!-- END REF -->. Con 4D Server, esta cadena única es asignada automáticamente por el servidor para cada sesión y permite identificar sus procesos.

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

Esta propiedad solo está disponible con clientes remotos, procedimientos almacenados y sesiones independientes.

:::

La propiedad `.info` <!-- REF #SessionClass.info.Summary -->describe la sesión del cliente remoto o del procedimiento almacenado en el servidor, o la sesión autónoma<!-- END REF -->.

:::note

- El objeto `.info` es el mismo objeto que el devuelto en la propiedad "session" por el comando [`Process activity`](../commands/process-activity.md) para sesiones de cliente remoto y procedimientos almacenados.
- El objeto `.info` es el mismo que devuelve el comando [`Session info`](../commands/session-info.md) para una sesión autónoma.

:::

El objeto `.info` contiene las siguientes propiedades:

| Propiedad        | Tipo          | Descripción                                                                                                                                                                                                                            |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sesión: "remote", "storedProcedure", "standalone"                                                                                                                                                              |
| userName         | Text          | Nombre de usuario 4D (mismo valor que [`.userName`](#username))                                                                                                                                                     |
| machineName      | Text          | Sesiones remotas: nombre de la máquina remota. Sesión de procedimientos almacenados: nombre del equipo servidor. Sesión autónoma: nombre de la máquina |
| systemUserName   | Text          | Sesiones remotas: nombre de la sesión del sistema abierta en la máquina remota.                                                                                                                        |
| IPAddress        | Text          | Dirección IP de la máquina remota                                                                                                                                                                                                      |
| hostType         | Text          | Tipo de host: "windows" o "mac"                                                                                                                                                                                        |
| creationDateTime | Date ISO 8601 | Fecha y hora de creación de la sesión. Sesión autónoma: fecha y hora de inicio de la aplicación                                                                                                        |
| state            | Text          | Estado de la sesión: "active", "postponed", "sleeping"                                                                                                                                                                 |
| ID               | Text          | UUID de sesión (el mismo valor que [`.id`](#id))                                                                                                                                                                    |
| persistentID     | Text          | Sesiones remotas: ID persistente de la sesión                                                                                                                                                                          |

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
| Resultado  | Boolean | <- | True si la sesión es una sesión Guest, False en caso contrario |

<!-- END REF -->

#### Descripción

:::note

Esta función siempre devuelve **False** con clientes remotos, procedimientos almacenados y sesiones independientes.

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

<!-- REF SessionClass.promote().Desc -->

## .promote()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R10      | Añadidos       |

</details>

<!-- REF #SessionClass.promote().Syntax -->**.promote**( *privilege* : Text ) : Integer<!-- END REF -->

<!-- REF #SessionClass.promote().Params -->

| Parámetros | Tipo    |                             | Descripción                                               |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------- |
| privilege  | Text    |              ->             | Nombre del privilegio                                     |
| Resultado  | Integer | <- | id to use when calling the [`demote()`](#demote) function |

<!-- END REF -->

#### Descripción

:::note

This function does nothing in remote client, stored procedure, and standalone sessions.

:::

The `.promote()` function <!-- REF #SessionClass.promote().Summary -->adds the privilege defined in the *privilege* parameter to the current process during the execution of the calling function and returns the id of the promoted privilege<!-- END REF -->.

Dynamically adding privileges is useful when access rights depend on the execution context, which cannot be fully defined in the "roles.json" file. This is particularly relevant when the same function can be executed by users with different access levels. The use of `.promote()` ensures that only the current process is granted the necessary privileges, without affecting others.

The function does nothing and returns 0 if:

- the *privilege* does not exist in the [`roles.json`](../ORDA/privileges.md#rolesjson-file) file,
- the *privilege* is already assigned to the current process (using `.promote()` or through a static [promote action](../ORDA/privileges.md#permission-actions) declared for the calling function in the [`roles.json`](../ORDA/privileges.md#rolesjson-file) file).

You can call the `promote()` function several times in the same process to add different privileges.

The returned id is incremented each time a privilege is dynamically added to the process.

To remove a privilege dynamically, call the `demote()` function with the appropriate id.

#### Ejemplo

Several users connect to a single endpoint that serves different applications. A user from application #1 does not need the "super_admin" privilege because they don't create "VerySensitiveInfo". A user from application #2 needs "super_admin" privilege.

You can dynamically provide appropriate privileges in the *CreateInfo* function:

```4d
exposed Function createInfo($info1 : Text; $info2 : Text)
	
var $sensitive : cs.SensitiveInfoEntity
var $verySensitiveInfo : cs.VerySensitiveInfoEntity
var $status : Object
var $promoteId : Integer
	
$sensitive:=ds.SensitiveInfo.new()
$sensitive.info:=$info1
$status:=$sensitive.save()
	
If (Session.storage.role.name="userApp2")
	$promoteId:=Session.promote("super_admin")
	$verySensitiveInfo:=ds.VerySensitiveInfo.new()
	$verySensitiveInfo.info:=$info2
	$status:=$verySensitiveInfo.save()
	Session.demote($promoteId)
End if 
```

#### Ver también

[`.demote()`](#demote)<br/>[`hasPrivilege()`](#hasprivilege)

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

| Parámetros | Tipo    |                             | Descripción                                                                    |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------------------ |
| token      | Text    |              ->             | UUID del token de sesión                                                       |
| Resultado  | Boolean | <- | True si la sesión actual ha sido reemplazada con éxito por la sesión del token |

<!-- END REF -->

#### Descripción

:::note

Esta función solo está disponible con sesiones usuario web. Devuelve False en otros contextos.

:::

La función `.restore()` <!-- REF #SessionClass.restore().Summary -->sustituye la sesión actual del usuario web por su sesión original correspondiente al *token* UUID<!-- END REF -->. El almacenamiento y los privilegios de la sesión son restaurados.

Si la sesión original del usuario ha sido correctamente restaurada, la función devuelve `true`.

La función devuelve `false` si:

- el token de sesión ya ha sido utilizado,
- el token de sesión ha caducado,
- el token de sesión no existe,
- la propia sesión original ha caducado.

En este caso, la sesión actual de usuario web se deja sin tocar (no se restaura la sesión).

#### Ejemplo

En un singleton llamado por un HTTP Request handler personalizado:

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
| Resultado  | Boolean    | <- | True si la ejecución se ha realizado correctamente                             |

<!-- END REF -->

#### Descripción

:::note

Esta función no hace nada y siempre devuelve **False** con cliente remoto, procedimiento almacenado y sesiones independientes.

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
