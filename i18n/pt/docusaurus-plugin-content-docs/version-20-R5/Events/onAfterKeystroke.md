---
id: onAfterKeystroke
title: On After Keystroke
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                       | Definição                                                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Um carácter está prestes a ser introduzido no objecto que tem o foco. `Get edited text` devuelve el texto del objeto **incluyendo** este caracter. |

<details><summary>História</summary>

| Release | Mudanças                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes- The event is now triggered after IME validation |

</details>

## Descrição

> The `On After Keystroke` event can generally be replaced by the [`On After Edit`](onAfterEdit.md) event (see below).

After the [`On Before Keystroke`](onBeforeKeystroke.md) and `On After Keystroke` event properties are selected for an object, you can detect and handle the keystrokes within the object, using the `FORM event` command that will return `On Before Keystroke` and then `On After Keystroke` (for more information, please refer to the description of the `Get edited text` command).

> Estos eventos también son activados por comandos del lenguaje que simulan una acción del usuario como `POST KEY`.

El evento `On After Keystroke` no se genera:

- en el método [de las columnas de list box](FormObjects/listbox_overview.md#list-box-columns) excepto cuando se está editando una celda (sin embargo se genera en cualquier caso en el método de [list box](FormObjects/listbox_overview.md)),
- quando as modificações do usuário não forem realizadas usando o teclado (colar, arrastar e soltar, caixa de seleção, lista suspensa, caixa de seleção). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Sequência de teclas

When an entry requires a sequence of keystrokes, the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke event`] events are generated only when the entry is fully validaded by the user. El comando `Keystroke` devuelve el carácter validado. Este caso ocorre principalmente:

- ao usar teclas "mortas", como ^ ou ~: eventos são gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e├" ou n^\\),
- quando um IME (Input Code Editor) exibir uma caixa de diálogo intermediária na qual o usuário pode inserir uma combinação de caracteres: os eventos são gerados somente quando a caixa de diálogo do IME for validada.

### Veja também

[On Before Keystroke](onBeforeKeystroke.md).
