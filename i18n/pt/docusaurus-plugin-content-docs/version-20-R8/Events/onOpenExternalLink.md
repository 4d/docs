---
id: onOpenExternalLink
title: On Open External Link
---

| Code | Pode ser chamado por                        | Definição                              |
| ---- | ------------------------------------------- | -------------------------------------- |
| 52   | [Área Web](FormObjects/webArea_overview.md) | Foi aberto um URL externo no navegador |

## Descrição

Este evento se genera cuando la carga de una URL fue bloqueada por el área web y la URL fue abierta con el navegador actual del sistema, debido a un filtro configurado a través del comando `WA SET EXTERNAL LINKS FILTERS`.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.

### Veja também

[`On URL Filtering`](onUrlFiltering.md)
