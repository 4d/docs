---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Puede ser llamado por                       | Definición                       |
| ---- | ------------------------------------------- | -------------------------------- |
| 53   | [Área Web](FormObjects/webArea_overview.md) | A pop-up window has been blocked |


## Descripción

This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows.

You can find out the blocked URL using the `WA Get last filtered URL` command.


### Ver también
[`On Open External Link`](onOpenExternalLink.md)