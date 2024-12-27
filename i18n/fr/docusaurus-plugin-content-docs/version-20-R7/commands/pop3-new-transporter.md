---
id: pop3-new-transporter
title: POP3 New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!--REF #_command_.POP3 New transporter.Params-->

| Paramètres | Type                               |   | Description                                                                       |
| ---------- | ---------------------------------- | - | --------------------------------------------------------------------------------- |
| server     | Object                             | → | Informations sur le serveur IMAP                                                  |
| Résultat   | 4D.POP3Transporter | ← | [Object POP3 transporter](../API/POP3TransporterClass.md#pop3-transporter-object) |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

#### Description

La commande `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary --> configure une nouvelle connexion POP3<!-- END REF -->en fonction du paramètre *server* et retourne un nouvel objet [POP3 transporter](../API/POP3TransporterClass.md#pop3-transporter-object). L'objet transporteur retourné sera alors utilisé pour la réception d'emails.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Valeur par défaut (si omise)                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/POP3TransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                            | False                                                                            |
| .**accessTokenOAuth2** : Text<br/>.**accessTokenOAuth2** : Object<br/>Chaîne ou objet token représentant les informations d'autorisation OAuth2. Utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné dans l'objet *[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)*. | aucun                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/POP3TransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                              | le mode d'authentification le plus sûr pris en charge par le serveur est utilisé |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/POP3TransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                 | 30                                                                               |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/POP3TransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *obligatoire*                                                                    |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/POP3TransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                               | aucun                                                                            |
| **password** : Text<br/>Mot de passe utilisateur pour l'authentification sur le serveur. Non retourné dans l'objet *[SMTP transporter](../API/POP3TransporterClass.md#smtptransporterobject)*.                                                                                                                                                                                                                                                                                                                                                         | aucun                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/POP3TransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 995                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/POP3TransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | aucun                                                                            |

#### Résultat

La fonction retourne un [**objet POP3 transporter**](../API/POP3TransporterClass.md#pop3-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.

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
