---
id: onLongClick
title: On Long Click
---

| Code | Pode ser chamado por                    | Definição                                                                            |
| ---- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| 39   | [Botão](FormObjects/button_overview.md) | A button is clicked and the mouse button remains pushed for a certain length of time |

## Descrição

This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences.

Este evento pode ser gerado para os seguintes estilos de botão:

- [Barra de ferramentas](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Rounded Bevel](FormObjects/button_overview.md#rounded-bevel)
- [Gradiente OSX](FormObjects/button_overview.md#os-x-gradient)
- [OS X Textured](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Ajuda](FormObjects/button_overview.md#help)
- [Círculo](FormObjects/button_overview.md#circle)
- [Personalizado](FormObjects/button_overview.md#custom)

This event is generally used to display pop-up menus in case of long button clicks. O evento [`No Clicked`](onClicked.md), se ativado, é gerado se o usuário liberar o botão do mouse antes do limite de tempo de "clique longo".

### Veja também

[`On Alternative Click`](onAlternativeClick.md)
