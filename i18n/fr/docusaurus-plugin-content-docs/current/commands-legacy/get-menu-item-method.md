---
id: get-menu-item-method
title: Get menu item method
slug: /commands/get-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item method.Syntax-->**Get menu item method** ( *menu* ; *ligneMenu* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item method.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| process | Integer | &#8594;  | Numéro de process |
| Résultat | Text | &#8592; | Nom de la méthode |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get menu item method.Summary-->La commande **Get menu item method** retourne le nom de la méthode projet 4D associée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF-->  
Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au menu. 

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) ou un numéro de menu. Si vous passez un identifiant unique, le paramètre *process* est inutile et sera ignoré s’il est passé. Si vous passez un numéro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez désigner un autre process, passez son numéro dans le paramètre facultatif *process*.

La commande retourne le nom de la méthode 4D sous la forme d’une chaîne de caractères (expression). Si aucune méthode n’est associée à la ligne de menu, la commande retourne une chaîne vide.

#### Voir aussi 

[SET MENU ITEM METHOD](set-menu-item-method.md)  