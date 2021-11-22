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

> Lorsqu'un fichier d'historique peut être généré soit sur 4D Server, soit sur le client distant, le mot " Server " est ajouté au nom du fichier d'historique côté serveur, par exemple " 4DRequestsLogServer.txt"

Les fichiers de logs partagent certains champs, ce qui vous permet d'établir une chronologie et de faire des connexions entre les entrées lors du debugging :

*   `sequence_number` : ce numéro est unique parmi tous les fichiers d'historique de débogage et est incrémenté à chaque nouvelle entrée, quel que soit le fichier d'historique, de manière à ce que vous puissiez connaître la séquence exacte des opérations.
*   `connection_uuid` : pour chaque process 4D créé sur un client 4D qui se connecte au serveur, cet UUID de connexion est stocké à la fois côté serveur et client. Il vous permet d'identifier facilement le client distant qui a lancé le process.

## 4DRequestsLog.txt

Ce fichier de logs enregistre les requêtes standard envoyées par la machine du 4D Server, ou la machine à distance qui a exécuté la commande (requêtes web exclues).

Pour lancer cet historique :

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
> Cette déclaration démarre également l'historique du fichier [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt).

#### En-têtes

Ce fichier commence avec les en-têtes suivants :

*   Log Session Identifier (Identifiant de session d'historique)
*   Nom du serveur qui héberge l'application
*   User Login Name : Nom de l'utilisateur (défini dans l'OS) qui exécute l'application 4D sur le serveur.

#### Contenu

Pour chaque requête, les champs suivants sont enregistrés :

| Nom des champs                             | Description                                                                                                                                                                                                                                                                  |
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

Acheminement de la requête :

