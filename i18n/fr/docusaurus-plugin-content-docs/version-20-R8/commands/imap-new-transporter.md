---
id: imap-new-transporter
title: IMAP New transporter
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #_command_.IMAP New transporter.Syntax -->**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter<!-- END REF -->

<!-- REF #_command_.IMAP New transporter.Params -->

| Paramètres | Type                               |     | Description                                                                      |
| ---------- | ---------------------------------- | :-: | -------------------------------------------------------------------------------- |
| server     | Object                             |  →  | Informations sur le serveur IMAP                                                 |
| Résultat   | 4D.IMAPTransporter |  ←  | [Objet IMAP transporter](../API/IMAPTransporterClass.md#imap-transporter-object) |

<!-- END REF -->

#### Description

La commande `IMAP New transporter`<!-- REF #_command_.IMAP New transporter.Summary -->configure une nouvelle connexion IMAP<!-- END REF --> en fonction du paramètre *server* et retourne un nouvel objet *transporter*. L'objet transporteur retourné sera alors utilisé pour la réception d'emails.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Valeur par défaut (si omise)                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/IMAPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                              | False                                                                            |
| .**accessTokenOAuth2** : Text<br/>.**accessTokenOAuth2** : Object<br/>Chaîne ou objet token représentant les informations d'autorisation OAuth2. Utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné dans l'objet *[IMAP transporter](../API/IMAPTransporterClass.md#imap-transporter-object)*. | aucun                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/IMAPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                | le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](../API/IMAPTransporterClass.md#checkconnectiondelay)<br/><!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                        | 300                                                                              |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/IMAPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                   | 30                                                                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/IMAPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *obligatoire*                                                                    |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/IMAPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | aucun                                                                            |
| .**password** : Text<br/>Mot de passe utilisateur pour l'authentification sur le serveur. Non retourné en objet *[IMAP transporter](#imap-transporter-object)*.                                                                                                                                                                                                                                                                                                                                                                          | aucun                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/IMAPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 993                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/IMAPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | aucun                                                                            |

> **Attention** : Assurez-vous que le timeout défini est inférieur au timeout du serveur, sinon le timeout du client sera inutile.

#### Résultat

La fonction retourne un [**objet IMAP transporter**](../API/IMAPTransporterClass.md#imap-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.

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

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1723                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
