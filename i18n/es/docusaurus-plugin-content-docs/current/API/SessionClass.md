---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Session objects are returned by the [`Session`](#session) command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### Session types

Three types of sessions are supported by this class:

- [**Web user sessions**](WebServer/sessions.md): Web user sessions are available when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). They are used for Web and REST connections, and can be assigned privileges.
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): All stored procedures executed on the server share the same virtual user session.

:::note

The availability of properties and functions in the `Session` object depend on the session type.

:::


### Resumen


|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.id.Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.info.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>Histórico</summary>

| Versión | Modificaciones                                         |
| ------- | ------------------------------------------------------ |
| v20 R5  | Support of remote client and stored procedure sessions |
| v18 R6  | Añadidos                                               |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parámetros | Tipo       |    | Descripción    |
| ---------- | ---------- |:--:| -------------- |
| Result     | 4D.Session | <- | Objeto Session |
<!-- END REF -->


#### Descripción

El comando `Session` <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current user session<!-- END REF -->.

Depending on the process from which the command is called, the current user session can be:

- a web session (when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions)),
- a remote client session,
- the stored procedures session.

For more information, see the [Session types](#session-types) paragraph.

If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns *Null*.

#### Web sessions

The `Session` object of web sessions is available from any web process:

- Métodos base `On Web Authentication`, `On Web Connection`, y `On REST Authentication`,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls,
- Métodos base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) y [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) para las peticiones móviles,
- ORDA functions [called with REST requests](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](WebServer/sessions.md) section.

#### Remote client sessions

The `Session` object of remote client sessions is available from:

