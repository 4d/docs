---
id: disable-menu-item
title: DISABLE MENU ITEM
slug: /commands/disable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DISABLE MENU ITEM.Syntax-->**DISABLE MENU ITEM** ( *menu* ; *ligneMenu* {; *process*} )<!-- END REF-->
<!--REF #_command_.DISABLE MENU ITEM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| process | Integer | &#8594;  | Numéro de référence du process |

<!-- END REF-->

## Description 

<!--REF #_command_.DISABLE MENU ITEM.Summary-->**DISABLE MENU ITEM** désactive la commande de menu dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*.

Si le paramètre *ligneMenu* désigne un sous-menu hiérarchique, toutes les lignes de ce menu et de ses éventuels sous-menus sont inactivées. Cette commande fonctionne également avec une barre de menus créée avec la commande [Create menu](create-menu.md) et installée avec la commande [SET MENU BAR](set-menu-bar.md).

Si vous omettez le paramètre *process*, **DISABLE MENU ITEM** s'applique à la barre de menus du process courant. Sinon, **DISABLE MENU ITEM** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

**Astuce :** Pour activer/inactiver toutes les lignes de menus en une fois, passez 0 (zéro) dans *ligneMenu*.

## Voir aussi 

[ENABLE MENU ITEM](enable-menu-item.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 150 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


