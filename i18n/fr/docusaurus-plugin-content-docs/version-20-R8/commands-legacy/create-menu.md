---
id: create-menu
title: Create menu
slug: /commands/create-menu
displayed_sidebar: docs
---

<!--REF #_command_.Create menu.Syntax-->**Create menu** {( *menu* )} : Text<!-- END REF-->
<!--REF #_command_.Create menu.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Text, Integer, Text | &#8594;  | Référence de menu ou Numéro ou Nom de barre de menus |
| Résultat | Text | &#8592; | Référence du menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Create menu.Summary-->La commande **Create menu** permet de créer un nouveau menu en mémoire.<!-- END REF--> Ce menu n’existera qu’en mémoire et ne sera pas ajouté dans l’éditeur de menus en mode Développement. Toute modification effectuée sur ce menu durant la session sera immédiatement répercutée à l’ensemble des instances de ce menu et ce, dans tous les process de la base.

La commande retourne un identifiant unique de type [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") pour le nouveau menu.

* Si vous ne passez pas le paramètre facultatif *menu*, le menu sera créé vide. Vous devrez le construire et le gérer à l’aide des commandes [RELEASE MENU](release-menu.md), [SET MENU ITEM](set-menu-item.md), etc.
* Si vous passez le paramètre *menu*, le menu créé sera une copie exacte du menu source désigné par ce paramètre. Toutes les propriétés du menu source, y compris les éventuels sous-menus associés, seront appliquées au nouveau menu. A noter qu’une nouvelle référence [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") est créée pour le menu source et pour chaque sous-menu associé existant.

Vous pouvez passer dans *menu* soit une référence de menu valide, soit un numéro ou un nom de barre de menus défini en mode Développement. Dans ce dernier cas, le nouveau menu sera constitué des menus et sous-menus de la barre d’origine. 

**Note :** Si vous passez une valeur invalide dans *menu*, un menu vide est créé.

Un menu créé par cette commande peut être utilisé en tant que barre de menus à l’aide de la commande [SET MENU BAR](set-menu-bar.md).

Lorsque vous n'avez plus besoin d'un menu créé par [Create menu](create-menu.md), n'oubliez pas d'appeler la commande [RELEASE MENU](release-menu.md) afin de libérer la mémoire qu'il occupe. 

#### Exemple 

Reportez-vous à l'exemple de la commande [SET MENU BAR](set-menu-bar.md).

#### Voir aussi 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[SET MENU BAR](set-menu-bar.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 408 |
| Thread safe | &cross; |


