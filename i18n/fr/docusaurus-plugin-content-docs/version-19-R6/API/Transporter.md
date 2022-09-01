---
id: Transporter
title: Classe Transporter
---

## Description

<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |
</details>

<!-- REF #transporter.acceptUnsecureConnection.Syntax -->

**.acceptUnsecureConnection** : Boolean<!-- END REF -->

#### Description

The `.acceptUnsecureConnection` property contains <!-- REF #transporter.acceptUnsecureConnection.Summary -->**True** if 4D is allowed to establish an unencrypted connection<!-- END REF --> when encrypted connection is not possible.

Elle contient **False** si les connexions non chiffrées ne sont pas autorisées, auquel cas une erreur est retournée lorsque la connexion chiffrée n'est pas possible.

Ports sécurisés disponibles :

- SMTP
  - 465: SMTPS
  - 587 ou 25 : SMTP avec mise à niveau STARTTLS si le serveur le prend en charge.

- IMAP
  - 143 : Port IMAP non chiffré
  - 993 : IMAP avec mise à niveau STARTTLS si le serveur le prend en charge

- POP3
  - 110 : Port POP3 non chiffré
  - 995 : POP3 avec mise à niveau STARTTLS si le serveur le prend en charge.
<!-- END REF -->

---

<!-- REF transporter.authenticationModeIMAP.Desc -->
## .authenticationMode

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

<!-- REF #transporter.authenticationMode.Syntax -->

**.authenticationMode** : Text<!-- END REF -->

#### Description

The `.authenticationMode` property contains <!-- REF #transporter.authenticationMode.Summary -->the authentication mode used to open the session on the mail server<!-- END REF -->.

Par défaut, le mode le plus sécurisé pris en charge par le serveur est utilisé.

Valeurs possibles :

| Value    | Constantes                     | Commentaire                                     |
| -------- | ------------------------------ | ----------------------------------------------- |
| CRAM-MD5 | `IMAP authentication CRAM MD5` | Authentification à l'aide du protocole CRAM-MD5 |
| LOGIN    | `IMAP authentication login`    | Authentification à l'aide du protocole LOGIN    |
| OAUTH2   | `IMAP authentication OAUTH2`   | Authentification à l'aide du protocole OAuth2   |
| PLAIN    | `IMAP authentication plain`    | Authentification à l'aide du protocole PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.authenticationModePOP3.Desc -->
## .authenticationMode

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

**.authenticationMode** : Text

#### Description

La propriété `.authenticationMode` contient le mode d'authentification utilisé pour ouvrir la session sur le serveur de messagerie.

Par défaut, le mode le plus sécurisé pris en charge par le serveur est utilisé.

Valeurs possibles :

| Value    | Constantes                     | Commentaire                                                   |
| -------- | ------------------------------ | ------------------------------------------------------------- |
| APOP     | `POP3 authentication APOP`     | Authentification à l'aide du protocole APOP (POP3 uniquement) |
| CRAM-MD5 | `POP3 authentication CRAM-MD5` | Authentification à l'aide du protocole CRAM-MD5               |
| LOGIN    | `POP3 authentication login`    | Authentification à l'aide du protocole LOGIN                  |
| OAUTH2   | `POP3 authentication OAUTH2`   | Authentification à l'aide du protocole OAuth2                 |
| PLAIN    | `POP3 authentication plain`    | Authentification à l'aide du protocole PLAIN                  |

<!-- END REF -->

---

<!-- REF transporter.authenticationModeSMTP.Desc -->
## .authenticationMode

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

**.authenticationMode** : Text

#### Description

La propriété `.authenticationMode` contient le mode d'authentification utilisé pour ouvrir la session sur le serveur de messagerie.

Par défaut, le mode le plus sécurisé pris en charge par le serveur est utilisé.

Valeurs possibles :

| Value    | Constantes                     | Commentaire                                     |
| -------- | ------------------------------ | ----------------------------------------------- |
| CRAM-MD5 | `SMTP authentication CRAM MD5` | Authentification à l'aide du protocole CRAM-MD5 |
| LOGIN    | `SMTP authentication login`    | Authentification à l'aide du protocole LOGIN    |
| OAUTH2   | `SMTP authentication OAUTH2`   | Authentification à l'aide du protocole OAuth2   |
| PLAIN    | `SMTP authentication plain`    | Authentification à l'aide du protocole PLAIN    |

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->
## .bodyCharset

<details><summary>Historique</summary>

| Version | Modifications                  |
| ------- | ------------------------------ |
| v18     | Prise en charge de UTF8 base64 |
| v17 R5  | Ajoutées                       |

</details>

<!-- REF #transporter.bodyCharset.Syntax -->

**.bodyCharset** : Text<!-- END REF -->

#### Description

The `.bodyCharset` property contains <!-- REF #transporter.bodyCharset.Summary -->  the charset and encoding used for the body part of the email<!-- END REF -->.

- subject,
- attachment filename(s),
- email name.

**Valeurs possibles :**

| Constante                | Value                          | Commentaire                                                                                                    |
| ------------------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset* : US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable</li><li>*bodyCharset* : US-ASCII si possible, japonais (ISO-2022-JP) et 7 bits si possible, sinon UTF-8 et Quoted-printable</li></ul>                                                                                      |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset* : ISO-8859-1 & Quoted-printable</li><li>*bodyCharset* : ISO-8859-1 et 8 bits</li></ul>                                                                                      |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset* : US-ASCII si possible, sinon UTF-8 & Quoted-printable (**valeur par défaut**) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* &*bodyCharset* : US-ASCII si possible, sinon UTF-8 & base64                                    |

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF #transporter.connectionTimeOut.Syntax -->

**.connectionTimeOut** : Integer<!-- END REF -->

#### Description

