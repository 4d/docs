---
id: vp-get-row-attributes
title: VP Get row attributes
---

<!-- REF #_method_.VP Get row attributes.Syntax -->

**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get row attributes.Params -->

| Paramètres | Type       |    | Description                        |                  |
| ---------- | ---------- | -- | ---------------------------------- | ---------------- |
| rangeObj   | Object     | -> | Objet plage                        |                  |
| Résultat   | Collection | <- | Collection de propriétés de lignes | <!-- END REF --> |

#### Description

The `VP Get row attributes` command <!-- REF #_method_.VP Get row attributes.Summary -->returns a collection of properties for any row in the _rangeObj_<!-- END REF -->.

In _rangeObj_, pass an object containing a range of the rows whose attributes will be retrieved.

The returned collection contains any properties for the rows, whether or not they have been set by the [VP SET ROW ATTRIBUTES](vp-set-row-attributes.md) method.

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
