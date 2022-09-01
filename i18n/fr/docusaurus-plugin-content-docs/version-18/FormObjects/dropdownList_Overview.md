---
id: dropdownListOverview
title: Liste déroulante
---

## Vue d’ensemble

Les pop-up/listes déroulantes sont des objets qui permettent à l’utilisateur de sélectionner un élément dans une liste. Vous gérez les éléments qui apparaissent dans les listes déroulantes à l’aide de tableaux, d’énumérations ou d'actions standard.

Sous macOS, les listes déroulantes sont aussi parfois appelées "pop-up menu". Les deux noms font référence aux mêmes objets. Comme le montre l'exemple suivant, l'apparence de ces objets peut différer légèrement selon la plateforme :

![](../assets/en/FormObjects/popupDropdown_appearance.png)

## Utiliser un tableau

Un [tableau](Concepts/arrays.md) est une liste de valeurs gardées en mémoire qui sont référencées par le nom du tableau. Un pop-up/liste déroulante affiche le tableau sous la forme d’une liste de valeurs qui apparaît lorsqu’on clique dessus.

Les objets pop-up/listes déroulantes peuvent être initialisés par le chargement d’une liste de valeurs dans un tableau. Vous pouvez réaliser cette opération de plusieurs manières :

* Enter a list of default values in the object properties by selecting `"\&#060;Static List&#062;"` in the [Data Source](properties_DataSource.md) theme of the Property List. Les valeurs par défaut sont automatiquement chargées dans un tableau. Vous pouvez faire référence à ce tableau par l’intermédiaire du nom de la variable associée à l’objet.

* Avant que l’objet ne soit affiché, exécutez une méthode qui affecte des valeurs au tableau.

```4d
  ARRAY TEXT($aCities;6)
  $aCities{1}:="Philadelphia"
  $aCities{2}:="Pittsburg"
  $aCities{3}:="Grand Blanc"
  $aCities{4}:="Bad Axe"
  $aCities{5}:="Frostbite Falls"
  $aCities{6}:="Green Bay"
```

Dans ce cas, le nom de la variable associée à l’objet dans le formulaire doit être *tVilles*. Ce code peut être placé dans la méthode formulaire et être exécuté lorsque l’événement formulaire `Sur chargement` se produit.

* Avant que l’objet ne soit affiché, chargez les valeurs d’une énumération dans le tableau à l’aide de la commande [LIST TO ARRAY](https://doc.4d.com/4Dv17R5/4D/17-R5/LIST-TO-ARRAY.301-4127385.en.html).

```4d
   LIST TO ARRAY("Cities";$aCities)
```

 Dans ce cas aussi, le nom de la variable associée à l’objet dans le formulaire doit être *tVilles*. Ce code peut être exécuté à la place de celui proposé plus haut.

Si vous voulez stocker dans un champ le choix de l’utilisateur, il est nécessaire d’écrire du code pour affecter les valeurs et de l’exécuter après la validation de l’enregistrement. Ce code pourrait être le suivant :

```4d
  Case of
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) /Nouvel enregistrement
          aCities:=3 /affiche une valeur par défaut
       Else /enregistrement existant, on affiche une valeur stockée
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) /La sélection a été modifiée
       City:=aCities{aCities} /La nouvelle valeur est assignée au champ
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```

Vous devez cocher chaque [événement] pris en compte dans les structures "For" de votre code. Les tableaux contiennent toujours un nombre fini d’éléments. La liste des éléments est dynamique et peut être modifiée par programmation. Les éléments d’un tableau peuvent être modifiés et triés.

## Utiliser une énumération

Si vous souhaitez utiliser un pop-up/liste déroulante pour gérer les valeurs d'un champ ou d'une variable énuméré(e), 4D vous permet de référencer directement le champ ou la variable comme source de données de l'objet. Cette possibilité facilite la gestion des champs/variables énuméré(e) s.
> Si vous utilisez une énumération hiérarchique, seul le premier niveau sera affiché et sélectionnable.

Par exemple, dans le cas d’un champ "Couleur" pouvant contenir uniquement les valeurs "White", "Blue", "Green" or "Red", vous pouvez créer une liste contenant ces valeurs et l’associer à un objet pop up menu qui référence le champ "Couleur". 4D se charge alors de gérer automatiquement la saisie et l’affichage de la valeur courante dans le formulaire.

Pour associer un popup/liste déroulante à un champ ou une variable énuméré(e), il suffit de saisir directement le nom du champ ou de la variable dans la zone [Variable ou expression](properties_Object.md#variable-or-expression) de l’objet dans la liste de propriétés .

A l’exécution du formulaire, 4D gère automatiquement le pop up menu ou la combo box en saisie ou à l’affichage : lorsque l’utilisateur choisit une valeur, elle est stockée dans le champ ; à l’affichage, la valeur du champ est affichée dans le pop up menu :

![](../assets/en/FormObjects/popupDropdown_choiceList.png)
> Il n'est pas possible de mixer ce principe avec l'initialisation de l'objet à l'aide d'un tableau. Si vous saisissez un nom de champ dans la zone Nom de la variable, il est nécessaire d'utiliser une énumération.

### Enregistrer comme

Lorsque vous avez associé un objet pop-up/liste déroulante à une liste de choix (énumération) et à un champ, vous pouvez utiliser l'option [Enregistrer comme Valeur/Référence](properties_DataSource.md#save-as) dans le thème "Sources de données" de la Liste des propriétés. Cette option permet d'optimiser la taille des données stockées.

## Utiliser une action standard

Vous pouvez assigner une action standard à un objet pop up menu/liste déroulante (thème [Action](properties_Action.md#standard-action) de la Liste des propriétés). Seules les actions qui affichent une sous-liste d'éléments (à l'exception de l'action Aller à page) sont prises en charge par ce type d'objet. Par exemple, si vous sélectionnez l'action standard `backgroundColor`, à l'exécution l'objet affichera une liste automatique de couleurs de fond. Vous pouvez remplacer cette liste automatique par une liste personnalisée en associant à l'objet une énumération dans laquelle chaque élément a lui-même été assigné à une action standard.

Pour plus d'informations, reportez-vous à la section [Actions standard](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html).

## Propriétés prises en charge

[Format alpha ](properties_Display.md#alpha-format) - [Gras](properties_Text.md#bold) - [Bas](properties_CoordinatesAndSizing.md#bottom) - [Style de bouton](properties_TextAndPicture.md#button-style) - [Enumération](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Format date ](properties_Display.md#date-format) - [Type d'expression](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Police](properties_Text.md#font) - [Couleur de la police](properties_Text.md#font-color) - [Taille](properties_Text.md#font-size) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Message d'aide](properties_Help.md#help-tip) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italique](properties_Text.md#italic) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Non représenté](properties_Display.md#not-rendered) - [Nom](properties_Object.md#object-name) - [Droite](properties_CoordinatesAndSizing.md#right) - [Action standard ](properties_Action.md#standard-action) - [Enregistrer comme](properties_DataSource.md#save-as) - [Format heure](properties_Display.md#time-format) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Souligné](properties_Text.md#underline) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width)  
