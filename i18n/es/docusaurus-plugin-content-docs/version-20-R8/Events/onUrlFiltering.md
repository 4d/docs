---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Puede ser llamado por                       | Definición                            |
| ---- | ------------------------------------------- | ------------------------------------- |
| 51   | [Área Web](FormObjects/webArea_overview.md) | Una URL fue bloqueada por el área web |

## Descripción

Este evento se genera cuando la carga de una URL es bloqueada por el área web debido a un filtro configurado mediante el comando `WA SET URL FILTERS`.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.

### Ver también

[`On Open External Link`](onOpenExternalLink.md)
