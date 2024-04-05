---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Puede ser llamado por                          | Definición                            |
| ---- | ---------------------------------------------- | ------------------------------------- |
| 53   | [Área Web](../FormObjects/webArea_overview.md) | Se ha bloqueado una ventana emergente |

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R5       | Activado al soltar |
</details>

## Descripción

Este evento se genera cuando la apertura de una ventana emergente es bloqueada por el área web. Los áreas web de 4D no permiten la apertura de ventanas emergentes.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.

Este evento también se dispara cuando se ha realizado una operación de soltar en el área Web (con los [motores](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) sistema Windows e integrados) si la opción [Arrastrar y soltar](../FormObjects/webArea_overview.md#user-interface) también activada para el área. Puede aceptar la acción de soltar llamando:

```4d
//método objeto área web
If (FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
    // or UrlVariable:=WA Get last filtered URL(*; "WebArea")  
    // where UrlVariable is the URL variable associated to the web area
End if 
```


### Ver también
[`On Open External Link`](onOpenExternalLink.md)