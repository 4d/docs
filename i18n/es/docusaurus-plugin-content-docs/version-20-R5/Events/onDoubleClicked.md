---
id: onDoubleClicked
title: On Double Clicked
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Definición                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 13   | [Área 4D View Pro](FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de verificación](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - Formulario - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Lista](FormObjects/listbox_overview.md) - [Columna de lista](FormObjects/listbox_overview.md#list-box-columns) - [Botón con imagen](FormObjects/pictureButton_overview.md) - [Menú emergente con imagen](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progreso](FormObjects/progressIndicator.md) - [Botón de opción](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Selector](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Pasos](FormObjects/stepper.md) - [Control de pestañas](FormObjects/tabControl.md) | Se ha efectuado un doble clic en un objeto |

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
