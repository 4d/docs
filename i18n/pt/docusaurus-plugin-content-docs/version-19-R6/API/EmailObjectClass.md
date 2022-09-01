---
id: EmailObjectClass
title: Email
---

Criar, enviar ou receber e-mails em 4D é feito manipulando um objeto de `e-Mail`.

Objetos`email` são criados ao receber e-mails através de uma função de classe *transporter*:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) e [`.getMails()`](IMAPTransporterClass.md#getmails) funções para obter e-mails de um servidor IMAP
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) função para receber um e-mail de um servidor POP3.

> Você também pode criar um novo, objeto `Email` em branco chamando o comando 4D [`Novo objeto`](https://doc.4d.com/4dv18/help/command/en/page1471.html), e, em seguida, preencha com [Propriedades do objeto de e-mail](#email-object).

Você envia  objetos `e-Mail` usando a função SMTP [`.send()`](SMTPTransporterClass.md#send).

[`MIME Converter do MIME`](#mail-convert-from-mime) e [`Converter para comandos MIME`](#mail-convert-to-mime) podem ser usados para converter objetos `Email` a partir de ou para conteúdos MME.

### Objeto Email

Objetos de e-mail fornecem as seguintes propriedades:

> 4D segue a [especificação JMAP](https://jmap.io/spec-mail.html) para formatar o objeto de e-mail.

|                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.attachments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bcc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyStructure.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.cc.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.comments.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.from.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.headers.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.htmlBody.Syntax -->](#htmlbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.htmlBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.id.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.keywords.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.messageId.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.references.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.replyTo.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sendAt.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.sender.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.size.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.subject.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.textBody.Summary -->|
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailObjectClass.to.Summary -->|

### Endereços de Email

Todas as propriedades que contêm endereços de e-mail ([`de`](#from), [`cc`](#cc), [`bcc`](#bcc), [`a`](#to), [`remetente`](#sender), , [`responde`](#replyto)) aceita um valor de texto, objeto ou tipo de coleção.

#### Text

- e-mail único: "somebody@domain.com"
- um nome+email: "Somebody <somebody@domain.com>"
- vários emails: "Somebody <somebody@domain.com>,me@home.org"

#### Objeto

Um objeto com duas propriedades:

| Propriedade | Tipo | Descrção                         |
| ----------- | ---- | -------------------------------- |
| name        | Text | Nome de exibição (pode ser nulo) |
| email       | Text | Endereço de Email                |

#### Collection

Uma coleção de objetos de endereço.

### Gesttão do corpo do correio eletrônico

As propriedades [`textBody`](#textbody) e [`htmlBody`](#htmlbody) são usadas apenas com o [SMTP. send()](SMTPTransporterClass.md#send) permitir envio de e-mails simples. Quando ambas as propriedades são preenchidas, o tipo de conteúdo MIME multiparte/alternativo é utilizada. O cliente de email deve reconhecer a parte multiparte/alternativa e exibir a parte do texto ou html conforme necessário.

[`bodyStructure`](#bodystructure) e [`bodyValues`](#bodyvalues) são utilizados para [SMTP](SMTPTransporterClass.md) quando o [objeto Email](email-object) for construído a partir de um documento MIME., ou seja,  quando gerado pelo comando `MAIL Convert from MIME`. Neste caso, tanto as propriedades `bodyStructure` e `bodyValues` devem ser passados juntas, e não é recomendado usar o `textBody` e `htmlBody`.

#### Exemplo de objetos bodyStructure e bodyValues

```json
"bodyStructure": {
  "type": "multipart/mixed",
  "subParts": [
    {
      "partId": "p0001",
      "type": "text/plain"
    },
    {
      "partId": "p0002",
      "type": "text/html"
    }
  ]
},
"bodyValues": {
  "p0001": {
    "value": "I have the most brilliant plan. Let me tell you all about it."
  },
  "p0002": {
    "value": "<!DOCTYPE html><html><head><title></title><style type=\"text/css\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"
  }
}
```

## .attachments

<!-- REF #EmailObjectClass.attachments.Syntax -->

**.attachments** : Collection<!-- END REF -->

#### Descrção

The `.sender` property contains the <!-- REF #EmailObjectClass.attachments.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Objetos de anexo são definidos através do comando [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Objetos de anexos têm propriedades e funções específicas [](MailAttachmentClass.md).

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->

**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Descrção

The `.bcc` property contains the <!-- REF #EmailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->

**.bodyStructure** : Object<!-- END REF -->

#### Descrção

The `.bodyStructure` property contains the <!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. Veja [Gestão do corpo](#handling-body-part).

O objeto `.bodyStructure` contém as seguintes propriedades:

| Propriedade | Tipo                   | Value                                                                                                                                                                    |
| ----------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| partID      | Text                   | Identifica a parte de maneira única dentro do email                                                                                                                      |
| type        | Text                   | (obrigatório) Valor do campo de cabeçalho Content-Type da parte                                                                                                          |
| charset     | Text                   | Valor do parâmetro charset do campo de cabeçalho Content-Type                                                                                                            |
| encoding    | Text                   | Se `isEncodingProblem=true`, o valor de Content-Transfer-Encoding é adicionado (por padrão indefinido)                                                                   |
| disposition | Text                   | Valor do campo de cabeçalho Conteúdo - Disposição da parte                                                                                                               |
| Línguagem   | Coleção de textos      | Lista de tags de idioma, conforme definido em [RFC3282](https://tools.ietf.org/html/rfc3282), no campo de cabeçalho Content-Language da parte, se presente.              |
| location    | Text                   | URI, como definido em [RFC2557](https://tools.ietf.org/html/rfc2557), no campo de cabeçalho Content-Location da parte, se estiver presente.                              |
| subParts    | Uma coleção de objetos | Partes do corpo de cada filho (coleção de objetos*EmailBodyPart* )                                                                                                       |
| headers     | Uma coleção de objetos | Lista de todos os campos de cabeçalho da parte, na ordem que eles aparecem na mensagem (coleção de objetos de *EmailHeader* , ver a propriedade [cabeçalhos](#headers-)) |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->

**.bodyValues** : Object<!-- END REF -->

#### Descrção

The `.bodyValues` property contains the <!-- REF #EmailObjectClass.bodyValues.Summary -->*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)<!-- END REF -->. Veja [Gestão do corpo](#handling-body-part).

O objeto `.bodyValues` contém as seguintes propriedades:

| Propriedade                | Tipo    | Value                                                                                                                                                                               |
| -------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Valor da parte do corpo                                                                                                                                                             |
| *partID*.isEncodingProblem | boolean | Verdadeiro se seções malformadas forem encontradas durante a decodificação do conjunto de charset, ou charset desconhecido, ou codificação de conteúdo desconhecido. Padrão é falso |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->

**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Descrção

The `.cc` property contains the <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->

**.comments** : Text<!-- END REF -->

#### Descrção

The `.comments` property contains an <!-- REF #EmailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Os comentários só aparecem na seção de cabeçalho da mensagem (mantendo o corpo da mensagem intocado).

Para requisitos de formatação específicos, consulte o [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->

**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Descrção

The `.from` property contains the <!-- REF #EmailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.

Cada e-mail que você envia possui tanto o [remetente](#sender) quanto **de** endereços:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->

**.headers** : Collection<!-- END REF -->

#### Descrção

The `.headers` property contains a <!-- REF #EmailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. Esta propriedade permite que usuários adicionem cabeçalhos estendidos (registrados) ou definidos pelo usuário (não registrados, começando com cabeçalhos "X").

> Se uma propriedade de objeto `EmailHeader` define um cabeçalho como "from" ou "cc" que já está definida como uma propriedade no nível de correio, a propriedade `EmailHeader` é ignorada.

Cada objeto da coleção de cabeçalhos pode conter as propriedades abaixo:

| Propriedade | Tipo | Value                                                                                                                                                                                             |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name     | text | (obrigatório) Nome do campo de cabeçalho como definido em [RFC#5322](https://tools.ietf.org/html/rfc5322). Caso seja nulo ou indefinido, o campo cabeçalho não será adicionado ao cabeçalho MIME. |
| [].value    | text | Valores do campo de cabeçalho, conforme definido em [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                               |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->

**.htmlBody** : Text<!-- END REF -->

#### Descrção

The `.htmlBody` property contains the <!-- REF #EmailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Veja [Gestão do corpo](#handling-body-part).

## .id

<!-- REF #EmailObjectClass.id.Syntax -->

**.id** : Text<!-- END REF -->

#### Descrção

[Medidor IMAP](IMAPTransporterClass.md) apenas.

The `.id` property contains the <!-- REF #EmailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->

**.inReplyTo** : Text<!-- END REF -->

#### Descrção

The `.inReplyTo` property contains the <!-- REF #EmailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

Para requisitos de formatação específicos, consulte o [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->

**.keywords** : Object<!-- END REF -->

#### Descrção

The `.keywords` property contains a <!-- REF #EmailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

Esta propriedade é o cabeçalho das "palavras-chave" (veja [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propriedade    | Tipo    | Value                                               |
| -------------- | ------- | --------------------------------------------------- |
| .\<keyword\> | boolean | Palavra-chave a definir (valor deve ser verdadeiro) |

Palavra-chave reservada.

- $draft - Indica que uma mensagem é um rascunho
- $seen - Indica uma mensagem que foi lida
- $flagged - Indica uma mensagem que requer atenção especial (por exemplo, Urgent)
- $answered - Indica uma mensagem que foi respondida
- $deleted - Indica uma mensagem para deletar

#### Exemplo

```
 $mail.keywords["$flagged"]:=True
 $mail.keywords["4d"]:=True
```

## .messageId

<!-- REF #EmailObjectClass.messageId.Syntax -->

**.messageId** : Text<!-- END REF -->

#### Descrção

The `.messageId` property contains a <!-- REF #EmailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

Este cabeçalho geralmente é "lettersOrNumbers@domainname", por exemplo, "abcdef.123456@4d.com". Este ID exclusivo é usado em particular em fóruns ou listas públicas de e-mail. Em geral, os servidores de email adicionam automaticamente este cabeçalho às mensagens que enviam.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->

**.receivedAt** : Texto<!-- END REF -->

#### Descrção

[Medidor IMAP](IMAPTransporterClass.md) apenas.

The `.receivedAt` property contains the <!-- REF #EmailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->

**.references** : Collection<!-- END REF -->

#### Descrção

The `.references` property contains the <!-- REF #EmailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

Para requisitos de formatação específicos, consulte o [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->

**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### Descrção

The `.replyTo` property contains the <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->

**.sendAt** : Text<!-- END REF -->

#### Descrção

The `.sendAt` property contains the <!-- REF #EmailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->

**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### Descrção

The `.to` property contains the <!-- REF #EmailObjectClass.sender.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Cada email que você enviar possui tanto o **remetente** quanto **[dos](#from)** endereços:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->

**.size** : Integer<!-- END REF -->

#### Descrção

[Medidor IMAP](IMAPTransporterClass.md) apenas.

The `.size` property contains the <!-- REF #EmailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->

**.subject** : Text<!-- END REF -->

#### Descrção

The `.subject` property contains the <!-- REF #EmailObjectClass.subject.Summary -->description of topic<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->

**.textBody** : Text<!-- END REF -->

#### Descrção

The `.textBody` property contains the <!-- REF #EmailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Veja [Gestão do corpo](#handling-body-part).

## .to

<!-- REF #EmailObjectClass.to.Syntax -->

**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### Descrção

The `MAIL Convert from MIME` command <!-- REF #EmailObjectClass.to.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

## MAIL Convert from MIME

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |

</details>

<!-- REF #_command_.MAIL_Convert_from_MIME.Syntax -->

**Converter MIME**( *mime* : Blob ) : Objeto<br/>**MAIL Converter de MIME**( *mime* : Texto : Object<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_from_MIME.Params -->
| Parameter  | Tipo       |    | Descrção                                |
| ---------- | ---------- |:--:| --------------------------------------- |
| mime       | Blob, Text | -> | E-mail no MIME                          |
| Resultados | Objeto     | <- | Objeto Email|<!-- END REF -->

|

#### Descrção

The `MAIL Convert from MIME` command <!-- REF #_command_.MAIL_Convert_from_MIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.
> 4D segue a [especificação JMAP](https://jmap.io/spec-mail.html) para formatar o objeto de e-mail.

Passe *mime* um documento MIME válido para converter. Pode ser fornecido por qualquer servidor de correio ou aplicativo. Você pode passar um BLOB ou um parâmetro *mime*. Se o MIME vier de um arquivo, é recomendado utilizar um parâmetro BLOB para evitar problemas relacionados ao conjunto de caracteres e conversões de quebra de linha.

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

## MAIL Convert to MIME

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
| v17 R5 | Modificado |

</details>

<!-- REF #_command_.MAIL_Convert_to_MIME.Syntax -->

**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL_Convert_to_MIME.Params -->
| Parameter  | Tipo   |    | Descrção                                                   |
| ---------- | ------ |:--:| ---------------------------------------------------------- |
| mail       | Objeto | -> | Objeto Email                                               |
| options    | Objeto | -> | Opções de codificação e Charset                            |
| Resultados | Text   | <- | Email objeto convertido em MIME|<!-- END REF -->

|

#### Descrção

The `MAIL Convert to MIME` command <!-- REF #_command_.MAIL_Convert_to_MIME.Summary -->converts an email object into MIME text<!-- END REF -->. Este comando é chamado internamente por [SMTP_transporter.send(](API/SMTPTransporterClass.md#send) para formatar o objeto de e-mail antes de enviá-lo. Ele pode ser usado para analisar o formato MIME do objeto.

No *e-mail*, passe o conteúdo e os detalhes da estrutura do e-mail para converter. Isso inclui informações como os endereços de e-mail (remetente e destinatário(s)), a própria mensagem e o tipo de exibição para a mensagem.
> 4D segue a [especificação JMAP](https://jmap.io/spec-mail.html) para formatar o objeto de e-mail.

Em *opções*, você pode definir um conjunto de caracteres e uma configuração de codificação específica para o e-mail. As seguintes propriedades estão disponíveis:

| Propriedade   | Tipo | Descrção                                                                                                                                                                        |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset e codificação usados para as seguintes partes do e-mail: assunto, nomes de arquivos de anexo e atributos de nome de e-mail. Valores possíveis:<table><tr><th>Constante</th><th>Value</th><th>Comentário</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII se possível, japonês (ISO-2022-JP) & impressora, se possível, caso contrário, UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII se possível, japonês (ISO-2022-JP) & 7-bit se possível, caso contrário, UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (**valor padrão**)</td></tr><tr><td>modo de correio UTF8 na base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII se possível, caso contrário UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | Charset e codificação usados para o conteúdo html e corpo do e-mail. Valores possíveis: o mesmo que para headerCharset (ver acima)                                              |

Se o parâmetro *opções* for omitido, a configuração do modo de email UTF8 é usada para cabeçalho e partes do corpo.

#### Exemplo

```4d
var $mail: Objeto
var $mime: Texto
$mail:=Novo objeto

// Criação de um e-mail
$mail. rom:="tsales@massmarket.com"
$mail.subject:="Liquidação Terrificada! This week only!"
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
