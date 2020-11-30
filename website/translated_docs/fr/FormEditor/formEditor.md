---
id: formEditor
title: Éditeur de formulaire
---

4D propose un éditeur de formulaires très complet qui vous permet de modifier votre formulaire jusqu’à ce que vous ayez atteint le résultat escompté. Dans l’éditeur de formulaires, vous pouvez créer et supprimer des objets, manipuler directement des objets et définir les propriétés des objets et des formulaires.


## Interface

L’éditeur de formulaires affiche chaque formulaire JSON ouvert dans sa propre fenêtre, dotée d’une barre d’outils et d’une barre d’objets. Vous pouvez ouvrir plusieurs formulaires en même temps. Les règles situées sur le côté et en bas de cette fenêtre ont pour but de vous aider à placer les objets dans le formulaire. Vous pouvez changer les unités que ces règles utilisent afin qu’elles soient affichées en pouces, centimètres ou pixels.

### Afficher/masquer des éléments du formulaire

Vous pouvez choisir d’afficher ou de masquer les éléments de la fenêtre de l’éditeur. Cette fonctionnalité permet de n’afficher que les éléments nécessaires à la création ou à la visualisation du formulaire, ou de choisir les outils que vous souhaitez utiliser. Cette option est toujours appliquée à la fenêtre courante de l’éditeur de formulaires. Par exemple, il est généralement inutile d’afficher les taquets et leurs libellés lorsque vous travaillez avec un formulaire entrée.

Pour afficher ou masquer un élément de l’éditeur de formulaires :

1.  Dans le menu Formulaire, choisissez la commande **Afficher**. OU Utilisez la commande **Afficher** du menu contextuel de l’éditeur (cliquez avec le bouton droit de la souris en-dehors de tout objet). Cette commande fait apparaître un sous-menu hiérarchique listant les éléments que vous pouvez afficher ou masquer :<p>![](assets/en/FormEditor/showHideElements.png)<p>Une coche placée en regard d’un élément indique son affichage. Sélectionnez l’élément que vous souhaitez masquer ou afficher.

2.  Sélectionnez l’élément que vous souhaitez masquer ou afficher.<p>Voici la description des commandes de ce menu :
    *   **Formulaire hérité** : affiche ou masque les objets du formulaire hérité (s’il y en a un) dans la page courante du formulaire. Pour plus d’informations, reportez-vous au paragraphe Utiliser l'héritage de formulaire.
    *   **Page 0** : affiche ou masque les objets de la page 0 dans la page courante du formulaire. Cette option vous permet de mieux visualiser et distinguer les objets de la page courante et ceux de la page 0. Pour plus d’informations, reportez-vous à la section Définir un formulaire multi-pages.
    *   **Papier** : affiche ou masque les contours de la page d’impression sous forme de filets grisés. Cette option peut être sans effet apparent lorsque l’option Limites (cf. ci-dessous) est sélectionnée. En effet dans ce cas, lorsque la taille du formulaire est inférieure à celle de la page d’impression, les contours de celle-ci sont affichés en-dehors de la zone de visualisation du formulaire et donc n’apparaissent pas. Reportez-vous à la section Imprimer un formulaire.
    *   **Règle** : affiche ou masque les règles de la fenêtre de l’éditeur. Taquets : affiche ou masque les taquets délimitant les différentes zones du formulaire.
    *   **Libellés des taquets** : affiche ou masque les libellés des taquets, lorsque ceux-ci sont affichés. Pour plus d’informations sur les taquets et leurs libellés, reportez-vous à la section Déplacer les taquets.
    *   **Limites** : affiche ou masque les limites du formulaire. Lorsque cette option est sélectionnée, le formulaire est affiché dans l’éditeur tel qu’il apparaîtra en mode Application. Cette possibilité est particulièrement intéressante pour ajuster un formulaire sans devoir tester le mode Application pour visualiser le résultat.
> Les options **Taille basée sur**, **Marge hor.** et **Marge ver.** des propriétés du formulaire modifient les limites du formulaire. Les limites du formulaire sont calculées en fonction des objets qui le composent. Lorsque vous déplacez ou agrandissez un objet placé près de la limite d’un formulaire, le rectangle de délimitation est modifié en conséquence. Pour plus d’informations sur les propriétés du formulaire, reportez-vous à la section [Propriétés des formulaires](jsonReference.html).


### Utiliser la barre d’outils

La barre d’outils de l’éditeur de formulaires propose un ensemble d’outils destinés à manipuler et modifier le formulaire. Chaque fenêtre dispose de sa propre barre d’outils.

![](assets/en/FormEditor/toolbar.png)

La barre d’outils comporte les éléments suivants :

