---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** {( *process* )} : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Integer | &#8592; | Nombre de menus de la barre de menus courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count menus.Summary-->La commande **Count menus** retourne le nombre de menus présents dans la barre de menus.<!-- END REF-->

Si vous omettez le paramètre *process*, **Count menus** s'applique à la barre de menus du process courant. Sinon, **Count menus** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

#### Voir aussi 

[Count menu items](count-menu-items.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 404 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


