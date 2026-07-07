---
id: onDeleteAction
title: On Delete Action
---

| Code | Peut être appelé par                                                                             | Définition                                  |
| ---- | ------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 58   | [Liste hiérarchique](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) | L'utilisateur tente de supprimer un élément |

## Description

Cet événement est généré à chaque fois qu'un utilisateur tente de supprimer le(s) élément(s) sélectionné(s) en appuyant sur une touche de suppression (**Suppr** ou **Retour arrière**) ou en sélectionnant un élément de menu dont l'action standard associée est 'Effacer' (comme la commande **Supprimer** dans le menu **Edition**).

A noter que la génération de l'événement est la seule action réalisée par 4D : le programme ne supprime aucun élément. Il appartient au développeur de gérer la suppression et tous les messages d'avertissement précédents qui sont affichés.
