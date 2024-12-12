---
id: get-list-properties
title: GET LIST PROPERTIES
slug: /commands/get-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST PROPERTIES.Syntax-->**GET LIST PROPERTIES** ( *liste* ; *apparence* {; *icône* {; *hauteurLigne* {; *doubleClic* {; *multiSélection* {; *modifiable*}}}}} )<!-- END REF-->
<!--REF #_command_.GET LIST PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Numéro de référence de la liste |
| apparence | Integer | &#8592; | Style graphique de la liste 1 = Liste hiérarchique à la Macintosh 2 = Liste hiérarchique à la Windows |
| icône | Integer | &#8592; | *** Paramètre obsolète, retourne 0 *** |
| hauteurLigne | Integer | &#8592; | Hauteur minimale de la ligne (pixels) |
| doubleClic | Integer | &#8592; | Déploiement/contraction sur double-clic 0 = autorisé, 1= empêché |
| multiSélection | Integer | &#8592; | Sélections multiples : 0 = interdites, 1 = autorisées |
| modifiable | Integer | &#8592; | Enumération modifiable : 0 = non, 1 = oui |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET LIST PROPERTIES.Summary-->La commande **GET LIST PROPERTIES** retourne des informations sur la liste hiérarchique dont vous avez passé le numéro de référence dans le paramètre *liste*.<!-- END REF-->

Le paramètre *apparence* retourne le style graphique de la liste.  
Le paramètre *icône* est obsolète, il retourne toujours 0.  
Le paramètre *hauteurLigne* retourne la hauteur de ligne minimale.  
Si le paramètre *doubleClic* vaut 1, le déploiement ou la contraction des sous-listes en cas de double-clic sur l’élément parent est désactivé(e). Si *doubleClic* vaut 0, ce fonctionnement est actif (valeur par défaut).   
Si le paramètre *multiSélection* vaut 0, la sélection multiple d’éléments (manuelle ou par programmation) n’est pas possible dans la liste. S’il vaut 1, la sélection multiple est permise.   
Si le paramètre *modifiable* vaut 1, la liste est modifiable lorsqu’elle est affichée sous forme d’énumération dans les enregistrements. S’il vaut 0, la liste n’est pas modifiable. 

Ces propriétés peuvent être définies à l'aide de la commande [SET LIST PROPERTIES](set-list-properties.md) et/ou dans l'éditeur d'énumérations en mode Développement, si la liste a été créée dans cet éditeur ou sauvegardée avec la commande [SAVE LIST](save-list.md).

Pour une description complète de ces propriétés d'apparence et de comportement, reportez-vous à la commande [SET LIST PROPERTIES](set-list-properties.md).

#### Voir aussi 

[SET LIST PROPERTIES](set-list-properties.md)  