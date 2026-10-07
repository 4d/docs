---
id: overview
title: Eventos formulario
---

Los eventos formulario son eventos que pueden llevar a la ejecución del método de formulario y/o del o de los métodos objeto de formulario. Los eventos de formulario le permiten controlar el flujo de su aplicación y escribir código que se ejecuta sólo cuando ocurre un evento específico.

En su código, usted controla los eventos utilizando el comando [`FORM Event`](../commands/form-event), que devuelve el evento accionado. Por ejemplo:

```4d
//code of a button
If(FORM Event.code=On Clicked) 
// hacer algo cuando se presiona el botón
End if
```

> Cada formulario y cada objeto activo en el formulario puede escuchar un conjunto predefinido de eventos, pero sólo los eventos que habilitó a nivel del formulario y/o en cada nivel del objeto ocurrirán realmente.

## Objeto evento

Cada evento es devuelto como un objeto por el comando [`FORM Event`](../commands/form-event). Por defecto, contiene las siguientes propiedades:

| Propiedad   | Tipo         | Descripción                                                                                                |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| objectName  | text         | Nombre del objeto que desencadena el evento - No se incluye si el evento lo desencadena el formulario      |
| code        | entero largo | Valor numérico del evento de formulario. También devuelto por el comando `Form event code` |
| description | text         | Nombre del evento de formulario (por ejemplo, "On After Edit")                          |

Se devuelven propiedades adicionales cuando el evento se produce en objetos específicos. En particular:

