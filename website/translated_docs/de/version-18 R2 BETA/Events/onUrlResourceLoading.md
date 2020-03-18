---
id: version-18R2_BETA-onUrlResourceLoading
title: On URL Resource Loading
original_id: onUrlResourceLoading
---

| Code | Can be called by                            | Definition                               |
| ---- | ------------------------------------------- | ---------------------------------------- |
| 48   | [Web Area](FormObjects/webArea_overview.md) | A new resource is loaded in the Web area |


## Description

This event is generated each time a new resource (picture, frame, etc.) is loaded on the current Web page.

The [Progression](FormObjects/properties_WebArea.md#progression) variable associated with the area lets you find out the current state of the loading.

### See also

[`On Open External Link`](onOpenExternalLink.md)