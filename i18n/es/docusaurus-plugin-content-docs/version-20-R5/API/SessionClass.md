---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Session objects are returned by the [`Session`](#session) command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### Tipos de sesiones

Esta clase admite tres tipos de sesiones:

- [**Web user sessions**](WebServer/sessions.md): Web user sessions are available when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). Se utilizan para conexiones Web y REST, y se les pueden asignar privilegios.
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): All stored procedures executed on the server share the same virtual user session.

:::note

The availability of properties and functions in the `Session` object depend on the session type.

:::

### Resumen

|                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->                          |

## Session

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->

| Parámetros | Tipo                       |     | Descripción    |
| ---------- | -------------------------- | :-: | -------------- |
| Result     | 4D.Session |  <- | Objeto Session |

<!-- END REF -->

#### Descripción

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current user session<!-- END REF -->.

Dependiendo del proceso desde el que se llame al comando, la sesión de usuario actual puede ser:

- a web session (when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions)),
- una sesión de cliente remoto,
- la sesión de procedimientos almacenados.

For more information, see the [Session types](#session-types) paragraph.

If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns _Null_.

#### Sesiones web

The `Session` object of web sessions is available from any web process:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls,
- [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) database methods for mobile requests,
- ORDA functions [called with REST requests](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](WebServer/sessions.md) section.

#### Sesiones de cliente remoto

The `Session` object of remote client sessions is available from:

- Project methods that have the [Execute on Server](../Project/code-overview.md#execute-on-server) attribute (they are executed in the "twinned" process of the client process),
- Triggers,
- `On Server Open Connection` and `On Server Shutdown Connection` database methods.

For more information on remote user sessions, please refer to the [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions) paragraph.

#### Sesión de procedimientos almacenados

Todos los procesos de procedimientos almacenados comparten la misma sesión virtual de usuario. The `Session` object of stored procedures is available from:

- methods called with the [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) command,
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

For information on stored procedures virtual user session, please refer to the [4D Server and the 4D Language](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html) page.

#### Ejemplo

You have defined the `action_Session` method with attribute "Available through 4D tags and URLs". Se llama al método introduciendo la siguiente URL en el navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| Parámetros | Tipo    |     | Descripción                                        |
| ---------- | ------- | :-: | -------------------------------------------------- |
| Result     | Boolean |  <- | True si la ejecución se ha realizado correctamente |

<!-- END REF -->

#### Descripción

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.

#### Ejemplo

```4d
//Invalidar una sesión
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest es True
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

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

This property is **read-only**. It is automatically recomputed if the [`.idleTimeout`](#idletimeout) property value is modified.

#### Ejemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

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

| Parámetros | Tipo    |     | Descripción                                      |
| ---------- | ------- | :-: | ------------------------------------------------ |
| privilege  | Text    |  <- | Nombre del privilegio a verificar                |
| Result     | Boolean |  <- | True if session has _privilege_, False otherwise |

<!-- END REF -->

#### Descripción

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->.

#### Ejemplo

Quiere comprobar si el privilegio "WebAdmin" está asociado a la sesión:

```4d
If (Session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
Else
	//Display an authentication page

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

The `.id` property contains <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the session on the server<!-- END REF -->. Esta cadena única es asignada automáticamente por el servidor para cada sesión y permite identificar sus procesos.

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

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

Si no se define esta propiedad, el valor por defecto es 60 (1h).

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly.

> El valor no puede ser inferior a 60: si se define un valor inferior, el tiempo de espera se eleva hasta 60.

This property is **read write**.

#### Ejemplo

```4d
If (Session.isGuest())
		// A Guest session will close after 60 minutes of inactivity
	Session.idleTimeout:=60
Else
		// Other sessions will close after 120 minutes of inactivity
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

Esta propiedad sólo está disponible con sesiones de cliente remoto y procedimientos almacenados.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server<!-- END REF -->.

The `.info` object is the same object as the one returned by the [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) command for remote client and stored procedure sessions.

The `.info` object contains the following properties:

| Propiedad        | Tipo          | Descripción                                                                                                                                                     |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sesión: "remote" o "storedProcedure"                                                                                                    |
| userName         | Text          | 4D user name (same value as [`.userName`](#username))                                                                                        |
| machineName      | Text          | Sesiones remotas: nombre de la máquina remota. Sesión de procedimientos almacenados: nombre del equipo servidor |
| systemUserName   | Text          | Sesiones remotas: nombre de la sesión del sistema abierta en la máquina remota.                                                 |
| IPAddress        | Text          | Dirección IP de la máquina remota                                                                                                                               |
| hostType         | Text          | Tipo de host: "windows" o "mac"                                                                                                                 |
| creationDateTime | Date ISO 8601 | Fecha y hora de creación de la sesión                                                                                                                           |
| state            | Text          | Estado de la sesión: "active", "postponed", "sleeping"                                                                                          |
| ID               | Text          | Session UUID (same value as [`.id`](#id))                                                                                                    |
| persistentID     | Text          | ID persistente de la sesión                                                                                                                                     |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

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

| Parámetros | Tipo    |     | Descripción                                                    |
| ---------- | ------- | :-: | -------------------------------------------------------------- |
| Result     | Boolean |  <- | True si la sesión es una sesión Guest, False en caso contrario |

<!-- END REF -->

#### Descripción

:::note

This function always returns **True** with remote client and stored procedure sessions.

:::

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

#### Ejemplo

In the `On Web Connection` database method:

```4d
If (Session.isGuest())
	//Do something for Guest user
End if
```

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

| Parámetros | Tipo       |     | Descripción                                                                    |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------------ |
| privilege  | Text       |  -> | Nombre del privilegio                                                          |
| privileges | Collection |  -> | Colección de nombres de privilegios                                            |
| settings   | Object     |  -> | Objeto con una propiedad "privilegios" (cadena o colección) |
| Result     | Boolean    |  <- | True si la ejecución se ha realizado correctamente                             |

<!-- END REF -->

#### Descripción

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->.

- In the _privilege_ parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the _privileges_ parameter, pass a collection of strings containing privilege names.

- In the _settings_ parameter, pass an object containing the following properties:

| Propiedad  | Tipo              | Descripción                                                                                              |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| privileges | Text o Collection | <li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li> |
| roles      | Text o Collection | <li>String containing a role, or</li><li>Collection of strings containing roles</li>                     |
| userName   | Text              | Nombre de usuario para asociar a la sesión (opcional)                                 |

:::note

Privileges and roles are defined in [`roles.json`](../ORDA/privileges.md#rolesjson-file) file of the project. For more information, please refer to the [**Privileges**](../ORDA/privileges.md) section.

:::

If the `privileges` or `roles` property contains a name that is not declared in the [`roles.json`](../ORDA/privileges.md#rolesjson-file) file, it is ignored.

By default when no privilege or role is associated to the session, the session is a [Guest session](#isguest).

The [`userName`](#username) property is available at session object level (read-only).

#### Ejemplo

En un método de autenticación personalizado, se establece el privilegio "WebAdmin" para el usuario:

```4d
var $userOK : Boolean

... //Authenticate the user

If ($userOK) //The user has been approved
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```

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

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->.

When a `Session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `Storage` object of the server.

> Like the `Storage` object of the server, the `.storage` property is always "single": adding a shared object or a shared collection to `.storage` does not create a shared group.

This property is **read only** itself but it returns a read-write object.

<Tabs>

<TabItem value="Web session example">

Desea almacenar la IP del cliente en la propiedad `.storage`. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if
```

</TabItem>

<TabItem value="Remote session example">

You want to share data between processes in the same session:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

</TabItem>

</Tabs>

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

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

- Con las sesiones web, esta propiedad es una cadena vacía por defecto. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](https://doc.4d.com/4dv20/help/command/en/page182.html) command.

This property is **read only**.

<!-- END REF -->
