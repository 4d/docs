---
id: pop3-new-transporter
title: POP3 New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!--REF #_command_.POP3 New transporter.Params-->

| Parâmetro | Tipo                               |   | Descrição                                                                         |
| --------- | ---------------------------------- | - | --------------------------------------------------------------------------------- |
| server    | Object                             | → | Informação de servidor de correio                                                 |
| Resultado | 4D.POP3Transporter | ← | [Objeto transporter POP3](../API/POP3TransporterClass.md#pop3-transporter-object) |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R2   | Adicionado |

</details>

#### Descrição

The `POP3 New transporter` command <!-- REF #_command_.POP3 New transporter.Summary -->configures a new POP3 connection<!-- END REF -->according to the *server* parameter and returns a new [POP3 transporter](../API/POP3TransporterClass.md#pop3-transporter-object) object. O objeto transporter retornado vai geralmente ser usado para receber emails.

No parâmetro server, passe um objeto contendo as propriedades abaixo:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Valor padrão (se omitido)                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/POP3TransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                | False                                                             |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Objeto<br/>Cadeia ou objeto token que representa as credenciais de autorização OAuth2. Usado somente com OAUTH2 `authenticationMode`. Se `accessTokenOAuth2` for usado, mas `authenticationMode` for omitido, o protocolo OAuth 2 será usado (se permitido pelo servidor). Não retornado no objeto *[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)*. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/POP3TransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                  | o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/POP3TransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                     | 30                                                                |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/POP3TransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *mandatory*                                                       |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/POP3TransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                   | nenhum                                                            |
| **.password** : Text<br/>Senha do usuário para autenticação no servidor. Não retornado no objeto *[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)*.                                                                                                                                                                                                                                                                                                                                               | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/POP3TransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 995                                                               |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/POP3TransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                            | nenhum                                                            |

#### Resultados

The function returns a [**POP3 transporter object**](../API/POP3TransporterClass.md#pop3-transporter-object). Todas as propriedades retornadas são **apenas leitura**.

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
