---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Puede ser llamado por                          | Definición                            |
| ---- | ---------------------------------------------- | ------------------------------------- |
| 53   | [Área web](../FormObjects/webArea_overview.md) | Se ha bloqueado una ventana emergente |

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R5       | Activado al soltar |

</details>

## Descripción

Este evento se genera cuando la apertura de una ventana emergente es bloqueada por el área web. Los áreas web de 4D no permiten la apertura de ventanas emergentes.

Puede identificar la URL bloqueada utilizando el comando `WA Get last filtered URL`.

This event is also triggered when a drop operation has been done in the Web area (with embedded and Windows system [engines](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](../FormObjects/webArea_overview.md#user-interface) option is also enabled for the area. Puede aceptar la acción de soltar llamando:

```4d
//método objeto área web
If (FORM Event.code=On Window Opening Denied)
	WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
	// o UrlVariable:=WA Get last filtered URL(*; "WebArea")  
	// donde UrlVariable es la variable URL asociada al área web
End if 
```

### Ver también

[`On Open External Link`](onOpenExternalLink.md)