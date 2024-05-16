---
id: SMTPTransporterClass
title: SMTPTransporter
---

The `SMTPTransporter` class allows you to configure SMTP connections and send emails through _SMTP transporter_ objects.

### Objet SMTP Transporter

SMTP Transporter objects are instantiated with the [SMTP New transporter](#smtp-new-transporter) command. Leurs propriétés et fonctions sont les suivantes :

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
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                             |

<!-- REF SMTPTransporterClass.SMTP New transporter.Desc -->

## SMTP New transporter

<details><summary>Historique</summary>

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 18      | Nouvelle propriété logFile                        |
| 17 R5   | Nouvelles propriétés bodyCharset et headerCharset |
| 17 R4   | Ajout                                             |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #_command_.SMTP New transporter.Params -->

| Paramètres | Type                               |     | Description                                         |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Informations sur le serveur IMAP                    |
| Résultat   | 4D.SMTPTransporter |  <- | [SMTP transporter object](#smtp-transporter-object) |

<!-- END REF -->

#### Description

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the _server_ parameter and returns a new _[SMTP transporter](#smtp-transporter-object)_ object. L'objet transporteur retourné sera alors utilisé pour l'envoi d'emails.

> Cette commande n'ouvre pas de connexion au serveur SMTP. The SMTP connection is actually opened when the [`.send()`](#send) function is executed.
>
> La connexion SMTP est automatiquement fermée :
>
> - when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
> - after each  [`.send( )`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.

In the _server_ parameter, pass an object containing the following properties:

| _server_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Valeur par défaut (si omise)                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                     | False                                                                                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in _[SMTP transporter](#smtp-transporter-object)_ object. | aucun                                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                       | le mode d'authentification le plus sûr pris en charge par le serveur est utilisé                 |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                            | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                          | 30                                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                      | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                 | _obligatoire_                                                                                    |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                | True                                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                        | aucun                                                                                            |
| **password** : Text<br/>User password for authentication on the server. Not returned in _[SMTP transporter](#smtp-transporter-object)_ object.                                                                                                                                                                                                                                                                                                                                                    | aucun                                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 587                                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                            | 100                                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                 | aucun                                                                                            |

#### Résultat

The function returns a [**SMTP transporter object**](#smtp-transporter-object). All returned properties are **read-only**.

#### Exemple

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

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

| Paramètres | Type                               |     | Description                                         |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Informations sur le serveur IMAP                    |
| Résultat   | 4D.SMTPTransporter |  <- | [SMTP transporter object](#smtp-transporter-object) |

<!-- END REF -->

#### Description

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->creates and returns a new object of the `4D.SMTPTransporter` type<!-- END REF -->. It is identical to the [`SMTP New transporter`](#smtp-new-transporter) command (shortcut).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

For information about SMTP status codes, please refer to [this page](https://www.usps.org/info/smtp_status.html).

#### Exemple

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R4   | Ajout         |

</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->**.keepAlive** : Boolean<!-- END REF -->

#### Description

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

La connexion SMTP est automatiquement fermée :

- when the `transporter` object is destroyed if the `.keepAlive` property is true,
- after each `.send( )` function execution if the `.keepAlive` property is set to false.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>Historique</summary>

| Release | Modifications                     |
| ------- | --------------------------------- |
| 17 R5   | Prise en charge des contenus Mime |
| 17 R4   | Ajout                             |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->

| Paramètres | Type   |     | Description                                       |
| ---------- | ------ | :-: | ------------------------------------------------- |
| mail       | Object |  -> | [Email](EmailObjectClass.md#email-object) to send |
| Résultat   | Object |  <- | Statut SMTP                                       |

<!-- END REF -->

#### Description

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [_mail_ object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.

> The `transporter` object must have already been created using the `SMTP New transporter` command.

La fonction établit la connexion SMTP si cette dernière n'est pas déjà active. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send()`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the [`SMTP New transporter`](#smtp-new-transporter) command description.

In _mail_, pass a valid [`Email` object](EmailObjectClass.md#email-object) to send. Les propriétés origine (la provenance de l'Email) et destination (un ou plusieurs destinataires) de l'Email doivent être incluses, les autres propriétés sont optionnelles.

#### Objet retourné

La fonction retourne un objet décrivant le statut SMTP de l"opération. Cet objet peut avoir les propriétés suivantes :

| Propriété  | Type    | Description                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| success    | boolean | Vrai si l'envoi a été effectué avec succès, sinon Faux                                                          |
| status     | number  | Code du statut retourné par le serveur SMTP (0 si problème non lié au traitement de l'email) |
| statusText | text    | Message de statut retourné par le serveur SMTP                                                                  |

In case of an issue unrelated to the SMTP processing (e.g. a mandatory property is missing in mail), 4D generates an error that you can intercept using a method installed by the `ON ERR CALL` command. Use the `GET LAST ERROR STACK` command for information about the error.

Dans ce cas, l'objet erreur qui en résulte contient les valeurs suivantes :

| Propriété  | Valeur                 |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
