---
id: smtp-new-transporter
title: SMTP New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!--REF #_command_.SMTP New transporter.Params-->

| Parámetros | Tipo                               |                             | Descripción                                                                       |
| ---------- | ---------------------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| server     | Object                             | &#8594; | Información del servidor de correo                                                |
| Resultado  | 4D.SMTPTransporter | &#8592; | [Objeto SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object) |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                 |
| ----------- | ---------------------------------------------- |
| 18          | Nueva propiedad logFile                        |
| 17 R5       | Nuevas propiedades bodyCharset y headerCharset |
| 17 R4       | Añadidos                                       |

</details>

## Descripción

El comando `SMTP New transporter` <!-- REF #_command_.SMTP New transporter.Summary -->configura una nueva conexión SMTP<!-- END REF --> según el parámetro *server* y devuelve un nuevo [objeto SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object). El objeto transportador devuelto se utilizará normalmente para el envío de correos electrónicos.

> Este comando no abre ninguna conexión con el servidor SMTP. Este comando no abre ninguna conexión con el servidor SMTP.
>
> La conexión SMTP se cierra automáticamente:
>
> - cuando el objeto transportador es destruido si la propiedad [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) es true (por defecto),
> - después de cada ejecución de la función [`.send()`](../API/SMTPTransporterClass.md#send) si la propiedad [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) está definida en false.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Valor por defecto (si se omite)                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/SMTPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                  | False                                                                                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Cadena u objeto token que representa las credenciales de autorización OAuth2. Utilizado sólo con OAUTH2 `authationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)*. | ninguno                                                                                          |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/SMTPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                    | se utiliza el modo de autenticación más seguro soportado por el servidor                         |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](../API/SMTPTransporterClass.md#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                         | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/SMTPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                       | 30                                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](../API/SMTPTransporterClass.md#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                   | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/SMTPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | *obligatorio*                                                                                    |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](../API/SMTPTransporterClass.md#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                             | True                                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/SMTPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ninguno                                                                                          |
| **password** : Text<br/>contraseña de usuario para la autenticación en el servidor. No se devuelve en el objeto *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)*.                                                                                                                                                                                                                                                                                                                                                | ninguno                                                                                          |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/SMTPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 587                                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](../API/SMTPTransporterClass.md#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                         | 100                                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/SMTPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ninguno                                                                                          |

## Resultado

La función devuelve un [**objeto SMTP transporter**](../API/SMTPTransporterClass.md#smtp-transporter-object). Todas las propiedades devueltas son de sólo lectura\*\*.

## Ejemplo

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

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1608                        |
| Hilo seguro       | &check; |


