---
id: listbox-object
title: List Box Object
---

## List box de type tableau

Dans une list box de type tableau, chaque colonne est associée à un tableau 4D à une dimension ; tous les types de tableaux peuvent être utilisés, à l’exception des tableaux de pointeurs. Le nombre de lignes est basé sur le nombre d’éléments du tableau.

Par défaut, 4D affecte le nom “ColonneN” à chaque variable de colonne. Vous pouvez le modifier, ainsi que d'autres propriétés de colonnes, dans les [propriétés des colonnes](listbox-column.md#column-specific-properties). Le format d'affichage de chaque colonne peut également être défini à l'aide de la commande `OBJECT SET FORMAT`.

> Les list box basées sur des tableaux peuvent être affichées sous forme de [list box hiérarchiques](listbox_overview.md#list-box-hierarchiques), disposant de mécanismes spécifiques.

Avec les list box de type tableau, les valeurs des colonnes (saisie et affichage) sont gérées à l’aide des commandes du langage 4D. Vous pouvez également associer une [énumération](properties_DataSource.md#choice-list) à une colonne afin de contrôler la saisie.
Avec les list box de type tableau, les valeurs des colonnes (saisie et affichage) sont gérées à l’aide des commandes du langage 4D. The values of columns are managed using high-level List box commands (such as [`LISTBOX INSERT ROWS`](../commands/listbox-insert-rows) or [`LISTBOX DELETE ROWS`](../commands/listbox-delete-rows)) as well as array manipulation commands.

```4d
ARRAY TEXT(varCol;size)
```

Vous pouvez également utiliser une énumération :

```4d
LIST TO ARRAY("ListName";varCol)
```

> **Attention :** Lorsqu’un objet List box contient plusieurs colonnes de tailles différentes, seul le nombre d’éléments correspondant au plus petit tableau est affiché. Il est donc conseillé de veiller à ce que chaque tableau ait le même nombre d’éléments que les autres. A noter également que si une colonne de la list box est “vide” (c'est le cas lorsque le tableau associé n'a pas été correctement déclaré ou dimensionné via le langage), la list box n'affiche aucun contenu.

## List box de type sélection

Dans ce type de list box, chaque colonne peut être associée à un champ (par exemple `[Employees]LastName)` ou à une expression. L’expression peut être basée sur un ou plusieurs champs (par exemple `[Employés]Nom+“ ”+[Employés]Prénom`) ou être simplement une formule (par exemple`String(Milliseconds)`). L’expression peut également être une méthode projet, une variable ou un élément de tableau. Vous pouvez utiliser les commandes `LISTBOX SET COLUMN FORMULA` et `LISTBOX INSERT COLUMN FORMULA` pour modifier les colonnes par programmation.

Le contenu de chaque ligne est ensuite évalué en fonction d'une sélection d'enregistrements : la **sélection courante** d'une table ou une **sélection temporaire**.

Dans le cas d’une list box basée sur la sélection courante, toute modification effectuée côté base de données est automatiquement reportée dans la list box et inversement. La sélection courante est donc toujours identique aux deux emplacements.

## List box collection ou entity selection

Dans ce type de list box, chaque colonne doit être associée à une expression. Le contenu de chaque ligne est ensuite évalué par élément de la collection ou par entité de l'entity selection.

Chaque élément de la collection ou chaque entité est disponible en tant qu'objet auquel on peut accéder via le mot-clé [This](../Concepts/classes.md#this). Une expression de colonne peut être un chemin de propriété, une méthode projet, une variable ou n'importe quelle formule, accédant à chaque entité ou objet élément de collection via `This`, par exemple `This.<propertyPath>` (ou `This.value` dans le cas d'une collection de valeurs scalaires). Vous pouvez utiliser les commandes `LISTBOX SET COLUMN FORMULA` et `LISTBOX INSERT COLUMN FORMULA` pour modifier les colonnes par programmation.

Lorsque la source de données est une entity selection, les modifications apportées du côté de la list box sont automatiquement enregistrées dans la base de données. En revanche, les modifications apportées du côté de la base de données sont visibles dans la list box après le rechargement des entités modifiées.

Lorsque la source de données est une collection, toute modification apportée aux valeurs de la list box se reflète dans la collection. En revanche, si des modifications sont apportées à la collection en utilisant par exemple les diverses fonctions de la [classe Collection](../API/CollectionClass.md), vous devrez en informer explicitement 4D en réaffectant la variable collection à elle-même, de sorte que le contenu de la list box soit actualisé. Par exemple :

```4d
myCol:=myCol.push("new value") //afficher new value dans la list box
```

### Propriétés prises en charge

Les propriétés prises en charge dépendent du type de list box.

| Propriété                                                                                   | List box tableau | Liste box sélection | List box collection ou entity selection |
| ------------------------------------------------------------------------------------------- | ---------------- | ------------------- | --------------------------------------- |
| [Couleur de fond alternée](properties_BackgroundAndBorder.md#alternate-background-color)    | X                | X                   | X                                       |
| [Couleur de fond](properties_BackgroundAndBorder.md#background-color--fill-color)           | X                | X                   | X                                       |
| [Gras](properties_Text.md#bold)                                                             | X                | X                   | X                                       |
| [Expression couleur de fond](properties_BackgroundAndBorder.md#background-color-expression) |                  | X                   | X                                       |
| [Style de la bordure](properties_BackgroundAndBorder.md#border-line-style)                  | X                | X                   | X                                       |
| [Bas](properties_CoordinatesAndSizing.md#bottom)                                            | X                | X                   | X                                       |
| [CSS Class](properties_Object.md#css-class)                                                 | X                | X                   | X                                       |
| [Collection ou entity selection](properties_Object.md#collection-or-entity-selection)       |                  | X                   | X                                       |
| [Redimensionnement colonnes auto](properties_ResizingOptions.md#column-auto-resizing)       | X                | X                   | X                                       |
| [Elément courant](properties_DataSource.md#current-item)                                    |                  |                     | X                                       |
| [Position élément courant](properties_DataSource.md#current-item-position)                  |                  |                     | X                                       |
| [Source de données](properties_Object.md#data-source)                                       | X                | X                   | X                                       |
| [Nom formulaire détaillé](properties_ListBox.md#detail-form-name)                           |                  | X                   |                                         |
| [Afficher en-têtes](properties_Headers.md#display-headers)                                  | X                | X                   | X                                       |
| [Afficher pieds](properties_Footers.md#display-footers)                                     | X                | X                   | X                                       |
| [Double-clic sur ligne](properties_ListBox.md#double-click-on-row)                          |                  | X                   |                                         |
| [Glissable](properties_Action.md#droppable)                                                 | X                | X                   | X                                       |
| [Déposable](properties_Action.md#droppable)                                                 | X                | X                   | X                                       |
| [Focusable](properties_Entry.md#focusable)                                                  | X                | X                   | X                                       |
| [Police](properties_Text.md#font)                                                           | X                | X                   | X                                       |
| [Couleur de la police](properties_Text.md#font-color)                                       | X                | X                   | X                                       |
| [Expression couleur police](properties_Text.md#font-color-expression)                       |                  | X                   | X                                       |
| [Taille](properties_Text.md#font-size)                                                      | X                | X                   | X                                       |
| [Hauteur (list box)](properties_CoordinatesAndSizing.md#height)          | X                | X                   | X                                       |
| [Hauteur (en-têtes)](properties_Headers.md#height)                       | X                | X                   | X                                       |
| [Hauteur (pieds)](properties_Footers.md#height)                          | X                | X                   | X                                       |
| [Masquer lignes vides finales](properties_BackgroundAndBorder.md#hide-extra-blank-rows)     | X                | X                   | X                                       |
| [Cacher rectangle de focus](properties_Appearance.md#hide-focus-rectangle)                  | X                | X                   | X                                       |
| [Cacher surlignage sélection](properties_Appearance.md#hide-selection-highlight)            | X                | X                   | X                                       |
| [List box hiérarchique](properties_Object.md#array-list-box)                                | X                |                     |                                         |
| [Ensemble surlignage](properties_ListBox.md#highlight-set)                                  |                  | X                   |                                         |
| [Alignement horizontal](properties_Text.md#horizontal-alignment)                            | X                | X                   | X                                       |
| [Couleur lignes horizontales](properties_Gridlines.md#horizontal-line-color)                | X                | X                   | X                                       |
| [Barre de défilement horizontale](properties_Appearance.md#horizontal-scroll-bar)           | X                | X                   | X                                       |
| [Dimensionnement horizontal](properties_ResizingOptions.md#horizontal-sizing)               | X                | X                   | X                                       |
| [Italique](properties_Text.md#italic)                                                       | X                | X                   | X                                       |
| [Gauche](properties_CoordinatesAndSizing.md#left)                                           | X                | X                   | X                                       |
| [Table principale](properties_DataSource.md#master-table)                                   |                  | X                   |                                         |
| [Meta info expression](properties_Text.md#meta-info-expression)                             |                  |                     | X                                       |
| [Méthode](properties_Action.md#method)                                                      | X                | X                   | X                                       |
| [Lignes déplaçables](properties_Action.md#movable-rows)                                     | X                |                     |                                         |
| [Sélection temporaire](properties_DataSource.md#selection-name)                             |                  | X                   |                                         |
| [Nombre de colonnes](properties_ListBox.md#number-of-columns)                               | X                | X                   | X                                       |
| [Nombre de colonnes verrouillées](properties_ListBox.md#number-of-locked-columns)           | X                | X                   | X                                       |
| [Nombre de colonnes statiques](properties_ListBox.md#number-of-static-columns)              | X                | X                   | X                                       |
| [Nom d'objet](properties_Object.md#object-name)                                             | X                | X                   | X                                       |
| [Droite](properties_CoordinatesAndSizing.md#right)                                          | X                | X                   | X                                       |
| [Tableau couleurs de fond](properties_BackgroundAndBorder.md#row-background-color-array)    | X                |                     |                                         |
| [Tableau de contrôle des lignes](properties_ListBox.md#row-control-array)                   | X                |                     |                                         |
| [Tableau couleurs de police](properties_Text.md#row-font-color-array)                       | X                |                     |                                         |
| [Hauteur des lignes](properties_CoordinatesAndSizing.md#row-height)                         | X                |                     |                                         |
| [Tableau hauteurs des lignes](properties_CoordinatesAndSizing.md#row-height-array)          | X                |                     |                                         |
| [Tableau de styles](properties_Text.md#row-style-array)                                     | X                |                     |                                         |
| [Eléments sélectionnés](properties_DataSource.md#selected-items)                            |                  |                     | X                                       |
| [Mode de sélection](properties_ListBox.md#selection-mode)                                   | X                | X                   | X                                       |
| [Saisie sur clic unique](properties_Entry.md#single-click-edit)                             | X                | X                   | X                                       |
| [Triable](properties_Action.md#sortable)                                                    | X                | X                   | X                                       |
| [Action standard](properties_Action.md#standard-action)                                     | X                |                     |                                         |
| [Expression Style](properties_Text.md#style-expression)                                     |                  | X                   | X                                       |
| [Haut](properties_CoordinatesAndSizing.md#top)                                              | X                | X                   | X                                       |
| [Transparent](properties_BackgroundAndBorder.md#transparent)                                | X                | X                   | X                                       |
| [Type](properties_Object.md#type)                                                           | X                | X                   | X                                       |
| [Souligné](properties_Text.md#underline)                                                    | X                | X                   | X                                       |
| [Variable ou expression](properties_Object.md#variable-or-expression)                       | X                | X                   |                                         |
| [Alignement vertical](properties_Text.md#vertical-alignment)                                | X                | X                   | X                                       |
| [Couleur lignes verticales](properties_Gridlines.md#vertical-line-color)                    | X                | X                   | X                                       |
| [Barre de défilement verticale](properties_Appearance.md#vertical-scroll-bar)               | X                | X                   | X                                       |
| [Dimensionnement vertical](properties_ResizingOptions.md#vertical-sizing)                   | X                | X                   | X                                       |
| [Visibilité](properties_Display.md#visibility)                                              | X                | X                   | X                                       |
| [Largeur](properties_CoordinatesAndSizing.md#width)                                         | X                | X                   | X                                       |

> Les colonnes, en-têtes et pieds de list box prennent en charge des propriétés spécifiques.

### Événements formulaire pris en charge

| Evénement formulaire | Propriétés supplémentaires retournées (voir [Evénement formulaire](https://doc.4d.com/4Dv18/4D/18/FORM-Evenement.301-4522191.fr.html) pour les propriétés principales)                      | Commentaires                                                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On After Keystroke   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            | *Les formules composées ne peuvent pas être triées. <br/>(ex : This.firstName + This.lastName)* |
| On Alternative Click | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | *Listbox tableau uniquement*                                                                                                                                                       |
| On Before Data Entry | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On Before Keystroke  | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On Begin Drag Over   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On Clicked           | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On Close Detail      | <li>[row](#additional-properties)</li>                                                                                                                                                                         | *Current Selection & Named Selection list boxes only*                                                                                                          |
| On Collapse          | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | *List box hiérarchiques uniquement*                                                                                                                                                |
| On Column Moved      | <li>[columnName](#additional-properties)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                      |                                                                                                                                                                                    |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[newSize](#additional-properties)</li><li>[oldSize](#additional-properties)</li>                                     |                                                                                                                                                                                    |
| On Data Change       | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On Delete Action     | <li>[row](#additional-properties)</li>                                                                                                                                                                         |                                                                                                                                                                                    |
| On Display Detail    | <li>[isRowSelected](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                                                         |                                                                                                                                                                                    |
| On Double Clicked    | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On Drag Over         | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                    |
| On Drop              | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   |                                                                                                                                                                                    |
| On Expand            | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | *List box hiérarchiques uniquement*                                                                                                                                                |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[footerName](#additional-properties)</li>                                                                            | *Arrays, Current Selection & Named Selection list boxes only*                                                                                                  |
| On Getting Focus     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | *Propriétés supplémentaires retournées uniquement lors de la modification d'une cellule*                                                                                           |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            |                                                                                                                                                                                    |
| On Load              |                                                                                                                                                                                                                |                                                                                                                                                                                    |
| On Losing Focus      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                   | *Propriétés supplémentaires retournées uniquement lorsque la modification d'une cellule est achevée*                                                                               |
| On Mouse Enter       | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                    |
| On Mouse Leave       |                                                                                                                                                                                                                |                                                                                                                                                                                    |
| On Mouse Move        | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                    |
| On Open Detail       | <li>[row](#additional-properties)</li>                                                                                                                                                                         | *Current Selection & Named Selection list boxes only*                                                                                                          |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                                   | *Listbox tableau uniquement*                                                                                                                                                       |
| On Selection Change  |                                                                                                                                                                                                                |                                                                                                                                                                                    |
| On Scroll            | <li>[horizontalScroll](#additional-properties)</li><li>[verticalScroll](#additional-properties)</li>                                                                                                           |                                                                                                                                                                                    |
| On Unload            |                                                                                                                                                                                                                |                                                                                                                                                                                    |

#### Propriétés supplémentaires {#additional-properties}

Les événements formulaire sur les list box ou colonnes de list box peuvent retourner les propriétés supplémentaires suivantes :

| Propriété        | Type        | Description                                                                   |
| ---------------- | ----------- | ----------------------------------------------------------------------------- |
| area             | text        | Zone de l'objet List box ("header", "footer", "cell")      |
| areaName         | text        | Nom de la zone                                                                |
| column           | entier long | Numéro de colonne                                                             |
| columnName       | text        | Nom de la colonne                                                             |
| footerName       | text        | Nom du pied                                                                   |
| headerName       | text        | Nom de l'en-tête                                                              |
| horizontalScroll | entier long | Positif si le défilement est vers la droite, négatif s'il est vers la gauche  |
| isRowSelected    | boolean     | Vrai si la ligne est sélectionnée, sinon Faux                                 |
| newPosition      | entier long | Nouvelle position de la colonne ou de la ligne                                |
| newSize          | entier long | Nouvelle taille (en pixels) de la colonne ou de la ligne   |
| oldPosition      | entier long | Position précédente de la colonne ou de la ligne                              |
| oldSize          | entier long | Taille précédente (en pixels) de la colonne ou de la ligne |
| row              | entier long | Numéro de ligne                                                               |
| verticalScroll   | entier long | Positif si le défilement est vers le bas, négatif s'il est vers le haut       |

> Si un événement se produit sur une "fake" colonne ou ligne qui n'existe pas, une chaîne vide est généralement renvoyée.
