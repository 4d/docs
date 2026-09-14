---
id: SMTPTransporterClass
title: SMTPTransporter
---

La classe `SMTPTransporter` vous permet de configurer des connexions SMTP et d'envoyer des emails par le biais d'objets *SMTP transporter*.

### Objet SMTP Transporter

Les objets SMTP Transporter sont instanciés avec la commande [`SMTP New transporter`](../commands/smtp-new-transporter). Leurs propriétés et fonctions sont les suivantes :

|                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->    |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                      |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                           |
| [<!-- INCLUDE #SMTPTransporterClass.certificate.Syntax -->](#certificate)<br/><!-- INCLUDE #SMTPTransporterClass.certificate.Summary -->                         |
| [<!-- INCLUDE #SMTPTransporterClass.certificateName.Syntax -->](#certificatename)<br/><!-- INCLUDE #SMTPTransporterClass.certificateName.Summary -->             |
| [<!-- INCLUDE #SMTPTransporterClass.certificatePassword.Syntax -->](#certificatepassword)<br/><!-- INCLUDE #SMTPTransporterClass.certificatePassword.Summary --> |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                           |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                         |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                     |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                               |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                       |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                |
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)<br/><!-- INCLUDE #SMTPTransporterClass.send().Summary -->                                          |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                           |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                |

## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #4D.SMTPTransporter.new().Params -->

<div class="no-index">

| Paramètres | Type                               |                             | Description                                       |
| ---------- | ---------------------------------- | :-------------------------: | ------------------------------------------------- |
| server     | Object                             |              ->             | Informations sur le serveur de messagerie         |
| Résultat   | 4D.SMTPTransporter | <- | [Objet SMTP Transporter](#objet-smtp-transporter) |

</div>
<!-- END REF -->

#### Description

La fonction `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary -->crée et retourne un nouvel objet de type `4D.SMTPTransporter`<!-- END REF -->. Elle est identique à la commande [`SMTP New transporter`](../commands/smtp-new-transporter) (raccourci).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

## .certificate

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21 R5   | Ajout         |

</details>

<!-- REF #SMTPTransporterClass.certificate.Syntax -->**.certificate** : 4D.File<br/>**.certificate** : Blob<!-- END REF -->

#### Description

La propriété `.certificate` contient <!-- REF #SMTPTransporterClass.certificate.Summary -->le certificat utilisé pour signer les e-mails via S/MIME (Secure/MIME), fourni sous la forme d'un objet [`4D.File`](./FileClass.md) ou d'un Blob<!-- END REF -->. Ce certificat contient la clé privée.

Si votre certificat est déjà enregistré dans votre magasin de certificats (*keychain*), vous pouvez utiliser [`.certificateName`](#certificatename) à la place de cette propriété. Notez que vous ne pouvez pas utiliser les deux propriétés simultanément, sinon une erreur est retournée.

:::tip Article(s) de blog sur le sujet

[Signer des e-mails avec S/MIME et SMTPTransporter](https://blog.4d.com/smtptransporter-signing-emails-with-s-mime)

:::

#### Exemple

```4d
var $transporter : 4D.SMTPTransporter
var $options ; $result : Object

$options:=New object
//Saisir les informations pour le serveur SMTP

//Activer la signature S/MIME
//Fournir le fichier de certificat
$options.certificate:=File("myCertificateFile.p12")
$options.certificatePassword:="myGreatPW123"

$transporter:=4D.SMTPTransporter.new($options)

$email:=New object
//Remplir le contenu du mail

$result:=$transporter.send($email)
```

#### Voir également

[.certificateName](#certificatename)  
[.certificatePassword](#certificatepassword)

## .certificateName

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21 R5   | Ajout         |

</details>

<!-- REF #SMTPTransporterClass.certificateName.Syntax -->**.certificateName** : Text<!-- END REF -->

#### Description

La propriété `.certificateName` contient <!-- REF #SMTPTransporterClass.certificateName.Summary -->le nom du certificat utilisé pour signer les e-mails via S/MIME (Secure/MIME), tel qu'il est enregistré dans le magasin de certificats du système (*keychain*)<!-- END REF -->. Ce certificat contient la clé privée.

Le certificat peut également être fourni directement sous forme de fichier ou de blob à l'aide de la propriété [`.certificate`](#certificate). Notez que vous ne pouvez pas utiliser les deux propriétés simultanément, sinon une erreur est retournée.

:::tip Article(s) de blog sur le sujet

[Signer des e-mails avec S/MIME et SMTPTransporter](https://blog.4d.com/smtptransporter-signing-emails-with-s-mime)

:::

#### Voir également

[.certificate](#certificate)  
[.certificatePassword](#certificatepassword)

## .certificatePassword

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 21 R5   | Ajout         |

</details>

<!-- REF #SMTPTransporterClass.certificatePassword.Syntax -->**.certificatePassword** : Text<!-- END REF -->

#### Description

La propriété `.certificatePassword` contient <!-- REF #SMTPTransporterClass.certificatePassword.Summary -->le mot de passe du certificat utilisé pour signer les e-mails, s'il est requis<!-- END REF -->. Une chaîne vide est utilisée si aucun mot de passe n'est requis.

#### Voir également

[.certificate](#certificate)  
[.certificateName](#certificatename)

<!-- INCLUDE transporter.checkConnection().Desc -->

Pour une description des codes de statut SMTP, veuillez vous reporter à [cette page](https://www.iana.org/assignments/smtp-enhanced-status-codes/smtp-enhanced-status-codes.xhtml).

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

<div class="no-index">

| Paramètres | Type   |                             | Description                                         |
| ---------- | ------ | :-------------------------: | --------------------------------------------------- |
| mail       | Object |              ->             | [Email](EmailObjectClass.md#email-object) à envoyer |
| Résultat   | Object | <- | Statut SMTP                                         |

</div>
<!-- END REF -->

#### Description

La fonction `.send()` <!-- REF #SMTPTransporterClass.send().Summary -->envoie l'objet [*mail*](EmailObjectClass.md#objet-email) vers le serveur SMTP défini dans l'objet `transporter` et retourne un objet statut<!-- END REF -->.

> L'objet `transporter` doit avoir déjà été créé à l'aide de la commande `SMTP New transporter`.

La fonction établit la connexion SMTP si cette dernière n'est pas déjà active. Si la propriété `.keepAlive` de l'objet `transporter` est à **false**, la connexion SMTP est automatiquement fermée après l'exécution de la commande `.send()`. Pour plus d'informations, veuillez vous référer à la description de la commande [`SMTP New transporter`](../commands/smtp-new-transporter).

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

