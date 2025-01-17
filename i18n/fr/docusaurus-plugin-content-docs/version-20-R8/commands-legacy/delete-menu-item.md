---
id: delete-menu-item
title: DELETE MENU ITEM
slug: /commands/delete-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DELETE MENU ITEM.Syntax-->**DELETE MENU ITEM** ( *menu* ; *ligneMenu* {; *process*} )<!-- END REF-->
<!--REF #_command_.DELETE MENU ITEM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| process | Integer | &#8594;  | Numéro de référence de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE MENU ITEM.Summary-->La commande **DELETE MENU ITEM** supprime la ligne de menu dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*.

Si la ligne de menu désignée par *menu* et *ligneMenu* est elle-même un menu géré par référence et créé par exemple à l’aide la commande [Create menu](create-menu.md), **DELETE MENU ITEM** supprimera uniquement l’instance de *ligneMenu* dans *menu*. Le sous-menu référencé par *ligneMenu* continuera d’exister en mémoire. Vous devez utiliser la commande [RELEASE MENU](release-menu.md) afin de supprimer définitevement un menu géré par référence.   
Cette commande fonctionne également avec une barre de menus créée avec la commande [Create menu](create-menu.md) et installée avec la commande [SET MENU BAR](set-menu-bar.md).

Si vous omettez le paramètre *process*, **DELETE MENU ITEM** s'applique à la barre de menus du process courant. Sinon, **DELETE MENU ITEM** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

**Note :** Pour soigner l'ergonomie de votre interface, ne laissez pas accessible un menu ne comportant aucune ligne.

#### Voir aussi 

[APPEND MENU ITEM](append-menu-item.md)  
[INSERT MENU ITEM](insert-menu-item.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 413 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


