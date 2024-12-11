---
id: get-menu-item
title: Get menu item
slug: /commands/get-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item.Syntax-->**Get menu item** ( *menu* ; *ligneMenu* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Text | &#8592; | Libellé de la ligne de menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item.Summary-->La commande **Get menu item** retourne le libellé de la commande de menu dont le numéro ou la référence de menu et le numéro de commande ont été passés dans *menu* et *ligneMenu*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*. 

Si vous ne passez pas le paramètre *process*, **Get menu item** est appliquée à la barre de menus du process courant. Sinon **Get menu item** est appliquée à la barre de menus du process dont la référence est passée dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

#### Voir aussi 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM](set-menu-item.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 422 |
| Thread safe | &check; |
| Interdite sur le serveur ||


