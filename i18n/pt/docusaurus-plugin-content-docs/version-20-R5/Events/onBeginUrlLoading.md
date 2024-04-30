---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| Code | Pode ser chamado por                        | Definição                            |
| ---- | ------------------------------------------- | ------------------------------------ |
| 47   | [Web Area](FormObjects/webArea_overview.md) | Uma nova URL é carregada na área Web |

## Descrição

Esse evento é gerado no início do carregamento de um novo URL na área da Web. The `URL` variable associated with the Web area can be used to find out the URL being loaded.

> The URL being loaded is different from the [current URL](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (refer to the description of the `WA Get current URL` command).
