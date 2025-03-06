---
id: wp-selection-range
title: WP Selection range
slug: /WritePro/commands/wp-selection-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Selection range.Syntax-->**WP Selection range** ( {* ;} *zoneWP* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Selection range.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, zoneWP est un nom d'objet de formulaire (chaîne). Si omis, zoneWP est un champ ou une variable objet. |
| zoneWP | Text | &#8594;  | Nom d'objet de formulaire (si * spécifié) ou champ ou variable objet 4D Write Pro (si * omis) |
| Résultat | Object | &#8592; | Nouvel objet plage ou image |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Compatibilité 

<!--REF #_command_.WP Selection range.Summary-->La commande **WP Selection range** était nommée **WP Get selection** dans les versions précédentes de 4D Write Pro.<!-- END REF--> Elle a été renommée pour plus de clarté. 

#### Description 

La commande **WP Selection range** retourne une nouvelle plage de sélection ou une nouvelle image basée sur la sélection courante dans la zone 4D Write Pro *zoneWP*.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *zoneWP* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *zoneWP* est un champ ou une variable objet. Si le paramètre *zoneWP* ne désigne pas une zone 4D Write Pro, un objet vide est retourné.

**Note :** Cette commande ne peut être utilisée que si *zoneWP* est associée à un objet de formulaire (i.e. elle est affichée dans le formulaire/la page courant(e)).

Si une image ancrée (image à emplacement fixe) est sélectionnée dans *wpArea*, **WP Selection range** retourne un objet contenant une référence d'image et non un objet plage (pour plus d'informations, reportez-vous à la description de la commande [WP Add picture](../commands/wp-add-picture.md)). Sinon, **WP Selection range** retourne un nouvel objet de type objPlage (pour plus d'informations, reportez-vous au paragraphe *Gestion des plages*).

#### Exemple 

Vous souhaitez récupérer le texte sélectionné dans une zone 4D Write Pro :

```4d
 $range:=WP Selection range(*;"WParea")
```

#### Voir aussi 

[WP Paragraph range](wp-paragraph-range.md)  
[WP Picture range](wp-picture-range.md)  
[WP Text range](wp-text-range.md)  