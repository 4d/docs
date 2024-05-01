---
id: onBoundVariableChange
title: On Bound Variable Change
---

| Code | Peut être appelé par | Définition                                         |
| ---- | -------------------- | -------------------------------------------------- |
| 54   | Formulaire           | La variable liée à un sous-formulaire est modifiée |

## Description

This event is generated in the context of the form method of a [subform](FormObjects/subform_overview.md) as soon as a value is assigned to the variable bound with the subform in the parent form (even if the same value is reassigned) and if the subform belongs to the current form page or to page 0.

Form more information, refer to the [Managing the bound variable](FormObjects/subform_overview.md#managing-the-bound-variable) section.
