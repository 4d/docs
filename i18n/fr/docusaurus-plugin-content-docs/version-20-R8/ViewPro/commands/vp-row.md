---
id: vp-row
title: VP Row
---

<!-- REF #_method_.VP Row.Syntax -->

**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->

<!-- REF #_method_.VP Row.Params -->

| Paramètres | Type    |                             | Description                                                                 |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| row        | Integer | ->                          | Indice de la ligne                                                          |                  |
| rowCount   | Integer | ->                          | Nombre de lignes                                                            |                  |
| sheet      | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Object  | <- | Plage de ligne(s)                                        | <!-- END REF --> |

## Description

The `VP Row` command <!-- REF #_method_.VP Row.Summary -->returns a new range object referencing a specific row or rows<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

The optional *rowCount* parameter allows you to define the total number of rows of the range. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. *rowCount* doit être supérieur à 0.

The *row* parameter defines the first row of the row range. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. If the range contains multiple rows, you should also use the optional *rowCount* parameter. *rowCount* doit être supérieur à 0. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

## Exemple

|

![](../../assets/en/ViewPro/cmd_vpRow.PNG)

Vous pouvez écrire :

```4d
$row:=VP Row("ViewProArea";9) // row 10
```

## Voir également

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)

