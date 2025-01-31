---
id: get-menu-title
title: Get menu title
slug: /commands/get-menu-title
displayed_sidebar: docs
---

<!--REF #_command_.Get menu title.Syntax-->**Get menu title** ( *menu* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu title.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Text | &#8592; | Titre du menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu title.Summary-->La commande **Get menu title** retourne le titre du menu dont vous avez passé le numéro ou la référence dans *menu*.<!-- END REF-->

Si vous omettez le paramètre *process*, **Get menu title** s'applique à la barre de menus du process courant. Sinon, **Get menu title** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

#### Voir aussi 

[Count menus](count-menus.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 430 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


