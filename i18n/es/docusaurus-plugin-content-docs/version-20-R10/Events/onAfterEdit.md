---
id: onAfterEdit
title: On After Edit
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                            | Definición                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 45   | [Área 4D View Pro](../FormObjects/viewProArea_overview.md) - [Área 4D Write Pro](../FormObjects/writeProArea_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - Formulario - [Entrada](FormObjects/input_overview.md) - [Lista Jerárquica](FormObjects/list_overview.md) - [Lista de selección](FormObjects/listbox_overview.md) - [Columna de lista de selección](FormObjects/listbox_overview.md#list-box-columns) | El contenido del objeto introducible que tiene el foco acaba de ser modificado |

## Descripción

### Caso general

Este evento se puede utilizar para filtrar la entrada de datos en los objetos editables por teclado en el nivel más bajo.

Cuando se utiliza, este evento se genera después de cada cambio realizado en el contenido de un objeto editable, independientemente de la acción que haya provocado la modificación, *es decir*:

- Acciones de edición estándar que modifican el contenido como pegar, cortar, borrar o cancelar;
- Soltar un valor (acción similar a pegar);
- Toda entrada de teclado realizada por el usuario; en este caso, el evento `On After Edit` se genera después de los eventos [`On Before Keystroke`](onBeforeKeystroke. d) y [`On After Keystroke`](onAfterKeystroke.md), si se utilizan.
- Cualquier modificación realizada mediante un comando del lenguaje que simule una acción del usuario (es decir, `POST KEY`).

Dentro del evento `On After Edit`, los datos de texto que se ingresan son devueltos por el comando [`Get edited text`](../commands-legacy/get-edited-text.md).

### 4D View Pro

El objeto devuelto por el comando `FORM Event` contiene:

| Propiedad   | Tipo         | Descripción                                                                                         |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------- |
| code        | entero largo | On After Edit                                                                                       |
| description | text         | "On After Edit"                                                                                     |
| objectName  | text         | Nombre del área 4D View Pro                                                                         |
| sheetName   | text         | Nombre de la hoja del evento                                                                        |
| action      | text         | "editChange", "valueChanged", "DragDropBlock", "DragFillBlock", "formulaChanged", "clipboardPasted" |

En función del valor de la propiedad `action`, el [objeto evento](overview.md#event-object) contendrá propiedades adicionales.

#### action = editChange

| Propiedad   | Tipo    | Descripción                            |
| ----------- | ------- | -------------------------------------- |
| range       | object  | Rango de celdas                        |
| editingText | variant | El valor proveniente del editor actual |

#### action = valueChanged

| Propiedad | Tipo    | Descripción                                |
| --------- | ------- | ------------------------------------------ |
| range     | object  | Rango de celdas                            |
| oldValue  | variant | Valor de la celda antes de la modificación |
| newValue  | variant | Valor de la celda luego de la modificación |

#### action = DragDropBlock

| Propiedad | Tipo    | Descripción                                                           |
| --------- | ------- | --------------------------------------------------------------------- |
| fromRange | object  | Rango de celdas fuente (que se arrastra)           |
| toRange   | object  | Rango de la celda de destino (ubicación de soltar) |
| copy      | boolean | Indica si el rango fuente se copia o no                               |
| insert    | boolean | Indica si el rango fuente se inserta o no                             |

#### action = DragFillBlock

| Propiedad     | Tipo         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fillRange     | object       | Gama utilizada para el relleno                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| autoFillType  | entero largo | Value used for the fill.<li>0: Cells are filled with all data (values, formatting, and formulas)</li><li>1: Cells are filled with automatically sequential data</li><li>2: Cells are filled with formatting only</li><li>3: Cells are filled with values but not formatting</li><li>4: Values are removed from the cells</li><li>5: Cells are filled automatically</li> |
| fillDirection | entero largo | Direction of the fill.<li>0: The cells to the left are filled</li><li>1: The cells to the right are filled</li><li>2: The cells above are filled</li><li>3: The cells below are filled</li>                                                                                                                                                                                                                                |

#### action = formulaChanged

| Propiedad | Tipo   | Descripción            |
| --------- | ------ | ---------------------- |
| range     | object | Rango de celdas        |
| formula   | text   | La fórmula introducida |

#### action = clipboardPasted

| Propiedad   | Tipo         | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range       | object       | Rango de celdas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| pasteOption | entero largo | Especifica lo que se pega en el portapapeles:<li>0: todo es pegado (valores, formato y fórmulas)</li><li>1: solo los valores se pegan</li><li>2: solo el formato se pega</li><li>3: solo las fórmulas se pegan</li><li>4: los valores y el formato se pegan (no las fórmulas)</li><li>5: las fórmulas y el formato se pegan (no los valores)</li> |
| pasteData   | object       | Los datos del portapapeles a pegar<li>"text" (texto): el texto del portapapeles</li><li>"html" (texto): el HTML del portapapeles</li>                                                                                                                                                                                                                                                                                                                |

#### Ejemplo

Aquí hay un ejemplo de manejo de un evento `On After Edit`:

```4d
 If(FORM Event.code=On After Edit)
    If(FORM Event.action="valueChanged")
       ALERT("WARNING: You are currently changing the value\  
       from "+String(FORM Event.oldValue)+\  
       " to "+String(FORM Event.newValue)+"!")
    End if
 End if
```

El ejemplo anterior podría generar un objeto evento como este:

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
