---
id: set-menu-item-mark
title: SET MENU ITEM MARK
slug: /commands/set-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM MARK.Syntax-->**SET MENU ITEM MARK** ( *menu* ; *ligneMenu* ; *marque* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM MARK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| marque | Text | &#8594;  | Nouvelle marque de ligne de menu |
| process | Integer | &#8594;  | Numéro de référence du process |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM MARK.Summary-->La commande **SET MENU ITEM MARK** remplace la marque (ou "coche") de la ligne de menu dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu* par le premier caractère de la chaîne que vous avez passée dans *marque* (sous Mac OS) ou par la coche standard (sous Windows).<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*. 

Si vous omettez le paramètre *process*, **SET MENU ITEM MARK** s'applique à la barre de menus du process courant. Sinon, **SET MENU ITEM MARK** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

Si vous passez une chaîne vide dans *marque*, vous supprimez toute marque de la ligne de menu.   
Sinon :

* Sous Mac OS, le premier caractère de la chaîne devient la marque de la ligne de menu (généralement, le [Char](char.md)(18), qui est la coche standard de Mac OS, est utilisé).
* Sous Windows, la marque standard de Windows est associée au menu.

#### Exemple 

Reportez-vous à l'exemple de la commande [Get menu item mark](get-menu-item-mark.md).

#### Voir aussi 

[Get menu item mark](get-menu-item-mark.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 208 |
| Thread safe | &check; |
| Interdite sur le serveur ||


