---
id: creating
title: Créer des menus et des barres de menus
---

Les barres de menus peuvent être définies :

- dans l'éditeur de menus de la fenêtre de Boîte à outils 4D. Dans ce cas, les menus et barres de menus sont stockés dans la structure de l'application.
- dynamiquement, à l'aide des commandes du langage depuis le thème "Menus". Dans ce cas, les menus et barres de menus ne sont pas stockés, ils existent uniquement dans la mémoire.

Vous pouvez combiner les deux fonctionnalités et utiliser les menus créés dans la structure comme templates pour définir des menus dans la mémoire.

## Barre de menu par défaut

Une application personnalisée doit contenir au moins une barre de menu avec un menu. La barre de menus par défaut (Barre n°1) comporte des menus standard et une commande de retour au mode Développement. La barre de menus par défaut (Barre n°1) comporte des menus standard et une commande de retour au mode Développement.

Cela permet à l'utilisateur d'accéder au mode Application dès que le projet est créé. La barre de menus n°1 est automatiquement appelée lorsque la commande **Tester l’application** est sélectionnée dans le menu **Exécution**.

La barre de menus par défaut contient trois menus : Fichier, Edition et Mode.

- **Fichier** : ce menu comporte uniquement la commande **Quitter**. L’action automatique *Quitter* est associée à la commande, ce qui a pour effet de provoquer la fermeture de l’application.
- **Edition** : menu standard et entièrement modifiable. Les fonctions d'édition telles que copier, coller, etc. sont définies à l'aide d'actions standard.
- **Mode** : par défaut, ce menu contient la commande **Retour au mode Développement**, permettant de sortir du mode Application.
> Les libellés apparaissent *en caractères italiques* car il s’agit de références et non de textes en dur. Pour plus d’informations sur ce point, reportez-vous à la section [Utiliser des références dans les titres de menus](properties.md#title).

Vous pouvez modifier cette barre de menus comme vous le souhaitez ou créer des barres de menus supplémentaires.

## Créer des menus

### A l'aide de l'éditeur de menus

1. Sélectionnez la ligne de menu que vous souhaitez créer et cliquez sur le bouton d'ajout ![](../assets/en/Menus/PlussNew.png) sous la zone de liste des barres de menu. OU Choisissez la commande **Créer une nouvelle barre de menus** ou **Créer un nouveau menu** dans le menu contextuel de la liste ou dans le menu d’options situé sous la liste. Si vous avez créé une barre de menu, une nouvelle barre de menus apparaît dans la liste, contenant les menus par défaut (Fichier et Edition).
2. (Facultatif) Effectuez un double-clic sur le nom du menu/de la barre de menus afin de le rendre éditable et saisissez un nom personnalisé. OU Saisissez le nom personnalisé dans la zone “Titre”. Les noms des barres de menu doivent être uniques. Ils peuvent comporter jusqu’à 31 caractères. Vous pouvez saisir le nom "en dur" ou saisir une référence (voir les [informations sur la propriété Titre](properties.md#title)).

### A l'aide du langage 4D

Utilisez la commande `Create menu` pour créer une nouvelle barre de menu ou une référence de menu (*MenuRef*) en mémoire.

Lorsque les menus sont gérés par des références *MenuRef*, il n'y a pas de différence en soi entre un menu et une barre de menus. Dans les deux cas, il s'agit d'une liste d'éléments. Seul leur utilisation diffère. Dans le cas d'une barre de menus, chaque élément correspond à un menu lui-même composé d'éléments.

`Create menu` permet de créer des menus vides (à remplir à l'aide de `APPEND MENU ITEM` ou `INSERT MENU ITEM`) ou des menus créés à partir de menus conçus dans l'éditeur de menus.

## Ajouter des lignes

Pour chacun des menus, vous devez ajouter les commandes qui apparaissent lorsque le menu est déroulé. Vous pouvez insérer des lignes qui seront associées à des méthodes ou à des actions standard, ou rattacher d’autres menus (sous-menus).

### A l'aide de l'éditeur de menus

Pour ajouter une ligne de menu :

1. Dans la liste des menus source, sélectionnez le menu auquel vous souhaitez ajouter une commande. Si le menu contient déjà des commandes, elles seront affichées dans la liste centrale. Si vous souhaitez insérer la nouvelle commande, sélectionnez celle que vous souhaitez voir apparaître ci-dessus. Il est toujours possible de réorganiser le menu ultérieurement par glisser-déposer.
2. Choisissez **Ajouter une ligne au menu “MenuName”** dans le menu d'options de l'éditeur ou depuis le menu contextuel (clic droit dans la liste centrale). OU Cliquez sur le bouton Ajouter ![](../assets/en/Menus/PlussNew.png) situé sous la liste centrale. 4D ajoute une nouvelle ligne avec le nom par défaut “Ligne X”, où X représente le nombre de lignes déjà créées.
3. Double-cliquez sur le nom de la commande pour passer en mode édition et saisissez un nom personnalisé. OU Saisissez le nom personnalisé dans la zone “Titre”. Il peut comporter jusqu’à 31 caractères. Vous pouvez saisir le nom comme "en dur" ou saisir une référence (voir ci-dessous).

### A l'aide du langage 4D

Utilisez `INSERT MENU ITEM` ou `APPEND MENU ITEM` pour insérer ou ajouter des lignes de menu dans les références de menu existantes.

## Supprimer des menus et des lignes de menus

### A l'aide de l'éditeur de menus

Vous pouvez supprimer une barre de menus, un menu ou une ligne de menu à tout moment. A noter qu’il n’existe qu’une seule référence d’un menu ou barre de menus. Lorsqu’un menu est rattaché à différentes barres ou différents menus, toute modification ou suppression effectuée dans ce menu est immédiatement reportée dans toutes les instances de ce menu. Supprimer un menu supprimera uniquement une référence. Lorsque vous supprimez la dernière référence d'un menu, 4D affiche une alerte.

Pour supprimer une barre de menus, un menu ou une ligne de menu, vous disposez de deux possibilités :

- Sélectionner l’élément à supprimer et de cliquer sur le bouton de suppression ![](../assets/en/Menus/MinussNew.png) situé sous la liste.
- ou, utiliser la commande **Supprimer...** dans le menu contextuel ou le menu d’options de l’éditeur.

> Il est impossible de supprimer la Barre #1.

### A l'aide du langage 4D

Utilisez la commande `DELETE MENU ITEM` pour supprimer une ligne d'une référence de menus. Utilisez la commande `RELEASE MENU` pour supprimer la référence du menu de la mémoire.

## Rattacher des menus

Une fois que vous avez créé un menu, vous pouvez le rattacher à une ou plusieurs barres de menus ou à un ou plusieurs autres menus (sous-menus).

Les sous-menus permettent de regrouper des fonctions thématiques à l’intérieur d’un même menu. Les sous-menus et leurs lignes peuvent disposer des mêmes attributs que les menus (actions, méthodes, raccourcis, icônes, etc.). Les lignes du sous-menu conservent leurs caractéristiques et leurs propriétés, le fonctionnement du sous-menu est identique à celui d’un menu standard.

Vous pouvez créer des sous-menus de sous-menus sur une profondeur virtuellement illimitée. A noter toutefois que pour des raisons d’ergonomie d’interface, il n’est généralement pas conseillé de dépasser deux niveaux de sous-menus.

A l'exécution, si un menu rattaché est modifié par programmation, toute autre élément du menu reflétera ces modifications.

### A l'aide de l'éditeur de menus

Un menu peut être attaché à une barre de menus ou à un autre menu.

- Pour rattacher un menu à une barre de menus : faites un clic droit sur la barre de menus et sélectionnez **Attacher un menu à la barre "nom de la barre"**, puis choisissez le menu à rattacher à la barre de menus : ![](../assets/en/Menus/attach.png) Vous pouvez également sélectionner une barre de menus puis cliquer sur le bouton des options situé sous la liste.
- Pour rattacher un menu à un autre menu : sélectionnez le menu dans la partie gauche puis faites un clic droit sur la ligne de menus et sélectionnez **Attacher un menu à la barre "nom de la barre"**, puis choisissez le menu à utiliser comme sous-menu :   
  ![](assets/en/Menus/attach2.png) Vous pouvez également sélectionner une ligne de menus puis cliquer sur le bouton des options situé sous la liste. Le menu que vous êtes en train de rattacher deviendra un sous-menu. Le titre de la ligne est maintenu (le nom initial du sous-menu est ignoré), mais il peut être modifié.

#### Détacher des menus

Vous pouvez à tout moment détacher un menu d’une barre ou un sous-menu d’un menu. Le menu détaché n’est alors plus disponible dans la barre ou le sous-menu, mais reste présent dans la liste des menus.

Pour détacher un menu, cliquez avec le bouton droit dans la liste centrale sur le menu ou le sous-menu à détacher puis choisissez la commande **Détacher le menu “nom menu” de la barre “nom barre”** ou **Détacher le sous-menu de la ligne “nom ligne”**

### A l'aide du langage 4D

Etant donné qu'il n'y a pas de différence entre les menus et les barres de menus dans le langage de 4D, rattacher des menus ou des sous-menus se fait de la même manière : utilisez le paramètre *sous-menu* de la commande `APPEND MENU ITEM` pour rattacher un menu à une barre de menu ou à un autre menu.  
