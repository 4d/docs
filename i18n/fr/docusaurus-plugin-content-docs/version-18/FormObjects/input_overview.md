---
id: inputOverview
title: Zone de saisie
---

## Vue d’ensemble

Les zones de saisie vous permettent d'ajouter des expressions saisissables ou non saisissables telles que des [champs](Concepts/identifiers.md#fields) et des [variables](Concepts/variables.md) de base de données à vos formulaires. Les zone de saisie peuvent gérer des données basées sur des caractères (texte, dates, numériques, etc.) ou des images :

![](../assets/en/FormObjects/input.png)

Les zones de saisie peuvent contenir [des expressions assignables ou non assignables](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

De plus, les zones de saisie peuvent être [saisissables ou non saisissables](properties_Entry.md#enterable). Une zone de saisie saisissable accepte des données. Vous pouvez définir des contrôles de saisie de données pour l'objet. Une zone de saisie non saisissable peut uniquement afficher des valeurs mais ne peut pas être modifiée par l'utilisateur.

Vous pouvez gérer les données avec des [méthodes](Concepts/methods.md) objet ou formulaire.

### Exemple JSON

```4d
 "myText": {
  "type": "input", //define the type of object
  "spellcheck": true, //enable spelling verification
  "left": 60,   //left position on the form  
  "top": 160,   //top position on the form
  "width": 100,  //width of the object
  "height": 20  //height of the object
  }
```

## Propriétés prises en charge

[Format alpha ](properties_Display.md#alpha-format) - [Correction automatique](properties_Entry.md#auto-spellcheck) - [Gras](properties_Text.md#bold) - [Format booléen](properties_Display.md#boolean-format) - [Style de la bordure](properties_BackgroundAndBorder.md#border-line-style) - [Bas](properties_CoordinatesAndSizing.md#bottom) - [Enumération](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Menu contextuel](properties_Entry.md#context-menu) - [Format date](properties_Display.md#date-format) - [Valeur par défaut](properties_RangeOfValues.md#default-value) - [Glissable](properties_Action.md#draggable) - [Déposable](properties_Action.md#droppable) - [Saisissable](properties_Entry.md#enterable) - [Filtre de saisie](properties_Entry.md#entry-filter) - [Exclusion](properties_RangeOfValues.md#excluded-list) - [Type d'expression](properties_Object.md#expression-type) - [Couleur de remplissage](properties_BackgroundAndBorder.md#fill-color) - [Police](properties_Text.md#font) - [Couleur de police](properties_Text.md#font-color) - [Taille](properties_Text.md#font-size) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Cacher rectangle de focus](properties_Appearance.md#hide-focus-rectangle) - [Alignement horizontal](properties_Text.md#horizontal-alignment) - [Barre de défilement horizontal ](properties_Appearance.md#horizontal-scroll-bar) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italique](properties_Text.md#italic) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Largeur du trait](properties_BackgroundAndBorder.md#line-width) - [Multilignes](properties_Entry.md#multiline) - [Multistyle](properties_Text.md#multi-style) - [Format numérique](properties_Display.md#number-format) - [Nom](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Format image](properties_Display.md#picture-format) - [Texte exemple](properties_Entry.md#placeholder) - [Impression taille variable](properties_Print.md#print-frame) - [Obligation](properties_RangeOfValues.md#required-list) - [Droite](properties_CoordinatesAndSizing.md#right) - [Enregistrer comme](properties_DataSource.md#save-as) - [Sélection toujours visible](properties_Entry.md#selection-always-visible) - [Stocker les balises par défaut](properties_Text.md#store-with-default-style-tags) - [Texte si Vrai/Texte si Faux](properties_Display.md#text-when-false-text-when-true) - [Format heure](properties_Display.md#time-format) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Souligné](properties_Text.md#underline) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Barre de défilement vert.](properties_Appearance.md#vertical-scroll-bar) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width) - [Retour à la ligne](properties_Display.md#wordwrap)

---

## Alternatives

Vous pouvez également représenter des expressions de champ et de variable dans vos formulaires à l'aide d'objets alternatifs, plus particulièrement :

* Vous pouvez afficher et saisir des données à partir des champs de la base de données directement dans des colonnes [de type List box](listbox_overview.md).
* Vous pouvez représenter un champ de liste ou une variable directement dans un formulaire à l'aide d'objets [Pop-up menus/Listes déroulantes](popupMenuDropdownList_overview) et [Combo box](comboBox_overview.md).
* Vous pouvez représenter une expression booléenne sous forme de [case à cocher](checkbox_overview.md) ou de [bouton radio](radio_overview.md).
