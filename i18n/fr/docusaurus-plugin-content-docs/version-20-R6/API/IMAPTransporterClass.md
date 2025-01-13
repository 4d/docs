---
id: IMAPTransporterClass
title: IMAPTransporter
---

La classe `IMAPTransporter` vous permet de récupérer des messages à partir d'un serveur de messagerie IMAP.

### Objet IMAP Transporter

Les objets IMAP Transporter sont instanciés avec la commande [IMAP New transporter](#imap-new-transporter). Leurs propriétés et fonctions sont les suivantes :

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->       |
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<br/><!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<br/><!-- INCLUDE #IMAPTransporterClass.append().Summary -->                                       |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                         |
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary --> |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                            |
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<br/><!-- INCLUDE #IMAPTransporterClass.copy().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<br/><!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #IMAPTransporterClass.delete().Summary -->                                       |
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<br/><!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<br/><!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<br/><!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->                           |
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<br/><!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->                     |
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<br/><!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->                                 |
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                   |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                          |
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<br/><!-- INCLUDE #IMAPTransporterClass.move().Summary -->                                             |
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)<br/><!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->                                    |
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<br/><!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<br/><!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->                              |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                   |
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)<br/><!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->                        |
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<br/><!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<br/><!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->                              |
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<br/><!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->                        |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                   |

