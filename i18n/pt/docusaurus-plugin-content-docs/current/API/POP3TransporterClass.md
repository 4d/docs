---
id: POP3TransporterClass
title: POP3Transporter
---

The `POP3Transporter` class allows you to retrieve messages from a POP3 email server.

### Objeto POP3 transporter

POP3 Transporter objects are instantiated with the [POP3 New transporter](#pop3-new-transporter) command. Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary --> |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                   |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                        |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                      |
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #POP3TransporterClass.delete().Summary -->                                 |
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->                     |
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #POP3TransporterClass.getMail().Summary -->                              |
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<br/><!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->                  |
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<br/><!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->      |
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->            |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                    |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                             |
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<br/><!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                             |

<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->

## POP3 New transporter

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF #_command_.POP3 New transporter.Params -->

| Parâmetro  | Tipo                               |     | Descrição                                           |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | object                             |  -> | Informação de servidor de correio                   |
| Resultados | 4D.POP3Transporter |  <- | [POP3 transporter object](#pop3-transporter-object) |

<!-- END REF -->

#### Descrição

The `POP3 New transporter` command <!-- REF #_command_.POP3 New transporter.Summary -->configures a new POP3 connection<!-- END REF -->according to the *server* parameter and returns a new *[POP3 transporter](#pop3-transporter-object)* object. O objeto transporter retornado vai geralmente ser usado para receber emails.

In the *server* parameter, pass an object containing the following properties:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Valor padrão (se omitido)                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                   | False                                                             |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](#smtptransporterobject)* object. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                     | o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                        | 30                                                                |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                               | *mandatory*                                                       |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                      | nenhum                                                            |
| **.password** : Text<br/>User password for authentication on the server. Not returned in *[SMTP transporter](#smtptransporterobject)* object.                                                                                                                                                                                                                                                                                                                                   | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                               | 995                                                               |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                               | nenhum                                                            |

#### Resultados

The function returns a [**POP3 transporter object**](#pop3-transporter-object). All returned properties are **read-only**.

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

| Parâmetro  | Tipo                               |     | Descrição                                           |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Informação de servidor de correio                   |
| Resultados | 4D.POP3Transporter |  <- | [POP3 transporter object](#pop3-transporter-object) |

<!-- END REF -->

#### Descrição

The `4D.POP3Transporter.new()` function <!-- REF #4D.POP3Transporter.new().Summary -->creates and returns a new object of the `4D.POP3Transporter` type<!-- END REF -->. It is identical to the [`POP3 New transporter`](#pop3-new-transporter) command (shortcut).

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
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

## .delete()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->**.delete**( *msgNumber* : Integer )<!-- END REF -->

<!-- REF #POP3TransporterClass.delete().Params -->

| Parâmetro | Tipo    |     | Descrição                              |
| --------- | ------- | :-: | -------------------------------------- |
| msgNumber | Integer |  -> | Número da mensagem que vai ser apagada |

<!-- END REF -->

##### Descrição

The `.delete( )` function <!-- REF #POP3TransporterClass.delete().Summary -->flags the *msgNumber* email for deletion from the POP3 server<!-- END REF -->.

In the *msgNumber* parameter, pass the number of the email to delete. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

Executar esse método não remove de verdade qualquer email. The flagged email will be deleted from the POP3 server only when the `POP3_transporter` object (created with `POP3 New transporter`) is destroyed. The flag could be also be removed using the `.undeleteAll()` method.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->**.getBoxInfo()** : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getBoxInfo().Params -->

| Parâmetro  | Tipo   |     | Descrição       |
| ---------- | ------ | :-: | --------------- |
| Resultados | Object |  <- | objecto boxInfo |

<!-- END REF -->

##### Descrição

The `.getBoxInfo()` function <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite que recupere informação sobre o mailbox.

The `boxInfo` object returned contains the following properties:

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

<details><summary>História</summary>

| Release | Mudanças                          |
| ------- | --------------------------------- |
| 20      | Support of *headerOnly* parameter |
| 18 R2   | Adicionado                        |

</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->**.getMail**( *msgNumber* : Integer { ; *headerOnly* : Boolean } ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMail().Params -->

| Parâmetro  | Tipo       |     | Descrição                                                                                                  |
| ---------- | ---------- | :-: | ---------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer    |  -> | Número da mensagem que na lista                                                                            |
| headerOnly | Parâmetros |  -> | True para descarregar apenas os cabeçalhos de correio electrónico (por defeito é False) |
| Resultados | Object     |  <- | [Email object](EmailObjectClass.md#email-object)                                                           |

<!-- END REF -->

##### Descrição

The `.getMail()` function <!-- REF #POP3TransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite manejar localmente os conteúdos de email.

Pass in *msgNumber* the number of the message to retrieve. This number is returned in the `number` property by the [`.getMailInfoList()`](#getmailinfolist) function.

Optionally, you can pass `true` in the *headerOnly* parameter to exclude the body parts from the returned `Email` object. Only headers properties ([`headers`](EmailObjectClass.md#headers), [`to`](EmailObjectClass.md#to), [`from`](EmailObjectClass.md#from)...) são então retornados. Esta opção permite-lhe optimizar a etapa de descarregamento quando muitos e-mails estão no servidor.

:::note

The *headerOnly* option may not be supported by the server.

:::

O método retorna Null se:

- *msgNumber* designates a non-existing message,
- the message was marked for deletion using [`.delete()`](#delete).

**Objeto devolvido**

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object).

##### Exemplo

Se quiser saber o emissário do primeiro email da mailbox:

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //Obrigatório
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```

## .getMailInfo()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfo().Params -->

| Parâmetro  | Tipo    |     | Descrição                       |
| ---------- | ------- | :-: | ------------------------------- |
| msgNumber  | Integer |  -> | Número da mensagem que na lista |
| Resultados | Object  |  <- | mailInfo object                 |

<!-- END REF -->

##### Descrição

The `.getMailInfo()` function <!-- REF #POP3TransporterClass.getMailInfo().Summary -->returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite que recupere informação sobre o email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

The `mailInfo` object returned contains the following properties:

| Propriedade | Tipo   | Descrição                    |
| ----------- | ------ | ---------------------------- |
| size        | Number | Tamanho da mensagem em bytes |
| id          | Text   | ID única da mensagem         |

O método retorna **Null** se:

- *msgNumber* designates a non-existing message,
- the message was marked for deletion using `.delete( )`.

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
```

## .getMailInfoList()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->**.getMailInfoList()** : Collection<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfoList().Params -->

| Parâmetro  | Tipo       |     | Descrição                     |
| ---------- | ---------- | :-: | ----------------------------- |
| Resultados | Collection |  <- | Coleção de objetos `mailInfo` |

<!-- END REF -->

##### Descrição

The `.getMailInfoList()` function <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite gerenciar localmente a lista de mensagens localizadas no servidor POP3.

Each `mailInfo` object in the returned collection contains the following properties:

| Propriedade                                                                      | Tipo   | Descrição                                                                         |
| -------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| \[ ].size   | Number | Tamanho da mensagem em bytes                                                      |
| \[ ].number | Number | Número da mensagem                                                                |
| \[ ].id     | Text   | ID único da mensagem (útil se armazenar a mensagem localmente) |

Se a mailbox não conter uma mensagem, uma coleção vazia é retornada.

#### número e propriedades ID

*number* is the number of a message in the mailbox at the time the `POP3_transporter` was created. The *number* property is not a static value in relation to any specific message and will change from session to session dependent on its relation to other messages in the mailbox at the time the session was opened. The numbers assigned to the messages are only valid during the lifetime of the [`POP3_transporter`](#pop3-transporter-object). At the time the `POP3_transporter` is deleted any message marked for deletion will be removed. Quando o usuário se registrar de volta no servidor, as mensagens atuais no mailbox serão numeradas de 1 a x.

The *id* however is a unique number assigned to the message when it was received by the server. Esse número é calculado usando a hora e data que a mensagem for recebida e é um valor atribuído ao seu servidor POP3. Unfortunately, POP3 servers do not use the *id* as the primary reference to their messages. Throughout the POP3 sessions you will need to specify the *number* as the reference to messages on the server. Desenvolvedores podem precisar ter cuirdado se desenvolverem soluções que trazem referências às mensagens na database mas deixam o corpo da mensagem no servidor.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R3   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->

| Parâmetro  | Tipo    |     | Descrição                                      |
| ---------- | ------- | :-: | ---------------------------------------------- |
| msgNumber  | Integer |  -> | Número da mensagem que na lista                |
| Resultados | Blob    |  <- | Blob da string MIME retornado do servidor mail |

<!-- END REF -->

##### Descrição

The `.getMIMEAsBlob()` function <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

O método retorna uma BLOB vazia se:

- *msgNumber* designates a non-existing message,
- the message was marked for deletion using `.delete()`.

**BLOB devolvido**

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->**.undeleteAll()**<!-- END REF -->

<!-- REF #POP3TransporterClass.undeleteAll().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

##### Descrição

The `.undeleteAll()` function <!-- REF #POP3TransporterClass.undeleteAll().Summary -->removes all delete flags set on the emails in the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
