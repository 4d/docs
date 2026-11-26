---
id: managing-updates
title: Managing Updates
---

En principe, la mise à jour des applications serveur ou des applications mono-utilisateur fusionnées nécessite l'intervention de l'utilisateur (ou la programmation de routines système personnalisées) : chaque fois qu'une nouvelle version de l'application fusionnée est disponible, vous devez quitter l'application en production et remplacer manuellement les anciens fichiers par les nouveaux ; puis redémarrer l'application et sélectionner le fichier de données courant.

Vous pouvez automatiser cette procédure dans une large mesure en utilisant les commandes suivantes : [`SET UPDATE FOLDER`](../commands/set-update-folder), [`RESTART 4D`](../commands/restart-4d), et aussi [`Last update log path`](../commands/last-update-log-path) pour les opérations de surveillance. L'idée est d'implémenter une fonction dans votre application 4D déclenchant la séquence de mise à jour automatique décrite ci-dessous. Il peut s'agir d'une commande de menu ou d'un process s'exécutant en arrière-plan et vérifiant à intervalles réguliers la présence d'une archive sur un serveur.

> You also have XML keys to elevate installation privileges so that you can use protected files under Windows (see the [AutoUpdate XML keys](../BuildApplication/auto-update.md)).

Voici le scénario pour la mise à jour d'un serveur ou d'une application mono-utilisateur fusionnée :

1. Vous transférez, par exemple en utilisant un serveur HTTP, la nouvelle version de l'application serveur ou l'application mono-utilisateur fusionnée sur la machine en production.
2. In the application in production, you call the [`SET UPDATE FOLDER`](../commands/set-update-folder) command: this command designates the location of the folder where the "pending" update of the current application is found. Facultativement, vous pouvez copier dans ce dossier les éléments personnalisés de la version en production (fichiers utilisateur).
3. In the application in production, call the [`RESTART 4D`](../commands/restart-4d) command: this command automatically triggers execution of a utility program named "updater" that exits the current application, replaces it using the "pending" update if one is specified, and restarts the application with the current data file. La version précédente est renommée.

> Cette séquence est compatible avec les applications Windows Server [exécutées en tant que Service](../server/service.md).

### Journal des mises à jour

La procédure d'installation produit un fichier journal détaillant les opérations de mise à jour des applications fusionnées (client, serveur ou mono-utilisateur) sur les machines cibles. Ce fichier est utile pour analyser les erreurs qui se produisent pendant le processus d'installation.

Le journal de mise à jour est nommé `YYYY-MM-DD_HH-MM-SS_log_X.txt`, par exemple, `2021-08-25_14-23-00_log_1.txt` pour un fichier créé le 25 août 2021 à 14h23.

Ce fichier est créé dans le dossier de l'application "Updater", dans le dossier de l'utilisateur du système. Vous pouvez connaître l'emplacement de ce fichier à tout moment en utilisant la commande [`Last update log path`](../commands/last-update-log-path).

