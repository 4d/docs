---
id: dynamic-pop-up-menu
title: Dynamic pop up menu
slug: /commands/dynamic-pop-up-menu
displayed_sidebar: docs
---

<!--REF #_command_.Dynamic pop up menu.Syntax-->**Dynamic pop up menu** ( *menu* {; *parDéfaut* {; *coordX* ; *coordY*}} )  : Text<!-- END REF-->
<!--REF #_command_.Dynamic pop up menu.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Référence de menu |
| parDéfaut | Text | &#8594;  | Paramètre de l'élément sélectionné par défaut |
| coordX | Integer | &#8594;  | Coordonnée X du coin supérieur gauche |
| coordY | Integer | &#8594;  | Coordonnée Y du coin supérieur gauche |
| Résultat | Text | &#8592; | Paramètre de l'élément de menu sélectionné |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Dynamic pop up menu.Summary-->La commande **Dynamic pop up menu** fait apparaître un pop up menu hiérarchique à l’emplacement courant de la souris ou à l’emplacement défini par les paramètres facultatifs *coordX* et *coordY*.<!-- END REF-->  
Le menu hiérarchique utilisé doit avoir été créé à l’aide de la commande [Create menu](create-menu.md). La référence retournée par [Create menu](create-menu.md) doit être passée dans le paramètre *menu*.

**Note :** La commande [Pop up menu](pop-up-menu.md) (thème “Interface utilisateur”) permet de créer des pop up menus basés sur du texte.

Conformément aux règles standard d’interface, cette commande doit généralement être appelée en réponse à un clic droit, ou lorsque le bouton reste enfoncé un certain laps de temps (menu contextuel par exemple).

Le paramètre facultatif *parDéfaut* vous permet de définir un élément du pop up menu sélectionné par défaut lorsque celui-ci apparaît. Passez dans ce paramètre la chaîne personnalisée associée à l’élément de menu. Cette chaîne doit avoir été préalablement définie à l’aide de la commande [SET MENU ITEM PARAMETER](set-menu-item-parameter.md). Si vous ne passez pas ce paramètre, le premier élément du menu sera sélectionné par défaut.

**Note :** Seul une ligne de menu de premier niveau peut être sélectionnée par défaut.

Les paramètres facultatifs *coordX* et *coordY* permettent de désigner l’emplacement du pop up menu à afficher. Passez respectivement dans *coordX* et *coordY* les coordonnées horizontale et verticale du coin supérieur gauche du menu. Ces coordonnées doivent être exprimées en pixels dans le système de coordonnées local au formulaire courant. Ces deux paramètres doivent être passés ensemble ; si un seul est passé, il est ignoré.

Si vous souhaitez afficher un pop up associé à un bouton 3D, il suffit de ne pas passer les paramètres facultatifs *coordX* et *coordY*. Dans ce cas, 4D calcule automatiquement l’emplacement du menu par rapport au bouton en fonction des normes d’interface de la plate-forme courante (le bouton 3D doit disposer de la propriété "Avec pop-up menu/Lié" ou "Avec pop-up menu/Séparé").

Si une ligne de menu a été sélectionnée, la commande retourne sa chaîne de caractères personnalisée associée (telle que définie à l’aide de la commande [SET MENU ITEM PARAMETER](set-menu-item-parameter.md)). Sinon, la commande retourne une chaîne vide.

**A partir de 4D v16 R3** : si une action standard est associée à une ligne de menu, elle est prise en compte par la commande **Dynamic pop up menu** à différents niveaux :

* Si une action standard n'est pas activée (c'est-à-dire ne peut pas être appelée) dans le contexte du pop-up menu, le libellé est automatiquement caché. Vous pouvez savoir si une action est disponible en utilisant la commande [Action info](action-info.md).
* Les propriétés liées à une action associée sont automatiquement "checked", "unchecked" ou "mixed" selon la sélection.
* Si le titre de l'action de la ligne de menu a été défini en utilisant la constante ak standard action title, le nom localisé est affiché dans le menu.
* Lorsque la ligne de menu est sélectionnée, l'action standard associée est appelée (l'exécution est asynchrone).

#### Exemple 

Ce code permet de créer un pop up menu dynamique hiérarchique, construit sur les actions standard :

```4d
 var $refMainContextMenu;$refMenuEdit : Text
 $refMainContextMenu:=Créer menu
 APPEND MENU ITEM($refMainContextMenu;"-")
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associée;ak select all)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associée;ak clear)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associée;ak copy)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associée;ak cut)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associée;ak paste)
 APPEND MENU ITEM($refMainContextMenu;"-")
   //Sous-menu Edition
 $refMenuEdit:=Créer menu
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associée;ak font bold)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caractère("B"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associée;ak font italic)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caractère("I"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associée;ak font linethrough)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caractère("L"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associée;ak font underline)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caractère("U"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associée;ak font show dialog)
 APPEND MENU ITEM($refMainContextMenu;"Edition";$refMenuEdit)
 
 paramRef:=Dynamic pop up menu($refMainContextMenu)
```

#### Voir aussi 

[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[Pop up menu](pop-up-menu.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  
[SET MENU ITEM PROPERTY](set-menu-item-property.md)  