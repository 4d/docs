---
id: onOpenExternalLink
title: On Open External Link
---

| Code | Peut être appelé par                        | Définition                                       |
| ---- | ------------------------------------------- | ------------------------------------------------ |
| 52   | [Web Area](FormObjects/webArea_overview.md) | Une URL externe a été ouverte dans le navigateur |

## Description

This event is generated when the loading of a URL was blocked by the Web area and the URL was opened with the current system browser, because of a filter set up via the `WA SET EXTERNAL LINKS FILTERS` command.

You can find out the blocked URL using the `WA Get last filtered URL` command.

### Voir également

[`On URL Filtering`](onUrlFiltering.md)
