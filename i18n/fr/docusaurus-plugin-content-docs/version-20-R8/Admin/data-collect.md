---
id: data-collect
title: Collecte des données
---

Pour nous aider à améliorer sans cesse nos produits, nous collectons automatiquement des données concernant les statistiques d'utilisation des applications 4D Server. Les données collectées sont totalement anonymes et leur transfert n'a aucun impact sur l'expérience utilisateur.

Cette page explique :

- quelles sont les informations collectées,
- où les informations sont stockées et quand elles sont envoyées à 4D,
- comment désactiver la collecte automatique de données dans les applications client/serveur générées.

## Informations collectées

Les données sont collectées lors des événements suivants :

- démarrage de la base de données,
- fermeture de la base de données,
- démarrage du serveur web,
- exécution php,
- connexion client,
- envoi de la collecte de données.

Certaines données sont également collectées à intervalles réguliers.

### Collecté au démarrage de la base de données

| Data                    | Type                                     | Notes                                                                                                                                |
| ----------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CPU                     | Text                                     | Nom, type et vitesse du processeur                                                                                                   |
| numberOfCores           | Number                                   | Nombre total de cœurs                                                                                                                |
| memory                  | Number                                   | Taille de la mémoire (en octets) disponible sur la machine                                                        |
| system                  | Text                                     | Version du système d'exploitation et numéro de version                                                                               |
| headless                | Boolean                                  | True si l'application fonctionne en mode headless                                                                                    |
| version                 | Number                                   | Numéro de version de l'application 4D                                                                                                |
| buildNumber             | Number                                   | Numéro de build de l'application 4D                                                                                                  |
| license                 | Object                                   | Nom commercial et description des licences des produits                                                                              |
| isRosetta               | Boolean                                  | True si 4D est émulé par Rosetta sous macOS, False sinon (non émulé ou sous Windows).             |
| uniqueID                | Text                                     | ID unique du serveur 4D                                                                                                              |
| id                      | Texte (chaîne hachée) | Identifiant unique associé à la base de données (*Hachage par roulement polynomial du nom de la base de données*) |
| dataFileSize            | Number                                   | Taille du fichier de données en octets                                                                                               |
| indexesSize             | Number                                   | Taille des index en octets                                                                                                           |
| cacheSize               | Number                                   | Taille du cache en octets                                                                                                            |
| usingLegacyNetworkLayer | Boolean                                  | True si l'ancienne couche réseau est utilisée pour le serveur d'application                                                          |
| usingQUICNetworkLayer   | Boolean                                  | True si la base de données utilise la couche réseau QUIC                                                                             |
| encryptedConnections    | Boolean                                  | True si les connexions client/serveur sont cryptées                                                                                  |
| encrypted               | Boolean                                  | Vrai si le fichier de données est chiffré                                                                                            |
| compiled                | Boolean                                  | True si l'application est compilée                                                                                                   |
| isEngined               | Boolean                                  | True si l'application est fusionnée avec 4D Volume Desktop                                                                           |
| projectMode             | Boolean                                  | True si l'application est un projet                                                                                                  |
| mobile                  | Collection                               | Informations sur les sessions mobiles                                                                                                |

### Collecté au démarrage du serveur web et lors de l'envoi de la collecte de données

| Data      | Type   | Notes                                                                                 |
| --------- | ------ | ------------------------------------------------------------------------------------- |
| webServer | Object | "started":true si le serveur web est en cours de démarrage ou démarré |

### Collectés à intervalles réguliers

| Data                        | Type   | Notes                                        |
| --------------------------- | ------ | -------------------------------------------- |
| maximumNumberOfWebProcesses | Number | Nombre maximal de process web simultanés     |
| maximumUsedPhysicalMemory   | Number | Utilisation maximale de la mémoire physique  |
| maximumUsedVirtualMemory    | Number | Utilisation maximale de la mémoire virtuelle |

### Collecté lors de l'envoi de la collecte de données

