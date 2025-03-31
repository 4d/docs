---
id: mail-new-attachment
title: MAIL New attachment
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças                                                                                |
| ------- | --------------------------------------------------------------------------------------- |
| 19 R2   | Accepts 4D. File, 4D. ZipFile, 4D. Blob |

</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!--REF #_command_.MAIL New attachment.Params-->

| Parâmetro   | Tipo                               |                                       | Descrição                                                                                         |
| ----------- | ---------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Parâmetro   | Tipo                               |                                       | Descrição                                                                                         |
| ***         | ***                                | :---: | ***                                                                                               |
| file        | 4D. File           | →                                     | Parâmetros                                                                                        |
| zipFile     | 4D. ZipFile        | →                                     | Arquivo zip                                                                                       |
| blob        | 4D. Blob           | →                                     | Blob contendo o anexo                                                                             |
| path        | Text                               | →                                     | Pode passar uma rota ou um Blob para definir o anexo.                             |
| name        | Text                               | →                                     | Nome + extensão usado pelo cliente email para designar o anexo                                    |
| cid         | Text                               | →                                     | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido          |
| type        | Text                               | →                                     | Valor do cabeçalho content-type                                                                   |
| disposition | Text                               | →                                     | Valor do cabeçalho content-disposition: "inline" ou "attachment". |
| Resultados  | 4D. MailAttachment | ←                                     | Objeto anexo                                                                                      |

<!-- END REF-->

#### Descrição

The `MAIL New attachment` command <!-- REF #_command_.MAIL New attachment.Summary -->allows you to create an attachment object that you can add to an [Email object](../API/EmailObjectClass.md#email-object)<!-- END REF -->.

Para definir o anexo, pode utilizar:

- um *file*, passe um objeto `4D.File` contendo o arquivo anexo.
- um *zipfile*, passe um objeto `4D.ZipFile` contendo o arquivo anexo.
- um *blob*, passe um objeto `4D.Blob` contendo o próprio anexo.
- se usar *path*, passe um valor **text** contendo a rota do arquivo anexo, expresso com a sintaxe sistema. Pode passar um nome de rota completo ou um nome de arquivo simples (em cujo caso 4D vai pesquisar para o arquivo no mesmo diretório como o arquivo projeto).

Pode passar uma rota ou um Blob para definir o anexo. Se *name* for omitido e:

- passar uma rota de arquivo, o nome e extensão do arquivo é usado,
- passar um BLOB, um nome aleatório sem extensão é gerado automaticamente.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src="cid:ID">`. Isso significa que os conteúdos do anexo (por exemplo uma imagem) deve ser exibida dentro da mensagem do cliente mail. O resultado final deve variar dependendo do cliente mail. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the `content-type` of the attachment file. Por exemplo, pode passar uma string definindo um tipo MIME ("video/mpeg"). Esse valor de content-type vai ser estabelecido para o anexo, independente de sua extensão. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. As regras abaixo são aplicadas aos tipos MIME:

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
| *outro*   | application/octet-stream                      |

The optional *disposition* parameter lets you pass the `content-disposition` header of the attachment. Pode passar uma das constantes abaixo da constante tema de "Mail":

| Parâmetros                  | Valor        | Comentário                                                                                                                                                                                                                                  |
| --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Estabelece o valor de cabeçalho Content-disposition para "attachment" que significa que o arquivo anexo deve ser fornecido como um link na mensagem.                                                                        |
| mail disposition inline     | "inline"     | Estabelece o valor de cabeçalho Content-disposition para "inline", o que significa que o anexo deve ser renderizado dentro do conteúdo da mensagem, no local "cid". A renderização depende do cliente mail. |

By default, if the *disposition* parameter is omitted:

- if the *cid* parameter is used, the `Content-disposition` header is set to "inline",
- if the *cid* parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### Exemplo 1

Se quiser enviar um email com um arquivo selecionado pelo usuário como um anexo e uma imagem embebida no corpo HTML:

```4d
$doc:=Select document("";"*";"Please select a file to attach";0)
If (OK=1) //If a document was selected

var $email;$server;$transporter : Object

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
var $blob : blob
WP EXPORT VARIABLE(WPArea;$blob;wk docx)

var $email;$server;$transporter : Object

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

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1644                            |
| Thread safe    | &amp;check; |