The `.connectionTimeOut` property contains <!-- REF #transporter.connectionTimeOut.Summary -->the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. Par défaut, si la propriété n'a pas été définie dans l'objet server (utilisé pour créer l'objet transporteur avec `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), la valeur utilisée est 30.

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->
## .headerCharset

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF #transporter.headerCharset.Syntax -->

**.headerCharset** : Text<!-- END REF -->

#### Description

The `.headerCharset` property contains <!-- REF #transporter.headerCharset.Summary --> the charset and encoding used for the email header<!-- END REF -->. L'en-tête comprend les éléments suivants de l'e-mail :

- subject,
- attachment filename(s),
- email name.

**Valeurs possibles :**

| Constante                | Value                          | Commentaire                                                                                                |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| mail mode ISO2022JP      | US-ASCII_ISO-2022-JP_UTF8_QP | <ul><li>*headerCharset* : US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable</li><li>*bodyCharset* : US-ASCII si possible, japonais (ISO-2022-JP) et 7 bits si possible, sinon UTF-8 et Quoted-printable</li></ul>                                                                                  |
| mail mode ISO88591       | ISO-8859-1                     | <ul><li>*headerCharset* : ISO-8859-1 & Quoted-printable</li><li>*bodyCharset* : ISO-8859-1 et 8 bits</li></ul>                                                                                 |
| mail mode UTF8           | US-ASCII_UTF8_QP             | *headerCharset* & *bodyCharset* : US-ASCII si possible, sinon UTF-8 & Quoted-printable (valeur par défaut) |
| mail mode UTF8 in base64 | US-ASCII_UTF8_B64            | *headerCharset* &*bodyCharset* : US-ASCII si possible, sinon UTF-8 & base64                                |

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->
## .host

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF #transporter.host.Syntax -->

**.host** : Text<!-- END REF -->

#### Description

The `.host` property contains <!-- REF #transporter.host.Summary -->the name or the IP address of the host server<!-- END REF -->. Utilisée pour les échanges de courrier (SMTP, POP3, IMAP).

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->
## .logFile

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajoutées      |

</details>

<!-- REF #transporter.logFile.Syntax -->

**.logFile** : Text<!-- END REF -->

#### Description

The `.logFile` property contains <!-- REF #transporter.logFile.Summary -->the path of the extended log file defined (if any) for the mail connection<!-- END REF -->. Elle peut être relative (au dossier Logs courant) ou absolue.

Contrairement aux fichiers log habituels (activés via la commande `SET DATABASE PARAMETER`), les fichiers log étendus stockent le contenu MIME de tous les emails envoyés et n'ont pas de limite de taille. Pour plus d'informations sur les fichiers log étendus, reportez-vous à :

- **Connexions SMTP** - [4DSMTPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **Connexions POP3** - [4DPOP3Log.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- **Connexions IMAP** - [4DIMAPLog.txt](../Debugging/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)

<!-- END REF -->

---

<!-- REF transporter.port.Desc -->
## .port

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

<!-- REF #transporter.port.Syntax -->

**.port** : Integer<!-- END REF -->

#### Description

The `.port` property contains <!-- REF #transporter.port.Summary --> the port number used for mail transactions<!-- END REF -->. Par défaut, si la propriété *port* n'a pas été définie dans l'objet *server* (utilisé pour créer l'objet transporteur avec `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), le port utilisé est :

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->
## .sendTimeOut

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |
</details>

<!-- REF #transporter.sendTimeOut.Syntax -->

**.sendTimeOut** : Integer<!-- END REF -->

#### Description

The `.sendTimeOut` property contains <!-- REF #transporter.sendTimeOut.Summary --> the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs<!-- END REF -->. .

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->
## .user

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>


<!-- REF #transporter.user.Syntax -->

**.user** : Text<!-- END REF -->

#### Description

The `.user` property contains <!-- REF #transporter.user.Summary --> the user name used for authentication on the mail server<!-- END REF -->.

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->
## .checkConnection()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R4  | Ajoutées      |

</details>

<!-- REF #transporter.checkConnection().Syntax -->

**.checkConnection()** : Object<!-- END REF -->

<!-- REF #transporter.checkConnection().Params -->
| Paramètres | Type   |    | Description                                                               |
| ---------- | ------ |:--:| ------------------------------------------------------------------------- |
| Result     | Object | <- | Statut de la connexion de l'objet transporteur|<!-- END REF -->

|

#### Description

The `.checkConnection()` function <!-- REF #transporter.checkConnection().Summary --> checks the connection using information stored in the transporter object<!-- END REF -->, recreates the connection if necessary, and returns the status. Cette fonction vous permet de vérifier que les valeurs fournies par l'utilisateur sont valides et cohérentes.

#### Objet retourné

La fonction envoie une requête au serveur de mail et retourne un objet décrivant le statut. Cet objet peut avoir les propriétés suivantes :

| Propriété  |                          | Type       | Description                                                                                                                 |
| ---------- | ------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| success    |                          | boolean    | Vrai si la vérification a été effectuée avec succès, sinon Faux                                                             |
| status     |                          | number     | (SMTP uniquement) Code du statut retourné par le serveur de messagerie (0 en cas de problème non lié au traitement du mail) |
| statusText |                          | text       | Message du statut retourné par le serveur de messagerie, ou dernière erreur retournée dans la pile d'erreurs 4D             |
| errors     |                          | collection | Pile d'erreurs 4D (non retournée si une réponse du serveur de messagerie est reçue)                                         |
|            | \[ ].errCode            | number     | Code d'erreur 4D                                                                                                            |
|            | \[ ].message            | text       | Description de l'erreur 4D                                                                                                  |
|            | \[ ].componentSignature | text       | Signature du composant interne qui a retourné l'erreur                                                                      |

<!-- END REF -->
