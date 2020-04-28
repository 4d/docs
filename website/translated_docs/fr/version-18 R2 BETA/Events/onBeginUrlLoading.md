---
id: version-18R2_BETA-onBeginUrlLoading
title: On Begin URL Loading
original_id: onBeginUrlLoading
---

| Code | Peut être appelé par                        | Définition                          |
| ---- | ------------------------------------------- | ----------------------------------- |
| 47   | [Zone Web](FormObjects/webArea_overview.md) | A new URL is loaded in the Web area |


## Description

This event is generated at the start of loading a new URL in the Web area. The `URL` variable associated with the Web area can be used to find out the URL being loaded.

> The URL being loaded is different from the [current URL](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (refer to the description of the `WA Get current URL` command).