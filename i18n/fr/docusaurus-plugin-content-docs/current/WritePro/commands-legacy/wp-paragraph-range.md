---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *objCible* : Object ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| Résultat | Object | &#8592; | Plage définissant uniquement les paragraphes |
</div>
<!-- END REF-->


## Description 

<!--REF #_command_.WP Paragraph range.Summary-->La commande **WP Paragraph range** retourne un objet plage qui référence uniquement les paragraphes qui intersectent l'*objCible* que vous avez passé en paramètre.<!-- END REF-->  La plage de paragraphes retournée peut être utilisée avec [WP GET ATTRIBUTES](../commands/wp-get-attributes) et [WP SET ATTRIBUTES](../commands/wp-set-attributes) afin de manipuler les attributs de paragraphes uniquement.

Dans *objCible*, vous pouvez passer :

* une plage 4D Write Pro, ou
* un élément (tableau / ligne / paragraphe / en-tête / pied / corps / section / sous-section)

## Exemple 

Vous voulez définir la marge intérieure pour les paragraphes uniquement : 

```4d
 $oParagraphs:=WP Paragraph range($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

## Voir aussi 

[WP Picture range](../commands/wp-picture-range)  
[WP Selection range](../commands/wp-selection-range)  
[WP Text range](../commands/wp-text-range)  

