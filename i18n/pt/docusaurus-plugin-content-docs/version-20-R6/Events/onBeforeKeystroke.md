---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                       | Definição                                                                                                                                                                   |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Um carácter está prestes a ser introduzido no objecto que tem o foco. `Get edited text` devuelve el texto del objeto **sin** este carácter. |

<details><summary>História</summary>

| Release | Mudanças                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes- The event is now triggered after IME validation |

</details>

## Descrição

After the `On Before Keystroke` and [`On After Keystroke event`](onAfterKeystroke.md) events are selected for an object, you can detect and handle the keystrokes within the object, using the `Form event code` command that will return `On Before Keystroke` and then [`On After Keystroke event`](onAfterKeystroke.md) (for more information, please refer to the description of the `Get edited text` command). En el evento `On Before Keystroke`, se puede utilizar el comando `FILTER KEYSTROKE` para filtrar los caracteres digitados.

> Estos eventos también son activados por comandos del lenguaje que simulan una acción del usuario como `POST KEY`.

El evento `On Before Keystroke` no se genera:

- en un método [columnas de list box](FormObjects/listbox_overview.md#list-box-columns) excepto cuando se está editando una celda (sin embargo se genera en cualquier caso en el método de [list box](FormObjects/listbox_overview.md)),
- quando as modificações do usuário não forem realizadas usando o teclado (colar, arrastar e soltar, caixa de seleção, lista suspensa, caixa de seleção). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Objectos não enterráveis

El evento `On Before Keystroke` puede generarse en objetos no introducibles, por ejemplo, en un list box aunque las celdas del list box no sean introducibles, o las líneas no sean seleccionables. This allows you to build interfaces where the user can scroll dynamically to a specific row in a list box by entering the first letters of a value. En el caso de que las celdas del cuadro del list box sean editables, puede utilizar el comando `Is editing text` para saber si el usuario está realmente introduciendo texto en una celda o está utilizando la función de tecleo predictivo y entonces, ejecuta

### Sequência de teclas

When an entry requires a sequence of keystrokes, the `On Before Keystroke` and [`On After Keystroke`](onAfterKeystroke.md) events are generated only when the entry is fully validaded by the user. El comando `Keystroke` devuelve el carácter validado. Este caso ocorre principalmente:

- ao usar teclas "mortas", como ^ ou ~: eventos são gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e├" ou n^\\),
- quando um IME (Input Code Editor) exibir uma caixa de diálogo intermediária na qual o usuário pode inserir uma combinação de caracteres: os eventos são gerados somente quando a caixa de diálogo do IME for validada.

### Veja também

[On After Keystroke](onAfterKeystroke.md).
