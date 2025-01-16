---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Pode ser chamado por                           | Definição                       |
| ---- | ---------------------------------------------- | ------------------------------- |
| 53   | [Área web](../FormObjects/webArea_overview.md) | Uma janela pop-up foi bloqueada |

<details><summary>História</summary>

| Release | Mudanças |
| ------- | -------- |
| 19 R5   | On Drop  |

</details>

## Descrição

Esse evento é gerado quando a abertura de uma janela pop-up é bloqueada pela área Web. As áreas Web de 4D não permitem a abertura de janelas pop-up.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.

Esse evento também é acionado quando uma operação de soltar é feita na área da Web (com [mecanismos] do sistema incorporado e do Windows(../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine)) se a opção [Drag and drop](../FormObjects/webArea_overview.md#user-interface) também estiver ativada para a área. Pode aceitar a entrega chamando:

```4d
//web area object method If (FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
    // or UrlVariable:=WA Get last filtered URL(*; "WebArea")  
    // where UrlVariable is the URL variable associated to the web area End if
```

### Veja também

[`On Open External Link`](onOpenExternalLink.md)
