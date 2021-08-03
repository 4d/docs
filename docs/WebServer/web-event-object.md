---
id: web-event-object
title: WEB Event Object
---

The [WEB Event](https://doc.4d.com/4dv19R/help/command/en/page1734.html) command returns an object describing the event triggered in a web form component, such as a button or a datatable. 

The command must be called in the context of a web form handled by the web server (see [WEB Form command](https://doc.4d.com/4dv19R/help/command/en/page1735.html)).

The returned object contains the following properties:

| Property | Type | Description |
|----|----|----|
| caller | Text | Server reference of the component triggering the event |
| eventType | Text | Event type (onclick, onchange, onmouseover...) |

####

This generic method can be called on the server for several components:

```4d 
var $event; $webForm : Object

$webForm:=Web Form
$event:=Web Event
$compRef:=$event.caller //server reference of the web component

If ($event.eventType="onmouseover") // event is onmouseover
$webForm["helpOn_"+$compRef].show() // displays help on the component (e.g. "orderNumber")
// by showing the text component with reference "helpOn_orderNumber"
Else
$webForm["helpOn_"+$compRef].hide() // hides the help on orderNumber
End if
```