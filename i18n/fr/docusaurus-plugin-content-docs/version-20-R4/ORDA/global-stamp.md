---
id: global-stamp
title: Using the Global Stamp
---



## Vue d’ensemble

4D automatically manages an internal **global modification stamp**, useful to handle data change tracking implementations, for example to monitor activity, backup, run incremental synchronization, etc.

Le marqueur de modification global est un nombre, toujours maintenu par 4D, même en cas de restitution de la base de données, d'importation, etc. Note however that the stamp can be modified using the [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp) function.

Once the [data change tracking is configured and enabled](#configuring-data-change-tracking), the following actions are automatically executed by 4D at each record modification (add, modify, delete):

1. La valeur courante du marqueur de modification globale est stockée dans l'attribut spécial "__GlobalStamp" de l'entité concernée. In case of a deletion, a new entity is also added to the `__DeletedRecords` table with information about the deleted entity and the current global modification stamp value is saved in the "__Stamp" attribute.

2. La valeur du marqueur de modification global est incrémentée.

Ce mécanisme vous permet d'identifier les entités qui ont été modifiées, ajoutées ou supprimées depuis un point dans le temps, et de mettre en œuvre toute action appropriée (voir exemple).

:::info

Do not confuse the **global modification stamp** with the internal **entity stamp**, used for the [optimistic locking feature](entities.md#automatic-optimistic-lock).

:::



## Configuration du suivi des changements de données

By default, the global modification stamp is not created (the [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) function returns 0. Pour activer le suivi des changements de données, vous devez ajouter des champs spéciaux et une table à votre structure. Vous pouvez utiliser le menu contextuel de l'éditeur de structure pour créer automatiquement tous les éléments nécessaires.

### Configuration de la structure

To enable data change tracking, the application structure must contain at least one table with a `__GlobalStamp` field.

De plus, pour assurer la bonne marche de la fonctionnalité, les conditions suivantes sont requises :

- The `__GlobalStamp` field must must be of type *Integer 64 bits*, with *automatic index*, *Expose as REST resource*, and *Invisible* properties selected.
- A `__DeletedRecords` table must be added, with the following fields:

| Champ         | Type            | Description                                |
| ------------- | --------------- | ------------------------------------------ |
| __PrimaryKey  | Text            | Clé primaire de l'entité supprimée         |
| __Stamp       | Integer 64 bits | Marqueur global juste avant la suppression |
| __TableName   | Text            | Nom de la table de l'entité supprimée      |
| __TableNumber | Longint         | Numéro de la table de l'entité supprimée   |

You can only track changes for data in tables having the `__GlobalStamp` field.

:::note

In the 4D language, the `__GlobalStamp` field value should be handled through a `Real` type variable.

:::

### Utilisation de l'Editeur de structure

L'Editeur de structure de 4D vous permet d'activer ou de désactiver le suivi du changement de données à l'aide d'une commande de menu.

Pour activer le suivi des changements de données :

1. Sélectionnez la ou les table(s) pour lesquelles vous souhaitez activer le suivi des changements de données.
2. Right-click on a selected table and select **Enable data change tracking** in the contextual menu.
3. Une boîte de dialogue de confirmation s'affiche. Cliquez sur **OK**.

4D effectue alors les modifications suivantes :

- A preconfigured `__GlobalStamp` field is added to the table(s).
- If not already existing, a `__DeletedRecords` table is added to the structure.


Pour désactiver le suivi des changements de données :

1. Sélectionnez la ou les table(s) pour lesquelles vous souhaitez supprimer le suivi des changements de données.
2. Right-click on a selected table and select **Disable data change tracking** in the contextual menu.
3. Une boîte de dialogue de confirmation s'affiche. Cliquez sur **OK**.

4D then removes the `__GlobalStamp` field from the table(s). Note that if you want to remove the `__DeletedRecords` table, you need to do it manually.



## Exemple

```4d var $oldStamp : Real var $tableName : Text var $modifiedEmps : cs.EmployeeSelection var $deletedEmpsInfo : cs.__DeletedRecordsSelection

$tableName:="Employee" $oldStamp:=... //load the previous stamp value  
//from which you want to compare the current stamp

If ($oldStamp # ds.getGlobalStamp()) //get all new or modified entities $modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp) //get all deleted entities     $deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\
    $oldStamp; $tableName) End if
