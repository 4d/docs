---
id: MailAttachmentClass
title: MailAttachment
---

Objetos anexo permite referenciar arquivos dentro de um objeto[`Email`](EmailObjectClass.md). Objetos anexos são criados usando o comando [`MAIL New attachment`](#mail-new-attachment).

### Objeto anexos

Objetos anexos oferecem as propriedades e funções apenas leitura abaixo:

|                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## MAIL New attachment

<details><summary>Histórico</summary>

| Versão | Mudanças                                |
| ------ | --------------------------------------- |
| v19 R2 | Accepts 4D. File, 4D. ZipFile, 4D. Blob |
</details>


<!-- REF #_command_.MAIL_New_attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #_command_.MAIL_New_attachment.Params -->

| Parâmetros  | Tipo               |    | Descrição                                                             |
| ----------- | ------------------ |:--:| --------------------------------------------------------------------- |
| file        | 4D. File           | -> | Attachment file                                                       |
| zipFile     | 4D. ZipFile        | -> | Attachment Zipfile                                                    |
| blob        | 4D.Blob            | -> | Blob contendo o anexo                                                 |
| path        | Text               | -> | Rota do arquivo anexo                                                 |
| name        | Text               | -> | Nome + extensão usado pelo cliente email para designar o anexo        |
| cid         | Text               | -> | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido |
| type        | Text               | -> | Valor do cabeçalho content-type                                       |
| disposition | Text               | -> | Valor do cabeçalho content-disposition: "inline" ou "attachment".     |
| Resultados  | 4D. MailAttachment | <- | Attachment object|<!-- END REF -->                          |

#### Descrição

The `MAIL New attachment` command <!-- REF #_command_.MAIL_New_attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

To define the attachment, you can use:

- a *file*, pass a `4D. File` object containing the attachment file.
- a *zipfile*, pass a `4D. ZipFile` object containing the attachment file.
- a *blob*, pass a `4D. Blob` object containing the attachment itself.
- a *path*, pass a **text** value containing the path of the attachment file, expressed with the system syntax. Pode passar um nome de rota completo ou um nome de arquivo simples (em cujo caso 4D vai pesquisar para o arquivo no mesmo diretório como o arquivo projeto).

O parâmetro opcional *name* permite passar o nome e extensão para ser usado pelo cliente email para designar o anexo. Se *name* for omitido e:

- passar uma rota de arquivo, o nome e extensão do arquivo é usado,
- passar um BLOB, um nome aleatório sem extensão é gerado automaticamente.

O parâmetro opcional *cid* permite passar uma ID interna para o anexo. A ID é o valor do cabeçalho `Content-Id`, vai ser usado apenas em mensagens HTML.  The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\&#060;img src="cid:ID"&#062;`. Isso significa que os conteúdos do anexo (por exemplo uma imagem) deve ser exibida dentro da mensagem do cliente mail. O resultado final deve variar dependendo do cliente mail. Pode passar uma string vazia em *cid* se não quiser usar esse parâmetro.

Pode usar o parâmetro opcional *type* para estabeçecer explicitamente o `content-type` do arquivo anexo. Por exemplo, pode passar uma string definindo um tipo MIME ("video/mpeg"). Esse valor de content-type vai ser estabelecido para o anexo, independente de sua extensão. Para saber mais sobre tipos MIME veja a página sobre tipos MIME [em Wikipedia](https://en.wikipedia.org/wiki/MIME).

Como padrão, se o parâmetro *type* for omitido ou conter uma string vazia, o `content-type` do arquivo anexo é baseado em sua extensão. As regras abaixo são aplicadas aos tipos MIME:

| Extensão  | Content-Type                  |
| --------- | ----------------------------- |
| jpg, jpeg | image/jpeg                    |
| png       | image/png                     |
| gif       | image/gif                     |
| pdf       | application/pdf               |
| doc       | application/msword            |
| xls       | application/vnd.ms-excel      |
| ppt       | application/vnd.ms-powerpoint |
| zip       | application/zip               |
| gz        | application/gzip              |
| json      | application/json              |
| js        | application/javascript        |
| ps        | application/postscript        |
| xml       | application/xml               |
| htm, html | text/html                     |
| mp3       | audio/mpeg                    |
| *outro*   | application/octet-stream      |

O parâmetro opcional *disposition* permite passar o cabeçalho `content-disposition` do anexo. Pode passar uma das constantes abaixo da constante tema de "Mail":

| Constante                   | Value        | Comentário                                                                                                                                                                                                  |
| --------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Estabelece o valor de cabeçalho Content-disposition para "attachment" que significa que o arquivo anexo deve ser fornecido como um link na mensagem.                                                        |
| mail disposition inline     | "inline"     | Estabelece o valor de cabeçalho Content-disposition para "inline", o que significa que o anexo deve ser renderizado dentro do conteúdo da mensagem, no local "cid". A renderização depende do cliente mail. |

Como padrão, se o parâmetro *disposition* for omitido:

- se o parâmetro *cid* for usado, o cabeçalho `Content-disposition` é estabelecido como "inline",
- se o parâmetro *cid* não for passado ou estiver vazio, o cabeçalho `Content-disposition` é estabelecido para "attachment".

#### Exemplo 1

Se quiser enviar um email com um arquivo selecionado pelo usuário como um anexo e uma imagem embebida no corpo HTML:

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected C_OBJECT($email;$server;$transporter)

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

$transporter.send($email) //send mail End if
```

#### Exemplo 2

Se quiser enviar um email com uma área 4D Write pro como um anexo:

```4d
C_BLOB($blob)
WP EXPORT VARIABLE(WPArea;$blob;wk docx) C_OBJECT($email;$server;$transporter)

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

<details><summary>Histórico</summary>

| Versão | Mudanças                                |
| ------ | --------------------------------------- |
| v19 R2 | Accepts 4D. File, 4D. ZipFile, 4D. Blob |
</details>


<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Parâmetros  | Tipo               |    | Descrição                                                             |
| ----------- | ------------------ |:--:| --------------------------------------------------------------------- |
| file        | 4D. File           | -> | Attachment file                                                       |
| zipFile     | 4D. ZipFile        | -> | Attachment Zipfile                                                    |
| blob        | 4D.Blob            | -> | Blob contendo o anexo                                                 |
| path        | Text               | -> | Rota do arquivo anexo                                                 |
| name        | Text               | -> | Nome + extensão usado pelo cliente email para designar o anexo        |
| cid         | Text               | -> | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido |
| type        | Text               | -> | Valor do cabeçalho content-type                                       |
| disposition | Text               | -> | Valor do cabeçalho content-disposition: "inline" ou "attachment".     |
| Resultados  | 4D. MailAttachment | <- | Attachment object|<!-- END REF -->                          |

#### Descrição

The `4D.MailAttachment.new()` function <!-- REF #4D.MailAttachment.new().Summary -->creates and returns a new object of the `4D.MailAttachment` type<!-- END REF -->. Isso é idêntico ao comando [`MAIL New attachment`](#mail-new-attachment) (atalho).

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


<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D. Blob<!-- END REF -->



<!-- REF #MailAttachmentClass.getContent().Params -->
| Parâmetros | Tipo    |    | Descrição                                            |
| ---------- | ------- |:--:| ---------------------------------------------------- |
| Resultados | 4D.Blob | <- | Content of the attachment|<!-- END REF --> |

#### Descrição

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a `4D.Blob` object<!-- END REF -->. Summary -->permite que crie um objeto anexo que pode adicionar a um [objeto Email ](EmailObjectClass.md#email-object)<!-- END REF -->.

## .name


<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descrição

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  Como padrão, é o nome do arquivo, a não ser que outro nome tenha sido especificado no comando [`MAIL New attachment`](#mail-new-attachment).

## .path


<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descrição

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.

## .platformPath

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |
</details>


<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descrição

A propriedade `.platformPath` devolve <!-- REF #MailAttachmentClass.platformPath.Summary -->the path of the attachment file expressed with the current platform syntax<!-- END REF -->.

## .type


<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Descrição

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. Se o tipo não for passado explicitamente ao comando [`MAIL New attachment`](#mail-new-attachment), o `content-type` é baseado na sua extensão de arquivo.
