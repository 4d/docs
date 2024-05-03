---
id: onLongClick
title: On Long Click
---

| Code | Pode ser chamado por                     | Definição                                                                            |
| ---- | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| 39   | [Button](FormObjects/button_overview.md) | A button is clicked and the mouse button remains pushed for a certain length of time |

## Descrição

This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences.

Este evento pode ser gerado para os seguintes estilos de botão:

- [Toolbar](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Rounded Bevel](FormObjects/button_overview.md#rounded-bevel)
- [OS X Gradient](FormObjects/button_overview.md#os-x-gradient)
- [OS X Textured](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Help](FormObjects/button_overview.md#help)
- [Circle](FormObjects/button_overview.md#circle)
- [Custom](FormObjects/button_overview.md#custom)

This event is generally used to display pop-up menus in case of long button clicks. The [`On Clicked`](onClicked.md) event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.

### Veja também

[`On Alternative Click`](onAlternativeClick.md)
