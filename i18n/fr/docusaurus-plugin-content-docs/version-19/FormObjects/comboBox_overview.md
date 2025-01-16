---
id: comboBoxOverview
title: Combo Box
---

Une combo box est semblable à une [liste déroulante](dropdownList_Overview.md#overview), hormis le fait que cet objet accepte la saisie de texte par l’utilisateur et qu'elle dispose d'options supplémentaires.

![](../assets/en/FormObjects/combo_box.png)

Fondamentalement, vous devez considérer l’objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par défaut.

## Gestion des combo boxes

Utilisez l’événement formulaire [`On Data Change`](Events/onDataChange.md) pour gérer les valeurs saisies, comme pour toute zone de saisie.

L'initialisation d'une combo box se fait exactement de la même manière que celle d'une [liste déroulante](dropdownList_Overview.md#overview) : en utilisant un objet, un tableau ou une liste de choix.

### Utiliser un objet

> Cette fonctionnalité n'est disponible que dans les projets 4D.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection.md) can be used as the data source of a combo box. Cet objet doit avoir les propriétés suivantes :

| Propriété      | Type                   | Description                                                                                                                                                                                                                                                                   |
| -------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection             | Obligatoire - Collection de valeurs scalaires. Toutes les valeurs doivent être du même type. Types pris en charge :<li>chaînes</li><li>nombres</li><li>dates</li><li>heures</li>Si elle est vide ou non définie, la combo box est vide |
| `currentValue` | identique à Collection | Texte saisi par l'utilisateur                                                                                                                                                                                                                                                 |

Si l'objet contient d'autres propriétés, elles sont ignorées.

Lorsque l'utilisateur saisit du texte dans la combo box, la propriété `currentValue` de l'objet reçoit le texte saisi.

### Utiliser un tableau

Veuillez vous référer à **Utiliser un tableau** dans la [page liste déroulante](dropdownList_Overview.md#using-an-array) pour obtenir des informations sur l'initialisation du tableau.

Lorsque l'utilisateur saisit du texte dans la combo box, l'élément 0 du tableau reçoit le texte saisi.

### Utiliser une énumération

Si vous souhaitez utiliser une combo box pour gérer les valeurs d'une zone de saisie (champ ou variable énuméré(e)), 4D vous permet de référencer directement le champ ou la variable en tant que source de données de l'objet formulaire. Cette possibilité facilite la gestion des champs/variables énuméré(e) s.
> Si vous utilisez une énumération hiérarchique, seul le premier niveau sera affiché et sélectionnable.

Pour associer une combo box à un champ ou à une variable, il suffit de saisir le nom du champ ou de la variable directement dans le champ [Variable ou Expression](properties_Object.md#variable-or-expression) de l'objet formulaire dans la liste des propriétés.

Lorsque le formulaire est exécuté, 4D gère automatiquement la combo box lors de la saisie ou de l'affichage : lorsque l'utilisateur choisit une valeur, celle-ci est enregistrée dans le champ ; cette valeur de champ est affichée dans la combo box lors de l'affichage du formulaire :

Pour plus d'informations, veuillez consulter **Utiliser une énumération** dans la page [liste déroulante](dropdownList_Overview.md#using-a-choice-list).

## Options

Les objets de type combo box acceptent deux options spécifiques :

- [Insertion automatique](properties_DataSource.md#automatic-insertion) : permet d'ajouter automatiquement une valeur à la source de données lorsque l'utilisateur saisit une valeur qui ne se trouve pas dans la liste associée à la combo box.
- [Exclusion ](properties_RangeOfValues.md#excluded-list) (liste de valeurs exclues) : permet d'établir une liste dont les valeurs ne peuvent pas être saisies dans la combo box. Si une valeur exclue est saisie, elle n'est pas acceptée et un message d'erreur s'affiche.
> La possibilité d’associer [une liste de valeurs obligatoires](properties_RangeOfValues.md#required-list) n’est pas disponible pour les combo box. Dans une interface, si un objet doit proposer une liste finie de valeurs obligatoires, il faut utiliser un objet de type [liste déroulante](dropdownList_Overview.md#overview).

## Propriétés prises en charge

[Format Alpha](properties_Display.md#alpha-format) - [Gras](properties_Text.md#bold) - [Bas](properties_CoordinatesAndSizing.md#bottom) - [Liste de choix](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Format de date](properties_Display.md#date-format) - [Type d'expression](properties_Object.md#expression-type) - [Police](properties_Text.md#font) - [Couleur de police](properties_Text.md#font-color) - [Taille de police](properties_Text.md#font-size) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Conseil d'aide](properties_Help.md#help-tip) - [Dimensionnement horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italique](properties_Text.md#italic) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Nom d'objet](properties_Object.md#object-name) - [Droite](properties_CoordinatesAndSizing.md#right) - [Format de l'heure](properties_Display.md#time-format) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Souligné](properties_Text.md#underline) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Dimensionnement vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width)  
