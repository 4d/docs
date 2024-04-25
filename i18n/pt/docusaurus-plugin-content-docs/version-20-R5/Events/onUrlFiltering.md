---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Pode ser chamado por                        | Definição                          |
| ---- | ------------------------------------------- | ---------------------------------- |
| 51   | [Web Area](FormObjects/webArea_overview.md) | Um URL foi bloqueado pela área Web |

## Descrição

This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the `WA SET URL FILTERS` command.

You can find out the blocked URL using the `WA Get last filtered URL` command.

### Veja também

[`On Open External Link`](onOpenExternalLink.md)