| Data                                        | Type   | Notes                                                                                            |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------ |
| uptime                                      | Number | Temps écoulé (en secondes) depuis l'ouverture de la base de données 4D locale |
| cacheReadBytes                              | Object | Nombre d'octets lus à partir de la mémoire cache                                                 |
| cacheMissBytes                              | Object | Nombre d'octets manqués dans le cache                                                            |
| cacheReadCount                              | Object | Nombre de lectures dans le cache                                                                 |
| cacheMissCount                              | Object | Nombre de lectures manquées dans le cache                                                        |
| dataSegment1.diskReadBytes  | Object | Nombre d'octets lus dans le fichier de données                                                   |
| dataSegment1.diskWriteBytes | Object | Nombre d'octets écrits dans le fichier de données                                                |
| dataSegment1.diskReadCount  | Object | Nombre de lectures dans le fichier de données                                                    |
| dataSegment1.diskWriteCount | Object | Nombre d'écritures dans le fichier de données                                                    |
| indexSegment.diskReadBytes  | Number | Nombre d'octets lus dans le fichier d'index                                                      |
| indexSegment.diskWriteBytes | Number | Nombre d'octets écrits dans le fichier d'index                                                   |
| indexSegment.diskReadCount  | Number | Nombre de lectures dans le fichier d'index                                                       |
| indexSegment.diskWriteCount | Number | Nombre d'écritures dans le fichier d'index                                                       |

### Collecté lors de la fermeture de la base de données et de l'envoi de la collecte de données

| Data                           | Type   | Notes                                                              |
| ------------------------------ | ------ | ------------------------------------------------------------------ |
| webserverHits                  | Number | Nombre de hits sur le serveur web pendant la collecte des données  |
| restHits                       | Number | Nombre de hits sur le serveur REST pendant la collecte des données |
| webserverBytesIn               | Number | Octets reçus par le serveur web pendant la collecte des données    |
| webserverBytesOut              | Number | Octets envoyés par le serveur web pendant la collecte des données  |
| qodly.webforms | Number | Nombre de webforms Qodly                                           |

### Collecté à chaque fois que PHP execute est appelé

| Data        | Type    | Notes                                                                                   |
| ----------- | ------- | --------------------------------------------------------------------------------------- |
| phpCall     | Number  | Nombre d'appels à `PHP execute`                                                         |
| externalPHP | Boolean | True si le client effectue un appel à `PHP execute` et utilise sa propre version de php |

### Collecté à la connexion d'un client

| Data                       | Type       | Notes                                                                                                                                |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| maximum4DClientConnections | Number     | Nombre maximal de connexions de 4D Client au serveur                                                                                 |
| connectionSystems          | Collection | Système d'exploitation du client sans le numéro de build (entre parenthèses) et nombre de clients qui l'utilisent |

## Où sont-elles stockées et envoyées ?

Les données collectées sont écrites dans un fichier texte (format JSON) par base de données lorsque 4D Server quitte. Le fichier est stocké dans le [dossier 4D actif](https://doc.4d.com/4dv20/help/command/en/page485.html), c'est-à-dire :

- sous Windows : `Users\[userName]\AppData\Roaming\4D Server`
- sous macOS : `/Users/[userName]/Library/ApplicationSupport/4D Server`

Une fois par semaine, le fichier est automatiquement envoyé par le réseau à 4D. Le fichier est ensuite supprimé du dossier 4D actif.

![](../assets/en/Admin/data-collect.png)

> Si le fichier n'a pas pu être envoyé pour une raison quelconque, il est néanmoins supprimé et aucun message d'erreur n'est affiché côté 4D Server.

Le fichier est envoyé au serveur à l'adresse suivante : `https://dcollector.4d.com` (ip : 195.68.52.83).

## Désactiver la collecte de données dans les applications client/serveur générées

Vous pouvez désactiver la collecte automatique de données dans [les applications client/serveur générées](../Desktop/building.md#clientserver-page).

Pour désactiver la collecte, passez la valeur **False** à la clé [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html) dans le fichier `buildApp.4DSettings`, utilisé pour construire l'application client/serveur.
