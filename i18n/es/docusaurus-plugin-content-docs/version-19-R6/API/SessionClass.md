---
id: SessionClass
title: Session
---

Los objetos Session son devueltos por el comando [`Session`](#session) cuando [se habilitan las sesiones escalables en su proyecto](WebServer/sessions.md#enabling-sessions). El objeto Session es creado y mantenido automáticamente por el servidor web 4D para controlar la sesión de un cliente web (por ejemplo, un navegador). Este objeto proporciona al desarrollador web una interfaz para la sesión de usuario, permitiendo gestionar privilegios, almacenar datos contextuales, compartir información entre procesos y lanzar procesos preventivos relacionados con la sesión.

Para obtener información detallada sobre la implementación de la sesión, consulte la sección [Sesiones del servidor web](WebServer/sessions.md).

### Resumen

|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|

## Session

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #_command_.Session.Syntax -->

**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->
| Parámetros | Type       |    | Descripción                               |
| ---------- | ---------- |:--:| ----------------------------------------- |
| Result     | 4D.Session | <- | Objeto Session|<!-- END REF -->

|

#### Descripción

The `Session` command <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current scalable user web session<!-- END REF -->.

Este comando sólo funciona cuando [están activadas las sesiones escalables](WebServer/sessions.md#enabling-sessions). Devuelve *Null* cuando las sesiones están deshabilitadas o cuando se utilizan sesiones heredadas.

Cuando se habilitan las sesiones escalables, el objeto `Session` está disponible desde cualquier proceso web en los siguientes contextos:

- Métodos base `On Web Authentication`, `On Web Connection`, y `On REST Authentication`,
- Las [funciones Data Model Class](ORDA/ordaClasses.md) ORDA llamadas por las peticiones REST,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls.

#### Ejemplo

Ha definido el método `action_Session` con el atributo "Available through 4D tags and URLs". Se llama al método introduciendo la siguiente URL en el navegador:

```
IP:port/4DACTION/action_Session
```

```4d
  //método action_Session
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //llamada de la función hasPrivilege
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Sesion is null")
 End case
```

<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->

**.clearPrivileges()**<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->
| Parámetros | Type |  | Descripción                                                |
| ---------- | ---- |::| ---------------------------------------------------------- |
|            |      |  | Does not require any parameters|<!-- END REF -->

|

#### Descripción

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.

#### Ejemplo

```4d
//Invalidar una sesión
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest es True
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->

**.expirationDate** : Text<!-- END REF -->

#### Descripción

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. .

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

<!-- REF #SessionClass.hasPrivilege().Syntax -->

**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->
| Parámetros | Type    |    | Descripción                                                                             |
| ---------- | ------- |:--:| --------------------------------------------------------------------------------------- |
| privilege  | Text    | <- | Nombre del privilegio a verificar                                                       |
| Result     | Boolean | <- | True si la sesión tiene *privilege*, False en caso contrario|<!-- END REF -->

|

#### Descripción

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

<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->

**.idleTimeout** : Integer<!-- END REF -->

#### Descripción

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

Si no se define esta propiedad, el valor por defecto es 60 (1h).

Cuando se define esta propiedad, la propiedad [`.expirationDate`](#expirationdate) se actualiza en consecuencia.

> El valor no puede ser inferior a 60: si se define un valor inferior, el tiempo de espera se eleva hasta 60.

Esta propiedad es **de sólo escritura**.

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

<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->

**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->
| Parámetros | Type    |    | Descripción                                                                               |
| ---------- | ------- |:--:| ----------------------------------------------------------------------------------------- |
| Result     | Boolean | <- | True si la sesión es una sesión Guest, False en caso contrario|<!-- END REF -->

|

#### Descripción

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.

#### Ejemplo

En el método base `On Web Connection`:

```4d
If (Session.isGuest())
 //Do something for Guest user
End if
```

<!-- END REF -->

<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->

**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->
| Parámetros | Type       |    | Descripción                                                                            |
| ---------- | ---------- |:--:| -------------------------------------------------------------------------------------- |
| privilege  | Text       | -> | Nombre del privilegio                                                                  |
| privileges | Collection | -> | Colección de nombres de privilegios                                                    |
| settings   | Object     | -> | Objeto con una propiedad "privilegios" (cadena o colección)|<!-- END REF -->

|

#### Descripción

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) defined in the parameter to the session<!-- END REF -->.

- En el parámetro *privilege*, pase una cadena que contenga un nombre de privilegio (o varios nombres de privilegio separados por comas).

- En el parámetro *privileges*, pase una colección de cadenas que contengan nombres de privilegios.

- En el parámetro *settings*, pase un objeto que contenga las siguientes propiedades:

| Propiedad  | Type              | Descripción                                           |
| ---------- | ----------------- | ----------------------------------------------------- |
| privileges | Text o Collection | <li>Cadena que contiene un nombre de privilegio, o</li><li>Colección de cadenas que contienen nombres de privilegios</li>    |
| userName   | Text              | Nombre de usuario para asociar a la sesión (opcional) |

Si la propiedad `privileges` contiene un nombre de privilegio no válido, se ignora.

> En la implementación actual, sólo está disponible el privilegio "WebAdmin".

Por defecto, cuando no se asocia ningún privilegio a la sesión, ésta es una [sesión invitado](#isguest).

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

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.storage.Syntax -->

**.storage** : Object<!-- END REF -->

#### Descripción

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

Cuando se crea un objeto `Session`, la propiedad `.storage` está vacía. Al ser un objeto compartido, esta propiedad estará disponible en el objeto `Storage` del servidor.

> Al igual que el objeto `Storage` del servidor, la propiedad `.storage` es siempre "única": añadir un objeto compartido o una colección compartida a `.storage` no crea un grupo compartido.

Esta propiedad es **sólo lectura** en sí misma pero devuelve un objeto de lectura-escritura.

#### Ejemplo

Se desea almacenar la IP del cliente en la propiedad `.storage`. Puede escribir en el método de base de datos `On Web Authentication`:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if

```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.userName.Syntax -->

**.userName** : Text<!-- END REF -->

#### Descripción

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

Esta propiedad es una cadena vacía por defecto. Se puede establecer mediante la propiedad `privileges` de la función [`setPrivileges()`](#setprivileges).

Esta propiedad es**de sólo lectura**.

<!-- END REF -->
