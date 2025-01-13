---
id: propertiesRangeOfValues
title: Plage de valeurs
---

## La valeur par défaut

Vous pouvez attribuer une valeur par défaut à saisir dans un objet Zone de saisie. Cette propriété est utile par exemple lorsque la [source de données](properties_Object.md#variable-or-expression) de la zone de saisie est un champ : la valeur par défaut est saisie lors du premier affichage d'un nouvel enregistrement. Vous pouvez modifier la valeur, sauf si la zone de saisie a été définie comme [non saisissable](properties_Entry.md#enterable).

La valeur par défaut ne peut être utilisée que si le [type de source de données](properties_Object.md#expression-type) est :

- text/string
- number/integer
- date
- time
- boolean

4D provides stamps for generating default values for the date, time, and sequence number. The date and time are taken from the system date and time. 4D automatically generates any sequence numbers needed. The table below shows the stamp to use to generate default values automatically:

| Stamp | Meaning         |
| ----- | --------------- |
| #D    | Current date    |
| #H    | Current time    |
| #N    | Sequence number |

You can use a sequence number to create a unique number for each record in the table for the current data file. A sequence number is a longint that is generated for each new record. The numbers start at one (1) and increase incrementally by one (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Each table has its own internal counter of sequence numbers. For more information, refer to the [Autoincrement](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029) paragraph.

> Do not make confusion between this property and the "[default values](properties_DataSource.md#default-list-of-values)" property that allows to fill a list box column with static values.

#### Grammaire JSON

| Nom          | Type de données                     | Valeurs possibles                          |
| ------------ | ----------------------------------- | ------------------------------------------ |
| defaultValue | string, number, date, time, boolean | Any value and/or a stamp: "#D", "#H", "#N" |

#### Objets pris en charge

[Zone de saisie](input_overview.md)

---

## Excluded List

Allows setting a list whose values cannot be entered in the object. Si une valeur exclue est saisie, elle n'est pas acceptée et un message d'erreur s'affiche.
> If a specified list is hierarchical, only the items of the first level are taken into account.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles               |
| ------------ | --------------- | ------------------------------- |
| excludedList | list            | Une liste de valeurs à exclure. |

#### Objets pris en charge

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Required List

Limite les entrées valides aux éléments de la liste. Par exemple, si vous souhaitez utiliser une liste pour les titres de postes, afin que les entrées valides soient limitées aux titres qui ont été approuvés par la direction.

La création d'une liste obligatoire n'affiche pas automatiquement la liste lorsque le champ est sélectionné. Si vous souhaitez afficher la liste requise, assignez la même liste à la propriété [Choice List](properties_DataSource.md#choice-list). Cependant, contrairement à la propriété [Choice List](properties_DataSource.md#choice-list), lorsqu'une liste obligatoire est définie, la saisie au clavier n'est plus possible, seule la sélection d'une valeur de liste à l'aide du pop-up menu est autorisée. If different lists are defined using the [Choice List](properties_DataSource.md#choice-list) and Required List properties, the Required List property has priority.
> If a specified list is hierarchical, only the items of the first level are taken into account.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles                  |
| ------------ | --------------- | ---------------------------------- |
| requiredList | list            | Une liste de valeurs obligatoires. |

#### Objets pris en charge

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)
