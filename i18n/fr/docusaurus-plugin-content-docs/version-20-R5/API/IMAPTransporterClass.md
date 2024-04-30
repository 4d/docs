---
id: IMAPTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from a IMAP email server.

### Objet IMAP Transporter

IMAP Transporter objects are instantiated with the [IMAP New transporter](#imap-new-transporter) command. Leurs propriétés et fonctions sont les suivantes :

|                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->       |
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->                                       |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                         |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary --> |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                            |
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->                                       |
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->                     |
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                                   |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                          |
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                                   |
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                                   |

## IMAP New transporter

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| Paramètres | Type                               |     | Description                                         |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Informations sur le serveur IMAP                    |
| Résultat   | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### Description

The `IMAP New transporter` command <!-- REF #_command_.IMAP New transporter.Summary -->configures a new IMAP connection<!-- END REF --> according to the _server_ parameter and returns a new _transporter_ object. L'objet transporteur retourné sera alors utilisé pour la réception d'emails.

In the _server_ parameter, pass an object containing the following properties:

| _server_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Valeur par défaut (si omise)                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                  | False                                                                            |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in _[IMAP transporter](#imap-transporter-object)_ object. | aucun                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                    | le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                            | 300                                                                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                       | 30                                                                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                              | _obligatoire_                                                                    |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                     | aucun                                                                            |
| .**password** : Text<br/>User password for authentication on the server. Not returned in _[IMAP transporter](#imap-transporter-object)_ object.                                                                                                                                                                                                                                                                                                                                   | aucun                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                              | 993                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                              | aucun                                                                            |

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

#### Résultat

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.

> La connexion IMAP est automatiquement fermée lorsque l'objet transporteur est détruit.

#### Exemple

```4d
$server:=New object
$server.host:="imap.gmail.com" //Obligatoire
$server.port:=993
$server.user:="4d@gmail.com"
$server.password:="XXXXXXXX"
$server.logFile:="LogTest.txt" //log à sauvegarder dans le dossier Logs

var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

$status:=$transporter.checkConnection()
If(Not($status.success))
   ALERT("An error occurred: "+$status.statusText)
End if
```

## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->

| Paramètres | Type                               |     | Description                                         |
| ---------- | ---------------------------------- | :-: | --------------------------------------------------- |
| server     | Object                             |  -> | Informations sur le serveur IMAP                    |
| Résultat   | 4D.IMAPTransporter |  <- | [IMAP transporter object](#imap-transporter-object) |

<!-- END REF -->

#### Description

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->creates and returns a new object of the `4D.IMAPTransporter` type<!-- END REF -->. It is identical to the [`IMAP New transporter`](#imap-new-transporter) command (shortcut).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->

## .addFlags()

<details><summary>Historique</summary>

| Release | Modifications                                                                    |
| ------- | -------------------------------------------------------------------------------- |
| 20      | Prise en charge des mots-clés personnalisés (custom keywords) |
| 18 R6   | Ajout                                                                            |

</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->

| Paramètres | Type       |     | Description                                                                                                                                                                                                                                             |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |  -> | Collection de chaînes : IDs uniques des messages (texte)<br/>Texte : ID unique d'un message<br/>Numérique (IMAP all) : Tous les messages de la boîte sélectionnée |
| keywords   | Object     |  -> | Mots-clés de flags à ajouter                                                                                                                                                                                                                            |
| Résultat   | Object     |  <- | Statut de l'opération addFlags                                                                                                                                                                                                                          |

<!-- END REF -->

#### Description

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| Constante | Valeur | Commentaire                                             |
| --------- | ------ | ------------------------------------------------------- |
| IMAP all  | 1      | Sélectionner tous les messages de la boîte sélectionnée |

The `keywords` parameter lets you define the flags to add to `msgIDs`. Vous pouvez utiliser les flags standard suivants ainsi que des flags personnalisés (la prise en charge des flags personnalisés dépend de l'implémentation du serveur) :

| Propriété       | Type    | Description                                         |
| --------------- | ------- | --------------------------------------------------- |
| $draft          | Boolean | True pour ajouter le marqueur "draft" au message    |
| $seen           | Boolean | True pour ajouter le marqueur "seen" au message     |
| $flagged        | Boolean | True pour ajouter le marqueur "flagged" au message  |
| $answered       | Boolean | True pour ajouter le marqueur "answered" au message |
| $deleted        | Boolean | True pour ajouter le marqueur "deleted" au message  |
| `<custom flag>` | Boolean | True pour ajouter le flag personnalisé au message   |

Les noms des flags personnalisés doivent respecter cette règle : le mot-clé doit être une chaîne non sensible à la casse, excluant les caractères de contrôle et les espaces, et ne peut inclure aucun de ces caractères : `( ) { ] % * " \`

> - Pour qu'un mot-clé soit pris en compte, il doit être à vrai.
> - L'interprétation des indicateurs de mots-clés peut varier selon le client de messagerie.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Créer transporteur
$transporter:=IMAP New transporter($options)

// Sélectionner la boîte de messagerie
$boxInfo:=$transporter.selectBox("INBOX")

// Marquer tous les messages de la boite de réception (INBOX) comme étant lus/vus
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.addFlags(IMAP all;$flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.append().Desc -->

## .append()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->

| Paramètres     | Type   |     | Description                                 |
| -------------- | ------ | :-: | ------------------------------------------- |
| mailObj        | Object |  -> | Objet email                                 |
| destinationBox | Text   |  -> | Mailbox devant recevoir l'objet email       |
| options        | Object |  -> | Objet contenant les informations de charset |
| Résultat       | Object |  <- | Statut de l'opération                       |

<!-- END REF -->

#### Description

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](EmailObjectClass.md#email-object). The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. S'il est omis, la mailbox courante sera utilisée.

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. Propriétés disponibles :

| Propriété     | Type | Description                                                                                                                                                                                                                           |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset et encodage utilisés pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Valeurs possibles : voir le tableau des charsets possibles |
| bodyCharset   | Text | Charset et encodage utilisés pour le contenu html et le texte du body du mail. Valeurs possibles : voir le tableau des charsets possibles                                                             |

Charsets possibles :

| Constante                | Valeur                                                                                      | Commentaire                                                                                                                                                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>bodyCharset: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                                     |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | headerCharset & bodyCharset : US-ASCII si possible, sinon UTF-8 & Quoted-printable (**valeur par défaut**)                                                                                      |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | headerCharset &bodyCharset : US-ASCII si possible, sinon UTF-8 & base64                                                                                                                                            |

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

Pour enregistrer un email dans la boîte Drafts :

```4d
var $settings; $status; $msg; $imap: Object

$settings:=New object("host"; "domain.com"; "user"; "xxxx"; "password"; "xxxx"; "port"; 993)

$imap:=IMAP New transporter($settings)

$msg:=New object
$msg.from:="xxxx@domain.com"
$msg.subject:="Lorem Ipsum"
$msg.textBody:="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
$msg.keywords:=New object
$msg.keywords["$seen"]:=True//flag the message as read
$msg.keywords["$draft"]:=True//flag the message as a draft

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : Integer<!-- END REF -->

#### Description

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  Si cette durée est dépassée entre deux appels de méthodes, la connexion au serveur sera vérifiée. By default, if the property has not been set in the _server_ object, the value is 300.

> **Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->

## .copy()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->

| Paramètres     | Type       |     | Description                                                      |
| -------------- | ---------- | :-: | ---------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | Collection d'IDs uniques de messages (texte)  |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox |
| destinationBox | Text       |  -> | Boîte de réception recevant les messages copiés                  |
| Résultat       | Object     |  <- | Statut de l'opération de copie                                   |

<!-- END REF -->

#### Description

The `.copy()` function <!-- REF #IMAPTransporterClass.copy().Summary -->copies the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

Vous pouvez passer :

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to copy, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to copy all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the copies of messages will be placed.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple 1

Pour copier une sélection de messages :

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copy found messages to the "documents" mailbox
 $status:=$transporter.copy($mailIds;"documents")
```

#### Exemple 2

Pour copier tous les messages de la boîte de réception courante :

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox

 $boxInfo:=$transporter.selectBox("inbox")

  // copy all messages to the "documents" mailbox
 $status:=$transporter.copy(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.createBox().Desc -->

## .createBox()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->

| Paramètres | Type   |     | Description                                  |
| ---------- | ------ | :-: | -------------------------------------------- |
| name       | Text   |  -> | Nom de la nouvelle mailbox                   |
| Résultat   | Object |  <- | Statut de l'opération de création de mailbox |

<!-- END REF -->

#### Description

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. Si le caractère séparateur de hiérarchie du serveur IMAP apparaît dans le nom de la mailbox, le serveur IMAP créera tous les boîtes parentes nécessaires pour créer la boîte donnée.

Par exemple, si vous essayez de créer "Projects/IMAP/Doc" dans un serveur dont le "/" est le caractère séparateur de hiérarchie, les éléments suivants seront créés :

- Only the "Doc" mailbox if "Projects" & "IMAP" already exist.
- "IMAP" & "Doc" mailboxes if only “Projects” already exists.
- "Projects" & “IMAP” & "Doc" mailboxes, if they do not already exist.

In the `name` parameter, pass the name of the new mailbox.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

Pour créer une nouvelle boîte “Invoices” :

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")
If(OK=1)
$options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$status:=$transporter.createBox("Invoices")

If ($status.success)
ALERT("Mailbox creation successful!")
Else
ALERT("Error: "+$status.statusText)
End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.delete().Desc -->

## .delete()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : Collection ) : Object<br/>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->

| Paramètres | Type       |     | Description                                                      |
| ---------- | ---------- | :-: | ---------------------------------------------------------------- |
| msgsIDs    | Collection |  -> | Collection d'IDs uniques de messages (texte)  |
| allMsgs    | Integer    |  -> | `IMAP all`: All messages in the selected mailbox |
| Résultat   | Object     |  <- | Statut de l'opération de suppression                             |

<!-- END REF -->

#### Description

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->sets the "deleted" flag for the messages defined in `msgsIDs` or `allMsgs`<!-- END REF -->.

Vous pouvez passer :

- in the `msgsIDs` parameter, a collection containing the unique IDs of the specific messages to delete, or
- in the `allMsgs` parameter, the `IMAP all` constant (integer) to delete all messages in the selected mailbox.

L'exécution de cette fonction ne supprime pas réellement les messages. Messages with the "delete" flag can still be found by the [.searchMails()](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the [transporter object](#imap-transporter-object) (created with [IMAP New transporter](#imap-new-transporter)) is destroyed.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple 1

Pour supprimer une sélection de messages :

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Delete selected messages
 $status:=$transporter.delete($mailIds)
```

#### Exemple 2

Pour supprimer tous les messages de la boîte de réception courante :

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Junk Email")

  // delete all messages in the current mailbox
 $status:=$transporter.delete(IMAP all)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.deleteBox().Desc -->

## .deleteBox()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->

| Paramètres | Type   |     | Description                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| name       | Text   |  -> | Nom de la boîte de réception à supprimer      |
| Résultat   | Object |  <- | Statut de l'opération de suppression de boîte |

<!-- END REF -->

#### Description

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given `name` from the IMAP server<!-- END REF -->. Si vous tentez de supprimer la boîte INBOX ou une boîte de réception qui n'existe pas, une erreur sera générée.

In the `name` parameter, pass the name of the mailbox to delete.

> - La fonction ne peut pas supprimer une boîte de réception contenant des boîtes "enfant" si la boîte "parente" dispose de l'attribute "\Noselect".
> - Tous les messages présents dans la boîte seront également supprimés.
> - La possibilité de supprimer une boîte de réception dépend du serveur de messagerie.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

Vous souhaitez supprimer la boîte enfant "Nova Orion Industries" à l'intérieur de la boîte "Bills" :

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// delete mailbox
$name:="Bills"+$transporter.getDelimiter()+"Nova Orion Industries"
$status:=$transporter.deleteBox($name)

If ($status.success)
 ALERT("Mailbox deletion successful!")
 Else
 ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Desc -->

## .expunge()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->

| Paramètres | Type   |     | Description                   |
| ---------- | ------ | :-: | ----------------------------- |
| Résultat   | Object |  <- | Statut de l'opération expunge |

<!-- END REF -->

#### Description

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) methods.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

```4d
var $options;$transporter;$boxInfo;$status : Object
var $ids : Collection

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Creation du transporter
$transporter:=IMAP New transporter($options)

// Sélection de la boîte
$boxInfo:=$transporter.selectBox("INBOX")

// Chercher et sélectionner les messages lus dans INBOX
$ids:=$transporter.searchMails("SEEN")
$status:=$transporter.delete($ids)

// Purger tous les messages marqués deleted
$status:=$transporter.expunge()
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->

## .getBoxInfo()

<details><summary>Historique</summary>

| Release | Modifications      |
| ------- | ------------------ |
| 20      | _id_ is returned   |
| 18 R5   | _name_ is optional |
| 18 R4   | Ajout              |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| Paramètres | Type   |     | Description                  |
| ---------- | ------ | :-: | ---------------------------- |
| name       | Text   |  -> | Nom de la boîte de réception |
| Résultat   | Object |  <- | Objet boxInfo                |

<!-- END REF -->

#### Description

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox _name_<!-- END REF -->. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional _name_ parameter, pass the name of the mailbox to access. Le nom doit représenter une hiérarchie claire, de gauche à droite, avec des niveaux séparés par un caractère délimiteur spécifique. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

If the mailbox _name_ is not selectable or does not exist, the function generates an error and returns **null**.

**Returned object**

The `boxInfo` object returned contains the following properties:

| Propriété  | Type   | Description                                                                                          |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------- |
| name       | text   | Nom de la boîte de réception                                                                         |
| mailCount  | number | Nombre de messages contenus dans la boîte de réception                                               |
| mailRecent | number | Nombre de messages portant le marqueur "récent" (indiquant les nouveaux messages) |
| id         | text   | Identifiant unique de la boîte aux lettres                                                           |

#### Exemple

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $info:=$transporter.getBoxInfo("INBOX")
 ALERT("INBOX contains "+String($info.mailRecent)+" recent emails.")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxList().Desc -->

## .getBoxList()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 18 R4   | Ajout                        |
| 19      | Add `isSubscribed` parameter |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->

| Paramètres | Type       |     | Description                 |
| ---------- | ---------- | :-: | --------------------------- |
| parameters | Object     |  -> | Objet de paramètre          |
| Résultat   | Collection |  <- | Collection d'objets mailbox |

<!-- END REF -->

#### Description

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. Cette fonction vous permet de gérer localement les listes de messages situés sur le serveur de messagerie IMAP.

In the optional `parameters` parameter, pass an object containing values to filter the returned mailboxes. Vous pouvez passer :

| Propriété    | Type    | Description                                                                                                |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| isSubscribed | Boolean | <li>**True** to return only subscribed mailboxes</li><li> **False** to return all available mailboxes</li> |

#### Résultat

Chaque objet de la collection retournée contient les propriétés suivantes :

| Propriété                                                                            | Type    | Description                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | Nom de la boîte de réception                                                                                                                                                                                                                                                                                                                   |
| \[].selectable  | boolean | Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>                                                                                                                                              |
| \[].inferior    | boolean | Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>                                                                                                                              |
| \[].interesting | boolean | Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul> |

Si le compte ne contient pas de boites de réception, une collection vide est retournée.

> - If there is no open connection, `.getBoxList()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the `.checkConnection( )` function is automatically called.

#### Exemple

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getDelimiter().Desc -->

## .getDelimiter()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->

| Paramètres | Type |     | Description                             |
| ---------- | ---- | :-: | --------------------------------------- |
| Résultat   | Text |  <- | Caractère de délimitation de hiérarchie |

<!-- END REF -->

#### Description

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

Le délimiteur est un caractère pouvant être utilisé pour :

- créer des boites de réception de niveau inférieur
- rechercher des niveaux inférieurs ou supérieurs dans la hiérarchie de la boite de réception

#### Résultat

Caractère de délimitation des noms de boites de réception.

> - If there is no open connection, `.getDelimiter()` will open a connection.
> - If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.

#### Exemple

```4d
 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMail().Desc -->

## .getMail()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br/>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->

| Paramètres | Type    |     | Description                                      |
| ---------- | ------- | :-: | ------------------------------------------------ |
| msgNumber  | Integer |  -> | Numéro de séquence du message                    |
| msgID      | Text    |  -> | ID unique du message                             |
| options    | Object  |  -> | Instructions sur la gestion du message           |
| Résultat   | Object  |  <- | [Email object](EmailObjectClass.md#email-object) |

<!-- END REF -->

#### Description

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->. Cette fonction vous permet de gérer localement le contenu de l'email.

Dans le premier paramètre, vous pouvez passer soit :

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _options_ parameter allows you pass an object defining additional instructions for handling the message. Les propriétés suivantes sont disponibles :

| Propriété  | Type    | Description                                                                                                                                                                                                                 |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | Si Vrai, le message est marqué comme "seen" (lu) dans la boite de réception. Si Faux, le message n'est pas marqué comme "seen". Valeur par défaut : Vrai |
| withBody   | boolean | Passez Vrai pour retourner le corps du message. Si Faux, seul l'en-tête du message est retourné. Valeur par défaut : Vrai                                                   |

> - The function generates an error and returns **Null** if _msgID_ designates a non-existing message,
> - If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
> - If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)\`.

#### Résultat

`.getMail()` returns an [`Email` object](EmailObjectClass.md#email-object) with the following specific IMAP properties: _id_, _receivedAt_, and _size_.

#### Exemple

Vous souhaitez lire le message avec ID = 1 :

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get Email object with ID 1
 $mail:=$transporter.getMail(1)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMails().Desc -->

## .getMails()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br/>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->

| Paramètres | Type       |     | Description                                                                                                                                                                                        |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids        | Collection |  -> | Collection d'identifiants de messages                                                                                                                                                              |
| startMsg   | Integer    |  -> | Numéro de séquence du premier message                                                                                                                                                              |
| endMsg     | Integer    |  -> | Numéro de séquence du dernier message                                                                                                                                                              |
| options    | Object     |  -> | Instructions sur la gestion du message                                                                                                                                                             |
| Résultat   | Object     |  <- | Object containing:<br/><ul><li>a collection of [Email objects](EmailObjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul> |

<!-- END REF -->

#### Description

The `.getMails()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns an object containing a collection of `Email` objects<!-- END REF -->.

**First Syntax:**

_**.getMails( ids { ; options } ) -> result**_

La première syntaxe vous permet de récupérer des messages en fonction de leurs identifiants.

In the _ids_ parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional _options_ parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**Second syntax:**

_**.getMails( startMsg ; endMsg { ; options } ) -> result**_

La deuxième syntaxe vous permet de récupérer des messages en fonction d'une plage séquentielle. Les valeurs passées représentent la position des messages dans la boite de réception.

In the _startMsg_ parameter, pass an _integer_ value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an _integer_ value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional _options_ parameter allows you to define the parts of the messages to be returned.

**Options**

| Propriété  | Type    | Description                                                                                                                                                                                                                           |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Boolean | Si Vrai, les messages sont marqués comme "seen" (lus) dans la boite de réception. Si Faux, les messages ne sont pas marqués comme "seen". Valeur par défaut : Vrai |
| withBody   | Boolean | Passez Vrai pour retourner le corps des messages spécifiés. Si Faux, seuls les en-tête des messages sont retournés. Valeur par défaut : Vrai                                          |

> - If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
> - If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).

#### Résultat

`.getMails()` returns an object containing the following collections:

| Propriété | Type       | Description                                                                                                                                                                                                                                                                                      |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| liste     | Collection | Collection of [`Email` objects](EmailObjectClass.md#email-object). Si aucun objet Email n'est trouvé, une collection vide est retournée.                                                                                                                         |
| notFound  | Collection | Collection of:<br/><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found. |

#### Exemple

Vous souhaitez récupérer les 20 emails les plus récents sans modifier le statut "seen" :

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
  // retrieve the headers of the last 20 messages without marking them as read
    $result:=$transporter.getMails($boxInfo.mailCount-20;$boxInfo.mailCount;\
     New object("withBody";False;"updateSeen";False))
    For each($mail;$result.list)
    // ...
    End for each
 End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMIMEAsBlob().Desc -->

## .getMIMEAsBlob()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br/>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->

| Paramètres | Type    |     | Description                                                                                                                                                           |
| ---------- | ------- | :-: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer |  -> | Numéro de séquence du message                                                                                                                                         |
| msgID      | Text    |  -> | ID unique du message                                                                                                                                                  |
| updateSeen | Boolean |  -> | Si Vrai, le message est marqué comme "seen" (lu) dans la boite de réception. Si Faux, le message demeure inchangé. |
| Résultat   | BLOB    |  <- | Blob de la chaine MIME retournée par le serveur mail                                                                                                                  |

<!-- END REF -->

#### Description

The `.getMIMEAsBlob()` function <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the _msgNumber_ or _msgID_ in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

Dans le premier paramètre, vous pouvez passer soit :

- _msgNumber_, an _integer_ value indicating the sequence number of the message to retrieve or
- _msgID_, a _text_ value indicating the unique ID of the message to retrieve.

The optional _updateSeen_ parameter allows you to specify if the message is marked as "seen" in the mailbox. Vous pouvez passer :

- **True** - to mark the message as "seen" (indicating the message has been read)
- **False** - to leave the message's "seen" status untouched

> * The function returns an empty BLOB if _msgNumber_ or msgID\* designates a non-existing message,
> * If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
> * If there is no open connection, `.getMIMEAsBlob()` will open a connection the last mailbox specified with `.selectBox()`.

#### Résultat

`.getMIMEAsBlob()` returns a `BLOB` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#email-object) with the `MAIL Convert from MIME` command.

#### Exemple

```4d
 var $server : Object
 var $boxInfo : Variant
 var $blob : Blob
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com"
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //get BLOB
 $blob:=$transporter.getMIMEAsBlob(1)
```

<!-- END REF -->

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- REF IMAPTransporterClass.move().Desc -->

## .move()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br/>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->

| Paramètres     | Type       |     | Description                                                      |
| -------------- | ---------- | :-: | ---------------------------------------------------------------- |
| msgsIDs        | Collection |  -> | Collection d'IDs uniques de messages (texte)  |
| allMsgs        | Integer    |  -> | `IMAP all`: All messages in the selected mailbox |
| destinationBox | Text       |  -> | Boîte de réception recevant les messages déplacés                |
| Résultat       | Object     |  <- | Statut de l'opération de déplacement                             |

<!-- END REF -->

#### Description

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by _msgsIDs_ or _allMsgs_ to the _destinationBox_ on the IMAP server<!-- END REF -->.

Vous pouvez passer :

- in the _msgsIDs_ parameter, a collection containing the unique IDs of the specific messages to move, or
- in the _allMsgs_ parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The _destinationBox_ parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple 1

Pour déplacer une sélection de messages :

```4d
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get collection of message unique IDs
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // Move found messages from the current mailbox to the "documents" mailbox
 $status:=$transporter.move($mailIds;"documents")
```

#### Exemple 2

Pour déplacer tous les messages de la boîte de réception courante :

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  // move all messages in the current mailbox to the "documents" mailbox
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.numToID().Desc -->

## .numToID()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->

| Paramètres | Type       |     | Description                                   |
| ---------- | ---------- | :-: | --------------------------------------------- |
| startMsg   | Integer    |  -> | Numéro de séquence du premier message         |
| endMsg     | Integer    |  -> | Numéro de séquence du dernier message         |
| Résultat   | Collection |  <- | Collection d'identifiants de messages uniques |

<!-- END REF -->

#### Description

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by _startMsg_ and _endMsg_<!-- END REF --> in the currently selected mailbox.

In the _startMsg_ parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (_startMsg_ <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the _endMsg_ parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (_endMsg_ <= 0), the last message of the mailbox will be used as the end of the sequence.

#### Résultat

La fonction retourne une collection de chaînes (IDs uniques).

#### Exemple

```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("inbox")

  //get IDs for 5 last messages received
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //delete the messages from the current mailbox
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.removeFlags().Desc -->

## .removeFlags()

<details><summary>Historique</summary>

| Release | Modifications                                                                    |
| ------- | -------------------------------------------------------------------------------- |
| 20      | Prise en charge des mots-clés personnalisés (custom keywords) |
| 18 R6   | Ajout                                                                            |

</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br/>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->

| Paramètres | Type       |     | Description                                                                                                                                                                                                                                             |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |  -> | Collection de chaînes : IDs uniques des messages (texte)<br/>Texte : ID unique d'un message<br/>Numérique (IMAP all) : Tous les messages de la boîte sélectionnée |
| keywords   | Object     |  -> | Mots-clés de flags à supprimer                                                                                                                                                                                                                          |
| Résultat   | Object     |  <- | Statut de l'opération removeFlags                                                                                                                                                                                                                       |

<!-- END REF -->

#### Description

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the `msgIDs` for the specified `keywords`<!-- END REF -->.

In the `msgIDs` parameter, you can pass either:

- a _collection_ containing the unique IDs of specific messages or
- the unique ID (_text_) of a single message or
- the following constant (_longint_) for all messages in the selected mailbox:

| Constante | Valeur | Commentaire                                             |
| --------- | ------ | ------------------------------------------------------- |
| IMAP all  | 1      | Sélectionner tous les messages de la boîte sélectionnée |

The `keywords` parameter lets you define the flags to remove from `msgIDs`. Vous pouvez utiliser les flags standard suivants ainsi que des flags personnalisés :

| Paramètres      | Type    | Description                                           |
| --------------- | ------- | ----------------------------------------------------- |
| $draft          | Boolean | True pour supprimer le marqueur "draft" du message    |
| $seen           | Boolean | True pour supprimer le marqueur "seen" du message     |
| $flagged        | Boolean | True pour supprimer le marqueur "flagged" du message  |
| $answered       | Boolean | True pour supprimer le marqueur "answered" du message |
| $deleted        | Boolean | True pour supprimer le marqueur "deleted" du message  |
| `<custom flag>` | Boolean | True pour supprimer le flag personnalisé du message   |

Please refer to [.addFlags()](#addflags) for more information on custom flags.

> - Pour qu'un mot-clé soit pris en compte, il doit être à vrai.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// renommer la boite de réception
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("Mailbox renaming successful!")
   Else
   ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.renameBox().Desc -->

## .renameBox()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->

| Paramètres  | Type   |     | Description                         |
| ----------- | ------ | :-: | ----------------------------------- |
| currentName | Text   |  -> | Nom actuel de la boîte de réception |
| nouveauNom  | Text   |  -> | Nom de la nouvelle mailbox          |
| Résultat    | Object |  <- | Statut de l'opération renaming      |

<!-- END REF -->

#### Description

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Essayer de renommer une mailbox qui n'existe pas ou de renommer une mailbox avec un nom qui est déjà utilisé génère une erreur.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

Pour renommer la mailbox “Invoices” en “Bills”:

```4d
var $pw : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"

$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

// rename mailbox
$status:=$transporter.renameBox("Invoices"; "Bills")

If ($status.success)
   ALERT("Mailbox renaming successful!")
   Else
   ALERT("Error: "+$status.statusText)
 End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF IMAPTransporterClass.searchMails().Desc -->

## .searchMails()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->

| Paramètres     | Type       |     | Description                                |
| -------------- | ---------- | :-: | ------------------------------------------ |
| searchCriteria | Text       |  -> | Critère(s) de recherche |
| Résultat       | Collection |  <- | Collection de numéros de messages          |

<!-- END REF -->

#### Description

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given _searchCriteria_ in the current mailbox<!-- END REF -->. _searchCriteria_ consists of one or more search keys.

_searchCriteria_ is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. Un critère de recherche peut être composé d'un ou plusieurs éléments. Par exemple :

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> La correspondance n'est généralement pas sensible à la casse

- If the _searchCriteria_ is a null string, the search will be equivalent to a “select all”.
- If the _searchCriteria_ includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

- You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... retourne tous les messages comportant le marqueur \Seen OU \Flagged

```
searchCriteria = NOT SEEN
```

... retourne tous les messages ne comportant pas le marqueur \Seen.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... retourne les messages dont l'en-tête content-type contient “Mixed” et ne contient pas “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... retourne les messages dont l'en-tête content-type contient “ e ” et dont l'en-tête Subject ne contient pas “ o ” et dont l'en-tête content-type n'est pas “ Mixed ”.

A noter que dans les deux derniers exemples, le résultat de la recherche est différent lorsque vous enlevez les parenthèses de la première liste de mots-clés.

- The _searchCriteria_ may include the optional \[CHARSET] specification. Cette instruction est composée du mot "CHARSET" suivi d'un jeu de caractères défini \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the _searchCriteria_ string. Therefore, you must convert the _searchCriteria_ string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands).
  Par défaut, 4D encode la chaîne de critères searchCriteria en "Quotable Printable" si elle contient des caractères étendus.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.

#### Mots-clés de recherche autorisés

Les mots-clés de recherche peuvent traiter des valeurs des types suivants :

- **Search-keys with a date value**: the date is a string that must be formatted as follows: _date-day+"-"+date-month+"-"+date-year_ where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters).
  Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

- **Search-keys with a string value**: the string may contain any character and must be quoted. Toutefois, si la chaîne ne contient pas de caractères spéciaux (des espaces par exemple), les guillemets ne sont pas obligatoires. Dans tous les cas, les guillemets vous permettent de vous assurer que la chaîne sera correctement interprétée.
  Example: `searchCriteria = FROM "SMITH"`
  For all search keys that use strings, a message matches the key if the string is a substring of the field. La recherche ne tient pas compte de la casse des caractères.

- **Search-keys with a field-name value**: the field-name is the name of a header field.
  Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces.
  Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. Elles contiennent une liste de numéros de messages dans un ordre croissant, de 1 au nombre total de messages dans la boîte aux lettres. Les numéros sont séparés par des virgules ; un deux-points (:) indique un intervalle (inclusif) de numéros.
  Examples:
  `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages.
  `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set.
  `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### Mots-clés de recherche autorisés

**ALL**: All messages in the mailbox.\
**ANSWERED**: Messages with the \Answered flag set.\
**UNANSWERED**: Messages that do not have the \Answered flag set.\
**DELETED**: Messages with the \Deleted flag set.\
**UNDELETED**: Messages that do not have the \Deleted flag set.\
**DRAFT**: Messages with the \Draft flag set.\
**UNDRAFT**: Messages that do not have the \Draft flag set.\
**FLAGGED**: Messages with the \Flagged flag set.\
**UNFLAGGED**: Messages that do not have the \Flagged flag set.\
**RECENT**: Messages that have the \Recent flag set.\
**OLD**: Messages that do not have the \Recent flag set.\
**SEEN**: Messages that have the \Seen flag set.\
**UNSEEN**: Messages that do not have the \Seen flag set.\
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. Equivaut à “(RECENT UNSEEN)”.\
**KEYWORD _flag_**: Messages with the specified keyword set.\
**UNKEYWORD _flag_**: Messages that do not have the specified keyword set.\
**BEFORE _date_**: Messages whose internal date is earlier than the specified date.\
**ON _date_**: Messages whose internal date is within the specified date.\
**SINCE _date_**: Messages whose internal date is within or later than the specified date.\
**SENTBEFORE _date_**: Messages whose Date header is earlier than the specified date.\
**SENTON _date_**: Messages whose Date header is within the specified date.\
**SENTSINCE _date_**: Messages whose Date header is within or later than the specified date.\
**TO _string_**: Messages that contain the specified string in the TO header.\
**FROM _string_**: Messages that contain the specified string in the FROM header.\
**CC _string_**: Messages that contain the specified string in the CC header.\
**BCC _string_**: Messages that contain the specified string in the BCC header.\
**SUBJECT _string_**: Messages that contain the specified string in the Subject header.\
**BODY _string_**: Messages that contain the specified string in the message body.\
**TEXT _string_**: Messages that contain the specified string in the header or in the message body.\
**HEADER _field-name_ _string_**: Messages that have a header with the specified field-name and that contain the specified string in the field-body.\
**UID _message-UID_**: Messages with unique identifiers corresponding to the specified unique identifier set.\
**LARGER _n_**: Messages with a size larger than the specified number of bytes.\
**SMALLER _n_**: Messages with a size smaller than the specified number of bytes.\
**NOT _search-key_**: Messages that do not match the specified search key.\
**OR _search-key1_ _search-key2_**: Messages that match either search key.

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>Historique</summary>

| Release | Modifications                                |
| ------- | -------------------------------------------- |
| 20      | _id_, _flags_, _permanentFlags_ are returned |
| 18 R4   | Ajout                                        |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| Paramètres | Type    |     | Description                               |
| ---------- | ------- | :-: | ----------------------------------------- |
| name       | Text    |  -> | Nom de la boîte de réception              |
| state      | Integer |  -> | Statut de l'accès à la boite de réception |
| Résultat   | Object  |  <- | Objet boxInfo                             |

<!-- END REF -->

#### Description

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the _name_ mailbox as the current mailbox<!-- END REF -->. Cette fonction vous permet de récupérer des informations sur la boite de réception.

> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the _name_ parameter, pass the name of the mailbox to access. Le nom doit représenter une hiérarchie claire, de gauche à droite, avec des niveaux séparés par un caractère délimiteur spécifique. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional _state_ parameter defines the type of access to the mailbox. Les valeurs possibles sont les suivantes :

| Constante             | Valeur | Commentaire                                                                                                                                                                                                                                                                            |
| --------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1      | La mailbox sélectionnée est accessible avec les privilèges de lecture seule. Les messages contenant un marqueur "recent" (indication de nouveaux messages) restent inchangés.                                                       |
| IMAP read write state | 0      | La mailbox sélectionnée est accessible avec des privilèges de lecture et d'écriture. Les messages sont considérés "seen" et perdent le marqueur "recent" (indication des nouveaux messages). (Valeur par défaut) |

> - The function generates an error and returns **Null** if _name_ designates a non-existing mailbox.
> - If there is no open connection, `.selectBox()` will open a connection.
> - If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

| Propriété      | Type   | Description                                                                                                                                                                     |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nom de la boîte de réception                                                                                                                                                    |
| mailCount      | number | Nombre de messages contenus dans la boîte de réception                                                                                                                          |
| mailRecent     | number | Nombre de messages avec le marqueur "recent"                                                                                                                                    |
| id             | text   | Identifiant unique de la boîte aux lettres                                                                                                                                      |
| flags          | text   | Liste des flags actuellement utilisés pour la boîte aux lettres, séparés par des espaces                                                                                        |
| permanentFlags | text   | Liste des flags que le client peut modifier en permanence (à l'exception de l'indicateur \Recent, qui est géré par le serveur IMAP), séparés par des espaces |

:::info

If `permanentFlags` string includes the special flag \*, it means that the server supports [custom flags](#addflags).

:::

#### Exemple

```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" //Obligatoire
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)
 $boxInfo:=$transporter.selectBox("INBOX")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.subscribe().Desc -->

## .subscribe()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->

| Paramètres | Type   |     | Description                     |
| ---------- | ------ | :-: | ------------------------------- |
| name       | Text   |  -> | Nom de la boîte de réception    |
| Résultat   | Object |  <- | Statut de l'opération subscribe |

<!-- END REF -->

#### Description

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. Ainsi, vous pouvez contrôler la taille de la liste des boîtes de réception disponibles en souscrivant uniquement à celles que vous souhaitez généralement consulter.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

Pour souscrire à la mailbox "Atlas Corp” dans la hiérarchie "Bills" :

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.subscribe($name)

If ($status.success)
   ALERT("Mailbox subscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->

## .unsubscribe()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->

| Paramètres | Type   |     | Description                       |
| ---------- | ------ | :-: | --------------------------------- |
| name       | Text   |  -> | Nom de la boîte de réception      |
| Résultat   | Object |  <- | Statut de l'opération unsubscribe |

<!-- END REF -->

#### Description

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. Elle vous permet de réduire le nombre de mailboxes que vous consultez régulièrement.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Returned object**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)          |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Text       | Signature du composant interne qui a retourné l'erreur                                                 |

#### Exemple

Pour ne plus souscrire à la mailbox "Atlas Corp” dans la hiérarchie "Bills" :

```4d
var $pw; $name : text
var $options; $transporter; $status : object

$options:=New object

$pw:=Request("Please enter your password:")

If(OK=1) $options.host:="imap.gmail.com"
$options.user:="test@gmail.com"
$options.password:=$pw

$transporter:=IMAP New transporter($options)

$name:="Bills"+$transporter.getDelimiter()+"Atlas Corp"
$status:=$transporter.unsubscribe($name)

If ($status.success)
   ALERT("Mailbox unsubscription successful!")
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
