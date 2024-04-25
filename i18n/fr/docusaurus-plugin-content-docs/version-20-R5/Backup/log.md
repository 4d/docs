---
id: log
title: Fichier d'historique (.journal)
---

Une application exploitée de manière continue enregistre en permanence des modifications, des ajouts ou des suppressions d’enregistrements. Réaliser des sauvegardes régulières des données est important mais ne permet pas, en cas d’incident, de récupérer les données saisies depuis la dernière sauvegarde. Pour répondre à ce besoin, 4D dispose d’un outil particulier : le fichier d’historique. Ce fichier permet d’assurer la sécurité permanente des données.

En outre, 4D travaille en permanence avec un cache de données situé en mémoire. Toute modification apportée aux données de l'application est stockée temporairement dans le cache avant d'être écrite sur le disque dur. Ce principe permet d’accélérer le fonctionnement des applications ; en effet, les accès mémoire sont bien plus rapides que les accès disque. Si un incident survient sur l'application avant que les données stockées dans le cache aient pu être écrites sur le disque, vous devrez intégrer le fichier d’historique courant afin de récupérer entièrement l'application.

Enfin, 4D dispose d'une fonction d'analyse du contenu du fichier d'historique, permettant également de faire remonter en arrière les opérations exécutées sur les données de l'application. These functions area available in the MSC: refer to the [Activity analysis](MSC/analysis.md) page and the [Rollback](MSC/rollback.md) page.

## Fonctionnement du fichier d'historique

L’historique généré par 4D se présente sous la forme d’un fichier dans lequel toutes les opérations effectuées sur les données des tables journalisées de l'application viennent s’inscrire séquentiellement. By default, all the tables are journaled, i.e. included in the log file, but you can deselect individual tables using the **Include in Log File** table property.

Ainsi, chaque opération effectuée par un utilisateur provoque deux actions simultanées : une première sur le fichier de données (l’instruction est exécutée normalement) et une seconde dans le fichier d’historique (la description de l’opération y est enregistrée). Le fichier d’historique se construit de manière indépendante, sans gêner ni ralentir le travail de l’utilisateur. Le fichier d’historique se construit de manière indépendante, sans gêner ni ralentir le travail de l’utilisateur. Le fichier d’historique enregistre les types d’opérations suivants :

- Ouvertures et fermetures du fichier de données,
- Ouvertures et fermetures de process (contextes),
- Ajouts d’enregistrements et de BLOBs,
- Modifications d’enregistrements,
- Suppressions d’enregistrements,
- Créations et fermetures de transactions.

For more information about these actions, refer to the [Activity analysis](MSC/analysis.md) page of the MSC.

Le fichier d’historique est géré par 4D. Il prend en compte indifféremment toutes les opérations affectant le fichier de données, que ce soient des manipulations effectuées par un utilisateur, des méthodes 4D, le moteur SQL, des plug-ins, un navigaeur Web ou une application mobile.

Ce schéma résume le principe général de fonctionnement du fichier d’historique :

![](../assets/en/Backup/backup05.png)

Le fichier d’historique courant est automatiquement sauvegardé avec le fichier de données courant. Ce mécanisme procure deux avantages principaux :

- Eviter la saturation du disque accueillant le fichier d’historique. En effet, sans sauvegarde, l’historique grossirait indéfiniment au fur et à mesure de l’exploitation de la base et finirait par saturer votre disque. A chaque sauvegarde du fichier de données, 4D ou 4D Server ferme le fichier d’historique courant et débute immédiatement un nouveau fichier vide, évitant ainsi le risque de saturation. L’ancien fichier d’historique est alors archivé puis éventuellement détruit, conformément au mécanisme des jeux de sauvegarde.
- Conserver les fichiers d’historique correspondant aux sauvegardes, afin de pouvoir analyser ou réparer a posteriori une application. En effet, l’intégration du fichier d’historique ne peut se faire que dans l'application qui lui correspond. Il est donc important, pour pouvoir intégrer correctement un fichier d’historique dans une sauvegarde, de disposer de sauvegardes et d’historiques archivés simultanément.

## Créer le fichier d’historique

By default, any application project created with 4D uses a log file (option set in the **General** page of the Preferences). The log file is named _data.journal_ and is placed in the Data folder.

