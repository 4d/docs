---
id: SMTPTransporterClass
title: SMTPTransporter
---

La clase `SMTPTransporter` permite configurar conexiones SMTP y enviar correos electrónicos a través de objetos *SMTP transporter*.

### Objeto SMTP Transporter

Los objetos SMTP Transporter se instancian con el comando [SMTP New transporter](#smtp-new-transporter). Ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.send().Summary -->|
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

<!-- REF SMTPTransporterClass.SMTP New transporter.Desc -->
## SMTP New transporter

<details><summary>Histórico</summary>

| Versión | Modificaciones                                 |
| ------- | ---------------------------------------------- |
| v18     | Nueva propiedad logFile                        |
| v17 R5  | Nuevas propiedades bodyCharset y headerCharset |
| v17 R4  | Añadidos                                       |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->

**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #_command_.SMTP New transporter.Params -->
| Parámetros | Type               |    | Descripción                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Información del servidor de correo                                             |
| Result     | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF -->

|

#### Descripción

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. El objeto transportador devuelto se utilizará normalmente para el envío de correos electrónicos.

> Este comando no abre ninguna conexión con el servidor SMTP. La conexión SMTP se abre realmente cuando la función [`.send()`](#send) se ejecuta.  
> 
> La conexión SMTP se cierra automáticamente:
> 
> * when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
> * after each  [`.send( )`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                | Valor por defecto (si se omite)                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                                    |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Sólo se utiliza con OAUTH2 `authenticationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). Cadena de texto u objeto token que representan las credenciales de autorización OAuth 2. | ninguno                                                                  |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| se utiliza el modo de autenticación más seguro soportado por el servidor |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                    |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                       |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                    |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                              |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->| True                                                                     |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| ninguno                                                                  |
| **password** : Text<br/>User password for authentication on the server. Cadena de texto u objeto token que representan las credenciales de autorización OAuth 2.                                                                                                                                                                                                                                                                  | ninguno                                                                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 587                                                                      |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->| 100                                                                      |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| ninguno                                                                  |

#### Result

La función devuelve un [**SMTP transporter**](#smtp-transporter-object). Todas las propiedades devueltas son **de sólo lectura**.

#### Ejemplo

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" //Obligatorio
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //Log extendido a guardar en la carpeta Logs

 var $transporter : 4D.SMTPTransporter
 $transporter:=SMTP New transporter($server)

 $email:=New object
 $email.subject:="my first mail "
 $email.from:="4d@gmail.com"
 $email.to:="4d@4d.com;test@4d.com"
 $email.textBody:="Hello World"
 $email.htmlBody:="<h1>Hello World</h1><h4>'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'</h4>\
 <p>There are many variations of passages of Lorem Ipsum available."\
 +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("An error occurred sending the mail: "+$status.message)
 End if
```

<!-- END REF -->

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->

**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->
| Parámetros | Type               |    | Descripción                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Información del servidor de correo                                             |
| Result     | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF -->

|

#### Descripción

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->creates and returns a new object of the `4D.SMTPTransporter` type<!-- END REF -->. Es idéntico al comando [`SMTP New transporter`](#smtp-new-transporter) (acceso directo).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

Para obtener información sobre los códigos de estado SMTP, consulte [esta página](https://www.usps.org/info/smtp_status.html).

#### Ejemplo

```4d
 var $pw : Text
 var $options : Object
 var $transporter : 4D.SMTPTransporter
 $options:=New object

 $pw:=Request("Please enter your password:")
 $options.host:="smtp.gmail.com"

 $options.user:="test@gmail.com"
 $options.password:=$pw

 $transporter:=SMTP New transporter($options)

 $status:=$transporter.checkConnection()
 If($status.success=True)
    ALERT("SMTP connection check successful!")
 Else
    ALERT("Error # "+String($status.status)+", "+$status.statusText)
 End if
 Else
    ALERT("Error # "+String($status.status)+", "+$status.statusText)
 End if
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->

**.keepAlive** : Boolean<!-- END REF -->

#### Descripción

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. Por defecto, si la propiedad `keepAlive` no se ha definido en el objeto `server` (que permite crear el objeto `transporter` vía el comando `SMTP New transporter`), es **True**.

La conexión SMTP se cierra automáticamente:

* cuando el objeto `transporter` se destruye si la `.keepAlive` es true,
* después de cada ejecución de la función `.send( )` si la propiedad `.keepAlive` es false.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>Histórico</summary>

| Versión | Modificaciones             |
| ------- | -------------------------- |
| v17 R5  | Soporte de contenidos Mime |
| v17 R4  | Añadidos                   |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->

**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->
| Parámetros | Type   |    | Descripción                                        |
| ---------- | ------ |:--:| -------------------------------------------------- |
| mail       | Object | -> | [Email](EmailObjectClass.md#email-object) a enviar |
| Result     | Object | <- | SMTP status|<!-- END REF -->

|

#### Descripción

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.
> El objeto `transporter` debe haberse creado ya con la función `SMTP New transporter`.

El método crea la conexión SMTP si no está ya activa. Si la propiedad `.keepAlive` del objeto `transporter` es **false**, la conexión SMTP se cierra automáticamente tras la ejecución del `.send()`. Para más información, consulte la descripción del comando [`SMTP New transporter`](#smtp-new-transporter).

En *mail*, pase un objeto [`Email`](EmailObjectClass.md#email-object) válido a enviar. Las propiedades origen (de dónde viene el correo electrónico) y destino (uno o varios destinatarios) deben incluirse, el resto de propiedades son opcionales.

#### Objeto devuelto

La función devuelve un objeto que describe el estado SMTP de la operación. Este objeto puede contener las siguientes propiedades:

| Propiedad  | Type    | Descripción                                                                                                              |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| success    | boolean | True si el envío tiene éxito, false en caso contrario                                                                    |
| status     | number  | Código de estado devuelto por el servidor SMTP (0 en caso de un problema no relacionado con el procesamiento del correo) |
| statusText | text    | Mensaje de estado devuelto por el servidor SMTP                                                                          |

En caso de un problema no relacionado con el procesamiento SMTP (por ejemplo, si falta una propiedad obligatoria en el correo), 4D genera un error que puede interceptar utilizando un método instalado por el comando `ON ERR CALL`. Utilice el comando `GET LAST ERROR STACK` para obtener información sobre el error.

En este caso, el objeto estado resultante contiene los siguientes valores:

| Propiedad  | Value                  |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
