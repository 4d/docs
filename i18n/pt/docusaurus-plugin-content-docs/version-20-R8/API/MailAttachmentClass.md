---
id: MailAttachmentClass
title: MailAttachment
---

Os objetos Attachment permitem fazer referência a arquivos em um objeto [`Email`](EmailObjectClass.md). Os objetos Attachment são criados usando o comando [`MAIL New attachment`](../commands/mail-new-attachment.md).

### Objeto anexos

Objetos anexos oferecem as propriedades e funções apenas leitura abaixo:

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<br/><!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<br/><!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)<br/><!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)<br/><!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)<br/><!-- INCLUDE #MailAttachmentClass.size.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)<br/><!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## 4D. MailAttachment.new()

<details><summary>História</summary>

| Release | Mudanças                                                                                |
| ------- | --------------------------------------------------------------------------------------- |
| 19 R2   | Accepts 4D. File, 4D. ZipFile, 4D. Blob |

</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Parâmetro   | Tipo                               |                             | Descrição                                                                                         |
| ----------- | ---------------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------- |
| file        | 4D. File           |              ->             | Parâmetros                                                                                        |
| zipFile     | 4D. ZipFile        |              ->             | Arquivo zip                                                                                       |
| blob        | 4D. Blob           |              ->             | Blob contendo o anexo                                                                             |
| path        | Text                               |              ->             | Pode passar uma rota ou um Blob para definir o anexo.                             |
| name        | Text                               |              ->             | Nome + extensão usado pelo cliente email para designar o anexo                                    |
| cid         | Text                               |              ->             | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido          |
| type        | Text                               |              ->             | Valor do cabeçalho content-type                                                                   |
| disposition | Text                               |              ->             | Valor do cabeçalho content-disposition: "inline" ou "attachment". |
| Resultados  | 4D. MailAttachment | <- | Objeto anexo                                                                                      |

<!-- END REF -->

#### Descrição

A função `4D.MailAttachment.new()` <!-- REF #4D.MailAttachment.new().Summary --> cria e retorna um novo objeto do tipo `4D.MailAttachment`<!-- END REF -->. Ele é idêntico ao comando [`MAIL New attachment`](../commands/mail-new-attachment.md) (atalho).

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### Descrição

A propriedade `.cid` contém <!-- REF #MailAttachmentClass.cid.Summary --> o ID do anexo<!-- END REF -->. Essa funcionalidade é usada em mensagens HTML apenas. Se essa propriedade faltar, o arquivo é manejado como um anexo simples (link).

## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### Descrição

A propriedade `.disposition` contém <!-- REF #MailAttachmentClass.disposition.Summary -->o valor do cabeçalho \`Content-Disposition<!-- END REF -->. Dois valores esetão disponíveis:

- "inline": o anexo é renderizado dentro dos conteúdos da mensagem, no local "cid". A renderização depende do cliente mail.
- "attachment": o anexo é fornecido como um link na mensagem.

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->

| Parâmetro  | Tipo                     |                             | Descrição         |
| ---------- | ------------------------ | :-------------------------: | ----------------- |
| Resultados | 4D. Blob | <- | Conteúdo do anexo |

<!-- END REF -->

#### Descrição

A função `.getContent()` <!-- REF #MailAttachmentClass.getContent().Summary -->retorna o conteúdo do objeto anexo em um objeto `4D.Blob`<!-- END REF -->. Você pode usar esse método com objetos de anexo recebidos pelo comando [`MAIL Convert from MIME`](../commands/mail-convert-from-mime.md).

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` contém <!-- REF #MailAttachmentClass.name.Summary --> o nome e a extensão do anexo<!-- END REF -->.  Por padrão, é o nome do arquivo, a menos que outro nome tenha sido especificado no comando [`MAIL New attachment`](../commands/mail-new-attachment.md).

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

A propriedade `.path` contém <!-- REF #MailAttachmentClass.path.Summary --> o caminho POSIX do arquivo de anexo, se ele existir<!-- END REF -->.

## .platformPath

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descrição

A propriedade `.platformPath` retorna <!-- REF #MailAttachmentClass.platformPath.Summary --> o caminho do arquivo de anexo expresso com a sintaxe atual da plataforma<!-- END REF -->.

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descrição

A propriedade `.size` contém <!-- REF #MailAttachmentClass.size.Summary --> o valor do cabeçalho `size` do arquivo anexo<!-- END REF -->. The `.size` property is returned when the MIME message defines a size header in the attachment part.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Descrição

A propriedade `.type` contém <!-- REF #MailAttachmentClass.type.Summary -->o `content-type` do arquivo anexo<!-- END REF -->. If this type is not explicitly passed to the [`MAIL New attachment`](../commands/mail-new-attachment.md) command, the `content-type` is based on its file extension.
