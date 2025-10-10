---
id: vp-get-column-attributes
title: VP Get column attributes
---

<!-- REF #_method_.VP Get column attributes.Syntax -->

**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

| Paramètres | Type       |                             | Description                          |                  |
| ---------- | ---------- | --------------------------- | ------------------------------------ | ---------------- |
| rangeObj   | Object     | ->                          | Objet plage                          |                  |
| Résultat   | Collection | <- | Collection de propriétés de colonnes | <!-- END REF --> |

## Description

La commande `VP Get column attributes` <!-- REF #_method_.VP Get column attributes.Summary -->retourne une collection de propriétés pour n'importe quelle colonne de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de colonnes dont les attributs seront récupérés.

La collection retournée contient toutes les propriétés des colonnes, qu'elles aient ou non été définies par la commande [VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md).

## Exemple

Le code suivant :

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... retournera une collection d'attributs de la plage donnée :

![](../../assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

## Voir également

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
