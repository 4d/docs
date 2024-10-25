---
id: global-stamp
title: Utiliser le marqueur global
---

## Vue d’ensemble

4D gère automatiquement un **marqueur de modification globale** interne, utile en cas d'implémentation d'un suivi des modifications de données, par exemple pour surveiller l'activité, la sauvegarde, la synchronisation incrémentielle, etc.

Le marqueur de modification global est un nombre, toujours maintenu par 4D, même en cas de restitution de la base de données, d'importation, etc. Notez cependant que le marqueur peut être modifié par la fonction [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp).

Une fois que le [suivi des changements de données est configuré et activé](#configuring-data-change-tracking), les actions suivantes sont automatiquement exécutées par 4D à chaque modification de l'enregistrement (ajout, modification, suppression) :

1. La valeur courante du marqueur de modification globale est stockée dans l'attribut spécial "__GlobalStamp" de l'entité concernée.
   En cas de suppression, une nouvelle entité est également ajoutée dans la table `__DeletedRecords` avec des informations à propos de l'entité supprimée et la valeur courante du marqueur de modification global est enregistrée dans l'attribut "__Stamp".

2. La valeur du marqueur de modification global est incrémentée.

Ce mécanisme vous permet d'identifier les entités qui ont été modifiées, ajoutées ou supprimées depuis un point dans le temps, et de mettre en œuvre toute action appropriée (voir exemple).

:::info

Ne confondez pas le **marqueur de modification global** avec le **marqueur interne d'entité**, utilisé pour la fonctionnalité de [verrouillage optimiste](entities.md#automatic-optimistic-lock).

:::

## Configuration du suivi des changements de données

Par défaut, le marqueur de modification global n'est pas créé (la fonction [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) retourne 0. Pour activer le suivi des changements de données, vous devez ajouter des champs spéciaux et une table à votre structure. Vous pouvez utiliser le menu contextuel de l'éditeur de structure pour créer automatiquement tous les éléments nécessaires.

### Configuration de la structure

Pour activer le suivi des changements de données, la structure de l'application doit contenir au moins une table avec un champ `__GlobalStamp`.

De plus, pour assurer la bonne marche de la fonctionnalité, les conditions suivantes sont requises :

- Le champ `__GlobalStamp` doit être de type _Integer 64 bits_, avec _index automatique_, _Exposer comme ressource REST_, et _Invisible_ sélectionné.
- Une table `__DeletedRecords` doit être ajoutée, avec les champs suivants :

| Champ                                                   | Type            | Description                                |
| ------------------------------------------------------- | --------------- | ------------------------------------------ |
| __PrimaryKey  | Text            | Clé primaire de l'entité supprimée         |
| __Stamp       | Integer 64 bits | Marqueur global juste avant la suppression |
| __TableName   | Text            | Nom de la table de l'entité supprimée      |
| __TableNumber | Longint         | Numéro de la table de l'entité supprimée   |

Vous ne pouvez suivre que les changements de données dans les tables ayant le champ `__GlobalStamp`.

:::note

Dans le langage 4D, la valeur du champ `__GlobalStamp` doit être gérée par le biais d'une variable de type `Real`.

:::

### Utilisation de l'Editeur de structure

L'Editeur de structure de 4D vous permet d'activer ou de désactiver le suivi du changement de données à l'aide d'une commande de menu.

Pour activer le suivi des changements de données :

1. Sélectionnez la ou les table(s) pour lesquelles vous souhaitez activer le suivi des changements de données.
2. Faites un clic droit sur une table sélectionnée et choisissez **Activer le suivi du changement de données** dans le menu contextuel.
3. Une boîte de dialogue de confirmation s'affiche. Cliquez sur **OK**.

4D effectue alors les modifications suivantes :

- Un champ `__GlobalStamp` préconfiguré est ajouté à la ou aux table(s).
- Si elle n'existe pas déjà, une table `__DeletedRecords` est ajoutée à la structure.

Pour désactiver le suivi des changements de données :

1. Sélectionnez la ou les table(s) pour lesquelles vous souhaitez supprimer le suivi des changements de données.
2. Faites un clic droit sur une table sélectionnée et choisissez **Désactiver le suivi du changement de données** dans le menu contextuel.
3. Une boîte de dialogue de confirmation s'affiche. Cliquez sur **OK**.

4D supprime alors le champ `__GlobalStamp` de la ou des table(s). Notez que si vous voulez supprimer la table `__DeletedRecords`, vous devez le faire manuellement.

## Exemple

```4d
var $oldStamp : Real
var $tableName : Text
var $modifiedEmps : cs.EmployeeSelection
var $deletedEmpsInfo : cs.__DeletedRecordsSelection

$tableName:="Employee"
$oldStamp:=... //load the previous stamp value  
	//from which you want to compare the current stamp

If ($oldStamp # ds.getGlobalStamp())
		//get all new or modified entities
	$modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)
		//get all deleted entities
	$deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\
	$oldStamp; $tableName)
End if
```