| Icône                                         | Nom                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/execute.png)         | Exécuter le formulaire                                    | Permet de tester l’exécution du formulaire. Lorsque vous cliquez sur ce bouton, 4D ouvre une nouvelle fenêtre et affiche le formulaire dans son contexte (liste d’enregistrements pour un formulaire liste et enregistrement courant en page pour un formulaire détaillé). Le formulaire est exécuté dans le process principal.                                                                             |
| ![](assets/en/FormEditor/selection.png)       | [Flèche de sélection](#selecting-objects)                 | Permet de sélectionner, déplacer et redimensionner les objets du formulaire.<p>**Note** : Lorsqu’un objet de type Texte ou Zone de groupe est sélectionné, appuyer sur la touche **Entrée** permet de le passer en édition.                                                                                                                                                          |
| ![](assets/en/FormEditor/zOrder.png)          | [Ordre de saisie](#data-entry-order)                      | Passe en mode “Ordre de saisie”, dans lequel il est possible de visualiser et de modifier l’ordre de saisie courant du formulaire. A noter que vous pouvez également visualiser l’ordre de saisie courant tout en travaillant dans le formulaire.                                                                                                                                                           |
| ![](assets/en/FormEditor/moving.png)          | [Déplacement](#moving-objects)                            | Passe en mode “Déplacement”, dans lequel il est possible d’atteindre rapidement n’importe quelle partie du formulaire en le faisant directement glisser dans la fenêtre. Le curseur prend la forme d’une main. Ce mode de navigation est particulièrement utile en cas de zoom dans le formulaire.                                                                                                          |
| ![](assets/en/FormEditor/zoom.png)            | [Zoom](#zoom)                                             | Permet de modifier l’échelle d’affichage du formulaire (100% par défaut). Vous pouvez passer en mode “Zoom” en cliquant sur le bouton loupe ou en cliquant directement sur la barre correspondant à l’échelle désirée. Cette fonction est détaillée dans le paragraphe précédent.                                                                                                                           |
| ![](assets/en/FormEditor/alignment.png)       | [Alignement](#aligning-objects)                           | Ce bouton est associé à un menu permettant d’aligner les objets dans le formulaire. Il est activé (ou non) en fonction des objets sélectionnés.<p>Disponible uniquement avec un aperçu CSS Aucun                                                                                                                                                                                     |
| ![](assets/en/FormEditor/distribution.png)    | [Répartition](#distributing-objects)                      | Ce bouton est associé à un menu permettant de répartir les objets dans le formulaire. Il est activé (ou non) en fonction des objets sélectionnés.<p>Disponible uniquement avec un aperçu CSS Aucun                                                                                                                                                                                   |
| ![](assets/en/FormEditor/level.png)           | [Niveau](#layering-objects)                               | Ce bouton est associé à un menu permettant de répartir les objets dans le formulaire. Il est activé (ou non) en fonction des objets sélectionnés.                                                                                                                                                                                                                                                           |
| ![](assets/en/FormEditor/group.png)           | [Groupement/Dégroupement](#grouping-objects)              | Ce bouton est associé à un menu permettant de grouper et dégrouper la sélection d’objets du formulaire. Il est activé (ou non) en fonction des objets sélectionnés.                                                                                                                                                                                                                                         |
| ![](assets/en/FormEditor/displyAndPage.png)   | [Affichage et gestion des pages](forms.html#form-pages)   | Cette zone permet de passer d’une page du formulaire à une autre et d’ajouter des pages. Pour naviguer parmi les pages du formulaire, cliquez sur les boutons fléchés ou cliquez sur la zone centrale et choisissez la page à afficher dans le menu qui apparaît. Si vous cliquez sur le bouton fléché de droite alors que vous êtes sur la dernière page du formulaire, 4D vous permet d’ajouter une page. |
| ![](assets/en/FormEditor/cssPreviewicon.png)  | [CSS Preview](#css-preview)                               | Ce bouton permet de sélectionner le mode CSS à utiliser.                                                                                                                                                                                                                                                                                                                                                    |
| ![](assets/en/FormEditor/views.png)           | [Gestion des vues](#views)                                | Ce bouton affiche ou masque alternativement la palette des vues. Cette fonction est détaillée dans la section Utiliser les vues d'objet.                                                                                                                                                                                                                                                                    |
| ![](assets/en/FormEditor/shields2.png)        | [Affichage des badges](#shields)                          | Chaque clic sur ce bouton provoque l’affichage successif de tous les types de badges de formulaire. Le bouton est également associé à un menu permettant de sélectionner directement le type de badge à afficher.                                                                                                                                                                                           |
| ![](assets/en/FormEditor/library.png)         | [Bibliothèque d'objets préconfigurés](objectLibrary.html) | Ce bouton affiche la fenêtre de la bibiliothèque d'objets préconfigurée, proposant de nombreux objets auxquels des propriétés par défaut ont déjà été appliquées.                                                                                                                                                                                                                                           |
| ![](assets/en/FormEditor/listBoxBuilder1.png) | [Création de list box](#list-box-builder)                 | Ce bouton crée de nouvelles list box de type entity selection.                                                                                                                                                                                                                                                                                                                                              |

### Using the object bar

The object bar contains all the active and inactive objects that can be used in 4D forms. Some objects are grouped together by themes. Each theme includes several alternatives that you can choose between. When the object bar has the focus, you can select the buttons using the keys of the keyboard. The following table describes the object groups available and their associated shortcut key.

| Bouton                                  | Group                                                                                                                                                                                                                                                                    | Key |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---:|
| ![](assets/en/FormEditor/text.png)      | [Text](../FormObjects/text.md) / [Group Box](../FormObjects/groupBox.md)                                                                                                                                                                                                 |  T  |
| ![](assets/en/FormEditor/input.png)     | [Input](../FormObjects/input_overview.md)                                                                                                                                                                                                                                |  F  |
| ![](assets/en/FormEditor/listbox.png)   | [Hierarchical List](../FormObjects/list_overview.md) / [List Box](../FormObjects/listbox_overview.md)                                                                                                                                                                    |  L  |
| ![](assets/en/FormEditor/combo.png)     | [Combo Box](../FormObjects/comboBox_overview.md) / [Drop-down List](../FormObjects/dropdownList_overview.md) / [Picture Pop-up Menu](../FormObjects/picturePopupMenu_overview.md)                                                                                        |  P  |
| ![](assets/en/FormEditor/button.png)    | [Button](../FormObjects/button_overview.md) / [Picture Button](../FormObjects/pictureButton_overview.md) / [Button Grid](../FormObjects/buttonGrid_overview.md)                                                                                                          |  B  |
| ![](assets/en/FormEditor/radio.png)     | [Bouton radio](../FormObjects/radio_overview.md)                                                                                                                                                                                                                         |  R  |
| ![](assets/en/FormEditor/checkbox.png)  | [Case à cocher](../FormObjects/checkbox_overview.md)                                                                                                                                                                                                                     |  C  |
| ![](assets/en/FormEditor/indicator.png) | [Progress Indicator](../FormObjects/progressIndicator.md) / [Ruler](../FormObjects/ruler.md) / [Stepper](../FormObjects/stepper.md) / [Spinner](../FormObjects/spinner.md)                                                                                               |  I  |
| ![](assets/en/FormEditor/rectangle.png) | [Rectangle](../FormObjects/shapesOverview.html#rectangle) / [Line](../FormObjects/shapesOverview.html#line) / [Oval](../FormObjects/shapesOverview.html#oval)                                                                                                            |  S  |
| ![](assets/en/FormEditor/splitter.png)  | [Splitter](../en/FormObjects/splitters.md) / [Tab Control](../FormObjects/tabControl.md)                                                                                                                                                                                 |  D  |
| ![](assets/en/FormEditor/plugin.png)    | [Plug-in Area](../FormObjects/pluginArea_overview.md) / [Subform](../FormObjects/subform_overview.md) / [Web Area](../FormObjects/webArea_overview.md) / [4D Write Pro](../FormObjects/writeProArea_overview.md) / [4D View Pro](../FormObjects/viewProArea_overview.md) |  X  |

To draw an object type, select the corresponding button and then trace the object in the form. After creating an object, you can modify its type using the Property List. Hold down the **Shift** key as you draw to constrain the object to a regular shape. Lines are constrained to horizontal, 45°, or vertical, rectangles are constrained to squares, and ovals are constrained to circles.

The current variant of the theme is the object that will be inserted in the form. When you click the right side of a button, you access the variant menu:

![](assets/en/FormEditor/objectBar.png)

You can click twice on the button so that it remains selected even after you have traced an object in the form (continual selection). This function makes creating several successive objects of the same type easier. To cancel a continual selection, click on another object or tool.

### Using the Property List

Both forms and form objects have properties that control access to the form, the appearance of the form, and the behavior of the form when it is used. Form properties include, for example, the form’s name, its menu bar, and its size. Object Properties include, for example, an object’s name, its dimensions, its background color, and its font.

You can display and modify form and object properties using the Property List. It displays either form or objects properties depending on what you select in the editor window.

To display/hide the Property List, choose **Property List** from the **Form** menu or from the context menu of the Form editor. You can also display it by double-clicking in an empty area of the form.

#### Raccourcis de navigation

Vous pouvez naviguer dans la Liste des propriétés à l’aide des raccourcis suivants :

*   **Touches fléchées** haut ou bas ↑ ↓ : déplacement de cellule en cellule.
*   **Touches fléchées** gauche ou droite ← → : déploie/contracte les thèmes ou les menus.
*   **PgUp** et **PgDn** : sélectionne la première ou la dernière cellule visible de la liste affichée.
*   **Début** et **Fin** : sélectionne la première ou la dernière cellule de la liste.
*   **Ctrl+clic** (Windows) ou **Commande+clic** (Mac OS) sur un événement : sélectionne/désélectionne tous les événements, en fonction de l’état initial de l’événement sur lequel vous avez cliqué.
*   **Ctrl+clic** (Windows) ou **Commande+clic** (Mac OS) sur un intitulé de thème : déploie/contracte tous les thèmes.



## Manipulating Form Objects

### Ajouter des objets

Vous pouvez ajouter des objets dans un formulaire de nombreuses manières :

*   Par traçage d'un objet après sélection dans la barre d'objets (cf. paragraphe [Utiliser la barre d’objets](#using-the-object-bar))
*   Par glisser-déposer depuis la barre d'objets
*   Par glisser-déposer ou copier-coller depuis la [bibliothèque d'objets](objectLibrary.md) préconfigurés
*   Par glisser-déposer depuis un autre formulaire,
*   Par glisser-déposer depuis l'Explorateur (champs) ou les éditeurs du mode Développement (énumérations, images, etc.)

Une fois l'objet inséré, vous pouvez modifier toutes ses caractéristiques dans l'éditeur de formulaires.

Vous pouvez travailler avec deux types d'objets dans vos formulaires :

*   **les objets statiques** (filets, cadres, images d'arrière-plan, etc.) : ces objets sont généralement utilisés pour le décor, les libellés ou encore l'interface graphique. Ces objets sont accessibles via la barre d'objets de l'éditeur de formulaires. Vous pouvez définir leurs attributs graphiques (taille, couleur, police...) ainsi que leurs propriétés de redimensionnement à l'aide de la Liste de propriétés. A la différence des objets actifs, les objets statiques ne sont pas associés à des variables. A noter qu'il est possible d'insérer des éléments dynamiques dans les objets statiques.

*   **les objets actifs** : un objet actif est un objet qui réalise une tâche ou une fonction de l’interface. Il existe de nombreux types d’objets actifs : champs, boutons, listes déroulantes, etc. Un objet actif est associé soit à un champ, soit à une variable.

### Sélectionner des objets

Avant de pouvoir réaliser une opération sur un objet (comme le changement de l’épaisseur d’une ligne ou d’une police), il est nécessaire de sélectionner cet objet.

Pour sélectionner un objet à l’aide de la barre d’outils :

1.  Cliquez sur l’outil Flèche  dans la barre d’outils.<p>![](assets/en/FormEditor/selection.png)<p> Lorsque vous le faites glisser au-dessus du formulaire, le pointeur prend la forme du pointeur standard.
2.  Cliquez sur l’objet que vous souhaitez sélectionner. Des poignées de sélection identifient l’objet sélectionné.<p>![](assets/en/FormEditor/selectResize.png)

Pour sélectionner un objet à l’aide de la Liste des propriétés :

1.  Sélectionnez le nom de l’objet dans la liste de sélection située en haut de la palette.<p>De cette manière, vous pouvez sélectionner un objet masqué par d’autres objets ou situé en-dehors des limites de la fenêtre. Pour désélectionner un objet, cliquez hors de ses limites ou cliquez dessus en maintenant la touche **Majuscule** enfoncée.
> Il est également possible de sélectionner des objets en double-cliquant dans la fenêtre de résultat d’une recherche globale.

### Selecting multiple objects

Il est souvent nécessaire de réaliser la même opération sur plusieurs objets d’un formulaire — par exemple, pour les déplacer, les aligner ou changer leur apparence. 4D vous permet de sélectionner plusieurs objets en même temps. Vous pouvez réaliser une sélection multiple en utilisant l’une des solutions suivantes :

*   Choisissez **Tout sélectionner** dans le menu Edition.
*   Cliquez avec le bouton droit de la souris sur un objet et choisissez la commande **Sélectionner objets de même type** dans le menu contextuel.
*   Maintenez la touche **Maj** enfoncée et cliquez l’un après l’autre sur tous les objets que vous souhaitez sélectionner.
*   Cliquez hors du groupe d’objets que vous souhaitez sélectionner et dessinez un rectangle de sélection entourant ou traversant les objets à sélectionner. Tout objet inclus dans les limites du rectangle ou qui touche ces limites est sélectionné lorsque vous relâchez le bouton de la souris.
*   Maintenez enfoncée la touche **Alt** (sous Windows) ou **Option** (sous Mac Os) et tracez un rectangle de sélection. Dans ce cas, seuls les objets entièrement inclus dans ce rectangle seront sélectionnés.

La fenêtre ci-dessous représente la sélection de deux objets à l’aide d’un rectangle de sélection :

![](assets/en/FormEditor/selectMultiple.png)

Pour désélectionner un objet qui fait partie d’un groupe d’objets sélectionnés, maintenez la touche **Majuscule** enfoncée et cliquez sur cet objet. Les autres objets demeurent sélectionnés. Pour désélectionner tous les objets, cliquez hors des limites de ces objets.


### Dupliquer des objets

Vous pouvez dupliquer tout objet de formulaire, y compris les objets actifs. Les copies d’objets actifs conservent toutes les propriétés de l’objet original comme le nom, le type, l’action automatique, le format d’affichage et la méthode objet.

Vous pouvez dupliquer directement un objet ou une sélection d’objets, ou utiliser la boîte de dialogue “Dupliquer plusieurs” pour paramétrer une duplication multiple d’objets. Cette boîte de dialogue vous permet de créer autant de duplicata d’un ou de plusieurs objets que vous voulez, en une seule opération.

Pour dupliquer directement un ou plusieurs objet(s) :

1. Sélectionnez le ou les objet(s) que vous souhaitez dupliquer.
2. Choisissez la commande **Dupliquer** dans le menu **Edition**. 4D crée une copie de chaque objet sélectionné et place la copie juste à côté de l’original.
3.  Déplacez la copie à l’emplacement souhaité. Si vous choisissez de nouveau la commande Dupliquer, 4D crée une autre copie pour chaque objet et la place exactement au même placement relatif par rapport à la première copie. Si vous devez répartir plusieurs copies d’un objet sur un axe, appliquez la procédure suivante. Dupliquez l’objet original, déplacez la copie à un autre emplacement sur le formulaire, puis dupliquez la copie. La deuxième copie adopte le même positionnement relatif par rapport à la première copie que celui qui existe entre la position de l’original et celle de la première copie. Les copies suivantes seront alors placées avec le même écart par rapport à leur original. Le schéma ci-dessous explique le fonctionnement du placement relatif des copies :

![](assets/en/FormEditor/duplicateObjects.png)


#### Dupliquer plusieurs

La boîte de dialogue “Dupliquer plusieurs” apparaît lorsque vous sélectionnez un ou plusieurs objet(s) puis choisissez la commande **Dupliquer plusieurs...** dans le menu **Objets**.

![](assets/en/FormEditor/duplcateMany.png)

*   Dans la zone supérieure, saisissez le nombre de colonnes et de lignes d’objets que vous souhaitez obtenir.<p>Par exemple, si vous voulez obtenir 3 colonnes et 2 lignes d’objets, saisissez 3 dans la zone Colonne(s) et 2 dans la zone Ligne(s). Si vous souhaitez ajouter horizontalement deux copies d’un objet, saisissez 3 dans la zone Colonnes (laissez la zone Ligne(s) à 1).

*   Pour les lignes et les colonnes, définissez le décalage que vous souhaitez appliquer à chaque nouveau duplicata.<p>La valeur saisie doit être exprimée en points et sera appliquée relativement à l’origine de l’objet dupliqué.<p>Par exemple, si vous souhaitez laisser un intervalle vertical de 20 points entre chaque objet, et que la hauteur de l’objet source est de 50 points, saisissez 70 dans la zone “Intervalle” de Colonne.

*   Si vous souhaitez créer une matrice de variables, cochez l’option **Numéroter les variables** et sélectionnez le sens dans lequel la numérotation des variables doit s’effectuer. Cette option n’est active que si l’objet sélectionné est une variable. Pour plus d’informations sur cette option, reportez-vous à la section **Dupliquer sur matrice** du *Manuel de développement*.

### Déplacer des objets

Vous pouvez déplacer tout objet d’un formulaire, graphique ou actif, y compris les champs ou les objets créés à l’aide d’un modèle. Pour déplacer un objet, vous pouvez :

*   Déplacer l’objet en le faisant glisser avec la souris,
*   Déplacer l’objet pixel par pixel en utilisant les touches fléchées du clavier,
*   Déplacer l’objet par paliers (de 20 pixels par défaut),

Lorsque vous commencez à déplacer un objet à l'aide de la souris, les poignées disparaissent. 4D affiche des marqueurs qui indiquent l’emplacement des limites de l’objet dans les règles, vous pouvez ainsi placer les objets avec précision. Prenez garde à ne pas cliquer sur les poignées, ce qui aurait pour effet de redimensionner l’objet. Appuyez sur la touche **Majuscule** pour effectuer un déplacement avec contrainte.

Si la [grille magnétique](#using-the-magnetic-grid) est activée, le déplacement de l’objet s’effectue par paliers indiquant les emplacements remarquables.

Pour déplacer un objet pixel par pixel :

*   Sélectionnez le ou les objet(s) que vous souhaitez déplacer. A chaque fois que vous appuyez sur une touche fléchée, la sélection est déplacée d’un pixel dans la direction de la flèche.

Pour déplacer l’objet par paliers :

*   Sélectionnez le ou les objet(s) que vous souhaitez déplacer, appuyez sur la touche **Majuscule** et utilisez les touches fléchées du clavier pour déplacer l’objet par paliers. Par défaut, les paliers sont de 20 pixels. Vous pouvez modifier le pas dans la Page Formulaires des Préférences.


### Grouper des objets

4D vous permet de grouper des objets de manière à ce que vous puissiez sélectionner, déplacer et modifier ce groupe comme un seul objet. Les objets qui sont groupés conservent leur position relative par rapport aux autres objets du groupe. Les objets groupés sont par exemple un champ et son libellé, un bouton invisible et son icône, etc.

Lorsque vous redimensionnez un groupe, tous les objets du groupe sont redimensionnés proportionnellement (hormis les zones de texte, qui sont redimensionnées par étape suivant leur taille de police de caractères).

Vous pouvez dégrouper un groupe d’objets à tout moment et les traiter de nouveau comme des objets indépendants.

Un objet actif qui a été groupé doit être dégroupé pour que vous puissiez accéder à ses propriétés ou à sa méthode. Il est toutefois possible de sélectionner un objet appartenant à un groupe sans devoir dégrouper l’ensemble : pour cela, effectuez **Ctrl+clic** (Windows) ou **Commande+clic** (Mac Os) sur l’objet (le groupe doit être sélectionné au préalable).

Grouper des objets n’a d’effet que dans l’éditeur de formulaires. Lors de l’exécution du formulaire, tous les objets groupés (hormis les boutons radio dans les bases binaires) se comportent comme s’ils étaient indépendants.
> Il n’est pas possible de grouper des objets appartenant à des vues différentes et seuls les objets appartenant à la vue courante peuvent être groupés (cf. section [Utiliser les vues d'objet](#views)).

Pour grouper les objets :

1.  Sélectionnez les objets que vous souhaitez grouper.
2.  Sélectionnez **Grouper** dans le menu Objets.<p>OU<p> Cliquez sur le bouton Grouper dans la barre d’outils de l’éditeur de formulaires :<p>![](assets/en/FormEditor/group.png)<p> 4D matérialise les bordures du groupe avec des poignées. Les objets du groupe ne sont plus marqués séparément par des poignées. Désormais, lorsque vous modifiez le groupe d’objets, vous modifiez tous les objets qui le composent.

Pour dégrouper un groupe d’objets :

1.  Sélectionnez le groupe que vous souhaitez dégrouper.
2.  Choisissez **Dégrouper** dans le menu **Objets**.<p>OU<p>Sélectionnez la commande **Dégrouper** (menu du bouton **Grouper**) dans la barre d’outils de l’éditeur de formulaires.<p>Si la commande **Dégrouper** est désactivée, cela veut dire que l’objet sélectionné est déjà sous sa forme la plus simple.<p>4D rematérialise les bordures des objets qui constituaient le groupe avec des poignées.


### Aligner des objets

Vous pouvez aligner un ensemble d’objets entre eux ou à l’aide d’une grille magnétique.

*   Vous pouvez aligner entre eux des objets sur le haut, le bas, le côté, le centre horizontal ou le centre vertical. Vous pouvez aligner directement une sélection d’objets ou utiliser une boîte de dialogue vous permettant d’appliquer tout type d’alignement et de répartition aux objets sélectionnés. Cette boîte de dialogue vous permet en outre de sélectionner l’objet par rapport auquel vous voulez aligner les autres et de prévisualiser le résultat de vos paramétrages.
*   Lorsque vous utilisez la grille magnétique, chaque objet peut être aligné manuellement avec les autres sur la base de positions “remarquables” représentées visuellement.

#### Utiliser les outils et les commandes d’alignement direct

Le sous-menu Aligner du menu Objets (ou du menu contextuel de l’éditeur) et les outils d’alignement de la barre d’outils vous permettent de rapidement aligner entre eux des objets sélectionnés.

![](assets/en/FormEditor/alignmentMenu.png)

Lorsque 4D aligne des objets, il utilise l’objet le plus avancé dans la direction de l’alignement comme “ancre” sur laquelle tous les autres objets vont être alignés. This object is the “anchor.” It uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor. The figure below shows objects with no alignment, "aligned left", "aligned horizontally by centers", and "aligned right":

![](assets/en/FormEditor/alignmentTools.png)

#### Using the alignment assistant

The Alignment Assistant allows you to perform any type of alignment and/or distribution of objects.

![](assets/en/FormEditor/alignmentAssistant.png)


To display this dialog box, select the objects you want to align then choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.

*   In the “Left/Right Alignment” and/or “Top/Bottom Alignment” areas, click the icon that corresponds to the alignment you want to perform.<p>The example area displays the results of your selection.

*   To perform an alignment that uses the standard anchor scheme, click **Preview** or **Apply**.<p>In this case 4D uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor.<p>OR:<p>To align objects to a specific object, select the **Align on** option and select the object to which you want the other objects to be aligned from the object list. In this case, the position of the reference object will not be altered.

You can preview the results of the alignment by clicking the **Preview** button. The objects are then aligned in the Form editor but since the dialog box does not go away, you can still cancel or apply the alignment.
> This dialog box allows you to align and distribute objects in one operation. For more information on how to distribute objects, refer to [Distributing objects](#distributing-objects).

#### Using the Magnetic Grid

The Form editor provides a virtual magnetic grid that can help you place and align objects in a form. Magnetic alignment of objects is based on their position in relation to each other. The magnetic grid can only be used when at least two objects are present in the form.

This works as follows: When you move an object in the form, 4D indicates possible locations for this object based on noticeable alignments with other form objects. A noticeable alignment is established each time that:

*   Horizontally, the edges or centers of two objects coincide,
*   Vertically, the edges of two objects coincide.

When this happens, 4D places the object at the location and displays a red line indicating the noticeable alignment taken into account:

![](assets/en/FormEditor/magneticGrid1.png)

Concerning the distribution of objects, 4D proposes a distance based on interface standards. Like with magnetic alignment, red lines indicate the noticeable differences once they are reached.

![](assets/en/FormEditor/magneticGrid2.png)

This operation applies to all types of form objects. The Magnetic Grid can be enabled or disabled at any time using the **Magnetic Grid** command in the **Form** menu or in the editor context menu. It is also possible to set the activation of this feature by default on the **Preferences** > **Forms** page (**Activate auto alignment by default** option). You can manually activate or deactivate the magnetic grid when an object is selected by pressing the **Ctrl** (Windows) or **Control** (macOS) key .
> The Magnetic Grid also influences the manual resizing of objects.

### Distributing objects

You can distribute objects so that they are set out with an equal amount of space between them. To do this, you can distribute objects using either the Distribute tools in the Tools palette or the Alignment Assistant. The latter allows you to align and distribute objects in one operation.
> When the [Magnetic Grid](#using-the-magnetic-grid) is on, a visual guide is also provided for distribution when an object is moved manually.

To distribute objects with equal spacing:

1.  Select three or more objects and click the desired Distribute tool.

2.  In the toolbar, click on the distribution tool that corresponds to the distribution you want to apply.<p>![](assets/en/FormEditor/distributionTool.png)<p>OU<p>Select a distribution menu command from the **Align** submenu in the **Object** menu or from the context menu of the editor.<p>4D distributes the objects accordingly. Objects are distributed using the distance to their centers and the largest distance between two consecutive objects is used as a reference.

To distribute objects using the Align and Distribute dialog box:

1.  Select the objects you want to distribute.

2.  Choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.<p>The following dialog box appears:![](assets/en/FormEditor/alignmentAssistant.png)

3.  In the Left/Right Alignment and/or Top/Bottom Alignment areas, click the standard distribution icon: ![](assets/en/FormEditor/horizontalDistribution.png)<p>(Standard horizontal distribution icon)<p>The example area displays the results of your selection.

4.  To perform a distribution that uses the standard scheme, click **Preview** or *Apply*.<p>In this case 4D will perform a standard distribution, so that the objects are set out with an equal amount of space between them.<p>OR:<p>To execute a specific distribution, select the **Distribute** option (for example if you want to distribute the objects based on the distance to their right side). This option acts like a switch. If the Distribute check box is selected, the icons located below it perform a different function:

    *   Horizontally, the icons correspond to the following distributions: evenly with respect to left sides, centers (hor.) and right sides of the selected objects.
    *   Vertically, the icons correspond to the following distributions: evenly with respect to top edges, centers (vert.) and bottom edges of the selected objects.

    You can preview the actual result of your settings by clicking on the **Preview** button: the operation is carried out in the Form editor but the dialog box stays in the foreground. You can then **Cancel** or **Apply** the modifications.
> This dialog box lets you combine object alignment and distribution. For more information about alignment, refer to [Aligning objects](#aligning-objects).


### Layering objects

You will sometimes have to rearrange objects that are obstructing your view of other objects in the form. For example, you may have a graphic that you want to appear behind the fields in a form. 4D provides four menu items, **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** that let you “layer” objects on the form. These layers also determine the default entry order (see Modifying data entry order). The figure below shows objects in front of and behind other objects:

![](assets/en/FormEditor/layering.png)

To move an object to another level, select it and choose:

*   One of the **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** commands of the Object menu,
*   One of the commands in the **Level>** submenu in the context menu of the editor,
*   One of the commands associated with the level management button of the toolbar.

![](assets/en/FormEditor/level2.png)
> When several objects are superimposed, the **Ctrl+Shift+click** / **Command+Shift+click** shortcut can be used to select each object successively by going down a layer with each click.

When ordering different levels, 4D always goes from the background to the foreground. As a result, the previous level moves the selection of objects one level towards the background. The next level moves the selection one level towards the foreground of the form.

### Data entry order

The data entry order is the order in which fields, subforms, and other active objects are selected as you hit the **Tab** or the **Carriage return** key in an input form. It is possible to move through the form in the opposite direction (reverse data entry order) by pressing the **Shift+Tab** or **Shift+Carriage** return keys.

> You can change the entry order at runtime using the `FORM SET ENTRY ORDER` and `FORM GET ENTRY ORDER` commands.

Every object that supports the focusable property is included in the data entry order by default.

Setting the entry order for a JSON form is done with the [`entryOrder`](properties_JSONref.md) property.

If you don’t specify a custom entry order, by default 4D uses the layering of the objects to determine the entry order in the direction “background towards foreground.” The standard entry order thus corresponds to the order in which the objects were created in the form.

In some forms, a custom data entry order is needed. Below, for example, additional fields related to the address have been added after the creation of the form. The resulting standard entry order thus becomes illogical and forces the user to enter the information in an awkward manner:

![](assets/en/FormEditor/entryOrder1.png)

In cases such as this, a custom data entry order allows you to enter the information in a more logical order:

![](assets/en/FormEditor/entryOrder2.png)

#### Viewing and changing the data entry order

You can view the current entry order either using the “Entry order” shields, or by using the “Entry order” mode. However, you can only modify the entry order using the “Entry order” mode.

This paragraph describes viewing and modifying the entry order using the “Entry order” mode. For more information about viewing the entry order using shields, refer to [Using shields](#using-shields).

To view or change the entry order:

1.  Choose **Entry Order** from the **Form** menu or click on the Entry Order button in the toolbar of the window:<p>![](assets/en/FormEditor/zOrder.png)<p>The pointer turns into an entry order pointer and 4D draws a line in the form showing the order in which it selects objects during data entry.<p>Viewing and changing the data entry order are the only actions you can perform until you click any tool in the Tools palette.

2.  To change the data entry order, position the pointer on an object in the form and, while holding down the mouse button, drag the pointer to the object you want next in the data entry order.<p>![](assets/en/FormEditor/entryOrder3.png)<p>4D will adjust the entry order accordingly.

3.  Repeat step 2 as many times as necessary to set the data entry order you want.

4.  When you are satisfied with the data entry order, click any unselected tool in the toolbar or choose **Entry Order** from the **Form** menu.<p>4D returns to normal operation of the Form editor.

> Only the entry order of the current page of the form is displayed. If the form contains enterable objects on page 0 or coming from an inherited form, the default entry order is as follows: Objects from page 0 of the inherited form > Objects from page 1 of the inherited form > Objects from page 0 of the open form > Objects from the current page of the open form.


#### Using a data entry group

While you are changing the data entry order, you can select a group of objects in a form so that the standard data entry order applies to the objects within the group. This allows you to easily set the data entry order on forms in which fields are separated into groups or columns.

To create a data entry group:

1.  Choose **Entry Order** from the *Form* menu or click the  button in the toolbar.
2.  Draw a marquee around the objects you want to group for data entry.

When you release the mouse button, the objects enclosed or touched by the rectangle follow the standard data entry order. The data entry order for the remaining objects adjusts as necessary.

#### Excluding an object from the entry order

By default, all objects that support the focusable property are included in the entry order. To exclude an object from the entry order:

1. Select the Entry order mode, then

2.  **shift-click** on the object

3.  **right-click** on the object and select **Remove from entry order** option from the context menu



## CSS Preview

The Form editor allows you to view your forms with or without applied CSS values.

When [style sheets](createStylesheet.md) have been defined, forms (including inherited forms and subforms) are opened in the CSS Preview mode for your operating system by default.


### Selecting CSS Preview Mode

The Form editor toolbar provides a CSS button for viewing styled objects:

![](assets/en/FormEditor/cssToolbar.png)

Select one of the following preview modes from the menu:

| Toolbar Icon                         | CSS Preview Mode | Description                                                                                                   |
| ------------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/cssNo.png)  | Aucun            | No CSS values are applied in the form and no CSS values or icons displayed in the Property List.              |
| ![](assets/en/FormEditor/cssWin.png) | Sous Windows     | CSS values for Windows platform are applied in the form. CSS values and icons displayed in the Property List. |
| ![](assets/en/FormEditor/cssMac.png) | macOS            | CSS values for macOS platform are applied in the form. CSS values and icons displayed in the Property List.   |
> If a font size too large for an object is defined in a style sheet or JSON, the object will automatically be rendered to accommodate the font, however the size of the object will not be changed.

The CSS preview mode reflects the priority order applied to style sheets vs JSON attributes as defined in the [JSON vs Style Sheet](stylesheets.html#json-vs-style-sheet) section.

Once a CSS preview mode is selected, objects are automatically displayed with the styles defined in a style sheet (if any).
> When copying or duplicating objects, only the CSS references (if any) and the JSON values are copied.


### CSS support in the Property List

In CSS Preview mode, if the value of an attribute has been defined in a style sheet, the attribute's name will appear with a CSS icon displayed next to it in the Property List. For example, the attribute values defined in this style sheet:

```4d
.myButton {
font-family: comic sans;
font-size: 14;
stroke: #800080;
}
```

are displayed with a CSS icon in the Property List:

![](assets/en/FormEditor/cssPpropList.png)

An attribute value defined in a style sheet can be overridden in the JSON form description (except if the CSS includes the `!important` declaration, see below). In this case, the Property List displays the JSON form value in **bold**. You can reset the value to its style sheet definition with the **Ctrl + click** (Windows) or **Command + click** (macOs) shortcuts.
> If an attribute has been defined with the `!important` declaration for a group, an object within a group, or any object within a selection of multiple objects, that attribute value is locked and cannot be changed in the Property List.

#### Property List CSS Icons

| Icône                                      | Description                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](assets/en/FormEditor/cssIcon.png)      | Indicates that an attribute value has been defined in a style sheet                                                                                                |
| ![](assets/en/FormEditor/cssImportant.png) | Indicates that an attribute value has been defined in a style sheet with the `!important` declaration                                                              |
| ![](assets/en/FormEditor/cssIconMixed.png) | Displayed when an attribute value defined in a style sheet for at least one item in a group or a selection of multiple objects is different from the other objects |



## Création de list box

Vous pouvez créer rapidement de nouvelles list box de type sélection d'entités avec le **générateur de list box**. La nouvelle list box peut être utilisée immédiatement ou elle peut être modifiée via l'éditeur de formulaires.

Le générateur de list box vous permet de créer et de remplir des list box de type sélection d'entités en quelques opérations simples.



### Utilisation du générateur de list box


1.  Dans la barre d'outils de l'éditeur de formulaire, cliquez sur l'icône du générateur de zone de liste :

    ![](assets/en/FormEditor/listboxBuilderIcon.png)

    Le générateur de list box s'affiche :

    ![](assets/en/FormEditor/listboxBuilder.png)

2.  Sélectionnez une table dans la liste déroulante **Table** :

    ![](assets/en/FormEditor/listboxBuilderTable.png)

3.  Sélectionnez les champs de la list box dans la zone **Champs** :

    ![](assets/en/FormEditor/listboxBuilderFields.png)

    Par défaut, tous les champs sont sélectionnés. Vous pouvez sélectionner ou désélectionner les champs individuellement ou utiliser **Ctrl+clic** (Windows) ou **Cmd+clic** (macOS) pour les sélectionner ou les désélectionner tous à la fois.

    Vous pouvez modifier l'ordre des champs via un glisser-déposer.

4.  L'expression qui permet de remplir les lignes de la list box à partir de la sélection d'entité est préremplie :

    ![](assets/en/FormEditor/listboxBuilderExpression.png)

    Cette expression peut être modifiée si nécessaire.

5.  En cliquant sur le bouton **Copier**, l'expression sera copiée pour charger tous les enregistrements en mémoire :

    ![](assets/en/FormEditor/listboxBuilderCode.png)

6.  Cliquez sur le bouton **Créer un widget** pour créer la list box.

    ![](assets/en/FormEditor/listboxBuilderBuild.png)

La list box finale :

![](assets/en/FormEditor/listboxBuilderListbox.png)









## Badges

L’éditeur de formulaires 4D permet d’utiliser des badges afin de faciliter la visualisation des propriétés des objets. Ils se trouvent dans la barre d'outils du formulaire :

![](assets/en/FormEditor/shields.png)




Le principe de cette fonction est le suivant : chaque badge est associé à une propriété (par exemple **Vues**, signifiant que l'objet “est dans la vue courante”). Lorsque vous activez un badge, 4D affiche une petite icône (un badge) en haut à gauche de chaque objet du formulaire auquel s’applique la propriété.

![](assets/en/FormEditor/shield.png)

### Utilisation des badges

Pour activer un badge, cliquez sur l'icône *badge* jusqu’à ce que le badge souhaité soit sélectionné. Vous pouvez également cliquer sur la partie droite du bouton et sélectionner directement le type de badge à afficher dans le menu associé :


Pour ne pas afficher de badges, choisissez la ligne **Pas de badges** dans le menu de sélection.
> Vous pouvez définir les badges à afficher par défaut dans la Préférences de l’application.

### Description du badge

Voici la description de chaque type de badge :

| Icône                                        | Nom                                  | Est affiché...                                                                                                                                |
| -------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/objectMethod.png)   | Méthode objet                        | Pour les objets auxquels une méthode objet est associée                                                                                       |
| ![](assets/en/FormEditor/standardAction.png) | Action standard                      | Pour les objets auxquels une action standard est associée                                                                                     |
| ![](assets/en/FormEditor/resizing.png)       | Redimensionnement                    | Pour les objets disposant d’au moins une propriété de redimensionnement, indique la combinaison de propriétés courante                        |
| ![](assets/en/FormEditor/entryOrder.png)     | Ordre de saisie                      | Pour les objets saisissables, indique le numéro d’ordre de saisie                                                                             |
| ![](assets/en/FormEditor/viewNumber.png)     | Vue courante                         | Pour tous les objets de la vue courante                                                                                                       |
| ![](assets/en/FormEditor/cssShield.png)      | [Feuille de style](stylesheets.html) | Pour les objets avec une ou plusieurs valeurs d'attribut remplacées par une feuille de style.                                                 |
| ![](assets/en/FormEditor/filter.png)         | Filtre                               | Pour les objets saisissables auxquels un filtre de saisie est associé                                                                         |
| ![](assets/en/FormEditor/helpTip.png)        | Infobulle                            | Pour les objets auxquels une infobulle (message d’aide) est associée                                                                          |
| ![](assets/en/FormEditor/localized.png)      | Localisé                             | Pour les objets dont le libellé provient d’une référence (libellé débutant par “:”). La référence peut être de type ressource (STR#) ou XLIFF |
| ![](assets/en/FormEditor/noShields.png)      | Pas de badge                         | Aucun badge n’apparaît                                                                                                                        |

## Vues

L'éditeur de formulaires 4D vous permet de créer des formulaires complexes en distribuant des objets de formulaire entre des vues séparées qui peuvent ensuite être masquées ou affichées selon les besoins.

Par exemple, vous pouvez répartir les objets par type (champs, variables, objets statiques, etc.). Tout type d'objet formulaire, y compris les sous-formulaires et les zones de plug-in, peut être inclus dans les vues.

Il n'y a pas de limite au nombre de vues par formulaire. Vous pouvez créer autant de vues différentes que nécessaire. De plus, chaque vue peut être affichée, masquée et/ou verrouillée.


Les vues sont gérées via à la palette de vues.

![](assets/en/FormEditor/viewEditor.png)


### Accéder à la palette de vues

Il existe trois façons d'accéder à la palette de vues :

*   **Barre d'outils** : cliquez sur l'icône de Vues dans la barre d'outils de l'éditeur de formulaires. (Cette icône apparaît en gris lorsqu'au moins un objet appartient à une vue autre que la vue par défaut.)

    |              Vue par défaut uniquement               |           Avec des vues supplémentaires            |
    |:----------------------------------------------------:|:--------------------------------------------------:|
    | ![](assets/en/FormEditor/icon.png "No views in use") | ![](assets/en/FormEditor/icon2.png "Views in use") |

*   **Menu contextuel** (formulaire ou objet) : faites un clic droit n'importe où dans l'éditeur de formulaires ou sur un objet, puis sélectionnez **Vue courante**

    ![](assets/en/FormEditor/contextMenu.png)

La vue courante est indiquée par une coche (par exemple, "Adresse professionnelle" dans l'image ci-dessus)


*   **Menu Formulaire** : cliquez sur le menu **Formulaire** et sélectionnez **Afficher la liste**

![](assets/en/FormEditor/formMenu.png)


### Avant de commencer

Voici quelques éléments importants à connaitre avant de commencer à travailler avec les vues :

*   **Contexte d’utilisation** : les vues sont un outil purement graphique, utilisable uniquement dans l’éditeur de formulaires ; il n’est pas possible d’accéder aux vues par programmation ou en mode Application.

*   **Vues et pages** : Les objets d’une même vue peuvent appartenir à des pages différentes d’un formulaire ; seuls les objets de la page courante (et de la page 0 si elle est visible) peuvent être affichés, quelle que soit la configuration des vues.

*   **Vues et plans** : Les vues sont indépendantes des plans des objets, il n’y a pas de hiérarchie d’affichage entre les différentes vues.

*   **Vues et groupes** : Seuls les objets appartenant à la vue courante peuvent être groupés.

*   **Vues courantes et par défaut** : la vue par défaut est la première vue d'un formulaire et ne peut pas être supprimée; la vue courante est la vue en cours de modification et le nom est affiché en gras.



### Gestion des vues

#### Créer des vues

Tout objet créé dans un formulaire est placé dans la première vue ("Vue 1") du formulaire. La première vue 1 est **toujours** la vue par défaut, indiquée par (par défaut) après le nom. Le nom de la vue peut être modifié (voir [Renommer les vues](#renaming-views)), mais il demeure la vue par défaut.


![](assets/en/FormEditor/createView.png)

Il existe deux façons d'ajouter des vues supplémentaires :

*   Cliquez sur le bouton **Ajouter une nouvelle vue** en bas de la palette Vue :

![](assets/en/FormEditor/addView.png)

*   Faites un clic droit sur une vue existante et sélectionnez **Insérer une vue** :

![](assets/en/FormEditor/addView2.png)

Il n'y a pas de limitation du nombre de vues.

#### Renommer des vues

Par défaut, les vues sont nommées "Vue" + le numéro de vue, mais vous pouvez modifier ces noms pour améliorer la lisibilité et mieux répondre à vos besoins.

Pour renommer une vue, vous pouvez soit :

*   Double-cliquer directement sur le nom de la vue (dans ce cas, la vue est sélectionnée). Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename.png)

*   Faire un clic droit sur le nom de la vue. Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename2.png)

#### Réordonner les vues

Vous pouvez modifier l'ordre d'affichage des vues en les faisant glisser/déposer dans la palette des vues.

A noter que la vue par défaut ne change pas :

![](assets/en/FormEditor/reorderView.png)


#### Supprimer des vues

Pour renommer une vue, vous pouvez soit :

*   Cliquer sur le bouton **Supprimer la vue sélectionnée** en bas de la palette des vues :

    ![](assets/en/FormEditor/deleteView.png)


*   Faire un clic droit sur le nom de la vue et sélectionner **Supprimer la vue** :

    ![](assets/en/FormEditor/deleteView2.png)
> Si une vue est supprimée, tous les objets qu'elle contient sont automatiquement déplacés vers la vue par défaut.




### Utilisation des vues

Une fois que les vues sont créées, vous pouvez utiliser la palette des vues pour :

*   Ajouter un objet aux vues,
*   Déplacer des objets d'une vue à une autre,
*   Sélectionner tous les objets d'une même vue en un seul clic,
*   Afficher ou masquer des objets pour chaque vue,
*   Verrouiller les objets d'une vue.

#### Ajouter des objets aux vues

Un objet ne peut appartenir qu’à une seule vue.

Pour créer un objet dans une autre vue, sélectionnez simplement la vue dans la palette des vues (avant de créer l'objet) en cliquant sur son nom (une icône Modifier est affichée pour la [Vue courante](#before-you-begin) et le nom apparaît en gras) :

![](assets/en/FormEditor/addObject.png)

#### Déplacer des objets entre les vues

Il est également possible de déplacer un ou plusieurs objets d'une vue à une autre. Dans le formulaire, sélectionnez le ou les objets dont vous souhaitez modifier la vue. La liste des vues indique, à l'aide d'un symbole, la vue à laquelle appartient la sélection :

![](assets/en/FormEditor/symbol.png)
> La sélection peut contenir plusieurs objets appartenant à différentes vues.

Sélectionnez simplement la vue de destination, faites un clic droit puis sélectionnez **Déplacer vers** :

![](assets/en/FormEditor/moveObject.png)

OU

Sélectionnez la vue de destination de la sélection et cliquez sur le bouton **Déplacer vers** en bas de la palette des vues :

![](assets/en/FormEditor/moveObject3.png)

La sélection est ensuite placée dans la nouvelle vue :

![](assets/en/FormEditor/objNewView.png)

Vous pouvez également déplacer un objet vers une autre vue via le menu contextuel de l'objet. Faites un clic droit sur l'objet, sélectionnez **Déplacer vers la vue** puis sélectionnez une vue dans la liste de vues disponibles :

![](assets/en/FormEditor/moveObject2.png)
> La [vue courante](#before-you-begin) est affichée en texte gras.



#### Sélectionner tous les objets d’une vue

Vous pouvez sélectionner dans la page courante du formulaire tous les objets appartenant à une même vue. Cette fonction est utile pour appliquer des modifications globales à un ensemble d’objets.

Pour cela, faites un clic droit sur la vue dans laquelle vous souhaitez sélectionner tous les objets et cliquez sur le bouton **Tout sélect. dans vue**:

![](assets/en/FormEditor/selectAll.png)

Vous pouvez également utiliser le bouton situé en dessous de la palette des vues :


![](assets/en/FormEditor/selectAll2.png)


#### Afficher ou masquer les objets d’une vue

Vous pouvez à tout moment afficher ou masquer les objets d’une vue dans la page courante du formulaire. Cette fonction permet par exemple de se concentrer sur certains objets lors de la modification du formulaire.

Par défaut, toutes les vues sont affichées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/showHide.png)

Pour masquer une vue, cliquez sur cette icône. Elle est alors grisée et les objets de la vue correspondante ne sont plus affichés dans le formulaire :

![](assets/en/FormEditor/hidden.png)
> Il n’est pas possible de masquer la [vue courante](#before-you-begin).

Pour afficher une vue masquée, il suffit de la sélectionner ou de cliquer de nouveau sur l’icône de visualisation.



#### Verrouiller les objets d’une vue

Vous pouvez verrouiller les objets d’une vue. Cela empêche leur sélection, leur modification ou leur suppression dans le formulaire. Une fois verrouillé, un objet ne peut pas être sélectionné par un clic, un rectangle de sélection ou la commande **Sélectionner objets de même type** du menu contextuel. Cette fonction est utile pour éviter les erreurs de manipulation.

Par défaut, toutes les vues sont déverrouillées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/lockUnlock.png)

Pour verrouiller les objets d’une vue, cliquez sur cette icône. Le cadenas est alors refermé, ce qui indique que la vue est verrouillée :

![](assets/en/FormEditor/locked.png)
> Il n’est pas possible de verrouiller la [vue courante](#before-you-begin).

Pour déverrouiller une vue, il suffit de la sélectionner ou de cliquer à nouveau sur l’icône de verrouillage.

## Zoom

Il est possible de zoomer dans le formulaire courant. Vous pouvez passer en mode “Zoom” soit en cliquant sur l'icône de loupe, soit en cliquant directement sur la barre correspondant à l’échelle désirée dans la barre d’outils de la fenêtre (les paliers d’affichage sont 50%, 100%, 200%, 400% et 800%) :

![](assets/en/FormEditor/zoom.png)

*   Lorsque vous cliquez sur le bouton loupe, le curseur prend la forme d’une loupe. Pour augmenter le pourcentage d’affichage d’un palier, cliquez dans le formulaire. Pour réduire le pourcentage d’affichage d’un palier, appuyez sur la touche Majuscule et cliquez dans le formulaire.
*   Lorsque vous cliquez sur une barre de pourcentage, l’affichage est immédiatement modifié.

En mode Zoom, toutes les fonctions de l’éditeur de formulaires restent disponibles(*).

(*) Pour des raisons techniques, il n'est toutefois pas possible de sélectionner d'élément de list box (en-tête, colonne ou pied) lorsque l'éditeur de formulaires est en mode Zoom.





