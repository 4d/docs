---
id: mail-convert-from-mime
title: MAIL Convert from MIME
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18          | Añadidos       |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL Convert from MIME.Params -->

| Parámetros | Tipo       |     | Descripción   |
| ---------- | ---------- | :-: | ------------- |
| mime       | Blob, Text |  →  | Email en MIME |
| Result     | Object     |  ←  | Objeto Email  |

<!-- END REF -->

#### Descripción

El comando `MAIL Convert from MIME` <!-- REF #_command_.MAIL Convert from MIME.Summary -->convierte un documento MIME en un objeto de correo electrónico válido<!-- END REF -->.

> 4D sigue la [especificación JMAP](https://jmap.io/spec-mail.html) para dar formato al objeto de correo electrónico devuelto.

Pase en *mime* un documento MIME válido a convertir. Puede ser suministrado por cualquier servidor o aplicación de correo. Puede pasar un BLOB o un texto en el parámetro *mime*. Si el MIME proviene de un archivo, se recomienda utilizar un parámetro BLOB para evitar problemas relacionados con las conversiones del conjunto de caracteres y los saltos de línea.

#### Objeto devuelto

Objeto Email.

#### Ejemplo 1

Quiere cargar una plantilla de correo guardada como MIME en un documento de texto y enviar un correo electrónico:

```4d
var $mime: Blob
var $mail;$server;$transporter;$status: Object

$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())

$mail:=MAIL Convert from MIME($mime)
$mail.to:="smith@mail.com"
$mail.subject:="Hello world"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="test@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($mail)
```

#### Ejemplo 2

En este ejemplo, se envía directamente un documento de 4D Write Pro que contiene imágenes:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// Exportación Mime del documento 4D Write Pro
WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// convertir la variable Mime de 4D Write Pro en objeto email
$email:=MAIL Convert from MIME($mime)

// Llenar los encabezados del objeto email
$email.subject:="4D Write Pro HTML body"
$email.from:="YourEmail@gmail.com"
$email.to:="RecipientEmail@mail.com"

$server:=New object
$server.host:="smtp.gmail.com"
$server.port:=465
$server.user:="YourEmail@gmail.com"
$server.password:="XXXX"

$transporter:=SMTP New transporter($server)
$status:=$transporter.send($email)
```

\| mime | BLOB, Texto | →  | Email en MIME |
\| Resultado de función | Objeto | ← | Objeto Email |

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1681                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
