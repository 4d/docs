---
id: onBoundVariableChange
title: On Bound Variable Change
---

| Code | Peut être appelé par | Définition                                         |
| ---- | -------------------- | -------------------------------------------------- |
| 54   | Formulaire           | La variable liée à un sous-formulaire est modifiée |

## Description

Cet événement est généré dans le contexte de la méthode formulaire d'un [sous-formulaire](FormObjects/subform_overview.md) dès qu'une valeur est assignée à la variable liée avec le sous-formulaire dans le formulaire parent (même si la même valeur est réassignée) et si le sous-formulaire appartient à la page formulaire courante ou à la page 0.

Pour plus d'informations, reportez-vous à la section [Gérer la variable liée](FormObjects/subform_overview.md#managing-the-bound-variable).
