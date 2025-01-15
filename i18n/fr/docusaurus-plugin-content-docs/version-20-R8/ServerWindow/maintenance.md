---
id: maintenance
title: Page maintenance
---

La page **Maintenance** fournit diverses informations relatives au fonctionnement courant de la base. Elle donne également accès aux fonctions de maintenance élémentaires :

![](../assets/en/Admin/server-maintenance.png)

## Dernière vérification/dernier compactage

Ces zones indiquent la date, l’heure et le statut de la dernière [vérification des données](MSC/verify.md) et de la dernière [opération de compactage](MSC/compact.md) effectuées sur la base.

### Vérifier enregistrements et index

Ce bouton permet de lancer directement l’opération de vérification, sans interruption du serveur. A noter que le serveur peut être sensiblement ralenti durant l’opération.

Tous les enregistrements et tous les index de la base sont vérifiés. Si vous souhaitez pouvoir cibler la vérification ou disposer d’options supplémentaires, vous devez utiliser le [Centre de sécurité et de maintenance](MSC/overview.md) (CSM).

A l’issue de la vérification, un fichier de compte-rendu est généré au format XML sur le serveur, dans le dossier [maintenance Logs](Project/architecture.md#logs). Le bouton **Voir le compte rendu** (nommé **Télécharger le compte rendu** si l’opération a été effectuée depuis un poste distant) vous permet d’afficher le fichier dans votre navigateur.

### Compacter les données...

Ce bouton permet de lancer directement une opération de compactage des données. Cette opération nécessite de stopper le serveur : lorsque vous cliquez sur le bouton, la boîte de dialogue de fermeture de la base 4D Server apparaît, vous permettant de choisir le mode d’interruption de l’exploitation :

![](../assets/en/Admin/server-shut.png)

Après l’interruption effective de la base, 4D Server effectue un compactage standard des données de la base. Si vous souhaitez disposer d’options supplémentaires, vous devez utiliser le [Centre de sécurité et de maintenance (CSM)](MSC/overview.md).

Une fois le compactage terminé, 4D Server relance automatiquement l'application. Les utilisateurs 4D peuvent alors se reconnecter.

> Si la demande de compactage a été effectuée depuis un client 4D distant, ce poste est automatiquement reconnecté par 4D Server.

A l’issue de la vérification, un fichier de compte-rendu est généré au format XML sur le serveur, dans le dossier [maintenance Logs](Project/architecture.md#logs). Le bouton **Voir le compte rendu** (nommé **Télécharger le compte rendu** si l’opération a été effectuée depuis un poste distant) vous permet d’afficher le fichier dans votre navigateur.

## Durée de fonctionnement

Cette zone indique la durée de fonctionnement du serveur depuis son dernier démarrage (jours, heures et minutes).

### Redémarrer le serveur...

Ce bouton vous permet de provoquer un redémarrage immédiat du serveur. Lorsque vous cliquez sur ce bouton, la boîte de dialogue de fermeture de la base 4D Server apparaît, vous permettant de choisir le mode d’interruption de l’exploitation. Après le redémarrage, 4D Server relance automatiquement la base. Les utilisateurs 4D peuvent alors se reconnecter.

> Si la demande de redémarrage a été effectuée depuis un client 4D distant, ce poste est automatiquement reconnecté par 4D Server.

## Dernière sauvegarde

Cette zone indique la date et l’heure de la [dernière sauvegarde](MSC/backup.md) de la base et fournit des informations relatives à la prochaine sauvegarde automatique, le cas échéant. Les sauvegardes automatiques sont paramétrées via la page **Périodicité** des propriétés de la base.

- **Dernière sauvegarde** : date et heure de la dernière sauvegarde automatique.
- **Prochaine sauvegarde** : date et heure de la prochaine sauvegarde.
- **Place nécessaire estimée** : estimation de la taille nécessaire pour la sauvegarde. La taille réelle du fichier de sauvegarde peut varier selon les paramètres (compression, etc.) et selon les variations du fichier de données.
- **Place disponible** : place disponible sur le volume de sauvegarde.

Le bouton **Sauvegarder la base** permet de démarrer une sauvegarde immédiate de la base en utilisant les paramètres de sauvegarde courants (fichiers sauvegardés, emplacement des archives, options, etc.). Vous pouvez visualiser ces paramètres en cliquant sur le bouton **Propriétés...**. Pendant une sauvegarde sur le serveur, les postes clients sont "bloqués" (mais pas déconnectés) et il n’est pas possible à de nouveaux clients de se connecter.

## Requêtes et débogage

Cette zone indique la durée d’enregistrement des fichiers d'historique (lorsqu’ils sont activés) et vous permet de gérer leur activation.

Refer to the [**Description of log files**](Debugging/debugLogFiles.md) section for details on log files.

### Start/Stop Request and Debug Logs

Le bouton **Démarrer les journaux des requêtes et de débogage** permet de démarrer les fichiers de compte-rendu. Ce mode pouvant dégrader sensiblement les performances du serveur, il est à réserver à la phase de mise au point de l’application.

> Ce bouton enregistre uniquement les opérations exécutées sur le serveur.

Une fois l’enregistrement des requêtes activé, le libellé du bouton devient **Arrêter les journaux des requêtes et de débogage**, permettant de stopper l’enregistrement des requêtes à tout moment. A noter qu’une reprise de l’enregistrement après un arrêt "écrase" le fichier précédent.

### Voir le compte rendu

Le bouton **Voir le compte rendu** (nommé **Télécharger le compte rendu** si l’opération a été effectuée depuis un client distant) permet d’ouvrir une fenêtre système affichant le fichier journal.

### Load logs configuration file

Ce bouton vous permet de charger un [fichier de configuration de log](Debugging/debugLogFiles.md#using-a-log-configuration-file) (fichier `.json`) pour un serveur spécifique. Such a file can be provided by 4D technical services to monitor and study specific cases.

### Pause logging

This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command.
