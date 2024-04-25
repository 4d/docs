---
id: MailAttachmentClass
title: MailAttachment
---

Attachment objects allow referencing files within a [`Email`](EmailObjectClass.md) object. Attachment objects are created using the [`MAIL New attachment`](#mail-new-attachment) command.

### Objeto anexos

Objetos anexos oferecem as propriedades e funções apenas leitura abaixo:

|                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.size.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## MAIL New attachment

<details><summary>História</summary>

| Release | Mudanças                                                                                |
| ------- | --------------------------------------------------------------------------------------- |
| 19 R2   | Accepts 4D. File, 4D. ZipFile, 4D. Blob |

</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL New attachment.Params -->

| Parâmetro   | Tipo                               |     | Descrição                                                                                         |
| ----------- | ---------------------------------- | :-: | ------------------------------------------------------------------------------------------------- |
| file        | 4D. File           |  -> | Parâmetros                                                                                        |
| zipFile     | 4D. ZipFile        |  -> | Arquivo zip                                                                                       |
| blob        | 4D. Blob           |  -> | Blob contendo o anexo                                                                             |
| path        | Text                               |  -> | Pode passar uma rota ou um Blob para definir o anexo.                             |
| name        | Text                               |  -> | Nome + extensão usado pelo cliente email para designar o anexo                                    |
| cid         | Text                               |  -> | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido          |
| type        | Text                               |  -> | Valor do cabeçalho content-type                                                                   |
| disposition | Text                               |  -> | Valor do cabeçalho content-disposition: "inline" ou "attachment". |
| Resultados  | 4D. MailAttachment |  <- | Objeto anexo                                                                                      |

<!-- END REF -->

#### Descrição

The `MAIL New attachment` command <!-- REF #_command_.MAIL New attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

Para definir o anexo, pode utilizar:

- a _file_, pass a `4D.File` object containing the attachment file.
- a _zipfile_, pass a `4D.ZipFile` object containing the attachment file.
- a _blob_, pass a `4D.Blob` object containing the attachment itself.
- a _path_, pass a **text** value containing the path of the attachment file, expressed with the system syntax. Pode passar um nome de rota completo ou um nome de arquivo simples (em cujo caso 4D vai pesquisar para o arquivo no mesmo diretório como o arquivo projeto).

The optional _name_ parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If _name_ is omitted and:

- passar uma rota de arquivo, o nome e extensão do arquivo é usado,
- passar um BLOB, um nome aleatório sem extensão é gerado automaticamente.

The optional _cid_ parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. Isso significa que os conteúdos do anexo (por exemplo uma imagem) deve ser exibida dentro da mensagem do cliente mail. O resultado final deve variar dependendo do cliente mail. You can pass an empty string in _cid_ if you do not want to use this parameter.

You can use the optional _type_ parameter to explicitly set the `content-type` of the attachment file. Por exemplo, pode passar uma string definindo um tipo MIME ("video/mpeg"). Esse valor de content-type vai ser estabelecido para o anexo, independente de sua extensão. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the _type_ parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. As regras abaixo são aplicadas aos tipos MIME:

| Extensão  | Tipo                                          |
| --------- | --------------------------------------------- |
| jpg, jpeg | image/jpeg                                    |
| png       | image/png                                     |
| gif       | image/gif                                     |
| pdf       | application/pdf                               |
| doc       | application/msword                            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip                               |
| gz        | application/gzip                              |
| json      | application/json                              |
| js        | application/javascript                        |
| ps        | application/postscript                        |
| xml       | application/xml                               |
| htm, html | text/html                                     |
| mp3       | audio/mpeg                                    |
| _other_   | application/octet-stream                      |

The optional _disposition_ parameter lets you pass the `content-disposition` header of the attachment. Pode passar uma das constantes abaixo da constante tema de "Mail":

| Parâmetros                  | Valor        | Comentário                                                                                                                                                                                                                                  |
| --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Estabelece o valor de cabeçalho Content-disposition para "attachment" que significa que o arquivo anexo deve ser fornecido como um link na mensagem.                                                                        |
| mail disposition inline     | "inline"     | Estabelece o valor de cabeçalho Content-disposition para "inline", o que significa que o anexo deve ser renderizado dentro do conteúdo da mensagem, no local "cid". A renderização depende do cliente mail. |

By default, if the _disposition_ parameter is omitted:

- if the _cid_ parameter is used, the `Content-disposition` header is set to "inline",
- if the _cid_ parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### Exemplo 1

Se quiser enviar um email com um arquivo selecionado pelo usuário como um anexo e uma imagem embebida no corpo HTML:

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="test_user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="test_user@mail.com"
$email.to:="test_user@mail.com"
$email.subject:="This is a test message with attachments"

//add a link to download file
$email.attachments:=New collection(MAIL New attachment(Document))
//insert an inline picture (use a cid)
$email.attachments[1]:=MAIL New attachment("c:\\Pictures\\4D.jpg";"";"4D")

$email.htmlBody:="<html>"+\
"<body>Hello World!"+\
"<img src='cid:4D' >"+\
"</body>"+\
"</head>"+\
"</html>"

$transporter.send($email) //send mail

End if
```

#### Exemplo 2

Se quiser enviar um email com uma área 4D Write pro como um anexo:

```4d
C_BLOB($blob)
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

C_OBJECT($email;$server;$transporter)

$server:=New object
$server.host:="smtp.mail.com"
$server.user:="user@mail.com"
$server.password:="p@ssw@rd"
$transporter:=SMTP New transporter($server)

$email:=New object
$email.from:="user@mail.com"
$email.to:="customer@mail.com"
$email.subject:="New annual report"
$email.textBody:="Please find enclosed our latest annual report."
$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))

