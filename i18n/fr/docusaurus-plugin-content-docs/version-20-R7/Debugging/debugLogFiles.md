---
id: debugLogFiles
title: Fichiers journaux
---

Les applications 4D peuvent générer divers fichiers journaux (ou "logs") qui sont utiles pour le débogage ou l'optimisation de leur exécution. Les journaux sont généralement démarrés ou arrêtés en utilisant des sélecteurs des commandes [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/fr/page642.html), [`WEB SET OPTION`](https://doc.4d.com/4dv20/help/command/fr/page1210.html) ou [`HTTP SET OPTION`](https://doc.4d.com/4dv20/help/command/fr/page1160.html) et sont stockés dans le dossier [Logs](Project/architecture.md#logs) du projet.

Les informations stockées dans les journaux doivent être analysées pour détecter et corriger les problèmes. Cette section fournit une description complète des fichiers journaux suivants :

- [4DRequestsLog.txt](#4drequestslogtxt)
- [4DRequestsLog_ProcessInfo.txt](l#4drequestslog_processinfotxt)
- [HTTPDebugLog.txt](#httpdebuglogtxt)
- [4DHTTPClientLog.txt](#4dhttpclientlogtxt)
- 4DDebugLog.txt ([standard](#4ddebuglogtxt-standard) & [tabular](#4ddebuglogtxt-tabular))
- [4DDiagnosticLog.txt](#4ddiagnosticlogtxt)
- [4DIMAPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [4DPOP3Log.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [4DSMTPLog.txt](#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
- [Fichier journal des requêtes ORDA](#orda-requests)

> Lorsqu'un fichier journal peut être généré soit sur 4D Server, soit sur le client distant, le mot "Server" est ajouté au nom du fichier côté serveur, par exemple "4DRequestsLogServer.txt"

Les fichiers journaux partagent certains champs, ce qui vous permet d'établir une chronologie et de faire des connexions entre les entrées lors du débogage :

- `sequence_number` : ce numéro est unique parmi tous les fichiers journaux de débogage et est incrémenté à chaque nouvelle entrée, quel que soit le fichier journal, de manière à ce que vous puissiez connaître la séquence exacte des opérations.
- `connection_uuid` : pour chaque process 4D créé sur un client 4D qui se connecte au serveur, cet UUID de connexion est stocké à la fois côté serveur et client. Il vous permet d'identifier facilement le client distant qui a lancé le process.

## 4DRequestsLog.txt

Ce fichier de log enregistre les requêtes standard envoyées par la machine du 4D Server, ou la machine à distance qui a exécuté la commande (hors requêtes web).

Pour lancer ce journal :

- sur le serveur :

```4d
SET DATABASE PARAMETER(4D Server log recording;1)
//côté serveur
```

- sur le client :

```4d
SET DATABASE PARAMETER(Client Log Recording;1)
//côté distant
```

> Cette instruction démarre également le fichier [4DRequestsLog_ProcessInfo.txt](#4drequestslog_processinfotxt).

#### En-têtes

Ce fichier commence avec les en-têtes suivants :

- Log Session Identifier (Identifiant de session d'historique)
- Nom du serveur qui héberge l'application
- User Login Name : Nom de l'utilisateur (défini dans l'OS) qui a exécuté l'application 4D sur le serveur.

#### Contenu

Pour chaque requête, les champs suivants sont enregistrés :

| Noms des champs                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                                           | Numéro d'opération séquentiel et unique dans la session de log                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| time                                                                           | Date et heure au format ISO 8601 : 'YYYY-MM-DDTHH:MM:SS.mmm'                                                                                                                                                                                                                                                                                                                                                                                                |
| systemid                                                                       | ID système                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| component                                                                      | Signature du composant (par exemple '4SQLS' ou 'dbmg')                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| process\_info\_index               | Correspond au champ "index" du journal 4DRequestsLog_ProcessInfo.txt, et permet de relier une demande à un process.                                                                                                                                                                                                                                                                                                                                                    |
| request                                                                        | [ID de la requête C/S ou ORDA](https://github.com/4d/request-log-definitions/blob/master/RequestIDs.txt) ou message pour les requêtes SQL ou messages `LOG EVENT`                                                                                                                                                                                                                                                                                                                                                           |
| bytes_in                                                  | Nombre d'octets reçus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| bytes_out                                                 | Nombre d'octets envoyés                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| server\_duration \| exec\_duration | Dépend de l'endroit où le journal est généré :<li>*server\_duration* lorsqu'il est généré sur le client --Temps en microsecondes pris par le serveur pour traiter la requête et retourner une réponse. B à F dans l'image ci-dessous, OU</li><li>*exec\_duration* lors de sa génération sur le serveur --Temps pris en microsecondes pour que le serveur traite la requête. B à E dans l'image ci-dessous.</li> |
| write\_duration                                          | Temps pris en microsecondes pour l'envoi de la :<li>Requête (lorsqu'elle est exécutée sur le client). A à B dans l'image ci-dessous.</li><li>Réponse (lorsqu'elle est exécutée sur le serveur). E à F dans l'image ci-dessous.</li>                                                                                                                                                                   |
| task_kind                                                 | Préemptif ou coopératif (respectivement 'p' ou 'c')                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| rtt                                                                            | Temps en microsecondes pris par le client pour envoyer la requête et pour qu'elle soit reçue par le serveur. De A à D et de E à H dans l'image ci-dessous.<li>Seulement mesuré lors de l'utilisation de la couche réseau ServerNet, renvoie 0 lorsqu'il est utilisé avec l'ancienne couche réseau.</li><li>Pour les versions de Windows antérieures à Windows 10 ou Windows Server 2016, l'appel renverra 0.</li>                                           |
| extra                                                                          | Informations supplémentaires relatives au contexte, par exemple le nom de la dataclass et/ou le nom de l'attribut dans le cas d'une requête ORDA                                                                                                                                                                                                                                                                                                                                                                            |

Acheminement de la requête :

![](../assets/en/Admin/logRequestFlow.PNG)

## 4DRequestsLog_ProcessInfo.txt

Ce fichier de log enregistre des informations sur chaque process créé sur la machine du 4D Server, ou la machine à distance qui a exécuté la commande (requêtes web exclues).

Pour lancer ce journal :

- sur le serveur :

```4d
SET DATABASE PARAMETER(4D Server log recording;1) //côté serveur
```

- sur le client :

```4d
SET DATABASE PARAMETER(Client Log Recording;1) //côté distant
```

> Cette déclaration démarre également l'historique du fichier [4DRequestsLog.txt](#4drequestslogtxt).

#### En-têtes

Ce fichier commence avec les en-têtes suivants :

- Log Session Identifier (Identifiant de session d'historique)
- Nom du serveur qui héberge l'application
- User Login Name : Nom de l'utilisateur (défini dans l'OS) qui a exécuté l'application 4D sur le serveur.

#### Contenu

Pour chaque process, les champs suivants sont enregistrés :

| Noms des champs                                                                               | Description                                                                                                                  |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| sequence_number                                                          | Numéro d'opération séquentiel et unique dans la session de log                                                               |
| time                                                                                          | Date et heure au format ISO 8601 : "YYYY-MM-DDTHH:MM:SS.mmm" |
| process\_info_index                                | Numéro de process séquentiel et unique                                                                                       |
| CDB4DBaseContext                                                                              | UUID du contexte de base du composant DB4D                                                                                   |
| systemid                                                                                      | ID système                                                                                                                   |
| server\_process\_id                               | ID du process sur le serveur                                                                                                 |
| remote\_process\_id                               | ID du process sur le client                                                                                                  |
| process\_name                                                           | Nom du process                                                                                                               |
| cID                                                                                           | Identifiant de la connexion 4D                                                                                               |
| uID                                                                                           | Identifiant du client 4D                                                                                                     |
| IP Client                                                                                     | Addresse IPv4/IPv6 du client                                                                                                 |
| host_name                                                                | Nom d'hôte du client                                                                                                         |
| user_name                                                                | Nom de connexion utilisateur sur le client                                                                                   |
| connection\_uuid                                                        | Identifiant UUID de process de connexion                                                                                     |
| server\_process\_unique\_id | ID unique du process sur le serveur                                                                                          |

## HTTPDebugLog.txt

Ce fichier journal enregistre chaque requête HTTP et chaque réponse en mode brut (raw). Les requêtes sont enregistrées dans leur totalité (en-têtes compris). Les parties body peuvent également être enregistrées.

Pour lancer ce journal :

```4d

WEB SET OPTION(Web debug log;wdl enable without body)  
//d'autres valeurs sont disponibles
```

Les champs suivants sont enregistrés pour Requête et Réponse :

| Noms des champs | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| SocketID        | ID du socket utilisé pour la communication                                           |
| PeerIP          | Adresse IPv4 de l'hôte (client)                                   |
| PeerPort        | Port utilisé par l'hôte (client)                                  |
| TimeStamp       | Horodatage en millisecondes (depuis le démarrage du système)      |
| ConnectionID    | Connexion UUID (UUID du VTCPSocket utilisé pour la communication) |
| SequenceNumber  | Numéro d'opération séquentiel et unique dans la session de log                       |

## 4DHTTPClientLog.txt

Ce fichier journal enregistre le trafic HTTP qui passe par le client HTTP 4D. Les requêtes sont enregistrées dans leur totalité (en-têtes compris). Les parties body peuvent optionnellement être enregistrées.

Pour lancer ce journal :

```4d

HTTP SET OPTION(HTTP client log; HTTP enable log with all body parts)  
//d'autres valeurs sont disponibles
```

Les champs suivants sont enregistrés pour Requête et Réponse :

| Noms des champs | Description                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| SequenceID      | Numéro d'opération séquentiel et unique dans la session de log                                       |
| ConnectionID    | Identifiant UUID de process de connexion                                                             |
| LocalIP         | Adresse IP du Client                                                                                 |
| PeerIP          | Adresse IP du serveur                                                                                |
| TimeStamp       | Horodatage (ms) de l'envoi de la requête ou de la réception entière de la réponse |
| ElapsedTimeInMs | (réponse uniquement) Différence avec l'horodatage de la requête                   |

En fonction des options de journalisation, d'autres champs peuvent également être enregistrés.

- Pour la requête : ligne de requête, en-têtes, body de la requête
- Pour la réponse : ligne de statut, en-têtes, body de réponse (décompressé), le cas échéant

## 4DDebugLog.txt (standard)

Ce fichier journal enregistre chaque évènement qui a lieu au niveau de la programmation 4D. Le mode standard offre une vue d'ensemble des évènements.

Pour lancer ce journal :

```4d
SET DATABASE PARAMETER(Debug Log Recording;2)  
//standard, tous les process

SET DATABASE PARAMETER(Current process debug log recording;2)  
//standard, process courant uniquement
```

Les champs suivants sont enregistrés pour chaque évènement :

| Colonne # | Description                                                                                                                      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Numéro d'opération séquentiel et unique dans la session de log                                                                   |
| 2         | Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)    |
| 3         | ID process (p=xx) et ID unique process (puid=xx)                                           |
| 4         | Niveau de stack (pile)                                                                                        |
| 5         | Peut être Nom de commande / Nom de méthode / Message / Info Start Stop task / Nom, événement ou callback plugin / UUID connexion |
| 6         | Durée de l'opération de connexion en millisecondes (différent 2e colonne)                                     |

## 4DDebugLog.txt (tabulé)

Ce fichier de logs enregistre chaque évènement au niveau de la programmation 4D sous un format compact avec des tabulations, qui inclut des informations supplémentaires par rapport au format standard.

Pour lancer ce journal :

```4d
SET DATABASE PARAMETER(Debug Log Recording;2+4)  
//format tabulé étendu, tous les process

SET DATABASE PARAMETER(Current process debug log recording;2+4)  
//étendu, process courant uniquement
```

Les champs suivants sont enregistrés pour chaque évènement :

| Colonne # | Noms des champs                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1         | sequence_number                                                         | Numéro d'opération séquentiel et unique dans la session de log                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2         | time                                                                                         | Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3         | ProcessID                                                                                    | ID du process                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4         | unique_processID                                                        | ID unique du process                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 5         | stack_level                                                             | Niveau de stack (pile)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 6         | operation_type                                                          | Type d'opération enregistrée. Cette valeur peut être une valeur absolue:<p><ol><li>Commande</li><li>Méthode (méthode projet, méthode base, etc.)</li><li>Message (envoyé uniquement par la commande [LOG EVENT](https://doc.4d.com/4dv20/help/command/fr/page667.html))</li><li>PluginMessage</li><li>PluginEvent</li><li>PluginCommand</li><li>PluginCallback</li><li>Task</li><li>Méthode membre (méthode attachée à une collection ou à un objet)</li></ol></p>Lors de la fermeture d'un niveau de pile, les colonnes `operation_type`, `operation` et `operation_parameters` ont la même valeur que le niveau d'ouverture de pile enregistré dans la colonne `stack_opening_sequence_number`. Par exemple :<p><ol><li>121 15:16:50:777 5 8 1 2 2 CallMethod Parameters 0</li><li>122 15:16:50:777 5 8 2 1 283 0</li><li>123 15:16:50:777 5 8 2 1 283 0 122 3 3</li><li>124 15:16:777 5 8 1 2 1 2 CallMethod Parameters 0 121 61</li></ol></p>Les 1re et 2e lignes ouvrent un niveau de pile, les 3e et 4e lignes ferment un niveau de pile. Les valeurs des colonnes 6, 7 et 8 sont répétées dans la ligne du niveau de stack de fermeture. La colonne 10 contient les numéros de séquence d'ouverture du niveau de stack, c'est-à-dire 122 pour la 3e ligne et 121 pour la 4e. |
| 7         | operation                                                                                    | Peut représenter (selon le type d'opération) :<li>un ID de commande de langue (lorsque type=1)</li><li>un nom de méthode (lorsque type=2)</li><li>une combinaison de pluginIndex;pluginCommand (lorsque type=4, 5, 6 ou 7). Peut contenir quelque chose comme '3;2'</li><li>un UUID de task de connexion (lorsque type=8)</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 8         | operation_parameters                                                    | Paramètres passés aux commandes, méthodes ou aux plugins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 9         | form_event                                                              | Evénement formulaire, le cas échéant ; vide dans les autres cas (par conséquent cette colonne est utilisée lorsque le code est exécuté dans une méthode formulaire ou méthode objet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 10        | stack_opening_sequence_number | Niveaux de fermeture de stacks uniquement : numéro de séquence du niveau d'ouverture de stack correspondant                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 11        | stack_level_execution_time    | Niveaux de fermeture de stacks uniquement : Durée en micro secondes de l'action enregistrée courante (cf. 10e colonne des lignes 123 et 124 dans l'historique ci-dessus)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## 4DDiagnosticLog.txt

Ce fichier journal enregistre de nombreux événements liés au fonctionnement interne de l'application et est lisible par un humain. Vous pouvez inclure des informations personnalisées dans ce fichier à l'aide de la commande [LOG EVENT](https://doc.4d.com/4dv19/help/command/fr/page667.html).

Pour lancer ce journal :

```4d
 SET DATABASE PARAMETER(Diagnostic log recording;1) //lancer l'enregistrement
```

Les champs suivants sont enregistrés pour chaque évènement :

| Nom des champs     | Description                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber     | Numéro d'opération séquentiel et unique dans la session de log                                                                |
| timestamp          | Date et heure au format ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm) |
| loggerID           | Optionnel                                                                                                                     |
| componentSignature | Optionnel - signature de composant interne                                                                                    |
| messageLevel       | Info, Attention, Erreur                                                                                                       |
| message            | Description de la saisie de journal                                                                                           |

En fonction de l'événement, d'autres champs peuvent également être enregistrés, tels que task, socket, etc.

### Niveaux du journal de diagnostic

Le fichier *4DDiagnosticLog.txt* peut enregistrer différents niveaux de messages, de `ERROR` (le plus important) à `TRACE` (le moins important). Par défaut, le niveau `INFO` est défini, ce qui signifie que le fichier n'enregistre que les événements importants, y compris les erreurs et les résultats inattendus (voir ci-dessous).

Vous pouvez sélectionner le niveau des messages à l'aide du sélecteur `Diagnostic log level` de la commande [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/en/page642.html), en fonction de vos besoins. Lorsque vous sélectionnez un niveau, les niveaux supérieurs (qui sont plus importants) sont implicitement sélectionnés également. Les niveaux suivants sont disponibles :

| Constante   | Description                                                                                                                 | Lorsque sélectionné, inclut                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `Log error` | Numéro d'opération séquentiel et unique dans la session d'historique                                                        | `Log error`                                                   |
| `Log warn`  | Date et heure au format RFC3339 (yyyy-mm-ddThh:mm:ss.ms) | `Log error`, `Log warn`                                       |
| `Log info`  | ID du Process 4D                                                                                                            | `Log error`, `Log warn`, `Log info`                           |
| `Log debug` | ID unique du process                                                                                                        | `Log error`, `Log warn`, `Log info`, `Log debug`              |
| `Log trace` | Autres informations internes (pour les services techniques de 4D)                                        | `Log error`, `Log warn`, `Log info`, `Log debug`, `Log trace` |

Voici un exemple :

```4d
SET DATABASE PARAMETER (Diagnostic log recording; 1)
SET DATABASE PARAMETER (Diagnostic log level; Log trace)
```

## 4DSMTPLog.txt, 4DPOP3Log.txt, et 4DIMAPLog.txt

Ces fichiers journaux enregistrent chaque échange entre l'application 4D et le serveur de mail (SMTP, POP3, IMAP) initialisé par les commandes suivantes :

- SMTP - [SMTP New transporter](../commands/smtp-new-transporter.md)
- POP3 - [POP3 New transporter](../commands/pop3-new-transporter.md)
- IMAP  - [IMAP New transporter](../commands/imap-new-transporter.md)

Les fichiers peuvent être générés en deux versions :

- une version classique :
  - fichiers nommés 4DSMTPLog.txt, 4DPOP3Log.txt, ou 4DIMAPLog.txt
  - sans pièces jointes
  - avec un recyclage automatique tous les 10 MB
  - conçue pour des fonctions de débogage habituelles

Pour démarrer ce journal :

```4d
SET DATABASE PARAMETER(SMTP Log;1) //démarrer le journal SMTP
SET DATABASE PARAMETER(POP3 Log;1) //démarrer le journal POP3
SET DATABASE PARAMETER(IMAP Log;1) //démarrer le journal IMAP
```

> 4D Server : Cliquez sur le bouton **Démarrer les journaux de requêtes et de débogage** dans la [Page Maintenance](ServerWindow/maintenance.md) de la fenêtre d'administration de 4D Server.

Ce chemin d'accès au journal est retourné par la commande `Get 4D file`.

- une version étendue :
  - pièce(s) jointe(s) inclue(s)
    pas de recyclage automatique
  - nom personnalisé
  - réservée à des fins spécifiques

Pour démarrer ce journal :

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

Pour chaque requête, les champs suivants sont enregistrés :

| Colonne # | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Numéro d'opération séquentiel et unique dans la session de log                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2         | Date et heure au format RFC3339 (yyyy-mm-ddThh:mm:ss.ms)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3         | ID du Process 4D                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4         | ID unique du process                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 5         | <ul><li>Information de démarrage de session SMTP, POP3 ou IMAP, y compris le nom d'hôte du serveur, le numéro de port TCP utilisé pour se connecter au serveur SMTP, POP3 ou IMAP et statut TLS, ou</li><li>données échangées entre le serveur et le client, commençant par "S <" (données reçues du serveur SMTP, POP3, ou IMAP) ou "C >" (données envoyées par le client SMTP, POP3 ou IMAP) : liste du mode d'authentification envoyée par le serveur et le mode d'authentification sélectionné, toute erreur signalée par le serveur SMTP, POP3, ou IMAP, information d'en-tête du mail envoyé (version standard seulement) et si le mail est sauvegardé sur le serveur, ou</li><li>information de clôture de session SMTP, POP3, ou IMAP</li></ul> |

## Requêtes ORDA

Les journaux des requêtes ORDA peuvent enregistrer chaque requête ORDA et chaque réponse du serveur. Deux journaux de requêtes ORDA sont disponibles :

- un journal des requêtes ORDA côté client, au format .txt
- un journal des requêtes ORDA côté serveur, au format .jsonl

### Côté client

Le journal ORDA côté client enregistre chaque requête ORDA envoyée depuis une machine distante. Vous pouvez diriger les informations du journal vers la mémoire ou vers un fichier .txt sur le disque de la machine distante. Vous pouvez choisir le nom et l'emplacement de ce fichier journal.

Pour lancer ce journal :

```4d
	//sur une machine distante
SET DATABASE PARAMETER(Client Log Recording;1)  
ds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))
	//peut également être envoyé à la mémoire
SET DATABASE PARAMETER(Client Log Recording;0)  
```

:::note

Il n'est pas obligatoire de démarrer le fichier [4DRequestsLog.txt](#4drequestslogtxt) côté client à l'aide de `SET DATABASE PARAMETER`. Il est toutefois nécessaire si vous souhaitez enregistrer le champ unique `sequenceNumber`.

:::

Les champs suivants sont enregistrés pour chaque requête :

| Noms des champs | Description                                                            | Exemple                                                                                                                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber  | Numéro d'opération séquentiel et unique dans la session de log         | 104                                                                                                                                                                                                                                                     |
| url             | URI de la requête                                                      | "rest/Persons(30001)"                                                                                                                                                                                                                |
| startTime       | Date et heure de début au format ISO 8601                              | "2019-05-28T08:25:12.346Z"                                                                                                                                                                              |
| endTime         | Date et heure de fin au format ISO 8601                                | "2019-05-28T08:25:12.371Z"                                                                                                                                                                              |
| duration        | Durée du traitement du client en millisecondes (ms) | 25                                                                                                                                                                                                                                                      |
| response        | Objet réponse du serveur                                               | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |

#### Exemple

Voici un exemple d'enregistrement d'un fichier journal ORDA côté client :

```json
	{
		"sequenceNumber": 7880,
		"url": "rest/Employees/$entityset/F910C2E4A2EE6B43BBEE74A0A4F68E5A/Salary?$compute='sum'&$progress4Dinfo='D0706F1E77D4F24985BE4DDE9FFA1739'",
		"startTime": "2023-05-15T10:43:39.400Z",
		"endTime": "2023-05-15T10:43:39.419Z",
		"duration": 19,
		"response": {
			"status": 200,
			"body": 75651
		}
	}
```

### Côté serveur

Le journal ORDA côté serveur enregistre chaque requête ORDA traitée par le serveur, ainsi que la réponse du serveur (facultatif). Les informations du journal sont enregistrées dans un fichier .jsonl sur le disque de la machine serveur (par défaut, *ordaRequests.jsonl*).

Pour lancer ce journal :

```4d
//sur le serveur
SET DATABASE PARAMETER(4D Server log recording;1)
ds.startRequestLog(File("/PACKAGE/Logs/ordaRequests.jsonl");srl log response without body) 
 //le paramètre srl... est optionnel 
SET DATABASE PARAMETER(4D Server log recording;0)
```

:::note

Il n'est pas obligatoire de démarrer le fichier [4DRequestsLog.txt](#4drequestslogtxt) côté serveur à l'aide de `SET DATABASE PARAMETER`. Toutefois, il est nécessaire si vous souhaitez enregistrer les champs uniques `sequenceNumber` et `duration`.

:::

Les champs suivants sont enregistrés pour chaque requête :

| Noms des champs | Description                                                                                                         | Exemple                                                                                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber  | Numéro d'opération séquentiel et unique dans la session de log                                                      | 104                                                                                                                                                                                                                                                     |
| url             | URI de la requête                                                                                                   | "rest/Persons(30001)"                                                                                                                                                                                                                |
| startTime       | Date et heure de début au format ISO 8601                                                                           | "2019-05-28T08:25:12.346Z"                                                                                                                                                                              |
| duration        | Durée de traitement du serveur en microsecondes (µ)                                              | 2500                                                                                                                                                                                                                                                    |
| response        | Objet réponse du serveur, peut être configuré dans [`.startRequestLog()`](../API/DataStoreClass.md#startrequestlog) | {"status":200,"body":{"__entityModel":"Persons",\[...]}} |
| ipAddress       | Adresse IP utilisateur                                                                                              | "192.168.1.5"                                                                                                                                                                                           |
| userName        | Nom de l'utilisateur 4D                                                                                             | "henry"                                                                                                                                                                                                                                                 |
| systemUserName  | Login de l'utilisateur sur la machine                                                                               | "hsmith"                                                                                                                                                                                                                                                |
| machineName     | Nom de la machine de l'utilisateur                                                                                  | "PC de Henry Smith                                                                                                                                                                                                                                      |

#### Exemple

Voici un exemple d'enregistrement ORDA côté serveur :

```json
   {
		"url": "rest/Employees/$entityset/F910C2E4A2EE6B43BBEE74A0A4F68E5A/Salary?$compute='sum'&$progress4Dinfo='D0706F1E77D4F24985BE4DDE9FFA1739'",
		"systemUserName": "Admin",
		"userName": "Designer",
		"machineName": "DESKTOP-QSK9738",
		"taskID": 5,
		"taskName": "P_1",
		"startTime": "2023-05-15T11:43:39.401",
		"response": {
			"status": 200,
			"body": 75651
		},
		"sequenceNumber": 7008,
		"duration": 240
	}

```

## Utilisation d'un fichier de configuration de log

Vous pouvez utiliser un **fichier de configuration de log** pour gérer facilement l'enregistrement des journaux dans un environnement de production. Ce fichier est préconfiguré par le développeur. En général, il peut être envoyé aux clients pour qu'ils n'aient qu'à le sélectionner ou à le copier dans un dossier local. Une fois activé, le fichier de configuration de log déclenche l'enregistrement de journaux spécifiques.

### Activation du fichier

Il existe plusieurs façons d'activer le fichier de configuration du journal, en fonction de votre configuration :

- **4D Server avec interface** : vous pouvez ouvrir la page Maintenance et cliquer sur le bouton [Load logs configuration file](ServerWindow/maintenance.md#load-logs-configuration-file), puis sélectionner le fichier. Dans ce cas, vous pouvez utiliser n'importe quel nom pour le fichier de configuration. Il est immédiatement activé sur le serveur.
- **un projet interprété ou compilé** : le fichier doit être nommé `logConfig.json` et copié dans le [dossier Settings](../Project/architecture.md#settings-1) du projet (situé au même niveau que le dossier [`Project`](../Project/architecture.md#project-folder)). Il est activé au démarrage du projet (uniquement sur le serveur en client/serveur).
- **une application générée** : le fichier doit être nommé `logConfig.json` et copié dans le dossier suivant :
  - Windows : `Users\[userName]\AppData\Roaming\[application]`
  - macOS : `/Users/[userName]/Library/ApplicationSupport/[application]`
- **tous projets avec un 4D monoposte ou distant** : le fichier doit être nommé `logConfig.json` et copié dans le dossier suivant :
  - Windows: `Users\[userName]\AppData\Roaming\4D`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/4D`
- **tous projets avec 4D Server** : le fichier doit être nommé `logConfig.json` et copié dans le dossier suivant :
  - Windows: `Users\[userName]\AppData\Roaming\4D Server`
  - macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

:::note

Si un fichier `logConfig.json` est installé à la fois dans les dossiers Settings et AppData/Library, le fichier du dossier Settings aura la priorité.

:::

### Description du fichier JSON

Le fichier de configuration du journal est un fichier `.json` qui doit respecter le schéma json suivant :

```json
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "title": "Logs Configuration File",
    "description": "A file that controls the state of different types of logs in 4D clients and servers",
    "type": "object",
    "properties": {
        "forceConfiguration": {
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
                },
                "level": {
              "description": "Configure diagnostic logs",
              "type": "integer",
              "minimum": 2,
              "maximum": 6
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
        "HTTPClientLogs": {
		     "description": "Configuration for http client logs",
		     "type": "object",
		     "properties": {
		          "state": {
		               "description": "Configure http client logs",
		               "type": "integer",
		               "minimum": 0,
		               "maximum": 7
		          },
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
                    "description": "Enable/Disable SMTP log recording (from 0 to N)",
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
                    "description": "Enable/Disable IMAP log recording (from 0 to N)",
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

:::note

- The "state" property values are described in the corresponding commands: `[`WEB SET OPTION`](../commands-legacy/web-set-option.md) (`Web log recording`), [`HTTP SET OPTION`](../commands-legacy/http-set-option.md) (`HTTP client log`), [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md) (`Client Web log recording`, `IMAP Log\`,...).
- For httpDebugLogs, the "level" property corresponds to the `wdl` constant options described in the [`WEB SET OPTION`](../commands-legacy/web-set-option.md) command.
- For diagnosticLogs, the "level" property corresponds to the `Diagnostic log level` constant values described in the [`SET DATABASE PARAMETER`](../commands-legacy/set-database-parameter.md) command.

:::

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
