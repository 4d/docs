---
id: onOpenExternalLink
title: On Open External Link
---

| Code | Pode ser chamado por                        | Definição                              |
| ---- | ------------------------------------------- | -------------------------------------- |
| 52   | [Área Web](FormObjects/webArea_overview.md) | Foi aberto um URL externo no navegador |


## Descrição

Este evento é gerado quando o carregamento de uma URL foi bloqueado pela área Web e o URL foi aberto com o navegador do sistema atual, porque um filtro configurado através do comando `WA SET EXTERNAL LINKS FILTERS`.

Você pode descobrir o URL bloqueado usando o comando `WA Get last filtered URL`.


### Veja também
[`On URL Filtering`](onUrlFiltering.md)