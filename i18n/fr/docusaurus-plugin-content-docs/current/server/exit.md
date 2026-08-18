---
id: exit
title: Quitter 4D Server
---

Pour quitter l'application 4D Server :

1. Sélectionnez la commande **Quitter** dans le menu **Fichier** de 4D Server (Windows) ou dans le menu **4D Server** (macOS).

La fenêtre suivante s'affiche sur le poste serveur :

![](../assets/en/server/exit-1.png)

2. Enter the number of minutes in which you want the server to shut down, or select a client disconnection option.

A partir de cet instant, plus aucun nouveau client ne peut se connecter au serveur.

Les options suivantes sont disponibles :

- **Quitter le serveur dans XX mn**

Au bout du délai spécifié, le serveur s'arrête et tous les utilisateurs sont déconnectés, y compris les clients en mode veille. La fenêtre suivante apparaît sur le serveur :

![](../assets/en/server/exit-2.png)

Une fenêtre similaire apparaît sur chaque poste distant 4D. Cette fenêtre est répétée ou mise à jour sur chaque poste client toutes les 20 secondes environ, afin de l'inciter à quitter. A l'issue du délai, le serveur quitte même si des clients sont encore connectés.

- **Attendre que tous les clients aient quitté**

Le serveur ne s'arrêtera qu'une fois que tous les clients, y compris ceux en mode veille, se seront déconnectés. Cette option peut s'avérer inappropriée pour les opérations de maintenance lancées pendant les horaires de déjeuner, par exemple, puisqu'il est possible que des clients soient [en mode veille](../ServerWindow/users.md#managing-sleeping-users).

- **Attendre que les clients actifs aient quitté. (Ignorer les clients endormis)**

Le serveur ne s'arrêtera qu'une fois que tous les clients actifs se seront déconnectés (autrement dit, tous les postes clients qui ne sont pas en [mode veille](../ServerWindow/users.md#managing-sleeping-users)). Avec cette option, les clients en mode veille ne sont pas considérés comme connectés. Utilisez cette option si vous souhaitez effectuer des opérations de maintenance pendant la pause déjeuner, par exemple. Lorsque cette option est activée, tous les clients en mode veille rencontreront une erreur de connexion à leur réveil.

:::note

Un *client endormi* désigne une application 4D distante installée sur une machine qui est passée en [mode veille](../ServerWindow/users.md#managing-sleeping-users) alors que la connexion au serveur était encore active.

:::

Lorsque vous sélectionnez l'une de ces options, la fenêtre suivante s'affiche sur le serveur, indiquant le nombre de clients encore connectés :

![](../assets/en/server/exit-3.png)

Sur chaque poste client 4D, la fenêtre suivante apparaît, affichant un message par défaut :

![](../assets/en/server/exit-4.png)

Si vous avez saisi un message personnalisé dans la boîte de dialogue de fermeture de 4D Server, celui-ci s'affiche à la place du message par défaut sur chaque poste client. Par exemple :

![](../assets/en/server/exit-5.png)

- **Déconnecter les clients et quitter**

Le serveur met fin à tous les process et toutes les connexions et quitte en quelques secondes.

:::note Notes

- Dans tous les cas, si aucun client n'est connecté au serveur au moment où la fenêtre de fermeture est validée, 4D Server quitte immédiatement.
- Si vous cliquez sur **Annuler** dans la fenêtre d'arrêt de 4D Server, le processus d'arrêt du serveur est annulé.
- Vous pouvez fermer le projet (et déconnecter les clients) sans quitter 4D Server à l'aide de la commande de menu **Fermer le projet...**.

:::