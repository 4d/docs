---
id: POP3TransporterClass
title: POP3Transporter
---

La classe `POP3Transporter` vous permet de récupérer des messages à partir d'un serveur de messagerie POP3.

### Objet POP3 Transporter

Les objets Transporter POP3 sont instanciés avec la commande [POP3 New transporter](#pop3-new-transporter). Leurs propriétés et fonctions sont les suivantes :

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|


<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #_command_.POP3 New transporter.Params -->
| Paramètres | Type               |    | Description                                                                   |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------------- |
| server     | object             | -> | Informations sur le serveur IMAP                                              |
| Résultat   | 4D.POP3Transporter | <- | [objet POP3 transporter](#pop3-transporter-object)|<!-- END REF -->


|


#### Description

La commande `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary -->configure une nouvelle connexion POP3<!-- END REF -->selon le paramètre *server* et renvoie un nouvel objet *[POP3 transporter](#pop3-transporter-object)*. L'objet transporteur retourné sera alors utilisé pour la réception d'emails.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                 | Valeur par défaut (si omise)                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                                            |
| .**accessTokenOAuth2**: Text String representing OAuth 2 authorization credentials. Utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné dans l'objet *[SMTP transporter](#smtptransporterobject)*. | aucun                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatoire*                                                                    |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| aucun                                                                            |
| **.password** : Text  User password for authentication on the server. Non retourné dans l'objet *[SMTP transporter](#smtptransporterobject)*.                                                                                                                                                                                                            | aucun                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| aucun                                                                            |

#### Résultat

La fonction retourne un [**objet POP3 transporter**](#pop3-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.
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

<!-- REF #4D.POP3Transporter.new().Syntax -->**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #4D.POP3Transporter.new().Params -->
| Paramètres | Type               |    | Description                                                                   |
| ---------- | ------------------ |:--:| ----------------------------------------------------------------------------- |
| server     | Object             | -> | Informations sur le serveur IMAP                                              |
| Résultat   | 4D.POP3Transporter | <- | [objet POP3 transporter](#pop3-transporter-object)|<!-- END REF -->

|

#### Description

La fonction `4D.POP3Transporter.new()` <!-- REF #4D.POP3Transporter.new().Summary -->crée et renvoie un nouvel objet du type `4D.POP3Transporter`<!-- END REF -->. .

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

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->**.delete**( *msgNumber* : Integer )<!-- END REF -->


<!-- REF #POP3TransporterClass.delete().Params -->
| Paramètres | Type    |    | Description                                              |
| ---------- | ------- |:--:| -------------------------------------------------------- |
| msgNumber  | Integer | -> | Numéro du message à supprimer|<!-- END REF -->

|

##### Description

La fonction `delete()` <!-- REF #POP3TransporterClass.delete().Summary -->marque l'email *msgNumber* pour suppression du serveur POP3<!-- END REF -->.

Dans le paramètre *msgNumber*, passez le numéro de l'email à supprimer. Ce numéro est retourné dans la propriété number par la fonction [`.getMailInfoList()`](#getmailinfolist).

L'exécution de cette méthode ne supprime pas réellement l'email. L'email marqué sera supprimé sur le serveur POP3 uniquement lorsque l'objet `POP3_transporter` (créé à l'aide de `POP3 New transporter`) sera détruit. Le marqueur pourra également être retiré via la fonction `.undeleteAll()`.
> Si la session courante se termine inopinément et que le connexion est fermée (ex : timeout, panne de réseau, etc.), un message d'erreur est généré et les messages marqués pour suppression demeureront sur le serveur POP3.

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

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->**.getBoxInfo()** : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| Paramètres | Type   |    | Description                              |
| ---------- | ------ |:--:| ---------------------------------------- |
| Résultat   | Object | <- | Objet boxInfo|<!-- END REF -->

|

##### Description

La fonction `.getBoxInfo()` <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->renvoie un objet `boxInfo` correspondant à la boîte aux lettres désignée par le [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Cette fonction vous permet de récupérer des informations sur la boite de réception.

L'objet `boxInfo` contient les propriété suivantes :

| Propriété | Type   | Description                                            |
| --------- | ------ | ------------------------------------------------------ |
| mailCount | Number | Nombre de messages contenus dans la boîte de réception |
| size      | Number | Taille du message en octets                            |

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

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMail().Params -->
| Paramètres | Type    |    | Description                                                                |
| ---------- | ------- |:--:| -------------------------------------------------------------------------- |
| msgNumber  | Integer | -> | Numéro du message dans la liste                                            |
| Résultat   | Object  | <- | [Objet email](EmailObjectClass.md#email-object)|<!-- END REF -->

|

##### Description

La fonction `.getMail()` <!-- REF #POP3TransporterClass.getMail().Summary -->renvoie l'objet `Email ` correspondant au *msgNumber * dans la boîte aux lettres désignée par le [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Cette fonction vous permet de gérer localement le contenu de l'email.

Passez dans *msgNumber* le numéro du message à récupérer. Ce numéro est retourné dans la propriété number par la fonction [`.getMailInfoList()`](#getmailinfolist).

La fonction retourne Null si :

* *msgNumber* désigne un message inexistant,
* le message a été marqué pour suppression à l'aide de `.delete()`.

**Objet retourné**

`.getMail()` retourne un [objet `Email`](EmailObjectClass.md#email-object).

##### Exemple

Vous souhaitez connaitre l'expéditeur du premier mail de la boite de réception :

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

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| Paramètres | Type    |    | Description                               |
| ---------- | ------- |:--:| ----------------------------------------- |
| msgNumber  | Integer | -> | Numéro du message dans la liste           |
| Résultat   | Object  | <- | Objet MailInfo|<!-- END REF -->

|

##### Description

La fonction `.getMailInfo()` <!-- REF #POP3TransporterClass.getMailInfo().Summary -->retourne un objet `mailInfo` correspondant au *msgNumber* de la boite de réception désignée par le [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Cette fonction vous permet de récupérer des informations sur l'email.

Dans le paramètre *msgNumber*, passez le numéro de l'email à récupérer. Ce numéro est retourné dans la propriété number par la fonction [`.getMailInfoList()`](#getmailinfolist).

L'objet `mailInfo` retourné contient les propriété suivantes :

| Propriété | Type   | Description                 |
| --------- | ------ | --------------------------- |
| size      | Number | Taille du message en octets |
| id        | Text   | ID unique du message        |

La fonction retourne **Null** si :

* *msgNumber* désigne un message inexistant,
* le message a été marqué pour suppression à l'aide de `.delete()`.

##### Exemple

```4d
 var $server; $mailInfo : Object
 var $mailNumber : Integer

 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

  //message info
 $mailInfo:=$transporter.getMailInfo(1) //get the first mail
 If($mailInfo #Null)
    ALERT("First mail size is:"+String($mailInfo.size)+" bytes.")
 End if
```

## .getMailInfoList()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->**.getMailInfoList()** : Collection<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| Paramètres | Type       |    | Description                                               |
| ---------- | ---------- |:--:| --------------------------------------------------------- |
| Résultat   | Collection | <- | Collection d'objets `mailInfo`|<!-- END REF -->

|

##### Description

La fonction `.getMailInfoList()` <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->retourne une collection d'objets `mailInfo` décrivant les messages de la boîte de réception désignée par le [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Cette fonction vous permet de gérer localement les listes de messages situés sur le serveur de messagerie POP3.

Chaque objet `mailInfo` retourné contient les propriété suivantes :

| Propriété    | Type   | Description                                                        |
| ------------ | ------ | ------------------------------------------------------------------ |
| \[ ].size   | Number | Taille du message en octets                                        |
| \[ ].number | Number | Numéro du message                                                  |
| \[ ].id     | Text   | ID unique du message (utile si vous stockez le message localement) |

Si la boîte de réception ne contient pas de message, une collection vide est retournée.

#### Propriétés number et ID

*number* est le numéro d'un message de la boite de réception au moment de la création du `POP3_transporter`. La propriété *number* n'est pas une valeur statique liée à un message spécifique. Elle change d'une session à l'autre en fonction de sa relation à d'autres messages de la boîte de réception au moment de l'ouverture de la session. Les numéros assignés aux messages sont valides uniquement pendant la durée de vie du [`POP3_transporter`](#pop3-transporter-object). Lorsque le `POP3_transporter` est supprimé, les messages marqués pour suppression seront supprimés. Lorsque l'utilisateur se reconnecte au serveur, les messages courants de la boîte de réception sont renumérotés de 1 à x.

A l'inverse, *id* est un numéro unique assigné à un message lorsqu'il a été reçu par le serveur. Ce numéro est calculé à l'aide de l'heure et de la date de réception du message et sa valeur est assignée par votre serveur POP3. Malheureusement, les serveurs POP3 n'utilisent pas l'*id* comme référence primaire à leurs messages. Durant les sessions POP3, vous aurez besoin d'indiquer le *number* comme référence aux messages du serveur. Les développeurs doivent être vigilants s'ils développent des solutions qui importent des références aux messages dans une base de données tout en laissant le corps du message sur le serveur.

##### Exemple

Vous souhaitez connaitre le nombre total d'emails de la boîte de réception ainsi que leur taille :

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

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->


<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| Paramètres | Type    |    | Description                                                                     |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------- |
| msgNumber  | Integer | -> | Numéro du message dans la liste                                                 |
| Résultat   | Blob    | <- | Blob de la chaine MIME retournée par le serveur mail|<!-- END REF -->

|

##### Description

La fonction `.getMIMEAsBlob()` <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->renvoie un BLOB avec le contenu MIME du message correspondant au *msgNumber* dans la boîte de réception désignée par le [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

Dans le paramètre *msgNumber*, passez le numéro de l'email à récupérer. Ce numéro est retourné dans la propriété number par la fonction [`.getMailInfoList()`](#getmailinfolist).

La fonction retourne un Blob vide si :

* *msgNumber* désigne un message inexistant,
* le message a été marqué pour suppression à l'aide de `.delete()`.

**BLOB retourné**

`.getMIMEAsBlob()` retourne un `BLOB` qui peut être archivé dans une base de données ou converti en un objet [`Email`](EmailObjectClass.md#objet-email) avec la commande `MAIL Convert from MIME`.

##### Exemple

Vous souhaitez connaitre le nombre total d'emails de la boîte de réception ainsi que leur taille :

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

<!-- REF POP3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->**.undeleteAll()**<!-- END REF -->


<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |::| ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

##### Description

La fonction `.undeleteAll()` <!-- REF #POP3TransporterClass.undeleteAll().Summary -->supprime tous les marqueurs de suppression définis pour les emails de [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
