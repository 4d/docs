---
id: restore
title: Restitution
---

4D vous permet de récupérer l’intégralité des données d’une application en cas d’incident, quelles que soient ses causes. Deux catégories principales d’incidents peuvent se produire :

- L’arrêt inopiné de l'application pendant son exploitation. Cet incident peut se produire à cause d’une coupure de courant, la panne d’un élément du système, etc. Dans ce cas, en fonction de l’état courant du cache de données au moment de l’incident, la récupération de l'application peut nécessiter différentes opérations :
  - Si le cache était vide, l'application s’ouvre normalement. Toutes les modifications apportées à l'application ont été enregistrées. Ce cas ne nécessite aucune opération particulière.
  - Si le cache contenait des opérations, le fichier de données est intact mais il est nécessaire d’intégrer le fichier d’historique courant.
  - Si le cache était en cours d’écriture, le fichier de données est probablement endommagé. Il est nécessaire de restituer la dernière sauvegarde et d’intégrer le fichier d’historique courant.

- La perte de fichier(s) de l'application. Cet incident peut être causé par des secteurs défectueux sur le disque contenant l'application, un virus, une erreur de manipulation, etc. Il est nécessaire de restituer la dernière sauvegarde puis d’intégrer éventuellement l’historique courant. Pour savoir si une application a été endommagée à la suite d’un incident, il suffit de la relancer avec 4D. Le programme effectue un auto-diagnostic et précise les opérations de réparation à effectuer. En mode automatique, ces opérations sont effectuées directement, sans intervention de l’utilisateur. Si une stratégie de sauvegarde régulière a été mise en place, les outils de récupération de 4D vous permettront (dans la plupart des cas) de retrouver l'application dans l’état exact où elle se trouvait avant l’incident.

> 4D peut lancer automatiquement des procédures de récupération des applications après incident. These mechanisms are managed using two options available on the **Backup/Backup & Restore** page of the Settings. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.\
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the data file using the "rollback" function in the log file. This function is available on the [Rollback](MSC/rollback.md) page of the MSC.

## Restitution manuelle d’une sauvegarde (dialogue standard)

Vous pouvez restituer manuellement le contenu d’une archive générée par le module de sauvegarde. Une restitution manuelle peut être nécessaire par exemple pour restituer la totalité du contenu d’une archive (fichiers de structure et/ou fichiers joints inclus) ou à des fins de recherche sur des archives. La restitution manuelle peut éventuellement s’accompagner de l’intégration de l’historique courant.

The manual restore of backups can be carried out either via the standard Open document dialog box, or via the [Restore](../MSC/restore.md) page of the MSC. La restitution via une boîte de dialogue standard permet de restituer n’importe quelle archive. En revanche, seules les archives associées à l'application ouverte peuvent être restituées.

Pour restituer manuellement une application via une boîte de dialogue standard :

1. Choose **Restore...** in the 4D application **File** menu.
   Il n'est pas obligatoire qu'un projet d'application soit ouvert.
   OR
   Execute the `RESTORE` command from a 4D method.
   Une boîte de dialogue standard d’ouverture de fichiers apparaît.
2. Select a backup file (.4bk) or a log backup file (.4bl) to be restored and click **Open**.
   Un boîte de dialogue apparaît, vous permettant de désigner l’emplacement auquel vous souhaitez que les fichiers soient restitués . By default, 4D restores the files in a folder named _Archivename_ (no extension) located next to the archive. Vous pouvez afficher le chemin :

![](../assets/en/Backup/backup07.png)

You can also click on the **[...]** button to specify a different location.
3. Click on the **Restore** button.
4D extrait tous les fichiers de la sauvegarde à l’emplacement défini.
Si le fichier d’historique courant ou un fichier de sauvegarde d’historique ayant le même numéro que le fichier de sauvegarde est stocké dans le même dossier, 4D examine son contenu. S’il contient des opérations non présentes dans le fichier de données, le programme propose de l’intégrer. Integration is done automatically if the **Integrate last log file...** option is checked (see [Automatic Restore](settings.md#automatic-restore)).

4.(Optional) Click **OK** to integrate the log file into the restored application.
Si la restitution et l’intégration se sont déroulées correctement, 4D affiche une boîte de dialogue indiquant que l’opération a réussi.
5. Click **OK**.

Le dossier d’arrivée est affiché. Lors de la restitution, 4D place tous les fichiers sauvegardés dans ce dossier, quelle que soit la position des fichiers originaux sur le disque au moment de la sauvegarde. De cette façon, vous retrouverez plus facilement vos fichiers.

> Any content related to the data file (files and `Settings` folder) are automatically restored in a `Data` subfolder within the destination folder.

## Restitution manuelle d’une sauvegarde (CSM)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).

## Intégration manuelle de l’historique

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](../assets/en/Backup/backup08.png)

> Pour que ce mécanisme fonctionne, 4D doit être en mesure d’accéder au fichier d’historique à son emplacement courant.

Vous pouvez choisir d’intégrer ou non les données de l’historique courant. Ne pas intégrer l’historique courant permet notamment d’éviter de reproduire des erreurs effectuées sur les données.
