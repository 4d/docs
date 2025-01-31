---
id: end-selection
title: End selection
slug: /commands/end-selection
displayed_sidebar: docs
---

<!--REF #_command_.End selection.Syntax-->**End selection** {( *tabla* )} : Boolean<!-- END REF-->
<!--REF #_command_.End selection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual probar si el puntero del registro está más allá del último registro seleccionado, o Tabla por defecto, si se omite |
| Resultado | Boolean | &#8592; | Si (TRUE) o No (FALSE) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.End selection.Summary-->**End selection** devuelve TRUE cuando el puntero del registro actual está más allá del último registro de la selección actual de *tabla*.<!-- END REF-->se utiliza generalmente para probar si la llamada al comando [NEXT RECORD](next-record.md) ha movido o no el puntero del registro actual detrás del último registro de la selección. Si la selección actual está vacía, **End selection** devuelve TRUE.

Para mover el puntero del registro actual dentro de la selección, utilice [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) o [GOTO SELECTED RECORD](goto-selected-record.md). [PREVIOUS RECORD](previous-record.md) no mueva el puntero a la selección.

**End selection** devuelve también TRUE cuando el último pie de página de un informe se imprime con [PRINT SELECTION](print-selection.md) o desde el menú Imprimir. Puede utilizar el siguiente código para probar el último pie de de página e imprimir un pie de página especial para la última página:

```4d
  // Método de un formulario de salida utilizado para imprimir un informe
 $vpFormTable:=Current form table
 Case of
  // ...
    :(Form event code=On Printing Footer)
  // Se va a imprimir un pie de de página
       If(End selection($vpFormTable->))
  // El código para el último pie de página va aquí
       Else
  // El código para el pie de página va aquí
       End if
 End case
```

#### Ejemplo 

Este método de formulario se utiliza durante la impresión de un informe. Se define la variable *vPie* a imprimir en el área de pie de página de la última página:

```4d
  // [Finances];Método de formulario "Summary"
 Case of
  // ...
    :(Form event code=On Printing Footer)
       If(End selection([Finances]))
          vFooter:="©2001 Acme Corp." // Definir el pie de página de la última página
       Else
          vFooter:="" // Borrar el pie de página para todas las otras páginas
       End if
 End case
```

#### Ver también 

[Before selection](before-selection.md)  
[Form event code](../commands/form-event-code.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PRINT SELECTION](print-selection.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 36 |
| Hilo seguro | &check; |


