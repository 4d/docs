---
id: onAfterKeystroke
title: On After Keystroke
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                            | Definição                                                                                                                                                                       |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Caixa de Combinação](FormObjects/comboBox_overview.md) - Formulário - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Um carácter está prestes a ser introduzido no objecto que tem o foco. `Get edited text` retorna o texto do objeto **incluindo** este caractere. |

<details><summary>História</summary>

| Release | Mudanças                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes- The event is now triggered after IME validation |

</details>

## Descrição

> O evento `Após o Teclado` pode geralmente ser substituído pelo evento [`Após a Edição`](onAfterEdit.md) (veja abaixo).

Depois que as propriedades de evento [`On Before Keystroke`](onBeforeKeystroke.md) e `On After Keystroke` forem selecionadas para um objeto, você pode detectar e manipular as teclas pressionadas dentro do objeto, usando o comando `FORM event` que retornará `On Before Keystroke` e, em seguida, `On After Keystroke` (para obter mais informações, consulte a descrição do comando `Get edited text`).

> Esses eventos também são ativados por comandos de linguagem que simulam uma ação do usuário, como `POST KEY`.

O evento `No Depois da tecla` não é gerado:

- no método de [colunas da list box](FormObjects/listbox_overview.md#list-box-columns) exceto quando uma célula está sendo editada (no entanto, é gerado em todos os casos no método da [list box](FormObjects/listbox_overview.md))
- quando as modificações do usuário não forem realizadas usando o teclado (colar, arrastar e soltar, caixa de seleção, lista suspensa, caixa de seleção). Para processar estes eventos, você deve usar [`No After Edit`](onAfterEdit.md).

### Sequência de teclas

Quando uma entrada requer uma sequência de pressionamentos de teclas, os eventos [`On Before Keystroke`](onBeforeKeystroke.md) e [`On After Keystroke event`] são gerados apenas quando a entrada é totalmente validada pelo usuário. O comando `Keystroke` retorna o caractere validado. Este caso ocorre principalmente:

- ao usar teclas "mortas", como ^ ou ~: eventos são gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e├" ou n^\\),
- quando um IME (Input Code Editor) exibir uma caixa de diálogo intermediária na qual o usuário pode inserir uma combinação de caracteres: os eventos são gerados somente quando a caixa de diálogo do IME for validada.

### Veja também

[On Before Keystroke](onBeforeKeystroke.md).
