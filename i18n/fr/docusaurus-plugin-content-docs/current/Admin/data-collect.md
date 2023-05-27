---
id: data-collect
title: Collecte des données
---

Pour nous aider à améliorer sans cesse nos produits, nous collectons automatiquement des données concernant les statistiques d'utilisation des applications 4D Server. Les données collectées sont totalement anonymes et leur transfert n'a aucun impact sur l'expérience utilisateur.

Cette page explique :

- what information is collected,
- where information is stored and when it is sent to 4D,
- comment désactiver la collecte automatique de données dans les applications client/serveur générées.


## Informations collectées

Les données sont collectées lors des événements suivants :

- database startup,
- fermeture de la base de données,
- web server startup,
- php execution,
- client connection,
- data collection sending.

Some data is also collected at regular intervals.

### Collected at database startup

| Data                    | Type                 | Notes                                                                                                             |
| ----------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| CPU                     | Text                 | Nom, type et vitesse du processeur                                                                                |
| numberOfCores           | Number               | Nombre total de cœurs                                                                                             |
| memory                  | Number               | Taille de la mémoire (en octets) disponible sur la machine                                                        |
| system                  | Text                 | Version du système d'exploitation et numéro de version                                                            |
| headless                | Boolean              | True si l'application fonctionne en mode headless                                                                 |
| version                 | Number               | Numéro de version de l'application 4D                                                                             |
| buildNumber             | Number               | Numéro de build de l'application 4D                                                                               |
| license                 | Object               | Nom commercial et description des licences des produits                                                           |
| isRosetta               | Boolean              | True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows).                    |
| uniqueID                | Text                 | Unique ID of the 4D Server                                                                                        |
| id                      | Text (hashed string) | Identifiant unique associé à la base de données (*Hachage par roulement polynomial du nom de la base de données*) |
| dataFileSize            | Number               | Taille du fichier de données en octets                                                                            |
| indexesSize             | Number               | Taille des index en octets                                                                                        |
| cacheSize               | Number               | Taille du cache en octets                                                                                         |
| usingLegacyNetworkLayer | Boolean              | True si l'ancienne couche réseau est utilisée pour le serveur d'application                                       |
| usingQUICNetworkLayer   | Boolean              | True if the database uses the QUIC network layer                                                                  |
| encryptedConnections    | Boolean              | True if client/server connections are encrypted                                                                   |
| encrypted               | Boolean              | Vrai si le fichier de données est chiffré                                                                         |
| compiled                | Boolean              | True si l'application est compilée                                                                                |
| isEngined               | Boolean              | True si l'application est fusionnée avec 4D Volume Desktop                                                        |
| projectMode             | Boolean              | True si l'application est un projet                                                                               |
| mobile                  | Collection           | Informations sur les sessions mobiles                                                                             |


### Collected at web server startup and data collection sending

| Data      | Type   | Notes                                                   |
| --------- | ------ | ------------------------------------------------------- |
| webServer | Object | "started":true if the web server is starting or started |


### Collected at regular intervals

| Data                        | Type   | Notes                                        |
| --------------------------- | ------ | -------------------------------------------- |
| maximumNumberOfWebProcesses | Number | Maximum number of simultaneous web processes |
| maximumUsedPhysicalMemory   | Number | Maximum use of physical memory               |
| maximumUsedVirtualMemory    | Number | Maximum use of virtual memory                |


### Collected at data collection sending

| Data                        | Type   | Notes                                                                         |
| --------------------------- | ------ | ----------------------------------------------------------------------------- |
| uptime                      | Number | Temps écoulé (en secondes) depuis l'ouverture de la base de données 4D locale |
| cacheReadBytes              | Object | Number of bytes read from cache                                               |
| cacheMissBytes              | Object | Number of bytes missed from cache                                             |
| cacheReadCount              | Object | Number of reads in the cache                                                  |
| cacheMissCount              | Object | Number of reads missed in the cache                                           |
| dataSegment1.diskReadBytes  | Object | Number of bytes read in the data file                                         |
| dataSegment1.diskWriteBytes | Object | Number of bytes written in the data file                                      |
| dataSegment1.diskReadCount  | Object | Number of reads in the data file                                              |
| dataSegment1.diskWriteCount | Object | Number of writes in the data file                                             |
| indexSegment.diskReadBytes  | Number | Number of bytes read in the index file                                        |
| indexSegment.diskWriteBytes | Number | Number of bytes written in the index file                                     |
| indexSegment.diskReadCount  | Number | Number of reads in the index file                                             |
| indexSegment.diskWriteCount | Number | Number of writes in the index file                                            |



### Collected at database closure and data collection sending

| Data              | Type   | Notes                                                        |
| ----------------- | ------ | ------------------------------------------------------------ |
| webserverHits     | Number | Number of hits on the web server during the data collection  |
| restHits          | Number | Number of hits on the REST server during the data collection |
| webserverBytesIn  | Number | Bytes received by the web server during the data collection  |
| webserverBytesOut | Number | Bytes sent by the web server during the data collection      |




### Collected every time PHP execute is called

| Data        | Type    | Notes                                                                               |
| ----------- | ------- | ----------------------------------------------------------------------------------- |
| phpCall     | Number  | Number of calls to `PHP execute`                                                    |
| externalPHP | Boolean | True if the client performs a call to `PHP execute` and uses its own version of php |


### Collected at client connection

| Data                       | Type       | Notes                                                                              |
| -------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| maximum4DClientConnections | Number     | Maximum number of 4D Client connections to the server                              |
| connectionSystems          | Collection | Client OS without the build number (in parenthesis) and number of clients using it |



## Où sont-elles stockées et envoyées ?

Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv20/help/command/en/page485.html), i.e.:

- sous Windows : `Users\[userName]\AppData\Roaming\4D Server`
- sous macOS : `/Users/[userName]/Library/ApplicationSupport/4D Server`

Une fois par semaine, le fichier est automatiquement envoyé par le réseau à 4D. Le fichier est ensuite supprimé du dossier 4D actif.

![](../assets/en/Admin/data-collect.png)

> Si le fichier n'a pas pu être envoyé pour une raison quelconque, il est néanmoins supprimé et aucun message d'erreur n'est affiché côté 4D Server.

Le fichier est envoyé au serveur à l'adresse suivante : `https://dcollector.4d.com` (ip : 195.68.52.83).


## Désactiver la collecte de données dans les applications client/serveur générées

Vous pouvez désactiver la collecte automatique de données dans [les applications client/serveur générées](../Desktop/building.md#clientserver-page).

Pour désactiver la collecte, passez la valeur **False** à la clé [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) dans le fichier `buildApp.4DSettings` , utilisé pour construire l'application client/serveur.