---
id: vp-paste-from-object
title: VP PASTE FROM OBJECT
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->

**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Integer} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| Paramètres | Type    |    | Description                          |                  |
| ---------- | ------- | -- | ------------------------------------ | ---------------- |
| rangeObj   | Object  | -> | Objet plage de cellules              |                  |
| dataObject | Object  | -> | Objet contenant les données à coller |                  |
| options    | Integer | -> | Spécifie ce qui est collé            | <!-- END REF --> |

## Description

La commande `VP PASTE FROM OBJECT` <!-- REF #_method_.PASTE FROM OBJECT. ummary -->colle les contenus, styles et formules stockés dans *dataObject* dans l'objet *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez l'objet de plage de cellules dans lequel les valeurs, le formatage et/ou les cellules de formule seront collés. Si *rangeObj* fait référence à plusieurs cellules, seule la première est utilisée.

Dans *dataObject*, passez l'objet qui contient les données de la cellule, la mise en forme et les formules à coller.

Dans le paramètre facultatif *options*, vous pouvez spécifier ce qu'il faut coller dans la plage de cellules. Valeurs possibles :

| Constante                                      | Description                                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `vk clipboard options all`                     | Colle tous les objets de données, y compris les valeurs, la mise en forme et les formules. |
| `vk clipboard options formatting`              | Ne colle que la mise en forme.                                                             |
| `vk clipboard options formulas`                | Colle uniquement les formules.                                                             |
| `vk clipboard options formulas and formatting` | Colle les formules et la mise en forme.                                                    |
| `vk clipboard options values`                  | Ne colle que les valeurs.                                                                  |
| `vk clipboard options value and formatting`    | Colle les valeurs et la mise en forme.                                                     |

Les options de collage définies dans [workbook options](vp-set-workbook-options.md) sont prises en compte.

Si *options* fait référence à une option de collage qui n'est pas présente dans l'objet copié (par exemple, les formules), la commande ne fait rien.

## Exemple

Voir l'exemple de [VP Copy to object](vp-copy-to-object.md)

## Voir également

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)