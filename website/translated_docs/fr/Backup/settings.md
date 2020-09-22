---
id: settings
title: Paramètres de sauvegarde
---

Les paramètres de sauvegarde sont définis sur trois pages dans la boîte de dialogue des Propriétés. Vous pouvez définir :

- la périodicité des sauvegardes automatiques
- les fichiers à inclure dans chaque sauvegarde
- les fonctionnalités avancées permettant d'exécuter des tâches automatiques

> Les propriétés définies dans cette boîte de dialogue sont écrits dans le fichier *Backup.4DSettings*, stocké dans le [dossier Settings](Project/architecture.md#settings-folder).

## Sauvegardes périodiques

Vous pouvez automatiser les sauvegardes de vos applications ouvertes avec 4D ou 4D Server (même lorsqu’aucun poste distant n’est connecté). Le principe consiste à définir une fréquence de sauvegarde (en heures, jours, semaines ou mois) ; à chaque échéance, 4D déclenche automatiquement une sauvegarde en tenant compte des paramètres de sauvegarde courants.

Si l’application n’était pas lancée au moment théorique de la sauvegarde, 4D considère au lancement suivant que la sauvegarde a échoué et applique les paramétrages adéquats, définis dans les Propriétés (cf. paragraphe [En cas de problème au cours de la sauvegarde](backup.md#handling-backup-issues)).

Les paramètres des sauvegardes périodiques sont définis dans la Page **Sauvegarde/Périodicité** des Propriétés :

![](assets/en/Backup/backup02.png)

Les options regroupées dans cet onglet permettent de définir et de paramétrer des sauvegardes périodiques automatiques de l'application. Vous pouvez choisir un paramétrage standard rapide ou personnaliser entièrement la périodicité. Diverses options apparaissent en fonction de la valeur définie dans le menu **Sauvegarde automatique** :

- **Jamais** : la fonction de sauvegarde périodique est inactivée.
- **Toutes les heures** : programme une sauvegarde automatique par heure, à partir de la prochaine heure.
- **Tous les jours** : programme une sauvegarde automatique par jour. Une zone de saisie vous permet d'indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
- **Toutes les semaines** : programme une sauvegarde automatique par semaine. Deux zones de saisie supplémentaires vous permettent d'indiquer le jour et l'heure de la sauvegarde.
- **Tous les mois** : programme une sauvegarde automatique par mois. Deux zones de saisie supplémentaires vous permettent d'indiquer le jour du mois et l'heure de la sauvegarde.
- **Personnalisée** : permet de configurer des sauvegardes périodiques "sur-mesure". Lorsque vous sélectionnez cette, plusieurs zones de saisie supplémentaires apparaissent :
    + **Toutes les N heure(s)** : permet de programmer des sauvegardes sur une base horaire. Vous pouvez saisir une valeur comprise entre 1 et 24.
    - **Tous les N jour(s) à N** : permet de programmer des sauvegardes sur une base journalière. Saisissez par exemple 1 si vous souhaitez une sauvegarde quotidienne. Lorsque vous cochez cette option, vous devez indiquer l’heure à laquelle la sauvegarde doit être déclenchée.
    - **Toutes les N semaine(s), jour à N** : permet de programmer des sauvegardes sur une base hebdomadaire. Saisissez 1 si vous souhaitez une sauvegarde hebdomadaire. Lorsque vous cochez cette option, vous devez indiquer le ou les jour(s) de la semaine et l’heure à laquelle chaque sauvegarde doit être déclenchée. Vous pouvez cocher un ou plusieurs jour(s) de la semaine. Par exemple, vous pouvez utiliser cette option pour définir deux sauvegardes hebdomadaires : une le mercredi et une le vendredi.
    - **Tous les N mois, Ne jour à N** : permet de programmer des sauvegardes sur une base mensuelle. Saisissez 1 si vous souhaitez une sauvegarde mensuelle. Lorsque vous cochez cette option, vous devez indiquer le jour de chaque mois auquel la sauvegarde doit être déclenchée, ainsi que l’heure de déclenchement.

## Configuration

La Page Sauvegarde/Configuration des Propriétés permet de désigner les fichiers à sauvegarder, l’emplacement des fichiers de sauvegarde et le fichier d’historique. These parameters are specific to each application opened by 4D or 4D Server.

![](assets/en/Backup/backup03.png)

> **4D Server** : Ces paramètres peuvent être définis depuis le poste 4D Server uniquement.

### Contenu
Cette zone permet de désigner les fichiers et/ou dossiers à copier lors de la prochaine sauvegarde.

- **Data** : fichier de données de l'application. Lorsque cette option est cochée, les éléments suivants sont automatiquement sauvegardés en même temps que les données :
    - le fichier journal courant de l'application (le cas échéant),
    - le dossier `Settings` complet situé [à côté du fichier de données](Project/architecture.md#settings-folder) (le cas échéant), c'est-à-dire *les paramètres utilisateur pour les données*.
- **Structure**: Application project folders and files. In cases where projects are compiled, this option allows you to backup the .4dz file. Lorsque cette option est cochée, le dossier complet `Settings` situé [au même niveau que le dossier Project](Project/architecture.md#settings-folder-1), c'est-à-dire les *paramètres utilisateur*, est automatiquement sauvegardé.
- **Fichier de structure utilisateur (uniquement pour les bases binaires)** : *fonctionnalité obsolète*
- **Attachments**: This area allows you to specify a set of files and/or folders to be backed up at the same time as the application. Ces fichiers peuvent être de tout type (documents ou modèles de plug-ins, étiquettes, états, images, etc.). Vous pouvez désigner soit des fichiers individuels, soit des dossiers dont le contenu sera intégralement sauvegardé. Chaque élément joint est listé avec son chemin d’accès complet dans la zone “Fichiers joints”.
    - **Supprimer** : retire de la liste des fichiers joints l’élément sélectionné.
    - **Ajouter dossier...** : affiche une boîte de dialogue permettant de sélectionner un dossier à joindre à la sauvegarde. En cas de restitution, le dossier sera récupéré avec sa structure interne. You can select any folder or volume connected to the machine, with the exception of the folder containing the application files.
    - **Ajouter fichier...** : affiche une boîte de dialogue permettant de sélectionner un fichier à joindre à la sauvegarde.


### Emplacement des fichiers de sauvegarde

Cette zone permet de visualiser et de modifier l’emplacement auquel seront stockés les fichiers de sauvegarde ainsi que les fichiers de sauvegarde du fichier d’historique (le cas échéant).

Pour visualiser l’emplacement des fichiers, cliquez dans la zone afin d’afficher leur chemin d’accès sous forme de pop up menu.

Pour modifier l’emplacement auquel ces fichiers devront être enregistrés, cliquez sur le bouton **[...]**. Une boîte de dialogue de sélection de dossier apparaît, vous permettant de désigner un dossier ou un volume devant accueillir les sauvegardes. Les zones “Espace utilisé” et “Espace libre” sont automatiquement mises à jour et indiquent l’espace disque disponible sur le volume du dossier sélectionné.

### Gestion du fichier d'historique

The **Use Log** option, when checked, indicates that the application uses a log file. Son chemin d’accès est précisé au-dessous de l’option. When this option is checked, it is not possible to open the application without a log file.

By default, any project created with 4D uses a log file (option **Use Log File** checked in the **General Page** of the **Preferences**). Le fichier d’historique est nommé par défaut *data.journal* et est placé dans le dossier Data.

> Activating a new log file requires the data of the application to be backed up beforehand. Lorsque vous cochez cette option, un message vous informe qu’une sauvegarde est nécessaire. The creation of the log file is postponed and it will actually be created only after the next backup of the application.


## Sauvegarde et restitution

La modification des options de sauvegarde et de restauration est facultative. Leurs valeurs par défaut correspondent à une utilisation standard de la fonction.

![](assets/en/Backup/backup04.png)

### Paramètres généraux

- **Conserver uniquement les N derniers fichiers de sauvegarde** : ce paramètre permet d’activer et de configurer le mécanisme de suppression des fichiers de sauvegarde les plus anciens, afin d’éviter tout risque de saturation du volume. Le principe de fonctionnement est le suivant : après avoir terminé la sauvegarde courante, 4D efface l’archive la plus ancienne si celle-ci est localisée au même endroit que l’archive à sauvegarder et porte le même nom (vous pouvez, pour des raisons d’économie de place, demander que l’archive la plus ancienne soit effacée avant la sauvegarde). Si, par exemple, le nombre de jeux est fixé à 3, les trois premières sauvegardes créent successivement les archives MaBase-0001, MaBase-0002 et MaBase-0003. Lors de la quatrième sauvegarde, l’archive MaBase-0004 est créée alors que l’archive MaBase-0001 est supprimée. Par défaut, le mécanisme de suppression des jeux est activé et 4D conserve 3 jeux de sauvegarde. Pour ne pas activer le mécanisme, désélectionnez l’option.
> This parameter concerns both application and log file backups.

- **Backup only if the data file has been modified**: When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted since the last backup. Dans le cas contraire, la sauvegarde prévue est annulée et reportée à l’échéance suivante. Aucune erreur n’est générée ; le report est toutefois indiqué dans le Journal des sauvegardes. This option also allows saving machine time for the backup of applications principally used for viewing purposes. A noter qu'elle ne prend pas en compte les éventuelles modifications apportées au fichier de structure ou aux fichiers joints.
> This parameter concerns both application and log file backups.

- **Effacer la sauvegarde la plus ancienne avant sauvegarde / après sauvegarde** : cette option n’est utilisée que si l’option “Conserver uniquement les N derniers fichiers de sauvegarde” est cochée. Elle vous permet de spécifier si 4D doit commencer par effacer l’archive la plus ancienne avant d’effectuer une sauvegarde (option **avant**) ou si l’effacement doit être effectué après la sauvegarde (option **après**). Pour que ce mécanisme fonctionne, l’archive la plus ancienne ne doit pas avoir été renommée ou déplacée.

- **Si la sauvegarde échoue** : cette option permet de définir le mécanisme de prise en charge des échecs des sauvegardes (sauvegarde impossible). Lorsqu’une sauvegarde est impossible, 4D permet d’effectuer une nouvelle tentative.
    -  **Réessayer à la nouvelle date et heure programmée** : cette option n’a de sens que dans le cadre de sauvegardes automatiques périodiques. Elle revient à annuler la sauvegarde ayant échoué. Une erreur est générée.
    - **Réessayer dans N seconde(s), minute(s) ou heure(s)** : lorsque cette option est cochée, une nouvelle tentative de sauvegarde est effectuée à l’issue du délai défini. Ce mécanisme permet d’anticiper certaines circonstances bloquant la sauvegarde. Vous pouvez fixer un délai en secondes, minutes ou heures à l’aide du menu correspondant. Si la nouvelle tentative échoue également, une erreur est générée et l’échec est inscrit dans les zones de statut de la dernière sauvegarde et dans le Journal des sauvegardes.
    - **Annuler l’opération au bout de N tentatives** : ce paramètre permet de définir le nombre de fois que le module de sauvegarde réessaiera de lancer la sauvegarde en cas d’échec. Si, à l’issue du nombre d’essais défini, la sauvegarde n’a pas pu être effectuée, elle est annulée et l’erreur 1401 est générée (“Le nombre maximal de tentatives de sauvegarde est atteint, la sauvegarde automatique est temporairement désactivée”). Dans ce cas, aucune nouvelle sauvegarde automatique ne sera lancée tant que l’application n’aura pas été redémarrée ou qu’une sauvegarde manuelle n’aura été effectuée avec succès. Ce paramètre est utile notamment pour éviter qu’en cas d’impossibilité prolongée de la sauvegarde (nécessitant une intervention humaine), l’application n’effectue inutilement de nombreuses tentatives au détriment de ses performances. Par défaut, ce paramètre n’est pas coché.

> 4D considers a backup as failed if the application was not launched at the time when the scheduled automatic backup was set to be carried out.

### Archive
Ces options s’appliquent aux fichiers de sauvegarde principaux et aux fichiers de sauvegarde de l’historique.

- **Taille du segment (Mo)** 4D vous permet de segmenter les archives, c’est-à-dire de les découper en morceaux de taille fixe. Ce fonctionnement permet par exemple de stocker une sauvegarde sur plusieurs volumes (DVDs, usb, etc.). Au moment de la restitution, 4D fusionnera automatiquement les segments. Each segment is called MyApplication[xxxx-yyyy].4BK, where xxxx is the backup number and yyyy is the segment number. For example, the three segments of the MyApplication backup are called MyApplication[0006-0001].4BK, MyApplication[0006-0002].4BK and MyApplication[0006-0003].4BK. Le menu **Taille du segment** est une combo box permettant de définir la taille en Mo de chaque segment de sauvegarde. Vous pouvez choisir une des tailles prédéfinies ou saisir une taille spécifique entre 0 et 2048. Si vous passez 0, aucune segmentation n’est effectuée (équivaut à la valeur **Aucune**).

- **Taux de compression** Par défaut, les sauvegardes sont compressées par 4D. En contrepartie, la phase de compression des fichiers peut ralentir sensiblement les sauvegardes dans le cas de la manipulation de gros volumes de données. L’option **Taux de compression** vous permet d’ajuster la compression :
    - **Aucun** : aucune compression n’est appliquée. La sauvegarde peut être sensiblement plus rapide mais les fichiers d’archives sont plus volumineux sur le disque.
    - **Normal** (par défaut) : cette option constitue un compromis vitesse de sauvegarde/taille des archives.
- **Elevé** : le taux de compression maximal est appliqué aux archives. Les fichiers d’archives prennent le moins de place possible sur le disque mais la sauvegarde peut être sensiblement ralentie.

- **Taux d’entrelacement et Taux de redondance** 4D peut générer des archives à l’aide d’algorithmes spécifiques, basés sur des mécanismes d’optimisation (entrelacement) et de sécurisation (redondance). Vous pouvez paramétrer ces mécanismes en fonction de vos besoins. Les menus associés à ces options vous permettent de choisir un taux **Faible**, **Moyen**, **Elevé** ou **Aucun** (défaut).
    - **Taux d’entrelacement** : l’entrelacement consiste à stocker les données dans des secteurs non contigus afin de limiter les risques en cas d’endommagement des secteurs. Plus le taux est élevé, plus la sécurité est élevée ; en contrepartie, le traitement des données consomme davantage de mémoire.
    - **Taux de redondance** : la redondance permet de sécuriser les données présentes dans un fichier en répétant plusieurs fois les mêmes informations. Plus le taux est élevé, plus le fichier est sécurisé, mais plus le stockage est lent et la taille du fichier importante.


### Restitution automatique

- **Restore last backup if database is damaged**: When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. Aucune intervention de l’utilisateur n’est requise ; l’opération est cependant consignée dans le Journal des sauvegardes.

- **Integrate last log file if database is incomplete**: When this option is checked, the program automatically integrates the log file when opening or restoring the application.
    - When opening an application, the current log file is automatically integrated if 4D detects that there are operations stored in the log file that are not present in the data. Cette situation se produit par exemple lorsqu’une panne de courant a lieu alors que des opérations non encore écrites sur le disque se trouvaient dans le cache de données.
    - When restoring an application, if the current log file or a log backup file having the same number as the backup file is stored in the same folder, 4D examines its contents. S’il contient des opérations non présentes dans le fichier de données, le programme l’intègre automatiquement.

Aucune boîte de dialogue n’est présentée à l’utilisateur, l’opération est entièrement automatique. Le but est de faciliter au maximum la remise en route de l’exploitation. L’opération est consignée dans le Journal des sauvegardes.

> Dans le cas d'une restauration automatique, seuls les éléments suivants sont restaurés: - fichier .4DD - fichier .4DIndx - fichier .4DSyncData - fichier .4DSyncHeader - dossier External Data
> 
> Si vous souhaitez obtenir les fichiers joints ou les fichiers de projet, vous devez effectuer une [restauration manuelle](restore.md#manually-restoring-a-backup-standard-dialog).