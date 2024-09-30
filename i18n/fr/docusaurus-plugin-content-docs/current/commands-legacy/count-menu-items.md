---
id: count-menu-items
title: Count menu items
slug: /commands/count-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.Count menu items.Syntax-->**Count menu items** ( *menu* {; *process*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.Count menu items.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Entier long, RefMenu | &#x1F852; | Numéro de menu ou Référence de menu |
| process | Entier long | &#x1F852; | Numéro de référence de process |
| Résultat | Entier long | &#x1F850; | Nombre de lignes du menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count menu items.Summary-->La commande **Count menu items** retourne le nombre de lignes (commandes) de menus présentes dans le menu dont vous avez passé le numéro ou la référence dans *menu.<!-- END REF-->*  
  
Si vous omettez le paramètre *process*, **Count menu items** s'applique à la barre de menus du process courant. Sinon, **Count menu items** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

#### Voir aussi 

[Count menus](count-menus.md)  