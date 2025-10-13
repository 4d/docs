---
id: smtp-new-transporter
title: SMTP New transporter
displayed_sidebar: docs
---

<!-- REF #_command_.SMTP New transporter.Syntax -->**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter<!-- END REF -->

<!--REF #_command_.SMTP New transporter.Params-->

| Paramètres | Type                               |                             | Description                                                                      |
| ---------- | ---------------------------------- | --------------------------- | -------------------------------------------------------------------------------- |
| server     | Object                             | &#8594; | Informations sur le serveur de messagerie                                        |
| Résultat   | 4D.SMTPTransporter | &#8592; | [Objet SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object) |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 18      | Nouvelle propriété logFile                        |
| 17 R5   | Nouvelles propriétés bodyCharset et headerCharset |
| 17 R4   | Ajout                                             |

</details>

## Description

La commande `SMTP New transporter` <!-- REF #_command_.SMTP New transporter.Summary -->configure une nouvelle connexion SMTP<!-- END REF --> en fonction du paramètre *server* et renvoie un nouvel [objet SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object). L'objet transporteur retourné sera alors utilisé pour l'envoi d'emails.

> Cette commande n'ouvre pas de connexion au serveur SMTP. Cette commande n'ouvre pas de connexion au serveur SMTP.
>
> La connexion SMTP est automatiquement fermée :
>
>  - lorsque l'objet transporter est détruit si la propriété [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) est à true (par défaut),
>  - après chaque exécution de la fonction [`send()`](../API/SMTPTransporterClass.md#send) si la propriété [`keepAlive`](../API/SMTPTransporterClass.md#keepalive) est false.

Dans le paramètre *server*, passez un objet contenant les propriétés suivantes :

| *server*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Valeur par défaut (si omise)                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](../API/SMTPTransporterClass.md#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                              | False                                                                                            |
| .**accessTokenOAuth2** : Text<br/>.**accessTokenOAuth2** : Object<br/>Chaîne ou objet token représentant les informations d'autorisation OAuth2. Utilisé uniquement avec OAUTH2 `authenticationMode`. Si `accessTokenOAuth2` est utilisé mais que `authenticationMode` est omis, le protocole OAuth 2 est utilisé (si le serveur l'autorise). Non retourné dans l'objet *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)*. | aucun                                                                                            |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](../API/SMTPTransporterClass.md#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                | le mode d'authentification le plus sûr pris en charge par le serveur est utilisé                 |
| [<!-- INCLUDE #transporter.bodyCharset.Syntax -->](../API/SMTPTransporterClass.md#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](../API/SMTPTransporterClass.md#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                   | 30                                                                                               |
| [<!-- INCLUDE #transporter.headerCharset.Syntax -->](../API/SMTPTransporterClass.md#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                               | `mail mode UTF8` (US-ASCII_UTF8_QP) |
| [<!-- INCLUDE #transporter.host.Syntax -->](../API/SMTPTransporterClass.md#host)<br/><!-- INCLUDE #transporter.host.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *obligatoire*                                                                                    |
| [<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](../API/SMTPTransporterClass.md#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                         | True                                                                                             |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](../API/SMTPTransporterClass.md#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | aucun                                                                                            |
| **password** : Text<br/>Mot de passe utilisateur pour l'authentification sur le serveur. Non retourné dans l'objet *[SMTP transporter](../API/SMTPTransporterClass.md#smtp-transporter-object)*.                                                                                                                                                                                                                                                                                                                                                         | aucun                                                                                            |
| [<!-- INCLUDE #transporter.port.Syntax -->](../API/SMTPTransporterClass.md#port)<br/><!-- INCLUDE #transporter.port.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 587                                                                                              |
| [<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](../API/SMTPTransporterClass.md#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 100                                                                                              |
| [<!-- INCLUDE #transporter.user.Syntax -->](../API/SMTPTransporterClass.md#user)<br/><!-- INCLUDE #transporter.user.Summary -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | aucun                                                                                            |

## Résultat

La fonction retourne un [**objet SMTP transporter**](../API/SMTPTransporterClass.md#smtp-transporter-object). Toutes les propriétés retournées sont en **lecture seule**.

## Exemple

```4d
 $server:=New object
 $server.host:="smtp.gmail.com" //Mandatory
 $server.port:=465
 $server.user:="4D@gmail.com"
 $server.password:="XXXX"
 $server.logFile:="LogTest.txt" //Extended log to save in the Logs folder

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

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1608                        |
| Thread safe        | &check; |


