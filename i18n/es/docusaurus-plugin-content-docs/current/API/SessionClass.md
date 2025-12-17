---
id: SessionClass
title: Session
---

Los objetos de sesión son devueltos por el comando [`Session`](../commands/session.md). Estos objetos ofrecen al desarrollador una interfaz que permite gestionar la sesión de usuario actual y ejecutar acciones como almacenar datos contextuales, compartir información entre procesos de sesión, lanzar procesos preferentes relacionados con la sesión o (sólo web) gestionar [privilegios](../ORDA/privileges.md).

:::tip Entradas de blog relacionadas

- [Sesiones escalables para aplicaciones web avanzadas](https://blog.4d.com/scalable-sessions-for-advanced-web-applications/)
- [Permissions: inspeccionar los privilegios de la sesión para facilitar la depuración](https://blog.4d.com/permissions-inspect-session-privileges-for-easy-debugging/)
- [Generar, compartir y utilizar contraseñas de un solo uso (OTP) para las sesiones web](https://blog.4d.com/connect-your-web-apps-to-third-party-systems/)

:::

### Tipos de sesiones

Los siguientes tipos de sesiones están soportados por esta clase:

- [**Sesiones usuario web**](WebServer/sessions.md): las sesiones usuario web están disponibles cuando [las sesiones escalables están activas en su proyecto](WebServer/sessions.md#enabling-web-sessions). They are used for Web connections (including and REST access), and are controlled by assigned [privileges](../ORDA/privileges.md).
- [**Sesiones de escritorio**](../Desktop/sessions.md), que incluyen:
  - [**Remote user sessions**](../Desktop/sessions.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
  - [**Stored procedures sessions**](../Desktop/sessions.md#stored-procedure-sessions): Virtual user session for all stored procedures executed on the server.
  - [**Standalone sessions**](../Desktop/sessions.md#standalone-sessions): Local session object returned in single-user application (useful in development and test phases of client/server applications).

:::warning About session privileges

All session types can handle privileges, but only the code executed in [web user sessions](WebServer/sessions.md) is actually controlled by session's privileges.

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

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                            |
| ----------- | ----------------------------------------- |
| 21          | Support of remote and standalone sessions |
| 18 R6       | Añadidos                                  |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parámetros | Tipo    |                             | Descripción                                        |
| ---------- | ------- | :-------------------------: | -------------------------------------------------- |
| Resultado  | Boolean | <- | True si la ejecución se ha realizado correctamente |

<!-- END REF -->

#### Descripción

La función `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->elimina todos los privilegios asociados a la sesión (excluyendo privilegios promocionados)y devuelve **True** si la ejecución se ha realizado correctamente<!-- END REF -->.

:::note

Esta función no elimina los **privilegios promovidos** del proceso web, tanto si se han añadido a través del archivo [roles.json](../ORDA/privileges.md#rolesjson-file) como de la función [`promote()`](#promote).

:::

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

#### Ejemplo

```4d
//Invalidate a web user session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
```

<!-- END REF -->

<!-- REF SessionClass.createOTP().Desc -->

## .createOTP()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                            |
| ----------- | ----------------------------------------- |
| 21          | Support of remote and standalone sessions |
| 20 R9       | Añadidos                                  |

</details>

<!-- REF #SessionClass.createOTP().Syntax -->**.createOTP** ( { *lifespan* : Integer } ) : Text <!-- END REF -->

<!-- REF #SessionClass.createOTP().Params -->

| Parámetros | Tipo    |                             | Descripción                                                              |
| ---------- | ------- | :-------------------------: | ------------------------------------------------------------------------ |
| lifespan   | Integer |              ->             | Session token lifespan in seconds (web sessions only) |
| Resultado  | Text    | <- | UUID del token                                                           |

<!-- END REF -->

#### Descripción

La función `.createOTP()` <!-- REF #SessionClass.createOTP().Summary -->crea un nuevo OTP (One Time Passcode) para la sesión y devuelve su token UUID<!-- END REF -->. Este token es único en la sesión en la que fue generado.

Para más información sobre los tokens OTP, por favor consulte [esta sección](../WebServer/sessions.md#session-token-otp).

Si se utiliza un token caducado para restaurar la sesión, se ignora.

For web sessions, you can set a custom timeout by passing a value in seconds in *lifespan*. Por defecto, si se omite el parámetro *lifespan*, el token se crea con el mismo tiempo de vida que el [`.idleTimeOut`](#idletimeout) de la sesión.

For desktop sessions, the token is created with a 10 seconds lifespan.

The returned token can be used in exchanges with third-party applications or websites to securely identify the session. Por ejemplo, el token OTP de sesión se puede utilizar con una aplicación de pago.

The returned token can be used by 4D Server or 4D single-user application to identify requests coming from the web that [share the session](../Desktop/sessions.md#sharing-a-desktop-session-for-web-accesses).

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

| Parámetros | Tipo    |     | Descripción                            |
| ---------- | ------- | :-: | -------------------------------------- |
| promoteId  | Integer |  -> | Id devuelto por la función `promote()` |

<!-- END REF -->

#### Descripción

La función `.demote()` <!-- REF #SessionClass.demote().Summary -->elimina del proceso web el privilegio promocionado cuyo id pasó en *promoteId*, si fue añadido previamente por la función [`.promote()`](#promote)<!-- END REF -->.

Si ningún privilegio con *promoteId* fue promovido usando [`.promote()`](#promote) en el proceso web, la función no hace nada.

Si se han añadido varios privilegios al proceso web, se debe llamar a la función `demote()` para cada uno de ellos con el *promoteId* apropiado. Los privilegios se apilan en el orden en que se han añadido al proceso, se recomienda desapilar los privilegios en un orden LIFO (*Last In, First Out*).

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

| Lanzamiento | Modificaciones                            |
| ----------- | ----------------------------------------- |
| 21          | Support of remote and standalone sessions |
| 20 R6       | Añadidos                                  |

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

Esta función devuelve los privilegios asignados a una Sesión utilizando únicamente la función [`setPrivileges()`](#setprivileges). Los privilegios promocionados NO son devueltos por la función, ya sea a través del archivo [roles.json](../ORDA/privileges.md#rolesjson-file) o la función [`promote()`](#promote).

:::

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
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
[*Permisos - Inspeccionar los privilegios en la sesión para una fácil depuración* (entrada de blog)](https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                  |
| ----------- | ------------------------------------------------------------------------------- |
| 21          | Returns True for promoted privileges, Support of remote and standalone sessions |
| 18 R6       | Añadidos                                                                        |

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

Esta función devuelve True para el *privilegio* si se llama desde una función que fue promovida para este privilegio (ya sea a través del archivo [roles.json](../ORDA/privileges.md#rolesjson-file) o la función [`promote()`](#promote)).

:::

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

#### Ejemplo

You want to check if the "CreateInvoices" privilege is associated to the web user session:

```4d
If (Session.hasPrivilege("CreateInvoices"))
	//Access to Invoice creation features
Else
	//No access to Invoice creation features 

End if
```

#### Ver también

[*Restrict data according to privileges or information saved in session storage* (blog post)](https://blog.4d.com/?s=hasPrivilege)

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
| 18 R6       | Añadidos       |

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

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the desktop or web session<!-- END REF -->.

- **Remote sessions** and **Stored procedure sessions**: The `.info` object is the same object as the one returned in the "session" property by the [`Process activity`](../commands/process-activity.md) command.
- **Standalone sessions**: The `.info` object is the same object as the one returned by the [`Session info`](../commands/session-info.md) command.

El objeto `.info` contiene las siguientes propiedades:

| Propiedad        | Tipo          | Descripción                                                                                                                                                                                                                            |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote", "storedProcedure", "standalone", "rest", "web"                                                                                                                                                 |
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

| Parámetros | Tipo    |                             | Descripción                                                                            |
| ---------- | ------- | :-------------------------: | -------------------------------------------------------------------------------------- |
| Resultado  | Boolean | <- | True if session is a Guest one, False otherwise (web sessions only) |

<!-- END REF -->

#### Descripción

:::note

Esta función siempre devuelve **False** con sesiones de escritorio.

:::

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True as long as `setPrivileges()` is not called in the session or after a [Qodly logout](https://developer.4d.com/qodly/4DQodlyPro/force-login#logout) has been executed in the session<!-- END REF -->.

:::note Compatibilidad

With legacy sessions, `.isGuest()` returns True if the session has no privileges.

:::

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

| Parámetros | Tipo    |                             | Descripción                                                |
| ---------- | ------- | :-------------------------: | ---------------------------------------------------------- |
| privilege  | Text    |              ->             | Nombre del privilegio                                      |
| Resultado  | Integer | <- | id a utilizar al llamar a la función [`demote()`](#demote) |

<!-- END REF -->

#### Descripción

La función `.promote()` <!-- REF #SessionClass.promote().Summary -->añade el privilegio definido en el parámetro *privilege* al proceso actual durante la ejecución de la función de llamada y devuelve el id del privilegio promovido<!-- END REF -->.

La adición dinámica de privilegios es útil cuando los derechos de acceso dependen del contexto de ejecución, que no puede definirse completamente en el archivo "roles.json". Esto es especialmente relevante cuando la misma función puede ser ejecutada por usuarios con diferentes niveles de acceso. El uso de `.promote()` asegura que sólo el proceso actual reciba los privilegios necesarios, sin afectar a otros.

La función no hace nada y devuelve 0 si:

- el *privilegio* no existe en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file),
- el *privilegio* ya está asignado al proceso actual (usando `.promote()` o a través de una [acción de promoción estática](../ORDA/privileges.md#permission-actions) declarada para la función de llamada en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file)).

Puede llamar a la función `promote()` varias veces en el mismo proceso para añadir diferentes privilegios.

El id devuelto se incrementa cada vez que un privilegio se añade dinámicamente al proceso.

Para eliminar un privilegio dinámicamente, llame a la función `demote()` con el id apropiado.

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

#### Ejemplo

Varios usuarios se conectan a un único punto final que sirve a distintas aplicaciones. Un usuario de la aplicación #1 no necesita el privilegio "super_admin" porque no crea "VerySensitiveInfo". Un usuario de la aplicación #2 necesita privilegios "super_admin".

Puede proporcionar dinámicamente los privilegios adecuados en la función *CreateInfo*:

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
| 21          | Support of remote and standalone sessions           |
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

La función `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->asocia a la sesión los privilegios y/o roles definidos en el parámetro y devuelve **True** si la ejecución se ha realizado correctamente<!-- END REF -->.

- En el parámetro *privilege*, pase una cadena que contenga un nombre de privilegio (o varios nombres de privilegio separados por comas).
- En el parámetro *privileges*, pase una colección de cadenas que contengan nombres de privilegios.
- En el parámetro *settings*, pase un objeto que contenga las siguientes propiedades:

| Propiedad  | Tipo              | Descripción                                                                                                                                                                                                           |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| privileges | Text o Collection | <li>Cadena que contiene un nombre de privilegio, o</li><li>Colección de cadenas que contienen nombres de privilegios</li>                                                                                             |
| roles      | Text o Collection | <li>Cadena que contiene un rol, o</li><li>Colección de cadenas que contienen roles</li>                                                                                                                               |
| userName   | Text              | Nombre de usuario a asociar a la sesión (opcional, únicamente para las sesiones web). No disponible en sesiones de clientes remotos (ignorada). |

:::note

Los privilegios y los roles se definen en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) del proyecto. Para más información, consulte la sección [**Privilegios**](../ORDA/privileges.md).

:::

Si la propiedad `privileges` o `roles` contiene un nombre que no está declarado en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), se ignora.

Por defecto, cuando no hay ningún privilegio o rol asociado a la sesión, la sesión es una [sesión de invitado](#isguest).

La propiedad [`userName`](#username) está disponible a nivel de objeto de sesión (sólo lectura).

:::note

Keep in mind that privileges only apply to the code executed through web accesses, whatever the [session type](#session-types) on which this function is executed.
:::

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

| Lanzamiento | Modificaciones                    |
| ----------- | --------------------------------- |
| 20 R5       | Soporte de sesiones de escritorio |
| 18 R6       | Añadidos                          |

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

When a desktop session and a web session are [shared using an OTP](../Desktop/sessions.md#sharing-a-desktop-session-for-web-accesses), they also share the same `.storage` object.

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

| Lanzamiento | Modificaciones                    |
| ----------- | --------------------------------- |
| 20 R5       | Soporte de sesiones de escritorio |
| 18 R6       | Añadidos                          |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descripción

La propiedad `.userName` contiene <!-- REF #SessionClass.userName.Summary -->el nombre de usuario asociado a la sesión<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

- **Sesiones web**: esta propiedad es una cadena vacía por defecto. Puede definirse mediante la propiedad `privileges` de la función [`setPrivileges()`](#setprivileges).
- **Remote/Stored procedure sessions**: This property returns the same user name as the [`Current user`](../commands-legacy/current-user.md) command.
- **Standalone sessions**: This property contains "designer" or the name set with the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command.

This property is **read only** for desktop sessions.

<!-- END REF -->
