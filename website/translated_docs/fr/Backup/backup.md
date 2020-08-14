---
id: backup
title: Sauvegarde
---


## Lancer une sauvegarde

Une sauvegarde peut être déclenchée de trois manières :

- Manuellement, via la commande **Sauvegarde...** du menu **Fichier** de 4D ou le bouton **Sauvegarde** du [Centre de sécurité et de maintenance (CSM)](MSC/backup.md).
- Automatically, using the scheduler that can be set in the Settings,
- Par programmation, à l’aide de la commande `BACKUP`.

> 4D Server : Il est possible de déclencher “manuellement” une sauvegarde depuis un poste distant, via une méthode appelant la commande `BACKUP`. Dans tous les cas, la commande sera exécutée sur le serveur.

### Sauvegarde manuelle

1. Choisissez la commande **Sauvegarde...** dans le menu **Fichier** de 4D.   
   La fenêtre de sauvegarde s’affiche : ![](assets/en/Backup/backup01.png) Vous pouvez visualiser l'emplacement du dossier de sauvegarde à l'aide du pop up menu associé à la zone "Destination de la sauvegarde". Cet emplacement est défini dans la Page **Sauvegarde/Configuration** des Propriétés de la base.

- Vous pouvez également sélectionner [Centre de sécurité et de maintenance](MSC/overview.md) de 4D et afficher la [Page Sauvegarde](MSC/backup.md).

The **Database properties...** button causes the Backup/Configuration page of the Structure Settings to be displayed.

 2. Cliquez sur le bouton **Sauvegarde** pour déclencher la sauvegarde avec les paramètres courants.


### Sauvegarde automatique périodique

Les sauvegardes périodiques sont déclenchées automatiquement. They are configured in the **Backup/Scheduler** page of the **Settings**.

Les sauvegardes s'effectuent automatiquement au moment défini, sans intervention de l’utilisateur. Pour plus d’informations sur le fonctionnement de cette boîte de dialogue, reportez-vous à la section [Définir des sauvegardes périodiques](settings.md#scheduler).


### Commande BACKUP

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. Vous pouvez utiliser la Méthode base `On Backup Startup` et `On Backup Shutdown` afin de contrôler le déroulement de la sauvegarde (cf. le manuel *Langage de 4D*).


## Déroulement de la sauvegarde

Une fois qu’une sauvegarde a été déclenchée, 4D affiche une boîte de dialogue comportant un thermomètre indiquant la progression de l’opération :

![](assets/en/Backup/backupProgress.png)

Le thermomètre est également affiché en bas de la page [“Sauvegarde” du CSM](MSC/backup.md) si vous avez utilisé cette boîte de dialogue.

