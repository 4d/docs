---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Pode ser chamado por                        | Definição                          |
| ---- | ------------------------------------------- | ---------------------------------- |
| 51   | [Área Web](FormObjects/webArea_overview.md) | Um URL foi bloqueado pela área Web |


## Descrição

Este evento é gerado quando o carregamento de uma URL é bloqueado pela área Web devido a um filtro configurado usando o comando `WA SET URL FILTERS`.

Você pode descobrir o URL bloqueado usando o comando `WA Get last filtered URL`.

### Veja também
[`On Open External Link`](onOpenExternalLink.md)