$transporter.send($email)
```

## 4D. MailAttachment.new()

<details><summary>História</summary>

| Release | Mudanças                                                                                |
| ------- | --------------------------------------------------------------------------------------- |
| 19 R2   | Accepts 4D. File, 4D. ZipFile, 4D. Blob |

</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Parâmetro   | Tipo                               |     | Descrição                                                                                         |
| ----------- | ---------------------------------- | :-: | ------------------------------------------------------------------------------------------------- |
| file        | 4D. File           |  -> | Parâmetros                                                                                        |
| zipFile     | 4D. ZipFile        |  -> | Arquivo zip                                                                                       |
| blob        | 4D. Blob           |  -> | Blob contendo o anexo                                                                             |
| path        | Text                               |  -> | Pode passar uma rota ou um Blob para definir o anexo.                             |
| name        | Text                               |  -> | Nome + extensão usado pelo cliente email para designar o anexo                                    |
| cid         | Text                               |  -> | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido          |
| type        | Text                               |  -> | Valor do cabeçalho content-type                                                                   |
| disposition | Text                               |  -> | Valor do cabeçalho content-disposition: "inline" ou "attachment". |
| Resultados  | 4D. MailAttachment |  <- | Objeto anexo                                                                                      |

<!-- END REF -->

#### Descrição

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. It is identical to the [`MAIL New attachment`](#mail-new-attachment) command (shortcut).

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### Descrição

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. Essa funcionalidade é usada em mensagens HTML apenas. Se essa propriedade faltar, o arquivo é manejado como um anexo simples (link).

## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### Descrição

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. Dois valores esetão disponíveis:

- "inline": o anexo é renderizado dentro dos conteúdos da mensagem, no local "cid". A renderização depende do cliente mail.
- "attachment": o anexo é fornecido como um link na mensagem.

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->

| Parâmetro  | Tipo                     |     | Descrição         |
| ---------- | ------------------------ | :-: | ----------------- |
| Resultados | 4D. Blob |  <- | Conteúdo do anexo |

<!-- END REF -->

#### Descrição

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a `4D.Blob` object<!-- END REF -->. You can use this method with attachment objects received by the [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime) command.

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`MAIL New attachment`](#mail-new-attachment) command.

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.

## .platformPath

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descrição

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->the path of the attachment file expressed with the current platform syntax<!-- END REF -->.

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descrição

The `.size` property contains <!-- REF #MailAttachmentClass.size.Summary -->the value of the `size` header of the attachment file<!-- END REF -->. The `.size` property is returned when the MIME message defines a size header in the attachment part.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Descrição

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. If this type is not explicitly passed to the [`MAIL New attachment`](#mail-new-attachment) command, the `content-type` is based on its file extension.
