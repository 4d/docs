---
id: get-menu-item-key
title: Get menu item key
slug: /commands/get-menu-item-key
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item key.Syntax-->**Get menu item key** ( *menu* ; *ligneMenu* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item key.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de la ligne de menu ou -1 pour la dernière ligne ajoutée |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Integer | &#8592; | Code de caractère de de la touche de raccourci standard associée à la ligne de menu |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get menu item key.Summary-->La commande **Get menu item key** retourne le code de la touche **Ctrl** (sous Windows) ou **Commande** (Mac OS) utilisée comme raccourci clavier pour la commande de menu dont le numéro ou la référence de menu et le numéro de ligne ont été passés dans *menu* et *ligneMenu*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*. 

Si vous ne passez pas le paramètre *process*, **Get menu item key** est appliquée à la barre de menus du process courant. Sinon, **Get menu item key** est appliquée à la barre de menus du process dont la référence est passée dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

Si la ligne de menu n'a pas de touche de raccourci associée ou si le paramètre *ligneMenu* désigne un sous-menu hiérarchique, **Get menu item key** retourne *0* (zéro).

#### Exemple 

Pour obtenir le raccourci clavier associé à une ligne de menu, il est utile de mettre en place une structure de programmation du type suivant :

```4d
 If(Get menu item key(monmenu;1)#0)
    $modifiers:=Get menu item modifiers(monmenu;1)
    Case of
       :($modifiers=Option key mask)
          ...
       :($modifiers=Shift key mask)
          ...
       :($modifiers=Option key mask+Shift key mask)
          ...
    End case
 End if
```

#### Voir aussi 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  