## IMAP New transporter

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| Paramètres | Type                               |                             | Description                                        |
| ---------- | ---------------------------------- | :-------------------------: | -------------------------------------------------- |
| server     | Object                             |              ->             | Informations sur le serveur IMAP                   |
| Résultat   | 4D.IMAPTransporter | <- | [Objet transporteur IMAP](#objet-imap-transporter) |

<!-- END REF -->

#### Description

La commande `IMAP New transporter`<!-- REF #_command_.IMAP New transporter.Summary -->configure une nouvelle connexion IMAP<!-- END REF --> en fonction du paramètre *server* et retourne un nouvel objet *transporter*. L'objet transporteur retourné sera alors utilisé pour la réception d'emails.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Valeur par défaut (si omise)                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                          | False                                                                            |
| .**accessTokenOAuth2** : Text<br/>.**accessTokenOAuth2** : Object<br/>Chaîne ou objet token représentant les informations d'autorisation OAuth2. Utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné en objet *[IMAP transporter](#imap-transporter-object)*. | aucun                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                            | le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                    | 300                                                                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                               | 30                                                                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | *obligatoire*                                                                    |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                             | aucun                                                                            |
| .**password** : Text<br/>Mot de passe utilisateur pour l'authentification sur le serveur. Non retourné en objet *[IMAP transporter](#imap-transporter-object)*.                                                                                                                                                                                                                                                                                                                                        | aucun                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 993                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | aucun                                                                            |

> **Attention** : Assurez-vous que le timeout défini est inférieur au timeout du serveur, sinon le timeout du client sera inutile.

#### Résultat

La fonction retourne un [**objet transporteur IMAP**](#objet-imap-transporter). Toutes les propriétés retournées sont en **lecture seule**.

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

| Paramètres | Type                               |                             | Description                                        |
| ---------- | ---------------------------------- | :-------------------------: | -------------------------------------------------- |
| server     | Object                             |              ->             | Informations sur le serveur IMAP                   |
| Résultat   | 4D.IMAPTransporter | <- | [Objet transporteur IMAP](#objet-imap-transporter) |

<!-- END REF -->

#### Description

La fonction `4D.IMAPTransporter.new()` <!-- REF #4D.IMAPTransporter.new().Summary -->crée et retourne un nouvel objet de type `4D.IMAPTransporter`<!-- END REF -->. Elle est identique à la commande [`IMAP New transporter`](#imap-new-transporter) (raccourci).

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

| Paramètres | Type       |                             | Description                                                                                                                                                                                                                                             |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |              ->             | Collection de chaînes : IDs uniques des messages (texte)<br/>Texte : ID unique d'un message<br/>Numérique (IMAP all) : Tous les messages de la boîte sélectionnée |
| keywords   | Object     |              ->             | Mots-clés de flags à ajouter                                                                                                                                                                                                                            |
| Résultat   | Object     | <- | Statut de l'opération addFlags                                                                                                                                                                                                                          |

<!-- END REF -->

#### Description

La fonction `.addFlags()` <!-- REF #IMAPTransporterClass.addFlags().Summary -->ajoute des flags (drapeaux) aux `msgIDs` pour les `keywords` spécifiés<!-- END REF -->.

Dans le paramètre `msgIDs`, vous pouvez passer soit :

- une *collection* contenant les IDs uniques de messages spécifiques, ou
- l'ID unique (*texte*) d'un seul message ou
- la constante suivante (*entier long*) pour tous les messages de la boîte sélectionnée :

| Constante | Valeur | Commentaire                                             |
| --------- | ------ | ------------------------------------------------------- |
| IMAP all  | 1      | Sélectionner tous les messages de la boîte sélectionnée |

Le paramètre `keywords` permet de définir les flags à ajouter aux `msgIDs`. Vous pouvez utiliser les flags standard suivants ainsi que des flags personnalisés (la prise en charge des flags personnalisés dépend de l'implémentation du serveur) :

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

**Objet retourné**

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

| Paramètres     | Type   |                             | Description                                 |
| -------------- | ------ | :-------------------------: | ------------------------------------------- |
| mailObj        | Object |              ->             | Objet email                                 |
| destinationBox | Text   |              ->             | Mailbox devant recevoir l'objet email       |
| options        | Object |              ->             | Objet contenant les informations de charset |
| Résultat       | Object | <- | Statut de l'opération                       |

<!-- END REF -->

#### Description

La fonction `.append()` <!-- REF #IMAPTransporterClass.append().Summary -->ajoute un `mailObj` à la boîte `destinationBox`<!-- END REF -->.

Dans le paramètre `mailObj`, passez un objet email. Pour une description détaillée des propriétés de mail, reportez-vous à [Objet Email](EmailObjectClass.md#objet-email). La fonction `.append()` prend en charge les marqueurs de mots-clés dans l'attribut `keywords` des objets email.

Le paramètre optionnel `destinationBox` vous permet de passer le nom de la boîte de réception dans laquelle l'objet `mailObj` sera ajouté. S'il est omis, la mailbox courante sera utilisée.

Dans le paramètre optionnel `options`, vous pouvez passer un objet permettant de définir le charset et l'encodage des différentes parties de l'email. Propriétés disponibles :

| Propriété     | Type | Description                                                                                                                                                                                                                           |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset et encodage utilisés pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Valeurs possibles : voir le tableau des charsets possibles |
| bodyCharset   | Text | Charset et encodage utilisés pour le contenu html et le texte du body du mail. Valeurs possibles : voir le tableau des charsets possibles                                                             |

Charsets possibles :

| Constante                | Valeur                                                                                      | Commentaire                                                                                                                                                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset : US-ASCII si possible, Japanese (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable</li><li>bodyCharset : US-ASCII si possible, Japanese (ISO-2022-JP) & 7-bit si possible, sinon UTF-8 & Quoted-printable</li></ul> |
| mail mode ISO88591       | ISO-8859-1                                                                                  | <ul><li>headerCharset : ISO-8859-1 & Quoted-printable</li><li>bodyCharset : ISO-8859-1 & 8-bit</li></ul>                                                                                                                                                             |
| mail mode UTF8           | US-ASCII_UTF8_QP                                  | headerCharset & bodyCharset : US-ASCII si possible, sinon UTF-8 & Quoted-printable (**valeur par défaut**)                                                                                |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64                                 | headerCharset &bodyCharset : US-ASCII si possible, sinon UTF-8 & base64                                                                                                                                      |

**Objet retourné**

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
$msg.keywords["$seen"]:=True //marquer le message comme étant lu
$msg.keywords["$draft"]:=True //marquer le message comme brouillon

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

La propriété `.checkConnectionDelay` contient <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->la durée maximale (en secondes) autorisée avant vérification de la connexion au serveur<!-- END REF -->.  Si cette durée est dépassée entre deux appels de méthodes, la connexion au serveur sera vérifiée. Par défaut, si la propriété n'a pas été définie dans l'objet *server*, la valeur est de 300.

> **Attention** : Assurez-vous que le timeout défini est inférieur au timeout du serveur, sinon le timeout du client sera inutile.

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

| Paramètres     | Type       |                             | Description                                                                          |
| -------------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------ |
| msgsIDs        | Collection |              ->             | Collection d'IDs uniques de messages (texte)                      |
| allMsgs        | Integer    |              ->             | `IMAP all` : tous les messages de la boîte de réception sélectionnée |
| destinationBox | Text       |              ->             | Boîte de réception recevant les messages copiés                                      |
| Résultat       | Object     | <- | Statut de l'opération de copie                                                       |

<!-- END REF -->

#### Description

La fonction `.copy()` <!-- REF #IMAPTransporterClass.copy().Summary -->copie les messages définis par *msgsIDs* ou *allMsgs* vers la *destinationBox* sur le serveur IMAP<!-- END REF -->.

Vous pouvez passer :

- dans le paramètre *msgsIDs*, une collection contenant les ID uniques des messages spécifiques à copier, ou
- dans le paramètre *allMsgs*, la constante `IMAP all` (integer) pour copier tous les messages de la boîte de réception sélectionnée.

Le paramètre *destinationBox* vous permet de passer une valeur texte avec le nom de la boîte de réception dans laquelle seront placés les messages copiés.

**Objet retourné**

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
 $server.host:="imap.gmail.com" //Obligatoire
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //sélectionner la boite de réception
 $boxInfo:=$transporter.selectBox("inbox")

  //obtenir la collection des IDs uniques de message
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // copier les messages identifiés dans la boîte de réception "documents"
 $status:=$transporter.copy($mailIds;"documents")
```

#### Exemple 2

Pour copier tous les messages de la boîte de réception courante :

```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatoire
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //sélectionner la boite de réception

 $boxInfo:=$transporter.selectBox("inbox")

  // copier les messages dans la boîte de réception "documents"
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

| Paramètres | Type   |                             | Description                                  |
| ---------- | ------ | :-------------------------: | -------------------------------------------- |
| name       | Text   |              ->             | Nom de la nouvelle mailbox                   |
| Résultat   | Object | <- | Statut de l'opération de création de mailbox |

<!-- END REF -->

#### Description

La fonction `.createBox()` <!-- REF #IMAPTransporterClass.createBox().Summary -->crée une boîte de réception avec le `name` passé en paramètre<!-- END REF -->. Si le caractère séparateur de hiérarchie du serveur IMAP apparaît dans le nom de la mailbox, le serveur IMAP créera tous les boîtes parentes nécessaires pour créer la boîte donnée.

Par exemple, si vous essayez de créer "Projects/IMAP/Doc" dans un serveur dont le "/" est le caractère séparateur de hiérarchie, les éléments suivants seront créés :

- Uniquement la boîte "Doc" si "Projects" & "IMAP" existent déjà.
- Les boîtes "IMAP" & "Doc" si seule “Projects” existe déjà.
- Les boîtes "Projects" & “IMAP” & "Doc" si elles n'existent pas déjà.

Dans le paramètre `name`, passez le nom de la mailbox à créer.

**Objet retourné**

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

| Paramètres | Type       |                             | Description                                                                          |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------ |
| msgsIDs    | Collection |              ->             | Collection d'IDs uniques de messages (texte)                      |
| allMsgs    | Integer    |              ->             | `IMAP all` : tous les messages de la boîte de réception sélectionnée |
| Résultat   | Object     | <- | Statut de l'opération de suppression                                                 |

<!-- END REF -->

#### Description

La fonction `.delete()` <!-- REF #IMAPTransporterClass.delete().Summary -->associe le marqueur "deleted" aux messages définis dans `msgsIDs` ou `allMsgs`<!-- END REF -->.

Vous pouvez passer :

- dans le paramètre `msgsIDs`, une collection contenant les ID uniques des messages spécifiques à supprimer, ou
- dans le paramètre `allMsgs`, la constante `IMAP all` (integer) pour supprimer tous les messages de la boîte de réception sélectionnée.

L'exécution de cette fonction ne supprime pas réellement les messages. Les messages ayant le marqueur "deleted" peuvent toujours être trouvés par la fonction [.searchMails()](#searchmails). Les messages marqués sont supprimés du serveur IMAP avec la fonction [`.expunge()`](#expunge) ou en sélectionnant une autre boîte de réception ou lorsque l'objet [transporter](#imap-transporter-object) (créé avec [IMAP New transporter](#imap-new-transporter)) est détruit.

**Objet retourné**

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

| Paramètres | Type   |                             | Description                                   |
| ---------- | ------ | :-------------------------: | --------------------------------------------- |
| name       | Text   |              ->             | Nom de la boîte de réception à supprimer      |
| Résultat   | Object | <- | Statut de l'opération de suppression de boîte |

<!-- END REF -->

#### Description

La fonction `.deleteBox()` <!-- REF #IMAPTransporterClass.deleteBox().Summary -->supprime définitivement la boîte de réception nommée `name` sur le serveur IMAP<!-- END REF -->. Si vous tentez de supprimer la boîte INBOX ou une boîte de réception qui n'existe pas, une erreur sera générée.

Dans le paramètre `name`, passez le nom de la mailbox à supprimer.

> - La fonction ne peut pas supprimer une boîte de réception contenant des boîtes "enfant" si la boîte "parente" dispose de l'attribute "\Noselect".
> - Tous les messages présents dans la boîte seront également supprimés.
> - La possibilité de supprimer une boîte de réception dépend du serveur de messagerie.

**Objet retourné**

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

| Paramètres | Type   |                             | Description                   |
| ---------- | ------ | :-------------------------: | ----------------------------- |
| Résultat   | Object | <- | Statut de l'opération expunge |

<!-- END REF -->

#### Description

La fonction `.expunge()` <!-- REF #IMAPTransporterClass.expunge().Summary -->supprime tous les messages marqués "deleted" du serveur de messagerie IMAP.<!-- END REF --> Le marqueur "deleted" peut être fixé avec les fonctions [`.delete()`](#delete) ou [`.addFlags()`](#addflags).

**Objet retourné**

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

| Release | Modifications        |
| ------- | -------------------- |
| 20      | *id* est renvoyé     |
| 18 R5   | *name* est optionnel |
| 18 R4   | Ajout                |

</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->

| Paramètres | Type   |                             | Description                  |
| ---------- | ------ | :-------------------------: | ---------------------------- |
| name       | Text   |              ->             | Nom de la boîte de réception |
| Résultat   | Object | <- | Objet boxInfo                |

<!-- END REF -->

#### Description

La fonction `.getBoxInfo()`<!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->retourne un objet `boxInfo` correspondant à la boîte de réception courante ou à la boîte de réception nommée *name*<!-- END REF -->. Cette fonction retourne les mêmes informations que [`.selectBox()`](#selectbox) mais sans modifier la boite de réception courante.

Dans le paramètre *name* passez le nom de la mailbox à laquelle vous souhaitez accéder. Le nom doit représenter une hiérarchie claire, de gauche à droite, avec des niveaux séparés par un caractère délimiteur spécifique. Le délimiteur peut être récupéré à l'aide de la fonction [`.getDelimiter()`](#getdelimiter).

Si la boîte de réception nommée *name* n'est pas sélectionnable ou n'existe pas, la fonction génère une erreur et retourne **null**.

**Objet retourné**

L'objet `boxInfo` contient les propriété suivantes :

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

| Release | Modifications                  |
| ------- | ------------------------------ |
| 18 R4   | Ajout                          |
| 19      | Ajout paramètre `isSubscribed` |

</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->

| Paramètres | Type       |                             | Description                 |
| ---------- | ---------- | :-------------------------: | --------------------------- |
| parameters | Object     |              ->             | Objet de paramètre          |
| Résultat   | Collection | <- | Collection d'objets mailbox |

<!-- END REF -->

#### Description

La fonction `.getBoxList()`<!-- REF #IMAPTransporterClass.getBoxList().Summary -->retourne une collection de boîtes aux lettres décrivant toutes les boîtes aux lettres disponibles<!-- END REF -->. Cette fonction vous permet de gérer localement les listes de messages situés sur le serveur de messagerie IMAP.

Dans le paramètre optionnel `parameters`, passez un objet contenant des valeurs de filtrage des boîtes de réception retournées. Vous pouvez passer :

| Propriété    | Type    | Description                                                                                                                                               |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isSubscribed | Boolean | <li>**True** pour ne renvoyer que les boîtes auxquelles vous êtes abonné</li><li> **False** pour retourner toutes les boîtes aux lettres disponibles</li> |

#### Résultat

Chaque objet de la collection retournée contient les propriétés suivantes :

| Propriété                                                                            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | text    | Nom de la boîte de réception                                                                                                                                                                                                                                                                                                                                                                             |
| \[].selectable  | boolean | Indique si les droits d'accès permettent ou non de sélectionner la boîte aux lettres : <ul><li>true - la boîte aux lettres peut être sélectionnée</li><li>false - la boîte aux lettres ne peut pas être sélectionnée</li></ul>                                                                                                                                                           |
| \[].inferior    | boolean | Indique si les droits d'accès permettent ou non de créer une hiérarchie inférieure dans la boîte aux lettres : <ul><li>true - un niveau inférieur peut être créé</li><li>false - un niveau inférieur ne peut pas être créé</li></ul>                                                                                                                                                     |
| \[].interesting | boolean | Indique si la boîte aux lettres a été marquée comme "intéressante" par le serveur : <ul><li>true - La boîte aux lettres a été marquée comme "intéressante" par le serveur. Par exemple, elle peut contenir de nouveaux messages.</li><li>false - La boîte aux lettres n'a pas été marquée comme "intéressante" par le serveur</li>.</ul> |

Si le compte ne contient pas de boites de réception, une collection vide est retournée.

> - Si aucune connexion n'est ouverte, `.getBoxList()` ouvrira une connexion.
> - Si la connexion n'a pas été utilisée depuis le délai de connexion (voir `IMAP New transporter`), la fonction `.checkConnection( )` est automatiquement appelée.

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

| Paramètres | Type |                             | Description                             |
| ---------- | ---- | :-------------------------: | --------------------------------------- |
| Résultat   | Text | <- | Caractère de délimitation de hiérarchie |

<!-- END REF -->

#### Description

La fonction `.getDelimiter()`<!-- REF #IMAPTransporterClass.getDelimiter().Summary -->retourne le caractère utilisé pour délimiter les niveaux de hiérarchie dans le nom de la boîte aux lettres<!-- END REF -->.

Le délimiteur est un caractère pouvant être utilisé pour :

- créer des boites de réception de niveau inférieur
- rechercher des niveaux inférieurs ou supérieurs dans la hiérarchie de la boite de réception

#### Résultat

Caractère de délimitation des noms de boites de réception.

> - Si aucune connexion n'est ouverte, `.getDelimiter()` ouvrira une connexion.
> - Si la connexion n'a pas été utilisée depuis la [durée maximale définie](#checkconnectiondelay), la fonction [`.checkConnection()`](#checkconnection) est automatiquement appelée.

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

| Paramètres | Type    |                             | Description                                    |
| ---------- | ------- | :-------------------------: | ---------------------------------------------- |
| msgNumber  | Integer |              ->             | Numéro de séquence du message                  |
| msgID      | Text    |              ->             | ID unique du message                           |
| options    | Object  |              ->             | Instructions sur la gestion du message         |
| Résultat   | Object  | <- | [Objet Email](EmailObjectClass.md#objet-email) |

<!-- END REF -->

#### Description

La fonction `.getMail()` <!-- REF #IMAPTransporterClass.getMail().Summary -->retourne l'objet `Email` correspondant au *msgNumber* ou *msgID* dans la boite de réception désignée par l'`IMAP_transporter`<!-- END REF -->. Cette fonction vous permet de gérer localement le contenu de l'email.

Dans le premier paramètre, vous pouvez passer soit :

- *msgNumber*, une valeur *integer* indiquant le numéro de séquence du message à récupérer ou
- *msgID*, une valeur *text* indiquant l'ID unique du message à récupérer.

Le paramètre facultatif *options* vous permet de passer un objet définissant des instructions supplémentaires pour la gestion de votre message. Les propriétés suivantes sont disponibles :

| Propriété  | Type    | Description                                                                                                                                                                                                                 |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | Si Vrai, le message est marqué comme "seen" (lu) dans la boite de réception. Si Faux, le message n'est pas marqué comme "seen". Valeur par défaut : Vrai |
| withBody   | boolean | Passez Vrai pour retourner le corps du message. Si Faux, seul l'en-tête du message est retourné. Valeur par défaut : Vrai                                                   |

> - La fonction génère une erreur et retourne **Null** si *msgID* désigne un message non existant,
> - Si aucune boite de réception n'est sélectionnée avec la [fonction `.selectBox()`](#selectbox), une erreur est générée,
> - S'il n'y a pas de connexion ouverte, `.getMail()` ouvrira une connexion avec la dernière boite de réception spécifiée à l'aide de [`.selectBox()`](#selectbox)\`.

#### Résultat

`.getMail()` retourne un [objet `Email`](EmailObjectClass.md#objet-email) avec les propriétés IMAP suivantes spécifiques : *id*, *receivedAt*, et *size*.

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

| Paramètres | Type       |                             | Description                                                                                                                                                                                                                                                                                               |
| ---------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids        | Collection |              ->             | Collection d'identifiants de messages                                                                                                                                                                                                                                                                     |
| startMsg   | Integer    |              ->             | Numéro de séquence du premier message                                                                                                                                                                                                                                                                     |
| endMsg     | Integer    |              ->             | Numéro de séquence du dernier message                                                                                                                                                                                                                                                                     |
| options    | Object     |              ->             | Instructions sur la gestion du message                                                                                                                                                                                                                                                                    |
| Résultat   | Object     | <- | Objet contenant :<br/><ul><li>une collection d'[objets Email] (EmailObjectClass.md#objet-email) et</li><li>une collection d'ID ou de numéros pour les messages manquants, le cas échéant</li></ul> |

<!-- END REF -->

#### Description

La fonction `.getMails()`<!-- REF #IMAPTransporterClass.getMails().Summary -->retourne un objet contenant une collection d'objets `Email`<!-- END REF -->.

**Première syntaxe :**

***.getMails( ids { ; options } ) -> result***

La première syntaxe vous permet de récupérer des messages en fonction de leurs identifiants.

Dans le paramètre *ids*, passez une collection d'identifiants des messages à retourner. Vous pouvez obtenir les ID à l'aide de [`.getMail()`](#getmail).

Le paramètre optionnel *options* vous permet de définir les parties de messages à retourner. Pour une description détaillée des propriétés disponibles, reportez-vous au tableau **Options** ci-dessous.

**Deuxième syntaxe :**

***.getMails( startMsg ; endMsg { ; options } ) -> result***

La deuxième syntaxe vous permet de récupérer des messages en fonction d'une plage séquentielle. Les valeurs passées représentent la position des messages dans la boite de réception.

Dans le paramètre *startMsg*, passez une valeur integer correspondant au numéro du premier message dans la plage séquentielle. Si vous passez un nombre négatif (*startMsg* <= 0), le premier message de la boîte de réception sera utilisé comme début de la séquence.

Dans le paramètre *endMsg*, passez une valeur integer correspondant au numéro du dernier message dans la plage séquentielle. Si vous passez un nombre négatif (*endMsg* <= 0), le dernier message de la boîte de réception sera utilisé comme fin de séquence.

Le paramètre optionnel *options* vous permet de définir les parties de messages à retourner.

**Options**

| Propriété  | Type    | Description                                                                                                                                                                                                                           |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | Boolean | Si Vrai, les messages sont marqués comme "seen" (lus) dans la boite de réception. Si Faux, les messages ne sont pas marqués comme "seen". Valeur par défaut : Vrai |
| withBody   | Boolean | Passez Vrai pour retourner le corps des messages spécifiés. Si Faux, seuls les en-tête des messages sont retournés. Valeur par défaut : Vrai                                          |

> - Si aucune boite de réception n'est sélectionnée avec [`.selectBox()`](#selectbox), une erreur est générée.
> - S'il n'y a pas de connexion ouverte, `.getMails()` ouvrira une connexion avec la dernière boite de réception spécifiée à l'aide de [`selectBox()`](#selectbox).

#### Résultat

`.getMails()` retourne un objet contenant les collections suivantes :

| Propriété | Type       | Description                                                                                                                                                                                                                                                                                                                                   |
| --------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| list      | Collection | Collection d'[objets Email](EmailObjectClass.md#objet-email). Si aucun objet Email n'est trouvé, une collection vide est retournée.                                                                                                                                                                           |
| notFound  | Collection | Collection de :<br/><ul><li>première syntaxe - ID de messages passés précédemment qui n'existent pas</li><li>deuxième syntaxe - numéros de séquence des messages entre startMsg et endMsg qui n'existent pas.</li></ul>Une collection vide est renvoyée si tous les messages ont été trouvés. |

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

| Paramètres | Type    |                             | Description                                                                                                                                                           |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgNumber  | Integer |              ->             | Numéro de séquence du message                                                                                                                                         |
| msgID      | Text    |              ->             | ID unique du message                                                                                                                                                  |
| updateSeen | Boolean |              ->             | Si Vrai, le message est marqué comme "seen" (lu) dans la boite de réception. Si Faux, le message demeure inchangé. |
| Résultat   | BLOB    | <- | Blob de la chaine MIME retournée par le serveur mail                                                                                                                  |

<!-- END REF -->

#### Description

La fonction `.getMIMEAsBlob()` <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->retourne un BLOB avec le contenu MIME du message correspondant au *msgNumber* ou *msgID* dans la boîte de réception désignée par le `IMAP_transporter`<!-- END REF -->.

Dans le premier paramètre, vous pouvez passer soit :

- *msgNumber*, une valeur *integer* indiquant le numéro de séquence du message à récupérer ou
- *msgID*, une valeur *text* indiquant l'ID unique du message à récupérer.

Le paramètre optionnel *updateSeen* vous permet d'indiquer si le message est marqué comme "seen" (lu) dans la boîte de réception. Vous pouvez passer :

- **Vrai** - pour marquer le message comme "seen" (indiquant que le message a été lu)
- **Faux** - pour ne pas modifier le statut "seen" du message

> * La fonction retourne un BLOB vide si *msgNumber* ou msgID désigne un message inexistant,
> * Si aucune boite de réception n'est sélectionnée avec [`.selectBox()`](#selectbox), une erreur est générée,
> * S'il n'y a pas de connexion ouverte, `.getMIMEAsBlob()` ouvrira une connexion avec la dernière boite de réception spécifiée à l'aide de `.selectBox()`.

#### Résultat

`.getMIMEAsBlob()` renvoie un `BLOB` qui peut être archivé dans une base de données ou converti en un objet [`Email`](EmailObjectClass.md#objet-email) avec la commande `MAIL Convert from MIME`.

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

| Paramètres     | Type       |                             | Description                                                                          |
| -------------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------ |
| msgsIDs        | Collection |              ->             | Collection d'IDs uniques de messages (texte)                      |
| allMsgs        | Integer    |              ->             | `IMAP all` : tous les messages de la boîte de réception sélectionnée |
| destinationBox | Text       |              ->             | Boîte de réception recevant les messages déplacés                                    |
| Résultat       | Object     | <- | Statut de l'opération de déplacement                                                 |

<!-- END REF -->

#### Description

La fonction `.move()` <!-- REF #IMAPTransporterClass.move().Summary -->déplace les messages définis par *msgsIDs* ou *allMsgs* vers la *destinationBox* sur le serveur IMAP<!-- END REF -->.

Vous pouvez passer :

- dans le paramètre *msgsIDs*, une collection contenant les ID uniques des messages spécifiques à déplacer, ou
- dans le paramètre *allMsgs*, la constante `IMAP all` (integer) pour déplacer tous les messages de la boîte de réception sélectionnée.

Le paramètre *destinationBox* vous permet de passer une valeur texte avec le nom de la boîte de réception dans laquelle seront placés les messages déplacés.

> Cette fonction est uniquement prise en charge par les serveurs IMAP compatibles avec RFC [8474](https://tools.ietf.org/html/rfc8474).

**Objet retourné**

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

  //sélectionner la boite de réception
 $boxInfo:=$transporter.selectBox("inbox")

  //obtenir une collection d'IDs uniques de messages
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // déplacer les messages trouvés de la boite courante vers la boite "documents"
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

  //sélectionner la boite de réception
 $boxInfo:=$transporter.selectBox("inbox")

  // déplacer tous les messages de la boite courante vers la boite "documents"
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

| Paramètres | Type       |                             | Description                                   |
| ---------- | ---------- | :-------------------------: | --------------------------------------------- |
| startMsg   | Integer    |              ->             | Numéro de séquence du premier message         |
| endMsg     | Integer    |              ->             | Numéro de séquence du dernier message         |
| Résultat   | Collection | <- | Collection d'identifiants de messages uniques |

<!-- END REF -->

#### Description

La fonction `.numToID()` <!-- REF #IMAPTransporterClass.numToID().Summary -->convertit les numéros de séquence en identifiants uniques IMAP pour les messages de la plage séquentielle désignée par *startMsg* et *endMsg*<!-- END REF --> dans la boîte de réception courante.

Dans le paramètre *startMsg* passez une valeur *entier* correspondant au numéro du premier message dans une plage séquentielle. Si vous passez un nombre négatif (*startMsg* <= 0), le premier message de la boîte de réception sera utilisé comme début de la séquence.

Dans le paramètre *endMsg* passez une valeur *entier long* correspondant au numéro du dernier message à inclure dans une plage séquentielle. Si vous passez un nombre négatif (*endMsg* <= 0), le dernier message de la boîte de réception sera utilisé comme fin de séquence.

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

  //Sélectionner la boite de réception
 $boxInfo:=$transporter.selectBox("inbox")

  //obtenir les IDs des 5 derniers messages reçus
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //supprimer les messages de la boite courante
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

| Paramètres | Type       |                             | Description                                                                                                                                                                                                                                             |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection |              ->             | Collection de chaînes : IDs uniques des messages (texte)<br/>Texte : ID unique d'un message<br/>Numérique (IMAP all) : Tous les messages de la boîte sélectionnée |
| keywords   | Object     |              ->             | Mots-clés de flags à supprimer                                                                                                                                                                                                                          |
| Résultat   | Object     | <- | Statut de l'opération removeFlags                                                                                                                                                                                                                       |

<!-- END REF -->

#### Description

La fonction `.removeFlags()` <!-- REF #IMAPTransporterClass.removeFlags().Summary -->supprime les flags (drapeaux) des `msgIDs` pour les `keywords` spécifiés<!-- END REF -->.

Dans le paramètre `msgIDs`, vous pouvez passer soit :

- une *collection* contenant les IDs uniques de messages spécifiques, ou
- l'ID unique (*texte*) d'un seul message ou
- la constante suivante (*entier long*) pour tous les messages de la boîte sélectionnée :

| Constante | Valeur | Commentaire                                             |
| --------- | ------ | ------------------------------------------------------- |
| IMAP all  | 1      | Sélectionner tous les messages de la boîte sélectionnée |

Le paramètre `keywords` vous permet de définir les flags à supprimer des `msgIDs`. Vous pouvez utiliser les flags standard suivants ainsi que des flags personnalisés :

| Paramètres      | Type    | Description                                           |
| --------------- | ------- | ----------------------------------------------------- |
| $draft          | Boolean | True pour supprimer le marqueur "draft" du message    |
| $seen           | Boolean | True pour supprimer le marqueur "seen" du message     |
| $flagged        | Boolean | True pour supprimer le marqueur "flagged" du message  |
| $answered       | Boolean | True pour supprimer le marqueur "answered" du message |
| $deleted        | Boolean | True pour supprimer le marqueur "deleted" du message  |
| `<custom flag>` | Boolean | True pour supprimer le flag personnalisé du message   |

Reportez-vous à [.addFlags()](#addflags) pour plus d'informations sur les flags personnalisés.

> - Pour qu'un mot-clé soit pris en compte, il doit être à vrai.

**Objet retourné**

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

| Paramètres  | Type   |                             | Description                         |
| ----------- | ------ | :-------------------------: | ----------------------------------- |
| currentName | Text   |              ->             | Nom actuel de la boîte de réception |
| nouveauNom  | Text   |              ->             | Nom de la nouvelle mailbox          |
| Résultat    | Object | <- | Statut de l'opération renaming      |

<!-- END REF -->

#### Description

La fonction `.renameBox()` <!-- REF #IMAPTransporterClass.renameBox().Summary -->change le nom d'une boîte de réception sur le serveur IMAP<!-- END REF -->. Essayer de renommer une mailbox qui n'existe pas ou de renommer une mailbox avec un nom qui est déjà utilisé génère une erreur.

Dans le paramètre `currentName`, passez le nom de la mailbox à renommer.

Passez le nouveau nom de la mailbox dans e paramètre `newName`.

**Objet retourné**

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

| Paramètres     | Type       |                             | Description                                |
| -------------- | ---------- | :-------------------------: | ------------------------------------------ |
| searchCriteria | Text       |              ->             | Critère(s) de recherche |
| Résultat       | Collection | <- | Collection de numéros de messages          |

<!-- END REF -->

#### Description

> Cette fonction est basée sur la spécification du [protocole IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

La fonction `.searchMails()` <!-- REF #IMAPTransporterClass.searchMails().Summary -->recherche les messages qui correspondent aux critères de recherche *searchCriteria* dans la boîte aux lettres courante<!-- END REF -->. .

*searchCriteria* est un paramètre texte listant un ou plusieurs critères de recherche (voir [Mots-clés de recherche autorisés](#mots-cles-de-recherche-autorises) ci-dessous) associés ou non à des valeurs à rechercher. Un critère de recherche peut être composé d'un ou plusieurs éléments. Par exemple :

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> La correspondance n'est généralement pas sensible à la casse

- Si *searchCriteria* est une chaîne vide, la recherche sera équivalente à un "tout sélectionner".
- Si *searchCriteria* contient plusieurs mots-clés de recherche, le résultat est l'intersection (fonction ET) de tous les messages qui correspondent à ces critères.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... retourne tous les messages avec le marqueur \Flagged activé ET envoyés par Smith.

- Vous pouvez utiliser les opérateurs **OR** ou **NOT** comme suit :

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

- Le paramètre *searchCriteria* peut inclure optionnellement l'instruction \[CHARSET]. Cette instruction est composée du mot "CHARSET" suivi d'un jeu de caractères défini \[CHARSET] (US ASCII, ISO-8859). Elle indique le codage de caractères utilisé dans la chaine *searchCriteria*. Par conséquent, vous devez convertir la chaîne *searchCriteria* dans le jeu de caractères spécifié si vous utilisez l'instruction \[CHARSET] (voir les commandes `CONVERT FROM TEXT` ou `Convert to text`).
  Par défaut, 4D encode la chaîne de critères searchCriteria en "Quotable Printable" si elle contient des caractères étendus.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... signifie que le critère de recherche utilise le jeu de caractères iso-8859 et que le serveur devra convertir la chaîne avant la recherche, si nécessaire.

#### Mots-clés de recherche autorisés

Les mots-clés de recherche peuvent traiter des valeurs des types suivants :

- **Valeurs de type date** : Les valeurs de type date sont placées dans des chaînes formatées de la manière suivante : *date-day+"-"+date-month+"-"+date-year* où date-day indique la date du jour dans le mois (2 caractères maxi), date-month indique le mois (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) et date-year indique l’année sur 4 chiffres.
  Exemple : `searchCriteria = SENTBEFORE 1-Feb-2020` (il n’est généralement pas nécessaire de mettre une date entre guillemets puisqu’elle ne contient pas de caractères spéciaux)

- \*\*Valeurs de type chaîne
  \*\* : Les valeurs de type chaîne peuvent contenir tout type de caractère et doivent être placées entre des guillemets. Toutefois, si la chaîne ne contient pas de caractères spéciaux (des espaces par exemple), les guillemets ne sont pas obligatoires. Dans tous les cas, les guillemets vous permettent de vous assurer que la chaîne sera correctement interprétée.
  Example: `searchCriteria = FROM "SMITH"` For all search keys that use strings, a message matches the key if the string is a substring of the field. La recherche ne tient pas compte de la casse des caractères.

- **Noms de champs** : Les valeurs de type nom de champ contiennent le nom d’un champ d’en-tête.
  Exemple : `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Marqueurs** : Les valeurs de type marqueur (flags) acceptent un ou plusieurs mots-clés (y compris des marqueurs standard) séparés par des espaces.
  Exemple : `searchCriteria = KEYWORD \Flagged \Draft`

- **Ensemble de messages** : Les valeurs de ce type désignent un ensemble de messages. Elles contiennent une liste de numéros de messages dans un ordre croissant, de 1 au nombre total de messages dans la boîte aux lettres. Les numéros sont séparés par des virgules ; un deux-points (:) indique un intervalle (inclusif) de numéros.
  Examples: `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages.
  `searchCriteria = 1:5 ANSWERED` recherche, parmi les messages 1 à 5, ceux qui comportent le marqueur \Answered.
  `searchCriteria= 2,4 ANSWERED` recherche, parmi les messages 2 et 4, ceux qui comportent le marqueur \Answered.

#### Mots-clés de recherche autorisés

**ALL**: Tous les messages dans la boîte de réception.\
**ANSWERED** : Messages avec l'indicateur \Answered activé.\
**UNANSWERED** : Messages pour lesquels l'indicateur \Answered n'est pas activé.\
**DELETED** : Messages dont l'indicateur \Deleted est activé.\
**UNDELETED** : Messages pour lesquels l'indicateur \Deleted n'a pas été activé.\
**DRAFT** : Messages dont l'indicateur \Draft est activé.\
**UNDRAFT** : Messages pour lesquels l'indicateur \Draft n'est pas activé.\
**FLAGGED** : Messages avec le drapeau \Flagged activé.\
**UNFLAGGED** : Messages pour lesquels l'indicateur \Flagged n'est pas activé.\
**RECENT** : Messages dont l'indicateur \Recent est activé.\
**OLD** : Messages pour lesquels l'indicateur \Recent n'a pas été activé.\
**SEEN** : Messages pour lesquels l'indicateur \Seen est activé.\
**UNSEEN** : Messages pour lesquels l'indicateur \Seen n'est pas activé.\
**NOUVEAU** : Messages pour lesquels l'indicateur \Recent est activé mais pas l'indicateur \Seen. Equivaut à “(RECENT UNSEEN)”.\
**KEYWORD *flag*** : Messages avec le jeu de mots-clés spécifié.\
**UNKEYWORD *flag*** : Messages ne contenant pas le mot-clé spécifié.\
**BEFORE *date*** : Messages dont la date interne est antérieure à la date spécifiée.\
**ON *date*** : Messages dont la date interne est comprise dans la date spécifiée.\
**SINCE *date*** : Messages dont la date interne est antérieure ou postérieure à la date spécifiée.\
**SENTBEFORE *date*** : Messages dont l'en-tête Date est antérieur à la date spécifiée.\
**SENTON *date*** : Messages dont l'en-tête Date est compris dans la date spécifiée.\
**SENTSINCE *date*** : Messages dont l'en-tête Date est inférieur ou supérieur à la date spécifiée.\
**TO *string*** : Messages contenant la chaîne de caractères spécifiée dans l'en-tête TO.\
**FROM *string***: Messages contenant la chaîne spécifiée dans l’en-tête Emetteur.\
**CC *string*** : Messages contenant la chaîne spécifiée dans l'en-tête CC.\
**BCC *string*** : Messages contenant la chaîne spécifiée dans l'en-tête BCC.\
**SUBJECT *string*** : Messages qui contiennent la chaîne spécifiée dans l'en-tête Subject .\
**BODY *string*** : Messages qui contiennent la chaîne spécifiée dans le body du message.\
**TEXT *chaîne*** : Messages contenant la chaîne spécifiée dans l'en-tête ou dans le corps du message.\
**HEADER *field-name* *string***: Messages qui ont un en-tête avec le nom de champ spécifié et qui contiennent la chaîne spécifiée dans le field-body.\
**UID *message-UID*** : Messages avec des identifiants uniques correspondant au jeu d'identifiants uniques spécifié.\
**LARGER *n*** : Messages dont la taille est supérieure au nombre d'octets spécifié.\
**SMALLER *n*** : Messages dont la taille est inférieure au nombre d'octets spécifié.\
**NOT *search-key*** : Messages ne correspondant pas à la clé de recherche spécifiée.\
**OR *search-key1* *search-key2*** : Messages qui correspondent à l'un des deux mots clés de recherche.

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->

## .selectBox()

<details><summary>Historique</summary>

| Release | Modifications                                 |
| ------- | --------------------------------------------- |
| 20      | *id*, *flags*, *permanentFlags* sont renvoyés |
| 18 R4   | Ajout                                         |

</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->

| Paramètres | Type    |                             | Description                               |
| ---------- | ------- | :-------------------------: | ----------------------------------------- |
| name       | Text    |              ->             | Nom de la boîte de réception              |
| state      | Integer |              ->             | Statut de l'accès à la boite de réception |
| Résultat   | Object  | <- | Objet boxInfo                             |

<!-- END REF -->

#### Description

La fonction `.selectBox()` <!-- REF #IMAPTransporterClass.selectBox().Summary -->sélectionne la boîte de réception *name* comme boîte de réception courante<!-- END REF -->. Cette fonction vous permet de récupérer des informations sur la boite de réception.

> Pour obtenir les informations d'une boîte aux lettres sans modifier la boîte aux lettres courante, utilisez [`.getBoxInfo()`](#getboxinfo).

Dans le paramètre optionnel *name* passez le nom de la boite de réception à laquelle vous souhaitez accéder. Le nom doit représenter une hiérarchie claire, de gauche à droite, avec des niveaux séparés par un caractère délimiteur spécifique. Le délimiteur peut être récupéré à l'aide de la fonction [`.getDelimiter()`](#getdelimiter).

Le paramètre optionnel *state* définit le type d'accès à la mailbox. Les valeurs possibles sont les suivantes :

| Constante             | Valeur | Commentaire                                                                                                                                                                                                                                                                            |
| --------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1      | La mailbox sélectionnée est accessible avec les privilèges de lecture seule. Les messages contenant un marqueur "recent" (indication de nouveaux messages) restent inchangés.                                                       |
| IMAP read write state | 0      | La mailbox sélectionnée est accessible avec des privilèges de lecture et d'écriture. Les messages sont considérés "seen" et perdent le marqueur "recent" (indication des nouveaux messages). (Valeur par défaut) |

> - La fonction génère une erreur et retourne **Null** si *name* désigne une mailbox inexistante.
> - Si aucune connexion n'est ouverte, `.selectBox()` ouvrira une connexion.
> - Si la connexion n'a pas été utilisée depuis la durée maximale définie (voir `IMAP New transporter`), la fonction [`.checkConnection()`](#checkconnection) est automatiquement appelée.

**Objet retourné**

L'objet `boxInfo` contient les propriété suivantes :

| Propriété      | Type   | Description                                                                                                                                                                     |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name           | Text   | Nom de la boîte de réception                                                                                                                                                    |
| mailCount      | number | Nombre de messages contenus dans la boîte de réception                                                                                                                          |
| mailRecent     | number | Nombre de messages avec le marqueur "recent"                                                                                                                                    |
| id             | text   | Identifiant unique de la boîte aux lettres                                                                                                                                      |
| flags          | text   | Liste des flags actuellement utilisés pour la boîte aux lettres, séparés par des espaces                                                                                        |
| permanentFlags | text   | Liste des flags que le client peut modifier en permanence (à l'exception de l'indicateur \Recent, qui est géré par le serveur IMAP), séparés par des espaces |

:::info

Si la chaîne `permanentFlags` comprend le flag spécial \*, cela signifie que le serveur prend en charge [les flags personnalisés](#addflags).

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

| Paramètres | Type   |                             | Description                     |
| ---------- | ------ | :-------------------------: | ------------------------------- |
| name       | Text   |              ->             | Nom de la boîte de réception    |
| Résultat   | Object | <- | Statut de l'opération subscribe |

<!-- END REF -->

#### Description

La fonction `.subscribe()` <!-- REF #IMAPTransporterClass.subscribe().Summary -->permet d'ajouter la boîte spécifiée à l'ensemble des boîtes auxquelles vous avez "souscrit" sur le serveur IMAP<!-- END REF -->. Ainsi, vous pouvez contrôler la taille de la liste des boîtes de réception disponibles en souscrivant uniquement à celles que vous souhaitez généralement consulter.

Dans le paramètre `name`, passez le nom de la mailbox à ajouter (subscribe) à la liste de mailboxes auxquelles vous avez "souscrit".

**Objet retourné**

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

| Paramètres | Type   |                             | Description                       |
| ---------- | ------ | :-------------------------: | --------------------------------- |
| name       | Text   |              ->             | Nom de la boîte de réception      |
| Résultat   | Object | <- | Statut de l'opération unsubscribe |

<!-- END REF -->

#### Description

La fonction `.unsubscribe()` <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->supprime la boîte spécifiée de l'ensemble des boîtes auxquelles vous avez "souscrit"<!-- END REF -->. Elle vous permet de réduire le nombre de mailboxes que vous consultez régulièrement.

Dans le paramètre `name`, passez le nom de la mailbox à supprimer (unsubscribe) de la liste de mailboxes auxquelles vous avez "souscrit".

**Objet retourné**

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
