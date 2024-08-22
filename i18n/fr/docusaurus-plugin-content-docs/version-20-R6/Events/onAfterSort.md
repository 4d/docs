---
id: onAfterSort
title: On After Sort
---

| Code | Peut être appelé par                                                                                                  | Définition                                                                          |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | Un tri standard vient d'être effectué dans une colonne de list box. |

## Description

Cet événement est généré juste après un tri standard (ce qui signifie qu'il n'est PAS généré si $0 retourne -1 dans l'événement [`On Header Click`](onHeaderClick.md)). Ce mécanisme est utile pour stocker les directions du dernier tri effectué par l'utilisateur. Dans ce cas, la commande `Self` retourne un pointeur vers la variable de l'en-tête de colonne triée.
