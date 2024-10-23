---
id: insert-menu-item
title: INSERT MENU ITEM
slug: /commands/insert-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.INSERT MENU ITEM.Syntax-->**INSERT MENU ITEM** ( *menu* ; *aprèsLigne* ; *libelléElément* {; *sousMenu* {; *process*}}{; *} )<!-- END REF-->
<!--REF #_command_.INSERT MENU ITEM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Numéro de menu ou Référence de menu |
| aprèsLigne | Integer | &#8594;  | Numéro de commande de menu |
| libelléElément | Text | &#8594;  | Libellé de la ligne de menu à insérer |
| sousMenu | Text | &#8594;  | Référence du sous-menu associé à la ligne |
| process | Integer | &#8594;  | Numéro de référence de process |
| * | Opérateur | &#8594;  | Si passé : considérer les métacaractères comme des caractères standard |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.INSERT MENU ITEM.Summary-->La commande **INSERT MENU ITEM** insère de nouvelles lignes dans le menu dont vous avez passé le numéro ou la référence dans *menu* et les place après la ligne de menu dont le numéro est passé dans *aprèsLigne*.<!-- END REF-->

Si vous ne passez pas le paramètre *process*, **INSERT MENU ITEM** est appliquée à la barre de menus du process courant. Sinon, **INSERT MENU ITEM** est appliquée à la barre de menus du process dont la référence est passée dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

Si vous ne passez pas le paramètre *\**, **INSERT MENU ITEM** vous permet d'insérer une ou plusieurs lignes de menus en une seule fois.

**INSERT MENU ITEM** fonctionne comme [APPEND MENU ITEM](append-menu-item.md), hormis le fait qu'elle permet d'insérer des commandes de menu partout dans le menu alors que [APPEND MENU ITEM](append-menu-item.md) les ajoute toujours à la fin du menu.

Reportez-vous à la description de la commande [APPEND MENU ITEM](append-menu-item.md) pour plus de détails sur la définition des commandes de menus passée dans *libelléLigne* et sur l'action du paramètre *\**.

**Note :** La constante ak standard action title est prise en charge dans le paramètre *libelléLigne* (4D v16 R3 et suivantes).

Le paramètre facultatif *sousMenu* vous permet de désigner un menu comme ligne insérée et donc de définir un sous-menu hiérarchique. Vous devez passer dans ce paramètre une référence de menu (chaîne de type [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) désignant un menu créé par exemple à l’aide de la commande [Create menu](create-menu.md). Si la commande insère plusieurs lignes de menus, le sous-menu est associé à la première ligne.

**Important :** Les nouvelles lignes n'ont pas de méthodes ou d'actions associées. Vous devez leur associer une action ou une méthode via les commandes [SET MENU ITEM PROPERTY](set-menu-item-property.md) ou [SET MENU ITEM METHOD](set-menu-item-method.md) ou encore les gérer à partir d'une méthode formulaire qui utilise la fonction [Menu selected](menu-selected.md).

#### Exemple 

L’exemple suivant crée un menu constitué de deux commandes auxquelles il affecte une méthode :

```4d
 refMenu:=Create menu
 APPEND MENU ITEM(refMenu;"Caractères")
 SET MENU ITEM METHOD(refMenu;1;"GestCaracDial")
 INSERT MENU ITEM(refMenu;1;"Paragraphes")
 SET MENU ITEM METHOD(refMenu;2;"GestParDial")
```

#### Voir aussi 

[APPEND MENU ITEM](append-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  