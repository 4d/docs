---
id: onDeleteAction
title: On Delete Action
---

| Code | Peut être appelé par                                                                            | Définition                                  |
| ---- | ----------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 58   | [Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) | L'utilisateur tente de supprimer un élément |

## Description

This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (**Delete** or **Backspace**) or selecting a menu item whose associated standard action is 'Clear' (such as the **Clear** command in the **Edit** menu).

A noter que la génération de l'événement est la seule action réalisée par 4D : le programme ne supprime aucun élément. Il appartient au développeur de gérer la suppression et tous les messages d'avertissement précédents qui sont affichés.
