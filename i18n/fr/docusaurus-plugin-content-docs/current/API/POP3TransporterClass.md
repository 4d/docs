---
id: POP3TransporterClass
title: POP3Transporter
---

La classe `POP3Transporter` vous permet de récupérer des messages à partir d'un serveur de messagerie POP3.

### Objet POP3 Transporter

Les objets POP3 Transporter sont instanciés avec la commande [`POP3 New transporter`](../commands/pop3-new-transporter.md). Leurs propriétés et fonctions sont les suivantes :

|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary --> |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                   |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                        |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                      |
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #POP3TransporterClass.delete().Summary -->                                 |
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->                     |
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #POP3TransporterClass.getMail().Summary -->                              |
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<br/><!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->                  |
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<br/><!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->      |
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->            |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                    |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                             |
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<br/><!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->                  |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                             |

## 4D.POP3Transporter.new()

<!-- REF #4D.POP3Transporter.new().Syntax -->**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF #4D.POP3Transporter.new().Params -->

| Paramètres | Type                               |                             | Description                                       |
| ---------- | ---------------------------------- | :-------------------------: | ------------------------------------------------- |
| server     | Object                             |              ->             | Informations sur le serveur IMAP                  |
| Résultat   | 4D.POP3Transporter | <- | [Objet POP3 Transporter](#objet-pop3-transporter) |

<!-- END REF -->

#### Description

La fonction `4D.POP3Transporter.new()` <!-- REF #4D.POP3Transporter.new().Summary -->crée et retourne un nouvel objet de type `4D.POP3Transporter`<!-- END REF -->. Elle est identique à la commande [`POP3 New transporter`](../commands/pop3-new-transporter.md) (raccourci).

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

| Paramètres | Type    |     | Description                   |
| ---------- | ------- | :-: | ----------------------------- |
| msgNumber  | Integer |  -> | Numéro du message à supprimer |

<!-- END REF -->

##### Description

La fonction `.delete()` <!-- REF #POP3TransporterClass.delete().Summary -->marque l'email *msgNumber* pour suppression sur le serveur POP3<!-- END REF -->.

Dans le paramètre *msgNumber*, passez le numéro de l'email à supprimer. Ce numéro est renvoyé dans la propriété number par la [fonction `.getMailInfoList()`](#getmailinfolist).

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

| Paramètres | Type   |                             | Description   |
| ---------- | ------ | :-------------------------: | ------------- |
| Résultat   | Object | <- | Objet boxInfo |

<!-- END REF -->

##### Description

La fonction `.getBoxInfo()`<!-- REF #POP3TransporterClass.getBoxInfo().Summary --> retourne un objet `boxInfo` correspondant à la boite de réception désignée par l'objet [POP3 transporter](#objet-pop3-transporter)<!-- END REF -->. Cette fonction vous permet de récupérer des informations sur la boite de réception.

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

| Release | Modifications                             |
| ------- | ----------------------------------------- |
| 20      | Prise en charge du paramètre *headerOnly* |
| 18 R2   | Ajout                                     |

</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->**.getMail**( *msgNumber* : Integer { ; *headerOnly* : Boolean } ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMail().Params -->

| Paramètres | Type    |                             | Description                                                                                     |
| ---------- | ------- | :-------------------------: | ----------------------------------------------------------------------------------------------- |
| msgNumber  | Integer |              ->             | Numéro du message dans la liste                                                                 |
| headerOnly | Boolean |              ->             | True pour télécharger uniquement les en-têtes de l'email (par défaut, False) |
| Résultat   | Object  | <- | [Objet Email](EmailObjectClass.md#objet-email)                                                  |

<!-- END REF -->

##### Description

La fonction `.getMail()`<!-- REF #POP3TransporterClass.getMail().Summary --> retourne l'objet `Email` correspondant au *msgNumber* dans la boite de réception désignée par l'objet [POP3 transporter](#objet-pop3-transporter)<!-- END REF -->. Cette fonction vous permet de gérer localement le contenu de l'email.

Passez dans *msgNumber* le numéro du message à récupérer. Ce numéro est renvoyé dans la propriété `number` par la fonction [`.getMailInfoList()`](#getmailinfolist).

Optionnellement, vous pouvez passer `true` dans le paramètre *headerOnly* pour exclure les parties body de l'objet `Email` renvoyé. Seules les propriétés d'en-tête ([`headers`](EmailObjectClass.md#headers), [`to`](EmailObjectClass.md#to), [`from`](EmailObjectClass.md#from)...) sont ensuite renvoyées. Cette option vous permet d'optimiser l'étape de téléchargement lorsque beaucoup d'emails sont sur le serveur.

:::note

L'option *headerOnly* peut ne pas être prise en charge par le serveur.

:::

La fonction retourne Null si :

- *msgNumber* désigne un message inexistant,
- le message a été marqué pour suppression à l'aide de [`.delete()`](#delete).

**Objet retourné**

`.getMail()` renvoie un [objet `Email`](EmailObjectClass.md#objet-email).

##### Exemple

Vous souhaitez connaitre l'expéditeur du premier mail de la boite de réception :

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //obligatoire
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

| Paramètres | Type    |                             | Description                     |
| ---------- | ------- | :-------------------------: | ------------------------------- |
| msgNumber  | Integer |              ->             | Numéro du message dans la liste |
| Résultat   | Object  | <- | Objet MailInfo                  |

<!-- END REF -->

##### Description

La fonction `.getMailInfo()`<!-- REF #IMAPTransporterClass.getMailInfo().Summary -->retourne un objet `mailInfo` correspondant au *msgNumber* dans la boite de réception désignée par le [transporteur `POP3`](#objet-transporteur-pop3)<!-- END REF -->. Cette fonction vous permet de récupérer des informations sur l'email.

Dans le paramètre *msgNumber*, passez le numéro de l'email à récupérer. Ce numéro est renvoyé dans la propriété number par la [fonction `.getMailInfoList()`](#getmailinfolist).

L'objet `mailInfo` retourné contient les propriété suivantes :

| Propriété | Type   | Description                 |
| --------- | ------ | --------------------------- |
| size      | Number | Taille du message en octets |
| id        | Text   | ID unique du message        |

La fonction retourne **Null** si :

- *msgNumber* désigne un message inexistant,
- le message a été marqué pour suppression à l'aide de `.delete()`.

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

| Paramètres | Type       |                             | Description                    |
| ---------- | ---------- | :-------------------------: | ------------------------------ |
| Résultat   | Collection | <- | Collection d'objets `mailInfo` |

<!-- END REF -->

##### Description

La fonction `.getMailInfoList()`<!-- REF #POP3TransporterClass.getMailInfoList().Summary --> retourne une collection d'objets `mailInfo` décrivant tous les messages dans la boite de réception désignée par le [transporteur `POP3`](#objet-transporteur-pop3)<!-- END REF -->. Cette fonction vous permet de gérer localement les listes de messages situés sur le serveur de messagerie POP3.

Chaque objet `mailInfo` retourné contient les propriété suivantes :

| Propriété                                                                        | Type   | Description                                                                           |
| -------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| \[ ].size   | Number | Taille du message en octets                                                           |
| \[ ].number | Number | Numéro du message                                                                     |
| \[ ].id     | Text   | ID unique du message (utile si vous stockez le message localement) |

Si la boîte de réception ne contient pas de message, une collection vide est retournée.

#### Propriétés number et ID

*number* est le numéro d'un message de la boite de réception au moment de la création du `POP3_transporter`. La propriété *number* n'est pas une valeur statique liée à un message spécifique. Elle change d'une session à l'autre en fonction de sa relation à d'autres messages de la boîte de réception au moment de l'ouverture de la session. Les numéros attribués aux messages ne sont valables que pendant la durée de vie de l'objet [`POP3_transporter`](#pop3-transporter-object). Lorsque le `POP3_transporter` est supprimé, les messages marqués pour suppression seront supprimés. Lorsque l'utilisateur se reconnecte au serveur, les messages courants de la boîte de réception sont renumérotés de 1 à x.

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

| Paramètres | Type    |                             | Description                                          |
| ---------- | ------- | :-------------------------: | ---------------------------------------------------- |
| msgNumber  | Integer |              ->             | Numéro du message dans la liste                      |
| Résultat   | Blob    | <- | Blob de la chaine MIME retournée par le serveur mail |

<!-- END REF -->

##### Description

La fonction `.getMIMEAsBlob()` <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->renvoie un BLOB contenant le contenu MIME du message correspondant au *msgNumber* dans la boîte aux lettres désignée par l'objet [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

Dans le paramètre *msgNumber*, passez le numéro de l'email à récupérer. Ce numéro est renvoyé dans la propriété number par la [fonction `.getMailInfoList()`](#getmailinfolist).

La fonction retourne un Blob vide si :

- *msgNumber* désigne un message inexistant,
- le message a été marqué pour suppression à l'aide de `.delete()`.

**BLOB retourné**

`.getMIMEAsBlob()` renvoie un `BLOB` qui peut être archivé dans une base de données ou converti en un objet [`Email`](EmailObjectClass.md#objet-email) avec la commande `MAIL Convert from MIME`.

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

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

##### Description

La fonction `.undeleteAll()` <!-- REF #POP3TransporterClass.undeleteAll().Summary -->supprime tous les marqueurs de suppression définis sur les emails dans le [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