![](assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

Ce fichier de logs enregistre des informations sur chaque process créé sur la machine du 4D Server, ou la machine à distance qui a exécuté la commande (requêtes web exclues).

Pour lancer cet historique :

*   sur le serveur :

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //côté serveur
```

*   sur le client :

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //côté distant
```
> Cette déclaration démarre également l'historique du fichier [4DRequestsLog.txt](#4drequestslogtxt).

#### En-têtes

Ce fichier commence avec les en-têtes suivants :

*   Log Session Identifier (Identifiant de session d'historique)
*   Nom du serveur qui héberge l'application
*   User Login Name : Nom de l'utilisateur (défini dans l'OS) qui exécute l'application 4D sur le serveur.


#### Contenu

Pour chaque process, les champs suivants sont enregistrés :

| Nom des champs                    | Description                                                          |
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

Ce fichier d'historique enregistre chaque requête HTTP et chaque réponse en mode brut (raw). Les requêtes sont enregistrées dans leur totalité (en-têtes compris). Les parts du body peuvent également être enregistrées.

Pour lancer cet historique :

```4d
WEB SET OPTION(Web debug log;wdl enable without body)  
//d'autres valeurs sont disponibles
```

Les champs suivants sont enregistrés pour Requête et Réponse :

| Noms des champs | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| SocketID        | ID du socket utilisé pour la communication                           |
| PeerIP          | Adresse IPv4 de l'hôte (client)                                      |
| PeerPort        | Port utilisé par l'hôte (client)                                     |
| TimeStamp       | Horodatage en millisecondes (depuis le démarrage du système)         |
| ConnectionID    | Connexion UUID (UUID du VTCPSocket utilisé pour la communication)    |
| SequenceNumber  | Numéro d'opération séquentiel et unique dans la session d'historique |

## 4DDebugLog.txt (standard)

Ce fichier d'historique enregistre chaque évènement qui a lieu au niveau de la programmation 4D. Le mode standard offre une vue d'ensemble des évènements.

Pour lancer cet historique :

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
//standard, tous les process

SET DATABASE PARAMETER(Current process debug log recording;2)  
//standard, process courant uniquement
```

Les champs suivants sont enregistrés pour chaque évènement :

| Colonne # | Description                                                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Numéro d'opération séquentiel et unique dans la session d'historique                                                             |
| 2         | Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)                                                                       |
| 3         | ID process (p=xx) et ID unique process (puid=xx)                                                                                 |
| 4         | Niveau de stack                                                                                                                  |
| 5         | Peut être Nom de commande / Nom de méthode / Message / Info Start Stop task / Nom, événement ou callback plugin / UUID connexion |
| 6         | Durée de l'opération de connexion en millisecondes (différent 2e colonne)                                                        |

## 4DDebugLog.txt (tabulaire)

Ce fichier de logs enregistre chaque évènement au niveau de la programmation 4D sous un format compact avec des tabulations, qui inclut des informations supplémentaires par rapport au format standard.

Pour lancer cet historique :

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
//format tabulaire étendu, tous les process

SET DATABASE PARAMETER(Current process debug log recording;2+4)  
//étendu, process courant uniquement
```

Les champs suivants sont enregistrés pour chaque évènement :

| Colonne # | Noms des champs | Description                                                          |
| --------- | --------------- | -------------------------------------------------------------------- |
| 1         | sequence_number | Numéro d'opération séquentiel et unique dans la session d'historique |

|2| time| Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm) | |3| ProcessID|ID du process| |4| unique_processID|ID unique du process| |5| stack_level|Niveau de la pile |6| operation_type| Type d'opération de journalisation. Cette valeur peut être une valeur absolue :<p><ol><li>Command</li><li>Method (projet, database, etc.)</li><li>Message (uniquement envoyé par la commande [ENREGISTRER EVENEMENT](https://doc.4d.com/4dv19/help/command/fr/page667.html))</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Task</li><li>Member method (méthod attachée à une collection ou un objet)</li></ol></p>When closing a stack level, the `operation_type`, `operation` and `operation_parameters` columns have the same value as the opening stack level logged in the `stack_opening_sequence_number` column. Par exemple :<p><ol><li>121  15:16:50:777  5  8  1  2 CallMethod Parameters 0</li><li>122  15:16:50:777  5  8  2  1 283  0</li><li>123  15:16:50:777  5  8  2  1 283  0 122 3</li><li>124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61</li></ol></p>The 1st and 2nd lines open a stack level, the 3rd and 4th lines close a stack level. Values in the columns 6, 7 and 8 are repeated in the closing stack level line. La colonne 10 contient les numéros de séquence d'ouverture du niveau de pile, c'est-à-dire 122 pour la 3ème ligne et 121 pour la 4ème.| |7|operation|Peut représenter (selon le type d'opération) :<li>a Language Command ID (when type=1)</li><li>a Method Name (when type=2)</li><li>a combination of pluginIndex;pluginCommand (when type=4, 5, 6 or 7). May contain something like '3;2'</li><li>a Task Connection UUID (when type=8)</li>
|8|operation_parameters|Paramètres passés aux commandes, méthodes ou plugins| |9|form_event|Événement formulaire le cas échéant ; vide dans les autres cas (supposez que cette colonne est utilisée lorsque le code est exécuté dans une méthode formulaire ou une méthode objet)| |10|stack_opening_sequence_number|Uniquement pour les niveaux de pile de fermeture : Numéro de séquence du niveau de pile d'ouverture correspondant| |11|stack_level_execution_time|Uniquement pour les niveaux de pile de fermeture : Temps écoulé de l'action enregistrée en cours (en microsecondes); uniquement pour les niveaux de fermeture de la pile (voir les 10e colonnes des lignes 123 et 124 du log ci-dessus)

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

Les fichiers d'historique peuvent êtres produits en deux versions :

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

Pour lancer cet historique :

```4d
//à exécuter sur une machine distante
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//peut aussi être envoyé à la mémoire
```

Si vous souhaitez utiliser le numéro de séquence unique dans l'historique de requêtes ORDA, vous devez l'activer :

```4d
// à exécuter sur une machine distante

SET DATABASE PARAMETER(Client Log Recording;1)  
//pour activer la numérotation automatique de l'historique

ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  
//peut aussi être envoyé à la mémoire

SET DATABASE PARAMETER(Client Log Recording;0)  
//désactive la numérotation automatique
```

Les champs suivants sont enregistrés pour chaque requête :

| Noms des champs | Description                                                          | Exemple                                                   |
| --------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| sequenceNumber  | Numéro d'opération séquentiel et unique dans la session d'historique | 104                                                       |
| url             | URL de la requête ORDA effectuée par le poste client                 | "rest/Persons(30001)"                                     |
| startTime       | Date et heure de début au format ISO 8601                            | "2019-05-28T08:25:12.346Z"                                |
| endTime         | Date et heure de fin au format ISO 8601                              | "2019-05-28T08:25:12.371Z"                                |
| duration        | Durée de traitement client (ms)                                      | 25                                                        |
| response        | Objet réponse du serveur                                             | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |



## Utilisation d'un fichier de configuration de log

