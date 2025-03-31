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
| 18 R5   | - Suporte em list boxes não entráveis - O evento agora é acionado após a validação IME |
</details>

## Descrição

Depois que as propriedades de evento `On Before Keystroke` e [`On After Keystroke`](onAfterKeystroke.md) forem selecionadas para um objeto, você poderá detectar e manipular as teclas pressionadas no objeto usando o comando `Form event code` que retornará `On Before Keystroke` e, em seguida, [`On After Keystroke`](onAfterKeystroke.md) (para obter mais informações, consulte a descrição do comando `Get edited text`). No evento `On Before Keystroke`, o comando `FILTER KEYROKE` pode ser usado para filtrar caracteres tipados.

> Esses eventos também são ativados por comandos de linguagem que simulam uma ação do usuário, como `POST KEY`.

O evento `On Before Keystroke` não é gerado:

- no método [colunas de list box](FormObjects/listbox_overview.md#list-box-columns), exceto quando uma célula está sendo editada (entretanto, ela é gerada em quaisquer casos no método [list box](FormObjects/listbox_overview.md)),
- quando as modificações do usuário não forem realizadas usando o teclado (colar, arrastar e soltar, caixa de seleção, lista suspensa, caixa de seleção). Para processar esses eventos, você deve usar [`On After Edit`](onAfterEdit.md).

### Objectos não enterráveis

O evento `On Before Keystroke` pode ser gerado em objetos não inseríveis, por exemplo, em um list box mesmo se as células do list box não forem inseríveis, ou as linhas não forem selecionáveis. Isso permite que você construa interfaces onde o usuário pode rolar dinamicamente para uma linha específica em um list box, digitando as primeiras letras de um valor. No caso em que as células da caixa de listagem são editáveis, você pode usar o comando `Is editing text` para saber se o usuário está realmente digitando texto em uma célula ou está usando o recurso de preenchimento automático e, em seguida, executar o código apropriado.

### Sequência de teclas

Quando uma entrada exigir uma sequência de pressionamentos de teclas, os eventos `On Before Keystroke` e [`On After Keystroke event`](onAfterKeystroke.md) são gerados somente quando a entrada for totalmente validada pelo usuário. O comando `Keystroke` retorna o caractere validado. Este caso ocorre principalmente:

- ao usar teclas "mortas", como ^ ou ~: eventos são gerados somente quando o caractere ampliado for inserido depois (por exemplo, "e├" ou n^\\),
- quando um IME (Input method editor) exibir uma caixa de diálogo intermediária onde o usuário pode inserir uma combinação de caracteres: os eventos são gerados somente quando a caixa de diálogo do IME for validada.

### Veja também

[On After Keystroke](onAfterKeystroke.md).
