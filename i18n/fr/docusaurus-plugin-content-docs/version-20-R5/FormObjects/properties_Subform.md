---
id: propertiesSubform
title: Sous-formulaire
---

---

## Autoriser la suppression

Indique si l’utilisateur peut supprimer des sous-enregistrements dans un sous-formulaire liste.

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles                                                  |
| --------------- | --------------- | ------------------------------------------------------------------ |
| deletableInList | boolean         | true, false (par défaut : true) |

#### Objets pris en charge

[Subform](subform_overview.md)

---

## Formulaire détaillé

Cette option permet de désigner un formulaire détaillé à utiliser dans un sous-formulaire. Il peut être :

- un widget, c'est-à-dire un sous-formulaire de type page doté de fonctions spécifiques. In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.\
  You can select a component form name when it is published in the component.

> You can generate [components](Concepts/components.md) providing additional functionalities through subforms.

- the detail form to associate a with the [list subform](#list-form). Le formulaire détaillé peut être utilisé pour saisir ou afficher des sous-enregistrements. Il contient généralement plus d'informations que le sous-formulaire liste. Naturellement, le formulaire détaillé doit appartenir à la même table que le sous-formulaire. Vous utilisez normalement un formulaire de sortie comme formulaire liste et un formulaire d'entrée comme formulaire détaillé. Si vous n'indiquez pas le formulaire à utiliser pour la saisie pleine page, 4D utilise automatiquement le format d'entrée par défaut de la table.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                                                                                                                         |
| ---------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string          | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objets pris en charge

[Subform](subform_overview.md)

---

## Double-clic sur ligne vide

Action to perform in case of a double-click on an empty line of a list subform. Les options suivantes sont disponibles :

- Ne rien faire : ignore le double-clic.
- Ajouter un enregistrement : crée un nouvel enregistrement dans le sous-formulaire et passe en mode édition. The record will be created directly in the list if the [Enterable in List](#enterable-in-list) property is enabled. Otherwise, it will be created in page mode, in the [detail form](#detail-form) associated with the subform.

#### Grammaire JSON

| Nom                          | Type de données | Valeurs possibles                  |
| ---------------------------- | --------------- | ---------------------------------- |
| doubleClickInEmptyAreaAction | string          | "addSubrecord" ou "" to do nothing |

#### Objets pris en charge

[Subform](subform_overview.md)

#### Voir également

[Double click on row](#double-click-on-row)

---

## Double-clic sur ligne

`Sous-formulaires liste`

Définit l'action à réaliser lorsqu'un utilisateur double-clique sur une ligne dans un sous-formulaire liste. The available options are:

- **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
- **Edit Record**: Double-clicking a row displays the corresponding record in the [detail form defined for the list subform](#detail-form). The record is opened in read-write mode so it can be modified.
- **Display Record**: Identical to the previous action, except that the record is opened in read-only mode so it cannot be modified.

Regardless of the action selected/chosen, the `On Double clicked` form event is generated.

For the last two actions, the On `Open Detail` form event is also generated. The `On Close Detail` is then generated when a record displayed in the detail form associated with the list box is about to be closed (regardless of whether or not the record was modified).

#### Grammaire JSON

| Nom                    | Type de données | Valeurs possibles                   |
| ---------------------- | --------------- | ----------------------------------- |
| doubleClickInRowAction | string          | "editSubrecord", "displaySubrecord" |

#### Objets pris en charge

[Subform](subform_overview.md)

#### Voir également

[Double click on empty row](#double-click-on-empty-row)

---

## Saisissable en liste

When a list subform has this property enabled, the user can modify record data directly in the list, without having to use the [associated detail form](#detail-form).

> Pour cela, il vous suffit de cliquer deux fois sur le champ à modifier afin de le passer en mode édition (veillez à laisser suffisamment de temps entre les deux clics pour ne pas générer de double-clic).

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles |
| --------------- | --------------- | ----------------- |
| enterableInList | boolean         | true, false       |

#### Objets pris en charge

[Subform](subform_overview.md)

---

## List Form

Cette option permet de désigner un formulaire liste à utiliser dans un sous-formulaire. Un sous-formulaire en liste vous permet de saisir, visualiser et modifier des données dans d’autres tables.

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an [input form](#detail-form). Dans cette configuration, le formulaire utilisé comme sous-formulaire est appelé formulaire Liste. Le formulaire de saisie est appelé le formulaire détaillé.

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                                                                                                                                                         |
| -------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string          | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objets pris en charge

[Subform](subform_overview.md)

---

## Source

Spécifie la table à laquelle appartient le sous-formulaire Liste (le cas échéant).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                                     |
| ----- | --------------- | --------------------------------------------------------------------- |
| table | string          | Nom de la table 4D, ou "" s'il n'existe aucune table. |

#### Objets pris en charge

[Subform](subform_overview.md)

---

## Mode de sélection

Designates the option for allowing users to select rows:

- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Enterable in list](subform_overview.md#enterable-in-list) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Clicking on a row will select it. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).\
  The Up and Down arrow keys select the previous/next row in the list. Les autres touches de navigation font défiler la liste. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.
  - The selected subrecords are returned by the `GET HIGHLIGHTED RECORDS` command.
  - Cliquer sur l'enregistrement permettra de le sélectionner, mais ne modifiera pas l'enregistrement courant.
  - A **Ctrl+click** (Windows) or **Command+click** (macOS) on a record toggles its state (between selected or not). Les touches fléchées Haut et Bas sélectionnent l'enregistrement précédent/suivant dans la liste. Les autres touches de navigation font défiler la liste. The `On Selection Change` form event is generated every time the selected record is changed.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles            |
| ------------- | --------------- | ---------------------------- |
| selectionMode | string          | "multiple", "single", "none" |

#### Objets pris en charge

[Subform](subform_overview.md)
