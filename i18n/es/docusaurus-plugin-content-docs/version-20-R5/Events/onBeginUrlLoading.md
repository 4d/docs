---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| Code | Puede ser llamado por                       | Definición                            |
| ---- | ------------------------------------------- | ------------------------------------- |
| 47   | [Web Area](FormObjects/webArea_overview.md) | Se carga una nueva URL en el área web |

## Descripción

Este evento se genera al inicio de la carga de una nueva URL en el área web. The `URL` variable associated with the Web area can be used to find out the URL being loaded.

> The URL being loaded is different from the [current URL](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (refer to the description of the `WA Get current URL` command).
