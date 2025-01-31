---
id: get-menu-item-style
title: Get menu item style
slug: /commands/get-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item style.Syntax-->**Get menu item style** ( *menu* ; *ligneMenu* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item style.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| process | Integer | &#8594;  | Numéro de référence de process |
| Résultat | Integer | &#8592; | Style courant de la ligne de menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item style.Summary-->La commande **Get menu item style** retourne le style de police de la ligne de menu dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*.

Si vous omettez le paramètre *process*, **Get menu item style** s'applique à la barre de menus du process courant. Sinon, **Get menu item style** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

**Get menu item style** retourne une combinaison (une ou une somme) des constantes prédéfinies suivantes, placées dans le thème *Styles de caractères* :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Plain     | Entier long | 0      |
| Underline | Entier long | 4      |

#### Exemple 

Si, par exemple, vous voulez tester si une ligne de menu est affichée en gras, vous écrivez :

```4d
 If((Get menu item style($vlMenu;$vlItem)&Bold)#0)
  //...
 End if
```

#### Voir aussi 

[SET MENU ITEM STYLE](set-menu-item-style.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 426 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


