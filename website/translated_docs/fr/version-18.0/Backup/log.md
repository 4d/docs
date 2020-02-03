---
id: version-18.0-log
title: Fichier d'historique (.journal)
original_id: log
---

Une base exploitée de manière continue enregistre en permanence des modifications, des ajouts ou des suppressions d’enregistrements. Réaliser des sauvegardes régulières des données est important mais ne permet pas, en cas d’incident, de récupérer les données saisies depuis la dernière sauvegarde. Pour répondre à ce besoin, 4D dispose d’un outil particulier : le fichier d’historique. Ce fichier permet d’assurer la sécurité permanente des données de la base.

En outre, 4D travaille en permanence avec un cache de données situé en mémoire. Toute modification effectuée sur les données de la base est stockée provisoirement dans le cache avant d’être écrite sur le disque dur. Ce principe permet d’accélérer le fonctionnement des applications ; en effet, les accès mémoire sont bien plus rapides que les accès disque. Si un incident survient sur la base avant que les données stockées dans le cache aient pu être écrites sur le disque, vous devrez intégrer le fichier d’historique courant afin de récupérer entièrement la base.

Enfin, 4D dispose d'une fonction d'analyse du contenu du fichier d'historique, permettant également de remonter en arrière parmi les opérations. Ces fonctions sont accessibles via le CSM : reportez-vous aux sections [Page Analyse d'activités](MSC/analysis.md) et [Page Retour arrière](MSC/rollback.md).

## Fonctionnement du fichier d'historique

L’historique généré par 4D se présente sous la forme d’un fichier dans lequel toutes les opérations effectuées sur les données des tables journalisées de la base viennent s’inscrire séquentiellement. By default, all the tables are journaled, i.e. included in the log file, but you can deselect individual tables using the **Include in Log File** table property.

Ainsi, chaque opération effectuée par un utilisateur provoque deux actions simultanées : une première sur les données de la base (l’instruction est exécutée normalement) et une seconde dans le fichier d’historique (la description de l’opération y est enregistrée). Le fichier d’historique se construit de manière indépendante, sans gêner ni ralentir le travail de l’utilisateur. Une base ne peut travailler qu’avec un seul fichier d’historique à la fois. Le fichier d’historique enregistre les types d’opérations suivants :

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
- Conserver les fichiers d’historique correspondant aux sauvegardes, afin de pouvoir analyser ou réparer a posteriori une base. En effet, l’intégration du fichier d’historique ne peut se faire que dans la base qui lui correspond. Il est donc important, pour pouvoir intégrer correctement un fichier d’historique dans une sauvegarde, de disposer de sauvegardes et d’historiques archivés simultanément.


## Créer le fichier d’historique

By default, any database created with 4D uses a log file (option set in the **General** page of the Preferences). The log file is named *data.journal* and is placed in the Data folder.

You can find out if your database uses a log file at any time: just check whether the **Use Log** option is selected on the **Backup/Configuration** page of the Database Settings. Si vous avez désélectionné cette option ou si vous utilisez une base sans fichier d’historique et souhaitez mettre en place une stratégie de sauvegarde avec fichier d’historique, il vous appartient d’en créer un.

Pour créer un fichier d’historique :

1. On the **Backup/Configuration** page of the Database Settings, check the **Use Log** option. Le programme affiche une boîte de dialogue standard de création de fichier. By default, the log file is named *data.journal*.

2. Conservez le nom du fichier par défaut ou choisissez-en un autre et déterminez l’emplacement du fichier. Si vous disposez d’au moins deux disques durs, il est recommandé de placer l’historique sur un autre disque que celui contenant la base, afin de pouvoir l’exploiter en cas de perte totale du disque de la base. Si le disque dur de la base de données est perdu, vous pouvez toujours rappeler votre fichier d'historique.

3. Click **Save**. The disk and the name of the open log file are now displayed in the **Use Log** area of the dialog box. Vous pouvez cliquer dans cette zone afin d’afficher un pop up menu contenant l’enchaînement des dossiers à partir du disque.

4. Validez la boîte de dialogue des Propriétés de la base.

Pour que vous puissiez directement créer un fichier d’historique, la base de données doit se trouver dans une des situations suivantes :

- Le fichier de données est vierge,
- Vous venez d’effectuer une sauvegarde de la base et aucune modification sur les données n’a encore été effectuée.

Dans tous les autres cas, au moment où vous validez la fenêtre des Propriétés de la base, une boîte de dialogue d’alerte vous informe qu’une sauvegarde est nécessaire. If you click **OK**, the backup begins immediately, then the log file is activated. If you click **Cancel**, the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the database. Cette précaution est indispensable car il vous faudra, pour restituer une base de données après un éventuel incident, disposer d’une copie de la base dans laquelle pourront s’intégrer les opérations enregistrées dans le fichier d’historique.

Sans autre manipulation de votre part, toutes les opérations effectuées sur les données s’inscriront dans ce fichier, et il sera utilisé également lors des ouvertures ultérieures de la base.

Vous devrez créer un autre fichier d’historique si vous créez un nouveau fichier de données. Vous devrez désigner ou créer un autre fichier d’historique si vous ouvrez un autre fichier de données non associé à un fichier d’historique (ou si le fichier d’historique est manquant).


## Fermer l’historique

If you would like to stop logging operations to the current log file, simply deselect the **Use Log** option on the **Backup/Configuration** page of the Database Settings.

4D affiche alors un message d’alerte afin d’attirer votre attention sur le fait que cette action vous prive de la sécurité apportée par le fichier d’historique :

![](assets/en/Backup/backup06.png)

If you click **Stop**, the current log file is immediately closed (the Database Settings dialog box does not need to be validated afterwards).

Si vous souhaitez fermer votre fichier d’historique courant parce qu’il devient trop important, il est préférable d’effectuer une sauvegarde du fichier de données, ce qui entraînera la sauvegarde de l’historique.

> **4D Server:** The `New log file` command automatically closes the current log file and starts a new one. Si le fichier d'historique devient inaccessible au cours de la session de travail, l'erreur 1274 est générée et 4D Server ne permet plus aux utilisateurs d'écrire ou de modifier des données. Lorsque le fichier d'historique est de nouveau accessible, il est nécessaire d'effectuer une sauvegarde.