---
id: pop3-new-transporter
title: POP3 New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!--REF #_command_.POP3 New transporter.Params-->

| Parámetros | Tipo                               |   | Descripción                                                                       |
| ---------- | ---------------------------------- | - | --------------------------------------------------------------------------------- |
| server     | Object                             | → | Información del servidor de correo                                                |
| Resultado  | 4D.POP3Transporter | ← | [Objeto transporter POP3](../API/POP3TransporterClass.md#pop3-transporter-object) |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

#### Descripción

El comando `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary -->configura una nueva conexión POP3<!-- END REF --> en función del parámetro *server* y devuelve un nuevo objeto [transporter POP3](../API/POP3TransporterClass.md#pop3-transporter-object). El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Valor por defecto (si se omite)                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/POP3TransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                | False                                                                    |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Cadena u objeto token que representa las credenciales de autorización OAuth2. Utilizado sólo con OAUTH2 `authationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto *[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)*. | ninguno                                                                  |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/POP3TransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                  | se utiliza el modo de autenticación más seguro soportado por el servidor |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/POP3TransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                     | 30                                                                       |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/POP3TransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *obligatorio*                                                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/POP3TransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                   | ninguno                                                                  |
| **.password** : Text<br/>contraseña de usuario para la autenticación en el servidor. No se devuelve en el objeto *[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)*.                                                                                                                                                                                                                                                                                                                               | ninguno                                                                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/POP3TransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 995                                                                      |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/POP3TransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ninguno                                                                  |

#### Result

La función devuelve un [**objeto POP3 transporter**](../API/POP3TransporterClass.md#pop3-transporter-object). Todas las propiedades devueltas son de sólo lectura\*\*.

> La conexión POP3 se cierra automáticamente cuando se destruye el objeto transportador.

#### Ejemplo

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obligatorio
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log a registrar en la carpeta Logs

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 1697                                                                |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
