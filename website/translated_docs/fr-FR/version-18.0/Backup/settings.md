---
id: version-18.0-settings
title: Paramètres de sauvegarde
original_id: settings
---

Les paramètres de sauvegarde sont définis sur trois pages dans la boîte de dialogue des Propriétés de la base. Vous pouvez définir :

- la périodicité des sauvegardes automatiques
- les fichiers à inclure dans chaque sauvegarde
- les fonctionnalités avancées permettant d'exécuter des tâches automatiques

> Settings defined in this dialog box are written in the *Backup.4DSettings* file, stored in the [Settings folder](Project/architecture.md#settings-folder).

## Sauvegardes périodiques

Vous pouvez automatiser les sauvegardes de vos bases ouvertes avec 4D ou 4D Server (même lorsqu’aucun poste distant n’est connecté). Le principe consiste à définir une fréquence de sauvegarde (en heures, jours, semaines ou mois) ; à chaque échéance, 4D déclenche automatiquement une sauvegarde en tenant compte des paramètres de sauvegarde courants.

Si l’application n’était pas lancée au moment théorique de la sauvegarde, 4D considère au lancement suivant que la sauvegarde a échoué et applique les paramétrages adéquats, définis dans les Propriétés de la base (cf. paragraphe [En cas de problème au cours de la sauvegarde](backup.md#handling-backup-issues)).

The scheduler backup settings are defined on the **Backup/Scheduler** page of the Database Settings:

![](assets/en/Backup/backup02.png)

Les options regroupées dans cet onglet permettent de définir et de paramétrer des sauvegardes périodiques automatiques de la base. Vous pouvez choisir un paramétrage standard rapide ou personnaliser entièrement la périodicité. Various options appear depending on the choice made in the **Automatic Backup** menu:

- **Never**: The scheduled backup feature is disabled.
- **Every Hour**: Programs an automatic backup every hour, starting with the next hour.
- **Every Day**: Programs an automatic backup every day. Une zone de saisie vous permet d'indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
- **Every Week**: Programs an automatic backup every week. Deux zones de saisie supplémentaires vous permettent d'indiquer le jour et l'heure de la sauvegarde.
- **Every Month**: Programs an automatic backup every month. Deux zones de saisie supplémentaires vous permettent d'indiquer le jour du mois et l'heure de la sauvegarde.
- **Personalized**: Used to configure "tailormade" automatic backups. Lorsque vous sélectionnez cette, plusieurs zones de saisie supplémentaires apparaissent :
    + **Every X hour(s)**: Allows programming backups on an hourly basis. Vous pouvez saisir une valeur comprise entre 1 et 24.
    - **Every X day(s) at x**: Allows programming backups on a daily basis. Saisissez par exemple 1 si vous souhaitez une sauvegarde quotidienne. Lorsque vous cochez cette option, vous devez indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
    - **Every X week(s) day at x**: Allows programming backups on a weekly basis. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer le ou les jour(s) de la semaine et l’heure à laquelle chaque sauvegarde doit être déclenchée. Vous pouvez cocher un ou plusieurs jour(s) de la semaine. Par exemple, vous pouvez utiliser cette option pour définir deux sauvegardes hebdomadaires : une le mercredi et une le vendredi.
    - **Every X month(s), Xth Day at x**: Allows programming backups on a monthly basis. Saisissez 1 si vous souhaitez une sauvegarde mensuelle. Lorsque vous cochez cette option, vous devez indiquer le jour de chaque mois auquel la sauvegarde doit être déclenchée, ainsi que l’heure de déclenchement.

## Configuration

La Page Sauvegarde/Configuration des Propriétés de la base permet de désigner les fichiers à sauvegarder, l’emplacement des fichiers de sauvegarde et le fichier d’historique. Ces paramètres sont spécifiques à chaque base de données ouverte par l’application 4D.

![](assets/en/Backup/backup03.png)

> **4D Server:** These parameters can only be set from the 4D Server machine.

### Contenu
Cette zone permet de désigner les fichiers et/ou dossiers à copier lors de la prochaine sauvegarde.

- **Data**: Database data file. Lorsque cette option est cochée, le fichier d’historique courant de la base, s’il existe, est sauvegardé en même temps que les données.
- **Structure**: Database project folders and files. Dans le cas de bases compilées, cette option permet de sauvegarder le fichier .4dz.
- **User Structure File (only for binary database)**: *deprecated feature*
- **Attachments**: This area allows you to specify a set of files and/or folders to be backed up at the same time as the database. Ces fichiers peuvent être de tout type (documents ou modèles de plug-ins, étiquettes, états, images, etc.). Vous pouvez désigner soit des fichiers individuels, soit des dossiers dont le contenu sera intégralement sauvegardé. Chaque élément joint est listé avec son chemin d’accès complet dans la zone “Fichiers joints”.
    - **Delete**: Removes the selected file from the list of attached files.
    - **Add folder...**: Displays a dialog box that allows selecting a folder to add to the backup. En cas de restitution, le dossier sera récupéré avec sa structure interne. Vous pouvez désigner tout dossier ou volume connecté au poste, à l’exception du dossier contenant les fichiers de la base.
    - **Add file...**: Displays a dialog box that allows you to select a file to add to the backup.


### Emplacement des fichiers de sauvegarde

Cette zone permet de visualiser et de modifier l’emplacement auquel seront stockés les fichiers de sauvegarde ainsi que les fichiers de sauvegarde du fichier d’historique (le cas échéant).

Pour visualiser l’emplacement des fichiers, cliquez dans la zone afin d’afficher leur chemin d’accès sous forme de pop up menu.

To modify the location where these files are stored, click the **...** button. Une boîte de dialogue de sélection de dossier apparaît, vous permettant de désigner un dossier ou un volume devant accueillir les sauvegardes. Les zones “Espace utilisé” et “Espace libre” sont automatiquement mises à jour et indiquent l’espace disque disponible sur le volume du dossier sélectionné.

### Gestion du fichier d'historique

The **Use Log** option, when checked, indicates that the database uses a log file. Son chemin d’accès est précisé au-dessous de l’option. Lorsque cette option est cochée, il n’est pas possible d’ouvrir la base sans fichier d’historique.

By default, any database created with 4D uses a log file (option checked in the **General Page** of the **Preferences**). The log file is named *data.journal* and is placed in the Data folder.

> L’activation d’un nouveau fichier d’historique nécessite que les données de la base soient auparavant sauvegardées. Lorsque vous cochez cette option, un message vous informe qu’une sauvegarde est nécessaire. La création du fichier d’historique est différée et ne sera effective qu’après la prochaine sauvegarde de la base.


## Sauvegarde et restitution

La modification des options de sauvegarde et de restauration est facultative. Leurs valeurs par défaut correspondent à une utilisation standard de la fonction.

![](assets/en/Backup/backup04.png)

### Paramètres généraux

- **Keep only the last X backup files**: This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. Le principe de fonctionnement est le suivant : après avoir terminé la sauvegarde courante, 4D efface l’archive la plus ancienne si celle-ci est localisée au même endroit que l’archive à sauvegarder et porte le même nom (vous pouvez, pour des raisons d’économie de place, demander que l’archive la plus ancienne soit effacée avant la sauvegarde). Si, par exemple, le nombre de jeux est fixé à 3, les trois premières sauvegardes créent successivement les archives MaBase-0001, MaBase-0002 et MaBase-0003. Lors de la quatrième sauvegarde, l’archive MaBase-0004 est créée alors que l’archive MaBase-0001 est supprimée. Par défaut, le mécanisme de suppression des jeux est activé et 4D conserve 3 jeux de sauvegarde. Pour ne pas activer le mécanisme, désélectionnez l’option.
> Ce paramètre concerne à la fois les jeux de sauvegarde de la base et les jeux de sauvegarde de l’historique.

- **Backup only if the data file has been modified**: When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted in the database since the last backup. Dans le cas contraire, la sauvegarde prévue est annulée et reportée à l’échéance suivante. Aucune erreur n’est générée ; le report est toutefois indiqué dans le Journal des sauvegardes. Cette option permet notamment d’économiser du temps machine sur la sauvegarde de bases principalement utilisées en consultation. A noter qu'elle ne prend pas en compte les éventuelles modifications apportées au fichier de structure ou aux fichiers joints.
> Ce paramètre concerne à la fois les jeux de sauvegarde de la base et les jeux de sauvegarde de l’historique.

- **Delete oldest backup file before/after backup**: This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (**before** option) or whether the deletion should take place once the backup is completed (**after** option). Pour que ce mécanisme fonctionne, l’archive la plus ancienne ne doit pas avoir été renommée ou déplacée.

- **If backup fails**: This option allows setting the mechanism used to handle failed backups (backup impossible). Lorsqu’une sauvegarde est impossible, 4D permet d’effectuer une nouvelle tentative.
    -  **Retry at the next scheduled date and time**: This option only makes sense when working with scheduled automatic backups. Elle revient à annuler la sauvegarde ayant échoué. Une erreur est générée.
    - **Retry after X second(s), minute(s) or hour(s)**: When this option is checked, a new backup attempt is executed after the wait period. Ce mécanisme permet d’anticiper certaines circonstances bloquant la sauvegarde. Vous pouvez fixer un délai en secondes, minutes ou heures à l’aide du menu correspondant. Si la nouvelle tentative échoue également, une erreur est générée et l’échec est inscrit dans les zones de statut de la dernière sauvegarde et dans le Journal des sauvegardes.
    - **Cancel the operation after X attempts**: This parameter is used to set the maximum number of failed backup attempts. Si, à l’issue du nombre d’essais défini, la sauvegarde n’a pas pu être effectuée, elle est annulée et l’erreur 1401 est générée (“Le nombre maximal de tentatives de sauvegarde est atteint, la sauvegarde automatique est temporairement désactivée”). Dans ce cas, aucune nouvelle sauvegarde automatique ne sera lancée tant que l’application n’aura pas été redémarrée ou qu’une sauvegarde manuelle n’aura été effectuée avec succès. Ce paramètre est utile notamment pour éviter qu’en cas d’impossibilité prolongée de la sauvegarde (nécessitant une intervention humaine), l’application n’effectue inutilement de nombreuses tentatives au détriment de ses performances. Par défaut, ce paramètre n’est pas coché.

> 4D considère qu’une sauvegarde a échoué si la base n’était pas lancée au moment théorique de la sauvegarde automatique périodique.

### Archive
Ces options s’appliquent aux fichiers de sauvegarde principaux et aux fichiers de sauvegarde de l’historique.

- **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. Ce fonctionnement permet par exemple de stocker une sauvegarde sur plusieurs volumes (DVDs, usb, etc.). Au moment de la restitution, 4D fusionnera automatiquement les segments. Chaque segment est appelé MaBase[xxxx-yyyy].4BK, où xxxx représente le numéro de la sauvegarde et yyyy celui du segment. Par exemple, les trois segments de la sixième sauvegarde de la base MaBase seront appelés MaBase[0006-0001].4BK, MaBase[0006-0002].4BK et MaBase[0006-0003].4BK. The **Segment Size** menu is a combo box that allows you to set the size in MB for each segment of the backup. Vous pouvez choisir une des tailles prédéfinies ou saisir une taille spécifique entre 0 et 2048. If you pass 0, no segmentation occurs (this is the equivalent of passing **None**).

- **Compression Rate** By default, 4D compresses backups to help save disk space. En contrepartie, la phase de compression des fichiers peut ralentir sensiblement les sauvegardes dans le cas de la manipulation de gros volumes de données. The **Compression Rate** option allows you to adjust file compression:
    - **None:** No file compression is applied. La sauvegarde peut être sensiblement plus rapide mais les fichiers d’archives sont plus volumineux sur le disque.
    - **Fast** (default): This option is a compromise between backup speed and archive size.
- **Compact**: The maximum compression rate is applied to archives. Les fichiers d’archives prennent le moins de place possible sur le disque mais la sauvegarde peut être sensiblement ralentie.

- **Interlacing Rate and Redundancy Rate** 4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. Vous pouvez paramétrer ces mécanismes en fonction de vos besoins. The menus for these options contain rates of **Low**, **Medium**, **High** and **None** (default).
    - **Interlacing Rate**: Interlacing consists of storing data in non-adjacent sectors in order to limit risks in the case of sector damage. Plus le taux est élevé, plus la sécurité est élevée ; en contrepartie, le traitement des données consomme davantage de mémoire.
    - **Redundancy Rate**: Redundancy allows securing data present in a file by repeating the same information several times. Plus le taux est élevé, plus le fichier est sécurisé, mais plus le stockage est lent et la taille du fichier importante.


### Restitution automatique

- **Restore last backup if database is damaged**: When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the database, if an anomaly is detected (corrupted file, for example) during database launch. Aucune intervention de l’utilisateur n’est requise ; l’opération est cependant consignée dans le Journal des sauvegardes.
> En cas de restitution automatique, seul le fichier de données est restitué. Si vous souhaitez récupérer les fichiers joints ou le fichier de structure, vous devez effectuer une restitution manuelle.

- **Integrate last log file if database is incomplete**: When this option is checked, the program automatically integrates the log file when opening or restoring the database.
    - Lors de l’ouverture de la base, l’historique courant est automatiquement intégré si 4D détecte que des opérations stockées dans l’historique ne sont pas présentes dans les données. Cette situation se produit par exemple lorsqu’une panne de courant a lieu alors que des opérations non encore écrites sur le disque se trouvaient dans le cache de données.
    - Lors de la restitution de la base, si le fichier d’historique courant ou un fichier de sauvegarde d’historique ayant le même numéro que le fichier de sauvegarde est stocké dans le même dossier, 4D examine son contenu. S’il contient des opérations non présentes dans le fichier de données, le programme l’intègre automatiquement.

Aucune boîte de dialogue n’est présentée à l’utilisateur, l’opération est entièrement automatique. Le but est de faciliter au maximum la remise en route de l’exploitation. L’opération est consignée dans le Journal des sauvegardes.