---
id: mail-convert-to-mime
title: MAIL Convert to MIME
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R4       | Añadidos       |
| 17 R5       | Modificado     |

</details>

<!-- REF #_command_.MAIL Convert to MIME.Syntax -->**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL Convert to MIME.Params -->

| Parámetros | Tipo   |     | Descripción                                    |
| ---------- | ------ | :-: | ---------------------------------------------- |
| mail       | Object |  →  | Objeto Email                                   |
| options    | Object |  →  | Opciones de codificación y de charset del mail |
| Result     | Text   |  ←  | Objeto email convertido en MIME                |

<!-- END REF -->

#### Descripción

El comando `MAIL Convert to MIME` <!-- REF #_command_.MAIL Convert to MIME.Summary -->convierte un objeto email en texto MIME<!-- END REF -->. Este comando es llamado internamente por [SMTP_transporter.send()](API/SMTPTransporterClass.md#send) para formatear el objeto email antes de enviarlo. Se puede utilizar para analizar el formato MIME del objeto.

En *mail*, pase el contenido y los detalles de la estructura del correo electrónico a convertir. Esto incluye información como las direcciones de correo electrónico (remitente y destinatario(s)), el propio mensaje y el tipo de visualización del mensaje.

> 4D sigue la [especificación JMAP](https://jmap.io/spec-mail.html) para formatear el objeto email.

En *options*, puede configurar la codificación y el charset del mail. Las siguientes propiedades están disponibles:

| Propiedad     | Tipo | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset y codificación utilizados para las siguientes partes del correo electrónico: asunto, nombres de archivos adjuntos y atributo(s) del nombre del correo electrónico. Valores posibles:<table><tr><th>Constante</th><th>Valor</th><th>Comentario</th></tr><tr><td>Modo correo ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII si es posible, japonés (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII si es posible, japonés (ISO-2022-JP) y 7 bits si es posible, de lo contrario UTF-8 y Quoted-printable</li></ul></td></tr><tr><td>Modo correo ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 y Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 y 8 bits</li></ul></td></tr><tr><td>Modo correo UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (**valor por defecto**)</td></tr><tr><td>Modo correo UTF8 en base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si es posible, de lo contrario UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | Charset y codificación utilizados para el contenido html y el texto del cuerpo del correo electrónico. Valores posibles: los mismos que para headerCharset (ver arriba)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

Si se omite el parámetro *options*, se utiliza la configuración del modo de correo UTF8 para las partes encabezado y cuerpo.

#### Ejemplo

```4d
var $mail: Object
var $mime: Text
$mail:=New object

// Creation of a mail
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// transform the mail object in MIME
$mime:=MAIL Convert to MIME($mail)

// Contents of $mime:
// MIME-Version: 1.0
// Date: Thu, 11 Oct 2018 15:42:25 GMT
// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>
// Sender: tsales@massmarket.com
// From: tsales@massmarket.com
// To: noreply@4d.com
// To: test@4d.com
// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"
// Subject: Terrific Sale! This week only!
//
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/plain; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// Text format email
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/html; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// <html><body>HTML format email</body></html>
// --E0AE5773D5E95245BBBD80DD0687E218--
```

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 1604                                                                |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
