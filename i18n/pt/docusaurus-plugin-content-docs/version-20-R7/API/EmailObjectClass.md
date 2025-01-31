---
id: EmailObjectClass
title: Email
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object.

`Email` objects are created when receiving mails through a *transporter* class function:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) functions to get emails from an IMAP server
- POP3 - Função [`.getMail()`](POP3TransporterClass.md#getmail) para obter um e-mail de um servidor POP3.

> Você também pode criar um novo objeto `Email` em branco e preenchê-lo com [propriedades do objeto Email](#email-object).

Você envia objetos `Email` usando a função SMTP [`.send()`](SMTPTransporterClass.md#send).

[`MAIL Convert from MIME`](../commands/mail-convert-from-mime.md) and [`MAIL Convert to MIME`](../commands/mail-convert-to-mime.md) commands can be used to convert `Email` objects to and from MIME contents.

### Objeto Email

Objetos de e-mail fornecem as seguintes propriedades:

> 4D segue a [especificação JMAP](https://jmap.io/spec-mail.html) para formatar o objeto Email.

|                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EmailObjectClass.attachments.Syntax -->](#attachments)<br/><!-- INCLUDE #EmailObjectClass.attachments.Summary -->       |
| [<!-- INCLUDE #EmailObjectClass.bcc.Syntax -->](#bcc)<br/><!-- INCLUDE #EmailObjectClass.bcc.Summary -->                               |
| [<!-- INCLUDE #EmailObjectClass.bodyStructure.Syntax -->](#bodystructure)<br/><!-- INCLUDE #EmailObjectClass.bodyStructure.Summary --> |
| [<!-- INCLUDE #EmailObjectClass.bodyValues.Syntax -->](#bodyvalues)<br/><!-- INCLUDE #EmailObjectClass.bodyValues.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.cc.Syntax -->](#cc)<br/><!-- INCLUDE #EmailObjectClass.cc.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)<br/><!-- INCLUDE #EmailObjectClass.comments.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.from.Syntax -->](#from)<br/><!-- INCLUDE #EmailObjectClass.from.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #EmailObjectClass.headers.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.comments.Syntax -->](#comments)<br/><!-- INCLUDE #EmailObjectClass.comments.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.id.Syntax -->](#id)<br/><!-- INCLUDE #EmailObjectClass.id.Summary -->                                  |
| [<!-- INCLUDE #EmailObjectClass.inReplyTo.Syntax -->](#inreplyto)<br/><!-- INCLUDE #EmailObjectClass.inReplyTo.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.keywords.Syntax -->](#keywords)<br/><!-- INCLUDE #EmailObjectClass.keywords.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.messageId.Syntax -->](#messageid)<br/><!-- INCLUDE #EmailObjectClass.messageId.Summary -->             |
| [<!-- INCLUDE #EmailObjectClass.receivedAt.Syntax -->](#receivedat)<br/><!-- INCLUDE #EmailObjectClass.receivedAt.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.references.Syntax -->](#references)<br/><!-- INCLUDE #EmailObjectClass.references.Summary -->          |
| [<!-- INCLUDE #EmailObjectClass.replyTo.Syntax -->](#replyto)<br/><!-- INCLUDE #EmailObjectClass.replyTo.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.sendAt.Syntax -->](#sendat)<br/><!-- INCLUDE #EmailObjectClass.sendAt.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.sender.Syntax -->](#sender)<br/><!-- INCLUDE #EmailObjectClass.sender.Summary -->                      |
| [<!-- INCLUDE #EmailObjectClass.size.Syntax -->](#size)<br/><!-- INCLUDE #EmailObjectClass.size.Summary -->                            |
| [<!-- INCLUDE #EmailObjectClass.subject.Syntax -->](#subject)<br/><!-- INCLUDE #EmailObjectClass.subject.Summary -->                   |
| [<!-- INCLUDE #EmailObjectClass.textBody.Syntax -->](#textbody)<br/><!-- INCLUDE #EmailObjectClass.textBody.Summary -->                |
| [<!-- INCLUDE #EmailObjectClass.to.Syntax -->](#to)<br/><!-- INCLUDE #EmailObjectClass.to.Summary -->                                  |

### Endereços de Email

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of text, object, or collection type.

#### Text

- e-mail único: "somebody@domain.com"
- single display name+email: "Somebody <somebody@domain.com>"
- vários e-mails: "Somebody <somebody@domain.com>,me@home.org"

#### Object

Um objeto com duas propriedades:

| Propriedade | Tipo | Descrição                                           |
| ----------- | ---- | --------------------------------------------------- |
| name        | Text | Nome de exibição (pode ser nulo) |
| email       | Text | Endereço de Email                                   |

#### Collection

Uma coleção de objetos de endereço.

### Gestão do corpo do correio eletrônico

The [`textBody`](#textbody) and [`htmlBody`](#htmlbody) properties are only used with the [SMTP.send()](SMTPTransporterClass.md#send) function to allow sending simple mails. Quando ambas as propriedades são preenchidas, o tipo de conteúdo MIME multiparte/alternativo é utilizada. O cliente de email deve reconhecer a parte multiparte/alternativa e exibir a parte do texto ou html conforme necessário.

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for [SMTP](SMTPTransporterClass.md) when the [Email object](#email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

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

The `.attachments` property contains a <!-- REF #EmailObjectClass.attachments.Summary -->collection of `4D.MailAttachment` object(s)<!-- END REF -->.

Os objetos de anexo são definidos por meio do comando [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Os objetos anexo têm [propriedades e funções](MailAttachmentClass.md) específicas.

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Descrição

The `.bcc` property contains the <!-- REF #EmailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### Descrição

The `.bodyStructure` property contains the <!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

O objeto `.bodyStructure` contém as seguintes propriedades:

| Propriedade | Tipo                   | Valor                                                                                                                                                                      |
| ----------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Text                   | Identifica a parte de maneira única dentro do email                                                                                                                        |
| type        | Text                   | (obrigatório) Valor do campo de cabeçalho Content-Type da parte                                                                                         |
| charset     | Text                   | Valor do parâmetro charset do campo de cabeçalho Content-Type                                                                                                              |
| encoding    | Text                   | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                        |
| disposition | Text                   | Valor do campo de cabeçalho Conteúdo - Disposição da parte                                                                                                                 |
| Línguagem   | Coleção de textos      | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.         |
| location    | Text                   | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                           |
| subParts    | Uma coleção de objetos | Partes do corpo de cada filho (coleção de objetos *EmailBodyPart*)                                                                                      |
| headers     | Uma coleção de objetos | List of all header fields in the part, in the order they appear in the message (collection of *EmailHeader* objects, see [headers](#headers-) property) |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### Descrição

The `.bodyValues` property contains the <!-- REF #EmailObjectClass.bodyValues.Summary -->*EmailBodyValue* object, containing an object for each \<partID\> of `bodyStructure` (optional)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

O objeto `.bodyValues` contém as seguintes propriedades:

| Propriedade                                | Tipo    | Valor                                                                                                                                                                                               |
| ------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Valor da parte do corpo                                                                                                                                                                             |
| *partID*.isEncodingProblem | boolean | Verdadeiro se seções malformadas forem encontradas durante a decodificação do conjunto de charset, ou charset desconhecido, ou codificação de conteúdo desconhecido. Padrão é falso |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Descrição

The `.cc` property contains the <!-- REF #EmailObjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### Descrição

The `.comments` property contains an <!-- REF #EmailObjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Os comentários só aparecem na seção de cabeçalho da mensagem (mantendo o corpo da mensagem intocado).

Para requisitos específicos de formatação, consulte a [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Descrição

The `.from` property contains the <!-- REF #EmailObjectClass.from.Summary -->Originating [address(es)](#email-addresses) of the email<!-- END REF -->.

Cada e-mail que você envia tem os endereços [sender](#sender) e **from**:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### Descrição

The `.headers` property contains a <!-- REF #EmailObjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. Esta propriedade permite que usuários adicionem cabeçalhos estendidos (registrados) ou definidos pelo usuário (não registrados, começando com cabeçalhos "X").

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Cada objeto da coleção de cabeçalhos pode conter as propriedades abaixo:

| Propriedade                                                                  | Tipo | Valor                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [].name  | text | (obrigatório) Nome do campo cabeçalho, conforme definido na [RFC#5322](https://tools.ietf.org/html/rfc5322). Caso seja nulo ou indefinido, o campo cabeçalho não será adicionado ao cabeçalho MIME. |
| [].value | text | Valores do campo de cabeçalho conforme definido em [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                                                                                     |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### Descrição

The `.htmlBody` property contains the <!-- REF #EmailObjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descrição

[IMAP transporter](IMAPTransporterClass.md) unicamente.

The `.id` property contains the <!-- REF #EmailObjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### Descrição

The `.inReplyTo` property contains the <!-- REF #EmailObjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

Para requisitos específicos de formatação, consulte a [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### Descrição

The `.keywords` property contains a <!-- REF #EmailObjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

Essa propriedade é o cabeçalho "keywords" (consulte [RFC#4021](https://tools.ietf.org/html/rfc4021)).

| Propriedade                                             | Tipo    | Valor                                                                  |
| ------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
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

The `.messageId` property contains a <!-- REF #EmailObjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

Este cabeçalho geralmente é "lettersOrNumbers@domainname", por exemplo, "abcdef.123456@4d.com". Este ID exclusivo é usado em particular em fóruns ou listas públicas de e-mail. Em geral, os servidores de email adicionam automaticamente este cabeçalho às mensagens que enviam.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### Descrição

[IMAP transporter](IMAPTransporterClass.md) unicamente.

The `.receivedAt` property contains the <!-- REF #EmailObjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### Descrição

The `.references` property contains the <!-- REF #EmailObjectClass.references.Summary -->Collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

Para requisitos específicos de formatação, consulte a [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### Descrição

The `.replyTo` property contains the <!-- REF #EmailObjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### Descrição

The `.sendAt` property contains the <!-- REF #EmailObjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### Descrição

The `.sender` property contains the <!-- REF #EmailObjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Cada e-mail que você envia tem os endereços **sender** e **[from](#from)**:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descrição

[IMAP transporter](IMAPTransporterClass.md) unicamente.

The `.size` property contains the <!-- REF #EmailObjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### Descrição

The `.subject` property contains the <!-- REF #EmailObjectClass.subject.Summary -->description of topic<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### Descrição

The `.textBody` property contains the <!-- REF #EmailObjectClass.textBody.Summary -->Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### Descrição

The `.to` property contains the <!-- REF #EmailObjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.
