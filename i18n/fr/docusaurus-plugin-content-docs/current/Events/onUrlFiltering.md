---
id: onUrlFiltering
title: On URL Filtering
---

| Code | Peut être appelé par                        | Définition                            |
| ---- | ------------------------------------------- | ------------------------------------- |
| 51   | [Zone Web](FormObjects/webArea_overview.md) | Une URL a été bloquée par la zone Web |

## Description

Cet événement est généré lorsque le chargement d'une URL est bloqué par la zone Web en raison d'un filtre configuré à l'aide de la commande `WA SET URL FILTERS`.

Vous pouvez identifier l'URL bloquée à l'aide de la commande `WA Get last filtered URL`.

### Voir également

[`On Open External Link`](onOpenExternalLink.md)
