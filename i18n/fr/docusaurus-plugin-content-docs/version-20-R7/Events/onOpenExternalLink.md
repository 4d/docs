---
id: onOpenExternalLink
title: On Open External Link
---

| Code | Peut être appelé par                        | Définition                                       |
| ---- | ------------------------------------------- | ------------------------------------------------ |
| 52   | [Zone Web](FormObjects/webArea_overview.md) | Une URL externe a été ouverte dans le navigateur |

## Description

Cet événement est généré lorsque le chargement d'une URL a été bloqué par la zone Web et que l'URL a été ouverte avec le navigateur système actuel, en raison d'un filtre mis en place via la commande `WA SET EXTERNAL LINKS FILTERS`.

Vous pouvez identifier l'URL bloquée à l'aide de la commande `WA Get last filtered URL`.

### Voir également

[`On URL Filtering`](onUrlFiltering.md)
