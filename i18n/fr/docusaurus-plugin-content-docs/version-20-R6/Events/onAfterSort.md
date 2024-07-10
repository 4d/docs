---
id: onAfterSort
title: On After Sort
---

| Code | Peut être appelé par                                                                                                  | Définition                                                                          |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | Un tri standard vient d'être effectué dans une colonne de list box. |

## Description

This event is generated just after a standard sort is performed (*i.e.* it is NOT generated if $0 returns -1 in the [`On Header Click`](onHeaderClick.md) event). Ce mécanisme est utile pour stocker les directions du dernier tri effectué par l'utilisateur. Dans ce cas, la commande `Self` retourne un pointeur vers la variable de l'en-tête de colonne triée.
