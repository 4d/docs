---
id: imap-new-transporter
title: IMAP New transporter
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| Parámetros | Tipo                               |     | Descripción                                                                       |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------------------------------------- |
| server     | Object                             |  →  | Información del servidor de correo                                                |
| Result     | 4D.IMAPTransporter |  ←  | [IMAP transporter object](../API/IMAPTransporterClass.md#imap-transporter-object) |

<!-- END REF -->

#### Descripción

El comando `IMAP New transporter` <!-- REF #_command_.IMAP New transporter.Summary -->configura una nueva conexión IMAP<!-- END REF --> según el parámetro *server* y devuelve un nuevo objeto *transporter*. El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Valor por defecto (si se omite)                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/IMAPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                  | False                                                                    |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Cadena u objeto token que representa las credenciales de autorización OAuth2. Utilizado sólo con OAUTH2 `authationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto *[IMAP transporter](../API/IMAPTransporterClass.md#imap-transporter-object)*. | ninguno                                                                  |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/IMAPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                    | se utiliza el modo de autenticación más seguro soportado por el servidor |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](../API/IMAPTransporterClass.md#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                                                                                                                                                            | 300                                                                      |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/IMAPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                       | 30                                                                       |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/IMAPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | *obligatorio*                                                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/IMAPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ninguno                                                                  |
| .**password** : Text<br/>contraseña de usuario para la autenticación en el servidor. No se devuelve en el objeto *[IMAP transporter](#imap-transporter-object)*.                                                                                                                                                                                                                                                                                                                                                             | ninguno                                                                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/IMAPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 993                                                                      |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/IMAPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ninguno                                                                  |

> **Atención**: asegúrese de que el tiempo de espera definido sea menor que el tiempo de espera del servidor, de lo contrario el tiempo de espera del cliente será inútil.

#### Result

La función devuelve un [**objeto IMAP transporter**](../API/IMAPTransporterClass.md#imap-transporter-object). Todas las propiedades devueltas son de sólo lectura\*\*.

> La conexión IMAP se cierra automáticamente cuando se destruye el objeto transportador.

#### Ejemplo

```4d
$server:=New object
$server.host:="imap.gmail.com" //Obligatorio
$server.port:=993
$server.user:="4d@gmail.com"
$server.password:="XXXXXXXX"
$server.logFile:="LogTest.txt" //log a guardar en la carpeta Logs

var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

$status:=$transporter.checkConnection()
If(Not($status.success))
   ALERT("An error occurred: "+$status.statusText)
End if
```

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1723                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