You can find out if your application uses a log file at any time: just check whether the **Use Log** option is selected on the **Backup/Configuration** page of the Settings. Si vous avez désélectionné cette option ou si vous utilisez une application sans fichier d’historique et souhaitez mettre en place une stratégie de sauvegarde avec fichier d’historique, il vous appartient d’en créer un.

Pour créer un fichier d’historique :

1. On the **Backup/Configuration** page of the Structure Settings, check the **Use Log** option.
   Le programme affiche une boîte de dialogue standard d'ouverture/création de fichier. By default, the log file is named _data.journal_.

2. Conservez le nom par défaut ou renommez-le, puis sélectionnez l'emplacement du fichier.
   Si vous disposez d'au moins deux disques durs, il est recommandé de placer le fichier journal sur un disque autre que celui contenant le projet d'application. En cas de perte du disque dur de l'application, vous pouvez toujours rappeler votre fichier journal.

3. Click **Save**.
   The disk and the name of the open log file are now displayed in the **Use Log** area of the dialog box. Vous pouvez cliquer sur cette zone pour afficher un menu contextuel contenant le chemin d'accès au journal sur le disque.

4. Validez la boîte de dialogue des Propriétés.

Pour que vous puissiez directement créer un fichier d’historique, les données doivent se trouver dans une des situations suivantes :

- Le fichier de données est vierge,
- Vous venez d’effectuer une sauvegarde et aucune modification sur les données n’a encore été effectuée.

Si vous cliquez sur <strong x-id="1">OK</strong>, la sauvegarde démarre immédiatement puis l’historique est activé. If you click **OK**, the backup begins immediately, then the log file is activated. If you click **Cancel**, the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the application. Cette précaution est indispensable car il vous faudra, pour restituer une application après un éventuel incident, disposer d’une copie de l'application dans laquelle pourront s’intégrer les opérations enregistrées dans le fichier d’historique.

Sans autre manipulation de votre part, toutes les opérations effectuées sur les données s’inscriront dans ce fichier, et il sera utilisé également lors des ouvertures ultérieures de l'application.

Vous devrez créer un autre fichier d’historique si vous créez un nouveau fichier de données. Vous devrez désigner ou créer un autre fichier d’historique si vous ouvrez un autre fichier de données non associé à un fichier d’historique (ou si le fichier d’historique est manquant).

## Paramètres du fichier journal

The [log file settings](settings.md#log-file-management) are based on two pieces of information: a boolean value and a path.

1. **Boolean Value**: indicating whether the "Use Log File" feature is enabled or disabled within the application. By default, the boolean value is stored in _catalog.4DCatalog_. However, when the [user settings](../Desktop/user-settings.md) are activated, the _catalog.4DCatalog_ file configuration is overriden, and the boolean value can then be set either in the _Backup.4DSettings_ file [next to the data file](../Project/architecture.md#settings-user-data) or the _Backup.4DSettings_ file [in the project folder](../Project/architecture.md#settings-user) (see also the `JournalFileEnabled` xml backup key documentation on [doc.4d.com](https://doc.4d.com)).

2. **Path**: a string pointing to where the log file is located. Le chemin d'accès du fichier journal est toujours enregistré dans le fichier de données lié.

## Fermer l’historique

If you would like to stop logging operations to the current log file, simply deselect the **Use Log** option on the **Backup/Configuration** page of the Settings.

4D affiche alors un message d’alerte afin d’attirer votre attention sur le fait que cette action vous prive de la sécurité apportée par le fichier d’historique :

![](../assets/en/Backup/backup06.png)

If you click **Stop**, the current log file is immediately closed (the Settings dialog box does not need to be validated afterwards).

Si vous souhaitez fermer votre fichier d’historique courant parce qu’il devient trop important, il est préférable d’effectuer une sauvegarde du fichier de données, ce qui entraînera la sauvegarde de l’historique.

> **4D Server:** The `New log file` command automatically closes the current log file and starts a new one.
> Si le fichier d'historique devient inaccessible au cours de la session de travail, l'erreur 1274 est générée et 4D Server ne permet plus aux utilisateurs d'écrire ou de modifier des données. Lorsque le fichier d'historique est de nouveau accessible, il est nécessaire d'effectuer une sauvegarde.
