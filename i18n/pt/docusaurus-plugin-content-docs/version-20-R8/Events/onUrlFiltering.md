---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Pode ser chamado por                        | Definição                          |
| ---- | ------------------------------------------- | ---------------------------------- |
| 51   | [Área Web](FormObjects/webArea_overview.md) | Um URL foi bloqueado pela área Web |

## Descrição

Este evento se genera cuando la carga de una URL es bloqueada por el área web debido a un filtro configurado mediante el comando `WA SET URL FILTERS`.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.

### Veja também

[`On Open External Link`](onOpenExternalLink.md)
