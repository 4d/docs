---
id: vp-get-row-count
title: VP Get row count
---

<!-- REF #_method_.VP Get row count.Syntax -->

**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get row count.Params -->

| Paramètres | Type    |                             | Description                                                                 |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Integer | <- | Nombre total de lignes                                                      | <!-- END REF --> |

#### Description

La commande `VP Get row count` <!-- REF #_method_.VP Get row count.Summary -->retourne le nombre total de lignes de la *sheet* désignée<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

You can define where to get the row count in the optional *sheet* parameter using the sheet index (counting begins at 0). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

#### Exemple

Le code suivant retourne le nombre de lignes dans la zone 4D View Pro :

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### Voir également

[VP Get column count](vp-get-column-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
