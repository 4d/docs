---
id: pop3TransporterClass
title: POP3Transporter
---

La classe `POP3Transporter` vous permet de récupérer des messages à partir d'un serveur de messagerie POP3.


### Objet POP3 Transporter

Les objets Transporter POP3 sont instanciés avec la commande [POP3 New transporter](#pop3-new-transporter). They provide the following properties and functions:


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #pop3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #pop3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF pop3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajoutées      |
</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->
**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF pop3TransporterClass.POP3 New transporter.Params -->
| Paramètres | Type               |    | Description                                        |
| ---------- | ------------------ |:--:| -------------------------------------------------- |
| server     | object             | -> | Mail server information                            |
| Résultat   | 4D.POP3Transporter | <- | [Objet POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->


#### Description

La commande `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary -->configure une nouvelle connexion POP3<!-- END REF -->en fonction du paramètre *server* et retourne un nouvel objet *[POP3 transporter](#pop3-transporter-object)*. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:


| *server*                                                                                                                                                                                                                                                                                                                                                        | Default value (if omitted)                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| Faux                                                                |
| .**accessTokenOAuth2**: Text<p>Text string representing OAuth 2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](#smtptransporterobject)* object. | none                                                                |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                         |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| none                                                                |
| **.password** : Text<p>User password for authentication on the server. Not returned in *[SMTP transporter](#smtptransporterobject)* object.                                                                                                                                                                                              | none                                                                |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| none                                                                |


#### Résultat

La fonction retourne un [**objet POP3 transporter**](#pop3-transporter-object). All returned properties are **read-only**.
> La connexion POP3 est automatiquement fermée lorsque l'objet transporteur est détruit.

#### Exemple

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log à enregistrer dans le dossier Logs

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->

## 4D.POP3Transporter.new()


<!-- REF #4D.POP3Transporter.new().Syntax -->
**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF #4D.POP3Transporter.new().Params -->
| Paramètres | Type               |    | Description                                        |
| ---------- | ------------------ |:--:| -------------------------------------------------- |
| server     | Objet              | -> | Mail server information                            |
| Résultat   | 4D.POP3Transporter | <- | [Objet POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->

#### Description

La fonction `4D.POP3Transporter.new()` <!-- REF #4D.POP3Transporter.new().Summary -->crée et retourne un nouvel objet de type `4D.POP3Transporter`<!-- END REF -->. Elle est identique à la commande [`POP3 New transporter`](#pop3-new-transporter) (raccourci).

> Il est recommandé d'utiliser la commande de raccourci [`POP3 New transporter`](#pop3-new-transporter) au lieu de `4D.POP3Transporter.new()`. 

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->




<!-- INCLUDE transporter.authenticationModePOP3.Desc -->



<!-- INCLUDE transporter.checkConnection().Desc -->

#### Exemple

```4d
 var $pw :  Text
 var $options : Object
 $options:=New object

 $pw:=Request("Please enter your password:")
 if(OK=1)
    $options.host:="pop3.gmail.com"

    $options.user:="test@gmail.com"
    $options.password:=$pw

    $transporter:=POP3 New transporter($options)

    $status:=$transporter.checkConnection()
    If($status.success)
       ALERT("POP3 connection check successful!")
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
```


<!-- INCLUDE transporter.connectionTimeOut.Desc -->




## .delete()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajoutées      |
</details>

<!-- REF #pop3TransporterClass.delete().Syntax -->
**.delete**( *msgNumber* : Integer )<!-- END REF -->

<!-- REF #pop3TransporterClass.delete().Params -->
| Paramètres | Type        |    | Description                     |
| ---------- | ----------- |:--:| ------------------------------- |
| msgNumber  | Entier long | -> | Number of the message to delete |
<!-- END REF -->


##### Description

The `.delete( )` function <!-- REF #pop3TransporterClass.delete().Summary -->flags the *msgNumber* email for deletion from the POP3 server<!-- END REF -->.

In the *msgNumber* parameter, pass the number of the email to delete. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

Executing this method does not actually remove any email. The flagged email will be deleted from the POP3 server only when the `POP3_transporter` object (created with `POP3 New transporter`) is destroyed. The flag could be also be removed using the `.undeleteAll()` method.
> If the current session unexpectedly terminates and the connection is closed (e.g., timeout, network failure, etc.), an error message is generated and messages marked for deletion will remain on the POP3 server.

##### Exemple

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Marquer votre e-mail comme "à supprimer à la fin de la session"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Forcer la fermeture de la session pour supprimer les e-mails marqués pour suppression
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //suppression confirmée
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //supprimer les marqueurs de suppression
 End if
```




## .getBoxInfo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajoutées      |
</details>

<!-- REF #pop3TransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo()** : Object<!-- END REF -->

<!-- REF #pop3TransporterClass.getBoxInfo().Params -->
| Paramètres | Type  |    | Description    |
| ---------- | ----- |:--:| -------------- |
| Résultat   | Objet | <- | boxInfo object |
<!-- END REF -->


##### Description

The `.getBoxInfo()` function <!-- REF #pop3TransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to retrieve information about the mailbox.

The `boxInfo` object returned contains the following properties:

| Propriété | Type   | Description                                            |
| --------- | ------ | ------------------------------------------------------ |
| mailCount | Nombre | Nombre de messages contenus dans la boîte de réception |
| size      | Nombre | Taille du message en octets                            |



##### Exemple

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

  //mailbox info
 $boxInfo:=$transporter.getBoxInfo()
 ALERT("The mailbox contains "+String($boxInfo.mailCount)+" messages.")
```




## .getMail()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajoutées      |
</details>

<!-- REF #pop3TransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #pop3TransporterClass.getMail().Params -->
| Paramètres | Type        |    | Description                                      |
| ---------- | ----------- |:--:| ------------------------------------------------ |
| msgNumber  | Entier long | -> | Number of the message in the list                |
| Résultat   | Objet       | <- | [Email object](emailObjectClass.md#email-object) |
<!-- END REF -->


##### Description

The `.getMail()` function <!-- REF #pop3TransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to locally handle the email contents.

Pass in *msgNumber* the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) function.

The method returns Null if:

*   *msgNumber* désigne un message inexistant,
*   le message a été marqué pour suppression à l'aide de `.delete()`.


**Returned object**

`.getMail()` returns an [`Email` object](emailObjectClass.md#email-object).


##### Exemple

You want to know the sender of the first mail of the mailbox:

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```




## .getMailInfo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajoutées      |
</details>

<!-- REF #pop3TransporterClass.getMailInfo().Syntax -->
**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #pop3TransporterClass.getMailInfo().Params -->
| Paramètres | Type        |    | Description                       |
| ---------- | ----------- |:--:| --------------------------------- |
| msgNumber  | Entier long | -> | Number of the message in the list |
| Résultat   | Objet       | <- | mailInfo object                   |
<!-- END REF -->


##### Description

The `.getMailInfo()` function <!-- REF #pop3TransporterClass.getMailInfo().Summary -->returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to retrieve information about the email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfo) method.

The `mailInfo` object returned contains the following properties:

| Propriété | Type   | Description                 |
| --------- | ------ | --------------------------- |
| size      | Nombre | Taille du message en octets |
| id        | Texte  | ID unique du message        |

The method returns **Null** if:

*   *msgNumber* désigne un message inexistant,
*   le message a été marqué pour suppression à l'aide de `.delete()`.


##### Exemple


```4d
 var $server; $mailInfo : Object
 var $mailNumber : Integer

 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

  //message info
 $mailInfo:=$transporter.getMailInfo(1) //obtenir le premier e-mail
 If($mailInfo #Null)
    ALERT("First mail size is:"+String($mailInfo.size)+" bytes.")
 End if
```




## .getMailInfoList()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajoutées      |
</details>

<!-- REF #pop3TransporterClass.getMailInfoList().Syntax -->
**.getMailInfoList()** : Collection<!-- END REF -->

<!-- REF #pop3TransporterClass.getMailInfoList().Params -->
| Paramètres | Type       |    | Description                      |
| ---------- | ---------- |:--:| -------------------------------- |
| Résultat   | Collection | <- | Collection of `mailInfo` objects |
<!-- END REF -->


##### Description

The `.getMailInfoList()` function <!-- REF #pop3TransporterClass.getMailInfoList().Summary -->returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. This function allows you to locally manage the list of messages located on the POP3 mail server.

Each `mailInfo` object in the returned collection contains the following properties:

| Propriété    | Type   | Description                                                        |
| ------------ | ------ | ------------------------------------------------------------------ |
| \[ ].size   | Nombre | Taille du message en octets                                        |
| \[ ].number | Nombre | Numéro du message                                                  |
| \[ ].id     | Texte  | ID unique du message (utile si vous stockez le message localement) |

If the mailbox does not contain a message, an empty collection is returned.



#### number and ID properties

*number* is the number of a message in the mailbox at the time the `POP3_transporter` was created. The *number* property is not a static value in relation to any specific message and will change from session to session dependent on its relation to other messages in the mailbox at the time the session was opened. The numbers assigned to the messages are only valid during the lifetime of the [`POP3_transporter`](#pop3-transporter-object). At the time the `POP3_transporter` is deleted any message marked for deletion will be removed. When the user logs back into the server, the current messages in the mailbox will be renumbered from 1 to x.

The *id* however is a unique number assigned to the message when it was received by the server. This number is calculated using the time and date that the message is received and is a value assigned by your POP3 server. Unfortunately, POP3 servers do not use the *id* as the primary reference to their messages. Throughout the POP3 sessions you will need to specify the *number* as the reference to messages on the server. Developers may need to take some care if developing solutions which bring references to messages into a database but leave the body of the message on the server.


##### Exemple

You want to know the total number and size of emails in the mailbox:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obligatoire
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 C_COLLECTION($mailInfo)
 C_LONGINT($vNum;$vSize)

 $mailInfo:=$transporter.getMailInfoList()
 $vNum:=$mailInfo.length
 $vSize:=$mailInfo.sum("size")

 ALERT("The mailbox contains "+String($vNum)+" message(s) for "+String($vSize)+" bytes.")
```




## .getMIMEAsBlob()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |
</details>

<!-- REF #pop3TransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->

<!-- REF #pop3TransporterClass.getMIMEAsBlob().Params -->
| Paramètres | Type        |    | Description                                           |
| ---------- | ----------- |:--:| ----------------------------------------------------- |
| msgNumber  | Entier long | -> | Number of the message in the list                     |
| Résultat   | Blob        | <- | Blob of the MIME string returned from the mail server |
<!-- END REF -->


##### Description

The `.getMIMEAsBlob()` function <!-- REF #pop3TransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) method.

The method returns an empty BLOB if:

*   *msgNumber* désigne un message inexistant,
*   le message a été marqué pour suppression à l'aide de `.delete()`.


**Returned BLOB**

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](emailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.


##### Exemple

You want to know the total number and size of emails in the mailbox:

```4d
 var $server : Object
 var $mailInfo : Collection
 var $blob : Blob
 var $transporter : 4D.POP3Transporter

 $server:=New object
 $server.host:="pop.gmail.com"
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $blob:=$transporter.getMIMEAsBlob($mailInfo[0].number)
```



<!-- INCLUDE transporter.host.Desc -->






<!-- INCLUDE transporter.logFile.Desc -->



<!-- INCLUDE transporter.port.Desc -->





<!-- REF pop3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajoutées      |
</details>

<!-- REF #pop3TransporterClass.undeleteAll().Syntax -->
**.undeleteAll()**<!-- END REF -->

<!-- REF #pop3TransporterClass.undeleteAll().Params -->
| Paramètres | Type |  | Description                     |
| ---------- | ---- |::| ------------------------------- |
|            |      |  | Does not require any parameters |
<!-- END REF -->


##### Description

The `.undeleteAll()` function <!-- REF #pop3TransporterClass.undeleteAll().Summary -->removes all delete flags set on the emails in the [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->. 

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->



<style> h2 { background: #d9ebff;}</style>
