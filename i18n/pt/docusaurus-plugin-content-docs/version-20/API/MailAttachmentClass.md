---
id: MailAttachmentClass
title: MailAttachment
---

Objetos anexo permite referenciar arquivos dentro de um objeto [`Email`](EmailObjectClass.md). Objetos anexos são criados usando o comando [`MAIL New attachment`](#mail-new-attachment).


### Objeto anexos

Objetos anexos oferecem as propriedades e funções apenas leitura abaixo:


|                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.size.Summary -->|
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->|


## MAIL New attachment

<details><summary>Histórico</summary>

| Release | Mudanças                                |
| ------- | --------------------------------------- |
| 19 R2   | Accepts 4D. File, 4D. ZipFile, 4D. Blob |
</details>

<!-- REF #_command_.MAIL New attachment.Syntax -->**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D. MailAttachment<br/>**MAIL New attachment**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.<!-- END REF -->


<!-- REF #_command_.MAIL New attachment.Params -->

| Parâmetro   | Tipo               |    | Descrição                                                             |
| ----------- | ------------------ |:--:| --------------------------------------------------------------------- |
| file        | 4D. File           | -> | Parâmetros                                                            |
| zipFile     | 4D. ZipFile        | -> | Arquivo zip                                                           |
| blob        | 4D. Blob           | -> | Blob contendo o anexo                                                 |
| path        | Text               | -> | Pode passar uma rota ou um Blob para definir o anexo.                 |
| name        | Text               | -> | Nome + extensão usado pelo cliente email para designar o anexo        |
| cid         | Text               | -> | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido |
| type        | Text               | -> | Valor do cabeçalho content-type                                       |
| disposition | Text               | -> | Valor do cabeçalho content-disposition: "inline" ou "attachment".     |
| Resultados  | 4D. MailAttachment | <- | Objeto anexo<!-- END REF -->


|


#### Descrição

Comando `MAIL New attachment` <!-- REF #_command_.MAIL New attachment.Summary -->permite criar um objeto anexo que adicione um objeto [Email](EmailObjectClass.md#email-object)<!-- END REF -->.

Para definir o anexo, pode utilizar:

- a *file*, pass a `4D. File` object containing the attachment file.
- a *zipfile*, pass a `4D. ZipFile` object containing the attachment file.
- a *blob*, pass a `4D. Blob` object containing the attachment itself.
- Se usar uma *rota*, passe um **texto** valor contendo a rota do arquivo anexo, expresso com a sintaxe sistema. Pode passar um nome de rota completo ou um nome de arquivo simples (em cujo caso 4D vai pesquisar para o arquivo no mesmo diretório como o arquivo projeto).

O parâmetro opcional *name* permite passar o nome e extensão para ser usado pelo cliente email para designar o anexo. Se *name* for omitido e:

*   passar uma rota de arquivo, o nome e extensão do arquivo é usado,
*   passar um BLOB, um nome aleatório sem extensão é gerado automaticamente.

O parâmetro opcional *cid* permite passar uma ID interna para o anexo. A ID é o valor do cabeçalho `Content-Id`, vai ser usado apenas em mensagens HTML. O cid associa o anexo com uma referência definida no corpo da mensagem usando uma tag HTML tais como`\&#060;img src="cid:ID"&#062;`. Isso significa que os conteúdos do anexo (por exemplo uma imagem) deve ser exibida dentro da mensagem do cliente mail. O resultado final deve variar dependendo do cliente mail. Pode passar uma string vazia em *cid* se não quiser usar esse parâmetro.

Pode usar o parâmetro opcional *type* para estabeçecer explicitamente o `content-type` do arquivo anexo. Por exemplo, pode passar uma string definindo um tipo MIME ("video/mpeg"). Esse valor de content-type vai ser estabelecido para o anexo, independente de sua extensão. Para saber mais sobre tipos MIME veja a página sobre tipos MIME [em Wikipedia](https://en.wikipedia.org/wiki/MIME).

Como padrão, se o parâmetro *type* for omitido ou conter uma string vazia, o `content-type` do arquivo anexo é baseado em sua extensão. As regras abaixo são aplicadas aos tipos MIME:

| Extensão  | Tipo                          |
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

| Parâmetros                  | Valor        | Comentário                                                                                                                                                                                                  |
| --------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail disposition attachment | "attachment" | Estabelece o valor de cabeçalho Content-disposition para "attachment" que significa que o arquivo anexo deve ser fornecido como um link na mensagem.                                                        |
| mail disposition inline     | "inline"     | Estabelece o valor de cabeçalho Content-disposition para "inline", o que significa que o anexo deve ser renderizado dentro do conteúdo da mensagem, no local "cid". A renderização depende do cliente mail. |

Como padrão, se o parâmetro *disposition* for omitido:

*   se o parâmetro *cid* for usado, o cabeçalho `Content-disposition` é estabelecido como "inline",
*   se o parâmetro *cid* não for passado ou estiver vazio, o cabeçalho `Content-disposition` é estabelecido para "attachment".

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

| Release | Mudanças                                |
| ------- | --------------------------------------- |
| 19 R2   | Accepts 4D. File, 4D. ZipFile, 4D. Blob |
</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D. MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D. MailAttachment<br/>**4D. MailAttachment.new**( *blob* : Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.<!-- END REF -->


<!-- REF #4D.MailAttachment.new().Params -->

| Parâmetro   | Tipo               |    | Descrição                                                             |
| ----------- | ------------------ |:--:| --------------------------------------------------------------------- |
| file        | 4D. File           | -> | Parâmetros                                                            |
| zipFile     | 4D. ZipFile        | -> | Arquivo zip                                                           |
| blob        | 4D. Blob           | -> | Blob contendo o anexo                                                 |
| path        | Text               | -> | Pode passar uma rota ou um Blob para definir o anexo.                 |
| name        | Text               | -> | Nome + extensão usado pelo cliente email para designar o anexo        |
| cid         | Text               | -> | ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido |
| type        | Text               | -> | Valor do cabeçalho content-type                                       |
| disposition | Text               | -> | Valor do cabeçalho content-disposition: "inline" ou "attachment".     |
| Resultados  | 4D. MailAttachment | <- | Objeto anexo<!-- END REF -->


|


#### Descrição

A função `4D. MailAttachment.new()` <!-- REF #4D.MailAttachment.new().Summary -->cria e devolve um novo objecto do tipo `4D. MailAttachment`<!-- END REF -->. . Isso é idêntico ao comando [`MAIL New attachment`](#mail-new-attachment) (atalho).


## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->


#### Descrição

A propriedade `.cid` contém <!-- REF #MailAttachmentClass.cid.Summary --> a ID do anexo<!-- END REF -->. Essa funcionalidade é usada em mensagens HTML apenas. Se essa propriedade faltar, o arquivo é manejado como um anexo simples (link).


## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->


#### Descrição

A propriedade `.disposition` contém <!-- REF #MailAttachmentClass.disposition.Summary -->o valor do cabeçalho `Content-Disposition`<!-- END REF -->. Dois valores esetão disponíveis:

*   "inline": o anexo é renderizado dentro dos conteúdos da mensagem, no local "cid". A renderização depende do cliente mail.
*   "attachment": o anexo é fornecido como um link na mensagem.


## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : Blob<!-- END REF -->


<!-- REF #MailAttachmentClass.getContent().Params -->
| Parâmetro  | Tipo     |    | Descrição                                    |
| ---------- | -------- |:--:| -------------------------------------------- |
| Resultados | 4D. Blob | <- | Conteúdo do anexo|<!-- END REF -->


|


#### Descrição

A função `.getContent()` <!-- REF #MailAttachmentClass.getContent().Summary -->devolve o conteúdo do objecto anexo num objecto `4D. Blob`<!-- END REF -->. Pode utilizar este método com objectos anexos recebidos pelo comando [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime).



## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->


#### Descrição

A propriedade `.name` contém <!-- REF #MailAttachmentClass.name.Summary -->o nome e extensão do anexo<!-- END REF -->.  Como padrão, é o nome do arquivo, a não ser que outro nome tenha sido especificado no comando [`MAIL New attachment`](#mail-new-attachment).

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->


#### Descrição

A propriedade `.path` contém <!-- REF #MailAttachmentClass.path.Summary -->o caminho POSIX do arquivo anexo, se este existir<!-- END REF -->.


## .platformPath

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |
</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->


#### Descrição

A propriedade `.platformPath` devolve <!-- REF #MailAttachmentClass.platformPath.Summary -->A propriedade `.platformPath` devolve<!-- END REF -->.


## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->


#### Descrição

A propriedade `.size` contém <!-- REF #MailAttachmentClass.size.Summary -->o valor do cabeçalho `size` do arquivo de anexo<!-- END REF -->. A propriedade `.size` é retornada quando a mensagem MIME define um cabeçalho de tamanho na parte do anexo.


## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->


#### Descrição

A propriedade `.type` contém <!-- REF #MailAttachmentClass.type.Summary -->o `content-type` do ficheiro anexo<!-- END REF -->. Se o tipo não for passado explicitamente ao comando [`MAIL New attachment`](#mail-new-attachment), o `content-type` é baseado na sua extensão de arquivo.
