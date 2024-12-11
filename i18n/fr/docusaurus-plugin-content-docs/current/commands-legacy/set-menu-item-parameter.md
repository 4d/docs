---
id: set-menu-item-parameter
title: SET MENU ITEM PARAMETER
slug: /commands/set-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PARAMETER.Syntax-->**SET MENU ITEM PARAMETER** ( *menu* ; *ligneMenu* ; *param* )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PARAMETER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| param | Text | &#8594;  | Chaîne à associer en tant que paramètre |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM PARAMETER.Summary-->La commande **SET MENU ITEM PARAMETER** vous permet d’associer une chaîne de caractères personnalisée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF--> 

Ce paramètre sera principalement utilisé par la commande [Dynamic pop up menu](dynamic-pop-up-menu.md).

#### Exemple 

Ce code permet de proposer un menu comportant le libellé des fenêtres ouvertes et de récupérer le numéro de la fenêtre choisie :

```4d
 WINDOW LIST($alFenetre)
 $tRefMenu:=Create menu
 For($i;1;Size of array($alFenetre))
    APPEND MENU ITEM($tRefMenu;Get window title($alFenetre{$i}))  //Libellé de la ligne du menu
    SET MENU ITEM PARAMETER($tRefMenu;-1;String($alFenetre{$i}))  //Valeur retournée par la ligne du menu
 End for
 $tRefFenetre:=Dynamic pop up menu($tRefMenu)
 RELEASE MENU($tRefMenu)
```

#### Voir aussi 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1004 |
| Thread safe | &check; |
| Interdite sur le serveur ||


