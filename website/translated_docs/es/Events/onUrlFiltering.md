---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Puede ser llamado por                       | Definición                        |
| ---- | ------------------------------------------- | --------------------------------- |
| 51   | [Área Web](FormObjects/webArea_overview.md) | A URL was blocked by the Web area |


## Descripción

This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the `WA SET URL FILTERS` command.

You can find out the blocked URL using the `WA Get last filtered URL` command.

### Ver también
[`On Open External Link`](onOpenExternalLink.md)