Le bouton **Arrêter** permet à l’utilisateur d’interrompre la sauvegarde à tout instant (cf. paragraphe [En cas de problème au cours de la sauvegarde](backup.md#handling-backup-issues)).

Le compte-rendu de la dernière sauvegarde (succès ou échec) est stocké dans la zone "Informations sur la dernière sauvegarde" dans la [Page Sauvegarde du CSM](MSC/backup.md) ou dans la **Page de maintenance** de 4D Server. Il est également enregistré dans le **Backup journal.txt**.

### Accessing the application during backup

During a backup, access to the application is restricted by 4D according to the context. 4D verrouille les process liés aux types de fichiers inclus dans la sauvegarde : si seul le fichier de structure est sauvegardé, l’accès à la structure est impossible mais l’accès aux données est autorisé.

A l’inverse, si seul le fichier de données est sauvegardé, l’accès à la structure reste autorisé. In this case, the application access possibilities are as follows:

- With the 4D single-user version, the application is locked for both read and write; all processes are frozen. Toute action est alors impossible.
- With 4D Server, the application is only write locked; client machines can view data. Si un poste client envoie une requête d’ajout, de suppression ou de modification au serveur, il obtient une fenêtre l’invitant à attendre la fin de la sauvegarde. Once the application is saved, the window disappears and the action is performed. Pour annuler la requête en cours et ne pas avoir à attendre la fin de la sauvegarde, il suffit de cliquer sur le bouton **Annuler l’opération**. Cependant, si l’action en attente provient d’une méthode lancée avant la sauvegarde, il est déconseillé de l’annuler car seules les opérations restant à effectuer seront annulées. Also, a partially executed method can cause logical inconsistencies in the data. Lorsque l’action en attente provient d’une méthode et que l’utilisateur clique sur le bouton **Annuler l’opération**, 4D Server renvoie l’erreur -9976 (Cette commande ne peut être exécutée car la base est en cours de sauvegarde).

### En cas de problème au cours de la sauvegarde

Il est possible qu'une sauvegarde ne s’effectue pas correctement. Les causes de l’échec peuvent être diverses : interruption par l’utilisateur, fichier joint introuvable, disque de destination défaillant, transaction non terminée, etc. 4D traite l'incident selon la cause de l'échec.

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the **Backup journal.txt**. displayed in the Last Backup Information area of the Backup page in the MSC or in `GRAPH SETTINGS` of 4D Server, as well as in the `Backup journal` of the application.

- **Interruption par l’utilisateur** : le bouton **Arrêter** de la boîte de dialogue de progression de la sauvegarde permet aux utilisateurs d’interrompre la sauvegarde à tout instant. Dans ce cas, la copie des éléments est stoppée et l'erreur 1406 est générée. Vous pouvez intercepter cette erreur dans la Méthode base `On Backup Shutdown`.
- **Attached file not found**: When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.): If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the **Backup/Backup & Restore** page of the Settings. Si la seconde tentative échoue également, une boîte de dialogue d’alerte système est affichée et une erreur est générée. Vous pouvez intercepter cette erreur dans la Méthode base `On Backup Shutdown`.

## Journal de sauvegarde (Backup Journal)

To make following up and verifying backups easier, the backup module writes a summary of each operation performed in a special file, which is similar to an activity journal. Comme un manuel intégré, toutes les opérations de la base de données (sauvegardes, restaurations, intégrations de fichiers d'historique) sont consignées dans ce fichier, qu’elles aient été planifiées ou exécutées manuellement. La date et l'heure auxquelles ces opérations ont eu lieu sont également notées dans le journal.

The backup journal is named "Backup Journal[001].txt" and is placed in the "Logs" folder of the project. Le journal de sauvegarde peut être ouvert avec n'importe quel éditeur de texte.

#### Gestion de la taille du journal de sauvegarde

Dans certaines stratégies de sauvegarde (par exemple, dans le cas où de nombreuses pièces jointes sont sauvegardées), le journal de sauvegarde peut rapidement atteindre une taille importante. Deux mécanismes peuvent être utilisés pour gérer cette taille :

- **Sauvegarde automatique** : Avant chaque sauvegarde, l'application examine la taille du fichier backup journal courant. Si elle est supérieure à 10 Mo, le fichier courant est archivé et un nouveau fichier est créé avec le numéro [xxx] incrémenté, par exemple "Backup Journal[002] .txt”. Une fois le numéro de fichier 999 atteint, la numérotation reprend à 1 et les fichiers existants seront remplacés.
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the *Backup.4DSettings* file of the project. Par défaut, cette clé est définie sur True. Si vous définissez la valeur de cette clé sur False, seules les informations principales sont stockées dans le journal de sauvegarde : la date et l'heure du début de l'opération et les éventuelles erreurs générées. Les clés XML concernant la configuration de la sauvegarde sont décrites dans le manuel *Sauvegarde des clés XML 4D*.



## backupHistory.json

All information regarding the latest backup and restore operations are stored in the application's **backupHistory.json** file. Ce dernier enregistre le chemin de chaque fichier sauvegardé (y compris les pièces jointes) ainsi que le numéro, la date, l'heure, la durée et le statut de chaque opération. Afin de limiter la taille du fichier, le nombre d'opérations enregistrées et le nombre de sauvegardes disponibles ("Keep only the last X backup files") définies dans les propriétés de sauvegarde est identique.

Le fichier **backupHistory.json** se situe dans le dossier de destination de sauvegarde courant. Vous pouvez obtenir le chemin de ce fichier à l'aide de la déclaration suivante :

```4d
$backupHistory:=Get 4D file(Backup history file)
```
> **ATTENTION**  
> La suppression ou le déplacement du fichier **backupHistory.json** entraînera la réinitialisation du prochain numéro de sauvegarde.
> Le fichier **backupHistory.json** est formaté afin d'être utilisé par l'application 4D. Si vous recherchez un état lisible sur les opérations de sauvegarde, le journal de sauvegarde sera plus précis. 
