---
id: menu-bar-height
title: Menu bar height
slug: /commands/menu-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar height.Syntax-->**Menu bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Menu bar height.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Hauteur (exprimée en pixels) de la barre de menus (retourne zéro si la barre de menus est cachée) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Menu bar height.Summary-->La commande **Menu bar height** retourne la hauteur de la barre de menus, exprimée en pixels.<!-- END REF--> 

La commande retourne 0 :

* si la barre de menus est masquée,
* en mode SDI sous Windows, si elle est appelée depuis un process dépourvu de fenêtre formulaire. Pour plus d'informations sur ce mode, veuillez vous reporter à la section *Mode SDI sous Windows*.

**Note :** Lorsque l'application est exécutée en mode SDI sous Windows, **Menu bar height** retourne la hauteur d'une seule ligne de barre même si la largeur de la fenêtre est réduite et que la barre de menus est affichée sur deux lignes ou plus. 

#### Voir aussi 

[HIDE MENU BAR](hide-menu-bar.md)  
[Menu bar screen](menu-bar-screen.md)  
[SHOW MENU BAR](show-menu-bar.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 440 |
| Thread safe | &check; |
| Interdite sur le serveur ||


