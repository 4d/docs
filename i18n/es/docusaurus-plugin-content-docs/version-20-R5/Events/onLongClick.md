---
id: onLongClick
title: On Long Click
---

| Code | Puede ser llamado por                    | Definición                                                                                   |
| ---- | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| 39   | [Button](FormObjects/button_overview.md) | Se presiona un botón y el botón del ratón permanece presionado durante un tiempo determinado |

## Descripción

Este evento se genera cuando un botón recibe un clic y el botón del ratón se mantiene presionado durante un cierto tiempo. En teoría, el tiempo durante el cual se genera este evento es igual al tiempo máximo que separa un doble clic, definido en las preferencias del sistema.

Este evento se puede generar para los siguientes estilos de botones:

- [Toolbar](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Rounded Bevel](FormObjects/button_overview.md#rounded-bevel)
- [OS X Gradient](FormObjects/button_overview.md#os-x-gradient)
- [OS X Textured](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Help](FormObjects/button_overview.md#help)
- [Circle](FormObjects/button_overview.md#circle)
- [Custom](FormObjects/button_overview.md#custom)

Este evento se utiliza generalmente para mostrar menús emergentes en caso de presiones prolongadas en los botones. The [`On Clicked`](onClicked.md) event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.

### Ver también

[`On Alternative Click`](onAlternativeClick.md)
