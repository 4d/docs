---
id: vp-get-sheet-index
title: VP Get sheet index
---

<!-- REF #_method_.VP Get sheet index.Syntax -->

**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet index.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| name       | Text    | -> | Nom de la feuille                       |                  |
| Résultat   | Integer | <- | Numéro d'indice de la feuille           | <!-- END REF --> |

#### Description

The `VP Get sheet index` command <!-- REF #_method_.VP Get sheet index.Summary -->returns the index of a sheet based on its name in *vpAreaName*.<!-- END REF -->

In *vpAreaName*, pass the name of the 4D View Pro area.

In *name*, pass the name of the sheet whose index will be returned. If no sheet named *name* is found in the document, the method returns -1.

> La numérotation démarre à 0.

#### Exemple

Dans le document suivant :

![](../../assets/en/ViewPro/vp-sheet-index-name.png)

Lire l'index de la feuille appelée "Total premier trimester" :

```4d
$index:=VP Get sheet index("ViewProArea";"Total premier trimestre") //retourne 2
```

#### Voir également

[VP Get sheet count](vp-get-sheet-count.md)<br/>
[VP Get sheet name](vp-get-sheet-name.md)
