---
id: vp-cells
title: VP Cells
---

<!-- REF #_method_.VP Cells.Syntax -->

**VP Cells** ( _vpAreaName_ : Text ; _column_: Integer ; _row_: Integer ; _columnCount_ : Integer ; _rowCount_ : Integer { ; _sheet_ : Integer } ) : Object<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R4   | Ajout         |

</details>

<!-- REF #_method_.VP Cells.Params -->

| Paramètres  | Type    |    | Description                                                                 |                  |
| ----------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| column      | Integer | -> | Indice de la colonne                                                        |                  |
| row         | Integer | -> | Indice de la ligne                                                          |                  |
| columnCount | Integer | -> | Nombre de colonnes                                                          |                  |
| rowCount    | Integer | -> | Nombre de lignes                                                            |                  |
| sheet       | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat    | Object  | <- | Objet plage de toutes les cellules                                          | <!-- END REF --> |

#### Description

The `VP Cells` command <!-- REF #_method_.VP Cells.Summary -->returns a new range object referencing specific cells<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

The _column_ parameter defines the first column of the cell range. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre. If the range is within multiple columns, you should also use the _columnCount_ parameter.

In the _row_ parameter, you can define the row(s) of the cell range's position. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. If the range is within multiple rows, you should also use the _rowCount_ parameter.

The _columnCount_ parameter allows you to define the total number of columns the range is within. _columnCount_ must be greater than 0.

The _rowCount_ parameter allows you to define the total number of rows the range is within. _rowCount_ must be greater than 0.

Dans le paramètre optionnel _sheet_, vous pouvez désigner une feuille spécifique dans laquelle sera définie la plage (la numérotation commence à zéro). Si le paramètre est omis ou si vous passez `vk current sheet`, la feuille courante est utilisée par défaut.

#### Exemple

Vous souhaitez définir un objet plage pour les cellules suivantes (de la feuille courante) :

![](../../assets/en/ViewPro/vp-cells.png)

Le code est le suivant :

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // de C5 à D7
```

#### Voir également

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
