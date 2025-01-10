---
id: ds
title: ds
displayed_sidebar: docs
---

<!--REF #_command_.ds.Syntax-->**ds** { ( *localID* : Text ) } : cs.DataStore <!-- END REF -->

<!--REF #_command_.ds.Params-->

| Paramètres | Type                         |   | Description                            |
| ---------- | ---------------------------- | - | -------------------------------------- |
| localID    | Text                         | → | Identifiant local du datastore distant |
| Résultat   | cs.DataStore | ← | Nouvelle référence de datastore        |

<!-- END REF-->

#### Description

La commande `ds` <!-- REF #_command_.ds.Summary -->retourne une référence vers le datastore correspondant à la base de données 4D courante ou à la base de données désignée par *localID*<!-- END REF -->.

Si vous omettez le paramètre *localID* (ou si vous passez une chaîne vide ""), la commande renvoie une référence au datastore correspondant à la base de données 4D locale (ou à la base 4D Server en cas d'ouverture d'une base de données distante sur 4D Ser Le datastore est ouvert automatiquement et est disponible directement via `ds`.

Vous pouvez également obtenir une référence sur un datastore distant ouvert en passant son identifiant local dans le paramètre *localID*. Vous pouvez également obtenir une référence sur un datastore distant ouvert en passant son identifiant local dans le paramètre *localID*. L'identifiant local est défini lors de l'utilisation de cette commande.

> La portée de l'identifiant local est la base de données dans laquelle le datastore a été ouvert.

Si aucun datastore nommé *localID* n'est trouvé, la commande renvoie **Null**.

Les objets disponibles dans le `cs.Datastore` sont mappés à partir de la base de données cible en respectant les [règles générales](../ORDA/dsMapping.md#general-rules) de correspondance d'ORDA.

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

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1482                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
