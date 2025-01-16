---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| Code | Peut être appelé par                        | Définition                                    |
| ---- | ------------------------------------------- | --------------------------------------------- |
| 47   | [Zone Web](FormObjects/webArea_overview.md) | Une nouvelle URL est chargée dans la zone Web |

## Description

Cet événement est généré au début du chargement d'une nouvelle URL dans la zone Web. La variable `URL` associée à la zone Web peut être utilisée pour connaître l'URL en cours de chargement.

> L'URL en cours de chargement est différente de [l'URL courante](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (reportez-vous à la description de la commande `WA Get current URL`).
