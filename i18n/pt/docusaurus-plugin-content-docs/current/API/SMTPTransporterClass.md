---
id: SMTPTransporterClass
title: SMTPTransporter
---

The `SMTPTransporter` class allows you to configure SMTP connections and send emails through *SMTP transporter* objects.

### SMTP Transporter object

SMTP Transporter objects are instantiated with the [SMTP New transporter](#smtp-new-transporter) command. Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary --> |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                   |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->                                        |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->                        |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                      |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                    |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.send().Summary -->                                       |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->                                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                             |


<!-- REF SMTPTransporterClass.SMTP New transporter.Desc -->
## SMTP New transporter

<details><summary>Histórico</summary>

| Versão | Mudanças                                     |
| ------ | -------------------------------------------- |
| v18    | New logFile property                         |
| v17 R5 | New bodyCharset and headerCharset properties |
| v17 R4 | Adicionado                                   |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->

**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->


<!-- REF #_command_.SMTP New transporter.Params -->
| Parameter  | Tipo               |    | Descrção                                                                       |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Objeto             | -> | Informação de servidor de correio                                              |
| Resultados | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF --> |

#### Descrção

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. Summary -->sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.

> This command does not open any connection to the SMTP server. The SMTP connection is actually opened when the [`.send()`](#send) function is executed.  
> 
> The SMTP connection is automatically closed:
> 
> * when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
> * after each  [`.send( )`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.

No parâmetro *server*, passe um objeto contendo as propriedades abaixo:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                           | Valor padrão (se omitido)                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                               | False                                                             |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Só é usado com OAUTH2 `authenticationMode`. Se `accessTokenOAuth2` for usado mas `authenticationMode` for omitido, o protocolo OAuth 2 é usado (se permitido pelo servidor). Text string or token object representing OAuth2 authorization credentials. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                 | o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->                                                                                                                                                                                                                                                      | `mail mode UTF8` (US-ASCII_UTF8_QP)                             |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                    | 30                                                                |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->                                                                                                                                                                                                                                                | `mail mode UTF8` (US-ASCII_UTF8_QP)                             |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                           | *obrigatório*                                                     |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                                                                                                                                                                                                                                          | True                                                              |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                  | nenhum                                                            |
| **password** : Text<br/>User password for authentication on the server. Text string or token object representing OAuth2 authorization credentials.                                                                                                                                                                                                                                                           | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                           | 587                                                               |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->                                                                                                                                                                                                                                                      | 100                                                               |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                           | nenhum                                                            |

#### Resultados

The function returns a [**SMTP transporter object**](#smtp-transporter-object). Todas as propriedades retornadas são**apenas leitura**.

#### Exemplo

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" //Mandatory
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //Extended log to save in the Logs folder

 var $transporter : 4D.SMTPTransporter
 $transporter:=SMTP New transporter($server)

 $email:=New object
 $email.subject:="my first mail "
 $email.from:="4d@gmail.com"
 $email.to:="4d@4d.com;test@4d.com"
 $email.textBody:="Hello World"
 $email.htmlBody:="<h1>Hello World</h1><h4>'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'</h4>\
 <p>There are many variations of passages of Lorem Ipsum available."\
 +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

 $status:=$transporter.send($email)
 If(Not($status.success))
    ALERT("An error occurred sending the mail: "+$status.message)
 End if
```


<!-- END REF -->

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->

**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->


<!-- REF #4D.SMTPTransporter.new().Params -->
| Parameter  | Tipo               |    | Descrção                                                                       |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Objeto             | -> | Informação de servidor de correio                                              |
| Resultados | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF --> |

#### Descrção

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->creates and returns a new object of the `4D.SMTPTransporter` type<!-- END REF -->. It is identical to the [`SMTP New transporter`](#smtp-new-transporter) command (shortcut).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

For information about SMTP status codes, please refer to [this page](https://www.usps.org/info/smtp_status.html).

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
```


<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->

**.keepAlive** : Boolean<!-- END REF -->

#### Descrção

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

The SMTP connection is automatically closed:

* when the `transporter` object is destroyed if the `.keepAlive` property is true,
* after each `.send( )` function execution if the `.keepAlive` property is set to false.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>Histórico</summary>

| Versão | Mudanças                 |
| ------ | ------------------------ |
| v17 R5 | Support of mime contents |
| v17 R4 | Adicionado               |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->

**.send**( *mail* : Object ) : Object<!-- END REF -->


<!-- REF #SMTPTransporterClass.send().Params -->
| Parameter  | Tipo   |    | Descrção                                          |
| ---------- | ------ |:--:| ------------------------------------------------- |
| mail       | Objeto | -> | [Email](EmailObjectClass.md#email-object) to send |
| Resultados | Objeto | <- | SMTP status|<!-- END REF -->            |

#### Descrção

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.
> The `transporter` object must have already been created using the `SMTP New transporter` command.

The method creates the SMTP connection if it is not already alive. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send()`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the [`SMTP New transporter`](#smtp-new-transporter) command description.

In *mail*, pass a valid [`Email` object](EmailObjectClass.md#email-object) to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional.

#### Objeto devolvido

The function returns an object describing the SMTP status of the operation. This object can contain the following properties:

| Propriedade | Tipo    | Descrção                                                                                         |
| ----------- | ------- | ------------------------------------------------------------------------------------------------ |
| success     | boolean | True if the send is successful, False otherwise                                                  |
| status      | number  | Status code returned by the SMTP server (0 in case of an issue unrelated to the mail processing) |
| statusText  | text    | Status message returned by the SMTP server                                                       |

In case of an issue unrelated to the SMTP processing (e.g. a mandatory property is missing in mail), 4D generates an error that you can intercept using a method installed by the `ON ERR CALL` command. Use the `GET LAST ERROR STACK` command for information about the error.

In this case, the resulting status object contains the following values:

| Propriedade | Value                  |
| ----------- | ---------------------- |
| success     | False                  |
| status      | 0                      |
| statusText  | "Failed to send email" |


<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
