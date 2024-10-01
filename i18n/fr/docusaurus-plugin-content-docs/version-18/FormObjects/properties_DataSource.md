---
id: propertiesDataSource
title: Source de données
---


## Insertion automatique

Lorsque cette option est sélectionnée, si un utilisateur saisit une valeur introuvable dans la liste déroulante associée à l'objet, cette valeur est automatiquement ajoutée à la liste stockée en mémoire. Vous pouvez associer des listes de choix à des objets, à l'aide :

- de la propriété JSON [Choice List](properties_DataSource.md#choice-list)
- des commandes [OBJECT SET LIST BY NAME](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-NAME.301-4128227.en.html) ou [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-REFERENCE.301-4128237.en.html).
- de la liste des propriétés de l'éditeur de formulaires.

Par exemple, pour une liste de choix contenant "France, Allemagne, Italie" associée à une combo box "Pays" : si la propriété d'**insertion automatique** est définie et qu'un utilisateur saisit "Espagne", la valeur "Espagne" est alors automatiquement ajoutée à la liste en mémoire :

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

Naturellement, la valeur saisie ne doit pas appartenir à la liste des [valeurs exclues](properties_RangeOfValues.md#excluded-list) associée à l'objet, si elle a été définie.
> Si la liste a été créée à partir d'une liste définie en mode Développement, la liste d'origine n'est pas modifiée.

Lorsque l'option d'**insertion automatique** n'est pas sélectionnée (par défaut), la valeur saisie est stockée dans l'objet mais pas dans la liste en mémoire.

#### Grammaire JSON

| Nom                | Type de données | Valeurs possibles |
| ------------------ | --------------- | ----------------- |
| automaticInsertion | boolean         | true, false       |

#### Objets pris en charge

[Combo Box](comboBox_overview.md) - [Colonne List Box](listbox_overview.md#list-box-columns)

---

## Enumération

Associe une liste de choix à un objet. Il peut s'agir d'un nom de liste de choix (une référence de liste) ou d'une collection de valeurs par défaut.

#### Grammaire JSON

| Nom        | Type de données   | Valeurs possibles                                                |
| ---------- | ----------------- | ---------------------------------------------------------------- |
| choiceList | liste, collection | Une liste de valeurs possibles                                   |
| liste      | liste, collection | Une liste de valeurs possibles (listes hiérarchiques uniquement) |

#### Objets pris en charge

[Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Enumération (liste statique)

Liste de valeurs statiques à utiliser comme étiquettes pour l'objet onglet.

#### Grammaire JSON

| Nom    | Type de données   | Valeurs possibles                           |
| ------ | ----------------- | ------------------------------------------- |
| labels | liste, collection | Une liste de valeurs à saisir dans l'onglet |

#### Objets pris en charge

[Onglets](tabControl.md)

---

## Élément courant

`Listbox de type collection ou entity selection`

Indique une variable ou une expression qui se verra attribuer l'élément/l'entité de collection sélectionné(e) par l'utilisateur. Vous devez utiliser une variable objet ou une expression assignable qui accepte des objets. Si l'utilisateur ne sélectionne rien ou si vous avez utilisé une collection de valeurs scalaires, la valeur Null est affectée.
> Cette propriété est en "lecture seule", elle est automatiquement mise à jour en fonction des actions de l'utilisateur dans la list box. Vous ne pouvez pas modifier sa valeur pour modifier l'état de sélection de la list box.

#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles  |
| ----------------- | --------------- | ------------------ |
| currentItemSource | string          | Expression d'objet |

#### Objets pris en charge

[List Box](listbox_overview.md#overview)

---

## Position élément courant

`Listbox de type collection ou entity selection`

Indique une variable ou une expression qui se verra attribuer un entier long indiquant la position de l'élément/l'entité de collection sélectionné(e) par l'utilisateur.

- si aucun(e) élément/entité n'est sélectionné(e), la variable ou l'expression reçoit zéro,
- si un(e) seul(e) élément/entité est sélectionné(e), la variable ou l'expression reçoit son emplacement,
- si plusieurs éléments/entités sont sélectionnés, la variable ou l'expression reçoit la position de l'élément/entité qui a été sélectionné(e) en dernier.
> Cette propriété est en "lecture seule", elle est automatiquement mise à jour en fonction des actions de l'utilisateur dans la list box. Vous ne pouvez pas modifier sa valeur pour modifier l'état de sélection de la list box.

#### Grammaire JSON

| Nom                       | Type de données | Valeurs possibles    |
| ------------------------- | --------------- | -------------------- |
| currentItemPositionSource | string          | Expression numérique |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Type de données

Veuillez consulter la section [Type d'expression](properties_Object.md#expression-type).

#### Objets pris en charge

[\[Colonne de list box\](listbox_overview.md#list-box-columns)](listbox_overview.md#list-box-columns)

---

## Valeurs par défaut

Liste des valeurs qui seront utilisées comme valeurs par défaut pour la colonne de la list box (type tableau uniquement). Ces valeurs seront automatiquement accessibles dans la [variable tableau](properties_Object.md#variable-or-expression) associée à la colonne lors de l’exécution du formulaire. En utilisant le langage, vous pouvez gérer l'objet en vous référant à ce tableau.

> Ne pas confondre cette propriété avec la propriété["default value](properties_RangeOfValues.md#default-list-of-values)" qui permet de définir la valeur d'un champ dans les nouveaux enregistrements.

Vous devez saisir une liste de valeurs. Dans l'éditeur de formulaires, une boîte de dialogue spécifique vous permet de saisir des valeurs séparées par des retours à la ligne :

![](../assets/en/FormObjects/defaultValues.png)

> Vous pouvez également définir une [énumération](properties_DataSource.md#choice-list) avec la colonne de list box. Toutefois, une énumération sera utilisée comme liste de valeurs sélectionnables pour chaque ligne de colonne, alors que la liste par défaut remplit toutes les lignes de colonne.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles                                                      |
| ------ | --------------- | ---------------------------------------------------------------------- |
| values | collection      | Une collection de valeurs par défaut (chaînes), ex: "a", "b", "c", "d" |

#### Objets pris en charge

[Colonne de list box (type tableau seulement)](listbox_overview.md#list-box-columns)

---

## Expression

Cette description est spécifique aux colonnes de list box de type [sélection](listbox_overview.md#selection-list-boxes) et [ collection](listbox_overview.md#collection-or-entity-selection-list-boxes). Voir aussi la section **[Variable ou expression](properties_Object.md#variable-or-expression)**.

Une expression 4D à associer à une colonne. Vous pouvez saisir :

- Une **variable simple** (dans ce cas, elle doit être déclarée explicitement pour la compilation). Vous pouvez utiliser n'importe quel type de variable, à l'exception des BLOB et des tableaux. La valeur de la variable sera généralement calculée dans l'événement `On Display Detail`.

- Un **champ** utilisant la syntaxe standard [Table]Field ([list box de type sélection](listbox_overview.md#selection-list-boxes) uniquement), par exemple : `[Employees]Name`. Les types de champs suivants peuvent être utilisés :
  - String
  - Numérique
  - Date
  - Time
  - Picture
  - Booleann  
    Vous pouvez utiliser des champs de la table principale ou d'autres tables.

- Une **expression 4D** (expression simple, formule ou méthode 4D). L'expression doit retourner une valeur. La valeur sera évaluée dans les événements `On Display Detail` et `On Data Change`. Le résultat de l'expression sera affiché automatiquement lorsque vous passerez en mode Application. L'expression sera évaluée pour chaque enregistrement de la sélection (courante ou nommée) de la table principale (pour les list box de type sélection), chaque élément de la collection (pour les list box de type collection) ou chaque entity de la sélection (pour les list box de type entity selection). Si elle est vide, la colonne n'affichera aucun résultat. Les types d'expression suivants sont pris en charge :
  - String
  - Numérique
  - Date
  - Picture
  - Boolean

 Pour les list box de type collection/entity selection, les types Null ou non pris en charge sont affichés sous la forme de chaînes vides.  
Lorsque vous utilisez des collections ou des entity selections, vous déclarez généralement la propriété de l'élément ou l'attribut de l'entity associé à une colonne dans une expression contenant [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` est une commande 4D dédiée qui renvoie une référence à l'élément en cours de traitement. For example, you can use `**This.\&#060;propertyPath&#062;**` where `**\&#060;propertyPath&#062;**` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity. Si vous utilisez une collection de valeurs scalaires, 4D créera un objet pour chaque élément de la collection avec une seule propriété (nommée "value"), remplie avec la valeur de l'élément. In this case, you will use **This.value** as expression.

 Si une [expression non assignable](Concepts/quick-tour.md#expressions) est utilisée (par exemple `[Person]FirstName+" "+[Person]LastName`), la colonne n'est jamais saisissable, même si la propriété [Enterable](properties_Entry.md#enterable) est activée.

Si un champ, une variable ou une expression assignable*(par exemple Person.lastName*) est utilisé, la colonne peut être saisissable ou non en fonction de la propriété [Enterable](properties_Entry.md#enterable).

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                  |
| ---------- | --------------- | ---------------------------------------------------------------------------------- |
| dataSource | string          | Une variable 4D, un nom de champ ou une expression de langage complexe arbitraire. |

#### Objets pris en charge

[\[Colonne de list box\](listbox_overview.md#list-box-columns)](listbox_overview.md#list-box-columns)

---

## Table principale

`Listbox de type sélection courante`

Spécifie la table dont la sélection courante sera utilisée. Cette table et sa sélection courante constitueront la référence pour les champs associés aux colonnes de la list box (références de champs ou expressions contenant des champs). Même si certaines colonnes contiennent des champs d'autres tables, le nombre de lignes affichées sera défini par la table principale.

Toutes les tables de la base de données peuvent être utilisées, que le formulaire soit lié à une table (formulaire table) ou non (formulaire projet).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles  |
| ----- | --------------- | ------------------ |
| table | number          | Numéro de la table |

#### Objets pris en charge

[List Box](listbox_overview.md#overview)

---

## Enregistrer comme

Cette propriété est disponible dans les conditions suivantes :

- une [liste de choix](#choice-list) est associée à l'objet
- pour les [inputs](input_overview.md) et les [colonnes de list box](listbox_overview.md#list-box-columns), une [énumération obligatoire](properties_RangeOfValues.md#required-list) est également définie pour l'objet (les deux options doivent généralement utiliser la même liste), de sorte que seules les valeurs de la liste peuvent être saisies par l'utilisateur.

Cette propriété spécifie, dans le contexte d'un champ ou d'une variable associée à une liste de valeurs, le type de contenu à sauvegarder :

- **Enregistrer comme valeur** (option par défaut) : la valeur de l'élément choisi dans la liste par l'utilisateur est enregistrée directement. Par exemple, si l'utilisateur choisit la valeur "Bleu", cette valeur est enregistrée dans le champ.
- **Enregistrer comme référence** : la référence de l'élément de l'énumération est enregistrée dans l'objet. This reference is the numeric value associated with each item either through the *itemRef* parameter of the `APPEND TO LIST` or `SET LIST ITEM` commands, or in the lists editor.

Cette option permet d'optimiser l'utilisation de la mémoire : le stockage de valeurs numériques dans les champs occupe moins d'espace que le stockage de chaînes de caractères. Il facilite également la traduction des applications : il suffit de créer plusieurs listes dans différentes langues mais avec les mêmes références d'éléments, puis de charger la liste en fonction de la langue de l'application.

L'utilisation de cette propriété nécessite le respect des principes suivants :

- Pour pouvoir stocker la référence, la source de données du champ ou de la variable doit être de type numérique (quel que soit le type de valeur affiché dans la liste).
- Des références valides et uniques doivent être associées aux éléments de la liste.
- If you use this property for a [drop-down list](dropdownList_Overview.md), it must be associated with a field.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles    |
| ------ | --------------- | -------------------- |
| saveAs | string          | "value", "reference" |

#### Objets pris en charge

[Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Eléments sélectionnés

`Listbox de type collection ou entity selection`

Spécifie une variable ou une expression qui sera assignée aux éléments ou entities sélectionnés par l'utilisateur.

- pour une list box collection, vous devez utiliser une variable de collection ou une expression assignable qui accepte les collections,
- pour une list box de type entity selection, un objet entity selection est construit. Vous devez utiliser une variable objet ou une expression assignable qui accepte des objets.
> Cette propriété est en "lecture seule", elle est automatiquement mise à jour en fonction des actions de l'utilisateur dans la list box. Vous ne pouvez pas modifier sa valeur pour modifier l'état de sélection de la list box.

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles     |
| ------------------- | --------------- | --------------------- |
| selectedItemsSource | string          | Expression collection |

#### Objets pris en charge

[List Box](listbox_overview.md#overview)

---

## Selection Name

`Listbox de type sélection nommée`

Spécifie la sélection nommée à utiliser. Vous devez entrer le nom d'une sélection nommée valide. Il peut s'agir d'une sélection nommée process ou interprocess. Le contenu de la list box sera basé sur cette sélection. La sélection nommée doit exister et être valide au moment où la list box est affichée, sinon la list box sera affichée vide.

> Les sélections nommées sont des listes ordonnées d'enregistrements. Elles sont utilisées pour garder en mémoire l'ordre et l'enregistrement courant d'une sélection. Pour plus d'informations, reportez-vous à la section **Sélections nommées** du *manuel de référence du langage 4D*.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles   |
| -------------- | --------------- | ------------------- |
| namedSelection | string          | Nom de la sélection |

#### Objets pris en charge

[List Box](listbox_overview.md#overview)
