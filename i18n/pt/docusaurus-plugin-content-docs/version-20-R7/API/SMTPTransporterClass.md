---
id: SMTPTransporterClass
title: SMTPTransporter
---

The `SMTPTransporter` class allows you to configure SMTP connections and send emails through *SMTP transporter* objects.

### Objecto SMTP Transporter

SMTP Transporter objects are instantiated with the [`SMTP New transporter`](../commands/smtp-new-transporter.md) command. Eles oferecem as propriedades abaixo e funções:

|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary --> |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                   |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                        |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                        |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                      |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                            |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                    |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                             |
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)<br/><!-- INCLUDE #SMTPTransporterClass.send().Summary -->                                       |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                        |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                             |

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

| Parâmetro  | Tipo                               |                             | Descrição                                          |
| ---------- | ---------------------------------- | :-------------------------: | -------------------------------------------------- |
| server     | Object                             |              ->             | Informação de servidor de correio                  |
| Resultados | 4D.SMTPTransporter | <- | [Objeto SMTP Transporter](#objet-smtp-transporter) |

<!-- END REF -->

#### Descrição

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->creates and returns a new object of the `4D.SMTPTransporter` type<!-- END REF -->. É idêntico ao comando [`SMTP New transporter`](../commands/smtp-new-transporter.md) (atalho).

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
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->**.keepAlive** : Boolean<!-- END REF -->

#### Descrição

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

A coleção SMTP é automaticamente fechada:

- quando o objeto `transporter` é destruído se a propriedade `.keepAlive` for true,
- after each `.send( )` function execution if the `.keepAlive` property is set to false.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>História</summary>

| Release | Mudanças                 |
| ------- | ------------------------ |
| 17 R5   | Suporte de conteúdo Mime |
| 17 R4   | Adicionado               |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                             |
| ---------- | ------ | :-------------------------: | ----------------------------------------------------- |
| mail       | Object |              ->             | [Email](EmailObjectClass.md#email-object) para enviar |
| Resultados | Object | <- | Status SMTP                                           |

<!-- END REF -->

#### Descrição

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.

> The `transporter` object must have already been created using the `SMTP New transporter` command.

O método cria a ligação SMTP se esta ainda não estiver viva. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send()`, otherwise it stays alive until the `transporter` object is destroyed. Para obter mais informações, consulte a descrição do comando [`SMTP New transporter`](#smtp-new-transporter).

Em *mail*, passe um objeto [`Email`](EmailObjectClass.md#email-object) válido para enviar. As propriedades de origem (de onde vem o e-mail) e de destino (um ou mais destinatários) devem ser incluídas, as restantes propriedades são opcionais.

#### Objeto devolvido

A função devolve um objecto que descreve o estado SMTP da operação. Este objeto pode conter as seguintes propriedades:

| Propriedade | Tipo    | Descrição                                                                                                                                  |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| success     | boolean | Verdadeiro se o envio for bem sucedido, False caso contrário                                                                               |
| status      | number  | Código de estado devolvido pelo servidor SMTP (0 no caso de um problema não relacionado com o processamento de correio) |
| statusText  | text    | Mensagem de estado devolvida pelo servidor SMTP                                                                                            |

In case of an issue unrelated to the SMTP processing (e.g. a mandatory property is missing in mail), 4D generates an error that you can intercept using a method installed by the `ON ERR CALL` command. Use the `Last errors` command for information about the error.

Neste caso, o objecto de estatuto resultante contém os seguintes valores:

| Propriedade | Valor                  |
| ----------- | ---------------------- |
| success     | False                  |
| status      | 0                      |
| statusText  | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
