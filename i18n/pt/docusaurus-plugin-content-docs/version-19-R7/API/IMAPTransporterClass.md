---
id: IMAPTransporterClass
title: IMAPTransporter
---

A classe `IMAPTransporter` permite-lhe recuperar mensagens a partir de um servidor de correio electrónico IMAP.

### Objecto do IMAP Transporter

Os objectos do IMAP Transporter são instanciados com o comando [IMAP New Transportter](#imap-new-transporter) . Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

## IMAP New transporter

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->


<!-- REF #_command_.IMAP New transporter.Params -->
| Parâmetros | Tipo               |    | Descrição                                                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------------------------------------- |
| server     | Objeto             | -> | Informação de servidor de correio                                                 |
| Resultados | 4D.IMAPTransporter | <- | [Objecto de transporte IMAP](#imap-transporter-object)|<!-- END REF -->


|


#### Descrição

O comando `IMAP Novo transportador` <!-- REF #_command_.IMAP New transporter.Summary -->configura uma nova ligação IMAP<!-- END REF --> de acordo com o parâmetro *server* e devolve um novo objecto *transporter*. O objeto transporter retornado vai geralmente ser usado para receber emails.

No parâmetro *server*, passe um objeto contendo as propriedades abaixo:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                      | Valor padrão (se omitido)                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                             |
| .**accessTokenOAuth2**: Texto<br/>.**accessTokenOAuth2**: Objecto<br/>Cadeia de texto ou objecto simbólico representando as credenciais de autorização do OAuth2. Usado apenas com OAUTH2 `authenticationMode`. Se `accessTokenOAuth2` for utilizado mas `authenticationMode` for omitido, é utilizado o protocolo OAuth 2 (se permitido pelo servidor). Não devolvido em *[IMAP transporter](#imap-transporter-object)* objecto. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->| 300                                                               |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obrigatório*                                                     |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| nenhum                                                            |
| .**password** : Texto<br/>senha de usuário para autenticação no servidor. Não devolvido em *[IMAP transporter](#imap-transporter-object)* objecto.                                                                                                                                                                                                                                                                                      | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                                                               |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| nenhum                                                            |
> **Aviso**: Certifique-se de que o tempo limite definido é inferior ao tempo limite do servidor, caso contrário, o tempo limite do cliente será inútil.

#### Resultados

A função devolve um  [**objecto de transporte do IMAP**](#imap-transporter-object). Todas as propriedades retornadas são **apenas leitura**.
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
| Parâmetros | Tipo               |    | Descrição                                                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------------------------------------- |
| server     | Objeto             | -> | Informação de servidor de correio                                                 |
| Resultados | 4D.IMAPTransporter | <- | [Objecto de transporte IMAP](#imap-transporter-object)|<!-- END REF -->

|

#### Descrição

A função `4D.IMAPTransporter.new()` <!-- REF #4D.IMAPTransporter.new().Summary -->cria e devolve um novo objecto do tipo `4D.IMAPTransporter`<!-- END REF -->. É idêntico ao comando [`IMAP Novo Transportador`](#imap-new-transporter) (atalho).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.addFlags().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                                                                                                                         |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Coleção de strings: IDs únicos de mensagens (texto)<br/>Texto: ID único de uma mensagem<br/>Longint (todos IMAP): Todas as mensagens na caixa de correio seleccionada |
| keywords   | Objeto     | -> | Flags de palavras chaves a adicionar                                                                                                                                              |
| Resultados | Objeto     | <- | Estado da operação addFlags<!-- END REF -->

|

#### Descrição

A função `.addFlags()` <!-- REF #IMAPTransporterClass.addFlags().Summary -->adiciona flags ao `msgIDs` para as palavras-chave especificadas ``<!-- END REF -->.

No parâmetro `msgIDs` , pode passar qualquer um dos dois:

* uma colecção ** contendo as identificações únicas de mensagens específicas ou
* o ID único (*texto*) de uma mensagem ou
* a seguinte constante (*longint*) para todas as mensagens na caixa de correio seleccionada:

 | Constante | Value | Comentário                                                     |
 | --------- | ----- | -------------------------------------------------------------- |
 | IMAP all  | 1     | Seleccione todas as mensagens na caixa de correio seleccionada |

O parâmetro `palavras-chave` permite-lhe passar um objecto com valores de palavras-chave para bandeiras específicas a acrescentar a `msgIDs`. Pode passar qualquer uma das seguintes palavras-chave:

| Parâmetros | Tipo     | Descrição                                             |
| ---------- | -------- | ----------------------------------------------------- |
| $draft     | Booleano | True para adicionar o marcador "draft" na mensagem    |
| $seen      | Booleano | True para adicionar o marcador "seen" na mensagem     |
| $flagged   | Booleano | True para adicionar o marcador "flagged" na mensagem  |
| $answered  | Booleano | True para adicionar o marcador "answered" na mensagem |
| $deleted   | Booleano | True para adicionar o marcador "deleted" na mensagem  |
> * Os falsos valores são ignorados.
> * A interpretação dos marcadores de palavras-chave pode variar por cliente de correio.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : Objecto ; *destinationBox* : Texto ; *opções* : Objecto ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.append().Params -->
| Parâmetros     | Tipo   |    | Descrição                                             |
| -------------- | ------ |:--:| ----------------------------------------------------- |
| mailObj        | Objeto | -> | Objeto Email                                          |
| destinationBox | Text   | -> | Caixa de email que vai receber o objeto Email         |
| options        | Objeto | -> | Objeto que contém informações do charset              |
| Resultados     | Objeto | <- | Estado da operação anexada|<!-- END REF -->

|

#### Descrição

A função `.append()` <!-- REF #IMAPTransporterClass.append().Summary -->anexa um  `mailObj` ao `destinationBox`<!-- END REF -->.

No parâmetro `mailObj` , passe um objecto Email. In the `mailObj` parameter, pass an Email object. A função `.append()` é compatível com tags de palavras-chave no atributo `, palavra-chave` do objeto Email.

O parâmetro opcional `destinationBox` permite-lhe passar o nome de uma caixa de correio onde o `mailObj` será anexado. Se omitido, é utilizada a caixa de correio actual.

No parâmetro opcional `opções` , pode passar um objecto para definir o charset e a codificação para partes específicas do correio electrónico. Propriedades disponiveis:

| Propriedade   | Tipo | Descrição                                                                                                                                                                                    |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset e codificação usados para as seguintes partes do e-mail: assunto, nomes de arquivos de anexo e atributos de nome de e-mail. Possíveis valores: Ver tabela de possíveis cartas abaixo |
| bodyCharset   | Text | Charset e codificação usados para o conteúdo html e corpo do e-mail. Possíveis valores: Ver tabela de possíveis cartas abaixo                                                                |

Charsets possíveis:

| Constante                      | Value                          | Comentário                                                                                                         |
| ------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII se possível, japonês (ISO-2022-JP) & impressora, se possível, caso contrário, UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII se possível, japonês (ISO-2022-JP) & 7-bit se possível, caso contrário, UTF-8 & Quoted-printable</li></ul>                                                                                          |
| mail mode ISO88591             | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                          |
| mail mode UTF8                 | US-ASCII_UTF8_QP             | headerCharset & bodyCharset: US-ASCII se possível, caso contrário UTF-8 & Citação-printável (**valor por padrão**) |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset: US-ASCII se possível, senão UTF-8 & base64                                            |

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

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
$msg.keywords:=Novo objecto
$msg.keywords["$seen"]:= Verdadeiro/// assinalar a mensagem como lido
$msg.keywords["$draft"]:= Verdadeiro/// assinalar a mensagem como um rascunho

$status:=$imap.append($msg; "Rascunhos")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : Integer<!-- END REF -->

#### Descrição

A propriedade `.checkConnectionDelay` contém <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->o tempo máximo (em segundos) permitido antes de verificar a ligação ao servidor<!-- END REF -->.  Se este tempo for excedido entre duas chamadas de método, a ligação ao servidor será verificada. Por padrão, se a propriedade não tiver sido definida no objecto *do servidor*, o valor é 300.
> **Aviso**: Certifique-se de que o tempo limite definido é inferior ao tempo limite do servidor, caso contrário, o tempo limite do cliente será inútil.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.copy().Params -->
| Parâmetros     | Tipo       |    | Descrição                                                       |
| -------------- | ---------- |:--:| --------------------------------------------------------------- |
| msgsIDs        | Collection | -> | Coleção de identificadores únicos de mensagens (strings)        |
| allMsgs        | Integer    | -> | `IMAP all`: Todas as mensagens na caixa de correio seleccionada |
| destinationBox | Text       | -> | Caixa de correio para receber mensagens copiadas                |
| Resultados     | Objeto     | <- | Estado da operação anexada|<!-- END REF -->

|

#### Descrição

A função `.copy()` <!-- REF #IMAPTransporterClass.copy().Summary -->copia as mensagens definidas por *msgsIDs* ou *allMsgs* para a Caixa de destino ** no servidor IMAP<!-- END REF -->.

Pode passar:

* no parâmetro *msgsIDs* , uma colecção contendo as identificações únicas das mensagens específicas a copiar, ou
* no parâmetro *allMsgs* , o `IMAP all` constante (inteiro) para copiar todas as mensagens na caixa de correio seleccionada.

O parâmetro *destinationBox* permite-lhe passar um valor de texto com o nome da caixa de correio onde as cópias das mensagens serão colocadas.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

#### Exemplo 1

Para copiar uma selecção de mensagens:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obrigatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //selecionar mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //obtém a coleção de mensagens com IDs únicos
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copia mensagens encontradas ao mailbox "documents"
 $status:=$transporter.copy($mailIds;"documents")
```

#### Exemplo 2

Para copiar todas as mensagens na caixa de correio actual:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obrigatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //selecionar mailbox

 $boxInfo:=$transporter.selectBox("inbox")

  // copiar todas as mensagens ao "documents" mailbox
 $status:=$transporter.copy(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.createBox().Desc -->
## .createBox()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.createBox().Params -->
| Parâmetros | Tipo   |    | Descrição                                                                    |
| ---------- | ------ |:--:| ---------------------------------------------------------------------------- |
| name       | Text   | -> | Nome da nova caixa de correio                                                |
| Resultados | Objeto | <- | Estado da operação de criação da caixa de correio|<!-- END REF -->

|

#### Descrição

A função `.createBox()` <!-- REF #IMAPTransporterClass.createBox().Summary -->cria uma caixa de correio com o  `nome`dado<!-- END REF -->. Se o carácter separador hierárquico do servidor IMAP aparecer noutro lugar no nome da caixa de correio, o servidor IMAP criará os nomes dos pais necessários para criar a caixa de correio em questão.

Por outras palavras, uma tentativa de criar "Projectos/IMAP/Doc" num servidor em que "/" é o carácter separador hierárquico criará:

* Apenas a caixa de correio "Doc" se "Projectos" & "IMAP" já existir.
* "IMAP" & "Doc" caixas de correio se apenas "Projectos" já existirem.
* "Projectos" & "IMAP" & "Doc" caixas de correio, se ainda não existirem.

No parâmetro `nome` , passe o nome da nova caixa de correio.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

#### Exemplo

Para criar uma nova caixa de correio "Facturas":

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

<!-- REF IMAPTransporterClass.delete().Desc -->
## .delete()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.delete().Params -->
| Parâmetros | Tipo       |    | Descrição                                                       |
| ---------- | ---------- |:--:| --------------------------------------------------------------- |
| msgsIDs    | Collection | -> | Coleção de identificadores únicos de mensagens (strings)        |
| allMsgs    | Integer    | -> | `IMAP all`: Todas as mensagens na caixa de correio seleccionada |
| Resultados | Objeto     | <- | Estado da operação apagada|<!-- END REF -->

|

#### Descrição

A função `.delete()` <!-- REF #IMAPTransporterClass.delete().Summary -->define o marcador "apagado" para as mensagens definidas em `msgsIDs` ou `allMsgs`<!-- END REF -->.

Pode passar:

* no parâmetro `msgsIDs` , uma colecção contendo as identificações únicas das mensagens específicas a apagar, ou
* no parâmetro `allMsgs` , o `IMAP all` constante (inteiro) para apagar todas as mensagens na caixa de correio seleccionada.

A execução desta função não remove realmente as mensagens. As mensagens com a bandeira "apagar" ainda podem ser encontradas pela função [.searchMails()](#searchmails) . As mensagens assinaladas são eliminadas do servidor IMAP com a função [`.expunge()`](#expunge) ou seleccionando outra caixa de correio ou quando o objecto de transporte [](#imap-transporter-object) (criado com [IMAP Novo transportador](#imap-new-transporter)) é destruído.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

#### Exemplo 1

Para apagar uma selecção de mensagens:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obrigatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //selecionar mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //obter coleção das IDs únicas de mensagem
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Apagar mensagens selecionadas
 $status:=$transporter.delete($mailIds)
```

#### Exemplo 2

Para apagar todas as mensagens na caixa de correio actual:

```4d
 var $server;$boxInfo;$status : Objecto
 var $transporter : 4D.IMAPTransporter

 $server:=Novo objecto
 $server.host:="imap.gmail.com" //Mandatório
 $server.port:=993
 $server.user:="$transporter"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP Novo transportador($server)

  //seleccionar caixa de correio
 $boxInfo:= .selectBox("Junk Email")

  // apagar todas as mensagens na caixa de correio actual
 $status:=$transporter.delete(IMAP todos)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.deleteBox().Desc -->
## .deleteBox()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.deleteBox().Params -->
| Parâmetros | Tipo   |    | Descrição                                                                       |
| ---------- | ------ |:--:| ------------------------------------------------------------------------------- |
| name       | Text   | -> | Nome da caixa de correio a apagar                                               |
| Resultados | Objeto | <- | Estado da operação de eliminação da caixa de correio|<!-- END REF -->


|


#### Descrição

A função `.deleteBox()` <!-- REF #IMAPTransporterClass.deleteBox().Summary -->remove permanentemente a caixa de correio com o nome `dado` do servidor IMAP<!-- END REF -->. A tentativa de apagar uma INBOX ou uma caixa de correio que não existe, gerará um erro.

No parâmetro `name` , passar o nome da caixa de correio para eliminar.
> * A função não pode apagar uma caixa de correio que tenha caixas de correio para crianças se a caixa de correio dos pais tiver o atributo "\Noselect".
> * Todas as mensagens na caixa de correio eliminadas serão também eliminadas.
> * A capacidade de apagar uma caixa de correio depende do servidor de correio.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

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

// apagar mailbox
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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->


<!-- REF IMAPTransporterClass.expunge().Params -->
| Parâmetros | Tipo   |    | Descrição                                                 |
| ---------- | ------ |:--:| --------------------------------------------------------- |
| Resultados | Objeto | <- | Estado da operação de expurgo |<!-- END REF -->

|

#### Descrição

A função `.expunge()` <!-- REF #IMAPTransporterClass.expunge().Summary -->remove todas as mensagens com o marcador "apagada" do servidor de correio IMAP.<!-- END REF --> O marcador "apagada" pode ser definida com os métodos [`.delete()`](#delete) ou [`.addFlags()`](#addflags) .

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

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

<details><summary>Histórico</summary>

| Versão | Mudanças          |
| ------ | ----------------- |
| v18 R5 | *name* é opcional |

|v18 R4|Added|

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
| Parâmetros | Tipo   |    | Descrição                                 |
| ---------- | ------ |:--:| ----------------------------------------- |
| name       | Text   | -> | Nome da nova caixa de correio             |
| Resultados | Objeto | <- | boxInfo object|<!-- END REF -->

|

#### Descrição

A função `.getBoxInfo()` <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->devolve um objeto `boxInfo` correspondente à maibox actual, ou a caixa de correio *nome*<!-- END REF -->. Esta função devolve a mesma informação que [`.selectBox()`](#selectbox) sem alterar a caixa de correio actual.

No parâmetro opcional *nome* , passe o nome da caixa de correio para aceder. O nome representa uma hierarquia inequívoca da esquerda para a direita com níveis separados por um carácter delimitador específico. O delimitador pode ser encontrado com a função [`.getDelimiter()`](#getdelimiter) .

Se a caixa de correio *nome* não for seleccionável ou não existir, a função gera um erro e devolve **null**.

**Objeto devolvido**

O objeto `boxInfo` retornado contém as funcionalidades abaixo:

| Propriedade | Tipo   | Descrição                                                                |
| ----------- | ------ | ------------------------------------------------------------------------ |
| name        | text   | Nome da nova caixa de correio                                            |
| mailCount   | number | Número de mensagens na caixa de email                                    |
| mailRecent  | number | Número de mensagens com o marcador "recente" (indicando novas mensagens) |

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

<details><summary>Histórico</summary>

| Versão | Mudanças                           |
| ------ | ---------------------------------- |
| v18 R4 | Adicionado                         |
| v19    | Adicionar parâmetro `isSubscribed` |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.getBoxList().Params -->
| Parâmetros | Tipo       |    | Descrição                                                         |
| ---------- | ---------- |:--:| ----------------------------------------------------------------- |
| parameters | Objeto     | -> | Parâmetro objecto                                                 |
| Resultados | Collection | <- | Coleção de objetos da caixa de correio|<!-- END REF -->

|

#### Descrição

A função `.getBoxList()` <!-- REF #IMAPTransporterClass.getBoxList().Summary -->devolve uma colecção de caixas de correio descrevendo todas as caixas de correio disponíveis<!-- END REF -->. Esta função permite gerir localmente a lista de mensagens localizadas no servidor de correio IMAP.

No parâmetro opcional `` , passe um objeto contendo valores para filtrar as caixas de correio devolvidas. Pode passar:

| Propriedade  | Tipo     | Descrição                                            |
| ------------ | -------- | ---------------------------------------------------- |
| isSubscribed | Booleano | <li>**True*** para devolver apenas caixas de correio inscritas</li><li> **False*** para devolver todas as caixas de correio disponíveis</li> |

#### Resultados

Cada objecto da coleção devolvida contém as seguintes propriedades:

| Propriedade      | Tipo    | Descrição                                                                                                                           |
| ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | Nome da nova caixa de correio                                                                                                       |
| \[].selectable  | boolean | Indica se os direitos de acesso permitem ou não a selecção da caixa de correio: <ul><li>true - a caixa de correio pode ser seleccionada</li><li>falso - a caixa de correio não pode ser seleccionada</li></ul>                           |
| \[].inferior    | boolean | Indica se os direitos de acesso permitem ou não a criação de uma hierarquia inferior na caixa de correio: <ul><li>true - pode ser criado um nível inferior</li><li>falso - um nível inferior não pode ser criado</li></ul> |
| \[].interesting | boolean | Indica se a caixa de correio foi marcada como "interessante" pelo servidor: <ul><li>true - A caixa de correio foi marcada como "interessante" pelo servidor. Por exemplo, pode conter novas mensagens.</li><li>falso - A caixa de correio não foi marcada como "interessante" pelo servidor.</li></ul>                               |

Se a conta não contiver quaisquer caixas de correio, é devolvida uma colecção vazia.
> * Se não houver uma conexão aberta, `.getBoxList()` irá abrir uma conexão.
> * Se a conexão não tiver sido utilizada desde o atraso da ligação determinado (ver `IMAP Novo transportador`), a função `.checkConnection( )` é automaticamente chamada.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter()** : Text<!-- END REF -->


<!-- REF #IMAPTransporterClass.getDelimiter().Params -->
| Parâmetros | Tipo |    | Descrição                                                    |
| ---------- | ---- |:--:| ------------------------------------------------------------ |
| Resultados | Text | <- | Carácter delimitador da hierarquia<!-- END REF -->

|

#### Descrição

A função `.getDelimiter()` <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->devolve o carácter utilizado para delimitar os níveis de hierarquia no nome da caixa de correio<!-- END REF -->.

O delimitador é um caractere a que se pode usar para:

* criar caixas de correio de nível inferior
* pesquisar hierarquias de nível mais alto ou mais baixo dentro das caixa de correio

#### Resultados

Carácter delimitador do nome da caixa de correio.
> * Se não houver uma ligação aberta, `.getDelimiter()` irá abrir uma ligação.
> * Se a ligação não tiver sido utilizada desde o atraso da ligação designada [](#checkconnectiondelay), a função [`.checkConnection()`](#checkconnection) é automaticamente chamada.

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMail().Params -->
| Parâmetros | Tipo    |    | Descrição                                                                    |
| ---------- | ------- |:--:| ---------------------------------------------------------------------------- |
| msgNumber  | Integer | -> | Número sequencial da mensagem                                                |
| msgID      | Text    | -> | ID única da mensagem                                                         |
| options    | Objeto  | -> | Instruções de tratamento de mensagens                                        |
| Resultados | Objeto  | <- | [Email objecto](EmailObjectClass.md#email-object)|<!-- END REF -->

|

#### Descrição

A função `.getMail()` <!-- REF #IMAPTransporterClass.getMail().Summary -->devolve o `Email` objecto correspondente ao *msgNumber* ou *msgID* na caixa de correio designada pelo `IMAP_transporter`<!-- END REF -->. Essa função permite manejar localmente os conteúdos de email.

No primeiro parâmetro, pode passar qualquer um dos dois:

* *msgNumber*, um valor *inteiro* indicando o número de sequência da mensagem a recuperar ou
* *msgID*, um texto *valor* indicando a identificação única da mensagem a recuperar.

O parâmetro opcional *opções* permite-lhe passar um objecto definindo instruções adicionais para o tratamento da mensagem. As seguintes propriedades estão disponíveis:

| Propriedade | Tipo    | Descrição                                                                                                                                 |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen  | boolean | Se Verdadeiro, a mensagem é marcada como "visto" na caixa de correio. Se falso, a mensagem não é marcada como "visto". Valor padrão: True |
| withBody    | boolean | Pass True para devolver o corpo da mensagem. Se falso, apenas o cabeçalho da mensagem é devolvido. Valor padrão: True                     |
> * A função gera um erro e devolve **Null** se *msgID* designar uma mensagem inexistente,
> * Se nenhuma caixa de correio for seleccionada com a função [`.selectBox()`](#selectbox) , é gerado um erro,
> * Se não houver uma ligação aberta, `.getMail()` abrirá uma ligação a última caixa de correio especificada com [`.selectBox()`](#selectbox)`.

#### Resultados

`.getMail()` devolve um [`Email` object](EmailObjectClass.md#email-object) com as seguintes propriedades IMAP específicas: *id*, *recebidoEm*, e *tamanho*.

#### Exemplo

Se quiser receber uma mensagem com ID = 1:

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obrigatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //cria transporter
 $transporter:=IMAP New transporter($server)

  //seleciona mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //obtém objeto Email com ID 1
 $mail:=$transporter.getMail(1)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMails().Desc -->
## .getMails()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMails().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                         |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------- |
| ids        | Collection | -> | Colecção de identificação da mensagem                                             |
| startMsg   | Integer    | -> | Número sequencial da primeira mensagem                                            |
| endMsg     | Integer    | -> | Número sequencial da última mensagem                                              |
| options    | Objeto     | -> | Instruções de tratamento de mensagens                                             |
| Resultados | Objeto     | <- | Objecto contendo:<br/><ul><li>uma colecção de [Email objects](EmailObjectClass.md#email-object) e</li><li>uma colecção de identificações ou números para mensagens em falta, se existirem</li></ul>|<!-- END REF -->

|

#### Descrição

A função `.getMails()` <!-- REF #IMAPTransporterClass.getMails().Summary -->devolve um objecto contendo uma coleção de `Email` objetos<!-- END REF -->.

**Primeira sintaxe:**

***.getMails( ids { ; options } ) -> result***

A primeira sintaxe permite recuperar mensagens com base nas suas identificações.

No parâmetro *ids* , passe uma colecção de IDs para as mensagens a devolver. Pode obter as identificações com [`.getMail()`](#getmail).

O parâmetro opcional *opções* permite definir as partes das mensagens a serem devolvidas. Ver a tabela **Opções** abaixo para uma descrição das propriedades disponíveis.

**Segunda sintaxe:**

 ***.getMails( startMsg ; endMsg { ; options } ) -> result***

A segunda sintaxe permite recuperar mensagens com base num intervalo sequencial. Os valores passados representam a posição das mensagens na caixa de correio.

No parâmetro *startMsg* , passe um valor *inteiro* correspondente ao número da primeira mensagem num intervalo sequencial. Se passar um número negativo (*startMsg* <= 0), a primeira mensagem da caixa de correio será utilizada como o início da sequência.

No parâmetro *endMsg* , passe um valor *inteiro* correspondente ao número da última mensagem a ser incluída num intervalo sequencial. Se passar um número negativo (*endMsg* <= 0), a última mensagem da caixa de correio será utilizada como o fim da sequência.

O parâmetro opcional *opções* permite definir as partes das mensagens a serem devolvidas.

**Options**

| Propriedade | Tipo     | Descrição                                                                                                                                                           |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen  | Booleano | Se Verdadeiro, as mensagens especificadas são marcadas como "vistas" na caixa de correio. Se falso, as mensagens não são marcadas como "vistas". Valor padrão: True |
| withBody    | Booleano | Pass True para devolver o corpo das mensagens especificadas. Se falso, apenas os cabeçalhos das mensagens são devolvidos. Valor padrão: True                        |
> * Se nenhuma caixa de correio for seleccionada com o comando [`.selectBox()`](#selectbox), é gerado um erro.
> * Se não houver uma ligação aberta, `.getMails()` abrirá uma ligação a última caixa de correio especificada com [`.selectBox()`](#selectbox).

#### Resultados

`.getMails()` devolve um objecto contendo as seguintes colecções:

| Propriedade | Tipo       | Descrição                                                                                                                               |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| lista       | Collection | Coleção de [`Email` objetos](EmailObjectClass.md#email-object). Se não forem encontrados objetos e-mail, uma coleção vazia é devolvida. |
| notFound    | Collection | Coleção:<br/><ul><li>primeira sintaxe - IDs de mensagens passadas anteriormente que não existem</li><li>segunda sintaxe - números de sequência de mensagens entre startMsg e endMsg que não existem</li></ul>Uma colecção vazia é devolvida se todas as mensagens forem encontradas.                    |

#### Exemplo

Se quiser recuperar os 20 e-mails mais recentes sem alterar o seu estatuto de "visto":

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obrigatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //cria transporter
 $transporter:=IMAP New transporter($server)

  //seleciona mailbox
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
  // recupera cabeçalhos das últimas 20 mensagens sem marcá-las como lidas
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
     New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
    // ...
    End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->
## .getMIMEAsBlob()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->
| Parâmetros | Tipo     |    | Descrição                                                                                                 |
| ---------- | -------- |:--:| --------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer  | -> | Número sequencial da mensagem                                                                             |
| msgID      | Text     | -> | ID única da mensagem                                                                                      |
| updateSeen | Booleano | -> | Se Verdadeiro, a mensagem é marcada "visto" na caixa de correio. Se Falso, a mensagem é deixada intocada. |
| Resultados | BLOB     | <- | Blob da string MIME retornado do servidor mail|<!-- END REF -->

|

#### Descrição

A função `.getMIMEAsBlob()` <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->devolve o BLOB contendo o conteúdo MIME para a mensagem correspondente a *msgNumber* ou *msgID* na caixa de correio designada pelo `IMAP_transporter`<!-- END REF -->.

No primeiro parâmetro, pode passar qualquer um dos dois:

* *msgNumber*, um valor *inteiro* indicando o número de sequência da mensagem a recuperar ou
* *msgID*, um texto *valor* indicando a identificação única da mensagem a recuperar.

O parâmetro opcional *updateSeen* permite-lhe especificar se a mensagem está marcada como "vista" na caixa de correio. Pode passar:

* **Verdadeiro** - para marcar a mensagem como "vista" (indicando que a mensagem foi lida)
* **False** - to leave the message's "seen" status untouched > * The function returns an empty BLOB if *msgNumber* or msgID* designates a non-existing message, > * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated, > * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.
> * A função devolve um BLOB vazio se *msgNumber* ou msgID* designar uma mensagem inexistente,
> * Se nenhuma caixa de correio for seleccionada com o comando [`.selectBox()`](#selectbox), é gerado um erro,
> * Se não houver uma ligação aberta, `.getMIMEAsBlob()` abrirá uma ligação a última caixa de correio especificada com `.selectBox()`.

#### Resultados

`.getMIMEAsBlob()` retorna um `BLOB` que pode ser arquivado em um banco de dados ou convertido a um objeto [`Email` ](EmailObjectClass.md#email-object) com o comando `MAIL Convert from MIME`.

#### Exemplo

```4d
 var $server : Objecto
 var $boxInfo : Variante
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

 $server:=Novo objecto
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:=" "
 $server.password:="XXXXXXXX"

  //criar transportador
 $transporter:=IMAP Novo transportador($server)

  //seleccionar caixa de correio
 $boxInfo:=$transporter.selectBox("Inbox")

  //get BLOB
 $blob:=$transporter.getMIMEAsBlob(1)
```

<!-- END REF -->

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- REF IMAPTransporterClass.move().Desc -->
## .move()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.move().Params -->
| Parâmetros     | Tipo       |    | Descrição                                                       |
| -------------- | ---------- |:--:| --------------------------------------------------------------- |
| msgsIDs        | Collection | -> | Coleção de identificadores únicos de mensagens (strings)        |
| allMsgs        | Integer    | -> | `IMAP all`: Todas as mensagens na caixa de correio seleccionada |
| destinationBox | Text       | -> | Caixa de correio para receber mensagens movimentadas            |
| Resultados     | Objeto     | <- | Estado da operação de mudança|<!-- END REF -->

|

#### Descrição

A função `.move()` <!-- REF #IMAPTransporterClass.move().Summary -->move as mensagens definidas por *msgsIDs* ou *allMsgs* para a *destinationBox* no servidor IMAP<!-- END REF -->.

Pode passar:

* no parâmetro *msgsIDs*, uma colecção contendo as identificações únicas das mensagens específicas a mover, ou
* no parâmetro *allMsgs*, o `IMAP all` constante (inteiro) para mover todas as mensagens na caixa de correio seleccionada.

O parâmetro *destinationBox* permite-lhe passar um valor de texto com o nome da caixa de correio onde as mensagens serão movimentadas.

> Esta função só é suportada por servidores IMAP em conformidade com o RFC [8474](https://tools.ietf.org/html/rfc8474).

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

#### Exemplo 1

Para mover uma selecção de mensagens:

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obrigatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //selecionar mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //obter coleção das IDs únicas de mensagem
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // mover mensagens encontradas da caixa de correio actual para a caixa de correio "documents"
 $status:=$transporter.move($mailIds; "documentos")
```

#### Exemplo 2

To move all messages in the current mailbox:

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //seleccionar caixa de correio
 $boxInfo:=$transporter.selectBox("inbox")

  // mover todas as mensagens da caixa de correio actual para a caixa de correio "documents"
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.numToID().Desc -->
## .numToID()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.numToID().Params -->
| Parâmetros | Tipo       |    | Descrição                                                    |
| ---------- | ---------- |:--:| ------------------------------------------------------------ |
| startMsg   | Integer    | -> | Número sequencial da primeira mensagem                       |
| endMsg     | Integer    | -> | Número sequencial da última mensagem                         |
| Resultados | Collection | <- | Colecção de identificações únicas|<!-- END REF -->

|

#### Descrição

A função `.numToID()` <!-- REF #IMAPTransporterClass.numToID().Summary -->converte os números sequenciais para IDs únicos IMAP para as mensagens no intervalo sequencial designado por *startMsg* e *endMsg*<!-- END REF --> na caixa de correio actualmente seleccionada.

No parâmetro *startMsg*, passe um valor inteiro correspondente ao número da primeira mensagem num intervalo sequencial. Se passar um número negativo (*startMsg* <= 0), a primeira mensagem da caixa de correio será utilizada como o início da sequência.

No parâmetro *endMsg*, passe um valor inteiro correspondente ao número da última mensagem a ser incluída num intervalo sequencial. Se passar um número negativo (*endMsg* <= 0), a última mensagem da caixa de correio será utilizada como o fim da sequência.

#### Resultados

A função devolve uma colecção de cordas (identificações únicas).

#### Exemplo

```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //obter IDs para 5 últimas mensagens recebidas
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //excluir as mensagens da caixa de correio actual
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.removeFlags().Desc -->
## .removeFlags()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R6 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.removeFlags().Params -->
| Parâmetros | Tipo       |    | Descrição                                                                                                                                                                         |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Coleção de strings: IDs únicos de mensagens (texto)<br/>Texto: ID único de uma mensagem<br/>Longint (todos IMAP): Todas as mensagens na caixa de correio seleccionada |
| keywords   | Objeto     | -> | Flags de palavras-chave a remover                                                                                                                                                 |
| Resultados | Objeto     | <- | Estado da operação removeFlags|<!-- END REF -->

|

#### Descrição

A função `.removeFlags()` <!-- REF #IMAPTransporterClass.removeFlags().Summary -->remove flags do `msgIDs` para as `palavras-chave` especificadas<!-- END REF -->.

No parâmetro `msgIDs` , pode passar qualquer um dos dois:

* uma colecção ** contendo as identificações únicas de mensagens específicas ou
* o ID único (*texto*) de uma mensagem ou
* a seguinte constante (*longint*) para todas as mensagens na caixa de correio seleccionada:

 | Constante | Value | Comentário                                                     |
 | --------- | ----- | -------------------------------------------------------------- |
 | IMAP all  | 1     | Seleccione todas as mensagens na caixa de correio seleccionada |

The `keywords` parameter lets you pass an object with keyword values for specific flags to remove from `msgIDs`. Pode passar qualquer uma das seguintes palavras-chave:

| Parâmetros | Tipo     | Descrição                                       |
| ---------- | -------- | ----------------------------------------------- |
| $draft     | Booleano | True para remover o flag "draft" na mensagem    |
| $seen      | Booleano | True para remover a flag "seen" na mensagem     |
| $flagged   | Booleano | True para remover a flag "flagged" na mensagem  |
| $answered  | Booleano | True para remover a flag "answered" na mensagem |
| $deleted   | Booleano | True para remover a flag "deleted" na mensagem  |

Note that False values are ignored.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

#### Exemplo

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Create transporter
$transporter:=IMAP New transporter($options)

// Select mailbox
$boxInfo:=$transporter.selectBox("INBOX")

// Mark all messages from INBOX as unseen
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.renameBox().Desc -->
## .renameBox()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.renameBox().Params -->
| Parâmetros  | Tipo   |    | Descrição                                                     |
| ----------- | ------ |:--:| ------------------------------------------------------------- |
| currentName | Text   | -> | Nome da caixa de correio actual                               |
| newName     | Text   | -> | Novo nome da caixa de correio                                 |
| Resultados  | Objeto | <- | Estado da operação de renomeamento|<!-- END REF -->

|

#### Descrição

A função `.renameBox()` <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Attempting to rename a mailbox from a mailbox name that does not exist or to a mailbox name that already exists will generate an error.

No parâmetro `currentName`, passar o nome da caixa de correio para renommer.

Passar o novo nome para a caixa de correio no parâmetro `newName`.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R5 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.searchMails().Params -->
| Parâmetros     | Tipo       |    | Descrição                                                  |
| -------------- | ---------- |:--:| ---------------------------------------------------------- |
| searchCriteria | Text       | -> | Critérios de pesquisa                                      |
| Resultados     | Collection | <- | Coleção de números de mensagens|<!-- END REF -->

|

#### Descrição

> Esta função é baseada na especificação do [protocolo IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

A função `.searchMails()` <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given *searchCriteria* in the current mailbox<!-- END REF -->. *searchCriteria* consiste em uma ou mais chaves de pesquisa.

*searchCriteria* is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. A search key may be a single or multiple items. Por exemplo:

```
SearchKey1 = FLAGGED SearchKey2 = NOT FLAGGED SearchKey3 = FLAGGED DRAFT
```

> A correspondência não é normalmente sensível a maiúsculas e minúsculas

* If the *searchCriteria* is a null string, the search will be equivalent to a “select all”.
* If the *searchCriteria* includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

* You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... returns all messages with \Seen flag set OR \Flagged flag set

```
searchCriteria = NOT SEEN
```

... returns all messages with \Seen flag not set.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

As concerns the last two examples, notice that the result of the search is different when you remove the parentheses of the first search key list.

* The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the *searchCriteria* string. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands). By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.

#### Search value types

Search-keys may request the value to search for:

* **Search-keys with a date value**: the date is a string that must be formatted as follows: *date-day+"-"+date-month+"-"+date-year* where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters). Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

* **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted. Example: `searchCriteria = FROM "SMITH"` For all search keys that use strings, a message matches the key if the string is a substring of the field. Matching is not case-sensitive.

* **Search-keys with a field-name value**: the field-name is the name of a header field. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

* **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

* **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive. Exemplos: `2,4:7,9,12:*` é `2,4,5,6,7,9,12,13,14,15` para uma caixa de correio com 15 mensagens. `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set. `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### Chaves de pesquisa autorizadas

**ALL**: All messages in the mailbox.  
**ANSWERED**: Messages with the \Answered flag set.  
**UNANSWERED**: Messages that do not have the \Answered flag set.  
**DELETED**: Messages with the \Deleted flag set.  
**UNDELETED**: Messages that do not have the \Deleted flag set.  
**DRAFT**: Messages with the \Draft flag set.  
**UNDRAFT**: Messages that do not have the \Draft flag set.  
**FLAGGED**: Messages with the \Flagged flag set.  
**UNFLAGGED**: Messages that do not have the \Flagged flag set.  
**RECENT**: Messages that have the \Recent flag set.  
**OLD**: Messages that do not have the \Recent flag set.  
**SEEN**: Messages that have the \Seen flag set.  
**UNSEEN**: Messages that do not have the \Seen flag set.  
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.  
***KEYWORD ***flag******: Messages with the specified keyword set.  
***UNKEYWORD ***flag******: Messages that do not have the specified keyword set.  
***BEFORE ***date******: Messages whose internal date is earlier than the specified date.  
***ON ***date******: Messages whose internal date is within the specified date.  
***SINCE ***date******: Messages whose internal date is within or later than the specified date.  
***SENTBEFORE ***date******: Messages whose Date header is earlier than the specified date.  
***SENTON ***date******: Messages whose Date header is within the specified date.  
***SENTSINCE ***date******: Messages whose Date header is within or later than the specified date.  
***TO ***string******: Messages that contain the specified string in the TO header.  
***FROM ***string******: Messages that contain the specified string in the FROM header.  
***CC ***string******: Messages that contain the specified string in the CC header.  
***BCC ***string******: Messages that contain the specified string in the BCC header.  
***SUBJECT ***string******: Messages that contain the specified string in the Subject header.  
***BODY ***string******: Messages that contain the specified string in the message body.  
***TEXT ***string******: Messages that contain the specified string in the header or in the message body.  
***HEADER *field-name* ***string******: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
***UID ***message-UID******: Messages with unique identifiers corresponding to the specified unique identifier set.  
***LARGER ***n******: Messages with a size larger than the specified number of bytes.  
***SMALLER ***n******: Messages with a size smaller than the specified number of bytes.  
***NOT ***search-key******: Messages that do not match the specified search key.  
***OR *search-key1* ***search-key2******: Messages that match either search key.  

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->
## .selectBox()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.selectBox().Params -->
| Parâmetros | Tipo    |    | Descrição                                 |
| ---------- | ------- |:--:| ----------------------------------------- |
| name       | Text    | -> | Nome da nova caixa de correio             |
| state      | Integer | -> | Estado de acesso à caixa de correio       |
| Resultados | Objeto  | <- | boxInfo object|<!-- END REF -->

|

#### Descrição

A função `.selectBox()` <!-- REF #IMAPTransporterClass.selectBox().Summary -->selecciona a caixa de correio *name* como a caixa de correio actual<!-- END REF -->. Essa função permite que recupere informação sobre o mailbox.
> Para obter as informações de uma caixa de correio sem alterar a caixa de correio actual, utilize [`.getBoxInfo()`](#getboxinfo).

No parâmetro *name*, passar o nome da caixa de correio para aceder. O nome representa uma hierarquia inequívoca da esquerda para a direita com níveis separados por um carácter delimitador específico. O delimitador pode ser encontrado com a função [`.getDelimiter()`](#getdelimiter) .

O parâmetro opcional *state* define o tipo de acesso à caixa de correio. Os valores possíveis são:

| Constante             | Value | Comentário                                                                                                                                                                          |
| --------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | A caixa de correio seleccionada é acedida com privilégios apenas de leitura. As mensagens com uma flag "recente" (indicando novas mensagens) permanecem inalteradas.                |
| IMAP read write state | 0     | A caixa de correio seleccionada é acedida com privilégios de leitura e escrita. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Valor padrão) |
> * A função gera um erro e devolve **Null** se *name* designar uma caixa de correio inexistente.
> * Se não houver uma conexão aberta, `.selectBox()` irá abrir uma conexão.
> * Se a conexão não tiver sido utilizada desde o atraso da ligação determinado (ver `IMAP New transpor ter`), a função [`.checkConnection()`](#checkconnection) é automaticamente chamada.

**Objeto devolvido**

O objeto `boxInfo` retornado contém as funcionalidades abaixo:

| Propriedade | Tipo   | Descrição                               |
| ----------- | ------ | --------------------------------------- |
| name        | Text   | Nome da nova caixa de correio           |
| mailCount   | number | Número de mensagens na caixa de email   |
| mailRecent  | number | Número de mensagens com a flag "recent" |

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

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.subscribe().Params -->
| Parâmetros | Tipo   |    | Descrição                                                   |
| ---------- | ------ |:--:| ----------------------------------------------------------- |
| name       | Text   | -> | Nome da nova caixa de correio                               |
| Resultados | Objeto | <- | Estado da operação de subscrição|<!-- END REF -->

|

#### Descrição

A função `.subscribe()` <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. As such, you can choose to narrow down a large list of available mailboxes by subscribing to those you usually want to see.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

#### Exemplo

To subscribe to the "Atlas Corp” mailbox in the "Bills" hierarchy:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:") If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name) If ($status.success)
   ALERT("Mailbox subscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->
## .unsubscribe()

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19    | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->


<!-- REF #IMAPTransporterClass.unsubscribe().Params -->
| Parâmetros | Tipo   |    | Descrição                                                 |
| ---------- | ------ |:--:| --------------------------------------------------------- |
| name       | Text   | -> | Nome da nova caixa de correio                             |
| Resultados | Objeto | <- | Estado da operação unsubscribe|<!-- END REF -->

|

#### Descrição

A função `.unsubscribe()` <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. This allows you reduce the number of mailboxes you usually see.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Objeto devolvido**

A função devolve um objecto que descreve o estado IMAP:

| Propriedade |                         | Tipo       | Descrição                                                                                      |
| ----------- | ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| success     |                         | Booleano   | Verdadeiro se a operação for bem sucedida, Falso caso contrário                                |
| statusText  |                         | Text       | Mensagem de estado devolvida pelo servidor IMAP, ou último erro devolvido na pilha de erros 4D |
| errors      |                         | Collection | pilha de erros 4D (não devolvida se for recebida uma resposta do servidor IMAP)                |
|             | \[].errcode            | Número     | Código de erro 4D                                                                              |
|             | \[].message            | Text       | Descrição do erro 4D                                                                           |
|             | \[].componentSignature | Text       | Assinatura da componente interna que devolveu o erro                                           |

#### Exemplo

To unsubscribe from the "Atlas Corp” mailbox in the "Bills" hierarchy:

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:") If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name) If ($status.success)
   ALERT("Mailbox unsubscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
