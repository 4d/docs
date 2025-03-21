---
id: propertiesResizingOptions
title: Options de redimensionnement
---

## Redimensionnement colonnes auto

When this property is enabled (`rightToLeft` value in JSON), list box columns are automatically resized along with the list box, within the limits of the [minimum](properties_CoordinatesAndSizing.md#minimum-width) and [maximum](properties_CoordinatesAndSizing.md#maximum-width) widths defined.

Lorsque cette propriété est désactivée (valeur `legacy` dans JSON), seule la colonne la plus à droite de la listbox est redimensionnée, même si sa largeur dépasse la valeur maximale définie.

### Le redimensionnement automatique des colonnes

- À mesure que la largeur de la listbox augmente, ses colonnes sont agrandies une par une, en partant de la droite vers la gauche, jusqu'à ce que chacune atteigne sa [largeur maximale](properties_CoordinatesAndSizing.md#maximum-width). Seules les colonnes dont la propriété [Resizable](#resizable) est sélectionnée sont redimensionnées.

- The same procedure applies when the list box width decreases, but in reverse order (*i.e.*, columns are resized starting from left to right). When each column has reached its [minimum width](properties_CoordinatesAndSizing.md#minimum-width), the horizontal scroll bar becomes active again.

- Columns are resized only when the horizontal scroll bar is not "active"; *i.e.*, all columns are fully visible in the list box at its current size. **Note**: If the horizontal scroll bar is hidden, this does not alter its state: a scroll bar may still be active, even though it is not visible.

- Lorsque toutes les colonnes ont atteint leur taille maximale, elles ne sont plus agrandies et une colonne vide (fausse) est ajoutée à droite pour remplir l'espace supplémentaire. Si une fausse colonne (vide) est présente, lorsque la largeur de la listbox diminue, c'est la première zone à être réduite.

![](../assets/en/FormObjects/property_columnAutoResizing.png)

#### À propos de la fausse colonne (vide)

L'apparence de la fausse colonne correspond à celle des colonnes existantes ; elle aura un faux en-tête et/ou un faux pied de page si ces éléments sont présents dans les colonnes de la listbox existante et elle aura la même couleur d'arrière-plan.

The fake header and/or footer can be clicked but this does not have any effect on the other columns (e.g.: no sort is performed); nevertheless, the `On Clicked`, `On Header Click` and `On Footer Click` events are generated accordingly.

If a cell in the fake column is clicked, the [LISTBOX GET CELL POSITION](../commands-legacy/listbox-get-cell-position.md) command returns "X+1" for its column number (where X is the number of existing columns).

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles       |
| ------------ | --------------- | ----------------------- |
| resizingMode | string          | "rightToLeft", "legacy" |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Dimensionnement horizontal

This property specifies if an object should be horizontally moved or resized when a user resizes the form. Elle peut également être définie dynamiquement par la commande de langage `OBJECT SET RESIZING OPTIONS`.

Trois options sont disponibles :

| Option      | Valeur JSON | Résultat                                                                                                                                              |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agrandir    | "grow"      | Le même pourcentage est appliqué à la largeur de l'objet lorsque l'utilisateur redimensionne la largeur de la fenêtre,                                |
| Déplacement | "move"      | L'objet est déplacé vers la gauche ou vers la droite selon l'augmentation de la largeur lorsque l'utilisateur redimensionne la largeur de la fenêtre, |
| Aucun       | "fixed"     | L'objet reste stationnaire lorsque le formulaire est redimensionné                                                                                    |

> Cette propriété fonctionne avec la propriété [Dimensionnement vertical](#vertical-sizing).

#### Grammaire JSON

| Nom     | Type de données | Valeurs possibles       |
| ------- | --------------- | ----------------------- |
| sizingX | string          | "grow", "move", "fixed" |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md)

---

## Dimensionnement vertical

This property specifies if an object should be vertically moved or resized when a user resizes the form.It can also be set dynamically by the `OBJECT SET RESIZING OPTIONS` language command.

Trois options sont disponibles :

| Option      | Valeur JSON | Résultat                                                                                                                                         |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Agrandir    | "grow"      | Le même pourcentage est appliqué à la hauteur de l'objet lorsque l'utilisateur redimensionne la largeur de la fenêtre,                           |
| Déplacement | "move"      | L'objet est déplacé vers le haut ou vers le bas selon l'augmentation de la hauteur lorsque l'utilisateur redimensionne la largeur de la fenêtre, |
| Aucun       | "fixed"     | L'objet reste stationnaire lorsque le formulaire est redimensionné                                                                               |

> Cette propriété fonctionne avec la propriété [Dimensionnement horizontal](#horizontal-sizing).

#### Grammaire JSON

| Nom     | Type de données | Valeurs possibles       |
| ------- | --------------- | ----------------------- |
| sizingY | string          | "grow", "move", "fixed" |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md)

---

## Pousseur

Lorsqu'un objet splitter a cette propriété, les autres objets à sa droite (splitter vertical) ou en dessous (splitter horizontal) sont poussés en même temps que le splitter, sans arrêt.

Here is the result of a “pusher” splitter being moved:
![](../assets/en/FormObjects/splitter_pusher1.png)

![](../assets/en/FormObjects/splitter_pusher3.png)

Lorsque cette propriété n'est pas appliquée au splitter, le résultat est le suivant :

![](../assets/en/FormObjects/splitter_pusher2.png)

#### Grammaire JSON

| Nom          | Type de données |                              Valeurs possibles                             |
| :----------- | :-------------: | :------------------------------------------------------------------------: |
| splitterMode |      string     | "move" (pusher), "resize" (standard) |

#### Objets pris en charge

[Splitter](splitters.md)

---

## Redimensionnable

Indique si la taille de la colonne peut être modifiée par l'utilisateur.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles |
| :-------- | :-------------: | :---------------: |
| resizable |     boolean     |  "true", "false"  |

#### Objets pris en charge

[Colonne de list box](listbox_overview.md#list-box-columns)
