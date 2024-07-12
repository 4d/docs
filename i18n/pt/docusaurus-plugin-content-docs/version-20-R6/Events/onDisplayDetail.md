---
id: onDisplayDetail
title: On Display Detail
---

| Code | Pode ser chamado por                                     | Definição                                                                                                         |
| ---- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 8    | Formulario - [List Box](FormObjects/listbox_overview.md) | A record is about to be displayed in a list form or a row is about to be displayed in a list box. |

## Descrição

El evento `On Display Detail` puede utilizarse en los siguientes contextos:

### Formulário de saída

Un registro está a punto de ser visualizado en un formulario de lista que se muestra vía `DISPLAY SELECTION` y `MODIFY SELECTION`.

> Este evento no se puede seleccionar para los formularios proyecto, sólo está disponible con los **formularios tabla**.

In this context, the following sequence of calls to methods and form events is triggered:

- Para cada registo:
  - Para cada objecto na área de detalhes:
    - Método objeto con el evento `On Display Detail`
  - Método formulario con el evento `On Display Detail`

> The header area is handled using the [`On Header`](onHeader.md) event.

Llamar a un comando 4D que muestra una caja de diálogo desde el evento `On Display Detail` no está permitido y provocará un error de sintaxis. Más concretamente, los comandos en cuestión son: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION` y `MODIFY SELECTION`.

### List box seleção

This event is generated when a row of a [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes) list box is displayed.

### Número de linha apresentado

El comando 4D `Número de línea mostrado` funciona con el evento formulario `On Display Detail`. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
