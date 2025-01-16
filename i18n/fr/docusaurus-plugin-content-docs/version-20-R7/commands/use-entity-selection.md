---
id: use-entity-selection
title: USE ENTITY SELECTION
displayed_sidebar: docs
---

<!--REF #_command_.USE ENTITY SELECTION.Syntax-->**USE ENTITY SELECTION** ( *entitySelection* : 4D.EntitySelection )<!-- END REF-->

<!--REF #_command_.USE ENTITY SELECTION.Params-->

| Paramètres      | Type                               |   | Description          |
| --------------- | ---------------------------------- | - | -------------------- |
| entitySelection | 4D.EntitySelection | → | Une entity selection |

<!-- END REF-->

#### Description

La commande `USE ENTITY SELECTION` <!--REF #_command_.USE ENTITY SELECTION.Summary-->met à jour la sélection courante de la table correspondant à la classe de données du paramètre *entitySelection*, en fonction du contenu de la entity selection<!-- END REF-->.

Cette commande ne peut pas être utilisée avec un [datastore distant](../ORDA/remoteDatastores.md).

:::info

Cette commande est conçue pour permettre aux sélections courantes 4D de bénéficier de la puissance des requêtes ORDA. Pour des raisons de performance, dans 4D monoposte et 4D Server, la commande connecte directement *entitySelection* à la sélection courante. Par conséquent, une fois que *entitySelection* a été utilisée, elle ne doit pas être réutilisée ou modifiée.

:::

:::note

Après un appel à `USE ENTITY SELECTION`, le premier enregistrement de la sélection courante mise à jour (s'il n'est pas vide) devient l'enregistrement courant, mais il n'est pas chargé en mémoire. Si vous avez besoin d'utiliser les valeurs des champs de l'enregistrement courant, utilisez la commande `LOAD RECORD` après la commande `USE ENTITY SELECTION`.

:::

#### Exemple

```4d
var $entitySel : cs.EmployeeSelection

$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel est associée à la dataclass Employee
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //La sélection courante de la table Employee est mise à jour
```

#### Voir également

[Create entity selection](create-entity-selection.md)

#### Propriétés

|                           |                                                                 |
| ------------------------- | --------------------------------------------------------------- |
| Numéro de commande        | 1513                                                            |
| Thread safe               | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
| Changes current record    |                                                                 |
| Changes current selection |                                                                 |