- los [list boxes](FormObjects/listbox-object.md#supported-form-events) y [columnas list box](FormObjects/listbox-column.md#supported-form-events) devuelven [propiedades adicionales](FormObjects/listbox-object.md#supported-form-events) como `columnName` o `isRowSelected`.
- Las [áreas de View Pro](FormObjects/viewProArea_overview.md) devuelven por ejemplo las propiedades `sheetName` o `action` en el objeto evento [On After Edit](onAfterEdit.md).

## Eventos y métodos

Cuando se produce un evento formulario, 4D realiza las siguientes acciones:

- En primer lugar, explora los objetos del formulario y llama al método objeto para todo objeto (asociado al evento) cuya propiedad de evento de objeto correspondiente haya sido seleccionada.
- Luego, llama al método formulario si la propiedad del evento formulario correspondiente ha sido seleccionada.

No asuma que los métodos objeto, si los hay, serán llamados en un orden particular. La regla general es que los métodos objeto siempre se llaman antes que el método formulario. Si un objeto es un subformulario, se llaman los métodos objeto del formulario lista del subformulario, y luego se llama al método formulario del formulario listado. 4D continúa llamando a los métodos objeto del formulario padre. En otras palabras, cuando un objeto es un subformulario, 4D utiliza la misma regla general para los métodos objeto y formulario dentro del objeto subformulario.

ATENCIÓN: los eventos [On Load](onLoad.md) y [On Unload](onUnload.md) se generan para los objetos si están activados a la vez para los objetos y para el formulario al que pertenecen los objetos. En otras palabras, la activación o desactivación de un evento a nivel de formulario no tiene ningún efecto sobre las propiedades del evento del objeto.

El número de objetos asociados a un evento depende de la naturaleza del mismo.

## Tabla de llamadas

El número de objetos asociados a un evento depende de la naturaleza del mismo.

| Evento                   | Code | Método objeto                                                    | Método formulario | Objetos                         |
| ------------------------ | ---- | ---------------------------------------------------------------- | ----------------- | ------------------------------- |
| On Activate              | 11   | Nunca                                                            | Sí                | Ninguno                         |
| On After Edit            | 45   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On After Keystroke       | 28   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On After Sort            | 30   | Sí (List box)                                 | Nunca             | Objetos involucrados únicamente |
| On Alternative Click     | 38   | Sí (Botón y List box)                         | Nunca             | Objetos involucrados únicamente |
| On Before Data Entry     | 41   | Sí (List box)                                 | Nunca             | Objetos involucrados únicamente |
| On Before Keystroke      | 17   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Begin Drag Over       | 46   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Begin URL Loading     | 47   | Sí (Área Web)                                 | Nunca             | Objetos involucrados únicamente |
| On Bound variable change | 54   | Nunca                                                            | Sí                | Ninguno                         |
| On Clicked               | 4    | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Close Box             | 22   | Nunca                                                            | Sí                | Ninguno                         |
| On Close Detail          | 26   | Sí (List box)                                 | Sí                | Ninguna, excepto los list box   |
| On Collapse              | 44   | Sí (Lista jerarq. y list box) | Nunca             | Objetos involucrados únicamente |
| On Column Moved          | 32   | Sí (List box)                                 | Nunca             | Objetos involucrados únicamente |
| On Column Resize         | 33   | Sí (List box y Área 4D View Pro)              | Nunca             | Objetos involucrados únicamente |
| On Data Change           | 20   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Deactivate            | 12   | Nunca                                                            | Sí                | Ninguno                         |
| On Delete Action         | 58   | Sí (Lista jerarq. y list box) | Nunca             | Objetos involucrados únicamente |
| On Display Detail        | 8    | Sí                                                               | Sí                | Todos los objetos               |
| On Double Clicked        | 13   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Drag Over             | 21   | Sí                                                               | Nunca             | Objetos involucrados únicamente |
| On Drop                  | 16   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On End URL Loading       | 49   | Sí (Área Web)                                 | Nunca             | Objetos involucrados únicamente |
| On Expand                | 43   | Sí (Lista jerarq. y list box) | Nunca             | Objetos involucrados únicamente |
| On Footer Click          | 57   | Sí (List box)                                 | Nunca             | Objetos involucrados únicamente |
| On Getting Focus         | 15   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Header                | 5    | Sí                                                               | Sí                | Todos los objetos               |
| On Header Click          | 42   | Sí (List box y Área 4D View Pro)              | Nunca             | Objetos involucrados únicamente |
| On Load                  | 1    | Sí                                                               | Sí                | Todos los objetos               |
| On Load Record           | 40   | Nunca                                                            | Sí                | Ninguno                         |
| On Long Click            | 39   | Sí (botón)                                    | Sí                | Objetos involucrados únicamente |
| On Losing Focus          | 14   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Menu Selected         | 18   | Nunca                                                            | Sí                | Ninguno                         |
| On Mouse Enter           | 35   | Sí                                                               | Sí                | Todos los objetos               |
| On Mouse Leave           | 36   | Sí                                                               | Sí                | Todos los objetos               |
| On Mouse Move            | 37   | Sí                                                               | Sí                | Todos los objetos               |
| On Mouse Up              | 2    | Sí                                                               | Nunca             | Objetos involucrados únicamente |
| On Open Detail           | 25   | Sí (List box)                                 | Sí                | Ninguna, excepto los list box   |
| On Open External Link    | 52   | Sí (Área Web)                                 | Nunca             | Objetos involucrados únicamente |
| On Outside Call          | 10   | Nunca                                                            | Sí                | Ninguno                         |
| On Page Change           | 56   | Nunca                                                            | Sí                | Ninguno                         |
| On Plug in Area          | 19   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Printing Break        | 6    | Sí                                                               | Sí                | Todos los objetos               |
| On Printing Detail       | 23   | Sí                                                               | Sí                | Todos los objetos               |
| On Printing Footer       | 7    | Sí                                                               | Sí                | Todos los objetos               |
| On Resize                | 29   | Nunca                                                            | Sí                | Ninguno                         |
| On Row Moved             | 34   | Sí (List box)                                 | Nunca             | Objetos involucrados únicamente |
| On Row Resize            | 60   | Sí (Área 4D View Pro)                         | Nunca             | Objetos involucrados únicamente |
| On Scroll                | 59   | Sí                                                               | Nunca             | Objetos involucrados únicamente |
| On Selection Change      | 31   | Sí                                                               | Sí                | Objetos involucrados únicamente |
| On Timer                 | 27   | Nunca                                                            | Sí                | Ninguno                         |
| On Unload                | 24   | Sí                                                               | Sí                | Todos los objetos               |
| On URL Filtering         | 51   | Sí (Área Web)                                 | Nunca             | Objetos involucrados únicamente |
| On URL Loading Error     | 50   | Sí (Área Web)                                 | Nunca             | Objetos involucrados únicamente |
| On URL Resource Loading  | 48   | Sí (Área Web)                                 | Nunca             | Objetos involucrados únicamente |
| On Validate              | 3    | Sí                                                               | Sí                | Todos los objetos               |
| On VP Range Changed      | 61   | Sí (Área 4D View Pro)                         | Nunca             | Objetos involucrados únicamente |
| On VP Ready              | 9    | Sí (Área 4D View Pro)                         | Nunca             | Objetos involucrados únicamente |
| On Window Opening Denied | 53   | Sí (Área Web)                                 | Nunca             | Objetos involucrados únicamente |

Tenga siempre en cuenta que, para todo evento, se llama al método de un formulario o de un objeto si se selecciona la correspondiente propiedad del evento para el formulario o los objetos. La ventaja de desactivar los eventos en el entorno de diseño (utilizando la lista de propiedades del editor de formularios) es que puede reducir el número de llamadas a los métodos y, por tanto, optimizar significativamente la velocidad de ejecución de sus formularios.

> Excepto en los eventos [En carga](onLoad.md) y [En descarga](onUnload.md) (ver más abajo), si la propiedad del evento formulario no está seleccionada para un evento determinado, esto no impide las llamadas a los métodos objetos cuya misma propiedad de eve En otras palabras, la activación o desactivación de un evento a nivel de formulario no tiene ningún efecto sobre las propiedades del evento del objeto. Si los eventos están activados sólo para los objetos, no se producirán; estos dos eventos también deben estar activados a nivel del formulario.