- Project methods that have the [Execute on Server](../Project/code-overview.md#execute-on-server) attribute (they are executed in the "twinned" process of the client process),
- Triggers,
- `On Server Open Connection` and `On Server Shutdown Connection` database methods.

For more information on remote user sessions, please refer to the [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions) paragraph.

#### Stored procedures session

All stored procedure processes share the same virtual user session. The `Session` object of stored procedures is available from:

- methods called with the [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) command,
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

For information on stored procedures virtual user session, please refer to the [XXXX](XXX) page.

#### Ejemplo

Ha definido el método `action_Session` con el atributo "Available through 4D tags and URLs". Se llama al método introduciendo la siguiente URL en el navegador:

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

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Parámetros | Tipo    |    | Descripción                         |
| ---------- | ------- |:--:| ----------------------------------- |
| Result     | Boolean | <- | True if the execution is successful |
<!-- END REF -->


#### Descripción

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

La función `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.


#### Ejemplo

```4d
//Invalidate a session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->



<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descripción

:::note

This property is only available with web user sessions.

:::

La propiedad `.expirationDate` contiene <!-- REF #SessionClass.expirationDate.Summary -->la fecha y la hora de expiración de la cookie de sesión<!-- END REF -->. .

Esta propiedad es **de sólo lectura**. Se vuelve a calcular automáticamente si se modifica el valor de la propiedad [`.idleTimeout`](#idletimeout).

#### Ejemplo

```4d
var $expiration : Text
$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
| Parámetros | Tipo    |    | Descripción                                                  |
| ---------- | ------- |:--:| ------------------------------------------------------------ |
| privilege  | Text    | <- | Nombre del privilegio a verificar                            |
| Result     | Boolean | <- | True si la sesión tiene *privilege*, False en caso contrario |
<!-- END REF -->


#### Descripción

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::


La función `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->devuelve True si el privilegio está asociado a la sesión, y False en caso contrario<!-- END REF -->.


#### Ejemplo

Quiere comprobar si el privilegio "WebAdmin" está asociado a la sesión:

```4d
If (Session.hasPrivilege("WebAdmin"))
    //El acceso está concedido, no haga nada
Else
    //Mostrar una página de autenticación

End if
```

<!-- END REF -->


<!-- REF SessionClass.id.Desc -->
## .id

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20 R5  | Añadidos       |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descripción

La propiedad `.id` contiene <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the session on the server<!-- END REF -->. This unique string is automatically assigned by the server for each session and allows you to identify its processes. 


<!-- END REF -->



<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### Descripción

:::note

This property is only available with web user sessions.

:::

La propiedad `.idleTimeout` contiene <!-- REF #SessionClass.idleTimeout.Summary -->el tiempo de inactividad de la sesión (en minutos), después del cual la sesión es cerrada automáticamente por 4D<!-- END REF -->.

Si no se define esta propiedad, el valor por defecto es 60 (1h).

Cuando se define esta propiedad, la propiedad [`.expirationDate`](#expirationdate) se actualiza en consecuencia.

> El valor no puede ser inferior a 60: si se define un valor inferior, el tiempo de espera se eleva hasta 60.


Esta propiedad es **de sólo escritura**.

#### Ejemplo

```4d
If (Session.isGuest())
        // Una sesión de invitado se cerrará tras 60 minutos de inactividad
    Session.idleTimeout:=60
Else
        // Las demás sesiones se cerrarán tras 120 minutos de inactividad
    Session.idleTimeout:=120
End if

```

<!-- END REF -->


<!-- REF SessionClass.info.Desc -->
## .info

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v20 R5  | Añadidos       |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descripción

:::note

This property is only available with remote client and stored procedure sessions.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server<!-- END REF -->.

The `.info` object is the same object as the one returned by the [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) command for remote client and stored procedure sessions.

The `.info` object contains the following properties:

| Propiedad        | Tipo          | Descripción                                                                                        |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote" or "storedProcedure"                                                        |
| userName         | Text          | 4D user name (same value as [`.userName`](#username))                                              |
| machineName      | Text          | Remote sessions: name of the remote machine. Stored procedures session: name of the server machine |
| systemUserName   | Text          | Remote sessions: name of the system session opened on the remote machine.                          |
| IPAddress        | Text          | IP address of the remote machine                                                                   |
| hostType         | Text          | Host type: "windows" or "mac"                                                                      |
| creationDateTime | Date ISO 8601 | Date and time of session creation                                                                  |
| state            | Text          | Session state: "active", "postponed", "sleeping"                                                   |
| ID               | Text          | Session UUID (same value as [`.id`](#id))                                                          |
| persistentID     | Text          | Session's persistent ID                                                                            |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::


<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
| Parámetros | Tipo    |    | Descripción                                                    |
| ---------- | ------- |:--:| -------------------------------------------------------------- |
| Result     | Boolean | <- | True si la sesión es una sesión Guest, False en caso contrario |
<!-- END REF -->

#### Descripción

:::note

This function always returns **True** with remote client and stored procedure sessions.

:::

La función `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->devuelve True si la sesión es una sesión de invitado (es decir, no tiene privilegios)<!-- END REF -->.


#### Ejemplo

En el método base `On Web Connection`:

```4d
If (Session.isGuest())
    //Hacer algo para el usuario invitado
End if
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>Histórico</summary>

| Versión | Modificaciones                                      |
| ------- | --------------------------------------------------- |
| v19 R8  | Compatibilidad con la propiedad "roles" en Settings |
| v18 R6  | Añadidos                                            |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Parámetros | Tipo       |    | Descripción                                                 |
| ---------- | ---------- |:--:| ----------------------------------------------------------- |
| privilege  | Text       | -> | Nombre del privilegio                                       |
| privileges | Collection | -> | Colección de nombres de privilegios                         |
| settings   | Object     | -> | Objeto con una propiedad "privilegios" (cadena o colección) |
| Result     | Boolean    | <- | True if the execution is successful                         |
<!-- END REF -->

#### Descripción

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

La función `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->.

- En el parámetro *privilege*, pase una cadena que contenga un nombre de privilegio (o varios nombres de privilegio separados por comas).

- En el parámetro *privileges*, pase una colección de cadenas que contengan nombres de privilegios.

- En el parámetro *settings*, pase un objeto que contenga las siguientes propiedades:

| Propiedad  | Tipo              | Descripción                                           |
| ---------- | ----------------- | ----------------------------------------------------- |
| privileges | Text o Collection | <li>Cadena que contiene un nombre de privilegio, o</li><li>Colección de cadenas que contienen nombres de privilegios</li>   |
| roles      | Text o Collection | <li>Cadena que contiene un nombre de rol, o</li><li>Colección de cadenas que contienen nombres de roles</li>  |
| userName   | Text              | Nombre de usuario para asociar a la sesión (opcional) |

:::note

Los privilegios y los roles se definen en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file) del proyecto. Para más información, consulte la sección [**Privilegios**](../ORDA/privileges.md).

:::

Si la propiedad `privileges` o `roles` contiene un nombre que no está declarado en el archivo [`roles.json`](../ORDA/privileges.md#rolesjson-file), se ignora.

Por defecto, cuando no hay ningún privilegio o rol asociado a la sesión, la sesión es una [sesión invitado](#isguest).

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


<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<details><summary>Histórico</summary>

| Versión | Modificaciones                                         |
| ------- | ------------------------------------------------------ |
| v20 R5  | Support of remote client and stored procedure sessions |
| v18 R6  | Añadidos                                               |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descripción

La propiedad `.storage` contiene <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->.

Cuando se crea un objeto `Session`, la propiedad `.storage` está vacía. Al ser un objeto compartido, esta propiedad estará disponible en el objeto `Storage` del servidor.

> Al igual que el objeto `Storage` del servidor, la propiedad `.storage` es siempre "única": añadir un objeto compartido o una colección compartida a `.storage` no crea un grupo compartido.

Esta propiedad es **sólo lectura** en sí misma pero devuelve un objeto de lectura-escritura.

<Tabs>

<TabItem value="Web session example">

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

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

<details><summary>Histórico</summary>

| Versión | Modificaciones                                         |
| ------- | ------------------------------------------------------ |
| v20 R5  | Support of remote client and stored procedure sessions |
| v18 R6  | Añadidos                                               |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descripción

La propiedad `.userName` contiene <!-- REF #SessionClass.userName.Summary -->el nombre de usuario asociado a la sesión<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

- With web sessions, this property is an empty string by default. Se puede establecer mediante la propiedad `privileges` de la función [`setPrivileges()`](#setprivileges).
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](https://doc.4d.com/4dv20/help/command/en/page182.html) command.

Esta propiedad es**de sólo lectura**.



<!-- END REF -->
