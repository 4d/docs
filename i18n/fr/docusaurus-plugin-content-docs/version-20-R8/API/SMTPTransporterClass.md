---
id: SMTPTransporterClass
title: SMTPTransporter
---

La classe `SMTPTransporter` vous permet de configurer des connexions SMTP et d'envoyer des emails par le biais d'objets *SMTP transporter*.

### Objet SMTP Transporter

Les objets SMTP Transporter sont instanciés avec la commande [`SMTP New transporter`](../commands/smtp-new-transporter.md). Leurs propriétés et fonctions sont les suivantes :

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

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

| Paramètres | Type                               |                             | Description                                       |
| ---------- | ---------------------------------- | :-------------------------: | ------------------------------------------------- |
| server     | Object                             |              ->             | Informations sur le serveur IMAP                  |
| Résultat   | 4D.SMTPTransporter | <- | [Objet SMTP Transporter](#objet-smtp-transporter) |

<!-- END REF -->

#### Description

La fonction `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary -->crée et retourne un nouvel objet de type `4D.SMTPTransporter`<!-- END REF -->. Elle est identique à la commande [`SMTP New transporter`](../commands/smtp-new-transporter.md) (raccourci).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

Pour une description des codes de statut SMTP, veuillez vous reporter à [cette page](https://www.usps.org/info/smtp_status.html).

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

La propriété `.keepAlive` contient <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** si la connexion SMTP doit rester active jusqu'à la destruction de l'objet `transporter`<!-- END REF -->, et **False** sinon. Par défaut, si la propriété `keepAlive` n'a pas été définie dans l'objet `server` (qui permet de créer l'objet `transporter` via la commande `SMTP New transporter`), elle est mise à **True**.

La connexion SMTP est automatiquement fermée :

- lorsque l'objet `transporter` est détruit si la propriété `.keepAlive` est mise à vrai,
- après chaque fonction `.send( )` exécutée si la propriété `.keepAlive` est mise à faux.

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

| Paramètres | Type   |                             | Description                                         |
| ---------- | ------ | :-------------------------: | --------------------------------------------------- |
| mail       | Object |              ->             | [Email](EmailObjectClass.md#email-object) à envoyer |
| Résultat   | Object | <- | Statut SMTP                                         |

<!-- END REF -->

#### Description

La fonction `.send()` <!-- REF #SMTPTransporterClass.send().Summary -->envoie l'objet [*mail*](EmailObjectClass.md#objet-email) vers le serveur SMTP défini dans l'objet `transporter` et retourne un objet statut<!-- END REF -->.

> L'objet `transporter` doit avoir déjà été créé à l'aide de la commande `SMTP New transporter`.

La fonction établit la connexion SMTP si cette dernière n'est pas déjà active. Si la propriété `.keepAlive` de l'objet `transporter` est à **false**, la connexion SMTP est automatiquement fermée après l'exécution de la commande `.send()`. Pour plus d'informations, veuillez vous référer à la description de la commande [`SMTP New transporter`](#smtp-new-transporter).

Dans *mail*, passez un [`objet Email`](EmailObjectClass.md#objet-email) valide à envoyer. Les propriétés origine (la provenance de l'Email) et destination (un ou plusieurs destinataires) de l'Email doivent être incluses, les autres propriétés sont optionnelles.

#### Objet retourné

La fonction retourne un objet décrivant le statut SMTP de l"opération. Cet objet peut avoir les propriétés suivantes :

| Propriété  | Type    | Description                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| success    | boolean | Vrai si l'envoi a été effectué avec succès, sinon Faux                                                          |
| status     | number  | Code du statut retourné par le serveur SMTP (0 si problème non lié au traitement de l'email) |
| statusText | text    | Message de statut retourné par le serveur SMTP                                                                  |

En cas de problème non lié au traitement SMTP (par exemple une propriété obligatoire qui est manquante dans l'objet mail), 4D génère une erreur que vous pouvez intercepter à l'aide d'une méthode installée via la commande `ON ERR CALL`. Utilisez la commande `Last errors` pour obtenir des informations sur l'erreur.

Dans ce cas, l'objet erreur qui en résulte contient les valeurs suivantes :

| Propriété  | Valeur                 |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
