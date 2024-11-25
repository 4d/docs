---
id: get-menu-item-property
title: GET MENU ITEM PROPERTY
slug: /commands/get-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM PROPERTY.Syntax-->**GET MENU ITEM PROPERTY** ( *menu* ; *ligneMenu* ; *propriété* ; *valeur* {; *process*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM PROPERTY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| propriété | Text | &#8594;  | Type de propriété |
| valeur | any | &#8592; | Valeur de la propriété |
| process | Integer | &#8594;  | Numéro de process |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET MENU ITEM PROPERTY.Summary-->La commande **GET MENU ITEM PROPERTY** retourne dans le paramètre *valeur* la valeur courante de la propriété de la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF-->  
Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au menu.

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) ou un numéro de menu. Si vous passez un identifiant unique, le paramètre *process* est inutile et sera ignoré s’il est passé. Si vous passez un numéro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez désigner un autre process, passez son numéro dans le paramètre facultatif *process*.

Passez dans le paramètre *propriété* la propriété dont vous souhaitez obtenir la valeur. Vous pouvez utiliser l’une des constantes du thème “*Propriétés des lignes de menu*” ou une chaîne correspondant à une propriété personnalisée. Pour plus d’informations sur les propriétés des menus et leurs valeurs, reportez-vous à la description de la commande [SET MENU ITEM PROPERTY](set-menu-item-property.md).

**Note de compatibilité :** Par défaut, si la variable *valeur* n'est pas typée explicitement ou est déclarée de type texte, la commande retournera un nom d'*Action standard*. Si vous souhaitez obtenir une valeur numérique comme défini dans le thème de constantes (obsolète) *Valeurs pour Actions standard associée*, vous devez déclarer la variable *valeur* de type entier long.

#### Voir aussi 

[SET MENU ITEM PROPERTY](set-menu-item-property.md)  