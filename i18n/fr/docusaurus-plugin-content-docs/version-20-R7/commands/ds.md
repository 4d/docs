---
id: ds
title: ds
displayed_sidebar: docs
---

<!--REF #_command_.ds.Syntax-->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!--REF #_command_.ds.Params-->

| Paramètres | Type      |   | Description                            |
| ---------- | --------- | - | -------------------------------------- |
| localID    | Text      | → | Identifiant local du datastore distant |
| Résultat   | DataStore | ← | Nouvelle référence de datastore        |

<!-- END REF-->

#### Description

La commande `ds` <!-- REF #_command_.ds.Summary -->retourne une référence vers le datastore correspondant à la base de données 4D courante ou à la base de données désignée par *localID*<!-- END REF -->.

Si vous omettez le paramètre *localID* (ou si vous passez une chaîne vide ""), la commande renvoie une référence au datastore correspondant à la base de données 4D locale (ou à la base 4D Server en cas d'ouverture d'une base de données distante sur 4D Ser Le datastore est ouvert automatiquement et est disponible directement via `ds`.

Vous pouvez également obtenir une référence sur un datastore distant ouvert en passant son identifiant local dans le paramètre *localID*. The datastore must have been previously opened with the [`Open datastore`](open-datastore.md) command by the current database (host or component). L'identifiant local est défini lors de l'utilisation de cette commande.

> La portée de l'identifiant local est la base de données dans laquelle le datastore a été ouvert.

Si aucun datastore nommé *localID* n'est trouvé, la commande renvoie **Null**.

Objects available in the `cs.Datastore` are mapped from the target database with respect to the [ORDA general rules](../ORDA/dsMapping.md#general-rules).

#### Exemple 1

Utilisation du datastore principal de la base 4D :

```4d
var $result : cs.EmployeeSelection
$result:=ds.Employee.query("firstName = :1";"S@")
```

#### Exemple 2

```4d
 var $connectTo; $firstFrench; $firstForeign : Object

 var $frenchStudents; $foreignStudents : cs.DataStore

 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")

 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
  //...
  //...
 $firstFrench:=getFirst("french";"Students")
 $firstForeign:=getFirst("foreign";"Students")
```

```4d
  //getFirst method
  //getFirst(localID;dataclass) -> entity
 #DECLARE( $localId : Text; $dataClassName : Text ) -> $entity : 4D.Entity

 $entity:=ds($localId)[$dataClassName].all().first()
```

#### Voir également

[Open datastore](open-datastore.md)
