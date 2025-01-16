---
id: EmailObjectClass
title: Email
---

Criar, enviar ou receber e-mails em 4D é feito manipulando um objeto de `e-Mail`.

Objetos`email` são criados ao receber e-mails através de uma função de classe *transporter*:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) e [`.getMails()`](IMAPTransporterClass.md#getmails) funções para obter e-mails de um servidor IMAP
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) função para receber um e-mail de um servidor POP3.

> Você também pode criar um objeto em branco`Email` e preenchê-lo com as propriedades do objeto [Email](#email-object).

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

#### Object

Um objeto com duas propriedades:

| Propriedade | Tipo | Descrição                        |
| ----------- | ---- | -------------------------------- |
| name        | Text | Nome de exibição (pode ser nulo) |
| email       | Text | Endereço de Email                |

#### Collection

Uma coleção de objetos de endereço.

### Gestão do corpo do correio eletrônico

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

<!-- REF #EmailObjectClass.attachments.Syntax -->**.attachments** : Collection<!-- END REF -->

#### Descrição

The `.sender` property contains the <!-- REF #EmailObjectClass.attachments.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Objetos de anexo são definidos através do comando [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Objetos de anexos têm propriedades e funções específicas [](MailAttachmentClass.md).

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Descrição

A propriedade `.bcc` contém a <!-- REF #EmailObjectClass.bcc.Summary -->Destinatário de correio electrónico oculto de Cópia Cega de Carbono (BCC) [endereço(s)](#email-addresses) do correio electrónico<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### Descrição

A propriedade `.bodyStructure` contém a <!-- REF #EmailObjectClass.bodyStructure.Summary -->Objeto *EmailBodyPart* ou seja a estrutura MIME completa do corpo da mensagem (opcional)<!-- END REF -->. .

O objeto `.bodyStructure` contém as seguintes propriedades:

| Propriedade | Tipo                   | Valor                                                                                                                                                                    |
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

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### Descrição

A propriedade `.bodyValues` contém a <!-- REF #EmailObjectClass.bodyValues.Summary -->Objeto *EmailBodyValue* contendo um objeto para cada \<partID\> of `bodyStructure` (opcional)<!-- END REF -->. .

O objeto `.bodyValues` contém as seguintes propriedades:

| Propriedade                | Tipo    | Valor                                                                                                                                                                               |
| -------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Valor da parte do corpo                                                                                                                                                             |
| *partID*.isEncodingProblem | boolean | Verdadeiro se seções malformadas forem encontradas durante a decodificação do conjunto de charset, ou charset desconhecido, ou codificação de conteúdo desconhecido. Padrão é falso |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Descrição

A propriedade `.cc` contém a <!-- REF #EmailObjectClass.cc.Summary -->Cópia (CC) para outros endereços de [email](#email-addresses)<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### Descrição

A propriedade `.comments` contém a <!-- REF #EmailObjectClass.comments.Summary -->um cabeçalho de comentários adicionais.<!-- END REF -->.

Os comentários só aparecem na seção de cabeçalho da mensagem (mantendo o corpo da mensagem intocado).

Para requisitos de formatação específicos, consulte o [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Descrição

A propriedade `.from` contém a <!-- REF #EmailObjectClass.from.Summary -->[endereços](#email-addresses) originais do email<!-- END REF -->.

Cada e-mail que você envia possui tanto o [remetente](#sender) quanto **de** endereços:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### Descrição

A propriedade `.headers` contém a <!-- REF #EmailObjectClass.headers.Summary -->coleção de objectos `EmailHeader` , na ordem em que aparecem na mensagem<!-- END REF -->. Esta propriedade permite que usuários adicionem cabeçalhos estendidos (registrados) ou definidos pelo usuário (não registrados, começando com cabeçalhos "X").

> Se uma propriedade de objeto `EmailHeader` define um cabeçalho como "from" ou "cc" que já está definida como uma propriedade no nível de correio, a propriedade `EmailHeader` é ignorada.

Cada objeto da coleção de cabeçalhos pode conter as propriedades abaixo:

| Propriedade | Tipo | Valor                                                                                                                                                                                             |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [].name     | text | (obrigatório) Nome do campo de cabeçalho como definido em [RFC#5322](https://tools.ietf.org/html/rfc5322). Caso seja nulo ou indefinido, o campo cabeçalho não será adicionado ao cabeçalho MIME. |
| [].value    | text | Valores do campo de cabeçalho, conforme definido em [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                               |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### Descrição

A propriedade `.htmlBody` contém a <!-- REF #EmailObjectClass.htmlBody.Summary -->Representação HTML da mensagem de correio electrónico (o charset padrão é UTF-8) (opcional, apenas SMTP)<!-- END REF -->. .

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descrição

[Medidor IMAP](IMAPTransporterClass.md) apenas.

A propriedade `.id` contém a <!-- REF #EmailObjectClass.id.Summary -->ID única do servidor IMAP<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### Descrição

A propriedade `.inReplyTo` contém a <!-- REF #EmailObjectClass.inReplyTo.Summary -->identificador(es) da(s) mensagem original para a qual a mensagem atual é uma resposta<!-- END REF -->.

Para requisitos de formatação específicos, consulte o [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### Descrição

A propriedade `.keywords` contém a <!-- REF #EmailObjectClass.keywords.Summary -->conjunto de palavras-chave como um objecto, onde cada nome de propriedade é uma palavra-chave e cada valor é verdadeiro<!-- END REF -->.

Esta propriedade é o cabeçalho das "palavras-chave" (veja [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propriedade    | Tipo    | Valor                                               |
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

<!-- REF #EmailObjectClass.messageId.Syntax -->**.messageId** : Text<!-- END REF -->

#### Descrição

A propriedade `.messageId` contém a <!-- REF #EmailObjectClass.messageId.Summary -->cabeçalho identificador da mensagem ("message-id")<!-- END REF -->.

Este cabeçalho geralmente é "lettersOrNumbers@domainname", por exemplo, "abcdef.123456@4d.com". Este ID exclusivo é usado em particular em fóruns ou listas públicas de e-mail. Em geral, os servidores de email adicionam automaticamente este cabeçalho às mensagens que enviam.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Texto<!-- END REF -->

#### Descrição

[Medidor IMAP](IMAPTransporterClass.md) apenas.

A propriedade `.receivedAt` contém o <!-- REF #EmailObjectClass.receivedAt.Summary -->carimbo temporal da chegada do e-mail ao servidor IMAP no formato ISO 8601 UTC (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### Descrição

A propriedade `.references` contém o <!-- REF #EmailObjectClass.references.Summary -->Recolha de todas as mensagens-ids de mensagens da cadeia de resposta anterior<!-- END REF -->.

Para requisitos de formatação específicos, consulte o [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### Descrição

A propriedade `.replyTo` contém o <!-- REF #EmailObjectClass.replyTo.Summary -->[endereços](#email-addresses) para respostas<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### Descrição

A propriedade `.sendAt` contém o <!-- REF #EmailObjectClass.sendAt.Summary -->Timestamp de email em formato ISO 8601 UTC<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### Descrição

The `.to` property contains the <!-- REF #EmailObjectClass.sender.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Cada email que você enviar possui tanto o **remetente** quanto **[dos](#from)** endereços:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descrição

[Medidor IMAP](IMAPTransporterClass.md) apenas.

A propriedade `.size` contém o <!-- REF #EmailObjectClass.size.Summary -->tamanho (expresso em bytes) do objecto Email devolvido pelo servidor IMAP<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### Descrição

A propriedade `.subject` contém o <!-- REF #EmailObjectClass.subject.Summary -->descrição do tema<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### Descrição

A propriedade `.textBody` contém o <!-- REF #EmailObjectClass.textBody.Summary -->Representação em texto simples da mensagem de correio electrónico (o conjunto de caracteres padrão é UTF-8) (opcional, apenas SMTP)<!-- END REF -->. .

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### Descrição

The `MAIL Convert from MIME` command <!-- REF #EmailObjectClass.to.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

## MAIL Convert from MIME

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #_command_.MAIL Convert from MIME.Syntax -->**Converter MIME**( *mime* : Blob ) : Objeto<br/>**MAIL Converter de MIME**( *mime* : Texto : Object<!-- END REF -->


<!-- REF #_command_.MAIL Convert from MIME.Params -->
| Parâmetro  | Tipo       |    | Descrição                               |
| ---------- | ---------- |:--:| --------------------------------------- |
| mime       | Blob, Text | -> | E-mail no MIME                          |
| Resultados | Object     | <- | Objeto Email|<!-- END REF -->

|

#### Descrição

O comando `MAIL Convert from MIME` <!-- REF #_command_.MAIL Convert from MIME.Summary -->converte um documento MIME num objecto de correio electrónico válido<!-- END REF -->.
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

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |
| 17 R5   | Modificado |

</details>

<!-- REF #_command_.MAIL Convert to MIME.Syntax -->**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->


<!-- REF #_command_.MAIL Convert to MIME.Params -->
| Parâmetro  | Tipo   |    | Descrição                                                  |
| ---------- | ------ |:--:| ---------------------------------------------------------- |
| mail       | Object | -> | Objeto Email                                               |
| options    | Object | -> | Opções de codificação e Charset                            |
| Resultados | Text   | <- | Email objeto convertido em MIME|<!-- END REF -->

|

#### Descrição

O comando `MAIL Convert to MIME` <!-- REF #_command_.MAIL Convert to MIME.Summary -->converte um objecto e-mail em texto MIME<!-- END REF -->. Este comando é chamado internamente por [SMTP_transporter.send(](API/SMTPTransporterClass.md#send) para formatar o objeto de e-mail antes de enviá-lo. Ele pode ser usado para analisar o formato MIME do objeto.

No *e-mail*, passe o conteúdo e os detalhes da estrutura do e-mail para converter. Isso inclui informações como os endereços de e-mail (remetente e destinatário(s)), a própria mensagem e o tipo de exibição para a mensagem.
> 4D segue a [especificação JMAP](https://jmap.io/spec-mail.html) para formatar o objeto de e-mail.

Em *opções*, você pode definir um conjunto de caracteres e uma configuração de codificação específica para o e-mail. As seguintes propriedades estão disponíveis:

| Propriedade   | Tipo | Descrição                                                                                                                                                                       |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset e codificação usados para as seguintes partes do e-mail: assunto, nomes de arquivos de anexo e atributos de nome de e-mail. Valores possíveis:<table><tr><th>Parâmetros</th><th>Valor</th><th>Comentário</th></tr><tr><td>mail mode ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII se possível, japonês (ISO-2022-JP) & impressora, se possível, caso contrário, UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII se possível, japonês (ISO-2022-JP) & 7-bit se possível, caso contrário, UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mail mode ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mail mode UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (**valor padrão**)</td></tr><tr><td>modo de correio UTF8 na base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII se possível, caso contrário UTF-8 & base64</td></tr></table> |
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
