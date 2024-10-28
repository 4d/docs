---
id: onScroll
title: On Scroll
---

| Code | Pode ser chamado por                                                                                                                                     | Definição                                                                                                  |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 59   | [Zona de entrada](FormObjects/input_overview.md) de [tipo](FormObjects/properties_Object.md#type) `imagem` - [List Box](FormObjects/listbox_overview.md) | The user scrolls the contents of a picture object or list box using the mouse or keyboard. |

## Descrição

Esse evento pode ser gerado no contexto de uma entrada imagem ou de um list box.

Esse evento é acionado após qualquer outro evento usuário relacionado à ação de rolagem ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). The event is only generated in the object method (not in the form method).

O evento é acionado quando a rolagem é o resultado de uma ação do usuário: usando as barras de rolagem e/ou os cursores, usando a roda do mouse ou [o teclado](FormObjects/properties_Appearance.md#vertical-scroll-bar). Ele não é gerado quando o objeto é rolado devido à execução do comando `OBJECT SET SCROLL POSITION`.

### Entrada de imagem

The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. Você pode rolar o conteúdo de uma área de imagem quando o tamanho da área for menor que seu conteúdo e o [formato de exibição](FormObjects/properties_Display.md#picture-format) for "Truncado (não centralizado)".

### List box

The event is generated as soon as a user scrolls the rows or columns of the list box.