Vous pouvez utiliser un **fichier de configuration de log** pour gérer facilement l'enregistrement des journaux dans un environnement de production. Ce fichier est préconfiguré par le développeur. En général, il peut être envoyé aux clients pour qu'ils n'aient qu'à le sélectionner ou à le copier dans un dossier local. Une fois activé, le fichier de configuration de log déclenche l'enregistrement de journaux spécifiques.

### Activation du fichier

Il existe plusieurs façons d'activer le fichier de configuration des logs :

- On 4D Server with interface, you can open the Maintenance page and click on the [Load logs configuration file](Admin/server-admin.md#load-logs-configuration-file) button, then select the file. In this case, you can use any name for the configuration file. It is immediately enabled on the server.
- You can copy the log configuration file in the [Settings folder](Project/architecture.md#settings-1) of the project. In this case, the file must be named `logConfig.json`. It is enabled at project startup (only on the server in client/server).
- With a built application, you can copy the `logConfig.json` file in the following folder:
    + Windows: `Users\[userName]\AppData\Roaming\[application]`
    + macOS: `/Users/[userName]/Library/ApplicationSupport/[application]`

> If you want to enable the log configuration file for all projects in stand-alone, server and remote 4D applications, you can copy the `logConfig.json` file in the following folder: - Windows: `Users\[userName]\AppData\Roaming\4D or \4D Server` - macOS: `/Users/[userName]/Library/ApplicationSupport/4D or /4D Server`

### Description du fichier JSON

Le fichier de configuration de log est un fichier `.json` qui peut contenir les propriétés suivantes :

```json
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "title": "Logs Configuration File",
    "description": "A file that controls the state of different types of logs in 4D clients and servers",
    "type": "object",
    "properties": {
        "forceLoggingConfiguration": {
            "description": "Forcing the logs configuration described in the file ingoring changes coming from code or user interface",
            "type": "boolean",
            "default": true
        },
        "requestLogs": {
            "description": "Configuration for request logs",
            "type": "object",
            "properties": {
                "clientState": {
                    "description": "Enable/Disable client request logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                },
                "serverState": {
                    "description": "Enable/Disable server request logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "debugLogs": {
            "description": "Configuration for debug logs",
            "type": "object",
            "properties": {
                "commandList": {
                    "description": "Commands to log or not log",
                    "type": "array",
                    "items": {
                        "type": "string" 
                    },
                    "minItems": 1,
                    "uniqueItems": true
                },
                "state": {
                    "description": "integer to specify type of debuglog and options",

                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "diagnosticLogs":{
            "description": "Configuration for debug logs",
            "type": "object",
            "properties": {
                "state":{
                    "description": "Enable/Disable diagnostic logs 0 or 1 (0 = do not record, 1 = record)",
                    "type": "integer",
                    "minimum": 0    
                }
            }
          },
        "httpDebugLogs": {
            "description": "Configuration for http debug logs",
            "type": "object",
            "properties": {
                "level": {
                    "description": "Configure http request logs",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 7
                },
                "state": {
                    "description": "Enable/Disable recording of web requests",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 4
                }
            }
        },
        "POP3Logs": {
            "description": "Configuration for POP3 logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable POP3 logs (from 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "SMTPLogs": {
            "description": "Configuration for SMTP logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable SMTP log recording (form 0 to N)",
                    "type": "integer",
                    "minimum": 0
                }
            }
        },
        "IMAPLogs": {
            "description": "Configuration for IMAP logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable IMAP log recording (form 0 to N)",
                    "type": "integer" 
                }
            }
        },
        "ORDALogs": {
            "description": "Configuration for ORDA logs",
            "type": "object",
            "properties": {
                "state": {
                    "description": "Enable/Disable ORDA logs (0 or 1)",
                    "type": "integer" 
                },
                "filename": {
                    "type": "string" 
                }
            }
        }
    }
}
```

### Exemple

Voici un exemple de fichier de configuration de log :

```json
{
    "forceLoggingConfiguration": false,
    "requestLogs": {
        "clientState": 1,
        "serverState": 1
    },
    "debugLogs": {
        "commandList":["322","311","112"],
        "state": 4
    },
    "diagnosticLogs":{
        "state" : 1
    },
    "httpDebugLogs": {
        "level": 5,
        "state" : 1
    },
    "POP3Logs": {
        "state" : 1 
    },
    "SMTPLogs": {
        "state" : 1 
    },
    "IMAPLogs": {
        "state" : 1 
    },
    "ORDALogs": {
        "state" : 1,
        "filename": "ORDALog.txt"
    }
}
```