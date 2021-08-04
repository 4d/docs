---
id: onLongClick
title: On Long Click
---

| Code | Puede ser llamado por                   | Definición                                                                                   |
| ---- | --------------------------------------- | -------------------------------------------------------------------------------------------- |
| 39   | [Botón](FormObjects/button_overview.md) | Se presiona un botón y el botón del ratón permanece presionado durante un tiempo determinado |


## Descripción

This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences.

Este evento se puede generar para los siguientes estilos de botones:

- [Barra de herramientas](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Bevel redondeado](FormObjects/button_overview.md#rounded-bevel)
- [OS X Gradient](FormObjects/button_overview.md#os-x-gradient)
- [OS X Texturizado](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Ayuda](FormObjects/button_overview.md#help)
- [Círculo](FormObjects/button_overview.md#circle)
- [Personalizado](FormObjects/button_overview.md#custom)

Este evento se utiliza generalmente para mostrar menús emergentes en caso de presiones prolongadas en los botones. The [`On Clicked`](onClicked.md) event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.

### Ver también
[`On Alternative Click`](onAlternativeClick.md)