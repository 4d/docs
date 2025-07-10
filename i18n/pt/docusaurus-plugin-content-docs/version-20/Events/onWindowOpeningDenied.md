---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Pode ser chamado por                           | Definição                       |
| ---- | ---------------------------------------------- | ------------------------------- |
| 53   | [Área Web](../FormObjects/webArea_overview.md) | Uma janela pop-up foi bloqueada |

<details><summary>Histórico</summary>

| Release | Mudanças |
| ------- | -------- |
| 19 R5   | On Drop  |
</details>

## Descrição

Esse evento é gerado quando a abertura de uma janela pop-up é bloqueada pela área Web. As áreas Web de 4D não permitem a abertura de janelas pop-up.

Você pode descobrir o URL bloqueado usando o comando `WA Get last filtered URL`.

This event is also triggered when a drop operation has been done in the Web area (with embedded and Windows system [engines](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](../FormObjects/webArea_overview.md#user-interface) option is also enabled for the area. Pode aceitar a entrega chamando:

```4d
//web area object method If (FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
    // or UrlVariable:=WA Get last filtered URL(*; "WebArea")  
    // where UrlVariable is the URL variable associated to the web area End if 
```


### Veja também
[`On Open External Link`](onOpenExternalLink.md)