---
id: onFooterClick
title: On Footer Click
---

| Code | Peut être appelé par                                                                                              | Définition                                                        |
| ---- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 57   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un clic se produit dans le pied de page d'une colonne de list box |

## Description

Cet événement est disponible pour un objet list box ou colonne de list box. Il est généré lorsqu'un clic se produit dans le pied de page d'une colonne de list box. In this context, the `OBJECT Get pointer` command returns a pointer to the variable of the footer that is clicked. L'événement est généré pour les clics gauche et droit.

You can test the number of clicks made by the user by means of the `Clickcount` command.
