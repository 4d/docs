---
id: POP3TransporterClass
title: POP3Transporter
---

O `POP3Transporter` permite recuperar mensagens de um servidor de email POP3.

### Objeto POP3 transporter

Os objetos POP3 Transporter são instanciados com o comando [POP3 New transporter](#pop3-new-transporter). Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|


<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #_command_.POP3 New transporter.Params -->
| Parâmetro  | Tipo               |    | Descrição                                                                      |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | object             | -> | Informação de servidor de correio                                              |
| Resultados | 4D.POP3Transporter | <- | [POP3 transporter object](#pop3-transporter-object)|<!-- END REF -->


|


#### Descrição

Comando `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary -->configura uma nova ligação POP3<!-- END REF -->de acordo com o parametro *server* e retorna um novo objeto*[POP3 transporter](#pop3-transporter-object)*. O objeto transporter retornado vai geralmente ser usado para receber emails.

No parâmetro *server*, passe um objeto contendo as propriedades abaixo:

| *server*                                                                                                                                                                                                                                                                                                                                          | Valor padrão (se omitido)                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                             |
| .**accessTokenOAuth2**: Text String representing OAuth 2 authorization credentials. Usado apenas com OAUTH2 `authenticationMode`. Se `accessTokenOAuth2` for utilizado mas `authenticationMode` for omitido, é utilizado o protocolo OAuth 2 (se permitido pelo servidor). Não devolvido no objecto *[SMTP transporter](#smtptransporterobject)*. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obrigatório*                                                     |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| nenhum                                                            |
| **.password** : Text  User password for authentication on the server. Não devolvido no objecto *[SMTP transporter](#smtptransporterobject)*.                                                                                                                                                                                                      | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                               |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| nenhum                                                            |

#### Resultados

A função retorna um objeto [**POP3 transporter**](#pop3-transporter-object). Todas as propriedades retornadas são **apenas leitura**.
> A conexão POP3 é fechada automaticamente quando o objeto transportador for destruído.

#### Exemplo

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obrigatório
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //histórico para salvar na pasta Logs

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->

## 4D.POP3Transporter.new()

<!-- REF #4D.POP3Transporter.new().Syntax -->**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #4D.POP3Transporter.new().Params -->
| Parâmetro  | Tipo               |    | Descrição                                                                      |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Informação de servidor de correio                                              |
| Resultados | 4D.POP3Transporter | <- | [POP3 transporter object](#pop3-transporter-object)|<!-- END REF -->

|

#### Descrição

A função `4D.POP3Transporter.new()` <!-- REF #4D.POP3Transporter.new().Summary -->cria e devolve um novo objecto do tipo `4D.POP3Transporter`<!-- END REF -->. É idêntico ao comando (atalho) [`POP3 New transporter`](#pop3-new-transporter).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModePOP3.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

#### Exemplo

```4d
 var $pw :  Text
 var $options : Object
 $options:=New object

 $pw:=Request("Please enter your password:")
 if(OK=1)
    $options.host:="pop3.gmail.com"

    $options.user:="test@gmail.com"
    $options.password:=$pw

    $transporter:=POP3 New transporter($options)

    $status:=$transporter.checkConnection()
    If($status.success)
       ALERT("POP3 connection check successful!")
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

## .delete()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->**.delete**( *msgNumber* : Integer )<!-- END REF -->


<!-- REF #POP3TransporterClass.delete().Params -->
| Parâmetro | Tipo    |    | Descrição                                                         |
| --------- | ------- |:--:| ----------------------------------------------------------------- |
| msgNumber | Integer | -> | Número da mensagem que vai ser apagada|<!-- END REF -->

|

##### Descrição

A função `.delete( )` <!-- REF #POP3TransporterClass.delete().Summary -->assinala o e-mail *msgNumber* para eliminação do servidor POP3<!-- END REF -->.

No parâmetro *msgNumber*, passe o número do email a apagar. O número é retornado na propriedade número pelo método [`.getMailInfoList()`](#getmailinfolist).

Executar esse método não remove de verdade qualquer email. O email marcado será apagado do servidor POP3 apenas quando o objeto`POP3_transporter` (criado com `POP3 New transporter`) for destruído. A marcação pode ser removida com o método `.undeleteAll()`.
> Se a sessão atual terminar de forma inesperada e perder a conexão (por exemplo timeout, falha de rede, etc), uma mensagem de erro é gerada e mensagens marcadas para serem apagadas continuam no servidor POP3.

##### Exemplo

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Marca seu email a "to be deleted at the end of the session"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Força que o fechamento da sessão apague os emails marcados para serem eliminados
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //eliminação confirmada
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //remove marcas de eliiminação
 End if
```

## .getBoxInfo()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->**.getBoxInfo()** : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| Parâmetro  | Tipo   |    | Descrição                                  |
| ---------- | ------ |:--:| ------------------------------------------ |
| Resultados | Object | <- | objecto boxInfo|<!-- END REF -->

|

##### Descrição

A função `.getBoxInfo()` <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->devolve uma `boxInfo` objecto correspondente à caixa de correio designada pelo transportador [`POP3`](#pop3-transporter-object)<!-- END REF -->. Essa função permite que recupere informação sobre o mailbox.

O objeto `boxInfo` retornado contém as funcionalidades abaixo:

| Propriedade | Tipo   | Descrição                             |
| ----------- | ------ | ------------------------------------- |
| mailCount   | Number | Número de mensagens na caixa de email |
| size        | Number | Tamanho da mensagem em bytes          |

##### Exemplo

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" //Obrigatório
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

  //mailbox informação
 $boxInfo:=$transporter.getBoxInfo()
 ALERT("The mailbox contains "+String($boxInfo.mailCount)+" messages.")
```

## .getMail()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMail().Params -->
| Parâmetro  | Tipo    |    | Descrição                                                                    |
| ---------- | ------- |:--:| ---------------------------------------------------------------------------- |
| msgNumber  | Integer | -> | Número da mensagem que na lista                                              |
| Resultados | Object  | <- | [Email objecto](EmailObjectClass.md#email-object)|<!-- END REF -->

|

##### Descrição

A função `.getMail()` <!-- REF #POP3TransporterClass.getMail().Summary -->devolve o `Email` objeto correspondente ao *msgNumber* na caixa de correio designada pelo transportador [`POP3`](#pop3-transporter-object)<!-- END REF -->. Essa função permite manejar localmente os conteúdos de email.

Passe em *msgNumber* o número da mensagem a recuperar. Este número é retornado na propriedade number pela função [`.getMailInfoList()`](#getmailinfolist).

O método retorna Null se:

* *msgNumber* determina uma mensagem não existente,
* a mensagem foi marcada para apagar usando `.delete( )`.

**Objeto devolvido**

`.getMail()` devolve um [objecto `Email`](EmailObjectClass.md#email-object).

##### Exemplo

Se quiser saber o emissário do primeiro email da mailbox:

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```

## .getMailInfo()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| Parâmetro  | Tipo    |    | Descrição                                  |
| ---------- | ------- |:--:| ------------------------------------------ |
| msgNumber  | Integer | -> | Número da mensagem que na lista            |
| Resultados | Object  | <- | mailInfo object|<!-- END REF -->

|

##### Descrição

A função `.getMailInfo()` <!-- REF #POP3TransporterClass.getMailInfo().Summary -->devolve o `Email` objeto correspondente ao *msgNumber* na caixa de correio designada pelo transportador [`POP3`](#pop3-transporter-object)<!-- END REF -->. Essa função permite que recupere informação sobre o email.

Passe em *msgNumber* o número da mensagem a recuperar. O número é retornado na propriedade número pelo método [`.getMailInfoList()`](#getmailinfolist).

O objeto `mailInfo` retornado contém as funcionalidades abaixo:

| Propriedade | Tipo   | Descrição                    |
| ----------- | ------ | ---------------------------- |
| size        | Number | Tamanho da mensagem em bytes |
| id          | Text   | ID única da mensagem         |

O método retorna **Null** se:

* *msgNumber* determina uma mensagem não existente,
* a mensagem foi marcada para apagar usando `.delete( )`.

##### Exemplo

```4d
 var $server; $mailInfo : Object
 var $mailNumber : Integer

 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

  //message info
 $mailInfo:=$transporter.getMailInfo(1) //get the first mail
 If($mailInfo #Null)
    ALERT("First mail size is:"+String($mailInfo.size)+" bytes.")
 End if
 End if
 End if
```

## .getMailInfoList()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->**.getMailInfoList()** : Collection<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| Parâmetro  | Tipo       |    | Descrição                                                  |
| ---------- | ---------- |:--:| ---------------------------------------------------------- |
| Resultados | Collection | <- | Colecção de objectos `mailInfo`|<!-- END REF -->

|

##### Descrição

A função `.getMailInfoList()` <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->devolve uma coleção de `mailInfo` objectos que descrevem todas as mensagens na caixa de correio designada pelo transportador [`POP3`](#pop3-transporter-object)<!-- END REF -->. Essa função permite gerenciar localmente a lista de mensagens localizadas no servidor POP3.

Cada objeto `mailInfo` na coleção retornada contém as propriedades abaixo:

| Propriedade  | Tipo   | Descrição                                                      |
| ------------ | ------ | -------------------------------------------------------------- |
| \[ ].size   | Number | Tamanho da mensagem em bytes                                   |
| \[ ].number | Number | Número da mensagem                                             |
| \[ ].id     | Text   | ID único da mensagem (útil se armazenar a mensagem localmente) |

Se a mailbox não conter uma mensagem, uma coleção vazia é retornada.

#### número e propriedades ID

*number* é o número de uma mensagem no mailbox no momento em que `POP3_transporter` for criado. A propriedade *number* não é um valor estático em relação a qualquer mensagem específica e vai mudar de sessão a sessão dependendo de sua relação com outras mensagens no mailibox na hora em que a sessão for aberta. Os números atribuídos às mensagens só são válidos durante a duração do [`POP3_transporter`](#pop3-transporter-object). No momento em que `POP3_transporter` for apagado qualquer mensagem marcada para ser apagada será removida. Quando o usuário se registrar de volta no servidor, as mensagens atuais no mailbox serão numeradas de 1 a x.

Entretanto, *id* é um número único atribuído à mensagem quando for recebida pelo servidor. Esse número é calculado usando a hora e data que a mensagem for recebida e é um valor atribuído ao seu servidor POP3. Infelizmente, servidores POP3 não usam a referência primária *id* para suas mensagens. Através das sessões POP3 precisa especificar o *number* como a referência às mensagens no servidor. Desenvolvedores podem precisar ter cuirdado se desenvolverem soluções que trazem referências às mensagens na database mas deixam o corpo da mensagem no servidor.

##### Exemplo

Se quiser saber o número total e tamanho dos emails nas mailbox:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obrigatório
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 C_COLLECTION($mailInfo)
 C_LONGINT($vNum;$vSize)

 $mailInfo:=$transporter.getMailInfoList()
 $vNum:=$mailInfo.length
 $vSize:=$mailInfo.sum("size")

 ALERT("The mailbox contains "+String($vNum)+" message(s) for "+String($vSize)+" bytes.")
```

## .getMIMEAsBlob()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->


<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| Parâmetro  | Tipo    |    | Descrição                                                                 |
| ---------- | ------- |:--:| ------------------------------------------------------------------------- |
| msgNumber  | Integer | -> | Número da mensagem que na lista                                           |
| Resultados | Blob    | <- | Blob da string MIME retornado do servidor mail|<!-- END REF -->

|

##### Descrição

A função `.getMIMEAsBlob()` <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->devolve um BLOB contendo o conteúdo MIME para a mensagem correspondente ao *msgNumber* na caixa de correio designada pelo [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

Passe em *msgNumber* o número da mensagem a recuperar. O número é retornado na propriedade número pelo método [`.getMailInfoList()`](#getmailinfolist).

O método retorna uma BLOB vazia se:

* *msgNumber* determina uma mensagem não existente,
* a mensagem foi marcada para apagar usando `.delete()`.

**BLOB devolvido**

`.getMIMEAsBlob()` retorna um `BLOB` que pode ser arquivado em um banco de dados ou convertido a um objeto [`Email` ](EmailObjectClass.md#email-object) com o comando `MAIL Convert from MIME`.

##### Exemplo

Se quiser saber o número total e tamanho dos emails nas mailbox:

```4d
 var $server : Object
 var $mailInfo : Collection
 var $blob : Blob
 var $transporter : 4D.POP3Transporter

 $server:=New object
 $server.host:="pop.gmail.com"
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $blob:=$transporter.getMIMEAsBlob($mailInfo[0].number)
```

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF POP3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->**.undeleteAll()**<!-- END REF -->


<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| Parâmetro | Tipo |  | Descrição                                             |
| --------- | ---- |::| ----------------------------------------------------- |
|           |      |  | Não exige nenhum parâmetro|<!-- END REF -->

|

##### Descrição

A função `.getMIMEAsBlob()` <!-- REF #POP3TransporterClass.undeleteAll().Summary -->remove todas as flags de deletar colocadas nos e-mails no [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
