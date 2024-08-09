---
id: SMTPTransporterClass
title: SMTPTransporter
---

La clase `SMTPTransporter` permite configurar conexiones SMTP y enviar correos electrónicos a través de objetos *SMTP transporter*.

### Objeto SMTP Transporter

Los objetos SMTP Transporter se instancian con el comando [SMTP New transporter](#smtp-new-transporter). Ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary --> |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                   |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                        |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                        |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                      |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                    |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)<br/><!-- INCLUDE #SMTPTransporterClass.send().Summary -->                                       |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                             |

<!-- REF SMTPTransporterClass.SMTP New transporter.Desc -->

## SMTP New transporter

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                 |
| ----------- | ---------------------------------------------- |
| 18          | Nueva propiedad logFile                        |
| 17 R5       | Nuevas propiedades bodyCharset y headerCharset |
| 17 R4       | Añadidos                                       |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #_command_.SMTP New transporter.Params -->

| Parámetros | Tipo                               |     | Descripción                                        |
| ---------- | ---------------------------------- | :-: | -------------------------------------------------- |
| server     | Object                             |  -> | Información del servidor de correo                 |
| Result     | 4D.SMTPTransporter |  <- | [Objeto SMTP Transporter](#objet-smtp-transporter) |

<!-- END REF -->

#### Descripción

El comando `SMTP New transporter` <!-- REF #_command_.SMTP New transporter.Summary -->configura una nueva conexión SMTP<!-- END REF --> de acuerdo con el parámetro *server* y devuelve un nuevo objeto *[SMTP transporter](#smtp-transporter-object)*. El objeto transportador devuelto se utilizará normalmente para el envío de correos electrónicos.

> Este comando no abre ninguna conexión con el servidor SMTP. La conexión SMTP se abre realmente cuando se ejecuta la función [`.send()`](#send).
>
> La conexión SMTP se cierra automáticamente:
>
> - cuando el objeto transportador es destruido si la propiedad [`keepAlive`](#keepalive) es true (por defecto),
> - después de cada ejecución de la función [`.send( )`](#send) si la propiedad [`keepAlive`](#keepalive) está definida en false.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Valor por defecto (si se omite)                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                  | False                                                                                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Cadena u objeto token que representa las credenciales de autorización OAuth2. Utilizado sólo con OAUTH2 `authationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto *[SMTP transporter](#smtp-transporter-object)*. | ninguno                                                                                          |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                    | se utiliza el modo de autenticación más seguro soportado por el servidor                         |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                         | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                       | 30                                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                   | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | *obligatorio*                                                                                    |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                             | True                                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ninguno                                                                                          |
| **password** : Text<br/>contraseña de usuario para la autenticación en el servidor. No se devuelve en el objeto *[SMTP transporter](#smtp-transporter-object)*.                                                                                                                                                                                                                                                                                                                                                | ninguno                                                                                          |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 587                                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                         | 100                                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ninguno                                                                                          |

#### Result

La función devuelve un [**objeto SMTP transporter**](#smtp-transporter-object). Todas las propiedades devueltas son de sólo lectura\*\*.

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

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

| Parámetros | Tipo                               |     | Descripción                                        |
| ---------- | ---------------------------------- | :-: | -------------------------------------------------- |
| server     | Object                             |  -> | Información del servidor de correo                 |
| Result     | 4D.SMTPTransporter |  <- | [Objeto SMTP Transporter](#objet-smtp-transporter) |

<!-- END REF -->

#### Descripción

La función `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary -->crea y devuelve un nuevo objeto del tipo `4D.SMTPTransporter`<!-- END REF -->. Es idéntico al comando [`SMTP New transporter`](#smtp-new-transporter) (acceso directo).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

Para obtener información sobre los códigos de estado SMTP, por favor consulte [esta página](https://www.usps.org/info/smtp_status.html).

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
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |

</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->**.keepAlive** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.keepAlive` contiene <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** si la conexión SMTP debe permanecer activa hasta que el objeto `transporter` sea destruido<!-- END REF -->, y **False** en caso contrario. Por defecto, si la propiedad `keepAlive` no se ha definido en el objeto `server` (utilizado para crear el objeto `transporter` con `SMTP New transporter`), es **True**.

La conexión SMTP se cierra automáticamente:

- cuando el objeto `transporter` es destruido si la propiedad `.keepAlive` es true,
- después de cada función `.send( )` si la propiedad `.keepAlive` está en false.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones             |
| ----------- | -------------------------- |
| 17 R5       | Soporte de contenidos Mime |
| 17 R4       | Añadidos                   |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->

| Parámetros | Tipo   |     | Descripción                                        |
| ---------- | ------ | :-: | -------------------------------------------------- |
| mail       | Object |  -> | [Email](EmailObjectClass.md#email-object) a enviar |
| Result     | Object |  <- | Estado SMTP                                        |

<!-- END REF -->

#### Descripción

La función `.send()` <!-- REF #SMTPTransporterClass.send().Summary -->envía el [*objeto mail*](EmailObjectClass.md#email-object) al servidor SMTP definido en el objeto `transporter` y devuelve un objeto estado<!-- END REF -->.

> El objeto `transporter` debe haber sido creado con el comando `SMTP New transporter`.

El método crea la conexión SMTP si no está ya activa. Si la propiedad `.keepAlive` del objeto `transporter` es **false**, la conexión SMTP se cierra automáticamente después de la ejecución de `. end()`, de lo contrario permanece viva hasta que el objeto `transporter` sea destruido. Para más información, consulte la descripción del comando [`SMTP New transporter`](#smtp-new-transporter).

En *mail*, pase un [objeto `Email`](EmailObjectClass.md#email-object) válido para enviar. Las propiedades origen (de dónde viene el correo electrónico) y destino (uno o varios destinatarios) deben incluirse, el resto de propiedades son opcionales.

#### Objeto devuelto

La función devuelve un objeto que describe el estado SMTP de la operación. Este objeto puede contener las siguientes propiedades:

| Propiedad  | Tipo    | Descripción                                                                                                                                 |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| success    | boolean | True si el envío tiene éxito, false en caso contrario                                                                                       |
| status     | number  | Código de estado devuelto por el servidor SMTP (0 en caso de un problema no relacionado con el procesamiento del correo) |
| statusText | text    | Mensaje de estado devuelto por el servidor SMTP                                                                                             |

En caso de un problema no relacionado con el procesamiento SMTP (por ejemplo, si falta una propiedad obligatoria en el correo), 4D genera un error que puede interceptar utilizando un método instalado por el comando `ON ERR CALL`. Utilice el comando `GET LAST ERROR STACK` para obtener información sobre el error.

En este caso, el objeto estado resultante contiene los siguientes valores:

| Propiedad  | Valor                  |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
