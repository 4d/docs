---
id: web-event
title: Web Event
displayed_sidebar: docs
---

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Parámetros | Tipo   |                             | Descripción                          |
| ---------- | ------ | :-------------------------: | ------------------------------------ |
| Resultado  | Object | &#8592; | Información sobre el evento activado |

<!-- END REF -->

## Descripción

`Web Event` <!-- REF #_command_.Web Event.Summary -->returns an object with information on a triggered event linked to a web page component<!-- END REF -->.

The command must be called in the context of a web page handled by the 4D web server.

**Resultado**

El objeto devuelto contiene las siguientes propiedades:

| Propiedad |       | Tipo   | Descripción                                                                                                                                                                                                                                                   |
| --------- | ----- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| caller    |       | string | [Server-side reference](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#data-access-category) of the component triggering the event                                                                                                  |
| eventType |       | string | Type of event:<li>onblur</li><li>onfocus</li><li>onclick</li><li>onauxclick</li><li>onmouseenter</li><li>onmouseleave</li><li>onkeyup</li><li>onkeydown</li><li>onchange</li><li>unload</li><li>onload - triggered when the `Page` loads</li> |
| data      |       | object | Información adicional en función del componente implicado                                                                                                                                                                                                     |
|           | index | number | <li>Componente Pestañas: índice de la pestaña (la indexación comienza en 0)</li><li>Componente de la tabla de datos: número de columna</li>                                                                                                                   |
|           | row   | number | Componente de la tabla de datos: número de línea                                                                                                                                                                                              |
|           | name  | string | Data Table component: qodlysource name of the column (e.g. "firstname", "address.city")                                                                                    |

#### Ejemplo

The objective is to display/hide a help text when the user hovers over the component:

![](../assets/en/commands/web-event1.png)

This is done by attaching `onmouseenter` and `onmouseleave` events to a **Text input** component that displays the information stored in a **Text** component (displaying "This is the help text").

![](../assets/en/commands/web-event2.png)

En este escenario:

- The Text input component has `orderNumber` as Server side reference.
  ![](../assets/en/commands/web-event3.png)
- El componente Texto tiene `helpOn_orderNumber` como referencia del lado Servidor.
  ![](../assets/en/commands/web-event4.png)
- The [exposed](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) function `help()` is attached to both the `onmouseenter` and `onmouseleave` events and contains the following code:

```4d
shared singleton Class constructor()
exposed Function help()
	
	var event : Object
	var myForm : 4D.WebForm
	var componentRef : Text
	
	myForm:=web Form
	event:=web Event
	componentRef:=event.caller

	Case of 
		: (event.eventType="onmouseenter")  // event is onmouseenter 
			myForm["helpOn_"+componentRef].show()  // show the help on "orderNumber" by showing  
			// the text component with reference "helpOn_orderNumber" 
		: (event.eventType="onmouseleave")  // event is onmouseleave 
			myForm["helpOn_"+componentRef].hide()  // hide the help on orderNumber
			
	End case 

```

To open the web page with the help on `orderNumber` hidden, you can associate this function to the `onload` event of the web page:

```4d
exposed function hideOnLoad()
	webForm.helpOn_orderNumber.hide()

```

## Ver también

[Web Form](web-form.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1734                        |
| Hilo seguro       | &cross; |

