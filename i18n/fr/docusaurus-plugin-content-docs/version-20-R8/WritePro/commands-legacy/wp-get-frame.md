---
id: wp-get-frame
title: WP Get frame
slug: /WritePro/commands/wp-get-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP Get frame.Syntax-->**WP Get frame** ( {* ;} *zoneWP* {; *textBoxID*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get frame.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, zoneWP est un nom d'objet de formulaire (chaîne). Si omis, zoneWP est un champ ou une variable objet |
| zoneWP | Text | &#8594;  | Nom d'objet de formulaire (si * spécifié) ou champ ou variable objet 4D Write Pro (si * omis) |
| textBoxID | Chaîne | &#x1F858; | ID of the text box (only filled if a text box has the focus) |
| Résultat | Integer | &#8592; | Cadre dans lequel se trouve le curseur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP Get frame.Summary-->La commande **WP Get frame** retourne le cadre de la zone 4D Write Pro *zoneWP* dans lequel se trouve actuellement le curseur.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *zoneWP* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *zoneWP* est un champ ou une variable objet.

**Note :** Cette commande ne peut être utilisée que si *zoneWP* est associé à un objet de formulaire (*i.e* elle est affiché dans le formulaire/la page courant(e)).

La valeur retournée peut être comparée à l'une des constantes suivantes du thème *Constantes 4D Write Pro* :

| Constante                         | Type        | Valeur | Comment                                                                                                      |
| --------------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| wk body                           | Entier long | 0      | Zone de corps (*body*) de la section                                                                         |
| wk current section default footer | Entier long | 10     | Pied de page par défaut de la section (disponible uniquement s'il n'y a pas de pied de sous-section active). |
| wk current section default header | Entier long | 9      | En-tête par défaut de la section (disponible uniquement s'il n'y a pas d'en-tête de sous-section active).    |
| wk current section first footer   | Entier long | 4      | Pied de la première page de la section                                                                       |
| wk current section first header   | Entier long | 3      | En-tête de la première page de la section                                                                    |
| wk current section left footer    | Entier long | 6      | Pied de la (des) page(s) gauche(s) de la section                                                             |
| wk current section left header    | Entier long | 5      | En-tête de la (des) page(s) gauche(s) de la section                                                          |
| wk current section right footer   | Entier long | 8      | Pied de la (des) page(s) droite(s) de la section                                                             |
| wk current section right header   | Entier long | 7      | En-tête de la (des) page(s) droite(s) de la section                                                          |
| wk text box                       | Entier long | 11     | Zone de texte                                                                                                |

Si le curseur est placé dans un élément de zone de texte, l'**id** de l'élément de la zone de texte est retourné dans le paramètre *textBoxID*. Dans tous les autres cas, ce paramètre est retourné vide.

#### Exemple 

Vous souhaitez vous assurer que l'utilisateur a placé le curseur dans un cadre d'en-tête ou de pied de page :

```4d
 var $frameGet : Integer
 $frameGet:=WP Get frame(*;"WParea")
 If($frameGet=wk body)|($frameGet=wk text box)
    ALERT("Veuillez sélectionner une zone d'en-tête ou de pied de page.")
 End if
```

#### Voir aussi 

[WP Get footer](wp-get-footer.md)  
[WP SET FRAME](wp-set-frame.md)  