---
id: imap-new-transporter
title: IMAP New transporter
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| Parâmetro  | Tipo                               |     | Descrição                                                                         |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------------------------------------- |
| server     | Object                             |  →  | Informação de servidor de correio                                                 |
| Resultados | 4D.IMAPTransporter |  ←  | [Objeto IMAP transporter](../API/IMAPTransporterClass.md#imap-transporter-object) |

<!-- END REF -->

#### Descrição

O comando `IMAP New transporter` <!-- REF #_command_.IMAP New transporter.Summary -->configura uma nova conexão IMAP<!-- END REF --> de acordo com o parâmetro *server* e retorna um novo objeto *transporter*. O objeto transporter retornado vai geralmente ser usado para receber emails.

No parâmetro server, passe um objeto contendo as propriedades abaixo:

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Valor padrão (se omitido)                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/IMAPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                  | False                                                             |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Objeto<br/>Cadeia ou objeto token que representa as credenciais de autorização OAuth2. Usado somente com OAUTH2 `authenticationMode`. Se `accessTokenOAuth2` for usado, mas `authenticationMode` for omitido, o protocolo OAuth 2 será usado (se permitido pelo servidor). Não retornado no objeto *[IMAP transporter](../API/IMAPTransporterClass.md#imap-transporter-object)*. | nenhum                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/IMAPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                    | o modo de autenticação mais seguro disponível no servidor é usado |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](../API/IMAPTransporterClass.md#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                                                                                                                                                            | 300                                                               |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/IMAPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                       | 30                                                                |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/IMAPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | *mandatory*                                                       |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/IMAPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                     | nenhum                                                            |
| **senha** : Texto<br/>Senha do usuário para autenticação no servidor. Não retornado no objeto *[IMAP transporter](#imap-transporter-object)*.                                                                                                                                                                                                                                                                                                                                                                                                | nenhum                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/IMAPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 993                                                               |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/IMAPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                              | nenhum                                                            |

> **Aviso**: certifique-se de que o tempo limite definido seja menor que o tempo limite do servidor, caso contrário, o tempo limite do cliente será inútil.

#### Resultados

A função retorna um [**objeto IMAP transporter**](../API/IMAPTransporterClass.md#imap-transportter-object). Todas as propriedades retornadas são **apenas leitura**.

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
