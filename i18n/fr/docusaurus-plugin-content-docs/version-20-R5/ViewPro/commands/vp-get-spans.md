---
id: vp-get-spans
title: VP Get spans
---

<!-- REF #_method_.VP Get spans.Syntax -->

**VP Get spans** ( _rangeObj_ : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

| Paramètres | Type   |    | Description                                                                        |                  |
| ---------- | ------ | -- | ---------------------------------------------------------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objet plage                                                                        |                  |
| Résultat   | Object | <- | Objet de cellules fusionnées (cell spans) dans la plage définie | <!-- END REF --> |

#### Description

La commande `VP Get spans` <!-- REF #_method_.VP Get spans.Summary -->récupère les cellules fusionnées (cell spans) dans le _rangeObj_ désigné<!-- END REF -->.

Dans _rangeObj_, passez une plage de cellules fusionnées que vous souhaitez récupérer. Si _rangeObj_ ne contient pas de cellules fusionnées, une plage vide est retournée.

#### Exemple

Pour centrer le texte des cellules fusionnées dans ce document :

![](../../assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Rechercher toutes les cellules fusionnées 
$range:=VP Get spans(VP All("ViewProArea"))
 
//centrer le texte
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### Voir également

[VP ADD SPAN](vp-add-span.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
