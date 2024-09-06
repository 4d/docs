---
id: vp-get-tables
title: VP Get tables
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get tables.Syntax -->

**VP Get tables** ( _vpAreaName_ : Text { ; _sheet_ : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get tables.Params -->

| Paramètres | Type       |    | Description                                                                 |                  |
| ---------- | ---------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer    | -> | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Collection | <- | Collection de textes avec tous les noms des tables                          | <!-- END REF --> |

#### Description

The `VP Get tables` command <!-- REF #_method_.VP Get tables.Summary -->returns a collection of all table names defined in the _sheet_<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro.

In _sheet_, pass the index of the target sheet. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

#### Exemple

Le code suivant retournera une collection de tous les noms de tables de la feuille courante :

```4d
$tables:=VP Get tables("ViewProArea")
//$tables contains for example ["contextTable","emailTable"]

```

#### Voir également

[VP CREATE TABLE](vp-create-table.md)
