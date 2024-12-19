---
id: smtp-new-transporter
title: SMTP New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!--REF #_command_.SMTP New transporter.Params-->

| Parâmetro | Tipo                               |   | Descrição                                                                         |
| --------- | ---------------------------------- | - | --------------------------------------------------------------------------------- |
| server    | Object                             | → | Informação de servidor de correio                                                 |
| Resultado | 4D.SMTPTransporter | ← | [SMTP transporter object](../API/SMTPTransporterClass.md#smtp-transporter-object) |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                                       |
| ------- | ---------------------------------------------- |
| 18      | Nova propriedade logFile                       |
| 17 R5   | Novas propriedades bodyCharset e headerCharset |
| 17 R4   | Adicionado                                     |

</details>

#### Descrição

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new [SMTP transporter object](../API/SMTPTransporterClass.md#smtp-transporter-object) object. O objecto transportador devolvido será então normalmente utilizado para enviar mensagens de correio electrónico.

> Este comando não abre qualquer ligação com o servidor SMTP. A conexão SMTP é realmente aberta quando a função [`.send()`](../API/SMTPTransporterClass.md#send) é executada.
>
> A coleção SMTP é automaticamente fechada:
>
> - when the transporter object is destroyed if the [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) property is true (default),
> - after each  [`.send()`](../API/SMTPTransporterClass.md#send) function execution if the [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) property is set to false.

No parâmetro server, passe um objeto contendo as propriedades abaixo:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Valor padrão (se omitido)                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/SMTPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                 | False                                                                                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Objeto<br/>Cadeia ou objeto token que representa as credenciais de autorização OAuth2. Usado somente com OAUTH2 `authenticationMode`. Se `accessTokenOAuth2` for usado, mas `authenticationMode` for omitido, o protocolo OAuth 2 será usado (se permitido pelo servidor). Not returned in *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)* object. | nenhum                                                                                           |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/SMTPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                   | o modo de autenticação mais seguro disponível no servidor é usado                                |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](../API/SMTPTransporterClass.md#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                        | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/SMTPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                      | 30                                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](../API/SMTPTransporterClass.md#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                  | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/SMTPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                             | *mandatory*                                                                                      |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](../API/SMTPTransporterClass.md#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                            | True                                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/SMTPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                    | nenhum                                                                                           |
| **password** : Text<br/>Senha do usuário para autenticação no servidor. Not returned in *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)* object.                                                                                                                                                                                                                                                                                                                                                                | nenhum                                                                                           |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/SMTPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 587                                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](../API/SMTPTransporterClass.md#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                        | 100                                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/SMTPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                             | nenhum                                                                                           |

#### Resultados

The function returns a [**SMTP transporter object**](../API/SMTPTransporterClass.md#smtp-transporter-object). Todas as propriedades retornadas são **apenas leitura**.

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
