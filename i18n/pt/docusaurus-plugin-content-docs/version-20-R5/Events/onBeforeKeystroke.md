---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                                            | Definição                                                                                                                                                                     |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Caixa de Combinação](FormObjects/comboBox_overview.md) - Formulário - [Entrada](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Coluna de List Box](FormObjects/listbox_overview.md#list-box-columns) | Um carácter está prestes a ser introduzido no objecto que tem o foco. `Obter texto editado` devolve o texto do objeto **sem** este caractere. |

<details><summary>História</summary>

| Release | Mudanças                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes- The event is now triggered after IME validation |

</details>

## Descrição

Depois que o evento `On Before Keystroke` e os eventos [`On After Keystroke`](onAfterKeystroke.md) são selecionados para um objeto, você pode detectar e manipular as teclas pressionadas dentro do objeto, usando o comando `Form event code` que retornará `On Before Keystroke` e então o evento [`On After Keystroke`](onAfterKeystroke.md) (para mais informações, consulte a descrição do comando `Get edited text`). No evento `On Before Keystroke`, o comando `FILTER KEYROKE` pode ser usado para filtrar caracteres tipados.

> Esses eventos também são ativados por comandos de linguagem que simulam uma ação do usuário, como `POST KEY`.

O evento `On Before Keystroke` não é gerado:

- em um método de coluna de uma [list box](FormObjects/listbox_overview.md#list-box-columns) exceto quando uma célula está sendo editada (no entanto, é gerado em todos os casos no método da [list box](FormObjects/listbox_overview.md))
- quando as modificações do usuário não forem realizadas usando o teclado (colar, arrastar e soltar, caixa de seleção, lista suspensa, caixa de seleção). Para processar estes eventos, você deve usar [`No After Edit`](onAfterEdit.md).

### Objectos não digitáveis

O evento `On Before Keystroke` pode ser gerado em objetos não inseríveis, por exemplo, em uma caixa de seleção mesmo se as células da caixa de seleção não forem inseríveis, ou as linhas não forem selecionáveis. Isso permite que você construa interfaces onde o usuário pode rolar dinamicamente para uma linha específica em uma caixa de listas, digitando as primeiras letras de um valor. No caso em que as células da caixa de listagem são editáveis, você pode usar o comando `Is editing text` para saber se o usuário está realmente digitando texto em uma célula ou está usando o recurso de preenchimento automático e, em seguida, executar o código apropriado.

### Sequência de teclas

Quando uma entrada requer uma sequência de pressionamentos de teclas, os eventos `On Before Keystroke` e [`On After Keystroke`](onAfterKeystroke.md) são gerados apenas quando a entrada é totalmente validada pelo usuário. O comando `Keystroke` retorna o caractere validado. Este caso ocorre principalmente:

- ao usar teclas "mortas", como ^ ou ~: eventos são gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e├" ou n^\\),
- quando um IME (Input Code Editor) exibir uma caixa de diálogo intermediária na qual o usuário pode inserir uma combinação de caracteres: os eventos são gerados somente quando a caixa de diálogo do IME for validada.

### Veja também

[On After Keystroke](onAfterKeystroke.md).
