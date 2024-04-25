---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Peut être appelé par                           | Définition                       |
| ---- | ---------------------------------------------- | -------------------------------- |
| 53   | [Web Area](../FormObjects/webArea_overview.md) | Une fenêtre pop-up a été bloquée |

<details><summary>Historique</summary>

| Release | Modifications     |
| ------- | ----------------- |
| 19 R5   | Triggered on drop |

</details>

## Description

Cet événement est généré lorsque l'ouverture d'une fenêtre pop-up est bloquée par la zone Web. Les zones Web de 4D ne permettent pas l'ouverture de fenêtres contextuelles.

You can find out the blocked URL using the `WA Get last filtered URL` command.

This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system [engines](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](../FormObjects/webArea_overview.md#user-interface) option is also enabled for the area. Vous pouvez accepter l'action de déposer en appelant :

```4d
//web area object method
If (FORM Event.code=On Window Opening Denied)
	WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
	// or UrlVariable:=WA Get last filtered URL(*; "WebArea")  
	// where UrlVariable is the URL variable associated to the web area
End if 
```

### Voir également

[`On Open External Link`](onOpenExternalLink.md)
