---
id: restore
title: Restitution
---

4D allows you to restore entire sets of application data in case of any incidents, regardless of the cause of the incident. Deux catégories principales d’incidents peuvent se produire :

- The unexpected stoppage of an application while in use. Cet incident peut se produire à cause d’une coupure de courant, la panne d’un élément du système, etc. In this case, depending on the current state of the data cache at the moment of the incident, the restore of the application can require different operations:
    - If the cache was empty, the application opens normally. Any changes made in the application were recorded. Ce cas ne nécessite aucune opération particulière.
    - Si le cache contenait des opérations, le fichier de données est intact mais il est nécessaire d’intégrer le fichier d’historique courant.
    - Si le cache était en cours d’écriture, le fichier de données est probablement endommagé. Il est nécessaire de restituer la dernière sauvegarde et d’intégrer le fichier d’historique courant.

- The loss of application file(s). This incident can occur because of defective sectors on the disk containing the application, a virus, manipulation error, etc. Il est nécessaire de restituer la dernière sauvegarde puis d’intégrer éventuellement l’historique courant. To find out if an application was damaged following an incident, simply relaunch the application using 4D. Le programme effectue un auto-diagnostic et précise les opérations de réparation à effectuer. En mode automatique, ces opérations sont effectuées directement, sans intervention de l’utilisateur. If a regular backup strategy was put into place, the 4D restore tools will allow you to recover (in most cases) the application in the exact state it was in before the incident.

> 4D can launch procedures automatically to recover applications following incidents. These mechanisms are managed using two options available on the **Backup/Backup & Restore** page of the Settings. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.  
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the data file using the "rollback" function in the log file. Cette fonction est accessible dans la Page [Retour arrière](MSC/rollback.md) du CSM.


## Restitution manuelle d’une sauvegarde (dialogue standard)

Vous pouvez restituer manuellement le contenu d’une archive générée par le module de sauvegarde. Une restitution manuelle peut être nécessaire par exemple pour restituer la totalité du contenu d’une archive (fichiers de structure et/ou fichiers joints inclus) ou à des fins de recherche sur des archives. La restitution manuelle peut éventuellement s’accompagner de l’intégration de l’historique courant.

La restitution manuelle des sauvegardes peut être réalisée soit via une boîte de dialogue standard d’ouverture de document, soit via la page [“Restitution”](MSC/restore) du Centre de sécurité et de maintenance (CSM). La restitution via une boîte de dialogue standard permet de restituer n’importe quelle archive. On the other hand, only archives associated with the open application can be restored.

To restore an application manually via a standard dialog box:

1. Lancez l’application 4D et choisissez la commande **Restituer...** dans le menu **Fichier**. It is not mandatory that an application project be open. OU BIEN Exécutez la commande `RESTORE` depuis une méthode de 4D. Une boîte de dialogue standard d’ouverture de fichiers apparaît.
2. Désignez le fichier de sauvegarde (.4bk) ou le fichier de sauvegarde de l’historique (.4bl) à restituer et cliquez sur **Ouvrir**. Un boîte de dialogue apparaît, vous permettant de désigner l’emplacement auquel vous souhaitez que les fichiers soient restitués . Par défaut, 4D restitue les fichiers dans un dossier nommé *“Nomarchive”* (sans extension) placé à côté de l’archive. Vous pouvez afficher le chemin :

![](assets/en/Backup/backup07.png)

Vous pouvez également cliquer sur le bouton **[...]** et indiquer un autre emplacement.
3. Cliquez sur le bouton **Restituer**. 4D extrait tous les fichiers de la sauvegarde à l’emplacement défini. Si le fichier d’historique courant ou un fichier de sauvegarde d’historique ayant le même numéro que le fichier de sauvegarde est stocké dans le même dossier, 4D examine son contenu. S’il contient des opérations non présentes dans le fichier de données, le programme propose de l’intégrer. L’intégration est effectuée automatiquement si l’option **d’intégration automatique de l’historique** est cochée (cf. paragraphe [Restitution automatique](settings.md#automatic-restore)).

4.(Optional) Click **OK** to integrate the log file into the restored application. Si la restitution et l’intégration se sont déroulées correctement, 4D affiche une boîte de dialogue indiquant que l’opération a réussi.
5. Cliquez sur **OK**.

Le dossier d’arrivée est affiché. Lors de la restitution, 4D place tous les fichiers sauvegardés dans ce dossier, quelle que soit la position des fichiers originaux sur le disque au moment de la sauvegarde. De cette façon, vous retrouverez plus facilement vos fichiers.

> Tout contenu lié au fichier de données (dossier files et `Settings`) est automatiquement restauré dans un sous-dossier `Data`du dossier de destination.


## Restitution manuelle d’une sauvegarde (CSM)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).


## Intégration manuelle de l’historique

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](assets/en/Backup/backup08.png)

> Pour que ce mécanisme fonctionne, 4D doit être en mesure d’accéder au fichier d’historique à son emplacement courant.

Vous pouvez choisir d’intégrer ou non les données de l’historique courant. Ne pas intégrer l’historique courant permet notamment d’éviter de reproduire des erreurs effectuées sur les données.