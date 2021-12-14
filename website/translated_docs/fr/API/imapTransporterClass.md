---
id: IMAPTransporterClass
title: IMAPTransporter
---

La classe `IMAPTransporter` vous permet de récupérer des messages à partir d'un serveur de messagerie IMAP.


### Objet IMAP Transporter

Les objets IMAP Transporter sont instanciés avec la commande [IMAP New transporter](#imap-new-transporter). Leurs propriétés et fonctions sont les suivantes :

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
| [<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



## IMAP New transporter

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->
**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF IMAPTransporterClass.IMAP New transporter.Params -->
| Paramètres | Type               |    | Description                                        |
| ---------- | ------------------ |:--:| -------------------------------------------------- |
| server     | Object             | -> | Informations sur le serveur IMAP                   |
| Résultat   | 4D.IMAPTransporter | <- | [Objet IMAP Transporter](#imap-transporter-object) |
<!-- END REF -->


#### Description

La commande `IMAP New transporter` <!-- REF #_command_.IMAP New transporter.Summary -->configure une nouvelle connexion IMAP<!-- END REF --> en fonction du paramètre *server* et retourne un nouvel objet *transporter*. L'objet transporteur retourné sera alors utilisé pour la réception d'emails.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                                                      | Valeur par défaut (si omise)                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| Faux                                                                             |
| .**accessTokenOAuth2** : Text<p>Chaîne représentant les informations d'autorisation OAuth2. Il est utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné en objet *[IMAP transporter](#imap-transporter-object)*. | aucune                                                                           |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->| 300                                                                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatoire*                                                                    |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| aucune                                                                           |
| .**password** : Text<p>Mot de passe de l'utilisateur pour l'authentification sur le serveur. Non retourné en objet *[IMAP transporter](#imap-transporter-object)*.                                                                                                                                                                                                    | aucune                                                                           |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 993                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| aucune                                                                           |
> **Attention** : Assurez-vous que le timeout défini est inférieur au timeout du serveur, sinon le timeout du client sera inutile.


#### Résultat

La fonction retourne un [**objet IMAP transporter**](#imap-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.
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


<!-- REF #4D.IMAPTransporter.new().Syntax -->
**4D.IMAPTransporter.new**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #4D.IMAPTransporter.new().Params -->
| Paramètres | Type               |    | Description                                        |
| ---------- | ------------------ |:--:| -------------------------------------------------- |
| server     | Object             | -> | Informations sur le serveur IMAP                   |
| Résultat   | 4D.IMAPTransporter | <- | [Objet IMAP Transporter](#imap-transporter-object) |
<!-- END REF -->

#### Description

La fonction `4D.IMAPTransporter.new()` <!-- REF #4D.IMAPTransporter.new().Summary -->crée et retourne un nouvel objet de type `4D.IMAPTransporter`<!-- END REF -->. Elle est identique à la commande [`IMAP New transporter`](#imap-new-transporter) (raccourci).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->


<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.addFlags().Syntax -->
**.addFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.addFlags**( *msgIDs* : Longint  ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.addFlags().Params -->
| Paramètres | Type       |    | Description                                                                                                                                                                 |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Collection de chaînes : IDs uniques des messages (texte)<br>Texte : ID unique d'un message<br>Numérique (IMAP all) : Tous les messages de la boîte sélectionnée |
| keywords   | Object     | -> | Flags de mots-clés à ajouter                                                                                                                                                |
| Résultat   | Object     | <- | Statut de l'opération addFlags                                                                                                                                              |
<!-- END REF -->


#### Description

La fonction `.addFlags()` <!-- REF #IMAPTransporterClass.addFlags().Summary -->ajoute des flags (drapeaux) aux `msgIDs` pour les `keywords` définis<!-- END REF -->.

Dans le paramètre `msgIDs`, vous pouvez passer soit :

*   une *collection* contenant les IDs uniques de messages spécifiques, ou
*   l'ID unique (*texte*) d'un seul message ou
*   la constante suivante (*entier long*) pour tous les messages de la boîte sélectionnée :

    | Constante | Valeur | Commentaire                                             |
    | --------- | ------ | ------------------------------------------------------- |
    | IMAP all  | 1      | Sélectionner tous les messages de la boîte sélectionnée |

Le paramètre `keywords` vous permet de passer un objet avec des valeurs de mots-clés pour les flags spécifiques à ajouter à `msgIDs`. Vous pouvez utiliser les mots-clés suivants :

| Paramètres | Type    | Description                                         |
| ---------- | ------- | --------------------------------------------------- |
| $draft     | Booléen | True pour ajouter le marqueur "draft" au message    |
| $seen      | Booléen | True pour ajouter le marqueur "seen" au message     |
| $flagged   | Booléen | True pour ajouter le marqueur "flagged" au message  |
| $answered  | Booléen | True pour ajouter le marqueur "répondu" au message  |
| $deleted   | Booléen | True pour ajouter le marqueur "supprimé" au message |
> * Les valeurs à faux sont ignorées.
> * L'interprétation des indicateurs de mots-clés peut varier selon le client de messagerie.


**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


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
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.append().Syntax -->
**.append**( *mailObj* : Object ; *destinationBox* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.append().Params -->
| Paramètres     | Type   |    | Description                                 |
| -------------- | ------ |:--:| ------------------------------------------- |
| mailObj        | Object | -> | Objet email                                 |
| destinationBox | Texte  | -> | Mailbox devant recevoir l'objet email       |
| options        | Object | -> | Objet contenant les informations de charset |
| Résultat       | Object | <- | Statut de l'opération                       |
<!-- END REF -->


#### Description

La fonction `.append()` <!-- REF #IMAPTransporterClass.append().Summary -->ajoute l'objet `mailObj` à la boîte `destinationBox`<!-- END REF -->.

Dans le paramètre `mailObj`, passez un objet email. Pour une description détaillée des propriétés de mail, reportez-vous à la section [Objet Email](EmailObjectClass.md#object-email). La fonction `.append()` prend en charge les marqueurs de mots-clés dans l'attribut `keywords` des objets email.

Le paramètre optionnel `destinationBox` vous permet de passer le nom de la boîte de réception dans laquelle l'objet `mailObj` sera ajouté. S'il est omis, la mailbox courante sera utilisée.

Dans le paramètre optionnel `options`, vous pouvez passer un objet permettant de définir le charset et l'encodage des différentes parties de l'email. Propriétés disponibles :

| Propriété     | Type  | Description                                                                                                                                                                           |
| ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Texte | Charset et encodage utilisés pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Valeurs possibles : voir le tableau des charsets possibles |
| bodyCharset   | Texte | Charset et encodage utilisés pour le contenu html et le texte du body du mail. Valeurs possibles : voir le tableau des charsets possibles                                             |

Charsets possibles :

| Constante                | Valeur                         | Commentaire                                                                                                |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>headerCharset : US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable</li><li>bodyCharset : US-ASCII si possible, japonais (ISO-2022-JP) et 7 bits si possible, sinon UTF-8 et Quoted-printable</li></ul>                                                                                  |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>headerCharset: ISO-8859-1 & Quoted-printable</li><li>bodyCharset: ISO-8859-1 & 8-bit</li></ul>                                                                                  |
| mail mode UTF8           | US-ASCII_UTF8_QP             | headerCharset & bodyCharset : US-ASCII si possible, sinon UTF-8 & Quoted-printable (**valeur par défaut**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | headerCharset & bodyCharset : US-ASCII si possible, sinon UTF-8 & base64                                   |


**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


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
$msg.keywords["$seen"]:=True//marquer le message comme étant lu
$msg.keywords["$draft"]:=True//marquer le message comme brouillon

$status:=$imap.append($msg; "Drafts")
```

<!-- END REF -->









<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->





<!-- INCLUDE transporter.checkConnection().Desc -->



## .checkConnectionDelay

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->
**.checkConnectionDelay** : Integer<!-- END REF -->


#### Description

La propriété `.checkConnectionDelay` contient la <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->durée maximale (en secondes) autorisée avant vérification de la connexion au serveur<!-- END REF -->.  Si cette durée est dépassée entre deux appels de méthodes, la connexion au serveur sera vérifiée. Par défaut, si la propriété n'a pas été définie dans l'objet *server*, la valeur est de 300.
> **Attention** : Assurez-vous que le timeout défini est inférieur au timeout du serveur, sinon le timeout du client sera inutile.



<!-- INCLUDE transporter.connectionTimeOut.Desc -->



<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.copy().Syntax -->
**.copy**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.copy**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.copy().Params -->
| Paramètres     | Type        |    | Description                                                          |
| -------------- | ----------- |:--:| -------------------------------------------------------------------- |
| msgsIDs        | Collection  | -> | Collection d'IDs uniques de messages (texte)                         |
| allMsgs        | Entier long | -> | `IMAP all` : tous les messages de la boîte de réception sélectionnée |
| destinationBox | Texte       | -> | Boîte de réception recevant les messages copiés                      |
| Résultat       | Object      | <- | Statut de l'opération de copie                                       |
<!-- END REF -->


#### Description

La fonction `.copy()` <!-- REF #IMAPTransporterClass.copy().Summary -->copie les messages définis dans *msgsIDs* ou *allMsgs* dans la *destinationBox* sur le serveur IMAP<!-- END REF -->.

Vous pouvez passer :

- dans le paramètre *msgsIDs*, une collection contenant les ID uniques des messages spécifiques à copier, ou
- dans le paramètre *allMsgs*, la constante `IMAP all` (integer) pour copier tous les messages de la boîte de réception sélectionnée.

Le paramètre *destinationBox* vous permet de passer une valeur texte avec le nom de la boîte de réception dans laquelle seront placés les messages copiés.


**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |




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
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.createBox().Syntax -->
**.createBox**( *name* :  Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.createBox().Params -->
| Paramètres | Type   |    | Description                                  |
| ---------- | ------ |:--:| -------------------------------------------- |
| name       | Texte  | -> | Nom de la nouvelle mailbox                   |
| Résultat   | Object | <- | Statut de l'opération de création de mailbox |
<!-- END REF -->


#### Description

La fonction `.createBox()` <!-- REF #IMAPTransporterClass.createBox().Summary -->crée une nouvelle mailbox avec le `name` passé en paramètre<!-- END REF -->. Si le caractère séparateur de hiérarchie du serveur IMAP apparaît dans le nom de la mailbox, le serveur IMAP créera tous les boîtes parentes nécessaires pour créer la boîte donnée.

Par exemple, si vous essayez de créer "Projects/IMAP/Doc" dans un serveur dont le "/" est le caractère séparateur de hiérarchie, les éléments suivants seront créés :

*   Uniquement la boîte "Doc" si "Projects" & "IMAP" existent déjà.
*   Les boîtes "IMAP" & "Doc" si seule “Projects” existe déjà.
*   Les boîtes "Projects" & “IMAP” & "Doc" si elles n'existent pas déjà.

Dans le paramètre `name`, passez le nom de la mailbox à créer.


**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |




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
End for each
 End if
```

<!-- END REF -->






<!-- REF IMAPTransporterClass.delete().Desc -->
## .delete()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.delete().Syntax -->
**.delete**( *msgsIDs* : Collection ) : Object<br>**.delete**( *allMsgs* : Integer ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.delete().Params -->
| Paramètres | Type        |    | Description                                                          |
| ---------- | ----------- |:--:| -------------------------------------------------------------------- |
| msgsIDs    | Collection  | -> | Collection d'IDs uniques de messages (texte)                         |
| allMsgs    | Entier long | -> | `IMAP all` : tous les messages de la boîte de réception sélectionnée |
| Résultat   | Object      | <- | Statut de l'opération de suppression                                 |
<!-- END REF -->


#### Description

La fonction `.delete()` <!-- REF #IMAPTransporterClass.delete().Summary -->associe le marqueur "deleted" aux messages désignés par `msgsIDs` ou `allMsgs`<!-- END REF -->.

Vous pouvez passer :

- dans le paramètre `msgsIDs`, une collection contenant les ID uniques des messages spécifiques à supprimer, ou
- dans le paramètre `allMsgs`, la constante `IMAP all` (integer) pour supprimer tous les messages de la boîte de réception sélectionnée.

L'exécution de cette fonction ne supprime pas réellement les messages. Les messages ayant le marqueur "deleted" peuvent toujours être trouvés par la fonction [.searchMails()](#searchmails). Les messages marqués sont supprimés du serveur IMAP uniquement avec [`.expunge()`](#expunge) ou en sélectionnant une autre boîte de réception ou lorsque l'objet [transporter](#imap-transporter-object) (créé avec [IMAP New transporter](#imap-new-transporter)) est détruit.



**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |




#### Exemple 1

Pour supprimer une sélection de messages :


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
 $boxInfo:=$transporter.selectBox("Inbox")

  //obtenir la collection d'IDs unique des messages
 $mailIds:=$transporter.searchMails("subject \"Reports\"")

  // Supprimer les messages sélectionnés
 $status:=$transporter.delete($mailIds)
```

#### Exemple 2

Pour supprimer tous les messages de la boîte de réception courante :


```4d
 var $server;$boxInfo;$status : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatoire
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //selection de la boîte
 $boxInfo:=$transporter.selectBox("Junk Email")

  // suppression de tous les messages de la boîte courante
 $status:=$transporter.delete(IMAP all)
```

<!-- END REF -->


<!-- REF IMAPTransporterClass.deleteBox().Desc -->
## .deleteBox()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->
**.deleteBox**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.deleteBox().Params -->
| Paramètres | Type   |    | Description                                   |
| ---------- | ------ |:--:| --------------------------------------------- |
| name       | Texte  | -> | Nom de la boîte de réception à supprimer      |
| Résultat   | Object | <- | Statut de l'opération de suppression de boîte |
<!-- END REF -->


#### Description

La fonction `.deleteBox()` <!-- REF #IMAPTransporterClass.deleteBox().Summary -->supprime définitivement la boîte de réception nommée `name` sur le serveur IMAP<!-- END REF -->. Si vous tentez de supprimer la boîte INBOX ou une boîte de réception qui n'existe pas, une erreur sera générée.

Dans le paramètre `name`, passez le nom de la mailbox à supprimer.
> * La fonction ne peut pas supprimer une boîte de réception contenant des boîtes "enfant" si la boîte "parente" dispose de l'attribute "\Noselect".
> * Tous les messages présents dans la boîte seront également supprimés.
> * La possibilité de supprimer une boîte de réception dépend du serveur de messagerie.


**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |




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
    Else
    ALERT("Error: "+$status.statusText)
    End if
End if
```

<!-- END REF -->







<!-- REF IMAPTransporterClass.expunge().Desc -->
## .expunge()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.expunge().Syntax -->
**.expunge()** : Object<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Params -->
| Paramètres | Type   |    | Description                   |
| ---------- | ------ |:--:| ----------------------------- |
| Résultat   | Object | <- | Statut de l'opération expunge |
<!-- END REF -->

#### Description

La fonction `.expunge()` <!-- REF #IMAPTransporterClass.expunge().Summary -->supprime tous les messages marqués "deleted" du serveur de messagerie IMAP.<!-- END REF --> Le marqueur "deleted" peut être fixé avec les fonctions [`.delete()`](#delete) ou [`.addFlags()`](#addflags).

**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


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
| Version | Modifications      |
| ------- | ------------------ |
| v18 R5  | *name* is optional |
| v18 R4  | Ajout              |
</details>

<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo**( { *name* : Text }) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
| Paramètres | Type   |    | Description                  |
| ---------- | ------ |:--:| ---------------------------- |
| name       | Texte  | -> | Nom de la boîte de réception |
| Résultat   | Object | <- | Objet boxInfo                |
<!-- END REF -->


#### Description

La fonction `.getBoxInfo()` <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->retourne un objet `boxInfo` correspondant à la boîte de réception courante ou à la boîte nommée *name*<!-- END REF -->. Cette fonction retourne les mêmes informations que [`.selectBox()`](#selectbox) mais sans modifier la boite de réception courante.

Dans le paramètre optionnel *name* passez le nom de la boite de réception à laquelle vous souhaitez accéder. Le nom doit représenter une hiérarchie claire, de gauche à droite, avec des niveaux séparés par un caractère délimiteur spécifique. Le délimiteur peut être récupéré à l'aide de la fonction [`.getDelimiter()`](#getdelimiter).

Si la boîte de réception nommée *name* n'est pas sélectionnable ou n'existe pas, la fonction génère une erreur et retourne **null**.

**Objet retourné**

L'objet `boxInfo` contient les propriété suivantes :

| Propriété  | Type   | Description                                                                       |
| ---------- | ------ | --------------------------------------------------------------------------------- |
| name       | Texte  | Nom de la boîte de réception                                                      |
| mailCount  | number | Nombre de messages contenus dans la boîte de réception                            |
| mailRecent | number | Nombre de messages portant le marqueur "récent" (indiquant les nouveaux messages) |



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
| Version | Modifications                  |
| ------- | ------------------------------ |
| v18 R4  | Ajout                          |
| v19     | Ajout paramètre `isSubscribed` |
</details>

<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->
**.getBoxList**( { *parameters* : Object } ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.getBoxList().Params -->
| Paramètres | Type       |    | Description                 |
| ---------- | ---------- |:--:| --------------------------- |
| parameters | Object     | -> | Objet de paramètre          |
| Résultat   | Collection | <- | Collection d'objets mailbox |
<!-- END REF -->


#### Description

La fonction `.getBoxList()` <!-- REF #IMAPTransporterClass.getBoxList().Summary -->retourne une collection de boites de réception décrivant toutes les boites de réception disponibles<!-- END REF -->. Cette fonction vous permet de gérer localement les listes de messages situés sur le serveur de messagerie IMAP.

Dans le paramètre optionnel `parameters`, passez un objet contenant des valeurs de filtrage des boîtes de réception retournées. Vous pouvez passer :

| Propriété    | Type    | Description                                          |
| ------------ | ------- | ---------------------------------------------------- |
| isSubscribed | Booléen | <li>**True** pour retourner uniquement les boîtes auxquelles vous êtes abonné</li><li> **False** pour retourner toutes les boîtes de réception disponibles</li> |

#### Résultat

Chaque objet de la collection retournée contient les propriétés suivantes :

| Propriété        | Type    | Description                                                                                                                                    |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| \[].name        | Texte   | Nom de la boîte de réception                                                                                                                   |
| \[].selectable  | boolean | Indique si les droits d'accès permettent ou non à la boite de réception d'être sélectionnée : <ul><li>vrai - la boite de réception peut être sélectionnée</li><li>faux - la boite de réception ne peut pas être sélectionnée</li></ul>                        |
| \[].inferior    | boolean | Indique si les droits d'accès permettent ou non la création d'une hiérarchie inférieure dans la boite de réception : <ul><li>vrai - un niveau inférieur peut être créé</li><li>faux - un niveau inférieur ne peut pas être créé</li></ul> |
| \[].interesting | boolean | Indique si la boite de réception a été marquée comme "intéressante" par le serveur : <ul><li>vrai - la boite de réception a été marquée comme "intéressante" par le serveur. Par exemple, elle peut contenir de nouveaux messages.</li><li>faux - la boite de réception n'a pas été marquée comme "intéressante" par le serveur.</li></ul>                                 |


Si le compte ne contient pas de boites de réception, une collection vide est retournée.
> * Si aucune connexion n'est ouverte, `.getBoxList()` ouvrira une connexion.
> * Si la connexion n'a pas été utilisée depuis le délai de connexion (voir `IMAP New transporter`), la fonction `.checkConnection( )` est automatiquement appelée.


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
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->
**.getDelimiter()** : Text<!-- END REF -->

<!-- REF #IMAPTransporterClass.getDelimiter().Params -->
| Paramètres | Type  |    | Description                             |
| ---------- | ----- |:--:| --------------------------------------- |
| Résultat   | Texte | <- | Caractère de délimitation de hiérarchie |
<!-- END REF -->


#### Description

La fonction `.getDelimiter()` <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->retourne le caractère utilisé pour délimiter les niveaux de hiérarchie dans le nom de la boite de réception<!-- END REF -->.

Le délimiteur est un caractère pouvant être utilisé pour :

*   créer des boites de réception de niveau inférieur
*   rechercher des niveaux inférieurs ou supérieurs dans la hiérarchie de la boite de réception


#### Résultat

Caractère de délimitation des noms de boites de réception.
> * Si aucune connexion n'est ouverte, `.getDelimiter()` ouvrira une connexion.
> * Si la connexion n'a pas été utilisée depuis le [délai de connexion](#checkconnectiondelay), la fonction

`.checkConnection( )<code></a> est automatiquement appelée.</li>
  </ul>
</blockquote>

<h4 spaces-before="0">Exemple</h4>

<pre><code class="4d"> var $transporter : 4D.IMAPTransporter
 $transporter:=IMAP New transporter($server)

 $boxList:=$transporter.getBoxList()

 For each($box;$boxList)
    If($box.interesting)
       $split:=Split string($box.name;$transporter.getDelimiter())
       ALERT("New emails are available in the box: "+$split[$split.length-1])
    End if
 End for each
`</pre>

<!-- END REF -->



<!-- REF IMAPTransporterClass.getMail().Desc -->
>     
>     ## .getMail()
>     
>     <details><summary>Historique</summary>
>     
>     
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber*: Integer { ; *options* : Object } ) : Object<br>**.getMail**( *msgID*: Text { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMail().Params -->
| Paramètres | Type        |    | Description                                     |
| ---------- | ----------- |:--:| ----------------------------------------------- |
| msgNumber  | Entier long | -> | Numéro de séquence du message                   |
| msgID      | Texte       | -> | ID unique du message                            |
| options    | Object      | -> | Instructions sur la gestion du message          |
| Résultat   | Object      | <- | [Objet email](EmailObjectClass.md#email-object) |
<!-- END REF -->


#### Description

La fonction `.getMail()` <!-- REF #IMAPTransporterClass.getMail().Summary -->retourne l'objet `Email` correspondant au *msgNumber* ou *msgID* dans la boite de réception désignée par `IMAP_transporter`<!-- END REF -->. Cette fonction vous permet de gérer localement le contenu de l'email.

Dans le premier paramètre, vous pouvez passer soit :

* *msgNumber*, une valeur *integer* indiquant le numéro de séquence du message à récupérer ou
* *msgID*, une valeur *text* indiquant l'ID unique du message à récupérer.

Le paramètre facultatif *options* vous permet de passer un objet définissant des instructions supplémentaires pour la gestion de votre message. Les propriétés suivantes sont disponibles :

| Propriété  | Type    | Description                                                                                                                                              |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updateSeen | boolean | Si Vrai, le message est marqué comme "seen" (lu) dans la boite de réception. Si Faux, le message n'est pas marqué comme "seen". Valeur par défaut : Vrai |
| withBody   | boolean | Passez Vrai pour retourner le corps du message. Si Faux, seul l'en-tête du message est retourné. Valeur par défaut : Vrai                                |


> * La fonction génère une erreur et retourne **Null** si *msgID* désigne un message non existant,
> * Si aucune boite de réception n'est sélectionnée avec la fonction [`.selectBox()`](#selectbox), une erreur est générée,
> * Si aucune connexion n'est ouverte, `.getMail()` ouvrira une connexion avec la dernière boite de réception spécifiée par [`.selectBox()`](#selectbox).

#### Résultat

`.getMail()` retourne un [`objet Email`](EmailObjectClass.md#objet-email) avec les propriétés IMAP supplémentaires suivantes : *id*, *receivedAt* et *size*.

#### Exemple

Vous souhaitez lire le message avec ID = 1 :

```4d
 var $server : Object
 var $info; $mail; $boxInfo : Variant
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //obligatoire
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //creation du transporter
 $transporter:=IMAP New transporter($server)

  //selection de la mailbox
 $boxInfo:=$transporter.selectBox("Inbox")

  //récupération de l'objet Email d'ID 1
 $mail:=$transporter.getMail(1)
```

<!-- END REF -->



<!-- REF IMAPTransporterClass.getMails().Desc -->
## .getMails()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.getMails().Syntax -->
**.getMails**( *ids* : Collection { ; *options* : Object } ) : Object<br>**.getMails**( *startMsg* : Integer ; *endMsg* : Integer { ; *options* : Object } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.getMails().Params -->
| Paramètres | Type        |    | Description                                           |
| ---------- | ----------- |:--:| ----------------------------------------------------- |
| ids        | Collection  | -> | Collection d'identifiants de messages                 |
| startMsg   | Entier long | -> | Numéro de séquence du premier message                 |
| endMsg     | Entier long | -> | Numéro de séquence du dernier message                 |
| options    | Object      | -> | Instructions sur la gestion du message                |
| Résultat   | Object      | <- | Objet contenant :<br><ul><li>une collection d'[objets Email](EmailObjectClass.md#objet-email) et</li><li>une collection d'identifiants ou de numéros des messages manquants, le cas échéant</li></ul> |
<!-- END REF -->


#### Description

La fonction `.getMails()` <!-- REF #IMAPTransporterClass.getMails().Summary -->retourne un objet contenant une collection d'objets `Email`<!-- END REF -->.

**Première syntaxe :**

***.getMails( ids { ; options } ) -> result***

La première syntaxe vous permet de récupérer des messages en fonction de leurs identifiants.

Dans le paramètre *ids*, passez une collection d'identifiants des messages à retourner. Vous pouvez obtenir les ID à l'aide de [`.getMail()`](#getmail).

Le paramètre optionnel *options* vous permet de définir les parties de messages à retourner. Pour une description détaillée des propriétés disponibles, reportez-vous au tableau **Options** ci-dessous.

**Deuxième syntaxe :**

***.getMails( startMsg ; endMsg { ; options } ) -> result***

La deuxième syntaxe vous permet de récupérer des messages en fonction d'une plage séquentielle. Les valeurs passées représentent la position des messages dans la boite de réception.

Dans le paramètre *startMsg* passez une valeur *entier* correspondant au numéro du premier message dans une plage séquentielle. Si vous passez un nombre négatif (*startMsg* <= 0), le premier message de la boîte de réception sera utilisé comme début de séquence.

Dans le paramètre *endMsg* passez une valeur *entier long* correspondant au numéro du dernier message à inclure dans une plage séquentielle. Si vous passez un nombre négatif (*endMsg* <= 0), le dernier message de la boîte de réception sera utilisé comme fin de séquence.

Le paramètre optionnel *options* vous permet de définir les parties de messages à retourner.

**Options**

| Propriété  | Type    | Description                                                                                                                                                        |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| updateSeen | Booléen | Si Vrai, les messages sont marqués comme "seen" (lus) dans la boite de réception. Si Faux, les messages ne sont pas marqués comme "seen". Valeur par défaut : Vrai |
| withBody   | Booléen | Passez Vrai pour retourner le corps des messages spécifiés. Si Faux, seuls les en-tête des messages sont retournés. Valeur par défaut : Vrai                       |


> * Si aucune boite de réception n'est sélectionnée avec la fonction [`.selectBox()`](#selectbox), une erreur est générée.
> * S'il n'y a pas de connexion ouverte, `.getMails()` ouvrira une connexion avec la dernière boite de réception spécifiée à l'aide de [`.selectBox()`](#selectbox).

#### Résultat

`.getMails()` retourne un objet contenant les collections suivantes :

| Propriété | Type       | Description                                                                                                                            |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| liste     | Collection | Collection d'objets [`Email`](EmailObjectClass.md#email-object). Si aucun objet Email n'est trouvé, une collection vide est retournée. |
| notFound  | Collection | Collection of:<br><ul><li>première syntaxe - IDs de messages passés antérieurement qui n'existent pas</li><li>deuxième syntaxe - numéros de séquence des messages entre startMsg et endMsg qui n'existent pas</li></ul>An empty collection is returned if all messages are found.                           |


#### Exemple

Vous souhaitez récupérer les 20 emails les plus récents sans modifier le statut "seen" :

```4d
 var $server,$boxInfo,$result : Object
 var $transporter : 4D.IMAPTransporter

 $server:=New object
 $server.host:="imap.gmail.com" //obligatoire
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

  //create transporter
 $transporter:=IMAP New transporter($server)

  //select mailbox
 $boxInfo:=$transporter.selectBox("INBOX")

  If($boxInfo.mailCount>0)
        // récupérer les en-têtes des 20 derniers messages sans les marquer comme lus
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
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer { ; *updateSeen* : Boolean } ) : Blob<br>**.getMIMEAsBlob**( *msgID* : Text { ; *updateSeen* : Boolean } ) : Blob<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMIMEAsBlob().Params -->
| Paramètres | Type        |    | Description                                                                                                        |
| ---------- | ----------- |:--:| ------------------------------------------------------------------------------------------------------------------ |
| msgNumber  | Entier long | -> | Numéro de séquence du message                                                                                      |
| msgID      | Texte       | -> | ID unique du message                                                                                               |
| updateSeen | Booléen     | -> | Si Vrai, le message est marqué comme "seen" (lu) dans la boite de réception. Si Faux, le message demeure inchangé. |
| Résultat   | BLOB        | <- | Blob de la chaine MIME retournée par le serveur mail                                                               |
<!-- END REF -->




#### Description

La fonction `.getMIMEAsBlob()` <!-- REF #IMAPTransporterClass.getMIMEAsBlob().Summary -->retourne un BLOB avec le contenu MIME du message correspondant au *msgNumber* ou *msgID* dans la boîte de réception désignée par le `IMAP_transporter`<!-- END REF -->.

Dans le premier paramètre, vous pouvez passer soit :

* *msgNumber*, une valeur *integer* indiquant le numéro de séquence du message à récupérer ou
* *msgID*, une valeur *text* indiquant l'ID unique du message à récupérer.

Le paramètre optionnel *updateSeen* vous permet d'indiquer si le message est marqué comme "seen" (lu) dans la boîte de réception. Vous pouvez passer :

* **Vrai** - pour marquer le message comme "seen" (indiquant que le message a été lu)
* **Faux** - pour ne pas modifier le statut "seen" du message

> * La fonction retourne un BLOB vide si *msgNumber* ou msgID désigne un message inexistant,
> * Si aucune boite de réception n'est sélectionnée avec la fonction [`.selectBox()`](#selectbox), une erreur est générée,
> * S'il n'y a pas de connexion ouverte,`.getMIMEAsBlob()` ouvrira une connexion avec la dernière boite de réception spécifiée à l'aide de `.selectBox()`.

#### Résultat

`.getMIMEAsBlob()` retourne un `BLOB` retourne un BLOB qui peut être archivé dans une base de données ou converti en un objet [`Email`](EmailObjectClass.md#objet-email) avec la commande `MAIL Convert from MIME`.

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

  //créer transporteur
 $transporter:=IMAP New transporter($server)

  //sélectionner la boite de réception
 $boxInfo:=$transporter.selectBox("Inbox")

  //obtenir BLOB
 $blob:=$transporter.getMIMEAsBlob(1)
```

<!-- END REF -->



<!-- INCLUDE transporter.host.Desc -->




<!-- INCLUDE transporter.logFile.Desc -->



<!-- REF IMAPTransporterClass.move().Desc -->
## .move()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.move().Syntax -->

**.move**( *msgsIDs* : Collection ; *destinationBox* : Text ) : Object<br>**.move**( *allMsgs* : Integer ; *destinationBox* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.move().Params -->
| Paramètres     | Type        |    | Description                                                          |
| -------------- | ----------- |:--:| -------------------------------------------------------------------- |
| msgsIDs        | Collection  | -> | Collection d'IDs uniques de messages (texte)                         |
| allMsgs        | Entier long | -> | `IMAP all` : tous les messages de la boîte de réception sélectionnée |
| destinationBox | Texte       | -> | Mailbox to receive moved messages                                    |
| Résultat       | Object      | <- | Status of the move operation                                         |
<!-- END REF -->


#### Description

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

Vous pouvez passer :

- in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to move, or
- in the *allMsgs* parameter, the `IMAP all` constant (integer) to move all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a text value with the name of the mailbox where the messages will be moved.

> Cette fonction est uniquement prise en charge par les serveurs IMAP compatibles avec RFC [8474](https://tools.ietf.org/html/rfc8474).

**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


#### Exemple 1

To move a selection of messages:

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

  //obtenir la collection d'IDs uniques des messages
 $mailIds:=$transporter.searchMails("subject \"4D new feature:\"")

  // déplacer les messages de la boite de réception courante vers la boite de réception "documents"
 $status:=$transporter.move($mailIds;"documents")
```

#### Exemple 2

To move all messages in the current mailbox:

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

  // déplacer tous les messages de la boite de réception courante vers la boite de réception "documents"
 $status:=$transporter.move(IMAP all;"documents")
```

<!-- END REF -->



<!-- REF IMAPTransporterClass.numToID().Desc -->
## .numToID()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.numToID().Syntax -->
**.numToID**( *startMsg* : Integer ; *endMsg* : Integer ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.numToID().Params -->
| Paramètres | Type        |    | Description                           |
| ---------- | ----------- |:--:| ------------------------------------- |
| startMsg   | Entier long | -> | Numéro de séquence du premier message |
| endMsg     | Entier long | -> | Numéro de séquence du dernier message |
| Résultat   | Collection  | <- | Collection of unique IDs              |
<!-- END REF -->


#### Description

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg*<!-- END REF --> in the currently selected mailbox.

In the *startMsg* parameter, pass an integer value corresponding to the number of the first message in a sequential range. Si vous passez un nombre négatif (*startMsg* <= 0), le premier message de la boîte de réception sera utilisé comme début de séquence.

In the *endMsg* parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. Si vous passez un nombre négatif (*endMsg* <= 0), le dernier message de la boîte de réception sera utilisé comme fin de séquence.

#### Résultat

The function returns a collection of strings (unique IDs).

#### Exemple

```4d
 var $transporter : 4D.IMAPTransporter
 var $server;$boxInfo;$status : Object
 var $mailIds : Collection

 $server:=New object
 $server.host:="imap.gmail.com" //Obligatoire
 $server.port:=993
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=IMAP New transporter($server)

  //sélectionner la boite de réception
 $boxInfo:=$transporter.selectBox("inbox")

  //obtenir les IDs des 5 derniers messages reçus
 $mailIds:=$transporter.numToID(($boxInfo.mailCount-5);$boxInfo.mailCount)

  //supprimer les messages de la boite de réception courante
 $status:=$transporter.delete($mailIds)
```

<!-- END REF -->


<!-- REF IMAPTransporterClass.removeFlags().Desc -->
## .removeFlags()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->
**.removeFlags**( *msgIDs* : Collection ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Text ; *keywords* :  Object ) : Object<br>**.removeFlags**( *msgIDs* : Longint ; *keywords* :  Object ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.removeFlags().Params -->
| Paramètres | Type       |    | Description                                                                                                                                                                 |
| ---------- | ---------- |:--:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| msgIDs     | Collection | -> | Collection de chaînes : IDs uniques des messages (texte)<br>Texte : ID unique d'un message<br>Numérique (IMAP all) : Tous les messages de la boîte sélectionnée |
| keywords   | Object     | -> | Keyword flags to remove                                                                                                                                                     |
| Résultat   | Object     | <- | Status of the removeFlags operation                                                                                                                                         |
<!-- END REF -->


#### Description

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the `msgIDs` for the specified `keywords`<!-- END REF -->.

Dans le paramètre `msgIDs`, vous pouvez passer soit :

* une *collection* contenant les IDs uniques de messages spécifiques, ou
* l'ID unique (*texte*) d'un seul message ou
* la constante suivante (*entier long*) pour tous les messages de la boîte sélectionnée :
    
    | Constante | Valeur | Commentaire                                             |
    | --------- | ------ | ------------------------------------------------------- |
    | IMAP all  | 1      | Sélectionner tous les messages de la boîte sélectionnée |


The `keywords` parameter lets you pass an object with keyword values for specific flags to remove from `msgIDs`. Vous pouvez utiliser les mots-clés suivants :

| Paramètres | Type    | Description                                         |
| ---------- | ------- | --------------------------------------------------- |
| $draft     | Booléen | True to remove the "draft" flag from the message    |
| $seen      | Booléen | True to remove the "seen" flag from the message     |
| $flagged   | Booléen | True to remove the "flagged" flag from the message  |
| $answered  | Booléen | True to remove the "answered" flag from the message |
| $deleted   | Booléen | True to remove the "deleted" flag from the message  |


Note that False values are ignored.

**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


#### Exemple

```4d
var $options;$transporter;$boxInfo;$status : Object

$options:=New object
$options.host:="imap.gmail.com"
$options.port:=993
$options.user:="4d@gmail.com"
$options.password:="xxxxx"

// Créer le transporteur
$transporter:=IMAP New transporter($options)

// Sélectionner la boite de réception
$boxInfo:=$transporter.selectBox("INBOX")

// Marquer tous les messages de la boite de réception comme étant non vus
$flags:=New object
$flags["$seen"]:=True
$status:=$transporter.removeFlags(IMAP all;$flags)
```

<!-- END REF -->


<!-- REF IMAPTransporterClass.renameBox().Desc -->
## .renameBox()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.renameBox().Syntax -->
**.renameBox**( *currentName* : Text ; *newName* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.renameBox().Params -->
| Paramètres  | Type   |    | Description                      |
| ----------- | ------ |:--:| -------------------------------- |
| currentName | Texte  | -> | Name of the current mailbox      |
| newName     | Texte  | -> | New mailbox name                 |
| Résultat    | Object | <- | Status of the renaming operation |
<!-- END REF -->


#### Description

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Attempting to rename a mailbox from a mailbox name that does not exist or to a mailbox name that already exists will generate an error.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.

**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


#### Exemple

To to rename your “Invoices” mailbox to “Bills”:

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
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->
**.searchMails**( *searchCriteria* : Text ) : Collection<!-- END REF -->

<!-- REF #IMAPTransporterClass.searchMails().Params -->
| Paramètres     | Type       |    | Description                   |
| -------------- | ---------- |:--:| ----------------------------- |
| searchCriteria | Texte      | -> | Critère(s) de recherche       |
| Résultat       | Collection | <- | Collection of message numbers |
<!-- END REF -->


#### Description

> Cette fonction est basée sur la spécification du [protocole IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given *searchCriteria* in the current mailbox<!-- END REF -->. *searchCriteria* consists of one or more search keys.

*searchCriteria* is a text parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. A search key may be a single or multiple items. Par exemple :

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> La correspondance n'est généralement pas sensible à la casse

- If the *searchCriteria* is a null string, the search will be equivalent to a “select all”.
- If the *searchCriteria* includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

- You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... returns all messages with \Seen flag set OR \Flagged flag set

```
searchCriteria = NOT SEEN
```

... returns all messages with \Seen flag not set.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... returns message whose content-type header contains “Mixed” and does not contain “Text”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

As concerns the last two examples, notice that the result of the search is different when you remove the parentheses of the first search key list.

- The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the *searchCriteria* string. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to text` commands). By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.

#### Search value types

Search-keys may request the value to search for:

- **Search-keys with a field-name value**: the field-name is the name of a header field. Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

- **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted. Example: `searchCriteria = FROM "SMITH"` For all search keys that use strings, a message matches the key if the string is a substring of the field. Matching is not case-sensitive.

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces. Example: `searchCriteria = KEYWORD \Flagged \Draft`

- **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers; a colon delimits between two numbers inclusive. Examples: `2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages. `searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set. `searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### Authorized search-keys

**ALL**: All messages in the mailbox.  
**ANSWERED**: Messages with the \Answered flag set.  
**UNANSWERED**: Messages that do not have the \Answered flag set.  
**DELETED**: Messages with the \Deleted flag set.  
**UNDELETED**: Messages that do not have the \Deleted flag set.  
**DRAFT**: Messages with the \Draft flag set.  
**UNDRAFT**: Messages that do not have the \Draft flag set.  
**FLAGGED**: Messages with the \Flagged flag set.  
**UNFLAGGED**: Messages that do not have the \Flagged flag set.  
**RECENT**: Messages that have the \Recent flag set.  
**OLD**: Messages that do not have the \Recent flag set.  
**SEEN**: Messages that have the \Seen flag set.  
**UNSEEN**: Messages that do not have the \Seen flag set.  
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.  
**KEYWORD** <flag>: Messages with the specified keyword set.  
**UNKEYWORD** <flag>: Messages that do not have the specified keyword set.  
**BEFORE** <date>: Messages whose internal date is earlier than the specified date.  
**ON** <date>: Messages whose internal date is within the specified date.  
**SINCE** <date>: Messages whose internal date is within or later than the specified date.  
**SENTBEFORE** <date>: Messages whose Date header is earlier than the specified date.  
**SENTON** <date>: Messages whose Date header is within the specified date.  
**SENTSINCE** <date>: Messages whose Date header is within or later than the specified date.  
**TO** <string>: Messages that contain the specified string in the TO header.  
**FROM** <string>: Messages that contain the specified string in the FROM header.  
**CC** <string>: Messages that contain the specified string in the CC header.  
**BCC** <string>: Messages that contain the specified string in the BCC header.  
**SUBJECT** <string>: Messages that contain the specified string in the Subject header.  
**BODY** <string>: Messages that contain the specified string in the message body.  
**TEXT** <string>: Messages that contain the specified string in the header or in the message body.  
**HEADER** <field-name> <string>: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
**UID** <message UID>: Messages with unique identifiers corresponding to the specified unique identifier set.  
**LARGER** <n>: Messages with a size larger than the specified number of bytes.  
**SMALLER** <n>: Messages with a size smaller than the specified number of bytes.  
**NOT** <search-key>: Messages that do not match the specified search key.  
**OU** <search-key1> <search-key2>: Messages that match either search key.  


<!-- END REF -->


<!-- REF IMAPTransporterClass.selectBox().Desc -->
## .selectBox()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.selectBox().Syntax -->
**.selectBox**( *name* : Text { ; *state* : Integer } ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.selectBox().Params -->
| Paramètres | Type        |    | Description                  |
| ---------- | ----------- |:--:| ---------------------------- |
| name       | Texte       | -> | Nom de la boîte de réception |
| state      | Entier long | -> | Mailbox access status        |
| Résultat   | Object      | <- | Objet boxInfo                |
<!-- END REF -->


#### Description

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the *name* mailbox as the current mailbox<!-- END REF -->. This function allows you to retrieve information about the mailbox.

> To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. Le nom doit représenter une hiérarchie claire, de gauche à droite, avec des niveaux séparés par un caractère délimiteur spécifique. Le délimiteur peut être récupéré à l'aide de la fonction [`.getDelimiter()`](#getdelimiter).

The optional *state* parameter defines the type of access to the mailbox. The possible values are:

| Constante             | Valeur | Commentaire                                                                                                                                                           |
| --------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMAP read only state  | 1      | The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.                                 |
| IMAP read write state | 0      | The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value) |


> * The function generates an error and returns **Null** if *name* designates a non-existing mailbox.
> * If there is no open connection, `.selectBox()` will open a connection.
> * If the connection has not been used since the designated connection delay (see `IMAP New transporter`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Objet retourné**

L'objet `boxInfo` contient les propriété suivantes :

| Propriété  | Type   | Description                                            |
| ---------- | ------ | ------------------------------------------------------ |
| name       | Texte  | Nom de la boîte de réception                           |
| mailCount  | number | Nombre de messages contenus dans la boîte de réception |
| mailRecent | number | Number of messages with the "recent" flag              |


#### Exemple

```4d
 var $server; $boxinfo : Object
 $server:=New object
 $server.host:="imap.gmail.com" //Mandatory
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
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->
**.subscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.subscribe().Params -->
| Paramètres | Type   |    | Description                       |
| ---------- | ------ |:--:| --------------------------------- |
| name       | Texte  | -> | Nom de la boîte de réception      |
| Résultat   | Object | <- | Status of the subscribe operation |
<!-- END REF -->


#### Description

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. As such, you can choose to narrow down a large list of available mailboxes by subscribing to those you usually want to see.

In the `name` parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


#### Exemple

To subscribe to the "Atlas Corp” mailbox in the "Bills" hierarchy:

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
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->


<!-- REF IMAPTransporterClass.unsubscribe().Desc -->
## .unsubscribe()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->
**.unsubscribe**( *name* : Text ) : Object<!-- END REF -->

<!-- REF #IMAPTransporterClass.unsubscribe().Params -->
| Paramètres | Type   |    | Description                         |
| ---------- | ------ |:--:| ----------------------------------- |
| name       | Texte  | -> | Nom de la boîte de réception        |
| Résultat   | Object | <- | Status of the unsubscribe operation |
<!-- END REF -->


#### Description

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. This allows you reduce the number of mailboxes you usually see.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Objet retourné**

La fonction retourne un objet décrivant le statut IMAP :

| Propriété  |                         | Type       | Description                                                                                            |
| ---------- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                         | Booléen    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                         | Texte      | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                         | Collection | Pile d'erreurs 4D (non retournée si une réponse du serveur IMAP est reçue)                             |
|            | \[].errcode            | Nombre     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Texte      | Description de l'erreur 4D                                                                             |
|            | \[].componentSignature | Texte      | Signature du composant interne qui a retourné l'erreur                                                 |


#### Exemple

To unsubscribe from the "Atlas Corp” mailbox in the "Bills" hierarchy:

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
   Else
   ALERT("Error: "+$status.statusText)
   End if
End if
```

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->




<style> h2 { background: #d9ebff;}</style>
