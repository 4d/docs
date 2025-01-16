---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Pode ser chamado por                        | Definição                       |
| ---- | ------------------------------------------- | ------------------------------- |
| 53   | [Área Web](FormObjects/webArea_overview.md) | Uma janela pop-up foi bloqueada |


## Descrição

Esse evento é gerado quando a abertura de uma janela pop-up é bloqueada pela área Web. As áreas Web de 4D não permitem a abertura de janelas pop-up.

Você pode descobrir o URL bloqueado usando o comando `WA Get last filtered URL`.


### Veja também
[`On Open External Link`](onOpenExternalLink.md)