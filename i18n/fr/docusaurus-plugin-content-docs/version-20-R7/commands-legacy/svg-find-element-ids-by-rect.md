---
id: svg-find-element-ids-by-rect
title: SVG Find element IDs by rect
slug: /commands/svg-find-element-ids-by-rect
displayed_sidebar: docs
---

<!--REF #_command_.SVG Find element IDs by rect.Syntax-->**SVG Find element IDs by rect** ( {* ;} *objetImage* ; *x* ; *y* ; *largeur* ; *hauteur* ; *tabIds* ) : Boolean<!-- END REF-->
<!--REF #_command_.SVG Find element IDs by rect.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objetImage est un nom d'objet (chaîne) <br/>Si omis, objetImage est un champ ou une variable |
| objetPicture | Picture | &#8594;  | Nom d’objet (si * spécifié) ou Champ ou Variable (si * omis) |
| x | Integer | &#8594;  | Coordonnée horizontale du coin haut gauche du rectangle de sélection |
| y | Integer | &#8594;  | Coordonnée verticale du coin haut gauche du rectangle de sélection |
| largeur | Integer | &#8594;  | Largeur du rectangle de sélection |
| hauteur | Integer | &#8594;  | Hauteur du rectangle de sélection |
| tabIds | Text array | &#8592; | IDs des éléments dont le rectangle englobant est en intersection avec le rectangle de sélection |
| Résultat | Boolean | &#8592; | Vrai = au moins un élément est trouvé, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG Find element IDs by rect.Summary-->La commande **SVG Find element IDs by rect** remplit le tableau texte *tabIds* avec les IDs (attribut "id" ou "xml:id") des éléments XML dont le rectangle englobant est en intersection avec le rectangle de sélection à l’emplacement défini par les paramètres *x* et *y*.<!-- END REF-->

La commande retourne Vrai si au moins un élément est trouvé (c’est-à-dire si le tableau *tabIds* est non vide) et Faux sinon. 

Cette commande permet notamment de gérer des interfaces graphiques interactives. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objetImage* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objetImage* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).  
Si vous travaillez avec un champ ou une variable image, la commande utilise l'image d'origine, correspondant à la source de données (*datasource*). En revanche, si vous travaillez avec un objet du formulaire, la commande utilise l'image courante, éventuellement modifiée via la commande [SVG SET ATTRIBUTE](svg-set-attribute.md) et qui est conservée avec les propriétés de l'objet du formulaire.

Les coordonnées passées dans les paramètres *x* et *y* doivent être exprimées en pixels relativement à l’angle supérieur gauche de l’image (0,0). Vous pouvez utiliser les valeurs retournées par les *Variables système* MouseX et MouseY. Ces variables sont mises à jour dans les événements formulaire On Clicked, On Double Clicked ainsi que On Mouse Enter et On Mouse Move. 

**Note :** Dans le système de coordonnées des images, \[x;y\] définit toujours le même point, quel que soit le format d’affichage de l’image, hormis pour le format "mosaïque". 

Tous les ID d’éléments dont le rectangle englobant est en intersection avec le rectangle de sélection sont pris en compte, même ceux situés sous d’autres éléments.

#### Voir aussi 

[SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1109 |
| Thread safe | &cross; |


