---
id: IMAPTransporterClass
title: IMAPTransporter
---

A classe `IMAPTransporter` permite-lhe recuperar mensagens a partir de um servidor de mensagens IMAP.

### Objecto IMAP Transporter

IMAP Transporter objects are instantiated with the [IMAP New transporter](../commands/imap-new-transporter.md) command. Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->       |
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<br/><!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<br/><!-- INCLUDE #IMAPTransporterClass.append().Summary -->                                       |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                         |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary --> |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                            |
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<br/><!-- INCLUDE #IMAPTransporterClass.copy().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<br/><!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #IMAPTransporterClass.delete().Summary -->                                       |
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<br/><!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<br/><!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<br/><!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->                     |
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<br/><!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                   |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                          |
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<br/><!-- INCLUDE #IMAPTransporterClass.move().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)<br/><!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<br/><!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<br/><!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                   |
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)<br/><!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<br/><!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<br/><!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<br/><!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->                        |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                   |

## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->

| Parâmetro  | Tipo                               |                             | Descrição                                             |
| ---------- | ---------------------------------- | :-------------------------: | ----------------------------------------------------- |
| server     | Object                             |              ->             | Informação de servidor de correio                     |
| Resultados | 4D.IMAPTransporter | <- | [Objeto transportador IMAP](#imap-transporter-object) |

<!-- END REF -->

#### Descrição

A função `4D.IMAPTransporter.new()` <!-- REF #4D.IMAPTransporter.new().Summary -->cria e retorna um novo objeto do tipo `4D.IMAPTransporter`<!-- END REF -->. É idêntico ao comando [`IMAP New transporter`](../commands/imap-new-transporter.md) (atalho).

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

| Parâmetro  | Tipo       |                             | Descrição                                                                                                                                                                                                                                                   |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |              ->             | Coleção de strings: IDs únicos de mensagens (texto)<br/>Texto: ID único de uma mensagem<br/>Longint (todos IMAP): Todas as mensagens na caixa de correio seleccionada |
| keywords   | Object     |              ->             | Flags de palavras chaves a adicionar                                                                                                                                                                                                                        |
| Resultados | Object     | <- | Estado da operação addFlags                                                                                                                                                                                                                                 |

<!-- END REF -->

#### Descrição

A função `.addFlags()` <!-- REF #IMAPTransporterClass.addFlags().Summary -->adiciona sinalizadores aos `msgIDs` para as `keywords` especificadas<!-- END REF -->.

No parâmetro `msgIDs`, você pode passar qualquer um deles:

- uma *colecção* contendo as identificações únicas de mensagens específicas ou
- o ID único (*texto*) de uma mensagem ou
- a seguinte constante (*longint*) para todas as mensagens na caixa de correio selecionada:

| Parâmetros | Valor | Comentário                                                     |
| ---------- | ----- | -------------------------------------------------------------- |
| IMAP all   | 1     | Seleccione todas as mensagens na caixa de correio seleccionada |

O parâmetro `keywords` permite que você defina os sinalizadores a serem adicionados aos `msgIDs`. Pode passar qualquer uma das seguintes palavras-chave:

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

**Objeto devolvido**

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

| Parâmetro      | Tipo   |                             | Descrição                                     |
| -------------- | ------ | :-------------------------: | --------------------------------------------- |
| mailObj        | Object |              ->             | Objeto Email                                  |
| destinationBox | Text   |              ->             | Caixa de email que vai receber o objeto Email |
| options        | Object |              ->             | Objeto que contém informações do charset      |
| Resultados     | Object | <- | Estado da operação anexada                    |

<!-- END REF -->

#### Descrição

A função `.append()` <!-- REF #IMAPTransporterClass.append().Summary -->anexa um `mailObj` à `destinationBox`<!-- END REF -->.

No parâmetro `mailObj`, passe um objeto de e-mail. Para uma descrição abrangente das propriedades de email, consulte [Objeto Email](EmailObjectClass.md#email-object). A função `.append()` suporta tags de palavras-chave no atributo `keywords` do objeto de e-mail.

O parâmetro opcional `destinationBox` permite que você passe o nome de uma caixa de correio onde o `mailObj` será anexado. Se omitido, é utilizada a caixa de correio actual.

No parâmetro opcional `options`, você pode passar um objeto para definir o conjunto de caracteres e a codificação para partes específicas do e-mail. Propriedades disponiveis:

| Propriedade   | Tipo | Descrição                                                                                                                                                                                                                                    |
| ------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset e codificação usados para as seguintes partes do e-mail: assunto, nomes de arquivos de anexo e atributos de nome de e-mail. Possíveis valores: Ver tabela de possíveis cartas abaixo |
| bodyCharset   | Text | Charset e codificação usados para o conteúdo html e corpo do e-mail. Possíveis valores: Ver tabela de possíveis cartas abaixo                                                                                |

Charsets possíveis:

| Parâmetros                     | Valor                                                                                       | Comentário                                                                                                                                                                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP            | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII se possível, japonês (ISO-2022-JP) e Quoted-printable se possível, caso contrário, UTF-8 e Quoted-printable</li><li>bodyCharset: US-ASCII, se possível, japonês (ISO-2022-JP) e 7 bits, se possível, caso contrário, UTF-8 e Quoted-printable</li></ul> |
| mail mode ISO88591             | ISO-8859-1                                                                                  | <ul><li>headerCharset: ISO-8859-1 e Quoted-printable</li><li>bodyCharset: ISO-8859-1 e 8 bits</li></ul>                                                                                                                                                                                 |
| mail mode UTF8                 | US-ASCII_UTF8_QP                                  | headerCharset & bodyCharset: US-ASCII se possível, caso contrário UTF-8 & Quoted-printable (**valor padrão**)                                                                                                |
| modo de correio UTF8 na base64 | US-ASCII_UTF8_B64                                 | headerCharset & bodyCharset: US-ASCII se possível, caso contrário UTF-8 & base64                                                                                                                                                |

**Objeto devolvido**

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

A propriedade `.checkConnectionDelay` contém <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->o tempo máximo (em segundos) permitido antes de verificar a conexão com o servidor<!-- END REF -->.  Se este tempo for excedido entre duas chamadas de método, a ligação ao servidor será verificada. Por padrão, se a propriedade não tiver sido definida no objecto do servidor, o valor é 300.

> **Aviso**: certifique-se de que o tempo limite definido seja menor que o tempo limite do servidor, caso contrário, o tempo limite do cliente será inútil.

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

| Parâmetro      | Tipo       |                             | Descrição                                                                      |
| -------------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------ |
| msgsIDs        | Collection |              ->             | Coleção de identificadores únicos de mensagens (strings)    |
| allMsgs        | Integer    |              ->             | `IMAP all`: todas as mensagens na caixa de correio selecionada |
| destinationBox | Text       |              ->             | Caixa de correio para receber mensagens copiadas                               |
| Resultados     | Object     | <- | Estado da operação anexada                                                     |

<!-- END REF -->

#### Descrição

A função `.copy()` <!-- REF #IMAPTransporterClass.copy().Summary -->copia as mensagens definidas por *msgsIDs* ou *allMsgs* para *destinationBox* no servidor IMAP<!-- END REF -->.

Pode passar:

- no parâmetro msgsIDs, uma colecção contendo as identificações únicas das mensagens específicas a copiar, ou
- no parâmetro *allMsgs*, a constante `IMAP all` (número inteiro) para copiar todas as mensagens na caixa de correio selecionada.

O parâmetro destinationBox permite-lhe passar um valor de texto com o nome da caixa de correio onde as cópias das mensagens serão colocadas.

**Objeto devolvido**

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                         |
| ---------- | ------ | :-------------------------: | ------------------------------------------------- |
| name       | Text   |              ->             | Nome da nova caixa de correio                     |
| Resultados | Object | <- | Estado da operação de criação da caixa de correio |

<!-- END REF -->

#### Descrição

A função `.createBox()` <!-- REF #IMAPTransporterClass.createBox().Summary -->cria uma caixa de correio com o `name` fornecido<!-- END REF -->. Se o carácter separador hierárquico do servidor IMAP aparecer noutro lugar no nome da caixa de correio, o servidor IMAP criará os nomes dos pais necessários para criar a caixa de correio em questão.

Por outras palavras, uma tentativa de criar "Projectos/IMAP/Doc" num servidor em que "/" é o carácter separador hierárquico criará:

- Somente a caixa de correio "Doc" se "Projects" e "IMAP" já existirem.
- Caixas de correio "IMAP" e "Doc" se apenas "Projetos" já existir.
- Caixas de correio "Projects", "IMAP" e "Doc", se elas ainda não existirem.

No parâmetro `name`, passe o nome da nova caixa de correio.

**Objeto devolvido**

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

| Parâmetro  | Tipo       |                             | Descrição                                                                      |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------ |
| msgsIDs    | Collection |              ->             | Coleção de identificadores únicos de mensagens (strings)    |
| allMsgs    | Integer    |              ->             | `IMAP all`: todas as mensagens na caixa de correio selecionada |
| Resultados | Object     | <- | Estado da operação apagada                                                     |

<!-- END REF -->

#### Descrição

A função `.delete()` <!-- REF #IMAPTransporterClass.delete().Summary -->define o sinalizador "deleted" para as mensagens definidas em `msgsIDs` ou `allMsgs`<!-- END REF -->.

Pode passar:

- no parâmetro `msgsIDs`, uma coleção que contém as IDs exclusivas das mensagens específicas a serem excluídas, ou
- no parâmetro `allMsgs`, a constante `IMAP all` (inteiro) para excluir todas as mensagens da caixa de correio selecionada.

A execução desta função não remove realmente as mensagens. As mensagens com o sinalizador "delete" ainda podem ser encontradas pela função [.searchMails()](#searchmails). As mensagens sinalizadas são excluídas do servidor IMAP com a função [`.expunge()`](#expunge) ou selecionando outra caixa de correio ou quando o [objeto transportador](#imap-transporter-object) (criado com [IMAP New transporter](#imap-new-transporter)) é destruído.

**Objeto devolvido**

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                            |
| ---------- | ------ | :-------------------------: | ---------------------------------------------------- |
| name       | Text   |              ->             | Nome da caixa de correio a apagar                    |
| Resultados | Object | <- | Estado da operação de eliminação da caixa de correio |

<!-- END REF -->

#### Descrição

A função `.deleteBox()` <!-- REF #IMAPTransporterClass.deleteBox().Summary -->remove permanentemente a caixa de correio com o `name` fornecido do servidor IMAP<!-- END REF -->. A tentativa de apagar uma INBOX ou uma caixa de correio que não existe, gerará um erro.

No parâmetro `name`, passe o nome da caixa de correio a ser excluída.

> - A função não pode apagar uma caixa de correio que tenha caixas de correio para crianças se a caixa de correio dos pais tiver o atributo "\Noselect".
> - Todas as mensagens na caixa de correio eliminadas serão também eliminadas.
> - A capacidade de apagar uma caixa de correio depende do servidor de correio.

**Objeto devolvido**

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

If(OK=1)$options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// excluir caixa de correio
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

<!-- REF IMAPTransporterClass.expunge().Desc -->

## .expunge()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->

| Parâmetro  | Tipo   |                             | Descrição                     |
| ---------- | ------ | :-------------------------: | ----------------------------- |
| Resultados | Object | <- | Estado da operação de expurgo |

<!-- END REF -->

#### Descrição

A função `.expunge()` <!-- REF #IMAPTransporterClass.expunge().Summary -->remove todas as mensagens com o sinalizador "deleted" do servidor de e-mail IMAP.<!-- END REF --> O sinalizador "deleted" pode ser definido com os métodos [`.delete()`](#delete) ou [`.addFlags()`](#addflags).

**Objeto devolvido**

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

| Release | Mudanças          |
| ------- | ----------------- |
| 20      | *id* é retornado  |
| 18 R5   | *name* é opcional |
| 18 R4   | Adicionado        |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| Parâmetro  | Tipo   |                             | Descrição                     |
| ---------- | ------ | :-------------------------: | ----------------------------- |
| name       | Text   |              ->             | Nome da nova caixa de correio |
| Resultados | Object | <- | objecto boxInfo               |

<!-- END REF -->

#### Descrição

A função `.getBoxInfo()` <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->retorna um objeto `boxInfo` correspondente à maibox atual ou à caixa de correio *name*<!-- END REF -->. Essa função retorna as mesmas informações que [`.selectBox()`](#selectbox) sem alterar a caixa de correio atual.

No parâmetro opcional *name*, passe o nome da caixa de correio a ser acessada. O nome representa uma hierarquia inequívoca da esquerda para a direita com níveis separados por um carácter delimitador específico. O delimitador pode ser encontrado com a função [`.getDelimiter()`](#getdelimiter).

Se o *nome* da caixa de correio não for selecionável ou não existir, a função gera um erro e retorna **null**.

**Objeto devolvido**

O objeto `boxInfo` retornado contém as seguintes propriedades:

| Propriedade | Tipo   | Descrição                                                                                   |
| ----------- | ------ | ------------------------------------------------------------------------------------------- |
| name        | Text   | Nome da nova caixa de correio                                                               |
| mailCount   | Number | Número de mensagens na caixa de email                                                       |
| mailRecent  | Number | Número de mensagens com o marcador "recente" (indicando novas mensagens) |
| id          | text   | Parâmetros                                                                                  |
| mailUnseen  | Number | Número de mensagens marcadas como "unseen"                                                  |

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

| Release | Mudanças                           |
| ------- | ---------------------------------- |
| 18 R4   | Adicionado                         |
| 19      | Adicionar parâmetro `isSubscribed` |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->

| Parâmetro  | Tipo       |                             | Descrição                              |
| ---------- | ---------- | :-------------------------: | -------------------------------------- |
| parameters | Object     |              ->             | Parâmetros                             |
| Resultados | Collection | <- | Coleção de objetos da caixa de correio |

<!-- END REF -->

#### Descrição

A função `.getBoxList()` <!-- REF #IMAPTransporterClass.getBoxList().Summary -->retorna uma coleção de caixas de correio que descreve todas as caixas de correio disponíveis<!-- END REF -->. Esta função permite gerir localmente a lista de mensagens localizadas no servidor de correio IMAP.

No parâmetro opcional `parameters`, passe um objeto que contenha valores para filtrar as caixas de correio retornadas. Pode passar:

| Propriedade       | Tipo       | Descrição                                                                                                                                                                                                                 |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isSubscribed      | Parâmetros | <li>**True** para retornar apenas as caixas de correio subscritas</li><li> **False** para retornar todas as caixas de correio disponíveis</li>                                                                            |
| names             | Collection | Coleção de objetos contendo um atributo "name" ou coleção de textos contendo os nomes das caixas                                                                                                                          |
| withBoxProperties | Parâmetros | Se true (padrão): adiciona os atributos `selectable`, `inferior` e `interesting` ao objeto de resultado. Se for false, esses atributos serão omitidos. |
| withBoxInfo       | Parâmetros | O valor padrão é false. Se true, adiciona os atributos `mailCount`, `mailRecent` e `id` ao objeto resultado.                                                                              |

#### Resultados

Cada objecto da coleção devolvida contém as seguintes propriedades:

| Propriedade                                                                          | Tipo       | Descrição                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \[].name        | Text       | Nome da nova caixa de correio. Retornado se withBoxProperties=true ou withBoxInfo=true                                                                                                                                                                                                                                                                                           |
| \[].selectable  | Parâmetros | Indica se os direitos de acesso permitem ou não que a caixa de correio seja selecionada: <ul><li>true - a caixa de correio pode ser selecionada</li><li>false - a caixa de correio não pode ser selecionada</li></ul>	Retornado se withBoxProperties=true                                                                                                                        |
| \[].inferior    | Parâmetros | Indica se os direitos de acesso permitem ou não a criação de uma hierarquia inferior na caixa de correio: <ul><li>true - um nível inferior pode ser criado</li><li>false - um nível inferior não pode ser criado</li></ul>	Retornado se withBoxProperties=true                                                                                                                   |
| \[].interesting | Parâmetros | Indica se a caixa de correio foi marcada como "interessante" pelo servidor: <ul><li>true - A caixa de correio foi marcada como "interessante" pelo servidor. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>	Returned if withBoxProperties=true |
| [].mailCount     | Number     | Número de mensagens na caixa de entrada. Retornado se withBoxInfo=true                                                                                                                                                                                                                                                                                                           |
| [].mailRecent    | Number     | Número de mensagens marcadas como "recent" (indicando novas mensagens). Retornado se withBoxInfo=true                                                                                                                                                                                                                                                         |
| [].mailUnseen    | Number     | Número de mensagens marcadas como "unseen". Retornado se withBoxInfo=true                                                                                                                                                                                                                                                                                                        |
| [].id            | Text       | Identificador exclusivo da caixa de correio. Retornado se withBoxInfo=true                                                                                                                                                                                                                                                                                                       |

Se a conta não contiver quaisquer caixas de correio, é devolvida uma colecção vazia.

> - Se não houver uma conexão aberta, `.getBoxList()` abrirá uma conexão.
> - Se a conexão não tiver sido usada desde o atraso de conexão designado (consulte `IMAP New transporter`), a função `.checkConnection( )` será automaticamente chamada.

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

| Parâmetro  | Tipo |                             | Descrição                           |
| ---------- | ---- | :-------------------------: | ----------------------------------- |
| Resultados | Text | <- | Caractere delimitador de hierarquia |

<!-- END REF -->

#### Descrição

A função `.getDelimiter()` <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->retorna o caractere usado para delimitar os níveis de hierarquia no nome da caixa de correio<!-- END REF -->.

O delimitador é um caractere a que se pode usar para:

- criar caixas de correio de nível inferior
- pesquisar hierarquias de nível mais alto ou mais baixo dentro das caixa de correio

#### Resultados

Carácter delimitador do nome da caixa de correio.

> - Se não houver uma conexão aberta, `.getDelimiter()` abrirá uma conexão.
> - Se a conexão não tiver sido usada desde o [atraso de conexão designado](#checkconnectiondelay), a função [`.checkConnection()`](#checkconnection) será automaticamente chamada.

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

| Parâmetro  | Tipo    |                             | Descrição                                        |
| ---------- | ------- | :-------------------------: | ------------------------------------------------ |
| msgNumber  | Integer |              ->             | Número sequencial da mensagem                    |
| msgID      | Text    |              ->             | ID única da mensagem                             |
| options    | Object  |              ->             | Instruções de tratamento de mensagens            |
| Resultados | Object  | <- | [Objeto email](EmailObjectClass.md#email-object) |

<!-- END REF -->

#### Descrição

A função `.getMail()` <!-- REF #IMAPTransporterClass.getMail().Summary -->retorna o objeto `Email` correspondente ao *msgNumber* ou *msgID* na caixa de correio designada pelo `IMAP_transporter`<!-- END REF -->. Essa função permite manejar localmente os conteúdos de email.

No primeiro parâmetro, pode passar qualquer um dos dois:

- *msgNumber*, um valor *inteiro* que indica o número de sequência da mensagem a ser recuperada ou
- *msgID*, um valor de *texto* que indica a ID exclusiva da mensagem a ser recuperada.

O parâmetro *options* opcional permite que você passe um objeto definindo instruções adicionais para manipular a mensagem. As seguintes propriedades estão disponíveis:

| Propriedade | Tipo    | Descrição                                                                                                                                                                                 |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen  | boolean | Se Verdadeiro, a mensagem é marcada como "visto" na caixa de correio. Se falso, a mensagem não é marcada como "visto". Valor padrão: True |
| withBody    | boolean | Pass True para devolver o corpo da mensagem. Se falso, apenas o cabeçalho da mensagem é devolvido. Valor padrão: True                     |

> - A função gera um erro e retorna **Null** se *msgID* designar uma mensagem inexistente,
> - Se nenhuma caixa de correio for selecionada com a função [`.selectBox()`](#selectbox), será gerado um erro,
> - Se não houver uma conexão aberta, `.getMail()` abrirá uma conexão com a última caixa de correio especificada com [`.selectBox()`](#selectbox)\`.

#### Resultados

`.getMail()` retorna um objeto [`Email`] (EmailObjectClass.md#email-object) com as seguintes propriedades IMAP específicas: *id*, *receivedAt* e *size*.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                                                                                                                                                                                                                                                      |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids        | Collection |              ->             | Colecção de identificação da mensagem                                                                                                                                                                                                                                                          |
| startMsg   | Integer    |              ->             | Número sequencial da primeira mensagem                                                                                                                                                                                                                                                         |
| endMsg     | Integer    |              ->             | Número sequencial da última mensagem                                                                                                                                                                                                                                                           |
| options    | Object     |              ->             | Instruções de tratamento de mensagens                                                                                                                                                                                                                                                          |
| Resultados | Object     | <- | Objeto contendo:<br/><ul><li>uma coleção de [objetos de e-mail] (EmailObjectClass.md#email-object) e</li><li>uma coleção de IDs ou números para mensagens ausentes, se houver</li></ul> |

<!-- END REF -->

#### Descrição

A função `.getMails()` <!-- REF #IMAPTransporterClass.getMails().Summary -->retorna um objeto que contém uma coleção de objetos `Email`<!-- END REF -->.

**Primeira sintaxe:**

***.getMails( ids { ; options } ) -> result***

A primeira sintaxe permite recuperar mensagens com base nas suas identificações.

No parâmetro *ids*, passe uma coleção de IDs para as mensagens a serem retornadas. Você pode obter as identificações com [`.getMail()`](#getmail).

O parâmetro opcional *options* permite que você defina as partes das mensagens a serem retornadas. Consulte a tabela **Opções** abaixo para obter uma descrição das propriedades disponíveis.

**Segunda sintaxe:**

***.getMails( startMsg ; endMsg { ; options } ) -> result***

A segunda sintaxe permite recuperar mensagens com base num intervalo sequencial. Os valores passados representam a posição das mensagens na caixa de correio.

No parâmetro *startMsg*, passe um valor *inteiro* correspondente ao número da primeira mensagem em um intervalo sequencial. Se você passar um número negativo (*startMsg* <= 0), a primeira mensagem da caixa de correio será usada como o início da sequência.

No parâmetro *endMsg*, passe um valor *inteiro* correspondente ao número da última mensagem a ser incluída num intervalo sequencial. Se você passar um número negativo (*endMsg* <= 0), a última mensagem da caixa de correio será usada como o fim da sequência.

O parâmetro opcional *options* permite que você defina as partes das mensagens a serem retornadas.

**Options**

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                           |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen  | Parâmetros | Se Verdadeiro, as mensagens especificadas são marcadas como "vistas" na caixa de correio. Se falso, as mensagens não são marcadas como "vistas". Valor padrão: True |
| withBody    | Parâmetros | Pass True para devolver o corpo das mensagens especificadas. Se falso, apenas os cabeçalhos das mensagens são devolvidos. Valor padrão: True                        |

> - Se nenhuma caixa de correio for selecionada com o comando [`.selectBox()`](#selectbox), será gerado um erro.
> - Se não houver uma conexão aberta, `.getMails()` abrirá uma conexão com a última caixa de correio especificada com [`.selectBox()`](#selectbox).

#### Resultados

`.getMails()` retorna um objeto que contém as seguintes coleções:

| Propriedade | Tipo       | Descrição                                                                                                                                                                                                                                                                                                              |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lista       | Collection | Coleção de objetos [`Email`] (EmailObjectClass.md#email-object). Se não forem encontrados objetos e-mail, uma coleção vazia é devolvida.                                                        |
| notFound    | Collection | Coleção de:<br/><ul><li>primeira sintaxe - IDs de mensagens passadas anteriormente que não existem</li><li>segunda sintaxe - números de sequência de mensagens entre startMsg e endMsg que não existem</li></ul>Uma coleção vazia é retornada se todas as mensagens forem encontradas. |

#### Exemplo

Se quiser recuperar os 20 e-mails mais recentes sem alterar o seu estatuto de "visto":

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatório
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //criar transportador
 $transporter:=IMAP New transporter($server)

  //selecionar caixa de correio
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
  // recupera os cabeçalhos das últimas 20 mensagens sem marcá-las como lidas
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

| Parâmetro  | Tipo       |                             | Descrição                                                                                                                                 |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer    |              ->             | Número sequencial da mensagem                                                                                                             |
| msgID      | Text       |              ->             | ID única da mensagem                                                                                                                      |
| updateSeen | Parâmetros |              ->             | Se Verdadeiro, a mensagem é marcada "visto" na caixa de correio. Se Falso, a mensagem é deixada intocada. |
| Resultados | BLOB       | <- | Blob da string MIME retornado do servidor mail                                                                                            |

<!-- END REF -->

#### Descrição

A função `.getMIMEAsBlob()` <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->retorna um BLOB contendo o conteúdo MIME da mensagem correspondente ao *msgNumber* ou *msgID* na caixa de correio designada pelo `IMAP_transporter`<!-- END REF -->.

No primeiro parâmetro, pode passar qualquer um dos dois:

- *msgNumber*, um valor *inteiro* que indica o número de sequência da mensagem a ser recuperada ou
- *msgID*, um valor de *texto* que indica a ID exclusiva da mensagem a ser recuperada.

O parâmetro opcional *updateSeen* permite que você especifique se a mensagem está marcada como "vista" na caixa de correio. Pode passar:

- **True** - para marcar a mensagem como "vista" (indicando que a mensagem foi lida)
- **False** - para deixar o status "visto" da mensagem inalterado

> * A função retorna um BLOB vazio se *msgNumber* ou msgID\* designar uma mensagem inexistente,
> * Se nenhuma caixa de correio for selecionada com o comando [`.selectBox()`](#selectbox), será gerado um erro,
> * Se não houver uma conexão aberta, `.getMIMEAsBlob()` abrirá uma conexão com a última caixa de correio especificada com `.selectBox()`.

#### Resultados

`.getMIMEAsBlob()` retorna um `BLOB` que pode ser arquivado em um banco de dados ou convertido a um objeto [`Email`](EmailObjectClass.md#email-object) com o comando `MAIL Convert from MIME`.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->

| Parâmetro      | Tipo       |                             | Descrição                                                                      |
| -------------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------ |
| msgsIDs        | Collection |              ->             | Coleção de identificadores únicos de mensagens (strings)    |
| allMsgs        | Integer    |              ->             | `IMAP all`: todas as mensagens na caixa de correio selecionada |
| destinationBox | Text       |              ->             | Caixa de correio para receber mensagens movimentadas                           |
| Resultados     | Object     | <- | Estado da operação de mudança                                                  |

<!-- END REF -->

#### Descrição

A função `.move()` <!-- REF #IMAPTransporterClass.move().Summary -->move as mensagens definidas por *msgsIDs* ou *allMsgs* para *destinationBox* no servidor IMAP<!-- END REF -->.

Pode passar:

- no parâmetro *msgsIDs*, uma coleção contendo as IDs únicas das mensagens específicas a mover, ou
- no parâmetro *allMsgs*, a constante `IMAP all` (número inteiro) para mover todas as mensagens na caixa de correio selecionada.

O parâmetro destinationBox permite-lhe passar um valor de texto com o nome da caixa de correio onde as cópias das mensagens serão colocadas.

> Esta função só é suportada por servidores IMAP em conformidade com o RFC [8474](https://tools.ietf.org/html/rfc8474).

**Objeto devolvido**

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

Para mover todas as mensagens na mailbox atual:

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R5   | Adicionado |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->

| Parâmetro  | Tipo       |                             | Descrição                              |
| ---------- | ---------- | :-------------------------: | -------------------------------------- |
| startMsg   | Integer    |              ->             | Número sequencial da primeira mensagem |
| endMsg     | Integer    |              ->             | Número sequencial da última mensagem   |
| Resultados | Collection | <- | Colecção de identificações únicas      |

<!-- END REF -->

#### Descrição

A função `.numToID()` <!-- REF #IMAPTransporterClass.numToID().Summary -->converte os números de sequência em IDs exclusivos do IMAP para as mensagens no intervalo sequencial designado por *startMsg* e *endMsg*<!-- END REF --> na caixa de correio selecionada no momento.

No parâmetro *startMsg*, passe um valor inteiro correspondente ao número da primeira mensagem em um intervalo sequencial. Se você passar um número negativo (*startMsg* <= 0), a primeira mensagem da caixa de correio será usada como o início da sequência.

No parâmetro *endMsg*, passe um valor inteiro correspondente ao número da última mensagem a ser incluída num intervalo sequencial. Se você passar um número negativo (*endMsg* <= 0), a última mensagem da caixa de correio será usada como o fim da sequência.

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

<details><summary>História</summary>

| Release | Mudanças                              |
| ------- | ------------------------------------- |
| 20      | Suporta palavras-chave personalizadas |
| 18 R6   | Adicionado                            |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                                                                                                                                                                                                                                   |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |              ->             | Coleção de strings: IDs únicos de mensagens (texto)<br/>Texto: ID único de uma mensagem<br/>Longint (todos IMAP): Todas as mensagens na caixa de correio seleccionada |
| keywords   | Object     |              ->             | Flags de palavras-chave a remover                                                                                                                                                                                                                           |
| Resultados | Object     | <- | Estado da operação removeFlags                                                                                                                                                                                                                              |

<!-- END REF -->

#### Descrição

A função `.removeFlags()` <!-- REF #IMAPTransporterClass.removeFlags().Summary -->remove os sinalizadores dos `msgIDs` para as `keywords` especificadas<!-- END REF -->.

No parâmetro `msgIDs`, você pode passar qualquer um deles:

- uma *colecção* contendo as identificações únicas de mensagens específicas ou
- o ID único (*texto*) de uma mensagem ou
- a seguinte constante (*longint*) para todas as mensagens na caixa de correio selecionada:

| Parâmetros | Valor | Comentário                                                     |
| ---------- | ----- | -------------------------------------------------------------- |
| IMAP all   | 1     | Seleccione todas as mensagens na caixa de correio seleccionada |

O parâmetro `keywords` permite que você defina os sinalizadores a serem removidos dos `msgIDs`. Pode passar qualquer uma das seguintes palavras-chave:

| Parâmetro       | Tipo       | Descrição                                          |
| --------------- | ---------- | -------------------------------------------------- |
| $draft          | Parâmetros | True para remover o flag "draft" na mensagem       |
| $seen           | Parâmetros | True para remover a flag "seen" na mensagem        |
| $flagged        | Parâmetros | True para remover a flag "flagged" na mensagem     |
| $answered       | Parâmetros | True para remover a flag "answered" na mensagem    |
| $deleted        | Parâmetros | True para remover a flag "deleted" na mensagem     |
| `<custom flag>` | Parâmetros | True para remover a flag personalizada na mensagem |

Consulte [.addFlags()](#addflags) para obter mais informações sobre sinalizadores personalizados.

> - Para que uma palavra-chave seja tida em conta, tem de ser true.

**Objeto devolvido**

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

| Parâmetro   | Tipo   |                             | Descrição                          |
| ----------- | ------ | :-------------------------: | ---------------------------------- |
| currentName | Text   |              ->             | Nome da caixa de correio actual    |
| newName     | Text   |              ->             | Nome da nova caixa de correio      |
| Resultados  | Object | <- | Estado da operação de renomeamento |

<!-- END REF -->

#### Descrição

A função `.renameBox()` <!-- REF #IMAPTransporterClass.renameBox().Summary -->altera o nome de uma caixa de correio no servidor IMAP<!-- END REF -->. Tentar mudar o nome de uma caixa de correio de um nome de caixa de correio que não existe ou para um nome de caixa de correio que já existe irá gerar um erro.

No parâmetro `currentName`, passe o nome da caixa de correio a ser renomeada.

Passe o novo nome da caixa de correio no parâmetro `newName`.

**Objeto devolvido**

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

| Parâmetro      | Tipo       |                             | Descrição                       |
| -------------- | ---------- | :-------------------------: | ------------------------------- |
| searchCriteria | Text       |              ->             | Critérios de pesquisa           |
| Resultados     | Collection | <- | Coleção de números de mensagens |

<!-- END REF -->

#### Descrição

> Essa função é baseada na especificação do [protocolo IMAP] (https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

A função `.searchMails()` <!-- REF #IMAPTransporterClass.searchMails().Summary -->procura por mensagens que correspondam aos *searchCriteria* fornecidos na caixa de correio atual<!-- END REF -->. O *searchCriteria* consiste em uma ou mais chaves de pesquisa.

*searchCriteria* é um parâmetro de texto que lista uma ou mais chaves de pesquisa (consulte [Authorized search-keys](#authorized-search-keys) abaixo) associadas ou não a valores a serem procurados. Uma chave de pesquisa pode ser um único ou vários itens. Por exemplo:

```
SearchKey1 = FLAGGED SearchKey2 = NOT FLAGGED SearchKey3 = FLAGGED DRAFT
```

> A correspondência não é normalmente sensível a maiúsculas e minúsculas

- Se o *searchCriteria* for uma cadeia de caracteres nula, a pesquisa será equivalente a um "seleccionar tudo".
- Se o *searchCriteria* incluir várias chaves de pesquisa, o resultado será a interseção (função AND) de todas as mensagens que correspondem a essas chaves.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... devolve todas as mensagens com o conjunto de bandeiras sinalizadas E enviadas por Smith.

- Você pode usar os operadores **OR** ou **NOT** da seguinte forma:

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

... devolve mensagem cujo cabeçalho de tipo de conteúdo contém "Mixed" e não contém "Text".

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... retorna mensagem cujo cabeçalho do tipo de conteúdo contém " e " e cujo cabeçalho do tipo de conteúdo não contém " o " e cujo cabeçalho do tipo de conteúdo não é " Mixed ".

No que diz respeito aos dois últimos exemplos, note que o resultado da pesquisa é diferente quando se remove os parênteses da primeira lista de chaves de pesquisa.

- A *searchCriteria* pode incluir a especificação opcional \[CHARSET]. Esta consiste na palavra "CHARSET" seguida de uma palavra registada \[CHARSET] (US ASCII, ISO-8859). Indica o conjunto de caracteres da string *searchCriteria*. Portanto, você deve converter a cadeia de caracteres *searchCriteria* no conjunto de caracteres especificado se usar a especificação \[CHARSET] (consulte os comandos `CONVERT FROM TEXT` ou `Convert to text`).
  Como padrão, os códigos 4D em Quotable Printable the searchCriteria string se conter caracteres estendidos

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... significa que o critério de pesquisa utiliza o iso-8859 charset e o servidor terá de converter o critério de pesquisa antes de efectuar a pesquisa, se necessário.

#### Tipos de valores de pesquisa

As chaves de pesquisa podem solicitar o valor a pesquisar:

- **Chaves de pesquisa com um valor de data**: a data é uma cadeia de caracteres que deve ser formatada da seguinte forma: *date-day+"-"+date-month+"-"+date-year* em que date-day indica o número do dia do mês (máximo de 2 caracteres), date-month indica o nome do mês (jan/fev/mar/abr/mai/jun/jul/ago/set/out/dez) e date-year indica o ano (4 caracteres).
  Exemplo: `searchCriteria = SENTBEFORE 1-Feb-2020` (uma data geralmente não precisa ser colocada entre aspas, pois não contém nenhum caractere especial)

- **Chaves de pesquisa com um valor de cadeia**: a cadeia pode conter qualquer carácter e deve ser citada. Se a string não conter quaisquer caracteres especiais, como o carácter espacial, por exemplo, não precisa de ser citada. A citação de tais strings assegurará que o seu valor de strings será interpretado correctamente.
  Exemplo: `searchCriteria = FROM "SMITH"`
  Para todas as chaves de pesquisa que usam cadeias de caracteres, uma mensagem corresponde à chave se a cadeia de caracteres for uma subcadeia do campo. A correspondência não é sensível a maiúsculas e minúsculas.

- **Pesquisa-chaves com um valor de nome de campo**: o nome de campo é o nome de um campo de cabeçalho.
  Exemplo: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys com um valor de sinalizador**: o sinalizador pode aceitar uma ou várias palavras-chave (incluindo sinalizadores padrão), separadas por espaços.
  Exemplo: `searchCriteria = KEYWORD \Flagged \Draft`

- **Pesquisa-chaves com um valor de conjunto de mensagens**: identifica um conjunto de mensagens. Para números de sequência de mensagens, estes são números consecutivos de 1 até ao número total de mensagens na caixa de correio. Uma vírgula delimita números individuais; uma vírgula delimita entre dois números, inclusive.
  Exemplos:
  `2,4:7,9,12:*` é `2,4,5,6,7,9,12,13,14,15` para uma caixa postal com 15 mensagens.
  `searchCriteria = 1:5 ANSWERED` pesquisa na seleção de mensagens do número de sequência de mensagens 1 a 5 para mensagens que têm o sinalizador \Answered definido.
  `searchCriteria= 2,4 ANSWERED` pesquisa na seleção de mensagens (números de mensagem 2 e 4) as mensagens que têm o sinalizador \Answered definido.

#### Chaves de pesquisa autorizadas

**ALL**: Todas as mensagens na caixa de correio.\
**ANSWERED**: mensagens com o indicador \Answered ativo.\
**UNANSWERED**: mensagens que não têm o sinalizador indicador \Answered definido.\
**DELETED**: mensagens com o sinalizador \Deleted ativado.\
**UNDELETED**: Mensagens que não possuem o indicador \Deleted ativado.\
**DRAFT**: mensagens com o indicador \Draft ativo.\
**UNDRAFT**: mensagens que não têm o sinalizador \Draft ativado.\
**FLAGGED**: mensagens com o indicador \Flagged ativo.\
**UNFLAGGED**: mensagens que não têm o sinalizador \Flagged ativado.\
**RECENT**: mensagens que possuem o indicador \Recent ativado.\
**OLD**: mensagens que não possuem o indicador \Recent definido.\
**SEEN**: mensagens que têm o sinalizador \Seen ativo.\
**UNSEEN**: Mensagens que não possuem o indicador \Seen definido.\
**NEW**: mensagens que tenham o indicador \Recent definido, mas não o indicador\Seen. Isso é funcionalmente equivalente a "(RECENT UNSEEN)".\
**KEYWORD *flag***: mensagens com o conjunto de palavras-chave especificado.\
**UNKEYWORD *flag***: mensagens que não têm a palavra-chave especificada.\
**BEFORE *date***: mensagens cuja data interna é anterior à data especificada.\
**ON *date***: mensagens cuja data interna está dentro da data especificada.\
**SINCE *date***: mensagens cuja data interna está dentro da data especificada ou é posterior a ela.\
**SENTBEFORE *data***: mensagens cujo cabeçalho de data é anterior à data especificada.\
**SENTON *date***: mensagens cujo cabeçalho de Data está dentro da data especificada.\
**SENTSINCE *data***: mensagens cujo cabeçalho de data está dentro ou posterior à data especificada.\
**TO *string***: mensagens que contêm a string especificada no cabeçalho TO.\
**FROM *string***: mensagens que contêm a string especificada no cabeçalho FROM.\
**CC *string***: mensagens que contenham a seqüência de caracteres especificada no cabeçalho CC.\
**BCC *string***: mensagens que contêm a string especificada no cabeçalho BCC.\
**SUBJECT *string***: mensagens que contêm a string especificada no cabeçalho Subject.\
**BODY *string***: mensagens que contêm a string especificada no corpo da mensagem.\
**TEXT *string***: mensagens que contêm a string especificada no cabeçalho ou no corpo da mensagem.\
**HEADER *nome-do-campo* *string***: mensagens que possuem um cabeçalho com o nome do campo especificado e que contêm a string especificada no corpo-campo.\
**UID *message-UID***: mensagens com identificadores exclusivos correspondentes ao identificador exclusivo especificado.\
**LARGER *n***: mensagens com tamanho maior do que o número de bytes especificado.\
**SMALLER *n***: mensagens com tamanho menor do que o número de bytes especificado.\
**NOT *chave de pesquisa***: mensagens que não correspondem à chave de pesquisa especificada.\
**OR *search-key1* *search-key2***: mensagens que correspondem a uma das chaves de pesquisa.

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>História</summary>

| Release | Mudanças                                       |
| ------- | ---------------------------------------------- |
| 20      | *id*, *flags*, *permanentFlags* são retornados |
| 18 R4   | Adicionado                                     |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| Parâmetro  | Tipo    |                             | Descrição                           |
| ---------- | ------- | :-------------------------: | ----------------------------------- |
| name       | Text    |              ->             | Nome da nova caixa de correio       |
| state      | Integer |              ->             | Estado de acesso à caixa de correio |
| Resultados | Object  | <- | objecto boxInfo                     |

<!-- END REF -->

#### Descrição

A função `.selectBox()` <!-- REF #IMAPTransporterClass.selectBox().Summary -->seleciona a caixa de correio *name* como a caixa de correio atual<!-- END REF -->. Essa função permite que recupere informação sobre o mailbox.

> Para obter as informações de uma caixa de correio sem alterar a caixa de correio actual, utilize [`.getBoxInfo()`](#getboxinfo).

No parâmetro *name*, passar o nome da caixa de correio para aceder. O nome representa uma hierarquia inequívoca da esquerda para a direita com níveis separados por um carácter delimitador específico. O delimitador pode ser encontrado com a função [`.getDelimiter()`](#getdelimiter).

O parâmetro opcional *state* define o tipo de acesso à caixa de correio. Os valores possíveis são:

| Parâmetros            | Valor | Comentário                                                                                                                                                                                                                                                             |
| --------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1     | A caixa de correio seleccionada é acedida com privilégios apenas de leitura. As mensagens com uma flag "recente" (indicando novas mensagens) permanecem inalteradas.                                                |
| IMAP read write state | 0     | A caixa de correio seleccionada é acedida com privilégios de leitura e escrita. As mensagens são consideradas "vistas" e perdem o marcador "recente" (indicando novas mensagens). (Valor padrão) |

> - A função gera um erro e retorna **Null** se *name* designar uma caixa de correio inexistente.
> - Se não houver uma conexão aberta, `.selectBox()` abrirá uma conexão.
> - Se a conexão não tiver sido usada desde o atraso de conexão designado (veja `IMAP New transporter`), a função [`.checkConnection()`](#checkconnection) será automaticamente chamada.

**Objeto devolvido**

O objeto `boxInfo` retornado contém as seguintes propriedades:

| Propriedade    | Tipo   | Descrição                                                                                                                                                   |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nome da nova caixa de correio                                                                                                                               |
| mailCount      | number | Número de mensagens na caixa de email                                                                                                                       |
| mailRecent     | number | Número de mensagens com a flag "recent"                                                                                                                     |
| id             | text   | Parâmetros                                                                                                                                                  |
| flags          | text   | Lista de flags actualmente utilizadas para a caixa de correio, separadas por espaços                                                                        |
| permanentFlags | text   | Lista de marcadores que o cliente pode mudar permanentemente (excepto a \Recent, que é gerida pelo servidor IMAP), separadas por espaços |

:::info

Se a cadeia de caracteres `permanentFlags` incluir o sinalizador especial \*, isso significa que o servidor oferece suporte a [sinalizadores personalizados](#addflags).

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

| Parâmetro  | Tipo   |                             | Descrição                        |
| ---------- | ------ | :-------------------------: | -------------------------------- |
| name       | Text   |              ->             | Nome da nova caixa de correio    |
| Resultados | Object | <- | Estado da operação de subscrição |

<!-- END REF -->

#### Descrição

A função `.subscribe()` <!-- REF #IMAPTransporterClass.subscribe().Summary -->permite adicionar a caixa de correio especificada ao conjunto de caixas de correio "subscritas" do servidor IMAP<!-- END REF -->. Como tal, pode optar por restringir uma grande lista de caixas de correio disponíveis, subscrevendo as que normalmente deseja ver.

No parâmetro `nome`, passe o nome da caixa de correio para adicionar (inscrever) para suas caixas de correio "inscritas".

**Objeto devolvido**

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

| Parâmetro  | Tipo   |                             | Descrição                      |
| ---------- | ------ | :-------------------------: | ------------------------------ |
| name       | Text   |              ->             | Nome da nova caixa de correio  |
| Resultados | Object | <- | Estado da operação unsubscribe |

<!-- END REF -->

#### Descrição

A função `.unsubscribe()` <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->remove uma caixa de correio de um conjunto de caixas de correio inscritas<!-- END REF -->. Isto permite reduzir o número de caixas de correio que normalmente se vêem.

No parâmetro `name`, passe o nome da caixa de correio para remover (cancelar a subscrição) das suas caixas de correio activas.

**Objeto devolvido**

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
