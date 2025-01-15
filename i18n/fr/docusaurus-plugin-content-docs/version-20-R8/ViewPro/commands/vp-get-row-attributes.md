---
id: vp-get-row-attributes
title: VP Get row attributes
---

<!-- REF #_method_.VP Get row attributes.Syntax -->

**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get row attributes.Params -->

| Paramètres | Type       |                             | Description                        |                  |
| ---------- | ---------- | --------------------------- | ---------------------------------- | ---------------- |
| rangeObj   | Object     | ->                          | Objet plage                        |                  |
| Résultat   | Collection | <- | Collection de propriétés de lignes | <!-- END REF --> |

#### Description

La commande `VP Get row row attributes` <!-- REF #_method_.VP Get row attributes.Summary -->retourne une collection de propriétés pour n'importe quelle ligne dans la *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet contenant une plage de lignes dont les attributs seront récupérés.

La collection retournée contient toutes les propriétés des lignes, qu'elles aient été définies ou non par la méthode [VP SET ROW ATTRIBUTES](vp-set-row-attributes.md).

#### Exemple

Le code suivant retourne une collection d'attributs de la plage donnée :

```4d
var $range : Object
var $attr : Collection
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```

![](../../assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### Voir également

[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
