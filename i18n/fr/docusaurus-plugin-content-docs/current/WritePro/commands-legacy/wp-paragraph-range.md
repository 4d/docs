---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *objCible* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| Résultat | Object | &#8592; | Plage définissant uniquement les paragraphes |

<!-- END REF-->

#### Compatibilité 

<!--REF #_command_.WP Paragraph range.Summary-->La commande **WP Paragraph range** était nommée **WP Create Paragraph range** dans les versions précédentes de 4D Write Pro.<!-- END REF--> Elle a été renommée pour plus de clarté. 

#### Description 

La commande **WP Paragraph range** retourne un objet plage qui référence uniquement les paragraphes qui intersectent l'*objCible* que vous avez passé en paramètre. La plage de paragraphes retournée peut être utilisée avec [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) et [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) afin de manipuler les attributs de paragraphes uniquement.

Dans *objCible*, vous pouvez passer :

* une plage 4D Write Pro, ou
* un élément (tableau / ligne / paragraphe / en-tête / pied / corps / section / sous-section)

#### Exemple 

Vous voulez définir la marge intérieure pour les paragraphes uniquement : 

```4d
 $oParagraphs:=WP Paragraph range($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

#### Voir aussi 

[WP Picture range](wp-picture-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  