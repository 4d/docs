---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ACCEPT.Summary-->El comando **ACCEPT** se utiliza en métodos de objeto o de formulario (o en subrutinas) para:

* validar un registro o subregistro creado o modificado, para el cual la entrada de datos ha sido inicializada utilizando [ADD RECORD](add-record.md), [MODIFY RECORD](modify-record.md), *\_o\_ADD SUBRECORD* o *\_o\_MODIFY SUBRECORD*.<!-- END REF-->
* validar un formulario mostrado por el comando [DIALOG](dialog.md).
* salir de un formulario que muestra una selección de registros, utilizando [DISPLAY SELECTION](display-selection.md) o [MODIFY SELECTION](modify-selection.md).

**ACCEPT** efectúa la misma acción que si un usuario hubiera presionado la tecla **Intro**. Después de que el formulario es aceptado, la variable sistema OK toma el valor 1.

**ACCEPT** se ejecuta con frecuencia como resultado de la selección de un comando de menú. **ACCEPT** es igualmente utilizado en el método de objeto de un botón “sin acción”.

También se usa a menudo en el método de caja cierre opcional para el comando [Open window](open-window.md). Si hay una caja del menú de control en una ventana, se puede llamar a **ACCEPT** o [CANCEL](cancel.md), en el método a ejecutar, cuando se hace doble clic en la caja del menú de control o se elige el comando del menú de cierre.

**ACCEPT** no puede encadenarse. En respuesta a un evento, la ejecución de dos comandos **ACCEPT** en una fila desde dentro de un método tendría el mismo efecto que la ejecución de uno.

##### Modo sin interfaz 

El comando **ACCEPT** se permite en modo sin interfaz, en el contexto de las áreas fuera de pantalla creadas por *VP Run offscreen area* o [WA Run offscreen area](wa-run-offscreen-area.md). 

#### Ver también 

[CANCEL](cancel.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 269 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


