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

- [Barra de herramientas](FormObjects/button_overview.md#toolbar)
- [Bisel](FormObjects/button_overview.md#bevel)
- [Bisel redondeado](FormObjects/button_overview.md#rounded-bevel)
- [Degradado OS X](FormObjects/button_overview.md#os-x-gradient)
- [OS X Texturizado](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Ayuda](FormObjects/button_overview.md#help)
- [Círculo](FormObjects/button_overview.md#circle)
- [Personalizado](FormObjects/button_overview.md#personalizado)

Este evento se utiliza generalmente para mostrar menús emergentes en caso de presiones prolongadas en los botones. El evento [`On Clicked`](onClicked.md) si está activado, se genera si el usuario libera el botón del ratón antes del límite de tiempo de "clic largo".

### Ver también

[`On Alternative Click`](onAlternativeClick.md)
