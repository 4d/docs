---
id: onOutsideCall
title: On Outside Call
---

| Code | Puede ser llamado por | Definición                                   |
| ---- | --------------------- | -------------------------------------------- |
| 10   | Formulario            | The form received a `POST OUTSIDE CALL` call |

## Descripción

This event is called when the form is called from another process through the `POST OUTSIDE CALL` command.

> The `On Outside Call` event modifies the entry context of the receiving input form. In particular, if a field was being edited, the [`On Data Change`](onDataChange.md) event is generated.
