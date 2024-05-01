---
id: application-server
title: Page Serveur d’application
---

La Page Serveur d’application regroupe les informations relatives à la base de données publiée par 4D Server et permet de gérer cette publication.

![](../assets/en/Admin/server-admin-application-page.png)

La partie supérieure de la page fournit des informations sur le statut courant du serveur d’application de 4D Server.

- **State**: Started or Stopped.
- **Starting time**: Date and time the application server was launched. Cette date correspond à l’ouverture de la base par 4D Server.
- **Uptime**: Time elapsed since last opening of the project by the server.

## Refuser / Accepter nouvelles connexions

Il permet de gérer l’accès de nouveaux postes clients à l’application serveur.

Par défaut, lorsque la base est publiée :

- Le libellé du bouton est "Refuser nouvelles connexions"
- De nouveaux clients peuvent se connecter librement (dans les limites des connexions accordées par la licence).
- Le nom de la base est publié dans la boîte de dialogue de connexion (si l’option "Publier le nom de la base au démarrage dans le dialogue de connexion" est cochée dans les Préférences).

If you click on the **Reject new connections** button:

- Le libellé du bouton devient "Accepter nouvelles connexions"
- Plus aucun nouveau client ne peut alors se connecter. Les clients qui tenteront de se connecter recevront le message suivant :

![](../assets/en/Admin/server-error.png)

- Le nom du projet n’apparaît plus dans la boîte de dialogue de connexion.
- Les clients déjà connectés ne sont pas déconnectés et peuvent continuer à travailler normalement.

> You can perform the same action with the [`REJECT NEW REMOTE CONNECTIONS`](https://doc.4d.com/4dv19/help/command/en/page1635.html) command.

- If you click on the **Accept new connections button**, the application server returns to its default state.

This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. S’il utilise une connexion cliente, il a la certitude d’être le seul à modifier les données. Il est également possible d’utiliser cette fonction en préparation d’une opération de maintenance nécessitant qu’aucun poste client ne soit connecté.

## Informations

### Configuration

Cette zone fournit plusieurs informations sur la base de données 4D publiée par le serveur : nom et emplacement des fichiers de structure et de données et nom du fichier journal (fichier d’historique de la base). Vous pouvez cliquer sur le nom du fichier de structure ou de données afin de visualiser son chemin d’accès complet.

The **Mode** field indicates the current execution mode of the application: compiled or interpreted.

La partie inférieure de la zone indique les paramètres de configuration du serveur (démarré comme service, port et adresse IP) et l’activation du TLS pour les connexions client-serveur (ne concerne pas les connexions SQL ni HTTP).

### Mémoire

This area indicates the **Total cache memory** (parameter set in the settings) and the **Used cache memory** (dynamic allocation by 4D Server according to its needs).

### Connexions application serveur

- **Maximum**: maximum number of simultaneous client connections allowed for the application server. Cette valeur dépend de la licence installée sur le poste serveur.
- **Used**: actual number of connections currently being used.
