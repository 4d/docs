---
id: propertiesForm
title: Propriétés des formulaires
---

---

## Color Scheme
> Color scheme property is only applied on macOS.

This property defines the color scheme for the form. This property defines the color scheme for the form. This can be changed for the form to one of the following two options:

* dark - light text on a dark background
* light - dark text on a light background > A defined color scheme can not be overridden by a CSS.
> Le nombre de caractères pour un nom de fenêtre est limité à 31.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles |
| ----------- | --------------- | ----------------- |
| colorScheme | string          | "dark", "light"   |

---

## Pages

Chaque formulaire est composé d'au moins deux pages :

* une page 0 (page de fond)
* une page 1 (page principale)

Pour plus d'informations, veuillez consulter le thème [Pages formulaire](forms.md#form-pages).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                                                |
| ----- | --------------- | -------------------------------------------------------------------------------- |
| pages | collection      | Collection de pages (chaque page est un objet, la page 0 est le premier élément) |

---

## Form Name

This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.

#### Grammaire JSON

The form name is defined by the name of the folder that contains the form.4Dform file. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Form Type

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Each table in a database generally has at least two table forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications):

* Output form - the *output form* or *list form* displays a list of records, with a single line per record. The results of queries are shown in an output form and users can double-click a line to display the input form for that record. ![](../assets/en/FormObjects/formOutput.png)

* Input form - used for data entry. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record). ![](../assets/en/FormObjects/formInput.png)

Supported types depend on the form category:

| Form Type                | JSON grammar     | Description                                                   | Supported with              |
| ------------------------ | ---------------- | ------------------------------------------------------------- | --------------------------- |
| Formulaire détaillé      | detailScreen     | A display form for data entry and modification                | Project forms - Table forms |
| Detail Form for Printing | detailPrinter    | A printed report with one page per record, such as an invoice | Project forms - Table forms |
| List Form                | listScreen       | A form for listing records on the screen                      | Table forms                 |
| List Form for Printing   | listPrinter      | A printed report that list records                            | Table forms                 |
| Aucun                    | *no destination* | A form with no specific feature                               | Project forms - Table forms |

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                            |
| ----------- | --------------- | ------------------------------------------------------------ |
| destination | string          | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Inherited Form Name

This property designates the [form to inherit](forms.md#inherited-forms) in the current form.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select `\&#060;None&#062;` in the Property List (or " " in JSON).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                                                                  |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| inheritedForm | string          | Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form |

---

## Inherited Form Table

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to `\&#060;None&#062;` in the Property List (or " " in JSON) to inherited from a project form.

#### Grammaire JSON

| Nom                | Type de données  | Valeurs possibles          |
| ------------------ | ---------------- | -------------------------- |
| inheritedFormTable | string or number | table name or table number |

---

## Publié en tant que sous-formulaire

Pour qu'un formulaire de composant soit sélectionné comme [sous-formulaire](FormObjects/subform_overview.md) dans une base de données hôte, il doit avoir été explicitement partagé. Lorsque cette propriété est sélectionnée, le formulaire sera publié dans le projet hôte.

Seuls les projets formulaire peuvent être indiqués comme étant des sous-formulaires publiés.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles |
| ------ | --------------- | ----------------- |
| shared | boolean         | true, false       |

---

## Mémoriser géométrie

Lorsque cette option est cochée, si la fenêtre est ouverte via la commande `Creer fenetre` formulaire avec le paramètre `*`, plusieurs paramètres du formulaire seront automatiquement mémorisés par 4D au moment de la fermeture de la fenêtre, quelle que soit la manière dont ils ont été modifiés au cours de la session :

* la page courante,
* la position, la taille et la visibilité de chaque objet du formulaire (y compris la taille et la visibilité des colonnes de list box).
> > This option does not take into account objects generated using the `OBJECT DUPLICATE` command. Pour que l’utilisateur retrouve son environnement lors de l’utilisation de cette commande, le développeur doit répéter la séquence de création, définition et positionnement des objets.

Lorsque cette option est cochée, l’option [Mémoriser valeur](FormObjects/properties_Object.md#save-value) est en outre disponible pour certains objets.

#### Grammaire JSON

| Nom              | Type de données | Valeurs possibles |
| ---------------- | --------------- | ----------------- |
| memorizeGeometry | boolean         | true, false       |

#### Voir également

[**Mémoriser valeur**](FormObjects/properties_Object.md#save-value)

---

## Nom de la fenêtre

Le nom de la fenêtre est utilisé lorsque le formulaire est ouvert à l'aide des commandes `Open form window` et `Open window` dans l'environnement d'application. Le nom de la fenêtre apparaît dans la barre de titre de la fenêtre.

Vous pouvez utiliser des références dynamiques pour définir les noms de fenêtre des formulaires, c'est-à-dire :

* Une référence XLIFF standard stockée dans le dossier Resources.
* A table or field label: The syntax to apply is `<?[TableNum]FieldNum>` or `<?[TableName]FieldName>`.
* A variable or a field: The syntax to apply is `\&#060;VariableName&#062;` or `&#060;[TableName]FieldName&#062;`. La valeur du champ ou de la variable sera affichée dans le nom de la fenêtre.

> > Le nombre de caractères pour un nom de fenêtre est limité à 31.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                             |
| ----------- | --------------- | ------------------------------------------------------------- |
| windowTitle | string          | Le nom de la fenêtre sous forme de texte brut ou de référence |
