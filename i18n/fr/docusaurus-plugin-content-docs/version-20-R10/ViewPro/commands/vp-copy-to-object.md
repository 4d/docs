---
id: vp-copy-to-object
title: VP Copy to object
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #_method_.VP Copy to object.Syntax -->

**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

| Paramètres | Type   |                             | Description                                                  |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------ | ---------------- |
| rangeObj   | Object | ->                          | Objet plage                                                  |                  |
| options    | Object | ->                          | Options supplémentaires                                      |                  |
| Résultat   | Object | <- | Objet retourné. Contient les données copiées | <!-- END REF --> |

## Description

La commande `VP Copy to object` <!-- REF #_method_.VP Copy to object.Summary -->copie le contenu, le style et les formules de *rangeObj* vers un objet<!-- END REF -->.

Dans *rangeObj*, passez la plage de cellules contenant les valeurs, formatages et formules à copier. Si *rangeObj* est une plage combinée, seule la première est utilisée.

Vous pouvez passer un paramètre facultatif *options* contenant les propriétés suivantes :

| Propriété   | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| copy        | Boolean | *Vrai* (par défaut) pour conserver les valeurs copiées, le formatage et les formules après l'exécution de la commande. *Faux* pour les supprimer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| copyOptions | Integer | Spécifie ce qui est copié ou déplacé. Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Copies all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copies only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copies only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copies the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Copies only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copies the values and formatting.</td></tr></table></p> |

Les options de collage définies dans [workbook options](vp-set-workbook-options.md) sont prises en compte.

La commande retourne un objet qui contient les données copiées.

## Exemple

Cet exemple de code copie d'abord le contenu, valeurs, formats et formules d'une plage dans un objet puis les colle dans une autre plage :

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

## Voir également

[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)

