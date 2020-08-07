---
id: onUrlResourceLoading
title: On URL Resource Loading
---

| Code | Peut être appelé par                        | Définition                               |
| ---- | ------------------------------------------- | ---------------------------------------- |
| 48   | [Zone Web](FormObjects/webArea_overview.md) | A new resource is loaded in the Web area |


## Description

This event is generated each time a new resource (picture, frame, etc.) is loaded on the current Web page.

The [Progression](FormObjects/properties_WebArea.md#progression) variable associated with the area lets you find out the current state of the loading.


### Voir également
[`On Open External Link`](onOpenExternalLink.md)