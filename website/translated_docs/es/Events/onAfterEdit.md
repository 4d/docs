---
id: onAfterEdit
title: On After Edit
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                         | Definición                                                                     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 45   | [Área 4D View Pro](FormObjects/viewProArea_overview) - [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Formulario - [Entrada](FormObjects/input_overview.md) - [Lista jerárquica](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Columna List Box](FormObjects/listbox_overview.md#list-box-columns) | El contenido del objeto introducible que tiene el foco acaba de ser modificado |


## Descripción

### Caso general

Este evento se puede utilizar para filtrar la entrada de datos en los objetos editables por teclado en el nivel más bajo.

Cuando se utiliza, este evento se genera después de cada cambio realizado en el contenido de un objeto editable, independientemente de la acción que haya provocado la modificación, *es decir*:

- Acciones de edición estándar que modifican el contenido como pegar, cortar, borrar o cancelar;
- Soltar un valor (acción similar a pegar);
- Toda entrada de teclado realizada por el usuario; en este caso, el evento `On After Edit` se genera después de los eventos [`On Before Keystroke`](onBeforeKeystroke.md) y [`On After Keystroke`](onAfterKeystroke.md), si se utilizan.
- Cualquier modificación realizada mediante un comando del lenguaje que simule una acción del usuario (es decir, `POST KEY`).

### 4D View Pro

El objeto devuelto por el comando `FORM Event` contiene:

| Propriedad  | Tipo         | Descripción                                                                                         |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------- |
| code        | entero largo | On After Edit                                                                                       |
| description | texto        | "On After Edit"                                                                                     |
| objectName  | texto        | Nombre del área 4D View Pro                                                                         |
| sheetName   | texto        | Nombre de la hoja del evento                                                                        |
| action      | texto        | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

En función del valor de la propiedad `action`, el [objeto evento](overview.md#event-object) contendrá propiedades adicionales.

#### action = editChange

| Propriedad  | Tipo    | Descripción                            |
| ----------- | ------- | -------------------------------------- |
| range       | objeto  | Rango de celdas                        |
| editingText | variant | El valor proveniente del editor actual |

#### action = valueChanged

| Propriedad | Tipo    | Descripción                                |
| ---------- | ------- | ------------------------------------------ |
| range      | objeto  | Rango de celdas                            |
| oldValue   | variant | Valor de la celda antes de la modificación |
| newValue   | variant | Valor de la celda luego de la modificación |


#### action = DragDropBlock

| Propriedad | Tipo     | Descripción                                        |
| ---------- | -------- | -------------------------------------------------- |
| fromRange  | objeto   | Rango de celdas fuente (que se arrastra)           |
| toRange    | objeto   | Rango de la celda de destino (ubicación de soltar) |
| copy       | booleano | Indica si el rango fuente se copia o no            |
| insert     | booleano | Indica si el rango fuente se inserta o no          |


#### action = DragFillBlock

| Propriedad | Tipo   | Descripción                    |
| ---------- | ------ | ------------------------------ |
| fillRange  | objeto | Gama utilizada para el relleno |
 autoFillType|longint|Valor utilizado para el relleno.<li>0: las celdas se llenan con todos los datos (valores, formato y fórmulas)<li>1: las celdas se llenan con datos automáticamente secuenciales<li>2: Cells are filled with formatting only<li>3: Cells are filled with values but not formatting<li>4: Values are removed from the cells<li>5: Cells are filled automatically| |fillDirection|longint|Direction of the fill.<li>0: The cells to the left are filled<li>1: The cells to the right are filled<li>2: The cells above are filled<li>3: The cells below are filled|


#### action = formulaChanged

| Propriedad | Tipo   | Descripción            |
| ---------- | ------ | ---------------------- |
| range      | objeto | Rango de celdas        |
| formula    | texto  | La fórmula introducida |

#### action = clipboardPasted

| Propriedad  | Tipo         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | objeto       | Rango de celdas                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| pasteOption | entero largo | Indica lo que se pega desde el portapapeles:<li>0: Everything is pasted (values, formatting, and formulas)<li>1: Only values are pasted<li>2: Only the formatting is pasted<li>3: Only formulas are pasted<li>4: Values and formatting are pasted (not formulas)<li>5: Formulas and formatting are pasted (not values) |
| pasteData   | objeto       | The data from the clipboard to be pasted<li>"text" (text): The text from the clipboard<li>"html" (text): The HTML from the clipboard                                                                                                                                                                                                                                                                           |


#### Ejemplo

Here is an example handling an `On After Edit` event:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
    End if
 End if
    End if
 End if
```

The above example could generate an event object like this:

```
{

"code":45;
"description":"On After Edit";
"objectName":"ViewProArea"
"sheetname":"Sheet1";
"action":"valueChanged";
"range": {area:ViewProArea,ranges:[{column:1,row:2,sheet:1}]};
"oldValue":"The quick brown fox";
"newValue":"jumped over the lazy dog";
}
```