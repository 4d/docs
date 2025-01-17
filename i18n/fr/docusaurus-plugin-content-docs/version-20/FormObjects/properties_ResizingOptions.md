---
id: propertiesResizingOptions
title: Options de redimensionnement
---

## Redimensionnement colonnes auto

Lorsque cette propriété est activée (valeur `rightToLeft` dans JSON), les colonnes de listbox sont automatiquement redimensionnées en même temps que la listbox, dans les limites des largeurs [minimum](properties_CoordinatesAndSizing.md#minimum-width) et [maximum](properties_CoordinatesAndSizing.md#maximum-width) définies.

Lorsque cette propriété est désactivée (valeur `legacy` dans JSON), seule la colonne la plus à droite de la listbox est redimensionnée, même si sa largeur dépasse la valeur maximale définie.

### Le redimensionnement automatique des colonnes

* À mesure que la largeur de la listbox augmente, ses colonnes sont agrandies une par une, en partant de la droite vers la gauche, jusqu'à ce que chacune atteigne sa [largeur maximale](properties_CoordinatesAndSizing.md#maximum-width). Seules les colonnes dont la propriété [Resizable](#resizable) est sélectionnée sont redimensionnées.

* Le même principe s'applique lorsque la largeur de la listbox diminue, mais dans l'ordre inverse (c'est-à-dire que les colonnes sont redimensionnées de gauche à droite). Lorsque chaque colonne a atteint sa [largeur minimale](properties_CoordinatesAndSizing.md#minimum-width), la barre de défilement horizontale redevient active.

* Les colonnes sont redimensionnées uniquement lorsque la barre de défilement horizontale n'est pas "active", c'est-à-dire lorsque toutes les colonnes sont entièrement visibles dans la listbox à sa taille courante. **Note**: Si la barre de défilement horizontale est masquée, cela ne modifie pas son état : une barre de défilement peut toujours être active, même si elle n'est pas visible.

* Lorsque toutes les colonnes ont atteint leur taille maximale, elles ne sont plus agrandies et une colonne vide (fausse) est ajoutée à droite pour remplir l'espace supplémentaire. Si une fausse colonne (vide) est présente, lorsque la largeur de la listbox diminue, c'est la première zone à être réduite.

![](../assets/en/FormObjects/property_columnAutoResizing.png)

#### À propos de la fausse colonne (vide)

L'apparence de la fausse colonne correspond à celle des colonnes existantes ; elle aura un faux en-tête et/ou un faux pied de page si ces éléments sont présents dans les colonnes de la listbox existante et elle aura la même couleur d'arrière-plan.

Il est possible de cliquer sur le faux en-tête et/ou le faux pied de page, mais cela n'a aucun effet sur les autres colonnes (par exemple : aucun tri n'est effectué) ; néanmoins, les événements `On Clicked`, `On Header Click` et `On Footer Click` sont générés en conséquence.

Si une cellule de la fausse colonne est cliquée, la commande [LISTBOX GET CELL POSITION](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html) renvoie "X+1" pour son numéro de colonne (où X est le nombre de colonnes existantes).

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles       |
| ------------ | --------------- | ----------------------- |
| resizingMode | string          | "rightToLeft", "legacy" |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Dimensionnement horizontal

Cette propriété indique si un objet doit être déplacé ou redimensionné horizontalement lorsque l'utilisateur redimensionne le formulaire. Elle peut également être définie dynamiquement par la commande de langage `OBJECT SET RESIZING OPTIONS`.

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

Cette propriété indique si un objet doit être déplacé ou redimensionné verticalement lorsque l'utilisateur redimensionne le formulaire. Elle peut également être définie dynamiquement par la commande de langage `OBJECT SET RESIZING OPTIONS`.

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

[\[Colonne de list box\](listbox_overview.md#list-box-columns)](listbox_overview.md#list-box-columns)
