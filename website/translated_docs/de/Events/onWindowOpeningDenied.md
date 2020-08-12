---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Can be called by                            | Definition                       |
| ---- | ------------------------------------------- | -------------------------------- |
| 53   | [Web Area](FormObjects/webArea_overview.md) | A pop-up window has been blocked |


## Beschreibung

This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows.

You can find out the blocked URL using the `WA Get last filtered URL` command.


### See also
[`On Open External Link`](onOpenExternalLink.md)