---
id: object-get-best-size
title: OBJECT GET BEST SIZE
slug: /commands/object-get-best-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET BEST SIZE.Syntax-->**OBJECT GET BEST SIZE** ( {* ;} *objet* ; *largeurOpti* ; *hauteurOpti* {; *largeurMaxi*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET BEST SIZE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d'objet (chaîne) Si omis = objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Champ ou variable (si * est omis |
| largeurOpti | Integer | &#8592; | Largeur optimale de l’objet |
| hauteurOpti | Integer | &#8592; | Hauteur optimale de l’objet |
| largeurMaxi | Integer | &#8594;  | Largeur maximum de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET BEST SIZE.Summary-->La commande **OBJECT GET BEST SIZE** retourne dans les paramètres *largeurOpti* et *hauteurOpti* la largeur et la hauteur “optimales” de l’objet de formulaire désigné par les paramètres *\** et *objet*.<!-- END REF--> Ces valeurs sont exprimées en pixels. Cette commande est particulièrement utile dans le cadre de l’affichage ou de l’impression d’états complexes, associée à la commande [OBJECT MOVE](object-move.md). 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne de caractères). Si vous ne passez pas le paramètre \*, vous indiquez que *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (de type objet uniquement).

Les valeurs optimales retournées indiquent la taille minimale de l’objet pour que son contenu courant soit entièrement inclus dans ses limites. En général, ces valeurs n’ont de sens qu’avec des objets contenant du texte. Ce calcul tient compte de la police, de sa taille, de son style et du contenu de l’objet. Il tient compte également des césures et des retours chariot. A noter que dans le cas des boutons 3D, la commande fonctionne même si le bouton contient uniquement une icône.   
Si l’objet spécifié est vide, la *largeurOpti* retournée est 0\. 

La taille retournée ne tient pas compte du cadre graphique éventuellement appliqué autour de l’objet ni des barres de défilement. Pour obtenir la taille réelle d’un objet à l’écran, il sera nécessaire d’ajouter l’épaisseur de ces éléments. 

Le paramètre optionnel *largeurMaxi* vous permet d’attribuer une largeur maximale à l’objet. Si la largeur optimale de l’objet est supérieure à cette valeur, **OBJECT GET BEST SIZE** retourne *largeurMaxi* dans le paramètre *largeurOpti* et augmente la hauteur optimale en conséquence.

Les objets pris en charge par cette commande sont les suivants :

* Zones de texte statiques
* Textes insérés sous forme de références
* Champs et variables de type Alpha, Texte, Réel, Entier, Entier long, Date, Heure, Booléens (cases à cocher et boutons radio)
* Boutons
* Colonnes de list box en contexte d'affichage (seules les lignes visibles sont prises en compte)

Pour tous les autres types d’objets de formulaires (zones de groupes, onglets, rectangles, droites, cercles/ellipses, zones externes, etc.), la commande **OBJECT GET BEST SIZE** retourne la taille courante de l’objet (définie dans l’éditeur de formulaires et éventuellement à l’aide de la commande [OBJECT MOVE](object-move.md)).

#### Exemple 

Reportez-vous à l’exemple de la routine [SET PRINT MARKER](set-print-marker.md). 

#### Voir aussi 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 717 |
| Thread safe | &cross; |


