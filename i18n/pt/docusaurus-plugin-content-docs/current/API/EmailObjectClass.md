---
id: EmailObjectClass
title: Email
---

Creating, sending or receiving emails in 4D is done by handling an `Email` object.

`Email` objects are created when receiving mails through a *transporter* class function:

- IMAP - funções [`.getMail()`](IMAPTransporterClass.md#getmail) e [`.getMails()`](IMAPTransporterClass.md#getmails) para obter e-mails de um servidor IMAP
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

Todas as propriedades que contêm endereços de e-mail ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) aceitam um valor de tipo texto, objeto ou coleção.

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

As propriedades [`textBody`](#textbody) e [`htmlBody`](#htmlbody) são usadas somente com a função [SMTP.send()](SMTPTransporterClass.md#send) para permitir o envio de e-mails simples. Quando ambas as propriedades são preenchidas, o tipo de conteúdo MIME multiparte/alternativo é utilizada. O cliente de email deve reconhecer a parte multiparte/alternativa e exibir a parte do texto ou html conforme necessário.

[`bodyStructure`](#bodystructure) e [`bodyValues`](#bodyvalues) são usados para [SMTP](SMTPTransporterClass.md) quando o [objeto Email](#email-object) é criado a partir de um documento MIME, por exemplo, quando gerado pelo comando `MAIL Convert from MIME`. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `textBody` and `htmlBody`.

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

A propriedade `.attachments` contém uma <!-- REF #EmailObjectClass.attachments.Summary -->coleção de objeto(s) `4D.MailAttachment`<!-- END REF -->.

Os objetos de anexo são definidos por meio do comando [`MAIL New attachment`](MailAttachmentClass.md#mail-new-attachment). Os objetos anexo têm [propriedades e funções](MailAttachmentClass.md) específicas.

## .bcc

<!-- REF #EmailObjectClass.bcc.Syntax -->**.bcc** : Text<br/>**.bcc** : Object<br/>**.bcc** : Collection<!-- END REF -->

#### Descrição

A propriedade `.bcc` contém o destinatário oculto do e-mail <!-- REF #EmailObjectClass.bcc.Summary -->Blind Carbon Copy (BCC) [direções](#email-addresses) do e-mail<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailObjectClass.bodyStructure.Syntax -->**.bodyStructure** : Object<!-- END REF -->

#### Descrição

A propriedade `.bodyStructure` contém o objeto <!-- REF #EmailObjectClass.bodyStructure.Summary -->*EmailBodyPart*, ou seja, a estrutura MIME completa do corpo da mensagem (opcional)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

O objeto `.bodyStructure` contém as seguintes propriedades:

| Propriedade | Tipo                   | Valor                                                                                                                                                                                 |
| ----------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| partID      | Text                   | Identifica a parte de maneira única dentro do email                                                                                                                                   |
| type        | Text                   | (obrigatório) Valor do campo de cabeçalho Content-Type da parte                                                                                                    |
| charset     | Text                   | Valor do parâmetro charset do campo de cabeçalho Content-Type                                                                                                                         |
| encoding    | Text                   | If `isEncodingProblem=true`, the Content-Transfer-Encoding value is added (by default undefined)                                                                   |
| disposition | Text                   | Valor do campo de cabeçalho Conteúdo - Disposição da parte                                                                                                                            |
| Línguagem   | Coleção de textos      | List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.                    |
| location    | Text                   | URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.                                      |
| subParts    | Uma coleção de objetos | Partes do corpo de cada filho (coleção de objetos *EmailBodyPart*)                                                                                                 |
| headers     | Uma coleção de objetos | Lista de todos os campos de cabeçalho da parte, na ordem em que eles aparecem na mensagem (coleção de objetos *EmailHeader*, ver propriedade [headers](#headers-)) |

## .bodyValues

<!-- REF #EmailObjectClass.bodyValues.Syntax -->**.bodyValues** : Object<!-- END REF -->

#### Descrição

A propriedade `.bodyValues` contém o objeto <!-- REF #EmailObjectClass.bodyValues.Summary -->*EmailBodyValue*, que contém um objeto para cada \<partID\> de `bodyStructure` (opcional)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

O objeto `.bodyValues` contém as seguintes propriedades:

| Propriedade                                | Tipo    | Valor                                                                                                                                                                                               |
| ------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *partID*.value             | text    | Valor da parte do corpo                                                                                                                                                                             |
| *partID*.isEncodingProblem | boolean | Verdadeiro se seções malformadas forem encontradas durante a decodificação do conjunto de charset, ou charset desconhecido, ou codificação de conteúdo desconhecido. Padrão é falso |

## .cc

<!-- REF #EmailObjectClass.cc.Syntax -->**.cc** : Text<br/>**.cc** : Object<br/>**.cc** : Collection<!-- END REF -->

#### Descrição

A propriedade `.cc` contém os <!-- REF #EmailObjectClass.cc.Summary -->[endereço(s)](#email-addresses) e-mail adicionais em Cópia de Carbon (CC) do e-mail<!-- END REF -->.

## .comments

<!-- REF #EmailObjectClass.comments.Syntax -->**.comments** : Text<!-- END REF -->

#### Descrição

A propriedade `.comments` contém um <!-- REF #EmailObjectClass.comments.Summary --> cabeçalho de comentários adicional<!-- END REF -->.

Os comentários só aparecem na seção de cabeçalho da mensagem (mantendo o corpo da mensagem intocado).

Para requisitos específicos de formatação, consulte a [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailObjectClass.from.Syntax -->**.from** : Text<br/>**.from** : Object<br/>**.from** : Collection<!-- END REF -->

#### Descrição

A propriedade `.from` contém o <!-- REF #EmailObjectClass.from.Summary -->[a(s) endereço(es)](#email-addresses) de origem do e-mail<!-- END REF -->.

Cada e-mail que você envia tem os endereços [sender](#sender) e **from**:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .headers

<!-- REF #EmailObjectClass.headers.Syntax -->**.headers** : Collection<!-- END REF -->

#### Descrição

A propriedade `.headers` contém uma coleção <!-- REF #EmailObjectClass.headers.Summary -->de objetos `EmailHeader`, na ordem em que aparecem na mensagem<!-- END REF -->. Esta propriedade permite que usuários adicionem cabeçalhos estendidos (registrados) ou definidos pelo usuário (não registrados, começando com cabeçalhos "X").

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Cada objeto da coleção de cabeçalhos pode conter as propriedades abaixo:

| Propriedade                                                                  | Tipo | Valor                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [].name  | text | (obrigatório) Nome do campo cabeçalho, conforme definido na [RFC#5322](https://tools.ietf.org/html/rfc5322). Caso seja nulo ou indefinido, o campo cabeçalho não será adicionado ao cabeçalho MIME. |
| [].value | text | Valores do campo de cabeçalho conforme definido em [RFC#5322](https://tools.ietf.org/html/rfc5322)                                                                                                                                                     |

## .htmlBody

<!-- REF #EmailObjectClass.htmlBody.Syntax -->**.htmlBody** : Text<!-- END REF -->

#### Descrição

A propriedade `.htmlBody` contém a <!-- REF #EmailObjectClass.htmlBody.Summary -->representação HTML da mensagem de e-mail (o conjunto de caracteres padrão é UTF-8) (opcional, somente SMTP)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

## .id

<!-- REF #EmailObjectClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### Descrição

[IMAP transporter](IMAPTransporterClass.md) unicamente.

A propriedade `.id` contém o <!-- REF #EmailObjectClass.id.Summary --> ID exclusivo do servidor IMAP<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailObjectClass.inReplyTo.Syntax -->**.inReplyTo** : Text<!-- END REF -->

#### Descrição

A propriedade `.inReplyTo` contém o(s) <!-- REF #EmailObjectClass.inReplyTo.Summary -->identificador(es) de mensagem da(s) mensagem(ns) original(is) à(s) qual(is) a mensagem atual é uma resposta<!-- END REF -->.

Para requisitos específicos de formatação, consulte a [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailObjectClass.keywords.Syntax -->**.keywords** : Object<!-- END REF -->

#### Descrição

A propriedade `.keywords` contém um <!-- REF #EmailObjectClass.keywords.Summary -->conjunto de palavras-chave como um objeto, em que cada nome de propriedade é uma palavra-chave e cada valor é true<!-- END REF -->.

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

A propriedade `.messageId` contém um <!-- REF #EmailObjectClass.messageId.Summary -->cabeçalho de identificador de mensagem ("message-id")<!-- END REF -->.

Este cabeçalho geralmente é "lettersOrNumbers@domainname", por exemplo, "abcdef.123456@4d.com". Este ID exclusivo é usado em particular em fóruns ou listas públicas de e-mail. Em geral, os servidores de email adicionam automaticamente este cabeçalho às mensagens que enviam.

## .receivedAt

<!-- REF #EmailObjectClass.receivedAt.Syntax -->**.receivedAt** : Text<!-- END REF -->

#### Descrição

[IMAP transporter](IMAPTransporterClass.md) unicamente.

A propriedade `.receivedAt` contém o <!-- REF #EmailObjectClass.receivedAt.Summary -->carimbo de data/hora da chegada do e-mail no servidor IMAP no formato ISO 8601 UTC (por exemplo: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailObjectClass.references.Syntax -->**.references** : Collection<!-- END REF -->

#### Descrição

A propriedade `.references` contém a <!-- REF #EmailObjectClass.references.Summary -->coleção de todos os IDs de mensagens na cadeia de resposta anterior<!-- END REF -->.

Para requisitos específicos de formatação, consulte a [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailObjectClass.replyTo.Syntax -->**.replyTo** : Text<br/>**.replyTo** : Object<br/>**.replyTo** : Collection<!-- END REF -->

#### Descrição

A propriedade `.replyTo` contém os <!-- REF #EmailObjectClass.replyTo.Summary -->[endereços](#email-addresses) para respostas<!-- END REF -->.

## .sendAt

<!-- REF #EmailObjectClass.sendAt.Syntax -->**.sendAt** : Text<!-- END REF -->

#### Descrição

A propriedade `.sendAt` contém o <!-- REF #EmailObjectClass.sendAt.Summary --> Carimbo de e-mail no formato UTC ISO 8601<!-- END REF -->.

## .sender

<!-- REF #EmailObjectClass.sender.Syntax -->**.sender** : Text<br/>**.sender** : Object<br/>**.sender** : Collection<!-- END REF -->

#### Descrição

A propriedade `.sender` contém os <!-- REF #EmailObjectClass.sender.Summary --> [endereços](#email-addresses) fonte do e-mail<!-- END REF -->.

Cada e-mail que você envia tem os endereços **sender** e **[from](#from)**:

- o domínio do remetente é o que o servidor de e-mail de recebimento recebe ao abrir a sessão,
- o endereço a partir é o que o(s) destinatário(s) verá(s).

Para uma melhor capacidade de entrega, é recomendado usar o mesmo endereço de e para o remetente.

## .size

<!-- REF #EmailObjectClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descrição

[IMAP transporter](IMAPTransporterClass.md) unicamente.

A propriedade `.size` contém o tamanho <!-- REF #EmailObjectClass.size.Summary -->(expresso em bytes) do objeto Email retornado pelo servidor IMAP<!-- END REF -->.

## .subject

<!-- REF #EmailObjectClass.subject.Syntax -->**.subject** : Text<!-- END REF -->

#### Descrição

A propriedade `.subject` contém a <!-- REF #EmailObjectClass.subject.Summary -->descrição do tópico<!-- END REF -->.

## .textBody

<!-- REF #EmailObjectClass.textBody.Syntax -->**.textBody** : Text<!-- END REF -->

#### Descrição

A propriedade `.textBody` contém a <!-- REF #EmailObjectClass.textBody.Summary -->representação em texto simples da mensagem de e-mail (conjunto de caracteres padrão é UTF-8) (opcional, somente SMTP)<!-- END REF -->. Consulte a seção [Gerenciamento do corpo](#handling-body-part).

## .to

<!-- REF #EmailObjectClass.to.Syntax -->**.to** : Text<br/>**.to** : Object<br/>**.to** : Collection<!-- END REF -->

#### Descrição

A propriedade `.to` contém <!-- REF #EmailObjectClass.to.Summary --> os [endereços](#email-addresses) dos destinatários primários de e-mail<!-- END REF -->.
