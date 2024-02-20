---
id: propertiesResizingOptions
title: Resizing Options
---

## Redimensionnement colonnes auto

Lorsque cette propriété est activée (valeur `rightToLeft` dans JSON), les colonnes de listbox sont automatiquement redimensionnées en même temps que la listbox, dans les limites des largeurs [minimum](properties_CoordinatesAndSizing.md#minimum-width) et [maximum](properties_CoordinatesAndSizing.md#maximum-width) définies.

Lorsque cette propriété est désactivée (valeur `legacy` dans JSON), seule la colonne la plus à droite de la listbox est redimensionnée, même si sa largeur dépasse la valeur maximale définie.

### Le redimensionnement automatique des colonnes

* À mesure que la largeur de la listbox augmente, ses colonnes sont agrandies une par une, en partant de la droite vers la gauche, jusqu'à ce que chacune atteigne sa [largeur maximale](properties_CoordinatesAndSizing.md#maximum-width). Seules les colonnes dont la propriété [Resizable](#resizable) est sélectionnée sont redimensionnées.

* The same procedure applies when the list box width decreases, but in reverse order (*i.e.*, columns are resized starting from left to right). When each column has reached its [minimum width](properties_CoordinatesAndSizing.md#minimum-width), the horizontal scroll bar becomes active again.

* Columns are resized only when the horizontal scroll bar is not "active"; *i.e.*, all columns are fully visible in the list box at its current size. **Note**: If the horizontal scroll bar is hidden, this does not alter its state: a scroll bar may still be active, even though it is not visible.

* After all columns reach their maximum size, they are no longer enlarged and instead a blank (fake) column is added on the right to fill the extra space. If a fake (blank) column is present, when the list box width decreases, this is the first area to be reduced.

![](../assets/en/FormObjects/property_columnAutoResizing.png)

#### About the fake (blank) column

The appearance of the fake column matches that of the existing columns; it will have a fake header and/or footer if these elements are present in the existing list box columns and it will have the same background color(s) applied.

The fake header and/or footer can be clicked but this does not have any effect on the other columns (e.g.: no sort is performed); nevertheless, the `On Clicked`, `On Header Click` and `On Footer Click` events are generated accordingly.

If a cell in the fake column is clicked, the [LISTBOX GET CELL POSITION](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html) command returns "X+1" for its column number (where X is the number of existing columns).

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles       |
| ------------ | --------------- | ----------------------- |
| resizingMode | string          | "rightToLeft", "legacy" |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Dimensionnement horizontal

Cette propriété indique si la taille horizontale d'un objet doit être déplacée ou redimensionnée lorsqu'un utilisateur redimensionne le formulaire. Elle peut également être définie dynamiquement par la commande de langage `OBJECT SET RESIZING OPTIONS`.

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

[Zone 4D View Pro](viewProArea_overview.md) - [Zone 4D Write Pro](writeProArea_overview.md) - [Bouton](button_overview.md) - [Grille de boutons](buttonGrid_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Ligne](shapes_overview.md#line) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Ovale](shapes_overview.md#oval) - [Bouton image](pictureButton_overview.md) - [Pop up menu image](picturePopupMenu_overview.md) - [Zone de plug-in](pluginArea_overview.md#overview) - [Indicateur de progression](progressIndicator.md) - [Bouton radio](radio_overview.md) - [Règle](ruler.md) - [ Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Image statique](staticPicture.md) [Stepper](stepper.md) - [Sous-formulaire](subform_overview.md) - [Onglet](tabControl.md) - [Zone de texte](text.md)

---

## Dimensionnement vertical

Cette propriété indique si la taille verticale d'un objet doit être déplacée ou redimensionnée lorsqu'un utilisateur redimensionne le formulaire. Elle peut également être définie dynamiquement par la commande de langage `OBJECT SET RESIZING OPTIONS`.

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

[Zone 4D View Pro](viewProArea_overview.md) - [Zone 4D Write Pro](writeProArea_overview.md) - [Bouton](button_overview.md) - [Grille de boutons](buttonGrid_overview.md) - [Case à cocher](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Liste hiérarchique](list_overview.md#overview) - [Zone de saisie](input_overview.md) - [List Box](listbox_overview.md#overview) - [Ligne](shapes_overview.md#line) - [Colonne List Box](listbox_overview.md#list-box-columns) - [Ovale](shapes_overview.md#oval) - [Bouton image](pictureButton_overview.md) - [Pop up menu image](picturePopupMenu_overview.md) - [Zone de plug-in](pluginArea_overview.md#overview) - [Indicateur de progression](progressIndicator.md) - [Bouton radio](radio_overview.md) - [Règle](ruler.md) - [ Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Image statique](staticPicture.md) [Stepper](stepper.md) - [Sous-formulaire](subform_overview.md) - [Onglet](tabControl.md) - [Zone de texte](text.md)

---

## Pousseur

Lorsqu'un objet splitter a cette propriété, les autres objets à sa droite (splitter vertical) ou en dessous (splitter horizontal) sont poussés en même temps que le splitter, sans arrêt.

Here is the result of a “pusher” splitter being moved: ![](../assets/en/FormObjects/splitter_pusher1.png)

![](../assets/en/FormObjects/splitter_pusher3.png)

Lorsque cette propriété n'est pas appliquée au splitter, le résultat est le suivant :

![](../assets/en/FormObjects/splitter_pusher2.png)

#### Grammaire JSON

| Nom          | Type de données |          Valeurs possibles           |
|:------------ |:---------------:|:------------------------------------:|
| splitterMode |     string      | "move" (pusher), "resize" (standard) |

#### Objets pris en charge

[Séparateur](splitters.md)

---

## Redimensionnable

Indique si la taille de la colonne peut être modifiée par l'utilisateur.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles |
|:--------- |:---------------:|:-----------------:|
| resizable |     boolean     |  "true", "false"  |

#### Objets pris en charge

[Colonne de list box](listbox_overview.md#list-box-columns)
