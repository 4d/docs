---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Peut être appelé par                        | Définition                        |
| ---- | ------------------------------------------- | --------------------------------- |
| 51   | [Zone Web](FormObjects/webArea_overview.md) | A URL was blocked by the Web area |


## Description

This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the `WA SET URL FILTERS` command.

Vous pouvez identifier l'URL bloquée à l'aide de la commande `WA Get last filtered URL`.

### Voir également
[`On Open External Link`](onOpenExternalLink.md)