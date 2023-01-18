---
id: comboBoxOverview
title: Combo Box
---

## Visão Geral

Um combo box é parecido com uma lista [drop-down](dropdownList_Overview.md#overview), exceto que aceita texto digitado do teclado e tem opções adicionais.

![](../assets/en/FormObjects/combo_box.png)

Um combo box é iniciado em exatamente da mesma forma que uma lista drop down Um combo box é iniciado em exatamente da mesma forma que uma lista drop down Se o usuário digitar texto em uma combo box, preenche o 0imo elemento do array. Um combo box é iniciado em exatamente da mesma forma que uma lista drop down Se o usuário digitar texto em uma combo box, preenche o 0imo elemento do array. Em outros aspectos, você deve tratar uma combo box como uma área editável que usa seu array ou uma lista de escolha como um conjunto de valores padrão.

Use o evento `On Data Change` para gerenciar entradas em uma área editável, como faria em qualquer objeto área editável. Para saber mais, veja a descrição do comando of the [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) no manual de*4D Language Reference* .

## Opções de combo box

Objetos do tipo combo box aceitam duas opções específicas referentes a listas de escolhas associadas com elas:

- [Inserção automática](properties_DataSource.md#automatic-insertion): permite adicionar um valor automaticamente a uma lista armazenada na memória quando um usuário digitar um valor que não é encontraddo na lista de escolhas associadas com uma combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (lista de valores excluídos): permite estabelecer uma lista cujos valores não podem ser digitados na combo box. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.
> > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. Em uma interface, se um objeto precisar propor uma lista finita de valores exigidos, então deve usar um objeto  [do tipo menu Pop-up](dropdownList_Overview.md#overview) .

## Propriedades compatíveis

[Formato Alfa](properties_Display.md#alpha-format) - [Negrito](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - \[Estilo de botão\](properties_TextAndPicture. md#button-style) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Formato de data](properties_Display.md#date-format) - \[Focável\](properties_Entry. md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - \[Altura\](properties_CoordinatesAndSizing. md#height) - [Conselho de ajuda](properties_Help.md#help-tip) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Itálica\](properties_Text. md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Não renderizado](properties_Display.md#not-rendered) - [Nome de objeto](properties_Object.md#object-name) - \[Direita\](properties_CoordinatesAndSizing. md#right) - [Ação padrão](properties_Action.md#standard-action) - [Formato de hora](properties_Display.md#time-format) - \[Top\](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - \[Tamanho vertical\](properties_ResizingOptions. md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  
