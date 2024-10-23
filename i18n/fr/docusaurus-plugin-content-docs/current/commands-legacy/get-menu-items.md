---
id: get-menu-items
title: GET MENU ITEMS
slug: /commands/get-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEMS.Syntax-->**GET MENU ITEMS** ( *menu* ; *tabTitresMenus* ; *tabRefsMenus* )<!-- END REF-->
<!--REF #_command_.GET MENU ITEMS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| tabTitresMenus | Text array | &#8592; | Tableau des libellés du menu |
| tabRefsMenus | Text array | &#8592; | Tableau des références du menu |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET MENU ITEMS.Summary-->La commande **GET MENU ITEMS** retourne dans les tableaux *tabTitresMenu* et *tabRefsMenu* les libellés et les identifiants de toutes les lignes du menu ou de la barre de menus désigné(e) par le paramètre *menu*.<!-- END REF-->

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")), un numéro de barre de menus ou une référence de barre de menus obtenue via la commande [Get menu bar reference](get-menu-bar-reference.md).

Lorsqu'aucune référence de menu n’est rattachée à une ligne, une chaîne vide est retournée dans l’élément de tableau correspondant.

#### Exemple 

Vous souhaitez connaître le contenu de la barre de menus du process courant : 

```4d
 ARRAY TEXT(tabTitresMenu;0)
 ARRAY TEXT(tabRefsMenu;0)
 RefBarreMenu:=Get menu bar reference(Frontmost process)
 GET MENU ITEMS(RefBarreMenu;tabTitresMenu;tabRefsMenu)
```
