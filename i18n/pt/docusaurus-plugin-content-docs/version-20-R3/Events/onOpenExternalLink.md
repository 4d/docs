---
id: onOpenExternalLink
title: On Open External Link
---

| Code | Pode ser chamado por                        | Definição                              |
| ---- | ------------------------------------------- | -------------------------------------- |
| 52   | [Área Web](FormObjects/webArea_overview.md) | Foi aberto um URL externo no navegador |


## Descrição

This event is generated when the loading of a URL was blocked by the Web area and the URL was opened with the current system browser, because of a filter set up via the `WA SET EXTERNAL LINKS FILTERS` command.

You can find out the blocked URL using the `WA Get last filtered URL` command.


### Veja também
[`On URL Filtering`](onUrlFiltering.md)