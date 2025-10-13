---
id: onDisplayDetail
title: On Display Detail
---

| Code | Peut être appelé par                                     | Définition                                                                                                                                                       |
| ---- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8    | Formulaire - [List Box](FormObjects/listbox_overview.md) | Un enregistrement est sur le point d'être affiché dans un formulaire liste ou bien une ligne est sur le point d'être affichée dans une list box. |

## Description

L'événement `On Display Detail` peut être utilisé dans les contextes suivants :

### Formulaire de sortie

Un enregistrement est sur le point d'être affiché sous forme de liste affichée via `DISPLAY SELECTION` et `MODIFY SELECTION`.

> Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.

Dans ce contexte, la séquence d'appels de méthodes et d'événements de formulaire suivante est déclenchée :

- Pour chaque enregistrement :
  - Pour chaque objet de la zone détaillée :
    - Méthode objet avec l'événement `On Display Detail`
  - Méthode formulaire avec l'événement `On Display Detail`

> La zone d'en-tête est gérée à l'aide de l'événement [`On Header`](onHeader.md).

L'appel d'une commande 4D qui affiche une boîte de dialogue à partir de l'événement `On Display Detail` n'est pas autorisé et générera une erreur de syntaxe. Plus particulièrement, les commandes concernées sont : `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, et `MODIFY SELECTION`.

### Liste box sélection

Cet événement est généré lorsqu'une ligne d'une list box de [**type de sélection**](FormObjects/listbox_overview.md#selection-list-boxes) est affichée.

### Numéro de ligne affiché

La commande 4D `Displayed line number` fonctionne avec l'événement formulaire `On Display Detail`. Elle retourne le numéro de la ligne en cours de traitement tandis qu'une liste d'enregistrements ou de lignes de list box s'affiche à l'écran.
