---
id: vp-get-sheet-count
title: VP Get sheet count
---

<!-- REF #_method_.VP Get sheet count.Syntax -->

**VP Get sheet count** ( _vpAreaName_ : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet count.Params -->

| Paramètres | Type    |    | Description                             |                  |
| ---------- | ------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| Résultat   | Integer | <- | Nombre de feuilles                      | <!-- END REF --> |

#### Description

The `VP Get sheet count` command <!-- REF #_method_.VP Get sheet count.Summary -->returns the number of sheets in the document loaded in _vpAreaName_.<!-- END REF -->

In _vpAreaName_, pass the name of the 4D View Pro area.

#### Exemple

Dans le document suivant :

![](../../assets/en/ViewPro/vp-sheet-3.png)

Pour obtenir le nombre de feuilles et définir la feuille courante comme étant la dernière feuille :

```4d
 $count:=VP Get sheet count("ViewProArea")
  //set the current sheet to the last sheet (indexing starts at 0)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### Voir également

[VP Get sheet index](vp-get-sheet-index.md)<br/>
[VP SET SHEET COUNT](vp-set-sheet-count.md)
