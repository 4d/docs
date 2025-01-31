---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| Code | Puede ser llamado por                       | Definición                            |
| ---- | ------------------------------------------- | ------------------------------------- |
| 47   | [Área Web](FormObjects/webArea_overview.md) | Se carga una nueva URL en el área web |

## Descripción

Este evento se genera al inicio de la carga de una nueva URL en el área web. La variable `URL` asociada al área web puede utilizarse para conocer la URL que se está cargando.

> La URL que se está cargando es diferente de la [ URL actual](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (consulte la descripción del comando `WA Get current URL`).
