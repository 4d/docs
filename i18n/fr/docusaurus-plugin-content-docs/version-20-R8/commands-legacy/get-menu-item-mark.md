---
id: get-menu-item-mark
title: Get menu item mark
slug: /commands/get-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item mark.Syntax-->**Get menu item mark** ( *menu* ; *ligneMenu* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item mark.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Text | &#8592; | Marque de ligne de menu courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item mark.Summary-->La commande **Get menu item mark** retourne la marque (ou "coche") de la ligne de menu dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*. 

Si vous omettez le paramètre *process*, **Get menu item mark** s'applique à la barre de menus du process courant. Sinon, **Get menu item mark** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

Si la ligne de menu n'a pas de marque ou si le paramètre *ligneMenu* désigne un sous-menu hiérarchique, **Get menu item mark** retourne une chaîne vide.

**Note :** Pour plus d'informations sur les marques des lignes de menus sous Mac OS et Windows, reportez-vous à la description de la commande [SET MENU ITEM MARK](set-menu-item-mark.md).

#### Exemple 

L'exemple suivant inverse l'état marqué d'une ligne de menu :

```4d
 SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))
```

#### Voir aussi 

[SET MENU ITEM MARK](set-menu-item-mark.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 428 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


