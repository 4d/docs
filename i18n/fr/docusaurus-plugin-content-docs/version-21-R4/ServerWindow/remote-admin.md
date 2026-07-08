---
id: remote-admin
title: Administration à partir de machines distantes
---

Vous pouvez administrer l'application 4D Server à partir d'un 4D distant (machine cliente) en ouvrant la fenêtre d'administration de 4D Server sur la machine cliente.

## Ouvrir la fenêtre d'administration sur une machine 4D distante

Pour ouvrir une fenêtre d'administration de serveur à partir d'une machine cliente, vous devez être connecté à la base de données distante en tant que Super_Utilisateur ou Administrateur. Sinon, lorsque vous essayez d'ouvrir la fenêtre d'administration, une erreur de privilège (-9991) est générée.

Cette fenêtre est accessible de deux manières :

- Choisissez la commande **Fenêtre d'Administration** dans le menu **Aide** ou cliquez sur le bouton correspondant dans la barre d'outils 4D.
- Exécutez la commande `OPEN ADMINISTRATION WINDOW`.

Une [fenêtre d'administration du serveur](monitor.md) s'affiche alors sur l'ordinateur client.

## Spécificités de l'administration distante

Un poste client affichant la fenêtre d’administration du serveur accède à toutes les informations disponibles et peut agir sur les process et le démarrage des serveurs. Il existe cependant des restrictions et des particularités de fonctionnement lorsque la fenêtre d’administration du serveur est affichée sur un poste client :

- Sur la [page Process](processes.md), il n'est pas possible de déboguer un process utilisateur (car la fenêtre de débogage s'affiche sur le serveur).
- Sur la [page Maintenance](maintenance.md), il est possible d'effectuer des actions qui entraînent la déconnexion de tous les clients et le redémarrage du serveur (opérations de compactage et de redémarrage). Dans ce cas, le poste client ayant demandé l’opération est automatiquement reconnecté à l’issue du redémarrage.
- Sur la [page Maintenance](maintenance.md), les boutons **Afficher le rapport** sont renommés **Télécharger le rapport** après l'exécution d'une opération de maintenance. Ces fichiers sont téléchargés dans le dossier local de la base sur le poste client avant d’être affichés.