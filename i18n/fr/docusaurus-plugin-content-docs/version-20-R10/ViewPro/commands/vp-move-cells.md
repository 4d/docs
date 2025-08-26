---
id: vp-move-cells
title: VP MOVE CELLS
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #_method_.VP MOVE CELLS.Syntax -->

**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )<!-- END REF -->

<!-- REF #_method_.VP MOVE CELLS.Params -->

| Paramètres  | Type   |    | Description                                                |                  |
| ----------- | ------ | -- | ---------------------------------------------------------- | ---------------- |
| originRange | Object | -> | Plage de cellules à copier                                 |                  |
| targetRange | Object | -> | Plage cible pour les valeurs, le formatage et les formules |                  |
| options     | Object | -> | Options supplémentaires                                    | <!-- END REF --> |

## Description

La commande `VP MOVE CELLS` <!-- REF #_method_.VP MOVE CELLS.Summary -->déplace ou copie les valeurs, le style et les formules de *originRange* vers *targetRange*<!-- END REF -->.

*OrigRange* et *targetRange* peuvent se référer à différentes zones View Pro.

Dans *originRange*, passez un objet de plage contenant les valeurs, le style et les cellules de formule à copier ou à déplacer. Si *originRange* est une plage combinée, seule la première est utilisée.

Dans *targetRange*, passez la plage de cellules où les valeurs, le style et les formules des cellules seront copiées ou déplacées.

Le paramètre *options* a plusieurs propriétés :

| Propriété    | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy         | Boolean | Détermine si les valeurs, la mise en forme et les formules des cellules de *originRange* sont supprimés après l'exécution de la commande :<ul><li>*False* (par défaut) pour les supprimer</li><li>*True* pour les conserver</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| pasteOptions | Integer | Spécifie ce qui est collé. Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Pastes all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Pastes only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Pastes only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Pastes the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Pastes only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Pastes the values and formatting.</td></tr></table></p> |

Les options de collage définies dans [workbook options](vp-set-workbook-options.md) sont prises en compte.

## Exemple

Pour copier le contenu, les valeurs, le formatage et les formules d'une plage d'origine :

```4d
var $originRange; $targetRange; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.pasteOptions:=vk clipboard options all

VP MOVE CELLS($originRange; $targetRange; $options)
```

## Voir également

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)