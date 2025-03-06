---
id: onClicked
title: On Clicked
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definición                           |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 4    | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Se ha producido un clic en un objeto |

## Descripción

El evento `On Clicked` se genera cuando el usuario hace clic en un objeto.

> Ciertos objetos de formulario pueden activarse con el teclado. Por ejemplo, una vez que una casilla de selección recibe el foco, se puede introducir con la barra espaciadora. En tal caso, se sigue generando el evento `On Clicked`.

El evento `On Clicked` suele producirse una vez que se suelta el botón del ratón. Sin embargo, hay varias excepciones:

- [Botones invisibles](FormObjects/properties_Display.md#not-rendered): el evento `On Clicked` se produce en cuanto se hace clic y no espera a que se suelte el botón del ratón.
- [Reglas](FormObjects/ruler.md): si la opción de [método de ejecución del objeto](FormObjects/properties_Action.md#execute-object-method) se define en **true**, el evento `On Clicked` se produce en cuanto se hace clic.
- [Combo box](FormObjects/comboBox_overview.md): el evento `On Clicked` ocurre sólo si el usuario selecciona otro valor en el menú asociado. Un [combo box](FormObjects/comboBox_overview.md) debe ser tratado como un área de texto introducible cuya lista desplegable asociada ofrece valores por defecto. Por lo tanto, se maneja la entrada de datos dentro de un combo box a través de los eventos `On Before Keystroke`, `On After Keystroke` y `On Data Change`.
- [Listas desplegables](FormObjects/dropdownList_Overview.md): el evento `On Clicked` ocurre sólo si el usuario selecciona otro valor en el menú. El evento `On Data Change` permite detectar la activación del objeto cuando se selecciona un valor diferente al actual
- Cuando una celda de entrada del list box está [siendo editada](FormObjects/listbox_overview.md#managing-entry), se genera el evento `On Clicked` cuando se presiona el botón del ratón, permitiendo utilizar el comando `Contextual click` por ejemplo.

En el contexto de un evento `On Clicked`, se puede comprobar el número de clics realizados por el usuario utilizando el comando `Clickcount`.

### On Clicked y On Double Clicked

Después de seleccionar la propiedad del evento de objeto `On Clicked` o [`On Double Clicked`](onDoubleClicked.md) para un objeto, puede detectar y manejar los clics dentro o sobre el objeto, utilizando el comando de evento `FORM` que devuelve `On Clicked` o [`On Double Clicked`](onDoubleClicked.md), dependiendo del caso.

Si se seleccionan ambos eventos para un objeto, se generará el evento `On Clicked` y luego el evento `On Double Clicked` cuando el usuario haga doble clic en el objeto.

### 4D View Pro

Este evento se genera cuando el usuario hace clic en cualquier parte en un documento 4D View Pro. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

| Propiedad   | Tipo         | Descripción                  |
| ----------- | ------------ | ---------------------------- |
| code        | entero largo | On Clicked                   |
| description | text         | "On Clicked"                 |
| objectName  | text         | Nombre del área 4D View Pro  |
| sheetName   | text         | Nombre de la hoja del evento |
| range       | object       | Rango de celdas              |

#### Ejemplo

```4d
 If(FORM Event.code=On Clicked)
    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))
 End if
```