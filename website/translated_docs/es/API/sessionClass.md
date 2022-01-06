---
id: SessionClass
title: Sesión
---

Session objects are returned by the [`Session`](#session) command when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.

For detailed information about the session implementation, please refer to the [web server Sessions](WebServer/sessions.md) section.

### Resumen


|                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Sesión

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |
</details>

<!-- REF #_command_.Session.Syntax -->
**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parámetros | Tipo       |    | Descripción    |
| ---------- | ---------- |:--:| -------------- |
| Resultado  | 4D.Session | <- | Objeto Session |
<!-- END REF -->


#### Descripción

El comando `Session` <!-- REF #_command_.Session.Summary -->devuelve el objeto `Session` correspondiente a la sesión web actual del usuario escalable<!-- END REF -->.

Este comando sólo funciona cuando [están activadas las sesiones escalables](WebServer/sessions.md#enabling-sessions). Devuelve *Null* cuando las sesiones están deshabilitadas o cuando se utilizan sesiones heredadas.

Cuando se habilitan las sesiones escalables, el objeto `Session` está disponible desde cualquier proceso web en los siguientes contextos:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- ORDA [Data Model Class functions](ORDA/ordaClasses.md) called with REST requests,
- code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.


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
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

La función `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->elimina todos los privilegios asociados a la sesión<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.


#### Ejemplo

```4d
//Invalidate a session
var $isGuest : Boolean  

Session.clearPrivileges()
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

<!-- REF #SessionClass.expirationDate.Syntax -->
**.expirationDate** : Text<!-- END REF -->

#### Descripción

La propiedad `.expirationDate` contiene <!-- REF #SessionClass.expirationDate.Summary -->la fecha y hora de expiración de la cookie de sesión<!-- END REF -->. El valor se expresa como texto en el formato ISO 8601: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

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
| Parámetros | Tipo     |    | Descripción                                                  |
| ---------- | -------- |:--:| ------------------------------------------------------------ |
| privilege  | Texto    | <- | Nombre del privilegio a verificar                            |
| Resultado  | Booleano | <- | True si la sesión tiene *privilege*, False en caso contrario |
<!-- END REF -->


#### Descripción

La función `.hasPrivilege()` <!-- REF #SessionClass.hasPrivilege().Summary -->devuelve True si el privilegio está asociado a la sesión, y False en caso contrario<!-- END REF -->.


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

La propiedad `.idleTimeout` contiene <!-- REF #SessionClass.idleTimeout.Summary -->el tiempo de inactividad de la sesión (en minutos), después del cual la sesión es cerrada automáticamente por 4D<!-- END REF -->.

Si no se define esta propiedad, el valor por defecto es 60 (1h).

Cuando se define esta propiedad, la propiedad [`.expirationDate`](#expirationdate) se actualiza en consecuencia.

> The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.


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
| Parámetros | Tipo     |    | Descripción                                                    |
| ---------- | -------- |:--:| -------------------------------------------------------------- |
| Resultado  | Booleano | <- | True si la sesión es una sesión Guest, False en caso contrario |
<!-- END REF -->

#### Descripción

La función `.isGuest()` <!-- REF #SessionClass.isGuest().Summary -->devuelve True si la sesión es una sesión Guest (es decir, no tiene privilegios)<!-- END REF -->.


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
**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->
| Parámetros | Tipo       |    | Descripción                                                 |
| ---------- | ---------- |:--:| ----------------------------------------------------------- |
| privilege  | Texto      | -> | Nombre del privilegio                                       |
| privileges | Collection | -> | Colección de nombres de privilegios                         |
| parámetros | Objeto     | -> | Objeto con una propiedad "privilegios" (cadena o colección) |
<!-- END REF -->

#### Descripción

La función `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->asocia los privilegios definidos en el parámetro a la sesión<!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

| Propiedad  | Tipo              | Descripción                                           |
| ---------- | ----------------- | ----------------------------------------------------- |
| privileges | Text o Collection | <li>Cadena que contiene un nombre de privilegio, o</li><li>Colección de cadenas que contienen nombres de privilegios</li>    |
| userName   | Texto             | Nombre de usuario para asociar a la sesión (opcional) |

Si la propiedad `privileges` contiene un nombre de privilegio no válido, se ignora.

> In the current implementation, only the "WebAdmin" privilege is available.

Por defecto, cuando no se asocia ningún privilegio a la sesión, ésta es una [sesión invitado](#isguest).

La propiedad [`userName`](#username) está disponible a nivel de objeto de sesión (sólo lectura).

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

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R6  | Añadidos       |

</details>

<!-- REF #SessionClass.storage.Syntax -->
**.storage** : Object<!-- END REF -->

#### Descripción

La propiedad `.storage` contiene <!-- REF #SessionClass.storage.Summary -->un objeto compartido que puede ser utilizado para almacenar información disponible para todas las peticiones del cliente web<!-- END REF -->.

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

La propiedad `.userName` contiene <!-- REF #SessionClass.userName.Summary -->el nombre de usuario asociado a la sesión<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

Esta propiedad es una cadena vacía por defecto. Se puede establecer mediante la propiedad `privileges` de la función [`setPrivileges()`](#setprivileges).

Esta propiedad es**de sólo lectura**. 



<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
