---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

## Descripción 

El comando **ACCEPT** se utiliza en métodos de objeto o de formulario (o en subrutinas) para:

* validar un registro o subregistro creado o modificado, para el cual la entrada de datos ha sido inicializada utilizando [ADD RECORD](../commands/add-record), [MODIFY RECORD](../commands/modify-record), *\_o\_ADD SUBRECORD* o *\_o\_MODIFY SUBRECORD*.
* validar un formulario mostrado por el comando [DIALOG](../commands/dialog).
* salir de un formulario que muestra una selección de registros, utilizando [DISPLAY SELECTION](../commands/display-selection) o [MODIFY SELECTION](../commands/modify-selection).

<!--REF #_command_.ACCEPT.Summary-->**ACCEPT** efectúa la misma acción que si un usuario hubiera presionado la tecla **Intro**.<!-- END REF--> Después de que el formulario es aceptado, la variable sistema OK toma el valor 1.

**ACCEPT** se ejecuta con frecuencia como resultado de la selección de un comando de menú. **ACCEPT** es igualmente utilizado en el método de objeto de un botón “sin acción”.

También se usa a menudo en el método de caja cierre opcional para el comando [Open window](../commands/open-window). Si hay una caja del menú de control en una ventana, se puede llamar a **ACCEPT** o [CANCEL](../commands/cancel), en el método a ejecutar, cuando se hace doble clic en la caja del menú de control o se elige el comando del menú de cierre.

**ACCEPT** no puede encadenarse. En respuesta a un evento, la ejecución de dos comandos **ACCEPT** en una fila desde dentro de un método tendría el mismo efecto que la ejecución de uno.

### Modo sin interfaz 

El comando **ACCEPT** se permite en modo sin interfaz, en el contexto de las áreas fuera de pantalla creadas por *VP Run offscreen area* o [WA Run offscreen area](../commands/wa-run-offscreen-area). 

## Ver también 

[CANCEL](../commands/cancel)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 269 |
| Hilo seguro | no |
| Modifica variables | OK |



