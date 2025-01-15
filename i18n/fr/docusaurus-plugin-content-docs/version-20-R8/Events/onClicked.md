---
id: onClicked
title: On Clicked
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Définition                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 4    | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) - [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Zone de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | Un clic a été effectué sur un objet |

## Description

L'événement `On Clicked` est généré lorsque l'utilisateur clique sur un objet.

> Certains objets de formulaire peuvent être activés avec le clavier. Par exemple, une fois qu'une case à cocher obtient le focus, elle peut être saisie à l'aide de la barre d'espace. Dans ce cas, l'événement `On Clicked` est toujours généré.

L'événement `On Clicked` se produit généralement une fois que le bouton de la souris est relâché. Cependant, il existe plusieurs exceptions :

- [Boutons invisibles](FormObjects/properties_Display.md#not-rendered): l'événement `On Clicked` se produit dès que le clic est effectué et n'attend pas que le bouton de la souris soit relâché.
- [Règles](FormObjects/ruler.md) : si l'option de [méthode d'exécution d'objet](FormObjects/properties_Action.md#execute-object-method) est définie sur **true**, l'événement `On Clicked` se produit dès que le clic est effectué.
- [Combo box](FormObjects/comboBox_overview.md) : l'événement `On Clicked` se produit uniquement si l'utilisateur sélectionne une autre valeur dans le menu associé. Une [combo box](FormObjects/comboBox_overview.md) doit être traitée comme une zone de texte saisissable dont la liste déroulante associée fournit des valeurs par défaut. Par conséquent, vous gérez la saisie de données dans une combo box via les événements `On Before Keystroke`, `On After Keystroke` et `On Data Change`.
- [Listes déroulantes](FormObjects/dropdownList_Overview.md) : l'événement `On Clicked` se produit uniquement si l'utilisateur sélectionne une autre valeur dans le menu. L'événement `On Data Change` vous permet de détecter l'activation de l'objet lorsqu'une valeur différente de la valeur courante est sélectionnée
- Lorsqu'une cellule d'entrée de list box est [en cours d'édition](FormObjects/listbox_overview.md#managing-entry), l'événement `On Clicked` est généré lorsque le bouton de la souris est enfoncé, permettant d'utiliser la commande `Contextual click` par exem

Dans le cas d'un événement `On Clicked`, vous pouvez tester le nombre de clics effectués par l'utilisateur à l'aide de la commande `Clickcount`.

### On Clicked et On Double Clicked

Une fois que la propriété d'événement d'objet `On Clicked` ou [`On Double Clicked`](onDoubleClicked.md) est sélectionnée pour un objet, vous pouvez détecter et gérer les clics à l'intérieur ou sur l'objet, en utilisant la commande `FORM event` qui renvoie `On Clicked` ou [`On Double Clicked`](onDoubleClicked.md), selon le cas.

Si les deux événements sont sélectionnés pour un objet, les événements `On Clicked` puis `On Double Clicked` seront générés lorsque l'utilisateur double-clique sur l'objet.

### 4D View Pro

Cet événement est généré lorsque l'utilisateur clique n'importe où dans un document 4D View Pro. Dans ce contexte, l'[objet événement](overview.md#event-object) retourné par la commande `FORM Event` contient :

| Propriété   | Type        | Description                      |
| ----------- | ----------- | -------------------------------- |
| code        | entier long | On Clicked                       |
| Description | text        | "On Clicked"                     |
| objectName  | text        | Nom de la zone 4D View Pro       |
| sheetName   | text        | Nom de la feuille de l'événement |
| range       | object      | Plage de cellule                 |

#### Exemple

```4d
 If(FORM Event.code=On Clicked)
    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))
 End if
```
