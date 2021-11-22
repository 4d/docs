---
id: debugLogFiles
title: Description des fichiers historiques
---

Les applications 4D peuvent générer plusieurs fichiers d'historique qui sont utiles pour le débogage ou l'optimisation de leur exécution. Les logs sont généralement démarrés ou arrêtés à l'aide des sélecteurs des commandes [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) ou [WEB SET OPTION](https://doc.4d.com/4dv19/help/command/en/page1210.html) et sont stockés dans le dossier [Logs](Project/architecture.md#logs-folder) de la base.

Les informations de l'historique doivent être analysées pour détecter et corriger les problèmes. Cette section fournit une description complète des fichiers journaux suivants :

*   [4DRequestsLog.txt](#4drequestslogtxt)
*   [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt)
*   [HTTPDebugLog.txt](#httpdebuglogtxt)
*   4DDebugLog.txt ([standard](#4ddebuglogtxt-standard) & [tabular](#4ddebuglogtxt-tabular))
*   [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
*   [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*   [Fichier d'historique des requêtes ORDA clientes](#orda-client-requests)

Note: When a log file can be generated either on 4D Server or on the remote client, the word "Server" is added to the server-side log file name, for example "4DRequestsLogServer.txt"

Log files share some fields so that you can establish a chronology and make connections between entries while debugging:

*   `sequence_number` : ce numéro est unique parmi tous les fichiers d'historique de débogage et est incrémenté à chaque nouvelle entrée, quel que soit le fichier d'historique, de manière à ce que vous puissiez connaître la séquence exacte des opérations.
*   `connection_uuid` : pour chaque process 4D créé sur un client 4D qui se connecte au serveur, cet UUID de connexion est stocké à la fois côté serveur et client. Il vous permet d'identifier facilement le client distant qui a lancé le process.

## 4DRequestsLog.txt

This log file records standard requests carried out by the 4D Server machine or the 4D remote machine that executed the command (excluding Web requests).

How to start this log:

*   sur le serveur :

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
//côté serveur
```


*   sur le client :

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
//côté distant
```
> This statement also starts the [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt) log file.

#### En-têtes

This file starts with the following headers:

*   Log Session Identifier (Identifiant de session d'historique)
*   Nom du serveur qui héberge l'application
*   User Login Name : Nom de l'utilisateur (défini dans l'OS) qui exécute l'application 4D sur le serveur.

#### Contenu

For each request, the following fields are logged:

| Noms des champs                            | Description                                                                                                                                                                                                                                                                  |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                            | Numéro d'opération séquentiel et unique dans la session d'historique                                                                                                                                                                                                         |
| time                                       | Date et heure au format ISO 8601 : 'YYYY-MM-DDTHH:MM:SS.mmm'                                                                                                                                                                                                                 |
| systemid                                   | ID système                                                                                                                                                                                                                                                                   |
| component                                  | Signature du composant (par exemple '4SQLS' ou 'dbmg')                                                                                                                                                                                                                       |
| process\_info_                           | correspond au champ "index" dans le fichier d'historique 4DRequestsLog_ProcessInfo.txt, permettant de relier une requête à un process.                                                                                                                                       |
| request                                    | ID de requête en mode distant chaîne de message pour les requêtes SQL ou messages `LOG EVENT`                                                                                                                                                                                |
| bytes_in                                   | Nombre d'octets reçus                                                                                                                                                                                                                                                        |
| bytes_out                                  | Nombre d'octets envoyés                                                                                                                                                                                                                                                      |
| server\_duration &#124; exec\_duration | Dépend de l'endroit où l'historique est généré :<p><li>*server\_duration* lorsqu'il est généré sur le client --Temps en microsecondes pris par le serveur pour traiter la requête et retourner une réponse. Correspond au chemin B vers F dans l'image ci-dessous, OU</li><li>*exec\_duration* lorsqu'il est généré sur le serveur --Temps en microsecondes pris par le serveur pour traiter la requête. Correspond au chemin B vers F dans l'image ci-dessous.</li>                                                                                                                                                 |
| write\_duration                          | Temps en microsecondes pour envoyer :<p><li>La requête (lorsqu'elle est exécutée sur le client). Correspond au chemin A vers B dans l'image ci-dessous.</li><li>La réponse (lorsqu'elle est exécutée sur le serveur). Correspond au chemin E vers F dans l'image ci-dessous.</li>                                                                                                                                                            |
| task_kind                                  | Préemptif ou coopératif (respectivement 'p' ou 'c')                                                                                                                                                                                                                          |
| rtt                                        | Temps en microsecondes pris par le client pour envoyer la requête et pour qu'elle soit reçue par le serveur. Correspond respectivement aux chemins A vers D et E vers H dans l'image ci-dessous.<p><li>Mesuré uniquement lorsque la couche réseau ServerNet est utilisée, retourne 0 lorsque l'ancienne couche réseau est utilisée.</li><li>Dans les versions antérieures à Windows 10 ou à Windows Server 2016, l'appel retournera la valeur 0.</li> |

Request flow:

![](assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

This log file records information on each process created on the 4D Server machine or the 4D remote machine that executed the command (excluding Web requests).

How to start this log:

*   sur le serveur :

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //côté serveur
```

*   sur le client :

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //côté distant
```
> This statement also starts the [4DRequestsLog.txt](#4drequestslogtxt) log file.

#### En-têtes

This file starts with the following headers:

*   Log Session Identifier (Identifiant de session d'historique)
*   Nom du serveur qui héberge l'application
*   User Login Name : Nom de l'utilisateur (défini dans l'OS) qui exécute l'application 4D sur le serveur.


#### Contenu

For each process, the following fields are logged:

| Noms des champs                   | Description                                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| sequence_number                   | Numéro d'opération séquentiel et unique dans la session d'historique |
| time                              | Date et heure au format ISO 8601 : "YYYY-MM-DDTHH:MM:SS.mmm"         |
| process\_info_index             | Numéro de process séquentiel et unique                               |
| CDB4DBaseContext                  | UUID du contexte de base du composant DB4D                           |
| systemid                          | ID système                                                           |
| server\_process\_id           | ID du process sur le serveur                                         |
| remote\_process\_id           | ID du process sur le client                                          |
| process\_name                   | Nom du process                                                       |
| cID                               | Identifiant de la connexion 4D                                       |
| uID                               | Identifiant du client 4D                                             |
| IP Client                         | Addresse IPv4/IPv6 du client                                         |
| host_name                         | Nom d'hôte du client                                                 |
| user_name                         | Nom de connexion utilisateur sur le client                           |
| connection\_uuid                | Identifiant UUID de process de connexion                             |
| server\_process\_unique\_id | ID unique du process sur le serveur                                  |

## HTTPDebugLog.txt

Ce fichier d'historique enregistre chaque requête HTTP et chaque réponse en mode brut (raw). Les requêtes sont enregistrées dans leur totalité (en-têtes compris). Les parts du body peuvent optionellement être enregistrées.

How to start this log:

```4d
WEB SET OPTION(Web debug log;wdl enable without body)  
//d'autres valeurs sont disponibles
```

Les champs suivants sont enregistrés pour chaque requête et réponse :

| Noms des champs | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| SocketID        | ID du socket utilisé pour la communication                           |
| PeerIP          | Adresse IPv4 de l'hôte (client)                                      |
| PeerPort        | Port utilisé par l'hôte (client)                                     |
| TimeStamp       | Horodatage en millisecondes (depuis le démarrage du système)         |
| ConnectionID    | Connexion UUID (UUID du VTCPSocket utilisé pour la communication)    |
| SequenceNumber  | Numéro d'opération séquentiel et unique dans la session d'historique |

## 4DDebugLog.txt (standard)

This log file records each event occurring at the 4D programming level. Standard mode provides a basic view of events.

How to start this log:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
//standard, tous les process

SET DATABASE PARAMETER(Current process debug log recording;2)  
//standard, process courant uniquement
```

The following fields are logged for each event:

| Colonne # | Description                                                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Numéro d'opération séquentiel et unique dans la session d'historique                                                             |
| 2         | Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)                                                                       |
| 3         | ID process (p=xx) et ID unique process (puid=xx)                                                                                 |
| 4         | Niveau de stack                                                                                                                  |
| 5         | Peut être Nom de commande / Nom de méthode / Message / Info Start Stop task / Nom, événement ou callback plugin / UUID connexion |
| 6         | Durée de l'opération de connexion en millisecondes (différent 2e colonne)                                                        |

## 4DDebugLog.txt (tabulaire)

This log file records each event occurring at the 4D programming level in a tabbed, compact format that includes additional information (compared to the standard format).

How to start this log:

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
//format tabulaire étendu, tous les process

SET DATABASE PARAMETER(Current process debug log recording;2+4)  
//étendu, process courant uniquement
```

The following fields are logged for each event:

| Colonne # | Noms des champs                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | sequence_number                 | Numéro d'opération séquentiel et unique dans la session d'historique                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2         | time                            | Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3         | ProcessID                       | ID du process                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4         | unique_processID                | ID unique du process                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5         | stack_level                     | Niveau de stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6         | operation_type                  | Log operation type. This value may be an absolute value:<p><ol><li>Commande</li><li>Method (project method, database method, etc.)</li><li>Message (sent by [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command only)</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Task</li><li>Member method (method attached to a collection or an object)</li></ol></p>When closing a stack level, the `operation_type`, `operation` and `operation_parameters` columns have the same value as the opening stack level logged in the `stack_opening_sequence_number` column. Par exemple :<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>The 1st and 2nd lines open a stack level, the 3rd and 4th lines close a stack level. Values in the columns 6, 7 and 8 are repeated in the closing stack level line. The column 10 contains the stack level opening sequence numbers, i.e. 122 for the 3rd line and 121 for the 4th. |
| 7         | operation                       | May represent (depending on operation type):<li>a Language Command ID (when type=1)</li><li>a Method Name (when type=2)</li><li>a combination of pluginIndex;pluginCommand (when type=4, 5, 6 or 7). May contain something like '3;2'</li><li>a Task Connection UUID (when type=8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 8         | operation_parameters            | Parameters passed to commands, methods, or plugins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 9         | form_event                      | Form event if any; empty in other cases (suppose that column is used when code is executed in a form method or object method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 10        | stack_opening_sequence_number | Only for the closing stack levels: Sequence number of the corresponding opening stack level                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 11        | stack_level_execution_time    | Only for the closing stack levels: Elapsed time in micro seconds of the current logged action; only for the closing stack levels (see 10th columns in lines 123 and 124 in the log above)                                                                                                                                                                                                                                                                                                                                                                                                                        |

## 4DDiagnosticLog.txt

This log file records many events related to the internal application operation and is human-readable. You can include custom information in this file using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command.

How to start this log:

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //lancer l'enregistrement
```

The following fields are logged for each event:

| Nom des champs     | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| sequenceNumber     | Numéro d'opération séquentiel et unique dans la session d'historique |
| timestamp          | Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)           |
| loggerID           | Optionnel                                                            |
| componentSignature | Optionnel - signature de composant interne                           |
| messageLevel       | Info, Attention, Erreur                                              |
| message            | Description de la saisie de journal                                  |

Depending on the event, various other fields can also be logged, such as task, socket, etc.

## 4DSMTPLog.txt, 4DPOP3Log.txt, et 4DIMAPLog.txt

These log files record each exchange between the 4D application and the mail server (SMTP, POP3, IMAP) that has been initiated by the following commands:

*   SMTP - [SMTP New transporter](API/SMTPTransporterClass.md#smtp-new-transporter)
*   POP3 - [POP3 New transporter](API/POP3TransporterClass.md#pop3-new-transporter)
*   IMAP  - [IMAP New transporter](API/IMAPTransporterClass.md#imap-new-transporter)

The log files can be produced in two versions:

*   une version classique :
    *   fichiers nommés 4DSMTPLog.txt, 4DPOP3Log.txt, ou 4DIMAPLog.txt
    *   sans pièces jointes
    *   avec un recyclage automatique tous les 10 MB
    *   conçue pour des fonctions de débogage habituelles

    Pour lancer cet historique :

    ```4d
    SET DATABASE PARAMETER(SMTP Log;1) //lancer log SMTP 
    SET DATABASE PARAMETER(POP3 Log;1) //lancer log POP3 
    SET DATABASE PARAMETER(IMAP Log;1) //lancer log IMAP
    ```

    4D Server : Cliquez sur le bouton **Démarrer les journaux de requêtes et de débogage** dans la [Page Maintenance](https://doc.4d.com/4Dv18R5/4D/18-R5/Maintenance-Page.300-5149308.en.html) de la fenêtre d'administration de 4D Server.

      Ce chemin d'accès au journal est retourné par la commande `Get 4D file`.

*   une version étendue :
    *   pièce(s) jointe(s) inclue(s)
    *   nom personnalisé
    *   conçue à des fins spécifiques

    Pour lancer cet historique :

    ```4d
    $server:=New object
    ...
    //SMTP
    $server.logFile:="MySMTPAuthLog.txt"
    $transporter:=SMTP New transporter($server)

    // POP3
    $server.logFile:="MyPOP3AuthLog.txt"
    $transporter:=POP3 New transporter($server)

    //IMAP
    $server.logFile:="MyIMAPAuthLog.txt"
    $transporter:=IMAP New transporter($server)
    ```

#### Contenu

For each request, the following fields are logged:

| Colonne # | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| 1         | Numéro d'opération séquentiel et unique dans la session d'historique |
| 2         | Date et heure au format RFC3339 (yyyy-mm-ddThh:mm:ss.ms)             |
| 3         | ID du Process 4D                                                     |
| 4         | ID unique du process                                                 |
| 5         | <ul><li>Informations sur le lancement d'une session SMTP, POP3 ou IMAP, y compris le nom d'hôte du serveur, le numéro de port TCP utilisé pour se connecter au serveur SMTP, POP3 ou IMAP et l'état TLS, ou</li><li>données échangées entre le serveur et le client, en commençant par "S <" (données reçues depuis le serveur SMTP, POP3 ou IMAP) ou "C>" (données envoyées par le client IMAP) : liste des modes d'authentification envoyés par le serveur et mode d'authentification sélectionné, toute erreur signalée par le serveur SMTP, POP3 ou IMAP, les informations sur l'en-tête de l'e-mail envoyé (version standard uniquement) et si l'e-mail est sauvegardé sur le serveur, ou</li><li>Les informations sur la clôture de la session IMAP.</li></ul>                                           |

## Requêtes client ORDA

Ce journal enregistre chaque requête ORDA envoyée depuis une machine distante. Vous pouvez diriger les informations du journal vers la mémoire ou vers un fichier sur le disque. Vous pouvez choisir le nom et l'emplacement de ce fichier journal.

How to start this log:

```4d
//à exécuter sur une machine distante
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//peut aussi être envoyé à la mémoire
```

If you want to use the unique sequence number in ORDA request log, you need to trigger it:

```4d
// à exécuter sur une machine distante

SET DATABASE PARAMETER(Client Log Recording;1)  
//pour activer la numérotation automatique de l'historique

ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//peut aussi être envoyé à la mémoire

SET DATABASE PARAMETER(Client Log Recording;0)  
//désactive la numérotation automatique
```

The following fields are logged for each request:

| Noms des champs | Description                                                          | Exemple                                                 |
| --------------- | -------------------------------------------------------------------- | ------------------------------------------------------- |
| sequenceNumber  | Numéro d'opération séquentiel et unique dans la session d'historique | 104                                                     |
| url             | URL de la requête ORDA effectuée par le poste client                 | "rest/Persons(30001)"                                   |
| startTime       | Date et heure de début au format ISO 8601                            | "2019-05-28T08:25:12.346Z"                              |
| endTime         | Date et heure de fin au format ISO 8601                              | "2019-05-28T08:25:12.371Z"                              |
| duration        | Durée de traitement client (ms)                                      | 25                                                      |
| response        | Objet réponse du serveur                                             | {"status":200,"body":{"__entityModel":"Persons",\[...] |
