---
id: onDragOver
title: On Drag Over
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definición                              |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 21   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Los datos se pueden soltar en un objeto |

## Descripción

El evento `On Drag Over` se envía repetidamente al objeto de destino cuando el puntero del ratón se mueve sobre el objeto. Normalmente, en respuesta a este evento:

- Obtenga los datos y las firmas que se encuentran en portapapeles (mediante el comando `GET PASTEBOARD DATA`).
- Según la naturaleza y el tipo de datos en el portapapeles, se **acepta** o **rechaza** el arrastrar y soltar.

To **accept** the drag, the destination object method must return 0 (zero).
Para **rechazar** el arrastrar, el método de objeto debe retornar -1 (menos uno).
Durante un evento `On Drag Over`, 4D trata el método objeto como una función. Si no se devuelve ningún resultado, 4D asume que el arrastre es aceptado.

Si acepta el arrastre, el objeto de destino se resalta. Si rechaza el arrastre, el destino no se resalta. Aceptar el arrastre no significa que los datos arrastrados vayan a ser insertados en el objeto de destino. Esto solo significa que si se soltara el botón del ratón en este punto, el objeto de destino aceptaría los datos arrastrados y se dispararía el evento [`On Drop`](onDrop.md).

Si no se procesa el evento `On Drag Over` para un objeto soltable, ese objeto será resaltado para todas las operaciones de arrastre, sin importar la naturaleza y el tipo de los datos arrastrados.

El evento `On Drag Over` es el medio por el que se controla la primera fase de una operación de arrastrar y soltar. No sólo puede probar si los datos arrastrados son de un tipo compatible con el objeto de destino, y luego aceptar o rechazar el arrastre; puede notificar simultáneamente al usuario de este hecho, porque 4D resalta (o no) el objeto de destino, basándose en su decisión.

El código que maneja un evento `On Drag Over` debe ser corto y ejecutarse rápidamente, porque ese evento se envía repetidamente al objeto de destino actual, debido a los movimientos del ratón.

### Ejemplo

```4d
/Método del objeto destino
 #DECLARE : Integer
 If(Form event code=On Drag Over)
    //devuelve 0 por defecto
    ...
    If($DataType=Is picture)
       return -1
    End if
    ...
 End if
```

#### Ver también

[`On Begin Drag Over`](onBeginDragOver.md)
