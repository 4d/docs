---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Pode ser chamado por                        | Definição                       |
| ---- | ------------------------------------------- | ------------------------------- |
| 53   | [Área Web](FormObjects/webArea_overview.md) | Uma janela pop-up foi bloqueada |


## Descrição

This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows.

You can find out the blocked URL using the `WA Get last filtered URL` command.


### Veja também
[`On Open External Link`](onOpenExternalLink.md)