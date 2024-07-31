---
id: onFooterClick
title: On Footer Click
---

| Code | Peut être appelé par                                                                                                  | Définition                                                        |
| ---- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 57   | [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | Un clic se produit dans le pied de page d'une colonne de list box |

## Description

Cet événement est disponible pour un objet list box ou colonne de list box. Il est généré lorsqu'un clic se produit dans le pied de page d'une colonne de list box. Dans ce contexte, la commande `OBJECT Get pointer` retourne un pointeur vers la variable du pied de page sur lequel l'utilisateur a cliqué. L'événement est généré pour les clics gauche et droit.

Vous pouvez tester le nombre de clics effectués par l'utilisateur à l'aide de la commande `Clickcount`.
