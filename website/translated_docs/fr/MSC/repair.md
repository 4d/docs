---
id: repair
title: Page Réparation
sidebar_label: Page Réparation
---

Cette page permet de réparer le fichier de données ou le fichier de structure lorsqu’il a été endommagé. Généralement, vous n’utiliserez ces fonctions qu’à la demande de 4D, lorsque des anomalies auront été détectées à l’ouverture de la base ou à la suite d’une [vérification](verify.md).

**Attention :** Chaque réparation entraîne la duplication du fichier d’origine et donc l’augmentation de la taille du dossier de l’application. Il est important de tenir compte de ce mécanisme (notamment sous macOS où les applications 4D apparaissent sous forme de packages) pour que l’application ne grossisse pas de façon excessive. Une intervention manuelle à l’intérieur du package peut être utile afin de supprimer les copies des fichiers d’origine.

> La réparation n’est disponible qu’en mode maintenance. Si vous tentez d’effectuer cette opération en mode standard, une boîte de dialogue d’alerte vous prévient que la base va être fermée puis relancée en mode maintenance.
> 
> Lorsque la base est chiffrée, la réparation des données comprend le déchiffrage et le chiffrage et nécessite ainsi la clé de chiffrement de données courante. Si aucune clé de chiffrement valide n'a déjà été fournie, une boite de dialogue s'affiche pour demander pour demander le mot de passe ou la clé de chiffrement (voir Page Chiffrement).

## File overview

### Data file to be repaired

Pathname of the current data file. The **[...]** button can be used to specify another data file. When you click on this button, a standard Open document dialog is displayed so that you can designate the data file to be repaired. If you perform a [standard repair](#standard_repair), you must select a data file that is compatible with the open project file. If you perform a [recover by record headers](#recover-by-record-headers) repair, you can select any data file. Once this dialog has been validated, the pathname of the file to be repaired is indicated in the window.

### Original files backup folder

By default, the original data file will be duplicated before the repair operation. It will be placed in a subfolder named “Replaced files (repairing)” in the database folder. The second **[...]** button can be used to specify another location for the original files to be saved before repairing begins. This option can be used more particularly when repairing voluminous files while using different disks.

### Repaired files

4D creates a new blank data file at the location of the original file. The original file is moved into the folder named "\Replaced Files (Repairing) date time" whose location is set in the "Original files backup folder" area (database folder by default). The blank file is filled with the recovered data.

## Standard repair

Standard repair should be chosen when only a few records or indexes are damaged (address tables are intact). The data is compacted and repaired. This type of repair can only be performed when the data and structure file match.

When the repair procedure is finished, the "Repair" page of the MSC is displayed. A message indicates if the repair was successful. If so, you can open the database immediately. ![](assets/en/MSC/MSC_RepairOK.png)

## Recover by record headers

Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective.

4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table.

> If you have deselected the **Records definitively deleted** option in the properties of a table in the database structure, performing a recovery by header markers may cause records that were previously deleted to reappear. Recovery by headers does not take integrity constraints into account. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. When the scan is complete, the results appear in the following window:

![](assets/en/MSC/mscrepair2.png)

> If all the records and all the tables have been assigned, only the main area is displayed.

The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.

- The first table lists the information from the data file scan. Each row shows a group of recoverable records in the data file:
    
    - The **Order** column indicates the recovery order for the group of records. 
    - The **Count** column indicates the number of the records in the table.
    - The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. The names of tables assigned automatically appear in green. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red.
    - The **Recover** column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table.
- The second table lists the tables of the project file.

### Attribution manuelle

Si, du fait de l’endommagement de la table d’adresses, un ou plusieurs groupes d’enregistrements n’ont pas pu être attribués à des tables, vous pouvez les attribuer manuellement. Pour attribuer une table à un groupe non identifié, sélectionnez le groupe dans le premier tableau. Lorsque vous sélectionnez des enregistrements non identifiés, la zone "Contenu des enregistrements" affiche une prévisualisation du contenu des premiers enregistrements du groupe afin de vous permettre de les attribuer plus facilement :

![](assets/en/MSC/mscrepair3.png)

Sélectionnez ensuite la table à attribuer dans le tableau des "Tables non attribuées" puis cliquez sur le bouton **Identifier table**. Vous pouvez également attribuer une table par glisser-déposer. Le groupe d’enregistrements est alors associé à la table, il sera récupéré dans cette table. Les noms des tables attribuées manuellement sont affichés en caractères noirs. Le bouton **Ignorer enregistrements** permet de supprimer l’association effectuée manuellement entre une table et un groupe d’enregistrements.

## Open log file

After repair is completed, 4D generates a log file in the Logs folder of the database. This file allows you to view all the operations carried out. It is created in XML format and named: *DatabaseName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *DatabaseName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.