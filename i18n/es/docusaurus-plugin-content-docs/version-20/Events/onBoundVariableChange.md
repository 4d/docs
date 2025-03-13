---
id: onBoundVariableChange
title: On Bound Variable Change
---

| Code | Puede ser llamado por | Definición                                           |
| ---- | --------------------- | ---------------------------------------------------- |
| 54   | Formulario            | La variable vinculada a un subformulario se modifica |


## Descripción

Este evento se genera en el contexto del método formulario de un [subformulario](FormObjects/subform_overview.md) en cuanto se asigna un valor a la variable vinculada con el subformulario del formulario padre (incluso si se reasigna el mismo valor) y si el subformulario pertenece a la página actual del formulario o a la página 0.

Form more information, refer to the [Managing the bound variable](FormObjects/subform_overview.md#using-the-bound-variable-or-expression) section.