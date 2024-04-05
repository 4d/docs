---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Los objetos de sesión son devueltos por la función [`Session`](#session). Estos objetos ofrecen al desarrollador una interfaz que permite gestionar la sesión de usuario actual y ejecutar acciones como almacenar datos contextuales, compartir información entre procesos de sesión, lanzar procesos preferentes relacionados con la sesión o (sólo web) gestionar [privilegios](../ORDA/privileges.md).

### Tipos de sesiones

Esta clase admite tres tipos de sesiones:

- [**Sesiones de usuarios web**](WebServer/sessions.md): las sesiones de usuario web están disponibles cuando [las sesiones escalables están activadas en su proyecto](WebServer/sessions.md#enabling-sessions). Se utilizan para conexiones Web y REST, y se les pueden asignar privilegios.
- [**Sesiones de usuario de cliente remoto**](../Desktop/clientServer.md#remote-user-sessions): en las aplicaciones cliente/servidor, los usuarios remotos tienen sus propias sesiones gestionadas en el servidor.
- [**Sesión de procedimientos almacenados**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): todos los procedimientos almacenados ejecutados en el servidor comparten la misma sesión de usuario virtual.

:::note

La disponibilidad de las propiedades y funciones del objeto `Session` depende del tipo de sesión.

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

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| Parámetros | Tipo       |    | Descripción    |
| ---------- | ---------- |:--:| -------------- |
| Result     | 4D.Session | <- | Objeto Session |
<!-- END REF -->


#### Descripción

El comando `Session` <!-- REF #_command_.Session.Summary -->devuelve el objeto `Session` correspondiente a la sesión de usuario actual<!-- END REF -->.

Dependiendo del proceso desde el que se llame al comando, la sesión de usuario actual puede ser:

- una sesión web (cuando [las sesiones escalables están activadas](WebServer/sessions.md#enabling-sessions)),
- una sesión de cliente remoto,
- la sesión de procedimientos almacenados.

Para obtener más información, consulte el párrafo [Tipos de sesión](#session-types).

Si el comando se llama desde un contexto no soportado (aplicación monousuario, sesiones escalables desactivadas...), devuelve *Null*.

#### Sesiones web

El objeto `Session` de las sesiones web está disponible desde cualquier proceso web:

- Métodos base `On Web Authentication`, `On Web Connection`, y `On REST Authentication`,
- código procesado a través de las etiquetas 4D en las páginas semidinámicas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- los métodos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a través de 4DACTION/ urls,
- Métodos base [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) y [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) para las peticiones móviles,
- Funciones ORDA [llamadas con peticiones REST](../REST/ClassFunctions.md).

Para más información sobre las sesiones de usuario web, consulte la sección [Sesiones de servidor web](WebServer/sessions.md).

#### Sesiones de cliente remoto

El objeto `Session` de las sesiones de clientes remotos está disponible desde:

- Métodos proyecto que tienen el atributo [Ejecutar en el Servidor](../Project/code-overview.md#execute-on-server) (se ejecutan en el proceso "twinned" del proceso cliente),
- Triggers,
- Los métodos base `On Server Open Connection` y `On Server Shutdown Connection` de la base de datos.

Para más información sobre las sesiones de usuario remoto, consulte el párrafo [**de sesiones de usuario remoto**](../Desktop/clientServer.md#remote-user-sessions).

#### Sesión de procedimientos almacenados

Todos los procesos de procedimientos almacenados comparten la misma sesión virtual de usuario. El objeto `Session` de los procedimientos almacenados está disponible en:

- métodos llamados con el comando [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html),
- métodos base `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown` y `On System event`

Para obtener información sobre los procedimientos almacenados de sesión virtual de usuario, consulte la página [XXXX](XXX).

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
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```



<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| Parámetros | Tipo    |    | Descripción                                        |
| ---------- | ------- |:--:| -------------------------------------------------- |
| Result     | Boolean | <- | True si la ejecución se ha realizado correctamente |
<!-- END REF -->


#### Descripción

:::note

Dado que los privilegios sólo se admiten en sesiones de usuario web, esta función no hace nada y siempre devuelve **False** en otros tipos de sesión.

:::

La función `.clearPrivileges()` <!-- REF #SessionClass.clearPrivileges().Summary -->elimina todos los privilegios asociados a la sesión y devuelve **True** si la ejecución se ha realizado correctamente<!-- END REF -->. Como resultado, la sesión se convierte automáticamente en una sesión de invitado.


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

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### Descripción

:::note

Esta propiedad sólo está disponible con sesiones de usuario web.

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

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

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

Dado que los privilegios sólo se admiten en sesiones de usuario web, esta función no hace nada y siempre devuelve **False** en otros tipos de sesión.

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

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descripción

La propiedad `.id` contiene <!-- REF #SessionClass.id.Summary -->el identificador único (UUID) de la sesión en el servidor<!-- END REF -->. Esta cadena única es asignada automáticamente por el servidor para cada sesión y permite identificar sus procesos. 


<!-- END REF -->



<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>Histórico</summary>

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

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R5       | Añadidos       |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### Descripción

:::note

Esta propiedad sólo está disponible con sesiones de cliente remoto y procedimientos almacenados.

:::

La propiedad `.info` <!-- REF #SessionClass.info.Summary -->describe la sesión del cliente remoto o del procedimiento almacenado en el servidor<!-- END REF -->.

El objeto `.info` es el mismo objeto devuelto por el comando [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) para sesiones de cliente remoto y procedimientos almacenados.

El objeto `.info` contiene las siguientes propiedades:

| Propiedad        | Tipo          | Descripción                                                                                                     |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sesión: "remote" o "storedProcedure"                                                                    |
| userName         | Text          | Nombre de usuario 4D (el mismo valor que [`.userName`](#username))                                              |
| machineName      | Text          | Sesiones remotas: nombre de la máquina remota. Sesión de procedimientos almacenados: nombre del equipo servidor |
| systemUserName   | Text          | Sesiones remotas: nombre de la sesión del sistema abierta en la máquina remota.                                 |
| IPAddress        | Text          | Dirección IP de la máquina remota                                                                               |
| hostType         | Text          | Tipo de host: "windows" o "mac"                                                                                 |
| creationDateTime | Date ISO 8601 | Fecha y hora de creación de la sesión                                                                           |
| state            | Text          | Estado de la sesión: "active", "postponed", "sleeping"                                                          |
| ID               | Text          | UUID de sesión (el mismo valor que [`.id`](#id))                                                                |
| persistentID     | Text          | ID persistente de la sesión                                                                                     |

:::note

Dado que `.info` es una propiedad calculada, se recomienda llamarla una vez y luego almacenarla en una variable local si se desea realizar algún procesamiento sobre sus propiedades.

:::


<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R6       | Añadidos       |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
| Parámetros | Tipo    |    | Descripción                                                    |
| ---------- | ------- |:--:| -------------------------------------------------------------- |
| Result     | Boolean | <- | True si la sesión es una sesión Guest, False en caso contrario |
<!-- END REF -->

#### Descripción

:::note

Esta función siempre devuelve **True** con sesiones de cliente remoto y procedimientos almacenados.

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

| Lanzamiento | Modificaciones                                      |
| ----------- | --------------------------------------------------- |
| 19 R8       | Compatibilidad con la propiedad "roles" en Settings |
| 18 R6       | Añadidos                                            |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| Parámetros | Tipo       |    | Descripción                                                 |
| ---------- | ---------- |:--:| ----------------------------------------------------------- |
| privilege  | Text       | -> | Nombre del privilegio                                       |
| privileges | Collection | -> | Colección de nombres de privilegios                         |
| settings   | Object     | -> | Objeto con una propiedad "privilegios" (cadena o colección) |
| Result     | Boolean    | <- | True si la ejecución se ha realizado correctamente          |
<!-- END REF -->

#### Descripción

:::note

Dado que los privilegios sólo se admiten en sesiones de usuario web, esta función no hace nada y siempre devuelve **False** en otros tipos de sesión.

:::

La función `.setPrivileges()` <!-- REF #SessionClass.setPrivileges().Summary -->asocia los privilegios y/o roles definidos en el parámetro a la sesión y devuelve **True** si la ejecución se ha realizado correctamente<!-- END REF -->.

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

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### Descripción

La propiedad `.storage` contiene <!-- REF #SessionClass.storage.Summary -->un objeto compartido que puede utilizarse para almacenar información disponible para todos los procesos de la sesión<!-- END REF -->.

Cuando se crea un objeto `Session`, la propiedad `.storage` está vacía. Al ser un objeto compartido, esta propiedad estará disponible en el objeto `Storage` del servidor.

> Al igual que el objeto `Storage` del servidor, la propiedad `.storage` es siempre "única": añadir un objeto compartido o una colección compartida a `.storage` no crea un grupo compartido.

Esta propiedad es **sólo lectura** en sí misma pero devuelve un objeto de lectura-escritura.

<Tabs>

<TabItem value="Web session example">

Desea almacenar la IP del cliente en la propiedad `.storage`. Puede escribir en el método base `On Web Authentication`:

```4d
If (Session.storage.clientIP=Null) //primer acceso
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if

````
</TabItem>

<TabItem value="Remote session example">

Quiere compartir datos entre procesos de la misma sesión:

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

| Lanzamiento | Modificaciones                                                     |
| ----------- | ------------------------------------------------------------------ |
| 20 R5       | Soporte de cliente remoto y sesiones de procedimientos almacenados |
| 18 R6       | Añadidos                                                           |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### Descripción

La propiedad `.userName` contiene <!-- REF #SessionClass.userName.Summary -->el nombre de usuario asociado a la sesión<!-- END REF -->. Puede utilizarlo para identificar al usuario dentro de su código.

- Con las sesiones web, esta propiedad es una cadena vacía por defecto. Se puede establecer mediante la propiedad `privileges` de la función [`setPrivileges()`](#setprivileges).
- Con sesiones remotas y de procedimientos almacenados, esta propiedad devuelve el mismo nombre de usuario que el comando [`Usuario actual`](https://doc.4d.com/4dv20/help/command/en/page182.html).

Esta propiedad es **de sólo lectura**.



<!-- END REF -->
