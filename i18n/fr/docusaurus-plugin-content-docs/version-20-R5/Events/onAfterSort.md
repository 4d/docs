---
id: onAfterSort
title: On After Sort
---

| Code | Peut être appelé par                                                                                              | Définition                                                                          |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 30   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un tri standard vient d'être effectué dans une colonne de list box. |

## Description

This event is generated just after a standard sort is performed (_i.e._ it is NOT generated if $0 returns -1 in the [`On Header Click`](onHeaderClick.md) event). Ce mécanisme est utile pour stocker les directions du dernier tri effectué par l'utilisateur. In this event, the `Self` command returns a pointer to the variable of the sorted column header.
