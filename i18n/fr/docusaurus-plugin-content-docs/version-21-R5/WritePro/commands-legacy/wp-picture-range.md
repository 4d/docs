---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *objCible* : Object ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| Résultat | Object | &#8592; | Plage contenant uniquement les images |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.WP Picture range.Summary-->La commande **WP Picture range** retourne un objet plage qui référence uniquement les images contenues dans *objCible* que vous avez passé en paramètre.<!-- END REF--> L'objet plage d'images retourné peut être utilisé avec [WP GET ATTRIBUTES](../commands/wp-get-attributes) et [WP SET ATTRIBUTES](../commands/wp-set-attributes) afin de manipuler les attributs d'images uniquement.

Dans *objCible*, vous pouvez passer :

* un objet plage 4D Write Pro, ou
* un élément (en-tête / pied / corps / tableau / ligne / paragraphe / section / sous-section).

## Exemple 

Vous souhaitez modifier la couleur de bordure des images uniquement : 

```4d
 $oPicts:=WP Picture range($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

## Voir aussi 

*Manipuler des images*  
*Utiliser les commandes du thème Texte multistyle*  
[WP Add picture](../commands/wp-add-picture)  
[WP INSERT PICTURE](../commands/wp-insert-picture)  
[WP Paragraph range](../commands/wp-paragraph-range)  
[WP Selection range](../commands/wp-selection-range)  
[WP Text range](../commands/wp-text-range)  

