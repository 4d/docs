---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| Code | Can be called by                            | Definição                           |
| ---- | ------------------------------------------- | ----------------------------------- |
| 47   | [Área Web](FormObjects/webArea_overview.md) | A new URL is loaded in the Web area |


## Descrção

This event is generated at the start of loading a new URL in the Web area. The `URL` variable associated with the Web area can be used to find out the URL being loaded.

> The URL being loaded is different from the [current URL](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (refer to the description of the `WA Get current URL` command).