---
id: onDragOver
title: On Drag Over
---

| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definición                              |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 21   | [Área 4D Write Pro](FormObjects/writeProArea_overview) - [Botón](FormObjects/button_overview.md) - [Rejilla de botones](FormObjects/buttonGrid_overview.md) - [Casilla de verificación](FormObjects/checkbox_overview.md) - [Lista desplegable](FormObjects/dropdownList_Overview.md) - [Lista jerárquica](FormObjects/list_overview.md#overview) - [Entrada](FormObjects/input_overview.md) - [Lista](FormObjects/listbox_overview.md) - [Columna de lista](FormObjects/listbox_overview.md#list-box-columns) - [Botón con imagen](FormObjects/pictureButton_overview.md) - [Menú emergente con imagen](FormObjects/picturePopupMenu_overview.md) - [Área de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicadores de progreso](FormObjects/progressIndicator.md) - [Botón de opción](FormObjects/radio_overview.md) - [Regla](FormObjects/ruler.md) - [Selector](FormObjects/spinner.md) - [Separador](FormObjects/splitters.md) - [Pasos](FormObjects/stepper.md) - [Control de pestañas](FormObjects/tabControl.md) | Los datos se pueden soltar en un objeto |

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
