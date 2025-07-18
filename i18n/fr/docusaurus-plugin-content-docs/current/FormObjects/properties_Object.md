---
id: propertiesObject
title: Objets
---

---

## Type

`PARAMETRAGE OBLIGATOIRE`

Cette propriété désigne le type [objet de formulaire actif ou inactif](formObjects_overview.md).

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles                                                                                                                                                                                                                                                                                        |
| ---- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | string          | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) -[Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Nom d'objet

Chaque objet de formulaire actif est associé à un nom d'objet. Chaque nom d'objet doit être unique.

> Les noms d'objets sont limités à une taille de 255 octets.

Lorsque vous utilisez le langage 4D, vous pouvez vous référer à un objet de formulaire actif par son nom d'objet (voir les commandes [Objects (Forms)](../category/object-forms)).

Pour plus d'informations sur les règles de nommage pour les objets de formulaire, reportez-vous à la section [Identifiers](Concepts/identifiers.md).

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles                                               |
| ---- | --------------- | --------------------------------------------------------------- |
| name | string          | Tout nom autorisé qui n'appartient pas à un objet déjà existant |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Mémoriser valeur

Cette propriété est disponible lorsque l'option [Mémoriser géométrie](FormEditor/properties_FormProperties.md#save-geometry) est sélectionnée pour le formulaire.

Cette fonction n'est disponible que pour les objets qui contribuent à la géométrie globale du formulaire. Par exemple, cette option est disponible pour les cases à cocher car leur valeur peut être utilisée pour masquer ou afficher des zones supplémentaires dans la fenêtre.

Voici la liste des objets dont la valeur peut être mémorisée :

| Object                                       | Valeur mémorisée                                                                                         |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Case à cocher](checkbox_overview.md)        | Valeur de la variable associée (0, 1, 2)                                              |
| [Liste déroulante](dropdownList_Overview.md) | Numéro de la ligne sélectionnée                                                                          |
| [Bouton Radio](radio_overview.md)            | Valeur de la variable associée (1, 0, True ou False pour les boutons selon leur type) |
| [Onglet](tabControl.md)                      | Numéro de l'onglet sélectionné                                                                           |

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| memorizeValue | boolean         | true, false       |

#### Objets pris en charge

[Case à cocher](checkbox_overview.md) - [Liste déroulante](dropdownList_Overview.md) - [Bouton radio](radio_overview.md) - [Onglets](tabControl.md)

---

## Variable ou expression

