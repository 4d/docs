---
id: SMTPTransporterClass
title: SMTPTransporter
---

La classe `SMTPTransporter` vous permet de configurer des connexions SMTP et d'envoyer des emails par le biais d'objets *SMTP transporter*.

### Objet SMTP Transporter

Les objets SMTP Transporter sont instanciés avec la commande [SMTP New transporter](#smtp-new-transporter). Leurs propriétés et fonctions sont les suivantes :

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

<details><summary>Historique</summary>

| Version | Modifications                                     |
| ------- | ------------------------------------------------- |
| v18     | Nouvelle propriété logFile                        |
| v17 R5  | Nouvelles propriétés bodyCharset et headerCharset |
| v17 R4  | Ajoutées                                          |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->

**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #_command_.SMTP New transporter.Params -->
| Paramètres | Type               |    | Description                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Informations sur le serveur IMAP                                               |
| Result     | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF -->

|

#### Description

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. L'objet transporteur retourné sera alors utilisé pour l'envoi d'emails.

> Cette commande n'ouvre pas de connexion au serveur SMTP. La connexion SMTP est réellement ouverte lorsque la fonction [`.send()`](#send) est exécutée.  
> 
> La connexion SMTP est automatiquement fermée :
> 
> * when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
> * after each  [`.send( )`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                             | Valeur par défaut (si omise)                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object <br/> Text string or token object representing OAuth2 authorization credentials. Il est utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Chaîne de texte ou objet token représentant les informations d'autorisation OAuth2. | aucun                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                            |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                            |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatoire*                                                                    |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->| Vrai                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| aucun                                                                            |
| **password** : Text<br/>User password for authentication on the server. Chaîne de texte ou objet token représentant les informations d'autorisation OAuth2.                                                                                                                                                                                                                                                                                    | aucun                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 587                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->| 100                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| aucun                                                                            |

#### Result

La fonction retourne un [**objet SMTP transporter**](#smtp-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.

#### Exemple

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" //Obligatoire
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //Log étendu à sauvegarder dans le dossier Logs

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
| Paramètres | Type               |    | Description                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Informations sur le serveur IMAP                                               |
| Result     | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object)|<!-- END REF -->

|

#### Description

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->creates and returns a new object of the `4D.SMTPTransporter` type<!-- END REF -->. Elle est identique à la commande [`SMTP New transporter`](#smtp-new-transporter) (raccourci).

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
 Else
    ALERT("Error # "+String($status.status)+", "+$status.statusText)
 End if
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |
</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->

**.keepAlive** : Boolean<!-- END REF -->

#### Description

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. Par défaut, si la propriété `keepAlive` n'a pas été définie dans l'objet `server` qui permet de créer l'objet `transporter` via la commande `SMTP New transporter`), elle est mise à **True**.

La connexion SMTP est automatiquement fermée :

* lorsque l'objet `transporter` est détruit si la propriété `.keepAlive` est mise à vrai,
* après chaque fonction `.send( )` exécutée si la propriété `.keepAlive` est mise à faux.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<details><summary>Historique</summary>

| Version | Modifications                     |
| ------- | --------------------------------- |
| v17 R5  | Prise en charge des contenus Mime |
| v17 R4  | Ajoutées                          |

</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->

**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->
| Paramètres | Type   |    | Description                                         |
| ---------- | ------ |:--:| --------------------------------------------------- |
| mail       | Object | -> | [Email](EmailObjectClass.md#email-object) à envoyer |
| Result     | Object | <- | SMTP status|<!-- END REF -->

|

#### Description

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.
> L'objet `transporter` doit avoir déjà été créé à l'aide de la commande `SMTP New transporter`.

La fonction établit la connexion SMTP si cette dernière n'est pas déjà active. Si la propriété `.keepAlive` de l'objet `transporter` est à **false**, la connexion SMTP est automatiquement fermée après l'exécution de la commande `.send()`. Pour plus d'informations, voir la description de la commande [`SMTP New transporter`](#smtp-new-transporter).

Dans *mail*, passez un objet [`Email`](EmailObjectClass.md#email-object) valide à envoyer. Les propriétés origine (la provenance de l'Email) et destination (un ou plusieurs destinataires) de l'Email doivent être incluses, les autres propriétés sont optionnelles.

#### Objet retourné

La fonction retourne un objet décrivant le statut SMTP de l"opération. Cet objet peut avoir les propriétés suivantes :

| Propriété  | Type    | Description                                                                                  |
| ---------- | ------- | -------------------------------------------------------------------------------------------- |
| success    | boolean | Vrai si l'envoi a été effectué avec succès, sinon Faux                                       |
| status     | number  | Code du statut retourné par le serveur SMTP (0 si problème non lié au traitement de l'email) |
| statusText | text    | Message de statut retourné par le serveur SMTP                                               |

En cas de problème non lié au traitement SMTP (par exemple une propriété obligatoire qui est manquante dans l'objet mail), 4D génère une erreur que vous pouvez intercepter à l'aide d'une méthode installée via la commande `ON ERR CALL`. Utilisez la commande `GET LAST ERROR STACK` pour obtenir des informations sur l'erreur.

Dans ce cas, l'objet erreur qui en résulte contient les valeurs suivantes :

| Propriété  | Value                  |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
