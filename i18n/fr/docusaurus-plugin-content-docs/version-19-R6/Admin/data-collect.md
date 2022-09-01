---
id: data-collect
title: A propos de la collecte de données
---

Pour nous aider à améliorer sans cesse nos produits, nous collectons automatiquement des données concernant les statistiques d'utilisation des applications 4D Server. Les données collectées sont totalement anonymes et leur transfert n'a aucun impact sur l'expérience utilisateur.

Cette page explique :

- quelles informations sont collectées
- où les informations sont stockées et quand elles sont envoyées à 4D
- comment désactiver la collecte automatique de données dans les applications client/serveur générées.


## Informations collectées

Les données sont collectées lors des événements suivants :

- démarrage de 4D Server,
- ouverture de la base de données,
- fermeture de la base de données,
- démarrage du serveur web.

### Collecté au démarrage de 4D Server

| Données       | Exemple                                                                                              | Notes                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| CPU           | Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz                                                       | Nom, type et vitesse du processeur                         |
| numberOfCores | 4                                                                                                    | Nombre total de cœurs                                      |
| memory        | 419430400                                                                                            | Taille de la mémoire (en octets) disponible sur la machine |
| system        | Microsoft Windows 10 Pro 1809 (17763.253)                                                            | Version du système d'exploitation et numéro de version     |
| headless      | false                                                                                                | True si l'application fonctionne en mode headless          |
| version       | 1960                                                                                                 | Numéro de version de l'application 4D                      |
| buildNumber   | 123456                                                                                               | Numéro de build de l'application 4D                        |
| license       | {"name":"4D Developer Professional 19R6","products":[{"id":808464433,"name":"4D","allowedCount":1}]} | Nom commercial et description des licences des produits    |


### Collecté par base de données à l'ouverture

| Données                 | Exemple                                                 | Notes                                                                                                             |
| ----------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| id                      | chaîne hachée                                           | Identifiant unique associé à la base de données (*Hachage par roulement polynomial du nom de la base de données*) |
| dataFileSize            | 419430400                                               | Taille du fichier de données en octets                                                                            |
| indexesSize             | 419430400                                               | Taille des index en octets                                                                                        |
| cacheSize               | 419430400                                               | Taille du cache en octets                                                                                         |
| usingLegacyNetworkLayer | false                                                   | True si l'ancienne couche réseau est utilisée pour le serveur d'application                                       |
| isEncrypted             | vrai                                                    | Vrai si le fichier de données est chiffré                                                                         |
| isCompiled              | vrai                                                    | True si l'application est compilée                                                                                |
| isEngined               | vrai                                                    | True si l'application est fusionnée avec 4D Volume Desktop                                                        |
| isProjectMode           | vrai                                                    | True si l'application est un projet                                                                               |
| mobile                  | [{"os":"iOS", "version":"12.465", "simulator":"false"}] | Informations sur les sessions mobiles                                                                             |


### Collecté par base de données à la fermeture

| Données | Exemple | Notes                                                                         |
| ------- | ------- | ----------------------------------------------------------------------------- |
| uptime  | 123456  | Temps écoulé (en secondes) depuis l'ouverture de la base de données 4D locale |


### Collecté par base de données au démarrage du serveur web

| Données   | Exemple          | Notes         |
| --------- | ---------------- | ------------- |
| webServer | {"started":true} | Toujours true |



## Quand sont-elles stockées et envoyées ?

Les données collectées sont écrites dans un fichier texte (format JSON) lorsque 4D Server quitte. Le fichier est stocké dans le [dossier 4D actif](https://doc.4d.com/4dv19/help/command/en/page485.html), c'est-à-dire :

- sous Windows : `Users\[userName]\AppData\Roaming\4D Server`
- sous macOS : `/Users/[userName]/Library/ApplicationSupport/4D Server`

Une fois par semaine, le fichier est automatiquement envoyé par le réseau à 4D. Le fichier est ensuite supprimé du dossier 4D actif.

![](../assets/en/Admin/data-collect.png)

> Si le fichier n'a pas pu être envoyé pour une raison quelconque, il est néanmoins supprimé et aucun message d'erreur n'est affiché côté 4D Server.


## Désactiver la collecte de données dans les applications client/serveur générées

Vous pouvez désactiver la collecte automatique de données dans [les applications client/serveur générées](../Desktop/building.md#clientserver-page).

Pour désactiver la collecte, passez la valeur **False** à la clé [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) dans le fichier `buildApp.4DSettings` , utilisé pour construire l'application client/serveur.