---
id: onAfterKeystroke
title: On After Keystroke
---

| Code | Pode ser chamado por                                                                                                                                                                                                                                                       | Definição                                                                                                                                       |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Um carácter está prestes a ser introduzido no objecto que tem o foco. `Get edited text` devolve o texto do objecto **incluindo** este carácter. |

<details><summary>Histórico</summary>

| Release | Mudanças                                                                               |
| ------- | -------------------------------------------------------------------------------------- |
| 18 R5   | - Suporte em list boxes não entráveis - O evento agora é acionado após a validação IME |
</details>

## Descrição

> O evento `Após o Teclado` pode ser substituído pelo evento [`Após a Edição`](onAfterEdit.md) (veja abaixo).

Depois que as propriedades de evento [`On Before Keystroke`](onBeforeKeystroke.md) e `On After Keystroke` forem selecionadas para um objeto, você poderá detectar e manipular as teclas pressionadas dentro do objeto usando o comando `FORM event` que retornará `On Before Keystroke` e, em seguida, `On After Keystroke` (para obter mais informações, consulte a descrição do comando `Get edited text`).

> Esses eventos também são ativados por comandos de linguagem que simulam uma ação do usuário, como `POST KEY`.

O evento `No Depois da tecla` não é gerado:

- no [lista colunas](FormObjects/listbox_overview.md#list-box-columns) método, exceto quando uma célula está sendo editada (entretanto, ela é gerada em quaisquer casos no método [lista caixa](FormObjects/listbox_overview.md)),
- quando as modificações do usuário não forem realizadas usando o teclado (colar, arrastar e soltar, caixa de seleção, lista suspensa, caixa de seleção). Para processar esses eventos, você deve usar [`On After Edit`](onAfterEdit.md).

### Sequência de teclas

Quando uma entrada exigir uma sequência de pressionamentos de teclas, os eventos [`On Before Keystroke`](onBeforeKeystroke.md) e [`On After Keystroke event`] são gerados somente quando a entrada for totalmente validada pelo usuário. O comando `Keystroke` retorna o caractere validado. Este caso ocorre principalmente:

- ao usar teclas "mortas", como ^ ou ~: eventos são gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e├" ou n^\\),
- quando um IME (Input method editor) exibir uma caixa de diálogo intermediária onde o usuário pode inserir uma combinação de caracteres: os eventos são gerados somente quando a caixa de diálogo do IME for validada.

### Veja também

[On Before Keystroke](onBeforeKeystroke.md).
