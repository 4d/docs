---
id: cancel
title: CANCEL
slug: /commands/cancel
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL.Syntax-->**CANCEL**<!-- END REF-->
<!--REF #_command_.CANCEL.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2003|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

El comando **CANCEL** se utiliza en métodos de objeto o de formulario (o en una subrutina) para:

* cancelar un registro nuevo o modificado, para el cual la entrada de datos ha sido inicializada utilizando [ADD RECORD](../commands/add-record) o [MODIFY RECORD](../commands/modify-record).
* cancelar un formulario mostrado por intermedio del comando [DIALOG](../commands/dialog).
* salir de un formulario que muestra una selección de registros, utilizando [DISPLAY SELECTION](../commands/display-selection) o [MODIFY SELECTION](../commands/modify-selection).
* cancelar la impresión de un formulario que está a punto de ser impreso utilizando el comando [Print form](../commands/print-form) (ver a continuación).

<!--REF #_command_.CANCEL.Summary-->En el contexto de entrada de datos, **CANCEL** efectúa la misma acción que si el usuario hubiera presionado la tecla de cancelación (**Esc**).<!-- END REF-->

**CANCEL** se ejecuta con frecuencia como resultado de la selección de un comando de menú. **CANCEL** también se utiliza con frecuencia en el método de objeto de un botón “sin acción”.

Este comando también se usa en el metódo de la caja de cierre opcional para el comando [Open window](../commands/open-window). Si hay una ventana con caja de control de menú, se puede llamar a [ACCEPT](../commands/accept) o **CANCEL**, en el método a ejecutar, cuando se haga doble clic en en la caja de control de menú o se seleccione el comando de menú **Cerrar**.

**CANCEL** no puede estar en la cola. Ejecutar dos comandos **CANCEL** en una fila desde dentro de un método en respuesta a un evento tendría el mismo efecto que ejecutar sólo uno.

Finalmente, este comando puede ser utilizado en el evento de formulario On Printing Detail, cuando se utiliza el comando [Print form](../commands/print-form). En este contexto, el comando **CANCEL** suspende la impresión del formulario que está a punto de imprimirse, luego retoma en la siguiente página. Este mecanismo puede utilizarse para administrar la impresión de formularios cuando no hay suficiente espacio o en caso de que sea necesaria una ruptura de página.

**Nota:** esta operación es diferente de la del comando [PAGE BREAK](../commands/page-break)(\*) que cancela TODOS los formularios que están en espera de impresión.

### Modo sin interfaz 

El comando **CANCEL** se permite en modo sin interfaz, en el contexto de las áreas fuera de pantalla creadas por *VP Run offscreen area* o [WA Run offscreen area](../commands/wa-run-offscreen-area). 

## Ejemplo 

Consulte el ejemplo del comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER"). 

## Variables y conjuntos del sistema 

Cuando el comando CANCEL se ejecuta (anulación de formulario o de impresión), la variable sistema OK toma el valor 0.

## Ver también 

[ACCEPT](../commands/accept)  
[PAGE BREAK](../commands/page-break)  
[Print form](../commands/print-form)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 270 |
| Hilo seguro | no |
| Modifica variables | OK |



