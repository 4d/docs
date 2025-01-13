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

## Formulaire de détail

Cette option permet de désigner un formulaire détaillé à utiliser dans un sous-formulaire. Il peut être :

- un widget, c'est-à-dire un sous-formulaire de type page doté de fonctions spécifiques. In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.\
  You can select a component form name when it is published in the component.

> Pour cela, il vous suffit de cliquer deux fois sur le champ à modifier afin de le passer en mode édition (veillez à laisser suffisamment de temps entre les deux clics pour ne pas générer de double-clic).

- le formulaire détaillé à associer au [sous-formulaire de liste](#list-form). Le formulaire détaillé peut être utilisé pour saisir ou afficher des sous-enregistrements. Il contient généralement plus d'informations que le sous-formulaire liste. Naturellement, le formulaire détaillé doit appartenir à la même table que le sous-formulaire. Vous utilisez normalement un formulaire de sortie comme formulaire liste et un formulaire d'entrée comme formulaire détaillé. Si vous n'indiquez pas le formulaire à utiliser pour la saisie pleine page, 4D utilise automatiquement le format d'entrée par défaut de la table.

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
- Ajouter un enregistrement : crée un nouvel enregistrement dans le sous-formulaire et passe en mode édition. The record will be created directly in the list if the [Enterable in List](#enterable-in-list) property is enabled. Sinon, il sera créé en mode page, dans le [formulaire détaillé](#detail-form) associé au sous-formulaire.

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

Définit l'action à réaliser lorsqu'un utilisateur double-clique sur une ligne dans un sous-formulaire liste. Les options disponibles sont :

- **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
- **Modifier enregistrement** : Un double-clic sur une ligne permet d'afficher l'enregistrement correspondant dans le [ formulaire détaillé défini pour le sous-formulaire liste](#detail-form). L'enregistrement est ouvert en lecture-écriture afin qu'il puisse être modifié.
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

Lorsque cette propriété est activée pour un sous-formulaire de liste, l'utilisateur peut modifier les données de l'enregistrement directement dans la liste, sans avoir à utiliser le [formulaire détaillé associé](#detail-form).

> Pour cela, il vous suffit de cliquer deux fois sur le champ à modifier afin de le passer en mode édition (veillez à laisser suffisamment de temps entre les deux clics pour ne pas générer de double-clic).

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles |
| --------------- | --------------- | ----------------- |
| enterableInList | boolean         | true, false       |

#### Objets pris en charge

[Subform](subform_overview.md)

---

## Formulaire de liste

Cette option permet de désigner un formulaire liste à utiliser dans un sous-formulaire. Un sous-formulaire en liste vous permet de saisir, visualiser et modifier des données dans d’autres tables.

Les sous-formulaires de liste peuvent être utilisés pour la saisie de données de deux manières : l'utilisateur peut saisir des données directement dans le sous-formulaire ou les saisir dans un [formulaire de saisie](#detail-form). Dans cette configuration, le formulaire utilisé comme sous-formulaire est appelé formulaire Liste. Le formulaire de saisie est appelé le formulaire détaillé.

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

Désigne l'option permettant aux utilisateurs de sélectionner des lignes :

- **None**: Rows cannot be selected if this mode is chosen. Cliquer sur la liste n'aura aucun effet à moins que l'option [Saisissable en liste](subform_overview.md#enterable-in-list) soit activée. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Un clic sur une ligne la sélectionne. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).\
  The Up and Down arrow keys select the previous/next row in the list. Les autres touches de navigation font défiler la liste. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.
  - Les sous-enregistrements sélectionnés sont retournés par la commande `GET HIGHLIGHTED RECORDS`.
  - Cliquer sur l'enregistrement permettra de le sélectionner, mais ne modifiera pas l'enregistrement courant.
  - Si vous pressez **Ctrl+clic** (Windows) ou **Commande+clic** (macOS) sur un enregistrement, cela fera basculer son état (entre sélectionné ou non). Les touches fléchées Haut et Bas sélectionnent l'enregistrement précédent/suivant dans la liste. Les autres touches de navigation font défiler la liste. L'événement formulaire `On Selection Change` est généré chaque fois que l'enregistrement sélectionné est modifié.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles            |
| ------------- | --------------- | ---------------------------- |
| selectionMode | string          | "multiple", "single", "none" |

#### Objets pris en charge

[Subform](subform_overview.md)
