---
id: log
title: Fichier d'historique (.journal)
---

Une application exploitée de manière continue enregistre en permanence des modifications, des ajouts ou des suppressions d’enregistrements. Réaliser des sauvegardes régulières des données est important mais ne permet pas, en cas d’incident, de récupérer les données saisies depuis la dernière sauvegarde. Pour répondre à ce besoin, 4D dispose d’un outil particulier : le fichier d’historique. Ce fichier permet d’assurer la sécurité permanente des données.

En outre, 4D travaille en permanence avec un cache de données situé en mémoire. Toute modification effectuée sur les données de l'application est stockée provisoirement dans le cache avant d’être écrite sur le disque dur. Ce principe permet d’accélérer le fonctionnement des applications ; en effet, les accès mémoire sont bien plus rapides que les accès disque. Si un incident survient sur l'application avant que les données stockées dans le cache aient pu être écrites sur le disque, vous devrez intégrer le fichier d’historique courant afin de récupérer entièrement l'application.

Enfin, 4D dispose d'une fonction d'analyse du contenu du fichier d'historique, permettant également de faire remonter en arrière les opérations exécutées sur les données de l'application. Ces fonctions sont accessibles via le CSM : reportez-vous aux sections [Page Analyse d'activités](MSC/analysis.md) et [Page Retour arrière](MSC/rollback.md).

## Fonctionnement du fichier d'historique

L’historique généré par 4D se présente sous la forme d’un fichier dans lequel toutes les opérations effectuées sur les données des tables journalisées de l'application viennent s’inscrire séquentiellement. Par défaut, toutes les tables sont journalisées, c'est-à-dire incluses dans l'historique, mais vous pouvez en désélectionner certaines via la propriété **Inclure dans le fichier d'historique**.

As such, each operation performed by a user causes two simultaneous actions: the first one in the data file (instruction is executed normally) and the second one in the log file (the description of the operation is recorded). Le fichier d’historique se construit de manière indépendante, sans gêner ni ralentir le travail de l’utilisateur. An application can only work with one log file at a time. Le fichier d’historique enregistre les types d’opérations suivants :

- Ouvertures et fermetures du fichier de données,
- Ouvertures et fermetures de process (contextes),
- Ajouts d’enregistrements et de BLOBs,
- Modifications d’enregistrements,
- Suppressions d’enregistrements,
- Créations et fermetures de transactions.

Pour plus d’informations sur ces actions, reportez-vous à la section [Page Analyse d'activités](MSC/analysis.md) du CSM.

Le fichier d’historique est géré par 4D. Il prend en compte indifféremment toutes les opérations affectant le fichier de données, que ce soient des manipulations effectuées par un utilisateur, des méthodes 4D, le moteur SQL, des plug-ins, un navigaeur Web ou une application mobile.

Ce schéma résume le principe général de fonctionnement du fichier d’historique :

![](assets/en/Backup/backup05.png)


Le fichier d’historique courant est automatiquement sauvegardé avec le fichier de données courant. Ce mécanisme procure deux avantages principaux :

- Eviter la saturation du disque accueillant le fichier d’historique. En effet, sans sauvegarde, l’historique grossirait indéfiniment au fur et à mesure de l’exploitation de la base et finirait par saturer votre disque. A chaque sauvegarde du fichier de données, 4D ou 4D Server ferme le fichier d’historique courant et débute immédiatement un nouveau fichier vide, évitant ainsi le risque de saturation. L’ancien fichier d’historique est alors archivé puis éventuellement détruit, conformément au mécanisme des jeux de sauvegarde.
- It keeps log files corresponding to backups in order to be able to parse or repair an application at a later point in time. The integration of a log file can only be done in the application to which it corresponds. Il est donc important, pour pouvoir intégrer correctement un fichier d’historique dans une sauvegarde, de disposer de sauvegardes et d’historiques archivés simultanément.


## Créer le fichier d’historique

By default, any application project created with 4D uses a log file (option set in the **General** page of the Preferences). Le fichier d’historique est nommé par défaut *data.journal* et est placé dans le dossier Data.

You can find out if your application uses a log file at any time: just check whether the **Use Log** option is selected on the **Backup/Configuration** page of the Settings. If you deselected this option, or if you use an application without a log file and wish to set up a backup strategy with a log file, you will have to create one.

Pour créer un fichier d’historique :

1. On the **Backup/Configuration** page of the Structure Settings, check the **Use Log** option. Le programme affiche une boîte de dialogue standard de création de fichier. Par défaut, le fichier d’historique est baptisé *data.journal*.

2. Conservez le nom du fichier par défaut ou choisissez-en un autre et déterminez l’emplacement du fichier. If you have at least two hard drives, it is recommended that you place the log file on a disk other than the one containing the application project. If the application hard drive is lost, you can still recall your log file.

3. Cliquez sur le bouton **Enregistrer**. Le disque et le nom du fichier d’historique ouvert s’affichent alors dans la zone **“Utiliser le fichier d’historique”** de la boîte de dialogue. Vous pouvez cliquer dans cette zone afin d’afficher un pop up menu contenant l’enchaînement des dossiers à partir du disque.

4. Validate the Settings dialog box.

In order for you to be able to create a log file directly, the data must be in one of the following situations:

- Le fichier de données est vierge,
- You just performed a backup and no changes have yet been made to the data.

In all other cases, when you validate the Settings dialog box, an alert dialog box will appear to inform you that it is necessary to perform a backup. Si vous cliquez sur **OK**, la sauvegarde démarre immédiatement puis l’historique est activé. If you click **Cancel**, the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the application. This precaution is indispensable because, in order to restore an application after any incidents, you will need a copy of the application into which the operations recorded in the log file will be integrated.

Without having to do anything else, all operations performed on the data are logged in this file and it will be used in the future when the application is opened.

Vous devrez créer un autre fichier d’historique si vous créez un nouveau fichier de données. Vous devrez désigner ou créer un autre fichier d’historique si vous ouvrez un autre fichier de données non associé à un fichier d’historique (ou si le fichier d’historique est manquant).



## Fermer l’historique

If you would like to stop logging operations to the current log file, simply deselect the **Use Log** option on the **Backup/Configuration** page of the Settings.

4D affiche alors un message d’alerte afin d’attirer votre attention sur le fait que cette action vous prive de la sécurité apportée par le fichier d’historique :

![](assets/en/Backup/backup06.png)

If you click **Stop**, the current log file is immediately closed (the Settings dialog box does not need to be validated afterwards).

Si vous souhaitez fermer votre fichier d’historique courant parce qu’il devient trop important, il est préférable d’effectuer une sauvegarde du fichier de données, ce qui entraînera la sauvegarde de l’historique.

> **4D Server** : La commande `New log file` permet de refermer automatiquement l’historique courant et d’en démarrer un nouveau. Si le fichier d'historique devient inaccessible au cours de la session de travail, l'erreur 1274 est générée et 4D Server ne permet plus aux utilisateurs d'écrire ou de modifier des données. Lorsque le fichier d'historique est de nouveau accessible, il est nécessaire d'effectuer une sauvegarde.