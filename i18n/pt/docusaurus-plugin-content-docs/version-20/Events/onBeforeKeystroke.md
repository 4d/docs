---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                       | Definição                                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Um carácter está prestes a ser introduzido no objecto que tem o foco. `Obter texto editado` devolve o texto do objecto **sem** este carácter. |

<details><summary>Histórico</summary>

| Release | Mudanças                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes- The event is now triggered after IME validation |
</details>

## Descrição

Depois que as propriedades de evento `On Before Keystroke` e [`On After Keystroke`](onAfterKeystroke.md) forem selecionadas para um objeto, você poderá detectar e manipular as teclas pressionadas no objeto usando o comando `Form event code` que retornará `On Before Keystroke` e, em seguida, [`On After Keystroke`](onAfterKeystroke.md) (para obter mais informações, consulte a descrição do comando `Get edited text`). Within the `On Before Keystroke` event, the `FILTER KEYSTROKE` command can be used to filter typed chars.

> Esses eventos também são ativados por comandos de linguagem que simulam uma ação do usuário, como `POST KEY`.

O evento `On Before Keystroke` não é gerado:

- in a [list box column](FormObjects/listbox_overview.md#list-box-columns) method except when a cell is being edited (however it is generated in any cases in the [list box](FormObjects/listbox_overview.md) method),
- quando as modificações do usuário não forem realizadas usando o teclado (colar, arrastar e soltar, caixa de seleção, lista suspensa, caixa de seleção). Para processar esses eventos, você deve usar [`On After Edit`](onAfterEdit.md).

### Objectos não enterráveis

The `On Before Keystroke` event can be generated in non-enterable objects, e.g. in a list box even if the list box cells are not enterable, or rows are not selectable. This allows you to build interfaces where the user can scroll dynamically to a specific row in a list box by entering the first letters of a value. In case where the list box cells are enterable, you can use the `Is editing text` command to know if the user is actually entering text in a cell or is using the type-ahead feature and then, execute appropriate code.

### Sequência de teclas

When an entry requires a sequence of keystrokes, the `On Before Keystroke` and [`On After Keystroke`](onAfterKeystroke.md) events are generated only when the entry is fully validaded by the user. O comando `Keystroke` retorna o caractere validado. Este caso ocorre principalmente:

- ao usar teclas "mortas", como ^ ou ~: eventos são gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e├" ou n^\\),
- quando um IME (Input Code Editor) exibir uma caixa de diálogo intermediária na qual o usuário pode inserir uma combinação de caracteres: os eventos são gerados somente quando a caixa de diálogo do IME for validada.

### Veja também

[On After Keystroke](onAfterKeystroke.md).
