---
id: cancel
title: CANCEL
slug: /commands/cancel
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL.Syntax-->**CANCEL**<!-- END REF-->
<!--REF #_command_.CANCEL.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CANCEL.Summary-->El comando **CANCEL** se utiliza en métodos de objeto o de formulario (o en una subrutina) para:

* cancelar un registro nuevo o modificado, para el cual la entrada de datos ha sido inicializada utilizando [ADD RECORD](add-record.md) o [MODIFY RECORD](modify-record.md).<!-- END REF-->
* cancelar un formulario mostrado por intermedio del comando [DIALOG](../commands/dialog.md).
* salir de un formulario que muestra una selección de registros, utilizando [DISPLAY SELECTION](display-selection.md) o [MODIFY SELECTION](modify-selection.md).
* cancelar la impresión de un formulario que está a punto de ser impreso utilizando el comando [Print form](../commands/print-form.md) (ver a continuación).

En el contexto de entrada de datos, **CANCEL** efectúa la misma acción que si el usuario hubiera presionado la tecla de cancelación (**Esc**).

**CANCEL** se ejecuta con frecuencia como resultado de la selección de un comando de menú. **CANCEL** también se utiliza con frecuencia en el método de objeto de un botón “sin acción”.

Este comando también se usa en el metódo de la caja de cierre opcional para el comando [Open window](open-window.md). Si hay una ventana con caja de control de menú, se puede llamar a [ACCEPT](accept.md) o **CANCEL**, en el método a ejecutar, cuando se haga doble clic en en la caja de control de menú o se seleccione el comando de menú **Cerrar**.

**CANCEL** no puede estar en la cola. Ejecutar dos comandos **CANCEL** en una fila desde dentro de un método en respuesta a un evento tendría el mismo efecto que ejecutar sólo uno.

Finalmente, este comando puede ser utilizado en el evento de formulario On Printing Detail, cuando se utiliza el comando [Print form](../commands/print-form.md). En este contexto, el comando **CANCEL** suspende la impresión del formulario que está a punto de imprimirse, luego retoma en la siguiente página. Este mecanismo puede utilizarse para administrar la impresión de formularios cuando no hay suficiente espacio o en caso de que sea necesaria una ruptura de página.

**Nota:** esta operación es diferente de la del comando [PAGE BREAK](page-break.md)(\*) que cancela TODOS los formularios que están en espera de impresión.

##### Modo sin interfaz 

El comando **CANCEL** se permite en modo sin interfaz, en el contexto de las áreas fuera de pantalla creadas por *VP Run offscreen area* o [WA Run offscreen area](wa-run-offscreen-area.md). 

#### Ejemplo 

Consulte el ejemplo del comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER"). 

#### Variables y conjuntos del sistema 

Cuando el comando CANCEL se ejecuta (anulación de formulario o de impresión), la variable sistema OK toma el valor 0.

#### Ver también 

[ACCEPT](accept.md)  
[PAGE BREAK](page-break.md)  
[Print form](../commands/print-form.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 270 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


