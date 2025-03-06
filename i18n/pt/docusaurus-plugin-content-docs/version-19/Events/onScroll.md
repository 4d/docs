---
id: onScroll
title: On Scroll
---

| Code | Pode ser chamado por                                                                                                                                     | Definição                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 59   | [Área de entrada](FormObjects/input_overview.md) de [tipo](FormObjects/properties_Object.md#type) `imagem` - [List Box](FormObjects/listbox_overview.md) | O usuário rola o conteúdo de um objeto imagem ou de um list box usando o mouse, ou o teclado. |


## Descrição

Esse evento pode ser gerado no contexto de uma entrada imagem ou de um list box.

Esse evento é acionado após qualquer outro evento do usuário relacionado à ação de rolagem ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). O evento só é gerado no método objeto (não no método formulário).

O evento é acionado quando a rolagem é o resultado de uma ação do usuário: usando as barras de rolagem e/ou cursores, usando a roda do mouse ou do [teclado](FormObjects/properties_Appearance.md#vertical-scroll-bar). Ele não é gerado quando o objeto é rolado devido à execução do comando `OBJECT SET SCROLL POSITION`.


### Entrada de imagem

O evento é gerado assim que um usuário rola uma imagem na entrada de imagem (campo ou variável) que a contém. Você pode rolar o conteúdo de uma área de imagem quando o tamanho da área for menor que o seu conteúdo e o [formato de exibição](FormObjects/properties_Display.md#picture-format) é "Truncado (não centralizado)".


### List box

O evento é gerado assim que um usuário rola as linhas ou colunas do list box. 
