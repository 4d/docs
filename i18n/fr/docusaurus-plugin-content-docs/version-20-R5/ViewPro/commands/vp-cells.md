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

| Paramètres  | Type    |                             | Description                                                                 |                  |
| ----------- | ------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName  | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| column      | Integer | ->                          | Indice de la colonne                                                        |                  |
| row         | Integer | ->                          | Indice de la ligne                                                          |                  |
| columnCount | Integer | ->                          | Nombre de colonnes                                                          |                  |
| rowCount    | Integer | ->                          | Nombre de lignes                                                            |                  |
| sheet       | Integer | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat    | Object  | <- | Objet plage de toutes les cellules                                          | <!-- END REF --> |

#### Description

La commande `VP Cells` <!-- REF #_method_.VP Cells.Summary -->retourne un nouvel objet de plage référencant des cellules spécifiques<!-- END REF -->.

Dans _vpAreaName_, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre _column_ définit la première colonne de la plage de cellules. Passez l'indice de la colonne (la numérotation commence à zéro) dans ce paramètre. Si l'intervalle se situe dans plusieurs colonnes, vous devez également utiliser le paramètre _columnCount_.

Dans le paramètre _row_, vous pouvez définir la ou les lignes de la position de la plage de cellules. Passez l'indice de la ligne (la numérotation commence à zéro) dans ce paramètre. Si la plage se situe sur plusieurs lignes, vous devez également utiliser le paramètre _rowCount_.

Le paramètre _columnCount_ vous permet de définir le nombre total de colonnes dans lesquelles se trouve la plage. _columnCount_ doit être supérieur à 0.

Le paramètre _rowCount_ vous permet de définir le nombre total de lignes dans lesquelles se trouve la plage. _rowCount_ doit être supérieur à 0.

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
