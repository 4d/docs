---
id: mail-convert-from-mime
title: MAIL Convert from MIME
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object<!-- END REF -->

<!-- REF #_command_.MAIL Convert from MIME.Params -->

| Parâmetro  | Tipo       |     | Descrição      |
| ---------- | ---------- | :-: | -------------- |
| mime       | Blob, Text |  →  | E-mail no MIME |
| Resultados | Object     |  ←  | Objeto Email   |

<!-- END REF -->

#### Descrição

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL Convert from MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

> O formato dos objetos de email 4D segue a [especificação JMAP](https://jmap.io/spec-mail.html).

Passe em *mime* um documento MIME válido para converter. Pode ser fornecido por qualquer servidor de correio ou aplicativo. Você pode passar um BLOB ou um parâmetro *mime*. Se o MIME vier de um arquivo, é recomendado utilizar um parâmetro BLOB para evitar problemas relacionados ao conjunto de caracteres e conversões de quebra de linha.

#### Objeto devolvido

Objeto Email.

#### Exemplo 1

Se quiser carregar um modelo de e-mail salvo como MIME em um documento de texto e enviar um e-mail:

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

#### Exemplo 2

Neste exemplo, você envia diretamente um documento 4D Write Pro contendo fotos:

```4d
var $mime: Blob
var $email;$server;$transporter;$status: Object

// Mime export of the 4D Write Pro document WP EXPORT VARIABLE(WParea;$mime;wk mime html)

// convert 4D Write Pro Mime variable in mail object
$email:=MAIL Convert from MIME($mime)

// Fill your mail object headers
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

\| mime | BLOB, Text | →  | Email in MIME |
\| Function result | Object | ← | Email object |

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1681                            |
| Thread safe    | &amp;check; |
