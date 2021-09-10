---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Puede ser llamado por                       | Definición                            |
| ---- | ------------------------------------------- | ------------------------------------- |
| 53   | [Área Web](FormObjects/webArea_overview.md) | Se ha bloqueado una ventana emergente |


## Descripción

Este evento se genera cuando la apertura de una ventana emergente es bloqueada por el área web. Los áreas web de 4D no permiten la apertura de ventanas emergentes.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.


### Ver también
[`On Open External Link`](onOpenExternalLink.md)