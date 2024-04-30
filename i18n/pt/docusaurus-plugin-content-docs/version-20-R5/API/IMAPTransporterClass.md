---
id: IMAPTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.

### Objecto do IMAP Transporter

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->       |
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->                                       |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                         |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary --> |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                            |
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->                                       |
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->                     |
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                                   |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                          |
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                                   |
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                                   |

## IMAP New transporter

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| Parâmetro  | Tipo                               |     | Descrição                                           |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Informação de servidor de correio                   |
| Resultados | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### Descrição

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the _server_ parameter and returns a new _transporter_ object. O objeto transporter retornado vai geralmente ser usado para receber emails.

In the _server_ parameter, pass an object containing the following properties:

| _server_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Valor padrão (se omitido)                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                  | False                                                             |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in _[IMAP transporter](#imap-transporter-object)_ object. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                    | o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                            | 300                                                               |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                       | 30                                                                |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                              | _mandatory_                                                       |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                     | nenhum                                                            |
| .**password** : Text<br/>User password for authentication on the server. Not returned in _[IMAP transporter](#imap-transporter-object)_ object.                                                                                                                                                                                                                                                                                                                                   | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                              | 993                                                               |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                              | nenhum                                                            |

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

#### Resultados

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.

> A ligação IMAP é automaticamente fechada quando o objecto transportador é destruído.

#### Exemplo

```4d
$server:=New object
$server.host:="imap.gmail.com" //Obrigatório
$server.port:=993
$server.user:="4d@gmail.com"
$server.password:="XXXXXXXX"
$server.logFile:="LogTest.txt" //log para salvar na pasta Logs

var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

$status:=$transporter.checkConnection()
If(Not($status.success))
   ALERT("An error occurred: "+$status.statusText)
End if
```

## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->

| Parâmetro  | Tipo                               |     | Descrição                                           |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Informação de servidor de correio                   |
| Resultados | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### Descrição

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->creates and returns a new object of the `4D.IMAPTransporter` type<!-- END REF -->. It is identical to the [`IMAP New transporter`](#imap-new-transporter) command (shortcut).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->

## .addFlags()

<details><summary>História</summary>

| Release | Mudanças                              |
| ------- | ------------------------------------- |
| 20      | Suporta palavras-chave personalizadas |
| 18 R6   | Adicionado                            |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                                                                                                                                                                                   |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |  -> | Coleção de strings: IDs únicos de mensagens (texto)<br/>Texto: ID único de uma mensagem<br/>Longint (todos IMAP): Todas as mensagens na caixa de correio seleccionada |
| keywords   | Object     |  -> | Flags de palavras chaves a adicionar                                                                                                                                                                                                                        |
| Resultados | Object     |  <- | Estado da operação addFlags                                                                                                                                                                                                                                 |

<!-- END REF -->

#### Descrição

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| Parâmetros | Valor | Comentário                                                     |
| ---------- | ----- | -------------------------------------------------------------- |
| IMAP all   | 1     | Seleccione todas as mensagens na caixa de correio seleccionada |

The `keywords` parameter lets you define the flags to add to `msgIDs`. Pode passar qualquer uma das seguintes palavras-chave:

| Propriedade     | Tipo       | Descrição                                                |
| --------------- | ---------- | -------------------------------------------------------- |
| $draft          | Parâmetros | True para adicionar o marcador "draft" na mensagem       |
| $seen           | Parâmetros | True para adicionar o marcador "seen" na mensagem        |
| $flagged        | Parâmetros | True para adicionar o marcador "flagged" na mensagem     |
| $answered       | Parâmetros | True para adicionar o marcador "answered" na mensagem    |
| $deleted        | Parâmetros | True para adicionar o marcador "deleted" na mensagem     |
| `<custom flag>` | Parâmetros | True para adicionar o marcador personalizado na mensagem |

Os nomes das bandeiras personalizadas devem respeitar esta regra: a palavra-chave deve ser um fio não sensível a maiúsculas e minúsculas, excluindo caracteres de controlo e espaço, e não pode incluir nenhum destes caracteres: `( ) { ] % * " \`

> - Para que uma palavra-chave seja tida em conta, tem de ser true.
> - A interpretação dos marcadores de palavras-chave pode variar por cliente de correio.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Criar transporter
$transporter:=IMAP New transporter($options)

// Selecionar mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Marcar todas as mensagens de INBOX como lidas
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.addFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.append().Desc -->

## .append()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->

| Parâmetro      | Tipo   |     | Descrição                                     |
| -------------- | ------ | :-: | --------------------------------------------- |
| mailObj        | Object |  -> | Objeto Email                                  |
| destinationBox | Text   |  -> | Caixa de email que vai receber o objeto Email |
| options        | Object |  -> | Objeto que contém informações do charset      |
| Resultados     | Object |  <- | Estado da operação anexada                    |

<!-- END REF -->

#### Descrição

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](EmailObjectClass.md#email-object). The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. Se omitido, é utilizada a caixa de correio actual.

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. Propriedades disponiveis:

| Propriedade   | Tipo | Descrição                                                                                                                                                                                                                                    |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset e codificação usados para as seguintes partes do e-mail: assunto, nomes de arquivos de anexo e atributos de nome de e-mail. Possíveis valores: Ver tabela de possíveis cartas abaixo |
| bodyCharset   | Text | Charset e codificação usados para o conteúdo html e corpo do e-mail. Possíveis valores: Ver tabela de possíveis cartas abaixo                                                                                |

Charsets possíveis:

| Parâmetros                     | Valor                                                                                       | Comentário                                                                                                                                                                                                                                                                 |
| ------------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591             | ISO-8859-1                                                                                  | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8                 | US-ASCII_UTF8_QP                                  | headerCharset & bodyCharset: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (**valor padrão**)                                                                                   |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64                                 | headerCharset & bodyCharset: US-ASCII se possível, caso contrário UTF-8 & base64                                                                                                                                   |

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

Para guardar um e-mail na caixa de correio Drafts:

```4d
var $settings; $status; $msg; $imap: Object

$settings:=New object("host"; "domain.com"; "user"; "xxxx"; "password"; "xxxx"; "port"; 993)

$imap:=IMAP New transporter($settings)

$msg:=New object
$msg.from:="xxxx@domain.com"
$msg.subject:="Lorem Ipsum"
$msg.textBody:="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
$msg.keywords:=New object
$msg.keywords["$seen"]:=True//flag the message as read
$msg.keywords["$draft"]:=True//flag the message as a draft

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : Integer<!-- END REF -->

#### Descrição

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  Se este tempo for excedido entre duas chamadas de método, a ligação ao servidor será verificada. By default, if the property has not been set in the _server_ object, the value is 300.

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->

## .copy()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->

| Parâmetro      | Tipo       |     | Descrição                                                                   |
| -------------- | ---------- | :-: | --------------------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | Coleção de identificadores únicos de mensagens (strings) |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox            |
| destinationBox | Text       |  -> | Caixa de correio para receber mensagens copiadas                            |
| Resultados     | Object     |  <- | Estado da operação anexada                                                  |

<!-- END REF -->

#### Descrição

The `.copy()` function <!-- REF #IMAPTransporterClass.copy().Summary -->copies the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

Pode passar:

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to copy, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to copy all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the copies of messages will be placed.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo 1

Para copiar uma selecção de mensagens:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copy found messages to the "documents" mailbox
 $status:=$transporter.copy($mailIds;"documents")
```

#### Exemplo 2

Para copiar todas as mensagens na caixa de correio actual:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox

 $boxInfo:=$transporter.selectBox("inbox")

  // copy all messages to the "documents" mailbox
 $status:=$transporter.copy(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.createBox().Desc -->

## .createBox()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->

| Parâmetro  | Tipo   |     | Descrição                                         |
| ---------- | ------ | :-: | ------------------------------------------------- |
| name       | Text   |  -> | Nome da nova caixa de correio                     |
| Resultados | Object |  <- | Estado da operação de criação da caixa de correio |

<!-- END REF -->

#### Descrição

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. Se o carácter separador hierárquico do servidor IMAP aparecer noutro lugar no nome da caixa de correio, o servidor IMAP criará os nomes dos pais necessários para criar a caixa de correio em questão.

Por outras palavras, uma tentativa de criar "Projectos/IMAP/Doc" num servidor em que "/" é o carácter separador hierárquico criará:

- Only the "Doc" mailbox if "Projects" & "IMAP" already exist.
- "IMAP" & "Doc" mailboxes if only “Projects” already exists.
- "Projects" & “IMAP” & "Doc" mailboxes, if they do not already exist.

In the `name` parameter, pass the name of the new mailbox.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

Para criar uma nova caixa de correio "Facturas":

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")
If(OK=1)
$options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$status:=$transporter.createBox("Invoices")

If ($status.success)
ALERT("Mailbox creation successful!")
Else
ALERT("Error: "+$status.statusText)
End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.delete().Desc -->

## .delete()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                   |
| ---------- | ---------- | :-: | --------------------------------------------------------------------------- |
| msgsIDs    | Collection |  -> | Coleção de identificadores únicos de mensagens (strings) |
| allMsgs    | Integer    |  -> | `IMAP all`: All messages in the selected mailbox            |
| Resultados | Object     |  <- | Estado da operação apagada                                                  |

<!-- END REF -->

#### Descrição

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

Pode passar:

- in the `msgsIDs` parameter, a collection containing the unique IDs of the specific messages to delete, or
- in the `allMsgs` parameter, the `IMAP all` constant (integer) to delete all messages in the selected mailbox.

A execução desta função não remove realmente as mensagens. Messages with the "delete" flag can still be found by the [.searchMails()](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo 1

Para apagar uma selecção de mensagens:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Delete selected messages
 $status:=$transporter.delete($mailIds)
```

#### Exemplo 2

Para apagar todas as mensagens na caixa de correio actual:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Junk Email")

  // delete all messages in the current mailbox
 $status:=$transporter.delete(IMAP all)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.deleteBox().Desc -->

## .deleteBox()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->

| Parâmetro  | Tipo   |     | Descrição                                            |
| ---------- | ------ | :-: | ---------------------------------------------------- |
| name       | Text   |  -> | Nome da caixa de correio a apagar                    |
| Resultados | Object |  <- | Estado da operação de eliminação da caixa de correio |

<!-- END REF -->

#### Descrição

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. A tentativa de apagar uma INBOX ou uma caixa de correio que não existe, gerará um erro.

In the `name` parameter, pass the name of the mailbox to delete.

> - A função não pode apagar uma caixa de correio que tenha caixas de correio para crianças se a caixa de correio dos pais tiver o atributo "\Noselect".
> - Todas as mensagens na caixa de correio eliminadas serão também eliminadas.
> - A capacidade de apagar uma caixa de correio depende do servidor de correio.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

Para eliminar a caixa de correio filha "Nova Orion Industries" da hierarquia da caixa de correio "Bills":

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// delete mailbox
$name:="Bills"+$transporter.getDelimiter()+"Nova Orion Industries"
$status:=$transporter.deleteBox($name)

If ($status.success)
 ALERT("Mailbox deletion successful!")
 Else
 ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Desc -->

## .expunge()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->

| Parâmetro  | Tipo   |     | Descrição                     |
| ---------- | ------ | :-: | ----------------------------- |
| Resultados | Object |  <- | Estado da operação de expurgo |

<!-- END REF -->

#### Descrição

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

```4d
var $options;$transporter;$boxInfo;$status : Object
var $ids : Collection

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Criar transporter
$transporter:=IMAP New transporter($options)

// Selecionar mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Encontrar e apagar todas as mensagens vistas no INBOX
$ids:=$transporter.searchMails("SEEN")
$status:=$transporter.delete($ids)

// Expurga todas as mensagens marcadas como apagadas
$status:=$transporter.expunge()
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->

## .getBoxInfo()

<details><summary>História</summary>

| Release | Mudanças           |
| ------- | ------------------ |
| 20      | _id_ is returned   |
| 18 R5   | _name_ is optional |
| 18 R4   | Adicionado         |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| Parâmetro  | Tipo   |     | Descrição                     |
| ---------- | ------ | :-: | ----------------------------- |
| name       | Text   |  -> | Nome da nova caixa de correio |
| Resultados | Object |  <- | objecto boxInfo               |

<!-- END REF -->

#### Descrição

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox _name_<!-- END REF -->. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional _name_ parameter, pass the name of the mailbox to access. O nome representa uma hierarquia inequívoca da esquerda para a direita com níveis separados por um carácter delimitador específico. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

If the mailbox _name_ is not selectable or does not exist, the function generates an error and returns **null**.

**Returned object**

The `boxInfo` object returned contains the following properties:

| Propriedade | Tipo   | Descrição                                                                                   |
| ----------- | ------ | ------------------------------------------------------------------------------------------- |
| name        | text   | Nome da nova caixa de correio                                                               |
| mailCount   | number | Número de mensagens na caixa de email                                                       |
| mailRecent  | number | Número de mensagens com o marcador "recente" (indicando novas mensagens) |
| id          | text   | Parâmetros                                                                                  |

#### Exemplo

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxList().Desc -->

## .getBoxList()

<details><summary>História</summary>

| Release | Mudanças                     |
| ------- | ---------------------------- |
| 18 R4   | Adicionado                   |
| 19      | Add `isSubscribed` parameter |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->

| Parâmetro  | Tipo       |     | Descrição                              |
| ---------- | ---------- | :-: | -------------------------------------- |
| parameters | Object     |  -> | Parâmetros                             |
| Resultados | Collection |  <- | Coleção de objetos da caixa de correio |

<!-- END REF -->

#### Descrição

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. Esta função permite gerir localmente a lista de mensagens localizadas no servidor de correio IMAP.

In the optional `parameters` parameter, pass an object containing values to filter the returned mailboxes. Pode passar:

| Propriedade  | Tipo       | Descrição                                                                                                  |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------- |
| isSubscribed | Parâmetros | <li>**True** to return only subscribed mailboxes</li><li> **False** to return all available mailboxes</li> |

#### Resultados

Cada objecto da coleção devolvida contém as seguintes propriedades:

| Propriedade                                                                          | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | Nome da nova caixa de correio                                                                                                                                                                                                                                                                                                                  |
| \[].selectable  | boolean | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>                                                                                                                                              |
| \[].inferior    | boolean | Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>                                                                                                                              |
| \[].interesting | boolean | Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul> |

Se a conta não contiver quaisquer caixas de correio, é devolvida uma colecção vazia.

> - If there is no open connection, `.getBoxList()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.

#### Exemplo

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getDelimiter().Desc -->

## .getDelimiter()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->

| Parâmetro  | Tipo |     | Descrição                     |
| ---------- | ---- | :-: | ----------------------------- |
| Resultados | Text |  <- | Hierarchy delimiter character |

<!-- END REF -->

#### Descrição

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

O delimitador é um caractere a que se pode usar para:

- criar caixas de correio de nível inferior
- pesquisar hierarquias de nível mais alto ou mais baixo dentro das caixa de correio

#### Resultados

Carácter delimitador do nome da caixa de correio.

> - If there is no open connection, `.getDelimiter()` will open a connection.
> - If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.

#### Exemplo

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMail().Desc -->

## .getMail()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->

| Parâmetro  | Tipo    |     | Descrição                                        |
| ---------- | ------- | :-: | ------------------------------------------------ |
| msgNumber  | Integer |  -> | Número sequencial da mensagem                    |
| msgID      | Text    |  -> | ID única da mensagem                             |
| options    | Object  |  -> | Instruções de tratamento de mensagens            |
| Resultados | Object  |  <- | [Email object](EmailObjectClass.md#email-object) |

<!-- END REF -->

#### Descrição

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. Essa função permite manejar localmente os conteúdos de email.

No primeiro parâmetro, pode passar qualquer um dos dois:

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _options_ parameter allows you pass an object defining additional instructions for handling the message. As seguintes propriedades estão disponíveis:

| Propriedade | Tipo    | Descrição                                                                                                                                                                                 |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen  | boolean | Se Verdadeiro, a mensagem é marcada como "visto" na caixa de correio. Se falso, a mensagem não é marcada como "visto". Valor padrão: True |
| withBody    | boolean | Pass True para devolver o corpo da mensagem. Se falso, apenas o cabeçalho da mensagem é devolvido. Valor padrão: True                     |

> - The function generates an error and returns **Null** if _msgID_ designates a non-existing message,
> - If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> - If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)\`.

#### Resultados

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object) with the following specific IMAP properties: _id_, _receivedAt_, and _size_.

#### Exemplo

Se quiser receber uma mensagem com ID = 1:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get Email object with ID 1
 $mail:=$transporter.getMail(1)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMails().Desc -->

## .getMails()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                                                                                                                          |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids        | Collection |  -> | Colecção de identificação da mensagem                                                                                                                                                              |
| startMsg   | Integer    |  -> | Número sequencial da primeira mensagem                                                                                                                                                             |
| endMsg     | Integer    |  -> | Número sequencial da última mensagem                                                                                                                                                               |
| options    | Object     |  -> | Instruções de tratamento de mensagens                                                                                                                                                              |
| Resultados | Object     |  <- | Object containing:<br/><ul><li>a collection of [Email objects](EmailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul> |

<!-- END REF -->

#### Descrição

The `.getMails()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns an object containing a collection of `Email` objects<!-- END REF -->.

**First Syntax:**

_**.getMails( ids { ; options } ) -> result**_

A primeira sintaxe permite recuperar mensagens com base nas suas identificações.

In the _ids_ parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional _options_ parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**Second syntax:**

_**.getMails( startMsg ; endMsg { ; options } ) -> result**_

A segunda sintaxe permite recuperar mensagens com base num intervalo sequencial. Os valores passados representam a posição das mensagens na caixa de correio.

In the _startMsg_ parameter, pass an _integer_ value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an _integer_ value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional _options_ parameter allows you to define the parts of the messages to be returned.

**Options**

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                           |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen  | Parâmetros | Se Verdadeiro, as mensagens especificadas são marcadas como "vistas" na caixa de correio. Se falso, as mensagens não são marcadas como "vistas". Valor padrão: True |
| withBody    | Parâmetros | Pass True para devolver o corpo das mensagens especificadas. Se falso, apenas os cabeçalhos das mensagens são devolvidos. Valor padrão: True                        |

> - If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> - If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).

#### Resultados

`.getMails()` returns an object containing the following collections:

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                                                                                                        |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lista       | Collection | Collection of [`Email` objects](EmailObjectClass.md#email-object). Se não forem encontrados objetos e-mail, uma coleção vazia é devolvida.                                                                                                                       |
| notFound    | Collection | Collection of:<br/><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found. |

#### Exemplo

Se quiser recuperar os 20 e-mails mais recentes sem alterar o seu estatuto de "visto":

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
  // retrieve the headers of the last 20 messages without marking them as read
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
     New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
    // ...
    End for each
 End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->

## .getMIMEAsBlob()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                                                                 |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer    |  -> | Número sequencial da mensagem                                                                                                             |
| msgID      | Text       |  -> | ID única da mensagem                                                                                                                      |
| updateSeen | Parâmetros |  -> | Se Verdadeiro, a mensagem é marcada "visto" na caixa de correio. Se Falso, a mensagem é deixada intocada. |
| Resultados | BLOB       |  <- | Blob da string MIME retornado do servidor mail                                                                                            |

<!-- END REF -->

#### Descrição

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

No primeiro parâmetro, pode passar qualquer um dos dois:

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _updateSeen_ parameter allows you to specify if the message is marked as "seen" in the mailbox. Pode passar:

- **True** - to mark the message as "seen" (indicating the message has been read)
- **False** - to leave the message's "seen" status untouched

> * The function returns an empty BLOB if _msgNumber_ or msgID\* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.

#### Resultados

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.

#### Exemplo

```4d
 var $server : Object
 var $boxInfo : Variant
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get BLOB
 $blob:=$transporter.getMIMEAsBlob(1)
```

<!-- END REF -->

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- REF IMAPTransporterClass.move().Desc -->

## .move()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->

| Parâmetro      | Tipo       |     | Descrição                                                                   |
| -------------- | ---------- | :-: | --------------------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | Coleção de identificadores únicos de mensagens (strings) |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox            |
| destinationBox | Text       |  -> | Caixa de correio para receber mensagens movimentadas                        |
| Resultados     | Object     |  <- | Estado da operação de mudança                                               |

<!-- END REF -->

#### Descrição

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

Pode passar:

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to move, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo 1

Para mover uma selecção de mensagens:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // Move found messages from the current mailbox to the "documents" mailbox
 $status:=$transporter.move($mailIds;"documents")
```

#### Exemplo 2

Para mover todas as mensagens na mailbox atual:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  // move all messages in the current mailbox to the "documents" mailbox
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.numToID().Desc -->

## .numToID()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->

| Parâmetro  | Tipo       |     | Descrição                              |
| ---------- | ---------- | :-: | -------------------------------------- |
| startMsg   | Integer    |  -> | Número sequencial da primeira mensagem |
| endMsg     | Integer    |  -> | Número sequencial da última mensagem   |
| Resultados | Collection |  <- | Colecção de identificações únicas      |

<!-- END REF -->

#### Descrição

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by _startMsg_ and _endMsg_<!-- END REF --> in the currently selected mailbox.

In the _startMsg_ parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

#### Resultados

A função devolve uma colecção de cordas (identificações únicas).

#### Exemplo

```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get IDs for 5 last messages received
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //delete the messages from the current mailbox
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.removeFlags().Desc -->

## .removeFlags()

<details><summary>História</summary>

| Release | Mudanças                              |
| ------- | ------------------------------------- |
| 20      | Suporta palavras-chave personalizadas |
| 18 R6   | Adicionado                            |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                                                                                                                                                                                   |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |  -> | Coleção de strings: IDs únicos de mensagens (texto)<br/>Texto: ID único de uma mensagem<br/>Longint (todos IMAP): Todas as mensagens na caixa de correio seleccionada |
| keywords   | Object     |  -> | Flags de palavras-chave a remover                                                                                                                                                                                                                           |
| Resultados | Object     |  <- | Estado da operação removeFlags                                                                                                                                                                                                                              |

<!-- END REF -->

#### Descrição

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| Parâmetros | Valor | Comentário                                                     |
| ---------- | ----- | -------------------------------------------------------------- |
| IMAP all   | 1     | Seleccione todas as mensagens na caixa de correio seleccionada |

The `keywords` parameter lets you define the flags to remove from `msgIDs`. Pode passar qualquer uma das seguintes palavras-chave:

| Parâmetro       | Tipo       | Descrição                                          |
| --------------- | ---------- | -------------------------------------------------- |
| $draft          | Parâmetros | True para remover o flag "draft" na mensagem       |
| $seen           | Parâmetros | True para remover a flag "seen" na mensagem        |
| $flagged        | Parâmetros | True para remover a flag "flagged" na mensagem     |
| $answered       | Parâmetros | True para remover a flag "answered" na mensagem    |
| $deleted        | Parâmetros | True para remover a flag "deleted" na mensagem     |
| `<custom flag>` | Parâmetros | True para remover a flag personalizada na mensagem |

Please refer to [.addFlags()](#addflags) for more information on custom flags.

> - Para que uma palavra-chave seja tida em conta, tem de ser true.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Criar transporter
$transporter:=IMAP New transporter($options)

// Selecionar mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Marcar todas as mensagens de INBOX como invisíveis
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.renameBox().Desc -->

## .renameBox()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->

| Parâmetro   | Tipo   |     | Descrição                          |
| ----------- | ------ | :-: | ---------------------------------- |
| currentName | Text   |  -> | Nome da caixa de correio actual    |
| newName     | Text   |  -> | Nome da nova caixa de correio      |
| Resultados  | Object |  <- | Estado da operação de renomeamento |

<!-- END REF -->

#### Descrição

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Tentar mudar o nome de uma caixa de correio de um nome de caixa de correio que não existe ou para um nome de caixa de correio que já existe irá gerar um erro.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

Para renomear a sua caixa de correio "Invoices" para "Bills":

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"

$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// rename mailbox
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("Mailbox renaming successful!")
   Else
   ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF IMAPTransporterClass.searchMails().Desc -->

## .searchMails()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->

| Parâmetro      | Tipo       |     | Descrição                       |
| -------------- | ---------- | :-: | ------------------------------- |
| searchCriteria | Text       |  -> | Critérios de pesquisa           |
| Resultados     | Collection |  <- | Coleção de números de mensagens |

<!-- END REF -->

#### Descrição

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given _searchCriteria_ in the current mailbox<!-- END REF -->. _searchCriteria_ consists of one or more search keys.

_searchCriteria_ is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. Uma chave de pesquisa pode ser um único ou vários itens. Por exemplo:

```
SearchKey1 = FLAGGED SearchKey2 = NOT FLAGGED SearchKey3 = FLAGGED DRAFT
```

> A correspondência não é normalmente sensível a maiúsculas e minúsculas

- If the _searchCriteria_ is a null string, the search will be equivalent to a “select all”.
- If the _searchCriteria_ includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

- You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... devolve todas as mensagens com o conjunto de bandeiras visíveis OU o conjunto de bandeiras sinalizadoras

```
searchCriteria = NOT SEEN
```

... devolve todas as mensagens com a bandeira não estabelecida.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

No que diz respeito aos dois últimos exemplos, note que o resultado da pesquisa é diferente quando se remove os parênteses da primeira lista de chaves de pesquisa.

- The _searchCriteria_ may include the optional \[CHARSET] specification. Esta consiste na palavra "CHARSET" seguida de uma palavra registada \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the _searchCriteria_ string. Therefore, you must convert the _searchCriteria_ string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands).
  Como padrão, os códigos 4D em Quotable Printable the searchCriteria string se conter caracteres estendidos

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... significa que o critério de pesquisa utiliza o iso-8859 charset e o servidor terá de converter o critério de pesquisa antes de efectuar a pesquisa, se necessário.

#### Tipos de valores de pesquisa

As chaves de pesquisa podem solicitar o valor a pesquisar:

- **Search-keys with a date value**: the date is a string that must be formatted as follows: _date-day+"-"+date-month+"-"+date-year_ where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters).
  Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

- **Search-keys with a string value**: the string may contain any character and must be quoted. Se a string não conter quaisquer caracteres especiais, como o carácter espacial, por exemplo, não precisa de ser citada. A citação de tais strings assegurará que o seu valor de strings será interpretado correctamente.
  Example: `searchCriteria = FROM "SMITH"`
  For all search keys that use strings, a message matches the key if the string is a substring of the field. A correspondência não é sensível a maiúsculas e minúsculas.

- **Search-keys with a field-name value**: the field-name is the name of a header field.
  Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces.
  Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. Para números de sequência de mensagens, estes são números consecutivos de 1 até ao número total de mensagens na caixa de correio. Uma vírgula delimita números individuais; uma vírgula delimita entre dois números, inclusive.
  Examples:
  `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages.
  `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set.
  `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### Chaves de pesquisa autorizadas

**ALL**: All messages in the mailbox.\
**ANSWERED**: Messages with the \Answered flag set.\
**UNANSWERED**: Messages that do not have the \Answered flag set.\
**DELETED**: Messages with the \Deleted flag set.\
**UNDELETED**: Messages that do not have the \Deleted flag set.\
**DRAFT**: Messages with the \Draft flag set.\
**UNDRAFT**: Messages that do not have the \Draft flag set.\
**FLAGGED**: Messages with the \Flagged flag set.\
**UNFLAGGED**: Messages that do not have the \Flagged flag set.\
**RECENT**: Messages that have the \Recent flag set.\
**OLD**: Messages that do not have the \Recent flag set.\
**SEEN**: Messages that have the \Seen flag set.\
**UNSEEN**: Messages that do not have the \Seen flag set.\
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.\
**KEYWORD _flag_**: Messages with the specified keyword set.\
**UNKEYWORD _flag_**: Messages that do not have the specified keyword set.\
**BEFORE _date_**: Messages whose internal date is earlier than the specified date.\
**ON _date_**: Messages whose internal date is within the specified date.\
**SINCE _date_**: Messages whose internal date is within or later than the specified date.\
**SENTBEFORE _date_**: Messages whose Date header is earlier than the specified date.\
**SENTON _date_**: Messages whose Date header is within the specified date.\
**SENTSINCE _date_**: Messages whose Date header is within or later than the specified date.\
**TO _string_**: Messages that contain the specified string in the TO header.\
**FROM _string_**: Messages that contain the specified string in the FROM header.\
**CC _string_**: Messages that contain the specified string in the CC header.\
**BCC _string_**: Messages that contain the specified string in the BCC header.\
**SUBJECT _string_**: Messages that contain the specified string in the Subject header.\
**BODY _string_**: Messages that contain the specified string in the message body.\
**TEXT _string_**: Messages that contain the specified string in the header or in the message body.\
**HEADER _field-name_ _string_**: Messages that have a header with the specified field-name and that contain the specified string in the field-body.\
**UID _message-UID_**: Messages with unique identifiers corresponding to the specified unique identifier set.\
**LARGER _n_**: Messages with a size larger than the specified number of bytes.\
**SMALLER _n_**: Messages with a size smaller than the specified number of bytes.\
**NOT _search-key_**: Messages that do not match the specified search key.\
**OR _search-key1_ _search-key2_**: Messages that match either search key.

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>História</summary>

| Release | Mudanças                                     |
| ------- | -------------------------------------------- |
| 20      | _id_, _flags_, _permanentFlags_ are returned |
| 18 R4   | Adicionado                                   |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| Parâmetro  | Tipo    |     | Descrição                           |
| ---------- | ------- | :-: | ----------------------------------- |
| name       | Text    |  -> | Nome da nova caixa de correio       |
| state      | Integer |  -> | Estado de acesso à caixa de correio |
| Resultados | Object  |  <- | objecto boxInfo                     |

<!-- END REF -->

#### Descrição

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the _name_ mailbox as the current mailbox<!-- END REF -->. Essa função permite que recupere informação sobre o mailbox.

> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the _name_ parameter, pass the name of the mailbox to access. O nome representa uma hierarquia inequívoca da esquerda para a direita com níveis separados por um carácter delimitador específico. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional _state_ parameter defines the type of access to the mailbox. Os valores possíveis são:

| Parâmetros            | Valor | Comentário                                                                                                                                                                                                                                                             |
| --------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | A caixa de correio seleccionada é acedida com privilégios apenas de leitura. As mensagens com uma flag "recente" (indicando novas mensagens) permanecem inalteradas.                                                |
| IMAP read write state | 0     | A caixa de correio seleccionada é acedida com privilégios de leitura e escrita. As mensagens são consideradas "vistas" e perdem o marcador "recente" (indicando novas mensagens). (Valor padrão) |

> - The function generates an error and returns **Null** if _name_ designates a non-existing mailbox.
> - If there is no open connection, `.selectBox()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

| Propriedade    | Tipo   | Descrição                                                                                                                                                   |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nome da nova caixa de correio                                                                                                                               |
| mailCount      | number | Número de mensagens na caixa de email                                                                                                                       |
| mailRecent     | number | Número de mensagens com a flag "recent"                                                                                                                     |
| id             | text   | Parâmetros                                                                                                                                                  |
| flags          | text   | Lista de flags actualmente utilizadas para a caixa de correio, separadas por espaços                                                                        |
| permanentFlags | text   | Lista de marcadores que o cliente pode mudar permanentemente (excepto a \Recent, que é gerida pelo servidor IMAP), separadas por espaços |

:::info

If `permanentFlags` string includes the special flag \*, it means that the server supports [custom flags](#addflags).

:::

#### Exemplo

```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" //Obrigatório
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.subscribe().Desc -->

## .subscribe()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->

| Parâmetro  | Tipo   |     | Descrição                        |
| ---------- | ------ | :-: | -------------------------------- |
| name       | Text   |  -> | Nome da nova caixa de correio    |
| Resultados | Object |  <- | Estado da operação de subscrição |

<!-- END REF -->

#### Descrição

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. Como tal, pode optar por restringir uma grande lista de caixas de correio disponíveis, subscrevendo as que normalmente deseja ver.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

Para subscrever a caixa de correio "Atlas Corp" na hierarquia "Bills":

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name)

If ($status.success)
   ALERT("Mailbox subscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->

## .unsubscribe()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->

| Parâmetro  | Tipo   |     | Descrição                      |
| ---------- | ------ | :-: | ------------------------------ |
| name       | Text   |  -> | Nome da nova caixa de correio  |
| Resultados | Object |  <- | Estado da operação unsubscribe |

<!-- END REF -->

#### Descrição

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. Isto permite reduzir o número de caixas de correio que normalmente se vêem.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Returned object**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                                                                                             | Tipo       | Descrição                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| success     |                                                                                             | Parâmetros | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                    |
| statusText  |                                                                                             | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D     |
| errors      |                                                                                             | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP) |
|             | \[].errcode            | Number     | Código de erro 4D                                                                                  |
|             | \[].message            | Text       | Descrição do erro 4D                                                                               |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                               |

#### Exemplo

Para cancelar a subscrição da caixa de correio "Atlas Corp" na hierarquia "Bills":

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name)

If ($status.success)
   ALERT("Mailbox unsubscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
