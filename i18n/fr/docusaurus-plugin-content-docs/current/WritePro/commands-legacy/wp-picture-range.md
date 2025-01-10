---
id: wp-picture-range
title: WP Picture range
slug: /WritePro/commands/wp-picture-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Picture range.Syntax-->**WP Picture range** ( *objCible* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Picture range.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| Résultat | Object | &#8592; | Plage contenant uniquement les images |

<!-- END REF-->

#### Compatibilité 

<!--REF #_command_.WP Picture range.Summary-->La commande **WP Picture range** était nommée **WP Create picture range** dans les versions précédentes de 4D Write Pro.<!-- END REF--> Elle a été renommée pour plus de clarté. 

#### Description 

La commande **WP Picture range** retourne un objet plage qui référence uniquement les images contenues dans *objCible* que vous avez passé en paramètre. L'objet plage d'images retourné peut être utilisé avec [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) et [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) afin de manipuler les attributs d'images uniquement.

Dans *objCible*, vous pouvez passer :

* un objet plage 4D Write Pro, ou
* un élément (en-tête / pied / corps / tableau / ligne / paragraphe / section / sous-section).

#### Exemple 

Vous souhaitez modifier la couleur de bordure des images uniquement : 

```4d
 $oPicts:=WP Picture range($oSelection)
 WP SET ATTRIBUTES($oPicts;wk border color;"blue")
```

#### Voir aussi 

*Manipuler des images*  
*Utiliser les commandes du thème Texte multistyle*  
[WP Add picture](../commands/wp-add-picture.md)  
[WP INSERT PICTURE](../commands/wp-insert-picture.md)  
[WP Paragraph range](wp-paragraph-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  