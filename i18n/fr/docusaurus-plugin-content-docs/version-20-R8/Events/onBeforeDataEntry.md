---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Peut être appelé par                                                                                                  | Définition                                                           |
| ---- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | Une cellule de list box est sur le point de passer en mode d'édition |

## Description

Cet événement est généré juste avant la modification d'une cellule de list box (avant l'affichage du curseur d'entrée). Cet événement permet par exemple au développeur d'afficher un texte différent selon le mode de l'utilisateur (mode affichage ou mode édition).

Lorsque le curseur arrive dans la cellule, l'événement `On Before Data Entry` est généré dans la list box ou la méthode de la colonne.

- Si, dans le contexte de cet événement, $0 est défini sur -1, la cellule est considérée comme non saisissable. Si l'événement a été généré après avoir appuyé sur **Tab** ou **Maj+Tab**, le focus va respectivement à la cellule suivante ou à la précédente.
- Si la valeur de $0 n'est pas -1 (par défaut $0 est 0), la cellule est saisissable et passe en mode d'édition.

Voir également la section [Gestion des entrées](FormObjects/listbox_overview.md#managing-entry).
