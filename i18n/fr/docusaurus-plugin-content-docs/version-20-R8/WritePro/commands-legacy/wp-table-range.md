---
id: wp-table-range
title: WP Table range
slug: /WritePro/commands/wp-table-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Table range.Syntax-->**WP Table range** ( *objCible* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Table range.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| Résultat | Object | &#8592; | Objet plage contenant uniquement les tableaux |

<!-- END REF-->

#### Compatibilité 

<!--REF #_command_.WP Table range.Summary-->La commande **WP Table range** était nommée **WP Create table range** dans les versions précédentes de 4D Write Pro.<!-- END REF--> Elle a été renommée pour plus de clarté.

#### Description 

La commande **WP Table range** retourne un objet plage qui n'adresse que les tableaux qui intersectent l'*objCible* que vous avez passé en paramètre. Elle retournera une plage de wk type table, même si *objCible* passé en paramètre ne contient pas de tableau. L'objet plage tableaux retourné peut être utilisé par [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) et [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) pour gérer les attributs à appliquer aux tableaux et à leur contenu.

Dans le paramètre *objCible*, vous pouvez passer :

* une plage, ou
* un élément (corps / en-tête / pied / paragraphe / section / sous-section), ou
* un document 4D Write Pro

#### Exemple 

Vous souhaitez modifier l'apparence des tableaux contenus dans la plage tableau :

```4d
 tableRange:=WP Table range(myDoc)
  //attributs tableaux
 WP SET ATTRIBUTES(tableRange;wk border style;wk solid;wk border color;"Blue";wk border width;"3px")
 WP SET ATTRIBUTES(tableRange;wk table align;wk center)
  //attributs texte
 WP SET ATTRIBUTES(tableRange;wk font size;12)
 WP SET ATTRIBUTES(tableRange;wk text transform;wk capitalize)
 WP SET ATTRIBUTES(tableRange;wk font bold;wk true)
```

#### Voir aussi 

[WP Get elements](wp-get-elements.md)  
[WP Text range](wp-text-range.md)  