> Voir également **[Expression](properties_DataSource.md#expression)** pour les colonnes de list box de type sélection et collection.

Cette propriété spécifie la source des données. Chaque objet de formulaire actif est associé à un nom d'objet et à un nom de variable. Le nom de la variable peut être différent du nom de l'objet. Dans un même formulaire, vous pouvez utiliser plusieurs fois la même variable alors que chaque [nom d'objet](#object-name) doit être unique.

> La taille du nom de la variable est limitée à 31 octets. Voir la section [Identifiants](Concepts/identifiers.md) pour plus d'informations sur les règles de nommage.

Les variables d'objet de formulaire vous permettent de contrôler et de piloter les objets. Par exemple, lorsqu'un bouton est cliqué, sa variable est fixée à 1 ; à tout autre moment, elle est fixée à 0. L'expression associée à un indicateur de progression permet de lire et de modifier le réglage en cours.

Les variables ou expressions peuvent être saisissables ou non saisissables et peuvent recevoir des données de type Texte, Entier, Reél, Date, Heure, Image, Booléen ou Objet.

#### Grammaire JSON

| Nom        | Type de données             | Valeurs possibles                                                                                                                                                                                                                                                                |
| ---------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | texte, ou tableau de textes | <li>variable, nom de champ, ou toute expression 4D.</li><li>Chaîne vide pour [variables dynamiques](#dynamic-variables).</li><li>Tableau de chaînes (collection de noms de tableau) pour une [colonne de listbox hiérarchique](listbox_overview.md#hierarchical-list-boxes)</li> |

### Expressions

Vous pouvez utiliser une [expression](Concepts/quick-tour.md#expressions) comme source de données pour un objet. Toute expression 4D valide est autorisée : expression simple, propriété d'objet, formule, fonction 4D, nom de méthode projet ou champ utilisant la syntaxe standard `[Table]Field`. L'expression est évaluée lors de l'exécution du formulaire et réévaluée à chaque événement du formulaire. L'expression est évaluée lors de l'exécution du formulaire et réévaluée à chaque événement du formulaire.

> Si la valeur saisie correspond à la fois à un nom de variable et à un nom de méthode, 4D considère que vous indiquez la méthode.

### Variables dynamiques

Vous pouvez laisser à 4D le soin de créer les variables associées à vos objets de formulaire (boutons, zones de saisie, cases à cocher, etc.) de façon dynamique et en fonction de vos besoins. Pour cela, il suffit de laisser la propriété "Variable ou expression" (ou le champ JSON `dataSource`) vide.

Lorsqu'une variable n'est pas nommée, au chargement du formulaire, 4D crée une nouvelle variable pour l'objet, avec un nom calculé qui est unique dans l'espace des variables de process de l'interpréteur (ce qui signifie que ce mécanisme peut être utilisé même en mode compilé). Cette variable temporaire sera détruite à la fermeture du formulaire.

Pour récupérer ou définir la valeur des objets de formulaire qui utilisent des variables dynamiques, vous avez juste besoin d'appeler les commandes [`OBJECT Get value`](../commands-legacy/object-get-value.md) et [`OBJECT SET VALUE`](../commands-legacy/object-set-value.md). Par exemple :

```4d
 var $value : Variant
 $value:=OBJECT Get value("comments")
 OBJECT SET VALUE("comments";$value+10) 
```

### List box tableau

Pour une list box de type tableau, la propriété **Variable ou Expression** contient généralement le nom de la variable de type tableau définie pour la list box et pour chaque colonne. Toutefois, vous pouvez utiliser un tableau texte (contenant des noms de tableaux) comme valeur *dataSource* pour une colonne de list box afin de définir une [listbox hiérarchique](listbox_overview.md#hierarchical-list-boxes).

#### Objets pris en charge

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md)

---

## Type d’expression

> Cette propriété est appelée [**Type de données**](properties_DataSource.md#data-type-expression-type) dans la liste de propriétés pour les colonnes de list box de type [sélection](listbox_overview.md#selection-list-boxes) et [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) et pour les [Listes déroulantes](dropdownList_Overview.md) associées à un [objet](FormObjects/dropdownList_Overview.md#using-an-object) ou un [tableau](FormObjects/dropdownList_Overview.md#using-an-array).

Spécifie le type de données pour l'expression ou la variable associée à l'objet. Notez que l'objectif principal de ce paramètre est de configurer les options (telles que les formats d'affichage) disponibles pour le type de données. Il ne type pas la variable elle-même. En vue d'une compilation de projet, vous devez [déclarer la variable](Concepts/variables.md#declaring-variables).

Toutefois, cette propriété a une fonction de typage dans les cas spécifiques suivants :

- **[Variables dynamiques](#dynamic-variables)** : vous pouvez utiliser cette propriété pour déclarer le type des variables dynamiques.
- **[Colonnes de list box](listbox_overview.md#list-box-columns)** : cette propriété est utilisée pour associer un format d'affichage aux données de la colonne. Les formats fournis dépendent du type de variable (list box de type tableau) ou du type de données/de champ (list box de type sélection et collection). Les formats 4D standard qui peuvent être utilisés sont les suivants : Alpha, Numérique, Date, Heure, Image et Booléen. Le type Texte n'a pas de format d'affichage spécifique. Tous les formats personnalisés existants sont également disponibles.
- **[Variables image](input_overview.md)** : vous pouvez utiliser ce menu pour déclarer les variables avant de charger le formulaire en mode interprété. Des mécanismes natifs spécifiques régissent l'affichage des variables image dans les formulaires. Des mécanismes natifs spécifiques régissent l'affichage des variables image dans les formulaires. Ces mécanismes exigent une plus grande précision dans la configuration des variables : elles doivent avoir été déclarées avant le chargement du formulaire - c'est-à-dire avant même l'événement formulaire `On Load` - à la différence des autres types de variables.
  Sinon, la variable image ne sera pas affichée correctement (uniquement en mode interprété).

#### Grammaire JSON

| Nom                | Type de données | Valeurs possibles                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceTypeHint | string          | <li>**Objets standards :** "integer", "boolean", "number", "image", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**colonnes de list box :** "boolean", "number", "picture", "text", date", "time". *list box tableaux/sélection uniquement* : "integer", "object"</li> |

#### Objets pris en charge

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)

---

## CSS Class

Une liste de mots séparés par des espaces utilisés comme sélecteurs de classes dans [fichiers css](FormEditor/createStylesheet.md#style-sheet-files).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                                                                                                   |
| ----- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| class | string          | Une chaîne avec le(s) nom(s) CSS séparé(s) par des caractères d'espacement |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Radio Button](radio_overview.md) - [Static Picture](staticPicture.md) - [Subform](subform_overview.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Collection ou entity selection

Pour utiliser des éléments de collection ou des entités afin de définir le contenu des lignes de la list box.

Saisissez une expression qui renvoie une collection ou une entity selection. En général, vous saisissez le nom d'une variable, d'un élément de collection ou d'une propriété qui contient une collection ou une entity selection.

La collection ou l'entity selection doit être disponible pour le formulaire lors de son chargement. Chaque élément de la collection ou de chaque entité de l'entity selection sera associé(e) à une ligne de list box et sera disponible en tant qu'objet via le mot-clé [`This`](../Concepts/classes.md#this) :

- si vous avez utilisé une collection d'objets, vous pouvez appeler **This** dans l'expression datasource pour accéder à chaque valeur de propriété, par exemple `This.<propertyPath>`.
- si vous avez utilisé une entity selection, vous pouvez appeler **This** dans l'expression detasource pour accéder à chaque valeur d'attribut, par exemple `This.<attributePath>`.

> Si vous avez utilisé une collection de valeurs scalaires (et non des objets), 4D vous permet d'afficher chaque valeur en appelant **This.value** dans l'expression datasource. Cependant, dans ce cas, vous ne pourrez pas modifier les valeurs ou accéder à l'objet courant (voir ci-dessous).

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                              |
| ---------- | --------------- | ------------------------------------------------------------------------------ |
| dataSource | string          | Expression qui renvoie une collection ou une entity selection. |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Source de données

Spécifie le type de list box.

![](../assets/en/FormObjects/listbox_dataSource.png)

- **Tableaux** (par défaut) : utiliser des éléments de tableaux comme lignes de la list box.
- **Sélection courante** : utiliser des expressions, champs ou méthodes dont les valeurs seront évaluées pour chaque enregistrement de la sélection courante d'une table.
- **Sélection temporaire** : utiliser des expressions, champs ou méthodes dont les valeurs seront évaluées pour chaque enregistrement de la sélection temporaire.
- **Collection ou Entity selection** : utiliser des éléments de collections ou des entités pour définir le contenu des lignes de la list box. Notez qu'avec ce type de list box vous devez définir la propriété [Collection ou Entity Selection](properties_Object.md#collection-or-entity-selection).

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                           |
| ----------- | --------------- | ----------------------------------------------------------- |
| listboxType | string          | "array", "currentSelection", "namedSelection", "collection" |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Type de Plug-in

Nom de la [zone externe de plugin](pluginArea_overview.md) associée à l'objet. Les noms des zones externes de plug-in sont publiés dans le fichier manifest.json du plug-in.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                                                                  |
| -------------- | --------------- | ---------------------------------------------------------------------------------- |
| pluginAreaKind | string          | Nom de la zone externe du plug-in (commence par un caractère %) |

#### Objets pris en charge

[Zone de plugin](pluginArea_overview.md)

---

## Groupe de boutons radio

Permet d'utiliser les boutons radio dans des ensembles coordonnés : un seul bouton à la fois peut être sélectionné dans l'ensemble.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles   |
| ---------- | --------------- | ------------------- |
| radioGroup | string          | Nom du groupe radio |

#### Objets pris en charge

[Bouton Radio](radio_overview.md)

---

## Titre

Permet d'insérer un libellé sur un objet. La police et le style de ce libellé peuvent être spécifiés.

Vous pouvez forcer un retour chariot dans le libellé en utilisant le caractère \ (barre oblique inverse).

![](../assets/en/FormObjects/property_title.png)

Pour insérer un \ dans le libellé, entrez "&#92;&#92;".

Par défaut, le libellé est placé au centre de l'objet. Lorsque l'objet contient également une icône, vous pouvez modifier l'emplacement relatif de ces deux éléments à l'aide de la propriété [Position Titre/Image](properties_TextAndPicture.md#titlepicture-position).

Pour des raisons de traduction d'applications, vous pouvez entrer une référence XLIFF dans la zone de titre d'un bouton (voir [Annexe B : architecture XLIFF](https://doc.4d.com/4Dv20/4D/20.2/Appendix-B-XLIFF-architecture.300-6750166.en.html)).

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles |
| ---- | --------------- | ----------------- |
| text | string          | tout texte        |

#### Objets pris en charge

[Bouton](button_overview.md) - [Case à cocher](checkbox_overview.md) - [En-tête de Listbox](listbox_overview.md#list-box-headers) - [Bouton radio](radio_overview.md) - [Zone de texte](text.md)

---

## Calcul de la variable

Cette propriété définit le type de calcul à effectuer dans une zone [pied de colonne](listbox_overview.md#list-box-footers).

> Le calcul des pieds de page peut également être défini en utilisant la commande 4D [`LISTBOX SET FOOTER CALCULATION`](../commands-legacy/listbox-set-footer-calculation.md).

Il existe plusieurs types de calculs. Le tableau suivant montre quels calculs peuvent être utilisés en fonction du type de données présentes dans chaque colonne et indique le type automatiquement affecté par 4D à la variable de pied de colonne (si elle n'est pas typée par le code) :

| Calcul                                    | Num | Text | Date | Time | Bool | Pict | type var pied de page        |
| ----------------------------------------- | --- | ---- | ---- | ---- | ---- | ---- | ---------------------------- |
| Minimum                                   | X   | X    | X    | X    | X    |      | Identique au type de colonne |
| Maximum                                   | X   | X    | X    | X    | X    |      | Identique au type de colonne |
| Sum                                       | X   |      |      | X    | X    |      | Identique au type de colonne |
| Count                                     | X   | X    | X    | X    | X    | X    | Integer                      |
| Average                                   | X   |      |      | X    |      |      | Real                         |
| Standard deviation(\*) | X   |      |      | X    |      |      | Real                         |
| Variance(\*)           | X   |      |      | X    |      |      | Real                         |
| Sum squares(\*)        | X   |      |      | X    |      |      | Real                         |
| Custom ("none")        | X   | X    | X    | X    | X    | X    | Tous                         |

(\*) Uniquement pour les list box de type tableau.

> Seules les [variables](Concepts/variables.md) déclarées ou dynamiques peuvent être utilisées pour afficher les calculs des pieds de listbox. Les autres types d'[expressions](Concepts/quick-tour.md#expressions) telles que `Form.sortValue` ne sont pas pris en charge.

Les calculs automatiques ne tiennent pas compte de l'état affiché/masqué des lignes de list box. Si vous souhaitez limiter un calcul aux seules lignes visibles, vous devez utiliser un calcul personnalisé.

Les valeurs *Null* ne sont prises en compte pour aucun calcul.

Si la colonne contient différents types de valeurs (colonne basée sur une collection par exemple) :

- Les fonctions Average et Sum ne prennent en compte que les éléments numériques (les autres types d'éléments sont ignorés).
- Minimum et Maximum renvoient un résultat selon l'ordre habituel de la liste de types, tel que documenté dans la fonction [collection.sort()](API/CollectionClass.md#sort).

L'utilisation de calculs automatiques dans les pieds de colonnes basées sur des expressions présente les limitations suivantes :

- elle est **prise en charge** par tous les types de list box lorsque l'expression est "simple" (comme `[table]field` ou `this.attribute`),
- elle est **prise en charge mais non recommandée** pour des raisons de performances avec des listbox collection/entity selection lorsque l'expression est "complexe" (autre que `this.attribute`) et que la list box contient un grand nombre de lignes,
- elle n'est **pas prise en charge** avec les listbox sélection courante/sélection temporaire lorsque l'expression est "complexe". Vous devez utiliser des calculs personnalisés.

Lorsque **Custom** ("none" en JSON) est défini, aucun calcul automatique n'est effectué par 4D et vous devez assigner la valeur de la variable dans cette zone par programmation.

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles                                                                                     |
| ------------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string          | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### Objets pris en charge

[Pied de listbox](listbox_overview.md#list-box-footers)
