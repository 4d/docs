---
id: vp-get-column-count
title: VP Get column count
---

<!-- REF #_method_.VP Get column count.Syntax -->

**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get column count.Params -->

| Paramètres | Type    |                             | Description                                                                 |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Integer | <- | Nombre total de colonnes                                                    | <!-- END REF --> |

## Description

La commande `VP Get column count` <!-- REF #_method_.VP Get column count.Summary -->retourne le nombre total de colonnes de la *sheet* désignée<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où obtenir le nombre de colonnes dans le paramètre optionnel *sheet* en utilisant l'index de la feuille (compter commence à 0). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée.

## Exemple

Le code suivant retourne le nombre de colonnes dans la zone 4D View Pro :

```4d
C_INTEGER($colCount)
$colCount:=VP Get column count("ViewProarea")
```

## Voir également

[VP Get row count](vp-get-row-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
