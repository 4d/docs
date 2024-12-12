---
id: set-menu-item-method
title: SET MENU ITEM METHOD
slug: /commands/set-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM METHOD.Syntax-->**SET MENU ITEM METHOD** ( *menu* ; *ligneMenu* ; *nomMéthode* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM METHOD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| nomMéthode | Text | &#8594;  | Nom de la méthode |
| process | Integer | &#8594;  | Numéro de process |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET MENU ITEM METHOD.Summary-->La commande **SET MENU ITEM METHOD** permet de modifier la méthode projet 4D associée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF-->  
Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au menu.

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) ou un numéro de menu. Si vous passez un identifiant unique, la commande s’appliquera à toutes les instances du menu dans tous les process. Dans ce cas, le paramètre *process* est ignoré s’il est passé. Si vous passez un numéro de menu, la commande s’appliquera au menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez désigner un autre process, passez son numéro dans le paramètre facultatif *process*.

Passez dans *nomMéthode* le nom de la méthode 4D sous la forme d’une chaîne de caractères (expression).

**Note :** Si la ligne de menu correspond au libellé d’un sous-menu hiérarchique, la méthode ne sera pas appelée lorsque la ligne de menu sera sélectionnée.

#### Exemple 

Reportez-vous aux exemple de la commande [SET MENU BAR](set-menu-bar.md). 

#### Voir aussi 

[Get menu item method](get-menu-item-method.md)  