---
id: set-menu-item
title: SET MENU ITEM
slug: /commands/set-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM.Syntax-->**SET MENU ITEM** ( *menu* ; *ligneMenu* ; *libelléElément* {; *process*}{; *} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| libelléElément | Text | &#8594;  | Nouveau libellé de la ligne de menu |
| process | Integer | &#8594;  | Numéro de référence de process |
| * | Opérateur | &#8594;  | Si passé : considérer les métacaractères comme des caractères standard |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM.Summary-->La commande **SET MENU ITEM** remplace le libellé de la ligne de menu, dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu*, par le libellé que vous avez passé dans *texteLigne*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*. 

Si vous ne passez pas le paramètre *\**, les caractères "spéciaux" inclus dans *texteLigne* (tels que ( ; ou !) seront considérés comme des caractères d'instruction (métacaractères). Par exemple, pour définir une ligne de menu comme ligne de séparation, insérez le caractère “-” dans *texteLigne*. Si vous passez le paramètre *\**, les caractères "spéciaux" seront considérés comme des caractères standard. Reportez-vous à la description de la commande [APPEND MENU ITEM](append-menu-item.md) pour plus de détails sur ces caractères. 

Si vous omettez le paramètre *process*, **SET MENU ITEM** s'applique à la barre de menus du process courant. Sinon, **SET MENU ITEM** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

#### Voir aussi 

[APPEND MENU ITEM](append-menu-item.md)  
[Get menu item](get-menu-item.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 348 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


