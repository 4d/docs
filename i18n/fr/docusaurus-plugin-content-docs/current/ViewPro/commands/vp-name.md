---
id: vp-name
title: VP Name
---

<!-- REF #_method_.VP Name.Syntax -->

**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *sheet* : Integer }  ) : Object <!-- END REF -->

<!-- REF #_method_.VP Name.Params -->

<div class="no-index">

| Paramètres | Type    |                             | Description                                                                                                                                                |
| ---------- | ------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                                                                                                                    |
| rangeName  | Text    | ->                          | Cet exemple de code copie d'abord le contenu, valeurs, formats et formules d'une plage dans un objet puis les colle dans une autre plage : |
| sheet      | Integer | ->                          | Résultat:                                                                                                                                  |
| Résultat   | Object  | <- | Plage nommée                                                                                                                                               |

</div>
<!-- END REF -->

## Description

La commande `VP Name` <!-- REF #_method_.VP Name.Summary -->retourne un nouvel objet plage faisant référence à une plage nommée<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retournée.

Le paramètre *rangeName* spécifie une plage de cellules nommée existante.

Dans le paramètre optionnel *sheet*, vous pouvez désigner une feuille de calcul spécifique où *rangeName* est défini. Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante ou l'intégralité du classeur (workbook) à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

## Exemple

Vous souhaitez assigner une valeur à une plage nommée "Total".

```4d
// nommer la cellule B5 Total
 VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
 $name:=VP Name("ViewProArea";" Total")
 VP SET NUM VALUE($name;285;"$#,###.00")
```

## Voir également

[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP ALL](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Get names](vp-get-names.md)<br/>
[VP REMOVE NAME](vp-remove-name.md)<br/>
[VP Row](vp-row.md)
