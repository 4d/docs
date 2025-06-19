---
id: SMTPTransporterClass
title: SMTPTransporter
---

A classe `SMTPTransporter` permite-lhe configurar ligações SMTP e enviar correios eletrónicos através de objetos *SMTP transporter*.

### Objecto SMTP Transporter

Os objetos SMTP Transporter são instanciados com o comando [`SMTP New transporter`](../commands/smtp-new-transporter.md). Eles oferecem as propriedades abaixo e funções:

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

A função `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary --> cria e retorna um novo objeto do tipo `4D.SMTPTransporter`<!-- END REF -->. É idêntico ao comando [`SMTP New transporter`](../commands/smtp-new-transporter.md) (atalho).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

Para obter informações sobre os códigos de estado SMTP, consulte [esta página](https://www.usps.org/info/smtp_status.html).

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

A propriedade `.keepAlive` contém <!-- REF #SMTPTransporterClass.keepAlive. ummary -->**Verdadeiro** se a conexão SMTP deve ser mantida viva até que o objeto `transportador` seja destruído<!-- FIM REF -->, e **Falso** caso contrário. Por padrão, se a propriedade `keepAlive` não tiver sido definida no objeto `server` (usado para criar o objeto `transporter` com `SMTP New transporter`), ela será **True**.

A coleção SMTP é automaticamente fechada:

- quando o objeto `transporter` é destruído se a propriedade `.keepAlive` for true,
- após cada execução da função `.send( )` se a propriedade `.keepAlive` estiver definida como false.

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

A função `.send()` <!-- REF #SMTPTransporterClass.send().Summary -->envia o objeto [*mail*](EmailObjectClass.md#email-object) para o servidor SMTP definido no objeto `transporter` e retorna um objeto de status<!-- END REF -->.

> O objeto `transporter` já deve ter sido criado com o comando `SMTP New transporter`.

O método cria a ligação SMTP se esta ainda não estiver viva. Se a propriedade `.keepAlive` do objeto `transporter` for **false**, a conexão SMTP será automaticamente fechada após a execução de `.send()`; caso contrário, ela permanecerá ativa até que o objeto `transporter` seja destruído. Para obter mais informações, consulte a descrição do comando [`SMTP New transporter`](../commands/smtp-new-transporter.md).

Em *mail*, passe um objeto [`Email`](EmailObjectClass.md#email-object) válido para enviar. As propriedades de origem (de onde vem o e-mail) e de destino (um ou mais destinatários) devem ser incluídas, as restantes propriedades são opcionais.

#### Objeto devolvido

A função devolve um objecto que descreve o estado SMTP da operação. Este objeto pode conter as seguintes propriedades:

| Propriedade | Tipo    | Descrição                                                                                                                                  |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| success     | boolean | Verdadeiro se o envio for bem sucedido, False caso contrário                                                                               |
| status      | number  | Código de estado devolvido pelo servidor SMTP (0 no caso de um problema não relacionado com o processamento de correio) |
| statusText  | text    | Mensagem de estado devolvida pelo servidor SMTP                                                                                            |

No caso de um problema não relacionado ao processamento SMTP (por exemplo, uma propriedade obrigatória está faltando no e-mail), 4D gera um erro que pode ser interceptado usando um método instalado pelo comando `ON ERR CALL`. Use o comando `Últimos Erros` para obter informações sobre o erro.

Neste caso, o objecto de estatuto resultante contém os seguintes valores:

| Propriedade | Valor                  |
| ----------- | ---------------------- |
| success     | False                  |
| status      | 0                      |
| statusText  | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
