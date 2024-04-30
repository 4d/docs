---
id: http-server
title: Page Serveur HTTP
---

The **HTTP Server** page groups together information about the operation of the Web server and SOAP server of 4D Server. Le serveur Web permet de publier du contenu Web tel que des pages HTML ou des images à destination de navigateurs Web et gérer des requêtes REST. Le serveur SOAP gère la publication de Web Services. Ces deux serveurs s’appuient sur le serveur HTTP interne de 4D Server.

![](../assets/en/Admin/server-admin-web-page.png)

La partie supérieure de la page fournit des informations sur le statut courant du serveur HTTP de 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the HTTP server was last launched.
- **Uptime**: Time elapsed since last startup of the HTTP server.
- **Total HTTP hits**: Number of (low level) HTTP hits received by the HTTP server since it was started.

## Démarrer / Arrêter le serveur HTTP

Il permet de contrôler l’activation du serveur HTTP de 4D Server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. Si vous cliquez sur ce bouton, le serveur HTTP de 4D Server est immédiatement stoppé, le serveur Web et le serveur SOAP n’acceptent plus aucune requête.
- When the HTTP server state is "Stopped," the button is titled **Start HTTP Server**. Si vous cliquez sur ce bouton, le serveur HTTP de 4D Server est immédiatement démarré : les requêtes Web, REST et SOAP sont acceptées.

> Vous devez disposer d’une licence appropriée pour pouvoir démarrer le serveur HTTP.
>
> Le serveur HTTP peut également être lancé automatiquement au démarrage de l’application (option des Préférences) ou par programmation.

## Informations Web

Cette zone fournit des informations spécifiques relatives au serveur Web de 4D Server.

- **Web requests**: Accepted or Rejected. Cette information indique si le serveur Web est actif. Le serveur Web étant directement relié au serveur HTTP, les requêtes Web sont acceptées lorsque le serveur HTTP est démarré et refusées lorsqu’il est stoppé.
- **Maximum connections**: Maximum number of Web connections allowed. Cette valeur dépend de la licence installée sur le poste serveur.

## Informations SOAP

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **SOAP requests**: Accepted or Rejected. Cette information indique si le serveur SOAP est actif. Pour que les requêtes SOAP soient acceptées, le serveur HTTP doit être démarré et le serveur SOAP doit explicitement accepter les requêtes (cf. bouton Accepter/Refuser).
- **Maximum connections**: Maximum number of SOAP connections allowed. Cette valeur dépend de la licence installée sur le poste serveur.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

If you click on the **Accept SOAP requests** button and the HTTP server is stopped, 4D automatically starts it.

## Configuration serveur HTTP

Cette zone fournit plusieurs informations sur les paramètres de configuration et le fonctionnement du serveur HTTP :

- **Auto-launched at startup**: parameter set via the Settings.
- **HTTP Server processes (used/total)**: number of HTTP processes created on the server (current number of processes / total of all processes created).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).
