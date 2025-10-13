---
id: vp-remove-span
title: VP REMOVE SPAN
---

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->

**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage | <!-- END REF --> |

## Description

La commande `VP REMOVE SPAN` <!-- REF #_method_.VP REMOVE SPAN.Summary -->supprime la portée (span) des cellules dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez un objet plage de la portée de la cellule. Les cellules fusionnées de la plage sont divisées en cellules individuelles.

## Exemple

Pour retirer toutes les fusions de cellules de ce document :

![](../../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //find all cell spans
 $span:=VP Get spans(VP All("ViewProArea"))

 
  //remove the cell spans
 VP REMOVE SPAN($span)
```

Résultat:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

## Voir également

[VP ADD SPAN](vp-add-span.md)<br/>
[VP Get spans](vp-get-spans.md)
