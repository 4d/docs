---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Puede ser llamado por                          | Definición                            |
| ---- | ---------------------------------------------- | ------------------------------------- |
| 53   | [Web Area](../FormObjects/webArea_overview.md) | Se ha bloqueado una ventana emergente |

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 19 R5       | Activado al soltar |

</details>

## Descripción

Este evento se genera cuando la apertura de una ventana emergente es bloqueada por el área web. Los áreas web de 4D no permiten la apertura de ventanas emergentes.

You can find out the blocked URL using the `WA Get last filtered URL` command.

This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system [engines](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](../FormObjects/webArea_overview.md#user-interface) option is also enabled for the area. Puede aceptar la acción de soltar llamando:

```4d
//web area object method
If (FORM Event.code=On Window Opening Denied)
	WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
	// or UrlVariable:=WA Get last filtered URL(*; "WebArea")  
	// where UrlVariable is the URL variable associated to the web area
End if 
```

### Ver también

[`On Open External Link`](onOpenExternalLink.md)
