---
id: onSelectionChange
title: On Selection Change
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                         | Définition                             |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| 31   | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) - [Zone 4D Write Pro](FormObjects/writeProArea_overview.md) - Formulaire - [Liste Hiérarchique](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) | La sélection dans l'objet est modifiée |

## Description

Cet événement peut être généré dans différents contextes.

### 4D View Pro

La sélection courante de lignes ou de colonnes est modifiée. Dans ce contexte, l'[objet événement](overview.md#event-object) retourné par la commande `FORM Event` contient :

| Propriété     | Type        | Description                        |
| ------------- | ----------- | ---------------------------------- |
| code          | entier long | 31                                 |
| Description   | text        | "On Selection Change"              |
| objectName    | text        | Nom de la zone 4D View Pro         |
| sheetName     | text        | Nom de la feuille de l'événement   |
| oldSelections | object      | Plage de cellules avant changement |
| newSelections | object      | Plage de cellules après changement |

#### Exemple

```4d
 If(FORM Event.code=On Selection Change)
    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))
    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))
 End if
```

### Formulaire liste

L'enregistrement courant ou la sélection courante de lignes est modifié(e) sous dans un formulaire liste.

### Liste hiérarchique

Cet événement est généré à chaque fois que la sélection faite dans la liste hiérarchique est modifiée après un clic de souris ou une frappe.

### Zone de saisie et 4D Write Pro

La sélection de texte ou la position du curseur dans la zone est modifiée suite à un clic ou une frappe.

### List box

Cet événement est généré chaque fois que la sélection courante de lignes ou de colonnes de la list box est modifiée.
