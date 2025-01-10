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

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 18      | Nouvelle propriété logFile                        |
| 17 R5   | Nouvelles propriétés bodyCharset et headerCharset |
| 17 R4   | Ajout                                             |

</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->


<!-- REF #_command_.SMTP New transporter.Params -->
| Paramètres | Type               |    | Description                                                                   |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------------- |
| server     | Object             | -> | Informations sur le serveur IMAP                                              |
| Résultat   | 4D.SMTPTransporter | <- | [objet SMTP transporter](#smtp-transporter-object)|<!-- END REF -->

|

#### Description

La commande `SMTP New transporter` <!-- REF #_command_.SMTP New transporter.Summary -->configure une nouvelle connexion SMTP<!-- END REF --> en fonction du paramètre *server* et renvoie un nouvel objet *[SMTP transporter](#smtp-transporter-object)*. L'objet transporteur retourné sera alors utilisé pour l'envoi d'emails.

> Cette commande n'ouvre pas de connexion au serveur SMTP. La connexion SMTP est réellement ouverte lorsque la fonction [`.send()`](#send) est exécutée.  
> 
> La connexion SMTP est automatiquement fermée :
> 
> * lorsque l'objet transporteur est détruit si la propriété [`keepAlive`](#keepalive) est vraie (par défaut),
> * après chaque exécution de la fonction  [`.send()`](#send) si la propriété [`keepAlive`](#keepalive) a la valeur faux.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                          | Valeur par défaut (si omise)                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                                            |
| .**accessTokenOAuth2**: Text  Chaîne représentant les identifiants d'autorisation OAuth 2. Utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné dans l'objet *[SMTP transporter](#smtp-transporter-object)*. | aucun                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                            |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                            |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatoire*                                                                    |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->| True                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| aucun                                                                            |
| **password** : Text   Mot de passe utilisateur pour l'authentification sur le serveur. Non retourné dans l'objet *[SMTP transporter](#smtp-transporter-object)*.                                                                                                                                                                                                  | aucun                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 587                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->| 100                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| aucun                                                                            |

#### Résultat

La fonction retourne un [**objet SMTP transporter**](#smtp-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.

#### Exemple

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" //obligatoire
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //journal étendu stocké dans le dossier Logs

 var $transporter : 4D.SMTPTransporter
 $transporter:=SMTP New transporter($server)

 $email:=New object
 $email.subject:="my first mail "
 $email.from:="4d@gmail.com"
 $email.to:="4d@4d.com;test@4d.com"
 $email.textBody:="Hello World"
 $email.htmlBody:="<h1>Hello World</h1><h4>'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'</h4>\
 There are many variations of passages of Lorem Ipsum available."\
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
| Paramètres | Type               |    | Description                                                                   |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------------- |
| server     | Object             | -> | Informations sur le serveur IMAP                                              |
| Résultat   | 4D.SMTPTransporter | <- | [objet SMTP transporter](#smtp-transporter-object)|<!-- END REF -->

|

#### Description

La fonction `4D.SMTPTransporter.new()` <!-- REF #4D.SMTPTransporter.new().Summary -->crée et renvoie un nouvel objet du type `4D.SMTPTransporter`<!-- END REF -->. Elle est identique à la commande [`SMTP New transporter`](#smtp-new-transporter) (raccourci).

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

La propriété `.keepAlive` contient <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** si la connexion SMTP doit rester active jusqu'à la destruction de l'objet `transporter`<!-- END REF -->, et **False** sinon. Par défaut, si la propriété `keepAlive` n'a pas été définie dans l'objet `server` qui permet de créer l'objet `transporter` via la commande `SMTP New transporter`), elle est mise à **True**.

La connexion SMTP est automatiquement fermée :

* lorsque l'objet `transporter` est détruit si la propriété `.keepAlive` est mise à vrai,
* après chaque fonction `.send( )` exécutée si la propriété `.keepAlive` est mise à faux.

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
| Paramètres | Type   |    | Description                                         |
| ---------- | ------ |:--:| --------------------------------------------------- |
| mail       | Object | -> | [Email](EmailObjectClass.md#email-object) à envoyer |
| Résultat   | Object | <- | Statut SMTP|<!-- END REF -->

|

#### Description

La fonction `.send()` <!-- REF #SMTPTransporterClass.send().Summary -->envoie l'objet [*mail*](EmailObjectClass.md#objet-email) au serveur SMTP défini dans l'objet `transporter` et retourne un objet statut<!-- END REF -->.
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

| Propriété  | Valeur                 |
| ---------- | ---------------------- |
| success    | False                  |
| status     | 0                      |
| statusText | "Failed to send email" |

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
