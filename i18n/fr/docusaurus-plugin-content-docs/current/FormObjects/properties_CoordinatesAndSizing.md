---
id: propertiesCoordinatesAndSizing
title: Coordonnées et dimensions
---

## Hauteur de ligne automatique

Cette propriété n'est disponible que pour les listbox avec les [sources de données](properties_Object.md#data-source) suivantes :

- collection ou entity selection,
- tableau (non hiérarchique).

Par défaut, cette option n'est pas sélectionnée. Lorsqu'elle est utilisée pour au moins une colonne, la hauteur de chaque ligne de la colonne est automatiquement calculée par 4D et le contenu de la colonne est pris en compte. A noter que seules les colonnes avec l'option sélectionnée seront prises en compte pour calculer la hauteur de ligne.

:::note

Lors du redimensionnement du formulaire, si la propriété de [dimensionnement horizontal](properties_ResizingOptions.md#horizontal-sizing) "Agrandir" a été affectée à la list box, la colonne la plus à droite sera agrandie, allant au-delà de sa largeur maxi

:::

Lorsque cette propriété est activée, la hauteur de chaque ligne est automatiquement calculée afin d'ajuster entièrement le contenu de la cellule ajusté sans être tronqué (sauf si l'option [Wordwrap](properties_Display.md#wordwrap) est désactivée.

- Le calcul de la hauteur de ligne prend en compte :
  - tout type de contenu (texte, numérique, dates, heures, images (le calcul dépend du format de l'image), objets),
  - tout types de contrôle (zones de saisie, cases à cocher, listes, listes déroulantes),
  - polices, styles de polices et tailles de polices,
  - l'option [Retour à la ligne](properties_Display.md#wordwrap) : si elle est désactivée, la hauteur est basée sur le nombre de paragraphes (les lignes sont tronquées); si elle est activée, la hauteur est basée sur le nombre de lignes (non tronquées).

- Le calcul de la hauteur de ligne ne tient pas compte de :
  - du contenu de colonne masqué
  - des propriétés du tableau [Hauteur de ligne](#row-height) et [Tableau hauteur de lignes](#row-height-array) (le cas échéant) définies dans la liste de propriété ou par programmation.

:::caution

Etant donné qu'elle nécessite des calculs supplémentaires lors de l'exécution, l'option "hauteur de ligne automatique" peut avoir une incidence sur la fluidité du défilement de votre list box, en particulier lorsqu'elle contient un grand nombre de lignes.

:::

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| rowHeightAuto | boolean         | true, false       |

#### Objets pris en charge

[Colonne de list box](listbox_overview.md#list-box-columns)

#### Commandes

[`LISTBOX Get property`](../commands/listbox-get-property.md) - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property.md)

---

## Bas

Coordonnées inférieures de l'objet dans le formulaire.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles           |
| ------ | --------------- | --------------------------- |
| bottom | number          | minimum : 0 |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

#### Commandes

## [OBJECT GET COORDINATES](../commands-legacy/object-get-coordinates.md) - [OBJECT MOVE](../commands-legacy/object-move.md) - [OBJECT SET COORDINATES](../commands-legacy/object-set-coordinates.md)

## Gauche

Coordonnées de gauche de l'objet dans le formulaire.

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles           |
| ---- | --------------- | --------------------------- |
| left | number          | minimum : 0 |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

#### Commandes

## [OBJECT GET COORDINATES](../commands-legacy/object-get-coordinates.md) - [OBJECT MOVE](../commands-legacy/object-move.md) - [OBJECT SET COORDINATES](../commands-legacy/object-set-coordinates.md)

## Droite

Coordonnées de droite de l'objet dans le formulaire.

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles           |
| ----- | --------------- | --------------------------- |
| right | number          | minimum : 0 |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

#### Commandes

## [OBJECT GET COORDINATES](../commands-legacy/object-get-coordinates.md) - [OBJECT MOVE](../commands-legacy/object-move.md) - [OBJECT SET COORDINATES](../commands-legacy/object-set-coordinates.md)

## Haut

Coordonnées supérieures de l'objet dans le formulaire.

#### Grammaire JSON

| Nom | Type de données | Valeurs possibles           |
| --- | --------------- | --------------------------- |
| top | number          | minimum : 0 |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

#### Commandes

## [OBJECT GET COORDINATES](../commands-legacy/object-get-coordinates.md) - [OBJECT MOVE](../commands-legacy/object-move.md) - [OBJECT SET COORDINATES](../commands-legacy/object-set-coordinates.md)

## Rayon d'arrondi

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 19 R7   | Prise en charge pour les zones de saisie et de texte |

</details>

Définit l'arrondi des coins (en pixels) de l'objet. Par défaut, la valeur du rayon est de 0 pixel. Vous pouvez modifier cette propriété pour dessiner des objets arrondis avec des formes personnalisées :

![](../assets/en/FormObjects/shape_rectangle.png)

La valeur minimale est de 0. Dans ce cas, un rectangle d'objet standard non arrondi est dessiné.
La valeur maximale dépend de la taille du rectangle (elle ne peut pas dépasser la moitié de la taille du côté le plus court du rectangle) et est calculée dynamiquement.

:::note

Avec les [zones de texte](text.md) et les [zones de saisie](input_overview.md) :

- la propriété de rayon d'angle n'est disponible qu'avec les [styles de ligne de bordure](properties_BackgroundAndBorder.md#border-line-style) "none", "solid" ou "dotted",
- l'arrondi du coin est dessiné en dehors de la zone de l'objet (l'objet apparaît plus grand dans le formulaire mais sa [largeur](properties_CoordinatesAndSizing.md#width) et sa [hauteur](properties_CoordinatesAndSizing.md#height) ne sont pas étendues).

![](../assets/en/FormObjects/radius-text.png)

:::

Vous pouvez également définir cette propriété à l'aide des commandes [OBJECT Get corner radius](../commands-legacy/object-get-corner-radius.md) et [OBJECT SET CORNER RADIUS](../commands-legacy/object-set-corner-radius.md) .

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles           |
| ------------ | --------------- | --------------------------- |
| borderRadius | integer         | minimum : 0 |

#### Objets pris en charge

[Entrée](input_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Zone de texte](text.md)

#### Commandes

[OBJECT GET CORNER RADIUS](../commands-legacy/object-get-corner-radius.md) - [OBJECT SET CORNER RADIUS](../commands-legacy/object-set-corner-radius.md)

---

## Hauteur

Cette propriété désigne la taille verticale d'un objet.

> Certains objets peuvent avoir une hauteur prédéfinie qui ne peut pas être modifiée.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles           |
| ------ | --------------- | --------------------------- |
| height | number          | minimum : 0 |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

#### Commandes

[OBJECT GET COORDINATES](../commands-legacy/object-get-coordinates.md) - [OBJECT MOVE](../commands-legacy/object-move.md) - [OBJECT SET COORDINATES](../commands-legacy/object-set-coordinates.md)

---

## Largeur

Cette propriété désigne la taille horizontale d'un objet.

> - Certains objets peuvent avoir une hauteur prédéfinie qui ne peut pas être modifiée.
> - Si la propriété [Resizable](properties_ResizingOptions.md#resizable) est utilisée pour une [colonne de list box](listbox_overview.md#list-box-columns), l'utilisateur peut également redimensionner manuellement la colonne.
> - Lors du redimensionnement du formulaire, si la propriété de [dimensionnement horizontal "Agrandir"](properties_ResizingOptions.md#horizontal-sizing) a été affectée à la list box, la colonne la plus à droite sera agrandie, allant au-delà de sa largeur maxi

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles           |
| ----- | --------------- | --------------------------- |
| width | number          | minimum : 0 |

#### Objets pris en charge

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [Line](shapes_overview.md#line) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

#### Commandes

[OBJECT GET COORDINATES](../commands-legacy/object-get-coordinates.md) - [OBJECT MOVE](../commands-legacy/object-move.md) - [OBJECT SET COORDINATES](../commands-legacy/object-set-coordinates.md)

---

## Largeur maxi

La largeur maximale de la colonne (en pixels). La largeur de la colonne ne peut pas être augmentée au-delà de cette valeur lors du redimensionnement de la colonne ou du formulaire.

> Lors du redimensionnement du formulaire, si la propriété de [dimensionnement horizontal "Agrandir"](properties_ResizingOptions.md#horizontal-sizing) a été affectée à la list box, la colonne la plus à droite sera agrandie, allant au-delà de sa largeur maxi

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles           |
| -------- | --------------- | --------------------------- |
| maxWidth | number          | minimum : 0 |

#### Objets pris en charge

[Colonne de list box](listbox_overview.md#list-box-columns)

#### Commandes

[LISTBOX Get column width](../commands-legacy/listbox-get-column-width.md) - [LISTBOX SET COLUMN WIDTH](../commands-legacy/listbox-set-column-width.md)

---

## Largeur mini

La largeur minimale de la colonne (en pixels). La largeur de la colonne ne peut pas être réduite en dessous de cette valeur lors du redimensionnement de la colonne ou du formulaire.

> Lors du redimensionnement du formulaire, si la propriété de [dimensionnement horizontal "Agrandir"](properties_ResizingOptions.md#horizontal-sizing) a été affectée à la list box, la colonne la plus à droite sera agrandie, allant au-delà de sa largeur maxi

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles           |
| -------- | --------------- | --------------------------- |
| minWidth | number          | minimum : 0 |

#### Objets pris en charge

[Colonne de list box](listbox_overview.md#list-box-columns)

#### Commandes

[LISTBOX Get column width](../commands-legacy/listbox-get-column-width.md) - [LISTBOX SET COLUMN WIDTH](../commands-legacy/listbox-set-column-width.md)

---

## Hauteur des lignes

Définit la hauteur des lignes de list box (hors en-têtes et pieds de page). Par défaut, la hauteur de ligne est définie en fonction de la plate-forme et de la taille de la police.

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles                                                    |
| --------- | --------------- | -------------------------------------------------------------------- |
| rowHeight | string          | valeur css dans l'unité "em" ou "px" (par défaut) |

#### Objets pris en charge

[List Box](listbox_overview.md)

#### Commandes

[LISTBOX Get row height](../commands-legacy/listbox-get-row-height.md) - [LISTBOX Get rows height](../commands-legacy/listbox-get-rows-height.md) - [LISTBOX SET ROW HEIGHT](../commands-legacy/listbox-set-row-height.md) - [LISTBOX SET ROWS HEIGHT](../commands-legacy/listbox-set-rows-height.md)

#### Voir également

[Row Height Array](#row-height-array)

---

## Tableau hauteurs des lignes

Cette propriété est utilisée pour indiquer le nom d'un tableau de hauteur de ligne que vous souhaitez associer à la list box. Un tableau de hauteur de ligne doit être de type numérique (entier long par défaut).

Lorsqu'un tableau de hauteur de ligne est défini, chacun de ses éléments dont la valeur est différente de 0 (zéro) est pris en compte pour déterminer la hauteur de la ligne correspondante dans la list box, en fonction de l'unité hauteur de ligne courante.

Par exemple, vous pouvez écrire :

```4d
ARRAY LONGINT(RowHeights;20)
RowHeights{5}:=3
```

En supposant que l'unité des lignes soit «lignes», alors la cinquième ligne de la list box aura une hauteur de trois lignes, tandis que chaque autre ligne conservera sa hauteur par défaut.

> - La propriété Row Height Array n'est pas prise en compte pour les list box hiérarchiques.
> - Pour les list box de type tableau et collection/entity selection, cette propriété n'est disponible que si l'option [Hauteur de ligne automatique](#automatic-row-height) n'est pas sélectionnée.

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles                              |
| --------------- | --------------- | ---------------------------------------------- |
| rowHeightSource | string          | Nom d'une variable tableau 4D. |

#### Objets pris en charge

[List Box](listbox_overview.md)

#### Commandes

[`LISTBOX Get array`](../commands-legacy/listbox-get-array.md) - [`LISTBOX GET ARRAYS`](../commands-legacy/listbox-get-arrays.md) - [`LISTBOX SET ARRAYS`](../commands-legacy/listbox-set-arrays.md)

#### Voir également

[Row Height](#row-height)

---

## Marge horizontale

Définit une marge horizontale pour les cellules. La valeur est définie en pixels (valeur par défaut = 0).

![](../assets/en/FormObjects/padding.png)

#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles                                   |
| ----------------- | --------------- | --------------------------------------------------- |
| horizontalPadding | number          | Nombre de pixels (doit être >=0) |

#### Objets pris en charge

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Footers](properties_Footers.md) - [Headers](properties_Headers.md)

#### Commandes

[`LISTBOX Get property`](../commands/listbox-get-property.md) - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property.md)

#### Voir également

[Vertical Padding](#vertical-padding)

---

## Marge verticale

Définit une marge verticale pour les cellules. La valeur est définie en pixels (valeur par défaut = 0).

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles                                   |
| --------------- | --------------- | --------------------------------------------------- |
| verticalPadding | number          | Nombre de pixels (doit être >=0) |

#### Objets pris en charge

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Footers](properties_Footers.md) - [Headers](properties_Headers.md)

#### Commandes

[`LISTBOX Get property`](../commands/listbox-get-property.md) - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property.md)

#### Voir également

[Horizontal Padding](#horizontal-padding)
