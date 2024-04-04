---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

|Code|Can be called by|Definition|  
|---|---|---|
|53|[Web Area](../FormObjects/webArea_overview.md)|A pop-up window has been blocked|

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Triggered on drop
</details>

## Description

This event is generated when the opening of a pop-up window is blocked by the Web area. 4D Web areas do not allow the opening of pop-up windows.

You can find out the blocked URL using the `WA Get last filtered URL` command.

This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system [engines](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](../FormObjects/webArea_overview.md#user-interface) option is also enabled for the area. You can accept the drop by calling:

```4d
//web area object method
If (FORM Event.code=On Window Opening Denied)
	WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
	// or UrlVariable:=WA Get last filtered URL(*; "WebArea")  
	// where UrlVariable is the URL variable associated to the web area
End if 
```


### See also
[`On Open External Link`](onOpenExternalLink.md)