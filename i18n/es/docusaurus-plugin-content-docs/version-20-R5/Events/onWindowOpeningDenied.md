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

Este evento también se activa cuando se ha realizado una operación de arrastrar y soltar en el área Web (con motores [integrados](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) y del sistema Windows) si la opción de [Arrastrar y soltar](../FormObjects/webArea_overview.md#user-interface) también está habilitada para el área. Puede aceptar la acción de soltar llamando:

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
