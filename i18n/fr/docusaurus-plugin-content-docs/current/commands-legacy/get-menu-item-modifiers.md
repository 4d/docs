---
id: get-menu-item-modifiers
title: Get menu item modifiers
slug: /commands/get-menu-item-modifiers
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item modifiers.Syntax-->**Get menu item modifiers** ( *menu* ; *ligneMenu* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item modifiers.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ouNuméro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| process | Integer | &#8594;  | Numéro de process |
| Résultat | Integer | &#8592; | Touche(s) de modification associée(s) à la ligne de menu |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get menu item modifiers.Summary-->La commande **Get menu item modifiers** retourne le ou les modificateur(s) additionnel(s) associé(s) au raccourci standard de la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF-->   
Le raccourci standard est composé de la touche **Commande** (Mac OS) ou **Ctrl** (Windows) et d’une touche personnalisée. Le raccourci standard est géré via les commandes [SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md) et [Get menu item key](get-menu-item-key.md).

Les modificateurs additionnels sont la touche **Majuscule** et la touche **Option** (Mac OS) / **Alt** (Windows). Ces modificateurs ne sont utilisables que si un raccourci standard a été défini au préalable. 

La valeur numérique retournée par la commande correspond au code de la ou des touche(s) de modification additionnelles. Les codes des touches sont les suivants :

* **Majuscule** \= 512
* **Option** (Mac OS) ou **Alt** (Windows) = 2048  
Si les deux touches sont utilisées, leur valeur est cumulée.

**Note :** Vous pouvez évaluer la valeur retournée à l’aide des constantes Shift key mask et Option key mask du thème “*Evénements (Modifiers)*”.

Si la ligne de menu n’a pas de touche de modification associée, la commande retourne 0\.   
Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au menu.

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) ou un numéro de menu.  
Si vous passez un identifiant unique, le paramètre *process* est inutile et sera ignoré s’il est passé.  
Si vous passez un numéro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez désigner un autre process, passez son numéro dans le paramètre facultatif *process*.

#### Exemple 

Reportez-vous à l'exemple de la commande [Get menu item key](get-menu-item-key.md). 

#### Voir aussi 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  