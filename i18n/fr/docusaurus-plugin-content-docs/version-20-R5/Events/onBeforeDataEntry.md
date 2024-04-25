---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Peut être appelé par                                                                                              | Définition                                                           |
| ---- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Une cellule de list box est sur le point de passer en mode d'édition |

## Description

Cet événement est généré juste avant la modification d'une cellule de list box (avant l'affichage du curseur d'entrée). Cet événement permet par exemple au développeur d'afficher un texte différent selon le mode de l'utilisateur (mode affichage ou mode édition).

When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the list box or column method.

- Si, dans le contexte de cet événement, $0 est défini sur -1, la cellule est considérée comme non saisissable. If the event was generated after **Tab** or **Shift+Tab** was pressed, the focus goes to either the next cell or the previous one, respectively.
- Si la valeur de $0 n'est pas -1 (par défaut $0 est 0), la cellule est saisissable et passe en mode d'édition.

See also [Managing entry](FormObjects/listbox_overview.md#managing-entry) section.
