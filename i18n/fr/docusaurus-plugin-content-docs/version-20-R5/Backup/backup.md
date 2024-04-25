---
id: backup
slug: backup
title: Sauvegarde
---

Une sauvegarde peut être déclenchée de trois manières :

- Manually, using the **Backup...** item of the 4D **File** menu or the **Backup** button of the [Maintenance and Security Center](MSC/backup.md).
- Automatiquement, via le programmateur paramétrable dans les Propriétés,
- Programmatically, using the `BACKUP` command.

> 4D Server: A backup can be started manually from a remote machine using a method that calls the `BACKUP` command. Dans tous les cas, la commande sera exécutée sur le serveur.

## Sauvegarde manuelle

1. Select the **Backup...** command in the 4D **File** menu.
   The backup window appears:
   ![](../assets/en/Backup/backup01.png)
   You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the **Backup/Configuration** page of the Database Settings.

- You can also open the [Maintenance and Security Center](MSC/overview.md) of 4D and display the [Backup page](MSC/backup.md).

The **Database properties...** button causes the Backup/Configuration page of the Structure Settings to be displayed.

2. Click **Backup** to start the backup using current parameters.

## Sauvegarde automatique périodique

Les sauvegardes périodiques sont déclenchées automatiquement. They are configured in the **Backup/Scheduler** page of the **Settings**.

Les sauvegardes s'effectuent automatiquement au moment défini, sans intervention de l’utilisateur. For more information on using this dialog box, refer to [Scheduler in backup settings](settings.md#scheduler).

## Commande BACKUP

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. You can use the `On Backup Startup` and `On Backup Shutdown` database methods for handling the backup process (see the _4D Language Reference_ manual).

## Déroulement de la sauvegarde

Une fois qu’une sauvegarde a été déclenchée, 4D affiche une boîte de dialogue comportant un thermomètre indiquant la progression de l’opération :

![](../assets/en/Backup/backupProgress.png)

This thermometer is also displayed on the [Backup page of the MSC](MSC/backup.md) if you have used this dialog box.

The **Stop** button lets the user interrupt the backup at any time (refer to [Handling backup issues](backup.md#handling-backup-issues) below).

The status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server. It is also recorded in the database **Backup journal.txt**.

### Accès à l'application durant la sauvegarde

4D verrouille les process liés aux types de fichiers inclus dans la sauvegarde : si seul le fichier de structure est sauvegardé, l’accès à la structure est impossible mais l’accès aux données est autorisé. Pendant la sauvegarde, les accès à l'application sont restreints par 4D en fonction du contexte.

A l’inverse, si seul le fichier de données est sauvegardé, l’accès à la structure reste autorisé. Dans ce cas, les possibilités d’accès à l'application sont les suivantes :

- Avec 4D version monoposte, l'application est verrouillée en lecture et en écriture, tous les process sont gelés. Toute action est alors impossible.
- Avec 4D Server, l'application est verrouillée uniquement en écriture, les postes clients peuvent consulter les données. Si un poste client envoie une requête d’ajout, de suppression ou de modification au serveur, il obtient une fenêtre l’invitant à attendre la fin de la sauvegarde. Une fois l'application sauvegardée, la fenêtre disparaît d’elle-même et l’action est exécutée. To cancel the request in process and not wait for the end of the backup, simply click the **Cancel operation** button. Cependant, si l’action en attente provient d’une méthode lancée avant la sauvegarde, il est déconseillé de l’annuler car seules les opérations restant à effectuer seront annulées. Or, une méthode “à moitié” exécutée peut conduire à des incohérences logiques dans les données.

> When the action waiting to be executed comes from a method and the user clicks the **Cancel operation** button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).

### En cas de problème au cours de la sauvegarde

Il est possible qu'une sauvegarde ne s’effectue pas correctement. Les causes de l’échec peuvent être diverses : interruption par l’utilisateur, fichier joint introuvable, disque de destination défaillant, transaction non terminée, etc. 4D traite l'incident selon la cause de l'échec.

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the **Backup journal.txt**.

- **User interruption**: The **Stop** button in the progress dialog box allows users to interrupt the backup at any time. Dans ce cas, la copie des éléments est stoppée et l'erreur 1406 est générée. You can intercept this error in the `On Backup Shutdown` database method.
- **Attached file not found**: When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.):
  If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the **Backup/Backup & Restore** page of the Settings.
  Si la seconde tentative échoue également, une boîte de dialogue d’alerte système est affichée et une erreur est générée. You can intercept this error in the `On Backup Shutdown` database method.

## Journal de sauvegarde (Backup Journal)

Pour faciliter le suivi et la vérification des sauvegardes, le module de sauvegarde résume chaque opération effectuée dans un fichier spécial, similaire à un journal d'activité. Comme un manuel intégré, toutes les opérations de la base de données (sauvegardes, restaurations, intégrations de fichiers d'historique) sont consignées dans ce fichier, qu’elles aient été planifiées ou exécutées manuellement. La date et l'heure auxquelles ces opérations ont eu lieu sont également notées dans le journal.

Le journal de sauvegarde s'appelle "Backup Journal[001].txt" et se trouve dans le dossier "Logs" du projet. Le journal de sauvegarde peut être ouvert avec n'importe quel éditeur de texte.

#### Gestion de la taille du journal de sauvegarde

Dans certaines stratégies de sauvegarde (par exemple, dans le cas où de nombreuses pièces jointes sont sauvegardées), le journal de sauvegarde peut rapidement atteindre une taille importante. Deux mécanismes peuvent être utilisés pour gérer cette taille :

- **Automatic backup**: Before each backup, the application examines the size of the current backup journal file. Si elle est supérieure à 10 Mo, le fichier courant est archivé et un nouveau fichier est créé avec le numéro [xxx] incrémenté, par exemple "Backup Journal[002] .txt”. Une fois le numéro de fichier 999 atteint, la numérotation reprend à 1 et les fichiers existants seront remplacés.
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the _Backup.4DSettings_ file of the project. Par défaut, cette clé est définie sur True. Si vous définissez la valeur de cette clé sur False, seules les informations principales sont stockées dans le journal de sauvegarde : la date et l'heure du début de l'opération et les éventuelles erreurs générées. The XML keys concerning backup configuration are described in the _4D XML Keys Backup_ manual.

## backupHistory.json

All information regarding the latest backup and restore operations are stored in the application's **backupHistory.json** file. Ce dernier enregistre le chemin de chaque fichier sauvegardé (y compris les pièces jointes) ainsi que le numéro, la date, l'heure, la durée et le statut de chaque opération. Afin de limiter la taille du fichier, le nombre d'opérations enregistrées et le nombre de sauvegardes disponibles ("Keep only the last X backup files") définies dans les propriétés de sauvegarde est identique.

The **backupHistory.json** file is created in the current backup destination folder. Vous pouvez obtenir le chemin de ce fichier à l'aide de la déclaration suivante :

```4d
$backupHistory:=Get 4D file(Backup history file)
```

> **WARNING**\
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.

> The **backupHistory.json** file is formatted to be used by the 4D application. Si vous recherchez un état lisible sur les opérations de sauvegarde, le journal de sauvegarde sera plus précis.
