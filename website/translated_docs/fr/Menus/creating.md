---
id: creating
title: Créer des menus et des barres de menus
---

You can create menus and menu bars:

- using the Menus editor of the 4D Toolbox window. In this case, menus and menu bars are stored in the application's structure.
- dynamically, using the language commands from the "Menus" theme. In this case, menus and menu bars are not stored, they only exist in memory.

You can combine both features and use menus created in structure as templates to define menus in memory.

## Barre de menu par défaut

Une application personnalisée doit contenir au moins une barre de menu avec un menu. Par défaut, lorsque vous créez une nouvelle base, 4D crée automatiquement une barre de menu par défaut (Barre n°1) pour que l’utilisateur puisse accéder au mode Application. La barre de menus par défaut (Barre n°1) comporte des menus standard et une commande de retour au mode Développement.

Ce mécanisme permet à l’utilisateur d’accéder au mode Application dès la création de la base. La barre de menus n°1 est automatiquement appelée lorsque la commande **Tester l’application** est sélectionnée dans le menu **Exécution**.

La barre de menus par défaut contient trois menus : Fichier, Edition et Mode.

- **Fichier** : ce menu comporte uniquement la commande **Quitter**. L’action automatique *Quitter* est associée à la commande, ce qui a pour effet de provoquer la fermeture de l’application.
- **Edition** : menu standard et entièrement modifiable. Les fonctions d’édition du type copier, coller, etc. sont définies via des actions standard.
- **Mode** : par défaut, ce menu contient la commande **Retour au mode Développement**, permettant de sortir du mode Application.

> Les libellés apparaissent *en caractères italiques* car il s’agit de références et non de textes en dur. Pour plus d’informations sur ce point, reportez-vous à la section [Utiliser des références dans les titres de menus](properties.md#title).

Vous pouvez modifier cette barre de menus comme vous le souhaitez ou créer des barres de menus supplémentaires.

## Créer des menus

### A l'aide de l'éditeur de menus

1. Sélectionnez la ligne de menu que vous souhaitez créer et cliquez sur le bouton d'ajout ![](assets/en/Menus/PlussNew.png) sous la zone de liste des barres de menu. OU Choisissez la commande **Créer une nouvelle barre de menus** ou **Créer un nouveau menu** dans le menu contextuel de la liste ou dans le menu d’options situé sous la liste. Si vous avez créé une barre de menu, une nouvelle barre de menus apparaît dans la liste, contenant les menus par défaut (Fichier et Edition).
2. (Facultatif) Effectuez un double-clic sur le nom du menu/de la barre de menus afin de le rendre éditable et saisissez un nom personnalisé. OU Saisissez le nom personnalisé dans la zone “Titre”. Les noms des barres de menu doivent être uniques. They may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see [information about the Title property](properties.md#title)).

### A l'aide du langage 4D

Use the `Create menu` command to create a new menu bar or menu reference (*MenuRef*) in memory.

When menus are handled by means of *MenuRef* references, there is no difference per se between a menu and a menu bar. In both cases, it consists of a list of items. Only their use differs. In the case of a menu bar, each item corresponds to a menu which is itself composed of items.

`Create menu` can create empty menus (to fill using `APPEND MENU ITEM` or `INSERT MENU ITEM`) or by menus built upon menus designed in the Menu editor.

## Adding items

For each of the menus, you must add the commands that appear when the menu drops down. You can insert items that will be associated with methods or standard actions, or attach other menus (submenus).

### A l'aide de l'éditeur de menus

To add a menu item:

1. In the list of source menus, select the menu to which you want to add a command. If the menu already has commands, they will be displayed in the central list. If you want to insert the new command, select the command that you want it to appear above. It is still be possible to reorder the menu subsequently using drag and drop.
2. Choose **Add an item to menu “MenuName”** in the options menu of the editor or from the context menu (right click in the central list). OR Click on the add ![](assets/en/Menus/PlussNew.png) button located below the central list. 4D adds a new item with the default name “Item X” where X is the number of items already created.
3. Double-click on the name of the command in order to switch it to editing mode and enter a custom name. OU Saisissez le nom personnalisé dans la zone “Titre”. It may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see below).

### A l'aide du langage 4D

Use `INSERT MENU ITEM` or `APPEND MENU ITEM` to insert or to add menu items in existing menu references.

## Supprimer des menus et des lignes de menus

### A l'aide de l'éditeur de menus

Vous pouvez supprimer une barre de menus, un menu ou une ligne de menu à tout moment. A noter qu’il n’existe qu’une seule référence d’un menu ou barre de menus. Lorsqu’un menu est rattaché à différentes barres ou différents menus, toute modification ou suppression effectuée dans ce menu est immédiatement reportée dans toutes les instances de ce menu. Supprimer un menu supprimera uniquement une référence. Lorsque vous supprimez la dernière référence d'un menu, 4D affiche une alerte.

Pour supprimer une barre de menus, un menu ou une ligne de menu, vous disposez de deux possibilités :

- Sélectionner l’élément à supprimer et de cliquer sur le bouton de suppression ![](assets/en/Menus/MinussNew.png) situé sous la liste.
- Ou, utiliser les commandes **Supprimer la barre de menus** ou **Supprimer le menu** dans le menu contextuel ou le menu d’options de l’éditeur.

> Il est impossible de supprimer Menu Bar #1.

### A l'aide du langage 4D

Utilisez la commandes `SUPPRIMER LIGNE DE MENU` pour supprimer une ligne de la barre de menus. Utilisez la commande `EFFACER MENU` pour ne pas charger le menu de la mémoire.

## Rattacher les menus

Une fois que vous avez créé un menu, vous pouvez le rattacher à une ou plusieurs barres de menus ou à un ou plusieurs autres menus (sous-menus).

Les sous-menus permettent de regrouper des fonctions thématiques à l’intérieur d’un même menu. Les sous-menus et leurs lignes peuvent disposer des mêmes attributs que les menus (actions, méthodes, raccourcis, icônes, etc.). Les lignes du sous-menu conservent leurs caractéristiques et leurs propriétés, le fonctionnement du sous-menu est identique à celui d’un menu standard.

Vous pouvez créer des sous-menus de sous-menus sur une profondeur virtuellement illimitée. A noter toutefois que pour des raisons d’ergonomie d’interface, il n’est généralement pas conseillé de dépasser deux niveaux de sous-menus.

A l'exécution, si un menu rattaché est modifié par programmation, toute autre élément du menu reflétera ces modifications.

### A l'aide de l'éditeur de menus

A menu can be attached to a menu bar or to another menu.

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar: ![](assets/en/Menus/attach.png) You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:  
    ![](assets/en/Menus/attach2.png) You can also select a menu item then click on the options button found below the list. The menu being attached thus becomes a sub-menu. The title of the item is kept (the original sub-menu name is ignored), but this title can be modified.

#### Détacher des menus

Vous pouvez à tout moment détacher un menu d’une barre ou un sous-menu d’un menu. Le menu détaché n’est alors plus disponible dans la barre ou le sous-menu, mais reste présent dans la liste des menus.

Pour détacher un menu, cliquez avec le bouton droit dans la liste centrale sur le menu ou le sous-menu à détacher puis choisissez la commande **Détacher le menu “nom menu” de la barre “nom barre”** ou **Détacher le sous-menu de la ligne “nom ligne”**

### A l'aide du langage 4D

Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the *subMenu* parameter of the `APPEND MENU ITEM` command to attach a menu to a menu bar or an menu.