---
id: onDoubleClicked
title: On Double Clicked
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definición                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| 13   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) | Se ha efectuado un doble clic en un objeto |

## Descripción

El evento `On Double Clicked` se genera cuando el usuario hace doble clic en un objeto. El tiempo máximo de separación de un doble clic se define en las preferencias del sistema.

Si se selecciona la propiedad de evento de objeto [`On Clicked`](onClicked.md) o `On Double Clicked` para un objeto, puede detectar y manejar los clics dentro o sobre el objeto, utilizando el comando `FORM event` que devuelve [`On Clicked`](onClicked.md) o `On Double Clicked`, dependiendo del caso.

Si se seleccionan ambos eventos para un objeto, se generará el evento `On Clicked` y luego el evento `On Double Clicked` cuando el usuario haga doble clic en el objeto.

### 4D View Pro

Este evento se genera cuando el usuario hace doble clic en cualquier parte en un documento 4D View Pro. En este contexto, el [objeto evento](overview.md#event-object) devuelto por el comando `FORM Event` contiene:

| Propiedad   | Tipo         | Descripción                  |
| ----------- | ------------ | ---------------------------- |
| code        | entero largo | 13                           |
| description | text         | "On Double Clicked"          |
| objectName  | text         | Nombre del área 4D View Pro  |
| sheetName   | text         | Nombre de la hoja del evento |
| range       | object       | Rango de celdas              |

#### Ejemplo

```4d
 If(FORM Event.code=On Double Clicked)
   $value:=VP Get value(FORM Event.range)
 End if
```