---
id: onDisplayDetail
title: On Display Detail
---

| Code | Puede ser llamado por                              | Definición                                                                                                                               |
| ---- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 8    | Form - [List Box](FormObjects/listbox_overview.md) | Un registro está a punto de ser mostrado en un formulario lista o una línea está a punto de ser mostrada en un list box. |

## Descripción

The `On Display Detail` event can be used in the following contexts:

### Formulario de salida

A record is about to be displayed in a list form displayed via `DISPLAY SELECTION` and `MODIFY SELECTION`.

> This event cannot be selected for project forms, it is only available with **table forms**.

En este contexto, se desencadena la siguiente secuencia de llamadas a métodos y eventos de formulario:

- Para cada registro:
  - Para cada objeto en el área detallada:
    - Object method with `On Display Detail` event
  - Form method with `On Display Detail` event

> The header area is handled using the [`On Header`](onHeader.md) event.

Calling a 4D command that displays a dialog box from the `On Display Detail` event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.

### List box selección

This event is generated when a row of a [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes) list box is displayed.

### Número de línea mostrado

The `Displayed line number` 4D command works with the `On Display Detail` form event. Devuelve el número de la línea que se está procesando mientras se visualiza en pantalla una lista de registros o de líneas de list box.
