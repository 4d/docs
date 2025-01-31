---
id: onBoundVariableChange
title: On Bound Variable Change
---

| Code | Puede ser llamado por | Definición                                           |
| ---- | --------------------- | ---------------------------------------------------- |
| 54   | Formulario            | La variable vinculada a un subformulario se modifica |

## Descripción

Este evento se genera en el contexto del método formulario de un [subformulario](FormObjects/subform_overview.md) tan pronto como se asigna un valor a la variable vinculada con el subformulario en el formulario padre (incluso si se reasigna el mismo valor) y si el subformulario pertenece a la página actual del formulario o a la página 0.

Para más información, consulte la sección [Gestión de la variable vinculada](FormObjects/subform_overview.md#managing-the-bound-variable).
