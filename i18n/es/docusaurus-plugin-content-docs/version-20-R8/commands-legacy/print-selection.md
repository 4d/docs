---
id: print-selection
title: PRINT SELECTION
slug: /commands/print-selection
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SELECTION.Syntax-->**PRINT SELECTION** ( {*tabla*}{;}{* | >} )<!-- END REF-->
<!--REF #_command_.PRINT SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual imprimir la selección, o Tabla por defecto, si se omite |
| * &#124; > | Operador | &#8594;  | * para eliminar las cajas de diálogo de impresión, o > para no reiniciar los parámetros de impresión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PRINT SELECTION.Summary-->PRINT SELECTION imprime la selección actual de *tabla*.<!-- END REF--> Los registros se imprimen en el formulario de salida actual de la tabla del proceso actual. PRINT SELECTION realiza la misma acción que el comando Imprimir del entorno Usuario. Si la selección está vacía, PRINT SELECTION no hace nada.

Por defecto, PRINT SELECTION muestra la caja de diálogo de trabajos de impresión antes de la impresión. Si el usuario cancela la caja de diálogo, el comando se cancela y el informe no se imprime.

Puede eliminar esta caja de diálogo utilizando el parámetro opcional asterisco (*\**) o el parámetro opcional “mayor que” (*\>*):   
• El parámetro *\** provoca un trabajo de impresión utilizando los parámetros de impresión actuales (parámetros por defecto o aquellos definidos por los comandos *\_o\_PAGE SETUP* y/o [SET PRINT OPTION](set-print-option.md)).   
• Además, el parámetro *\>* provoca un trabajo de impresión sin reinicializar los parámetros de impresión actuales. Este parámetro es útil para ejecutar varias llamadas sucesivas a PRINT SELECTION (por ejemplo al interior de un bucle) conservando los parámetros de impresión personalizados previamente definidos. Para ver un ejemplo de utilización de este parámetro, consulte la descripción del comando [PRINT RECORD](print-record.md).

Durante la impresión, el método de formulario de salida y los métodos de objeto del formulario se ejecutan en función de los eventos seleccionados en las propiedades de los formularios y de los objetos, en el entorno Diseño, así como de los eventos generados efectivamente:

* Un evento On Header se genera justo antes que el área de encabezado se imprima.
* Un evento On Printing Detail se genera justo antes que un registro se imprima.
* Un evento On Printing Break se genera justo antes que un área de ruptura se imprima.
* Un evento On Printing Footer se genera justo antes que un pie de página se imprima.

Puede saber si PRINT SELECTION está imprimiendo el primer encabezado probando [Before selection](before-selection.md) durante un evento On Header. Igualmente puede verificar el último pie de página, probando [End selection](end-selection.md) durante un evento On Printing Footer. Para mayor información, consulte la descripción de estos comandos, como también de los comandos [Form event code](../commands/form-event-code.md) y [Level](level.md).

Para imprimir una selección ordenada con subtotales o rupturas utilizando PRINT SELECTION, debe primero ordenar la selección. Luego, en cada área de ruptura del informe, incluir una variable con un método de objeto que asigne el subtotal a la variable. Igualmente puede utilizar funciones estadísticas y aritméticas como [Sum](sum.md) y [Average](average.md) para asignar valores a las variables. Para mayor información, consulte las descripciones de [Subtotal](subtotal.md), [BREAK LEVEL](break-level.md) y [ACCUMULATE](accumulate.md).

**Advertencia:** no utilice el comando [PAGE BREAK](page-break.md) con el comando PRINT SELECTION. [PAGE BREAK](page-break.md) está reservado para ser utilizado con el comando [Print form](../commands/print-form.md).

Después de un llamado a PRINT SELECTION, la variable OK toma el valor 1 si la impresión se ha completado. Si la impresión fue interrumpida, la variable OK toma el valor 0 (cero) (por ejemplo si el usuario hizo clic en Cancelar en la caja de diálogo de impresión).

**4D Server:** este comando puede ejecutarse en 4D Server en el marco de un procedimiento almacenado. En este contexto:

* Asegúrese que ninguna caja de diálogo aparezca en el equipo servidor (excepto para una necesidad específica). Para hacer esto, es necesario llamar al comando con el parámetro *\** o *\>*.
* En caso de un problema con la impresora (sin papel, impresora desconectada, etc.), no se genera mensaje de error.

#### Ejemplo 

El siguiente ejemplo selecciona todos los registros en la tabla \[Personas\]. El comando [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") es entonces llamado para mostrar los registros y permitir al usuario seleccionar los registros a imprimir. Finalmente, utiliza los registros seleccionados con el comando [USE SET](use-set.md "USE SET"), y los imprime con PRINT SELECTION:

```4d
 ALL RECORDS([Personas]) // Selección de todos los registros
 DISPLAY SELECTION([Personas];*) // Visualización de los registros
 USE SET("UserSet") // Utilizar únicamente los registros seleccionados por el usuario
 PRINT SELECTION([Personas]) // Imprimir los registros seleccionados por el usuario
```

#### Ver también 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level](level.md)  
[Subtotal](subtotal.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 60 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


