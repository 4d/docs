---
id: vp-get-sheet-name
title: VP Get sheet name
---

<!-- REF #_method_.VP Get sheet name.Syntax -->

**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get sheet name.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille           |                  |
| Résultat   | Text    | <- | Nom de la feuille                       | <!-- END REF --> |

#### Description

The `VP Get sheet name` command <!-- REF #_method_.VP Get sheet name.Summary -->returns the name of a sheet based on its index in *vpAreaName*.<!-- END REF -->

In *vpAreaName*, pass the name of the 4D View Pro area.

In *sheet*, pass the index of the sheet whose name will be returned.

Si l'index passé n'existe pas, la méthode retourne un nom vide.

> La numérotation démarre à 0.

#### Exemple

Lire le nom de la troisième feuille du document :

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### Voir également

[VP Get sheet index](vp-get-sheet-index.md)
