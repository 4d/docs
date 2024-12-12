---
id: print-record
title: PRINT RECORD
slug: /commands/print-record
displayed_sidebar: docs
---

<!--REF #_command_.PRINT RECORD.Syntax-->**PRINT RECORD** ( {*tabla*}{;}{* | >} )<!-- END REF-->
<!--REF #_command_.PRINT RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual imprimir el registro actual o Tabla por defecto, si se omite |
| * &#124; > | Operador | &#8594;  | * para suprimir las cajas de diálogo de impresión, o > para no reiniciar los parámetros de impresión |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.PRINT RECORD.Summary-->**PRINT RECORD** imprime el registro actual de *tabla*, sin modificar la selección actual.<!-- END REF--> El formulario de salida actual se utiliza para la impresión. Si no hay registro actual para *tabla*, **PRINT RECORD** no hace nada.

Puede imprimir subformularios y objetos externos con el comando **PRINT RECORD**. Esto no es posible con [Print form](print-form.md).

**Nota:** si hay modificaciones en el registro que no han sido guardadas, este comando imprime los valores de los campos modificados, no los valores en disco.

Por defecto, **PRINT RECORD** muestra la caja de diálogo de trabajos de impresión antes de la impresión. Si el usuario cancela la cajas de diálogo, el comando se cancela y no se imprime el registro.  
Puede suprimir esta caja de diálogo utilizando el parámetro opcional asterisco (*\**) o el parámetro opcional “mayor que” (*\>*):

* El parámetro *\** produce un trabajo de impresión utilizando los parámetros de impresión actual (parámetros por defecto o definidos por los comandos *\_o\_PAGE SETUP* y/o [SET PRINT OPTION](set-print-option.md)).
* Además, el parámetro *\>* produce un trabajo de impresión sin reinicializar los parámetros de impresión actual. Este parámetro es útil para ejecutar varias llamadas consecutivas a **PRINT RECORD** (por ejemplo al interior de un bucle) mientras mantiene los parámetros de impresión personalizados definidos previamente.

**4D Server:** este comando puede ejecutarse en 4D Server dentro del marco de un procedimiento almacenado. En este contexto:

* Asegúrese que ninguna caja de diálogo aparezca en el equipo servidor (excepto para una necesidad específica). Para hacer esto, es necesario llamar al comando con el parámetro *\** o *\>*.
* En caso de un problema con la impresora (sin papel, impresora desconectada, etc.), no se genera mensaje de error.

#### Ejemplo 1 

 El siguiente ejemplo imprime el registro actual de la tabla \[Facturas\]. El código está en el método de objeto de un botón **Imprimir** en el formulario de entrada. Cuando el usuario hace clic en el botón, el registro se imprime utilizando un formulario de salida diseñado para este propósito. 

```4d
 FORM SET OUTPUT([Facturas];"Print One From Data Entry") // Selección del formulario para impresión
 PRINT RECORD([Facturas];*) // Imprimir las facturas(sin mostrar diálogos de impresión)
 FORM SET OUTPUT([Facturas];"Standard Output") // Restauración del formulario de salida anterior
```

#### Ejemplo 2 

El siguiente ejemplo imprime el mismo registro actual en dos formularios diferentes. El código está en el método de objeto de un botón **Imprimir** en el formulario de entrada. Usted quiere definir parámetros de impresión personalizados y luego utilizarlos en dos formularios. 

```4d
 PRINT SETTINGS //El usuario define los parámetros de impresión
 If(OK=1)
    FORM SET OUTPUT([Empleados];"Detallado") //Usar el primer formulario de impresión
    PRINT RECORD([Empleados];>) //Imprimir utilizando los parámetros definidos por el usuario
    FORM SET OUTPUT([Empleados];"Simple") //Usar el segundo formulario de impresión
    PRINT RECORD([Empleados];>) //Imprimir utilizando los parámetros definidos por el usuario
    FORM SET OUTPUT([Empleados];"Output") //Restaurar el formulario de salida por defecto
 End if
```

#### Ver también 

[Print form](print-form.md)  