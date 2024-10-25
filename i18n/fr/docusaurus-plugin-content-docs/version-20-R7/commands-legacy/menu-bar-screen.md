---
id: menu-bar-screen
title: Menu bar screen
slug: /commands/menu-bar-screen
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar screen.Syntax-->**Menu bar screen**  -> Résultat<!-- END REF-->
<!--REF #_command_.Menu bar screen.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Numéro de l'écran contenant la barre de menus |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Menu bar screen.Summary-->La commande **Menu bar screen** retourne le numéro de l'écran dans lequel se trouve la barre de menus.<!-- END REF-->

**Note pour les utilisateurs Windows :** Sous Windows, **Menu bar screen** renvoie toujours 1.

#### Voir aussi 

[Count screens](count-screens.md)  
[Menu bar height](menu-bar-height.md)  