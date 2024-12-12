---
id: set-menu-item-shortcut
title: SET MENU ITEM SHORTCUT
slug: /commands/set-menu-item-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM SHORTCUT.Syntax-->**SET MENU ITEM SHORTCUT** ( *menu* ; *ligneMenu* ; *touche* ; *modificateurs* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM SHORTCUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro du menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| touche | Text, Integer | &#8594;  | Lettre du raccourci clavier ou code de caractère du raccourci clavier (ancienne syntaxe) |
| modificateurs | Integer | &#8594;  | Modificateur(s) à associer au raccourci (ignoré si un code de touche est passé) |
| process | Integer | &#8594;  | Numéro de référence du process |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET MENU ITEM SHORTCUT.Summary-->La commande **SET MENU ITEM SHORTCUT** remplace la touche du raccourci clavier associé à la ligne de menu désignée par *menu* et *ligneMenu*, par le caractère dont vous avez passé le code de caractère ou le texte dans *touche*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*. La touche définie sera combinée à la touche **Ctrl** (Windows) ou **Commande** (Macintosh) pour définir le nouveau raccourci clavier.

Passez dans le paramètre *touche* la lettre désignant la touche de raccourci, par exemple “U” pour définir le raccourci **Ctrl+U** (Windows) ou **Commande+U** (Mac OS). 

Le paramètre *modificateurs* vous permet d’associer un ou plusieurs modificateur(s) additionnel(s) au raccourci standard. Vous pouvez ainsi définir des raccourcis du type **Ctrl+Alt+Maj+Z** (Windows) ou **Cmd+Option+Maj+Z** (macOS). Vous pouvez passer dans *modificateurs* les valeurs suivantes :

* `Command key mask` pour la touche **Commande** (Mac OS) ou **Ctrl** (Windows)
* `Shift key mask` pour la touche **Majuscule**
* `Option key mask` pour la touche **Option** (Mac OS) ou **Alt** (Windows)
* Pour associer plusieurs touches, cumulez leurs valeurs.

Passez 0 si vous ne souhaitez pas ajouter de modificateurs.

La touche **Ctrl** (Windows) ou **Commande** (Mac OS) est automatiquement ajoutée par 4D au raccourci clavier, que vous l'ayez explicitement indiquée ou non dans *modificateurs*. Il n'est donc pas nécessaire d'ajouter la valeur 256 à ce paramètre, sauf si cette touche est le seul modificateur, auquel cas vous devez passer la valeur 256 ou la constante correspondante dans *modificateurs*. 

**Note :** Par compatibilité, la commande admet également un code de caractère comme paramètre *touche* (ancienne syntaxe). Dans ce cas, le paramètre *modificateurs* n’est pas pris en compte et il peut être omis. Le raccourci sera uniquement associé au modificateur **Ctrl** (Windows) ou **Commande** (Mac OS).

Si vous ne passez pas le paramètre *process*, **SET MENU ITEM SHORTCUT** est appliquée à la barre de menus du process courant. Sinon, **SET MENU ITEM SHORTCUT** est appliquée à la barre de menus du process dont la référence est passée dans *process*. 

**Note :** Si vous passez une référence de menu (16 caractères alphanumériques) dans *menu*, le paramètre *process* est inutile et sera ignoré.

Si vous passez *0* (zéro) dans *touche*, l'équivalent clavier de la commande de menu est supprimé.

##### Compatibilité 

Pour des raisons de compatibilité, la commande accepte également un code de caractère dans le paramètre *touche* (ancienne syntaxe). Dans ce cas, le raccourci inclut automatiquement la touche **Ctrl** (Windows) ou **Cmd** (macOS) et le paramètre *modificateurs* n'est pas pris en compte.

Si vous passez 0 (zéro) dans *touche*, les raccourcis spnt supprimés de l'élément de menu.

#### Exemple 1 

Définition du raccourci Ctrl+Maj+U (Windows) et Cmd+Maj+U (Mac OS) pour la ligne “Souligné” :

```4d
 SET MENU ITEM(menuRef;1;"Souligné")
 SET MENU ITEM SHORTCUT(menuRef;1;"U";Shift key mask)
```

#### Exemple 2 

Définition du raccourci Ctrl+R (Windows) et Cmd+R (Mac OS) pour la ligne "Recommencer" :

```4d
 INSERT MENU ITEM(FileMenu;-1;"Recommencer")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"R";Command key mask)
```

#### Exemple 3 

Définition du raccourci F4 pour l'élément de menu "Fermer" : 

```4d
 INSERER ELEMENT MENU(FileMenu;-1;"Fermer")
 FIXER RACCOURCI ELEMENT MENU(FileMenu;-1;"[F4]";0)
```

#### Voir aussi 

[Get menu item key](get-menu-item-key.md)  
[Get menu item modifiers](get-menu-item-modifiers.md)  