---
id: page-break
title: PAGE BREAK
slug: /commands/page-break
displayed_sidebar: docs
---

<!--REF #_command_.PAGE BREAK.Syntax-->**PAGE BREAK** {( * | > )}<!-- END REF-->
<!--REF #_command_.PAGE BREAK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * &#124; > | &#8594;  | * Cancela la impresión iniciada por Print form, o > Manda un trabajo de impresión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PAGE BREAK.Summary-->PAGE BREAK dispara la impresión de datos enviados a la impresora y provocar un salto de página.<!-- END REF--> PAGE BREAK se utiliza conjuntamente con *form* (en el contexto del evento de formulario On Printing Detail) para forzar saltos de página e imprimir la última página creada en memoria. No utilice PAGE BREAK con el comando [PRINT SELECTION](print-selection.md "PRINT SELECTION"). Es mejor utilizar [Subtotal](subtotal.md "Subtotal") o [BREAK LEVEL](break-level.md "BREAK LEVEL") con el parámetro opcional para generar saltos de página.

Los parámetros *\** y *\>* son opcionales.

El parámetro *\** le permite cancelar un trabajo de impresión iniciado por el comando [Print form](../commands/print-form.md "Print form"). La ejecución de este comando detiene inmediatamente los trabajos de impresión en progreso.

**Nota:** bajo Windows, este mecanismo puede ser trastornado por las propiedades de cola de espera del servidor de impresión. Si la impresora se configura para comenzar la impresión de inmediatamente, la cancelación no será efectiva. Para que el comando PAGE BREAK(\*) funcione correctamente, es preferible elegir la propiedad "Iniciar impresión cuando la última página haya entrado en la cola" de la impresora.

El parámetro *\>* modifica el funcionamiento del comando PAGE BREAK. Esta sintaxis tiene dos efectos:

* Mantiene la impresión abierta hasta que el comando PAGE BREAK se ejecuta nuevamente sin un parámetro.
* Da prioridad al trabajo de impresión. Ninguna otra impresión puede llevarse a cabo hasta que el trabajo de impresión haya terminado.  
La segunda opción es particularmente útil cuando se utiliza con un trabajo de impresión en cola. El parámetro > garantiza que el trabajo de impresión será realizado a partir de un solo archivo. Esto reducirá el tiempo de impresión.

**Nota:** durante una impresión de pantalla, si el usuario hace clic en Cancelar en la caja de diálogo de previsualización, el comando PAGE BREAK define la variable sistema OK en 0.

#### Ejemplo 1 

Ver el ejemplo del comando [Print form](../commands/print-form.md "Print form").

#### Ejemplo 2 

Consulte el ejemplo del comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER").

#### Ver también 

[CANCEL](cancel.md)  
[Print form](../commands/print-form.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 6 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


