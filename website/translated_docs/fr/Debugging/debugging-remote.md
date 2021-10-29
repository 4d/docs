---
id: debugging-remote
title: Débogage depuis des machines distantes
---

## Aperçu

Lorsqu'une base de données 4D est exécutée sur 4D Server, vous pouvez déboguer le code 4D exécuté sur le serveur à partir d'un client 4D distant connecté au projet. Il suffit d'associer le débogueur à une machine distante spécifique, et l'exécution du code peut être surveillée dans le débogueur directement sur la machine distante.

Sur une machine distante, la [fenêtre du débogueur](debugger.md) affiche une icône de serveur spécifique et une couleur de fond bleue pour indiquer que vous déboguez du code serveur :

![debugger-window-remote](assets/en/Debugging/debuggerWindowRemote.png)

Cette fonctionnalité est particulièrement utile lorsque 4D Server fonctionne en mode headless (voir [Interface en ligne de commande](../Admin/cli.md)), ou lorsque l'accès à la machine serveur n'est pas facile.


## Débogueur associé

Un seul débogueur peut déboguer une application 4D Server à un moment donné. Il s'agit du **débogueur associé**. Le débogueur associé peut être :

* le débogueur local de 4D Server (par défaut) - si le serveur ne tourne pas en mode headless.
* le débogueur d'un client 4D distant - si la session distante a accès au mode Développement.

Le débogueur associé est appelé chaque fois que 4D Server rencontre :
* un point d'arrêt
* une commande `TRACE`
* un point d'arrêt sur commande
* une erreur

A noter que les messages d'erreur sont envoyés à la machine du débogueur associé. Cela signifie que dans le cas d'un débogueur distant, les messages d'erreur du serveur sont affichés sur le client 4D distant.

A noter que :
* Le code exécuté dans la méthode base `On Server Startup Database` ne peut pas être débogué à distance. Il ne peut être débogué que du côté serveur
* Si aucun débogueur n'est associé, le code en cours d'exécution n'est pas arrêté par les commandes de débogage

## Association du débogueur à un client 4D distant

Par défaut, le débogueur n'est pas associé à un client 4D distant :
* Si 4D Server ne fonctionne pas en mode "headless", le débogueur est associé au serveur
* Si 4D Server fonctionne en mode "headless", aucun débogueur n'est associé

Vous pouvez associer le débogueur à tout client 4D distant autorisé à se connecter à l'application 4D Server.

> La session utilisateur du client 4D distant doit avoir accès à l'environnement de développement de la base de données.

Pour associer le débogueur à un client 4D distant :

* Dans la barre de menu de 4D Server, sélectionnez **Edition** > **Détacher le débogueur** afin que le débogueur devienne disponible pour les machines distantes.
    - Cette étape est inutile si le 4D Server fonctionne en mode headless.
    - Vous pouvez rattacher le débogueur au serveur en sélectionnant **Edit** > **Attach debugger** (s'il n'est pas associé à un client 4D distant, voir [Rejected attachment requests](#rejected-attachment-requests)).
* Dans un client 4D distant connecté au serveur, sélectionnez **Exécuter** > **Attacher le débogueur distatn**

Si le rattachement est accepté (voir [Rejected attachment requests](#rejected-attachment-requests)), la commande de menu devient **Detach Remote Debugger**.

Le débogueur est alors attaché au client 4D distant :
* jusqu'à la fin de la session utilisateur
* jusqu'à ce que vous sélectionniez `Detach Remote Debugger`

## Attacher le débogueur ou le débogueur distant au démarrage

4D vous permet d'associer automatiquement le débogueur à un client 4D distant ou au serveur au démarrage :

* Sur le serveur (s'il n'est pas headless), cette option s'appelle **Attach Debugger At Startup**. Lorsque le serveur est démarré, il associe automatiquement le débogueur (par défaut).

> **Avertissement** : Si cette option est sélectionnée pour un serveur qui est ensuite lancé en mode headless, le débogueur ne sera pas disponible pour ce serveur.

* Sur un client 4D distant, cette option s'appelle **Attach Remote Debugger At Startup**. Lorsqu'elle est sélectionnée, le client 4D distant tente automatiquement d'attacher le débogueur distant à chaque connexion ultérieure à la même base de données 4D Server. Si l'association est acceptée (voir [Rejected attachment requests](#rejected-attachment-requests)), le débogueur distant est automatiquement attaché au client 4D distant et l'option **Detach Remote Debugger** s'affiche.

> Ce paramètre s'applique par projet et est stocké localement dans le fichier [`.4DPreferences`](Project/architecture.md#userpreferencesusername).

## Demandes d'association rejetées

Si le débogueur est déjà attaché à un client 4D distant ou à 4D Server (par défaut), aucune autre machine ne peut s'associer au débogueur.

Si une machine tente d'attacher le débogueur alors qu'il est déjà attaché, l'attachement est rejeté et une boîte de dialogue apparaît :

![attach-debugger-dialog](assets/en/Debugging/attach-debugger-dialog.png)

![attach-debugger-dialog-2](assets/en/Debugging/attach-debugger-dialog-2.png)

L'attachement du débogueur dans ce cas nécessite que :

* le débogueur attaché soit détaché du client 4D distant à l'aide de la commande de menu **Detach remote debugger** ou du serveur à l'aide de la commande **Detach debugger**
* la session du client distant 4D associée soit fermée
