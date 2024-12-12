---
id: object-get-scroll-position
title: OBJECT GET SCROLL POSITION
slug: /commands/object-get-scroll-position
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLL POSITION.Syntax-->**OBJECT GET SCROLL POSITION** ( {* ;} *objet* ; *positionLigne* {; *positionH*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLL POSITION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| positionLigne | Integer | &#8592; | Numéro de la première ligne affichée ou Défilement vertical en pixels (images) |
| positionH | Integer | &#8592; | Numéro de la première colonne affichée (list box) ou<br/>Défilement horizontal en pixels (images) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT GET SCROLL POSITION.Summary-->La commande **OBJECT GET SCROLL POSITION** retourne dans les paramètres *positionLigne* et *positionH* des informations relatives à la position des barres de défilement de l’objet de formulaire désigné par les paramètres *\** et *objet*.<!-- END REF-->

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *objet* est le nom d’un objet de type sous-formulaire, liste hiérarchique, zone de défilement, list box ou image (dans ce cas, passez une chaîne dans objet). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ([RefListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique") de liste hiérarchique, image ou list box) ou un champ. 

**Note :** Avec les objets de type sous-formulaire, seule la syntaxe avec *\** est prise en charge. 

Si *objet* désigne un objet de type liste (sous-formulaire, liste hiérarchique, zone de défilement ou list box), *positionLigne* retourne le numéro de la première ligne affichée dans l’objet. *positionH* (list box uniquement) retourne le numéro de la première colonne affichée dans la partie gauche de la list box. Avec les autres types d’objets, ce paramètre retourne 0.

Si *objet* désigne une image (variable ou champ), *positionLigne* retourne le décalage vertical et *positionH* le décalage horizontal de l’image. Ces valeurs sont exprimées en pixels par rapport à l’origine de l’image dans le système de coordonnées locales. 

#### Voir aussi 

[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  