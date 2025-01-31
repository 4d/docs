---
id: SMTPTransporterClass
title: SMTPTransporter
---

A classe `SMTPTransporter` permite-lhe configurar ligações SMTP e enviar correios eletrónicos através de *SMTP transpor ter* objetos.

### Objecto SMTP Transporter

Os objectos do SMTP Transporter são instanciados com o comando [SMTP New Transportter](#smtp-new-transporter). Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.send().Summary -->|
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|

<!-- REF SMTPTransporterClass.SMTP New transporter.Desc -->
## SMTP New transporter

<details><summary>Histórico</summary>

| Release | Mudanças                                       |
| ------- | ---------------------------------------------- |
| 18      | Nova propriedade logFile                       |
| 17 R5   | Novas propriedades bodyCharset e headerCharset |
| 17 R4   | Adicionado                                     |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->


<!-- REF #_command_.SMTP New transporter.Params -->
| Parâmetro  | Tipo               |    | Descrição                                                               |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------- |
| server     | Object             | -> | Informação de servidor de correio                                       |
| Resultados | 4D.SMTPTransporter | <- | [SMTP transporter](#smtp-transporter-object)|<!-- END REF -->

|

#### Descrição

O comando `SMTP New transporter` <!-- REF #_command_.SMTP New transporter.Summary -->configura uma nova ligação SMTP<!-- END REF --> de acordo com o parametro *server* e retorna um novo objeto*[SMTP transporter](#smtp-transporter-object)*. O objecto transportador devolvido será então normalmente utilizado para enviar mensagens de correio electrónico.

> Este comando não abre qualquer ligação com o servidor SMTP. A ligação SMTP é efectivamente aberta quando a função [`.send()`](#send) é executada.  
> 
> A coleção SMTP é automaticamente fechada:
> 
> * quando o objecto transportador é destruído se a propriedade [`keepAlive`](#keepalive) for true (por defeito),
> * após cada execução da função [`.send( )`](#send) se a propriedade [`keepAlive`](#keepalive) estiver configurada para false.

No parâmetro *server*, passe um objeto contendo as propriedades abaixo:

| *server*                                                                                                                                                                                                                                                                                                                                                     | Valor padrão (se omitido)                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                             |
| .**accessTokenOAuth2**: TextText string representando as credenciais de autorização OAuth 2. Usado apenas com OAUTH2 `authenticationMode`. Se `accessTokenOAuth2` for utilizado mas `authenticationMode` for omitido, é utilizado o protocolo OAuth 2 (se permitido pelo servidor). Não devolvido no objecto *[SMTP transporter](#smtp-transporter-object)*. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                             |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                             |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obrigatório*                                                     |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->| True                                                              |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| nenhum                                                            |
| **senha**: senha TextUser para autenticação no servidor. Não devolvido no objecto *[SMTP transporter](#smtp-transporter-object)*.                                                                                                                                                                                                                            | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 587                                                               |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->| 100                                                               |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| nenhum                                                            |

#### Resultados

A função devolve um [**objecto SMTP transporter**](#smtp-transporter-object). Todas as propriedades retornadas são **apenas leitura**.

#### Exemplo

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" //Obrigatório
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //Registro estendido para salvar na pasta Logs
 var $transporter : 4D.SMTPTransporter
 $transporter:=SMTP New transporter($server)

 $email:=New object
 $email.subject:="my first mail "
 $email.from:="4d@gmail.com"
 $email.to:="4d@4d.com;test@4d.com"
 $email.textBody:="Hello World"
 $email.htmlBody:="<h1>Hello World</h1><h4>'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'</h4>\
 There are many variations of passages of Lorem Ipsum available."\
 +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("An error occurred sending the mail: "+$status.message)
 End if
```

<!-- END REF -->

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->


<!-- REF #4D.SMTPTransporter.new().Params -->
| Parâmetro  | Tipo               |    | Descrição                                                               |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------- |
| server     | Object             | -> | Informação de servidor de correio                                       |
| Resultados | 4D.SMTPTransporter | <- | [SMTP transporter](#smtp-transporter-object)|<!-- END REF -->

|

#### Descrição

A função `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary -->cria e devolve um novo objecto do tipo `4D.SMTPTransporter`<!-- END REF -->. É idêntico ao comando [`SMTP New transporter`](#smtp-new-transporter) (atalho).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

Para informações sobre códigos de estado SMTP, consulte por favor [esta página](https://www.usps.org/info/smtp_status.html).

#### Exemplo

```4d
 var $pw : Text
 var $options : Object
 var $transporter : 4D.SMTPTransporter
 $options:=New object

 $pw:=Request("Please enter your password:")
 $options.host:="smtp.gmail.com"

 $options.user:="test@gmail.com"
 $options.password:=$pw

 $transporter:=SMTP New transporter($options)

 $status:=$transporter.checkConnection()
 If($status.success=True)
    ALERT("SMTP connection check successful!")
 Else
    ALERT("Error # "+String($status.status)+", "+$status.statusText)
 End if
 Else
    ALERT("Error # "+String($status.status)+", "+$status.statusText)
 End if
 Else
    ALERT("Error # "+String($status.status)+", "+$status.statusText)
 End if
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |
</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->**.keepAlive** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.keepAlive` contém <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** se a ligação SMTP tiver de ser mantida viva até que o objeto `transportador` seja destruído<!-- END REF -->, e **Falso** caso contrário. Por padrão, se a propriedade `keepAlive` não foi definida no objecto `server` (utilizado para criar o objecto `transporter` com `SMTP New transporter`), este é **True**.

A coleção SMTP é automaticamente fechada:

* quando o objecto `transporter` for destruído se a propriedade `.keepAlive` for true,
* após cada execução da função `.send( )` se a propriedade `.keepAlive` estiver configurada para false.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>Histórico</summary>

| Release | Mudanças                 |
| ------- | ------------------------ |
| 17 R5   | Suporte de conteúdo Mime |
| 17 R4   | Adicionado               |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->**.send**( *mail* : Object ) : Object<!-- END REF -->


<!-- REF #SMTPTransporterClass.send().Params -->
| Parâmetro  | Tipo   |    | Descrição                                             |
| ---------- | ------ |:--:| ----------------------------------------------------- |
| mail       | Object | -> | [Email](EmailObjectClass.md#email-object) para enviar |
| Resultados | Object | <- | Status SMTP|<!-- END REF -->

|

#### Descrição

A função `.send()` <!-- REF #SMTPTransporterClass.send().Summary -->envia o mail [** objecto](EmailObjectClass.md#email-object) para o servidor SMTP definido no objecto `transportador` e devolve um objecto de estado<!-- END REF -->.
> O objeto `transportador` já deve ter sido criado usando o comando `SMTP New transporter` .

O método cria a ligação SMTP se esta ainda não estiver viva. Se a propriedade `.keepAlive`  do  `transportador` for **falso**, a ligação SMTP é automaticamente fechada após a execução de `.send()`, caso contrário permanece viva até que o objecto `do transportador` seja destruído. Para mais informações, consultar o [`SMTP New Transportter`](#smtp-new-transporter) descrição do comando.

Em *mail*, passe um e-mail válido [`Email` object](EmailObjectClass.md#email-object) para enviar. As propriedades de origem (de onde vem o e-mail) e de destino (um ou mais destinatários) devem ser incluídas, as restantes propriedades são opcionais.

#### Objeto devolvido

A função devolve um objecto que descreve o estado SMTP da operação. Este objeto pode conter as seguintes propriedades:

| Propriedade | Tipo    | Descrição                                                                                                               |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| success     | boolean | Verdadeiro se o envio for bem sucedido, False caso contrário                                                            |
| status      | number  | Código de estado devolvido pelo servidor SMTP (0 no caso de um problema não relacionado com o processamento de correio) |
| statusText  | text    | Mensagem de estado devolvida pelo servidor SMTP                                                                         |

No caso de um problema não relacionado com o processamento SMTP (por exemplo, falta uma propriedade obrigatória no correio), 4D gera um erro que pode ser interceptado utilizando um método instalado pelo comando `ON ERR CALL` . Utilizar o comando `GET LAST ERROR STACK` para informações sobre o erro.

Neste caso, o objecto de estatuto resultante contém os seguintes valores:

| Propriedade | Valor                  |
| ----------- | ---------------------- |
| success     | False                  |
| status      | 0                      |
| statusText  | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
