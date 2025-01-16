---
id: SMTPTransporterClass
title: SMTPTransporter
---

La clase `SMTPTransporter` permite configurar conexiones SMTP y enviar correos electrónicos a través de objetos *SMTP transporter*.

### Objeto SMTP Transporter

Los objetos SMTP Transporter son instanciados con el comando [`SMTP New transporter`](../commands/smtp-new-transporter.md). Ofrecen las siguientes propiedades y funciones:

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

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

| Parámetros | Tipo                               |                             | Descripción                                        |
| ---------- | ---------------------------------- | :-------------------------: | -------------------------------------------------- |
| server     | Object                             |              ->             | Información del servidor de correo                 |
| Result     | 4D.SMTPTransporter | <- | [Objeto SMTP Transporter](#objet-smtp-transporter) |

<!-- END REF -->

#### Descripción

La función `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary -->crea y devuelve un nuevo objeto del tipo `4D.SMTPTransporter`<!-- END REF -->. Es idéntico al comando [`SMTP New transporter`](../commands/smtp-new-transporter.md) (acceso directo).

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

| Parámetros | Tipo   |                             | Descripción                                        |
| ---------- | ------ | :-------------------------: | -------------------------------------------------- |
| mail       | Object |              ->             | [Email](EmailObjectClass.md#email-object) a enviar |
| Result     | Object | <- | Estado SMTP                                        |

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

En caso de un problema no relacionado con el procesamiento SMTP (por ejemplo, si falta una propiedad obligatoria en el correo), 4D genera un error que puede interceptar utilizando un método instalado por el comando `ON ERR CALL`. Use the `Last errors` command for information about the error.

En este caso, el objeto estado resultante contiene los siguientes valores:

| Propiedad  | Valor                  |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
