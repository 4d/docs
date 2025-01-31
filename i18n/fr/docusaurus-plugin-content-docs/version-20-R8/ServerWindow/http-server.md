---
id: http-server
title: Page Serveur HTTP
---

La page **HTTP Server** regroupe les informations relatives aux opérations du serveur Web et du serveur SOAP de 4D Server. Le serveur Web permet de publier du contenu Web tel que des pages HTML ou des images à destination de navigateurs Web et gérer des requêtes REST. Le serveur SOAP gère la publication de Web Services. Ces deux serveurs s’appuient sur le serveur HTTP interne de 4D Server.

![](../assets/en/Admin/server-admin-web-page.png)

La partie supérieure de la page fournit des informations sur le statut courant du serveur HTTP de 4D Server.

- **Etat** : Démarré ou Arrêté
- **Date de démarrage** : Date et heure du dernier lancement du serveur HTTP.
- **Durée de fonctionnement** : Délai écoulé depuis le dernier démarrage du serveur HTTP.
- **Nombre de hits HTTP** : nombre de hits HTTP (bas niveau) reçus par le serveur HTTP depuis son démarrage.

## Démarrer / Arrêter le serveur HTTP

Il permet de contrôler l’activation du serveur HTTP de 4D Server.

- Lorsque l’état du serveur HTTP est "Démarré", le bouton est libellé **Arrêter le serveur HTTP**. Si vous cliquez sur ce bouton, le serveur HTTP de 4D Server est immédiatement stoppé, le serveur Web et le serveur SOAP n’acceptent plus aucune requête.
- Lorsque l’état du serveur HTTP est "Arrêté", le bouton est libellé **Démarrer le serveur HTTP**. Si vous cliquez sur ce bouton, le serveur HTTP de 4D Server est immédiatement démarré : les requêtes Web, REST et SOAP sont acceptées.

> Vous devez disposer d’une licence appropriée pour pouvoir démarrer le serveur HTTP.
>
> Le serveur HTTP peut également être lancé automatiquement au démarrage de l’application (option des Préférences) ou par programmation.

## Informations Web

Cette zone fournit des informations spécifiques relatives au serveur Web de 4D Server.

- **Requêtes Web** : Acceptées ou Refusées. Cette information indique si le serveur Web est actif. Le serveur Web étant directement relié au serveur HTTP, les requêtes Web sont acceptées lorsque le serveur HTTP est démarré et refusées lorsqu’il est stoppé.
- **Connexions maximum** : Nombre maximum de connexions Web autorisées. Cette valeur dépend de la licence installée sur le poste serveur.

## Informations SOAP

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **Requêtes SOAP**: Acceptées ou Refusées. Cette information indique si le serveur SOAP est actif. Pour que les requêtes SOAP soient acceptées, le serveur HTTP doit être démarré et le serveur SOAP doit explicitement accepter les requêtes (cf. bouton Accepter/Refuser).
- **Connexions maximum** : Nombre maximum de connexions SOAP autorisées. Cette valeur dépend de la licence installée sur le poste serveur.
- **Accepter/Refuser les requêtes SOAP** : Ce bouton fonctionne en bascule. Il permet de contrôler l’activation du serveur SOAP de 4D Server. Ce bouton modifie la valeur de l’option **Autoriser requêtes Web Services** dans la page "Web services" des Propriétés de la base (et inversement). Vous pouvez également utiliser la commande [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/fr/page1636.html) pour refuser de nouvelles requêtes SOAP, toutefois cela ne modifie pas la valeur de l'option **Autoriser requêtes Web Services**.

Si vous cliquez sur le bouton **Accepter les requêtes SOAP** et que le serveur HTTP est arrêté, 4D le démarre automatiquement.

## Configuration serveur HTTP

Cette zone fournit plusieurs informations sur les paramètres de configuration et le fonctionnement du serveur HTTP :

- **Lancement automatique au démarrage** : paramètre défini via les Propriétés.
- **Process serveur HTTP (en cours/total)** : nombre de process HTTP créés sur le serveur (nombre courant de process / cumul de tous les process créés).
- **Mémoire cache** : taille de la mémoire cache du serveur HTTP, lorsqu’elle est activée (taille réellement occupée par le cache / taille maximale théorique allouée au cache dans les Propriétés). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Informations sur le fichier journal** : nom, format et date de la prochaine sauvegarde automatique du journal du serveur HTTP (fichier logweb.txt).
