---
id: onOpenExternalLink
title: On Open External Link
---

| Code | Puede ser llamado por                       | Definición                                    |
| ---- | ------------------------------------------- | --------------------------------------------- |
| 52   | [Área Web](FormObjects/webArea_overview.md) | Se ha abierto una URL externa en el navegador |

## Descripción

Este evento se genera cuando la carga de una URL fue bloqueada por el área web y la URL fue abierta con el navegador actual del sistema, debido a un filtro configurado a través del comando `WA SET EXTERNAL LINKS FILTERS`.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.

### Ver también

[`On URL Filtering`](onUrlFiltering.md)
