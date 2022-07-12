---
id: POP3TransporterClass
title: POP3Transporter
---

The `POP3Transporter` class allows you to retrieve messages from a POP3 email server.


### POP3 Transporter object

POP3 Transporter objects are instantiated with the [POP3 New transporter](#pop3-new-transporter) command. They provide the following properties and functions:


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R2 | Adicionado |
</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->
**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF POP3TransporterClass.POP3 New transporter.Params -->
| Parameter | Type               |    | Descrição                                           |
| --------- | ------------------ |:--:| --------------------------------------------------- |
| server    | object             | -> | Mail server information                             |
| Resultado | 4D.POP3Transporter | <- | [Objeto POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->


#### Descrição

O comando `POP3 New transporter`<!-- REF #_command_.POP3 New transporter. Summary -->configura uma nova conexão POP3<!-- END REF -->de acordo com o parâmetro *server* e retorna um novo objeto*[POP3 transporter](#pop3-transporter-object)*. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:


| *server*                                                                                                                                                                                                                                                                                                                                                                                                                      | Default value (if omitted)                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                               |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<p>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Text string or token object representing OAuth2 authorization credentials. | nenhum                                                              |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obrigatório*                                                       |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| nenhum                                                              |
| **.password** : Text<p>User password for authentication on the server. Text string or token object representing OAuth2 authorization credentials.                                                                                                                                                                                                                                                      | nenhum                                                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| nenhum                                                              |


#### Resultado

A função retorna um objeto [**POP3 transporter**](#pop3-transporter-object). All returned properties are **read-only**.
> The POP3 connection is automatically closed when the transporter object is destroyed.

#### Exemplo

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log to save in the Logs folder

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->

## 4D.POP3Transporter.new()


<!-- REF #4D.POP3Transporter.new().Syntax -->
**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF #4D.POP3Transporter.new().Params -->
| Parameter | Type               |    | Descrição                                           |
| --------- | ------------------ |:--:| --------------------------------------------------- |
| server    | Objeto             | -> | Mail server information                             |
| Resultado | 4D.POP3Transporter | <- | [Objeto POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->

#### Descrição

A função `.getMIMEAsBlob()`<!-- REF #POP3TransporterClass.getMIMEAsBlob(). Summary -->retorna uma BLOB contendo os conteúdos MIME para a mensagem correspondente a *msgNumber* na mailbox determinada pelo [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

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
```


<!-- INCLUDE transporter.connectionTimeOut.Desc -->




## .delete()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R2 | Adicionado |
</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->
**.delete**( *msgNumber* : Integer )<!-- END REF -->

<!-- REF #POP3TransporterClass.delete().Params -->
| Parameter | Type    |    | Descrição                              |
| --------- | ------- |:--:| -------------------------------------- |
| msgNumber | Integer | -> | Número da mensagem que vai ser apagada |
<!-- END REF -->


##### Descrição

A função `.delete( )` function<!-- REF #POP3TransporterClass.delete(). Summary -->marca o email *msgNumber* para ser apagado do servidor POP3<!-- END REF -->.

No parâmetro *msgNumber*, passe o número do email a apagar. O número é retornado na propriedade número pelo método [`.getMailInfoList()`](#getmailinfolist).

Executar esse método não remove de verdade qualquer email. O email marcado será apagado do servidor POP3 apenas quando o objeto`POP3_transporter` (criado com `POP3 New transporter`) for destruído. A marcação pode ser removida com o método `.undeleteAll()`.
> If the current session unexpectedly terminates and the connection is closed (e.g., timeout, network failure, etc.), an error message is generated and messages marked for deletion will remain on the POP3 server.

##### Exemplo

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Mark your mail as "to be deleted at the end of the session"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Force the session closure to delete the mails marked for deletion
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //deletion confirmed
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //remove deletion flags
 End if
```




## .getBoxInfo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R2 | Adicionado |
</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo()** : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| Parameter | Type   |    | Descrição      |
| --------- | ------ |:--:| -------------- |
| Resultado | Objeto | <- | boxInfo object |
<!-- END REF -->


##### Descrição

A função `.getBoxInfo()`<!-- REF #POP3TransporterClass.getBoxInfo(). Summary -->retorna um objeto `boxInfo` correspondente ao mailbox determinado pelo [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite que recupere informação sobre o mailbox.

O objeto `boxInfo` retornado contém as funcionalidades abaixo:

| Propriedade | Type   | Descrição                         |
| ----------- | ------ | --------------------------------- |
| mailCount   | Número | Number of messages in the mailbox |
| size        | Número | Tamanho da mensagem em bytes      |



##### Exemplo

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

  //mailbox info
 $boxInfo:=$transporter.getBoxInfo()
 ALERT("The mailbox contains "+String($boxInfo.mailCount)+" messages.")
```




## .getMail()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R2 | Adicionado |
</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMail().Params -->
| Parameter | Type    |    | Descrição                                        |
| --------- | ------- |:--:| ------------------------------------------------ |
| msgNumber | Integer | -> | Número da mensagem que na lista                  |
| Resultado | Objeto  | <- | [Objeto Email](EmailObjectClass.md#email-object) |
<!-- END REF -->


##### Descrição

A função `.getMail()`<!-- REF #POP3TransporterClass.getMail(). Summary -->retorna o objeto`Email` correspondente a *msgNumber* na mailbox determinada pelo [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite manejar localmente os conteúdos de email.

Passe em *msgNumber* o número da mensagem a recuperar. O número é retornado na propriedade número pela função [`.getMailInfoList()`](#getmailinfolist).

O método retorna Null se:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


**Returned object**

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object).


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
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R2 | Adicionado |
</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->
**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| Parameter | Type    |    | Descrição                       |
| --------- | ------- |:--:| ------------------------------- |
| msgNumber | Integer | -> | Número da mensagem que na lista |
| Resultado | Objeto  | <- | mailInfo object                 |
<!-- END REF -->


##### Descrição

A função `.getMail()`<!-- REF #POP3TransporterClass.getMail(). Summary -->retorna o objeto`mailInfo` correspondente a *msgNumber* na mailbox determinada pelo [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite que recupere informação sobre o email.

Passe em *msgNumber* o número da mensagem a recuperar. O número é retornado na propriedade número pelo método [`.getMailInfoList()`](#getmailinfolist).

O objeto `mailInfo` retornado contém as funcionalidades abaixo:

| Propriedade | Type   | Descrição                    |
| ----------- | ------ | ---------------------------- |
| size        | Número | Tamanho da mensagem em bytes |
| id          | Texto  | ID única da mensagem         |

O método retorna **Null** se:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


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
```




## .getMailInfoList()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R2 | Adicionado |
</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->
**.getMailInfoList()** : Collection<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| Parameter | Type    |    | Descrição                        |
| --------- | ------- |:--:| -------------------------------- |
| Resultado | Coleção | <- | Collection of `mailInfo` objects |
<!-- END REF -->


##### Descrição

A função`.getMailInfoList()`<!-- REF #POP3TransporterClass.getMailInfoList(). Summary -->retorna uma coleção de objetos `mailInfo` descrevendo todas as mensagens na mailbox determinada para o [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Essa função permite gerenciar localmente a lista de mensagens localizadas no servidor POP3.

Cada objeto `mailInfo` na coleção retornada contém as propriedades abaixo:

| Propriedade  | Type   | Descrição                                                      |
| ------------ | ------ | -------------------------------------------------------------- |
| \[ ].size   | Número | Tamanho da mensagem em bytes                                   |
| \[ ].number | Número | Número da mensagem                                             |
| \[ ].id     | Texto  | ID único da mensagem (útil se armazenar a mensagem localmente) |

Se a mailbox não conter uma mensagem, uma coleção vazia é retornada.



#### número e propriedades ID

*number* é o número de uma mensagem no mailbox no momento em que `POP3_transporter` for criado. A propriedade *number* não é um valor estático em relação a qualquer mensagem específica e vai mudar de sessão a sessão dependendo de sua relação com outras mensagens no mailibox na hora em que a sessão for aberta. Os números atribuídos às mensagens só são válidos durante a duração do [`POP3_transporter`](#pop3-transporter-object). No momento em que `POP3_transporter` for apagado qualquer mensagem marcada para ser apagada será removida. Quando o usuário se registrar de volta no servidor, as mensagens atuais no mailbox serão numeradas de 1 a x.

Entretanto, *id* é um número único atribuído à mensagem quando for recebida pelo servidor. Esse número é calculado usando a hora e data que a mensagem for recebida e é um valor atribuído ao seu servidor POP3. Infelizmente, servidores POP3 não usam a referência primária *id* para suas mensagens. Através das sessões POP3 precisa especificar o *number* como a referência às mensagens no servidor. Desenvolvedores podem precisar ter cuirdado se desenvolverem soluções que trazem referências às mensagens na database mas deixam o corpo da mensagem no servidor.


##### Exemplo

Se quiser saber o número total e tamanho dos emails nas mailbox:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
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
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |
</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| Parameter | Type    |    | Descrição                                      |
| --------- | ------- |:--:| ---------------------------------------------- |
| msgNumber | Integer | -> | Número da mensagem que na lista                |
| Resultado | Blob    | <- | Blob da string MIME retornado do servidor mail |
<!-- END REF -->


##### Descrição

A função `.getMIMEAsBlob()` <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->retorna uma BLOB contendo os conteúdos MIME para a mensagem correspondente a *msgNumber* na mailbox determinada pelo [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

Passe em *msgNumber* o número da mensagem a recuperar. O número é retornado na propriedade número pelo método [`.getMailInfoList()`](#getmailinfolist).

O método retorna uma BLOB vazia se:

*   *msgNumber* designates a non-existing message,
*   a mensagem foi marcada para apagar usando `.delete()`.


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
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R2 | Adicionado |
</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->
**.undeleteAll()**<!-- END REF -->

<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| Parameter | Type |  | Descrição                       |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


##### Descrição

A função `.undeleteAll()`<!-- REF #POP3TransporterClass.undeleteAll(). Summary -->remove todas as marcações para apagar nos emails no [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->. 

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->



<style> h2 { background: #d9ebff;}</style>
