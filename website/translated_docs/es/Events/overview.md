---
id: generalidades
title: Generalidades
---

Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs.

In your code, you control the events using the `FORM Event` command, that returns the triggered event. Por ejemplo:

```4d  
//code of a button
If(FORM Event.code=On Clicked) 
// do something when the button is clicked
End if
```

> Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur.


## Objeto evento

Each event is returned as an object by the `FORM Event` command. Por defecto, contiene las siguientes propiedades:

| Property | Tipo | Descripción |
| -------- | ---- | ----------- |
|          |      |             |
 objectName|text|Name of the object triggering the event - Not included if the event is triggered by the form| |code|longint|Numeric value of the form event. Also returned by the 

`Form event code` command| |description|text|Name of the form event (e.g. "On After Edit")|

Additional properties are returned when the event occurs on specific objects. En particular:

- Los [list box](FormObjects/listbox_overview.md#supported-form-events) y las [columnas de list box](FormObjects/listbox_overview.md#supported-form-events-1) devuelven las [propiedades adicionales](FormObjects/listbox_overview.md#additional-properties) tales como `columnName` o `isRowSelected`.
- Las [áreas de View Pro](FormObjects/viewProArea_overview.md) devuelven por ejemplo las propiedades `sheetName` o `action` en el objeto evento [On After Edit](onAfterEdit.md).


## Eventos y métodos

Cuando se produce un evento formulario, 4D realiza las siguientes acciones:

- En primer lugar, explora los objetos del formulario y llama al método objeto para todo objeto (asociado al evento) cuya propiedad de evento de objeto correspondiente haya sido seleccionada.
- Luego, llama al método formulario si la propiedad del evento formulario correspondiente ha sido seleccionada.

No asuma que los métodos objeto, si los hay, serán llamados en un orden particular. La regla general es que los métodos objeto siempre se llaman antes que el método formulario. Si un objeto es un subformulario, se llaman los métodos objeto del formulario lista del subformulario, y luego se llama al método formulario del formulario listado. 4D continúa llamando a los métodos objeto del formulario padre. En otras palabras, cuando un objeto es un subformulario, 4D utiliza la misma regla general para los métodos objeto y formulario dentro del objeto subformulario.

Excepto en los eventos [En carga](onLoad.md) y [En descarga](onUnload.md) (ver más abajo), si la propiedad del evento formulario no está seleccionada para un evento determinado, esto no impide las llamadas a los métodos objetos cuya misma propiedad de evento está seleccionada. En otras palabras, la activación o desactivación de un evento a nivel de formulario no tiene ningún efecto sobre las propiedades del evento del objeto.

El número de objetos asociados a un evento depende de la naturaleza del mismo.

## Tabla de llamadas

La tabla siguiente resume la forma en que se llaman los métodos objeto y formulario para cada tipo de evento:

| Evento                   | Método objeto                    | Método formulario | Objetos                         |
| ------------------------ | -------------------------------- | ----------------- | ------------------------------- |
| On Load                  | Sí                               | Sí                | Todos los objetos               |
| On Unload                | Sí                               | Sí                | Todos los objetos               |
| On Validate              | Sí                               | Sí                | Todos los objetos               |
| On Clicked               | Sí                               | Sí                | Objetos involucrados únicamente |
| On Double Clicked        | Sí                               | Sí                | Objetos involucrados únicamente |
| On Before Keystroke      | Sí                               | Sí                | Objetos involucrados únicamente |
| On After Keystroke       | Sí                               | Sí                | Objetos involucrados únicamente |
| On After Edit            | Sí                               | Sí                | Objetos involucrados únicamente |
| On Getting Focus         | Sí                               | Sí                | Objetos involucrados únicamente |
| On Losing Focus          | Sí                               | Sí                | Objetos involucrados únicamente |
| On Activate              | Nunca                            | Sí                | Ninguno                         |
| On Deactivate            | Nunca                            | Sí                | Ninguno                         |
| On Outside Call          | Nunca                            | Sí                | Ninguno                         |
| On Page Change           | Nunca                            | Sí                | Ninguno                         |
| On Begin Drag Over       | Sí                               | Sí                | Objetos involucrados únicamente |
| On Drop                  | Sí                               | Sí                | Objetos involucrados únicamente |
| On Drag Over             | Sí                               | Nunca             | Objetos involucrados únicamente |
| On Mouse Enter           | Sí                               | Sí                | Todos los objetos               |
| On Mouse Move            | Sí                               | Sí                | Todos los objetos               |
| On Mouse Leave           | Sí                               | Sí                | Todos los objetos               |
| On Mouse Up              | Sí                               | Nunca             | Objetos involucrados únicamente |
| On Menu Selected         | Nunca                            | Sí                | Ninguno                         |
| On Bound variable change | Nunca                            | Sí                | Ninguno                         |
| On Data Change           | Sí                               | Sí                | Objetos involucrados únicamente |
| On Plug in Area          | Sí                               | Sí                | Objetos involucrados únicamente |
| On Header                | Sí                               | Sí                | Todos los objetos               |
| On Printing Detail       | Sí                               | Sí                | Todos los objetos               |
| On Printing Break        | Sí                               | Sí                | Todos los objetos               |
| On Printing Footer       | Sí                               | Sí                | Todos los objetos               |
| On Close Box             | Nunca                            | Sí                | Ninguno                         |
| On Display Detail        | Sí                               | Sí                | Todos los objetos               |
| On Open Detail           | Sí (List box)                    | Sí                | Ninguna, excepto los list box   |
| On Close Detail          | Sí (List box)                    | Sí                | Ninguna, excepto los list box   |
| On Resize                | Nunca                            | Sí                | Ninguno                         |
| On Selection Change      | Sí                               | Sí                | Objetos involucrados únicamente |
| On Load Record           | Nunca                            | Sí                | Ninguno                         |
| On Timer                 | Nunca                            | Sí                | Ninguno                         |
| On Scroll                | Sí                               | Nunca             | Objetos involucrados únicamente |
| On Before Data Entry     | Sí (List box)                    | Nunca             | Objetos involucrados únicamente |
| On Column Moved          | Sí (List box)                    | Nunca             | Objetos involucrados únicamente |
| On Row Moved             | Sí (List box)                    | Nunca             | Objetos involucrados únicamente |
| On Column Resize         | Sí (List box y Área 4D View Pro) | Nunca             | Objetos involucrados únicamente |
| On Header Click          | Sí (List box y Área 4D View Pro) | Nunca             | Objetos involucrados únicamente |
| On Footer Click          | Sí (List box)                    | Nunca             | Objetos involucrados únicamente |
| On After Sort            | Sí (List box)                    | Nunca             | Objetos involucrados únicamente |
| On Long Click            | Sí (botón)                       | Sí                | Objetos involucrados únicamente |
| On Alternative Click     | Sí (Botón y List box)            | Nunca             | Objetos involucrados únicamente |
| On Expand                | Sí (Lista jerarq. y list box)    | Nunca             | Objetos involucrados únicamente |
| On Collapse              | Sí (Lista jerarq. y list box)    | Nunca             | Objetos involucrados únicamente |
| On Delete Action         | Sí (Lista jerarq. y list box)    | Nunca             | Objetos involucrados únicamente |
| On URL Resource Loading  | Sí (Área Web)                    | Nunca             | Objetos involucrados únicamente |
| On Begin URL Loading     | Sí (Área Web)                    | Nunca             | Objetos involucrados únicamente |
| On URL Loading Error     | Sí (Área Web)                    | Nunca             | Objetos involucrados únicamente |
| On URL Filtering         | Sí (Área Web)                    | Nunca             | Objetos involucrados únicamente |
| On End URL Loading       | Sí (Área Web)                    | Nunca             | Objetos involucrados únicamente |
| On Open External Link    | Sí (Área Web)                    | Nunca             | Objetos involucrados únicamente |
| On Window Opening Denied | Sí (Área Web)                    | Nunca             | Objetos involucrados únicamente |
| On VP Range Changed      | Sí (Área 4D View Pro)            | Nunca             | Objetos involucrados únicamente |
| On VP Ready              | Sí (Área 4D View Pro)            | Nunca             | Objetos involucrados únicamente |
| On Row Resize            | Sí (Área 4D View Pro)            | Nunca             | Objetos involucrados únicamente |

Tenga siempre en cuenta que, para todo evento, se llama al método de un formulario o de un objeto si se selecciona la correspondiente propiedad del evento para el formulario o los objetos. La ventaja de desactivar los eventos en el entorno de diseño (utilizando la lista de propiedades del editor de formularios) es que puede reducir el número de llamadas a los métodos y, por tanto, optimizar significativamente la velocidad de ejecución de sus formularios.

> ATENCIÓN: los eventos [On Load](onLoad) y [On Unload](onUnloas) se generan para los objetos si están activados a la vez para los objetos y para el formulario al que pertenecen los objetos. Si los eventos están activados sólo para los objetos, no se producirán; estos dos eventos también deben estar activados a nivel del formulario.

