---
id: count-menu-items
title: Count menu items
slug: /commands/count-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.Count menu items.Syntax-->**Count menu items** ( *menu* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Count menu items.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Integer | &#8592; | Nombre de lignes du menu |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Count menu items.Summary-->La commande **Count menu items** retourne le nombre de lignes (commandes) de menus présentes dans le menu dont vous avez passé le numéro ou la référence dans *menu.<!-- END REF-->*  
  
Si vous omettez le paramètre *process*, **Count menu items** s'applique à la barre de menus du process courant. Sinon, **Count menu items** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

#### Voir aussi 

[Count menus](count-menus.md)  