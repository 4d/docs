---
id: SMTPTransporterClass
title: SMTPTransporter
---

La classe `SMTPTransporter` vous permet de configurer des connexions SMTP et d'envoyer des emails par le biais d'objets *SMTP transporter*.



### Objet SMTP Transporter

Les objets SMTP Transporter sont instanciés avec la commande [SMTP New transporter](#smtp-new-transporter). Leurs propriétés et fonctions sont les suivantes :


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.send().Summary -->|
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF SMTPTransporterClass.SMTP New transporter.Desc -->
## SMTP New transporter

<details><summary>Historique</summary>
| Version | Modifications                                |
| ------- | -------------------------------------------- |
| v18     | New logFile property                         |
| v17 R5  | New bodyCharset and headerCharset properties |
| v17 R4  | Ajout                                        |
</details>

<!-- REF #_command_.SMTP New transporter.Syntax -->
**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!-- REF #_command_.SMTP New transporter.Params -->
| Paramètres | Type               |    | Description                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | Objet              | -> | Mail server information                             |
| Résultat   | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object) |
<!-- END REF -->


#### Description

The `SMTP New transporter` command <!-- REF #_command_.SMTP New transporter.Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new *[SMTP transporter](#smtp-transporter-object)* object. The returned transporter object will then usually be used to send emails.

> Cette commande n'ouvre pas de connexion au serveur SMTP. La connexion SMTP est réellement ouverte lorsque la fonction [`.send()`](#send) est exécutée.  
> 
> La connexion SMTP est automatiquement fermée : * lorsque l'objet transporteur est détruit si la propriété [`keepAlive`](#keepalive) est mise à true (par défaut), * après chaque exécution de la fonction [`.send( )`](#send) si la propriété [`keepAlive`](#keepalive) est mise à false.




In the *server* parameter, pass an object containing the following properties:

| *server*                                                                                                                                                                                                                                                                                                                                                                                    | Valeur par défaut (si omise)                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| Faux                                                                             |
| .**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Il est utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné en objet *[SMTP transporter](#smtp-transporter-object)*. | aucune                                                                           |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.bodyCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                            |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.headerCharset.Summary -->| `mail mode UTF8` (US-ASCII_UTF8_QP)                                            |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatoire*                                                                    |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->| Vrai                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| aucune                                                                           |
| **password** : Text<p>Mot de passe de l'utilisateur pour l'authentification sur le serveur. Non retourné en objet *[SMTP transporter](#smtp-transporter-object)*.                                                                                                                                                                                                    | aucune                                                                           |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 587                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.sendTimeOut.Summary -->| 100                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| aucune                                                                           |



#### Résultat

The function returns a [**SMTP transporter object**](#smtp-transporter-object). All returned properties are **read-only**.


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
| Paramètres | Type               |    | Description                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | Objet              | -> | Mail server information                             |
| Résultat   | 4D.SMTPTransporter | <- | [SMTP transporter object](#smtp-transporter-object) |
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
| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajout         |
</details>

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->
**.keepAlive** : Boolean<!-- END REF -->


#### Description

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**True** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **False** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object with `SMTP New transporter`), it is **True**.

The SMTP connection is automatically closed:

*   when the `transporter` object is destroyed if the `.keepAlive` property is true,
*   after each `.send( )` function execution if the `.keepAlive` property is set to false.






<!-- INCLUDE transporter.logFile.Desc -->




<!-- INCLUDE transporter.port.Desc -->




## .send()

<details><summary>Historique</summary>
| Version | Modifications            |
| ------- | ------------------------ |
| v17 R5  | Support of mime contents |
| v17 R4  | Ajout                    |
</details>

<!-- REF #SMTPTransporterClass.send().Syntax -->
**.send**( *mail* : Object ) : Object<!-- END REF -->

<!-- REF #SMTPTransporterClass.send().Params -->
| Paramètres | Type  |    | Description                                       |
| ---------- | ----- |:--:| ------------------------------------------------- |
| mail       | Objet | -> | [Email](EmailObjectClass.md#email-object) to send |
| Résultat   | Objet | <- | SMTP status                                       |
<!-- END REF -->


#### Description

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [*mail* object](EmailObjectClass.md#email-object) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.
> L'objet `transporter` doit avoir déjà été créé à l'aide de la commande `SMTP New transporter`.

The method creates the SMTP connection if it is not already alive. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send()`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the [`SMTP New transporter`](#smtp-new-transporter) command description.

In *mail*, pass a valid [`Email` object](EmailObjectClass.md#email-object) to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional.


#### Objet retourné

The function returns an object describing the SMTP status of the operation. This object can contain the following properties:

| Propriété  | Type    | Description                                                                                      |
| ---------- | ------- | ------------------------------------------------------------------------------------------------ |
| success    | boolean | True if the send is successful, False otherwise                                                  |
| status     | number  | Status code returned by the SMTP server (0 in case of an issue unrelated to the mail processing) |
| statusText | Texte   | Status message returned by the SMTP server                                                       |

In case of an issue unrelated to the SMTP processing (e.g. a mandatory property is missing in mail), 4D generates an error that you can intercept using a method installed by the `ON ERR CALL` command. Use the `GET LAST ERROR STACK` command for information about the error.

In this case, the resulting status object contains the following values:

| Propriété  | Valeur                 |
| ---------- | ---------------------- |
| success    | Faux                   |
| status     | 0                      |
| statusText | "Failed to send email" |


<!-- INCLUDE transporter.sendTimeOut.Desc -->




<!-- INCLUDE transporter.user.Desc -->


<style> h2 { background: #d9ebff;}</style>
