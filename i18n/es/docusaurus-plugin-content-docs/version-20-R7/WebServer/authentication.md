---
id: authentication
title: Autenticación
---

La autentificación de los usuarios es necesaria cuando se desea ofrecer derechos de acceso específicos a los usuarios Web. La autenticación designa el modo en que se recoge y procesa la información relativa a las credenciales del usuario (normalmente nombre y contraseña).

## Modos de autenticación

El servidor web 4D ofrece tres modos de autenticación, que puede seleccionar en la página **Web**/**Opciones (I)** de la ventana Propiedades:

![](../assets/en/WebServer/authentication.png)

> Se recomienda utilizar una autenticación **personalizada**.

### Generalidades

El funcionamiento del sistema de acceso del servidor web 4D se resume en el siguiente diagrama:

![](../assets/en/WebServer/serverAccess.png)

> Las peticiones que comienzan por `rest/` son gestionadas directamente por el [servidor REST](REST/configuration.md).

### Personalizado (por defecto)

Básicamente, en este modo, depende del desarrollador definir cómo autenticar a los usuarios. 4D sólo evalúa las peticiones HTTP [que requieren una autenticación](#method-calls).

Este modo de autenticación es el más flexible porque permite:

- o bien, delegar la autenticación del usuario a una aplicación de terceros (por ejemplo, una red social, SSO);
- o bien, ofrecer una interfaz al usuario (por ejemplo, un formulario web) para que pueda crear su cuenta en su base de datos clientes; luego, puede autenticar a los usuarios con cualquier algoritmo personalizado (ver [este ejemplo](sessions.md#example) del Lo importante es que nunca guarde la contraseña en claro, utilizando ese código: Lo importante es que nunca guarde la contraseña en claro, utilizando ese código: Lo importante es que nunca guarde la contraseña en claro, utilizando ese código: Lo importante es que nunca guarde la contraseña en claro, utilizando ese código: Lo importante es que nunca guarde la contraseña en claro, utilizando ese código: Lo importante es que nunca guarde la contraseña en claro, utilizando ese código:

```4d
//... creación de cuenta de usuario
ds.webUser.password:=Generate password hash($password)  
ds.webUser.save()
```

Ver también [este ejemplo](gettingStarted.md#authenticating-users) del capítulo "Cómo comenzar".

Si no se proporciona autenticación personalizada, 4D llama al método base [`On Web Authentication`](#on-web-authentication) (si existe). Además de $urll y $content, solo se proporcionan las direcciones IP del navegador y del servidor ($IPClient y $IPServer), el nombre de usuario y la contraseña ($user y $password) están vacíos. El método debe devolver **True** en $0 si el usuario se autentifica con éxito, entonces se sirve el recurso solicitado, o **False** en $0 si la autenticación falló.

> **Atención**: si el método de base de datos `On Web Authentication` no existe, las conexiones se aceptan automáticamente (modo de prueba).

### Protocolo Basic

Cuando un usuario se conecta al servidor, aparece una caja de diálogo estándar en su navegador para que introduzca su nombre de usuario y contraseña.

> El nombre y la contraseña introducidos por el usuario se envían sin cifrar en el encabezado de la petición HTTP. Este modo suele requerir HTTPS para ofrecer confidencialidad.

A continuación, se evalúan los valores introducidos:

- Si la opción **Incluir contraseñas de 4D** está marcada, las credenciales de los usuarios se evaluarán primero contra la [tabla interna de usuarios 4D](Users/overview.md).
  - Si el nombre de usuario enviado por el navegador existe en la tabla de usuarios 4D y la contraseña es correcta, se acepta la conexión. Si la contraseña es incorrecta, se rechaza la conexión.
  - Si el nombre de usuario no existe en la tabla de usuarios 4D, se llama al método base [`On Web Authentication`](#on-web-authentication). Si el método base `On Web Authentication` no existe, se rechazan las conexiones.
- Si la opción **Incluir contraseñas 4D** no está marcada, las credenciales de usuario se envían al método base [`On Web Authentication`](#on-web-authentication) junto con el resto de parámetros de conexión (dirección IP y puerto, URL...) para que pueda procesarlos. Si el método base `On Web Authentication` no existe, se rechazan las conexiones.

> Con el servidor Web del cliente 4D, tenga en cuenta que todos los sitios publicados por las máquinas 4D Client compartirán la misma tabla de usuarios. La validación de los usuarios/contraseñas la realiza la aplicación 4D Server.

### Protocolo DIGEST

Este modo ofrece un mayor nivel de seguridad, ya que la información de autenticación se procesa mediante un proceso unidireccional llamado hashing que hace que su contenido sea imposible de descifrar.

Al igual que en el modo BASIC, los usuarios deben introducir su nombre y contraseña al conectarse. A continuación, se llama al método base [`On Web Authentication`](#on-web-authentication). Cuando se activa el modo DIGEST, el parámetro $password (contraseña) se devuelve siempre vacío. De hecho, cuando se utiliza este modo, esta información no pasa por la red como texto claro (sin encriptar). Por lo tanto, en este caso es imprescindible evaluar las solicitudes de conexión mediante el comando `WEB Validate digest`.

> Debe reiniciar el servidor web para que se tengan en cuenta los cambios realizados en estos parámetros.

## On Web Authentication

El método de base de datos `On Web Authentication` se encarga de gestionar el acceso al motor del servidor web. Es llamado por 4D o 4D Server cuando se recibe una petición HTTP dinámica.

### Llamadas a métodos base

El método base `On Web Authentication` se llama automáticamente cuando una solicitud o procesamiento requiere la ejecución de algún código 4D (excepto para las llamadas REST). También se llama cuando el servidor web recibe una URL estática no válida (por ejemplo, si la página estática solicitada no existe).

Por tanto, se llama al método base `On Web Authentication`:

- cuando el servidor web recibe una URL que solicita un recurso que no existe
- cuando el servidor web recibe una URL que empieza por `4DACTION/`, `4DCGI/`...
- cuando el servidor web recibe una URL de acceso a la raíz y no se ha definido ninguna página de inicio en la Configuración o mediante el comando `WEB SET HOME PAGE`
- cuando el servidor web procesa una etiqueta que ejecuta código (por ejemplo, `4DSCRIPT`) en una página semidinámica.

Por tanto, NO se llama al método base `On Web Authentication`:

- cuando el servidor web recibe una URL que solicita una página estática válida.
- cuando el servidor web recibe una URL que comienza con `rest/` y se ejecuta el servidor REST (en este caso, la autenticación es manejada a través de [`ds. función uthentify`](../REST/authUsers#force-login-mode) o el [método base `On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method) (obsoleto) o los [parámetros de estructura](REST/configuration.md#using-the-structure-settings)).

### Sintaxis

**On Web Authentication**( *$url* : Text ; *$content* : Text ; *$IPClient* : Text ; *$IPServer* : Text ; *$user* : Text ; *$password* : Text ) -> $accept : Boolean

| Parámetros | Tipo    |                             | Descripción                                                                  |
| ---------- | ------- | :-------------------------: | ---------------------------------------------------------------------------- |
| $url       | Text    | <- | URL                                                                          |
| $content   | Text    | <- | Encabezados HTTP + cuerpo HTTP (hasta un límite de 32 kb) |
| $IPClient  | Text    | <- | Dirección IP del cliente web (navegador)                  |
| $IPServer  | Text    | <- | Dirección IP del servidor                                                    |
| $user      | Text    | <- | Nombre de usuario                                                            |
| $password  | Text    | <- | Contraseña                                                                   |
| $accept    | Boolean |              ->             | True = solicitud aceptada, False = solicitud rechazada                       |

Debe declarar estos parámetros de la siguiente manera:

```4d
// On Web Authentication database method
#DECLARE ($url : Text; $content : Text; \
  $IPClient : Text; $IPServer : Text; \
  $user : Text; $password : Text) \
  -> $accept : Boolean

//Code for the method

```

:::note

Todos los parámetros del método base `On Web Authentication` no están necesariamente rellenados. La información recibida por el método base depende del [modo de autenticación](#authentication-mode) seleccionado).

:::

#### $url - URL

The first parameter (`$url`) is the URL received by the server, from which the host address has been removed.

Tomemos el ejemplo de una conexión a la Intranet. Supongamos que la dirección IP de su máquina 4D Web Server es 123.45.67.89. The following table shows the values of $urll depending on the URL entered in the Web browser:

| URL introducida en el navegador web                                                                                                               | Value of parameter $urll                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.45.67.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.45.67.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $content - Header and Body of the HTTP request

The second parameter (`$content`) is the header and the body of the HTTP request sent by the web browser. Tenga en cuenta que esta información se pasa a su método base `On Web Authentication` tal cual. Su contenido variará en función de la naturaleza del navegador web que intenta la conexión.

Si su aplicación utiliza esta información, deberá analizar el encabezado y el cuerpo. Puede utilizar los comandos `WEB GET HTTP HEADER` y `WEB GET HTTP BODY`.

> For performance reasons, the size of data passing through the $content parameter must not exceed 32 KB. Más allá de este tamaño, son truncados por el servidor HTTP de 4D.

#### $IPClient - Dirección IP del cliente web

The `$IPClient` parameter receives the IP address of the browser’s machine. Esta información puede permitirle distinguir entre las conexiones a la intranet y a Internet.

> 4D devuelve las direcciones IPv4 en un formato híbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la dirección IPv4 192.168.2.34. Para más información, consulte la sección [Soporte IPv6](webServerConfig.md#about-ipv6-support).

#### $IPServer - Dirección IP del servidor

The `$IPServer` parameter receives the IP address used to call the web server. 4D permite el multi-homing, que permite explotar máquinas con más de una dirección IP. Para más información, consulte la [página Configuración](webServerConfig.md#ip-address-to-listen).

#### $user and $password - User Name and Password

Generalidades Generalidades Generalidades Generalidades Generalidades Generalidades Generalidades Esta caja de diálogo aparece para cada conexión, si se selecciona la autenticación [basic](#basic-protocol) o [digest](#digest-protocol).

> If the user name sent by the browser exists in 4D, the $password parameter (the user’s password) is not returned for security reasons.

#### $accept - Retorno de función

The `On Web Authentication` database method returns a boolean:

- If it is True, the connection is accepted.

- If it is False, the connection is refused.

El método base `On Web Connection` sólo se ejecuta si la conexión ha sido aceptada por `On Web Authentication`.

:::warning

- If no value is returned, the connection is considered as **accepted** and the `On Web Connection` database method is executed.
- No llame a ningún elemento de la interfaz en el método base `On Web Authentication` (`ALERT`, `DIALOG`, etc.) porque de lo contrario su ejecución será interrumpida y la conexión será rechazada. Lo mismo ocurrirá si se produce un error durante su procesamiento.

:::

### Ejemplo

Ejemplo del método base `On Web Authentication` en [Modo DIGEST](#digest-protocol):

```4d
 // Método base On Web Authentication
 #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \
 	$user : Text; $pw : Text) -> $valid : Boolean
  
 var $found : cs.WebUserSelection
 $valid:=False

 $found:=ds.WebUser.query("User === :1";$user)
 If($found.length=1) // El usuario se encuentra
 	$valid:=WEB Validate digest($user;[WebUser]password)
 Else
    $valid:=False // El usuario no existe
 End if
```
