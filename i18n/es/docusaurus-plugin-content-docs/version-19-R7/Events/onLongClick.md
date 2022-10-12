---
id: onLongClick
title: On Long Click
---

| Code | Puede ser llamado por                   | Definición                                                                                   |
| ---- | --------------------------------------- | -------------------------------------------------------------------------------------------- |
| 39   | [Botón](FormObjects/button_overview.md) | Se presiona un botón y el botón del ratón permanece presionado durante un tiempo determinado |


## Descripción

Este evento se genera cuando un botón recibe un clic y el botón del ratón se mantiene presionado durante un cierto tiempo. En teoría, el tiempo durante el cual se genera este evento es igual al tiempo máximo que separa un doble clic, definido en las preferencias del sistema.

Este evento se puede generar para los siguientes estilos de botones:

- [Toolbar (Barra de herramientas)](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Bevel redondeado](FormObjects/button_overview.md#rounded-bevel)
- [OS X Gradient](FormObjects/button_overview.md#os-x-gradient)
- [OS X Texturizado](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Ayuda](FormObjects/button_overview.md#help)
- [Círculo](FormObjects/button_overview.md#circle)
- [Personalizado](FormObjects/button_overview.md#custom)

Este evento se utiliza generalmente para mostrar menús emergentes en caso de presiones prolongadas en los botones. El evento [`On Clicked`](onClicked.md), si está activo, se genera si el usuario suelta el botón del ratón antes del límite de tiempo del "clic largo".

### Ver también
[`On Alternative Click`](onAlternativeClick.md)