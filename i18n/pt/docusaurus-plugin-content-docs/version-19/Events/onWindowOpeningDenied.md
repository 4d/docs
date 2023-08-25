---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Pode ser chamado por                        | Definição                       |
| ---- | ------------------------------------------- | ------------------------------- |
| 53   | [Área Web](FormObjects/webArea_overview.md) | Uma janela pop-up foi bloqueada |


## Descrição

This event is generated when the opening of a pop-up window is blocked by the Web area. As áreas Web de 4D não permitem a abertura de janelas pop-up.

You can find out the blocked URL using the `WA Get last filtered URL` command.


### Veja também
[`On Open External Link`](onOpenExternalLink.md)