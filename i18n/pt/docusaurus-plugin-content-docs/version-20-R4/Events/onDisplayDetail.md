---
id: onDisplayDetail
title: On Display Detail
---

| Code | Pode ser chamado por                                     | Definição                                                                                         |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 8    | Formulário - [List Box](FormObjects/listbox_overview.md) | A record is about to be displayed in a list form or a row is about to be displayed in a list box. |


## Descrição

The `On Display Detail` event can be used in the following contexts:

### Formulário de saída

A record is about to be displayed in a list form displayed via `DISPLAY SELECTION` and `MODIFY SELECTION`.

> This event cannot be selected for project forms, it is only available with **table forms**.

In this context, the following sequence of calls to methods and form events is triggered:

- Para cada registo:
    - Para cada objecto na área de detalhes:
        - Método objecto com o evento`On Display Detail`
    - Método formulário com o evento`On Display Detail`

> A área do cabeçalho é tratada usando o evento [`On Header`](onHeader.md).

Calling a 4D command that displays a dialog box from the `On Display Detail` event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.


### List box seleção

This event is generated when a row of a [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes) list box is displayed.


### Número de linha apresentado

The `Displayed line number` 4D command works with the `On Display Detail` form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
