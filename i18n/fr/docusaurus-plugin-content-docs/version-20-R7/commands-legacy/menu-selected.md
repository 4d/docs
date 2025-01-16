---
id: menu-selected
title: Menu selected
slug: /commands/menu-selected
displayed_sidebar: docs
---

<!--REF #_command_.Menu selected.Syntax-->**Menu selected** {( *sousMenu* )} : Integer<!-- END REF-->
<!--REF #_command_.Menu selected.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sousMenu | Text | &#8592; | Référence du menu contenant la ligne sélectionnée |
| Résultat | Integer | &#8592; | Commande de menu sélectionnée : Mot machine haut = n° de menu, Mot machine bas = n° de commande de menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Menu selected.Summary-->**Menu selected** ne s'utilise que lorsqu'un formulaire est affiché.<!-- END REF--> Cette fonction détecte la commande de menu choisie dans un menu et, dans le cas d'un sous-menu hiérarchique, retourne la référence du sous-menu.

**Astuce :** A chaque fois que cela est possible, utilisez des méthodes associées à des commandes de menus dans une barre associée (avec un numéro de barre négatif) plutôt que d'appeler **Menu selected**. Les barres de menus associées sont plus faciles à gérer, puisqu'il n'est pas nécessaire de tester leur sélection.

La commande **Menu selected** permet de travailler avec des sous-menus hiérarchiques. En cas de sélection d’une ligne d’un menu hiérarchique au-delà du premier niveau, la commande retourne dans le paramètre facultatif *sousMenu* la référence (type RefMenu, chaîne de 16 caractères) du sous-menu auquel appartient la ligne sélectionnée. Si la commande du menu ne contient pas de sous-menu hiérarchique, ce paramètre reçoit une chaîne vide.

**Menu selected** retourne le numéro système du menu sélectionné sous forme d'Entier long. Pour obtenir le numéro du menu, divisez **Menu selected** par 65536 et convertissez le résultat en Entier. Pour obtenir le numéro de la commande de menu, calculez le modulo de **Menu selected** avec le coefficient 65536\. Utilisez les formules suivantes pour calculer le numéro du menu et de la commande de menu :

```4d
 Menu:=Menu selected\ 65536
 Ligne de menu:=Menu selected% 65536
```

Vous pouvez également extraire ces valeurs à l'aide des [SET AUTOMATIC RELATIONS](set-automatic-relations.md), comme dans l'exemple suivant :

```4d
 Menu:=(Menu selected & 0xFFFF0000)>>16
 Ligne de menu:=Menu selected & 0xFFFF
```

Menu choisi retourne 0 si aucune commande de menu n'est sélectionnée.

#### Exemple 

La méthode formulaire suivante utilise la fonction **Menu selected** pour fournir les arguments "menu" et "ligne de menu" à [SET MENU ITEM MARK](set-menu-item-mark.md) :

```4d
 Case of
    :(FORM Event=On Menu Selected)
       C_STRING(16;$refMenuIncludingItem)
       var $ref;$NumMenu;$NumMenuItem : Integer
       $ref:=Menu selected($refMenuIncludingItem)
       $NumMenu:=$ref\65536
       $NumMenuItem:=$ref%65536
       SET MENU ITEM MARK($refMenuIncludingItem;$NumMenuItem;Char(18))
 End case
```

**Note :** L’événement On Menu Selected n’est pas activé si aucune ligne n'est sélectionnée, *$refmenuincludingItem* est toujours renseigné et *$NumMenu* vaut 0 si le menu n’est pas un des menus de la barre.

#### Voir aussi 

*Gestion des menus*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 152 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


