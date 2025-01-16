---
id: propertiesForm
title: Propriétés des formulaires
---

---

## Schéma de couleurs

> La propriété de schéma de couleurs n'est appliquée que sur macOS.

Cette propriété définit la palette de couleurs du formulaire. Par défaut, lorsque la propriété n'est pas définie, la valeur d'une palette de couleurs est **héritée** (le formulaire utilise la palette définie [au niveau de l'application](https://doc.4d.com/4dv19/help/command/en/page1762.html)). Pour le formulaire, cette option peut être remplacée par l'une des deux options suivantes :

- dark - texte clair sur fond foncé
- light - texte foncé sur fond clair

> Une palette de couleurs définie ne peut pas être remplacée par un CSS.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles |
| ----------- | --------------- | ----------------- |
| colorScheme | string          | "dark", "light"   |

---

## CSS

Cette propriété vous permet de charger le(s) fichier(s) CSS spécifiques pour le formulaire.

Un fichier CSS défini au niveau du formulaire remplacera la ou les feuilles de style par défaut. For more information, please refer to [Style sheets](createStylesheet.md) page.

#### Grammaire JSON

| Nom | Type de données      | Valeurs possibles                                                                                                                                                                                                                                                                                                               |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| css | string ou collection | CSS file path(s) provided as:<li>a string (a file for both platforms)</li><li>a collection of strings (a list of files for both platform)</li><li>a collection of {"path":string;"media":"mac" \| "win"} objects </li> |

---

## Pages

Chaque formulaire est composé d'au moins deux pages :

- une page 0 (page de fond)
- une page 1 (page principale)

Pour plus d'informations, veuillez consulter le thème [Pages formulaire](forms.md#form-pages).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                                                                   |
| ----- | --------------- | --------------------------------------------------------------------------------------------------- |
| pages | collection      | Collection de pages (chaque page est un objet, la page 0 est le premier élément) |

---

## Nom du formulaire

Cette propriété est le nom du formulaire lui-même et est utilisée pour faire référence au formulaire par son nom dans le langage 4D. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.

#### Grammaire JSON

Le nom du formulaire est défini par le nom du dossier qui contient le fichier form.4Dform. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Type de formulaire

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Chaque table dans une base de données a généralement au moins deux formulaires table. Un pour lister les enregistrements à l'écran et l'autre pour afficher un enregistrement à la fois (utilisé pour la saisie et les modifications) :

- Output form - the *output form* or *list form* displays a list of records, with a single line per record. Les résultats des recherches sont affichés dans un formulaire de sortie et les utilisateurs peuvent double-cliquer sur une ligne pour afficher le formulaire d'entrée pour cet enregistrement.
  ![](../assets/en/FormObjects/formOutput.png)

- Formulaire d'entrée ou formulaire détail - utilisé pour la saisie des données. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record).
  ![](../assets/en/FormObjects/formInput.png)

Les types pris en charge dépendent de la catégorie de formulaire :

| Type de formulaire                     | Grammaire JSON   | Description                                                             | Prise en charge avec                   |
| -------------------------------------- | ---------------- | ----------------------------------------------------------------------- | -------------------------------------- |
| Formulaire de détail                   | detailScreen     | Un formulaire d'affichage pour la saisie et la modification des données | Formulaires projet - Formulaires table |
| Formulaire de détail pour l'impression | detailPrinter    | Un rapport imprimé avec une page par enregistrement, comme une facture  | Formulaires projet - Formulaires table |
| Formulaire de liste                    | listScreen       | Un formulaire pour lister les enregistrements à l'écran                 | Formulaires table                      |
| Formulaire de liste pour l'impression  | listPrinter      | Un rapport imprimé qui liste les enregistrements                        | Formulaires table                      |
| Aucun                                  | *no destination* | Un formulaire sans fonction spécifique                                  | Formulaires projet - Formulaires table |

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                            |
| ----------- | --------------- | ------------------------------------------------------------ |
| destination | string          | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Nom du formulaire hérité

This property designates the [form to inherit](forms.md#inherited-forms) in the current form.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select `\<None>` in the Property List (or " " in JSON).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                                                                                             |
| ------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| inheritedForm | string          | Nom du formulaire table ou projet OU chemin POSIX d'un fichier .json décrivant le formulaire OU objet décrivant le formulaire |

---

## Table du formulaire hérité

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to `\<None>` in the Property List (or " " in JSON) to inherited from a project form.

#### Grammaire JSON

| Nom                | Type de données  | Valeurs possibles      |
| ------------------ | ---------------- | ---------------------- |
| inheritedFormTable | string ou number | nom ou numéro de table |

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

Lorsque cette option est cochée, si la fenêtre est ouverte via la commande `Creer fenetre` formulaire avec le paramètre `*`, plusieurs paramètres du formulaire seront automatiquement mémorisés par 4D au moment de la fermeture de la fenêtre, quelle que soi

- la page courante,
- la position, la taille et la visibilité de chaque objet du formulaire (y compris la taille et la visibilité des colonnes de list box).

> Cette option ne prend pas en compte les objets générés via la commande `OBJECT DUPLICATE`. Pour que l’utilisateur retrouve son environnement lors de l’utilisation de cette commande, le développeur doit répéter la séquence de création, définition et positionnement des objets.

Lorsque cette option est cochée, l’option [Mémoriser valeur](FormObjects/properties_Object.md#save-value) est en outre disponible pour certains objets.

#### Grammaire JSON

| Nom              | Type de données | Valeurs possibles |
| ---------------- | --------------- | ----------------- |
| memorizeGeometry | boolean         | true, false       |

#### Voir également

[**Save Value**](FormObjects/properties_Object.md#save-value)

---

## Nom de la fenêtre

Le nom de la fenêtre est utilisé lorsque le formulaire est ouvert à l'aide des commandes `Open form window` et `Open window` dans l'environnement d'application. Le nom de la fenêtre apparaît dans la barre de titre de la fenêtre.

Vous pouvez utiliser des références dynamiques pour définir les noms de fenêtre des formulaires, c'est-à-dire :

- Une référence XLIFF standard stockée dans le dossier Resources.
- Un libellé de table ou de champ : La syntaxe à appliquer est la suivante : `<?[TableNum]FieldNum>` ou `<?[TableName]FieldName>`.
- Une variable ou un champ : La syntaxe à appliquer est la suivante : `\N-<VariableName&#062 ;` ou `&#060 ;[TableName]FieldName&#062 ;`. La valeur du champ ou de la variable sera affichée dans le nom de la fenêtre.

> Le nombre de caractères pour un nom de fenêtre est limité à 31.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                             |
| ----------- | --------------- | ------------------------------------------------------------- |
| windowTitle | string          | Le nom de la fenêtre sous forme de texte brut ou de référence |
