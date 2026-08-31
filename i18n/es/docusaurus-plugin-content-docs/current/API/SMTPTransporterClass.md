---
id: SMTPTransporterClass
title: SMTPTransporter
---

La clase `SMTPTransporter` permite configurar conexiones SMTP y enviar correos electrónicos a través de objetos *SMTP transporter*.

### Objeto SMTP Transporter

Los objetos SMTP Transporter son instanciados con el comando [`SMTP New transporter`](../commands/smtp-new-transporter). Ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->    |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                      |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                           |
| [<!-- INCLUDE #SMTPTransporterClass.certificate.Syntax -->](#certificate)<br/><!-- INCLUDE #SMTPTransporterClass.certificate.Summary -->                         |
| [<!-- INCLUDE #SMTPTransporterClass.certificateName.Syntax -->](#certificatename)<br/><!-- INCLUDE #SMTPTransporterClass.certificateName.Summary -->             |
| [<!-- INCLUDE #SMTPTransporterClass.certificatePassword.Syntax -->](#certificatepassword)<br/><!-- INCLUDE #SMTPTransporterClass.certificatePassword.Summary --> |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                           |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                         |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                     |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                               |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                       |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                |
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)<br/><!-- INCLUDE #SMTPTransporterClass.send().Summary -->                                          |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                           |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                |

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

<div class="no-index">

| Parámetros | Tipo                               |                             | Descripción                                        |
| ---------- | ---------------------------------- | :-------------------------: | -------------------------------------------------- |
| server     | Object                             |              ->             | Información del servidor de correo                 |
| Resultado  | 4D.SMTPTransporter | <- | [Objeto SMTP Transporter](#objet-smtp-transporter) |

</div>
<!-- END REF -->

#### Descripción

La función `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary -->crea y devuelve un nuevo objeto del tipo `4D.SMTPTransporter`<!-- END REF -->. Es idéntico al comando [`SMTP New transporter`](../commands/smtp-new-transporter) (acceso directo).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

## .certificate

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R5       | Añadidos       |

</details>

<!-- REF #SMTPTransporterClass.certificate.Syntax -->**.certificate** : 4D.File<br/>**.certificate** : Blob<!-- END REF -->

#### Descripción

The `.certificate` property contains <!-- REF #SMTPTransporterClass.certificate.Summary -->the certificate used to sign emails using S/MIME (Secure/MIME), provided as a [`4D.File`](./FileClass.md) object or a Blob<!-- END REF -->. This certificate contains the private key.

If your certificate is already registered in your Certificate store (*keychain*), you can use [`.certificateName`](#certificatename) instead of this property. Note that you cannot use both properties simultaneously, otherwise an error is returned.

:::tip Entrada de blog relacionada

[Signing emails with S/MIME and SMTPTransporter](https://blog.4d.com/smtptransporter-signing-emails-with-s-mime)

:::

#### Ejemplo

```4d
var $transporter : 4D.SMTPTransporter
var $options ; $result : Object

$options:=New object
//Enter the information for the SMTP server

//Enable S/MIME signing
//Provide certificate file
$options.certificate:=File("myCertificateFile.p12")
$options.certificatePassword:="myGreatPW123"

$transporter:=4D.SMTPTransporter.new($options)

$email:=New object
//Fill the email content

$result:=$transporter.send($email)
```

#### Ver también

[.certificateName](#certificatename)<br/>
[.certificatePassword](#certificatepassword)

## .certificateName

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R5       | Añadidos       |

</details>

<!-- REF #SMTPTransporterClass.certificateName.Syntax -->**.certificateName** : Text<!-- END REF -->

#### Descripción

The `.certificateName` property contains <!-- REF #SMTPTransporterClass.certificateName.Summary -->the name of the certificate used to sign emails using S/MIME (Secure/MIME) as it is registered in the system Certificate store (*keychain*)<!-- END REF -->. This certificate contains the private key.

The certificate can also be provided directly as a file using the [`.certificate`](#certificate) property. Note that you cannot use both properties simultaneously, otherwise an error is returned.

#### Ver también

[.certificate](#certificate)
[.certificatePassword](#certificatepassword)

## .certificatePassword

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R5       | Añadidos       |

</details>

<!-- REF #SMTPTransporterClass.certificatePassword.Syntax -->**.certificatePassword** : Text<!-- END REF -->

#### Descripción

The `.certificatePassword` property contains <!-- REF #SMTPTransporterClass.certificatePassword.Summary -->the password of the certificate used to sign emails, if required<!-- END REF -->. An empty string is used if no password is required.

#### Ver también

[.certificate](#certificate)
[.certificateName](#certificatename)

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones             |
| ----------- | -------------------------- |
| 17 R5       | Soporte de contenidos Mime |
| 17 R4       | Añadidos                   |

</details>

<!-- INCLUDE transporter.checkConnection().Desc -->

Para obtener información sobre los códigos de estado SMTP, por favor consulte [esta página](https://www.iana.org/assignments/smtp-enhanced-status-codes/smtp-enhanced-status-codes.xhtml).

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

<div class="no-index">

| Parámetros | Tipo   |                             | Descripción                                        |
| ---------- | ------ | :-------------------------: | -------------------------------------------------- |
| mail       | Object |              ->             | [Email](EmailObjectClass.md#email-object) a enviar |
| Resultado  | Object | <- | Estado SMTP                                        |

</div>
<!-- END REF -->

#### Descripción

La función `.send()` <!-- REF #SMTPTransporterClass.send().Summary -->envía el [*objeto mail*](EmailObjectClass.md#email-object) al servidor SMTP definido en el objeto `transporter` y devuelve un objeto estado<!-- END REF -->.

> El objeto `transporter` debe haber sido creado con el comando `SMTP New transporter`.

El método crea la conexión SMTP si no está ya activa. Si la propiedad `.keepAlive` del objeto `transporter` es **false**, la conexión SMTP se cierra automáticamente después de la ejecución de `. end()`, de lo contrario permanece viva hasta que el objeto `transporter` sea destruido. Para más información, consulte la descripción del comando [`SMTP New transporter`](../commands/smtp-new-transporter).

En *mail*, pase un [objeto `Email`](EmailObjectClass.md#email-object) válido para enviar. Las propiedades origen (de dónde viene el correo electrónico) y destino (uno o varios destinatarios) deben incluirse, el resto de propiedades son opcionales.

#### Objeto devuelto

La función devuelve un objeto que describe el estado SMTP de la operación. Este objeto puede contener las siguientes propiedades:

| Propiedad  | Tipo    | Descripción                                                                                                                                 |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| success    | boolean | True si el envío tiene éxito, false en caso contrario                                                                                       |
| status     | number  | Código de estado devuelto por el servidor SMTP (0 en caso de un problema no relacionado con el procesamiento del correo) |
| statusText | text    | Mensaje de estado devuelto por el servidor SMTP                                                                                             |

En caso de un problema no relacionado con el procesamiento SMTP (por ejemplo, si falta una propiedad obligatoria en el correo), 4D genera un error que puede interceptar utilizando un método instalado por el comando `ON ERR CALL`. Utilice el comando `Últimos errores` para obtener información sobre el error.

En este caso, el objeto estado resultante contiene los siguientes valores:

| Propiedad  | Valor                  |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->

