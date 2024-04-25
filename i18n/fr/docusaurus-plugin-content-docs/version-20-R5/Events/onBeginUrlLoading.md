---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| Code | Peut être appelé par                        | Définition                                    |
| ---- | ------------------------------------------- | --------------------------------------------- |
| 47   | [Web Area](FormObjects/webArea_overview.md) | Une nouvelle URL est chargée dans la zone Web |

## Description

Cet événement est généré au début du chargement d'une nouvelle URL dans la zone Web. The `URL` variable associated with the Web area can be used to find out the URL being loaded.

> The URL being loaded is different from the [current URL](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (refer to the description of the `WA Get current URL` command).
