---
id: onBeginUrlLoading
title: On Begin URL Loading
---

| Code | Pode ser chamado por                        | Definição                            |
| ---- | ------------------------------------------- | ------------------------------------ |
| 47   | [Área Web](FormObjects/webArea_overview.md) | Uma nova URL é carregada na área Web |


## Descrição

Esse evento é gerado no início do carregamento de um novo URL na área da Web. A variável `URL` associada à área da Web pode ser usada para descobrir o URL que está sendo carregado.

> A URL sendo carregada é diferente da URL [atual](FormObjects/properties_WebArea.md#url-variable-and-wa-open-url-command) (consulte a descrição do comando `WA Get da URL`).