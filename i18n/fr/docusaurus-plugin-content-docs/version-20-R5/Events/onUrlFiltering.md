---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Peut être appelé par                        | Définition                            |
| ---- | ------------------------------------------- | ------------------------------------- |
| 51   | [Web Area](FormObjects/webArea_overview.md) | Une URL a été bloquée par la zone Web |

## Description

This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the `WA SET URL FILTERS` command.

You can find out the blocked URL using the `WA Get last filtered URL` command.

### Voir également

[`On Open External Link`](onOpenExternalLink.md)
