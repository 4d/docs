---
id: set-menu-item-style
title: SET MENU ITEM STYLE
slug: /commands/set-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM STYLE.Syntax-->**SET MENU ITEM STYLE** ( *menu* ; *ligneMenu* ; *styleLigne* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM STYLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| styleLigne | Integer | &#8594;  | Nouveau style de la ligne de menu |
| process | Integer | &#8594;  | Numéro de référence du process |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM STYLE.Summary-->La commande **SET MENU ITEM STYLE** remplace le style de police de la ligne de menu, dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu*, par le style de police que vous avez passé dans *styleLigne*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*.

Si vous omettez le paramètre *process*, **SET MENU ITEM STYLE** s'applique à la barre de menus du process courant. Sinon, **SET MENU ITEM STYLE** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

Vous pouvez définir le style de l'élément dans le paramètre *styleLigne*. Vous passez une ou une combinaison des constantes prédéfinies suivantes, placées dans le thème *Styles de caractères* :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Plain     | Entier long | 0      |
| Underline | Entier long | 4      |

#### Voir aussi 

[Get menu item style](get-menu-item-style.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 425 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


