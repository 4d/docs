---
id: remote-admin
title: Administration à partir de machines distantes
---

Vous pouvez administrer l'application 4D Server à partir d'un 4D distant (machine cliente) en ouvrant la fenêtre d'administration de 4D Server sur la machine cliente.

## Ouvrir la fenêtre d'administration sur une machine 4D distante

Pour ouvrir une fenêtre d'administration de serveur à partir d'une machine cliente, vous devez être connecté à la base de données distante en tant que Super_Utilisateur ou Administrateur. Sinon, lorsque vous essayez d'ouvrir la fenêtre d'administration, une erreur de privilège (-9991) est générée.

Cette fenêtre est accessible de deux manières :

- Choose the **Administration Window** command from the **Help** menu or click on the corresponding button in the 4D tool bar.
- Execute the `OPEN ADMINISTRATION WINDOW` command.

A [server administration window](monitor.md) then appears on the client machine.

## Spécificités de l'administration distante

Un poste client affichant la fenêtre d’administration du serveur accède à toutes les informations disponibles et peut agir sur les process et le démarrage des serveurs. Il existe cependant des restrictions et des particularités de fonctionnement lorsque la fenêtre d’administration du serveur est affichée sur un poste client :

- On the [Process page](processes.md), it is not possible to debug a user process (since the debug window appears on the server machine).
- On the [Maintenance Page](maintenance.md), it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). Dans ce cas, le poste client ayant demandé l’opération est automatiquement reconnecté à l’issue du redémarrage.
- On the [Maintenance Page](maintenance.md), the **View Report** buttons are renamed **Download Report** after the execution of a maintenance operation. Ces fichiers sont téléchargés dans le dossier local de la base sur le poste client avant d’être affichés.